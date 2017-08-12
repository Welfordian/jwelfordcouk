class i18nClass {
    lang:string = "en";
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

    en:any = {
        'en': 'English',
        'fr': 'French',
        'currency': '£',
        'navbar.about': 'About',
        'navbar.videos': 'Videos',
        'navbar.music': 'Music',
        'navbar.contact': 'Contact',
        'email_address': 'E-mail Address',
        'password': 'Password',
        'remember_me': 'Remember Me',
        'password_forgot': 'Forgot your password?',
        'navbar.login': 'Login',
        'navbar.logout': 'Logout',
        'summary.title': 'Summary',
        'summary': "I am a Web Developer who speciailizes in PHP, SQL, HTML &amp; Javascript. I also have familiarity with .NET, Ruby &amp; Python. but am looking to expand my knowledge in those areas. I have experience in creating CMS' and mainly write in the OOP aspect. I have also used many REST API's and so, in turn, am frequently using JSON and XML. I am also getting quite familiar with AngularJS & SASS.",
        'languages.html': "I believe knowledge of HTML is crucial in Web Development and would say my understanding of it is up to current standards.",
        'languages.php': "I can easily create interactive and dynamic websites using PHP alongside MySQL(i). I prefer the OOP aspect of PHP.",
        'languages.javascript': "I consider my knowledge of Javascript to be up to the current required standards of Web Development.",
        'languages.css': "Not my favourite languages, but it's crucial to Web Development. I can easily and proficiently use CSS.",
        'languages.jquery': "I like to have fun with jQuery. It gives such ease to manipulating DOM elements.",
        'languages.angular': "AngularJS is a fantastic framework. It makes creating SPA's as easy as 1-2-3.",
        'languages.nodejs': "Perfect for builing real-time applications among other utilities such as minifying and package requirement. I enjoy using NodeJS.",
        'languages.debian': "As most of the sites I build use DigitalOcean knowledge of how to use Debian/Ubuntu has come to me as I built most of my apps.",
        'languages.laravel': "Laravel is my go-to framework for building new PHP applications. It's simplicity and structure is unbeaten."
    }

    fr:any = {
        'en': 'Anglais',
        'fr': 'français',
        'currency': '€',
        'navbar.about': 'Sur',
        'navbar.videos': 'Vidéos',
        'navbar.music': 'Musique',
        'navbar.contact': 'Contact',
        'email_address': 'adresse é-mail',
        'password': 'Mot de passe',
        'remember_me': 'Souviens-toi de moi',
        'password_forgot': 'Mot de passe oublié?',
        'navbar.login': "S'identifier",
        'navbar.logout': "Connectez - Out",
        'summary.title': 'Sommaire',
        'summary': "Je suis un développeur Web spécialisé dans PHP, SQL, HTML et amp; Javascript. Je me suis également familiarisé avec .NET, Ruby & amp; Python. Mais je cherche à élargir mes connaissances dans ces domaines. J'ai de l'expérience dans la création de CMS et j'écris principalement dans l'aspect OOP. J'ai également utilisé de nombreuses API REST et, à leur tour, j'utilise souvent JSON et XML. Je suis également très familiarisé avec AngularJS & amp; SASS.",
        'languages.title': 'Compétences principales'
    }
}

export const i18n = new i18nClass();