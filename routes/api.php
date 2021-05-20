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

Route::post('login', 'AuthenticateController@authenticate');
Route::post('pusher/auth', 'AuthenticateController@pusher');
Route::get('token/refresh', 'AuthenticateController@refreshToken');
Route::get('/posts', 'PostsController@listAll');
Route::get('/posts/{slug}', 'PostsController@get');
Route::get('/modifications', 'ModificationsController@get');
Route::get('/auth', 'AuthenticateController@checkCertificate');
Route::post('/posts/{post}/comments', 'PostsController@createComment');
Route::post('/posts/{post}/thumbs_up/add', 'PostsController@addThumbsUp');
Route::post('/posts/{post}/thumbs_up/remove', 'PostsController@removeThumbsUp');
Route::post('/posts/{post}/thumbs_down/add', 'PostsController@addThumbsDown');
Route::post('/posts/{post}/thumbs_down/remove', 'PostsController@removeThumbsDown');
Route::post('/posts/image/verify_url', 'PostsController@verifyIntroImageUrl')->middleware('verify.request.origin');
Route::post('contact', 'ContactController@create');

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