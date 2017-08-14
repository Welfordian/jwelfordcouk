// Imports
import * as bootstrap from './bootstrap';
import * as Vue from 'vue';
import { i18n } from './i18n';
import { Store } from './stores/SharedStore';
import { _http } from './Http';
import { Events } from './EventBus';
import router from './routes';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

// Components
require('./components');

// App

const app = new Vue({
    el: '#app',

    data: {
        lang: i18n,
        store: Store
    },

    beforeCreate() {
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.register('/sw.js', {scope: '/'})
            .then(function(reg) {
                Events.$emit('service_worker.reg', reg);
                console.log('Registration succeeded. Scope is ' + reg.scope);
            }).catch(function(error) {
                // registration failed
                console.log('Registration failed with ' + error);
            });
        }
    },

    router
});
