// ===== 赎身进度条 — 皮肤选择器 UI + 付费解锁 =====
// 依赖: theme-config.js (THEMES), theme-effects.js (getThemeBurstEm)

var curTheme = localStorage.getItem("salaryTheme") || "default";
var proUnlocked = localStorage.getItem("salaryPro") === "true";

// ===== 切换皮肤 =====
function applyTheme(id) {
  var t = THEMES[id];
  if (!t) return;
  if (t.pro && !proUnlocked) return;

  curTheme = id;
  localStorage.setItem("salaryTheme", id);

  document.body.className = document.body.className.replace(/theme-\w+/g, "").trim();
  if (id !== "default") document.body.classList.add("theme-" + id);

  var root = document.documentElement;
  for (var k in t.css) {
    root.style.setProperty(k, t.css[k]);
  }

  window._burstEm = t.burstEm;
  window._decorEm = t.decorEm;
  window._themeQuotes = t.quotes || [];
  window._themeStatusQuotes = t.statusQuotes || {};
}

// ===== 页面加载时恢复上次皮肤 =====
function initTheme() {
  if (curTheme !== "default") { applyTheme(curTheme); }
  else {
    var t = THEMES["default"];
    window._burstEm = t.burstEm;
    window._decorEm = t.decorEm;
    window._themeQuotes = t.quotes || [];
    window._themeStatusQuotes = t.statusQuotes || {};
  }
}

// ===== Pro 解锁（双击猫头） =====
document.addEventListener("DOMContentLoaded", function() {
  var cat = document.getElementById("cat");
  if (cat) {
    cat.addEventListener("dblclick", function() {
      proUnlocked = !proUnlocked;
      localStorage.setItem("salaryPro", proUnlocked ? "true" : "");
      var badge = document.getElementById("proBadge");
      if (badge) badge.textContent = proUnlocked ? "✨ Pro" : "🔒 Pro";
      if (document.getElementById("themeList")) renderThemes();
    });
  }
});

// ===== 渲染皮肤选择器 =====
function renderThemes() {
  var list = document.getElementById("themeList");
  if (!list) return;
  list.innerHTML = "";

  for (var id in THEMES) {
    var t = THEMES[id];
    var lb = document.createElement("label");
    lb.className = "gp-l";
    if (curTheme === id) lb.className += " on";
    if (t.pro && !proUnlocked) lb.className += " disabled";

    var ip = document.createElement("input");
    ip.type = "radio";
    ip.name = "theme";
    ip.checked = (curTheme === id);
    ip.disabled = (t.pro && !proUnlocked);

    ip.addEventListener("change", (function(themeId) {
      return function() {
        if (proUnlocked || themeId === "default") {
          applyTheme(themeId);
          renderThemes();
          updateThemeStatus();
        }
      };
    })(id));

    lb.appendChild(ip);
    lb.appendChild(document.createTextNode(t.icon + " " + t.name));
    list.appendChild(lb);
  }

  updateThemeStatus();
}

function updateThemeStatus() {
  var el = document.getElementById("themeStatus");
  if (!el) return;
  var t = THEMES[curTheme];
  el.textContent = t ? t.name : "";
}
