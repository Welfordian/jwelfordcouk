toolbox.router.get(/^https:\/\/ws.audioscrobbler.com\//, toolbox.networkFirst);
toolbox.router.get(/^https:\/\/welfordian-60215.firebaseio.com\//, toolbox.networkFirst);
toolbox.router.get(/^https:\/\/jwelford.co.uk\//, toolbox.cacheFirst);
toolbox.router.get(/^https:\/\/cdn.rawgit.com\//, toolbox.cacheFirst);