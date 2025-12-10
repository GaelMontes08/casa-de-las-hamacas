// Service Worker for Casa de las Hamacas
// This is a minimal service worker to prevent 404 errors

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

// Optional: Add caching strategy here if needed in the future
