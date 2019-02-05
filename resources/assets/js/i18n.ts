import { EN } from './i18n/en';
import { FR } from './i18n/fr';

class i18nClass {
    lang:string = "en";
    
    en:any = EN;
    fr:any = FR;

    [key:string]: any;

    constructor() {
        let lang = (localStorage.getItem("language") === null ? "en" : localStorage.getItem("language"));

        this.set(lang);
    }

    get(text:string) {
        return this[this.lang][text];
    }

    set(lang:string) {
        this.lang = lang;
    }
}

export const i18n = new i18nClass();