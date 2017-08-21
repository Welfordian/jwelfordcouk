import VueRouter from 'vue-router';
import { Store } from './stores/SharedStore';

const About = () => import( /* webpackChunkName: "AboutView" */ './views/About');
const Videos = () => import( /* webpackChunkName: "VideosView" */ './views/Videos');
const Music = () => import( /* webpackChunkName: "MusicView" */ './views/Music');
const Contact = () => import( /* webpackChunkName: "ContactView" */ './views/Contact');
const Login = () => import ( /* webpackChunkName: "LoginView" */ './views/Login');
const Dashboard = () => import( /* webpackChunkName: "DashboardView" */ './views/Dashboard');
const DashboardUsers = () => import( /* webpackChunkName: "DashboardUsersView" */ './views/dashboard/Users');
const DashboardAnalytics = () => import( /* webpackChunkName: "DashboardAnalyticsView" */ './views/dashboard/Analytics');
const NotFound = () => import( /* webpackChunkName: "NotFoundView" */ './views/NotFound');

const routes = [
    {
        path: '/',
        redirect: '/about'
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/videos',
        component: Videos
    },
    {
        path: '/music',
        component: Music
    },
    {
        path: '/contact',
        component: Contact
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/dashboard',
        component: Dashboard,
        beforeEnter: isAuthenticated
    },
    {
        path: '/dashboard/users',
        component: DashboardUsers,
        beforeEnter: isAuthenticated
    },
    {
        path: '/dashboard/analytics',
        component: DashboardAnalytics,
        beforeEnter: isAuthenticated
    },
    {
        path: '*',
        component: NotFound
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