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
Route::post('pusher/auth', 'AuthenticateController@pusher');
Route::get('token/refresh', 'AuthenticateController@refreshToken');
Route::get('/posts', 'PostsController@listAll');
Route::get('/posts/{slug}', 'PostsController@get');
Route::post('/posts/image/verify_url', 'PostsController@verifyIntroImageUrl')->middleware('verify.request.origin');
Route::post('contact', 'ContactController@create')->middleware('verify.request.origin');

Route::group(['middleware' => ['jwt.auth']], function(){
    Route::get('/me', function (Request $request) {
        // This needs moving to a controller
        return $request->user();
    });

    Route::get('/users', function(Request $request) {
        // This needs moving to a controller
        return \App\User::all();
    });

    Route::get('/dashboard/stats', function(Request $request){
        // You guessed it, this needs moving to a controller

        return [
            'users' => \App\User::count(),
            'posts' => \App\Post::count(),
            'messages' => \App\ContactMessage::count(),
            'files' => 0
        ];
    });
    Route::post('/posts', 'PostsController@create');
    Route::post('/posts/images', 'PostsController@storeImage');
    Route::patch('/posts/{slug}', 'PostsController@update');
    Route::delete('/posts/{slug}', 'PostsController@delete');
});

