toolbox.router.get(/^https:\/\/ws.audioscrobbler.com\//, toolbox.networkFirst);
toolbox.router.get(/^https:\/\/welfordian-60215.firebaseio.com\//, toolbox.networkFirst);
toolbox.router.get(/^https:\/\/cdn.rawgit.com\//, toolbox.cacheFirst);
toolbox.router.get(/^https:\/\/img.youtube.com\//, toolbox.cacheFirst);
toolbox.router.get(/^https:\/\/image.tmdb.org\//, toolbox.cacheFirst);
toolbox.router.get(/^https:\/\/fonts.gstatic.com\//, toolbox.cacheFirst);
toolbox.router.get(/^https:\/\/cdn.jwelford.co.uk\//, toolbox.cacheFirst);
toolbox.router.get(/^https:\/\/imadev.site\/fonts\//, toolbox.cacheFirst);
toolbox.router.get(/^https:\/\/imadev.site\/images\//, toolbox.cacheFirst);
toolbox.router.get(/^https:\/\/lastfm-img2.akamaized.net\//, toolbox.cacheFirst);
toolbox.router.get(/^https:\/\/jwelford[^/]+(\/(?!api\/modifications\/?$).*)?$/, toolbox.networkFirst);
toolbox.router.get(/^https:\/\/jwelford.co.uk\/api\/modifications\//, toolbox.networkFirst);