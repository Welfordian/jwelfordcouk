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

    public function generateSignedSpacesUrl($path, $expiry = "+10 minutes")
    {
        $s3 = \Storage::disk('spaces');

        $client = $s3->getDriver()->getAdapter()->getClient();

        $command = $client->getCommand('GetObject', [
            'Bucket' => \Config::get('filesystems.disks.spaces.bucket'),
            'Key'    => $path
        ]);

        $request = $client->createPresignedRequest($command, $expiry);

        return (string) $request->getUri();
    }

    public function storeFile(Request $request)
    {
        $uri = $this->generateSignedSpacesUrl($request->file('file')->storeAs(
            'files/'.auth()->user()->id, $request->file('file')->getClientOriginalName(), 'spaces'
        ));

        preg_match('/\.[0-9a-z]+$/', $request->file('file')->getClientOriginalName(), $fileType);

        return [
            'type' => str_replace('.', '', $fileType)[0],
            'uri' => $uri
        ];
    }

    public function listFiles()
    {
        $files = [];

        foreach( \Storage::disk('spaces')->files('files/' . auth()->user()->id) as $file ) {
            preg_match('/\.[0-9a-z]+$/', $file, $fileType);

            $files[] = [
                'type' => str_replace('.', '', $fileType)[0],
                'uri' => $this->generateSignedSpacesUrl($file)
            ];
        }

        return $files;
    }
}