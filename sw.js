const CACHE_NAME = 'f1-rechner-v1';
const ASSETS = [
  './index.html',
  './manifest.json',
  // ggf. externe CSS/JS-Dateien hier auflisten
];
self.addEventListener('install', e =>
  e.waitUntil(caches.open(CACHE_NAME).then(c => c.addAll(ASSETS)))
);
self.addEventListener('fetch', e =>
  e.respondWith(caches.match(e.request).then(r => r || fetch(e.request)))
);
