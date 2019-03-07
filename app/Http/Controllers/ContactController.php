<?php

namespace App\Http\Controllers;

use App\ContactMessage;
use App\Mail\NewMessage;
use Illuminate\Http\Request;

class ContactController extends Controller
{
    public function create(Request $request)
    {
        $request = json_decode($request->getContent(), true);

        $request['enquiry_types'] = json_encode($request['enquiry_types']);

        $contactMessage = new ContactMessage($request);

        $contactMessage->save();

        \Mail::to('josh@welford.me')->send(new NewMessage($contactMessage));

        return $contactMessage;
    }
}
