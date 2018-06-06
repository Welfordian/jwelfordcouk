<template>
    <default-layout>
        <div>
            <h1 id="tracks-title"><i title="via Spotify" class="fab fa-spotify"></i> {{ lang.get('music.title') }} <i @click="fetchTracks" class="fal fa-sync" v-bind:class="{ 'fa-spin': !tracks.length }"></i></h1>
            <hr />

            <div id="tracks-container" class="row" v-if="tracks.length">
                <div class="col-md-3" v-if="current">
                    <a class="tutorial-link" target="_blank" rel="noreferrer noopener" v-bind:href="current.item.external_urls.spotify">
                        <div class="well well-custom tutorial" :class="{'show-overlay': playing === current.item.id}" @mouseenter="showOverlay($event)" @mouseleave="hideOverlay($event, current.item)">
                            <h4 class="title"><span v-bind:title="current.item.name + ' - ' + current.item.artists[0].name">{{ current.item.name + ' - ' + current.item.artists[0].name }}</span></h4>
                            <div class="intro-image-container" style="position: relative;">
                                <div class="tutorial-overlay">
                                    <i class="fal fa-play" @click.prevent="previewTrack(current.item)" v-if="playing !== current.item.id"></i>
                                    <i class="fal fa-stop" @click.prevent="stopTrack()" v-else></i>
                                </div>
                                <img class="tutorial-intro-image image" v-bind:src="current.item.album.images[0].url" alt="Album Art">
                            </div>
                        </div>
                    </a>
                </div>
                <div class="col-md-3" v-for="track in tracks">
                    <a class="tutorial-link" target="_blank" rel="noreferrer noopener" v-bind:href="track.track.external_urls.spotify">
                        <div class="well well-custom tutorial" :class="{'show-overlay': (playing === track.track.id)}" @mouseenter="showOverlay($event)" @mouseleave="hideOverlay($event, track.track)">
                            <h4 class="title"><span v-bind:title="track.name + ' - ' + track.track.artists[0].name">{{ track.track.name + ' - ' + track.track.artists[0].name }}</span></h4>
                            <div class="intro-image-container" style="position: relative;">
                                <div class="tutorial-overlay">
                                    <i class="fal fa-play" @click.prevent="previewTrack(track.track)" v-if="playing !== track.track.id"></i>
                                    <i class="fal fa-stop" @click.prevent="stopTrack()" v-else></i>
                                </div>
                                <img class="tutorial-intro-image image" v-bind:src="track.track.album.images[0].url" alt="Album Art">
                            </div>
                        </div>
                    </a>
                </div>
            </div>

            <div class="row loading-row" v-else>
                <i class="fal fa-circle-notch fa-spin" aria-hidden="true"></i></h1>
            </div>
        </div>
    </default-layout>
</template>

<script>
	import { i18n } from '../i18n';
    import { _http } from '../Http';
    import DefaultLayout from "../components/DefaultLayout";

    export default {
      components: {DefaultLayout},
      data() {
            return {
				lang: i18n,
                tracks: [],
                current: false,
                preview_player: new Audio(),
                currentTrackEl: false,
                playing: false
            }
        },

        beforeMount() {
            this.setPlayerEvents();
        },

        mounted() {
            this.fetchTracks();
        },

        methods: {
            showOverlay(e) {
              $(e.currentTarget).addClass('show-overlay');
            },

            hideOverlay(e, track) {
              if(this.playing !== track.id) {
                $(e.currentTarget).removeClass('show-overlay');
              }
            },

            stopTrack() {
              this.playing = false;
              this.preview_player.pause();
              this.preview_player.currentTime = 0;
            },

            setPlayerEvents() {
              this.preview_player.onplay = () => {
                this.playing = this.currentTrackId;
              };

              this.preview_player.onstop = () => {
                this.playing = false;
              };
            },

            previewTrack(track) {
              this.preview_player.src = track.preview_url;
              this.preview_player.load();
              this.preview_player.play();

              this.currentTrackId = track.id;
            },
            fetchTracks() {
                this.tracks = [];

                _http.get('/spotify/tracks')
                .then(function(data) {
                    this.tracks = data.data.tracks.recent;
                    this.current = data.data.tracks.now;
                }.bind(this));
            }
        }
    }
</script>

<style scoped>
:root {
	--refresh-hover-color: #586b7d;
}
.loading-row {
    text-align: center;
    font-size: 5em;
    color: #2c3e50;
}
.tutorial {
	transition: all .3s;
}
.tutorial-link,
.tutorial-link:hover,
.tutorial-link:active {
	text-decoration: none;
}
.tutorial .title {
	padding: 0 0 4px 8px;
	font-weight: bold;
	text-align: left;
	max-width: 98%;
	width: 98%;
	overflow: hidden;
	white-space: nowrap;
}
.intro-image-container {
	overflow: hidden;
}
.tutorial-intro-image {
	-webkit-transition: -webkit-transform .3s;
	transition: transform .3s;
	-webkit-transform: scale(1.3);
	-ms-transform: scale(1.3);
	transform: scale(1.3);
}
.tutorial-overlay {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    z-index: 2;
    opacity: 0;
    background: transparent;
    transition: all .3s;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 4em;
    flex-direction: column;
}
.tutorial.show-overlay .tutorial-overlay {
    opacity: 1;
    background: #2b3e50bd;
}
.tutorial-intro-image,
.intro-image-container {
	width: 100%;
	min-width: 100%;
	max-width: 100%;
}
.tutorial:hover .tutorial-intro-image {
	-webkit-transform: scale(1);
	-ms-transform: scale(1);
	transform: scale(1)
}
.well-custom {
	padding: 0;
	background-color: #2c3e50;
	color: #ffffff;
}
#tracks-title .fa-spotify {
	color: #1DB954;
}

.marquee {
	width: 450px;
	white-space: nowrap;
	overflow: hidden;
	box-sizing: border-box;
}
.marquee span {
	display: inline-block;
	padding-left: 100%;
	text-indent: 0;
	animation: marquee 5s linear infinite;
}
.marquee span:hover {
	animation-play-state: paused
}

@keyframes marquee {
	0% {
		transform: translate(0, 0);
	}
	100% {
		transform: translate(-100%, 0);
	}
}
.microsoft {
	padding-left: 1.5em;
	position: relative;
}
.microsoft:before,
.microsoft::before {
	z-index: 2;
	content: '';
	position: absolute;
	top: -1em;
	left: -1em;
	width: .5em;
	height: .5em;
	box-shadow: 1.0em 1.25em 0 #F65314, 1.6em 1.25em 0 #7CBB00, 1.0em 1.85em 0 #00A1F1, 1.6em 1.85em 0 #FFBB00;
}
.microsoft:after,
.microsoft::after {
	z-index: 1;
	content: '';
	position: absolute;
	top: 0;
	left: 0;
	width: 2em;
	height: 2em;
	background-image: linear-gradient(90deg, white 70%, rgba(255, 255, 255, 0));
}
.vanity {
	color: #333;
	text-align: center;
}
.vanity a,
.microsoft a {
	color: #1570A6;
	transition: color .5s;
	text-decoration: none;
}
.vanity a:hover,
.microsoft a:hover {
	color: #F65314;
}
/* Style toggle button */

.toggle {
	display: block;
	margin: 2em auto;
}
.preview-link {
    font-size: 15px;
    display: block;
    margin-top: 18px;
}
#tracks-title .fa-sync {
	float: right;
	cursor: pointer;
}
#tracks-title .fa-sync:hover {
	color: var(--refresh-hover-color);
}
</style>