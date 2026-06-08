const CACHE_NAME = 'horoscope-v3';

// Network First で扱うコアファイル（更新が頻繁）
const NETWORK_FIRST_ASSETS = [
  './',
  './index.html',
  './style.css',
  './script.js',
  './auth.js',
];

// Cache First で扱う静的アセット（ほぼ変わらない）
const CACHE_FIRST_ASSETS = [
  './manifest.json',
  './favicon.png',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './images/fallback1.jpg',
  './images/fallback2.jpg',
];

// インストール時：全アセットをキャッシュ
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache =>
      cache.addAll([...NETWORK_FIRST_ASSETS, ...CACHE_FIRST_ASSETS])
    )
  );
  self.skipWaiting();
});

// 有効化時：古いバージョンのキャッシュをすべて削除
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key)))
    )
  );
  self.clients.claim();
});

// ネットワーク優先：最新を取得してキャッシュ更新、失敗時のみキャッシュを返す
function networkFirst(request) {
  return fetch(request)
    .then(response => {
      const clone = response.clone();
      caches.open(CACHE_NAME).then(cache => cache.put(request, clone));
      return response;
    })
    .catch(() => caches.match(request));
}

// キャッシュ優先：キャッシュがあれば返す、なければネットワークから取得してキャッシュ
function cacheFirst(request) {
  return caches.match(request).then(cached => {
    if (cached) return cached;
    return fetch(request).then(response => {
      const clone = response.clone();
      caches.open(CACHE_NAME).then(cache => cache.put(request, clone));
      return response;
    });
  });
}

self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);

  // 外部ドメイン（CDN画像など）はサービスワーカーを通さない
  if (url.origin !== self.location.origin) return;

  const path = url.pathname;
  const isNetworkFirst =
    path.endsWith('.html') ||
    path.endsWith('.css')  ||
    path.endsWith('.js')   ||
    path === '/'           ||
    path.endsWith('/');

  event.respondWith(isNetworkFirst ? networkFirst(event.request) : cacheFirst(event.request));
});
