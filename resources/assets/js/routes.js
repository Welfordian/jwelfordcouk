import VueRouter from 'vue-router';
import { Store } from './stores/SharedStore';

const routes = [
    {
        path: '/',
        redirect: '/about'
    },
    {
        path: '/about',
        component: require('./views/About.vue')
    },
    {
        path: '/videos',
        component: require('./views/Videos.vue')
    },
    {
        path: '/music',
        component: require('./views/Music.vue')
    },
    {
        path: '/contact',
        component: require('./views/Contact.vue')
    },
    {
        path: '/login',
        component: require('./views/Login.vue')
    },
    {
        path: '/dashboard',
        component: require('./views/Dashboard.vue'),
        beforeEnter: isAuthenticated
    },
    {
        path: '/messages',
        component: require('./views/Messages.vue'),
        beforeEnter: isAuthenticated
    },
    {
        path: '*',
        component: require('./views/NotFound.vue')
    }
];

function isAuthenticated(to, from, next) {
    if (Store.auth.authenticated) {
        next();
        if (Store.auth.shouldShowPopup) {
            Store.auth.showPopupAuth();
        }
    }else{  
        next('/login');
    }
}

export default new VueRouter({
    mode: 'history',
    saveScrollPosition: true,
    transitionOnLoad: true,
    routes
})