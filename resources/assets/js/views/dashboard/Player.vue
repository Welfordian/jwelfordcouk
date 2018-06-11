<template>
    <dashboard-layout full-width>
        <div v-if="spotify_token" class="player_container">
            <div class="outer">
                <div class="inner">
                    <div class="card-wrapper">
                        <div class="box-top">
                            <a href="javascript:void(0);" class="back-button"><i class="fa fa-search"></i></a>
                            <a href="javascript:void(0);" class="fav-button"><i class="fa fa-heart"></i></a>
                            <div class="status-box">{{ meta.contextDescription }}</div>
                        </div>
                        <div class="box-snapshot">
                            <img :src="meta.imageSrc" />
                        </div>
                        <div class="box-control">
                            <div class="progress-bar" @click.prevent="setPosition($event)"><span data-percent="40" :style="{ width: progressPercentage }"></span></div>
                            <a @click.prevent="toggleShuffle()" class="shuffle-bt" :class="{'shuffle-loop-on': meta.shuffle === true}"><i class="fa fa-random"></i></a>
                            <a @click.prevent="toggleRepeat()" class="loop-bt" :class="{'shuffle-loop-on': meta.repeat_mode !== 0}">
                                <span class="repeat-ctx" v-if="meta.repeat_mode === 1"></span>
                                <span class="repeat-track" v-if="meta.repeat_mode === 2">1</span>
                                <i class="fa fa-exchange"></i>
                            </a>
                            <span class="current-time">{{ millisToMinutesAndSeconds(meta.position) }}</span>
                            <span class="total-time">{{ millisToMinutesAndSeconds(meta.duration) }}</span>
                        </div>
                        <div class="box-player">
                            <h1 class="song-name">{{ meta.trackName }}
                                <span class="artist-name">{{ meta.artistName }}</span>
                            </h1>
                            <div class="control">
                                <a @click.prevent="previousTrack()" ><i class="fa fa-backward"></i></a>
                                <a @click.prevent="togglePlay" class="play-bt" >
                                    <i class="fa fa-play-circle" v-if="!meta.playing"></i>
                                    <i class="fa fa-pause-circle" v-else></i>
                                </a>
                                <a @click.prevent="nextTrack()"><i class="fa fa-forward"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div v-else>
            <h1 style="text-align: center;">To continue, please connect Spotify in <router-link to="/dashboard/settings">Settings</router-link>.</h1>
        </div>
    </dashboard-layout>
</template>

