<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Contracts\Foundation\Application;

class CheckForMaintenanceMode
{
    protected $whitelist;

    public function __construct(Application $app)
    {
        $this->app = $app;
        $this->whitelist = ['82.24.63.240'];
    }

    public function handle($request, Closure $next)
    {
        if ($this->app->isDownForMaintenance() && !in_array($request->ip(), $this->whitelist))
        {
            return response('errors.503', 503);
        }

        return $next($request);
    }
}
