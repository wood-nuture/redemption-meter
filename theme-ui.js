// ===== 赎身进度条 — 皮肤选择器 UI + 付费解锁 =====
// 依赖: theme-config.js (THEMES), theme-effects.js (getThemeBurstEm)

var curTheme = localStorage.getItem("salaryTheme") || "default";
var proUnlocked = true;

// ===== 切换皮肤 =====
function applyTheme(id) {
  var t = THEMES[id];
  if (!t) return;
  if (t.pro && !proUnlocked) return;

  curTheme = id;
  localStorage.setItem("salaryTheme", id);

  // 移除旧的 theme-* class，添加新的
  document.body.className = document.body.className.replace(/theme-\w+/g, "").trim();
  if (id !== "default") document.body.classList.add("theme-" + id);

  // 应用 CSS 变量（覆盖 :root）
  var root = document.documentElement;
  for (var k in t.css) {
    root.style.setProperty(k, t.css[k]);
  }

  // 更新爆发特效和飘落特效（burst/mkIngots 使用的全局变量）
  // 这两个变量在 index.html 的 burst() 和 mkIngots() 中读取
  window._burstEm = t.burstEm;
  window._decorEm = t.decorEm;
}

// ===== 页面加载时恢复上次皮肤 =====
function initTheme() {
  if (curTheme !== "default") applyTheme(curTheme);
}

// ===== Pro 解锁（双击猫头） =====
(function() {
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
})();

// ===== 渲染皮肤选择器（在设置弹窗中调用） =====
function renderThemes() {
  var list = document.getElementById("themeList");
  if (!list) return;
  list.innerHTML = "";

  var isEn = (localStorage.getItem("salaryLang") === "en");

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
    var txt = t.icon + " " + (isEn ? t.nameEn : t.name);
    if (t.pro && !proUnlocked) txt += " 🔒";
    lb.appendChild(document.createTextNode(txt));
    list.appendChild(lb);
  }

  updateThemeStatus();
}

function updateThemeStatus() {
  var el = document.getElementById("themeStatus");
  if (!el) return;
  var t = THEMES[curTheme];
  var isEn = (localStorage.getItem("salaryLang") === "en");
  el.textContent = t ? (isEn ? "Current: " : "当前: ") + (isEn ? t.nameEn : t.name) : "";
}
