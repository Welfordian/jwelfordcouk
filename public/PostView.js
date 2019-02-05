webpackJsonp([3],{266:function(t,e,o){var n=o(1)(o(315),o(316),!1,function(t){o(313)},null,null);t.exports=n.exports},287:function(t,e,o){var n=o(1)(o(290),o(296),!1,function(t){o(288)},null,null);t.exports=n.exports},288:function(t,e,o){var n=o(289);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);o(9)("5ea8e9d6",n,!0,{})},289:function(t,e,o){(t.exports=o(4)(!1)).push([t.i,"",""])},290:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=o(3),a=o(291),i=o.n(a);e.default={components:{InfoOverlay:i.a},name:"default-layout",data:function(){return{lang:n.a}}}},291:function(t,e,o){var n=o(1)(o(294),o(295),!1,function(t){o(292)},"data-v-b4cf644c",null);t.exports=n.exports},292:function(t,e,o){var n=o(293);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);o(9)("710de5d5",n,!0,{})},293:function(t,e,o){(t.exports=o(4)(!1)).push([t.i,".info-overlay[data-v-b4cf644c]{width:50px;height:50px;background-color:#2c3e50;position:fixed;bottom:15px;right:16px;border-radius:100%;-webkit-box-shadow:0 0 14px 0 rgba(0,0,0,.75);box-shadow:0 0 14px 0 rgba(0,0,0,.75)}.info-overlay--button[data-v-b4cf644c]{color:#fff;cursor:pointer;text-align:center;position:relative;top:0;font-size:1.5em;padding:8px 0 7px;z-index:10;background:#2c3e50;border-radius:100%}.info-overlay--container[data-v-b4cf644c]{position:relative}.info-overlay--content[data-v-b4cf644c]{-webkit-transition:width .2s,height .2s;transition:width .2s,height .2s;width:0;height:0;position:absolute;bottom:25px;right:27px;background:#fff;border-radius:4px;overflow:hidden;-webkit-box-shadow:0 0 14px 0 rgba(0,0,0,.75);box-shadow:0 0 14px 0 rgba(0,0,0,.75)}.info-overlay--content .row[data-v-b4cf644c]{margin-left:0;margin-right:0}.info-overlay--open[data-v-b4cf644c]{width:20em;height:25em;overflow:auto}",""])},294:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"info-overlay",data:function(){return{open:!1}},methods:{toggleInfoOverlay:function(){this.open=!this.open,this.open?this.$refs.content.classList.add("info-overlay--open"):this.$refs.content.classList.remove("info-overlay--open")}}}},295:function(t,e){t.exports={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"info-overlay"},[e("div",{staticClass:"info-overlay--container"},[e("p",{staticClass:"info-overlay--button",on:{click:this.toggleInfoOverlay}},[e("i",{staticClass:"fas fa-question"})]),this._v(" "),e("div",{ref:"content",staticClass:"info-overlay--content"},[this._m(0)])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"row"},[o("div",{staticClass:"col-md-12"},[o("h3",{staticClass:"info-overlay--title"},[t._v("What's this about, then?")]),t._v(" "),o("p",[t._v("\n                        This site serves as both my personal site & my playground for new technologies.\n                    ")]),t._v(" "),o("p",[t._v("\n                        As you can probably tell, site design is not one of my strong points. But I'm always trying to keep up-to-date with new web technologies.\n                    ")]),t._v(" "),o("p",[t._v("Here's a few technologies in use/powering this site:-")]),t._v(" "),o("ul",[o("li",[t._v("Ubuntu 16.04 (Xenial)")]),t._v(" "),o("li",[t._v("Nginx 1.14")]),t._v(" "),o("li",[t._v("Google PageSpeed NGX")]),t._v(" "),o("li",[t._v("PHP 7.1.16")]),t._v(" "),o("li",[t._v("WebP Images*")]),t._v(" "),o("li",[t._v("Laravel 5.6.17")]),t._v(" "),o("li",[t._v("ServiceWorker*^")]),t._v(" "),o("li",[t._v("VueJS")])]),t._v(" "),o("p",[t._v("\n                        * - Based on browser compatibility\n                    ")]),t._v(" "),o("p",[t._v("\n                        ^ - Used for offline site availability & allows the contact form to work offline.\n                    ")])])])}]}},296:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",{staticClass:"container"},[o("navbar",[o("template",{slot:"left-links"},[o("navbar-link",{attrs:{href:"/about",icon:"user"}},[t._v(t._s(t.lang.get("navbar.about")))]),t._v(" "),o("navbar-link",{attrs:{href:"/posts",icon:"pencil"}},[t._v(t._s(t.lang.get("navbar.blog")))]),t._v(" "),o("navbar-link",{attrs:{href:"/music",icon:"music"}},[t._v(t._s(t.lang.get("navbar.music")))]),t._v(" "),o("navbar-link",{attrs:{href:"/photography",icon:"camera-retro"}},[t._v(t._s(t.lang.get("navbar.photography")))]),t._v(" "),o("navbar-link",{attrs:{href:"/contact",icon:"inbox"}},[t._v(t._s(t.lang.get("navbar.contact")))])],1),t._v(" "),o("template",{slot:"right-links"},[o("auth-button",[o("li",{staticClass:"dropdown-submenu"},[o("router-link",{attrs:{to:"/dashboard"}},[o("i",{staticClass:"glyphicon glyphicon-flash"}),t._v(" Dashboard")])],1)]),t._v(" "),o("language-selector")],1)],2),t._v(" "),o("transition",{attrs:{name:"fade"}},[t._t("default")],2),t._v(" "),o("info-overlay")],1)])},staticRenderFns:[]}},313:function(t,e,o){var n=o(314);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);o(9)("3510392e",n,!0,{})},314:function(t,e,o){(t.exports=o(4)(!1)).push([t.i,"pre{display:block;overflow-x:auto;padding:.5em;color:#abb2bf;background:#2c3e50!important}",""])},315:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=o(287),a=o.n(n);e.default={components:{DefaultLayout:a.a},data:function(){return{post:this.$route.meta.post}},beforeMount:function(){this.addStyle("https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/styles/default.min.css"),this.addStyle("https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/styles/atom-one-dark.min.css")}}},316:function(t,e){t.exports={render:function(){var t=this.$createElement,e=this._self._c||t;return e("default-layout",[e("div",[e("h1",[e("router-link",{attrs:{to:"/posts"}},[e("i",{staticClass:"fa fa-long-arrow-left",staticStyle:{"margin-right":"10px"}})]),this._v("\n            "+this._s(this.post.title)+"\n        ")],1),this._v(" "),e("div",{staticStyle:{"margin-top":"65px"},domProps:{innerHTML:this._s(this.post.content)}})])])},staticRenderFns:[]}}});