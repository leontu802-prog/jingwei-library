const SUBJECTS = [
  {
    "id": "literature",
    "name": "文学",
    "glyph": "文",
    "color": "#d97a62"
  },
  {
    "id": "sociology",
    "name": "社会学",
    "glyph": "社",
    "color": "#8aa899"
  },
  {
    "id": "politics",
    "name": "政治学",
    "glyph": "政",
    "color": "#c3a261"
  },
  {
    "id": "history",
    "name": "历史学",
    "glyph": "史",
    "color": "#7f9fc1"
  },
  {
    "id": "philosophy",
    "name": "哲学",
    "glyph": "哲",
    "color": "#9a86b8"
  },
  {
    "id": "law",
    "name": "法学",
    "glyph": "法",
    "color": "#b7846e"
  }
];

const PAIRS = [
  {
    "id": "lit-1",
    "subject": "literature",
    "era": "ancient",
    "china": {
      "year": -1050,
      "title": "《诗经》传统形成",
      "person": "先秦诗人群体",
      "text": "风、雅、颂把礼乐秩序、地方生活与个人情感放进共同的声音。"
    },
    "world": {
      "year": -750,
      "title": "荷马史诗定型",
      "person": "荷马传统",
      "text": "《伊利亚特》《奥德赛》以英雄、战争和归乡组织希腊世界的共同记忆。"
    },
    "question": "口传诗歌如何成为一个文明认识自己的方式？"
  },
  {
    "id": "lit-2",
    "subject": "literature",
    "era": "ancient",
    "china": {
      "year": 100,
      "title": "《楚辞》编定与流传",
      "person": "屈原传统、王逸",
      "text": "“骚体”让个人身世、政治理想与神话想象进入汉语抒情传统。"
    },
    "world": {
      "year": 8,
      "title": "《变形记》完成",
      "person": "奥维德",
      "text": "以连续变形故事重述希腊罗马神话，讨论欲望、权力与身份。"
    },
    "question": "神话进入文学后，个人命运如何与政治秩序纠缠？"
  },
  {
    "id": "lit-3",
    "subject": "literature",
    "era": "medieval",
    "china": {
      "year": 760,
      "title": "盛唐诗歌高峰",
      "person": "李白、杜甫、王维",
      "text": "个人经验、战争现实与山水世界共同拓展了古典诗歌的尺度。"
    },
    "world": {
      "year": 800,
      "title": "《贝奥武夫》手稿传统",
      "person": "盎格鲁-撒克逊诗人",
      "text": "英雄史诗在基督教书写与日耳曼口传传统之间保存旧世界。"
    },
    "question": "诗歌怎样同时容纳个人声音与共同体记忆？"
  },
  {
    "id": "lit-4",
    "subject": "literature",
    "era": "medieval",
    "china": {
      "year": 1300,
      "title": "元杂剧繁盛",
      "person": "关汉卿、王实甫",
      "text": "城市演出、角色行当与曲词结合，使舞台成为观察日常伦理的公共空间。"
    },
    "world": {
      "year": 1321,
      "title": "《神曲》完成",
      "person": "但丁",
      "text": "以地狱、炼狱、天堂的旅程整合神学宇宙、政治判断与个人爱。"
    },
    "question": "文学如何借虚构空间审判现实社会？"
  },
  {
    "id": "lit-5",
    "subject": "literature",
    "era": "early-modern",
    "china": {
      "year": 1791,
      "title": "《红楼梦》程甲本刊行",
      "person": "曹雪芹、高鹗、程伟元",
      "text": "家族兴衰、女性群像与日常生活共同构成对盛世内部裂缝的凝视。"
    },
    "world": {
      "year": 1813,
      "title": "《傲慢与偏见》出版",
      "person": "简·奥斯汀",
      "text": "婚姻、财产与判断力在乡绅社会的日常交往中展开。"
    },
    "question": "家庭与婚姻叙事如何显影阶层、财产和性别秩序？"
  },
  {
    "id": "lit-6",
    "subject": "literature",
    "era": "modern",
    "china": {
      "year": 1918,
      "title": "《狂人日记》发表",
      "person": "鲁迅",
      "text": "白话小说借“狂人”的眼睛重审礼教、历史与现代主体。"
    },
    "world": {
      "year": 1922,
      "title": "《尤利西斯》出版",
      "person": "詹姆斯·乔伊斯",
      "text": "把一天的城市漫游写成意识、语言和现代生活的百科全书。"
    },
    "question": "现代文学为什么要打碎旧的叙述语言？"
  },
  {
    "id": "lit-7",
    "subject": "literature",
    "era": "medieval",
    "china": {
      "year": 1075,
      "title": "苏轼诗词文全盛",
      "person": "苏轼",
      "text": "以诗文书画的融通扩展文人表达的自由边界。"
    },
    "world": {
      "year": 1170,
      "title": "《源氏物语》宫廷女性写作",
      "person": "紫式部",
      "text": "以物语叙事展开宫廷生活与情感世界。"
    },
    "question": "文人表达如何在不同的社会结构中争取个人声音？"
  },
  {
    "id": "soc-1",
    "subject": "sociology",
    "era": "ancient",
    "china": {
      "year": -300,
      "title": "\"群\"与礼的社会思想",
      "person": "荀子",
      "text": "从人的欲望、分工与礼义出发解释群体秩序何以可能。"
    },
    "world": {
      "year": -350,
      "title": "城邦与人的社会性",
      "person": "亚里士多德",
      "text": "《政治学》把人理解为在城邦共同生活中实现自身的动物。"
    },
    "question": "社会秩序来自自然倾向、制度教化，还是二者的结合？"
  },
  {
    "id": "soc-2",
    "subject": "sociology",
    "era": "medieval",
    "china": {
      "year": 1170,
      "title": "宗族礼制的系统化",
      "person": "朱熹及宋代理学家",
      "text": "家礼、宗族与地方社会实践，把伦理秩序落实到日常关系。"
    },
    "world": {
      "year": 1377,
      "title": "《历史绪论》写成",
      "person": "伊本·赫勒敦",
      "text": "以群体团结、城市与王朝循环解释社会和政治变迁。"
    },
    "question": "家庭伦理与群体团结，如何支撑更大规模的政治秩序？"
  },
  {
    "id": "soc-3",
    "subject": "sociology",
    "era": "modern",
    "china": {
      "year": 1903,
      "title": "《群学肄言》刊行",
      "person": "严复",
      "text": "译述斯宾塞社会学，把\"群学\"引入晚清改革与救亡讨论。"
    },
    "world": {
      "year": 1895,
      "title": "《社会学方法的准则》出版",
      "person": "涂尔干",
      "text": "提出把社会事实当作\"物\"来研究，确立学科方法自觉。"
    },
    "question": "社会学进入大学之前，先回应了怎样的国家与秩序危机？"
  },
  {
    "id": "soc-4",
    "subject": "sociology",
    "era": "contemporary",
    "china": {
      "year": 1947,
      "title": "《乡土中国》出版",
      "person": "费孝通",
      "text": "以差序格局、礼治秩序等概念理解中国基层社会结构。"
    },
    "world": {
      "year": 1959,
      "title": "《社会学的想象力》出版",
      "person": "C. 赖特·米尔斯",
      "text": "把个人困扰连接到公共议题与历史结构。"
    },
    "question": "怎样从日常经验出发，看见个人背后的社会结构？"
  },
  {
    "id": "soc-5",
    "subject": "sociology",
    "era": "contemporary",
    "china": {
      "year": 1980,
      "title": "中国社会学恢复重建",
      "person": "费孝通等学者",
      "text": "学科建制、社会调查与本土化问题重新进入大学和公共研究。"
    },
    "world": {
      "year": 1984,
      "title": "《区分》英译传播",
      "person": "皮埃尔·布迪厄",
      "text": "趣味、文化资本与阶层再生产成为文化社会学的重要框架。"
    },
    "question": "学科重建与阶层文化研究，如何回应快速变化的社会？"
  },
  {
    "id": "soc-6",
    "subject": "sociology",
    "era": "modern",
    "china": {
      "year": 1920,
      "title": "中国乡村建设运动",
      "person": "梁漱溟、晏阳初",
      "text": "以乡村教育与合作组织回应现代性冲击下的社会解体。"
    },
    "world": {
      "year": 1905,
      "title": "《新教伦理与资本主义精神》出版",
      "person": "马克斯·韦伯",
      "text": "讨论宗教观念如何塑造经济行动与社会伦理。"
    },
    "question": "社会如何回应现代性对传统共同体的破坏？"
  },
  {
    "id": "pol-1",
    "subject": "politics",
    "era": "ancient",
    "china": {
      "year": -356,
      "title": "商鞅第一次变法",
      "person": "商鞅、秦孝公",
      "text": "以县制、军功与法律重塑国家汲取能力和社会身份。"
    },
    "world": {
      "year": -375,
      "title": "《理想国》思想形成",
      "person": "柏拉图",
      "text": "通过正义、教育与哲人王追问好城邦的构造。"
    },
    "question": "强国家与正义国家，是同一个问题吗？"
  },
  {
    "id": "pol-2",
    "subject": "politics",
    "era": "ancient",
    "china": {
      "year": -221,
      "title": "秦完成政治统一",
      "person": "秦始皇及秦官僚体系",
      "text": "郡县、文书与标准化把多地域纳入统一帝国治理。"
    },
    "world": {
      "year": -27,
      "title": "罗马元首制确立",
      "person": "奥古斯都",
      "text": "共和制度形式与个人最高权力结合，开启罗马帝国秩序。"
    },
    "question": "帝国如何在广阔地域中同时制造统一与合法性？"
  },
  {
    "id": "pol-3",
    "subject": "politics",
    "era": "early-modern",
    "china": {
      "year": 1669,
      "title": "《黄宗羲定本》思想流传",
      "person": "黄宗羲",
      "text": "《明夷待访录》反思君主专制、学校与公共议论。"
    },
    "world": {
      "year": 1689,
      "title": "《政府论》出版",
      "person": "约翰·洛克",
      "text": "以自然权利、同意与反抗权论证有限政府。"
    },
    "question": "面对君主权力，中西思想分别从哪里寻找约束？"
  },
  {
    "id": "pol-4",
    "subject": "politics",
    "era": "modern",
    "china": {
      "year": 1902,
      "title": "\"新民\"政治论述展开",
      "person": "梁启超",
      "text": "把国民、公德与政治参与放进国家转型的核心。"
    },
    "world": {
      "year": 1919,
      "title": "《政治作为一种志业》演讲",
      "person": "马克斯·韦伯",
      "text": "讨论国家、正当暴力、责任伦理与政治家的判断。"
    },
    "question": "现代政治需要怎样的国民，又需要怎样的政治家？"
  },
  {
    "id": "pol-5",
    "subject": "politics",
    "era": "contemporary",
    "china": {
      "year": 1982,
      "title": "现行宪法通过",
      "person": "第五届全国人民代表大会",
      "text": "确立改革时期国家机构、公民权利与根本制度的宪法框架。"
    },
    "world": {
      "year": 1971,
      "title": "《正义论》出版",
      "person": "约翰·罗尔斯",
      "text": "以原初状态和差别原则重构自由民主社会的公平问题。"
    },
    "question": "制度文本中的权利，与规范理论中的正义如何互相检验？"
  },
  {
    "id": "pol-6",
    "subject": "politics",
    "era": "early-modern",
    "china": {
      "year": 1070,
      "title": "王安石变法推行",
      "person": "王安石、宋神宗",
      "text": "以青苗、免役等新法扩大国家干预经济和社会。"
    },
    "world": {
      "year": 1532,
      "title": "《君主论》出版",
      "person": "马基雅维利",
      "text": "以历史经验和现实观察讨论君主如何获取和维持权力。"
    },
    "question": "国家力量应当如何介入社会与财富分配？"
  },
  {
    "id": "his-1",
    "subject": "history",
    "era": "ancient",
    "china": {
      "year": -91,
      "title": "《史记》基本完成",
      "person": "司马迁",
      "text": "纪传体连接帝王、世家与个人命运，追问天人之际与古今之变。"
    },
    "world": {
      "year": -430,
      "title": "《历史》写作",
      "person": "希罗多德",
      "text": "以战争、旅行见闻与多民族叙事探寻希波冲突的原因。"
    },
    "question": "历史写作如何在事实记录、见闻与道德判断之间取舍？"
  },
  {
    "id": "his-2",
    "subject": "history",
    "era": "medieval",
    "china": {
      "year": 1084,
      "title": "《资治通鉴》完成",
      "person": "司马光及编修团队",
      "text": "编年叙事以历代兴衰为统治者提供政治鉴戒。"
    },
    "world": {
      "year": 731,
      "title": "《英吉利教会史》完成",
      "person": "比德",
      "text": "把英格兰诸族的历史放入基督教传播与统一叙事。"
    },
    "question": "\"以史为鉴\"和\"以史立国\"分别怎样选择材料？"
  },
  {
    "id": "his-3",
    "subject": "history",
    "era": "early-modern",
    "china": {
      "year": 1640,
      "title": "《读通鉴论》思想酝酿",
      "person": "王夫之",
      "text": "借历代政治得失反思明亡，并强调历史处境中的变化与责任。"
    },
    "world": {
      "year": 1681,
      "title": "《历史批判辞典》前夜",
      "person": "皮埃尔·贝尔等早期批判史家",
      "text": "文本辨伪、宗教争论与怀疑精神推动近代史学批判。"
    },
    "question": "王朝覆亡与宗教冲突如何迫使史家重写因果？"
  },
  {
    "id": "his-4",
    "subject": "history",
    "era": "modern",
    "china": {
      "year": 1902,
      "title": "《新史学》发表",
      "person": "梁启超",
      "text": "批评帝王中心旧史，主张书写国民、群体与进化。"
    },
    "world": {
      "year": 1902,
      "title": "《历史研究》相关讲座时代",
      "person": "阿克顿等职业史家",
      "text": "档案、专业训练与客观性理想塑造现代大学史学。"
    },
    "question": "现代史学为何同时转向\"人民\"与\"专业\"？"
  },
  {
    "id": "his-5",
    "subject": "history",
    "era": "contemporary",
    "china": {
      "year": 1949,
      "title": "中国马克思主义史学体系化",
      "person": "郭沫若、范文澜等",
      "text": "社会形态、阶级与人民成为解释中国历史的重要框架。"
    },
    "world": {
      "year": 1949,
      "title": "《地中海》出版",
      "person": "费尔南·布罗代尔",
      "text": "长时段、地理结构与物质生活改变了事件中心史学。"
    },
    "question": "宏大结构能解释多少历史，又会遮蔽哪些人的经验？"
  },
  {
    "id": "his-6",
    "subject": "history",
    "era": "ancient",
    "china": {
      "year": -110,
      "title": "汉代史官制度建设",
      "person": "司马迁、司马谈",
      "text": "太史令制度与国家档案为纪传通史提供制度条件。"
    },
    "world": {
      "year": -400,
      "title": "《伯罗奔尼撒战争史》写作",
      "person": "修昔底德",
      "text": "以亲历者视角和严格因果分析记录雅典与斯巴达的战争。"
    },
    "question": "史家的亲身经历如何影响他对因果的归因？"
  },
  {
    "id": "phi-1",
    "subject": "philosophy",
    "era": "ancient",
    "china": {
      "year": -480,
      "title": "孔子言说结集的时代",
      "person": "孔子及其弟子",
      "text": "从仁、礼、学习与君子实践讨论人成为人的路径。"
    },
    "world": {
      "year": -399,
      "title": "苏格拉底之死",
      "person": "苏格拉底、柏拉图",
      "text": "以诘问、德性与未经省察的生活奠定西方伦理哲学场景。"
    },
    "question": "哲学首先是一套理论，还是一种自我修养的生活？"
  },
  {
    "id": "phi-2",
    "subject": "philosophy",
    "era": "ancient",
    "china": {
      "year": -300,
      "title": "庄子思想形成",
      "person": "庄周及后学",
      "text": "以寓言、齐物与逍遥松动固定的是非、身份和知识边界。"
    },
    "world": {
      "year": -300,
      "title": "斯多亚学派兴起",
      "person": "芝诺及其后学",
      "text": "在不可控世界中，以理性、德性与情绪训练寻求自由。"
    },
    "question": "当外部世界不可控，人如何获得内在自由？"
  },
  {
    "id": "phi-3",
    "subject": "philosophy",
    "era": "medieval",
    "china": {
      "year": 1177,
      "title": "朱熹编定《四书章句集注》",
      "person": "朱熹",
      "text": "以理、气、格物与修养重构儒学知识和教育体系。"
    },
    "world": {
      "year": 1274,
      "title": "《神学大全》未竟",
      "person": "托马斯·阿奎那",
      "text": "系统协调亚里士多德哲学、基督教神学与自然法。"
    },
    "question": "经典注释如何变成一整套关于世界与人的体系？"
  },
  {
    "id": "phi-4",
    "subject": "philosophy",
    "era": "early-modern",
    "china": {
      "year": 1527,
      "title": "王阳明讲学与心学成熟",
      "person": "王阳明",
      "text": "知行合一与致良知把道德判断落实到主体行动。"
    },
    "world": {
      "year": 1637,
      "title": "《谈谈方法》出版",
      "person": "勒内·笛卡尔",
      "text": "从方法怀疑和\"我思\"出发，为知识寻找确定基础。"
    },
    "question": "可靠知识来自道德直觉、实践行动，还是方法怀疑？"
  },
  {
    "id": "phi-5",
    "subject": "philosophy",
    "era": "modern",
    "china": {
      "year": 1919,
      "title": "杜威访华与实用主义传播",
      "person": "杜威、胡适等",
      "text": "实验主义、教育改革与问题意识进入新文化讨论。"
    },
    "world": {
      "year": 1921,
      "title": "《逻辑哲学论》出版",
      "person": "维特根斯坦",
      "text": "以语言、逻辑与世界的界限重新界定哲学工作。"
    },
    "question": "哲学应当解决现实问题，还是澄清语言能够说什么？"
  },
  {
    "id": "phi-6",
    "subject": "philosophy",
    "era": "early-modern",
    "china": {
      "year": 1670,
      "title": "顾炎武《日知录》积稿",
      "person": "顾炎武",
      "text": "以经世考据之学反思晚明学风，强调实学与制度。"
    },
    "world": {
      "year": 1781,
      "title": "《纯粹理性批判》出版",
      "person": "伊曼努尔·康德",
      "text": "为理性划出边界，同时为道德、自由与信仰保留空间。"
    },
    "question": "哲学应服务于现实治理，还是批判性地审视知识的边界？"
  },
  {
    "id": "law-1",
    "subject": "law",
    "era": "ancient",
    "china": {
      "year": -536,
      "title": "子产铸刑书",
      "person": "子产",
      "text": "将刑法条文公布于众，引发成文法与礼治关系的争论。"
    },
    "world": {
      "year": -450,
      "title": "《十二表法》公布",
      "person": "罗马共和国",
      "text": "以公开成文规则回应平民对贵族司法垄断的不满。"
    },
    "question": "法律被公开写下，如何改变权力与普通人的关系？"
  },
  {
    "id": "law-2",
    "subject": "law",
    "era": "medieval",
    "china": {
      "year": 653,
      "title": "《永徽律疏》颁行",
      "person": "唐高宗时期律学家",
      "text": "律文与官方疏议结合，系统表达礼法关系与帝国司法秩序。"
    },
    "world": {
      "year": 534,
      "title": "《查士丁尼法典》体系完成",
      "person": "查士丁尼一世及法学家",
      "text": "汇编罗马皇帝敕令、法学著作与制度，深刻影响欧陆法传统。"
    },
    "question": "大型帝国为什么都需要整理、解释并统一既有法律？"
  },
  {
    "id": "law-3",
    "subject": "law",
    "era": "early-modern",
    "china": {
      "year": 1646,
      "title": "《大清律集解附例》颁行",
      "person": "清初修律官员",
      "text": "继承明律框架并结合条例，奠定清代基本法典秩序。"
    },
    "world": {
      "year": 1689,
      "title": "英国《权利法案》通过",
      "person": "英国议会",
      "text": "限制王权并确认议会与臣民若干权利，重塑宪制关系。"
    },
    "question": "法典化秩序与宪制限权，代表两种不同的法律任务吗？"
  },
  {
    "id": "law-4",
    "subject": "law",
    "era": "modern",
    "china": {
      "year": 1902,
      "title": "晚清修律启动",
      "person": "沈家本、伍廷芳等",
      "text": "在主权危机与领事裁判权压力下，系统引入近代部门法。"
    },
    "world": {
      "year": 1900,
      "title": "《德国民法典》施行",
      "person": "德国法学界与帝国立法机关",
      "text": "以高度体系化的总则与部门结构影响多国民法编纂。"
    },
    "question": "法律移植如何在现代化需求与本土秩序之间发生？"
  },
  {
    "id": "law-5",
    "subject": "law",
    "era": "contemporary",
    "china": {
      "year": 1954,
      "title": "中华人民共和国宪法通过",
      "person": "第一届全国人民代表大会",
      "text": "规定国家结构、根本制度与公民基本权利义务。"
    },
    "world": {
      "year": 1950,
      "title": "《欧洲人权公约》签署",
      "person": "欧洲委员会成员国",
      "text": "建立区域人权保障框架，并发展出跨国司法监督。"
    },
    "question": "二战后的宪法与人权文件，如何重新定义国家权力边界？"
  },
  {
    "id": "law-6",
    "subject": "law",
    "era": "contemporary",
    "china": {
      "year": 2020,
      "title": "《中华人民共和国民法典》通过",
      "person": "第十三届全国人民代表大会",
      "text": "整合民事单行法，以七编体系规定民事主体、权利与交易生活。"
    },
    "world": {
      "year": 2018,
      "title": "欧盟《通用数据保护条例》实施",
      "person": "欧盟",
      "text": "以数据主体权利、问责与域外适用回应数字社会的隐私问题。"
    },
    "question": "数字时代，传统民事权利如何扩展到人格与数据？"
  },
  {
    "id": "law-7",
    "subject": "law",
    "era": "ancient",
    "china": {
      "year": -170,
      "title": "汉初叔孙通制礼作律",
      "person": "叔孙通、张苍",
      "text": "以儒家礼制与秦法糅合，确立汉初制度框架。"
    },
    "world": {
      "year": -100,
      "title": "西塞罗《论法律》写作",
      "person": "西塞罗",
      "text": "把自然法、理性与共和宪制联系起来，影响后世自然法传统。"
    },
    "question": "法律是意志的产物，还是理性与传统的延续？"
  },
  {
    "id": "phi-7",
    "subject": "philosophy",
    "era": "ancient",
    "china": {
      "year": -570,
      "title": "老子著《道德经》",
      "person": "老子",
      "text": "以\"道可道，非常道\"提出对整个宇宙本源的追问，开创中国形上学传统。"
    },
    "world": {
      "year": -585,
      "title": "泰勒斯预言日食",
      "person": "泰勒斯",
      "text": "以\"水是万物的本源\"开启希腊哲学对自然本原的追问。"
    },
    "question": "东西方哲学的源头为何同时追问\"万物从何而来\"？"
  },
  {
    "id": "lit-han",
    "subject": "literature",
    "era": "ancient",
    "china": {
      "year": -120,
      "title": "汉乐府与五言诗成形",
      "person": "无名诗人群体",
      "text": "《陌上桑》《孔雀东南飞》以叙事性和情感张力扩展诗歌表现力。"
    },
    "world": {
      "year": -19,
      "title": "维吉尔《埃涅阿斯纪》",
      "person": "维吉尔",
      "text": "以罗马始祖的漂泊续写帝国史诗。"
    },
    "question": "叙事诗歌如何在民间与国家之间找到位置？"
  },
  {
    "id": "lit-weijin",
    "subject": "literature",
    "era": "ancient",
    "china": {
      "year": 220,
      "title": "建安文学与魏晋风度",
      "person": "曹操、曹植、阮籍",
      "text": "\"建安风骨\"以慷慨悲凉的个人声音回应乱世，开启文学自觉时代。"
    },
    "world": {
      "year": 170,
      "title": "阿普列乌斯《金驴记》",
      "person": "阿普列乌斯",
      "text": "拉丁文学中唯一完整保存的古代小说。"
    },
    "question": "乱世中个人声音为何反而获得更大的文学力量？"
  },
  {
    "id": "lit-ming",
    "subject": "literature",
    "era": "early-modern",
    "china": {
      "year": 1520,
      "title": "明代白话小说高峰",
      "person": "施耐庵、吴承恩",
      "text": "《水浒传》《西游记》将白话叙事推向长篇巨制。"
    },
    "world": {
      "year": 1605,
      "title": "《堂吉诃德》出版",
      "person": "塞万提斯",
      "text": "以骑士小说的戏仿开创现代欧洲小说。"
    },
    "question": "通俗叙事如何成为观察社会与道德的多棱镜？"
  },
  {
    "id": "phi-weijin",
    "subject": "philosophy",
    "era": "ancient",
    "china": {
      "year": 250,
      "title": "魏晋玄学兴盛",
      "person": "王弼、郭象、嵇康",
      "text": "以\"有无之辩\"\"名教与自然\"将思辨哲学推向新高度。"
    },
    "world": {
      "year": 270,
      "title": "普罗提诺建立新柏拉图主义",
      "person": "普罗提诺",
      "text": "以太一流溢说整合柏拉图哲学与神秘主义。"
    },
    "question": "形而上学在政治动荡时期为何反而格外活跃？"
  },
  {
    "id": "pol-mengzi",
    "subject": "politics",
    "era": "ancient",
    "china": {
      "year": -310,
      "title": "孟子仁政学说形成",
      "person": "孟子",
      "text": "以\"民为贵，社稷次之，君为轻\"把民心作为政治合法性根基。"
    },
    "world": {
      "year": -325,
      "title": "亚里士多德政治学完成",
      "person": "亚里士多德",
      "text": "以158个城邦宪法为依据讨论政体类型。"
    },
    "question": "政权合法性：正义、稳定还是人民同意？"
  },
  {
    "id": "his-tang",
    "subject": "history",
    "era": "medieval",
    "china": {
      "year": 659,
      "title": "唐修八史与官修制度",
      "person": "房玄龄、令狐德棻等",
      "text": "唐代设立史馆，确立\"隔代修史\"传统。"
    },
    "world": {
      "year": 731,
      "title": "比德《英吉利教会史》",
      "person": "比德",
      "text": "以基督教纪年把宗教与政治写入同一时间线。"
    },
    "question": "官修与私修历史的差异如何影响\"真相\"呈现？"
  },
  {
    "id": "pol-1912",
    "subject": "politics",
    "era": "modern",
    "china": {
      "year": 1912,
      "title": "中华民国建立",
      "person": "孙中山及革命党",
      "text": "延续两千年帝制终结，亚洲第一个共和国实验。"
    },
    "world": {
      "year": 1917,
      "title": "俄国十月革命",
      "person": "列宁",
      "text": "社会主义革命重塑20世纪政治图景。"
    },
    "question": "革命之后，如何从破旧走向立新？"
  }
];

