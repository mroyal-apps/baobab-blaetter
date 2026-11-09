// Service worker : l'appli marche hors ligne.
const CACHE = 'baobab-20261109-1505';
const FILES = ['./', './index.html', './style.css', './data.js', './textes.js', './aide.js', './generateurs.js', './generateurs2.js', './themen.js', './niveaux.js', './histoires.js', './boutique.js', './ueben.js', './version-test.js', './app.js',
  './manifest.webmanifest', './icons/icon.svg', './icons/icon-180.png', './icons/icon-192.png', './icons/icon-512.png'];
self.addEventListener('install', e => e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES))));
self.addEventListener('activate', e => e.waitUntil(caches.keys().then(ks =>
  Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k))))));
self.addEventListener('fetch', e => e.respondWith(caches.match(e.request).then(r => r || fetch(e.request))));
