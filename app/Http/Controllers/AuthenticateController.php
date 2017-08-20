<?php

namespace App\Http\Controllers;

use JWTAuth;
use Illuminate\Http\Request;
use Tymon\JWTAuth\Exceptions\JWTException;

class AuthenticateController extends Controller
{
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