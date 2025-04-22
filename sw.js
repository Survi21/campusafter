const CACHE_NAME = 'offline-cache-v1';
const ASSETS = [
    '/',
    '/index.html',
    '/style.css',
    '/script.js',
'/about.html',
'/contact.html',
'/services.html',
'/images/logo.png',
'/images/background.jpg',
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            console.log('Caching files');
            return cache.addAll(ASSETS);
        })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        fetch(event.request).catch(() => caches.match(event.request))
    );
});

self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then(keys => {
            return Promise.all(
                keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))
            );
        })
    );
});