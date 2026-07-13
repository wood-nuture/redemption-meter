// ===== 赎身进度条 — 多语言词典 =====
// 结构: LANG[locale][key] = 翻译文本
// 使用: __("key") 或 LANG[_locale]["key"]
// 新增语言只需加一个 locale 条目

var LANG = {
  zh: {
    // ===== 全局 UI =====
    title: "🐱 招财工资表",
    title_row: "今日搬砖收益",
    today_grind: "今日搬砖收益",
    slack_btn: "😴 摸鱼",
    slack_on: "😴 摸鱼中",
    poop_btn: "💩 带薪",
    poop_on: "💩 放松中",
    cd_before: "⏳ 距离上班",
    cd_after: "⏳ 距离下班",
    cd_work: "🕐 已上班",
    cd_slack: "⏸️ 摸鱼中",
    cd_poop: "🚽 放松中",
    cd_rest: "🎉 休息日",
    cd_done: "🎉 已下班！",
    sb_working: "● 搬砖中",
    sb_lunch: "● 午休中",
    sb_before: "● 未开工",
    sb_after: "● 已下班 🎉",
    sb_rest: "● 休息日",
    sb_slack: "● 摸鱼中",
    sb_poop: "● 带薪放松中",

    // ===== 时间 =====
    day_names: ["日","一","二","三","四","五","六"],
    wd_label: "周",

    // ===== 统计 & 工友圈 =====
    workers_1: "👥 全国 ",
    workers_2: " 位工友正在搬砖",
    workers_avg: "📊 今日全国平均时薪 ¥",
    workers_near: "🏢 你的工位附近有 ",
    workers_near2: " 位工友在摸鱼",
    sv_daily: "日薪",
    sv_ps: "每秒",
    sv_month: "月薪",
    att_label: "满勤",

    // ===== 目标系统 =====
    goal_title: "🎯 攒",
    goal_text: "已够 ",
    goal_unit: " 个",
    goal_acc_big: "💡 靠工资攒够需要很久，想加速吗？",
    goal_acc_small: "💡 这个目标不小，有没有想过副业？",
    goal_presets: [
      {n:"🧋 奶茶",u:"杯"},
      {n:"💄 一支口红",u:"支"},
      {n:"💅 美甲",u:"次"},
      {n:"🌸 一束花",u:"束"},
      {n:"🎬 看电影",u:"场"},
      {n:"🍰 下午茶",u:"次"},
      {n:"👗 一条裙子",u:"条"},
      {n:"🧴 护肤品",u:"套"},
      {n:"🎤 演唱会",u:"场"},
      {n:"📸 写真",u:"套"},
      {n:"✈️ 短途旅行",u:"次"},
      {n:"🏠 一平米房",u:"平米"},
    ],

    // ===== 趣味语录 (FUN_LINES) =====
    fun_lines: [
      "恭喜，老板又帮你报销了今天的通勤费。",
      "这杯奶茶，没有植脂末，全是你的血汗。",
      "别小看这几块钱，这是你未来的「Fuck You Money」。",
      "你赚的每一分钱，都是你未来说「不」的底气。",
      "摸鱼赚的钱，最香。",
      "老板的梦想是上市，你的梦想是老板给你涨工资。",
      "赚钱的意义不是现在花，而是以后可以花得理直气壮。",
      "今天忍住的消费，明天就是你的自由基金。",
      "每一块钱都在投票你想要的生活。",
      "打工人，打工魂，打工都是人上人。",
      "你比昨天又多了一个拒绝的筹码。",
      "存钱不是为了省钱，是为了攒底气。",
    ],

    // ===== 每日消息 =====
    daily_msgs: [
      "今天也是为自由积累筹码的一天 ✨",
      "辛苦了，明天继续发光 🌟",
      "你今天的劳动，已经兑换成了看得见的数字 📈",
      "打工很累，但你在一点点变强大 💪",
      "下班后的时间，才是你的人生 🌆",
      "记住：你不是在打工，你是在买自己的未来 🎫",
    ],

    // ===== 状态语录 (QT) =====
    qt_working: [
      "每分每秒都在增值，你值得更好的生活 📈",
      "摸鱼是为了更好地搬砖，搬砖是为了早日不搬砖 😎",
      "加油，打工人！你的努力，¥¥¥在替你说话 💪",
      "存钱罐越来越重了，离梦想又近了一步 🪙",
      "今天也在为更好的自己打工 ✨",
      "每一块钱都是自由的选票，积累它，兑换未来 🌟",
      "你认真工作的样子，真的很耀眼 ✨",
      "赚钱的意义不是为了现在，而是为了以后可以说\"不\" 💎",
      "今天忍住的奶茶，明天可能就是一杯自由 ☕",
      "累的时候看看数字，它不会骗你 ❤️",
      "你比自己想象的更值钱 —— 看，数字在证明 💰",
    ],
    qt_lunch: ["🍱 好好吃饭，下午继续赚钱！","🍚 吃饱了才有力气搬砖~","☕ 午休时间，让大脑充个电","🥟 今天的午饭格外香，因为是劳动换来的"],
    qt_before: ["⏰ 养精蓄锐，准备开赚！","☕ 新的一天，新的¥¥¥在等你","🌅 每一天都是赚钱的好日子"],
    qt_after: ["🎉 下班快乐！今天也是丰收的一天","🌇 夕阳为你加冕，明天继续加油","🍻 去享受属于你的时间吧，你今天很棒"],
    qt_rest: ["🎉 休息是为了走更远的路","☀️ 周末愉快，钱的事明天再说","🌴 享受慢生活，你值得拥有"],
    qt_slack: ["😴 摸鱼也是一种生活智慧","🐟 鱼都摸了，快乐就完事了","😌 适当的休息，是为了更好地出发","🛋️ 摸鱼使我快乐，快乐使我更有效率"],

    // ===== 带薪拉屎 =====
    poop_tips: [
      "别刷手机，专心致志，对钱尊重。",
      "慢慢来，老板正在为你买单。",
      "每一秒的放空，都是对资本的温柔反抗。",
      "蹲自己的坑，让老板的会等等。",
      "带薪拉屎，是打工人最优雅的叛逆。",
      "时间在走，钱在涨，你在爽。",
      "这不是摸鱼，这是战略性休整。",
      "你的每一次深呼吸，都在消耗公司的氧气。",
    ],

    // ===== 打工日报 =====
    report_title: "📋 今日打工报告",
    report_date_label: "报告日期",
    report_earn: "今日收入",
    report_hours: "工作时长",
    report_rate: "时薪",
    report_convert: "今日劳动等价于",
    report_close: "关闭",
    report_share: "📸 截图分享",

    // ===== 心情 =====
    mood_title: "🎭 今天打工心情怎么样？",
    mood_desc: "点一下记录今日心情",

    // ===== 设置弹窗 =====
    set_title: "⚙️ 设置",
    set_salary: "月薪（税前）",
    set_start: "上班",
    set_end: "下班",
    set_lunch: "午休（小时）",
    set_workdays: "工作日",
    set_mwd: "月工作天数",
    set_mwd_hint: "日薪 = 月薪 ÷ 工作天数",
    set_sound: "音效包",
    set_cancel: "取消",
    set_save: "✓ 保存",
    set_pro: "升级 Pro",
    set_pro_badge: "🔒 Pro",

    // ===== 皮肤 =====
    theme_section: "🎨 皮肤主题",
    theme_current: "当前: ",
    theme_labels: {
      default: "👑 经典",
      ox: "🐂 牛马本色",
      office: "💼 社畜日常",
      coffee: "☕ 咖啡续命",
      night: "🌙 夜猫子",
      fairy: "🌸 打工仙女",
      geek: "💻 极客工位",
      chill: "🛌 躺平主义",
      rich: "🧧 暴富",
    },
    theme_quotes: {
      default: ["每分每秒都在增值，你值得更好的生活 📈","今天也在为更好的自己打工 ✨","搬的每一块砖，都在构建你想要的生活 🏗️","工作是为了生活，但生活不是为了工作 🌈"],
      ox: ["埋头苦干，不问前程 🐂","今天的汗水是明天的底气 💧","一步一个脚印，踏实就是捷径 🔗"],
      office: ["今天也是为自由积累筹码的一天 ✨","辛苦了，明天继续发光 🌟","又熬过了一天，你真棒 🌈"],
      coffee: ["咖啡是液体的工牌 ☕","每一口都是续命，每一分都是自由"],
      night: ["月亮不睡我不睡 🌙","深夜的代码和星光一样安静 ⭐"],
      fairy: ["工资可以少，妆不能花 🌸","今天也是精致的牛马女孩 💅","打工而已，不必卖命 💐"],
      geek: ["rm -rf / 没敢敲，辞职信没敢交 ⌨️","代码跑得通，人生跑不通","Hello World, Goodbye Money"],
      chill: ["卷不动了，先躺一会儿 🛌","人生苦短，及时行乐","躺平不是放弃，是战略性休整 ☁️"],
      rich: ["不想暴富的牛马不是好打工人 🧧","今天也是离暴富更近的一天 💰","贫穷限制了我的想象力，但没限制我的梦想"],
    },

    // ===== Pro 弹窗 =====
    pro_btn: "升级 Pro",
    pro_ft1: "无限目标",
    pro_ft2: "更多音效",
    pro_ft3: "永久数据",
    pro_ft4: "自定义主题",
    pro_ft5: "年度报告",
    pro_price: "/月",
    pro_year: "或 $49.99/年",
    pro_later: "稍后再说",
    pro_coming: "即将推出！",

    // ===== 趋势图 =====
    trend_title: "📊 打工趋势",
    trend_total: "总收入",
    trend_avg: "日均",
    trend_days: "天数",
    trend_best: "最佳日",
    trend_month: "本月",
    trend_year: "本年",
    trend_empty: "还没有数据，开始打工吧！",

    // ===== OBO 引导 =====
    obo: [
      {e:"⏱️", h:"你的时间值多少钱", p:"输入月薪，实时看到每秒赚多少。<br>摸鱼、午休、加班——<b>每一分钟都算得清清楚楚</b>", b:""},
      {e:"🎨", h:"换一个心情搬砖", p:"<b>9 套主题皮肤</b>，从经典到暴富。<br>每套有专属飘落特效、爆发特效和音效", b:""},
      {e:"🎯", h:"攒一个目标", p:"一杯奶茶 · 一支口红 · 一平米房<br>看着进度条一点点填满，<b>超有成就感</b>", b:""},
      {e:"🛠️", h:"打工人の快乐工具箱", p:"💩 带薪拉屎计时　📋 打工日报<br>📊 收入趋势图　👥 工友圈", b:""},
      {e:"🚀", h:"准备好了吗？", p:"⚙️ 点击右上角齿轮设置工资<br>🐱 双击猫头解锁全部主题<br><b style=color:var(--g1)>开始赚吧！</b>", b:"开赚 🚀"},
    ],

    // ===== 庆祝/财神 =====
    celeb_title: "🎉 下班啦！🎉",
    celeb_earn: "今天赚了 ¥",
    caishen_title: "🎊 恭喜满勤！财神来贺 🎊",
  },

  en: {
    title: "🐱 Redemption Meter",
    title_row: "Today's Grind",
    today_grind: "Today's Grind",
    slack_btn: "😴 Slack",
    slack_on: "😴 Slacking",
    poop_btn: "💩 Poop",
    poop_on: "💩 Pooping",
    cd_before: "⏳ Until Work",
    cd_after: "⏳ Until Done",
    cd_work: "🕐 Worked",
    cd_slack: "⏸️ Slacking",
    cd_poop: "🚽 Relaxing",
    cd_rest: "🎉 Day Off",
    cd_done: "🎉 Off Work!",
    sb_working: "● Grindin'",
    sb_lunch: "● Lunch",
    sb_before: "● Before Work",
    sb_after: "● Off Work 🎉",
    sb_rest: "● Day Off",
    sb_slack: "● Slacking",
    sb_poop: "● Paid Poop",

    day_names: ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],
    wd_label: "",

    workers_1: "👥 ",
    workers_2: " workers grinding nationwide",
    workers_avg: "📊 National avg hourly ¥",
    workers_near: "🏢 ",
    workers_near2: " coworkers slacking near you",
    sv_daily: "Daily",
    sv_ps: "Per Sec",
    sv_month: "Monthly",
    att_label: "Attendance",

    goal_title: "🎯 Save for ",
    goal_text: "Got ",
    goal_unit: " ",
    goal_acc_big: "💡 Saving on salary alone will take forever. Want to speed up?",
    goal_acc_small: "💡 Big goal! Ever thought of a side hustle?",
    goal_presets: [
      {n:"🧋 Boba",u:"cups"},
      {n:"💄 Lipstick",u:"pcs"},
      {n:"💅 Manicure",u:"times"},
      {n:"🌸 Bouquet",u:"bunches"},
      {n:"🎬 Movie",u:"tickets"},
      {n:"🍰 Tea time",u:"times"},
      {n:"👗 Dress",u:"pcs"},
      {n:"🧴 Skincare",u:"sets"},
      {n:"🎤 Concert",u:"tickets"},
      {n:"📸 Photoshoot",u:"sets"},
      {n:"✈️ Trip",u:"trips"},
      {n:"🏠 House (sq ft)",u:"sq ft"},
    ],

    fun_lines: [
      "Boss paid your commute today!",
      "This tea has no creamer — just your sweat.",
      "Every cent is future Fuck You Money.",
      "Every dollar you earn buys the right to say no.",
      "Slackin' money is the sweetest money.",
      "Boss dreams of IPO, you dream of a raise.",
      "Money ain't for spending now — it's for spending later with pride.",
      "Every skipped treat today = freedom fund tomorrow.",
      "Every dollar votes for the life you want.",
      "Grind hard, stay hard, we're all in this together.",
      "You've got one more reason to say no than yesterday.",
      "Saving isn't pinching pennies — it's stacking ammo.",
    ],

    daily_msgs: [
      "Another day, another stack of freedom ✨",
      "Good work today — keep shining tomorrow 🌟",
      "Your labor has become a number you can see 📈",
      "Grinding is hard, but you're getting stronger 💪",
      "After work, your real life begins 🌆",
      "Remember: you're not working — you're buying your future 🎫",
    ],

    qt_working: [
      "Sow today, sip tomorrow 🌾",
      "Every second counts, you deserve better 📈",
      "Slack to grind, grind to quit someday 😎",
      "Keep going! Your money speaks for you 💪",
      "Piggy bank's heavier, dream's closer 🪙",
      "Building a better you, one shift at a time ✨",
      "Every dollar's a vote for freedom 🌟",
      "You working hard? That's the glow up ✨",
      "Earning isn't for now, it's for the future \"no\" 💎",
      "The boba you skipped = freedom tomorrow ☕",
      "Every brick builds the life you dream of 🏗️",
      "Tired? Look at the numbers — they don't lie ❤️",
      "You're worth more than you think — the numbers prove it 💰",
    ],
    qt_lunch: ["🍱 Eat well, earn more!","🍚 Fuel up, grind on!","☕ Brain recharge in progress","🥟 Lunch tastes better when you earned it"],
    qt_before: ["⏰ Rested and ready to earn!","☕ Fresh day, fresh ¥¥¥ waiting","🌅 Every day's a good earning day"],
    qt_after: ["🎉 Off work! Another丰收 day","🌇 The sunset crowns you — see you tomorrow","🍻 You earned that drink. Go enjoy it"],
    qt_rest: ["🎉 Rest to go further","☀️ Weekend vibes, money can wait","🌴 Slow living — you deserve this"],
    qt_slack: ["😴 Slacking is a life skill","🐟 Fish already slacked, just enjoy it","😌 Rest isn't lazy — it's strategic","🛋️ Slacking makes me happy, happy makes me productive"],

    poop_tips: [
      "Focus. No phone. Respect the money.",
      "Take your time — the boss is paying.",
      "Every second of stillness is gentle rebellion.",
      "Your throne, their expense.",
      "Paid poop — the most elegant rebellion.",
      "Time ticks, money grows, you chill.",
      "This isn't slacking — it's strategic reset.",
      "Every deep breath burns the company's oxygen.",
    ],

    report_title: "📋 Today's Report",
    report_date_label: "Date",
    report_earn: "Earnings",
    report_hours: "Hours",
    report_rate: "Hourly Rate",
    report_convert: "Today's labor equals",
    report_close: "Close",
    report_share: "📸 Screenshot",

    mood_title: "🎭 How's work today?",
    mood_desc: "Tap to log your mood",

    set_title: "⚙️ Settings",
    set_salary: "Salary (pre-tax)",
    set_start: "Start",
    set_end: "End",
    set_lunch: "Lunch (hrs)",
    set_workdays: "Work Days",
    set_mwd: "Work Days/Month",
    set_mwd_hint: "Daily = Salary ÷ Work Days",
    set_sound: "Sound Pack",
    set_cancel: "Cancel",
    set_save: "✓ Save",
    set_pro: "Upgrade Pro",
    set_pro_badge: "🔒 Pro",

    theme_section: "🎨 Themes",
    theme_current: "Current: ",
    theme_labels: {
      default: "👑 Classic",
      ox: "🐂 Grinder",
      office: "💼 Corporate",
      coffee: "☕ Coffee",
      night: "🌙 Night Owl",
      fairy: "🌸 Fairy",
      geek: "💻 Geek",
      chill: "🛌 Chill",
      rich: "🧧 Rich",
    },
    theme_quotes: {
      default: ["Every second counts, you deserve better 📈","Building a better you, one shift at a time ✨","Every brick builds the life you dream of 🏗️","Work to live, don't live to work 🌈"],
      ox: ["Head down, grind on 🐂","Today's sweat is tomorrow's confidence 💧","One step at a time — steady is the shortcut 🔗"],
      office: ["Another day, another freedom token ✨","Good work, keep shining tomorrow 🌟","You survived another day — you're awesome 🌈"],
      coffee: ["Coffee is liquid courage ☕","Every sip keeps you going, every cent buys freedom"],
      night: ["Moon's up, I'm up 🌙","Late night code and starlight — equally quiet ⭐"],
      fairy: ["Paycheck can be small, but makeup stays on fleek 🌸","Today's a pretty grind girl 💅","Just a job, don't sell your soul 💐"],
      geek: ["rm -rf / didn't run, resignation didn't send ⌨️","Code compiles, life doesn't","Hello World, Goodbye Money"],
      chill: ["Can't keep up? Lie down for a bit 🛌","Life's short, enjoy it","Lying down isn't giving up — it's strategic rest ☁️"],
      rich: ["A grinder who doesn't want to get rich is a bad grinder 🧧","One day closer to being rich 💰","Poverty limits imagination, but not dreams"],
    },

    pro_btn: "Upgrade Pro",
    pro_ft1: "Unlimited Goals",
    pro_ft2: "More Sounds",
    pro_ft3: "Permanent History",
    pro_ft4: "Custom Themes",
    pro_ft5: "Annual Report",
    pro_price: "/month",
    pro_year: "or $49.99/year",
    pro_later: "Not now",
    pro_coming: "Coming soon!",

    trend_title: "📊 Earnings Trends",
    trend_total: "Total",
    trend_avg: "Daily Avg",
    trend_days: "Days",
    trend_best: "Best Day",
    trend_month: "Month",
    trend_year: "Year",
    trend_empty: "No data yet. Start working!",

    obo: [
      {e:"⏱️", h:"Your Time Is Money", p:"Set your salary, watch every second count.<br>Breaks, lunch, overtime — <b>every minute calculated</b>", b:""},
      {e:"🎨", h:"Match Your Mood", p:"<b>9 themes</b> from Classic to Rich.<br>Each with专属 floating effects, bursts & sounds", b:""},
      {e:"🎯", h:"Save for What Matters", p:"Boba · Lipstick · A house<br>Watch the progress bar fill up — <b>it feels great</b>", b:""},
      {e:"🛠️", h:"Worker's Toolkit", p:"💩 Paid Poop Timer　📋 Daily Reports<br>📊 Earnings Chart　👥 Workers Circle", b:""},
      {e:"🚀", h:"Ready to Grind?", p:"⚙️ Click the gear to set your salary<br>🐱 Double-tap the cat to unlock themes<br><b style=color:var(--g1)>Start earning!</b>", b:"Let's Go 🚀"},
    ],

    celeb_title: "🎉 Off Work! 🎉",
    celeb_earn: "Today earned ¥",
    caishen_title: "🎊 Full Attendance! Fortune is here 🎊",
  }
};

// ===== 语言检测与工具函数 =====
var _locale = localStorage.getItem("salaryLang") || "zh";

function setLocale(loc) {
  _locale = loc;
  localStorage.setItem("salaryLang", loc);
}

function __(key) {
  var lang = LANG[_locale] || LANG["zh"];
  // 支持点号路径: __("theme_labels.default")
  if (key.indexOf(".") > 0) {
    var parts = key.split(".");
    var val = lang;
    for (var i = 0; i < parts.length; i++) {
      if (val && typeof val === "object") val = val[parts[i]];
      else { val = undefined; break; }
    }
    if (val !== undefined) return val;
    // fallback to zh
    val = LANG["zh"];
    for (var i = 0; i < parts.length; i++) {
      if (val && typeof val === "object") val = val[parts[i]];
      else return key;
    }
    return val !== undefined ? val : key;
  }
  return lang[key] !== undefined ? lang[key] : (LANG["zh"][key] || key);
}
