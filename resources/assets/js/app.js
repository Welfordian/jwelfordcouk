// Imports
import * as bootstrap from './bootstrap';
import * as Vue from 'vue';
import * as VueFire from 'vuefire';
import { i18n } from './i18n';
import { Store } from './stores/SharedStore';
import { _http } from './Http';
import router from './routes';
import VueRouter from 'vue-router';

Vue.use(VueRouter);
Vue.use(VueFire);

// Components
Vue.component('panel', require('./components/Panel.vue'));
Vue.component('navbar', require('./components/NavBar.vue'));
Vue.component('navbar-link', require('./components/NavbarLink.vue'));
Vue.component('header-image', require('./components/HeaderImage.vue'));
Vue.component('about-summary', require('./components/AboutSummary.vue'));
Vue.component('about-languages', require('./components/AboutLanguages.vue'));
Vue.component('about-language', require('./components/AboutLanguage.vue'));
Vue.component('language-selector', require('./components/LanguageSelector.vue'));
Vue.component('login-panel', require('./components/LoginPanel.vue'));
Vue.component('auth-button', require('./components/AuthButton.vue'));
Vue.component('experience-set', require('./components/ExperienceSet.vue'));
Vue.component('experience', require('./components/Experience.vue'));
Vue.component('education-set', require('./components/EducationSet.vue'));
Vue.component('education', require('./components/Education.vue'));
Vue.component('create-post', require('./components/CreatePost.vue'));

// Events
const Events = new Vue();

// App

const app = new Vue({
    el: '#app',

    data: {
        lang: i18n,
        store: Store
    },

    beforeCreate() {
        Events.$on('auth.expired', function() {
            console.log("Authorization has expired.");
        });
    },

    router
});
