import VueRouter from 'vue-router';

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
        component: require('./views/Dashboard.vue')
    },
    {
        path: '/messages',
        component: require('./views/Messages.vue')
    },
    {
        path: '*',
        component: require('./views/NotFound.vue')
    }
];

export default new VueRouter({
    mode: 'history',
    saveScrollPosition: true,
    transitionOnLoad: true,
    routes
})