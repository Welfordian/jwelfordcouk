import { User } from './UserStore';
import { _http } from '../Http';
import { Events } from '../EventBus';
import { PopupAuth } from '../PopupAuth';
import axios from 'axios';
import router from '../routes';

class AuthStore {
    authenticated:boolean = false;
    refreshingToken:boolean = false;
    shouldShowPopup:boolean = false;

    constructor() {
        this.assignEvents();
        this.check();
    }

    assignEvents() {
        Events.$on('popupAuth.login', function(credentials){
            console.log(credentials);
        });

        Events.$on('popupAuth.cancel', function(popup){
            this.logout().then(function(){
                popup.hide();
                router.push("/login");
            });
        }.bind(this));
    }

    login(credentials) {
        var self = this;
        
        return new Promise(function(resolve, reject){
            _http.post("/login", credentials)
            .then(function(data){
                localStorage.setItem('auth_token', data.data.token);

                self.getUser()
                .then(function(data){
                    User.set(data.data);

                    self.authenticated = true;

                    resolve();
                });
            })
            .catch(function(error){
                reject(error);
            });
        });
    }

    logout() {
        var self = this;

        return new Promise(function(resolve, reject){
            localStorage.removeItem('auth_token');
            localStorage.removeItem('user');
            self.authenticated = false;

            resolve();
        });
    }

    check() {
        var jwt = localStorage.getItem('auth_token'),
            self = this;

        if(jwt) {
            this.authenticated = true

            this.getUser()
                .then(function(data){
                    User.set(data.data);
                }).catch(function(){
                    this.showPopupAuth();
                }.bind(this));
        }
        else {
            this.authenticated = false      
        }
    }

    getUser() {
        return _http.get("/me");
    }
    
    showPopupAuth() {
        if (/^\/dashboard/.test(router.apps[0]._route.path)) {
            let auth = new PopupAuth();

            this.shouldShowPopup = false;
        } else {
            this.shouldShowPopup = true;
        }
    }

    setToken(token) {
        this.refreshingToken = false;
        Events.$emit('token.refreshed', token);
        localStorage.setItem('auth_token', token);
    }

    tokenValid() {
        let token = localStorage.getItem("auth_token");
        let base64Url = token.split('.')[1];
        let base64 = base64Url.replace('-', '+').replace('_', '/');
        let decodedToken = JSON.parse(window.atob(base64));
        let currentTime = (new Date).getTime();

        if ((decodedToken.exp * 1000) < currentTime)
        {
            return false;
        }

        return true;
    }

    async refreshToken() {
        this.refreshingToken = true;
        
        let expiredToken = localStorage.getItem("auth_token");

        let response = await new Promise(function(resolve, reject){
            axios.get('/api/token/refresh', {
                params: {
                    expiredToken
                }
            }).then(function(response){
                resolve(response);
            }).catch(function(error){
                reject(error);
            });

            return response;
        }).then(function(response){
            this.setToken(response.data.token);
        }.bind(this)).catch(function(error){
            this.refreshingToken = false;
            this.showPopupAuth();
        }.bind(this));
    }
}

export const Auth = new AuthStore();