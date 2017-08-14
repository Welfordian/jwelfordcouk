<template>
    <div>
        <h1><i class="fa fa-youtube-play" style="color: #e52d27"></i> What I've been watching lately... <i @click="fetchVideos" class="fa fa-refresh" v-bind:class="{ 'fa-spin': !Object.keys(videos).length }"></i></h1>

        <hr />

        <div class="row viewing-habits" v-if="Object.keys(videos).length">
            <div class="col-md-3 col-lg-3" v-for="video in videos" v-if="video.title">
                <a class="tutorial-link" target="_blank" rel="noreferrer noopener" v-bind:href="video.url">
                    <div class="well well-custom tutorial">
                        <h4 class="title" id="title"><span v-bind:title="video.title">{{ video.title }}</span></h4>
                        <div class="intro-image-container" style="position: relative;">
                            <img class="tutorial-intro-image image youtube" id="track-image" v-bind:src="video.image">
                            <img class="intro-image-origin" src="//cdn.jwelford.co.uk/images/youtube-play.svg" v-if="video.tag == 'youtube'">
                            <img class="intro-image-origin" src="//cdn.jwelford.co.uk/images/netflix-n.svg" style="width: 145px;" v-else>
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
                videos: {}
            }
        },

        mounted() {
            this.fetchVideos();
        },

        methods: {
            fetchVideos() {
                this.videos = {};

                _http.get('https://welfordian-60215.firebaseio.com/videos.json?limitToLast=50&orderBy=%22$key%22')
                .then(function(data){
                    this.videos = data.data;
                }.bind(this));
            }
        }
    }
</script>

<style scoped>

:root {
    --refresh-hover-color: #586b7d;
}
.fa-refresh {
	float: right;
	cursor: pointer;
}
.fa-refresh:hover {
	color: var(--refresh-hover-color);
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
color: #FFFFF !important;
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
position: relative;
height: 148px;
}
.tutorial-intro-image {
    -webkit-transition: -webkit-transform .3s;
    transition: transform .3s;
    -webkit-transform: scale(1.3);
    -ms-transform: scale(1.3);
    transform: scale(1.3);
position: absolute;
height: auto !important;
}
.tutorial-intro-image.youtube{
top: -25px;
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
/* Make it a marquee */

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
/* Make it move */

@keyframes marquee {
    0% {
        transform: translate(0, 0);
    }
    100% {
        transform: translate(-100%, 0);
    }
}
/* Make it pretty */

.microsoft {
    padding-left: 1.5em;
    position: relative;
}
/* ::before was :before before ::before was ::before - kthx */

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
/* Style the links */

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
.intro-image-origin{
position: absolute;
bottom: 5px;
left: 5px;
width: 45px;
}
.tooltip-inner{
max-width: 245px !important;
padding: 8px;
}
</style>