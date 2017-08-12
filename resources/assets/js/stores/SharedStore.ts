import { User } from './UserStore';
import { Auth } from './AuthStore';

class SharedStore {
    user:any = User;
    auth:any = Auth;
}

export const Store = new SharedStore();