const BOOKS = [
  {
    "id": "b01",
    "subject": "literature",
    "region": "china",
    "title": "诗经",
    "author": "佚名",
    "year": "先秦",
    "level": "基础",
    "note": "先读《国风》：观察情感如何被礼仪、劳动与地方声音承载。"
  },
  {
    "id": "b02",
    "subject": "literature",
    "region": "china",
    "title": "红楼梦",
    "author": "曹雪芹",
    "year": "18世纪",
    "level": "核心",
    "note": "不要只追情节；给人物的财产、身份与情感关系做一张图。"
  },
  {
    "id": "b03",
    "subject": "literature",
    "region": "world",
    "title": "奥德赛",
    "author": "荷马",
    "year": "约前8世纪",
    "level": "基础",
    "note": "把\"归乡\"当作身份重建，而不只是冒险故事。"
  },
  {
    "id": "b04",
    "subject": "literature",
    "region": "world",
    "title": "傲慢与偏见",
    "author": "简·奥斯汀",
    "year": "1813",
    "level": "基础",
    "note": "记录每次误判背后的阶层信息与财产规则。"
  },
  {
    "id": "b05",
    "subject": "literature",
    "region": "china",
    "title": "杜工部集",
    "author": "杜甫",
    "year": "唐",
    "level": "核心",
    "note": "选取安史之乱前后的诗对比，观察个人如何承受大历史。"
  },
  {
    "id": "b06",
    "subject": "literature",
    "region": "china",
    "title": "苏轼词选",
    "author": "苏轼",
    "year": "北宋",
    "level": "基础",
    "note": "看一个人如何在豪放与婉约之间自由转换。"
  },
  {
    "id": "b07",
    "subject": "literature",
    "region": "world",
    "title": "神曲",
    "author": "但丁",
    "year": "1321",
    "level": "进阶",
    "note": "不只读故事；追踪每一层地狱的罪与罚反映了什么伦理判断。"
  },
  {
    "id": "b08",
    "subject": "literature",
    "region": "world",
    "title": "哈姆雷特",
    "author": "莎士比亚",
    "year": "约1600",
    "level": "核心",
    "note": "追问：延宕是性格缺陷，还是面对不可靠世界的唯一诚实？"
  },
  {
    "id": "b09",
    "subject": "sociology",
    "region": "china",
    "title": "乡土中国",
    "author": "费孝通",
    "year": "1947",
    "level": "基础",
    "note": "每读一个概念，都为它找一个当代生活中的反例。"
  },
  {
    "id": "b10",
    "subject": "sociology",
    "region": "china",
    "title": "金翼",
    "author": "林耀华",
    "year": "1944",
    "level": "进阶",
    "note": "把家族故事当作社会结构的切片来读。"
  },
  {
    "id": "b11",
    "subject": "sociology",
    "region": "world",
    "title": "社会学的想象力",
    "author": "C. 赖特·米尔斯",
    "year": "1959",
    "level": "基础",
    "note": "试着把一个个人困扰改写成公共议题。"
  },
  {
    "id": "b12",
    "subject": "sociology",
    "region": "world",
    "title": "自杀论",
    "author": "埃米尔·涂尔干",
    "year": "1897",
    "level": "进阶",
    "note": "重点看作者如何把道德议题变成可检验的社会问题。"
  },
  {
    "id": "b13",
    "subject": "sociology",
    "region": "world",
    "title": "新教伦理与资本主义精神",
    "author": "马克斯·韦伯",
    "year": "1905",
    "level": "进阶",
    "note": "关键是观念如何塑造行动，而非韦伯是否\"正确\"。"
  },
  {
    "id": "b14",
    "subject": "sociology",
    "region": "world",
    "title": "区分",
    "author": "皮埃尔·布迪厄",
    "year": "1979",
    "level": "进阶",
    "note": "关注\"趣味\"如何被用作社会分层的工具。"
  },
  {
    "id": "b15",
    "subject": "politics",
    "region": "china",
    "title": "商君书",
    "author": "商鞅学派",
    "year": "战国",
    "level": "进阶",
    "note": "区分\"国家能力\"\"君主权力\"与\"社会代价\"。"
  },
  {
    "id": "b16",
    "subject": "politics",
    "region": "china",
    "title": "明夷待访录",
    "author": "黄宗羲",
    "year": "1663",
    "level": "核心",
    "note": "比较\"天下之法\"与\"一家之法\"的论证起点。"
  },
  {
    "id": "b17",
    "subject": "politics",
    "region": "world",
    "title": "政治学",
    "author": "亚里士多德",
    "year": "前4世纪",
    "level": "核心",
    "note": "先弄清城邦、公民与好生活之间的关系。"
  },
  {
    "id": "b18",
    "subject": "politics",
    "region": "world",
    "title": "政治作为一种志业",
    "author": "马克斯·韦伯",
    "year": "1919",
    "level": "基础",
    "note": "用现实例子区分信念伦理与责任伦理。"
  },
  {
    "id": "b19",
    "subject": "politics",
    "region": "world",
    "title": "君主论",
    "author": "马基雅维利",
    "year": "1532",
    "level": "核心",
    "note": "注意作者如何把\"政治效果\"从道德范畴中分离出来。"
  },
  {
    "id": "b20",
    "subject": "politics",
    "region": "world",
    "title": "政府论",
    "author": "约翰·洛克",
    "year": "1689",
    "level": "核心",
    "note": "自然状态、社会契约与反抗权三个环节的逻辑链条。"
  },
  {
    "id": "b21",
    "subject": "politics",
    "region": "china",
    "title": "新民说",
    "author": "梁启超",
    "year": "1902",
    "level": "基础",
    "note": "思考\"国民\"这个概念在晚清被发明出来的历史语境。"
  },
  {
    "id": "b22",
    "subject": "history",
    "region": "china",
    "title": "史记",
    "author": "司马迁",
    "year": "前1世纪",
    "level": "核心",
    "note": "选同一事件的本纪与列传对读，观察叙事视角。"
  },
  {
    "id": "b23",
    "subject": "history",
    "region": "china",
    "title": "万历十五年",
    "author": "黄仁宇",
    "year": "1981",
    "level": "基础",
    "note": "注意\"小事件\"怎样暴露制度无法运转的结构。"
  },
  {
    "id": "b24",
    "subject": "history",
    "region": "world",
    "title": "历史",
    "author": "希罗多德",
    "year": "前5世纪",
    "level": "核心",
    "note": "标记作者的亲见、转述和推测，比较证据层级。"
  },
  {
    "id": "b25",
    "subject": "history",
    "region": "world",
    "title": "历史的用途与滥用",
    "author": "尼采",
    "year": "1874",
    "level": "进阶",
    "note": "问自己：哪一种历史正在帮助生活，哪一种在压迫生活？"
  },
  {
    "id": "b26",
    "subject": "history",
    "region": "world",
    "title": "伯罗奔尼撒战争史",
    "author": "修昔底德",
    "year": "前5世纪",
    "level": "核心",
    "note": "比较演说词与实际行动之间的差距，思考作者的判断。"
  },
  {
    "id": "b27",
    "subject": "history",
    "region": "china",
    "title": "国史大纲",
    "author": "钱穆",
    "year": "1940",
    "level": "核心",
    "note": "注意作者如何以\"温情与敬意\"回应20世纪对中国传统的批判。"
  },
  {
    "id": "b28",
    "subject": "history",
    "region": "world",
    "title": "地中海与菲利普二世时代的地中海世界",
    "author": "费尔南·布罗代尔",
    "year": "1949",
    "level": "进阶",
    "note": "跳过细节先理解三种时间尺度。"
  },
  {
    "id": "b29",
    "subject": "philosophy",
    "region": "china",
    "title": "论语",
    "author": "孔子弟子及再传弟子",
    "year": "战国前期",
    "level": "基础",
    "note": "按\"学习、关系、政治、修养\"重排章句，而非逐篇读完。"
  },
  {
    "id": "b30",
    "subject": "philosophy",
    "region": "china",
    "title": "庄子",
    "author": "庄周及后学",
    "year": "战国",
    "level": "核心",
    "note": "把寓言视为思想实验，观察它如何瓦解固定立场。"
  },
  {
    "id": "b31",
    "subject": "philosophy",
    "region": "world",
    "title": "苏格拉底的申辩",
    "author": "柏拉图",
    "year": "前4世纪",
    "level": "基础",
    "note": "追踪苏格拉底为何把\"不知道\"变成一种力量。"
  },
  {
    "id": "b32",
    "subject": "philosophy",
    "region": "world",
    "title": "谈谈方法",
    "author": "勒内·笛卡尔",
    "year": "1637",
    "level": "基础",
    "note": "区分作者实际使用的方法与后来被概括的\"我思\"。"
  },
  {
    "id": "b33",
    "subject": "philosophy",
    "region": "world",
    "title": "纯粹理性批判",
    "author": "伊曼努尔·康德",
    "year": "1781",
    "level": "进阶",
    "note": "先读序言和导论，把握\"先天综合判断\"的问题意识。"
  },
  {
    "id": "b34",
    "subject": "philosophy",
    "region": "china",
    "title": "道德经",
    "author": "老子",
    "year": "战国",
    "level": "基础",
    "note": "每一章都是一个独立的思考单位，不必强求体系。"
  },
  {
    "id": "b35",
    "subject": "philosophy",
    "region": "world",
    "title": "存在与时间",
    "author": "马丁·海德格尔",
    "year": "1927",
    "level": "进阶",
    "note": "从\"在世之在\"的概念出发，不要被术语吓住。"
  },
  {
    "id": "b36",
    "subject": "law",
    "region": "china",
    "title": "唐律疏议",
    "author": "长孙无忌等",
    "year": "653",
    "level": "进阶",
    "note": "从一个具体罪名看礼、身份与刑罚如何连接。"
  },
  {
    "id": "b37",
    "subject": "law",
    "region": "china",
    "title": "中国法律与中国社会",
    "author": "瞿同祖",
    "year": "1947",
    "level": "核心",
    "note": "把家族、阶级与法律条文放在同一分析框架中。"
  },
  {
    "id": "b38",
    "subject": "law",
    "region": "world",
    "title": "法律的概念",
    "author": "H. L. A. 哈特",
    "year": "1961",
    "level": "进阶",
    "note": "先掌握初级规则、次级规则和承认规则三个支点。"
  },
  {
    "id": "b39",
    "subject": "law",
    "region": "world",
    "title": "论法的精神",
    "author": "孟德斯鸠",
    "year": "1748",
    "level": "核心",
    "note": "不要只读\"三权分立\"；看法律如何受地理、风俗和政体制约。"
  },
  {
    "id": "b40",
    "subject": "law",
    "region": "world",
    "title": "论犯罪与刑罚",
    "author": "切萨雷·贝卡里亚",
    "year": "1764",
    "level": "基础",
    "note": "一部小册子如何改变对刑罚目的的理解。"
  },
  {
    "id": "b41",
    "subject": "law",
    "region": "world",
    "title": "古代法",
    "author": "亨利·梅因",
    "year": "1861",
    "level": "进阶",
    "note": "追踪\"从身份到契约\"这个公式的历史语境。"
  },
  {
    "id": "b42",
    "subject": "law",
    "region": "china",
    "title": "寄簃文存",
    "author": "沈家本",
    "year": "清末",
    "level": "进阶",
    "note": "看一位传统律学家如何转变为近代法政改革者。"
  },
  {
    "id": "b43",
    "subject": "literature",
    "region": "china",
    "title": "水浒传",
    "author": "施耐庵",
    "year": "14世纪",
    "level": "核心",
    "note": "从\"官逼民反\"看底层暴力如何被伦理化。"
  },
  {
    "id": "b44",
    "subject": "literature",
    "region": "china",
    "title": "西游记",
    "author": "吴承恩",
    "year": "16世纪",
    "level": "核心",
    "note": "把朝圣之旅当作精神修炼的寓言来读。"
  },
  {
    "id": "b45",
    "subject": "literature",
    "region": "china",
    "title": "三国演义",
    "author": "罗贯中",
    "year": "14世纪",
    "level": "基础",
    "note": "区分\"小说中的历史\"与史实记载。"
  },
  {
    "id": "b46",
    "subject": "literature",
    "region": "china",
    "title": "世说新语",
    "author": "刘义庆",
    "year": "5世纪",
    "level": "进阶",
    "note": "以极简笔墨留魏晋人物音容笑貌。"
  },
  {
    "id": "b47",
    "subject": "literature",
    "region": "world",
    "title": "堂吉诃德",
    "author": "塞万提斯",
    "year": "1605",
    "level": "核心",
    "note": "当理想与现实裂缝变成笑料，这笑料在笑谁？"
  },
  {
    "id": "b48",
    "subject": "philosophy",
    "region": "china",
    "title": "韩非子",
    "author": "韩非",
    "year": "战国",
    "level": "进阶",
    "note": "以法、术、势三位一体理解权力冷峻逻辑。"
  },
  {
    "id": "b49",
    "subject": "philosophy",
    "region": "china",
    "title": "传习录",
    "author": "王阳明",
    "year": "16世纪",
    "level": "核心",
    "note": "从日常问答和书信体会知行合一。"
  },
  {
    "id": "b50",
    "subject": "politics",
    "region": "china",
    "title": "韩非子",
    "author": "韩非",
    "year": "战国",
    "level": "核心",
    "note": "系统理解法家如何在人性自利假设上构建秩序。"
  }
];

const ERA_STORIES = [
  {
    "id": "ancient",
    "range": "公元前 800—公元 500",
    "name": "古典奠基",
    "kicker": "城市、礼制与帝国",
    "context": "农业共同体扩张为城邦与帝国，口传经验逐渐被经典、史书和成文法固定下来。知识尚未分科，诗、史、哲与政治共享\"何为好秩序\"的问题。",
    "style": "格言、对话、寓言、史诗与纪传成为主要表达；重记忆、典范和公共劝说。",
    "shift": "从神话记忆走向理性论辩与制度书写"
  },
  {
    "id": "medieval",
    "range": "500—1500",
    "name": "信仰与体系",
    "kicker": "经典注释、宗教世界与官僚国家",
    "context": "跨地域宗教、帝国官僚和士人教育塑造知识生产。作者常通过注经、编史和法典整理，把分散传统组织成可传授的体系。",
    "style": "注疏、编年、神学论证与象征叙事发达；文体追求秩序、层级与整体宇宙观。",
    "shift": "从奠定经典走向解释经典、整合世界"
  },
  {
    "id": "early-modern",
    "range": "1500—1800",
    "name": "主体觉醒",
    "kicker": "印刷、商业扩张与国家重组",
    "context": "印刷传播、海洋扩张、宗教冲突和集权国家带来新的读者与公共讨论。个人经验、权利与方法开始成为独立问题。",
    "style": "章回小说、随笔、政治论说与方法论文兴盛；经验细节和论证结构都更鲜明。",
    "shift": "从共同信仰走向主体、经验与权利"
  },
  {
    "id": "modern",
    "range": "1800—1945",
    "name": "现代裂变",
    "kicker": "工业、民族国家与大众社会",
    "context": "工业化、殖民体系、民族国家和城市生活重塑社会。六门学科陆续专业化，同时文学以新语言回应断裂、异化和革命。",
    "style": "现实主义、白话、意识流、统计调查与专业论文并行；旧体裁被拆解，作者主动发明新读者。",
    "shift": "从通人之学走向分科知识与大众公共领域"
  },
  {
    "id": "contemporary",
    "range": "1945—至今",
    "name": "结构与多元",
    "kicker": "战后秩序、去殖民与数字社会",
    "context": "战后制度、去殖民、全球化与数字技术让权利、身份、结构和日常生活成为共同焦点。知识更加跨学科，也更警惕单一宏大叙事。",
    "style": "概念模型、微观叙事、跨媒介写作和数据研究共存；强调位置、证据与多重声音。",
    "shift": "从单线进步走向结构分析、差异经验与全球关联"
  }
];