<script>
    import DashboardLayout from "../../components/DashboardLayout";
    import axios from 'axios';
    import {_http} from "../../Http";

    export default {
      components: {DashboardLayout},

      data() {
        return {
          player: false,
          spotify_token: false,
          devices: false,
          playlists: false,
          meta: {
            position: 0,
            duration: 0,
            playing: false,
            imageSrc: false,
            shuffle: false,
            repeat_mode: 0,
            trackName: "",
            contextDescription: ""
          }
        }
      },

      beforeMount() {
        window.spotifyReady = () => {
          window.spotifyAvailable = true;
        };

        window.onSpotifyWebPlaybackSDKReady = () => {
          let spotifyTimeout;

          spotifyTimeout = setInterval(() => {
            if (window.spotifyAvailable) {
              clearInterval(spotifyTimeout);

              const token = this.spotify_token;
              const player = new Spotify.Player({
                name: 'Josh\'s Dashboard',
                getOAuthToken: cb => { cb(token); }
              });

              // Error handling
              player.addListener('initialization_error', ({ message }) => { console.error(message); });
              player.addListener('authentication_error', ({ message }) => { console.error(message); });
              player.addListener('account_error', ({ message }) => { console.error(message); });
              player.addListener('playback_error', ({ message }) => { console.error(message); });

              // Playback status updates
              player.addListener('player_state_changed', state => {
                window.state = state;
                this.meta.playing = !state.paused;
                this.meta.imageSrc = state.track_window.current_track.album.images[state.track_window.current_track.album.images.length - 1].url;
                this.meta.trackName = state.track_window.current_track.name;
                this.meta.duration = state.duration;
                this.meta.position = state.position;
                this.meta.artistName = state.track_window.current_track.artists.map(function(artist) { return artist.name; }).join(', ');
                this.meta.contextDescription = state.context.metadata.context_description;
                this.meta.shuffle = state.shuffle;
                this.meta.repeat_mode = state.repeat_mode;
              });

              // Ready
              player.addListener('ready', ({ device_id }) => {
                this.deviceId = device_id;

                this.spotifyPlayerReady(player);
              });

              // Not Ready
              player.addListener('not_ready', ({ device_id }) => {
                console.log('Device ID has gone offline', device_id);
              });

              player.connect();
            }
          }, 100);
        };

        this.addScript('https://sdk.scdn.co/spotify-player.js');
        this.spotifyApi = axios.create({
          baseURL: 'https://api.spotify.com/v1'
        });

        this.fetchToken().then(() => {
          this.setup();
        });

        setInterval(this.fetchToken, 40 * 60 * 1000);
      },

      methods: {
        async fetchToken() {
          return new Promise(async (resolve) => {
            this.spotify_token = (await _http.get('/spotify_token')).data.token;

            this.spotifyApi.defaults.headers['Authorization'] = 'Bearer ' + this.spotify_token;

            resolve();
          });
        },

        async getDevices() {
          this.devices = (await this.spotifyApi.get('/me/player/devices')).data.devices;
        },

        async getPlaylists() {
          this.playlists = (await this.spotifyApi.get('/me/playlists')).data.items;
        },

        async play() {
          this.spotifyApi.put('/me/player/play?device_id=' + this.deviceId);
        },

        async playPlaylist(playlist) {
          this.spotifyApi.put('/me/player/play', {
            'context_uri': playlist.uri
          })
        },

        async togglePlay() {
          this.player.togglePlay().then((s) => {
            this.meta.playing = !this.meta.playing;
          });
        },

        async nextTrack() {
          this.player.nextTrack();
        },

        async previousTrack() {
          this.player.previousTrack();
        },

        transferPlayback() {
          this.spotifyApi.put('/me/player', {
            'device_ids': [
              this.deviceId
            ]
          });
        },

        spotifyPlayerReady(player) {
          this.player = player;

          this.transferPlayback();
          this.getDevices();
          this.getPlaylists();
          this.play();

          setInterval(() => {
            this.player.getCurrentState().then((s) => {
              this.meta.position = s.position;
            });
          }, 500);
        },

        millisToMinutesAndSeconds(millis) {
          var minutes = Math.floor(millis / 60000);
          var seconds = ((millis % 60000) / 1000).toFixed(0);
          return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
        },

        setup() {
          window.spotifyReady();
        },

        setStatePosition(ms) {
            return this.millisToMinutesAndSeconds(ms);
        },

        setPosition(e) {
          var parentOffset = $(e.target).parent().offset();
          var relX = e.pageX - parentOffset.left;
          var perc = relX / $(e.target).width() * 100;
          var position = (perc / 100) * this.meta.duration;

          this.spotifyApi.put('/me/player/seek?position_ms=' + Math.ceil(position))
        },

        toggleRepeat() {
            let states = [
              'off',
              'context',
              'track'
            ];

          if (this.meta.repeat_mode === 2) {
            this.meta.repeat_mode = 0;
          } else {
            this.meta.repeat_mode++;
          }

          this.spotifyApi.put('/me/player/repeat?state=' + states[this.meta.repeat_mode]);

        },

        toggleShuffle() {

        }
      },

      computed: {
        progressPercentage() {
            return this.meta.position / this.meta.duration * 100 + '%';
        }
      }
    }
</script>

