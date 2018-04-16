webpackJsonp([3],{

/***/ 240:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(252)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(254)
/* template */
var __vue_template__ = __webpack_require__(255)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-9e472c3c"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/views/Music.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-9e472c3c", Component.options)
  } else {
    hotAPI.reload("data-v-9e472c3c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 252:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(253);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(6)("8c49898c", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-9e472c3c\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Music.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-9e472c3c\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Music.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 253:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(false);
// imports


// module
exports.push([module.i, "\n[data-v-9e472c3c]:root {\n\t--refresh-hover-color: #586b7d;\n}\n.loading-row[data-v-9e472c3c] {\n    text-align: center;\n    font-size: 5em;\n    color: #2c3e50;\n}\n.tutorial[data-v-9e472c3c] {\n\t-webkit-transition: all .3s;\n\ttransition: all .3s;\n}\n.tutorial-link[data-v-9e472c3c],\n.tutorial-link[data-v-9e472c3c]:hover,\n.tutorial-link[data-v-9e472c3c]:active {\n\ttext-decoration: none;\n}\n.tutorial[data-v-9e472c3c]:hover {\n\t-webkit-transform: scale(1.03);\n\ttransform: scale(1.03);\n\t-webkit-box-shadow: 0 0 13px #CCC;\n\t        box-shadow: 0 0 13px #CCC;\n\tz-index: 3;\n}\n.tutorial .title[data-v-9e472c3c] {\n\tpadding: 0 0 4px 8px;\n\tfont-weight: bold;\n\ttext-align: left;\n\tmax-width: 98%;\n\twidth: 98%;\n\toverflow: hidden;\n\twhite-space: nowrap;\n}\n.intro-image-container[data-v-9e472c3c] {\n\toverflow: hidden;\n}\n.tutorial-intro-image[data-v-9e472c3c] {\n\t-webkit-transition: -webkit-transform .3s;\n\ttransition: -webkit-transform .3s;\n\ttransition: transform .3s;\n\ttransition: transform .3s, -webkit-transform .3s;\n\t-webkit-transform: scale(1.3);\n\ttransform: scale(1.3);\n}\n.tutorial-intro-image[data-v-9e472c3c],\n.intro-image-container[data-v-9e472c3c] {\n\twidth: 100%;\n\tmin-width: 100%;\n\tmax-width: 100%;\n}\n.tutorial:hover .tutorial-intro-image[data-v-9e472c3c] {\n\t-webkit-transform: scale(1);\n\ttransform: scale(1)\n}\n.well-custom[data-v-9e472c3c] {\n\tpadding: 0;\n\tbackground-color: #2c3e50;\n\tcolor: #ffffff;\n}\n#tracks-title .fa-spotify[data-v-9e472c3c] {\n\tcolor: #1DB954;\n}\n.marquee[data-v-9e472c3c] {\n\twidth: 450px;\n\twhite-space: nowrap;\n\toverflow: hidden;\n\t-webkit-box-sizing: border-box;\n\t        box-sizing: border-box;\n}\n.marquee span[data-v-9e472c3c] {\n\tdisplay: inline-block;\n\tpadding-left: 100%;\n\ttext-indent: 0;\n\t-webkit-animation: marquee-data-v-9e472c3c 5s linear infinite;\n\t        animation: marquee-data-v-9e472c3c 5s linear infinite;\n}\n.marquee span[data-v-9e472c3c]:hover {\n\t-webkit-animation-play-state: paused;\n\t        animation-play-state: paused\n}\n@-webkit-keyframes marquee-data-v-9e472c3c {\n0% {\n\t\t-webkit-transform: translate(0, 0);\n\t\t        transform: translate(0, 0);\n}\n100% {\n\t\t-webkit-transform: translate(-100%, 0);\n\t\t        transform: translate(-100%, 0);\n}\n}\n@keyframes marquee-data-v-9e472c3c {\n0% {\n\t\t-webkit-transform: translate(0, 0);\n\t\t        transform: translate(0, 0);\n}\n100% {\n\t\t-webkit-transform: translate(-100%, 0);\n\t\t        transform: translate(-100%, 0);\n}\n}\n.microsoft[data-v-9e472c3c] {\n\tpadding-left: 1.5em;\n\tposition: relative;\n}\n.microsoft[data-v-9e472c3c]:before,\n.microsoft[data-v-9e472c3c]::before {\n\tz-index: 2;\n\tcontent: '';\n\tposition: absolute;\n\ttop: -1em;\n\tleft: -1em;\n\twidth: .5em;\n\theight: .5em;\n\t-webkit-box-shadow: 1.0em 1.25em 0 #F65314, 1.6em 1.25em 0 #7CBB00, 1.0em 1.85em 0 #00A1F1, 1.6em 1.85em 0 #FFBB00;\n\t        box-shadow: 1.0em 1.25em 0 #F65314, 1.6em 1.25em 0 #7CBB00, 1.0em 1.85em 0 #00A1F1, 1.6em 1.85em 0 #FFBB00;\n}\n.microsoft[data-v-9e472c3c]:after,\n.microsoft[data-v-9e472c3c]::after {\n\tz-index: 1;\n\tcontent: '';\n\tposition: absolute;\n\ttop: 0;\n\tleft: 0;\n\twidth: 2em;\n\theight: 2em;\n\tbackground-image: -webkit-gradient(linear, left top, right top, color-stop(70%, white), to(rgba(255, 255, 255, 0)));\n\tbackground-image: linear-gradient(90deg, white 70%, rgba(255, 255, 255, 0));\n}\n.vanity[data-v-9e472c3c] {\n\tcolor: #333;\n\ttext-align: center;\n}\n.vanity a[data-v-9e472c3c],\n.microsoft a[data-v-9e472c3c] {\n\tcolor: #1570A6;\n\t-webkit-transition: color .5s;\n\ttransition: color .5s;\n\ttext-decoration: none;\n}\n.vanity a[data-v-9e472c3c]:hover,\n.microsoft a[data-v-9e472c3c]:hover {\n\tcolor: #F65314;\n}\n/* Style toggle button */\n.toggle[data-v-9e472c3c] {\n\tdisplay: block;\n\tmargin: 2em auto;\n}\n#tracks-title .fa-refresh[data-v-9e472c3c] {\n\tfloat: right;\n\tcursor: pointer;\n}\n#tracks-title .fa-refresh[data-v-9e472c3c]:hover {\n\tcolor: var(--refresh-hover-color);\n}\n", ""]);

// exports


/***/ }),

