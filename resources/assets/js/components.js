import * as Vue from 'vue';

Vue.component('navbar', require('./components/NavBar'));
Vue.component('navbar-link', require('./components/NavbarLink'));
Vue.component('header-image', require('./components/HeaderImage'));
Vue.component('about-summary', require('./components/AboutSummary'));
Vue.component('about-languages', require('./components/AboutLanguages'));
Vue.component('about-language', require('./components/AboutLanguage'));
Vue.component('language-selector', require('./components/LanguageSelector'));
Vue.component('login-panel', require('./components/LoginPanel'));
Vue.component('auth-button', require('./components/AuthButton'));
Vue.component('experience-set', require('./components/ExperienceSet'));
Vue.component('experience', require('./components/Experience'));
Vue.component('education-set', require('./components/EducationSet'));
Vue.component('education', require('./components/Education'));
Vue.component('create-post', require('./components/CreatePost'));
Vue.component('dashboard-stat', require('./components/dashboard/Stat'));