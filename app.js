(() => {
const { SUBJECTS, PAIRS, BOOKS, ERA_STORIES, AUTHORS } = window.KNOWLEDGE_DATA

const state = {
  subject: 'all', era: 'all', region: 'all', timelineQuery: '', savedOnly: false,
  mapMode: 'atlas', bookSubject: 'all', bookRegion: 'all', status: 'all', bookQuery: '',
  coreOnly: false
}

// 首批24位核心人物ID
const CORE_AUTHORS = new Set([
  'quyuan','libai','caoxueqin','luxun',
  'xunzi','ibnkhaldun','durkheim','feixiaotong',
  'shangyang','plato','huangzongxi','rawls',
  'simaqian','herodotus','simaguang','braudel',
  'confucius','zhuangzi','wangyangming','descartes',
  'zhangsunwuji','montesquieu','shenjiaben','hart'
])
const saved = new Set(JSON.parse(localStorage.getItem('chronicle_saved') || '[]'))
const progress = JSON.parse(localStorage.getItem('chronicle_progress') || '{}')
const hasLocalStateServer = ['127.0.0.1', 'localhost'].includes(window.location.hostname)
const $ = (selector, root = document) => root.querySelector(selector)
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)]
const subject = id => SUBJECTS.find(item => item.id === id)
const authorById = id => AUTHORS.find(item => item.id === id)
const yearLabel = year => year < 0 ? `公元前${Math.abs(year)}年` : `${year}年`
const gapLabel = pair => {
  const distance = Math.abs(pair.china.year - pair.world.year)
  return distance === 0 ? '同年对照' : `相距 ${distance} 年`
}

const persist = () => {
  localStorage.setItem('chronicle_saved', JSON.stringify([...saved]))
  localStorage.setItem('chronicle_progress', JSON.stringify(progress))
  if (hasLocalStateServer) {
    fetch('/api/state', {
      method: 'POST', headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({saved: [...saved], progress})
    }).catch(() => {})
  }
}

async function syncServerState() {
  if (!hasLocalStateServer) return
  try {
    const response = await fetch('/api/state')
    if (!response.ok) return
    const remote = await response.json()
    if (Array.isArray(remote.saved)) remote.saved.forEach(id => saved.add(id))
    if (remote.progress && typeof remote.progress === 'object') Object.assign(progress, remote.progress)
    localStorage.setItem('chronicle_saved', JSON.stringify([...saved]))
    localStorage.setItem('chronicle_progress', JSON.stringify(progress))
    renderTimeline()
    renderBooks()
  } catch {}
}

function authorHaystack(author) {
  return [author.name, author.alias, author.period, author.summary, author.life, author.context,
    ...author.style, ...author.ideas,
    ...author.works.flatMap(work => [work.title, work.year, work.intro])].join(' ').toLowerCase()
}

function currentAuthors({ignoreEra = false} = {}) {
  const query = state.timelineQuery.trim().toLowerCase()
  const subj = state.subject
  return AUTHORS.filter(author =>
    (subj === 'all' || (author.subjects || [author.subject]).includes(subj)) &&
    (ignoreEra || state.era === 'all' || author.era === state.era) &&
    (state.region === 'all' || author.region === state.region) &&
    (!state.coreOnly || CORE_AUTHORS.has(author.id)) &&
    (!query || authorHaystack(author).includes(query))
  ).sort((a, b) => a.year - b.year)
}

function renderSubjectFilters(target, key) {
  const root = $(target)
  const options = [{id: 'all', name: '全部', color: '#c8aa6a'}, ...SUBJECTS]
  root.innerHTML = options.map(item => `
    <button class="subject-chip ${state[key] === item.id ? 'active' : ''}"
      style="--subject-color:${item.color}" data-subject="${item.id}">${item.name}</button>`).join('')
  root.onclick = event => {
    const button = event.target.closest('[data-subject]')
    if (!button) return
    state[key] = button.dataset.subject
    renderSubjectFilters(target, key)
    if (key === 'subject') { renderMap(); renderTimeline() } else renderBooks()
  }
}

function relationLabel(from, to) {
  const direct = from.links.find(link => link[0] === to.id) || to.links.find(link => link[0] === from.id)
  return direct ? direct[1] : '时代推进'
}

