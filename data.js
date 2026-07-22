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
    "id": "his-han",
    "subject": "history",
    "era": "ancient",
    "china": {
      "year": -80,
      "title": "汉代经学与史学传统确立",
      "person": "刘向、刘歆、班固",
      "text": "刘向父子校理群书开创目录学，班固《汉书》确立断代史体例，经学成为国家学术。"
    },
    "world": {
      "year": 23,
      "title": "斯特拉波《地理学》",
      "person": "斯特拉波",
      "text": "以罗马帝国视野记述已知世界的地理、民族与历史。"
    },
    "question": "帝国如何通过整理知识与书写历史来建构自身的正统性？"
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
    "id": "lit-liuchao",
    "subject": "literature",
    "era": "ancient",
    "china": {
      "year": 430,
      "title": "六朝山水与田园诗兴起",
      "person": "谢灵运、陶渊明",
      "text": "山水从诗歌背景成为独立审美对象，田园成为精神归宿。"
    },
    "world": {
      "year": 413,
      "title": "奥古斯丁《上帝之城》",
      "person": "奥古斯丁",
      "text": "以两座城的比喻回应帝国衰亡与信仰意义。"
    },
    "question": "在社会动荡中，自然和信仰分别提供了怎样的庇护？"
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
    "id": "lit-tang",
    "subject": "literature",
    "era": "medieval",
    "china": {
      "year": 760,
      "title": "盛唐诗歌与书法高峰",
      "person": "王维、颜真卿",
      "text": "王维以\"诗中有画\"融通视觉与文字；颜真卿将书法从法度推向人格表达。"
    },
    "world": {
      "year": 731,
      "title": "日本《古事记》编成",
      "person": "太安万侣",
      "text": "以汉字记录日本神话、传说与早期天皇系谱。"
    },
    "question": "艺术的个性表达如何与制度化的文化传统共存？"
  },
  {
    "id": "lit-tang2",
    "subject": "literature",
    "era": "medieval",
    "china": {
      "year": 810,
      "title": "唐代古文运动",
      "person": "韩愈、柳宗元",
      "text": "以\"文以载道\"扭转骈俪文风，恢复先秦两汉的古文传统。"
    },
    "world": {
      "year": 800,
      "title": "加洛林文艺复兴",
      "person": "阿尔昆",
      "text": "查理曼宫廷推动拉丁文学与教育的复兴。"
    },
    "question": "\"回到古典\"为何在不同文明中反复成为变革的旗帜？"
  },
  {
    "id": "pol-6",
    "subject": "politics",
    "era": "medieval",
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
    "id": "sci-song",
    "subject": "philosophy",
    "era": "medieval",
    "china": {
      "year": 1088,
      "title": "宋代科技与理学并行",
      "person": "沈括、程颢、程颐",
      "text": "沈括《梦溪笔谈》记录天文地理工程技术；二程以\"天理\"重建儒学本体论。"
    },
    "world": {
      "year": 1095,
      "title": "第一次十字军东征",
      "person": "教皇乌尔班二世",
      "text": "宗教热情与政治军事扩张交织，改变欧洲与中东的关系格局。"
    },
    "question": "技术与思想的双重繁荣如何相互滋养？"
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
    "id": "lit-songci",
    "subject": "literature",
    "era": "medieval",
    "china": {
      "year": 1190,
      "title": "南宋爱国词的巅峰",
      "person": "辛弃疾、陆游",
      "text": "以将帅之气与文人之笔熔铸，将爱国主题推到词史最高峰。"
    },
    "world": {
      "year": 1185,
      "title": "骑士文学兴起",
      "person": "克雷蒂安·德·特鲁瓦",
      "text": "骑士文学用爱情与冒险重新定义中世纪英雄理想。"
    },
    "question": "战争时代的文学应该做什么？"
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
    "id": "lit-ming2",
    "subject": "literature",
    "era": "early-modern",
    "china": {
      "year": 1590,
      "title": "明代中后期文学多元",
      "person": "汤显祖、冯梦龙",
      "text": "《牡丹亭》以情抗理开创至情论；\"三言\"将市井故事提升为文学经典。"
    },
    "world": {
      "year": 1595,
      "title": "莎士比亚早期创作",
      "person": "莎士比亚",
      "text": "《罗密欧与朱丽叶》等将个人情感置于社会冲突的中心。"
    },
    "question": "情感的表达如何在不同文明中突破社会规范的边界？"
  },
  {
    "id": "lit-ming3",
    "subject": "literature",
    "era": "early-modern",
    "china": {
      "year": 1598,
      "title": "明代戏曲的至情论",
      "person": "汤显祖",
      "text": "《牡丹亭》以情不知所起一往而深将戏曲提升为哲学追问。"
    },
    "world": {
      "year": 1598,
      "title": "环球剧场开演",
      "person": "莎士比亚",
      "text": "《亨利五世》在新建的环球剧场上演。"
    },
    "question": "东西方戏剧在同一年走向了完全不同的方向？"
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
    "id": "his-qing",
    "subject": "history",
    "era": "early-modern",
    "china": {
      "year": 1780,
      "title": "乾嘉考据学全盛",
      "person": "戴震、钱大昕、章学诚",
      "text": "以音韵、训诂、校勘重建经典原义；章学诚提出\"六经皆史\"。"
    },
    "world": {
      "year": 1776,
      "title": "吉本《罗马帝国衰亡史》",
      "person": "吉本",
      "text": "以启蒙理性的视角叙述罗马如何走向衰亡。"
    },
    "question": "考据方法和启蒙理性在对待历史时有什么根本不同？"
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
    "id": "pol-may4th",
    "subject": "politics",
    "era": "modern",
    "china": {
      "year": 1919,
      "title": "五四运动与新文化运动",
      "person": "陈独秀、胡适、李大钊",
      "text": "\"德先生\"与\"赛先生\"成为改造中国的两面旗帜，白话文取代文言文。"
    },
    "world": {
      "year": 1919,
      "title": "凡尔赛和约与国际联盟成立",
      "person": "威尔逊、克列孟梭",
      "text": "一战后的国际秩序重建，民族自决原则的提出与局限。"
    },
    "question": "文化革命与政治革命谁先谁后？还是必须同时发生？"
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
    "id": "soc-reform",
    "subject": "sociology",
    "era": "contemporary",
    "china": {
      "year": 1978,
      "title": "改革开放启动",
      "person": "邓小平及改革派",
      "text": "从包产到户到市场经济，中国社会结构发生根本性重组。"
    },
    "world": {
      "year": 1979,
      "title": "撒切尔夫人当选英国首相",
      "person": "撒切尔夫人",
      "text": "新自由主义改革在西方开启，市场化与私有化成为全球趋势。"
    },
    "question": "市场化改革在不同政治体制下带来的社会变迁有何异同？"
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
  },
  {
    "id": "b51",
    "subject": "history",
    "region": "china",
    "title": "汉书",
    "author": "班固",
    "year": "1世纪",
    "level": "进阶",
    "note": "比较《汉书》与《史记》的体例差异，看断代史如何服务于王朝正统。"
  },
  {
    "id": "b52",
    "subject": "philosophy",
    "region": "china",
    "title": "梦溪笔谈",
    "author": "沈括",
    "year": "11世纪",
    "level": "进阶",
    "note": "不只是科技史，更是宋代士人\"格物\"精神的百科全书。"
  },
  {
    "id": "b53",
    "subject": "literature",
    "region": "china",
    "title": "牡丹亭",
    "author": "汤显祖",
    "year": "1598",
    "level": "核心",
    "note": "\"情不知所起，一往而深\"——一个梦如何颠覆礼教秩序。"
  },
  {
    "id": "b54",
    "subject": "history",
    "region": "china",
    "title": "文史通义",
    "author": "章学诚",
    "year": "18世纪",
    "level": "进阶",
    "note": "\"六经皆史\"把一切经典当作历史材料来读。"
  },
  {
    "id": "b55",
    "subject": "literature",
    "region": "world",
    "title": "罗密欧与朱丽叶",
    "author": "莎士比亚",
    "year": "1595",
    "level": "核心",
    "note": "爱情如何被家族仇恨和社会规范撕裂，又是如何超越它们。"
  },
  {
    "id": "b56",
    "subject": "literature",
    "region": "world",
    "title": "俄狄浦斯王",
    "author": "索福克勒斯",
    "year": "约前430",
    "level": "核心",
    "note": "当你知道了自己的命运，每一步是走向它还是逃离它？"
  },
  {
    "id": "b57",
    "subject": "philosophy",
    "region": "world",
    "title": "沉思录",
    "author": "马可·奥勒留",
    "year": "170—180",
    "level": "进阶",
    "note": "一个罗马皇帝在军营帐篷里写给自己的私人笔记。"
  },
  {
    "id": "b58",
    "subject": "philosophy",
    "region": "world",
    "title": "哲学的慰藉",
    "author": "波爱修斯",
    "year": "约524",
    "level": "进阶",
    "note": "在等待死刑的牢狱中，理性如何成为最后的慰藉。"
  },
  {
    "id": "b59",
    "subject": "literature",
    "region": "world",
    "title": "罪与罚",
    "author": "陀思妥耶夫斯基",
    "year": "1866",
    "level": "核心",
    "note": "一个人能否超越道德？小说的回答让你不寒而栗。"
  },
  {
    "id": "b60",
    "subject": "philosophy",
    "region": "world",
    "title": "精神现象学",
    "author": "黑格尔",
    "year": "1807",
    "level": "进阶",
    "note": "先读\"主奴辩证法\"一节，理解什么是\"承认的斗争\"。"
  },
  {
    "id": "b61",
    "subject": "literature",
    "region": "world",
    "title": "局外人",
    "author": "阿尔贝·加缪",
    "year": "1942",
    "level": "基础",
    "note": "今天，妈妈死了。也许是昨天，我不知道。"
  },
  {
    "id": "b62",
    "subject": "literature",
    "region": "world",
    "title": "虚构集",
    "author": "博尔赫斯",
    "year": "1944",
    "level": "核心",
    "note": "读完《巴别图书馆》你会重新思考什么是\"一本书\"。"
  },
  {
    "id": "b63",
    "subject": "literature",
    "region": "china",
    "title": "饮水词",
    "author": "纳兰性德",
    "year": "约1680",
    "level": "进阶",
    "note": "一个满族贵公子写出最纯正的汉语词。"
  },
  {
    "id": "b64",
    "subject": "literature",
    "region": "china",
    "title": "骆驼祥子",
    "author": "老舍",
    "year": "1936",
    "level": "核心",
    "note": "一个车夫的三起三落，是整个底层中国的命运缩影。"
  },
  {
    "id": "b65",
    "subject": "literature",
    "region": "china",
    "title": "边城",
    "author": "沈从文",
    "year": "1934",
    "level": "基础",
    "note": "在中国最动荡的时代写出最宁静的作品。"
  },
  {
    "id": "b67",
    "subject": "literature",
    "region": "world",
    "title": "1984",
    "author": "乔治·奥威尔",
    "year": "1949",
    "level": "核心",
    "note": "读完问自己：如果语言可以被重新定义，\"真实\"还存在吗？"
  },
  {
    "id": "b68",
    "subject": "literature",
    "region": "world",
    "title": "达洛维夫人",
    "author": "弗吉尼亚·伍尔夫",
    "year": "1925",
    "level": "进阶",
    "note": "以一天的时间写尽一个女人的全部人生。"
  },
  {
    "id": "b69",
    "subject": "literature",
    "region": "world",
    "title": "格列佛游记",
    "author": "乔纳森·斯威夫特",
    "year": "1726",
    "level": "核心",
    "note": "表面上是一本儿童读物，骨子里是最锋利的社会解剖刀。"
  },
  {
    "id": "b70",
    "subject": "literature",
    "region": "china",
    "title": "己亥杂诗",
    "author": "龚自珍",
    "year": "1839",
    "level": "进阶",
    "note": "落红不是无情物，化作春泥更护花。"
  },
  {
    "id": "b71",
    "subject": "politics",
    "region": "world",
    "title": "通往奴役之路",
    "author": "弗里德里希·哈耶克",
    "year": "1944",
    "level": "核心",
    "note": "理解为什么分散的知识比集中的权力更可靠。"
  },
  {
    "id": "b72",
    "subject": "philosophy",
    "region": "world",
    "title": "几何原本",
    "author": "欧几里得",
    "year": "约前300",
    "level": "进阶",
    "note": "十三卷，以五条公设推导出整座几何大厦。逻辑之美的极致。"
  },
  {
    "id": "b73",
    "subject": "literature",
    "region": "world",
    "title": "包法利夫人",
    "author": "福楼拜",
    "year": "1857",
    "level": "核心",
    "note": "注意叙述者如何既同情又讽刺爱玛。"
  },
  {
    "id": "b74",
    "subject": "literature",
    "region": "world",
    "title": "尤利西斯",
    "author": "詹姆斯·乔伊斯",
    "year": "1922",
    "level": "进阶",
    "note": "不必从头读到尾，随便翻到哪一页开始。"
  },
  {
    "id": "b75",
    "subject": "literature",
    "region": "world",
    "title": "等待戈多",
    "author": "贝克特",
    "year": "1953",
    "level": "基础",
    "note": "什么也没发生，但所有重要的事都在其中。"
  },
  {
    "id": "b76",
    "subject": "literature",
    "region": "china",
    "title": "儒林外史",
    "author": "吴敬梓",
    "year": "约1749",
    "level": "进阶",
    "note": "范进中举之后，看什么都是讽刺。"
  },
  {
    "id": "b77",
    "subject": "philosophy",
    "region": "world",
    "title": "开放社会及其敌人",
    "author": "波普尔",
    "year": "1945",
    "level": "进阶",
    "note": "先看对柏拉图的批判，再看对马克思的。"
  },
  {
    "id": "b78",
    "subject": "philosophy",
    "region": "world",
    "title": "瓦尔登湖",
    "author": "梭罗",
    "year": "1854",
    "level": "基础",
    "note": "找一片水边读，效果加倍。"
  },
  {
    "id": "b79",
    "subject": "literature",
    "region": "china",
    "title": "聊斋志异",
    "author": "蒲松龄",
    "year": "约1700",
    "level": "进阶",
    "note": "每天睡前读一篇。"
  },
  {
    "id": "b80",
    "subject": "philosophy",
    "region": "world",
    "title": "道德书简",
    "author": "塞涅卡",
    "year": "约65",
    "level": "进阶",
    "note": "两千年前的斯多亚智慧，至今仍然有效。"
  },
  {
    "id": "b81",
    "subject": "literature",
    "region": "world",
    "title": "悲惨世界",
    "author": "雨果",
    "year": "1862",
    "level": "核心",
    "note": "不要跳过滑铁卢那一章——它是理解全部叙事的关键。"
  },
  {
    "id": "b82",
    "subject": "literature",
    "region": "world",
    "title": "道林·格雷的画像",
    "author": "王尔德",
    "year": "1890",
    "level": "核心",
    "note": "青春永驻的代价是什么。"
  },
  {
    "id": "b83",
    "subject": "literature",
    "region": "world",
    "title": "玩偶之家",
    "author": "易卜生",
    "year": "1879",
    "level": "基础",
    "note": "听,那扇门摔上的声音。"
  },
  {
    "id": "b84",
    "subject": "literature",
    "region": "world",
    "title": "草叶集",
    "author": "惠特曼",
    "year": "1855",
    "level": "进阶",
    "note": "随便翻开一页，大声朗读。"
  },
  {
    "id": "b85",
    "subject": "literature",
    "region": "china",
    "title": "孙子兵法",
    "author": "孙子",
    "year": "约前500",
    "level": "基础",
    "note": "不只是兵书，更是关于如何思考竞争和决策的元理论。"
  },
  {
    "id": "b86",
    "subject": "literature",
    "region": "china",
    "title": "西厢记",
    "author": "王实甫",
    "year": "约1300",
    "level": "进阶",
    "note": "愿天下有情人都成了眷属。"
  },
  {
    "id": "b87",
    "subject": "politics",
    "region": "world",
    "title": "甘地自传",
    "author": "甘地",
    "year": "1925",
    "level": "基础",
    "note": "体验真理的历程，比任何理论都更有力量。"
  },
  {
    "id": "b88",
    "subject": "literature",
    "region": "world",
    "title": "鲁滨逊漂流记",
    "author": "笛福",
    "year": "1719",
    "level": "基础",
    "note": "一个人,一个岛,从头开始。现代个人主义的原型。"
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
    "id": "shangshu",
    "subject": "history",
    "region": "china",
    "year": -1000,
    "dates": "约前11世纪—前6世纪",
    "name": "尚书",
    "alias": "中国最早的史书",
    "era": "ancient",
    "period": "商周时期",
    "summary": "中国现存最早的文献汇编，记录尧舜至春秋的诰、命、训、誓，是了解上古政治思想的根本文献。",
    "life": "作者不详，经孔子整理，汉初伏生传授。今古文之争围绕此书展开千年。",
    "context": "口传时代的结束与文字记录的开始，历史书写成为政权合法性的重要工具。",
    "style": [
      "简古的诰命文体",
      "以政治演说承载历史"
    ],
    "ideas": [
      "天命与德治",
      "以史为鉴的源头"
    ],
    "works": [
      {
        "title": "尚书",
        "year": "约前11—前6世纪",
        "intro": "典谟训诰誓命六体，记录上古君臣的政务与思想。"
      }
    ],
    "links": [
      [
        "confucius",
        "经典整理的源头"
      ]
    ],
    "subjects": [
      "history",
      "politics"
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
    "id": "thales",
    "subject": "philosophy",
    "region": "world",
    "year": -585,
    "dates": "约前624—约前546",
    "name": "泰勒斯",
    "alias": "西方哲学的第一人",
    "era": "ancient",
    "period": "古希腊·古风时代",
    "summary": "以\"水是万物的本源\"开启西方哲学对自然本原的追问，被亚里士多德尊为哲学之父。",
    "life": "米利都人，传说中成功预测日食。商人、工程师和政治家。",
    "context": "从神话思维向理性思维的转折点。",
    "style": [
      "对自然本原的系统追问",
      "以单一原则解释多样世界"
    ],
    "ideas": [
      "水是万物的本源",
      "自然的理性可知性"
    ],
    "works": [
      {
        "title": "泰勒斯残篇",
        "year": "约前585",
        "intro": "无完整著作传世，思想保存在亚里士多德等后人引述中。"
      }
    ],
    "links": [
      [
        "laozi",
        "东西方哲学源头的平行追问"
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
    "id": "sunzi",
    "subject": "politics",
    "region": "china",
    "year": -500,
    "dates": "约前6世纪",
    "name": "孙子",
    "alias": "兵法的奠基者",
    "era": "ancient",
    "period": "春秋",
    "summary": "以《孙子兵法》十三篇将战争提升为哲学，其\"不战而屈人之兵\"的战略思想影响远超军事领域。",
    "life": "齐国人，名武。为吴王阖闾练兵，以宫女演阵斩二宠妃的故事广为流传。",
    "context": "春秋争霸需要系统的军事理论，战争不再是贵族的勇武表演。",
    "style": [
      "精炼的格言体",
      "以辩证思维讨论战争"
    ],
    "ideas": [
      "不战而屈人之兵",
      "知己知彼",
      "兵者诡道"
    ],
    "works": [
      {
        "title": "孙子兵法",
        "year": "约前500",
        "intro": "十三篇被翻译为数十种文字，是全球最广泛阅读的军事著作。"
      }
    ],
    "links": [
      [
        "shangyang",
        "兵家到法家"
      ],
      [
        "machiavelli",
        "东西方军事/政治思想的对话"
      ]
    ],
    "subjects": [
      "politics",
      "philosophy"
    ]
  },
  {
    "id": "heraclitus",
    "subject": "philosophy",
    "region": "world",
    "year": -500,
    "dates": "约前535—约前475",
    "name": "赫拉克利特",
    "alias": "晦涩的哲人",
    "period": "古希腊",
    "summary": "人不能两次踏入同一条河流。",
    "life": "以弗所贵族，放弃王位隐居。著作仅存残篇。",
    "context": "前苏格拉底哲学家在寻找万物的不变本原。",
    "style": [
      "晦涩的箴言体"
    ],
    "ideas": [
      "万物流变",
      "逻各斯"
    ],
    "works": [
      {
        "title": "赫拉克利特残篇",
        "year": "约前500",
        "intro": "百余条箴言探索宇宙法则。"
      }
    ],
    "links": [
      [
        "laozi",
        "东西方言说道的不同方式"
      ]
    ],
    "subjects": [
      "philosophy"
    ],
    "era": "ancient"
  },
  {
    "id": "buddha",
    "subject": "philosophy",
    "region": "world",
    "year": -500,
    "dates": "约前563—前483",
    "name": "释迦牟尼",
    "alias": "觉悟者",
    "era": "ancient",
    "period": "古印度",
    "summary": "以四圣谛和八正道为人类指出从痛苦中解脱的道路。",
    "life": "古印度迦毗罗卫国王子出家苦行六年后在菩提树下觉悟。",
    "context": "印度宗教哲学从祭祀转向个人修行与觉悟。",
    "style": [
      "以问答和譬喻讲法"
    ],
    "ideas": [
      "苦集灭道四圣谛中道"
    ],
    "works": [
      {
        "title": "阿含经",
        "year": "约前5世纪",
        "intro": "原始佛教经典记录佛陀的基本教义。"
      }
    ],
    "links": [
      [
        "laozi",
        "东西方觉悟之路平行"
      ],
      [
        "marcusaurelius",
        "精神修炼东西方对照"
      ]
    ],
    "subjects": [
      "philosophy"
    ]
  },
  {
    "id": "parmenides",
    "subject": "philosophy",
    "region": "world",
    "year": -470,
    "dates": "约前515—约前450",
    "name": "巴门尼德",
    "alias": "存在论奠基者",
    "period": "古希腊",
    "summary": "存在者存在，不存在者不存在。",
    "life": "意大利南部埃利亚人。以长诗论自然。",
    "context": "前苏格拉底自然哲学的分水岭。",
    "style": [
      "以诗论哲"
    ],
    "ideas": [
      "存在即思维"
    ],
    "works": [
      {
        "title": "论自然",
        "year": "约前470",
        "intro": "以长诗阐述存在的不变性。"
      }
    ],
    "links": [
      [
        "heidegger",
        "两千年后对存在的重新追问"
      ]
    ],
    "subjects": [
      "philosophy"
    ],
    "era": "ancient"
  },
  {
    "id": "aeschylus",
    "subject": "literature",
    "region": "world",
    "year": -458,
    "dates": "约前525—前456",
    "name": "埃斯库罗斯",
    "alias": "古希腊悲剧之父",
    "era": "ancient",
    "period": "古典希腊",
    "summary": "在悲剧中引入第二个演员，使戏剧从独唱变为对话，以《俄瑞斯忒亚》三部曲探索正义从复仇到法治的演进。",
    "life": "雅典人，参加马拉松和萨拉米斯战役。据说被老鹰误认为龟壳是天降之石，砸头而死。",
    "context": "雅典民主制刚刚建立，用神话思考正义与制度的本质。",
    "style": [
      "庄严宏大的风格",
      "神话作为政治哲学",
      "三部曲的结构创新"
    ],
    "ideas": [
      "从血亲复仇到城邦法庭",
      "正义的进化"
    ],
    "works": [
      {
        "title": "俄瑞斯忒亚",
        "year": "前458",
        "intro": "三部曲以弑母案为线索，讨论从复仇到法治的正义转型。"
      },
      {
        "title": "波斯人",
        "year": "前472",
        "intro": "以波斯视角写战争，是现存最早的希腊悲剧。"
      }
    ],
    "links": [
      [
        "sophocles",
        "悲剧形式的完善"
      ]
    ],
    "subjects": [
      "literature",
      "politics"
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
    "id": "sophocles",
    "subject": "literature",
    "region": "world",
    "year": -430,
    "dates": "约前496—前406",
    "name": "索福克勒斯",
    "alias": "古希腊悲剧的巅峰",
    "era": "ancient",
    "period": "古典希腊",
    "summary": "以《俄狄浦斯王》将命运悲剧推向完美，在自由意志与神之预言间创造最深刻的戏剧张力。",
    "life": "雅典人，参加戏剧比赛二十四次十八次获头奖。与埃斯库罗斯、欧里庇得斯并列为三大悲剧家。",
    "context": "雅典民主的黄金时代，戏剧是国家性的公民活动。",
    "style": [
      "结构完美而节制",
      "在命运必然中展现人的尊严"
    ],
    "ideas": [
      "命运与自由意志的冲突",
      "无知之知与悲剧"
    ],
    "works": [
      {
        "title": "俄狄浦斯王",
        "year": "约前430",
        "intro": "弑父娶母的预设展开最完美的命运悲剧。"
      },
      {
        "title": "安提戈涅",
        "year": "约前441",
        "intro": "个人良知对抗国家法令。"
      }
    ],
    "links": [
      [
        "shakespeare",
        "古希腊悲剧的文艺复兴回响"
      ]
    ],
    "subjects": [
      "literature",
      "philosophy"
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
    "id": "golgi",
    "subject": "philosophy",
    "region": "world",
    "year": -410,
    "dates": "约前483—约前375",
    "name": "高尔吉亚",
    "alias": "修辞学的奠基者",
    "period": "古典希腊",
    "summary": "以三重论证无物存在若有物存在也无法认识若能认识也无法传达将怀疑论推向极致。",
    "life": "西西里莱昂蒂尼人以演说术闻名据说活到一百零八岁。",
    "context": "智者运动的极致是将修辞本身变成哲学问题。",
    "style": [
      "极端的怀疑论证"
    ],
    "ideas": [
      "语言与真实的关系"
    ],
    "works": [
      {
        "title": "论非存在",
        "year": "约前410",
        "intro": "以三重论证无物存在。"
      }
    ],
    "links": [
      [
        "protagoras",
        "智者运动的双峰"
      ]
    ],
    "subjects": [
      "philosophy"
    ],
    "era": "ancient"
  },
  {
    "id": "gorgias",
    "subject": "philosophy",
    "region": "world",
    "year": -410,
    "dates": "约前483—约前375",
    "name": "高尔吉亚",
    "alias": "修辞学奠基者",
    "period": "古典希腊",
    "summary": "以三重论证无物存在将怀疑论推向极致。",
    "life": "西西里莱昂蒂尼人以演说术闻名据说活到一百零八岁。",
    "context": "智者运动极致是将修辞本身变成哲学问题。",
    "style": [
      "极端怀疑论证"
    ],
    "ideas": [
      "语言与真实关系"
    ],
    "works": [
      {
        "title": "论非存在",
        "year": "约前410",
        "intro": "以三重论证无物存在。"
      }
    ],
    "links": [
      [
        "protagoras",
        "智者运动双峰"
      ]
    ],
    "subjects": [
      "philosophy"
    ],
    "era": "ancient"
  },
  {
    "id": "zuozhuan",
    "subject": "history",
    "region": "china",
    "year": -400,
    "dates": "约前4世纪成书",
    "name": "左丘明",
    "alias": "编年叙事的典范",
    "era": "ancient",
    "period": "春秋—战国",
    "summary": "以《春秋》为纲，用丰富的对话、战争描写和人物刻画将编年史变成文学与史学交织的杰作。",
    "life": "传统称左丘明为鲁国史官，双目失明后作《左传》。学术界对此身份多有争议。",
    "context": "春秋末期至战国初期，各国史官系统发达，私人著述开始出现。",
    "style": [
      "以事解经的叙事艺术",
      "战争描写的史诗气魄",
      "对话中展现人物性格"
    ],
    "ideas": [
      "经与史的统一",
      "叙事中的道德判断"
    ],
    "works": [
      {
        "title": "左传",
        "year": "约前4世纪",
        "intro": "三十卷以丰富叙事充实《春秋》的简短记录。"
      }
    ],
    "links": [
      [
        "simaqian",
        "编年到纪传的史体演进"
      ],
      [
        "herodotus",
        "中西早期史学平行对照"
      ]
    ],
    "subjects": [
      "history",
      "literature"
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
    "id": "guoyu",
    "subject": "history",
    "region": "china",
    "year": -350,
    "dates": "约前4世纪成书",
    "name": "国语",
    "alias": "列国记言史的代表",
    "era": "ancient",
    "period": "战国",
    "summary": "以记言为主，记录周至春秋八国的君臣言论，是了解先秦政治思想分化的珍贵文本。",
    "life": "传统称左丘明所作，实际可能由不同史官编成。",
    "context": "战国百家争鸣前夕，各国形成了不同的政治话语传统。",
    "style": [
      "记言为主的史体",
      "列国分述的比较视野"
    ],
    "ideas": [
      "语言中的政治智慧"
    ],
    "works": [
      {
        "title": "国语",
        "year": "约前4世纪",
        "intro": "二十一卷分记周鲁齐晋郑楚吴越八国言论。"
      }
    ],
    "links": [
      [
        "simaqian",
        "史体多元化的探索"
      ]
    ],
    "subjects": [
      "history"
    ]
  },
  {
    "id": "diogenes",
    "subject": "philosophy",
    "region": "world",
    "year": -350,
    "dates": "约前412—前323",
    "name": "第欧根尼",
    "alias": "犬儒主义的化身",
    "era": "ancient",
    "period": "古典希腊",
    "summary": "住在木桶里，对亚历山大大帝说\"请别挡住我的阳光\"，以最极端的生活方式实践\"反文明\"的哲学。",
    "life": "黑海边的锡诺普人，因伪造货币被流放雅典。成为安提斯泰尼的学生后，将犬儒主义推到极致。",
    "context": "城邦政治衰落，一部分哲人选择以彻底脱离社会的方式表达抗议。",
    "style": [
      "以身体实践哲学",
      "尖刻的幽默与行动"
    ],
    "ideas": [
      "自然高于习俗",
      "自足即自由"
    ],
    "works": [
      {
        "title": "第欧根尼轶事",
        "year": "约前4世纪",
        "intro": "无著作传世，言行保存在拉尔修《名哲言行录》中。"
      }
    ],
    "links": [
      [
        "socrates",
        "哲学作为一种生活方式"
      ],
      [
        "zhuangzi",
        "犬儒与道家的跨文明对照"
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
    "id": "epicurus",
    "subject": "philosophy",
    "region": "world",
    "year": -306,
    "dates": "前341—前270",
    "name": "伊壁鸠鲁",
    "alias": "花园中的哲人",
    "era": "ancient",
    "period": "希腊化时期",
    "summary": "以原子论和快乐主义将哲学定义为追求心灵宁静的艺术，\"死亡与我们无关\"是其最著名的处方。",
    "life": "雅典人，在自家花园中办学。打破了哲学的高墙，让女性和奴隶也能参与哲学讨论。",
    "context": "亚历山大帝国崩溃后，人无法控制政治，转向控制内心。",
    "style": [
      "以简洁教条代替复杂推理",
      "书信体的哲学传播"
    ],
    "ideas": [
      "快乐是身体无痛苦和灵魂无纷扰",
      "死亡与我们无关"
    ],
    "works": [
      {
        "title": "致美诺西斯的信",
        "year": "约前306",
        "intro": "总结伊壁鸠鲁伦理学的核心教义。"
      },
      {
        "title": "主要学说",
        "year": "约前300",
        "intro": "四十条格言是其思想的最简版本。"
      }
    ],
    "links": [
      [
        "lucretius",
        "伊壁鸠鲁主义的罗马传承"
      ]
    ],
    "subjects": [
      "philosophy"
    ]
  },
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
    "id": "euclid",
    "subject": "history",
    "region": "world",
    "year": -300,
    "dates": "约前325—约前265",
    "name": "欧几里得",
    "alias": "几何学的奠基者",
    "era": "ancient",
    "period": "古典希腊",
    "summary": "以《几何原本》为数学建立公理化的典范，其逻辑演绎方法影响远超数学。",
    "life": "亚历山大里亚的数学家，生平资料极少。",
    "context": "亚历山大帝国崩溃后，知识中心转移到亚历山大里亚。",
    "style": [
      "公理化的演绎体系",
      "从定义到定理的严格推演"
    ],
    "ideas": [
      "几何学的公理方法作为知识的典范"
    ],
    "works": [
      {
        "title": "几何原本",
        "year": "约前300",
        "intro": "十三卷以五条公设推导出465条定理，是西方仅次于圣经的畅销书。"
      }
    ],
    "links": [
      [
        "aristotle",
        "从逻辑学到公理化方法"
      ],
      [
        "descartes",
        "几何方法论的千年传承"
      ]
    ],
    "subjects": [
      "history",
      "philosophy"
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
    "id": "gongsunlong",
    "subject": "philosophy",
    "region": "china",
    "year": -280,
    "dates": "约前325—前250",
    "name": "公孙龙",
    "alias": "名家的代表",
    "era": "ancient",
    "period": "战国",
    "summary": "以\"白马非马\"等命题将语言分析推到极致挑战，追问名与实的关系。",
    "life": "赵国人，曾为平原君门客。以\"白马非马\"的论证震动战国。",
    "context": "百家争鸣中名家独树一帜，对语言和逻辑本身进行哲学反思。",
    "style": [
      "悖论式的逻辑论证",
      "将语言本身作为哲学对象"
    ],
    "ideas": [
      "白马非马",
      "坚白论"
    ],
    "works": [
      {
        "title": "公孙龙子",
        "year": "约前280",
        "intro": "现存六篇讨论名实关系和逻辑悖论。"
      }
    ],
    "links": [
      [
        "mozi",
        "墨家逻辑的延续与争论"
      ],
      [
        "wittgenstein",
        "语言的边界"
      ]
    ],
    "subjects": [
      "philosophy"
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
    "id": "archimedes",
    "subject": "history",
    "region": "world",
    "year": -220,
    "dates": "约前287—前212",
    "name": "阿基米德",
    "alias": "古希腊最伟大的科学家",
    "era": "ancient",
    "period": "希腊化时期",
    "summary": "以浮力定律和杠杆原理将数学应用于物理世界，其\"给我一个支点\"是人类科学自信的最早宣言。",
    "life": "西西里岛叙拉古人。罗马攻陷叙拉古时正在沙盘上演算几何，被士兵所杀。",
    "context": "亚历山大里亚学派将希腊科学从雅典的纯思辨推向应用。",
    "style": [
      "以数学应用于物理",
      "从公理推导实际结论"
    ],
    "ideas": [
      "浮力定律",
      "杠杆原理"
    ],
    "works": [
      {
        "title": "论浮体",
        "year": "约前250",
        "intro": "以数学证明浮力定律。"
      },
      {
        "title": "方法",
        "year": "约前240",
        "intro": "讨论数学发现的方法论。"
      }
    ],
    "links": [
      [
        "euclid",
        "几何学的实际应用"
      ]
    ],
    "subjects": [
      "history"
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
    "id": "lucretius",
    "subject": "philosophy",
    "region": "world",
    "year": -55,
    "dates": "约前99—约前55",
    "name": "卢克莱修",
    "alias": "罗马伊壁鸠鲁主义的诗人哲人",
    "era": "ancient",
    "period": "罗马共和国晚期",
    "summary": "以拉丁六步格长诗《物性论》系统阐述原子论哲学，以诗传科学，消除对死亡和神明的恐惧。",
    "life": "生平不可考。据传在清醒间隙完成《物性论》。",
    "context": "罗马共和国晚期的政治动荡中，伊壁鸠鲁哲学提供了精神安宁的良方。",
    "style": [
      "以诗论哲的独特文体",
      "将抽象哲学转化为可感意象"
    ],
    "ideas": [
      "万物皆由原子和虚空构成",
      "死亡与我们无关"
    ],
    "works": [
      {
        "title": "物性论",
        "year": "约前55",
        "intro": "六卷长诗从原子论出发解释宇宙、灵魂与文明起源。"
      }
    ],
    "links": [
      [
        "aristotle",
        "希腊哲学在罗马的传播"
      ]
    ],
    "subjects": [
      "philosophy"
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
    "id": "virgil",
    "subject": "literature",
    "region": "world",
    "year": -19,
    "dates": "前70—前19",
    "name": "维吉尔",
    "alias": "罗马民族的史诗诗人",
    "era": "ancient",
    "period": "罗马帝国初期",
    "summary": "以《埃涅阿斯纪》为罗马写出自己的《荷马史诗》，将帝国使命与个人命运编织为一部关于牺牲与建国的英雄传奇。",
    "life": "北意大利曼图亚人，受奥古斯都庇护。临死前要求烧毁未完成的《埃涅阿斯纪》，被奥古斯都阻止。",
    "context": "奥古斯都建立元首制后，罗马需要一部能与希腊抗衡的民族史诗。",
    "style": [
      "继承荷马的史诗传统",
      "以柔和悲悯替代荷马的刚烈",
      "将历史预言融入叙事"
    ],
    "ideas": [
      "帝国使命与个人牺牲",
      "虔敬（pietas）作为罗马美德"
    ],
    "works": [
      {
        "title": "埃涅阿斯纪",
        "year": "前19",
        "intro": "十二卷叙述特洛伊英雄埃涅阿斯漂泊至意大利建国的历程。"
      },
      {
        "title": "牧歌",
        "year": "前37",
        "intro": "十首以牧羊人对话写田园理想与政治现实。"
      }
    ],
    "links": [
      [
        "homer",
        "从希腊到罗马的史诗传承"
      ],
      [
        "dante",
        "维吉尔作为但丁地狱之旅的向导"
      ]
    ],
    "subjects": [
      "literature"
    ]
  },
  {
    "id": "ovid",
    "subject": "literature",
    "region": "world",
    "year": 8,
    "dates": "前43—17",
    "name": "奥维德",
    "alias": "变形记的讲述者",
    "era": "ancient",
    "period": "罗马帝国初期",
    "summary": "以《变形记》将希腊罗马神话编织为一部长篇叙事诗，以\"变形\"为线索探索欲望、权力与身份的边界。",
    "life": "罗马骑士家庭出身，因《爱的艺术》和某个不明原因触怒奥古斯都，被流放至黑海边的托米斯，客死异乡。",
    "context": "奥古斯都的道德重建运动与诗人的自由精神紧张冲突。",
    "style": [
      "轻快流畅的叙事节奏",
      "以变形为统一主题",
      "机智与优雅并存"
    ],
    "ideas": [
      "一切都在变化，没有什么是永恒的",
      "爱与权力"
    ],
    "works": [
      {
        "title": "变形记",
        "year": "8",
        "intro": "十五卷以连续变形故事重述希腊罗马神话。"
      },
      {
        "title": "爱的艺术",
        "year": "约1",
        "intro": "以轻佻口吻教授恋爱技巧，可能是流放的原因之一。"
      }
    ],
    "links": [
      [
        "homer",
        "神话叙事传统的延续"
      ]
    ],
    "subjects": [
      "literature"
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
    "id": "seneca",
    "subject": "philosophy",
    "region": "world",
    "year": 55,
    "dates": "约前4—65",
    "name": "塞涅卡",
    "alias": "斯多亚的帝王师",
    "era": "ancient",
    "period": "罗马帝国",
    "summary": "以书信和悲剧教导尼禄、影响后世，在权力中心践行\"按自然生活\"的斯多亚哲学，终被赐死。",
    "life": "西班牙科尔多瓦人，曾任尼禄的老师和顾问。卷入反尼禄阴谋，被令自尽，割腕后从容告别家人。",
    "context": "罗马帝制下的权力游戏中，斯多亚哲学既是被统治者也是统治者的心灵武器。",
    "style": [
      "书信体的哲学思考",
      "以死亡为日常练习"
    ],
    "ideas": [
      "按自然生活",
      "每一天都是完整的一生"
    ],
    "works": [
      {
        "title": "道德书简",
        "year": "约63—65",
        "intro": "一百二十四封写给友人的信讨论人生根本问题。"
      },
      {
        "title": "论生命之短暂",
        "year": "约49",
        "intro": "论证生命并不短暂，只是我们浪费了它。"
      }
    ],
    "links": [
      [
        "marcusaurelius",
        "斯多亚的罗马化"
      ],
      [
        "boethius",
        "临死的哲学书写"
      ]
    ],
    "subjects": [
      "philosophy",
      "politics"
    ]
  },
  {
    "id": "wangchong",
    "subject": "philosophy",
    "region": "china",
    "year": 80,
    "dates": "27—约97",
    "name": "王充",
    "alias": "汉代唯物主义思想家",
    "era": "ancient",
    "period": "东汉",
    "summary": "以《论衡》系统批判谶纬迷信与儒家神学化，用实证和逻辑追问一切未经检验的信念。",
    "life": "会稽上虞人，出身寒门，曾师从班彪。一生不仕，潜心著述。《论衡》八十五篇，以\"疾虚妄\"为宗旨。",
    "context": "东汉谶纬盛行，儒学被神学化，需要理性的批判声音。",
    "style": [
      "实证与逻辑辩证",
      "以日常经验检验命题"
    ],
    "ideas": [
      "疾虚妄",
      "天道自然无为"
    ],
    "works": [
      {
        "title": "论衡",
        "year": "约82",
        "intro": "八十五篇，以理性态度逐一辨析当时的迷信、传说与教条。"
      }
    ],
    "links": [
      [
        "xunzi",
        "从性恶到实证的精神传承"
      ]
    ],
    "subjects": [
      "philosophy",
      "history"
    ]
  },
  {
    "id": "xushen",
    "subject": "history",
    "region": "china",
    "year": 100,
    "dates": "约58—约147",
    "name": "许慎",
    "alias": "说文解字的作者",
    "period": "东汉",
    "summary": "以《说文解字》系统分析汉字结构。",
    "life": "汝南召陵人，师从贾逵。穷二十余年著成《说文》。",
    "context": "经学今古文之争使文字本义成为关键。",
    "style": [
      "系统化的部首分类"
    ],
    "ideas": [
      "文字是经义的入口"
    ],
    "works": [
      {
        "title": "说文解字",
        "year": "约100",
        "intro": "收录9353字，540部首。"
      }
    ],
    "links": [
      [
        "zhenxuan",
        "文字学与经学互证"
      ]
    ],
    "subjects": [
      "history",
      "philosophy"
    ],
    "era": "ancient"
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
    "id": "zhangheng",
    "subject": "history",
    "region": "china",
    "year": 130,
    "dates": "78—139",
    "name": "张衡",
    "alias": "科学家与赋体文学大师",
    "era": "ancient",
    "period": "东汉",
    "summary": "创制浑天仪、地动仪，同时以《二京赋》《归田赋》拓展汉赋的思想与艺术边界。",
    "life": "南阳西鄂人，历任太史令等职。精通天文、历法、机械，是东汉最具百科全书气质的人物。",
    "context": "东汉科学技术发达，赋体文学从宫廷颂赞转向个人抒情。",
    "style": [
      "科学与文学并重",
      "赋体从铺陈转向抒情"
    ],
    "ideas": [
      "宇宙论的科学探索",
      "个人抒情的赋体革新"
    ],
    "works": [
      {
        "title": "二京赋",
        "year": "约107",
        "intro": "模仿班固《两都赋》而超越之。"
      },
      {
        "title": "归田赋",
        "year": "约138",
        "intro": "开抒情小赋先河。"
      }
    ],
    "links": [
      [
        "simaqian",
        "实证精神的传承"
      ]
    ],
    "subjects": [
      "history",
      "literature"
    ]
  },
  {
    "id": "zhenxuan",
    "subject": "philosophy",
    "region": "china",
    "year": 170,
    "dates": "127—200",
    "name": "郑玄",
    "alias": "汉代经学的集大成者",
    "era": "ancient",
    "period": "东汉",
    "summary": "以一人之力遍注群经，融合今古文经学，使经学从学派争论走向统一的知识体系。",
    "life": "北海高密人，师从第五元先、马融。游学十余年后归乡讲学，弟子数千。",
    "context": "今古文经学争论二百年后，需要一位百科全书式的学者来做综合。",
    "style": [
      "遍注群经的宏大工程",
      "兼采今古文",
      "以礼学为核心"
    ],
    "ideas": [
      "今古文经学的统一",
      "礼是经学的中心"
    ],
    "works": [
      {
        "title": "三礼注",
        "year": "约180",
        "intro": "后世礼学权威注本。"
      },
      {
        "title": "毛诗笺",
        "year": "约185",
        "intro": "融合三家诗说。"
      }
    ],
    "links": [
      [
        "confucius",
        "经学传承的集大成者"
      ],
      [
        "zhuxi",
        "从汉学到宋学的千年演变"
      ]
    ],
    "subjects": [
      "philosophy",
      "history"
    ]
  },
  {
    "id": "marcusaurelius",
    "subject": "philosophy",
    "region": "world",
    "year": 175,
    "dates": "121—180",
    "name": "马可·奥勒留",
    "alias": "哲人皇帝",
    "era": "ancient",
    "period": "罗马帝国",
    "summary": "在帝国边境的军帐中写下《沉思录》，以斯多亚哲学面对权力、战争与死亡。",
    "life": "罗马帝国皇帝（161—180年在位），大半在位时间在边境与蛮族作战。",
    "context": "帝国边境危机四伏、瘟疫肆虐，皇帝需在哲学中寻找执政与生活的力量。",
    "style": [
      "日记体的自我对话",
      "在权力巅峰的谦卑与清醒"
    ],
    "ideas": [
      "宇宙理性与个人德性",
      "死亡作为自然的一部分"
    ],
    "works": [
      {
        "title": "沉思录",
        "year": "约170—180",
        "intro": "十二卷个人笔记，在征战间隙追问如何做一个好人。"
      }
    ],
    "links": [
      [
        "socrates",
        "斯多亚哲学的罗马化"
      ]
    ],
    "subjects": [
      "philosophy",
      "politics"
    ]
  },
  {
    "id": "nagarjuna",
    "subject": "philosophy",
    "region": "world",
    "year": 200,
    "dates": "约150—250",
    "name": "龙树",
    "alias": "中观学派创立者",
    "era": "ancient",
    "period": "古印度",
    "summary": "以空性理论和八不中道将佛教哲学推向思辨的最高峰。",
    "life": "南印度人传说曾入龙宫取经。",
    "context": "大乘佛教兴起需要系统的哲学辩护。",
    "style": [
      "严密的中观辩证法"
    ],
    "ideas": [
      "空性八不中道"
    ],
    "works": [
      {
        "title": "中论",
        "year": "约200",
        "intro": "以八不否定一切自性见。"
      }
    ],
    "links": [
      [
        "buddha",
        "佛教哲学的深化"
      ],
      [
        "zhuxi",
        "空与理跨文明比较"
      ]
    ],
    "subjects": [
      "philosophy"
    ]
  },
  {
    "id": "caocao",
    "subject": "literature",
    "region": "china",
    "year": 210,
    "dates": "155—220",
    "name": "曹操",
    "alias": "建安文学的开创者",
    "era": "ancient",
    "period": "东汉—三国",
    "summary": "以\"对酒当歌，人生几何\"的慷慨和\"白骨露于野，千里无鸡鸣\"的沉痛，将乱世悲慨提升为文学风格。",
    "life": "沛国谯人，挟天子以令诸侯，统一北方。其诗文被钟嵘评为\"古直，甚有悲凉之句\"。",
    "context": "汉末大乱，文学从宫廷颂赞转向个人抒情，质朴刚健成为新的审美理想。",
    "style": [
      "慷慨悲凉",
      "质朴无华而气魄雄大"
    ],
    "ideas": [
      "以四言诗复活古诗传统",
      "英雄的孤独与悲慨"
    ],
    "works": [
      {
        "title": "短歌行",
        "year": "约208",
        "intro": "对酒当歌人生几何，以宴会起兴而归结到求贤若渴的政治抱负。"
      },
      {
        "title": "蒿里行",
        "year": "约195",
        "intro": "白骨露于野千里无鸡鸣。"
      }
    ],
    "links": [
      [
        "caozhi",
        "建安文学父子三人"
      ],
      [
        "quyuan",
        "乱世中的诗人声音"
      ]
    ],
    "subjects": [
      "literature",
      "politics"
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
  },
  {
    "id": "guopu",
    "subject": "philosophy",
    "region": "china",
    "year": 254,
    "dates": "约250—约312",
    "name": "郭象",
    "alias": "玄学庄学注的集大成者",
    "era": "ancient",
    "period": "西晋",
    "summary": "以《庄子注》将庄子思想重新解释为\"独化论\"，为名教与自然的统一提供哲学基础。",
    "life": "河南人，以西晋名士而任至黄门侍郎。《庄子注》可能是在向秀注基础上完成的。",
    "context": "西晋短暂统一后，玄学需要处理\"如何在体制内保持精神自由\"的问题。",
    "style": [
      "以注为著的哲学创新",
      "融通名教与自然的思辨"
    ],
    "ideas": [
      "独化论",
      "名教即自然"
    ],
    "works": [
      {
        "title": "庄子注",
        "year": "约290",
        "intro": "系统注释庄子三十三篇，是后世读庄的基本路径。"
      }
    ],
    "links": [
      [
        "wangbi",
        "玄学的完成"
      ],
      [
        "zhuangzi",
        "庄子思想的体系化"
      ]
    ],
    "subjects": [
      "philosophy"
    ]
  },
  {
    "id": "jiakang",
    "subject": "literature",
    "region": "china",
    "year": 260,
    "dates": "223—262",
    "name": "嵇康",
    "alias": "竹林七贤的精神领袖",
    "era": "ancient",
    "period": "三国·魏",
    "summary": "以《与山巨源绝交书》的傲骨和《广陵散》的绝响，将魏晋名士的反抗精神推向极致。",
    "life": "谯郡铚人，娶曹操曾孙女。隐居竹林以锻铁为乐，因不肯依附司马氏被杀。临刑索琴弹《广陵散》。",
    "context": "魏晋易代之际，士人在政治高压下以隐逸和不合作作为精神抵抗。",
    "style": [
      "傲岸不屈的人格书写",
      "以散文论辩哲学"
    ],
    "ideas": [
      "越名教而任自然",
      "养生与自由"
    ],
    "works": [
      {
        "title": "与山巨源绝交书",
        "year": "约261",
        "intro": "以七不堪写尽对世俗权力的蔑视。"
      },
      {
        "title": "声无哀乐论",
        "year": "约260",
        "intro": "论证音乐的美是客观的，与人的情感无关。"
      }
    ],
    "links": [
      [
        "zhuangzi",
        "庄学在魏晋的践行"
      ],
      [
        "taoyuanming",
        "从嵇康到陶渊明的隐逸演变"
      ]
    ],
    "subjects": [
      "literature",
      "philosophy"
    ]
  },
  {
    "id": "ruanji",
    "subject": "literature",
    "region": "china",
    "year": 262,
    "dates": "210—263",
    "name": "阮籍",
    "alias": "穷途之哭的诗人",
    "era": "ancient",
    "period": "三国·魏",
    "summary": "以八十二首《咏怀诗》将政治恐怖中的恐惧、孤独与愤懑化为隐晦而深沉的抒情。",
    "life": "陈留人，竹林七贤之一。司马氏当政时被迫出仕，常驾车独行至无路处痛哭而返。",
    "context": "司马氏以名教为工具排除异己，士人在\"言与不言\"之间走钢丝。",
    "style": [
      "隐晦深微的象征手法",
      "以自然意象写政治恐惧"
    ],
    "ideas": [
      "忧生之嗟",
      "比兴与寄托的极致"
    ],
    "works": [
      {
        "title": "咏怀诗",
        "year": "约260",
        "intro": "八十二首五言诗以晦涩意象写尽乱世中的孤独与恐惧。"
      }
    ],
    "links": [
      [
        "quyuan",
        "政治抒情诗的继承与发展"
      ],
      [
        "jiakang",
        "竹林精神的另一面"
      ]
    ],
    "subjects": [
      "literature"
    ]
  },
  {
    "id": "luji",
    "subject": "literature",
    "region": "china",
    "year": 300,
    "dates": "261—303",
    "name": "陆机",
    "alias": "西晋文学理论的先驱",
    "era": "ancient",
    "period": "西晋",
    "summary": "以《文赋》开创以赋论文的先河，精细分析文学创作的心理过程与修辞技巧。",
    "life": "东吴丞相陆逊之孙。吴亡后闭门读书十年，后入洛阳仕晋。",
    "context": "西晋短暂统一带来南北文化的碰撞与融合。",
    "style": [
      "以赋论文的创新体裁",
      "对创作心理的精细分析"
    ],
    "ideas": [
      "诗缘情而绮靡",
      "创作的\"意不称物，文不逮意\"困境"
    ],
    "works": [
      {
        "title": "文赋",
        "year": "约300",
        "intro": "以赋的形式论述文学创作全过程。"
      }
    ],
    "links": [
      [
        "liuxie",
        "从文赋到文心雕龙"
      ]
    ],
    "subjects": [
      "literature",
      "philosophy"
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
    "id": "xielingyun",
    "subject": "literature",
    "region": "china",
    "year": 430,
    "dates": "385—433",
    "name": "谢灵运",
    "alias": "山水诗的开创者",
    "era": "ancient",
    "period": "东晋—刘宋",
    "summary": "将山水从诗歌背景提升为独立的审美对象，以精工对偶和敏锐感官捕捉自然变化。",
    "life": "陈郡谢氏后裔，袭爵康乐公。仕途屡遭排挤，纵情山水以自遣。",
    "context": "门阀政治下士人退隐山水，自然成为精神避难所和审美实践场。",
    "style": [
      "精工的对偶与用典",
      "敏锐的感官描写"
    ],
    "ideas": [
      "山水作为独立审美对象",
      "自然与心灵的相互映照"
    ],
    "works": [
      {
        "title": "登池上楼",
        "year": "约425",
        "intro": "以朴素语言写出最生动的自然。"
      },
      {
        "title": "石壁精舍还湖中作",
        "year": "约428",
        "intro": "以一日游历写山水与玄理的交融。"
      }
    ],
    "links": [
      [
        "taoyuanming",
        "山水田园的两种路径"
      ],
      [
        "wangwei",
        "山水诗从谢灵运到王维的演进"
      ]
    ],
    "subjects": [
      "literature"
    ]
  },
  {
    "id": "baoxhengzhao",
    "subject": "literature",
    "region": "china",
    "year": 440,
    "dates": "约414—466",
    "name": "鲍照",
    "alias": "七言诗先驱",
    "period": "南朝·宋",
    "summary": "以《拟行路难》将七言诗提升为文人创作。",
    "life": "东海人，出身寒微，死于兵乱。",
    "context": "门阀制度下寒士的出路极为有限。",
    "style": [
      "豪放悲凉"
    ],
    "ideas": [
      "寒士的悲歌"
    ],
    "works": [
      {
        "title": "拟行路难",
        "year": "约440",
        "intro": "十八首写尽人生失意。"
      }
    ],
    "links": [
      [
        "libai",
        "对李白的直接影响"
      ]
    ],
    "subjects": [
      "literature"
    ],
    "era": "ancient"
  },
  {
    "id": "liuxie",
    "subject": "literature",
    "region": "china",
    "year": 500,
    "dates": "约465—约532",
    "name": "刘勰",
    "alias": "中国文学批评的理论奠基者",
    "era": "ancient",
    "period": "南朝·梁",
    "summary": "以《文心雕龙》为中国文学建立第一部系统性理论著作，跨越文体、修辞、创作心理和文学史。",
    "life": "东莞莒人，依定林寺僧祐校定经藏。后入仕梁朝，晚年出家。",
    "context": "南朝文学创作极度繁荣，需要在实践积累之上建立批评与分类的框架。",
    "style": [
      "缜密的分类体系",
      "骈文式的理论写作"
    ],
    "ideas": [
      "文体有常而文术无方",
      "神思与风骨的创作论"
    ],
    "works": [
      {
        "title": "文心雕龙",
        "year": "约501",
        "intro": "五十篇系统论述文学的本体、文体、创作、批评与文学史。"
      }
    ],
    "links": [
      [
        "caozhi",
        "从建安文学到南朝批评的理论总结"
      ]
    ],
    "subjects": [
      "literature",
      "philosophy"
    ]
  },
  {
    "id": "zhongyao",
    "subject": "literature",
    "region": "china",
    "year": 503,
    "dates": "约469—约518",
    "name": "钟嵘",
    "alias": "诗歌品评之祖",
    "period": "南朝梁",
    "summary": "以《诗品》首创诗歌品第批评将百余诗人分列三品。",
    "life": "颍川长社人曾任记室等小官与刘勰同时代而互不知名。",
    "context": "五言诗在六朝已成主流需要系统评价框架。",
    "style": [
      "以品第论高下"
    ],
    "ideas": [
      "滋味说直寻与自然英旨"
    ],
    "works": [
      {
        "title": "诗品",
        "year": "约513",
        "intro": "将汉至梁百余诗人分上中下三品。"
      }
    ],
    "links": [
      [
        "caozhi",
        "品第最高的建安之杰"
      ],
      [
        "liuxie",
        "南朝批评的双璧"
      ]
    ],
    "subjects": [
      "literature"
    ],
    "era": "medieval"
  },
  {
    "id": "boethius",
    "subject": "philosophy",
    "region": "world",
    "year": 524,
    "dates": "约480—524",
    "name": "波爱修斯",
    "alias": "最后一位罗马人",
    "era": "medieval",
    "period": "罗马—哥特时期",
    "summary": "在等待死刑的牢狱中写出《哲学的慰藉》，成为连接古典哲学与中世纪思想的最重要桥梁。",
    "life": "罗马贵族，曾任东哥特王国执政官。以叛国罪入狱，在等待处决期间完成《哲学的慰藉》。",
    "context": "西罗马帝国已亡，古典知识面临断裂，需要有人做最后的传递。",
    "style": [
      "散文与诗歌交替",
      "以哲学女神为对话者的寓言结构"
    ],
    "ideas": [
      "命运之轮的不可靠",
      "真正的幸福是内在的德性"
    ],
    "works": [
      {
        "title": "哲学的慰藉",
        "year": "约524",
        "intro": "在狱中以对话体讨论命运、自由意志与永恒。"
      }
    ],
    "links": [
      [
        "aristotle",
        "古典哲学在中世纪的传递者"
      ],
      [
        "aquinas",
        "从波爱修斯到阿奎那"
      ]
    ],
    "subjects": [
      "philosophy",
      "literature"
    ]
  },
  {
    "id": "yuxin",
    "subject": "literature",
    "region": "china",
    "year": 570,
    "dates": "513—581",
    "name": "庾信",
    "alias": "由南入北的文学高峰",
    "period": "北周",
    "summary": "以骈赋最高成就融合南北文风。",
    "life": "南阳新野人，出使北朝被扣留。暮年思乡。",
    "context": "南北朝文化融合。",
    "style": [
      "骈散兼行"
    ],
    "ideas": [
      "暮年诗赋动江关"
    ],
    "works": [
      {
        "title": "哀江南赋",
        "year": "约578",
        "intro": "自传体骈赋写家国之痛。"
      }
    ],
    "links": [
      [
        "dufu",
        "对杜甫的深远影响"
      ]
    ],
    "subjects": [
      "literature"
    ],
    "era": "medieval"
  },
  {
    "id": "xuanzang",
    "subject": "philosophy",
    "region": "china",
    "year": 645,
    "dates": "602—664",
    "name": "玄奘",
    "alias": "法相唯识宗的创立者",
    "era": "medieval",
    "period": "唐初",
    "summary": "历时十七年往返印度，带回并翻译佛经六百余部，将印度瑜伽行派精密哲学体系完整引入中国。",
    "life": "洛州缑氏人，十三岁出家。贞观三年私出玉门关赴印度，在那烂陀寺师从戒贤。归国受太宗礼遇。",
    "context": "佛教传入中国六百年后，各宗派需要准确的经典基础来回应教义争论。",
    "style": [
      "精密的法相分析",
      "系统的翻译方法论"
    ],
    "ideas": [
      "万法唯识",
      "转识成智"
    ],
    "works": [
      {
        "title": "成唯识论",
        "year": "659",
        "intro": "糅译印度十大论师的唯识注释。"
      },
      {
        "title": "大唐西域记",
        "year": "646",
        "intro": "记录中亚南亚一百三十余国。"
      }
    ],
    "links": [
      [
        "zhuxi",
        "佛教精密哲学对理学的刺激"
      ]
    ],
    "subjects": [
      "philosophy",
      "history"
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
    "id": "huineng",
    "subject": "philosophy",
    "region": "china",
    "year": 676,
    "dates": "638—713",
    "name": "慧能",
    "alias": "禅宗六祖",
    "era": "medieval",
    "period": "唐初",
    "summary": "以\"本来无一物\"的顿悟法门，将禅宗从印度禅定之学转化为中国化的直指人心。",
    "life": "新州人，早年卖柴为生。闻《金刚经》有悟，赴黄梅参礼五祖，得衣钵后隐身猎人队中十五年。",
    "context": "禅宗经五代传承，需要天才来完成从\"渐修\"到\"顿悟\"的突破。",
    "style": [
      "直指人心、不立文字",
      "机锋棒喝的接引方式"
    ],
    "ideas": [
      "本来无一物",
      "自性自度"
    ],
    "works": [
      {
        "title": "六祖坛经",
        "year": "约700",
        "intro": "唯由中国僧人所称\"经\"的著作。"
      }
    ],
    "links": [
      [
        "zhuangzi",
        "禅宗与道家的精神血缘"
      ],
      [
        "wangyangming",
        "心学对禅宗的吸收"
      ]
    ],
    "subjects": [
      "philosophy"
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
    "id": "wangwei",
    "subject": "literature",
    "region": "china",
    "year": 740,
    "dates": "701—761",
    "name": "王维",
    "alias": "诗画禅一体的文人典范",
    "era": "medieval",
    "period": "唐·盛唐",
    "summary": "以\"诗中有画、画中有诗\"融通视觉与文字，在山水题材中注入禅宗的空寂与静观。",
    "life": "太原祁人，开元进士。安史之乱中被迫受伪职。晚年居辋川别业，半官半隐。",
    "context": "禅宗、山水画与诗歌在盛唐达到高峰，三种艺术开始在文人身上融合。",
    "style": [
      "诗画一体",
      "以禅入诗的空寂意境"
    ],
    "ideas": [
      "空山不见人",
      "诗中的视觉性与禅意"
    ],
    "works": [
      {
        "title": "辋川集",
        "year": "约750",
        "intro": "二十首五绝写辋川二十景。"
      },
      {
        "title": "山居秋暝",
        "year": "约758",
        "intro": "明月松间照，清泉石上流。"
      }
    ],
    "links": [
      [
        "taoyuanming",
        "田园隐逸的诗学传承"
      ],
      [
        "xielingyun",
        "山水诗从精工到空灵"
      ]
    ],
    "subjects": [
      "literature",
      "philosophy"
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
    "id": "yanzhenqing",
    "subject": "literature",
    "region": "china",
    "year": 758,
    "dates": "709—785",
    "name": "颜真卿",
    "alias": "唐代书法的丰碑",
    "era": "medieval",
    "period": "唐·中唐",
    "summary": "以《祭侄文稿》将个人悲愤与国家灾难融入笔墨，使书法成为情感与人格的直接表达。",
    "life": "京兆万年人，平原太守任上抗击安禄山叛乱，侄儿颜季明被害。晚年被叛将李希烈扣押并杀害。",
    "context": "安史之乱不仅改变了唐朝的政治，也深刻改变了艺术的表达方式。",
    "style": [
      "以情感驾驭笔墨",
      "将书法从法度推向人格"
    ],
    "ideas": [
      "书法作为人格的外化",
      "悲愤出杰作"
    ],
    "works": [
      {
        "title": "祭侄文稿",
        "year": "758",
        "intro": "被尊为天下第二行书，在极度悲痛中书写的草稿。"
      },
      {
        "title": "颜勤礼碑",
        "year": "779",
        "intro": "晚年楷书的代表作，法度森严而气魄雄浑。"
      }
    ],
    "links": [
      [
        "wangwei",
        "诗书画的文人传统"
      ],
      [
        "sushi",
        "从颜真卿到苏轼的书法演进"
      ]
    ],
    "subjects": [
      "literature"
    ]
  },
  {
    "id": "shankara",
    "subject": "philosophy",
    "region": "world",
    "year": 800,
    "dates": "约788—820",
    "name": "商羯罗",
    "alias": "吠檀多哲学集大成者",
    "era": "medieval",
    "period": "古印度",
    "summary": "以不二论将印度哲学系统化论证梵我合一在短短三十二年生命中改变了印度思想史。",
    "life": "卡拉迪人以惊人的早慧论遍印度宣称世界是幻。",
    "context": "印度宗教哲学内部佛教与印度教的竞争。",
    "style": [
      "严密的不二论论证"
    ],
    "ideas": [
      "梵我合一世界是幻"
    ],
    "works": [
      {
        "title": "梵经注",
        "year": "约800",
        "intro": "对吠檀多根本经典的系统注释。"
      }
    ],
    "links": [
      [
        "nagarjuna",
        "印度哲学两座高峰"
      ]
    ],
    "subjects": [
      "philosophy"
    ]
  },
  {
    "id": "hanyu",
    "subject": "literature",
    "region": "china",
    "year": 810,
    "dates": "768—824",
    "name": "韩愈",
    "alias": "古文运动的领袖",
    "era": "medieval",
    "period": "唐·中唐",
    "summary": "以\"文以载道\"为旗帜，扭转六朝以来的骈俪文风，恢复先秦两汉的古文传统。",
    "life": "河阳人，三岁丧父。因谏迎佛骨被贬潮州。",
    "context": "安史之乱后唐朝由盛转衰，士人呼吁在文学和思想上同时进行变革。",
    "style": [
      "气势磅礴的议论",
      "以单行散句破骈俪"
    ],
    "ideas": [
      "文以载道",
      "不平则鸣"
    ],
    "works": [
      {
        "title": "师说",
        "year": "约802",
        "intro": "弟子不必不如师。"
      },
      {
        "title": "进学解",
        "year": "约813",
        "intro": "自嘲中阐述为学之道。"
      }
    ],
    "links": [
      [
        "liuxie",
        "从理论探索到创作实践"
      ]
    ],
    "subjects": [
      "literature",
      "philosophy"
    ]
  },
  {
    "id": "liuzongyuan",
    "subject": "literature",
    "region": "china",
    "year": 810,
    "dates": "773—819",
    "name": "柳宗元",
    "alias": "山水散文的革新者",
    "era": "medieval",
    "period": "唐·中唐",
    "summary": "与韩愈共同领导古文运动，以《永州八记》开创山水散文的全新境界，在自然中寄寓贬谪者的深沉思考。",
    "life": "河东人，参与永贞革新失败后被贬永州十年，再贬柳州。客死柳州时年仅四十七。",
    "context": "中唐政治斗争激烈，贬谪文学成为重要的个人表达方式。",
    "style": [
      "精工凝练的山水散文",
      "以景寓情的含蓄表达"
    ],
    "ideas": [
      "文以明道",
      "山水作为精神寄托"
    ],
    "works": [
      {
        "title": "永州八记",
        "year": "约809",
        "intro": "以八篇游记开创中国山水散文的典范。"
      },
      {
        "title": "捕蛇者说",
        "year": "约810",
        "intro": "以捕蛇者的遭遇批判苛政猛于虎。"
      }
    ],
    "links": [
      [
        "hanyu",
        "古文运动的双星"
      ],
      [
        "xielingyun",
        "山水文学从诗到文的扩展"
      ]
    ],
    "subjects": [
      "literature",
      "philosophy"
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
    "id": "dumu",
    "subject": "literature",
    "region": "china",
    "year": 840,
    "dates": "803—852",
    "name": "杜牧",
    "alias": "晚唐咏史的绝唱",
    "era": "medieval",
    "period": "唐·晚唐",
    "summary": "以七绝咏史独步千古，将历史的苍凉与个人的感伤熔铸为凝练而深沉的画面。",
    "life": "京兆万年人，宰相杜佑之孙。二十六岁进士，历任幕僚和地方官，以济世之才自许而不得志。",
    "context": "晚唐藩镇割据、宦官专权，士人普遍感到治世不再的悲观。",
    "style": [
      "以七绝写咏史的凝练功力",
      "历史意象与个人感怀的交融"
    ],
    "ideas": [
      "隔代的历史回声",
      "豪华落尽见真淳"
    ],
    "works": [
      {
        "title": "阿房宫赋",
        "year": "约825",
        "intro": "以秦之兴亡警示当代，是骈赋的绝唱。"
      },
      {
        "title": "泊秦淮",
        "year": "约840",
        "intro": "商女不知亡国恨，隔江犹唱后庭花。"
      }
    ],
    "links": [
      [
        "liushangyin",
        "晚唐文学的双峰"
      ]
    ],
    "subjects": [
      "literature",
      "history"
    ]
  },
  {
    "id": "liushangyin",
    "subject": "literature",
    "region": "china",
    "year": 845,
    "dates": "813—858",
    "name": "李商隐",
    "alias": "晚唐诗歌的迷宫",
    "era": "medieval",
    "period": "唐·晚唐",
    "summary": "以密集的典故、晦涩的意象和深沉的情感，创造出中国诗歌中最为迷离幽微的抒情世界。",
    "life": "怀州河内人，卷入牛李党争，一生仕途坎坷。以《无题》系列最为著名。",
    "context": "晚唐政局败坏、党争激烈，抒情诗成为个人在动荡中表达隐晦情感的唯一出口。",
    "style": [
      "密集的典故与隐喻",
      "幽微深曲的情感表达"
    ],
    "ideas": [
      "此情可待成追忆",
      "诗中意象的多重可解性"
    ],
    "works": [
      {
        "title": "无题·相见时难",
        "year": "约840",
        "intro": "春蚕到死丝方尽。"
      },
      {
        "title": "锦瑟",
        "year": "约850",
        "intro": "在典故迷宫中追问人生与情感的终极意义。"
      }
    ],
    "links": [
      [
        "dufu",
        "从诗史到心史的表达转型"
      ]
    ],
    "subjects": [
      "literature"
    ]
  },
  {
    "id": "avicenna",
    "subject": "philosophy",
    "region": "world",
    "year": 1020,
    "dates": "980—1037",
    "name": "伊本·西那",
    "alias": "伊斯兰哲学的巅峰",
    "era": "medieval",
    "period": "波斯·萨曼—伽色尼时期",
    "summary": "以《治疗论》和《医典》在哲学与医学同时达到当时最高成就，架起亚里士多德与伊斯兰神学间的桥梁。",
    "life": "生于布哈拉，幼年博览群书。一生在动荡宫廷中辗转，同时行医任教写作。",
    "context": "伊斯兰黄金时代，阿拉伯世界继承并推进了希腊哲学与科学。",
    "style": [
      "百科全书式的知识体系",
      "对亚里士多德的创造性诠释"
    ],
    "ideas": [
      "存在的本质与可能性",
      "灵魂的非物质性"
    ],
    "works": [
      {
        "title": "治疗论",
        "year": "约1020",
        "intro": "十八卷百科全书，涵盖逻辑、自然学、数学、形上学。"
      },
      {
        "title": "医典",
        "year": "约1025",
        "intro": "五卷医学百科全书，在欧洲用作标准教材至17世纪。"
      }
    ],
    "links": [
      [
        "aristotle",
        "希腊哲学在伊斯兰世界的传承"
      ],
      [
        "aquinas",
        "经由阿维森纳进入经院哲学"
      ]
    ],
    "subjects": [
      "philosophy",
      "history"
    ]
  },
  {
    "id": "ouyangxiu",
    "subject": "literature",
    "region": "china",
    "year": 1050,
    "dates": "1007—1072",
    "name": "欧阳修",
    "alias": "北宋文坛领袖",
    "era": "medieval",
    "period": "北宋",
    "summary": "继承韩愈古文运动，以平易流畅文风革新北宋文学，同时是史学家和政治家。",
    "life": "吉州永丰人，四岁丧父，母以荻杆画地教字。天圣进士，官至参知政事。",
    "context": "北宋文治达到高峰，科举以文章取士，文坛需要新的领袖。",
    "style": [
      "平易自然、流畅婉转",
      "以散文化笔法写词"
    ],
    "ideas": [
      "文章太守",
      "穷而后工的创作论"
    ],
    "works": [
      {
        "title": "醉翁亭记",
        "year": "1046",
        "intro": "醉翁之意不在酒，在乎山水之间也。"
      },
      {
        "title": "新五代史",
        "year": "约1053",
        "intro": "以春秋笔法重写五代历史。"
      }
    ],
    "links": [
      [
        "hanyu",
        "古文运动的北宋接力"
      ],
      [
        "sushi",
        "文学传承与师生情谊"
      ]
    ],
    "subjects": [
      "literature",
      "history"
    ]
  },
  {
    "id": "zhouduyi",
    "subject": "philosophy",
    "region": "china",
    "year": 1060,
    "dates": "1017—1073",
    "name": "周敦颐",
    "alias": "理学的开山祖师",
    "era": "medieval",
    "period": "北宋",
    "summary": "以《太极图说》和《通书》确立理学宇宙论与伦理学基础，将儒家伦理安放在太极—阴阳—五行的形上学框架中。",
    "life": "道州营道人，历任州县小官。程颢程颐兄弟曾向他问学。",
    "context": "佛教和道教的宇宙论对儒学构成挑战，儒学需要自己的形上学来回应。",
    "style": [
      "以图说理的创新形式",
      "从天道到人道的贯通"
    ],
    "ideas": [
      "无极而太极",
      "主静立人极"
    ],
    "works": [
      {
        "title": "太极图说",
        "year": "约1060",
        "intro": "以249字勾勒从无极到万物的宇宙生成论。"
      },
      {
        "title": "爱莲说",
        "year": "约1063",
        "intro": "出淤泥而不染。"
      }
    ],
    "links": [
      [
        "zhuxi",
        "理学谱系的起点"
      ]
    ],
    "subjects": [
      "philosophy"
    ]
  },
  {
    "id": "zhangzai",
    "subject": "philosophy",
    "region": "china",
    "year": 1070,
    "dates": "1020—1077",
    "name": "张载",
    "alias": "气一元论的创立者",
    "era": "medieval",
    "period": "北宋",
    "summary": "以\"太虚即气\"建立气本论宇宙观，\"为天地立心\"的横渠四句为中国知识分子树立最高理想。",
    "life": "凤翔郿县人，少喜谈兵，后受范仲淹点拨转向治学。讲学关中，创立关学。",
    "context": "北宋理学各派竞起，从不同路径回应佛道挑战。",
    "style": [
      "以气为本的宇宙论",
      "民胞物与的伦理情怀"
    ],
    "ideas": [
      "太虚即气",
      "天地之性与气质之性"
    ],
    "works": [
      {
        "title": "正蒙",
        "year": "约1076",
        "intro": "系统阐述气本论的宇宙观与人性论。"
      },
      {
        "title": "西铭",
        "year": "约1070",
        "intro": "民吾同胞，物吾与也。"
      }
    ],
    "links": [
      [
        "zhuxi",
        "气论对理学的影响"
      ],
      [
        "wangfuzhi",
        "气论的明清回响"
      ]
    ],
    "subjects": [
      "philosophy"
    ]
  },
  {
    "id": "wanganshi",
    "subject": "politics",
    "region": "china",
    "year": 1070,
    "dates": "1021—1086",
    "name": "王安石",
    "alias": "变法的悲剧英雄",
    "era": "medieval",
    "period": "北宋",
    "summary": "以青苗、免役等新法力图富国强兵，其失败成为中国古代改革运动的经典案例。",
    "life": "临川人，庆历进士。神宗时两度拜相推行变法，因保守派反对和效果不佳被罢。其散文被列为唐宋八大家。",
    "context": "宋积贫积弱，冗官冗兵耗费巨资，改革呼声与保守势力激烈碰撞。",
    "style": [
      "以经学论证改革",
      "散文的政论风格"
    ],
    "ideas": [
      "天命不足畏，祖宗不足法",
      "理财乃是治国之本"
    ],
    "works": [
      {
        "title": "上仁宗皇帝言事书",
        "year": "1058",
        "intro": "著名的万言书系统论述变法纲领。"
      },
      {
        "title": "临川集",
        "year": "约1080",
        "intro": "诗文合集，是唐宋八大家的重要代表。"
      }
    ],
    "links": [
      [
        "shangyang",
        "变法者的跨时代对照"
      ],
      [
        "sushi",
        "政敌与文友"
      ]
    ],
    "subjects": [
      "politics",
      "literature",
      "philosophy"
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
    "id": "chengyi",
    "subject": "philosophy",
    "region": "china",
    "year": 1100,
    "dates": "1033—1107",
    "name": "程颐",
    "alias": "理学的完成者",
    "era": "medieval",
    "period": "北宋",
    "summary": "与兄程颢并称二程，以\"性即理\"体系化理学，提出\"涵养须用敬，进学则在致知\"的为学纲领。",
    "life": "洛阳人，历任教职。因反对王安石新法被贬，晚年党争中被列为元祐党人。",
    "context": "二程将周敦颐和张载的思想进一步体系化，理学作为知识体系走向成熟。",
    "style": [
      "精密的理学体系建构",
      "以敬济学的方法论"
    ],
    "ideas": [
      "性即理",
      "涵养用敬、进学致知"
    ],
    "works": [
      {
        "title": "程氏易传",
        "year": "约1100",
        "intro": "以义理解易，是理学易学的代表作。"
      },
      {
        "title": "二程遗书",
        "year": "约12世纪",
        "intro": "与程颢的语录合集。"
      }
    ],
    "links": [
      [
        "zhangzai",
        "理学从气本论到理本论"
      ],
      [
        "zhuxi",
        "二程到朱熹的传承"
      ]
    ],
    "subjects": [
      "philosophy"
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
    "id": "luxiangshan",
    "subject": "philosophy",
    "region": "china",
    "year": 1180,
    "dates": "1139—1193",
    "name": "陆九渊",
    "alias": "心学的先驱",
    "era": "medieval",
    "period": "南宋",
    "summary": "以\"宇宙便是吾心\"提出心即理命题，与朱熹展开鹅湖之辩，开创心学传统。",
    "life": "抚州金溪人。读书至\"宇宙\"二字，忽悟\"宇宙内事乃己分内事\"。",
    "context": "理学在朱熹手中体系化后，内部出现对\"格物\"路径的质疑。",
    "style": [
      "直截简易的讲学风格",
      "以心立论反对支离"
    ],
    "ideas": [
      "心即理",
      "宇宙便是吾心"
    ],
    "works": [
      {
        "title": "象山先生全集",
        "year": "约1190",
        "intro": "心学的奠基文献。"
      }
    ],
    "links": [
      [
        "zhuxi",
        "朱陆之辩"
      ],
      [
        "wangyangming",
        "心学的发展"
      ]
    ],
    "subjects": [
      "philosophy"
    ]
  },
  {
    "id": "averroes",
    "subject": "philosophy",
    "region": "world",
    "year": 1180,
    "dates": "1126—1198",
    "name": "伊本·鲁世德",
    "alias": "亚里士多德的最大注释者",
    "era": "medieval",
    "period": "安达卢斯·穆瓦希德时期",
    "summary": "以最忠实原文的态度为亚里士多德著作写逐句注释，拉丁译本深刻塑造了中世纪欧洲的亚里士多德接受。",
    "life": "生于科尔多瓦，曾任法官和宫廷御医。晚年被控异端遭流放。拉丁译本在欧洲产生比伊斯兰世界更大的影响。",
    "context": "伊斯兰哲学内部正统派与理性派冲突激化，哲学与启示关系成为核心问题。",
    "style": [
      "逐句注释的方法论",
      "在宗教压力下捍卫哲学"
    ],
    "ideas": [
      "理性与启示可以共存"
    ],
    "works": [
      {
        "title": "《形而上学》大注释",
        "year": "约1180",
        "intro": "被托马斯·阿奎那频繁引用。"
      },
      {
        "title": "《范畴论》中注释",
        "year": "约1175",
        "intro": "在尊重原文基础上提出自己的判断。"
      }
    ],
    "links": [
      [
        "aristotle",
        "对亚里士多德最忠实的解释者"
      ],
      [
        "aquinas",
        "阿威罗伊的拉丁影响"
      ]
    ],
    "subjects": [
      "philosophy"
    ]
  },
  {
    "id": "xinqiji",
    "subject": "literature",
    "region": "china",
    "year": 1190,
    "dates": "1140—1207",
    "name": "辛弃疾",
    "alias": "豪放词的高峰",
    "era": "medieval",
    "period": "南宋",
    "summary": "以将帅之才写词，将北伐壮志、英雄失路与山水豪情熔铸为南宋爱国词的最强音。",
    "life": "济南人，生于金国占领区。二十一岁率两千人起义南归。一生志在北伐而不得。",
    "context": "南宋偏安，收复中原成为一代士人的集体创伤和创作动力。",
    "style": [
      "以文为词的豪放笔法",
      "使典用事如自己出"
    ],
    "ideas": [
      "词中之龙",
      "英雄失路的悲壮美学"
    ],
    "works": [
      {
        "title": "永遇乐·京口北固亭怀古",
        "year": "1205",
        "intro": "廉颇老矣，尚能饭否。"
      },
      {
        "title": "破阵子",
        "year": "约1188",
        "intro": "醉里挑灯看剑，梦回吹角连营。"
      }
    ],
    "links": [
      [
        "sushi",
        "豪放词从苏轼到辛弃疾"
      ],
      [
        "dufu",
        "家国情怀的诗学传承"
      ]
    ],
    "subjects": [
      "literature"
    ]
  },
  {
    "id": "luyou",
    "subject": "literature",
    "region": "china",
    "year": 1195,
    "dates": "1125—1210",
    "name": "陆游",
    "alias": "南宋诗坛的集大成者",
    "era": "medieval",
    "period": "南宋",
    "summary": "一生创作近万首诗，以\"王师北定中原日\"的爱国热情和\"小楼一夜听春雨\"的日常温情展现战士与诗人的双重身份。",
    "life": "越州山阴人，科举受秦桧排挤。投身军旅，在川陕前线写下大量边塞诗。晚年仍不忘恢复中原。",
    "context": "南宋与金长期对峙，爱国成为诗歌核心主题。",
    "style": [
      "诗歌数量与质量并重",
      "豪壮与闲适并行"
    ],
    "ideas": [
      "诗外功夫",
      "江山之助与悲愤出诗人"
    ],
    "works": [
      {
        "title": "示儿",
        "year": "1210",
        "intro": "王师北定中原日，家祭无忘告乃翁。"
      },
      {
        "title": "游山西村",
        "year": "约1167",
        "intro": "山重水复疑无路，柳暗花明又一村。"
      }
    ],
    "links": [
      [
        "dufu",
        "从诗史到爱国诗人的传承"
      ]
    ],
    "subjects": [
      "literature"
    ]
  },
  {
    "id": "rumi",
    "subject": "literature",
    "region": "world",
    "year": 1260,
    "dates": "1207—1273",
    "name": "鲁米",
    "alias": "旋转的诗人",
    "era": "medieval",
    "period": "波斯",
    "summary": "以玛斯纳维将苏菲神秘主义的爱提升为世界文学中最热烈的灵性诗歌。",
    "life": "波斯诗人与游方僧沙姆士的相遇彻底改变了他的人生此后诗歌如泉水喷涌。",
    "context": "伊斯兰神秘主义在波斯达到文学表达的顶峰。",
    "style": [
      "以爱为宇宙动力"
    ],
    "ideas": [
      "在爱中消融自我"
    ],
    "works": [
      {
        "title": "玛斯纳维",
        "year": "约1260",
        "intro": "六卷波斯文诗歌被誉为波斯语古兰经。"
      }
    ],
    "links": [
      [
        "ibnkhaldun",
        "伊斯兰文明的精神与社会科学双峰"
      ]
    ],
    "subjects": [
      "literature",
      "philosophy"
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
    "id": "wentiantianxiang",
    "subject": "politics",
    "region": "china",
    "year": 1278,
    "dates": "1236—1283",
    "name": "文天祥",
    "alias": "宋末殉国者",
    "period": "南宋末",
    "summary": "人生自古谁无死，留取丹心照汗青。",
    "life": "吉州庐陵人，状元。兵败被俘不降就义。",
    "context": "南宋灭亡需要新的精神符号。",
    "style": [
      "以死明志"
    ],
    "ideas": [
      "正气"
    ],
    "works": [
      {
        "title": "正气歌",
        "year": "1281",
        "intro": "在元大都狱中写成。"
      }
    ],
    "links": [
      [
        "quyuan",
        "殉国者的精神谱系"
      ]
    ],
    "subjects": [
      "politics",
      "literature"
    ],
    "era": "medieval"
  },
  {
    "id": "wentiantian",
    "subject": "politics",
    "region": "china",
    "year": 1278,
    "dates": "1236—1283",
    "name": "文天祥",
    "alias": "宋末殉国者",
    "period": "南宋末",
    "summary": "人生自古谁无死留取丹心照汗青。",
    "life": "吉州庐陵人状元兵败被俘不降就义。",
    "context": "南宋灭亡需要新精神符号。",
    "style": [
      "以死明志"
    ],
    "ideas": [
      "正气"
    ],
    "works": [
      {
        "title": "正气歌",
        "year": "1281",
        "intro": "在元大都狱中以诗歌总结历代忠义之士精神谱系。"
      }
    ],
    "links": [
      [
        "quyuan",
        "殉国者精神谱系"
      ]
    ],
    "subjects": [
      "politics",
      "literature"
    ],
    "era": "medieval"
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
    "id": "mayuan",
    "subject": "literature",
    "region": "china",
    "year": 1290,
    "dates": "约1250—约1323",
    "name": "马致远",
    "alias": "元曲四大家之首",
    "era": "medieval",
    "period": "元",
    "summary": "以《汉宫秋》和《天净沙·秋思》将个人漂泊与历史沧桑熔为一代人的精神写照。",
    "life": "大都人，曾任江浙行省务官。晚年隐居杭州。",
    "context": "元代科举中断，文人转向散曲杂剧创作，个人漂泊感成为时代主题。",
    "style": [
      "悲凉深沉的风格",
      "以景写情的简练笔法"
    ],
    "ideas": [
      "断肠人在天涯",
      "历史兴亡的个人感受"
    ],
    "works": [
      {
        "title": "汉宫秋",
        "year": "约1290",
        "intro": "以王昭君故事写民族屈辱与个人命运的悲剧。"
      },
      {
        "title": "天净沙·秋思",
        "year": "约1300",
        "intro": "枯藤老树昏鸦，古道西风瘦马。"
      }
    ],
    "links": [
      [
        "guanhanqing",
        "元曲的双星"
      ]
    ],
    "subjects": [
      "literature"
    ]
  },
  {
    "id": "wangshifu",
    "subject": "literature",
    "region": "china",
    "year": 1300,
    "dates": "约1250—约1307",
    "name": "王实甫",
    "alias": "西厢记的作者",
    "era": "medieval",
    "period": "元",
    "summary": "以《西厢记》将青年男女的自由恋爱写成中国戏曲最华美的爱情诗篇。",
    "life": "大都人，生平不详。与关汉卿、马致远、白朴合称元曲四大家。",
    "context": "元代文人失去科举出路，将全部才华投入戏曲创作。",
    "style": [
      "华美典雅的曲词",
      "以爱情写个人自由"
    ],
    "ideas": [
      "愿天下有情人终成眷属"
    ],
    "works": [
      {
        "title": "西厢记",
        "year": "约1300",
        "intro": "五本二十一折的杂剧，写张生与崔莺莺的爱情故事。"
      }
    ],
    "links": [
      [
        "guanhanqing",
        "元杂剧的双璧"
      ],
      [
        "tangxianzu",
        "从西厢到牡丹亭的传承"
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
    "id": "alighieri",
    "subject": "literature",
    "region": "world",
    "year": 1321,
    "dates": "1265—1321",
    "name": "但丁·阿利吉耶里",
    "alias": "中世纪文学的最高峰",
    "era": "medieval",
    "period": "意大利",
    "summary": "以神曲地狱炼狱天堂的灵魂旅程整合神学政治与个人爱情。",
    "life": "生于佛罗伦萨活跃于城邦政治后因党派斗争被终身流放。",
    "context": "教皇与皇帝之争城邦共和制与流放经验。",
    "style": [
      "三韵体与致密结构",
      "象征与字面意义的双层叙事"
    ],
    "ideas": [
      "爱与智慧的提升之路"
    ],
    "works": [
      {
        "title": "神曲",
        "year": "约1321",
        "intro": "从黑暗森林出发穿越地狱炼狱与天堂的旅程。"
      }
    ],
    "links": [
      [
        "homer",
        "从英雄冒险到灵魂之旅"
      ]
    ],
    "subjects": [
      "literature",
      "philosophy"
    ]
  },
  {
    "id": "petrarch",
    "subject": "literature",
    "region": "world",
    "year": 1341,
    "dates": "1304—1374",
    "name": "弗朗切斯科·彼特拉克",
    "alias": "人文主义之父",
    "era": "medieval",
    "period": "意大利",
    "summary": "以攀登文图峰和致劳拉十四行诗宣告中世纪结束和文艺复兴个人意识的觉醒。",
    "life": "阿雷佐人阿维尼翁教廷成长终生以拉丁文写作却以意大利方言诗歌闻名。",
    "context": "从经院学术到古典文本的人文主义转向。",
    "style": [
      "以个人经验为文学中心"
    ],
    "ideas": [
      "重新发现古典"
    ],
    "works": [
      {
        "title": "歌集",
        "year": "约1341",
        "intro": "366首意大利语诗歌写对劳拉的爱与自身的灵魂探索。"
      }
    ],
    "links": [
      [
        "dante",
        "从神曲到人曲"
      ],
      [
        "boccaccio",
        "文艺复兴文学三杰"
      ]
    ],
    "subjects": [
      "literature",
      "philosophy"
    ]
  },
  {
    "id": "boccaccio",
    "subject": "literature",
    "region": "world",
    "year": 1353,
    "dates": "1313—1375",
    "name": "乔万尼·薄伽丘",
    "alias": "十日谈作者",
    "era": "medieval",
    "period": "意大利",
    "summary": "以十日谈将一百个故事变成对中世纪社会和教会的全景式讽刺与赞美。",
    "life": "佛罗伦萨商人子弟彼特拉克的好友。",
    "context": "黑死病后的意大利社会需要新的叙事。",
    "style": [
      "框架叙事的文学创新"
    ],
    "ideas": [
      "故事作为对抗死亡的方式"
    ],
    "works": [
      {
        "title": "十日谈",
        "year": "1353",
        "intro": "以逃避瘟疫的十位青年讲述一百个故事。"
      }
    ],
    "links": [
      [
        "dante",
        "从神曲到人曲"
      ],
      [
        "chaucer",
        "中世纪故事传统的英意双峰"
      ]
    ],
    "subjects": [
      "literature"
    ]
  },
  {
    "id": "hafiz",
    "subject": "literature",
    "region": "world",
    "year": 1370,
    "dates": "约1315—1390",
    "name": "哈菲兹",
    "alias": "波斯抒情诗之王",
    "era": "medieval",
    "period": "波斯",
    "summary": "以加扎尔抒情诗将美酒爱情与对伪善者的讽刺编织为最精致的波斯诗歌。",
    "life": "设拉子人以背诵全部古兰经得名哈菲兹一生几乎未离开家乡。",
    "context": "蒙古入侵后波斯文学进入抒情诗的黄金时代。",
    "style": [
      "精致的加扎尔体"
    ],
    "ideas": [
      "美酒爱人与对伪善的蔑视"
    ],
    "works": [
      {
        "title": "哈菲兹诗集",
        "year": "约1370",
        "intro": "约500首加扎尔体抒情诗至今仍是伊朗家庭必备。"
      }
    ],
    "links": [
      [
        "rumi",
        "波斯文学双峰"
      ]
    ],
    "subjects": [
      "literature"
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
    "id": "chaucer",
    "subject": "literature",
    "region": "world",
    "year": 1400,
    "dates": "约1343—1400",
    "name": "杰弗里·乔叟",
    "alias": "英语诗歌之父",
    "era": "medieval",
    "period": "英国",
    "summary": "以坎特伯雷故事集将中古英语提升为文学语言其朝圣者群像堪比全社会的缩影。",
    "life": "伦敦人曾任关税官外交官是第一个葬于西敏寺诗人角的作家。",
    "context": "英语正在取代法语和拉丁语成为英格兰的文学语言。",
    "style": [
      "框架叙事与人物群像"
    ],
    "ideas": [
      "让英语歌唱"
    ],
    "works": [
      {
        "title": "坎特伯雷故事集",
        "year": "约1400",
        "intro": "以朝圣者讲故事的形式写出中世纪英格兰社会的全景。"
      }
    ],
    "links": [
      [
        "boccaccio",
        "故事传统的英意双峰"
      ]
    ],
    "subjects": [
      "literature"
    ]
  },
  {
    "id": "vinci",
    "subject": "history",
    "region": "world",
    "year": 1503,
    "dates": "1452—1519",
    "name": "列奥纳多·达·芬奇",
    "alias": "文艺复兴全才",
    "era": "early-modern",
    "period": "意大利",
    "summary": "以蒙娜丽莎和无数科学手稿将艺术与科学统一于一个人身上。",
    "life": "意大利佛罗伦萨人绘画雕塑建筑科学无一不精。",
    "context": "文艺复兴将人视为宇宙中心。",
    "style": [
      "艺术与科学统一"
    ],
    "ideas": [
      "好奇心是知识之母"
    ],
    "works": [
      {
        "title": "蒙娜丽莎",
        "year": "1503",
        "intro": "以神秘微笑成为人类艺术最著名作品。"
      }
    ],
    "links": [
      [
        "michelangelo",
        "文艺复兴双峰"
      ]
    ],
    "subjects": [
      "history"
    ]
  },
  {
    "id": "raphael",
    "subject": "history",
    "region": "world",
    "year": 1511,
    "dates": "1483—1520",
    "name": "拉斐尔",
    "alias": "古典美化身",
    "era": "early-modern",
    "period": "意大利",
    "summary": "以雅典学院将古代哲人聚集于同一空间代表文艺复兴调和古典与基督教理想。",
    "life": "意大利画家以优雅和谐著称37岁早逝。",
    "context": "文艺复兴盛期古典美的典范。",
    "style": [
      "优雅和谐的古典美"
    ],
    "ideas": [
      "以画笔调和古今"
    ],
    "works": [
      {
        "title": "雅典学院",
        "year": "1511",
        "intro": "以柏拉图和亚里士多德为中心将古代哲人齐聚一堂。"
      }
    ],
    "links": [
      [
        "vinci",
        "文艺复兴三杰"
      ]
    ],
    "subjects": [
      "history"
    ]
  },
  {
    "id": "michelangelo",
    "subject": "history",
    "region": "world",
    "year": 1512,
    "dates": "1475—1564",
    "name": "米开朗基罗",
    "alias": "雕塑绘画建筑的巨人",
    "era": "early-modern",
    "period": "意大利",
    "summary": "以大卫像和西斯廷天顶画将人体之美与神圣精神推向极致。",
    "life": "佛罗伦萨人一生与大理石和颜料为对手。",
    "context": "文艺复兴盛期教皇委托最宏大艺术工程。",
    "style": [
      "将人体雕刻为神性"
    ],
    "ideas": [
      "大理石中沉睡的形象等待解放"
    ],
    "works": [
      {
        "title": "大卫像",
        "year": "1504",
        "intro": "以刚健的人体美表现文艺复兴对人的信心。"
      },
      {
        "title": "西斯廷天顶画",
        "year": "1512",
        "intro": "以创世纪等九幅壁画重写人类起源。"
      }
    ],
    "links": [
      [
        "vinci",
        "文艺复兴双峰"
      ]
    ],
    "subjects": [
      "history"
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
    "id": "rabelais",
    "subject": "literature",
    "region": "world",
    "year": 1534,
    "dates": "约1494—1553",
    "name": "弗朗索瓦·拉伯雷",
    "alias": "巨人传作者",
    "era": "early-modern",
    "period": "法国",
    "summary": "以《巨人传》用笑声和荒诞挑战中世纪的权威与教条。",
    "life": "法国修士医生以狂欢式的幽默写作。",
    "context": "文艺复兴人文主义精神需要新的文学形式。",
    "style": [
      "狂欢式幽默与荒诞"
    ],
    "ideas": [
      "笑声中的解放"
    ],
    "works": [
      {
        "title": "巨人传",
        "year": "1532",
        "intro": "以巨人父子的冒险写尽人文主义理想。"
      }
    ],
    "links": [
      [
        "shakespeare",
        "文艺复兴文学的两种面貌"
      ]
    ],
    "subjects": [
      "literature"
    ]
  },
  {
    "id": "vesalius",
    "subject": "history",
    "region": "world",
    "year": 1543,
    "dates": "1514—1564",
    "name": "安德烈亚斯·维萨里",
    "alias": "近代解剖学创立者",
    "period": "文艺复兴",
    "summary": "以《人体构造》首次基于亲身解剖而非古人权威描述人体。",
    "life": "布鲁塞尔人，帕多瓦大学教授。被宗教裁判所判朝圣赎罪归途中遇难。",
    "context": "文艺复兴实证精神向人体本身挑战。",
    "style": [
      "以亲身体验替代书本权威"
    ],
    "ideas": [
      "身体必须亲自去看"
    ],
    "works": [
      {
        "title": "人体构造",
        "year": "1543",
        "intro": "七卷以精美插图展示人体的真实构造。"
      }
    ],
    "links": [
      [
        "darwin",
        "从解剖自己到理解生命的历史"
      ]
    ],
    "subjects": [
      "history"
    ],
    "era": "early-modern"
  },
  {
    "id": "xuwei",
    "subject": "literature",
    "region": "china",
    "year": 1580,
    "dates": "1521—1593",
    "name": "徐渭",
    "alias": "明代艺术狂人",
    "period": "明",
    "summary": "以泼墨大写意和《四声猿》将艺术推向狂野。",
    "life": "浙江山阴人，八次乡试不中。后发狂自杀多次未遂。",
    "context": "晚明个性解放。",
    "style": [
      "泼墨大写意"
    ],
    "ideas": [
      "艺术作为生命的爆发"
    ],
    "works": [
      {
        "title": "四声猿",
        "year": "约1580",
        "intro": "四部短剧写愤世嫉俗。"
      }
    ],
    "links": [
      [
        "tangxianzu",
        "晚明艺术两种极端"
      ]
    ],
    "subjects": [
      "literature"
    ],
    "era": "early-modern"
  },
  {
    "id": "montaigne",
    "subject": "philosophy",
    "region": "world",
    "year": 1580,
    "dates": "1533—1592",
    "name": "米歇尔·德·蒙田",
    "alias": "随笔的发明者",
    "era": "early-modern",
    "period": "法国",
    "summary": "以三卷《随笔集》发明了一种全新的文体用自己作为研究人类的唯一样本。",
    "life": "法国波尔多贵族曾任市长退休后在城堡书房中写作以\"我知道什么\"为座右铭。",
    "context": "宗教战争撕裂法国在教条对立中保持怀疑成为一种智慧。",
    "style": [
      "以自我为实验对象"
    ],
    "ideas": [
      "我知道什么"
    ],
    "works": [
      {
        "title": "随笔集",
        "year": "1580",
        "intro": "107篇散文以自己为材料探索人类境况的全部维度。"
      }
    ],
    "links": [
      [
        "socrates",
        "从对话到随笔的自我探索"
      ],
      [
        "shakespeare",
        "蒙田对莎士比亚的影响"
      ]
    ],
    "subjects": [
      "philosophy",
      "literature"
    ]
  },
  {
    "id": "tangxianzu",
    "subject": "literature",
    "region": "china",
    "year": 1598,
    "dates": "1550—1616",
    "name": "汤显祖",
    "alias": "至情论的戏曲大师",
    "era": "early-modern",
    "period": "明·万历",
    "summary": "以\"临川四梦\"将戏曲从道德教化提升为对人类情感本质的哲学探索，被誉为\"东方的莎士比亚\"。",
    "life": "江西临川人，万历进士。因批评朝政被贬，辞官归隐专注戏曲创作。",
    "context": "明代中后期思想解放，心学和童心说为\"情\"提供了哲学根据。",
    "style": [
      "以梦写情的戏剧结构",
      "典雅华美的曲词"
    ],
    "ideas": [
      "至情论：情不知所起，一往而深",
      "以情抗理的文学宣言"
    ],
    "works": [
      {
        "title": "牡丹亭",
        "year": "1598",
        "intro": "杜丽娘因梦生情、因情而死、因情复生，是戏曲中最壮丽的爱情宣言。"
      },
      {
        "title": "南柯记",
        "year": "1600",
        "intro": "以槐安国一梦写尽功名富贵如幻。"
      }
    ],
    "links": [
      [
        "caoxueqin",
        "从至情到至痛的文学演进"
      ]
    ],
    "subjects": [
      "literature",
      "philosophy"
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
    "id": "lizhi",
    "subject": "philosophy",
    "region": "china",
    "year": 1600,
    "dates": "1527—1602",
    "name": "李贽",
    "alias": "晚明思想的异端",
    "era": "early-modern",
    "period": "明·万历",
    "summary": "以\"童心说\"批判道学的虚伪，主张以本心判断代替圣贤权威，被誉为中国近代思想的先驱。",
    "life": "福建泉州人，曾任姚安知府。辞官削发却不受戒，以\"异端\"自居。被逮后狱中自杀。",
    "context": "晚明思想松动，阳明后学分化出挑战正统的激进倾向。",
    "style": [
      "颠覆性的思想锋芒",
      "以评点形式进行文化批判"
    ],
    "ideas": [
      "童心说",
      "穿衣吃饭即是人伦物理"
    ],
    "works": [
      {
        "title": "焚书",
        "year": "1590",
        "intro": "批判道学与假道学。"
      },
      {
        "title": "藏书",
        "year": "1599",
        "intro": "以个人判断重评历史人物。"
      }
    ],
    "links": [
      [
        "wangyangming",
        "从心学到异端的激进走向"
      ]
    ],
    "subjects": [
      "philosophy",
      "history"
    ]
  },
  {
    "id": "caravaggio",
    "subject": "history",
    "region": "world",
    "year": 1600,
    "dates": "1571—1610",
    "name": "卡拉瓦乔",
    "alias": "巴洛克绘画革命者",
    "era": "early-modern",
    "period": "意大利",
    "summary": "以极端的光影对比和作为模特的底层人民彻底改变了欧洲绘画的方向。",
    "life": "米兰人一生打架斗殴逃亡教皇骑士勋章又被剥夺39岁死于海滩。",
    "context": "宗教改革后天主教会需要更有冲击力的艺术来感召信徒。",
    "style": [
      "以市井小民入圣画"
    ],
    "ideas": [
      "光从黑暗中创造生命"
    ],
    "works": [
      {
        "title": "圣马太蒙召",
        "year": "1600",
        "intro": "以一道光将税吏变成圣徒。"
      }
    ],
    "links": [
      [
        "rembrandt",
        "光影革命的两条路径"
      ]
    ],
    "subjects": [
      "history"
    ]
  },
  {
    "id": "shakespeare_w",
    "subject": "literature",
    "region": "world",
    "year": 1600,
    "dates": "1564—1616",
    "name": "威廉·莎士比亚",
    "alias": "英语文学与戏剧的顶峰",
    "era": "early-modern",
    "period": "英格兰",
    "summary": "以无与伦比的语言创造力把人性权力爱情与命运放在戏剧中反复实验。",
    "life": "生于斯特拉特福青年赴伦敦成为演员剧作家。",
    "context": "伦敦剧场兴盛都铎王朝权威巩固。",
    "style": [
      "跨文体融合",
      "无韵诗与口语自由切换"
    ],
    "ideas": [
      "人性在极端处境下的选择"
    ],
    "works": [
      {
        "title": "哈姆雷特",
        "year": "约1600",
        "intro": "以复仇困境讨论行动知识与生死的哲学问题。"
      }
    ],
    "links": [
      [
        "dante",
        "从地狱到戏剧的内部审判"
      ]
    ],
    "subjects": [
      "literature"
    ]
  },
  {
    "id": "cervantes",
    "subject": "literature",
    "region": "world",
    "year": 1605,
    "dates": "1547—1616",
    "name": "米格尔·德·塞万提斯",
    "alias": "现代小说之父",
    "era": "early-modern",
    "period": "西班牙",
    "summary": "以堂吉诃德创造了第一部现代小说。",
    "life": "西班牙人参加勒班陀海战失去左臂被海盗囚禁五年。",
    "context": "西班牙帝国从黄金时代走向衰落。",
    "style": [
      "戏仿与真实边界的模糊"
    ],
    "ideas": [
      "理想主义者在现实世界中"
    ],
    "works": [
      {
        "title": "堂吉诃德",
        "year": "1605",
        "intro": "以读骑士小说读到疯掉的老乡绅和他的随从桑丘的冒险写出第一部现代小说。"
      }
    ],
    "links": [
      [
        "rabelais",
        "从巨人到疯骑士的喜剧传统"
      ]
    ],
    "subjects": [
      "literature"
    ]
  },
  {
    "id": "bacon",
    "subject": "philosophy",
    "region": "world",
    "year": 1620,
    "dates": "1561—1626",
    "name": "弗朗西斯·培根",
    "alias": "经验科学的倡导者",
    "era": "early-modern",
    "period": "英格兰·伊丽莎白—詹姆士一世",
    "summary": "以\"知识就是力量\"和归纳法为现代科学确立方法论基础，批判把知识建立在权威和传统之上。",
    "life": "伦敦人，曾任大法官，因受贿被罢免后专心著述。",
    "context": "经院哲学仍居主导，但新科学需要新的知识方法。",
    "style": [
      "格言式的写作"
    ],
    "ideas": [
      "知识就是力量",
      "四种假象",
      "归纳法"
    ],
    "works": [
      {
        "title": "新工具",
        "year": "1620",
        "intro": "批判旧逻辑，提出以观察和实验为基础的新科学方法。"
      },
      {
        "title": "论说文集",
        "year": "1597—1625",
        "intro": "五十八篇短文讨论权力、死亡、友谊等人世主题。"
      }
    ],
    "links": [
      [
        "aristotle",
        "从演绎到归纳的方法论转变"
      ],
      [
        "descartes",
        "经验论与理性论之争"
      ]
    ],
    "subjects": [
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
    "id": "xusongzhiluo",
    "subject": "history",
    "region": "china",
    "year": 1635,
    "dates": "1587—1641",
    "name": "徐霞客",
    "alias": "中国地理探险的先驱",
    "period": "明末",
    "summary": "以三十年徒步考察中国十六省记录山川地貌洞穴岩溶与人文风俗。",
    "life": "南直隶江阴人放弃科举以丈夫当朝碧海而暮苍梧为志向。五十五岁因足疾终止旅行归家后不久病逝。",
    "context": "晚明社会风气开放旅游和山水文学盛行。",
    "style": [
      "实地考察与文献互证"
    ],
    "ideas": [
      "知行合一的旅人精神自然作为知识的来源"
    ],
    "works": [
      {
        "title": "徐霞客游记",
        "year": "约1640",
        "intro": "六十余万字日记体游记记录了详尽的地理水文和民俗观察。"
      }
    ],
    "links": [
      [
        "simaqian",
        "壮游传统与实地考察"
      ]
    ],
    "subjects": [
      "history",
      "literature"
    ],
    "era": "early-modern"
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
    "id": "xushi",
    "subject": "sociology",
    "region": "china",
    "year": 1637,
    "dates": "1562—1633",
    "name": "徐光启",
    "alias": "中西科技交流的先驱",
    "era": "early-modern",
    "period": "明末",
    "summary": "与利玛窦合作翻译《几何原本》，编纂《农政全书》，在农业、天文、军事等领域引入西方科学方法。",
    "life": "上海人，万历进士，官至礼部尚书。受洗成为天主教徒。",
    "context": "耶稣会士入华带来西方科学知识，少数士人认识到其价值。",
    "style": [
      "中西知识的系统融合",
      "以实证方法研究农业"
    ],
    "ideas": [
      "科学救国",
      "农本的现代化"
    ],
    "works": [
      {
        "title": "农政全书",
        "year": "1639",
        "intro": "系统总结中国传统农业技术并融入西方水利知识。"
      },
      {
        "title": "几何原本（译）",
        "year": "1607",
        "intro": "与利玛窦合译欧几里得的几何学经典。"
      }
    ],
    "links": [
      [
        "zhangheng",
        "从张衡到徐光启的科学传统"
      ]
    ],
    "subjects": [
      "sociology",
      "history"
    ]
  },
  {
    "id": "rembrandt",
    "subject": "history",
    "region": "world",
    "year": 1642,
    "dates": "1606—1669",
    "name": "伦勃朗",
    "alias": "光影的大师",
    "era": "early-modern",
    "period": "荷兰",
    "summary": "以夜巡和自画像系列将光影从技巧提升为灵魂的透视。",
    "life": "荷兰莱顿人一生从辉煌到破产以自画像记录自己衰老。",
    "context": "荷兰黄金时代绘画走向市民社会。",
    "style": [
      "光影从技巧到灵魂"
    ],
    "ideas": [
      "自画像作为一生的忏悔"
    ],
    "works": [
      {
        "title": "夜巡",
        "year": "1642",
        "intro": "以戏剧性光影颠覆团体肖像传统。"
      }
    ],
    "links": [
      [
        "caravaggio",
        "光影革命"
      ]
    ],
    "subjects": [
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
    "id": "milton",
    "subject": "literature",
    "region": "world",
    "year": 1667,
    "dates": "1608—1674",
    "name": "约翰·弥尔顿",
    "alias": "革命的盲诗人",
    "era": "early-modern",
    "period": "英格兰·共和国—王政复辟",
    "summary": "在失明和政治幻灭中以《失乐园》书写人类堕落的最雄伟史诗，为上帝之道辩护却让撒旦成为最迷人的角色。",
    "life": "伦敦人，清教徒革命期间任克伦威尔的外语秘书。王政复辟后被捕，失明后在贫困中完成巨著。",
    "context": "革命失败后，如何在信仰中找到新的语言来解释失败。",
    "style": [
      "无韵史诗的宏大结构",
      "撒旦作为悲剧英雄",
      "拉丁式的庄严与英语的活力"
    ],
    "ideas": [
      "自由意志的代价",
      "失明中看见更多"
    ],
    "works": [
      {
        "title": "失乐园",
        "year": "1667",
        "intro": "十二卷以人类堕落的叙事重写整个宇宙秩序。"
      },
      {
        "title": "论出版自由",
        "year": "1644",
        "intro": "以书是活着的理性为出版自由的经典辩护。"
      }
    ],
    "links": [
      [
        "homer",
        "从荷马到弥尔顿的史诗传承"
      ]
    ],
    "subjects": [
      "literature",
      "politics",
      "philosophy"
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
    "id": "spinoz",
    "subject": "philosophy",
    "region": "world",
    "year": 1670,
    "dates": "1632—1677",
    "name": "斯宾诺莎",
    "alias": "理性主义的激进哲学家",
    "era": "early-modern",
    "period": "荷兰共和国",
    "summary": "以几何学方法构建哲学体系，把上帝等同于自然，以理性克服情感奴役，被同时代人视为最危险的异端。",
    "life": "阿姆斯特丹葡裔犹太家庭，因异端思想被犹太社区永久革除教籍。以磨镜片为生，拒绝大学教席以保持思想自由。",
    "context": "宗教战争后，有人试图从理性中寻找超出宗派冲突的确定知识。",
    "style": [
      "几何学的论证形式",
      "概念的精确定义与推演"
    ],
    "ideas": [
      "神即自然",
      "对情感的理性认识即是自由"
    ],
    "works": [
      {
        "title": "伦理学",
        "year": "1677",
        "intro": "以几何学方式推演出关于神、心灵与自由的完整哲学。"
      },
      {
        "title": "神学政治论",
        "year": "1670",
        "intro": "主张思想自由和政教分离。"
      }
    ],
    "links": [
      [
        "descartes",
        "从笛卡尔到斯宾诺莎的理性主义扩展"
      ]
    ],
    "subjects": [
      "philosophy",
      "politics"
    ]
  },
  {
    "id": "moliere",
    "subject": "literature",
    "region": "world",
    "year": 1670,
    "dates": "1622—1673",
    "name": "莫里哀",
    "alias": "法国喜剧之父",
    "era": "early-modern",
    "period": "法国·路易十四时期",
    "summary": "以《伪君子》《悭吝人》等高超的喜剧将人性的虚伪与贪婪搬上舞台，讽刺之锋利至今令人刺痛。",
    "life": "巴黎人，放弃世袭的宫廷职位从事演艺。以喜剧演员之死在舞台上咳血演完最后一场。",
    "context": "太阳王路易十四的时代，宫廷文化繁荣，道德虚伪成为喜剧最肥沃的土壤。",
    "style": [
      "性格喜剧的典范",
      "以笑声解剖人性"
    ],
    "ideas": [
      "伪君子的永恒面目"
    ],
    "works": [
      {
        "title": "伪君子",
        "year": "1664",
        "intro": "以宗教伪善者答尔丢夫写出人性中最危险的真诚伪装。"
      },
      {
        "title": "悭吝人",
        "year": "1668",
        "intro": "以吝啬鬼阿巴贡写出金钱对人性的扭曲。"
      }
    ],
    "links": [
      [
        "shakespeare",
        "悲剧与喜剧的对照"
      ]
    ],
    "subjects": [
      "literature"
    ]
  },
  {
    "id": "nalanxingde",
    "subject": "literature",
    "region": "china",
    "year": 1680,
    "dates": "1655—1685",
    "name": "纳兰性德",
    "alias": "清初词坛的明珠",
    "era": "early-modern",
    "period": "清·康熙",
    "summary": "满洲正黄旗贵族而能以汉文写出最深情婉约的词作，在不到三十年的生命里留下词史最动人的篇章。",
    "life": "大学士明珠之子。康熙进士，官至一等侍卫。三十一岁因寒疾早逝。",
    "context": "满汉文化融合的高峰期，满族贵族中出现了一批精通汉文化的天才。",
    "style": [
      "深情婉约的词风",
      "以个人悲欢写人生本质"
    ],
    "ideas": [
      "人生若只如初见",
      "词心与词境的统一"
    ],
    "works": [
      {
        "title": "饮水词",
        "year": "约1680",
        "intro": "人生若只如初见，何事秋风悲画扇。"
      }
    ],
    "links": [
      [
        "liqingzhao",
        "婉约词的隔代回响"
      ]
    ],
    "subjects": [
      "literature"
    ]
  },
  {
    "id": "puxongling",
    "subject": "literature",
    "region": "china",
    "year": 1680,
    "dates": "1640—1715",
    "name": "蒲松龄",
    "alias": "聊斋世界的创造者",
    "era": "early-modern",
    "period": "清·康熙",
    "summary": "以《聊斋志异》将近五百篇志怪故事写成一部关于欲望、正义与孤独的人类学笔记。",
    "life": "山东淄川人，屡试不第以塾师为生。在家乡柳泉边设茶待客搜集故事，历时四十余年。",
    "context": "清初文字狱高压下，花妖狐媚成为表达社会批判和个人欲望的隐喻空间。",
    "style": [
      "以志怪写人情",
      "简洁而意蕴深远",
      "狐鬼世界的现实投影"
    ],
    "ideas": [
      "孤愤之书",
      "花妖狐媚比正人更可爱"
    ],
    "works": [
      {
        "title": "聊斋志异",
        "year": "约1680—1705",
        "intro": "近五百篇志怪小说，是中国文言短篇的最高成就。"
      }
    ],
    "links": [
      [
        "caoxueqin",
        "从志怪到世情的文学演进"
      ]
    ],
    "subjects": [
      "literature"
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
    "id": "shitao",
    "subject": "literature",
    "region": "china",
    "year": 1700,
    "dates": "1642—1707",
    "name": "石涛",
    "alias": "清初画论革新者",
    "period": "清初",
    "summary": "以一画论将绘画从摹古中解放。",
    "life": "明宗室后裔，幼年出家。遍历名山。",
    "context": "清初画家面临摹古与创新的抉择。",
    "style": [
      "画论与哲学融合"
    ],
    "ideas": [
      "一画论",
      "笔墨当随时代"
    ],
    "works": [
      {
        "title": "苦瓜和尚画语录",
        "year": "约1700",
        "intro": "十八章系统阐述绘画哲学。"
      }
    ],
    "links": [
      [
        "wangwei",
        "从诗中有画到画中有道"
      ]
    ],
    "subjects": [
      "literature",
      "philosophy"
    ],
    "era": "early-modern"
  },
  {
    "id": "leibniz",
    "subject": "philosophy",
    "region": "world",
    "year": 1710,
    "dates": "1646—1716",
    "name": "莱布尼茨",
    "alias": "最后的万能学者",
    "period": "神圣罗马帝国",
    "summary": "与牛顿各自发明微积分，以单子论构建理性主义体系。",
    "life": "莱比锡人，数学家哲学家外交家。",
    "context": "科学革命需要哲学重新解释宇宙。",
    "style": [
      "体系化理性主义"
    ],
    "ideas": [
      "单子论",
      "前定和谐"
    ],
    "works": [
      {
        "title": "单子论",
        "year": "1714",
        "intro": "以九十节阐述最后的形上学体系。"
      }
    ],
    "links": [
      [
        "descartes",
        "理性主义的德国传承"
      ]
    ],
    "subjects": [
      "philosophy"
    ],
    "era": "early-modern"
  },
  {
    "id": "defoe",
    "subject": "literature",
    "region": "world",
    "year": 1719,
    "dates": "1660—1731",
    "name": "丹尼尔·笛福",
    "alias": "英国小说的开创者",
    "era": "early-modern",
    "period": "英国·18世纪初",
    "summary": "以《鲁滨逊漂流记》写出现代个人主义的神话：一个人、一个岛、从头开始重建文明。",
    "life": "伦敦人，商人、间谍、记者。将近六十岁才开始写小说，一写就是经典。",
    "context": "新兴资产阶级需要自己的文学，一个关于个人奋斗和自我创造的故事。",
    "style": [
      "纪实风格的虚构",
      "以细节制造真实感"
    ],
    "ideas": [
      "个人主义的神话",
      "文明人的自我放逐与重建"
    ],
    "works": [
      {
        "title": "鲁滨逊漂流记",
        "year": "1719",
        "intro": "以真实海员为原型，写一个人在荒岛上二十八年的生存与精神历程。"
      }
    ],
    "links": [
      [
        "thoreau",
        "孤岛与湖边的独居实验"
      ]
    ],
    "subjects": [
      "literature"
    ]
  },
  {
    "id": "swift",
    "subject": "literature",
    "region": "world",
    "year": 1726,
    "dates": "1667—1745",
    "name": "乔纳森·斯威夫特",
    "alias": "英语讽刺文学的最高峰",
    "era": "early-modern",
    "period": "启蒙时代·英爱",
    "summary": "以《格列佛游记》将政治讽刺、人性批判和科学嘲笑熔于一炉，用奇幻叙事撕开理性时代的幻象。",
    "life": "都柏林人，英国国教牧师，同时以匿名小册子干预政治。晚年精神失常。",
    "context": "启蒙理性乐观主义高涨，需要有人指出理性的限度。",
    "style": [
      "冷静叙述下的极端讽刺",
      "以陌生化手法批判熟悉"
    ],
    "ideas": [
      "对理性主义的质疑"
    ],
    "works": [
      {
        "title": "格列佛游记",
        "year": "1726",
        "intro": "以四次旅行中的荒诞遭遇，全面讽刺政治腐败、科学虚荣和人类本性。"
      },
      {
        "title": "一个温和的建议",
        "year": "1729",
        "intro": "以\"吃掉穷人的孩子\"为建议，写出最令人毛骨悚然的社会批判。"
      }
    ],
    "links": [
      [
        "lucretius",
        "以文学形式进行社会批判"
      ]
    ],
    "subjects": [
      "literature",
      "politics"
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
    "id": "wujingzi",
    "subject": "literature",
    "region": "china",
    "year": 1749,
    "dates": "1701—1754",
    "name": "吴敬梓",
    "alias": "科举制度的解剖者",
    "era": "early-modern",
    "period": "清·乾隆",
    "summary": "以《儒林外史》对中国科举制度下的知识分子进行最全面最深刻的讽刺，其结构不以一人一事贯穿，恰如社会本身的散点透视。",
    "life": "安徽全椒人，出身科举世家。三十三岁移居南京，后半生贫病交加。",
    "context": "科举制度发展到极致时，其对人性的扭曲已无法忽视。",
    "style": [
      "散点透视的叙事结构",
      "以白描写讽刺",
      "社会全景的小说实验"
    ],
    "ideas": [
      "功名富贵的虚无",
      "知识分子的精神困境"
    ],
    "works": [
      {
        "title": "儒林外史",
        "year": "约1749",
        "intro": "以范进中举等经典段落写尽科举制度下的人性扭曲。"
      }
    ],
    "links": [
      [
        "caoxueqin",
        "乾隆时期小说的双峰"
      ],
      [
        "luxun",
        "讽刺文学的传承"
      ]
    ],
    "subjects": [
      "literature",
      "sociology"
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
    "id": "voltaire",
    "subject": "philosophy",
    "region": "world",
    "year": 1759,
    "dates": "1694—1778",
    "name": "伏尔泰",
    "alias": "启蒙运动的化身",
    "era": "early-modern",
    "period": "法国·启蒙时代",
    "summary": "以讽刺、历史、小说和书信战为言论自由、宗教宽容和理性批判战斗一生。",
    "life": "巴黎人，被投入巴士底狱、流亡英瑞。晚年回到巴黎受到万人空巷欢迎。",
    "context": "法国旧制度全面危机，启蒙哲人需要一种通俗有力的文体来影响公众。",
    "style": [
      "无与伦比的讽刺机智",
      "在通俗中承载深刻"
    ],
    "ideas": [
      "粉碎那些卑鄙的东西",
      "即使不同意你的话也誓死捍卫你说话的权利"
    ],
    "works": [
      {
        "title": "老实人",
        "year": "1759",
        "intro": "以荒唐经历批判最好世界的乐观主义。"
      },
      {
        "title": "风俗论",
        "year": "1756",
        "intro": "第一部跳出基督教中心的全球文明史。"
      }
    ],
    "links": [
      [
        "montesquieu",
        "从法的精神到理性的批判"
      ],
      [
        "kant",
        "启蒙运动的两个面向"
      ]
    ],
    "subjects": [
      "philosophy",
      "literature",
      "history"
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
    "id": "daiyizhen",
    "subject": "philosophy",
    "region": "china",
    "year": 1766,
    "dates": "1724—1777",
    "name": "戴震",
    "alias": "清代考据学的巅峰",
    "era": "early-modern",
    "period": "清·乾隆",
    "summary": "以\"由字通词，由词通道\"的方法论将考据学提升为哲学方法，以\"以理杀人\"论断批判理学。",
    "life": "安徽休宁人，出身商贩家庭。以《孟子字义疏证》为毕生最得意之作。",
    "context": "乾嘉考据学全盛，学者开始质疑宋明理学的诠释体系。",
    "style": [
      "以训诂求义理",
      "对理学的系统批判"
    ],
    "ideas": [
      "以理杀人",
      "血气心知的本体论"
    ],
    "works": [
      {
        "title": "孟子字义疏证",
        "year": "约1766",
        "intro": "通过考证重建与理学不同的儒家伦理学。"
      }
    ],
    "links": [
      [
        "zhuxi",
        "从考据学对理学的挑战"
      ],
      [
        "zhangxuecheng",
        "考据与义理之争"
      ]
    ],
    "subjects": [
      "philosophy",
      "history"
    ]
  },
  {
    "id": "diderot",
    "subject": "philosophy",
    "region": "world",
    "year": 1772,
    "dates": "1713—1784",
    "name": "狄德罗",
    "alias": "百科全书的灵魂",
    "era": "early-modern",
    "period": "法国·启蒙时代",
    "summary": "以二十余年生命主编十七卷《百科全书》，将启蒙时代的知识系统化，以知识为武器挑战旧秩序。",
    "life": "法国朗格勒人，因发表无神论倾向作品被投入监狱。一生编辑《百科全书》历经政治打压和队友背叛。",
    "context": "启蒙运动需要一个知识的中央车站来汇集和传播全部的新思想。",
    "style": [
      "以编辑部组织思想运动",
      "对话体的哲学写作"
    ],
    "ideas": [
      "知识即自由",
      "百科全书作为启蒙的武器"
    ],
    "works": [
      {
        "title": "百科全书",
        "year": "1751—1772",
        "intro": "十七卷正文十一卷图版，是启蒙运动的纪念碑。"
      },
      {
        "title": "拉摩的侄儿",
        "year": "约1761",
        "intro": "以对话形式剖析道德虚无主义。"
      }
    ],
    "links": [
      [
        "voltaire",
        "启蒙运动的两大支点"
      ]
    ],
    "subjects": [
      "philosophy",
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
    "id": "adamsmith",
    "subject": "sociology",
    "region": "world",
    "year": 1776,
    "dates": "1723—1790",
    "name": "亚当·斯密",
    "alias": "经济学的奠基者",
    "era": "early-modern",
    "period": "苏格兰·启蒙",
    "summary": "以《国富论》将分工、市场和看不见的手概念化，以前所未有的系统性解释经济秩序从何而来。",
    "life": "苏格兰柯科迪人，长期在格拉斯哥大学任教，与休谟为挚友。",
    "context": "苏格兰启蒙运动试图从人的自然倾向出发解释社会秩序。",
    "style": [
      "从日常观察到系统理论",
      "清晰而渐进的论证"
    ],
    "ideas": [
      "分工是财富的源泉",
      "看不见的手"
    ],
    "works": [
      {
        "title": "国富论",
        "year": "1776",
        "intro": "系统分析劳动分工、市场机制和国家财富的性质。"
      },
      {
        "title": "道德情操论",
        "year": "1759",
        "intro": "以同情为起点解释道德判断如何可能。"
      }
    ],
    "links": [
      [
        "marx",
        "古典经济学的批判性继承"
      ],
      [
        "hume",
        "苏格兰启蒙的思想同盟"
      ]
    ],
    "subjects": [
      "sociology",
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
    "id": "yuanmei",
    "subject": "literature",
    "region": "china",
    "year": 1780,
    "dates": "1716—1798",
    "name": "袁枚",
    "alias": "性灵派的主将",
    "era": "early-modern",
    "period": "清·乾隆",
    "summary": "以\"性灵说\"对抗格调与考据，主张诗写真情，以《随园诗话》和《随园食单》展现文人生活的丰富可能。",
    "life": "浙江钱塘人，乾隆进士。三十三岁辞官，隐居南京随园五十年。",
    "context": "乾嘉时期文化消费兴起，文人开始将日常生活审美化。",
    "style": [
      "清新灵动的诗风",
      "以随笔写生活美学"
    ],
    "ideas": [
      "性灵说",
      "生活即诗"
    ],
    "works": [
      {
        "title": "随园诗话",
        "year": "1790",
        "intro": "以随笔形式记录论诗见解与诗坛轶事。"
      },
      {
        "title": "随园食单",
        "year": "1792",
        "intro": "中国饮食文化的集大成之作。"
      }
    ],
    "links": [
      [
        "sushi",
        "从旷达到性灵"
      ]
    ],
    "subjects": [
      "literature"
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
    "id": "mozart",
    "subject": "history",
    "region": "world",
    "year": 1788,
    "dates": "1756—1791",
    "name": "沃尔夫冈·阿马德乌斯·莫扎特",
    "alias": "音乐的奇迹",
    "era": "early-modern",
    "period": "神圣罗马帝国",
    "summary": "以六百多部作品在短短35年生命中完成了音乐史上最灿烂的创造。",
    "life": "萨尔茨堡人神童出身一生贫困以辉煌的葬礼收场。",
    "context": "启蒙运动晚期音乐从宫廷走向公众。",
    "style": [
      "清澈而深刻的完美"
    ],
    "ideas": [
      "音乐是天使的语言"
    ],
    "works": [
      {
        "title": "魔笛",
        "year": "1791",
        "intro": "以共济会隐喻写启蒙理想。"
      },
      {
        "title": "安魂曲",
        "year": "1791",
        "intro": "未完成的遗作被认为是写给自己的葬礼。"
      }
    ],
    "links": [
      [
        "beethoven",
        "古典音乐的传承"
      ]
    ],
    "subjects": [
      "history"
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
    "id": "ruanjuan",
    "subject": "philosophy",
    "region": "china",
    "year": 1790,
    "dates": "1764—1849",
    "name": "阮元",
    "alias": "乾嘉学术的总结者",
    "era": "early-modern",
    "period": "清·乾隆—道光",
    "summary": "以《十三经注疏校勘记》和《畴人传》等大型编纂工作，将乾嘉考据学的方法系统地应用于学术整理和科学史。",
    "life": "江苏仪征人，乾隆进士。历任多省巡抚、总督，晚年至体仁阁大学士。",
    "context": "乾嘉学术积累了大量成果，需要有人来做综合和总结。",
    "style": [
      "组织大型学术工程",
      "以编纂代替立说"
    ],
    "ideas": [
      "实事求是",
      "学术的制度化与传承"
    ],
    "works": [
      {
        "title": "十三经注疏校勘记",
        "year": "1806",
        "intro": "对十三经注疏进行全面校勘。"
      },
      {
        "title": "畴人传",
        "year": "1799",
        "intro": "中国第一部天文学家与数学家传记。"
      }
    ],
    "links": [
      [
        "daiyizhen",
        "乾嘉学术的执行者"
      ],
      [
        "zhangxuecheng",
        "考据与义理的两种路径"
      ]
    ],
    "subjects": [
      "philosophy",
      "history"
    ]
  },
  {
    "id": "burke",
    "subject": "politics",
    "region": "world",
    "year": 1790,
    "dates": "1729—1797",
    "name": "埃德蒙·伯克",
    "alias": "保守主义的奠基者",
    "era": "early-modern",
    "period": "英国·18世纪",
    "summary": "以《对法国大革命的反思》最早系统批判革命激进主义，强调传统、渐进与\"社会的契约不止于一代人\"。",
    "life": "爱尔兰都柏林人，曾任议员三十余年。支持美国独立却反对法国革命，因其区分了\"自由\"与\"抽象权利\"。",
    "context": "法国大革命震惊欧洲，需要一套能解释\"为何革命会吞噬自己孩子\"的理论。",
    "style": [
      "雄辩而深具历史感",
      "以具体经验对抗抽象原则"
    ],
    "ideas": [
      "社会的契约跨越多代人",
      "偏见中常常藏着智慧"
    ],
    "works": [
      {
        "title": "对法国大革命的反思",
        "year": "1790",
        "intro": "预见了大革命的恐怖，成为保守主义的奠基文本。"
      },
      {
        "title": "论崇高与美",
        "year": "1757",
        "intro": "美学理论的经典著作。"
      }
    ],
    "links": [
      [
        "paine",
        "革命与保守的经典论战"
      ],
      [
        "rousseau",
        "对卢梭抽象理性主义的批判"
      ]
    ],
    "subjects": [
      "politics",
      "philosophy"
    ]
  },
  {
    "id": "beethoven",
    "subject": "history",
    "region": "world",
    "year": 1804,
    "dates": "1770—1827",
    "name": "路德维希·凡·贝多芬",
    "alias": "音乐的革命者",
    "era": "modern",
    "period": "神圣罗马帝国",
    "summary": "以英雄交响曲和第九交响曲将音乐从宫廷娱乐提升为人类精神的最高表达。",
    "life": "波恩人定居维也纳逐渐失聪后仍创作出最伟大的作品。",
    "context": "法国大革命的自由理想需要新的音乐语言。",
    "style": [
      "从古典形式到浪漫爆发"
    ],
    "ideas": [
      "音乐是比一切智慧更高的启示"
    ],
    "works": [
      {
        "title": "英雄交响曲",
        "year": "1804",
        "intro": "原题为拿破仑而作后因拿破仑称帝而愤怒撤去。"
      },
      {
        "title": "第九交响曲",
        "year": "1824",
        "intro": "以欢乐颂结尾首次在交响乐中引入人声。"
      }
    ],
    "links": [
      [
        "mozart",
        "从古典到浪漫过渡"
      ]
    ],
    "subjects": [
      "history"
    ]
  },
  {
    "id": "hegel",
    "subject": "philosophy",
    "region": "world",
    "year": 1807,
    "dates": "1770—1831",
    "name": "黑格尔",
    "alias": "绝对唯心主义的体系建构者",
    "era": "modern",
    "period": "普鲁士·19世纪初",
    "summary": "以辩证法把全部实在理解为绝对精神的自我展开与自我认识。",
    "life": "斯图加特人，先后任教于海德堡和柏林大学，被视作德国哲学的集大成者。",
    "context": "法国大革命与拿破仑战争后，需要在哲学上解释历史的意义和方向。",
    "style": [
      "宏大的体系建构",
      "辩证法（正—反—合）"
    ],
    "ideas": [
      "绝对是精神",
      "理性的狡计",
      "主奴辩证法"
    ],
    "works": [
      {
        "title": "精神现象学",
        "year": "1807",
        "intro": "以意识经验历程展示从感性确定性到绝对知识的全部阶段。"
      },
      {
        "title": "法哲学原理",
        "year": "1821",
        "intro": "讨论抽象法、道德与伦理生活。"
      }
    ],
    "links": [
      [
        "kant",
        "从批判哲学到绝对唯心主义"
      ],
      [
        "marx",
        "马克思对黑格尔的颠倒"
      ]
    ],
    "subjects": [
      "philosophy",
      "politics",
      "history"
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
    "id": "goethe_w",
    "subject": "literature",
    "region": "world",
    "year": 1808,
    "dates": "1749—1832",
    "name": "约翰·沃尔夫冈·冯·歌德",
    "alias": "德国文学与思想的象征",
    "era": "modern",
    "period": "神圣罗马帝国",
    "summary": "以一生的写作跨越诗歌戏剧小说科学与自传。",
    "life": "生于法兰克福早年为狂飙突进运动代表。",
    "context": "德意志启蒙法国大革命与拿破仑战争。",
    "style": [
      "从抒情到反思的自由跨越"
    ],
    "ideas": [
      "全面发展的人格"
    ],
    "works": [
      {
        "title": "浮士德",
        "year": "1808—1832",
        "intro": "以学者与魔鬼的赌约为框架追问人类努力的意义与限界。"
      }
    ],
    "links": [
      [
        "sushi",
        "全面发展人格的跨文化对照"
      ]
    ],
    "subjects": [
      "literature"
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
    "era": "modern",
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
    "id": "goya",
    "subject": "history",
    "region": "world",
    "year": 1814,
    "dates": "1746—1828",
    "name": "弗朗西斯科·戈雅",
    "alias": "近代绘画先驱",
    "era": "modern",
    "period": "西班牙",
    "summary": "以1808年5月3日将战争暴行化为永恒控诉以黑色绘画探索人类心灵的黑暗。",
    "life": "西班牙宫廷画家经历拿破仑战争后失聪隐居。",
    "context": "启蒙运动与战争暴行之间的巨大张力。",
    "style": [
      "从宫廷优雅到黑暗深处"
    ],
    "ideas": [
      "理性沉睡产生怪物"
    ],
    "works": [
      {
        "title": "1808年5月3日",
        "year": "1814",
        "intro": "以枪决场面将战争暴行化为永恒图像。"
      }
    ],
    "links": [
      [
        "picasso",
        "从戈雅到毕加索控诉战争传统"
      ]
    ],
    "subjects": [
      "history"
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
    "id": "delacroix",
    "subject": "literature",
    "region": "world",
    "year": 1830,
    "dates": "1798—1863",
    "name": "欧仁·德拉克洛瓦",
    "alias": "浪漫主义绘画旗手",
    "era": "modern",
    "period": "法国",
    "summary": "以《自由引导人民》将革命激情与浪漫想象熔铸为时代肖像。",
    "life": "法国画家以大胆色彩和动态构图打破古典主义规范。",
    "context": "法国七月革命后浪漫主义成为时代精神。",
    "style": [
      "大胆色彩与动态构图"
    ],
    "ideas": [
      "自由引导人民"
    ],
    "works": [
      {
        "title": "自由引导人民",
        "year": "1830",
        "intro": "以女神形象象征革命精神。"
      }
    ],
    "links": [
      [
        "hugo",
        "浪漫主义文学与绘画双翼"
      ]
    ],
    "subjects": [
      "literature"
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
    "id": "pushkin",
    "subject": "literature",
    "region": "world",
    "year": 1833,
    "dates": "1799—1837",
    "name": "亚历山大·普希金",
    "alias": "俄罗斯文学之父",
    "era": "modern",
    "period": "俄罗斯",
    "summary": "以叶甫盖尼奥涅金创造了俄罗斯文学语言开创了俄罗斯文学的所有主要方向。",
    "life": "莫斯科人非洲裔曾外孙因决斗而死年仅三十七。",
    "context": "俄罗斯文学正在从法国文学的影响中独立出来。",
    "style": [
      "创造俄罗斯文学语言"
    ],
    "ideas": [
      "文学是民族精神的表达"
    ],
    "works": [
      {
        "title": "叶甫盖尼奥涅金",
        "year": "1833",
        "intro": "以诗体小说写多余人的悲剧。"
      }
    ],
    "links": [
      [
        "tolstoy",
        "俄罗斯文学的源头"
      ]
    ],
    "subjects": [
      "literature"
    ]
  },
  {
    "id": "balzac",
    "subject": "literature",
    "region": "world",
    "year": 1834,
    "dates": "1799—1850",
    "name": "奥诺雷·德·巴尔扎克",
    "alias": "人间喜剧的建造者",
    "era": "modern",
    "period": "法国·19世纪",
    "summary": "以九十一部小说构建《人间喜剧》，让两千多个互相关联的人物在同一个虚构社会中生活，开创小说系列化的全新可能。",
    "life": "法国图尔人，早年经商失败负债累累，以疯狂写作还债，每天喝数十杯咖啡，五十一岁过劳而死。",
    "context": "法国社会在革命与复辟间剧烈震荡，金钱成为新的权力核心。",
    "style": [
      "全景式的社会描写",
      "让同一人物在多部小说中再出场"
    ],
    "ideas": [
      "金钱社会的病理学"
    ],
    "works": [
      {
        "title": "高老头",
        "year": "1834",
        "intro": "以父爱的极致与背叛，写出金钱社会中一切关系都沦为交易。"
      },
      {
        "title": "欧也妮·葛朗台",
        "year": "1833",
        "intro": "以老葛朗台的吝啬写出被金钱异化的灵魂。"
      }
    ],
    "links": [
      [
        "caoxueqin",
        "家族叙事作为社会全景的跨文化对照"
      ]
    ],
    "subjects": [
      "literature",
      "sociology"
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
    "id": "comte",
    "subject": "sociology",
    "region": "world",
    "year": 1838,
    "dates": "1798—1857",
    "name": "奥古斯特·孔德",
    "alias": "社会学命名者",
    "period": "法国",
    "summary": "以三阶段法则解释人类思想进化，创造了sociologie。",
    "life": "法国蒙彼利埃人，曾任圣西门秘书。",
    "context": "大革命后需要新的知识组织方式。",
    "style": [
      "体系化宏大理论"
    ],
    "ideas": [
      "三阶段法则"
    ],
    "works": [
      {
        "title": "实证哲学教程",
        "year": "1830",
        "intro": "六卷系统阐述实证主义知识体系。"
      }
    ],
    "links": [
      [
        "durkheim",
        "社会学的奠基到制度化"
      ]
    ],
    "subjects": [
      "sociology",
      "philosophy"
    ],
    "era": "modern"
  },
  {
    "id": "gongzizhen",
    "subject": "literature",
    "region": "china",
    "year": 1839,
    "dates": "1792—1841",
    "name": "龚自珍",
    "alias": "近代变革的先声",
    "era": "modern",
    "period": "清·道光",
    "summary": "以\"我劝天公重抖擞，不拘一格降人才\"呼唤变革，其诗文被视作近代中国思想解放的先声。",
    "life": "浙江仁和人，出身官宦世家。屡试不第，晚年辞官南归。",
    "context": "鸦片战争前夕，帝国内部危机已无法掩盖。",
    "style": [
      "奇崛瑰丽的诗文风格",
      "以个人抒发社会忧患"
    ],
    "ideas": [
      "尊史与更法",
      "人才的发现与压抑"
    ],
    "works": [
      {
        "title": "己亥杂诗",
        "year": "1839",
        "intro": "315首七绝写尽去国之痛与济世之志。"
      },
      {
        "title": "病梅馆记",
        "year": "1839",
        "intro": "以病梅为喻批判对人才的摧残。"
      }
    ],
    "links": [
      [
        "luxun",
        "近代批判精神的前驱"
      ]
    ],
    "subjects": [
      "literature",
      "politics"
    ]
  },
  {
    "id": "gongyangzhen",
    "subject": "literature",
    "region": "china",
    "year": 1839,
    "dates": "1792—1841",
    "name": "龚自珍",
    "alias": "近代变革先声",
    "period": "清道光",
    "summary": "以我劝天公重抖擞不拘一格降人才呼唤变革。",
    "life": "浙江仁和人出身官宦世家屡试不第晚年辞官南归。",
    "context": "鸦片战争前夕帝国内部危机已无法掩盖。",
    "style": [
      "奇崛瑰丽诗文风格"
    ],
    "ideas": [
      "尊史与更法人才发现与压抑"
    ],
    "works": [
      {
        "title": "己亥杂诗",
        "year": "1839",
        "intro": "315首七绝写尽去国之痛与济世之志。"
      }
    ],
    "links": [
      [
        "luxun",
        "近代批判精神前驱"
      ]
    ],
    "subjects": [
      "literature",
      "politics"
    ],
    "era": "modern"
  },
  {
    "id": "emerson",
    "subject": "philosophy",
    "region": "world",
    "year": 1841,
    "dates": "1803—1882",
    "name": "拉尔夫·沃尔多·爱默生",
    "alias": "美国精神的独立宣言",
    "era": "modern",
    "period": "美国·19世纪",
    "summary": "以《论自然》和《论自立》宣告美国思想从欧洲的独立，是超验主义运动的核心。",
    "life": "波士顿人，原为牧师，因信仰危机离开教会。以演讲为生，影响了一整代美国作家。",
    "context": "年轻的美利坚合众国需要在文化上证明自己不仅仅是欧洲的附庸。",
    "style": [
      "格言式的散文",
      "以自然为启示的源泉"
    ],
    "ideas": [
      "自立",
      "自然是精神的象征"
    ],
    "works": [
      {
        "title": "论自立",
        "year": "1841",
        "intro": "主张每个人都要相信自己的直觉和思想。"
      },
      {
        "title": "论自然",
        "year": "1836",
        "intro": "为超验主义奠定理论基础。"
      }
    ],
    "links": [
      [
        "nietzsche",
        "个人主义的两种表达"
      ],
      [
        "thoreau",
        "超验主义的两位代表"
      ]
    ],
    "subjects": [
      "philosophy",
      "literature"
    ]
  },
  {
    "id": "weiyuan",
    "subject": "history",
    "region": "china",
    "year": 1842,
    "dates": "1794—1857",
    "name": "魏源",
    "alias": "睁眼看世界的先驱",
    "era": "modern",
    "period": "清·道光—咸丰",
    "summary": "以\"师夷长技以制夷\"突破闭关自守，编《海国图志》为中国第一部系统介绍世界的地理著作。",
    "life": "湖南邵阳人，历任幕僚和地方官。鸦片战争后发愤研究世界。",
    "context": "鸦片战争惨败迫使部分士人认识到\"了解世界\"的紧迫性。",
    "style": [
      "经世致用的学术取向",
      "以世界知识回应民族危机"
    ],
    "ideas": [
      "师夷长技以制夷",
      "经世之学的现代化转型"
    ],
    "works": [
      {
        "title": "海国图志",
        "year": "1842",
        "intro": "百卷巨著介绍世界各国的地理历史与制度。"
      }
    ],
    "links": [
      [
        "gongzizhen",
        "经世变革的同道"
      ]
    ],
    "subjects": [
      "history",
      "politics"
    ]
  },
  {
    "id": "turner",
    "subject": "history",
    "region": "world",
    "year": 1842,
    "dates": "1775—1851",
    "name": "J.M.W.透纳",
    "alias": "光色革命者",
    "era": "modern",
    "period": "英国",
    "summary": "以雨蒸汽与速度将绘画从描绘物体转向描绘光与气氛本身预告了印象派和抽象艺术。",
    "life": "伦敦人皇家美术学院史上最年轻院士晚年隐居以海景和暴风雪为毕生主题。",
    "context": "工业革命改变视觉经验蒸汽和速度成为新的美感。",
    "style": [
      "将光从形体中解放"
    ],
    "ideas": [
      "朦胧作为更高的真实"
    ],
    "works": [
      {
        "title": "雨蒸汽与速度",
        "year": "1844",
        "intro": "以模糊的轮廓画一列火车穿过暴风雨。"
      },
      {
        "title": "被拖去解体的战舰无畏号",
        "year": "1839",
        "intro": "以落日中的旧战舰哀悼一个时代的终结。"
      }
    ],
    "links": [
      [
        "monet",
        "从透纳到印象派的光色革命"
      ]
    ],
    "subjects": [
      "history"
    ]
  },
  {
    "id": "kierkegaard",
    "subject": "philosophy",
    "region": "world",
    "year": 1843,
    "dates": "1813—1855",
    "name": "克尔凯郭尔",
    "alias": "存在主义的先驱",
    "era": "modern",
    "period": "丹麦·19世纪",
    "summary": "以信仰的跳跃对抗黑格尔的体系哲学，将个人的焦虑、选择与主观真理置于客观知识之上。",
    "life": "哥本哈根人，与蕾琪娜解除婚约后终身未娶。以多个笔名发表相互矛盾的著作。",
    "context": "黑格尔体系将个人消解在普遍中，克尔凯郭尔以孤独的个人反击。",
    "style": [
      "假名写作与间接沟通",
      "将个人存在经验提升为哲学主题"
    ],
    "ideas": [
      "信仰的跳跃",
      "人生三阶段",
      "主观真理"
    ],
    "works": [
      {
        "title": "恐惧与战栗",
        "year": "1843",
        "intro": "以亚伯拉罕献以撒讨论信仰如何超越伦理。"
      },
      {
        "title": "或此或彼",
        "year": "1843",
        "intro": "呈现审美与伦理生活的冲突。"
      }
    ],
    "links": [
      [
        "hegel",
        "对体系哲学的最早反击"
      ],
      [
        "sartre",
        "存在主义的先驱"
      ]
    ],
    "subjects": [
      "philosophy",
      "literature"
    ]
  },
  {
    "id": "humboldt",
    "subject": "history",
    "region": "world",
    "year": 1845,
    "dates": "1769—1859",
    "name": "亚历山大·冯·洪堡",
    "alias": "近代地理学奠基者",
    "period": "普鲁士",
    "summary": "以五年南美洲考察和《宇宙》五卷将自然理解为一个活的整体。",
    "life": "柏林贵族，耗尽家产支持科学探险。",
    "context": "学科专业化的起点。",
    "style": [
      "将科学观察与文学描写结合"
    ],
    "ideas": [
      "自然是活的网络"
    ],
    "works": [
      {
        "title": "宇宙",
        "year": "1845",
        "intro": "五卷以自然的总体图景为宗旨。"
      }
    ],
    "links": [
      [
        "darwin",
        "洪堡对达尔文的启发"
      ]
    ],
    "subjects": [
      "history",
      "philosophy"
    ],
    "era": "modern"
  },
  {
    "id": "emily_bronte",
    "subject": "literature",
    "region": "world",
    "year": 1847,
    "dates": "1818—1848",
    "name": "艾米莉·勃朗特",
    "alias": "呼啸山庄作者",
    "era": "modern",
    "period": "英国",
    "summary": "以《呼啸山庄》写出英国文学中最暴烈最热烈的爱情与复仇。",
    "life": "约克郡牧师之女与姐姐夏洛特和妹妹安妮并称勃朗特三姐妹。",
    "context": "维多利亚时代女性写作的高峰。",
    "style": [
      "暴烈而深刻的情感书写"
    ],
    "ideas": [
      "爱与恨的不可分割"
    ],
    "works": [
      {
        "title": "呼啸山庄",
        "year": "1847",
        "intro": "以希斯克利夫和凯瑟琳的爱情与复仇写尽人性深渊。"
      }
    ],
    "links": [
      [
        "janeausten",
        "女性小说传统的延续与颠覆"
      ]
    ],
    "subjects": [
      "literature"
    ]
  },
  {
    "id": "emilybronte",
    "subject": "literature",
    "region": "world",
    "year": 1847,
    "dates": "1818—1848",
    "name": "艾米莉·勃朗特",
    "alias": "呼啸山庄作者",
    "era": "modern",
    "period": "英国",
    "summary": "以呼啸山庄写出英国文学最暴烈最热烈的爱情与复仇。",
    "life": "约克郡牧师之女。",
    "context": "维多利亚时代女性写作高峰。",
    "style": [
      "暴烈深刻情感书写"
    ],
    "ideas": [
      "爱与恨不可分割"
    ],
    "works": [
      {
        "title": "呼啸山庄",
        "year": "1847",
        "intro": "以希斯克利夫和凯瑟琳写尽人性深渊。"
      }
    ],
    "links": [
      [
        "janeausten",
        "女性小说传统"
      ]
    ],
    "subjects": [
      "literature"
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
    "id": "liszt",
    "subject": "literature",
    "region": "world",
    "year": 1850,
    "dates": "1811—1886",
    "name": "弗朗茨·李斯特",
    "alias": "钢琴之王",
    "era": "modern",
    "period": "匈牙利",
    "summary": "以空前绝后的钢琴技巧和交响诗体裁将音乐从客厅推向公众。",
    "life": "匈牙利人少年成名巡演全欧洲晚年皈依宗教。",
    "context": "浪漫主义音乐达到顶峰。",
    "style": [
      "交响诗体裁开创"
    ],
    "ideas": [
      "音乐作为公众力量"
    ],
    "works": [
      {
        "title": "匈牙利狂想曲",
        "year": "1846",
        "intro": "以匈牙利民间音乐为素材展现民族精神。"
      }
    ],
    "links": [
      [
        "beethoven",
        "钢琴音乐传承"
      ]
    ],
    "subjects": [
      "literature"
    ]
  },
  {
    "id": "hawthorne",
    "subject": "literature",
    "region": "world",
    "year": 1850,
    "dates": "1804—1864",
    "name": "纳撒尼尔·霍桑",
    "alias": "美国浪漫主义小说家",
    "era": "modern",
    "period": "美国",
    "summary": "以《红字》将清教徒的罪恶感与个人良知写成美国文学最沉重的道德寓言。",
    "life": "马萨诸塞人祖先是塞勒姆女巫审判法官一生背负祖先罪孽。",
    "context": "年轻的美国文学需要自己的经典。",
    "style": [
      "道德寓言的象征手法"
    ],
    "ideas": [
      "罪恶感与救赎"
    ],
    "works": [
      {
        "title": "红字",
        "year": "1850",
        "intro": "以通奸女子海丝特胸前的红色A字写尽罪恶惩罚与救赎。"
      }
    ],
    "links": [
      [
        "melville",
        "美国浪漫主义的两位代表"
      ]
    ],
    "subjects": [
      "literature"
    ]
  },
  {
    "id": "melville",
    "subject": "literature",
    "region": "world",
    "year": 1851,
    "dates": "1819—1891",
    "name": "赫尔曼·梅尔维尔",
    "alias": "白鲸的作者",
    "era": "modern",
    "period": "美国",
    "summary": "以《白鲸》将捕鲸变成对命运执念与疯狂的形而上学追问。",
    "life": "纽约人在船上当过水手以白鲸献给霍桑。",
    "context": "美国文学从浪漫主义向现代主义过渡。",
    "style": [
      "史诗般的象征叙事"
    ],
    "ideas": [
      "对白鲸的执念即对人类命运的追问"
    ],
    "works": [
      {
        "title": "白鲸",
        "year": "1851",
        "intro": "以亚哈船长追捕白鲸的疯狂旅程写尽执念与毁灭。"
      }
    ],
    "links": [
      [
        "hawthorne",
        "美国浪漫主义两位代表"
      ]
    ],
    "subjects": [
      "literature",
      "philosophy"
    ]
  },
  {
    "id": "thoreau",
    "subject": "philosophy",
    "region": "world",
    "year": 1854,
    "dates": "1817—1862",
    "name": "亨利·大卫·梭罗",
    "alias": "瓦尔登湖的隐居者",
    "era": "modern",
    "period": "美国·19世纪",
    "summary": "以在瓦尔登湖边两年两个月的独居实验，证明简单生活可以是抵抗现代文明的最激进方式。",
    "life": "马萨诸塞州康科德人，在瓦尔登湖边自建木屋生活。以拒绝纳税抗议奴隶制入狱一晚，催生\"公民不服从\"概念。",
    "context": "美国工业化加速和奴隶制争论中，个人如何在制度暴力中保持良知。",
    "style": [
      "以亲身实践验证哲学",
      "日记文学的极致"
    ],
    "ideas": [
      "公民不服从",
      "简单生活、丰富心灵"
    ],
    "works": [
      {
        "title": "瓦尔登湖",
        "year": "1854",
        "intro": "以两年湖边生活的记录书写自然、孤独与自由。"
      },
      {
        "title": "论公民不服从",
        "year": "1849",
        "intro": "论证个人有权拒绝遵守不公正的法律。"
      }
    ],
    "links": [
      [
        "emerson",
        "超验主义的两位代表"
      ],
      [
        "gandhi",
        "公民不服从的全球传播"
      ]
    ],
    "subjects": [
      "philosophy",
      "politics",
      "literature"
    ]
  },
  {
    "id": "whitman",
    "subject": "literature",
    "region": "world",
    "year": 1855,
    "dates": "1819—1892",
    "name": "沃尔特·惠特曼",
    "alias": "美国的诗人",
    "era": "modern",
    "period": "美国·19世纪",
    "summary": "以《草叶集》用前所未有的自由诗体歌唱民主、身体和广袤的美洲大陆。",
    "life": "纽约长岛人，做过印刷工、记者和教师。南北战争期间志愿担任护士，照料伤兵直到病倒。",
    "context": "年轻的美国需要自己的诗人来书写这个国家独特的声音。",
    "style": [
      "自由诗体",
      "以身体和自然为诗意来源",
      "对于多元与民主的歌唱"
    ],
    "ideas": [
      "我歌唱自己",
      "美国的史诗在草叶中"
    ],
    "works": [
      {
        "title": "草叶集",
        "year": "1855—1892",
        "intro": "一生七次增订的自由诗集，从十二首到近四百首。"
      }
    ],
    "links": [
      [
        "emerson",
        "爱默生的理想诗人"
      ]
    ],
    "subjects": [
      "literature"
    ]
  },
  {
    "id": "flaubert",
    "subject": "literature",
    "region": "world",
    "year": 1857,
    "dates": "1821—1880",
    "name": "居斯塔夫·福楼拜",
    "alias": "现代小说的匠人",
    "era": "modern",
    "period": "法国·19世纪",
    "summary": "以《包法利夫人》将日常生活的平庸提升到悲剧的高度，以\"找到精确的词\"为毕生追求，成为现代小说技法的起点。",
    "life": "法国鲁昂人，父亲是外科医生。一生大部分时间在乡下写作，每一页都要大声朗读以检查节奏。",
    "context": "浪漫主义退潮后，需要一种能够精确描写现实的文学。",
    "style": [
      "精确到偏执的语言追求",
      "以自由间接引语写人物心理"
    ],
    "ideas": [
      "日常生活的悲剧性",
      "作者应该像上帝一样隐身在作品中"
    ],
    "works": [
      {
        "title": "包法利夫人",
        "year": "1857",
        "intro": "以爱玛·包法利的婚外情写出资产阶级生活的平庸与幻灭。"
      },
      {
        "title": "情感教育",
        "year": "1869",
        "intro": "以1848年革命为背景写一代人的幻灭。"
      }
    ],
    "links": [
      [
        "tolstoy",
        "19世纪现实主义的两种风格"
      ]
    ],
    "subjects": [
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
    "id": "hugo",
    "subject": "literature",
    "region": "world",
    "year": 1862,
    "dates": "1802—1885",
    "name": "维克多·雨果",
    "alias": "法兰西的良心",
    "era": "modern",
    "period": "法国·19世纪",
    "summary": "以《悲惨世界》将法律与恩典、革命与秩序、苦难与救赎编织为一部关于人类命运的百科全书。",
    "life": "法国贝桑松人，1827年成为浪漫主义运动领袖。因反对拿破仑三世流亡海外十九年。国葬入先贤祠。",
    "context": "19世纪法国的革命与反动反复交替，需要一个作家来记录和审判这个时代。",
    "style": [
      "史诗般的社会全景",
      "被压缩到极致的人物命运"
    ],
    "ideas": [
      "悲惨是社会的罪行",
      "进步是永恒的"
    ],
    "works": [
      {
        "title": "悲惨世界",
        "year": "1862",
        "intro": "以冉阿让的一生追问：一个人能否被社会彻底救赎？"
      },
      {
        "title": "巴黎圣母院",
        "year": "1831",
        "intro": "以中世纪的巴黎写尽美与丑、爱与恨。"
      }
    ],
    "links": [
      [
        "tolstoy",
        "19世纪小说的两座高峰"
      ],
      [
        "dickens",
        "社会小说的大师"
      ]
    ],
    "subjects": [
      "literature",
      "politics"
    ]
  },
  {
    "id": "spencer",
    "subject": "sociology",
    "region": "world",
    "year": 1862,
    "dates": "1820—1903",
    "name": "赫伯特·斯宾塞",
    "alias": "社会进化论代表",
    "period": "英国",
    "summary": "将进化论应用于社会，发明了适者生存一词。",
    "life": "英格兰德比人，自学成才。影响明治日本和晚清中国。",
    "context": "达尔文进化论冲击波扩散。",
    "style": [
      "体系化进化理论"
    ],
    "ideas": [
      "适者生存",
      "社会有机体"
    ],
    "works": [
      {
        "title": "社会学原理",
        "year": "1862",
        "intro": "多卷本系统阐述社会进化论。"
      }
    ],
    "links": [
      [
        "darwin",
        "生物学到社会学的进化论扩展"
      ]
    ],
    "subjects": [
      "sociology"
    ],
    "era": "modern"
  },
  {
    "id": "dostoevsky",
    "subject": "literature",
    "region": "world",
    "year": 1866,
    "dates": "1821—1881",
    "name": "陀思妥耶夫斯基",
    "alias": "灵魂的深渊勘探者",
    "era": "modern",
    "period": "俄罗斯帝国·19世纪",
    "summary": "以复调小说将信仰、自由、罪恶与救赎放在同一叙事空间中激烈碰撞，挖掘人性最黑暗的深渊与最崇高的可能。",
    "life": "莫斯科人，早年参加进步团体被判死刑，临刑前获赦改为流放西伯利亚四年。",
    "context": "俄国知识界在无神论、社会主义和东正教信仰之间激烈分裂。",
    "style": [
      "复调小说：多个独立声音并存",
      "在极端处境中拷问信仰"
    ],
    "ideas": [
      "如果没有上帝一切都被允许",
      "美将拯救世界"
    ],
    "works": [
      {
        "title": "罪与罚",
        "year": "1866",
        "intro": "以贫穷大学生的杀人实验追问超人能否超越道德。"
      },
      {
        "title": "卡拉马佐夫兄弟",
        "year": "1880",
        "intro": "以弑父案将信仰理性自由浓缩在一个家庭中。"
      }
    ],
    "links": [
      [
        "tolstoy",
        "俄罗斯文学的两极"
      ],
      [
        "nietzsche",
        "虚无主义的不同回应"
      ]
    ],
    "subjects": [
      "literature",
      "philosophy"
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
    "id": "monet",
    "subject": "history",
    "region": "world",
    "year": 1872,
    "dates": "1840—1926",
    "name": "克洛德·莫奈",
    "alias": "印象派命名者",
    "era": "modern",
    "period": "法国",
    "summary": "以日出印象为印象派命名以睡莲系列将光影变化推到极致。",
    "life": "法国人在吉维尼花园创作近三十年睡莲。",
    "context": "绘画从画室走向户外光本身成为主题。",
    "style": [
      "光与色的分解"
    ],
    "ideas": [
      "光本身即是主题"
    ],
    "works": [
      {
        "title": "日出印象",
        "year": "1872",
        "intro": "以勒阿弗尔港口的晨雾命名一个画派。"
      },
      {
        "title": "睡莲系列",
        "year": "1899",
        "intro": "近250幅以水面倒影捕捉光的无穷变化。"
      }
    ],
    "links": [
      [
        "turner",
        "光色革命"
      ]
    ],
    "subjects": [
      "history"
    ]
  },
  {
    "id": "ibsen",
    "subject": "literature",
    "region": "world",
    "year": 1879,
    "dates": "1828—1906",
    "name": "亨利克·易卜生",
    "alias": "现代戏剧之父",
    "era": "modern",
    "period": "挪威·19世纪",
    "summary": "以《玩偶之家》和《群鬼》将普通人的家庭变成解剖社会伪善的手术台。",
    "life": "挪威希恩人，早年在药店当学徒。后旅居意大利和德国长达二十七年。",
    "context": "19世纪末欧洲中产阶级的道德体系正在崩溃，家庭成为最激烈的战场。",
    "style": [
      "社会问题的戏剧化",
      "以对话揭示人物内心"
    ],
    "ideas": [
      "个人的诚实高于社会的期待"
    ],
    "works": [
      {
        "title": "玩偶之家",
        "year": "1879",
        "intro": "娜拉摔门而去的声音响彻欧洲，宣告了女性对家庭的出走。"
      },
      {
        "title": "人民公敌",
        "year": "1882",
        "intro": "以一个人对抗整个社会的勇气。"
      }
    ],
    "links": [
      [
        "beckett",
        "从易卜生到贝克特的戏剧演进"
      ]
    ],
    "subjects": [
      "literature"
    ]
  },
  {
    "id": "rodin",
    "subject": "history",
    "region": "world",
    "year": 1880,
    "dates": "1840—1917",
    "name": "奥古斯特·罗丹",
    "alias": "现代雕塑之父",
    "era": "modern",
    "period": "法国",
    "summary": "以思想者和地狱之门将雕塑从古典理想推向人类灵魂的表达。",
    "life": "法国人以现实主义打破理想化雕塑传统。",
    "context": "现代艺术需要新的雕塑语言。",
    "style": [
      "以未完成感表达灵魂"
    ],
    "ideas": [
      "雕塑是凹陷与凸起的艺术"
    ],
    "works": [
      {
        "title": "思想者",
        "year": "1880",
        "intro": "原本为地狱之门一部分后独立成为人类精神的象征。"
      }
    ],
    "links": [
      [
        "michelangelo",
        "雕塑从神性到人性"
      ]
    ],
    "subjects": [
      "history"
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
    "id": "van_gogh",
    "subject": "literature",
    "region": "world",
    "year": 1888,
    "dates": "1853—1890",
    "name": "文森特·梵高",
    "alias": "后印象派殉道者",
    "era": "modern",
    "period": "荷兰",
    "summary": "以燃烧般的色彩和扭曲的笔触将内心痛苦转化为视觉风暴。",
    "life": "荷兰人一生贫困靠弟弟提奥接济在阿尔勒割耳后在精神病院创作。",
    "context": "19世纪末艺术从客观再现转向主观表达。",
    "style": [
      "燃烧般色彩与扭曲笔触"
    ],
    "ideas": [
      "用生命作画的极限"
    ],
    "works": [
      {
        "title": "星月夜",
        "year": "1889",
        "intro": "以漩涡般星空表达内心风暴。"
      }
    ],
    "links": [
      [
        "gauguin",
        "后印象派两位殉道者"
      ]
    ],
    "subjects": [
      "literature"
    ]
  },
  {
    "id": "vangogh",
    "subject": "literature",
    "region": "world",
    "year": 1888,
    "dates": "1853—1890",
    "name": "文森特·梵高",
    "alias": "后印象派殉道者",
    "era": "modern",
    "period": "荷兰",
    "summary": "以燃烧般色彩和扭曲笔触将内心痛苦转化为视觉风暴。",
    "life": "荷兰人一生贫困靠弟弟接济在精神病院创作。",
    "context": "艺术从客观再现转向主观表达。",
    "style": [
      "燃烧般色彩"
    ],
    "ideas": [
      "用生命作画极限"
    ],
    "works": [
      {
        "title": "星月夜",
        "year": "1889",
        "intro": "以漩涡般星空表达内心风暴。"
      }
    ],
    "links": [
      [
        "gauguin",
        "后印象派"
      ]
    ],
    "subjects": [
      "literature"
    ]
  },
  {
    "id": "wengtonghe",
    "subject": "politics",
    "region": "china",
    "year": 1890,
    "dates": "1830—1904",
    "name": "翁同龢",
    "alias": "帝师与维新推手",
    "era": "modern",
    "period": "晚清",
    "summary": "以光绪帝师傅的身份推荐康梁，主导戊戌变法的朝中力量，是帝党与维新派之间的关键纽带。",
    "life": "江苏常熟人，状元出身。两朝帝师，长期主管军机处和总理衙门。戊戌政变后被革职永不叙用。",
    "context": "甲午战败后朝廷分裂为帝党后党，帝师成为连接皇帝与维新派的桥梁。",
    "style": [
      "以地位推动变革",
      "在皇权与变法间的微妙平衡"
    ],
    "ideas": [
      "变法不可逆转",
      "读书人的责任"
    ],
    "works": [
      {
        "title": "翁文恭公日记",
        "year": "约1858—1904",
        "intro": "四十七年日记记录晚清政局的变迁。"
      }
    ],
    "links": [
      [
        "kangyouwei",
        "变法运动的内外配合"
      ],
      [
        "liangqichao",
        "从帝师到启蒙者的转型"
      ]
    ],
    "subjects": [
      "politics",
      "history"
    ]
  },
  {
    "id": "wilde",
    "subject": "literature",
    "region": "world",
    "year": 1890,
    "dates": "1854—1900",
    "name": "奥斯卡·王尔德",
    "alias": "唯美主义的殉道者",
    "era": "modern",
    "period": "英国·维多利亚晚期",
    "summary": "以《道林·格雷的画像》和一系列不朽的喜剧在上流社会的客厅里引爆最锋利的道德炸弹。",
    "life": "都柏林人，牛津毕业后成为伦敦社交界的明星。因同性恋被判两年苦役，出狱三年后在巴黎落魄而死。",
    "context": "维多利亚时代虚伪的道德观需要有人来戳破。",
    "style": [
      "机智的悖论与警句",
      "以喜剧形式承载虚无"
    ],
    "ideas": [
      "艺术无用之用",
      "只有肤浅的人才不以貌取人"
    ],
    "works": [
      {
        "title": "道林·格雷的画像",
        "year": "1890",
        "intro": "以一幅永不衰老的画像探讨美、道德与灵魂的代价。"
      },
      {
        "title": "不可儿戏",
        "year": "1895",
        "intro": "以完美无瑕的机智写尽上流社会的伪善。"
      }
    ],
    "links": [
      [
        "shakespeare",
        "英语戏剧传统的最后辉煌"
      ]
    ],
    "subjects": [
      "literature",
      "philosophy"
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
    "id": "kangyouwei",
    "subject": "politics",
    "region": "china",
    "year": 1898,
    "dates": "1858—1927",
    "name": "康有为",
    "alias": "维新变法的理论家",
    "era": "modern",
    "period": "晚清",
    "summary": "以《新学伪经考》《孔子改制考》重释儒学为变法依据，主导戊戌变法百日维新。",
    "life": "广东南海人，早年受学于朱次琦。公车上书的发起者，戊戌变法失败后流亡海外。",
    "context": "甲午战败后变法呼声高涨，需要一套既能说服保守派又能推进改革的理论。",
    "style": [
      "以经学论证变法",
      "托古改制的学术策略"
    ],
    "ideas": [
      "孔子改制考",
      "大同理想"
    ],
    "works": [
      {
        "title": "新学伪经考",
        "year": "1891",
        "intro": "论证古文经为刘歆伪造。"
      },
      {
        "title": "大同书",
        "year": "1902",
        "intro": "设计人类最终走向大同世界的蓝图。"
      }
    ],
    "links": [
      [
        "liangqichao",
        "师生联手推动维新"
      ]
    ],
    "subjects": [
      "politics",
      "philosophy"
    ]
  },
  {
    "id": "tanqitong",
    "subject": "politics",
    "region": "china",
    "year": 1898,
    "dates": "1865—1898",
    "name": "谭嗣同",
    "alias": "为变法牺牲的第一人",
    "era": "modern",
    "period": "晚清",
    "summary": "以《仁学》系统论述变法理论，戊戌政变后拒绝逃亡，以鲜血宣告变法的不可阻挡。",
    "life": "湖南浏阳人，出身官宦。任四品军机章京参与新政，政变后在菜市口就义，年仅三十三。",
    "context": "戊戌变法失败后，需要有人以生命证明变法的道义力量。",
    "style": [
      "以死明志的行动哲学"
    ],
    "ideas": [
      "各国变法无不从流血而成",
      "仁的通与平等"
    ],
    "works": [
      {
        "title": "仁学",
        "year": "1897",
        "intro": "以佛学、西学和儒学融合论证变革的必要。"
      }
    ],
    "links": [
      [
        "kangyouwei",
        "维新运动的牺牲者"
      ],
      [
        "luxun",
        "从谭嗣同到鲁迅的批判精神"
      ]
    ],
    "subjects": [
      "politics",
      "philosophy"
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
    "id": "freud",
    "subject": "philosophy",
    "region": "world",
    "year": 1900,
    "dates": "1856—1939",
    "name": "弗洛伊德",
    "alias": "精神分析的创立者",
    "era": "modern",
    "period": "奥地利·20世纪初",
    "summary": "以无意识的发现彻底改变了人类对自我的理解，将梦、欲望和童年创伤纳入理性的分析范围。",
    "life": "摩拉维亚犹太人家庭，维也纳大学医学博士。纳粹上台后流亡伦敦。",
    "context": "维多利亚时代的性压抑与理性主义自信在歇斯底里面前双双失效。",
    "style": [
      "以个案研究展开理论",
      "大胆推论与自我修正并行"
    ],
    "ideas": [
      "无意识",
      "俄狄浦斯情结",
      "梦是愿望的满足"
    ],
    "works": [
      {
        "title": "梦的解析",
        "year": "1900",
        "intro": "将梦定义为通往无意识的王道。"
      },
      {
        "title": "文明及其不满",
        "year": "1930",
        "intro": "文明本身以压抑本能欲望为代价。"
      }
    ],
    "links": [
      [
        "nietzsche",
        "无意识的哲学先驱"
      ],
      [
        "kafka",
        "精神分析时代的文学表达"
      ]
    ],
    "subjects": [
      "philosophy",
      "sociology"
    ]
  },
  {
    "id": "chekhov",
    "subject": "literature",
    "region": "world",
    "year": 1900,
    "dates": "1860—1904",
    "name": "安东·契诃夫",
    "alias": "短篇小说的大师",
    "era": "modern",
    "period": "俄罗斯帝国·19世纪末",
    "summary": "以《樱桃园》和数百篇短篇小说将\"无事发生\"变成最高级的叙事，让表面平静的生活下暗流涌动。",
    "life": "亚速海边塔甘罗格人，祖父是农奴。一边行医一边写作，四十四岁死于肺结核。",
    "context": "俄国农奴制改革后的社会转型期，日常生活中充满了未被言说的变化。",
    "style": [
      "简洁到极致的叙事",
      "以细节暗示代替明确表达"
    ],
    "ideas": [
      "短篇小说的现代性",
      "平凡中的悲剧"
    ],
    "works": [
      {
        "title": "樱桃园",
        "year": "1904",
        "intro": "樱桃园被拍卖，旧时代正在消逝。"
      },
      {
        "title": "套中人",
        "year": "1898",
        "intro": "以别里科夫写出对变化的恐惧。"
      }
    ],
    "links": [
      [
        "tolstoy",
        "俄罗斯写实传统的传承"
      ],
      [
        "kafka",
        "从契诃夫到卡夫卡的现代转型"
      ]
    ],
    "subjects": [
      "literature"
    ]
  },
  {
    "id": "cezanne",
    "subject": "history",
    "region": "world",
    "year": 1900,
    "dates": "1839—1906",
    "name": "保罗·塞尚",
    "alias": "现代绘画之父",
    "era": "modern",
    "period": "法国",
    "summary": "以圣维克多山系列将自然简化为圆柱球体和圆锥预告了立体主义和全部现代艺术。",
    "life": "法国普罗旺斯人一生不为巴黎承认晚年孤独作画。",
    "context": "后印象派需要超越印象派的瞬间感寻找更坚实的结构。",
    "style": [
      "将自然几何化"
    ],
    "ideas": [
      "用色彩重建坚固的世界"
    ],
    "works": [
      {
        "title": "圣维克多山系列",
        "year": "1882—1906",
        "intro": "以同一座山画了80余次探索形式与色彩的根本关系。"
      }
    ],
    "links": [
      [
        "picasso",
        "从塞尚到立体主义"
      ]
    ],
    "subjects": [
      "history"
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
    "id": "einstein",
    "subject": "history",
    "region": "world",
    "year": 1905,
    "dates": "1879—1955",
    "name": "阿尔伯特·爱因斯坦",
    "alias": "世纪的科学巨人",
    "era": "modern",
    "period": "德国—美国·20世纪",
    "summary": "以狭义和广义相对论彻底改变了人类对时空的理解，E=mc2成为20世纪的标志性符号。",
    "life": "德国乌尔姆人，1905年在专利局做职员时发表四篇改变物理学的论文。因纳粹上台移民美国。",
    "context": "20世纪初物理学面临危机，传统时空观无法解释新的实验结果。",
    "style": [
      "思想实验",
      "以简单原理推导深远结论"
    ],
    "ideas": [
      "想象力比知识更重要",
      "上帝不掷骰子"
    ],
    "works": [
      {
        "title": "论动体的电动力学",
        "year": "1905",
        "intro": "狭义相对论的奠基论文。"
      },
      {
        "title": "广义相对论的基础",
        "year": "1916",
        "intro": "将引力解释为时空的弯曲。"
      }
    ],
    "links": [
      [
        "galilei",
        "从伽利略到爱因斯坦的科学革命"
      ]
    ],
    "subjects": [
      "history",
      "philosophy"
    ]
  },
  {
    "id": "picasso",
    "subject": "literature",
    "region": "world",
    "year": 1907,
    "dates": "1881—1973",
    "name": "巴勃罗·毕加索",
    "alias": "20世纪艺术革命者",
    "era": "modern",
    "period": "西班牙",
    "summary": "以《亚威农少女》打破五百年的透视传统创立立体主义。",
    "life": "西班牙马拉加人一生变换多种风格从不停歇。",
    "context": "20世纪初艺术需要彻底打破传统的勇气。",
    "style": [
      "立体主义开创"
    ],
    "ideas": [
      "艺术不是模仿而是创造"
    ],
    "works": [
      {
        "title": "亚威农少女",
        "year": "1907",
        "intro": "以多角度同时呈现打破单一视点。"
      },
      {
        "title": "格尔尼卡",
        "year": "1937",
        "intro": "以黑白灰三色控诉战争暴行。"
      }
    ],
    "links": [
      [
        "cezanne",
        "从塞尚到毕加索视觉革命"
      ]
    ],
    "subjects": [
      "literature"
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
    "id": "wangguowei",
    "subject": "philosophy",
    "region": "china",
    "year": 1910,
    "dates": "1877—1927",
    "name": "王国维",
    "alias": "中西学术汇通的典范",
    "era": "modern",
    "period": "清末—民国",
    "summary": "以《人间词话》境界说重新定义中国诗学，以甲骨文研究开创二重证据法，在文学、哲学、史学均达巅峰。",
    "life": "浙江海宁人，清末秀才。曾任清华国学院导师，1927年自沉于昆明湖。",
    "context": "西学涌入，传统学术面临如何与西方对话又保持独立的问题。",
    "style": [
      "中西学术的深度融合",
      "以哲学眼光审视文学"
    ],
    "ideas": [
      "境界说",
      "古今之成大事业者必经过三种之境界"
    ],
    "works": [
      {
        "title": "人间词话",
        "year": "1908",
        "intro": "以境界为核心概念建立词学批评体系。"
      },
      {
        "title": "殷周制度论",
        "year": "1917",
        "intro": "以甲骨与文献互证殷周之变。"
      }
    ],
    "links": [
      [
        "simaqian",
        "两千年的史学对话"
      ],
      [
        "kant",
        "中西哲学的交汇"
      ]
    ],
    "subjects": [
      "philosophy",
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
    "id": "proust",
    "subject": "literature",
    "region": "world",
    "year": 1913,
    "dates": "1871—1922",
    "name": "马塞尔·普鲁斯特",
    "alias": "时间的小说家",
    "era": "modern",
    "period": "法国·20世纪初",
    "summary": "以七卷《追忆逝水年华》将全部人生变成一块玛德琳蛋糕的气味所引发的叙事洪流，重新定义了时间与记忆。",
    "life": "巴黎富家子弟，从小体弱。母亲去世后深居软木衬壁的房间，在床上完成巨著。",
    "context": "一战前后的法国，旧时代的沙龙文化正在消逝，时间本身成为小说的主角。",
    "style": [
      "长句的绵延与盘旋",
      "非自主记忆的发掘",
      "一个上流社会的完整标本"
    ],
    "ideas": [
      "逝去的时间可以在艺术中重新找回",
      "真正的天堂是已经失去的天堂"
    ],
    "works": [
      {
        "title": "追忆逝水年华",
        "year": "1913—1927",
        "intro": "七卷以斯万家那边和盖尔芒特家那边为两极重建整个失去的世界。"
      }
    ],
    "links": [
      [
        "woolf",
        "时间的两种文学处理"
      ],
      [
        "caoxueqin",
        "家族记忆作为长河叙事的跨文化对照"
      ]
    ],
    "subjects": [
      "literature",
      "philosophy"
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
    "id": "duchamp",
    "subject": "history",
    "region": "world",
    "year": 1917,
    "dates": "1887—1968",
    "name": "马塞尔·杜尚",
    "alias": "艺术定义者",
    "era": "modern",
    "period": "法国—美国",
    "summary": "以一个小便池彻底质问什么才是艺术将艺术从视网膜转向大脑。",
    "life": "法国人在纽约以现成品动摇全部艺术制度晚年宣称放弃艺术而秘密创作最后作品。",
    "context": "一战后的虚无主义中艺术的边界本身成为唯一有趣的问题。",
    "style": [
      "现成品颠覆艺术定义"
    ],
    "ideas": [
      "艺术是选择不是制作"
    ],
    "works": [
      {
        "title": "泉",
        "year": "1917",
        "intro": "以署名R.Mutt的小便池参展被拒成为20世纪最重要艺术品争论。"
      }
    ],
    "links": [
      [
        "picasso",
        "从重构视觉到质疑艺术本身"
      ]
    ],
    "subjects": [
      "history"
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
    "id": "sant",
    "subject": "politics",
    "region": "world",
    "year": 1918,
    "dates": "1889—1945",
    "name": "瓦尔特·本雅明",
    "alias": "现代性与文化批判的独特声音",
    "era": "modern",
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
    "id": "hushi",
    "subject": "philosophy",
    "region": "china",
    "year": 1919,
    "dates": "1891—1962",
    "name": "胡适",
    "alias": "新文化运动的旗手",
    "era": "modern",
    "period": "民国",
    "summary": "以\"大胆假设、小心求证\"的科学方法，推动白话文运动、整理国故和自由主义在中国的传播。",
    "life": "安徽绩溪人，留美师从杜威。任北大教授，主编《新青年》。",
    "context": "新文化运动需要同时解决说什么和怎么说两个问题。",
    "style": [
      "清晰说理的散文风格",
      "以科学方法整理国故"
    ],
    "ideas": [
      "大胆假设、小心求证",
      "健全的个人主义"
    ],
    "works": [
      {
        "title": "文学改良刍议",
        "year": "1917",
        "intro": "提出八不主义，为白话文运动发出第一声号角。"
      },
      {
        "title": "中国哲学史大纲",
        "year": "1919",
        "intro": "开创中国哲学史写作的新范式。"
      }
    ],
    "links": [
      [
        "liangqichao",
        "从新民到新文化"
      ],
      [
        "luxun",
        "新文化运动的两条路径"
      ]
    ],
    "subjects": [
      "philosophy",
      "literature",
      "history"
    ]
  },
  {
    "id": "zhuxiqing",
    "subject": "literature",
    "region": "china",
    "year": 1920,
    "dates": "1898—1948",
    "name": "朱自清",
    "alias": "白话美文的典范",
    "era": "modern",
    "period": "民国",
    "summary": "以《背影》《荷塘月色》将白话文提升到可以承载最深情的文学高度。",
    "life": "江苏东海人，北大毕业。清华教授，抗战期间在西南联大任教。以胃病拒绝领取美国救济粮而死。",
    "context": "新文学需要证明白话文不仅可以呐喊，也可以低语和抒情。",
    "style": [
      "朴素而深情的散文语言",
      "以细节承载情感"
    ],
    "ideas": [
      "白话文的美学可能性"
    ],
    "works": [
      {
        "title": "背影",
        "year": "1925",
        "intro": "以父亲穿过铁轨买橘子的背影，写出中国文学中最动人的父子情。"
      },
      {
        "title": "荷塘月色",
        "year": "1927",
        "intro": "以月下荷塘的静美写知识分子的精神困境。"
      }
    ],
    "links": [
      [
        "luxun",
        "白话文学的两种可能"
      ]
    ],
    "subjects": [
      "literature"
    ]
  },
  {
    "id": "zhuziqing",
    "subject": "literature",
    "region": "china",
    "year": 1920,
    "dates": "1898—1948",
    "name": "朱自清",
    "alias": "白话美文典范",
    "period": "民国",
    "summary": "以《背影》《荷塘月色》将白话文提升到可以承载最深情的文学高度。",
    "life": "江苏东海人北大毕业清华教授抗战期间在西南联大任教。",
    "context": "新文学需要证明白话文不仅可以呐喊也可以低语和抒情。",
    "style": [
      "朴素深情散文语言"
    ],
    "ideas": [
      "白话文美学可能性"
    ],
    "works": [
      {
        "title": "背影",
        "year": "1925",
        "intro": "以父亲穿过铁轨买橘子的背影写出中国文学中最动人父子情。"
      },
      {
        "title": "荷塘月色",
        "year": "1927",
        "intro": "以月下荷塘静美写知识分子精神困境。"
      }
    ],
    "links": [
      [
        "luxun",
        "白话文学两种可能"
      ]
    ],
    "subjects": [
      "literature"
    ],
    "era": "modern"
  },
  {
    "id": "wittgenstein",
    "subject": "philosophy",
    "region": "world",
    "year": 1921,
    "dates": "1889—1951",
    "name": "路德维希·维特根斯坦",
    "alias": "语言哲学的转向者",
    "era": "modern",
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
    "id": "schmitt",
    "subject": "politics",
    "region": "world",
    "year": 1922,
    "dates": "1888—1985",
    "name": "卡尔·施密特",
    "alias": "主权与政治概念的理论家",
    "era": "modern",
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
    "id": "jamesjoyce",
    "subject": "literature",
    "region": "world",
    "year": 1922,
    "dates": "1882—1941",
    "name": "詹姆斯·乔伊斯",
    "alias": "现代主义小说的革命者",
    "era": "modern",
    "period": "爱尔兰·20世纪",
    "summary": "以《尤利西斯》将一天都柏林的漫游写成意识流百科全书，让小说从此不再只是\"讲故事\"。",
    "life": "都柏林人，自我流放至巴黎、苏黎世、的里雅斯特。晚年几乎完全失明。",
    "context": "一战打破了维多利亚时代的一切确定性，包括小说的叙述方式。",
    "style": [
      "意识流的极致运用",
      "语言游戏与多层能指",
      "以个人写尽人类经验"
    ],
    "ideas": [
      "把都柏林变成世界的缩影",
      "小说的可能性尚未穷尽"
    ],
    "works": [
      {
        "title": "尤利西斯",
        "year": "1922",
        "intro": "以900页写1904年6月16日都柏林的三个普通人的内心世界。"
      },
      {
        "title": "都柏林人",
        "year": "1914",
        "intro": "十五篇短篇写都柏林人的精神瘫痪。"
      }
    ],
    "links": [
      [
        "homer",
        "从史诗到现代反史诗"
      ],
      [
        "woolf",
        "意识流的英爱双峰"
      ]
    ],
    "subjects": [
      "literature"
    ]
  },
  {
    "id": "joyce",
    "subject": "literature",
    "region": "world",
    "year": 1922,
    "dates": "1882—1941",
    "name": "詹姆斯·乔伊斯",
    "alias": "现代主义小说革命者",
    "period": "爱尔兰",
    "summary": "以《尤利西斯》将一天都柏林漫游写成意识流百科全书。",
    "life": "都柏林人自我流放至巴黎苏黎世晚年几乎失明。",
    "context": "一战打破维多利亚时代一切确定性。",
    "style": [
      "意识流极致运用"
    ],
    "ideas": [
      "小说可能性尚未穷尽"
    ],
    "works": [
      {
        "title": "尤利西斯",
        "year": "1922",
        "intro": "以900页写1904年6月16日都柏林三个普通人内心世界。"
      }
    ],
    "links": [
      [
        "homer",
        "从史诗到现代反史诗"
      ]
    ],
    "subjects": [
      "literature"
    ],
    "era": "modern"
  },
  {
    "id": "heidegger",
    "subject": "philosophy",
    "region": "world",
    "year": 1927,
    "dates": "1889—1976",
    "name": "马丁·海德格尔",
    "alias": "存在主义与现象学的革新者",
    "era": "modern",
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
    "id": "woolf",
    "subject": "literature",
    "region": "world",
    "year": 1927,
    "dates": "1882—1941",
    "name": "弗吉尼亚·伍尔夫",
    "alias": "意识流与现代女性写作",
    "era": "modern",
    "period": "英国·20世纪",
    "summary": "以《达洛维夫人》《到灯塔去》将小说从外部事件转向内心时间的流动，同时以《一间自己的房间》为女性写作争取空间。",
    "life": "伦敦人，布鲁姆斯伯里团体的核心成员。一生与精神疾病搏斗，1941年投河自尽。",
    "context": "一战后的英国，传统叙事和性别秩序都在瓦解。",
    "style": [
      "意识流的诗化叙事",
      "以内心时间替代钟表时间"
    ],
    "ideas": [
      "女人需要一间自己的房间和五百英镑",
      "安魂曲式的现代主义"
    ],
    "works": [
      {
        "title": "达洛维夫人",
        "year": "1925",
        "intro": "以一天的散步串联过去与现在，写尽一个中年女人的全部人生。"
      },
      {
        "title": "一间自己的房间",
        "year": "1929",
        "intro": "从莎士比亚的妹妹假设出发论证女性写作的物质条件。"
      }
    ],
    "links": [
      [
        "janeausten",
        "女性写作的两百年"
      ],
      [
        "proust",
        "意识流的英法双峰"
      ]
    ],
    "subjects": [
      "literature",
      "philosophy"
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
    "era": "modern",
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
    "id": "mannheim",
    "subject": "sociology",
    "region": "world",
    "year": 1929,
    "dates": "1893—1947",
    "name": "卡尔·曼海姆",
    "alias": "知识社会学的开创者",
    "era": "modern",
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
    "id": "gandhi",
    "subject": "politics",
    "region": "world",
    "year": 1930,
    "dates": "1869—1948",
    "name": "莫罕达斯·甘地",
    "alias": "非暴力抵抗的圣人",
    "era": "modern",
    "period": "印度·20世纪",
    "summary": "以非暴力不合作运动领导印度独立，将\"坚持真理\"从个人修养变成改变世界的政治技术。",
    "life": "印度古吉拉特人，留学英国成为律师，在南非开始民权活动。回国后领导国大党，1948年被印度教极端分子刺杀。",
    "context": "大英帝国在印度的统治面临挑战，暴力革命之外是否存在另一条路。",
    "style": [
      "以身体作为政治武器",
      "简洁的道德语言"
    ],
    "ideas": [
      "非暴力（ahimsa）",
      "坚持真理（satyagraha）",
      "成为你希望在世界上看到的改变"
    ],
    "works": [
      {
        "title": "甘地自传",
        "year": "1925",
        "intro": "以\"我体验真理的故事\"为副标题的精神自传。"
      }
    ],
    "links": [
      [
        "thoreau",
        "公民不服从的全球实践"
      ],
      [
        "marcusaurelius",
        "东西方的精神修炼"
      ]
    ],
    "subjects": [
      "politics",
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
    "era": "modern",
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
    "id": "kelsen",
    "subject": "law",
    "region": "world",
    "year": 1934,
    "dates": "1881—1973",
    "name": "汉斯·凯尔森",
    "alias": "纯粹法学的体系建构者",
    "era": "modern",
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
    "id": "shencongwen",
    "subject": "literature",
    "region": "china",
    "year": 1934,
    "dates": "1902—1988",
    "name": "沈从文",
    "alias": "湘西世界的建造者",
    "era": "modern",
    "period": "民国—新中国",
    "summary": "以湘西边地为原型，创造出都市文明之外的希腊小庙，在其中供奉人性。",
    "life": "湖南凤凰人，苗族。十五岁从军，二十岁到北京写作。1949年后转向古代服饰研究。",
    "context": "现代都市文明冲击下，乡土中国需要在文学中保存正在消失的世界。",
    "style": [
      "抒情诗般的小说语言",
      "对乡土世界的深情眷恋"
    ],
    "ideas": [
      "建造人性的希腊小庙",
      "边城作为乡愁的永恒意象"
    ],
    "works": [
      {
        "title": "边城",
        "year": "1934",
        "intro": "以湘西茶峒写翠翠与傩送的爱情，是中国乡土文学最高成就。"
      },
      {
        "title": "中国古代服饰研究",
        "year": "1981",
        "intro": "以文物文献互证梳理历代服饰演变。"
      }
    ],
    "links": [
      [
        "luxun",
        "乡土中国的两条文学道路"
      ]
    ],
    "subjects": [
      "literature",
      "history"
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
    "id": "merton",
    "subject": "sociology",
    "region": "world",
    "year": 1936,
    "dates": "1910—2003",
    "name": "罗伯特·K·默顿",
    "alias": "科学社会学与中层理论的倡导者",
    "era": "modern",
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
    "id": "laoshe",
    "subject": "literature",
    "region": "china",
    "year": 1937,
    "dates": "1899—1966",
    "name": "老舍",
    "alias": "北京市民社会的书写者",
    "era": "modern",
    "period": "民国—新中国",
    "summary": "以纯熟的北京方言和深沉的幽默感，写出老北京底层人物的尊严与悲哀。",
    "life": "北京满族正红旗人。早年任小学校长，后赴英任教并开始写作。",
    "context": "北京从帝都到现代都市的转型中，底层市民的生活成为文学新主题。",
    "style": [
      "京味语言的炉火纯青",
      "以幽默包裹悲剧"
    ],
    "ideas": [
      "城市的记忆与变迁",
      "底层人民的生命韧性"
    ],
    "works": [
      {
        "title": "骆驼祥子",
        "year": "1936",
        "intro": "以人力车夫祥子的三起三落写出底层悲剧。"
      },
      {
        "title": "四世同堂",
        "year": "1948",
        "intro": "以小羊圈胡同展现沦陷八年间的选择与坚守。"
      }
    ],
    "links": [
      [
        "luxun",
        "从国民性批判到市井写实"
      ]
    ],
    "subjects": [
      "literature",
      "sociology"
    ]
  },
  {
    "id": "linyutang",
    "subject": "literature",
    "region": "china",
    "year": 1937,
    "dates": "1895—1976",
    "name": "林语堂",
    "alias": "中西文化的摆渡人",
    "era": "modern",
    "period": "民国—海外",
    "summary": "以英文写作向西方介绍中国文化，以中文随笔向中国介绍西方幽默，\"两脚踏东西文化，一心评宇宙文章\"。",
    "life": "福建龙溪人，留美留德。与鲁迅由合作到分歧，后长期旅居美国。发明中文打字机。",
    "context": "二十世纪中西文化交流最活跃的时期，需要能用双方语言写作的摆渡人。",
    "style": [
      "幽默闲适的散文风格",
      "以西方视角重新发现中国"
    ],
    "ideas": [
      "性灵与幽默",
      "生活的艺术"
    ],
    "works": [
      {
        "title": "吾国与吾民",
        "year": "1935",
        "intro": "向西方全面介绍中国文化。"
      },
      {
        "title": "京华烟云",
        "year": "1939",
        "intro": "以英文写出中国的家族史诗，获诺贝尔文学奖提名。"
      }
    ],
    "links": [
      [
        "luxun",
        "散文的两条道路"
      ],
      [
        "sushi",
        "性灵文学的传承"
      ]
    ],
    "subjects": [
      "literature",
      "philosophy"
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
    "era": "modern",
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
    "id": "borges",
    "subject": "literature",
    "region": "world",
    "year": 1941,
    "dates": "1899—1986",
    "name": "博尔赫斯",
    "alias": "迷宫与镜子的制造者",
    "era": "modern",
    "period": "阿根廷·20世纪",
    "summary": "以图书馆、迷宫、镜子和无限分岔的时间为基本意象，将短篇小说变成哲学思想实验的艺术。",
    "life": "布宜诺斯艾利斯人，在父亲图书室中长大。失明后任阿根廷国家图书馆馆长。",
    "context": "两次大战后的思想危机和拉美文学身份探索，产生了既超越地域又深植传统的写作。",
    "style": [
      "以假乱真的学术化叙事",
      "迷宫、镜子和图书馆的核心意象"
    ],
    "ideas": [
      "无限的图书馆",
      "小径分岔的花园——时间作为迷宫"
    ],
    "works": [
      {
        "title": "虚构集",
        "year": "1944",
        "intro": "每篇都是一个微缩的形而上学实验。"
      },
      {
        "title": "小径分岔的花园",
        "year": "1941",
        "intro": "以间谍故事为外壳探讨时间的分岔。"
      }
    ],
    "links": [
      [
        "kafka",
        "现代主义短篇的两种范式"
      ],
      [
        "marquez",
        "博尔赫斯与拉美文学爆炸"
      ]
    ],
    "subjects": [
      "literature",
      "philosophy"
    ]
  },
  {
    "id": "camus",
    "subject": "literature",
    "region": "world",
    "year": 1942,
    "dates": "1913—1960",
    "name": "阿尔贝·加缪",
    "alias": "荒诞的哲学家-作家",
    "era": "modern",
    "period": "法国·20世纪",
    "summary": "以西西弗神话定义荒诞，并在没有上帝的世界里坚持寻找人的尊严和反抗的理由。",
    "life": "阿尔及利亚法裔后裔。二战参加抵抗运动，主编《战斗报》。1957年获诺贝尔文学奖。",
    "context": "纳粹占领和战后幻灭使\"生命是否有意义\"从哲学问题变成了日常经验。",
    "style": [
      "哲学与文学的深度融合",
      "地中海式的阳光与悲剧并存"
    ],
    "ideas": [
      "荒诞：世界与人心之间的断裂",
      "应当想象西西弗是幸福的"
    ],
    "works": [
      {
        "title": "局外人",
        "year": "1942",
        "intro": "以默尔索的故事讨论在一个不承认个人真实感受的社会中诚实如何成为罪行。"
      },
      {
        "title": "西西弗神话",
        "year": "1942",
        "intro": "如果人生是荒诞的，自杀是唯一的答案吗？"
      }
    ],
    "links": [
      [
        "sartre",
        "存在主义的两位旗手"
      ],
      [
        "kafka",
        "荒诞文学的传承"
      ]
    ],
    "subjects": [
      "literature",
      "philosophy"
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
    "era": "modern",
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
    "id": "zhangailing",
    "subject": "literature",
    "region": "china",
    "year": 1944,
    "dates": "1920—1995",
    "name": "张爱玲",
    "alias": "乱世中的苍凉美学",
    "era": "modern",
    "period": "民国",
    "summary": "以冷峻而华美的笔触，写出半殖民地都市中男女之间最精微的情感计算与最苍凉的生命底色。",
    "life": "生于上海，李鸿章曾外孙女。1943年以《沉香屑》一夜成名。1952年去香港，后移居美国。",
    "context": "沦陷时期的上海，宏大叙事都显虚幻，日常细节成为最可靠的真实。",
    "style": [
      "华丽而苍凉的文风",
      "以日常细节写时代悲剧"
    ],
    "ideas": [
      "生命是一袭华美的袍，爬满了蚤子"
    ],
    "works": [
      {
        "title": "金锁记",
        "year": "1943",
        "intro": "曹七巧被金钱欲望扭曲的一生。"
      },
      {
        "title": "倾城之恋",
        "year": "1943",
        "intro": "一座城市的沦陷成就一段姻缘。"
      }
    ],
    "links": [
      [
        "caoxueqin",
        "从红楼梦到苍凉美学的继承"
      ]
    ],
    "subjects": [
      "literature"
    ]
  },
  {
    "id": "hayek",
    "subject": "politics",
    "region": "world",
    "year": 1944,
    "dates": "1899—1992",
    "name": "弗里德里希·哈耶克",
    "alias": "自由秩序的捍卫者",
    "era": "modern",
    "period": "奥地利—英国·20世纪",
    "summary": "以《通往奴役之路》警告计划经济的极权危险，以\"自发秩序\"概念论证自由社会的知识基础。",
    "life": "维也纳人，师从米塞斯。二战期间在英国任教，后赴芝加哥大学。1974年获诺贝尔经济学奖。",
    "context": "战后各国纷纷扩大政府干预，计划经济的吸引力达到顶峰。",
    "style": [
      "清晰有力的公共写作",
      "以经济学论证政治自由"
    ],
    "ideas": [
      "分散知识",
      "自发秩序"
    ],
    "works": [
      {
        "title": "通往奴役之路",
        "year": "1944",
        "intro": "论证集中计划不可避免地导致个人自由的丧失。"
      },
      {
        "title": "自由宪章",
        "year": "1960",
        "intro": "系统阐述自由社会的法治、经济与制度基础。"
      }
    ],
    "links": [
      [
        "marx",
        "计划与市场的思想对决"
      ],
      [
        "orwell",
        "自由的两种捍卫方式"
      ]
    ],
    "subjects": [
      "politics",
      "sociology",
      "philosophy"
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
    "era": "modern",
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
    "id": "popper",
    "subject": "philosophy",
    "region": "world",
    "year": 1945,
    "dates": "1902—1994",
    "name": "卡尔·波普尔",
    "alias": "开放社会的捍卫者",
    "era": "modern",
    "period": "奥地利—英国·20世纪",
    "summary": "以\"可证伪性\"划出科学与伪科学的边界，以《开放社会及其敌人》将柏拉图、黑格尔、马克思列为极权主义的思想源头。",
    "life": "维也纳人，纳粹上台后流亡新西兰，后赴伦敦政治经济学院任教。",
    "context": "二战中流亡知识分子的亲身经历，需要为自由社会建立哲学辩护。",
    "style": [
      "清晰有力的论证",
      "以可证伪性作为科学标准"
    ],
    "ideas": [
      "开放社会",
      "证伪主义",
      "零星社会工程"
    ],
    "works": [
      {
        "title": "开放社会及其敌人",
        "year": "1945",
        "intro": "批判从柏拉图到马克思的\"封闭社会\"思想传统。"
      },
      {
        "title": "科学发现的逻辑",
        "year": "1934",
        "intro": "提出证伪作为科学与伪科学的划界标准。"
      }
    ],
    "links": [
      [
        "hayek",
        "开放社会的两位奥地利捍卫者"
      ],
      [
        "plato",
        "对柏拉图的现代批判"
      ]
    ],
    "subjects": [
      "philosophy",
      "politics"
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
    "id": "qianzhongshu",
    "subject": "literature",
    "region": "china",
    "year": 1947,
    "dates": "1910—1998",
    "name": "钱钟书",
    "alias": "学贯中西的文学巨匠",
    "era": "contemporary",
    "period": "20世纪中国",
    "summary": "以《围城》的讽刺智慧和《管锥编》的浩瀚学识，在分裂时代坚持打通中西文化的学术理想。",
    "life": "江苏无锡人，清华毕业，留学牛津巴黎。回国后任教西南联大等多所大学。",
    "context": "\"有用的知识\"成为主流，钱钟书选择走\"不通\"的学术小道。",
    "style": [
      "以讽刺智慧写知识分子困境",
      "打通中西的学术方法"
    ],
    "ideas": [
      "围城：人生的困境与突围",
      "东海西海，心理攸同"
    ],
    "works": [
      {
        "title": "围城",
        "year": "1947",
        "intro": "以幽默犀利的笔法写抗战初期知识分子的种种窘境。"
      },
      {
        "title": "管锥编",
        "year": "1979",
        "intro": "以札记形式对十部中国经典进行跨文化解读。"
      }
    ],
    "links": [
      [
        "luxun",
        "讽刺文学的两座高峰"
      ]
    ],
    "subjects": [
      "literature",
      "philosophy"
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
    "id": "orwell",
    "subject": "literature",
    "region": "world",
    "year": 1949,
    "dates": "1903—1950",
    "name": "乔治·奥威尔",
    "alias": "反极权的先知",
    "era": "contemporary",
    "period": "英国·20世纪",
    "summary": "以《动物农场》和《1984》将极权主义逻辑推到极致，其\"老大哥\"和\"新话\"成为人类政治词汇的永久组成部分。",
    "life": "生于英属印度，伊顿公学毕业。参加西班牙内战后对苏联彻底失望。死前一年在肺结核中完成《1984》。",
    "context": "二战后的冷战格局让对极权主义的警惕成为紧迫问题。",
    "style": [
      "以寓言和科幻写政治批判",
      "清晰到透明的英语散文"
    ],
    "ideas": [
      "谁控制过去就控制未来，谁控制现在就控制过去",
      "政治语言的功能是让谎言听起来真实"
    ],
    "works": [
      {
        "title": "1984",
        "year": "1949",
        "intro": "以温斯顿·史密斯在真理部的日常展示全面监控下的生存与反叛。"
      },
      {
        "title": "动物农场",
        "year": "1945",
        "intro": "以农场动物革命为寓言，写出革命如何被革命者自己背叛。"
      }
    ],
    "links": [
      [
        "arendt",
        "极权主义分析的文学与哲学双翼"
      ]
    ],
    "subjects": [
      "literature",
      "politics",
      "philosophy"
    ]
  },
  {
    "id": "simone",
    "subject": "philosophy",
    "region": "world",
    "year": 1949,
    "dates": "1908—1986",
    "name": "西蒙娜·德·波伏娃",
    "alias": "第二性的作者",
    "period": "法国",
    "summary": "女人不是天生的而是后天成为的。",
    "life": "巴黎人，萨特的终身伴侣。",
    "context": "战后欧洲女性刚刚获得选举权。",
    "style": [
      "存在主义性别分析"
    ],
    "ideas": [
      "女人不是天生的而是成为的"
    ],
    "works": [
      {
        "title": "第二性",
        "year": "1949",
        "intro": "两卷本从多学科分析女性处境。"
      }
    ],
    "links": [
      [
        "sartre",
        "存在主义的伴侣"
      ],
      [
        "woolf",
        "女性写作的两座里程碑"
      ]
    ],
    "subjects": [
      "philosophy",
      "literature",
      "sociology"
    ],
    "era": "contemporary"
  },
  {
    "id": "neruda",
    "subject": "literature",
    "region": "world",
    "year": 1950,
    "dates": "1904—1973",
    "name": "巴勃罗·聂鲁达",
    "alias": "拉丁美洲的声音",
    "era": "contemporary",
    "period": "智利·20世纪",
    "summary": "以《二十首情诗》和《漫歌》将爱情、政治和美洲大陆的历史编织为20世纪最丰沛的抒情诗。",
    "life": "智利帕拉尔人，早年任外交官。1971年获诺贝尔文学奖，两年后在皮诺切特政变后不久死于癌症。",
    "context": "拉美大陆在殖民、革命与发展之间寻找自己的声音。",
    "style": [
      "丰沛的意象与激情",
      "政治与诗的统一"
    ],
    "ideas": [
      "爱是短暂的遗忘与漫长的回归"
    ],
    "works": [
      {
        "title": "二十首情诗和一支绝望的歌",
        "year": "1924",
        "intro": "以青年时代的爱情写出拉美诗歌最畅销的作品。"
      },
      {
        "title": "漫歌",
        "year": "1950",
        "intro": "以美洲大陆的历史为主题的长诗集。"
      }
    ],
    "links": [
      [
        "whitman",
        "美洲大地的两位诗人"
      ]
    ],
    "subjects": [
      "literature",
      "politics"
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
    "id": "beckett",
    "subject": "literature",
    "region": "world",
    "year": 1953,
    "dates": "1906—1989",
    "name": "塞缪尔·贝克特",
    "alias": "等待的剧作家",
    "era": "contemporary",
    "period": "爱尔兰—法国·20世纪",
    "summary": "以《等待戈多》将人类处境简化为两个流浪汉在路边等待一个永远不会来的人，道出战后最根本的荒诞。",
    "life": "都柏林人，乔伊斯的秘书和朋友。二战参加法国抵抗运动，后用法语和英语双语写作。",
    "context": "大屠杀和原子弹之后，语言还能说什么？贝克特的回答是：越少越好。",
    "style": [
      "极简主义的极致",
      "以沉默和停顿说话",
      "悲喜剧的完美平衡"
    ],
    "ideas": [
      "我们必须等待",
      "失败得更好"
    ],
    "works": [
      {
        "title": "等待戈多",
        "year": "1953",
        "intro": "两个流浪汉在路边等待戈多，戈多始终没有来。"
      },
      {
        "title": "终局",
        "year": "1957",
        "intro": "四个残废角色在末日般的房间里，语言只剩下碎片。"
      }
    ],
    "links": [
      [
        "camus",
        "荒诞的两种表达"
      ],
      [
        "kafka",
        "等待与审判"
      ]
    ],
    "subjects": [
      "literature",
      "philosophy"
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
    "id": "levistrauss",
    "subject": "sociology",
    "region": "world",
    "year": 1955,
    "dates": "1908—2009",
    "name": "克洛德·列维-斯特劳斯",
    "alias": "结构人类学创立者",
    "period": "法国",
    "summary": "以《忧郁的热带》和神话研究将人类学转向对人类心灵普遍结构的探寻。",
    "life": "比利时出生，法国求学。二战流亡纽约催生了结构主义。",
    "context": "战后殖民体系崩塌人类学需要新的框架。",
    "style": [
      "将神话作为心灵结构的密码"
    ],
    "ideas": [
      "野性的思维"
    ],
    "works": [
      {
        "title": "忧郁的热带",
        "year": "1955",
        "intro": "以自传民族志哲学三合一的文体写旅行与沉思。"
      }
    ],
    "links": [
      [
        "foucault",
        "结构主义的两位巨人"
      ]
    ],
    "subjects": [
      "sociology",
      "philosophy"
    ],
    "era": "contemporary"
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
    "id": "chomsky",
    "subject": "philosophy",
    "region": "world",
    "year": 1957,
    "dates": "1928—",
    "name": "诺姆·乔姆斯基",
    "alias": "语言学与政治批判的双面巨人",
    "era": "contemporary",
    "period": "美国·20世纪",
    "summary": "以生成语法革命语言学，以为美国外交政策的持续批判践行\"知识分子的责任\"。",
    "life": "费城人，麻省理工学院教授。早年因反对越战被列入尼克松的敌人名单。",
    "context": "冷战与越战时期，需要同时革新学院学科和公共话语。",
    "style": [
      "形式化的语法理论",
      "对权力的持续批判"
    ],
    "ideas": [
      "语言的天赋性",
      "制造同意"
    ],
    "works": [
      {
        "title": "句法结构",
        "year": "1957",
        "intro": "以生成语法理论彻底改变现代语言学。"
      },
      {
        "title": "制造共识",
        "year": "1988",
        "intro": "与赫尔曼合著，分析大众媒体如何服务于权力。"
      }
    ],
    "links": [
      [
        "foucault",
        "权力的两种分析路径"
      ]
    ],
    "subjects": [
      "philosophy",
      "politics",
      "sociology"
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
    "id": "kuhn",
    "subject": "philosophy",
    "region": "world",
    "year": 1962,
    "dates": "1922—1996",
    "name": "托马斯·库恩",
    "alias": "科学革命的哲学家",
    "period": "美国",
    "summary": "以范式转换彻底改变了我们对科学进步的理解。",
    "life": "物理学家出身转向科学史。",
    "context": "科学哲学需要转向历史研究。",
    "style": [
      "以历史替代逻辑"
    ],
    "ideas": [
      "范式转换",
      "不可通约性"
    ],
    "works": [
      {
        "title": "科学革命的结构",
        "year": "1962",
        "intro": "以范式概念重写科学史。"
      }
    ],
    "links": [
      [
        "popper",
        "科学进步的两种理论"
      ]
    ],
    "subjects": [
      "philosophy",
      "history"
    ],
    "era": "contemporary"
  },
  {
    "id": "friedman",
    "subject": "politics",
    "region": "world",
    "year": 1962,
    "dates": "1912—2006",
    "name": "米尔顿·弗里德曼",
    "alias": "自由市场传道者",
    "period": "美国",
    "summary": "以货币主义深刻影响了20世纪后半叶的全球经济政策。",
    "life": "纽约移民家庭出身，芝加哥大学教授，1976年诺贝尔奖。",
    "context": "战后凯恩斯主义主导。",
    "style": [
      "以数据支撑自由主义政策"
    ],
    "ideas": [
      "自由选择"
    ],
    "works": [
      {
        "title": "资本主义与自由",
        "year": "1962",
        "intro": "论证经济自由是政治自由的必要条件。"
      }
    ],
    "links": [
      [
        "hayek",
        "自由经济思想的两位旗手"
      ]
    ],
    "subjects": [
      "politics",
      "sociology"
    ],
    "era": "contemporary"
  },
  {
    "id": "warhol",
    "subject": "literature",
    "region": "world",
    "year": 1962,
    "dates": "1928—1987",
    "name": "安迪·沃霍尔",
    "alias": "波普艺术教主",
    "era": "contemporary",
    "period": "美国",
    "summary": "以金宝汤罐头和玛丽莲梦露丝网版画将消费社会的图像提升为艺术同时讽刺了艺术的概念。",
    "life": "匹兹堡移民家庭出身在纽约从商业插画起步在银色工厂中制造艺术也制造自己。",
    "context": "消费社会和大众媒体正在重新定义文化和身份。",
    "style": [
      "复制与重复的美学"
    ],
    "ideas": [
      "每个人都能成名十五分钟"
    ],
    "works": [
      {
        "title": "金宝汤罐头",
        "year": "1962",
        "intro": "三十二幅几乎相同的汤罐头画提问什么是原创。"
      },
      {
        "title": "玛丽莲双联画",
        "year": "1962",
        "intro": "以丝网印复制玛丽莲梦露在死亡与名望之间。"
      }
    ],
    "links": [
      [
        "duchamp",
        "从现成品到工厂制品"
      ]
    ],
    "subjects": [
      "literature"
    ]
  },
  {
    "id": "plath",
    "subject": "literature",
    "region": "world",
    "year": 1963,
    "dates": "1932—1963",
    "name": "西尔维亚·普拉斯",
    "alias": "自白派诗人",
    "era": "contemporary",
    "period": "美国",
    "summary": "以《钟形罩》和《爱丽尔》将女性经验精神疾病与死亡意识写成最赤裸的诗歌。",
    "life": "波士顿人剑桥毕业与英国诗人特德·休斯结婚后自杀。",
    "context": "二战后女性开始用诗歌直接表达内心最私密的经验。",
    "style": [
      "自白派的极致坦诚"
    ],
    "ideas": [
      "死亡与重生的循环"
    ],
    "works": [
      {
        "title": "钟形罩",
        "year": "1963",
        "intro": "以自传体小说写女性在精神病院中的挣扎。"
      },
      {
        "title": "爱丽尔",
        "year": "1965",
        "intro": "死后出版的诗集以飞马般速度写尽狂喜与绝望。"
      }
    ],
    "links": [
      [
        "woolf",
        "女性写作从意识流到自白派"
      ]
    ],
    "subjects": [
      "literature"
    ]
  },
  {
    "id": "mcluhan",
    "subject": "sociology",
    "region": "world",
    "year": 1964,
    "dates": "1911—1980",
    "name": "马歇尔·麦克卢汉",
    "alias": "媒介即信息",
    "period": "加拿大",
    "summary": "以媒介即信息和地球村提前半个世纪预言数字时代。",
    "life": "加拿大埃德蒙顿人，剑桥博士。",
    "context": "电视正在改变人类感知世界的方式。",
    "style": [
      "格言式理论写作"
    ],
    "ideas": [
      "媒介即信息",
      "地球村"
    ],
    "works": [
      {
        "title": "理解媒介",
        "year": "1964",
        "intro": "以三十三章分析不同媒介如何重塑人的感知。"
      }
    ],
    "links": [
      [
        "foucault",
        "技术与权力的两位分析者"
      ]
    ],
    "subjects": [
      "sociology",
      "philosophy"
    ],
    "era": "contemporary"
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
    "id": "derrida",
    "subject": "philosophy",
    "region": "world",
    "year": 1967,
    "dates": "1930—2004",
    "name": "雅克·德里达",
    "alias": "解构主义的创始人",
    "era": "contemporary",
    "period": "法国·20世纪",
    "summary": "以\"延异\"和\"解构\"动摇西方形而上学的根基，将文本阅读变成一场对\"在场\"形而上学的持续追问。",
    "life": "阿尔及利亚犹太家庭出身，在巴黎高师师从阿尔都塞。在美国比在法国获得更大影响。",
    "context": "1968年五月风暴后，结构主义的自洽体系受到质疑，需要一种更彻底的批判姿态。",
    "style": [
      "细致的文本解构",
      "对二元对立的颠覆",
      "发明的概念成为思想工具"
    ],
    "ideas": [
      "延异",
      "文本之外无他物",
      "逻各斯中心主义的批判"
    ],
    "works": [
      {
        "title": "论文字学",
        "year": "1967",
        "intro": "提出解构主义的基本概念。"
      },
      {
        "title": "书写与差异",
        "year": "1967",
        "intro": "以论文集形式展开对结构主义的批判。"
      }
    ],
    "links": [
      [
        "heidegger",
        "从存在到解构"
      ],
      [
        "foucault",
        "后结构主义的两种路径"
      ]
    ],
    "subjects": [
      "philosophy",
      "literature"
    ]
  },
  {
    "id": "garcia_marquez",
    "subject": "literature",
    "region": "world",
    "year": 1967,
    "dates": "1927—2014",
    "name": "加夫列尔·加西亚·马尔克斯",
    "alias": "魔幻现实主义代表",
    "era": "contemporary",
    "period": "哥伦比亚",
    "summary": "以百年孤独将家族记忆拉美历史和神话元素织入小说。",
    "life": "哥伦比亚人早年从事新闻工作流亡游历欧洲1982年获诺贝尔奖。",
    "context": "拉美文学爆炸。",
    "style": [
      "魔幻现实主义"
    ],
    "ideas": [
      "拉美孤独与历史循环"
    ],
    "works": [
      {
        "title": "百年孤独",
        "year": "1967",
        "intro": "以马孔多镇和布恩迪亚家族七代人编织创世繁荣与毁灭。"
      }
    ],
    "links": [
      [
        "borges",
        "拉美文学两座高峰"
      ]
    ],
    "subjects": [
      "literature"
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
    "id": "foucault",
    "subject": "philosophy",
    "region": "world",
    "year": 1975,
    "dates": "1926—1984",
    "name": "米歇尔·福柯",
    "alias": "权力与知识关系的考古学家",
    "era": "contemporary",
    "period": "法国·20世纪",
    "summary": "以知识考古学和权力谱系学揭示疯狂、疾病、监狱和性如何被现代制度定义和规训。",
    "life": "法国普瓦提埃人，巴黎高师毕业。任教于法国、突尼斯和美国。1984年因艾滋病去世。",
    "context": "1968年后，结构主义和马克思主义受到挑战，需要新的批判工具。",
    "style": [
      "历史档案的哲学化阅读",
      "以制度分析揭示权力运作"
    ],
    "ideas": [
      "知识即权力",
      "规训社会"
    ],
    "works": [
      {
        "title": "规训与惩罚",
        "year": "1975",
        "intro": "以监狱诞生为个案分析现代权力转型。"
      },
      {
        "title": "词与物",
        "year": "1966",
        "intro": "以人之死的论断分析知识型的历史断裂。"
      }
    ],
    "links": [
      [
        "nietzsche",
        "谱系学方法的继承"
      ],
      [
        "habermas",
        "现代性批判的两条路径"
      ]
    ],
    "subjects": [
      "philosophy",
      "history",
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
  }
];

window.KNOWLEDGE_DATA = { SUBJECTS, PAIRS, BOOKS, ERA_STORIES, AUTHORS }
