<?php

namespace App\Console\Commands;

use App\Integration;
use GuzzleHttp\Client;
use Illuminate\Console\Command;

class SpotifyTokenRefresh extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'spotify:token:refresh';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Refresh the Spotify auth token';

    protected $http;

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->http = new Client();
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        $spotifys = Integration::where('name', '=', 'spotify')->get();

        $spotifys->each(function($spotify) {
            $integration = json_decode($spotify->data, true);
            $refresh_token = $integration['refresh_token'];

            $response = $this->http->post('https://accounts.spotify.com/api/token', [
                'headers' => [
                    'Authorization' => 'Basic ' . base64_encode(env('SPOTIFY_CLIENT_ID') . ':' . env('SPOTIFY_CLIENT_SECRET'))
                ],
                'form_params' => [
                    'grant_type' => 'refresh_token',
                    'refresh_token' => $refresh_token,
                ]
            ]);

            $data = json_decode($response->getBody()->getContents(), true);

            $integration['access_token'] = $data['access_token'];

            $spotify->data = json_encode($integration);
            $spotify->save();
        });

        $this->info('Token refreshed!');
    }
}
