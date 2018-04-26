<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use App\Post;
use App\ContactMessage;

class ApiController extends Controller
{
    public function web() {
        return view('app');
    }

    public function me (Request $request)
    {
        return $request->user();
    }

    public function users() {
        return User::all();
    }

    public function stats(){
        return [
            'users' => User::count(),
            'posts' => Post::count(),
            'messages' => ContactMessage::count(),
            'files' => 0
        ];
    }
}