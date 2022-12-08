const version = 'v1';

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(version).then(function(cache) {
      return cache.addAll([
        '/',
        '/index.html',
        '/quizproject.css',
        '/quizproject.js',
        '/manifest.json',
        '/sw.js',
        '/quizimages/bouncepad.jpg',
        '/quizimages/bunkerjonesy.jpg',
        '/quizimages/fortnite.jpg',
        '/quizimages/fortnitelogo.jpg',
        '/quizimages/junkrift.jpg',
        '/quizimages/ninja.jpg',
        '/quizimages/paradisepalms.jpg',
        '/quizimages/peely.jpg',
        '/quizimages/rifttogo.jpg',
        '/quizimages/saltysprings.jpg',
        '/quizimages/tiltedtowers.jpg',
        '/icons/icon-192x192.png',
        '/icons/icon-256x256.png',
        '/icons/icon-384x384.png',
        '/icons/icon-512x512.png',
        '/icons/quizlogo.png',
        '/icons/quizlogo-modified.png',
        '/server.js',
        '/package.json',
        '/notfound.txt',
      ]);
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(caches.match(event.request).then(function(response) {
    // caches.match() always resolves
    // but in case of success response will have value
    if (response !== undefined) {
      return response;
    } else {
      return fetch(event.request).then(function (response) {
        // response may be used only once
        // we need to save clone to put one copy in cache
        // and serve second one
        let responseClone = response.clone();

        caches.open(version).then(function (cache) {
          cache.put(event.request, responseClone);
        });
        return response;
      }).catch(function () {
        return caches.match('/notfound.txt');
      });
    }
  }));
});