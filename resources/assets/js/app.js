import * as bootstrap from './bootstrap';
import * as Vue from 'vue';
import { i18n } from './i18n';
import { Store } from './stores/SharedStore';
import { Events } from './EventBus';
import { filters } from './Filters';
import router from './routes';
import VueRouter from 'vue-router';
import _Pusher from 'pusher-js';

const Pusher = new _Pusher("a1f8612b24a71f55b7c3", {
    cluster: 'mt1',
    authEndpoint: '/api/pusher/auth',
    encrypted: true
});

const AnalyticsChannel = Pusher.subscribe("presence-analytics");

Vue.use(VueRouter);

require('./components');

Vue.prototype.$analytics = AnalyticsChannel;

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
            }).catch(function(error) {
                // registration failed
                console.log('Registration failed with ' + error);
            });
        }
    },

    mounted() {
        this.$analytics.bind('pusher:subscription_succeeded', function(){
            this.handleAnalytics();
        }.bind(this));
    },

    methods: {
        handleAnalytics(bind = true) {
            this.$analytics.trigger("client-route-navigate", {
                route: this.$route.path,
                client: this.$analytics.members.me
            });

            if (bind) {
                this.$analytics.bind('client-analytics-refresh', function(data){
                    this.handleAnalytics(false);
                }.bind(this));
            }
        }
    },

    watch: {
        '$route': function(){
            this.handleAnalytics();
        }
    },
    
    router
});