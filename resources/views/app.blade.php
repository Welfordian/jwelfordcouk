<!doctype html>
<html>
    <head>
        <meta name="csrf-token" content="{{csrf_token()}}">
        <link rel="manifest" href="manifest.json">
        <meta name="mobile-web-app-capable" content="yes">
        <meta name="apple-mobile-web-app-capable" content="yes">
        <meta name="application-name" content="JW">
        <link rel="apple-touch-icon" sizes="57x57" href="https://cdn.jwelford.co.uk/icons/apple-icon-57x57.png">
        <link rel="apple-touch-icon" sizes="60x60" href="https://cdn.jwelford.co.uk/icons/apple-icon-60x60.png">
        <link rel="apple-touch-icon" sizes="72x72" href="https://cdn.jwelford.co.uk/icons/apple-icon-72x72.png">
        <link rel="apple-touch-icon" sizes="76x76" href="https://cdn.jwelford.co.uk/icons/apple-icon-76x76.png">
        <link rel="apple-touch-icon" sizes="114x114" href="https://cdn.jwelford.co.uk/icons/apple-icon-114x114.png">
        <link rel="apple-touch-icon" sizes="120x120" href="https://cdn.jwelford.co.uk/icons/apple-icon-120x120.png">
        <link rel="apple-touch-icon" sizes="144x144" href="https://cdn.jwelford.co.uk/icons/apple-icon-144x144.png">
        <link rel="apple-touch-icon" sizes="152x152" href="https://cdn.jwelford.co.uk/icons/apple-icon-152x152.png">
        <link rel="apple-touch-icon" sizes="180x180" href="https://cdn.jwelford.co.uk/icons/apple-icon-180x180.png">
        <link rel="icon" type="image/png" sizes="192x192" href="https://cdn.jwelford.co.uk/icons/android-icon-192x192.png">
        <link rel="icon" type="image/png" sizes="32x32" href="https://cdn.jwelford.co.uk/icons/favicon-32x32.png">
        <link rel="icon" type="image/png" sizes="96x96" href="https://cdn.jwelford.co.uk/icons/favicon-96x96.png">
        <link rel="icon" type="image/png" sizes="16x16" href="https://cdn.jwelford.co.uk/icons/favicon-16x16.png">
        <meta name="msapplication-TileImage" content="https://cdn.jwelford.co.uk/icons/ms-icon-144x144.png">
        <meta name="apple-mobile-web-app-title" content="JW">
        <meta name="msapplication-starturl" content="/">
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="og:title" content="Joshua Welford" />
        <meta name="og:image" content="https://cdn.jwelford.co.uk/images/me.jpg" />
        <meta name="description" content="The Home of Joshua Welford" />
        <meta name="keywords" content="Joshua Welford, joshua welford, Josh Welford, josh welford, Redcar, redcar, web developer, Web Developer" />
        <meta name="og:description" content="The Home of Joshua Welford" />
        <meta name="robots" content="index,follow" />
        <meta name="DC.title" content="Joshua Welford" />
        <meta name="theme-color" content="#2C3E50" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
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

            <noscript>
                <div class="noscript-container">
                    <div class="alert alert-danger" style="margin-top: -60px;">
                        <button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>
                        <span><strong>Notice: </strong> JavaScript is not enabled. <a href="http://enable-javascript.com/" class="alert-link">Please Enable JavaScript</a>.</span>
                    </div>

                    <h3 style="margin-top: 60px; text-align: center;"><a href="http://enable-javascript.com/" class="alert-link">Please Enable JavaScript</a> or <a href="http://outdatedbrowser.com/">Update your Browser</a> to continue to this site</h3>
                </div>
            </noscript>
        </div>
        
        <script src="./js/app.js"></script>
    </body>
</html>