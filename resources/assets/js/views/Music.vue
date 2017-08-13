<template>
    <div>
        <h1 id="tracks-title"><i title="via Spotify" class="fa fa-spotify"></i> What I'm listening to these days... <i @click="fetchTracks" class="fa fa-refresh" v-bind:class="{ 'fa-spin': loadingData }"></i></h1>
        <hr />

        <div id="tracks-container" class="row" v-if="!loadingData">
            <div class="col-md-3" v-for="track in tracks">
                <a class="tutorial-link" target="_blank" rel="noreferrer noopener" v-bind:href="track.url">
                    <div class="well well-custom tutorial">
                        <h4 class="title" id="title"><span v-bind:title="getTrackTitle(track)">{{ getTrackTitle(track) }}</span></h4>
                        <div class="intro-image-container">
                            <img class="tutorial-intro-image image" id="track-image" v-bind:src="'https://jwelford.co.uk/lastFM-Image.php?lfm_url=' + getLargestAlbumImage(track)">
                        </div>
                    </div>
                </a>
            </div>
        </div>

        <div class="row loading-row" v-else>
            <i class="fa fa-circle-o-notch fa-spin" aria-hidden="true"></i></h1>
        </div>
    </div>
</template>

<script>
    import { _http } from '../Http';

    export default {
        data() {
            return {
                loadingData: true,
                tracks: []
            }
        },
        
        mounted() {
            this.fetchTracks();
        },

        methods: {
            fetchTracks() {
                this.loadingData = true;

                _http.get('https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=welfordian&api_key=6136000ba0899c52db5ebcee77d4be15&format=json')
                .then(function(data) {
                    this.tracks = data.data.recenttracks.track;
                    this.loadingData = false;
                }.bind(this));
            },

            getTrackTitle(track) {
                return track['artist']['#text'] + ' - ' + track['name'];
            },

            getLargestAlbumImage(track) {
                var sizes = [];
                
                track.image.forEach(function (image) {
                        sizes[image['size']] = image['#text'];
                });

                if (sizes['extralarge'].length !== 0) {
                    return sizes['extralarge'];
                } else if (sizes['large'].length !== 0) {
                    return sizes['large'];
                } else if (sizes['medium'].length !== 0) {
                    return sizes['medium'];
                } else if (sizes['small'].length !== 0) {
                    return sizes['small'];
                } else {
                    return "";
                }
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
.tutorial:hover {
	-webkit-transform: scale(1.03);
	-ms-transform: scale(1.03);
	transform: scale(1.03);
	box-shadow: 0 0 13px #CCC;
	z-index: 3;
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
#tracks-title .fa-refresh {
	float: right;
	cursor: pointer;
}
#tracks-title .fa-refresh:hover {
	color: var(--refresh-hover-color);
}
</style>