const AUTHORS = [
  {
    "id": "quyuan",
    "subject": "literature",
    "region": "china",
    "year": -300,
    "dates": "约前340—前278",
    "name": "屈原",
    "alias": "骚体传统的奠基者",
    "era": "ancient",
    "period": "战国·楚国",
    "summary": "把政治失意、人格理想与神话想象熔为强烈的第一人称抒情，使\"我\"的命运第一次如此醒目地进入汉语诗歌。",
    "life": "出身楚国贵族，博闻强识，明于治乱。早年受楚怀王信任参与内政外交，主张联齐抗秦。因遭谗言被疏远流放，在极度悲愤中写下大量作品。公元前278年秦将白起攻破楚都郢，相传屈原于五月五日投汨罗江而死。",
    "context": "诸侯竞争与楚地巫风交叠，士人开始以个人才性面对国家命运。",
    "style": [
      "香草美人式象征",
      "铺陈、反复与诘问",
      "神游结构和瑰丽意象"
    ],
    "ideas": [
      "个人操守与政治共同体",
      "忠贞、放逐与自我证明"
    ],
    "works": [
      {
        "title": "离骚",
        "year": "战国",
        "intro": "以长篇自叙、求索和神游书写理想人格无法见容于现实政治的悲剧。"
      },
      {
        "title": "九歌",
        "year": "战国",
        "intro": "借楚地祭歌与人神相遇，形成缠绵、幽微又富仪式感的抒情世界。"
      }
    ],
    "links": [
      [
        "libai",
        "浪漫抒情传统"
      ]
    ],
    "subjects": [
      "literature",
      "politics"
    ]
  },
  {
    "id": "libai",
    "subject": "literature",
    "region": "china",
    "year": 740,
    "dates": "701—762",
    "name": "李白",
    "alias": "盛唐浪漫诗歌高峰",
    "era": "medieval",
    "period": "唐·盛唐",
    "summary": "把游历、饮酒、友情、政治抱负和宇宙想象写成高度流动的诗歌，让个体精神获得近乎神话般的尺度。",
    "life": "早年游历蜀中，长期漫游求仕；曾入长安供奉翰林，后离京。安史之乱中卷入永王事件并获罪，晚年漂泊。",
    "context": "帝国开放、交通扩张与士人入仕理想并存，盛世气象背后已有政治危机。",
    "style": [
      "跳跃夸张的想象",
      "口语般自然的节奏",
      "古体与乐府的自由伸展"
    ],
    "ideas": [
      "自由人格与功业焦虑",
      "人在山水宇宙中的位置"
    ],
    "works": [
      {
        "title": "将进酒",
        "year": "约752",
        "intro": "以奔涌节奏把生命短暂、怀才不遇与豪饮放在同一场情绪爆发中。"
      },
      {
        "title": "蜀道难",
        "year": "盛唐",
        "intro": "用神话、夸张和声音层次，把道路写成自然奇观与政治寓言。"
      }
    ],
    "links": [
      [
        "quyuan",
        "承接骚体想象"
      ],
      [
        "dufu",
        "盛唐双峰对照"
      ]
    ],
    "subjects": [
      "literature"
    ]
  },
  {
    "id": "caoxueqin",
    "subject": "literature",
    "region": "china",
    "year": 1750,
    "dates": "约1715—约1763",
    "name": "曹雪芹",
    "alias": "世情小说的集大成者",
    "era": "early-modern",
    "period": "清·乾隆前期",
    "summary": "以家族日常、女性群像和诗性细节写出盛世内部的衰败机制，把个人情感与制度性命运交织成复杂世界。",
    "life": "出身江宁织造曹氏家族，少年经历家族由盛转衰，后居北京西郊，生活困顿。《红楼梦》前八十回通常被认为出自其手。",
    "context": "商品经济与文人文化繁荣，宗法家族、科举和财产制度仍支配个人道路。",
    "style": [
      "多声部人物视角",
      "日常细节中的伏笔",
      "诗词、戏曲与小说互文"
    ],
    "ideas": [
      "情与礼法的冲突",
      "繁华必然消逝的历史感"
    ],
    "works": [
      {
        "title": "红楼梦",
        "year": "18世纪中叶",
        "intro": "以贾府兴衰和宝黛爱情为中心，展开关于家族、性别、欲望与幻灭的百科全书式叙事。"
      }
    ],
    "links": [
      [
        "luxun",
        "现代小说批评的前史"
      ]
    ],
    "subjects": [
      "literature",
      "sociology"
    ]
  },
  {
    "id": "luxun",
    "subject": "literature",
    "region": "china",
    "year": 1918,
    "dates": "1881—1936",
    "name": "鲁迅",
    "alias": "中国现代文学的开路者",
    "era": "modern",
    "period": "晚清—民国",
    "summary": "用冷峻反讽、象征和杂文解剖旧伦理如何进入人的精神内部，并逼迫现代汉语承担自我批判。",
    "life": "本名周树人。早年赴日学医，在仙台医学专门学校就读时因\"幻灯片事件\"决心弃医从文。以《狂人日记》开启中国现代白话小说，一生写作杂文近千篇，是理解现代中国的必经入口。",
    "context": "帝国崩解、启蒙救亡与大众传媒兴起，白话文正在争夺新的公共读者。",
    "style": [
      "冷峻反讽与留白",
      "象征性的心理叙事",
      "杂文的短兵相接"
    ],
    "ideas": [
      "国民性批判",
      "启蒙者的孤独与自省"
    ],
    "works": [
      {
        "title": "狂人日记",
        "year": "1918",
        "intro": "借被视作疯子的叙述者重读历史，在\"吃人\"隐喻中质问礼教。"
      },
      {
        "title": "阿Q正传",
        "year": "1921—1922",
        "intro": "以不可靠的传记形式揭示精神胜利、权力模仿与革命叙事的裂缝。"
      }
    ],
    "links": [
      [
        "caoxueqin",
        "继承并改写小说传统"
      ]
    ],
    "subjects": [
      "literature",
      "philosophy",
      "sociology"
    ]
  },
  {
    "id": "taoyuanming",
    "subject": "literature",
    "region": "china",
    "year": 400,
    "dates": "约365—427",
    "name": "陶渊明",
    "alias": "田园诗宗",
    "era": "ancient",
    "period": "东晋—刘宋",
    "summary": "以朴素的日常语言写田园、饮酒与归隐，把个人选择变成持久的文学主题。",
    "life": "曾任江州祭酒、彭泽令等小官，后辞官归隐，亲自耕作。作品在后世被从\"隐逸\"逐渐提升到人格与艺术的统一典范。",
    "context": "门阀政治森严、政权频繁更替，士人在出处进退之间寻找安身之道。",
    "style": [
      "白描般的朴素语言",
      "以日常动作承载生命态度",
      "自然意象与哲理融合"
    ],
    "ideas": [
      "归隐作为自主选择",
      "自然与闲适的伦理意义"
    ],
    "works": [
      {
        "title": "饮酒二十首",
        "year": "东晋",
        "intro": "在饮酒的日常场景中讨论出处、生死与真意。"
      },
      {
        "title": "桃花源记",
        "year": "约421",
        "intro": "以渔人误入理想乡的叙事，同时包含社会批判与对好生活的想象。"
      }
    ],
    "links": [
      [
        "libai",
        "隐逸传统的诗化继承"
      ],
      [
        "sushi",
        "归隐与旷达的再阐释"
      ]
    ],
    "subjects": [
      "literature"
    ]
  },
  {
    "id": "dufu",
    "subject": "literature",
    "region": "china",
    "year": 755,
    "dates": "712—770",
    "name": "杜甫",
    "alias": "诗圣",
    "era": "medieval",
    "period": "唐·盛唐至中唐",
    "summary": "把个人苦难、战争见闻与日常关怀写入格律精严的诗歌，使诗成为承载公共记忆的文体。",
    "life": "出身士族，屡试不第。安史之乱中辗转流亡，晚年漂泊于西南。其诗被后世尊为\"诗史\"。",
    "context": "盛世崩溃、战乱与流亡使个人命运与王朝命运激烈交织。",
    "style": [
      "格律严谨而情感沉郁",
      "叙事与抒情的精密结合",
      "\"诗史\"式的时事记录"
    ],
    "ideas": [
      "个人苦难与天下关怀",
      "诗歌作为历史见证"
    ],
    "works": [
      {
        "title": "春望",
        "year": "757",
        "intro": "以国破、山河、花鸟交织国家与个人的双重悲伤。"
      },
      {
        "title": "三吏三别",
        "year": "759",
        "intro": "以新安吏、石壕吏等组诗记录战争对普通人的碾压。"
      }
    ],
    "links": [
      [
        "libai",
        "盛唐双峰对照"
      ],
      [
        "luxun",
        "文学如何承担社会见证"
      ]
    ],
    "subjects": [
      "literature",
      "history"
    ]
  },
  {
    "id": "baijuyi",
    "subject": "literature",
    "region": "china",
    "year": 815,
    "dates": "772—846",
    "name": "白居易",
    "alias": "新乐府运动代表",
    "era": "medieval",
    "period": "唐·中唐",
    "summary": "主张\"文章合为时而著，歌诗合为事而作\"，以明白如话的语言写社会现实与个人感受。",
    "life": "进士出身，曾任翰林学士、左拾遗等职。因上书言事被贬江州司马，晚年信仰佛教，居洛阳香山。",
    "context": "中唐社会矛盾加剧，士人关注现实问题与诗文的社会功能。",
    "style": [
      "平易流畅的语言",
      "叙事性强、社会关怀明确",
      "长篇铺陈与情感节制"
    ],
    "ideas": [
      "诗歌的社会功能",
      "现实关怀与个人感怀并存"
    ],
    "works": [
      {
        "title": "长恨歌",
        "year": "806",
        "intro": "以唐玄宗与杨贵妃的故事为线索，交织爱情、政治与历史反思。"
      },
      {
        "title": "琵琶行",
        "year": "816",
        "intro": "以江上偶遇琵琶女引出\"同是天涯沦落人\"的身世感叹。"
      }
    ],
    "links": [
      [
        "dufu",
        "从\"诗史\"到新乐府的现实关怀"
      ]
    ],
    "subjects": [
      "literature"
    ]
  },
  {
    "id": "sushi",
    "subject": "literature",
    "region": "china",
    "year": 1080,
    "dates": "1037—1101",
    "name": "苏轼",
    "alias": "北宋文学全才",
    "era": "medieval",
    "period": "北宋",
    "summary": "在诗、词、文、书、画之间自由跨越，以旷达与幽默面对政治挫折，把个人生活写成开放的艺术文本。",
    "life": "四川眉山人，嘉祐二年进士。与父苏洵、弟苏辙并称\"三苏\"。一生仕途大起大落：因反对王安石变法被贬，因\"乌台诗案\"入狱几死，后又流放惠州、儋州。然其创作力在逆境中反而达到高峰，把生活磨难转化为艺术资源。",
    "context": "文人政治成熟、印刷文化兴起，诗文成为士人表达政治立场与生活态度的主要方式。",
    "style": [
      "豪放与婉约并存的自由转换",
      "以典入词的日常化手法",
      "散文般的词风开拓"
    ],
    "ideas": [
      "旷达与逆境中的精神自由",
      "文学打通多种媒介"
    ],
    "works": [
      {
        "title": "念奴娇·赤壁怀古",
        "year": "1082",
        "intro": "借赤壁古战场抒发历史浩渺与个人短暂的感慨。"
      },
      {
        "title": "赤壁赋",
        "year": "1082",
        "intro": "以主客问答讨论变与不变、有限与无限。"
      }
    ],
    "links": [
      [
        "taoyuanming",
        "从归隐到旷达的精神演化"
      ],
      [
        "libai",
        "浪漫精神的北宋延续"
      ]
    ],
    "subjects": [
      "literature",
      "philosophy",
      "politics"
    ]
  },
  {
    "id": "liqingzhao",
    "subject": "literature",
    "region": "china",
    "year": 1130,
    "dates": "约1084—约1155",
    "name": "李清照",
    "alias": "婉约词宗",
    "era": "medieval",
    "period": "北宋—南宋",
    "summary": "以细腻的情感观察和独创的艺术语言，亲身经历南渡之变，把个人感受与家国之痛熔为一炉。",
    "life": "山东济南人，早年与丈夫赵明诚共同收藏金石书画。金兵南侵后流寓南方，晚年孤苦。存世词作虽不多但影响深远。",
    "context": "文人词体成熟、南渡造成士人阶层的巨大创伤。",
    "style": [
      "细腻的情感拿捏",
      "日常场景中的深情",
      "语言清丽而含蓄有力"
    ],
    "ideas": [
      "女性主体的美学表达",
      "个人遭际与家国命运"
    ],
    "works": [
      {
        "title": "声声慢",
        "year": "南宋",
        "intro": "开篇十四个叠字以口语节奏写尽晚年孤独。"
      },
      {
        "title": "如梦令",
        "year": "北宋",
        "intro": "以\"知否？知否？应是绿肥红瘦\"写惜春与女性心事。"
      }
    ],
    "links": [
      [
        "sushi",
        "词的文人化与个人化"
      ]
    ],
    "subjects": [
      "literature"
    ]
  },
  {
    "id": "guanhanqing",
    "subject": "literature",
    "region": "china",
    "year": 1290,
    "dates": "约1234—约1300",
    "name": "关汉卿",
    "alias": "元杂剧奠基人",
    "era": "medieval",
    "period": "元",
    "summary": "以市井舞台、女性主角与蓬勃的戏剧冲突，让杂剧成为承载社会批判与大众情感的公共文体。",
    "life": "大都人，长期生活在瓦舍勾栏，与艺人和书会才人合作编演。现存杂剧《窦娥冤》《救风尘》等十多种。",
    "context": "科举中断、城市经济繁荣，文人转向杂剧和散曲创作。",
    "style": [
      "激烈的戏剧冲突",
      "鲜明的人物性格",
      "口语化曲词与剧场节奏"
    ],
    "ideas": [
      "底层正义与社会不公",
      "文学作为大众公共空间"
    ],
    "works": [
      {
        "title": "窦娥冤",
        "year": "元",
        "intro": "以寡妇窦娥被冤杀的故事质疑天理、司法与权力。"
      },
      {
        "title": "救风尘",
        "year": "元",
        "intro": "以女性智慧和友谊对抗不公婚姻。"
      }
    ],
    "links": [
      [
        "luxun",
        "从悲剧到批判的现实主义延续"
      ]
    ],
    "subjects": [
      "literature"
    ]
  },
  {
    "id": "homer",
    "subject": "literature",
    "region": "world",
    "year": -750,
    "dates": "约前8世纪",
    "name": "荷马",
    "alias": "西方史诗传统奠基者",
    "era": "ancient",
    "period": "古希腊·古风时代",
    "summary": "以《伊利亚特》和《奥德赛》为西方文学奠定英雄、战争与归乡的原型叙事。",
    "life": "关于荷马生平的可靠记载极少，传统称其为盲诗人，生活在爱奥尼亚地区。荷马史诗为长期口传后成型的作品，近代学者对其真实身份存在\"荷马问题\"的长期争论。",
    "context": "口传诗歌从迈锡尼文明崩溃到城邦兴起之间保存了英雄记忆与价值体系。",
    "style": [
      "六步格韵律",
      "明喻与固定修饰语",
      "英雄叙事与神人交织"
    ],
    "ideas": [
      "荣誉、命运与人的限度",
      "归乡作为身份重建"
    ],
    "works": [
      {
        "title": "伊利亚特",
        "year": "约前8世纪",
        "intro": "以阿喀琉斯的愤怒为中心，展开特洛伊战争最后一年的事件与牺牲。"
      },
      {
        "title": "奥德赛",
        "year": "约前8世纪",
        "intro": "以奥德修斯的十年归乡路串联冒险、智慧与身份危机。"
      }
    ],
    "links": [
      [
        "quyuan",
        "口传诗歌塑造文明记忆"
      ],
      [
        "dante",
        "从史诗到神学叙事诗"
      ]
    ],
    "subjects": [
      "literature"
    ]
  },
  {
    "id": "dante",
    "subject": "literature",
    "region": "world",
    "year": 1321,
    "dates": "1265—1321",
    "name": "但丁",
    "alias": "中世纪文学的最高峰",
    "era": "medieval",
    "period": "意大利·中世纪晚期",
    "summary": "以地狱、炼狱、天堂的灵魂旅程整合神学、政治与个人爱情，使方言写作登上最高文学殿堂。",
    "life": "生于佛罗伦萨，活跃于城邦政治，后因党派斗争被终身流放。流放期间完成《神曲》，终老于拉文纳。",
    "context": "教皇与皇帝之争、城邦共和制与流放经验使但丁成为政治与信仰之间的审判者。",
    "style": [
      "三韵体与致密结构",
      "象征与字面意义的双层叙事",
      "以第一人称展开灵魂的渐变"
    ],
    "ideas": [
      "爱与智慧的提升之路",
      "地上的政治秩序与天上的正义"
    ],
    "works": [
      {
        "title": "神曲",
        "year": "约1321",
        "intro": "从黑暗森林出发，穿越地狱、炼狱与天堂的旅程，既是宇宙秩序图也是一部政治与爱的自传。"
      }
    ],
    "links": [
      [
        "homer",
        "从英雄冒险到灵魂之旅"
      ],
      [
        "shakespeare",
        "个人命运与宇宙秩序的再处理"
      ]
    ],
    "subjects": [
      "literature"
    ]
  },
  {
    "id": "shakespeare",
    "subject": "literature",
    "region": "world",
    "year": 1600,
    "dates": "1564—1616",
    "name": "威廉·莎士比亚",
    "alias": "英语文学与戏剧的顶峰",
    "era": "early-modern",
    "period": "英格兰·伊丽莎白—詹姆士一世",
    "summary": "以无与伦比的语言创造力，把人性、权力、爱情与命运放在戏剧中反复实验，至今仍是文学的核心参照。",
    "life": "生于斯特拉特福，青年时期前往伦敦，成为演员和剧作家。中年后返回故乡。生平直接资料稀少，围绕作品身份有\"莎士比亚作者问题\"但学界主流认定为本人。",
    "context": "伦敦剧场兴盛、都铎王朝权威巩固、印刷与翻译扩展了知识边界。",
    "style": [
      "跨文体融合（悲剧、喜剧、历史、传奇）",
      "无韵诗与口语的自由切换",
      "多层隐喻与双关"
    ],
    "ideas": [
      "人性在极端处境下的选择",
      "权力、正义与宽恕"
    ],
    "works": [
      {
        "title": "哈姆雷特",
        "year": "约1600",
        "intro": "以复仇困境讨论行动、知识与生死的哲学问题。"
      },
      {
        "title": "李尔王",
        "year": "约1606",
        "intro": "以权力交出后的疯狂揭示家庭、国家与人性同时瓦解的悲剧。"
      }
    ],
    "links": [
      [
        "dante",
        "从地狱到戏剧的内部审判"
      ]
    ],
    "subjects": [
      "literature",
      "philosophy"
    ]
  },
  {
    "id": "goethe",
    "subject": "literature",
    "region": "world",
    "year": 1808,
    "dates": "1749—1832",
    "name": "约翰·沃尔夫冈·冯·歌德",
    "alias": "德国文学与思想的象征",
    "era": "modern",
    "period": "神圣罗马帝国—德意志邦联",
    "summary": "以一生的写作跨越诗歌、戏剧、小说、科学与自传，把个人发展与大历史融为不可分割的同一过程。",
    "life": "生于法兰克福，早年为狂飙突进运动代表，后长期在魏玛公国任职。与席勒的友谊是德国文学的黄金十年。",
    "context": "德意志启蒙、法国大革命与拿破仑战争推动知识界重新理解人与历史的关系。",
    "style": [
      "从抒情到反思的自由跨度",
      "象征与原型的使用",
      "跨文体、跨文化、跨学科的综合意图"
    ],
    "ideas": [
      "全面发展的人格（Bildung）",
      "古典与浪漫的永恒张力"
    ],
    "works": [
      {
        "title": "浮士德",
        "year": "1808—1832",
        "intro": "以学者与魔鬼的赌约为框架，贯穿中世纪与近代世界，追问人类努力的意义与限界。"
      }
    ],
    "links": [
      [
        "sushi",
        "全面发展的人格的跨文化对照"
      ],
      [
        "tolstoy",
        "现代人的精神赌约"
      ]
    ],
    "subjects": [
      "literature"
    ]
  },
  {
    "id": "tolstoy",
    "subject": "literature",
    "region": "world",
    "year": 1869,
    "dates": "1828—1910",
    "name": "列夫·托尔斯泰",
    "alias": "俄罗斯史诗叙事的巨匠",
    "era": "modern",
    "period": "俄罗斯帝国",
    "summary": "以近乎全景的叙事尺度写战争、家庭与人的精神挣扎，并在晚年的道德转向中质问艺术的伦理意义。",
    "life": "世袭贵族，早年参军并参加克里米亚战争，之后经营庄园并写作。晚年陷入信仰危机，主张非暴力与简朴生活，最终出走并病逝于小火车站。",
    "context": "农奴制改革、资本主义冲击与东正教传统之间的张力，使俄罗斯文学产生巨大的道德追问。",
    "style": [
      "全景视角与人物内心并行",
      "\"陌生化\"的细节观察",
      "道德追问渗透叙事"
    ],
    "ideas": [
      "历史中的个人自由与命运",
      "爱与宽恕作为伦理答案"
    ],
    "works": [
      {
        "title": "战争与和平",
        "year": "1869",
        "intro": "以拿破仑战争为背景，交汇多个家族的故事，追问个人在历史中的意义。"
      },
      {
        "title": "安娜·卡列尼娜",
        "year": "1878",
        "intro": "以家庭与爱情的故事展开关于欲望、社会秩序与个人幸福的悲剧思考。"
      }
    ],
    "links": [
      [
        "dufu",
        "社会全景叙事的跨文化对照"
      ],
      [
        "luxun",
        "文学与社会道德变革"
      ]
    ],
    "subjects": [
      "literature",
      "philosophy"
    ]
  },
  {
    "id": "janeausten",
    "subject": "literature",
    "region": "world",
    "year": 1813,
    "dates": "1775—1817",
    "name": "简·奥斯汀",
    "alias": "英国小说日常现实主义代表",
    "era": "early-modern",
    "period": "英国·摄政时期",
    "summary": "在有限的多村日常生活范围内，以精湛的反讽和对话写出婚姻市场中的财产、阶层、情感与判断力。",
    "life": "生于英格兰乡村牧师家庭，终身未婚，主要社交范围在乡绅与牧师阶层。六部小说生前出版四部，去世后另有遗作。",
    "context": "摄政时代的英国，绅士财产法与婚姻市场是女性命运的关键制度。",
    "style": [
      "自由间接引语",
      "精妙对话与反讽",
      "在严格的社会框架中展开心理深度"
    ],
    "ideas": [
      "判断力与情感教育",
      "个人幸福与社会责任"
    ],
    "works": [
      {
        "title": "傲慢与偏见",
        "year": "1813",
        "intro": "以伊丽莎白与达西的纠葛讨论偏见、财产如何塑造情感。"
      },
      {
        "title": "爱玛",
        "year": "1815",
        "intro": "以一位自作聪明的年轻女性为中心，探讨社交、成长与自知。"
      }
    ],
    "links": [
      [
        "tolstoy",
        "从乡绅社会到帝国全景的叙事扩展"
      ]
    ],
    "subjects": [
      "literature"
    ]
  },
  {
    "id": "kafka",
    "subject": "literature",
    "region": "world",
    "year": 1915,
    "dates": "1883—1924",
    "name": "弗兰茨·卡夫卡",
    "alias": "现代异化与官僚荒诞的探路者",
    "era": "modern",
    "period": "奥匈帝国—捷克斯洛伐克",
    "summary": "用简洁克制的语言写出个体在不可理解的官僚、法律与家庭权力中被异化的处境。",
    "life": "生于布拉格犹太德语家庭，在法律保险公司供职。创作主要在业余时间，生前发表作品极少，逝世前嘱托朋友销毁手稿，所幸未被执行。",
    "context": "奥匈帝国解体、民族主义高涨与都市异化，现代人的孤独感成为文学核心主题。",
    "style": [
      "精确而冷静的叙述",
      "荒诞情节的日常化",
      "隐喻与寓言性"
    ],
    "ideas": [
      "个体的无力与权力的不可理解",
      "异化与现代人的困境"
    ],
    "works": [
      {
        "title": "变形记",
        "year": "1915",
        "intro": "推销员一觉醒来变成甲虫，一个家庭因此逐步剥离对人的尊严的认同。"
      },
      {
        "title": "审判",
        "year": "1925",
        "intro": "K被捕却不知道自己犯了什么罪，在无法理解的司法程序中走向死亡。"
      }
    ],
    "links": [
      [
        "luxun",
        "现代性中的异化与反抗"
      ],
      [
        "caoxueqin",
        "制度性命运下的个体处境"
      ]
    ],
    "subjects": [
      "literature",
      "philosophy"
    ]
  },
  {
    "id": "garcialorca",
    "subject": "literature",
    "region": "world",
    "year": 1936,
    "dates": "1898—1936",
    "name": "加西亚·洛尔迦",
    "alias": "西班牙诗歌与戏剧的天才",
    "era": "modern",
    "period": "西班牙·第二共和国",
    "summary": "把安达卢西亚的民谣传统、死亡意象与超现实主义语言融为一体，写出西班牙灵魂深处的悲剧与美。",
    "life": "生于格拉纳达，在马德里结识达利、布努埃尔。曾赴纽约、古巴讲学。西班牙内战初期被民族主义势力处决，年仅38岁。",
    "context": "西班牙社会矛盾激化、内战爆发，民间传统与现代主义同时存在。",
    "style": [
      "民谣节奏与超现实意象",
      "死亡与欲望的反复主题",
      "\"深歌\"式的反复与哭泣"
    ],
    "ideas": [
      "民间声音与现代诗歌的结合",
      "死亡作为创作的核心动力"
    ],
    "works": [
      {
        "title": "吉普赛谣曲集",
        "year": "1928",
        "intro": "以吉普赛人的视角融合安达卢西亚的传说与当代抗争。"
      },
      {
        "title": "血的婚礼",
        "year": "1933",
        "intro": "以安达卢西亚乡村的悲剧爱情探讨命运、荣誉与欲望。"
      }
    ],
    "links": [
      [
        "guanhanqing",
        "民间舞台与悲剧的跨文化对话"
      ]
    ],
    "subjects": [
      "literature"
    ]
  },
  {
    "id": "marquez",
    "subject": "literature",
    "region": "world",
    "year": 1967,
    "dates": "1927—2014",
    "name": "加夫列尔·加西亚·马尔克斯",
    "alias": "魔幻现实主义的代表",
    "era": "contemporary",
    "period": "哥伦比亚·拉美",
    "summary": "把家族记忆、拉美历史与神话元素织入小说，使个人叙事成为大陆命运的隐喻。",
    "life": "生于哥伦比亚阿拉卡塔卡，早年从事新闻工作，流亡与游历欧洲。1982年获得诺贝尔文学奖。",
    "context": "拉美军政府统治、左翼运动和\"文学爆炸\"共同催生了以地方经验回应全球现代性的叙事。",
    "style": [
      "魔幻现实主义",
      "循环与重复的时间结构",
      "新闻般的细节与神话般的整体"
    ],
    "ideas": [
      "拉美的孤独与历史循环",
      "家族故事作为大陆寓言"
    ],
    "works": [
      {
        "title": "百年孤独",
        "year": "1967",
        "intro": "以马孔多镇和布恩迪亚家族七代人的故事，编织个人、家族与拉美大陆的创世、繁荣与毁灭。"
      }
    ],
    "links": [
      [
        "caoxueqin",
        "家族史诗作为文明寓言"
      ],
      [
        "luxun",
        "现代性的孤独与批判"
      ]
    ],
    "subjects": [
      "literature"
    ]
  },
  {
    "id": "xunzi",
    "subject": "sociology",
    "region": "china",
    "year": -280,
    "dates": "约前310—前235",
    "name": "荀子",
    "alias": "礼制社会思想的系统化者",
    "era": "ancient",
    "period": "战国末期",
    "summary": "从欲望、资源、分工与人为规范出发解释群体秩序，把礼看成转化人性、组织社会的制度技术。",
    "life": "赵国人，曾在齐国稷下学宫讲学并任祭酒，后任楚国兰陵令。现存《荀子》由后世编定。",
    "context": "兼并战争加剧，诸子争论如何从分裂中建立可持续的大规模秩序。",
    "style": [
      "层层推进的论辩",
      "譬喻与排比密集",
      "概念兼具伦理与制度意味"
    ],
    "ideas": [
      "化性起伪",
      "礼、分工与群体秩序"
    ],
    "works": [
      {
        "title": "荀子·性恶",
        "year": "战国",
        "intro": "论证人的自然欲望需要学习、礼义和有意识的努力加以转化。"
      },
      {
        "title": "荀子·王制",
        "year": "战国",
        "intro": "从分工、等级和资源治理讨论国家秩序。"
      }
    ],
    "links": [
      [
        "confucius",
        "重构儒家礼学"
      ],
      [
        "shangyang",
        "与法家秩序观对照"
      ]
    ],
    "subjects": [
      "philosophy",
      "sociology",
      "politics"
    ]
  },
  {
    "id": "ibnkhaldun",
    "subject": "sociology",
    "region": "world",
    "year": 1377,
    "dates": "1332—1406",
    "name": "伊本·赫勒敦",
    "alias": "历史社会学的先驱",
    "era": "medieval",
    "period": "马格里布—马穆鲁克时代",
    "summary": "用\"群体团结\"、生计方式和王朝循环解释政治兴衰，把历史材料提升为关于社会机制的比较研究。",
    "life": "生于突尼斯的安达卢西亚裔家族，辗转北非宫廷任职、入狱与出使，后在开罗任教并担任法官。",
    "context": "北非政权频繁更替，游牧与城市社会持续互动，伊斯兰史学已积累大量王朝记录。",
    "style": [
      "从史料批判进入机制解释",
      "类型比较与循环模型",
      "自传经验融入观察"
    ],
    "ideas": [
      "阿萨比亚／群体团结",
      "游牧—城市—王朝循环"
    ],
    "works": [
      {
        "title": "历史绪论",
        "year": "1377",
        "intro": "为世界史建立方法论导言，讨论社会组织、权力、经济、教育和知识。"
      }
    ],
    "links": [
      [
        "braudel",
        "结构史学的远方先声"
      ]
    ],
    "subjects": [
      "sociology",
      "history",
      "politics"
    ]
  },
  {
    "id": "durkheim",
    "subject": "sociology",
    "region": "world",
    "year": 1895,
    "dates": "1858—1917",
    "name": "埃米尔·涂尔干",
    "alias": "社会学学科制度的奠基者",
    "era": "modern",
    "period": "法兰西第三共和国",
    "summary": "坚持把社会事实作为独立对象研究，用比较、统计和制度分析解释现代社会的团结与失范。",
    "life": "生于法国犹太家庭，在波尔多和巴黎任教，创办《社会学年鉴》。一战及丧子重创其晚年。",
    "context": "工业化、世俗教育和政治动荡催生了对社会整合的专业研究。",
    "style": [
      "定义先行的严密论证",
      "统计比较与排除法",
      "从制度追问集体表象"
    ],
    "ideas": [
      "社会事实",
      "机械团结与有机团结",
      "失范"
    ],
    "works": [
      {
        "title": "社会学方法的准则",
        "year": "1895",
        "intro": "说明如何界定、观察并解释社会事实。"
      },
      {
        "title": "自杀论",
        "year": "1897",
        "intro": "用群体差异说明看似最私人化的行为也有社会原因。"
      }
    ],
    "links": [
      [
        "feixiaotong",
        "学科方法与本土经验"
      ],
      [
        "weber",
        "现代社会的两条分析路径"
      ]
    ],
    "subjects": [
      "sociology",
      "philosophy"
    ]
  },
  {
    "id": "feixiaotong",
    "subject": "sociology",
    "region": "china",
    "year": 1947,
    "dates": "1910—2005",
    "name": "费孝通",
    "alias": "中国社会学与人类学的本土化者",
    "era": "contemporary",
    "period": "20世纪中国",
    "summary": "从田野调查出发创造\"差序格局\"等概念，在社区细节与国家转型之间搭桥。",
    "life": "江苏吴江人，先后求学于燕京、清华和伦敦政治经济学院，师从马林诺夫斯基。长期从事社会调查、教学与公共工作。",
    "context": "乡村危机、战争、国家重建和快速现代化，使\"如何认识中国社会\"成为持续课题。",
    "style": [
      "从具体社区提炼概念",
      "清楚节制的公共表达",
      "比较而不套用现成模型"
    ],
    "ideas": [
      "差序格局",
      "礼治秩序",
      "从实求知"
    ],
    "works": [
      {
        "title": "江村经济",
        "year": "1939",
        "intro": "以开弦弓村为个案分析乡村经济、家庭与社会变迁。"
      },
      {
        "title": "乡土中国",
        "year": "1947",
        "intro": "以短章概念化熟人社会、差序格局与礼治秩序。"
      }
    ],
    "links": [
      [
        "durkheim",
        "从普遍方法到本土概念"
      ],
      [
        "liangshuming",
        "乡村建设与社会认识的分歧"
      ]
    ],
    "subjects": [
      "sociology",
      "history"
    ]
  },
  {
    "id": "yanfu",
    "subject": "sociology",
    "region": "china",
    "year": 1903,
    "dates": "1854—1921",
    "name": "严复",
    "alias": "近代社会思想的翻译引入者",
    "era": "modern",
    "period": "晚清—民初",
    "summary": "通过译介赫胥黎、斯宾塞、穆勒等著作，把进化论、社会学与自由思想引入近代中国公共论述。",
    "life": "福建侯官人，毕业于福建船政学堂，留学英国皇家海军学院。回国后任北洋水师学堂总教习，晚年支持袁世凯并转向保守。",
    "context": "甲午战败后民族危机空前，\"群学\"作为救亡知识被引入中国。",
    "style": [
      "以典雅古文翻译西学",
      "案语中融入中国参照",
      "概念创造与抉择"
    ],
    "ideas": [
      "以译介回应救亡",
      "群己权界与社会进化"
    ],
    "works": [
      {
        "title": "天演论（译）",
        "year": "1898",
        "intro": "译述赫胥黎《进化论与伦理学》，以\"物竞天择、适者生存\"震动晚清知识界。"
      },
      {
        "title": "群学肄言（译）",
        "year": "1903",
        "intro": "译斯宾塞《社会学研究》部分内容，把\"群学\"引入中文语境。"
      }
    ],
    "links": [
      [
        "durkheim",
        "社会学的两条传入路径：严复的译介与留学生的学科建制"
      ],
      [
        "feixiaotong",
        "从译介到田野的学科历程"
      ]
    ],
    "subjects": [
      "sociology"
    ]
  },
  {
    "id": "liangshuming",
    "subject": "sociology",
    "region": "china",
    "year": 1937,
    "dates": "1893—1988",
    "name": "梁漱溟",
    "alias": "乡村建设运动的思想家",
    "era": "modern",
    "period": "民国",
    "summary": "从文化比较出发理解中国社会结构，以乡村建设实践回应现代性对传统共同体的冲击。",
    "life": "生于北京官宦家庭，早年倾向佛教后转向儒学。从事乡村建设实验，战时参与政治协商，建国后长期受到批判。",
    "context": "工业化与城市化冲击中国农村，乡村危机成为知识界关注焦点。",
    "style": [
      "文化哲学与个案观察的结合",
      "通俗的表达与强烈的社会责任感",
      "实践与理论同步推进"
    ],
    "ideas": [
      "中国文化作为伦理本位",
      "乡村建设作为社会再造"
    ],
    "works": [
      {
        "title": "东西文化及其哲学",
        "year": "1921",
        "intro": "比较中、西、印三种文化路径，提出中国文化以伦理为本位。"
      },
      {
        "title": "乡村建设理论",
        "year": "1937",
        "intro": "从乡村组织、教育与合作入手重建中国社会。"
      }
    ],
    "links": [
      [
        "feixiaotong",
        "农村研究的两种路径：文化哲学 vs 田野调查"
      ],
      [
        "weber",
        "对比：中国社会伦理与资本主义精神"
      ]
    ],
    "subjects": [
      "sociology"
    ]
  },
  {
    "id": "marx",
    "subject": "sociology",
    "region": "world",
    "year": 1848,
    "dates": "1818—1883",
    "name": "卡尔·马克思",
    "alias": "历史唯物主义和社会批判理论奠基者",
    "era": "modern",
    "period": "德国—欧洲",
    "summary": "从物质生产、阶级关系与意识形态角度解释社会变迁，把哲学批判落实为对资本主义的政治经济学分析。",
    "life": "出生于普鲁士特里尔，先后求学于波恩大学和柏林大学。从事新闻工作、流亡欧洲各地，最终定居伦敦，长期在大英博物馆研究。",
    "context": "工业革命深化、工人阶级形成、欧洲革命浪潮使\"社会如何变革\"成为紧迫的理论与实践问题。",
    "style": [
      "辩证法的分析框架",
      "从抽象到具体的论证结构",
      "批判性与规范性并重"
    ],
    "ideas": [
      "历史唯物主义",
      "异化与剩余价值"
    ],
    "works": [
      {
        "title": "共产党宣言",
        "year": "1848",
        "intro": "与恩格斯合著，以阶级分析为核心论述资本主义的历史性与共产主义的必然性。"
      },
      {
        "title": "资本论",
        "year": "1867—1894",
        "intro": "以政治经济学批判为核心，分析商品、资本与剩余价值的运作机制。"
      }
    ],
    "links": [
      [
        "durkheim",
        "两套社会解释的竞争：阶级冲突 vs 社会整合"
      ],
      [
        "weber",
        "从物质基础到多元社会动力"
      ]
    ],
    "subjects": [
      "sociology",
      "politics",
      "philosophy"
    ]
  },
  {
    "id": "weber",
    "subject": "sociology",
    "region": "world",
    "year": 1905,
    "dates": "1864—1920",
    "name": "马克斯·韦伯",
    "alias": "理解社会学的奠基者",
    "era": "modern",
    "period": "德意志帝国",
    "summary": "以\"理解社会学\"解释现代性的形成，把理性化、官僚制与宗教观念纳入对资本主义的多维分析。",
    "life": "生于德国埃尔福特，海德堡大学求学，先后任教于弗莱堡、海德堡和慕尼黑大学。曾参与凡尔赛和约谈判。",
    "context": "德意志统一后的工业化、官僚化与学术专业化，使\"现代性\"成为社会科学的核心问题。",
    "style": [
      "类型学与比较方法",
      "严密的概念定义与经验材料结合",
      "价值中立与立场清醒之间的张力"
    ],
    "ideas": [
      "理性化与\"铁笼\"",
      "新教伦理与资本主义精神",
      "正当支配的类型"
    ],
    "works": [
      {
        "title": "新教伦理与资本主义精神",
        "year": "1905",
        "intro": "讨论加尔文宗预定论如何影响资本主义经济伦理的形成。"
      },
      {
        "title": "经济与社会",
        "year": "1922遗作",
        "intro": "系统论述社会行动、支配类型、官僚制与法律社会学。"
      }
    ],
    "links": [
      [
        "marx",
        "物质与观念：谁塑造了现代性"
      ],
      [
        "durkheim",
        "现代社会分析的两大经典范式"
      ]
    ],
    "subjects": [
      "sociology",
      "politics",
      "history"
    ]
  },
  {
    "id": "tocqueville",
    "subject": "sociology",
    "region": "world",
    "year": 1835,
    "dates": "1805—1859",
    "name": "阿列克西·德·托克维尔",
    "alias": "民主社会的比较分析者",
    "era": "modern",
    "period": "法国·七月王朝至第二帝国",
    "summary": "以亲身观察和比较方法分析民主对个人、社会与政治生活的深层影响，既看到平等趋势的不可逆，也警惕多数暴政与行政集权。",
    "life": "出生于法国诺曼底贵族家庭，曾任法官和议员。赴美考察九个月后写成《论美国的民主》，后参加第二共和国政治，路易·波拿巴政变后退隐。",
    "context": "法国经历大革命、专制复辟与革命再起的动荡，美国民主实验成为参照。",
    "style": [
      "旅行见闻与制度分析的结合",
      "敏锐的心理与社会机制观察",
      "节制而清醒的修辞"
    ],
    "ideas": [
      "民主的不可逆与内在风险",
      "平等与自由之间的张力"
    ],
    "works": [
      {
        "title": "论美国的民主",
        "year": "1835—1840",
        "intro": "分析美国民主制度与民情如何互相支撑，同时警告多数暴政与温和专制。"
      },
      {
        "title": "旧制度与大革命",
        "year": "1856",
        "intro": "从制度与心态层面解释法国大革命为何在旧制度最强的领域爆发。"
      }
    ],
    "links": [
      [
        "weber",
        "现代性分析：民主 vs 理性化"
      ]
    ],
    "subjects": [
      "sociology"
    ]
  },
  {
    "id": "bourdieu",
    "subject": "sociology",
    "region": "world",
    "year": 1979,
    "dates": "1930—2002",
    "name": "皮埃尔·布迪厄",
    "alias": "文化社会学的革新者",
    "era": "contemporary",
    "period": "法国·第五共和国",
    "summary": "以\"资本\"（经济、文化、社会、符号）和\"场域\"等概念重新理解阶层、教育与社会再生产。",
    "life": "生于法国贝亚恩，求学于巴黎高等师范学院，先后在阿尔及利亚和法国从事田野研究。晚年成为法国最受关注的公共知识分子之一。",
    "context": "战后法国社会变迁、教育扩张与阶层流动问题使文化不平等成为社会学焦点。",
    "style": [
      "概念创造与经验研究的紧密配合",
      "场域与资本的网络式分析",
      "自反社会学的方法自觉"
    ],
    "ideas": [
      "文化资本与阶层再生产",
      "场域与惯习",
      "符号暴力"
    ],
    "works": [
      {
        "title": "区分：对趣味判断的社会批判",
        "year": "1979",
        "intro": "通过大量调查数据证明\"趣味\"是社会分层的产物。"
      },
      {
        "title": "实践理性纲要",
        "year": "1980",
        "intro": "系统阐述惯习、场域与实践理论。"
      }
    ],
    "links": [
      [
        "durkheim",
        "从社会事实到符号系统的演变"
      ],
      [
        "feixiaotong",
        "本土概念与普遍理论的对话"
      ]
    ],
    "subjects": [
      "sociology",
      "philosophy"
    ]
  },
  {
    "id": "giddens",
    "subject": "sociology",
    "region": "world",
    "year": 1990,
    "dates": "1938—",
    "name": "安东尼·吉登斯",
    "alias": "现代性与结构化理论的综合者",
    "era": "contemporary",
    "period": "英国·战后",
    "summary": "把行动与结构的二元关系改造为\"结构化\"，并分析高度现代性对个人生活、信任与风险的深刻重塑。",
    "life": "生于伦敦北部的埃德蒙顿，在赫尔大学和伦敦政经学院求学，后任教于剑桥大学，长期担任伦敦政经学院院长。",
    "context": "全球化、个体化与风险社会挑战传统的社会学分析框架。",
    "style": [
      "对既有理论流派的综合与重构",
      "从制度分析转向日常实践",
      "清晰的概念提炼与时代诊断"
    ],
    "ideas": [
      "结构化理论",
      "现代性的后果",
      "脱嵌与再嵌入"
    ],
    "works": [
      {
        "title": "现代性的后果",
        "year": "1990",
        "intro": "分析现代性如何把社会关系从地方语境中\"脱嵌\"出去并重新组织。"
      },
      {
        "title": "社会的构成",
        "year": "1984",
        "intro": "提出行动与结构的二重性，重新思考社会理论的基础。"
      }
    ],
    "links": [
      [
        "weber",
        "理性化与脱嵌：现代性分析的延续"
      ],
      [
        "bourdieu",
        "行动理论与结构化理论的对话"
      ]
    ],
    "subjects": [
      "sociology",
      "politics"
    ]
  },
  {
    "id": "herskovits",
    "subject": "sociology",
    "region": "world",
    "year": 1928,
    "dates": "1895—1963",
    "name": "梅尔维尔·赫斯科维茨",
    "alias": "文化相对主义的系统阐释者",
    "era": "contemporary",
    "period": "美国·20世纪早期",
    "summary": "以非洲裔文化的田野研究为基础，系统阐发文化相对主义，对抗种族中心的进化论偏见。",
    "life": "生于美国俄亥俄州，师从弗兰兹·博厄斯。长期任教于西北大学，建立了美国第一个非洲研究项目。",
    "context": "种族隔离、殖民主义与进化论人类学盛行，学科内部兴起对文化等级观的批判。",
    "style": [
      "扎实的民族志细节",
      "跨文化比较中保持价值中立",
      "从文化适应理解变迁"
    ],
    "ideas": [
      "文化相对主义",
      "作为学科概念的\"文化\""
    ],
    "works": [
      {
        "title": "人类学导论（Man and His Works）",
        "year": "1948",
        "intro": "系统阐述文化相对主义，反对种族中心的评价标准。"
      },
      {
        "title": "原始社会中经济生活",
        "year": "1952",
        "intro": "从跨文化视角分析非市场经济社会的交换与价值观念。"
      }
    ],
    "links": [
      [
        "feixiaotong",
        "文化相对主义与本土社会认知"
      ]
    ],
    "subjects": [
      "sociology"
    ]
  },
  {
    "id": "goffman",
    "subject": "sociology",
    "region": "world",
    "year": 1956,
    "dates": "1922—1982",
    "name": "欧文·戈夫曼",
    "alias": "日常互动分析的开创者",
    "era": "contemporary",
    "period": "加拿大—美国",
    "summary": "把日常社会互动当作微观戏剧来分析，揭示个体如何在他人面前管理自我印象与社会身份。",
    "life": "生于加拿大曼维尔，芝加哥大学社会学博士，长期任教于加州大学伯克利分校和宾夕法尼亚大学。",
    "context": "战后美国丰裕社会与身份焦虑催生了对日常生活的微观社会学关注。",
    "style": [
      "戏剧分析框架",
      "机智而冷峻的观察写作",
      "现场感强烈的微观描述"
    ],
    "ideas": [
      "印象管理与角色扮演",
      "社会互动的剧场模型"
    ],
    "works": [
      {
        "title": "日常生活中的自我呈现",
        "year": "1956",
        "intro": "以剧场模型分析个人如何在他人面前呈现和维持社会形象。"
      },
      {
        "title": "污名",
        "year": "1963",
        "intro": "分析社会身份被贬低者如何管理信息与互动。"
      }
    ],
    "links": [
      [
        "bourdieu",
        "从微观互动到宏观场域：两种身体社会学的对话"
      ],
      [
        "feixiaotong",
        "熟人社会中的脸面与互动"
      ]
    ],
    "subjects": [
      "sociology",
      "literature"
    ]
  },
  {
    "id": "habermas",
    "subject": "sociology",
    "region": "world",
    "year": 1962,
    "dates": "1929—",
    "name": "尤尔根·哈贝马斯",
    "alias": "公共领域与交往理性的理论家",
    "era": "contemporary",
    "period": "德国·战后",
    "summary": "从公共领域的结构转型出发，以\"交往理性\"重构社会批判理论的基础，回应现代性的合法性问题。",
    "life": "生于德国杜塞尔多夫，法兰克福学派第二代核心人物。先后任教于海德堡、法兰克福大学和社会科学研究中心。",
    "context": "战后西德民主化、消费社会与媒体扩张改变了公共讨论的条件。",
    "style": [
      "体系化的宏大理论建构",
      "跨学科综合（社会学、哲学、语言学、法学）",
      "以规范论批判现实"
    ],
    "ideas": [
      "公共领域的结构转型",
      "交往理性与系统对生活世界的殖民"
    ],
    "works": [
      {
        "title": "公共领域的结构转型",
        "year": "1962",
        "intro": "分析18世纪以来资产阶级公共领域的兴起与衰落。"
      },
      {
        "title": "交往行为理论",
        "year": "1981",
        "intro": "以语言交往为基础重新理解社会行动与理性。"
      }
    ],
    "links": [
      [
        "weber",
        "理性化批判的两条道路"
      ],
      [
        "giddens",
        "现代性分析的规范维度"
      ]
    ],
    "subjects": [
      "sociology"
    ]
  },
  {
    "id": "merton",
    "subject": "sociology",
    "region": "world",
    "year": 1936,
    "dates": "1910—2003",
    "name": "罗伯特·K·默顿",
    "alias": "科学社会学与中层理论的倡导者",
    "era": "contemporary",
    "period": "美国·20世纪",
    "summary": "提出\"中层理论\"作为宏观理论与微观研究之间的桥梁，并在科学社会学领域开创了典范性工作。",
    "life": "生于美国费城，师从帕森斯，长期任教于哥伦比亚大学。培养了大量社会学学者，指导多位诺贝尔奖得主在科学社会学方面的研究。",
    "context": "战后美国社会学寻求理论的系统化，在宏大理论与实证研究之间找到中间路径。",
    "style": [
      "概念界定严谨",
      "理论适用于可检验的命题",
      "借用概念发展理论"
    ],
    "ideas": [
      "中层理论",
      "显功能与潜功能",
      "自证预言"
    ],
    "works": [
      {
        "title": "社会理论与社会结构",
        "year": "1949",
        "intro": "系统论述中层理论、参群体与自证预言等概念。"
      },
      {
        "title": "科学社会学",
        "year": "1973",
        "intro": "分析科学共同体的规范结构、奖励系统和优先权争议。"
      }
    ],
    "links": [
      [
        "weber",
        "从理性化到知识社会学的中观路径"
      ],
      [
        "bourdieu",
        "科学场域的两种分析框架"
      ]
    ],
    "subjects": [
      "sociology"
    ]
  },
  {
    "id": "shangyang",
    "subject": "politics",
    "region": "china",
    "year": -356,
    "dates": "约前390—前338",
    "name": "商鞅",
    "alias": "战国国家能力的设计者",
    "era": "ancient",
    "period": "战国·秦",
    "summary": "以县制、军功、户籍和法令重组社会资源，把国家富强置于世袭身份与地方传统之上。",
    "life": "卫国人，入秦后受秦孝公重用，主持两次变法。孝公去世后被政敌追究并处死，但制度大体延续。",
    "context": "诸侯战争从贵族竞争转为动员人口、土地和军队的总体竞争。",
    "style": [
      "法令式的明确分类",
      "奖惩对称",
      "以农战衡量政治成效"
    ],
    "ideas": [
      "以法治国与农战",
      "削弱世袭、强化编户齐民"
    ],
    "works": [
      {
        "title": "商君书",
        "year": "战国—秦汉编成",
        "intro": "商鞅学派文献汇编，围绕法、势、农战和国家动员展开。"
      }
    ],
    "links": [
      [
        "xunzi",
        "礼治与法治的张力"
      ],
      [
        "huangzongxi",
        "强国家与限君权的反题"
      ]
    ],
    "subjects": [
      "politics",
      "law",
      "sociology"
    ]
  },
  {
    "id": "plato",
    "subject": "politics",
    "region": "world",
    "year": -375,
    "dates": "约前427—前347",
    "name": "柏拉图",
    "alias": "正义城邦的建构者",
    "era": "ancient",
    "period": "古典希腊",
    "summary": "用对话和思想实验把灵魂秩序、教育与城邦正义连在一起，奠定规范政治哲学的核心问题。",
    "life": "出身雅典贵族家庭，经历伯罗奔尼撒战争与苏格拉底之死，后创办学园并多次前往叙拉古。",
    "context": "雅典民主危机与城邦战争迫使哲学家重新思考知识、德性和统治资格。",
    "style": [
      "戏剧化对话",
      "追问概念定义",
      "寓言与理想模型"
    ],
    "ideas": [
      "正义与灵魂三分",
      "哲人统治与教育"
    ],
    "works": [
      {
        "title": "理想国",
        "year": "约前375",
        "intro": "从\"正义是否值得\"出发，构造城邦、教育、洞穴寓言和哲人王。"
      }
    ],
    "links": [
      [
        "rawls",
        "两千年后的正义论重构"
      ],
      [
        "machiavelli",
        "从理想城邦到现实权力"
      ]
    ],
    "subjects": [
      "politics",
      "philosophy"
    ]
  },
  {
    "id": "huangzongxi",
    "subject": "politics",
    "region": "china",
    "year": 1663,
    "dates": "1610—1695",
    "name": "黄宗羲",
    "alias": "明清之际的限权思想家",
    "era": "early-modern",
    "period": "明清之际",
    "summary": "从王朝覆亡反思\"天下为主、君为客\"，主张以学校和公共议论制约一家之法。",
    "life": "浙江余姚人，父亲因东林党争遇害。参与抗清活动后退居著述，讲学并整理明代学术史。",
    "context": "明亡、党争与清初重建，使士人重新追问君主、制度与公共利益。",
    "style": [
      "借三代制度批判现实",
      "史论结合",
      "锋利而克制的制度论证"
    ],
    "ideas": [
      "天下之法",
      "学校作为公共议政空间"
    ],
    "works": [
      {
        "title": "明夷待访录",
        "year": "1663",
        "intro": "系统批判君主专制，讨论原君、原法、学校与财政兵制。"
      },
      {
        "title": "明儒学案",
        "year": "1676起",
        "intro": "以人物和学派梳理明代思想谱系，是学术史名著。"
      }
    ],
    "links": [
      [
        "wangyangming",
        "阳明学的批判继承"
      ],
      [
        "rawls",
        "制度如何服务公共而非私利"
      ],
      [
        "guyanwu",
        "明清之际的经世同道"
      ]
    ],
    "subjects": [
      "politics",
      "history",
      "philosophy"
    ]
  },
  {
    "id": "rawls",
    "subject": "politics",
    "region": "world",
    "year": 1971,
    "dates": "1921—2002",
    "name": "约翰·罗尔斯",
    "alias": "当代正义理论的重启者",
    "era": "contemporary",
    "period": "战后美国",
    "summary": "以原初状态和无知之幕重新论证自由平等公民能够接受的制度原则。",
    "life": "美国政治哲学家，经历二战后转向学术，长期任教哈佛大学。其工作推动英美政治哲学从语言分析重新回到规范制度问题。",
    "context": "战后福利国家、民权运动与意识形态竞争让公平分配和基本自由成为制度核心。",
    "style": [
      "思想实验",
      "原则排序",
      "从公平程序推出制度规范"
    ],
    "ideas": [
      "公平的正义",
      "平等自由与差别原则"
    ],
    "works": [
      {
        "title": "正义论",
        "year": "1971",
        "intro": "通过原初状态论证两项正义原则，并回应功利主义。"
      },
      {
        "title": "政治自由主义",
        "year": "1993",
        "intro": "讨论价值多元社会如何形成重叠共识。"
      }
    ],
    "links": [
      [
        "plato",
        "延续\"何为正义制度\""
      ],
      [
        "huangzongxi",
        "制度如何服务公共而非私利"
      ]
    ],
    "subjects": [
      "politics"
    ]
  },
  {
    "id": "hanfei",
    "subject": "politics",
    "region": "china",
    "year": -250,
    "dates": "约前280—前233",
    "name": "韩非子",
    "alias": "法家理论的集大成者",
    "era": "ancient",
    "period": "战国·韩国",
    "summary": "综合商鞅之法、申不害之术与慎到之势，以绝对君主和明确赏罚为秩序支柱。",
    "life": "韩国公族，与李斯同师事荀子。其著作传入秦国后被嬴政激赏。出使秦国后遭李斯陷害，入狱服毒而死。",
    "context": "兼并战争使国家生存竞争白热化，思想界系统探索富国强兵之术。",
    "style": [
      "严密的逻辑推演",
      "寓言与历史案例层层递进",
      "概念分明、前后呼应"
    ],
    "ideas": [
      "法、术、势三位一体",
      "以法为教、以吏为师"
    ],
    "works": [
      {
        "title": "韩非子",
        "year": "战国",
        "intro": "法家理论的集成著作，围绕君主如何制臣、治民和强国展开。"
      }
    ],
    "links": [
      [
        "shangyang",
        "法家内部的继承与系统化"
      ],
      [
        "confucius",
        "德治与法治的经典对勘"
      ]
    ],
    "subjects": [
      "politics",
      "philosophy",
      "law"
    ]
  },
  {
    "id": "dongzhongshu",
    "subject": "politics",
    "region": "china",
    "year": -135,
    "dates": "约前179—前104",
    "name": "董仲舒",
    "alias": "汉代儒学政治化的理论家",
    "era": "ancient",
    "period": "西汉",
    "summary": "以天人感应与春秋公羊学重新解释儒术，为大一统帝国提供宇宙论和政治哲学基础。",
    "life": "广川人，治春秋公羊学。汉武帝举贤良对策时上\"天人三策\"，建议罢黜百家、独尊儒术。后曾任江都相和胶西相。",
    "context": "汉帝国从黄老无为转向积极有为，需要统一的国家意识形态。",
    "style": [
      "天人感应的宇宙论推衍",
      "灾异与符命论证",
      "以经术缘饰吏治"
    ],
    "ideas": [
      "天人感应与大一统",
      "更化改制与政治合法性"
    ],
    "works": [
      {
        "title": "春秋繁露",
        "year": "西汉",
        "intro": "以公羊学阐释春秋，把阴阳五行、天人感应与王者之道连在一起。"
      }
    ],
    "links": [
      [
        "confucius",
        "儒学从民间学术到国家意识形态的转型"
      ],
      [
        "shangyang",
        "从法家工具到儒家意识形态的帝国治理转换"
      ]
    ],
    "subjects": [
      "politics",
      "philosophy",
      "history"
    ]
  },
  {
    "id": "guyanwu",
    "subject": "politics",
    "region": "china",
    "year": 1670,
    "dates": "1613—1682",
    "name": "顾炎武",
    "alias": "明清之际的经世实学家",
    "era": "early-modern",
    "period": "明清之际",
    "summary": "以\"天下兴亡、匹夫有责\"为信念，从经史考据与制度研究中寻找国家治理的实学基础。",
    "life": "江苏昆山人，早年参与复社抗清。明亡后游历北方，潜心著述。晚年拒应清廷博学鸿词科。",
    "context": "明亡促使部分士人反思空疏学风，转向经世实学与制度考索。",
    "style": [
      "考据与经世相结合",
      "以历史制度比较讨论现实",
      "广集资料、随笔体"
    ],
    "ideas": [
      "离封建于郡县",
      "天下兴亡、匹夫有责",
      "经世致用"
    ],
    "works": [
      {
        "title": "日知录",
        "year": "1670年起",
        "intro": "以读书札记的形式讨论经史、制度、风俗和治理之道。"
      },
      {
        "title": "天下郡国利病书",
        "year": "清初",
        "intro": "汇编各地地理、经济与行政资料，讨论地方治理的实弊。"
      }
    ],
    "links": [
      [
        "huangzongxi",
        "明清经世思潮的双峰"
      ],
      [
        "wangfuzhi",
        "从制度分析到历史哲学的反思"
      ]
    ],
    "subjects": [
      "politics",
      "history",
      "philosophy"
    ]
  },
  {
    "id": "liangqichao",
    "subject": "politics",
    "region": "china",
    "year": 1902,
    "dates": "1873—1929",
    "name": "梁启超",
    "alias": "近代政治转型与国民重塑的宣传家",
    "era": "modern",
    "period": "晚清—民国",
    "summary": "以启蒙报刊与新史学唤醒\"新民\"，在君主立宪与共和之间探索中国的现代转型道路。",
    "life": "广东新会人，举人出身，曾师从康有为。戊戌变法失败后流亡日本，创办《清议报》《新民丛报》。民国后历任多职，晚年专心学术。",
    "context": "甲午战败后民族危机深化，君主立宪、共和革命、国民改造成为政治争论的焦点。",
    "style": [
      "激情澎湃的论说文体",
      "引介西学概念时创造新词",
      "从学术提炼政治方案"
    ],
    "ideas": [
      "新民与公德",
      "国家转型与国民改造"
    ],
    "works": [
      {
        "title": "新民说",
        "year": "1902",
        "intro": "在《新民丛报》上连载，系统论述公民道德、权利与政治参与的关系。"
      },
      {
        "title": "新史学",
        "year": "1902",
        "intro": "批评旧史以帝王为中心，主张书写国民的历史。"
      }
    ],
    "links": [
      [
        "huangzongxi",
        "从限君权到构建国民政治"
      ],
      [
        "guyanwu",
        "从经世实学到现代国民的演变"
      ]
    ],
    "subjects": [
      "politics",
      "history",
      "literature"
    ]
  },
  {
    "id": "sunzhongshan",
    "subject": "politics",
    "region": "china",
    "year": 1912,
    "dates": "1866—1925",
    "name": "孙中山",
    "alias": "中国共和革命的先行者",
    "era": "modern",
    "period": "晚清—民国",
    "summary": "以三民主义和五权宪法为纲领，领导辛亥革命终结帝制，探索中国建立现代民族国家的道路。",
    "life": "广东香山人，早期行医并组织兴中会，流亡欧美。领导辛亥革命后任临时大总统，后为护法与统一不断奔波。",
    "context": "帝国崩溃、军阀混战与国际列强势力交错，共和制度面临存亡考验。",
    "style": [
      "以三个主义概括政治蓝图",
      "革命号召与制度建设并存",
      "跨文化的政治知识融合"
    ],
    "ideas": [
      "三民主义（民族、民权、民生）",
      "五权宪法"
    ],
    "works": [
      {
        "title": "三民主义（演讲）",
        "year": "1924",
        "intro": "十六次演讲系统阐述民族、民权与民生三大主义及实现路径。"
      }
    ],
    "links": [
      [
        "huangzongxi",
        "从天下到国家的政治理想演进"
      ],
      [
        "liangqichao",
        "从国民改造到共和革命"
      ]
    ],
    "subjects": [
      "politics",
      "law"
    ]
  },
  {
    "id": "machiavelli",
    "subject": "politics",
    "region": "world",
    "year": 1513,
    "dates": "1469—1527",
    "name": "尼可罗·马基雅维利",
    "alias": "近代政治科学之父",
    "era": "early-modern",
    "period": "意大利·文艺复兴",
    "summary": "把政治从道德和宗教中相对独立出来，以\"效果\"和\"实际\"重新定义统治技艺。",
    "life": "佛罗伦萨共和国的外交官和民兵组织者，美第奇复辟后遭罢免、囚禁。退休后写作《君主论》和《论李维》。",
    "context": "意大利四分五裂、城邦竞争、法国与西班牙入侵，使\"如何挽救祖国\"成为紧迫问题。",
    "style": [
      "以历史经验而非理想模型出发",
      "格言式判断与案例并举",
      "冷峻、直接、挑衅性的写作"
    ],
    "ideas": [
      "政治效果优先于道德判断",
      "德性与机运",
      "共和与君主两种统治形式"
    ],
    "works": [
      {
        "title": "君主论",
        "year": "1532",
        "intro": "以古今案例讨论君主如何获取和维持权力。"
      },
      {
        "title": "论李维",
        "year": "1531",
        "intro": "通过重读李维的罗马史讨论共和国的制度与公民精神。"
      }
    ],
    "links": [
      [
        "shangyang",
        "政治效果与秩序的跨文明对话"
      ],
      [
        "plato",
        "从理想国到现实的权力政治"
      ]
    ],
    "subjects": [
      "politics",
      "history"
    ]
  },
  {
    "id": "hobbes",
    "subject": "politics",
    "region": "world",
    "year": 1651,
    "dates": "1588—1679",
    "name": "托马斯·霍布斯",
    "alias": "现代国家主权理论的奠基者",
    "era": "early-modern",
    "period": "英格兰·内战时期",
    "summary": "以自然状态与契约论证绝对主权的必要性，把政治秩序建立在个体恐惧与理性同意之上。",
    "life": "生于英格兰，曾任培根的秘书。英国内战期间流亡法国，任教查理二世王子。晚年返回英国。",
    "context": "宗教冲突与内战使\"秩序如何可能\"成为政治理论的出发点。",
    "style": [
      "几何学式的推演",
      "从人的自然状态到社会契约的严密论证",
      "定义先行"
    ],
    "ideas": [
      "自然状态即战争状态",
      "利维坦与绝对主权"
    ],
    "works": [
      {
        "title": "利维坦",
        "year": "1651",
        "intro": "从人的感觉与欲望出发，逐步论证自然状态、社会契约与绝对主权。"
      }
    ],
    "links": [
      [
        "locke",
        "主权范围的分歧：绝对 vs 有限"
      ],
      [
        "xunzi",
        "人性论与秩序论证的跨文化比较"
      ]
    ],
    "subjects": [
      "politics",
      "philosophy"
    ]
  },
  {
    "id": "locke",
    "subject": "politics",
    "region": "world",
    "year": 1689,
    "dates": "1632—1704",
    "name": "约翰·洛克",
    "alias": "自由宪政与自然权利的理论家",
    "era": "early-modern",
    "period": "英格兰·光荣革命",
    "summary": "以自然权利、财产、同意与反抗权论证有限政府，为自由宪政奠定哲学基础。",
    "life": "生于英格兰，牛津大学求学。流亡荷兰期间写作，光荣革命后返回出版主要著作。曾任贸易和殖民地事务官员。",
    "context": "光荣革命后议会主权确立，需要对政府权力和权利的范围进行理论论证。",
    "style": [
      "日常语言分析式的论证",
      "经验主义的方法论起点",
      "权利与义务的对等推演"
    ],
    "ideas": [
      "自然权利（生命、自由、财产）",
      "有限政府与多数同意",
      "反抗权"
    ],
    "works": [
      {
        "title": "政府论",
        "year": "1689",
        "intro": "前后两篇，批判菲尔默的君权神授论并论证有限政府与个体权利。"
      },
      {
        "title": "人类理解论",
        "year": "1689",
        "intro": "以经验主义认识论探讨知识的起源和确实性。"
      }
    ],
    "links": [
      [
        "hobbes",
        "从绝对主权到有限政府"
      ],
      [
        "huangzongxi",
        "权利与\"天下之法\"的跨文明对话"
      ]
    ],
    "subjects": [
      "politics",
      "philosophy"
    ]
  },
  {
    "id": "rousseau",
    "subject": "politics",
    "region": "world",
    "year": 1762,
    "dates": "1712—1778",
    "name": "让-雅克·卢梭",
    "alias": "人民主权与社会契约的激进阐释者",
    "era": "early-modern",
    "period": "法国·启蒙时代",
    "summary": "以\"公意\"重新定义政治合法性，把自由理解为服从自己制定的法律。",
    "life": "生于日内瓦的钟表匠家庭，早年流浪。出版了影响巨大的《论科学与艺术》《社会契约论》和《爱弥儿》，晚年写就《忏悔录》。",
    "context": "旧制度危机与启蒙运动深化，使\"如何使人在社会中保持自由\"成为核心追问。",
    "style": [
      "热烈的修辞与哲学论证的结合",
      "从人的自然状态到文明批判",
      "简洁而有力的格言式表述"
    ],
    "ideas": [
      "公意与人民主权",
      "自然状态与文明异化",
      "公共教育与公民宗教"
    ],
    "works": [
      {
        "title": "社会契约论",
        "year": "1762",
        "intro": "论证个人社会结合时如何既服从整体又保持自由。"
      },
      {
        "title": "论人类不平等的起源和基础",
        "year": "1755",
        "intro": "追踪从自然状态到财产社会造成不平等的机制。"
      }
    ],
    "links": [
      [
        "locke",
        "两种社会契约观的对照"
      ],
      [
        "rawls",
        "从公意到重叠共识的正义之路"
      ]
    ],
    "subjects": [
      "politics",
      "philosophy",
      "literature"
    ]
  },
  {
    "id": "arendt",
    "subject": "politics",
    "region": "world",
    "year": 1951,
    "dates": "1906—1975",
    "name": "汉娜·阿伦特",
    "alias": "极权主义与公共领域的分析者",
    "era": "contemporary",
    "period": "德国—美国",
    "summary": "以极权主义起源的分析追问现代政治如何摧毁人的行动能力，并主张以公共参与重建政治的意义。",
    "life": "生于德国汉诺威犹太家庭，师从海德格尔和雅斯贝尔斯。纳粹上台后流亡法国，再逃亡美国。战后在多所大学任教。",
    "context": "纳粹大屠杀与冷战使\"行动\"与\"判断\"成为政治理论无法回避的问题。",
    "style": [
      "现象学还原式的概念分析",
      "把欧洲哲学传统带入政治判断",
      "叙事与分析并重"
    ],
    "ideas": [
      "极权主义的起源",
      "平庸之恶",
      "行动与公共空间"
    ],
    "works": [
      {
        "title": "极权主义的起源",
        "year": "1951",
        "intro": "分析反犹主义、帝国主义与极权主义三个环节。"
      },
      {
        "title": "人的境况",
        "year": "1958",
        "intro": "将人类活动分为劳动、工作和行动三种。"
      }
    ],
    "links": [
      [
        "plato",
        "公共政治生活的古今之变"
      ],
      [
        "marx",
        "行动与劳动的重新区分"
      ]
    ],
    "subjects": [
      "politics",
      "philosophy",
      "sociology"
    ]
  },
  {
    "id": "sant",
    "subject": "politics",
    "region": "world",
    "year": 1918,
    "dates": "1889—1945",
    "name": "瓦尔特·本雅明",
    "alias": "现代性与文化批判的独特声音",
    "era": "contemporary",
    "period": "德国—流亡",
    "summary": "以灵光消逝、历史天使等意象连接文化批判、政治哲学与神学，在破碎的现代经验中寻找救赎的缝隙。",
    "life": "生于柏林犹太家庭，曾参与法兰克福学派外围活动。纳粹上台后流亡法国，1940年逃亡西班牙边境时自杀。",
    "context": "欧洲法西斯兴起、艺术的技术复制时代，文化成为政治斗争的新战场。",
    "style": [
      "格言、意象与片段式写作",
      "弥赛亚式的历史阐释",
      "跨学科拼贴"
    ],
    "ideas": [
      "灵光消逝与技术复制",
      "历史进步论的批判",
      "弥赛亚式的断裂时间"
    ],
    "works": [
      {
        "title": "机械复制时代的艺术作品",
        "year": "1936",
        "intro": "分析摄影和电影如何改变艺术的本真性与社会功能。"
      },
      {
        "title": "历史哲学论纲",
        "year": "1940",
        "intro": "以\"历史天使\"的意象批判历史进步主义。"
      }
    ],
    "links": [
      [
        "marx",
        "文化批判与政治经济学的交汇"
      ],
      [
        "luxun",
        "现代性废墟中的历史目光"
      ]
    ],
    "subjects": [
      "politics"
    ]
  },
  {
    "id": "simaqian",
    "subject": "history",
    "region": "china",
    "year": -91,
    "dates": "约前145—约前86",
    "name": "司马迁",
    "alias": "纪传体通史的创造者",
    "era": "ancient",
    "period": "西汉",
    "summary": "让帝王、诸侯、思想家、刺客与普通人的命运并列成史，在事实记录中保留强烈的道德张力与个人目光。",
    "life": "十岁诵古文，二十岁壮游天下。继承父业任太史令，得以遍览皇家藏书。因替李陵辩护触怒汉武帝，被判死刑，以\"人固有一死，或重于泰山，或轻于鸿毛\"自励，选择接受宫刑以完成《史记》。",
    "context": "汉帝国统一后需要重新组织从传说到当代的共同历史，同时皇权控制历史解释。",
    "style": [
      "本纪、世家、列传互相照见",
      "细节和对话塑造人物",
      "\"不虚美、不隐恶\"的褒贬"
    ],
    "ideas": [
      "究天人之际",
      "通古今之变",
      "个人命运与制度力量"
    ],
    "works": [
      {
        "title": "史记",
        "year": "约前91",
        "intro": "中国第一部纪传体通史，以五种体例组织三千年历史。"
      }
    ],
    "links": [
      [
        "herodotus",
        "中西史学的平行起点"
      ],
      [
        "simaguang",
        "从纪传到编年的再组织"
      ]
    ],
    "subjects": [
      "history",
      "literature"
    ]
  },
  {
    "id": "herodotus",
    "subject": "history",
    "region": "world",
    "year": -430,
    "dates": "约前484—前425",
    "name": "希罗多德",
    "alias": "探究式历史叙事的先驱",
    "era": "ancient",
    "period": "古典希腊",
    "summary": "以旅行见闻、口述传统和因果追问解释希波战争，并保存多民族的风俗与声音。",
    "life": "生于小亚细亚的哈利卡纳苏斯，广泛旅行，晚年可能定居于意大利南部的图里。许多生平细节仍不确定。",
    "context": "希腊城邦与波斯帝国冲突后，跨文化接触促使人们解释战争缘起。",
    "style": [
      "见闻、转述与判断并置",
      "环形插叙",
      "对异域风俗保持好奇"
    ],
    "ideas": [
      "历史作为探究",
      "权力扩张与盛衰反复"
    ],
    "works": [
      {
        "title": "历史",
        "year": "约前430",
        "intro": "围绕希波战争展开的九卷叙事，也是民族志、地理志与政治故事的集合。"
      }
    ],
    "links": [
      [
        "simaqian",
        "比较：史家如何组织多重声音"
      ],
      [
        "thukydides",
        "从文化史到战争因果"
      ]
    ],
    "subjects": [
      "history",
      "literature"
    ]
  },
  {
    "id": "simaguang",
    "subject": "history",
    "region": "china",
    "year": 1084,
    "dates": "1019—1086",
    "name": "司马光",
    "alias": "编年政治史的集大成者",
    "era": "medieval",
    "period": "北宋",
    "summary": "以严格编年和材料考异重构历代治乱，把历史写成统治者判断时势与责任的镜鉴。",
    "life": "北宋政治家、史学家，与王安石政见相左。主持书局十九年编成《资治通鉴》，晚年短暂主持废止新法。",
    "context": "文官政治成熟、印刷和馆阁制度发达，党争使历史经验直接参与现实政治。",
    "style": [
      "逐年推进的因果链",
      "删繁就简而重关键决策",
      "另作考异说明证据取舍"
    ],
    "ideas": [
      "鉴前世之兴衰",
      "政治选择的连续后果"
    ],
    "works": [
      {
        "title": "资治通鉴",
        "year": "1084",
        "intro": "上起战国、下迄五代的编年体通史，以政治兴衰为主线。"
      }
    ],
    "links": [
      [
        "simaqian",
        "改造通史体例"
      ],
      [
        "braudel",
        "事件史与长时段的张力"
      ]
    ],
    "subjects": [
      "history",
      "politics"
    ]
  },
  {
    "id": "braudel",
    "subject": "history",
    "region": "world",
    "year": 1949,
    "dates": "1902—1985",
    "name": "费尔南·布罗代尔",
    "alias": "长时段史学的代表",
    "era": "contemporary",
    "period": "20世纪法国",
    "summary": "把地理环境、物质生活和缓慢结构置于事件之前，改变了历史尺度。",
    "life": "法国年鉴学派史家，二战被俘期间凭记忆写作博士论文，战后主持高等研究实践学院并创建人文科学之家。",
    "context": "两次世界大战动摇英雄—事件中心史观，社会科学的结构分析进入历史学。",
    "style": [
      "多层时间尺度",
      "跨区域比较",
      "海洋、气候与物质生活成为主角"
    ],
    "ideas": [
      "长时段",
      "结构—局势—事件"
    ],
    "works": [
      {
        "title": "地中海与菲利普二世时代的地中海世界",
        "year": "1949",
        "intro": "用三种时间速度重写地中海：地理结构、社会局势与政治事件。"
      }
    ],
    "links": [
      [
        "ibnkhaldun",
        "王朝之外的社会机制"
      ],
      [
        "simaguang",
        "长时段对照编年事件史"
      ]
    ],
    "subjects": [
      "history"
    ]
  },
  {
    "id": "wangfuzhi",
    "subject": "history",
    "region": "china",
    "year": 1670,
    "dates": "1619—1692",
    "name": "王夫之",
    "alias": "明清之际的历史哲学家",
    "era": "early-modern",
    "period": "明清之际",
    "summary": "借历代政治得失的严密分析反思明亡，并在动态的历史哲学中强调变化、形势与人的责任。",
    "life": "湖南衡阳人，曾抗清失败后隐居石船山，终身不仕清朝。以经史考据与哲学思辨相结合的独特方式，完成大量著作。",
    "context": "明朝覆亡迫使士人深刻反思政治制度与历史运行规律。",
    "style": [
      "史论与哲学思辨的结合",
      "严密的因果分析与概念推演",
      "以经学资源处理历史判断"
    ],
    "ideas": [
      "理势合一的历史哲学",
      "\"天下非一姓之私\"",
      "经世致用的历史判断"
    ],
    "works": [
      {
        "title": "读通鉴论",
        "year": "1691",
        "intro": "以《资治通鉴》所载史事为基础，逐条讨论历代政治制度与治乱得失。"
      },
      {
        "title": "宋论",
        "year": "1691",
        "intro": "专门分析宋代政治，从祖宗之法到靖康之变的制度演变。"
      }
    ],
    "links": [
      [
        "simaguang",
        "从编年史到历史哲学"
      ],
      [
        "huangzongxi",
        "明清之际史论与政论的共鸣"
      ]
    ],
    "subjects": [
      "history",
      "philosophy",
      "politics"
    ]
  },
  {
    "id": "zhangxuecheng",
    "subject": "history",
    "region": "china",
    "year": 1780,
    "dates": "1738—1801",
    "name": "章学诚",
    "alias": "清代史学理论家",
    "era": "early-modern",
    "period": "清·乾隆",
    "summary": "提出\"六经皆史\"，把一切经典视为历史材料，并以史意与志的理论系统化传统史学方法论。",
    "life": "浙江会稽人，进士出身，长期担任地方志编修工作。生前学术影响有限，近代才被充分认识。",
    "context": "考据学风鼎盛，方志编纂家多，但系统的史学理论相对缺乏。",
    "style": [
      "从编纂实践中提炼理论",
      "以\"史意\"对抗\"考证\"",
      "犀利而自成体系的学术批评"
    ],
    "ideas": [
      "六经皆史",
      "史意与志的理论"
    ],
    "works": [
      {
        "title": "文史通义",
        "year": "1801前",
        "intro": "系统讨论经史关系、方法、文体与学术流变，是中国传统史学理论的高峰。"
      },
      {
        "title": "校雠通义",
        "year": "1788",
        "intro": "讨论目录学与文献整理的理论。"
      }
    ],
    "links": [
      [
        "simaqian",
        "从纪传到广义史料论的史学观演进"
      ],
      [
        "wangfuzhi",
        "历史哲学的两种方向：形上思辨 vs 编纂理论"
      ]
    ],
    "subjects": [
      "history"
    ]
  },
  {
    "id": "guomoruo",
    "subject": "history",
    "region": "china",
    "year": 1949,
    "dates": "1892—1978",
    "name": "郭沫若",
    "alias": "中国马克思主义史学的领军者",
    "era": "contemporary",
    "period": "20世纪中国",
    "summary": "以马克思主义社会形态理论重新解释中国古代史，用甲骨文和青铜器研究打开上古史的新维度。",
    "life": "四川乐山人，早年留学日本学医，后转向文学与历史研究。长期担任中国科学院院长等学术领导职务。",
    "context": "革命与建国需要对中国历史给出新的系统性解释。",
    "style": [
      "大胆的理论假设与材料结合",
      "跨领域（文学、古文字、历史）的宏阔视野",
      "\"人民\"与\"阶级\"成为历史分析主线"
    ],
    "ideas": [
      "中国古代史分期与社会形态",
      "甲骨文与商周社会的重建"
    ],
    "works": [
      {
        "title": "中国古代社会研究",
        "year": "1930",
        "intro": "以马克思主义方法解释中国从原始社会到封建社会的演进。"
      },
      {
        "title": "青铜时代",
        "year": "1940",
        "intro": "以青铜器的铭文与形制研究商周社会的制度与观念变化。"
      }
    ],
    "links": [
      [
        "simaqian",
        "古今之变的两种解释框架"
      ],
      [
        "chenyinke",
        "马克思主义史学与实证史学的当代对话"
      ]
    ],
    "subjects": [
      "history"
    ]
  },
  {
    "id": "chenyinke",
    "subject": "history",
    "region": "china",
    "year": 1945,
    "dates": "1890—1969",
    "name": "陈寅恪",
    "alias": "现代实证史学的典范",
    "era": "contemporary",
    "period": "20世纪中国",
    "summary": "以\"了解之同情\"与严谨的史料考证处理中国中古史，在种族、文化与制度分析中展现文明深处的连续性。",
    "life": "江西修水人，出身书香门第。留学日、欧、美多所大学。历任清华国学院导师、中山大学教授。晚年双目失明仍口述完成巨著。",
    "context": "现代史学专业化与民族主义并存的年代，中西学术方法交汇。",
    "style": [
      "以诗证史",
      "跨文化（中、印、中亚）的比较视野",
      "考据精细而推论克制"
    ],
    "ideas": [
      "种族—文化—制度的三层分析",
      "了解之同情"
    ],
    "works": [
      {
        "title": "隋唐制度渊源略论稿",
        "year": "1940",
        "intro": "追踪隋唐制度中来自汉魏、南朝、北魏三条源流。"
      },
      {
        "title": "柳如是别传",
        "year": "1964",
        "intro": "以明末清初名妓柳如是一生为线索，展开明清之交的文化与政治截面。"
      }
    ],
    "links": [
      [
        "simaqian",
        "实证精神的古今传承"
      ],
      [
        "braudel",
        "结构分析与文化分析的不同路径"
      ]
    ],
    "subjects": [
      "history",
      "literature"
    ]
  },
  {
    "id": "qianmu",
    "subject": "history",
    "region": "china",
    "year": 1940,
    "dates": "1895—1990",
    "name": "钱穆",
    "alias": "中国文化本位史学的代表",
    "era": "contemporary",
    "period": "20世纪中国",
    "summary": "以\"温情与敬意\"书写中国通史与思想史，在中西比较中捍卫中国文化的独特性与连续性。",
    "life": "江苏无锡人，中学未毕业而靠自学入教。先后在燕京、北大、西南联大等校任教，1949年赴港创办新亚书院。",
    "context": "民族危机与文化虚无主义并存，使\"重写国史\"成为文化认同的核心工作。",
    "style": [
      "以整体视野书写通史",
      "温厚而坚定的文化立场",
      "善于从制度与思想两个层面理解变迁"
    ],
    "ideas": [
      "中国文化的连续性与独特性",
      "温情与敬意的历史态度"
    ],
    "works": [
      {
        "title": "国史大纲",
        "year": "1940",
        "intro": "从上古到近代的中国通史，强调中国历史的独特精神与制度遗产。"
      },
      {
        "title": "中国近三百年学术史",
        "year": "1937",
        "intro": "梳理明清之际到民国的学术思想脉络。"
      }
    ],
    "links": [
      [
        "guomoruo",
        "两种国史书写路径的对照"
      ],
      [
        "wangfuzhi",
        "历史哲学与国史精神的延续"
      ]
    ],
    "subjects": [
      "history",
      "philosophy"
    ]
  },
  {
    "id": "thukydides",
    "subject": "history",
    "region": "world",
    "year": -415,
    "dates": "约前460—约前400",
    "name": "修昔底德",
    "alias": "政治史与因果分析的典范",
    "era": "ancient",
    "period": "古典希腊",
    "summary": "以亲历者视角和严格的因果分析记录伯罗奔尼撒战争，让\"权力、恐惧与利益\"成为理解国际冲突的持久框架。",
    "life": "雅典人，曾任将军。因在安菲波利斯战役中救援不力被流放，流放期间潜心事史。",
    "context": "雅典与斯巴达之间长达二十七年的总体战争，使史家需要解释\"为什么\"而非仅仅\"发生了什么\"。",
    "style": [
      "冷峻客观的叙事风格",
      "演说词与实际行动形成对照",
      "因果链的层层推进"
    ],
    "ideas": [
      "权力与恐惧作为战争动机",
      "人性在极端处境下的不变因素"
    ],
    "works": [
      {
        "title": "伯罗奔尼撒战争史",
        "year": "约前400",
        "intro": "以严密的编年和因果分析记录雅典与斯巴达之间的战争。"
      }
    ],
    "links": [
      [
        "herodotus",
        "探究式叙事到因果分析的史学转变"
      ],
      [
        "simaqian",
        "历史因果与道德判断的不同侧重点"
      ]
    ],
    "subjects": [
      "history",
      "politics"
    ]
  },
  {
    "id": "livy",
    "subject": "history",
    "region": "world",
    "year": 10,
    "dates": "前59—17",
    "name": "李维",
    "alias": "罗马建城以来史",
    "era": "ancient",
    "period": "罗马共和国—帝国",
    "summary": "以宏大的144卷记述罗马从建城到奥古斯都时代的历史，把罗马的崛起归因于道德、宗教与制度。",
    "life": "生于帕多瓦，移居罗马后专注于写作，与奥古斯都皇帝有交往。虽然规模庞大但大部分散佚。",
    "context": "奥古斯都的元首制需要\"罗马如何成为伟大\"的统一叙事。",
    "style": [
      "演说与道德判断主导叙事",
      "将历史作为道德教育",
      "年表清晰但史料批判不严"
    ],
    "ideas": [
      "罗马伟大源于传统道德",
      "历史的道德教化功能"
    ],
    "works": [
      {
        "title": "建城以来史",
        "year": "约公元10",
        "intro": "从特洛伊逃亡者到奥古斯都的罗马史，保存了大量早期罗马传说与制度信息。"
      }
    ],
    "links": [
      [
        "simaqian",
        "宏大通史中的道德与叙事"
      ],
      [
        "gibbon",
        "从罗马伟大到罗马衰亡的叙事转向"
      ]
    ],
    "subjects": [
      "history"
    ]
  },
  {
    "id": "tacitus",
    "subject": "history",
    "region": "world",
    "year": 110,
    "dates": "约55—120",
    "name": "塔西佗",
    "alias": "罗马帝国政治的批判性史家",
    "era": "ancient",
    "period": "罗马帝国",
    "summary": "以尖锐的讽刺和心理洞察记录罗马帝国初期的政治，在表面的臣服之下刻画专制对元老院和社会的腐蚀。",
    "life": "可能出身高卢或北意大利的罗马元老，历任保民官、执政官和亚细亚总督。",
    "context": "罗马元首制下元老日益丧失政治自主，史家在\"再现真相\"与\"自我保护\"之间走钢丝。",
    "style": [
      "简短、尖锐而富有张力的拉丁文",
      "讽刺与保留的判断",
      "以人物性格解释政治行为"
    ],
    "ideas": [
      "专制如何腐蚀统治精英",
      "自由与安全的二律背反"
    ],
    "works": [
      {
        "title": "编年史",
        "year": "约116",
        "intro": "记录提比略到尼禄时期的罗马政治，描写权力如何腐化个体。"
      },
      {
        "title": "历史",
        "year": "约105",
        "intro": "记录公元69年内战年\"四帝之年\"的动荡。"
      }
    ],
    "links": [
      [
        "simaqian",
        "专制下的史家处境与写作策略"
      ],
      [
        "thukydides",
        "政治心理分析的古代典范"
      ]
    ],
    "subjects": [
      "history"
    ]
  },
  {
    "id": "gibbon",
    "subject": "history",
    "region": "world",
    "year": 1776,
    "dates": "1737—1794",
    "name": "爱德华·吉本",
    "alias": "罗马衰亡史的经典作者",
    "era": "early-modern",
    "period": "英格兰·启蒙时代",
    "summary": "以哲学家的冷静和文学家的笔法，将罗马帝国衰亡归因于内部失德、军事化与基督教的传播。",
    "life": "生于伦敦，曾在牛津大学短暂就读，后游历欧洲大陆。在罗马废墟旁产生写作罗马衰亡史的念头。",
    "context": "启蒙运动对历史经验的重视，大英帝国的发展使\"帝国为何衰亡\"成为有现实意义的问题。",
    "style": [
      "反讽与冷静的启蒙叙事",
      "把细节容纳在宏大结构之中",
      "哲学思考注入历史叙事"
    ],
    "ideas": [
      "帝国衰亡的内部原因",
      "基督教与古典文明的张力"
    ],
    "works": [
      {
        "title": "罗马帝国衰亡史",
        "year": "1776—1788",
        "intro": "从五贤帝到君士坦丁堡陷落，六卷巨著以\"哲学化\"的方式解释罗马的衰亡过程。"
      }
    ],
    "links": [
      [
        "braudel",
        "帝国衰亡的两套解释框架：制度 vs 结构"
      ],
      [
        "wangfuzhi",
        "王朝循环与帝国衰亡的跨文明比较"
      ]
    ],
    "subjects": [
      "history",
      "literature"
    ]
  },
  {
    "id": "rank",
    "subject": "history",
    "region": "world",
    "year": 1830,
    "dates": "1795—1886",
    "name": "列奥波德·冯·兰克",
    "alias": "现代史料学的奠基者",
    "era": "modern",
    "period": "德意志邦联",
    "summary": "以档案研究和史料批判为核心，奠定\"如实直书\"的专业史学方法。",
    "life": "生于德国图林根，莱比锡大学求学。长期在柏林大学任教，门下培养出整整一代德国史家。",
    "context": "民族主义与普鲁士崛起需要以档案为基础的\"科学\"历史。",
    "style": [
      "严格的史料批判与档案优先",
      "以政治和外交史为中心",
      "客观主义理想的系统化"
    ],
    "ideas": [
      "\"如实直书\"（wie es eigentlich gewesen）",
      "国家作为历史研究的基本单位"
    ],
    "works": [
      {
        "title": "拉丁与日耳曼民族史",
        "year": "1824",
        "intro": "兰克的处女作，附有名篇\"批判近代史家\"讨论史料鉴别方法。"
      },
      {
        "title": "教皇史",
        "year": "1834—1836",
        "intro": "以梵蒂冈档案为基础，研究近代教皇制度的演变。"
      }
    ],
    "links": [
      [
        "thukydides",
        "从亲历者到职业史家的方法演进"
      ],
      [
        "simaqian",
        "史料批判与史家立场的跨文明比较"
      ]
    ],
    "subjects": [
      "history"
    ]
  },
  {
    "id": "burckhardt",
    "subject": "history",
    "region": "world",
    "year": 1860,
    "dates": "1818—1897",
    "name": "雅各布·布克哈特",
    "alias": "文化史与文艺复兴研究的奠基者",
    "era": "modern",
    "period": "瑞士·德意志",
    "summary": "从艺术、国家与个人三个维度解释意大利文艺复兴，把\"人\"的发现视为现代世界的起点。",
    "life": "生于瑞士巴塞尔贵族家庭，师从兰克但走向不同的史学道路。长期在巴塞尔大学任教，拒绝普鲁士的教职邀请。",
    "context": "工业化与政治革命使史家重新审视\"现代性\"的起源。",
    "style": [
      "跨学科的文明分析",
      "以\"国家、宗教、文化\"三个领域为框架",
      "拒绝进步史观的冷静判断"
    ],
    "ideas": [
      "文艺复兴作为\"人的发现\"",
      "文化史的方法自觉"
    ],
    "works": [
      {
        "title": "意大利文艺复兴时期的文化",
        "year": "1860",
        "intro": "从国家、个人与艺术复兴三个角度分析文艺复兴。"
      },
      {
        "title": "世界历史沉思录",
        "year": "1905",
        "intro": "以讲座稿的形式讨论历史的偶然性与持久力量。"
      }
    ],
    "links": [
      [
        "gibbon",
        "从政治—军事史到文化史的转向"
      ],
      [
        "braudel",
        "文明分析的两种传统：精神 vs 物质结构"
      ]
    ],
    "subjects": [
      "history",
      "philosophy"
    ]
  },
  {
    "id": "marcbloch",
    "subject": "history",
    "region": "world",
    "year": 1931,
    "dates": "1886—1944",
    "name": "马克·布洛赫",
    "alias": "年鉴学派共同创始人",
    "era": "modern",
    "period": "法国·第三共和国",
    "summary": "以比较史学和跨学科方法拓宽历史研究的范围，把乡村社会、仪式与心态纳入分析。",
    "life": "生于法国里昂，早年在斯特拉斯堡大学与费弗尔共同创办《年鉴》杂志。二战中参加抵抗运动，1944年被纳粹处决。",
    "context": "一战创伤与大学体制的保守使新一代史家寻求打破以政治/事件为中心的史学。",
    "style": [
      "比较史学方法",
      "\"回溯法\"的问题导向",
      "跨学科（社会学、地理学、心理学）"
    ],
    "ideas": [
      "历史学作为\"时间中的人\"的科学",
      "比较史学与问题导向"
    ],
    "works": [
      {
        "title": "法国农村史",
        "year": "1931",
        "intro": "分析中世纪法国农村土地制度、耕作方式与集体心态。"
      },
      {
        "title": "国王神迹",
        "year": "1924",
        "intro": "研究中世纪英格兰和法国国王用手触摸治疗淋巴结核的信仰与仪式。"
      }
    ],
    "links": [
      [
        "rank",
        "从政治史到总体史的史学革命"
      ],
      [
        "braudel",
        "从心态到结构：年鉴学派的代际演变"
      ]
    ],
    "subjects": [
      "history"
    ]
  },
  {
    "id": "toynbee",
    "subject": "history",
    "region": "world",
    "year": 1934,
    "dates": "1889—1975",
    "name": "阿诺德·汤因比",
    "alias": "文明形态史观的代表",
    "era": "contemporary",
    "period": "英国·20世纪",
    "summary": "把历史视为二十多个文明的兴衰过程，以\"挑战—回应\"机制解释各文明的生命周期。",
    "life": "生于伦敦，牛津大学求学。长期担任伦敦政治经济学院教授和皇家国际事务研究所主任。",
    "context": "两次世界大战的灾难使\"文明为何兴衰\"成为紧迫的知识问题。",
    "style": [
      "宏观比较与文明类型学",
      "\"挑战—回应\"的机制解释",
      "带有宗教关怀的宏大叙事"
    ],
    "ideas": [
      "文明是个体的历史分析单位",
      "挑战—回应与文明成长"
    ],
    "works": [
      {
        "title": "历史研究",
        "year": "1934—1961",
        "intro": "十二卷巨著，比较二十多个文明的起源、成长、衰落与解体。"
      }
    ],
    "links": [
      [
        "ibnkhaldun",
        "王朝循环与文明形态的跨时代对话"
      ],
      [
        "braudel",
        "宏观文明比较 vs 微观结构分析的张力"
      ]
    ],
    "subjects": [
      "history"
    ]
  },
  {
    "id": "confucius",
    "subject": "philosophy",
    "region": "china",
    "year": -500,
    "dates": "传统纪年前551—前479",
    "name": "孔子",
    "alias": "以修身重建秩序的教师",
    "era": "ancient",
    "period": "春秋晚期",
    "summary": "从学习、仁、礼和角色实践出发，把哲学做成终身修养与共同生活的艺术。",
    "life": "鲁国陬邑人，三岁丧父，早年贫贱，曾任委吏、乘田等小吏。三十岁前后开始私人讲学，打破\"学在官府\"传统。五十一岁任中都宰，后升大司寇，摄行相事。因政治理想无法实现，率弟子周游列国十四年。晚年返鲁整理《诗》《书》，修订《春秋》，弟子三千。",
    "context": "周礼秩序衰解，世袭政治松动，游士和私人教育兴起。",
    "style": [
      "短章与情境对话",
      "不把概念封闭定义",
      "以人物行动呈现判断"
    ],
    "ideas": [
      "仁与克己复礼",
      "学而不厌",
      "正名"
    ],
    "works": [
      {
        "title": "论语",
        "year": "战国前期编定",
        "intro": "弟子及再传弟子记录的言行集，围绕学习、伦理和政治判断展开。"
      }
    ],
    "links": [
      [
        "xunzi",
        "儒学中的制度化方向"
      ],
      [
        "wangyangming",
        "心性实践的再阐释"
      ]
    ],
    "subjects": [
      "philosophy",
      "politics",
      "history"
    ]
  },
  {
    "id": "zhuangzi",
    "subject": "philosophy",
    "region": "china",
    "year": -300,
    "dates": "约前369—前286",
    "name": "庄子",
    "alias": "以寓言松动边界的思想家",
    "era": "ancient",
    "period": "战国",
    "summary": "用奇异寓言、视角互换和语言悖论，让固化的是非、功用与身份重新流动。",
    "life": "传统称名周，曾任蒙地漆园吏，拒绝楚国聘请。现存《庄子》含庄周本人及后学不同层次作品。",
    "context": "百家争鸣热衷建立普遍秩序，庄子反问任何单一立场的边界和代价。",
    "style": [
      "寓言与怪诞想象",
      "突然换位的视角",
      "悖论、反讽和开放结尾"
    ],
    "ideas": [
      "齐物",
      "逍遥游",
      "无用之用"
    ],
    "works": [
      {
        "title": "逍遥游",
        "year": "战国",
        "intro": "从鲲鹏变化到小大之辩，追问不依赖外物的自由。"
      },
      {
        "title": "齐物论",
        "year": "战国",
        "intro": "通过语言与视角的冲突，松动绝对是非。"
      }
    ],
    "links": [
      [
        "wangyangming",
        "主体自由的不同道路"
      ]
    ],
    "subjects": [
      "philosophy",
      "literature"
    ]
  },
  {
    "id": "wangyangming",
    "subject": "philosophy",
    "region": "china",
    "year": 1527,
    "dates": "1472—1529",
    "name": "王阳明",
    "alias": "知行合一的心学家",
    "era": "early-modern",
    "period": "明中期",
    "summary": "把道德根据从外在条目收回主体良知，并要求知识在行动中完成。",
    "life": "浙江余姚人，因反对宦官刘瑾被贬贵州龙场并悟道；后平定叛乱、讲学各地，形成广泛学派。",
    "context": "程朱理学制度化后容易流于章句，商业与地方社会变化也呼唤更主动的道德主体。",
    "style": [
      "从个人困境切入",
      "语录与书信式讲学",
      "概念直接指向行动"
    ],
    "ideas": [
      "心即理",
      "致良知",
      "知行合一"
    ],
    "works": [
      {
        "title": "传习录",
        "year": "16世纪编成",
        "intro": "弟子记录的语录、书信和问答，是阳明心学的主要入口。"
      }
    ],
    "links": [
      [
        "confucius",
        "重返实践性的儒学"
      ],
      [
        "huangzongxi",
        "经由明代学脉进入政治反思"
      ]
    ],
    "subjects": [
      "philosophy",
      "politics"
    ]
  },
  {
    "id": "descartes",
    "subject": "philosophy",
    "region": "world",
    "year": 1637,
    "dates": "1596—1650",
    "name": "勒内·笛卡尔",
    "alias": "近代方法论的奠基者",
    "era": "early-modern",
    "period": "17世纪欧洲",
    "summary": "从方法怀疑和\"我思\"寻找知识的确定起点，以数学化秩序重建主体与世界。",
    "life": "法国哲学家、数学家，长期居于荷兰写作，晚年受邀赴瑞典宫廷，不久病逝。",
    "context": "宗教冲突、科学革命和经院体系危机推动知识寻找可重复的方法基础。",
    "style": [
      "第一人称的思想自传",
      "分步骤的方法说明",
      "从怀疑推进到演绎"
    ],
    "ideas": [
      "我思故我在",
      "心物二元论",
      "方法怀疑"
    ],
    "works": [
      {
        "title": "谈谈方法",
        "year": "1637",
        "intro": "以个人求知道路说明四条方法规则，并提出\"我思\"的确定性。"
      },
      {
        "title": "第一哲学沉思集",
        "year": "1641",
        "intro": "通过六个沉思重建自我、上帝和外部世界的知识。"
      }
    ],
    "links": [
      [
        "wangyangming",
        "主体作为知识起点的跨文化对照"
      ],
      [
        "kant",
        "从我思到先验主体的发展"
      ]
    ],
    "subjects": [
      "philosophy"
    ]
  },
  {
    "id": "laozi",
    "subject": "philosophy",
    "region": "china",
    "year": -570,
    "dates": "传统纪年约前6世纪（早于孔子）",
    "name": "老子",
    "alias": "道家哲学的奠基者",
    "era": "ancient",
    "period": "春秋",
    "summary": "以\"道\"和\"无为\"思考世界的本源与人的行动方式，用最简洁的语言提出最具弹性的哲学概念。",
    "life": "姓李名耳，为周守藏室之史，博览群籍，洞悉古今治乱兴衰。后见周室衰微不可挽回，西出函谷关，应关令尹喜之请著《道德经》五千言而去，莫知所终。其身世年代为学术争议，但思想影响贯彻整个中国哲学史。",
    "context": "周礼崩坏、列国兼并，思想界从不同的方向追问秩序的本源。",
    "style": [
      "格言体与高度凝练的表述",
      "正言若反的修辞策略",
      "对语言的边界保持清醒"
    ],
    "ideas": [
      "道法自然",
      "无为而无不为"
    ],
    "works": [
      {
        "title": "道德经",
        "year": "约战国初期成书",
        "intro": "五千余言、八十一章，以\"道可道，非常道\"开篇，讨论宇宙、政治与人生。"
      }
    ],
    "links": [
      [
        "confucius",
        "儒道互补：秩序与自然的不同路径"
      ],
      [
        "zhuangzi",
        "从老子到庄子的道家思想演进"
      ]
    ],
    "subjects": [
      "philosophy",
      "politics"
    ]
  },
  {
    "id": "mencius",
    "subject": "philosophy",
    "region": "china",
    "year": -310,
    "dates": "约前372—前289",
    "name": "孟子",
    "alias": "性善论与仁政学说的代表",
    "era": "ancient",
    "period": "战国",
    "summary": "以\"人皆有不忍人之心\"为伦理起点，把仁政建立在人性本善的信念之上。",
    "life": "邹国人，相传受业于子思的门人。游说各国君主，曾任齐宣王客卿。晚年与弟子整理《孟子》七篇。",
    "context": "战争与暴力使诸子追问：人是否天生具备向善的可能？",
    "style": [
      "气势磅礴的论辩",
      "类比强而密",
      "以历史先例支持论点"
    ],
    "ideas": [
      "性善论与四端说",
      "仁政与民贵君轻"
    ],
    "works": [
      {
        "title": "孟子",
        "year": "战国",
        "intro": "七篇对话体论证性善、仁政与王道，是儒家心性传统的重要来源。"
      }
    ],
    "links": [
      [
        "confucius",
        "儒家人性论的深化与扩展"
      ],
      [
        "xunzi",
        "性善与性恶的儒家内部论争"
      ]
    ],
    "subjects": [
      "philosophy",
      "politics"
    ]
  },
  {
    "id": "mozi",
    "subject": "philosophy",
    "region": "china",
    "year": -390,
    "dates": "约前468—前376",
    "name": "墨子",
    "alias": "兼爱与非攻的思想家",
    "era": "ancient",
    "period": "战国",
    "summary": "以兼爱、非攻、尚贤、节用等核心主张，创立与儒家并称\"显学\"的墨家学派。",
    "life": "可能为宋国公族或下层士人，早年学习儒术后另立学派。墨家有严格的组织纪律和行动精神。",
    "context": "列国混战与社会分化催生了与儒家不同的普遍伦理方案。",
    "style": [
      "三表法的论证结构（本之古者圣王、原察百姓耳目之实、发以为刑政）",
      "重复递进的修辞",
      "清晰的分类与定义"
    ],
    "ideas": [
      "兼相爱、交相利",
      "非攻与尚贤"
    ],
    "works": [
      {
        "title": "墨子",
        "year": "战国",
        "intro": "墨家学派的文献集，涵盖伦理、逻辑、科学、军事与政治。"
      }
    ],
    "links": [
      [
        "confucius",
        "先秦两大显学的对话：别爱 vs 兼爱"
      ],
      [
        "mencius",
        "对墨家的批判与儒墨之争"
      ]
    ],
    "subjects": [
      "philosophy",
      "politics"
    ]
  },
  {
    "id": "zhuxi",
    "subject": "philosophy",
    "region": "china",
    "year": 1177,
    "dates": "1130—1200",
    "name": "朱熹",
    "alias": "理学体系的集大成者",
    "era": "medieval",
    "period": "南宋",
    "summary": "以\"理\"为宇宙与道德的根本法则，通过格物穷理重建人的知识、修养与政治的连续性。",
    "life": "生于福建尤溪，绍兴年间进士。历任地方官职，晚年被斥为\"伪学\"但仍坚持著述讲学。",
    "context": "佛道思想对儒家构成长期挑战，士人需要回应本体论与修养论的问题。",
    "style": [
      "系统化的理学体系建构",
      "经典注释与哲学创新的结合",
      "概念层级严密、术语统一"
    ],
    "ideas": [
      "理与气",
      "格物致知",
      "存天理、去人欲"
    ],
    "works": [
      {
        "title": "四书章句集注",
        "year": "1177",
        "intro": "集注《大学》《中庸》《论语》《孟子》，后世科举标准文本。"
      },
      {
        "title": "朱子语类",
        "year": "宋末编成",
        "intro": "朱熹与弟子的问答记录，覆盖理气、心性、教育、政治等广泛问题。"
      }
    ],
    "links": [
      [
        "confucius",
        "从对话语录到体系化哲学的演变"
      ],
      [
        "wangyangming",
        "理学的内部批判：格物穷理 vs 致良知"
      ]
    ],
    "subjects": [
      "philosophy",
      "sociology",
      "history"
    ]
  },
  {
    "id": "socrates",
    "subject": "philosophy",
    "region": "world",
    "year": -420,
    "dates": "约前469—前399",
    "name": "苏格拉底",
    "alias": "西方伦理哲学的原型人物",
    "era": "ancient",
    "period": "古典希腊",
    "summary": "以口头诘问和\"无知之知\"逼迫对话者审视未经省察的生活，开创了以理性对话为核心的哲学实践。",
    "life": "雅典公民，参加过伯罗奔尼撒战争。以与人对话和质疑权威闻名，不著述。被指控不敬神和败坏青年，判处死刑，饮鸩而死。",
    "context": "雅典民主在伯罗奔尼撒战争后的危机中，传统价值与宗教信仰受到动摇。",
    "style": [
      "辩证诘问（elenchus）",
      "从具体问题推进到普遍定义",
      "以\"无知\"为方法起点"
    ],
    "ideas": [
      "美德即知识",
      "未经省察的生活不值得过"
    ],
    "works": [
      {
        "title": "苏格拉底的申辩（柏拉图记录）",
        "year": "约前390",
        "intro": "苏格拉底在法庭上的辩词，阐述其哲学使命与\"无知之知\"。"
      }
    ],
    "links": [
      [
        "confucius",
        "以对话而非文本进行哲学教育的两种典范"
      ],
      [
        "plato",
        "从对话到理论的哲学写作转变"
      ]
    ],
    "subjects": [
      "philosophy"
    ]
  },
  {
    "id": "aristotle",
    "subject": "philosophy",
    "region": "world",
    "year": -330,
    "dates": "前384—前322",
    "name": "亚里士多德",
    "alias": "学科分类与系统哲学的奠基者",
    "era": "ancient",
    "period": "古典希腊",
    "summary": "几乎为每一门知识确立了学科边界与方法，以经验观察与逻辑推演的平衡成为\"万学之师\"。",
    "life": "生于斯塔基拉，师从柏拉图二十年。后任亚历山大王子教师，回雅典后创办吕克昂学园。",
    "context": "希腊城邦政治与亚历山大帝国扩张使知识的系统化成为必要。",
    "style": [
      "分类法与学科独立",
      "经验观察与逻辑推理相结合",
      "\"本体论\"的框架思考"
    ],
    "ideas": [
      "四因说与实体理论",
      "中庸与德性伦理学",
      "人作为政治动物"
    ],
    "works": [
      {
        "title": "形而上学",
        "year": "前4世纪",
        "intro": "研究\"存在之为存在\"，确立第一哲学的对象与方法。"
      },
      {
        "title": "尼各马可伦理学",
        "year": "前4世纪",
        "intro": "以\"幸福\"为核心，讨论德性、选择、实践智慧与友谊。"
      }
    ],
    "links": [
      [
        "plato",
        "师承与批判：理念论 vs 实体论"
      ],
      [
        "aquinas",
        "亚里士多德哲学在经院传统中的继承与改造"
      ]
    ],
    "subjects": [
      "philosophy",
      "politics",
      "sociology"
    ]
  },
  {
    "id": "augustine",
    "subject": "philosophy",
    "region": "world",
    "year": 400,
    "dates": "354—430",
    "name": "奥古斯丁",
    "alias": "基督教哲学与西方心灵自传的奠基者",
    "era": "ancient",
    "period": "罗马帝国晚期",
    "summary": "以灵魂的内在之旅和神恩理论，把新柏拉图主义、圣经与个人皈依经验整合为影响整个中世纪的哲学—神学体系。",
    "life": "生于北非塔加斯特，早年信奉摩尼教，后皈依基督教，成为希波主教。晚年在汪达尔人围攻中去世。",
    "context": "罗马帝国陷于蛮族入侵与内部基督教化，需要回应\"上帝之城在天灾中的位置\"。",
    "style": [
      "自传体与内心独白",
      "对时间的现象学式分析",
      "从个人经验上升到神学原则"
    ],
    "ideas": [
      "上帝之城与世俗之城",
      "恩典与自由意志"
    ],
    "works": [
      {
        "title": "忏悔录",
        "year": "约400",
        "intro": "以祈祷与自传形式回顾青年时期的追寻与皈依。"
      },
      {
        "title": "上帝之城",
        "year": "426",
        "intro": "回应罗马被攻陷后对基督教的指控，阐明两种城邦的区分。"
      }
    ],
    "links": [
      [
        "socrates",
        "从自我省察到灵魂的内在转向"
      ],
      [
        "aquinas",
        "早期教父哲学到经院哲学的枢纽位置"
      ]
    ],
    "subjects": [
      "philosophy",
      "history"
    ]
  },
  {
    "id": "aquinas",
    "subject": "philosophy",
    "region": "world",
    "year": 1270,
    "dates": "1225—1274",
    "name": "托马斯·阿奎那",
    "alias": "经院哲学与自然法的系统化者",
    "era": "medieval",
    "period": "中世纪欧洲",
    "summary": "以亚里士多德的逻辑与分类改造基督教神学，使理性与信仰并存于一个完整系统中。",
    "life": "意大利人，加入多明我会，求学于科隆和巴黎，在巴黎大学和罗马等地任教。",
    "context": "阿拉伯哲学和亚里士多德拉丁译本重新进入西欧，冲击奥古斯丁传统。",
    "style": [
      "系统性的\"问题—论证—回答\"格式",
      "概念的定义与区分极为精确",
      "整合而非排斥异质思想"
    ],
    "ideas": [
      "自然法与永恒法",
      "理性与信仰的协调",
      "五种证明上帝存在的途径"
    ],
    "works": [
      {
        "title": "神学大全",
        "year": "1265—1273",
        "intro": "以\"问题—反驳—回答\"格式系统讨论神学与伦理，影响至今。"
      }
    ],
    "links": [
      [
        "aristotle",
        "从希腊哲学到基督教经院哲学的传承"
      ],
      [
        "zhuxi",
        "两种\"大全\"式哲学体系的跨文明对照"
      ]
    ],
    "subjects": [
      "philosophy",
      "law"
    ]
  },
  {
    "id": "hume",
    "subject": "philosophy",
    "region": "world",
    "year": 1739,
    "dates": "1711—1776",
    "name": "大卫·休谟",
    "alias": "经验论与怀疑论的代表",
    "era": "early-modern",
    "period": "苏格兰启蒙",
    "summary": "把经验论推到极端，质疑因果、自我与归纳的必然性，以\"习惯\"而非理性解释信念的形成。",
    "life": "生于苏格兰爱丁堡，早年写作《人性论》，曾任图书管理员和外交官。其\"温和怀疑\"同时影响了康德和实证主义。",
    "context": "牛顿力学成功后，哲学追问：知识的基础是理性还是经验？",
    "style": [
      "清晰而优雅的散文写作",
      "分析和怀疑的冷静态度",
      "以日常经验检验抽象命题"
    ],
    "ideas": [
      "因果是心灵的习惯联想而非必然联系",
      "\"自我\"不过是知觉的束"
    ],
    "works": [
      {
        "title": "人性论",
        "year": "1739—1740",
        "intro": "以经验方法研究人的知性、情感与道德。"
      },
      {
        "title": "人类理解研究",
        "year": "1748",
        "intro": "简练版本的人类知性理论，包括因果怀疑论。"
      }
    ],
    "links": [
      [
        "kant",
        "休谟将康德从独断论中唤醒"
      ],
      [
        "descartes",
        "从理性确定到怀疑的经验论转向"
      ]
    ],
    "subjects": [
      "philosophy"
    ]
  },
  {
    "id": "kant",
    "subject": "philosophy",
    "region": "world",
    "year": 1781,
    "dates": "1724—1804",
    "name": "伊曼努尔·康德",
    "alias": "批判哲学的奠基者",
    "era": "early-modern",
    "period": "普鲁士·启蒙",
    "summary": "通过\"批判\"为理性划界，揭示了主体如何构造经验，同时为道德、自由与信仰留下理性的空间。",
    "life": "生于普鲁士哥尼斯堡，终身未离开该城，在哥尼斯堡大学任教。以\"三大批判\"完成了对传统形而上学的批判性重构。",
    "context": "独断论与怀疑论并存的18世纪，科学、道德与宗教需要同时被安置。",
    "style": [
      "严密的体系化写作",
      "从概念推演到结论的层级结构",
      "公开的书报检查使表达委婉而精密"
    ],
    "ideas": [
      "先天综合判断",
      "道德律令与自律",
      "目的王国"
    ],
    "works": [
      {
        "title": "纯粹理性批判",
        "year": "1781",
        "intro": "划出经验与超验的界限，证明主体的先天形式如何构成经验世界。"
      },
      {
        "title": "实践理性批判",
        "year": "1788",
        "intro": "论证道德法则的普遍性与实践理性的优先地位。"
      }
    ],
    "links": [
      [
        "hume",
        "批判哲学的起点：回应休谟怀疑论"
      ],
      [
        "rawls",
        "康德的道德哲学在20世纪政治哲学中的继承"
      ]
    ],
    "subjects": [
      "philosophy",
      "politics"
    ]
  },
  {
    "id": "nietzsche",
    "subject": "philosophy",
    "region": "world",
    "year": 1883,
    "dates": "1844—1900",
    "name": "弗里德里希·尼采",
    "alias": "价值重估与权力意志的哲人",
    "era": "modern",
    "period": "德意志帝国",
    "summary": "以\"上帝已死\"的诊断宣布西方传统价值的终结，并以\"超人\"与\"权力意志\"呼唤新的价值创造。",
    "life": "生于普鲁士勒肯，巴塞尔大学古典学教授，后因病辞职。晚期作品在精神失常中完成，病逝于魏玛。",
    "context": "19世纪末欧洲虚无主义蔓延，基督教道德与科学理性都失去了令人信服的力量。",
    "style": [
      "格言、警句与散文诗",
      "富有攻击性的论战风格",
      "自我颠覆与反体系的写作姿态"
    ],
    "ideas": [
      "上帝之死与虚无主义",
      "权力意志与永恒轮回"
    ],
    "works": [
      {
        "title": "查拉图斯特拉如是说",
        "year": "1883—1885",
        "intro": "以先知的口吻宣告超人、永恒轮回与权力意志。"
      },
      {
        "title": "悲剧的诞生",
        "year": "1872",
        "intro": "以日神与酒神的张力解释希腊悲剧的兴衰。"
      }
    ],
    "links": [
      [
        "socrates",
        "尼采对苏格拉底理性主义的批判"
      ],
      [
        "kant",
        "对启蒙理性主义的最激烈挑战"
      ]
    ],
    "subjects": [
      "philosophy",
      "literature"
    ]
  },
  {
    "id": "heidegger",
    "subject": "philosophy",
    "region": "world",
    "year": 1927,
    "dates": "1889—1976",
    "name": "马丁·海德格尔",
    "alias": "存在主义与现象学的革新者",
    "era": "contemporary",
    "period": "德国·20世纪",
    "summary": "以\"此在\"与\"在世之在\"重新追问\"存在\"的意义，使哲学从认识论转向对人之存在方式的解释。",
    "life": "生于德国梅斯基希，胡塞尔的学生与助手，任教于马堡大学与弗莱堡大学。1933年短暂任弗莱堡校长并对纳粹表态，成为其生平的长期争议点。",
    "context": "第一次世界大战后欧洲思想危机，传统形而上学与科学进步主义同时遭遇质疑。",
    "style": [
      "术语创造与语言革新",
      "现象学方法的彻底化",
      "以古希腊源头与荷尔德林诗歌为对话者"
    ],
    "ideas": [
      "存在意义的追问",
      "此在与在世之在",
      "向死而生的本真性"
    ],
    "works": [
      {
        "title": "存在与时间",
        "year": "1927",
        "intro": "从\"此在\"的分析入手重新追问\"存在\"的意义，被视作20世纪最重要的哲学著作之一。"
      }
    ],
    "links": [
      [
        "aristotle",
        "存在问题的古希腊根源"
      ],
      [
        "sartre",
        "从存在主义到存在主义的法国接受"
      ]
    ],
    "subjects": [
      "philosophy",
      "literature"
    ]
  },
  {
    "id": "sartre",
    "subject": "philosophy",
    "region": "world",
    "year": 1943,
    "dates": "1905—1980",
    "name": "让-保罗·萨特",
    "alias": "存在主义与介入的知识分子",
    "era": "contemporary",
    "period": "法国·20世纪",
    "summary": "以\"存在先于本质\"为核心，把自由、选择与责任放在人的存在的中心，并主张知识分子的政治介入。",
    "life": "生于巴黎，巴黎高师毕业，二战被俘后参加抵抗运动。战后成为法国最有影响力的公共知识分子，拒领诺贝尔文学奖。",
    "context": "二战、占领与解放经验迫使法国思想界重新面对个体自由与社会责任的张力。",
    "style": [
      "现象学描述与哲学论证的结合",
      "哲学、戏剧、小说与评论多体裁并用",
      "公开介入公共议题的论辩"
    ],
    "ideas": [
      "存在先于本质",
      "绝对自由与绝对责任"
    ],
    "works": [
      {
        "title": "存在与虚无",
        "year": "1943",
        "intro": "系统论述自为的存在、自在的存在与他人的注视。"
      },
      {
        "title": "恶心",
        "year": "1938",
        "intro": "以小说形式展现人对偶然性、荒诞与自由的直接经验。"
      }
    ],
    "links": [
      [
        "heidegger",
        "从\"在世之在\"到\"存在与虚无\"的法国化改造"
      ],
      [
        "arendt",
        "行动与自由的不同哲学路径"
      ]
    ],
    "subjects": [
      "philosophy",
      "literature",
      "politics"
    ]
  },
  {
    "id": "wittgenstein",
    "subject": "philosophy",
    "region": "world",
    "year": 1921,
    "dates": "1889—1951",
    "name": "路德维希·维特根斯坦",
    "alias": "语言哲学的转向者",
    "era": "contemporary",
    "period": "奥地利—英国",
    "summary": "前后期思想两次重塑哲学：早期以语言与世界的逻辑同构划定可说与不可说的边界；后期以\"语言游戏\"与\"家族相似\"把哲学引向日常使用。",
    "life": "生于维也纳钢铁大亨家庭。剑桥求学师从罗素。一战中作为志愿兵作战并被俘。战后放弃巨额遗产，任教于乡村小学，后返回剑桥。",
    "context": "逻辑实证主义与分析哲学兴起，哲学面临从形而上学向语言分析的转型。",
    "style": [
      "格言式、编号的短段落",
      "思想实验与对话体",
      "没有论证的断言式写作"
    ],
    "ideas": [
      "图像论与可说／不可说的划界",
      "语言游戏与家族相似",
      "私人语言论证"
    ],
    "works": [
      {
        "title": "逻辑哲学论",
        "year": "1921",
        "intro": "以\"世界是事实的总和\"开头，以\"对于不可说的必须保持沉默\"结束。"
      },
      {
        "title": "哲学研究",
        "year": "1953",
        "intro": "以\"语言游戏\"概念瓦解本质主义的意义理论。"
      }
    ],
    "links": [
      [
        "kant",
        "为认知划界的两种路径：先验范畴 vs 语言逻辑"
      ],
      [
        "nietzsche",
        "语言批判与价值批判的平行路径"
      ]
    ],
    "subjects": [
      "philosophy"
    ]
  },
  {
    "id": "zhangsunwuji",
    "subject": "law",
    "region": "china",
    "year": 653,
    "dates": "约594—659",
    "name": "长孙无忌",
    "alias": "唐律疏议编修代表",
    "era": "medieval",
    "period": "唐初",
    "summary": "主持对律文作官方解释，把刑名、身份、礼制与司法适用组织成高度系统的帝国法典。",
    "life": "唐初政治家，唐太宗长孙皇后之兄，参与玄武门之变并长期居相位；高宗朝因政治斗争被流放后自尽。法典是集体编修成果。",
    "context": "统一帝国需要整合南北朝以来法制，并为各级官僚提供一致的裁判依据。",
    "style": [
      "律文与疏议逐条对应",
      "概念分类严密",
      "以礼制解释法律身份"
    ],
    "ideas": [
      "德礼为政教之本、刑罚为政教之用",
      "法典统一与官僚裁量"
    ],
    "works": [
      {
        "title": "永徽律疏／唐律疏议",
        "year": "653",
        "intro": "唐律十二篇及官方疏解，深刻影响东亚传统法体系。"
      }
    ],
    "links": [
      [
        "shenjiaben",
        "从礼法法典到近代部门法"
      ]
    ],
    "subjects": [
      "law",
      "politics",
      "history"
    ]
  },
  {
    "id": "montesquieu",
    "subject": "law",
    "region": "world",
    "year": 1748,
    "dates": "1689—1755",
    "name": "孟德斯鸠",
    "alias": "比较法与权力制衡的先驱",
    "era": "early-modern",
    "period": "法国启蒙时代",
    "summary": "不把法律视为孤立命令，而放回政体、气候、经济与风俗的关系网中比较。",
    "life": "法国贵族、法官和思想家，曾游历欧洲并长期观察英国制度。匿名出版《论法的精神》后引发巨大争论。",
    "context": "绝对王权、商业社会和英国宪制经验促使启蒙思想重新解释自由与制度。",
    "style": [
      "跨社会比较",
      "从经验归纳政体原则",
      "大量案例支撑抽象分类"
    ],
    "ideas": [
      "权力制约权力",
      "法律与社会条件的关系"
    ],
    "works": [
      {
        "title": "论法的精神",
        "year": "1748",
        "intro": "比较政体、法律、风俗和自然条件，提出自由所需的权力安排。"
      }
    ],
    "links": [
      [
        "shenjiaben",
        "近代法政知识的输入背景"
      ],
      [
        "hart",
        "从社会比较到规则分析"
      ]
    ],
    "subjects": [
      "law",
      "politics",
      "sociology"
    ]
  },
  {
    "id": "shenjiaben",
    "subject": "law",
    "region": "china",
    "year": 1902,
    "dates": "1840—1913",
    "name": "沈家本",
    "alias": "晚清法律改革主持者",
    "era": "modern",
    "period": "晚清—民初",
    "summary": "在主权危机中主持修律，翻译、比较中外法制，推动传统律例向现代部门法和程序法转型。",
    "life": "浙江归安人，长期任刑部官员，1902年起与伍廷芳主持修订法律，参与筹建法政教育与大理院制度。",
    "context": "领事裁判权、条约体系与国家转型迫使清廷证明司法的现代性和统一性。",
    "style": [
      "逐条考证旧律",
      "译介与比较并用",
      "改革方案兼顾制度过渡"
    ],
    "ideas": [
      "删除酷刑与刑民分立",
      "以法制现代化收回司法主权"
    ],
    "works": [
      {
        "title": "寄簃文存",
        "year": "清末民初编",
        "intro": "收录律学考证、修律奏议和法制论说，可见其改革方法。"
      },
      {
        "title": "大清新刑律（主持）",
        "year": "1911",
        "intro": "中国首部近代刑法典，虽未充分施行，却标志体例转型。"
      }
    ],
    "links": [
      [
        "zhangsunwuji",
        "两种法典化范式"
      ],
      [
        "montesquieu",
        "比较法与宪政知识输入"
      ]
    ],
    "subjects": [
      "law",
      "politics"
    ]
  },
  {
    "id": "hart",
    "subject": "law",
    "region": "world",
    "year": 1961,
    "dates": "1907—1992",
    "name": "H. L. A. 哈特",
    "alias": "分析法哲学的重建者",
    "era": "contemporary",
    "period": "战后英国",
    "summary": "用初级规则与次级规则的结合解释现代法律体系，并区分法律是什么与法律应当是什么。",
    "life": "英国法哲学家，曾任律师和战时情报人员，后任牛津大学法理学讲席教授，与富勒、德沃金展开重要论争。",
    "context": "战后法治重建和语言哲学推动法学重新分析规则、权威与道德判断。",
    "style": [
      "日常语言分析",
      "用边缘案例检验概念",
      "先描述结构再进行规范评价"
    ],
    "ideas": [
      "承认规则",
      "法律的开放结构",
      "法律与道德的可分离性"
    ],
    "works": [
      {
        "title": "法律的概念",
        "year": "1961",
        "intro": "以两类规则的结合解释法律体系、义务、裁判和主权。"
      }
    ],
    "links": [
      [
        "montesquieu",
        "从制度比较到规则结构"
      ],
      [
        "shenjiaben",
        "现代法体系的实践与概念两端"
      ]
    ],
    "subjects": [
      "law",
      "philosophy"
    ]
  },
  {
    "id": "zichan",
    "subject": "law",
    "region": "china",
    "year": -536,
    "dates": "约前580—前522",
    "name": "子产",
    "alias": "成文法公布的先驱",
    "era": "ancient",
    "period": "春秋·郑国",
    "summary": "将刑法铸于鼎上公之于众，打破贵族对法律知识的垄断，引发礼治与法治关系的早期争论。",
    "life": "郑国贵族，先后在郑简公、郑定公时期执政，推行了一系列改革，包括田制、税制与刑书。对内稳定秩序，对外灵活周旋。",
    "context": "春秋时期礼治松动，成文法需求出现。子产的铸刑书被晋国叔向激烈批评。",
    "style": [
      "锐意的制度改革",
      "从口头传统到明文公布",
      "兼顾外交与内政的务实风格"
    ],
    "ideas": [
      "刑不可知则威不可测——被打破的旧信条",
      "成文法的社会控制功能"
    ],
    "works": [
      {
        "title": "刑书（铸于鼎）",
        "year": "前536",
        "intro": "郑国刑法条文的首次公开铸刻，原文已佚。"
      }
    ],
    "links": [
      [
        "shangyang",
        "成文法与法治的早期实验"
      ],
      [
        "zhangsunwuji",
        "从鼎到律疏的法典传统"
      ]
    ],
    "subjects": [
      "law"
    ]
  },
  {
    "id": "quiliangzu",
    "subject": "law",
    "region": "china",
    "year": 1947,
    "dates": "1910—1973",
    "name": "瞿同祖",
    "alias": "中国法律社会史的开创者",
    "era": "contemporary",
    "period": "20世纪中国",
    "summary": "把家族、阶级与法律放在同一分析框架中，揭示中国传统法律的社会结构与文化逻辑。",
    "life": "湖南长沙人，先后求学于燕京大学和哈佛大学。在多所大学任教，后定居加拿大。",
    "context": "现代法学与社会学在中国面临建制化，传统律学亟需现代学术方法的重新审视。",
    "style": [
      "社会结构分析与法律史的交叉",
      "清晰的制度类型学",
      "跨文化比较的意识"
    ],
    "ideas": [
      "法律是社会结构的产物",
      "儒家化与家族主义法律"
    ],
    "works": [
      {
        "title": "中国法律与中国社会",
        "year": "1947",
        "intro": "从家族、婚姻、阶级、巫术与宗教等方面分析传统法律的社会背景。"
      }
    ],
    "links": [
      [
        "shenjiaben",
        "从法制改革到制度史的社会分析"
      ],
      [
        "feixiaotong",
        "社会结构分析的平行视野"
      ]
    ],
    "subjects": [
      "law"
    ]
  },
  {
    "id": "cicero",
    "subject": "law",
    "region": "world",
    "year": -50,
    "dates": "前106—前43",
    "name": "马尔库斯·图利乌斯·西塞罗",
    "alias": "自然法与共和宪制的阐述者",
    "era": "ancient",
    "period": "罗马共和国晚期",
    "summary": "将斯多亚哲学引入罗马法话语，以自然法、理性和共和宪制连接法律与政治哲学，深刻影响了后世自然法传统。",
    "life": "精通希腊哲学的罗马政治家、律师和演说家，曾任执政官，挫败喀提林阴谋。后三头同盟时期被政敌处决。",
    "context": "共和国危机中，法律和道德权威同时受到挑战，需要重新论证正义与法律的关系。",
    "style": [
      "法庭演说的雄辩与逻辑",
      "以希腊哲学论证罗马实践",
      "书信与哲学对话的多体裁"
    ],
    "ideas": [
      "真正的法是与自然一致的正当理性",
      "国家作为人民的事业"
    ],
    "works": [
      {
        "title": "论法律",
        "year": "约前50",
        "intro": "从自然法角度讨论法律与正义的关系，影响后世自然法论。"
      },
      {
        "title": "论义务",
        "year": "前44",
        "intro": "讨论道德义务与公民责任，是斯多亚伦理在罗马的实践拓展。"
      }
    ],
    "links": [
      [
        "aquinas",
        "自然法传统的中世纪延续"
      ],
      [
        "montesquieu",
        "从共和宪制到权力制衡"
      ]
    ],
    "subjects": [
      "law",
      "politics",
      "philosophy"
    ]
  },
  {
    "id": "grotius",
    "subject": "law",
    "region": "world",
    "year": 1625,
    "dates": "1583—1645",
    "name": "胡果·格劳秀斯",
    "alias": "国际法与国际秩序的奠基者",
    "era": "early-modern",
    "period": "荷兰共和国",
    "summary": "以自然法为基础构建战争与和平的规则，使国际关系从\"无政府\"走向\"有法律\"的框架。",
    "life": "荷兰法学家和神学家，幼年神童。因卷入宗教和政治冲突被囚，越狱后流亡法国。",
    "context": "三十年战争期间欧洲陷入宗教战争，需要超越国家与教派的国际规则。",
    "style": [
      "系统性的国际法编纂",
      "从自然法中推演万民法",
      "大胆脱离神学论证的独立性"
    ],
    "ideas": [
      "自然法的规范性独立于上帝意志",
      "公海自由与战争规则"
    ],
    "works": [
      {
        "title": "战争与和平法",
        "year": "1625",
        "intro": "从自然法与万国法的角度论述战争的正当理由、规则与和平的条件。"
      }
    ],
    "links": [
      [
        "cicero",
        "从罗马万民法到近代国际法的传承"
      ],
      [
        "montesquieu",
        "从国际法到比较法的法学扩展"
      ]
    ],
    "subjects": [
      "law"
    ]
  },
  {
    "id": "beccaria",
    "subject": "law",
    "region": "world",
    "year": 1764,
    "dates": "1738—1794",
    "name": "切萨雷·贝卡里亚",
    "alias": "近代刑法学的改革者",
    "era": "early-modern",
    "period": "意大利·启蒙",
    "summary": "以一本小册子系统批判酷刑与死刑，主张刑罚的预防性、确定性和比例性，奠定近代刑法原则。",
    "life": "米兰贵族，参与\"拳头社\"启蒙团体。受到孟德斯鸠和卢梭启发，《论犯罪与刑罚》一经出版便轰动欧洲。",
    "context": "启蒙运动批判旧制度司法，酷刑与任意逮捕在英国之外的欧洲仍是常态。",
    "style": [
      "简洁有力的论说体",
      "从社会契约推导刑罚原则",
      "小篇幅却高度浓缩"
    ],
    "ideas": [
      "罪刑法定与刑罚比例",
      "刑法的人道主义与预防目的"
    ],
    "works": [
      {
        "title": "论犯罪与刑罚",
        "year": "1764",
        "intro": "批判酷刑、秘密指控和死刑，奠定近代刑法三大原则。"
      }
    ],
    "links": [
      [
        "montesquieu",
        "启蒙法律思想的延续"
      ],
      [
        "shenjiaben",
        "从伦敦到东亚的刑罚人道化之路"
      ]
    ],
    "subjects": [
      "law"
    ]
  },
  {
    "id": "bentham",
    "subject": "law",
    "region": "world",
    "year": 1789,
    "dates": "1748—1832",
    "name": "杰里米·边沁",
    "alias": "功利主义法学的创立者",
    "era": "early-modern",
    "period": "英格兰·启蒙—维多利亚",
    "summary": "以\"最大多数人的最大幸福\"为原则，批判普通法的模糊性，推动法律改革和法典化。",
    "life": "伦敦人，自幼博学，终生未婚。尽管长期隐居写作，其思想影响了英国立法、监狱改革和教育制度。死后遵其遗嘱将遗体制成标本公开展示。",
    "context": "工业革命与议会改革时期，普通法传统面临系统化与民主化的压力。",
    "style": [
      "逻辑刚健的功利计算",
      "对法律概念的批判性重构",
      "改革导向的写作方式"
    ],
    "ideas": [
      "最大幸福原则",
      "法律作为快乐的管控与痛苦的分配"
    ],
    "works": [
      {
        "title": "道德与立法原理导论",
        "year": "1789",
        "intro": "阐述功利主义原则及其在立法中的运用。"
      },
      {
        "title": "圆形监狱",
        "year": "1791",
        "intro": "设计以全景监视为核心的新型监狱，成为现代规训权力的经典隐喻。"
      }
    ],
    "links": [
      [
        "beccaria",
        "从刑罚人道化到最大幸福计算的功利框架"
      ],
      [
        "hart",
        "分析法哲学对功利主义的继承与改造"
      ]
    ],
    "subjects": [
      "law",
      "philosophy"
    ]
  },
  {
    "id": "john_austin",
    "subject": "law",
    "region": "world",
    "year": 1832,
    "dates": "1790—1859",
    "name": "约翰·奥斯丁",
    "alias": "分析实证法学的开端者",
    "era": "modern",
    "period": "英国·维多利亚",
    "summary": "首次系统区分\"法律是什么\"与\"法律应当是什么\"，以\"主权者命令\"界定法律的概念。",
    "life": "英国法学家，退役军官。曾在伦敦大学学院任教，是边沁功利主义的追随者。生前学术影响有限，死后被哈特重新发现。",
    "context": "实证主义与分析哲学兴起，对\"法是什么\"需要比自然法更精确的界定。",
    "style": [
      "严格的概念区分",
      "命令理论的体系化展开",
      "坚持法律与道德的分离"
    ],
    "ideas": [
      "法律是主权者的命令",
      "法律与道德的分离"
    ],
    "works": [
      {
        "title": "法理学的范围",
        "year": "1832",
        "intro": "界定法律的概念，区分实在法与实在道德，影响整个分析法学传统。"
      }
    ],
    "links": [
      [
        "hart",
        "从命令到规则的实证法学的演进"
      ],
      [
        "bentham",
        "功利主义在法学中的实证化"
      ]
    ],
    "subjects": [
      "law"
    ]
  },
  {
    "id": "kelsen",
    "subject": "law",
    "region": "world",
    "year": 1934,
    "dates": "1881—1973",
    "name": "汉斯·凯尔森",
    "alias": "纯粹法学的体系建构者",
    "era": "contemporary",
    "period": "奥地利—美国",
    "summary": "把法学从政治、道德和社会学中剥离，以\"基本规范\"为金字塔顶端构建一个自足的规范等级体系。",
    "life": "生于布拉格，在维也纳大学求学并任教。纳粹上台后流亡美国，在加州大学伯克利分校继续任教。",
    "context": "欧洲大陆法传统面临法律实证主义的极端化，凯尔森试图为规范秩序寻找纯粹的逻辑基础。",
    "style": [
      "严密的体系化与层级结构",
      "以新康德主义为哲学基础",
      "排除法学的意识形态杂质"
    ],
    "ideas": [
      "纯粹法学与基础规范",
      "法律规范的层级结构"
    ],
    "works": [
      {
        "title": "纯粹法学",
        "year": "1934",
        "intro": "将法学定义为关于规范的科学，排除所有非法律的要素。"
      }
    ],
    "links": [
      [
        "hart",
        "分析实证法与纯粹法的对话"
      ],
      [
        "john_austin",
        "从命令到规范：实证法学的演进"
      ]
    ],
    "subjects": [
      "law",
      "philosophy"
    ]
  },
  {
    "id": "dworkin",
    "subject": "law",
    "region": "world",
    "year": 1967,
    "dates": "1931—2013",
    "name": "罗纳德·德沃金",
    "alias": "权利论与整体性法学的代表",
    "era": "contemporary",
    "period": "美国·20世纪",
    "summary": "以\"原则\"和\"权利\"对抗实证法的\"规则\"模型，主张法律的解释与道德评价不可分离。",
    "life": "美国法哲学家，先后在耶鲁和牛津大学任教，后长期在纽约大学和牛津担任教授。与哈特的论争是20世纪法哲学最重要的对话之一。",
    "context": "民权运动与司法能动主义使\"权利\"成为法律实践的核心争议。",
    "style": [
      "以司法案例为检验案例的哲学论证",
      "与对手直接对话和论辩（尤其是哈特）",
      "从宪法解释入手进入一般法理学"
    ],
    "ideas": [
      "法律作为整体性（Law as Integrity）",
      "原则与规则的区别",
      "认真对待权利"
    ],
    "works": [
      {
        "title": "认真对待权利",
        "year": "1977",
        "intro": "论证个体权利对国家和多数意志的约束。"
      },
      {
        "title": "法律帝国",
        "year": "1986",
        "intro": "以\"整体性\"概念重新解释法律推理。"
      }
    ],
    "links": [
      [
        "hart",
        "20世纪法哲学最著名的论争：规则 vs 原则"
      ],
      [
        "rawls",
        "权利与正义的跨学科对话"
      ]
    ],
    "subjects": [
      "law",
      "philosophy"
    ]
  },
  {
    "id": "maine",
    "subject": "law",
    "region": "world",
    "year": 1861,
    "dates": "1822—1888",
    "name": "亨利·梅因",
    "alias": "历史法学与比较法学的代表",
    "era": "modern",
    "period": "英国·维多利亚",
    "summary": "以\"从身份到契约\"的公式概括法律史的演进，用比较历史方法研究法律制度的起源与演变。",
    "life": "英国法学家，剑桥大学民法讲席教授，曾任印度总督府法律委员，参与英国对印度的法律顾问，积累了大量跨文化比较经验。",
    "context": "进化论与历史主义思潮使法律研究从自然法抽象转向历史起源考察。",
    "style": [
      "比较历史研究法",
      "以大跨度的制度演变概括特征",
      "史料翔实而结论简洁有力"
    ],
    "ideas": [
      "从身份到契约",
      "法律的发展阶段与进化模式"
    ],
    "works": [
      {
        "title": "古代法",
        "year": "1861",
        "intro": "考察古代法律从家族到个体、从身份到契约的演进。"
      }
    ],
    "links": [
      [
        "montesquieu",
        "从共时性比较到历时性进化"
      ],
      [
        "durkheim",
        "从法律形式到社会团结的两种演进叙事"
      ]
    ],
    "subjects": [
      "law"
    ]
  },
  {
    "id": "homes",
    "subject": "law",
    "region": "world",
    "year": 1881,
    "dates": "1841—1935",
    "name": "奥利弗·温德尔·霍姆斯",
    "alias": "法律现实主义的先驱",
    "era": "modern",
    "period": "美国·进步时代",
    "summary": "以\"法律的生命不在逻辑而在经验\"打破形式主义法学，主张从实际后果而非抽象概念理解法律。",
    "life": "美国著名联邦最高法院大法官，曾任麻萨诸塞州最高法院首席法官，在联邦最高法院服务三十年。其\"明显而即刻的危险\"标准影响言论自由法。",
    "context": "工业化的美国急需司法回应社会变化，概念法学在现实问题面前越来越无力。",
    "style": [
      "警句式的法律格言",
      "以司法意见作为法律分析的主战场",
      "从坏人的角度理解法律"
    ],
    "ideas": [
      "法律是对法院将要做什么的预测",
      "经验优先于逻辑",
      "言论自由的\"明显而即刻的危险\"标准"
    ],
    "works": [
      {
        "title": "普通法",
        "year": "1881",
        "intro": "从历史经验出发分析普通法各领域的发展逻辑。"
      }
    ],
    "links": [
      [
        "bentham",
        "从立法改革到司法的法律实用主义转向"
      ],
      [
        "dworkin",
        "法律解释的两种路径：现实 vs 原则"
      ]
    ],
    "subjects": [
      "law"
    ]
  },
  {
    "id": "mannheim",
    "subject": "sociology",
    "region": "world",
    "year": 1929,
    "dates": "1893—1947",
    "name": "卡尔·曼海姆",
    "alias": "知识社会学的开创者",
    "era": "contemporary",
    "period": "德国—英国",
    "summary": "把知识生产与社会位置联系起来，分析意识形态与乌托邦如何受到社会阶层的制约。",
    "life": "生于匈牙利布达佩斯，先后在德国海德堡和法兰克福大学任教。纳粹上台后流亡英国，在伦敦政治经济学院任教。",
    "context": "两次世界大战之间的欧洲，不同政治信条的激烈冲突使\"谁在思考、为何这样思考\"成为紧迫问题。",
    "style": [
      "从思想史进入社会学分析",
      "知识与社会位置的关联考察",
      "宏观理论与制度分析相结合"
    ],
    "ideas": [
      "意识形态与乌托邦",
      "知识社会学的认识论与方法论"
    ],
    "works": [
      {
        "title": "意识形态与乌托邦",
        "year": "1929",
        "intro": "分析知识如何受社会存在制约，并讨论意识形态与乌托邦在社会变迁中的角色。"
      }
    ],
    "links": [
      [
        "marx",
        "从经济基础到社会存在决定意识的扩展"
      ],
      [
        "weber",
        "理性化与知识的社会条件分析"
      ]
    ],
    "subjects": [
      "sociology"
    ]
  },
  {
    "id": "simmel",
    "subject": "sociology",
    "region": "world",
    "year": 1900,
    "dates": "1858—1918",
    "name": "格奥尔格·齐美尔",
    "alias": "形式社会学的创立者",
    "era": "modern",
    "period": "德意志帝国",
    "summary": "从社会互动的形式出发分析现代生活的碎片化，对都市、货币与个人自由的诊断至今敏锐。",
    "life": "生于柏林，在柏林大学长期担任编外讲师，虽学术影响巨大却因反犹主义未能获得正教授。晚年到斯特拉斯堡任教。",
    "context": "柏林成为现代大都市，货币经济深刻地改变了社会交往与个人体验。",
    "style": [
      "从边缘现象切入社会本质",
      "敏锐的心理—社会机制观察",
      "散文式的社会学写作"
    ],
    "ideas": [
      "形式社会学",
      "现代都市与货币文化",
      "社交性与社会距离"
    ],
    "works": [
      {
        "title": "货币哲学",
        "year": "1900",
        "intro": "从货币入手分析现代性如何改变人与人之间的关系和个体自由。"
      },
      {
        "title": "社会学的根本问题",
        "year": "1917",
        "intro": "系统阐述形式社会学的理论核心。"
      }
    ],
    "links": [
      [
        "weber",
        "现代性分析的两种路径：行动 vs 互动形式"
      ],
      [
        "goffman",
        "从社交形式到微观互动的理论演进"
      ]
    ],
    "subjects": [
      "sociology"
    ]
  },
  {
    "id": "mead",
    "subject": "sociology",
    "region": "world",
    "year": 1913,
    "dates": "1863—1931",
    "name": "乔治·赫伯特·米德",
    "alias": "符号互动论的奠基者",
    "era": "modern",
    "period": "美国·进步时代",
    "summary": "从社会互动中的符号与姿态出发解释自我意识的形成，使\"心灵、自我与社会\"成为不可分割的三位一体。",
    "life": "生于马萨诸塞州，在哈佛大学求学，后任教于密歇根大学和芝加哥大学，是芝加哥学派的核心人物。生前出版的著作很少，影响主要通过授课和遗作传播。",
    "context": "实用主义哲学与达尔文进化论在芝加哥交汇，社会心理学开始关注个体如何在社会中成为自我。",
    "style": [
      "从行为与互动出发的哲学‑心理学分析",
      "概念的高度整合",
      "与实用主义哲学紧密关联"
    ],
    "ideas": [
      "自我产生的社会过程（主我与宾我）",
      "符号互动与身份构建"
    ],
    "works": [
      {
        "title": "心灵、自我与社会",
        "year": "1934",
        "intro": "以对话、姿态与角色扮演分析自我意识如何从社会互动中产生。"
      }
    ],
    "links": [
      [
        "goffman",
        "从符号互动到日常表演的延续"
      ],
      [
        "durkheim",
        "个体意识与社会意识的两种方向"
      ]
    ],
    "subjects": [
      "sociology"
    ]
  },
  {
    "id": "dongbiwu",
    "subject": "law",
    "region": "china",
    "year": 1954,
    "dates": "1886—1975",
    "name": "董必武",
    "alias": "社会主义法治理论家",
    "era": "contemporary",
    "period": "20世纪中国",
    "summary": "在中国革命与建设中倡导\"依法办事\"，推动以宪法为核心的社会主义法律体系雏形的建立。",
    "life": "湖北黄安人，清末秀才，曾留学日本学习法律。中国共产党创始人之一，建国后长期担任政务院副总理、国家副主席等要职，主管政法工作。",
    "context": "革命建国后需要从运动式治理转向制度化治理，法治概念在社会主义语境中初步成形。",
    "style": [
      "政策与法制相结合的务实风格",
      "重视基层司法与人民调解",
      "以简明语言讨论复杂的政治—法律问题"
    ],
    "ideas": [
      "依法办事是加强法制的中心环节",
      "人民法院与人民检察院的独立职能"
    ],
    "works": [
      {
        "title": "董必武政治法律文集",
        "year": "1985整理",
        "intro": "收录其在政法工作、宪法讨论、司法建设等方面的讲话与文章。"
      }
    ],
    "links": [
      [
        "shenjiaben",
        "从近代修律到社会主义法治的延续"
      ],
      [
        "zhangsunwuji",
        "从传统法典化到现代法治理念的变迁"
      ]
    ],
    "subjects": [
      "law"
    ]
  },
  {
    "id": "pound",
    "subject": "law",
    "region": "world",
    "year": 1910,
    "dates": "1870—1964",
    "name": "罗斯科·庞德",
    "alias": "社会学法学的代表",
    "era": "modern",
    "period": "美国·进步时代",
    "summary": "提出\"社会学法学\"，主张法律应当回应社会利益与需求，在社会效果中理解法律的功能。",
    "life": "美国法学家，曾任内布拉斯加大学和哈佛大学法学院院长。长期从事法理学、法律史和比较法的教学与研究。",
    "context": "工业化和城市化带来的社会问题要求法律从抽象概念转向对现实利益的调整。",
    "style": [
      "以\"社会工程\"比喻法律的功能",
      "利益分类与社会效果分析",
      "法理学的宏大体系建构"
    ],
    "ideas": [
      "法律作为社会工程",
      "社会利益的识别与平衡"
    ],
    "works": [
      {
        "title": "法理学（五卷本）",
        "year": "1959",
        "intro": "全面阐述社会利益理论、法律史解释和法学方法论。"
      },
      {
        "title": "法律史解释",
        "year": "1924",
        "intro": "从社会工程的角度重新解释法律史。"
      }
    ],
    "links": [
      [
        "homes",
        "法律现实主义与社会学法学的合流"
      ],
      [
        "durkheim",
        "从社会事实到社会利益的扩展"
      ]
    ],
    "subjects": [
      "law"
    ]
  },
  {
    "id": "wangchonghui",
    "subject": "law",
    "region": "china",
    "year": 1912,
    "dates": "1881—1958",
    "name": "王宠惠",
    "alias": "近代法政与外交的代表",
    "era": "modern",
    "period": "晚清—民国",
    "summary": "以比较法视野参与宪法起草与司法建设，在国际法论坛中维护中国主权与法律尊严。",
    "life": "广东东莞人，先后留学日本、欧美，获耶鲁大学法学博士学位。历任民国司法总长、大理院院长、海牙国际法院法官等职。",
    "context": "弱国外交与法制现代化之间的张力，需要既精通西方法学又能维护中国主权的法律人才。",
    "style": [
      "比较法与跨文化法律知识",
      "着眼于制度建设的务实态度",
      "国际法与国内法并重"
    ],
    "ideas": [
      "民国的法治与司法独立",
      "国际法视角下的国家平等"
    ],
    "works": [
      {
        "title": "王宠惠法学文集",
        "year": "民国",
        "intro": "涉及宪法解释、司法制度与国际法庭实践的论著与判决意见。"
      }
    ],
    "links": [
      [
        "shenjiaben",
        "修律到建制的法治现代化进程"
      ],
      [
        "hart",
        "实证法学在制度实践中的不同方向"
      ]
    ],
    "subjects": [
      "law"
    ]
  },
  {
    "id": "croce",
    "subject": "history",
    "region": "world",
    "year": 1917,
    "dates": "1866—1952",
    "name": "贝内德托·克罗齐",
    "alias": "历史主义与精神哲学的史学家",
    "era": "modern",
    "period": "意大利·20世纪",
    "summary": "提出\"一切历史都是当代史\"，否定实证主义的史料崇拜，强调史家的精神活动与当代关切在历史认识中的核心地位。",
    "life": "生于意大利阿奎拉，早年研究马克思主义后转向唯心主义哲学。长期从事历史、美学和哲学研究，曾任教育部长。他在反法西斯时期的独立立场维护了意大利自由学术传统。",
    "context": "实证史学与辩证唯物主义史学都在寻找历史\"规律\"，克罗齐坚持历史是自由的故事。",
    "style": [
      "精神哲学的宏大框架",
      "从哲学推导史学方法论",
      "清晰、优雅的学术写作"
    ],
    "ideas": [
      "一切历史都是当代史",
      "历史是自由的故事"
    ],
    "works": [
      {
        "title": "历史学的理论和实际",
        "year": "1917",
        "intro": "论证史家总是带着当代问题进入过去，历史认识是精神活动的产物。"
      }
    ],
    "links": [
      [
        "braudel",
        "史家与历史关系的两种理解：当代关怀 vs 结构性距离"
      ]
    ],
    "subjects": [
      "history",
      "philosophy"
    ]
  },
  {
    "id": "paine",
    "subject": "politics",
    "region": "world",
    "year": 1776,
    "dates": "1737—1809",
    "name": "托马斯·潘恩",
    "alias": "激进共和与民主权利的宣传者",
    "era": "early-modern",
    "period": "英美法·革命时代",
    "summary": "以通俗的小册子点燃美国独立和法国革命中的激进民主意识，把共和、人权与平等写入大众政治语言。",
    "life": "生于英国诺福克，早年贫寒。移民费城后发表《常识》推动美国独立。法国革命期间被选入国民公会，因坚持共和遭雅各宾派监禁。晚年回到美国，境遇凄凉。",
    "context": "大西洋革命时代，人民主权与共和制从理论走向实践。",
    "style": [
      "通俗有力的政论写作",
      "以常识和理性为论据",
      "对旧制度的直接、猛烈抨击"
    ],
    "ideas": [
      "共和政府与世袭君主制的对立",
      "人权是不可剥夺的"
    ],
    "works": [
      {
        "title": "常识",
        "year": "1776",
        "intro": "以清晰有力的语言论证美国独立的正当性，打破了对君主制的长期忠诚。"
      },
      {
        "title": "人权论",
        "year": "1791",
        "intro": "回应伯克对法国革命的批评，为人权与国家契约辩护。"
      }
    ],
    "links": [
      [
        "locke",
        "从自然权利到人民主权的激进推进"
      ],
      [
        "rousseau",
        "大众民主的跨大西洋对话"
      ]
    ],
    "subjects": [
      "politics",
      "literature"
    ]
  },
  {
    "id": "mill",
    "subject": "politics",
    "region": "world",
    "year": 1859,
    "dates": "1806—1873",
    "name": "约翰·斯图尔特·密尔",
    "alias": "自由论与代议制政府的理论家",
    "era": "modern",
    "period": "英国·维多利亚",
    "summary": "在功利主义框架内为个人自由划定不可侵犯的边界，并讨论代议制政府中多数与少数、精英与大众的关系。",
    "life": "边沁的教子，从小受严格的功利主义教育。东印度公司职员，晚年曾任下院议员。其著作涵盖逻辑学、经济学、政治学与伦理学。",
    "context": "维多利亚时代的经济繁荣与社会改革并存，民主化进程产生了\"多数暴政\"的忧惧。",
    "style": [
      "经验主义的论证方式",
      "清晰的结构与细致的反驳",
      "自我修正的诚实（晚年对社会主义的同情）"
    ],
    "ideas": [
      "伤害原则（自由边界）",
      "代议政府中的精英参与与公众控制"
    ],
    "works": [
      {
        "title": "论自由",
        "year": "1859",
        "intro": "论证个体思想、言论与生活方式不受社会或国家干涉的边界。"
      },
      {
        "title": "代议制政府",
        "year": "1861",
        "intro": "讨论代议政体的原则、结构、风险与改进方向。"
      }
    ],
    "links": [
      [
        "locke",
        "从自然权利到功利主义的自由观演变"
      ],
      [
        "rawls",
        "自由与平等的再平衡"
      ]
    ],
    "subjects": [
      "politics",
      "philosophy"
    ]
  },
  {
    "id": "schmitt",
    "subject": "politics",
    "region": "world",
    "year": 1922,
    "dates": "1888—1985",
    "name": "卡尔·施密特",
    "alias": "主权与政治概念的理论家",
    "era": "contemporary",
    "period": "德国·20世纪",
    "summary": "以\"主权就是决定例外状态\"和\"敌友划分\"重新定义政治，对自由主义法治观和议会制提出尖锐批判。",
    "life": "生于德国普莱滕贝格，先后在多所大学任教。纳粹时期为政权提供法律辩护，战后被剥夺教职但仍持续写作。",
    "context": "魏玛共和国的危机使\"主权\"与\"例外状态\"成为实际政治问题。",
    "style": [
      "挑衅性的概念界定",
      "以法律论证讨论政治的根本问题",
      "决断论与思想实验"
    ],
    "ideas": [
      "主权即决定例外状态",
      "政治的标准是敌友划分",
      "议会制的合法性危机"
    ],
    "works": [
      {
        "title": "政治的神学",
        "year": "1922",
        "intro": "提出\"主权就是决定例外状态\"的著名命题。"
      },
      {
        "title": "政治的概念",
        "year": "1927",
        "intro": "以敌友划分重新界定政治领域，批判自由主义的去政治化趋势。"
      },
      {
        "title": "宪法学说",
        "year": "1928",
        "intro": "从政治决断论出发分析魏玛宪法。"
      }
    ],
    "links": [
      [
        "arendt",
        "例外状态与极权主义的不同分析路径"
      ],
      [
        "hobbes",
        "主权理论的现代回响"
      ]
    ],
    "subjects": [
      "politics",
      "law"
    ]
  },
  {
    "id": "wangbi",
    "subject": "philosophy",
    "region": "china",
    "year": 245,
    "dates": "226—249",
    "name": "王弼",
    "alias": "魏晋玄学的开创者",
    "era": "ancient",
    "period": "三国·魏",
    "summary": "以\"无\"为本重新注释《老子》和《周易》，将汉代宇宙论转化为精致的本体论思辨，开启魏晋玄学。",
    "life": "山阳高平人，天才早慧，十余岁即通《老子》。与何晏等交往论学，提出\"圣人体无\"\"得意忘言\"等重要命题。二十三岁因疫病去世，但留下的《老子注》《周易注》影响中国哲学史千余年。",
    "context": "汉代经学僵化后，士人寻求新的思想资源来理解个人与宇宙、名教与自然的关系。",
    "style": [
      "以简驭繁的思辨",
      "将经学问题转换为哲学命题",
      "概念精确、逻辑严密"
    ],
    "ideas": [
      "以无为本的本体论",
      "得意忘言的方法论",
      "名教与自然的统一"
    ],
    "works": [
      {
        "title": "老子注",
        "year": "约245",
        "intro": "以\"无\"为本重新解释《老子》，将道家宇宙论改造为精致的哲学本体论。"
      },
      {
        "title": "周易注",
        "year": "约248",
        "intro": "扫除汉代象数之学，以义理阐明《周易》哲学意蕴，开启义理易学传统。"
      }
    ],
    "links": [
      [
        "laozi",
        "从宇宙论到本体论的道家转型"
      ],
      [
        "zhuxi",
        "玄学对理学的深远影响"
      ]
    ],
    "subjects": [
      "philosophy"
    ]
  }
];

window.KNOWLEDGE_DATA = { SUBJECTS, PAIRS, BOOKS, ERA_STORIES, AUTHORS }
