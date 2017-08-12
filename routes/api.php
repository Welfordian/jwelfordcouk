<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('login', 'AuthenticateController@authenticate');

Route::middleware(['jwt.auth', 'jwt.refresh'])->group(function () {
    Route::get('/me', function (Request $request) {
        return $request->user();
    });

    Route::post('/posts', function (Request $request) {
        $title = $request->title;
        $content = $request->content;

        $post = new \App\Post();
        $post->title = $title;
        $post->content = $content;
        $post->save();

        return $post;
    });
});

