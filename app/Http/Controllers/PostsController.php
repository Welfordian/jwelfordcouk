<?php
namespace App\Http\Controllers;

use App\Post;
use \Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Input;

class PostsController extends Controller
{
    public function listAll()
    {
        return Post::all();
    }

    public function get(Request $request, $slug)
    {
        return Post::findBySlug($slug)->firstOrFail();
    }

    public function delete(Request $request, $slug)
    {
        Post::findBySlug($slug)->delete();

        return ['success' => true];
    }

    public function verifyIntroImageUrl(Request $request)
    {
        $url = $request->get('url');

        $handle = curl_init($url);
        curl_setopt($handle,  CURLOPT_RETURNTRANSFER, TRUE);

        /* Get the HTML or whatever is linked in $url. */
        $response = curl_exec($handle);

        /* Check for 404 (file not found). */
        $httpCode = curl_getinfo($handle, CURLINFO_HTTP_CODE);

        if($httpCode !== 200) {
            return ['error' => true];
        }

        curl_close($handle);

        return ['error' => false];
    }

    public function update(Request $request, $slug)
    {
        $post = Post::findBySlug($slug)->firstOrFail();

        $post->update(Input::only('title', 'intro_image', 'intro_text', 'content'));

        return $post;
    }

    public function create(Request $request)
    {
        $post = new Post();

        $post->content = $request->get('content');
        $post->intro_text = $request->get('intro');
        $post->title = $request->get('title');
        $post->intro_image = $request->get('image');

        $post->save();

        return $post;
    }

    public function storeImage(Request $request, ApiController $apiController)
    {
        $uri = $request->file('intro_image')->storeAs(
            'post_intro_images', $request->file('intro_image')->getClientOriginalName(), 'spaces'
        );

        return ['path' => $uri];
    }
}