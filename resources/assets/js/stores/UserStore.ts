class UserStore {
    user:any = {};

    set(user) {
        this.user = user;
    }

    get(attribute) {
        return (this.user.hasOwnProperty(attribute) ? this.user[attribute] : "");
    }
}

export const User = new UserStore();