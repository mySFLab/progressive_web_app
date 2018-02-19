const cacheName = 'cache_worker_service';
self.addEventListener('install', function (event) {
    console.log('install event :', event);
    caches.open(cacheName).then(cache => cache.addAll([
        'index.html',
        'vendors/angular.js',
        'vendors/bootstrap.css',
        'style.css',
        'main.js',
        'add_techno.html',
        'add_techno.js',
        'contact.html',
        'contact.js',
        'db.json',
        'http://localhost:3001/technos'
    ]))
    ;
});

self.addEventListener('activate', function (event) {
    console.log('activate event : ', event);
});



self.addEventListener('fetch', function (event) {
    if (!navigator.onLine) {
        const headers = {headers: {"Content-Type": "text/html;charset=utf-8"}};
        // event.respondWith(new Response('<h1>Pas de connexion</h1><div>Mettre en place la gestion hors connexion</div>',headers));
    }
    console.log('fetch event on url : ', event.request.url);
    
});