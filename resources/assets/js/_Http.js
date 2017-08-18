import axios from 'axios';
import regeneratorRuntime from "regenerator-runtime";
import { Store } from './stores/SharedStore';
import { Events } from './EventBus';
import { PopupAuth } from './PopupAuth';

const Http = axios.create({
    baseURL: '/api'
});

Http.interceptors.request.use(async function (config) {
    if (! Store.auth.tokenValid() && ! Store.auth.refreshingToken)
    {
        Store.auth.refreshToken();
    }

    if (Store.auth.refreshingToken) {
        let token = await new Promise(function(resolve, reject){
            Events.$on('token.refreshed', function(token){
                resolve();
            });
        });
        
        config.headers['Authorization'] = 'Bearer ' + localStorage.getItem('auth_token').replace("Bearer ", "")

        return config;
    } else if (localStorage.getItem("auth_token") !== null) {
        if (/\/api\//.test(config.url)) {
            config.headers['Authorization'] = 'Bearer ' + localStorage.getItem('auth_token').replace("Bearer ", "");
        }

        return config;
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