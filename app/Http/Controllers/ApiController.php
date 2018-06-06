<?php

namespace App\Http\Controllers;

use App\Integration;
use Illuminate\Http\Request;
use App\User;
use App\Post;
use App\ContactMessage;
use Tymon\JWTAuth\Facades\JWTAuth;
use GuzzleHttp\Client as Http;

class ApiController extends Controller
{
    public function __construct()
    {
        $this->http = new Http();
    }

    public function web() {
        return view('app');
    }

    public function me (Request $request)
    {
        return $request->user();
    }

    public function users()
    {
        return User::all();
    }

    public function stats(Request $request)
    {
        return [
            'users' => User::count(),
            'posts' => Post::count(),
            'messages' => ContactMessage::count(),
            'files' => 0,
            'token' => $request->token
        ];
    }

    public function settings(Request $request)
    {
        return [
            'settings' => [
                'spotify' => (is_null(Integration::where('name', '=', 'spotify')->first()) ? $this->authUrl($request) : json_decode(Integration::where('name', '=', 'spotify')->first()->data))
            ]
        ];
    }

    public function authUrl(Request $request)
    {
        return ['connected' => false, 'authUrl' => 'https://accounts.spotify.com/authorize?response_type=code' .
            '&client_id=' . env('SPOTIFY_CLIENT_ID') .
            '&scope=' . urlencode('user-read-recently-played user-read-private user-read-currently-playing user-read-playback-state') .
            '&redirect_uri=' . env('APP_URL') . '/api/spotify' .
            '&state=' . base64_encode($request->bearerToken())];
    }

    public function spotify(Request $request)
    {
        $code = $request->get('code');
        $state = $request->get('state');

        JWTAuth::setToken(base64_decode($state))->authenticate();

        $response = $this->http->post('https://accounts.spotify.com/api/token', [
            'headers' => [
                'Authorization' => 'Basic ' . base64_encode(env('SPOTIFY_CLIENT_ID') . ':' . env('SPOTIFY_CLIENT_SECRET'))
            ],
            'form_params' => [
                'grant_type' => 'authorization_code',
                'code' => $code,
                'redirect_uri' => env('APP_URL') . '/api/spotify'
            ]
        ]);

        $data = json_decode($response->getBody()->getContents(), true);
        $data['username'] = $this->getSpotifyUsername($data['access_token']);
        $data['connected'] = true;

        $integration = new Integration();
        $integration->name = 'spotify';
        $integration->data = json_encode($data);

        $integration->save();

        return redirect()->to('/dashboard');
    }

    public function getSpotifyUsername($token)
    {
        $response = $this->http->get('https://api.spotify.com/v1/me', [
            'headers' => [
                'Authorization' => 'Bearer ' . $token
            ]
        ]);


        $data = json_decode($response->getBody()->getContents());
        return $data->id;
    }

    public function spotifyTracks()
    {
        $integration = Integration::where('name', '=', 'spotify')->first();

        if ($integration) {
            $data = json_decode($integration->data, true);
            $currentlyPlaying = $this->getSpotifyCurrentlyPlaying($data['access_token']);
            $recentTracks = $this->getSpotifyRecentTracks($data['access_token']);

            return ['tracks' => [
                'now' => $currentlyPlaying,
                'recent' => $recentTracks
            ]];
        }

        return ['tracks' => []];
    }

    public function getSpotifyCurrentlyPlaying($access_token)
    {
        $response = $this->http->get('https://api.spotify.com/v1/me/player/currently-playing', [
            'headers' => [
                'Authorization' => 'Bearer ' . $access_token
            ]
        ]);

        $data = json_decode($response->getBody()->getContents(), true);

        return $data;
    }

    public function getSpotifyRecentTracks($access_token)
    {
        $response = $this->http->get('https://api.spotify.com/v1/me/player/recently-played', [
            'headers' => [
                'Authorization' => 'Bearer ' . $access_token
            ]
        ]);

        $data = json_decode($response->getBody()->getContents(), true)['items'];

        return $data;
    }

    public function AboutSummary()
    {
        return [
          'title' => 'Summary',
          'content' => 'I am a Web Developer who speciailizes in PHP, SQL, HTML & Javascript. I also have familiarity with .NET, Ruby & Python. but am looking to expand my knowledge in those areas. I have experience in creating CMS\' and mainly write in the OOP aspect. I have also used many REST API\'s and so, in turn, am frequently using JSON and XML. I am also getting quite familiar with AngularJS & SASS.'
        ];
    }

    public function AboutKnowledge()
    {
        return [
            [
                'language' => 'HTML (5)',
                'years' => 6,
                'content' => 'I believe knowledge of HTML is crucial in Web Development and would say my understanding of it is up to current standards.'
            ],
            [
                'language' => 'PHP',
                'years' => 5,
                'content' => 'I can easily create interactive and dynamic websites using PHP alongside MySQL(i). I prefer the OOP aspect of PHP.'
            ],
            [
                'language' => 'Javascript',
                'years' => 6,
                'content' => 'I consider my knowledge of Javascript to be up to the current required standards of Web Development.'
            ],
            [
                'language' => 'CSS',
                'years' => 6,
                'content' => 'Not my favourite languages, but it\'s crucial to Web Development. I can easily and proficiently use CSS.'
            ],
            [
                'language' => 'jQuery',
                'years' => 5,
                'content' => 'I like to have fun with jQuery. It gives such ease to manipulating DOM elements.'
            ],
            [
                'language' => 'Angular',
                'years' => 2,
                'content' => 'AngularJS is a fantastic framework. It makes creating SPA\'s as easy as 1-2-3.'
            ],
            [
                'language' => 'NodeJS',
                'years' => 4,
                'content' => 'Perfect for builing real-time applications among other utilities such as minifying and package requirement. I enjoy using NodeJS.'
            ],
            [
                'language' => 'Debian/Ubuntu',
                'years' => 4,
                'content' => 'As most of the sites I build use DigitalOcean knowledge of how to use Debian/Ubuntu has come to me as I built most of my apps.'
            ],
            [
                'language' => 'Laravel',
                'years' => 4,
                'content' => 'Laravel is my go-to framework for building new PHP applications. It\'s simplicity and structure is unbeaten.'
            ],
        ];
    }
}