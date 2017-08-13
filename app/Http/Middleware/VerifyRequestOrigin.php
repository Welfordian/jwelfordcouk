<?php

namespace App\Http\Middleware;

use Closure;

class VerifyRequestOrigin
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        $whitelist_domains = array('https://imadev.site');

        if (! in_array($request->header("Origin"), $whitelist_domains))
        {
            return response($this->badOrigin(), 403);
        }

        return $next($request);
    }

    public function badOrigin()
    {
        return [
            'status' => 'error',
            'message' => 'unknown origin'
        ];
    }
}
