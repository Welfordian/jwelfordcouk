import { User } from './UserStore';
import { _http } from '../Http';
import router from '../routes';

class AuthStore {
    authenticated:boolean = false;

    constructor() {
        this.check()
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
                    self.authenticated = false;
                    localStorage.removeItem("auth_token");

                    router.push("login");
                });
        }
        else {
            this.authenticated = false      
        }
    }

    getUser() {
        let self = this;

        return _http.get("/me");
    }

    setToken(token) {
        localStorage.setItem('auth_token', token);
    }

    refreshToken() {
        // Refresh the token
    }
}

export const Auth = new AuthStore();