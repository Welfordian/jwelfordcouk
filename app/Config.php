<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Config extends Model
{
    // Put this in any model and use
// Modelname::findOrCreate($id);
    public static function findOrCreate($domain)
    {
        $obj = static::where('domain', '=', $domain)->first();
        return $obj ?: new static;
    }
}
