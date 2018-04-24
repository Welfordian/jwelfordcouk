<?php

namespace App\Http\Controllers;

use App\Config;
use Illuminate\Http\Request;

class ModificationsController extends Controller
{
    public function get(Request $request)
    {
        if ($this->hasSubdomain($request->server('HTTP_HOST'))) {
            $server = explode('.', $request->server('HTTP_HOST'));
            $subdomain = $server[0];
        } else {
            $subdomain = "/";
        }

        return Config::where('domain', '=', $subdomain)->firstOrFail();
    }

    public function save(Request $request)
    {
        $domain = $request->get('domain') ?? '/';

        $config = Config::findOrCreate($domain);

        $config->domain = $domain;
        $config->config = json_encode($request->get('config'));

        $config->save();
    }

    private function hasSubdomain($host) {
        $exploded = explode('.', $host);
        return (count($exploded) > 2);
    }
}