function flowLane(subjectData, authors) {
  if (!authors.length) return ''
  const nodes = authors.map((author, index) => {
    const connector = index < authors.length - 1
      ? `<span class="flow-link"><i></i><small>${relationLabel(author, authors[index + 1])}</small></span>` : ''
    return `<button class="flow-person ${author.region}" data-author="${author.id}">
      <span>${author.region === 'china' ? '中' : '世'}</span><b>${author.name}</b><small>${author.dates}</small>
    </button>${connector}`
  }).join('')
  return `<div class="flow-lane" style="--subject-color:${subjectData.color}">
    <div class="flow-title"><span>${subjectData.glyph}</span><b>${subjectData.name}</b><small>${authors.length} 位人物</small></div>
    <div class="flow-scroll">${nodes}</div>
  </div>`
}

function renderIdeaFlow() {
  const subjects = state.subject === 'all' ? SUBJECTS : [subject(state.subject)]
  const list = currentAuthors({ignoreEra: true})
  $('#ideaFlow').innerHTML = `<div class="flow-heading"><small>THREADS OF INFLUENCE</small><strong>思想与文体如何接力</strong><p>连线表示继承、改写或值得对照的问题，不等同于直接师承。</p></div>` +
    subjects.map(item => flowLane(item, list.filter(author => (author.subjects || [author.subject]).includes(item.id)))).join('')
}

function renderEraRail() {
  const available = currentAuthors({ignoreEra: true})
  $('#eraRail').innerHTML = `<button class="${state.era === 'all' ? 'active' : ''}" data-era="all"><b>全时段</b><small>${available.length} 人</small></button>` +
    ERA_STORIES.map(era => {
      const count = available.filter(author => author.era === era.id).length
      return `<button class="${state.era === era.id ? 'active' : ''}" data-era="${era.id}" ${count ? '' : 'disabled'}>
        <b>${era.name}</b><small>${era.range} · ${count} 人</small></button>`
    }).join('')
}

function authorCard(author) {
  const discipline = subject(author.subject)
  const work = author.works[0]
  return `<article class="author-card ${author.region}" style="--subject-color:${discipline.color}" data-author="${author.id}" tabindex="0">
    <div class="author-card-top"><span class="author-monogram">${author.name.slice(0, 1)}</span><div><small>${author.period}</small><h3>${author.name}</h3><p>${author.dates} · ${author.alias}</p></div><i>${author.region === 'china' ? '中国' : '全球'}</i></div>
    <p class="author-summary">${author.summary}</p>
    <div class="author-traits">${author.style.slice(0, 2).map(item => `<span>${item}</span>`).join('')}</div>
    <div class="featured-work"><small>代表作 · ${work.year}</small><b>《${work.title}》</b><p>${work.intro}</p></div>
    <div class="author-card-foot"><span>${author.ideas[0]}</span><b>查看人物全貌 →</b></div>
  </article>`
}

function renderMap() {
  const list = currentAuthors()
  renderIdeaFlow()
  renderEraRail()
  $('#knowledgeMap').innerHTML = ERA_STORIES
    .filter(era => state.era === 'all' || state.era === era.id)
    .map(era => {
      const people = list.filter(author => author.era === era.id)
      if (!people.length) return ''
      return `<section class="era-chapter" id="era-${era.id}">
        <div class="era-story"><span>${era.range}</span><small>${era.kicker}</small><h3>${era.name}</h3><p>${era.context}</p>
          <dl><div><dt>时代文风 / 方法</dt><dd>${era.style}</dd></div><div><dt>关键转向</dt><dd>${era.shift}</dd></div></dl>
        </div>
        <div class="era-people"><div class="era-count"><span></span><b>${people.length} 位代表人物</b></div><div class="author-grid">${people.map(authorCard).join('')}</div></div>
      </section>`
    }).join('')
  $('#knowledgeMap').classList.toggle('hidden', !list.length)
  $('#mapEmpty').classList.toggle('hidden', !!list.length)
}

