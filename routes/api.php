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
Route::get('/modifications', 'ModificationsController@get');
Route::get('/auth', 'AuthenticateController@checkCertificate');
Route::post('/posts/image/verify_url', 'PostsController@verifyIntroImageUrl')->middleware('verify.request.origin');
Route::post('contact', 'ContactController@create')->middleware('verify.request.origin');

Route::group(['middleware' => ['jwt.auth']], function(){
    Route::get('/me', 'ApiController@me');

    Route::get('/files', 'ApiController@listFiles');
    Route::post('/files', 'ApiController@storeFile');
    Route::post('/files/visibility', 'ApiController@toggleVisibility');

    Route::get('/users', 'ApiController@users');

    Route::get('/dashboard/stats', 'ApiController@stats');

    Route::post('/modifications/save', 'ModificationsController@save');

    Route::get('/messages', 'MessagesController@listAll');
    Route::get('/messages/{id}', 'MessagesController@single');

    Route::post('/posts', 'PostsController@create');
    Route::post('/posts/images', 'PostsController@storeImage');
    Route::patch('/posts/{slug}', 'PostsController@update');
    Route::delete('/posts/{slug}', 'PostsController@delete');
});

