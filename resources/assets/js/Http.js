import axios from 'axios';
import { Store } from './stores/SharedStore';
import { Events } from './EventBus';

const Http = axios.create({
    baseURL: '/api'
});

Http.interceptors.request.use(function (config) {
    if (localStorage.getItem("auth_token") !== null) {
        config.headers['Authorization'] = 'Bearer ' + localStorage.getItem('auth_token').replace("Bearer ", "");
    }

    return config;
});

Http.interceptors.response.use(function (response) {
    if (response.headers.hasOwnProperty('authorization')) {
        Store.auth.setToken(response.headers.authorization);
    }

    return response;
}, function(error) {
    if (error.response.status === 401) {
        Events.$emit('auth.expired', {});
    }
});

export const _http = Http;