function eventCard(side, pair) {
  const event = pair[side]
  const region = side === 'china' ? '中国' : '全球'
  return `<article class="event-card" data-detail="${pair.id}" data-side="${side}">
    <div class="event-top"><span class="event-year">${yearLabel(event.year)}</span><button class="event-save ${saved.has(pair.id) ? 'saved' : ''}" data-save="${pair.id}" aria-label="收藏">★</button></div>
    <h3>${event.title}</h3><div class="event-person">${event.person} · ${region}</div><p>${event.text}</p></article>`
}

function renderTimeline() {
  const query = state.timelineQuery.trim().toLowerCase()
  const filtered = PAIRS.filter(pair => {
    const haystack = [pair.china.title, pair.china.person, pair.china.text, pair.world.title,
      pair.world.person, pair.world.text, pair.question].join(' ').toLowerCase()
    return (state.subject === 'all' || pair.subject === state.subject) &&
      (state.era === 'all' || pair.era === state.era) &&
      (!state.savedOnly || saved.has(pair.id)) && (!query || haystack.includes(query))
  }).sort((a, b) => Math.min(a.china.year, a.world.year) - Math.min(b.china.year, b.world.year))
  $('#timeline').innerHTML = filtered.map(pair => {
    const discipline = subject(pair.subject)
    return `<div class="timeline-row"><div class="event-side china-side">${eventCard('china', pair)}</div>
      <div class="axis-node"><div class="node-core"><span class="node-glyph" style="background:${discipline.color}">${discipline.glyph}</span><small>${discipline.name}</small><b>${gapLabel(pair)}</b></div></div>
      <div class="event-side world-side">${eventCard('world', pair)}</div></div>`
  }).join('')
  $('#timeline').classList.toggle('hidden', !filtered.length)
  $('#timelineEmpty').classList.toggle('hidden', !!filtered.length)
  updateSavedCount()
}

function openAuthor(id) {
  const author = authorById(id)
  if (!author) return
  const discipline = subject(author.subject)
  const allSubjects = (author.subjects || [author.subject]).map(sid => subject(sid)).filter(Boolean)
  const subjTags = allSubjects.length > 1 ? `<span class="drawer-subjects">${allSubjects.map(s => `<span style="background:${s.color}20;color:${s.color};border:1px solid ${s.color}40;padding:2px 8px;border-radius:99px;font-size:12px;margin-right:6px">${s.name}</span>`).join('')}</span>` : ''
  const relations = author.links.map(([targetId, label]) => {
    const target = authorById(targetId)
    return target ? `<button class="relation-card" data-author="${target.id}"><span>${label}</span><b>${target.name}</b><small>${target.period} →</small></button>` : ''
  }).join('')
  $('#drawerContent').innerHTML = `
    <div class="author-drawer-head" style="--subject-color:${discipline.color}"><span class="author-hero-mark">${author.name.slice(0, 1)}</span>
      <div><span class="drawer-subject">${discipline.name} · ${author.region === 'china' ? '中国' : '全球'}</span>${subjTags}<h2>${author.name}</h2><div class="drawer-person">${author.dates} · ${author.period}</div></div></div>
    <p class="drawer-deck">${author.summary}</p>
    <div class="drawer-section"><small>时代坐标</small><p>${author.context}</p></div>
    <div class="drawer-section"><small>生平经历</small><p>${author.life}</p></div>
    <div class="drawer-section"><small>文风 / 论证方式</small><div class="detail-tags">${author.style.map(item => `<span>${item}</span>`).join('')}</div></div>
    <div class="drawer-section"><small>核心思想</small><div class="idea-list">${author.ideas.map((item, index) => `<div><i>0${index + 1}</i><b>${item}</b></div>`).join('')}</div></div>
    <div class="drawer-section"><small>代表作与内容入口</small><div class="work-list">${author.works.map(work => `<article><div><b>《${work.title}》</b><span>${work.year}</span></div><p>${work.intro}</p></article>`).join('')}</div></div>
    ${relations ? `<div class="drawer-section"><small>沿脉络继续阅读</small><div class="relation-list">${relations}</div><p class="relation-note">这里同时包含历史影响与解释性对照；标签说明了两者为何相连。</p></div>` : ''}`
  openDrawerShell()
}

