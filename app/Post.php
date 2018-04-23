<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    protected $fillable = ['title', 'intro_image', 'intro_text', 'content'];

    public static function boot()
    {
        parent::boot();

        static::creating(function($model) {
            $model->slug = str_slug($model->title);// change the ToBeSluggiefied

            $latestSlug =
                static::whereRaw("slug = '$model->slug' or slug LIKE '$model->slug-%'")
                    ->latest('id')
                    ->value('slug');
            if ($latestSlug) {
                $pieces = explode('-', $latestSlug);

                $number = intval(end($pieces));

                $model->slug .= '-' . ($number + 1);
            }
        });
    }

    public static function scopeFindBySlug($query, $slug)
    {
        $query->where('slug', '=', $slug);
    }
}
