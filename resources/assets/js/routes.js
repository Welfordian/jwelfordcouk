import VueRouter from 'vue-router';
import { Events } from "./EventBus";
import { Store } from './stores/SharedStore';
import { _http } from "./Http";
import { app } from "./app";

const About = () => import( /* webpackChunkName: "AboutView" */ './views/About');
const Blog = () => import(/* webpackChunkName: "BlogView" */ './views/Blog');
const Post = () => import(/* webpackChunkName: "PostView" */ './views/Post');
const Music = () => import( /* webpackChunkName: "MusicView" */ './views/Music');
const Contact = () => import( /* webpackChunkName: "ContactView" */ './views/Contact');
const Login = () => import ( /* webpackChunkName: "LoginView" */ './views/Login');
const Dashboard = () => import( /* webpackChunkName: "DashboardView" */ './views/Dashboard');
const DashboardEditor = () => import( /* webpackChunkName: "DashboardEditorView" */ './views/dashboard/Editor');
const DashboardUsers = () => import( /* webpackChunkName: "DashboardUsersView" */ './views/dashboard/Users');
const DashboardPosts = () => import( /* webpackChunkName: "DashboardPostsView" */ './views/dashboard/Posts');
const DashboardMessages = () => import( /* webpackChunkName: "DashboardMessagesView" */ './views/dashboard/Messages');
const DashboardMessageSingle = () => import( /* webpackChunkName: "DashboardMessageSingle" */ './views/dashboard/messages/View');
const DashboardPostsCreate = () => import( /* webpackChunkName: "DashboardPostsCreateView */ './views/dashboard/posts/Create');
const DashboardPostEdit = () => import( /* webpackChunkName: "DashboardPostsEditView */ './views/dashboard/posts/Edit');
const Files = () => import( /* webpackChunkName: "DashboardFilesView" */ './views/dashboard/Files');
const Emails = () => import( /* webpackChunkName: "DashboardEmailsView" */ './views/dashboard/Emails');
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
        path: '/posts',
        component: Blog
    },
    {
        path: '/posts/:slug',
        component: Post,
        beforeEnter: postExists
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
        path: '/dashboard/editor',
        component: DashboardEditor,
        beforeEnter: isAuthenticated
    },
    {
        path: '/dashboard/users',
        component: DashboardUsers,
        beforeEnter: isAuthenticated
    },
    {
        path: '/dashboard/posts',
        component: DashboardPosts,
        beforeEnter: isAuthenticated
    },
    {
        path: '/dashboard/messages',
        component: DashboardMessages,
        beforeEnter: isAuthenticated
    },
    {
        path: '/dashboard/messages/:id',
        component: DashboardMessageSingle,
        beforeEnter: messageExists
    },
    {
        path: '/dashboard/posts/edit/:slug',
        component: DashboardPostEdit,
        beforeEnter: postExists
    },
    {
      path: '/dashboard/posts/create',
      component: DashboardPostsCreate,
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

function postExists(to, from, next) {
    let vueInterval = setInterval.prototype;

    vueInterval = setInterval(() => {
      if (app !== undefined) {
        Events.$emit('showLoading', true);
        clearInterval(vueInterval);
      }
    }, 100);

    _http.get('/posts/' + to.params.slug).then((response) => {
        to.meta.post = response.data;

        Events.$emit('hideLoading', true);
        next()
    }).catch(() => next('/404'));
}

function messageExists(to, from, next) {
  let vueInterval = setInterval.prototype;

  vueInterval = setInterval(() => {
    if (app !== undefined) {
      Events.$emit('showLoading', true);
      clearInterval(vueInterval);
    }
  }, 100);

  _http.get('/messages/' + to.params.id).then((response) => {
    to.meta.message = response.data;

    Events.$emit('hideLoading', true);
    next()
  }).catch(() => next('/404'));
}

export default new VueRouter({
    mode: 'history',
    saveScrollPosition: true,
    transitionOnLoad: true,
    routes
})