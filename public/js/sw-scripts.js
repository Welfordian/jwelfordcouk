importScripts('/js/idb.js');
importScripts('/js/store.js');

self.addEventListener('sync', function(event) {
    console.log('Got sync...');
    event.waitUntil(
        store.outbox('readonly').then(function(outbox) {
            console.log('Got outbox!');
            return outbox.getAll();
        }).then(function(messages) {
            console.log('Got to then!');
            Promise.all(messages.map(function(message) {
                return fetch('/api/contact', {
                    method: 'POST',
                    body: JSON.stringify(message),
                    headers: {
                        'Accept': 'application/json',
                        'X-Requested-With': 'XMLHttpRequest',
                        'Content-Type': 'application/json'
                    }
                }).then(function(response) {
                    registration.showNotification("Your contact message has been sent!");  
                    return response.json();
                }).then(function(data) {
                    if (data.hasOwnProperty('id')) {
                        return store.outbox('readwrite').then(function(outbox) {
                            return outbox.delete(message.id);
                        });
                    }
                });
            }));
        }).catch(function(err) { console.log('Error happened...'); console.error(err); })
    )
});