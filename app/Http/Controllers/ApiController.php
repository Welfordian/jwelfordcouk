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

    public function generateUnsignedSpacesUrl($file)
    {
        return \Storage::disk('spaces')->url($file);
    }

    public function transformCdnUri($uri)
    {
        return preg_replace('/welford.sfo2.digitaloceanspaces.com/', 'cdn.welford.me', $uri);
    }

    public function storeFile(Request $request)
    {
        $file = $request->file('file')->storeAs(
            'files/'.auth()->user()->id, $request->file('file')->getClientOriginalName(), 'spaces'
        );

        $visibility = \Storage::disk('spaces')->getVisibility($file);

        $uri = ($visibility === "private" ? $this->generateSignedSpacesUrl($file) : "");

        preg_match('/\.[0-9a-z]+$/', $request->file('file')->getClientOriginalName(), $fileType);

        return [
            'type' => str_replace('.', '', $fileType)[0],
            'uri' => $this->transformCdnUri($uri),
            'name' => $file,
            'meta' => \Storage::disk('spaces')->getMetadata($file),
            'visibility' => $visibility,
            'updating' => false,
        ];
    }

    public function listFiles()
    {
        $files = [];

        foreach( \Storage::disk('spaces')->files('files/' . auth()->user()->id) as $file ) {
            preg_match('/\.[0-9a-z]+$/', $file, $fileType);

            $visibility = \Storage::disk('spaces')->getVisibility($file);

            $files[] = [
                'type' => str_replace('.', '', $fileType)[0],
                'uri' => ($visibility === "private" ? $this->transformCdnUri($this->generateSignedSpacesUrl($file)) : $this->transformCdnUri($this->generateUnsignedSpacesUrl($file))),
                'name' => $file,
                'meta' => \Storage::disk('spaces')->getMetadata($file),
                'visibility' => $visibility,
                'updating' => false,
            ];
        }

        return $files;
    }

    public function toggleVisibility(Request $request)
    {
        $file = $request->get('file');
        $visibility = $file['visibility'] === "public" ? "private" : "public";

        \Storage::disk('spaces')->setVisibility($file['name'], $visibility);

        $uri = ($visibility === "private" ? $this->transformCdnUri($this->generateSignedSpacesUrl($file['name'])) : $this->transformCdnUri($this->generateUnsignedSpacesUrl($file['name'])));

        $file['uri'] = $uri;
        $file['visibility'] = $visibility;

        return $file;
    }
}