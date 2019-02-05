webpackJsonp([5],{267:function(t,a,e){var i=e(1)(e(319),e(320),!1,function(t){e(317)},"data-v-3c2033f8",null);t.exports=i.exports},287:function(t,a,e){var i=e(1)(e(290),e(296),!1,function(t){e(288)},null,null);t.exports=i.exports},288:function(t,a,e){var i=e(289);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);e(9)("5ea8e9d6",i,!0,{})},289:function(t,a,e){(t.exports=e(4)(!1)).push([t.i,"",""])},290:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var i=e(3),o=e(291),n=e.n(o);a.default={components:{InfoOverlay:n.a},name:"default-layout",data:function(){return{lang:i.a}}}},291:function(t,a,e){var i=e(1)(e(294),e(295),!1,function(t){e(292)},"data-v-b4cf644c",null);t.exports=i.exports},292:function(t,a,e){var i=e(293);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);e(9)("710de5d5",i,!0,{})},293:function(t,a,e){(t.exports=e(4)(!1)).push([t.i,".info-overlay[data-v-b4cf644c]{width:50px;height:50px;background-color:#2c3e50;position:fixed;bottom:15px;right:16px;border-radius:100%;-webkit-box-shadow:0 0 14px 0 rgba(0,0,0,.75);box-shadow:0 0 14px 0 rgba(0,0,0,.75)}.info-overlay--button[data-v-b4cf644c]{color:#fff;cursor:pointer;text-align:center;position:relative;top:0;font-size:1.5em;padding:8px 0 7px;z-index:10;background:#2c3e50;border-radius:100%}.info-overlay--container[data-v-b4cf644c]{position:relative}.info-overlay--content[data-v-b4cf644c]{-webkit-transition:width .2s,height .2s;transition:width .2s,height .2s;width:0;height:0;position:absolute;bottom:25px;right:27px;background:#fff;border-radius:4px;overflow:hidden;-webkit-box-shadow:0 0 14px 0 rgba(0,0,0,.75);box-shadow:0 0 14px 0 rgba(0,0,0,.75)}.info-overlay--content .row[data-v-b4cf644c]{margin-left:0;margin-right:0}.info-overlay--open[data-v-b4cf644c]{width:20em;height:25em;overflow:auto}",""])},294:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default={name:"info-overlay",data:function(){return{open:!1}},methods:{toggleInfoOverlay:function(){this.open=!this.open,this.open?this.$refs.content.classList.add("info-overlay--open"):this.$refs.content.classList.remove("info-overlay--open")}}}},295:function(t,a){t.exports={render:function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"info-overlay"},[a("div",{staticClass:"info-overlay--container"},[a("p",{staticClass:"info-overlay--button",on:{click:this.toggleInfoOverlay}},[a("i",{staticClass:"fas fa-question"})]),this._v(" "),a("div",{ref:"content",staticClass:"info-overlay--content"},[this._m(0)])])])},staticRenderFns:[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-12"},[e("h3",{staticClass:"info-overlay--title"},[t._v("What's this about, then?")]),t._v(" "),e("p",[t._v("\n                        This site serves as both my personal site & my playground for new technologies.\n                    ")]),t._v(" "),e("p",[t._v("\n                        As you can probably tell, site design is not one of my strong points. But I'm always trying to keep up-to-date with new web technologies.\n                    ")]),t._v(" "),e("p",[t._v("Here's a few technologies in use/powering this site:-")]),t._v(" "),e("ul",[e("li",[t._v("Ubuntu 16.04 (Xenial)")]),t._v(" "),e("li",[t._v("Nginx 1.14")]),t._v(" "),e("li",[t._v("Google PageSpeed NGX")]),t._v(" "),e("li",[t._v("PHP 7.1.16")]),t._v(" "),e("li",[t._v("WebP Images*")]),t._v(" "),e("li",[t._v("Laravel 5.6.17")]),t._v(" "),e("li",[t._v("ServiceWorker*^")]),t._v(" "),e("li",[t._v("VueJS")])]),t._v(" "),e("p",[t._v("\n                        * - Based on browser compatibility\n                    ")]),t._v(" "),e("p",[t._v("\n                        ^ - Used for offline site availability & allows the contact form to work offline.\n                    ")])])])}]}},296:function(t,a){t.exports={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("div",{staticClass:"container"},[e("navbar",[e("template",{slot:"left-links"},[e("navbar-link",{attrs:{href:"/about",icon:"user"}},[t._v(t._s(t.lang.get("navbar.about")))]),t._v(" "),e("navbar-link",{attrs:{href:"/posts",icon:"pencil"}},[t._v(t._s(t.lang.get("navbar.blog")))]),t._v(" "),e("navbar-link",{attrs:{href:"/music",icon:"music"}},[t._v(t._s(t.lang.get("navbar.music")))]),t._v(" "),e("navbar-link",{attrs:{href:"/photography",icon:"camera-retro"}},[t._v(t._s(t.lang.get("navbar.photography")))]),t._v(" "),e("navbar-link",{attrs:{href:"/contact",icon:"inbox"}},[t._v(t._s(t.lang.get("navbar.contact")))])],1),t._v(" "),e("template",{slot:"right-links"},[e("auth-button",[e("li",{staticClass:"dropdown-submenu"},[e("router-link",{attrs:{to:"/dashboard"}},[e("i",{staticClass:"glyphicon glyphicon-flash"}),t._v(" Dashboard")])],1)]),t._v(" "),e("language-selector")],1)],2),t._v(" "),e("transition",{attrs:{name:"fade"}},[t._t("default")],2),t._v(" "),e("info-overlay")],1)])},staticRenderFns:[]}},317:function(t,a,e){var i=e(318);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);e(9)("62e30cae",i,!0,{})},318:function(t,a,e){(t.exports=e(4)(!1)).push([t.i,'[data-v-3c2033f8]:root{--refresh-hover-color:#586b7d}.loading-row[data-v-3c2033f8]{text-align:center;font-size:5em;color:#2c3e50}.tutorial[data-v-3c2033f8]{-webkit-transition:all .3s;transition:all .3s}.tutorial-link[data-v-3c2033f8],.tutorial-link[data-v-3c2033f8]:active,.tutorial-link[data-v-3c2033f8]:hover{text-decoration:none}.tutorial[data-v-3c2033f8]:hover{-webkit-transform:scale(1.03);transform:scale(1.03);-webkit-box-shadow:0 0 13px #ccc;box-shadow:0 0 13px #ccc;z-index:3}.tutorial .title[data-v-3c2033f8]{padding:0 0 4px 8px;font-weight:700;text-align:left;max-width:98%;width:98%;overflow:hidden;white-space:nowrap}.intro-image-container[data-v-3c2033f8]{overflow:hidden}.tutorial-intro-image[data-v-3c2033f8]{-webkit-transition:-webkit-transform .3s;transition:-webkit-transform .3s;transition:transform .3s;transition:transform .3s,-webkit-transform .3s;-webkit-transform:scale(1.3);transform:scale(1.3)}.intro-image-container[data-v-3c2033f8],.tutorial-intro-image[data-v-3c2033f8]{width:100%;min-width:100%;max-width:100%}.tutorial:hover .tutorial-intro-image[data-v-3c2033f8]{-webkit-transform:scale(1);transform:scale(1)}.well-custom[data-v-3c2033f8]{padding:0;background-color:#2c3e50;color:#fff}#tracks-title .fa-spotify[data-v-3c2033f8]{color:#1db954}.marquee[data-v-3c2033f8]{width:450px;white-space:nowrap;overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box}.marquee span[data-v-3c2033f8]{display:inline-block;padding-left:100%;text-indent:0;-webkit-animation:marquee-data-v-3c2033f8 5s linear infinite;animation:marquee-data-v-3c2033f8 5s linear infinite}.marquee span[data-v-3c2033f8]:hover{-webkit-animation-play-state:paused;animation-play-state:paused}@-webkit-keyframes marquee-data-v-3c2033f8{0%{-webkit-transform:translate(0);transform:translate(0)}to{-webkit-transform:translate(-100%);transform:translate(-100%)}}@keyframes marquee-data-v-3c2033f8{0%{-webkit-transform:translate(0);transform:translate(0)}to{-webkit-transform:translate(-100%);transform:translate(-100%)}}.microsoft[data-v-3c2033f8]{padding-left:1.5em;position:relative}.microsoft[data-v-3c2033f8]:before{z-index:2;content:"";position:absolute;top:-1em;left:-1em;width:.5em;height:.5em;-webkit-box-shadow:1em 1.25em 0 #f65314,1.6em 1.25em 0 #7cbb00,1em 1.85em 0 #00a1f1,1.6em 1.85em 0 #fb0;box-shadow:1em 1.25em 0 #f65314,1.6em 1.25em 0 #7cbb00,1em 1.85em 0 #00a1f1,1.6em 1.85em 0 #fb0}.microsoft[data-v-3c2033f8]:after{z-index:1;content:"";position:absolute;top:0;left:0;width:2em;height:2em;background-image:-webkit-gradient(linear,left top,right top,color-stop(70%,#fff),to(hsla(0,0%,100%,0)));background-image:linear-gradient(90deg,#fff 70%,hsla(0,0%,100%,0))}.vanity[data-v-3c2033f8]{color:#333;text-align:center}.microsoft a[data-v-3c2033f8],.vanity a[data-v-3c2033f8]{color:#1570a6;-webkit-transition:color .5s;transition:color .5s;text-decoration:none}.microsoft a[data-v-3c2033f8]:hover,.vanity a[data-v-3c2033f8]:hover{color:#f65314}.toggle[data-v-3c2033f8]{display:block;margin:2em auto}#tracks-title .fa-sync[data-v-3c2033f8]{float:right;cursor:pointer}#tracks-title .fa-sync[data-v-3c2033f8]:hover{color:var(--refresh-hover-color)}',""])},319:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var i=e(3),o=e(5),n=e(287),r=e.n(n);a.default={components:{DefaultLayout:r.a},data:function(){return{lang:i.a,tracks:[]}},mounted:function(){this.fetchTracks()},methods:{fetchTracks:function(){this.tracks=[],o.a.get("https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=welfordian&api_key=6136000ba0899c52db5ebcee77d4be15&format=json").then(function(t){this.tracks=t.data.recenttracks.track}.bind(this))},getTrackTitle:function(t){return t.artist["#text"]+" - "+t.name},getLargestAlbumImage:function(t){var a=[];return t.image.forEach(function(t){a[t.size]=t["#text"]}),0!==a.extralarge.length?a.extralarge:0!==a.large.length?a.large:0!==a.medium.length?a.medium:0!==a.small.length?a.small:""}}}},320:function(t,a){t.exports={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("default-layout",[e("div",[e("h1",{attrs:{id:"tracks-title"}},[e("i",{staticClass:"fab fa-spotify",attrs:{title:"via Spotify"}}),t._v(" "+t._s(t.lang.get("music.title"))+" "),e("i",{staticClass:"fal fa-sync",class:{"fa-spin":!t.tracks.length},on:{click:t.fetchTracks}})]),t._v(" "),e("hr"),t._v(" "),t.tracks.length?e("div",{staticClass:"row",attrs:{id:"tracks-container"}},t._l(t.tracks,function(a){return e("div",{staticClass:"col-md-3"},[e("a",{staticClass:"tutorial-link",attrs:{target:"_blank",rel:"noreferrer noopener",href:a.url}},[e("div",{staticClass:"well well-custom tutorial"},[e("h4",{staticClass:"title",attrs:{id:"title"}},[e("span",{attrs:{title:t.getTrackTitle(a)}},[t._v(t._s(t.getTrackTitle(a)))])]),t._v(" "),e("div",{staticClass:"intro-image-container"},[e("img",{staticClass:"tutorial-intro-image image",attrs:{id:"track-image",src:t.getLargestAlbumImage(a),alt:"Album Art"}})])])])])}),0):e("div",{staticClass:"row loading-row"},[e("i",{staticClass:"fal fa-circle-notch fa-spin",attrs:{"aria-hidden":"true"}})])])])},staticRenderFns:[]}}});