function openEvent(pairId, side) {
  const pair = PAIRS.find(item => item.id === pairId)
  const discipline = subject(pair.subject)
  const current = pair[side]
  const other = pair[side === 'china' ? 'world' : 'china']
  $('#drawerContent').innerHTML = `<span class="drawer-subject" style="--subject-color:${discipline.color}">${discipline.name} · ${side === 'china' ? '中国' : '全球'}</span>
    <h2>${current.title}</h2><div class="drawer-person">${yearLabel(current.year)} · ${current.person}</div>
    <div class="drawer-section"><small>节点说明</small><p>${current.text}</p></div>
    <div class="drawer-section"><small>对照阅读问题</small><p>${pair.question}</p><div class="drawer-pair"><div><span>${yearLabel(current.year)}</span><b>${current.title}</b></div><div><span>${yearLabel(other.year)}</span><b>${other.title}</b></div></div></div>
    <div class="drawer-section"><small>建议动作</small><p>先用自己的话回答上面的问题，再分别找一条支持和一条反对你的证据。收藏这组节点，之后从书架进入原典。</p></div>`
  openDrawerShell()
}

function openDrawerShell() {
  $('#detailDrawer').classList.add('open')
  $('#drawerBackdrop').classList.add('open')
  $('#detailDrawer').setAttribute('aria-hidden', 'false')
  $('#detailDrawer').scrollTop = 0
}
function closeDrawer() {
  $('#detailDrawer').classList.remove('open')
  $('#drawerBackdrop').classList.remove('open')
  $('#detailDrawer').setAttribute('aria-hidden', 'true')
}
function toggleSaved(id) { saved.has(id) ? saved.delete(id) : saved.add(id); persist(); renderTimeline() }
function updateSavedCount() { $('#savedCount').textContent = saved.size }

function renderBooks() {
  const query = state.bookQuery.trim().toLowerCase()
  const list = BOOKS.filter(book => {
    const readingStatus = progress[book.id] || 'unread'
    const haystack = [book.title, book.author, book.note, book.year].join(' ').toLowerCase()
    return (state.bookSubject === 'all' || book.subject === state.bookSubject) &&
      (state.bookRegion === 'all' || book.region === state.bookRegion) &&
      (state.status === 'all' || readingStatus === state.status) && (!query || haystack.includes(query))
  })
  $('#bookGrid').innerHTML = list.map(book => {
    const discipline = subject(book.subject)
    const readingStatus = progress[book.id] || 'unread'
    return `<article class="book-card" style="--subject-color:${discipline.color}"><div class="book-meta"><span class="region-tag">${book.region === 'china' ? '中国' : '全球'} · ${discipline.name}</span><span>${book.year} · ${book.level}</span></div>
      <h3>《${book.title}》</h3><div class="book-author">${book.author}</div><p class="book-note">${book.note}</p>
      <div class="book-actions" data-book="${book.id}"><button data-status="want" class="${readingStatus === 'want' ? 'active' : ''}">想读</button><button data-status="reading" class="${readingStatus === 'reading' ? 'active' : ''}">在读</button><button data-status="done" class="${readingStatus === 'done' ? 'active' : ''}">读完</button></div></article>`
  }).join('')
  $('#bookEmpty').classList.toggle('hidden', !!list.length)
  updateProgress()
}
function setBookStatus(id, status) { progress[id] = progress[id] === status ? 'unread' : status; persist(); renderBooks() }
function updateProgress() {
  const values = Object.values(progress)
  const want = values.filter(value => value === 'want').length
  const reading = values.filter(value => value === 'reading').length
  const done = values.filter(value => value === 'done').length
  const percentage = Math.round(done / BOOKS.length * 100)
  $('#wantCount').textContent = want; $('#readingCount').textContent = reading; $('#doneCount').textContent = done
  $('#readPercent').textContent = `${percentage}%`
  $('#progressRing').style.background = `conic-gradient(var(--gold) ${percentage}%,#232832 ${percentage}%)`
  $('#progressHeadline').textContent = done ? `已经读完 ${done} 本，继续生长` : (reading ? `${reading} 本正在阅读` : '从第一本书开始')
}

