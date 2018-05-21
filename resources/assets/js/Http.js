import axios from 'axios';
import regeneratorRuntime from "regenerator-runtime";
import { Store } from './stores/SharedStore';
import { Events } from './EventBus';
import { PopupAuth } from './PopupAuth';

const whitelist = {
    '/api/login': '*',
    '/api/contact': 'post',
    '/api/posts': 'get',
    '/api/modifications': 'get'
};

const whitelisted = (url, method) => {
    if (whitelist.hasOwnProperty(url)) {
        if (Array.isArray(whitelist[url])) {
            if (whitelist[url].includes[method]) {
                return true;
            } else {
                return false;
            }
        } else {
            if (whitelist[url] === '*') {
                return true;
            } else {
                return whitelist[url] === method.toLowerCase();
            }
        }
    } else {
        let match = false;
        Object.keys(whitelist).forEach((k) => {
          if (!match) {
            if (whitelist[k] === method.toLowerCase()) {
              match = (new RegExp(k).test(url) === true ? true : false);
            }
          }
        });

        return match;
    }
};

const Http = axios.create({
    baseURL: '/api'
});

Http.interceptors.request.use(async function (config) {
    // If we're hitting the API and we're not hitting the login route
    if (/\/api\//.test(config.url) && !whitelisted(config.url, config.method)) {
        // If the token isn't valid and we're not already refreshing the token
        if (! Store.auth.tokenValid() && ! Store.auth.refreshingToken)
        {
            Store.auth.refreshToken();
        }

        if (Store.auth.refreshingToken) { // If we ARE refreshing the token
            let token = await new Promise(function(resolve, reject){ // Wait for new token
                Events.$on('token.refreshed', function(token){ // Event from Auth Store after we have new token
                    resolve();
                });
            });
            
            config.headers['Authorization'] = 'Bearer ' + localStorage.getItem('auth_token').replace("Bearer ", "")

            return config;
        } else if (localStorage.getItem("auth_token") !== null) {
            config.headers['Authorization'] = 'Bearer ' + localStorage.getItem('auth_token').replace("Bearer ", "");

            return config;
        } else {
            return config;
        }   
    } else {
        return config;
    }
});

Http.interceptors.response.use(function (response) {
    if (response.headers.hasOwnProperty('authorization')) {
        Store.auth.setToken(response.headers.authorization);
    }

    return response;
}, function(error) {

    return Promise.reject(error);
});

export const _http = Http;