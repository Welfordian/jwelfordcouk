import { User } from './UserStore';
import { Auth } from './AuthStore';

class SharedStore {
    user:any = User;
    auth:any = Auth;
    serviceWorker:any;
    content:any = {
        header: false,
        knowledge: 9,
        summary: {
            title: false,
            content: false
        }
    }
}

export const Store = new SharedStore();