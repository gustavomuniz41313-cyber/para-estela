// Service Worker para PWA - Cache da página e assets
const CACHE_NAME = 'estela-pwa-v1';
const urlsToCache = [
  '/',
  '/templates/perfect_final_fixed.html',
  '/static/foto1.jpeg.jpg',
  '/static/foto2.jpeg.jpg',
  '/static/foto3.jpeg.jpg',
  '/static/foto4.jpeg.jpeg',
  '/static/video.mp4.mp4'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