function setMapMode(mode) {
  state.mapMode = mode
  $$('[data-map-mode]').forEach(button => button.classList.toggle('active', button.dataset.mapMode === mode))
  $$('[data-map-panel]').forEach(panel => panel.classList.toggle('hidden', panel.dataset.mapPanel !== mode))
}
function switchView(name) {
  $$('[data-view-panel]').forEach(view => view.classList.toggle('active', view.dataset.viewPanel === name))
  $$('[data-view]').forEach(button => button.classList.toggle('active', button.dataset.view === name))
  window.scrollTo({top: name === 'timeline' ? $('#timelineSection').offsetTop - 55 : $('.topbar').offsetHeight, behavior: 'smooth'})
  if (name === 'library') renderBooks()
}

function clearMapFilters() {
  state.subject = 'all'; state.era = 'all'; state.region = 'all'; state.timelineQuery = ''; state.savedOnly = false; state.coreOnly = false
  $('#timelineSearch').value = ''; $('#eraFilter').value = 'all'; $('#mapRegionFilter').value = 'all'
  $('#savedOnly').classList.remove('is-on'); $('#coreToggle').checked = false
  renderSubjectFilters('#subjectFilters', 'subject'); renderMap(); renderTimeline()
}

function bind() {
  document.addEventListener('click', event => {
    const view = event.target.closest('[data-view]'); if (view) switchView(view.dataset.view)
    const jump = event.target.closest('[data-jump]'); if (jump) document.getElementById(jump.dataset.jump).scrollIntoView({behavior: 'smooth'})
    const mode = event.target.closest('[data-map-mode]'); if (mode) setMapMode(mode.dataset.mapMode)
    const era = event.target.closest('[data-era]'); if (era && !era.disabled) { state.era = era.dataset.era; $('#eraFilter').value = state.era; renderMap(); renderTimeline() }
    const save = event.target.closest('[data-save]')
    if (save) { event.stopPropagation(); toggleSaved(save.dataset.save) }
    else {
      const author = event.target.closest('[data-author]')
      if (author) openAuthor(author.dataset.author)
      else { const detail = event.target.closest('[data-detail]'); if (detail) openEvent(detail.dataset.detail, detail.dataset.side) }
    }
    const status = event.target.closest('[data-status]'); if (status) setBookStatus(status.parentElement.dataset.book, status.dataset.status)
  })
  $('#timelineSearch').oninput = event => { state.timelineQuery = event.target.value; renderMap(); renderTimeline() }
  $('#eraFilter').onchange = event => { state.era = event.target.value; renderMap(); renderTimeline() }
  $('#mapRegionFilter').onchange = event => { state.region = event.target.value; renderMap() }
  $('#savedOnly').onclick = () => { state.savedOnly = !state.savedOnly; $('#savedOnly').classList.toggle('is-on', state.savedOnly); renderTimeline() }
  $('#coreToggle').onchange = event => { state.coreOnly = event.target.checked; renderMap(); renderTimeline() }
  $('#clearTimelineFilters').onclick = clearMapFilters
  $('#clearMapFilters').onclick = clearMapFilters
  $('#bookSearch').oninput = event => { state.bookQuery = event.target.value; renderBooks() }
  $('#regionFilter').onchange = event => { state.bookRegion = event.target.value; renderBooks() }
  $('#statusFilter').onchange = event => { state.status = event.target.value; renderBooks() }
  $('#savedButton').onclick = () => { state.savedOnly = true; $('#savedOnly').classList.add('is-on'); switchView('timeline'); setMapMode('compare'); renderTimeline() }
  $('#drawerClose').onclick = closeDrawer; $('#drawerBackdrop').onclick = closeDrawer
  document.onkeydown = event => { if (event.key === 'Escape') closeDrawer() }
}

function init() {
  $('#authorStat').textContent = AUTHORS.length
  $('#workStat').textContent = AUTHORS.reduce((sum, author) => sum + author.works.length, 0)
  $('#bookStat')?.replaceChildren(document.createTextNode(BOOKS.length))
  renderSubjectFilters('#subjectFilters', 'subject')
  renderSubjectFilters('#bookSubjectFilters', 'bookSubject')
  renderMap(); renderTimeline(); renderBooks(); bind(); syncServerState()
}

init()
})()
