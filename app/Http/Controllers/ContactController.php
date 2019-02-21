<?php

namespace App\Http\Controllers;

use App\ContactMessage;
use App\Mail\NewMessage;
use Illuminate\Http\Request;

class ContactController extends Controller
{
    public function create(Request $request)
    {
        $this->validate($request, [
            'name' => 'required',
            'email' => 'required',
            'subject' => 'required',
            'message' => 'required'
        ]);
        
        $contactMessage = new ContactMessage($request->only([
            'name', 'email', 'subject', 'message'
        ]));

        $contactMessage->save();

        \Mail::to('josh@welford.me')->send(new NewMessage($contactMessage));

        return $contactMessage;
    }
}
