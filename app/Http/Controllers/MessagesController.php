<?php
namespace App\Http\Controllers;

use App\ContactMessage;
use Illuminate\Http\Request;

class MessagesController extends Controller
{
    public function listAll()
    {
        return ContactMessage::all();
    }

    public function single(Request $request, $id)
    {
        return ContactMessage::findOrFail($id);
    }
}