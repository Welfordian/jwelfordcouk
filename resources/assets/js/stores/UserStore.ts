class UserStore {
    user:any = {};

    constructor() {
        if (localStorage.getItem("user") !== null) {
            let user = JSON.parse(localStorage.getItem("user"));
            this.set(user);
        }
    }
    
    set(user) {
        localStorage.setItem("user", JSON.stringify(user));
        this.user = user;
    }

    get(attribute) {
        return (this.user.hasOwnProperty(attribute) ? this.user[attribute] : "");
    }
}

export const User = new UserStore();