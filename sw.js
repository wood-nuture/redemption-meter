// ===== 赎身进度条 Service Worker =====
// 缓存当前版本核心文件，支持离线访问

const CACHE = "redemption-meter-v1";

const PRECACHE = [
  ".",
  "index-en.html",
  "theme-config.js",
  "theme-effects.js",
  "theme-ui.js",
  "manifest.json",
];

self.addEventListener("install", function(e) {
  e.waitUntil(
    caches.open(CACHE).then(function(cache) {
      return cache.addAll(PRECACHE);
    })
  );
  self.skipWaiting();
});

self.addEventListener("activate", function(e) {
  e.waitUntil(
    caches.keys().then(function(keys) {
      return Promise.all(
        keys.filter(function(k) { return k !== CACHE; })
          .map(function(k) { return caches.delete(k); })
      );
    })
  );
  self.clients.claim();
});

self.addEventListener("fetch", function(e) {
  e.respondWith(
    caches.match(e.request).then(function(cached) {
      var fetchReq = fetch(e.request).then(function(resp) {
        if (resp && resp.status === 200) {
          var copy = resp.clone();
          caches.open(CACHE).then(function(cache) {
            cache.put(e.request, copy);
          });
        }
        return resp;
      }).catch(function() { return cached; });
      return cached || fetchReq;
    })
  );
});
