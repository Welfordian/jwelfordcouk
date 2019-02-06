<?php

namespace App;

use App\Http\Controllers\ApiController;
use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    protected $fillable = ['title', 'intro_image', 'intro_text', 'content'];
    protected $apiController;

    public function __construct(array $attributes = [])
    {
        $this->apiController = app()->make('App\\Http\\Controllers\\ApiController');
        parent::__construct($attributes);
    }

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

    public function getIntroImageAttribute($intro_image)
    {
        //return $this->apiController->generateSignedSpacesUrl($intro_image, '+5 seconds');
        return $this->apiController->transformCdnUri($this->apiController->generateSignedSpacesUrl($intro_image, '+5 seconds'));
    }
}
