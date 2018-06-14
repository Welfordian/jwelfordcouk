<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/spotify_image/{url}', function($url) {
    header('Content-Type: image/jpeg');
    return file_get_contents($url);
})->where('url', '.*');

Route::get('/spotify', 'ApiController@spotify');
Route::get('/spotify_token', 'ApiController@spotifyToken');
Route::get('{any?}', 'ApiController@web')->where('any', '.*')->middleware('minhtml');