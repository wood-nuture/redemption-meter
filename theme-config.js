// ===== 赎身进度条 — 九款主题配置 =====
// 纯数据文件，不含任何逻辑

var THEMES = {
  "default": {
    name: "默认经典",
    nameEn: "Classic",
    icon: "👑",
    gender: "all",
    pro: false,
    // CSS 变量覆盖
    css: {
      "--g1": "#f9d976","--g2": "#f39c12","--g3": "#e67e22",
      "--tx": "#fceabb","--tx2": "#c9a96e","--tx3": "rgba(201,169,110,0.4)",
      "--cd": "rgba(255,215,150,0.06)","--bd": "rgba(255,215,150,0.15)",
      "--hv": "rgba(255,215,150,0.12)","--sh": "rgba(0,0,0,0.4)",
      "--gr": "#81c784","--or": "#ffb74d",
      "--bg": "linear-gradient(135deg,#0d0705,#1f1008 25%,#2d1810 50%,#1f1008 75%,#0d0705 100%)",
      "--radius": "20px"
    },
    // 金额爆发特效符号（burst 函数使用）
    burstEm: ["🪙","💰","✨","🌟","💫","🤑","💎","👛"],
    // 背景飘落装饰符号（mkIngots 函数使用）
    decorEm: ["🪙","💰","🥇","✨"],
    // 每攒 1 元的特效符号（0.3 秒后消失）
    perDollarEmoji: "",
    // 每攒 1 元的音效类型（对应 theme-effects 中的音效函数）
    perDollarSound: "ding"
  },

  "ox": {
    name: "🐂 牛马本色",
    nameEn: "🐂 Grinder",
    icon: "🐂",
    gender: "all",
    pro: true,
    css: {
      "--g1": "#DAA520","--g2": "#B8860B","--g3": "#8B6914",
      "--tx": "#F5DEB3","--tx2": "#D2B48C","--tx3": "rgba(210,180,140,0.4)",
      "--cd": "rgba(139,105,20,0.08)","--bd": "rgba(184,134,11,0.2)",
      "--hv": "rgba(184,134,11,0.15)","--sh": "rgba(0,0,0,0.5)",
      "--gr": "#8B7355","--or": "#DAA520",
      "--bg": "linear-gradient(135deg,#1a0f05,#2d1a0a 25%,#3d2817 50%,#2d1a0a 75%,#1a0f05 100%)",
      "--radius": "18px"
    },
    burstEm: ["🌾","🔗","🪵","💧","🧑‍🌾","🐂","🥾","🪓"],
    decorEm: ["🌾","🔗","🪵","💧"],
    perDollarEmoji: "💧",
    perDollarSound: "clang"
  },

  "office": {
    name: "💼 社畜日常",
    nameEn: "💼 Corporate",
    icon: "💼",
    gender: "all",
    pro: true,
    css: {
      "--g1": "#A0AEC0","--g2": "#718096","--g3": "#4A5568",
      "--tx": "#E2E8F0","--tx2": "#A0AEC0","--tx3": "rgba(160,174,192,0.4)",
      "--cd": "rgba(74,85,104,0.08)","--bd": "rgba(113,128,150,0.2)",
      "--hv": "rgba(113,128,150,0.15)","--sh": "rgba(0,0,0,0.5)",
      "--gr": "#68D391","--or": "#F6AD55",
      "--bg": "linear-gradient(135deg,#1a202c,#2a3040 25%,#3d4a60 50%,#2a3040 75%,#1a202c 100%)",
      "--radius": "18px"
    },
    burstEm: ["📎","📊","☕","📋","🖇️","📉","🖨️","🔔"],
    decorEm: ["📎","📊","☕","📋"],
    perDollarEmoji: "✅",
    perDollarSound: "keyclick"
  },

  "coffee": {
    name: "☕ 咖啡续命",
    nameEn: "☕ Coffee",
    icon: "☕",
    gender: "f",
    pro: true,
    css: {
      "--g1": "#A1887F","--g2": "#6D4C41","--g3": "#4E342E",
      "--tx": "#D7CCC8","--tx2": "#A1887F","--tx3": "rgba(161,136,127,0.4)",
      "--cd": "rgba(78,52,46,0.08)","--bd": "rgba(109,76,65,0.2)",
      "--hv": "rgba(109,76,65,0.15)","--sh": "rgba(0,0,0,0.5)",
      "--gr": "#81C784","--or": "#FFB74D",
      "--bg": "linear-gradient(135deg,#1a0e05,#2d1a0a 25%,#3e2723 50%,#2d1a0a 75%,#1a0e05 100%)",
      "--radius": "20px"
    },
    burstEm: ["☕","🧋","🧊","🥤","💊","🍩","🧁","🥐"],
    decorEm: ["☕","🧋","🧊","🥤"],
    perDollarEmoji: "☕",
    perDollarSound: "pour"
  },

  "night": {
    name: "🌙 夜猫子",
    nameEn: "🌙 Night Owl",
    icon: "🌙",
    gender: "all",
    pro: true,
    css: {
      "--g1": "#7986CB","--g2": "#5C6BC0","--g3": "#3949AB",
      "--tx": "#C5CAE9","--tx2": "#9FA8DA","--tx3": "rgba(159,168,218,0.35)",
      "--cd": "rgba(92,107,192,0.1)","--bd": "rgba(121,134,203,0.25)",
      "--hv": "rgba(121,134,203,0.18)","--sh": "rgba(0,0,20,0.6)",
      "--gr": "#69F0AE","--or": "#FFD740",
      "--bg": "linear-gradient(135deg,#05051a,#0d0d2a 25%,#1a1a4a 50%,#0d0d2a 75%,#05051a 100%)",
      "--radius": "22px"
    },
    burstEm: ["🌙","⭐","🦉","💡","🛵","🌃","🔦","📖"],
    decorEm: ["🌙","⭐","🦉","💡"],
    perDollarEmoji: "🐱",
    perDollarSound: "catcall"
  },

  "fairy": {
    name: "🌸 打工仙女",
    nameEn: "🌸 Fairy",
    icon: "🌸",
    gender: "f",
    pro: true,
    css: {
      "--g1": "#F48FB1","--g2": "#D81B60","--g3": "#AD1457",
      "--tx": "#F8BBD0","--tx2": "#F48FB1","--tx3": "rgba(244,143,177,0.35)",
      "--cd": "rgba(173,20,87,0.06)","--bd": "rgba(216,27,96,0.15)",
      "--hv": "rgba(216,27,96,0.12)","--sh": "rgba(0,0,0,0.4)",
      "--gr": "#81C784","--or": "#FFB74D",
      "--bg": "linear-gradient(135deg,#1a0a12,#2d1520 25%,#4d2a3d 50%,#2d1520 75%,#1a0a12 100%)",
      "--radius": "22px"
    },
    burstEm: ["🌸","💄","👜","👠","🎀","💅","🧴","💐"],
    decorEm: ["🌸","💄","👜","🎀"],
    perDollarEmoji: "💕",
    perDollarSound: "crystal"
  },

  "geek": {
    name: "💻 极客工位",
    nameEn: "💻 Geek",
    icon: "💻",
    gender: "m",
    pro: true,
    css: {
      "--g1": "#81C784","--g2": "#43A047","--g3": "#2E7D32",
      "--tx": "#C8E6C9","--tx2": "#81C784","--tx3": "rgba(129,199,132,0.4)",
      "--cd": "rgba(27,94,32,0.08)","--bd": "rgba(46,125,50,0.2)",
      "--hv": "rgba(46,125,50,0.15)","--sh": "rgba(0,0,0,0.5)",
      "--gr": "#69F0AE","--or": "#FFD740",
      "--bg": "linear-gradient(135deg,#050d05,#0a1a0a 25%,#1a3d1a 50%,#0a1a0a 75%,#050d05 100%)",
      "--radius": "16px"
    },
    burstEm: ["⌨️","🖥️","🐧","🤖","⚡","💾","🖱️","📟"],
    decorEm: ["⌨️","🖥️","🐧","⚡"],
    perDollarEmoji: "▍",
    perDollarSound: "keyclick"
  },

  "chill": {
    name: "🛌 躺平主义",
    nameEn: "🛌 Chill",
    icon: "🛌",
    gender: "all",
    pro: true,
    css: {
      "--g1": "#FBC02D","--g2": "#F9A825","--g3": "#F57F17",
      "--tx": "#FFF9C4","--tx2": "#FBC02D","--tx3": "rgba(251,192,45,0.35)",
      "--cd": "rgba(245,127,23,0.06)","--bd": "rgba(249,168,37,0.15)",
      "--hv": "rgba(249,168,37,0.12)","--sh": "rgba(0,0,0,0.4)",
      "--gr": "#81C784","--or": "#FFB74D",
      "--bg": "linear-gradient(135deg,#1a1508,#2d2815 25%,#4a3d1a 50%,#2d2815 75%,#1a1508 100%)",
      "--radius": "24px"
    },
    burstEm: ["🛌","🧸","📱","🍜","🐈","☁️","🧦","🫖"],
    decorEm: ["🛌","🧸","☁️","🐈"],
    perDollarEmoji: "💤",
    perDollarSound: "windchime"
  },

  "rich": {
    name: "🧧 暴富",
    nameEn: "🧧 Rich",
    icon: "🧧",
    gender: "all",
    pro: true,
    css: {
      "--g1": "#FF5252","--g2": "#D32F2F","--g3": "#B71C1C",
      "--tx": "#FFCDD2","--tx2": "#EF9A9A","--tx3": "rgba(239,154,154,0.3)",
      "--cd": "rgba(183,28,28,0.08)","--bd": "rgba(211,47,47,0.2)",
      "--hv": "rgba(211,47,47,0.15)","--sh": "rgba(0,0,0,0.5)",
      "--gr": "#FFB74D","--or": "#FF5252",
      "--bg": "linear-gradient(135deg,#1a0505,#2d1005 25%,#5a1a0a 50%,#2d1005 75%,#1a0505 100%)",
      "--radius": "18px"
    },
    burstEm: ["🧨","🧧","🏮","🐉","🎊","💵","🥇","🎆"],
    decorEm: ["🧨","🧧","🏮","🎊"],
    perDollarEmoji: "🎇",
    perDollarSound: "coins"
  }
};
