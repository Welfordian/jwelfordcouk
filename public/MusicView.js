webpackJsonp([3],{235:function(t,a,e){var r=e(1)(e(249),e(250),!1,function(t){e(247)},"data-v-f22a2720",null);t.exports=r.exports},247:function(t,a,e){var r=e(248);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);e(6)("256a2927",r,!0,{})},248:function(t,a,e){(t.exports=e(5)(!1)).push([t.i,'[data-v-f22a2720]:root{--refresh-hover-color:#586b7d}.loading-row[data-v-f22a2720]{text-align:center;font-size:5em;color:#2c3e50}.tutorial[data-v-f22a2720]{-webkit-transition:all .3s;transition:all .3s}.tutorial-link[data-v-f22a2720],.tutorial-link[data-v-f22a2720]:active,.tutorial-link[data-v-f22a2720]:hover{text-decoration:none}.tutorial[data-v-f22a2720]:hover{-webkit-transform:scale(1.03);transform:scale(1.03);-webkit-box-shadow:0 0 13px #ccc;box-shadow:0 0 13px #ccc;z-index:3}.tutorial .title[data-v-f22a2720]{padding:0 0 4px 8px;font-weight:700;text-align:left;max-width:98%;width:98%;overflow:hidden;white-space:nowrap}.intro-image-container[data-v-f22a2720]{overflow:hidden}.tutorial-intro-image[data-v-f22a2720]{-webkit-transition:-webkit-transform .3s;transition:-webkit-transform .3s;transition:transform .3s;transition:transform .3s,-webkit-transform .3s;-webkit-transform:scale(1.3);transform:scale(1.3)}.intro-image-container[data-v-f22a2720],.tutorial-intro-image[data-v-f22a2720]{width:100%;min-width:100%;max-width:100%}.tutorial:hover .tutorial-intro-image[data-v-f22a2720]{-webkit-transform:scale(1);transform:scale(1)}.well-custom[data-v-f22a2720]{padding:0;background-color:#2c3e50;color:#fff}#tracks-title .fa-spotify[data-v-f22a2720]{color:#1db954}.marquee[data-v-f22a2720]{width:450px;white-space:nowrap;overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box}.marquee span[data-v-f22a2720]{display:inline-block;padding-left:100%;text-indent:0;-webkit-animation:marquee-data-v-f22a2720 5s linear infinite;animation:marquee-data-v-f22a2720 5s linear infinite}.marquee span[data-v-f22a2720]:hover{-webkit-animation-play-state:paused;animation-play-state:paused}@-webkit-keyframes marquee-data-v-f22a2720{0%{-webkit-transform:translate(0);transform:translate(0)}to{-webkit-transform:translate(-100%);transform:translate(-100%)}}@keyframes marquee-data-v-f22a2720{0%{-webkit-transform:translate(0);transform:translate(0)}to{-webkit-transform:translate(-100%);transform:translate(-100%)}}.microsoft[data-v-f22a2720]{padding-left:1.5em;position:relative}.microsoft[data-v-f22a2720]:before{z-index:2;content:"";position:absolute;top:-1em;left:-1em;width:.5em;height:.5em;-webkit-box-shadow:1em 1.25em 0 #f65314,1.6em 1.25em 0 #7cbb00,1em 1.85em 0 #00a1f1,1.6em 1.85em 0 #fb0;box-shadow:1em 1.25em 0 #f65314,1.6em 1.25em 0 #7cbb00,1em 1.85em 0 #00a1f1,1.6em 1.85em 0 #fb0}.microsoft[data-v-f22a2720]:after{z-index:1;content:"";position:absolute;top:0;left:0;width:2em;height:2em;background-image:-webkit-gradient(linear,left top,right top,color-stop(70%,#fff),to(hsla(0,0%,100%,0)));background-image:linear-gradient(90deg,#fff 70%,hsla(0,0%,100%,0))}.vanity[data-v-f22a2720]{color:#333;text-align:center}.microsoft a[data-v-f22a2720],.vanity a[data-v-f22a2720]{color:#1570a6;-webkit-transition:color .5s;transition:color .5s;text-decoration:none}.microsoft a[data-v-f22a2720]:hover,.vanity a[data-v-f22a2720]:hover{color:#f65314}.toggle[data-v-f22a2720]{display:block;margin:2em auto}#tracks-title .fa-refresh[data-v-f22a2720]{float:right;cursor:pointer}#tracks-title .fa-refresh[data-v-f22a2720]:hover{color:var(--refresh-hover-color)}',""])},249:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var r=e(3),i=e(10);a.default={data:function(){return{lang:r.a,tracks:[]}},mounted:function(){this.fetchTracks()},methods:{fetchTracks:function(){this.tracks=[],i.a.get("https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=welfordian&api_key=6136000ba0899c52db5ebcee77d4be15&format=json").then(function(t){this.tracks=t.data.recenttracks.track}.bind(this))},getTrackTitle:function(t){return t.artist["#text"]+" - "+t.name},getLargestAlbumImage:function(t){var a=[];return t.image.forEach(function(t){a[t.size]=t["#text"]}),0!==a.extralarge.length?a.extralarge:0!==a.large.length?a.large:0!==a.medium.length?a.medium:0!==a.small.length?a.small:""}}}},250:function(t,a){t.exports={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("h1",{attrs:{id:"tracks-title"}},[e("i",{staticClass:"fa fa-spotify",attrs:{title:"via Spotify"}}),t._v(" "+t._s(t.lang.get("music.title"))+" "),e("i",{staticClass:"fa fa-refresh",class:{"fa-spin":!t.tracks.length},on:{click:t.fetchTracks}})]),t._v(" "),e("hr"),t._v(" "),t.tracks.length?e("div",{staticClass:"row",attrs:{id:"tracks-container"}},t._l(t.tracks,function(a){return e("div",{staticClass:"col-md-3"},[e("a",{staticClass:"tutorial-link",attrs:{target:"_blank",rel:"noreferrer noopener",href:a.url}},[e("div",{staticClass:"well well-custom tutorial"},[e("h4",{staticClass:"title",attrs:{id:"title"}},[e("span",{attrs:{title:t.getTrackTitle(a)}},[t._v(t._s(t.getTrackTitle(a)))])]),t._v(" "),e("div",{staticClass:"intro-image-container"},[e("img",{staticClass:"tutorial-intro-image image",attrs:{id:"track-image",src:t.getLargestAlbumImage(a)}})])])])])})):e("div",{staticClass:"row loading-row"},[e("i",{staticClass:"fa fa-circle-o-notch fa-spin",attrs:{"aria-hidden":"true"}})])])},staticRenderFns:[]}}});