/***/ 254:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__i18n__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Http__ = __webpack_require__(10);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            lang: __WEBPACK_IMPORTED_MODULE_0__i18n__["a" /* i18n */],
            tracks: []
        };
    },
    mounted: function mounted() {
        this.fetchTracks();
    },


    methods: {
        fetchTracks: function fetchTracks() {
            this.tracks = [];

            __WEBPACK_IMPORTED_MODULE_1__Http__["a" /* _http */].get('https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=welfordian&api_key=6136000ba0899c52db5ebcee77d4be15&format=json').then(function (data) {
                this.tracks = data.data.recenttracks.track;
            }.bind(this));
        },
        getTrackTitle: function getTrackTitle(track) {
            return track['artist']['#text'] + ' - ' + track['name'];
        },
        getLargestAlbumImage: function getLargestAlbumImage(track) {
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
});

/***/ }),

/***/ 255:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("h1", { attrs: { id: "tracks-title" } }, [
      _c("i", {
        staticClass: "fa fa-spotify",
        attrs: { title: "via Spotify" }
      }),
      _vm._v(" " + _vm._s(_vm.lang.get("music.title")) + " "),
      _c("i", {
        staticClass: "fa fa-refresh",
        class: { "fa-spin": !_vm.tracks.length },
        on: { click: _vm.fetchTracks }
      })
    ]),
    _vm._v(" "),
    _c("hr"),
    _vm._v(" "),
    _vm.tracks.length
      ? _c(
          "div",
          { staticClass: "row", attrs: { id: "tracks-container" } },
          _vm._l(_vm.tracks, function(track) {
            return _c("div", { staticClass: "col-md-3" }, [
              _c(
                "a",
                {
                  staticClass: "tutorial-link",
                  attrs: {
                    target: "_blank",
                    rel: "noreferrer noopener",
                    href: track.url
                  }
                },
                [
                  _c("div", { staticClass: "well well-custom tutorial" }, [
                    _c("h4", { staticClass: "title", attrs: { id: "title" } }, [
                      _c(
                        "span",
                        { attrs: { title: _vm.getTrackTitle(track) } },
                        [_vm._v(_vm._s(_vm.getTrackTitle(track)))]
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "intro-image-container" }, [
                      _c("img", {
                        staticClass: "tutorial-intro-image image",
                        attrs: {
                          id: "track-image",
                          src: _vm.getLargestAlbumImage(track)
                        }
                      })
                    ])
                  ])
                ]
              )
            ])
          })
        )
      : _c("div", { staticClass: "row loading-row" }, [
          _c("i", {
            staticClass: "fa fa-circle-o-notch fa-spin",
            attrs: { "aria-hidden": "true" }
          })
        ])
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-9e472c3c", module.exports)
  }
}

/***/ })

});