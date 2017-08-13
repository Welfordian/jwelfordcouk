<!doctype html>
<html>
    <head>
        <meta name="csrf-token" content="{{csrf_token()}}">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
        <link rel="stylesheet" href="/css/app.css">
        <title>Devsite</title>
    </head>
    <body>
        <div class="container">
            <div id="app" v-cloak>
                <navbar>
                    <template slot="left-links">
                        <navbar-link href="/about" icon="user">@{{ lang.get('navbar.about') }}</navbar-link>
                        <navbar-link href="/videos" icon="play">@{{ lang.get('navbar.videos') }}</navbar-link>
                        <navbar-link href="/music" icon="music">@{{ lang.get('navbar.music') }}</navbar-link>
                        <navbar-link href="/contact" icon="inbox">@{{ lang.get('navbar.contact') }}</navbar-link>
                    </template>

                    <template slot="right-links">
                        <auth-button></auth-button>
                        <language-selector></language-selector>
                    </template>
                </navbar>
                
                <router-view></router-view>
            </div>
        </div>
        
        <script src="./js/app.js"></script>
    </body>
</html>