<style scoped>
    .base-ts, .card-wrapper a {
        transition-duration: 0.5s;
        transition-timing-function: cubic-bezier(0.23, 1, 0.32, 1);
    }

    html {
        height: 100%;
    }

    body {
        height: 100%;
        width: 100%;
        background-color: #ff5917;
        background-image: linear-gradient(90deg,#ff5917, #ff0a03);
    }

    .outer {
        display: table;
        height: 100%;
        width: 100%;
    }

    .inner {
        display: table-cell;
        vertical-align: middle;
        text-align: center;
    }

    .card-wrapper {
        display: inline-block;
        width: 100%;
        padding: 0 15px;
        margin: 30px 0;
        max-width: 320px;
        background-color: #2b3e50;
        -webkit-border-radius: 1em;
        -moz-border-radius: 1em;
        box-shadow: 0 0 80px 10px rgba(0, 0, 0, 0.5);
        color: #fff;
        position: relative;
        overflow: hidden;
    }
    .card-wrapper:before {
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        width: 160px;
        height: 320px;
        z-index: 0;
        background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0));
        -webkit-transform-origin: center center;
        transform-origin: center center;
        -webkit-transform: rotate(60deg) translate(-140px, -80px);
        transform: rotate(60deg) translate(-140px, -80px);
    }
    .card-wrapper:after {
        content: "";
        position: absolute;
        right: 0;
        bottom: 0;
        width: 120%;
        height: 180px;
        -webkit-transform-origin: right top;
        transform-origin: right top;
        -webkit-transform: rotate(-30deg);
        transform: rotate(-30deg);
        background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0));
    }
    .card-wrapper a {
        color: rgba(255, 255, 255, 0.97);
        transition-property: color, box-shadow;
    }
    .card-wrapper a:hover {
        color: #fff;
        text-shadow: 0 0 10px rgba(255, 255, 255, 0.97);
    }
    .card-wrapper .box-top {
        padding: 25px 0 25px;
        position: relative;
    }
    .card-wrapper .box-top i {
        vertical-align: middle;
    }
    .card-wrapper .box-top .back-button {
        float: left;
    }
    .card-wrapper .box-top .fav-button {
        float: right;
    }
    .card-wrapper .box-snapshot {
        font-size: 12.5em;
        margin-bottom: 10px;
        margin-left: -15px;
        width: 111%;
    }
    .card-wrapper .box-control {
        padding: 1.875em 0;
        position: relative;
    }
    .card-wrapper .box-control .progress-bar {
        height: 6px;
        width: 100%;
        background-color: rgba(255, 255, 255, 0.17);
        position: relative;
    }
    .card-wrapper .box-control .progress-bar span {
        display: block;
        position: absolute;
        background-color: #18bc9c;
        height: 6px;
        pointer-events: none;
    }
    .card-wrapper .box-control .shuffle-bt {
        position: absolute;
        top: 0;
        left: 0;
    }
    .card-wrapper .box-control .loop-bt {
        right: 0;
        top: 0;
        position: relative;
        float: right;
        margin-top: -35px;
    }
    .card-wrapper .box-control > span {
        color: rgba(255, 255, 255, 0.5);
        font-size: 12px;
    }
    .card-wrapper .box-control .current-time {
        position: absolute;
        left: 0;
        bottom: 5px;
    }
    .card-wrapper .box-control .total-time {
        position: absolute;
        right: 0;
        bottom: 5px;
    }
    .card-wrapper .box-player {
        text-align: center;
        position: relative;
        z-index: 2;
    }
    .card-wrapper .box-player .song-name {
        font-weight: normal;
        font-size: 1em;
    }
    .card-wrapper .box-player .song-name .artist-name {
        font-size: 1em;
        display: block;
        color: rgba(255, 255, 255, 0.5);
        margin-top: 10px;
    }
    .card-wrapper .box-player .control {
        display: inline-block;
        margin-bottom: 30px;
    }
    .card-wrapper .box-player .control a {
        display: inline-block;
        font-size: 32px;
        margin: 0 15px;
        vertical-align: middle;
    }
    .card-wrapper .box-player .control a.play-bt {
        font-size: 5em;
    }

    .box-snapshot img {
        width: 100%;
    }

    span.repeat-ctx {
        width: 5px;
        height: 5px;
        background: #18bc9c;
        position: absolute;
        border-radius: 100%;
        right: 6px;
        top: -3px;
    }

    span.repeat-track {
        position: absolute;
        top: -9px;
        font-size: 10px;
        left: 4px;
        color: #18bc9c;
    }

    .shuffle-loop-on {
       color: #18bc9c !important;
    }

</style>