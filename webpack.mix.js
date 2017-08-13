const { mix } = require('laravel-mix');
var SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.webpackConfig({
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    loader: 'ts-loader',
                    exclude: /node_modules/,
                },
            ],
        },
        resolve: {
            extensions: ['*', '.js', '.jsx', '.vue', '.ts', '.tsx'],
        },
        plugins: [
            new SWPrecacheWebpackPlugin({
                cacheId: 'pwa',
                filename: 'sw.js',
                staticFileGlobs: ['public/**/*.{css,eot,svg,ttf,woff,woff2,js,html}', ],
                minify: true,
                stripPrefix: 'public/',
                handleFetch: true,
                dynamicUrlToDependencies: {
                    '/': ['resources/views/app.blade.php'],
                    '/about': ['resources/views/app.blade.php'],
                    '/videos': ['resources/views/app.blade.php'],
                    '/music': ['resources/views/app.blade.php'],
                    '/contact': ['resources/views/app.blade.php'],
                },
                staticFileGlobsIgnorePatterns: [/\.map$/, /mix-manifest\.json$/, /manifest\.json$/, /sw\.js$/],
                runtimeCaching: [
                    {
                        urlPattern: /^https:\/\/fonts\.googleapis\.com\//,
                        handler: 'cacheFirst'
                    },
                    {
                        urlPattern: /^https:\/\/jwelford.co.uk\//,
                        handler: 'cacheFirst'
                    },
                    {
                        urlPattern: /^https:\/\/maxcdn\.bootstrapcdn\.com\//,
                        handler: 'cacheFirst'
                    }
                ],
                importScripts: [
                    'js/sw-toolbox/sw-toolbox.js',
                    'js/sw-toolbox/toolbox.js'
                ]
            }),
    ]
    })
    .browserSync("imadev.site")
    .js('resources/assets/js/app.js', 'public/js')
    .sass('resources/assets/sass/app.scss', 'public/css');
