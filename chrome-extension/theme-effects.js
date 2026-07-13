// ===== 赎身进度条 — 通用特效组件 =====
// 依赖: theme-config.js（THEMES 变量）

// 获取当前生效的皮肤 ID（从 body class 中读取）
function getCurrentThemeId() {
  for (var id in THEMES) {
    if (id !== "default" && document.body.classList.contains("theme-" + id)) {
      return id;
    }
  }
  return "default";
}

// 获取当前皮肤配置对象
function getCurrentTheme() {
  return THEMES[getCurrentThemeId()] || THEMES["default"];
}

// ===== 爆发特效 =====
// 供 burst() 函数调用，替代硬编码 emoji 数组
function getThemeBurstEm() {
  var t = getCurrentTheme();
  return t ? t.burstEm : THEMES["default"].burstEm;
}

// ===== 飘落特效 =====
// 供 mkIngots() 函数调用
function getThemeDecorEm() {
  var t = getCurrentTheme();
  return t ? t.decorEm : THEMES["default"].decorEm;
}

// ===== 每 1 元触发特效 =====
// 在金额增长时调用，显示皮肤专属 emoji
function showPerDollarEffect() {
  var t = getCurrentTheme();
  if (!t || !t.perDollarEmoji) return;
  // 在金额数字旁边临时显示一个图标
  var el = document.createElement("span");
  el.textContent = t.perDollarEmoji;
  el.style.cssText = "position:fixed;top:50%;left:50%;font-size:28px;transform:translate(-50%,-50%);pointer-events:none;z-index:50;animation:perDollarAnim 0.6s ease-out forwards";
  document.body.appendChild(el);
  setTimeout(function(){ el.remove(); }, 600);
}

// 给 perDollarEffect 用的 CSS 动画
(function(){
  if (!document.getElementById("pdStyle")) {
    var s = document.createElement("style");
    s.id = "pdStyle";
    s.textContent = "@keyframes perDollarAnim{0%{opacity:1;transform:translate(-50%,-50%) scale(0.5)}50%{opacity:1;transform:translate(-50%,-80%) scale(1.2)}100%{opacity:0;transform:translate(-50%,-120%) scale(1)}}";
    document.head.appendChild(s);
  }
})();

// ===== 每 1 元音效 =====
function playPerDollarSound() {
  // 依赖原有的 sndOn 开关和 ac() 音频上下文
  if (typeof sndOn !== "undefined" && !sndOn) return;
  if (typeof ac !== "function") return;
  try {
    var ctx = ac();
    if (!ctx) return;
    var t = getCurrentTheme();
    var sound = t ? t.perDollarSound : "ding";
    var now = ctx.currentTime;
    var osc = ctx.createOscillator();
    var gain = ctx.createGain();
    osc.type = "sine";
    gain.gain.setValueAtTime(0.06, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.15);

    switch(sound) {
      case "ding":      osc.frequency.setValueAtTime(1200, now); break;
      case "clang":     osc.type="square"; osc.frequency.setValueAtTime(200, now); gain.gain.setValueAtTime(0.08, now); break;
      case "keyclick":  osc.type="square"; osc.frequency.setValueAtTime(800, now); gain.gain.setValueAtTime(0.04, now); gain.gain.exponentialRampToValueAtTime(0.001, now+0.05); break;
      case "pour":      osc.type="triangle"; osc.frequency.setValueAtTime(300, now); osc.frequency.linearRampToValueAtTime(600, now+0.1); break;
      case "catcall":   osc.type="sine"; osc.frequency.setValueAtTime(880, now); osc.frequency.linearRampToValueAtTime(660, now+0.15); gain.gain.setValueAtTime(0.03, now); break;
      case "crystal":   osc.type="sine"; osc.frequency.setValueAtTime(1760, now); gain.gain.setValueAtTime(0.05, now); break;
      case "windchime": osc.type="sine"; osc.frequency.setValueAtTime(1400, now); osc.frequency.linearRampToValueAtTime(2100, now+0.2); gain.gain.setValueAtTime(0.04, now); break;
      case "coins":     osc.type="triangle"; osc.frequency.setValueAtTime(600, now); osc.frequency.linearRampToValueAtTime(1200, now+0.08); gain.gain.setValueAtTime(0.07, now); break;
      default:          osc.frequency.setValueAtTime(1000, now);
    }

    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(now);
    osc.stop(now + 0.2);
  } catch(e) {}
}


// ===== 主题语录 =====
// 获取当前主题的趣味语录
function getThemeQuote(index) {
  var t = getCurrentTheme();
  if (t && t.quotes && t.quotes.length > 0) {
    return t.quotes[index % t.quotes.length];
  }
  return "";
}

// 获取当前主题的状态语录（根据工作状态）
function getThemeStatusQuote(state, index) {
  var t = getCurrentTheme();
  if (t && t.statusQuotes && t.statusQuotes[state] && t.statusQuotes[state].length > 0) {
    return t.statusQuotes[state][index % t.statusQuotes[state].length];
  }
  return "";
}
