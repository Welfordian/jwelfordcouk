<?php

namespace App\Http\Controllers;

use JWTAuth;
use Pusher;
use Illuminate\Http\Request;
use Tymon\JWTAuth\Exceptions\JWTException;

class AuthenticateController extends Controller
{
    public function __construct()
    {
        $this->pusher = new Pusher(config('broadcasting.connections.pusher.key'), config('broadcasting.connections.pusher.secret'), config('broadcasting.connections.pusher.app_id'));
    }

    public function authenticate(Request $request)
    {
        // grab credentials from the request
        $credentials = $request->only('email', 'password');

        try {
            // attempt to verify the credentials and create a token for the user
            if (! $token = JWTAuth::attempt($credentials)) {
                return response()->json(['error' => 'invalid_credentials'], 401);
            }
        } catch (JWTException $e) {
            // something went wrong whilst attempting to encode the token
            return response()->json(['error' => 'could_not_create_token'], 500);
        }

        // all good so return the token
        return response()->json(compact('token'));
    }
    
    public function refreshToken(Request $request)
    {
        try {
            $token = JWTAuth::refresh($request->expiredToken);
            sleep(2);
            return response()->json(compact('token'));
        } catch (JWTException $e) {
            return response()->json(['error' => 'could_not_refresh_token'], 500);
        }
    }

    public function pusher(Request $request)
    {
        $presence_data = [
            'ip' => $_SERVER['REMOTE_ADDR']
        ];
        
        return $this->pusher->presence_auth($request->get('channel_name'), $request->get('socket_id'), uniqid(), $presence_data);
    }

    public function checkCertificate()
    {
        $authenticatedUser = openssl_x509_parse( urldecode($_SERVER['X-SSL-Cert']))['subject']['emailAddress'];

        if ($authenticatedUser !== null) {
            $user = \App\User::where('email', $authenticatedUser)->first();

            if (! $token = JWTAuth::fromUser($user)) {
                return response()->json(['error' => 'no_certificate'], 401);
            }

            return response()->json(compact('token'));
        }

        return response()->json(['error' => 'no_certificate'], 401);
    }

    public function createRole(Request $request)
    {
        // TODO
    }

    public function attachRole(Request $request)
    {
        // TODO
    }

    public function createPermission(Request $request)
    {
        // TODO
    }

    public function attachPermission(Request $request)
    {
        // TODO
    }
}