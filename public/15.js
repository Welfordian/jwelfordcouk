webpackJsonp([15],{

/***/ 285:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(377)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(379)
/* template */
var __vue_template__ = __webpack_require__(380)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-613e328f"
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
Component.options.__file = "resources/assets/js/views/dashboard/Player.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-613e328f", Component.options)
  } else {
    hotAPI.reload("data-v-613e328f", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 292:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(293)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(295)
/* template */
var __vue_template__ = __webpack_require__(296)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
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
Component.options.__file = "resources/assets/js/components/DashboardLayout.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4a1dfef7", Component.options)
  } else {
    hotAPI.reload("data-v-4a1dfef7", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 293:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(294);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("5c1a3f27", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-4a1dfef7\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./DashboardLayout.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-4a1dfef7\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./DashboardLayout.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 294:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 295:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__i18n__ = __webpack_require__(4);
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
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'dashboard-layout',

  props: ['fullWidth'],

  computed: {
    containerStyle: function containerStyle() {
      var style = {};

      if (this.fullWidth) {
        style.width = '100%';
        style.marginLeft = '0';
        style.marginRight = '0';
      }

      return style;
    }
  },

  data: function data() {
    return {
      lang: __WEBPACK_IMPORTED_MODULE_0__i18n__["a" /* i18n */]
    };
  }
});

/***/ }),

/***/ 296:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c(
      "div",
      { staticClass: "container", style: _vm.containerStyle },
      [
        _c(
          "navbar",
          [
            _c(
              "template",
              { slot: "left-links" },
              [
                _c(
                  "navbar-link",
                  { attrs: { href: "/dashboard/editor", icon: "paint-brush" } },
                  [_vm._v("Editor")]
                ),
                _vm._v(" "),
                _c(
                  "navbar-link",
                  { attrs: { href: "/dashboard/users", icon: "users" } },
                  [_vm._v("Users")]
                ),
                _vm._v(" "),
                _c(
                  "navbar-link",
                  { attrs: { href: "/dashboard/posts", icon: "newspaper-o" } },
                  [_vm._v("Posts")]
                ),
                _vm._v(" "),
                _c(
                  "navbar-link",
                  { attrs: { href: "/dashboard/files", icon: "file" } },
                  [_vm._v("Files")]
                ),
                _vm._v(" "),
                _c(
                  "navbar-link",
                  { attrs: { href: "/dashboard/player", icon: "play" } },
                  [_vm._v("Player")]
                ),
                _vm._v(" "),
                _c(
                  "navbar-link",
                  { attrs: { href: "/dashboard/messages", icon: "envelope" } },
                  [_vm._v("Messages")]
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "template",
              { slot: "right-links" },
              [
                _c("auth-button", [
                  _c(
                    "li",
                    { staticClass: "dropdown-submenu" },
                    [
                      _c("router-link", { attrs: { to: "/" } }, [
                        _c("i", { staticClass: "glyphicon glyphicon-flash" }),
                        _vm._v(" Home")
                      ]),
                      _vm._v(" "),
                      _c(
                        "router-link",
                        { attrs: { to: "/dashboard/settings" } },
                        [
                          _c("i", { staticClass: "glyphicon glyphicon-cog" }),
                          _vm._v(" Settings")
                        ]
                      )
                    ],
                    1
                  )
                ]),
                _vm._v(" "),
                _c("language-selector")
              ],
              1
            )
          ],
          2
        ),
        _vm._v(" "),
        _c("transition", { attrs: { name: "fade" } }, [_vm._t("default")], 2)
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-4a1dfef7", module.exports)
  }
}

/***/ }),

/***/ 377:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(378);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("7ee075b8", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-613e328f\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Player.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-613e328f\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Player.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 378:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "\n.base-ts[data-v-613e328f], .card-wrapper a[data-v-613e328f] {\n    -webkit-transition-duration: 0.5s;\n            transition-duration: 0.5s;\n    -webkit-transition-timing-function: cubic-bezier(0.23, 1, 0.32, 1);\n            transition-timing-function: cubic-bezier(0.23, 1, 0.32, 1);\n}\nhtml[data-v-613e328f] {\n    height: 100%;\n}\nbody[data-v-613e328f] {\n    height: 100%;\n    width: 100%;\n    background-color: #ff5917;\n    background-image: -webkit-gradient(linear,left top, right top,from(#ff5917), to(#ff0a03));\n    background-image: linear-gradient(90deg,#ff5917, #ff0a03);\n}\n.outer[data-v-613e328f] {\n    display: table;\n    height: 100%;\n    width: 100%;\n}\n.inner[data-v-613e328f] {\n    display: table-cell;\n    vertical-align: middle;\n    text-align: center;\n}\n.card-wrapper[data-v-613e328f] {\n    display: inline-block;\n    width: 100%;\n    padding: 0 15px;\n    margin: 30px 0;\n    max-width: 320px;\n    background-color: #2b3e50;\n    -webkit-border-radius: 1em;\n    -moz-border-radius: 1em;\n    -webkit-box-shadow: 0 0 80px 10px rgba(0, 0, 0, 0.5);\n            box-shadow: 0 0 80px 10px rgba(0, 0, 0, 0.5);\n    color: #fff;\n    position: relative;\n    overflow: hidden;\n}\n.card-wrapper[data-v-613e328f]:before {\n    content: \"\";\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: 160px;\n    height: 320px;\n    z-index: 0;\n    background-image: -webkit-gradient(linear, left top, left bottom, from(rgba(255, 255, 255, 0.1)), to(rgba(255, 255, 255, 0)));\n    background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0));\n    -webkit-transform-origin: center center;\n    transform-origin: center center;\n    -webkit-transform: rotate(60deg) translate(-140px, -80px);\n    transform: rotate(60deg) translate(-140px, -80px);\n}\n.card-wrapper[data-v-613e328f]:after {\n    content: \"\";\n    position: absolute;\n    right: 0;\n    bottom: 0;\n    width: 120%;\n    height: 180px;\n    -webkit-transform-origin: right top;\n    transform-origin: right top;\n    -webkit-transform: rotate(-30deg);\n    transform: rotate(-30deg);\n    background-image: -webkit-gradient(linear, left top, left bottom, from(rgba(255, 255, 255, 0.1)), to(rgba(255, 255, 255, 0)));\n    background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0));\n}\n.card-wrapper a[data-v-613e328f] {\n    color: rgba(255, 255, 255, 0.97);\n    -webkit-transition-property: color, -webkit-box-shadow;\n    transition-property: color, -webkit-box-shadow;\n    transition-property: color, box-shadow;\n    transition-property: color, box-shadow, -webkit-box-shadow;\n}\n.card-wrapper a[data-v-613e328f]:hover {\n    color: #fff;\n    text-shadow: 0 0 10px rgba(255, 255, 255, 0.97);\n}\n.card-wrapper .box-top[data-v-613e328f] {\n    padding: 25px 0 25px;\n    position: relative;\n}\n.card-wrapper .box-top i[data-v-613e328f] {\n    vertical-align: middle;\n}\n.card-wrapper .box-top .back-button[data-v-613e328f] {\n    float: left;\n}\n.card-wrapper .box-top .fav-button[data-v-613e328f] {\n    float: right;\n}\n.card-wrapper .box-snapshot[data-v-613e328f] {\n    font-size: 12.5em;\n    margin-bottom: 10px;\n    margin-left: -15px;\n    width: 111%;\n    height: 260px;\n}\n.card-wrapper .box-control[data-v-613e328f] {\n    padding: 1.875em 0;\n    position: relative;\n}\n.card-wrapper .box-control .progress-bar[data-v-613e328f] {\n    height: 6px;\n    width: 100%;\n    background-color: rgba(255, 255, 255, 0.17);\n    position: relative;\n}\n.card-wrapper .box-control .progress-bar span[data-v-613e328f] {\n    display: block;\n    position: absolute;\n    background-color: #18bc9c;\n    height: 6px;\n    pointer-events: none;\n}\n.card-wrapper .box-control .shuffle-bt[data-v-613e328f] {\n    position: absolute;\n    top: 0;\n    left: 0;\n}\n.card-wrapper .box-control .loop-bt[data-v-613e328f] {\n    right: 0;\n    top: 0;\n    position: relative;\n    float: right;\n    margin-top: -35px;\n}\n.card-wrapper .box-control > span[data-v-613e328f] {\n    color: rgba(255, 255, 255, 0.5);\n    font-size: 12px;\n}\n.card-wrapper .box-control .current-time[data-v-613e328f] {\n    position: absolute;\n    left: 0;\n    bottom: 5px;\n}\n.card-wrapper .box-control .total-time[data-v-613e328f] {\n    position: absolute;\n    right: 0;\n    bottom: 5px;\n}\n.card-wrapper .box-player[data-v-613e328f] {\n    text-align: center;\n    position: relative;\n    z-index: 2;\n}\n.card-wrapper .box-player .song-name[data-v-613e328f] {\n    font-weight: normal;\n    font-size: 1em;\n}\n.card-wrapper .box-player .song-name .artist-name[data-v-613e328f] {\n    font-size: 1em;\n    display: block;\n    color: rgba(255, 255, 255, 0.5);\n    margin-top: 10px;\n}\n.card-wrapper .box-player .control[data-v-613e328f] {\n    display: inline-block;\n    margin-bottom: 30px;\n}\n.card-wrapper .box-player .control a[data-v-613e328f] {\n    display: inline-block;\n    font-size: 32px;\n    margin: 0 15px;\n    vertical-align: middle;\n}\n.card-wrapper .box-player .control a.play-bt[data-v-613e328f] {\n    font-size: 5em;\n}\n.box-snapshot img[data-v-613e328f] {\n    width: 100%;\n}\nspan.repeat-ctx[data-v-613e328f] {\n    width: 5px;\n    height: 5px;\n    background: #18bc9c;\n    position: absolute;\n    border-radius: 100%;\n    right: 6px;\n    top: -3px;\n}\nspan.repeat-track[data-v-613e328f] {\n    position: absolute;\n    top: -9px;\n    font-size: 10px;\n    left: 4px;\n    color: #18bc9c;\n}\n.shuffle-loop-on[data-v-613e328f] {\n   color: #18bc9c !important;\n}\n.searchInput[data-v-613e328f] {\n    width: 90%;\n    display: inline-block;\n    color: black;\n    border-radius: 13px;\n    border: none;\n    height: 25px;\n    padding: 0px 10px;\n}\n.searchResults[data-v-613e328f] {\n    max-height: 100%;\n    overflow: auto;\n    z-index: 12;\n}\n.search--result-track[data-v-613e328f] {\n    font-size: 13px;\n    text-align: left;\n    padding-left: 10px;\n}\n.back-button[data-v-613e328f], .fav-button[data-v-613e328f], .status-box[data-v-613e328f] {\n    margin-top: -5px;\n}\n\n", ""]);

// exports


/***/ }),

/***/ 379:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_DashboardLayout__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_DashboardLayout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_DashboardLayout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Http__ = __webpack_require__(6);


function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

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
  components: { DashboardLayout: __WEBPACK_IMPORTED_MODULE_1__components_DashboardLayout___default.a },

  data: function data() {
    return {
      player: false,
      search: {
        tracks: [],
        albums: [],
        artists: []
      },
      searchToggle: false,
      spotify_token: false,
      devices: false,
      playlists: false,
      meta: {
        trackId: false,
        position: 0,
        duration: 0,
        playing: false,
        imageSrc: false,
        shuffle: false,
        repeat_mode: 0,
        trackName: "",
        contextDescription: ""
      }
    };
  },
  beforeMount: function beforeMount() {
    var _this = this;

    window.spotifyReady = function () {
      window.spotifyAvailable = true;
    };

    window.onSpotifyWebPlaybackSDKReady = function () {
      var spotifyTimeout = void 0;

      spotifyTimeout = setInterval(function () {
        if (window.spotifyAvailable) {
          clearInterval(spotifyTimeout);

          var token = _this.spotify_token;
          var player = new Spotify.Player({
            name: 'Josh\'s Dashboard',
            getOAuthToken: function getOAuthToken(cb) {
              cb(token);
            }
          });

          // Error handling
          player.addListener('initialization_error', function (_ref) {
            var message = _ref.message;
            console.error(message);
          });
          player.addListener('authentication_error', function (_ref2) {
            var message = _ref2.message;
            console.error(message);
          });
          player.addListener('account_error', function (_ref3) {
            var message = _ref3.message;
            console.error(message);
          });
          player.addListener('playback_error', function (_ref4) {
            var message = _ref4.message;
            console.error(message);
          });

          // Playback status updates
          player.addListener('player_state_changed', function (state) {
            window.state = state;
            _this.meta.playing = !state.paused;
            _this.meta.imageSrc = state.track_window.current_track.album.images[state.track_window.current_track.album.images.length - 1].url;
            _this.meta.trackId = state.track_window.current_track.id;
            _this.meta.trackName = state.track_window.current_track.name;
            _this.meta.duration = state.duration;
            _this.meta.position = state.position;
            _this.meta.artistName = _this.trackArtists(state.track_window.current_track);
            _this.meta.contextDescription = state.context.metadata.context_description;
            _this.meta.shuffle = state.shuffle;
            _this.meta.repeat_mode = state.repeat_mode;

            _this.stateChanged();
          });

          // Ready
          player.addListener('ready', function (_ref5) {
            var device_id = _ref5.device_id;

            _this.deviceId = device_id;

            _this.spotifyPlayerReady(player);
          });

          // Not Ready
          player.addListener('not_ready', function (_ref6) {
            var device_id = _ref6.device_id;

            console.log('Device ID has gone offline', device_id);
          });

          player.connect();
        }
      }, 100);
    };

    this.addScript('https://sdk.scdn.co/spotify-player.js');
    this.spotifyApi = __WEBPACK_IMPORTED_MODULE_2_axios___default.a.create({
      baseURL: 'https://api.spotify.com/v1'
    });

    this.fetchToken().then(function () {
      _this.setup();
    });

    setInterval(this.fetchToken, 40 * 60 * 1000);
  },


  methods: {
    trackArtists: function trackArtists(track) {
      return track.artists.map(function (artist) {
        return artist.name;
      }).join(', ');
    },
    searchSpotify: function () {
      var _ref7 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee(e) {
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.spotifyApi.get('/search?q=' + e.target.value + "&type=track&market=from_token");

              case 2:
                this.search = _context.sent.data;

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function searchSpotify(_x) {
        return _ref7.apply(this, arguments);
      }

      return searchSpotify;
    }(),
    toggleSearch: function toggleSearch() {
      this.searchToggle = !this.searchToggle;
    },
    fetchToken: function () {
      var _ref8 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee3() {
        var _this2 = this;

        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                return _context3.abrupt("return", new Promise(function () {
                  var _ref9 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee2(resolve) {
                    return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
                      while (1) {
                        switch (_context2.prev = _context2.next) {
                          case 0:
                            _context2.next = 2;
                            return __WEBPACK_IMPORTED_MODULE_3__Http__["a" /* _http */].get('/spotify_token');

                          case 2:
                            _this2.spotify_token = _context2.sent.data.token;


                            _this2.spotifyApi.defaults.headers['Authorization'] = 'Bearer ' + _this2.spotify_token;

                            resolve();

                          case 5:
                          case "end":
                            return _context2.stop();
                        }
                      }
                    }, _callee2, _this2);
                  }));

                  return function (_x2) {
                    return _ref9.apply(this, arguments);
                  };
                }()));

              case 1:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function fetchToken() {
        return _ref8.apply(this, arguments);
      }

      return fetchToken;
    }(),
    getDevices: function () {
      var _ref10 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee4() {
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return this.spotifyApi.get('/me/player/devices');

              case 2:
                this.devices = _context4.sent.data.devices;

              case 3:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function getDevices() {
        return _ref10.apply(this, arguments);
      }

      return getDevices;
    }(),
    getPlaylists: function () {
      var _ref11 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee5() {
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return this.spotifyApi.get('/me/playlists');

              case 2:
                this.playlists = _context5.sent.data.items;

              case 3:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function getPlaylists() {
        return _ref11.apply(this, arguments);
      }

      return getPlaylists;
    }(),
    play: function () {
      var _ref12 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee6() {
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                this.spotifyApi.put('/me/player/play?device_id=' + this.deviceId);

              case 1:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function play() {
        return _ref12.apply(this, arguments);
      }

      return play;
    }(),
    playTrack: function () {
      var _ref13 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee7(trackId) {
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                this.spotifyApi.put('/me/player/play?device_id=' + this.deviceId, {
                  'uris': [trackId]
                });

              case 1:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function playTrack(_x3) {
        return _ref13.apply(this, arguments);
      }

      return playTrack;
    }(),
    playPlaylist: function () {
      var _ref14 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee8(playlist) {
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                this.spotifyApi.put('/me/player/play', {
                  'context_uri': playlist.uri
                });

              case 1:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      function playPlaylist(_x4) {
        return _ref14.apply(this, arguments);
      }

      return playPlaylist;
    }(),
    togglePlay: function () {
      var _ref15 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee9() {
        var _this3 = this;

        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                this.player.togglePlay().then(function (s) {
                  _this3.meta.playing = !_this3.meta.playing;
                });

              case 1:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this);
      }));

      function togglePlay() {
        return _ref15.apply(this, arguments);
      }

      return togglePlay;
    }(),
    nextTrack: function () {
      var _ref16 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee10() {
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                this.player.nextTrack();

              case 1:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, this);
      }));

      function nextTrack() {
        return _ref16.apply(this, arguments);
      }

      return nextTrack;
    }(),
    previousTrack: function () {
      var _ref17 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee11() {
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                this.player.previousTrack();

              case 1:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11, this);
      }));

      function previousTrack() {
        return _ref17.apply(this, arguments);
      }

      return previousTrack;
    }(),
    transferPlayback: function transferPlayback() {
      this.spotifyApi.put('/me/player', {
        'device_ids': [this.deviceId]
      });
    },
    spotifyPlayerReady: function spotifyPlayerReady(player) {
      var _this4 = this;

      this.player = player;

      this.transferPlayback();
      this.getDevices();
      this.getPlaylists();
      this.play();

      setInterval(function () {
        _this4.player.getCurrentState().then(function (s) {
          _this4.meta.position = s.position;
        });
      }, 500);
    },
    millisToMinutesAndSeconds: function millisToMinutesAndSeconds(millis) {
      var minutes = Math.floor(millis / 60000);
      var seconds = (millis % 60000 / 1000).toFixed(0);
      return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
    },
    setup: function setup() {
      window.spotifyReady();
    },
    setStatePosition: function setStatePosition(ms) {
      return this.millisToMinutesAndSeconds(ms);
    },
    setPosition: function setPosition(e) {
      var parentOffset = $(e.target).parent().offset();
      var relX = e.pageX - parentOffset.left;
      var perc = relX / $(e.target).width() * 100;
      var position = perc / 100 * this.meta.duration;

      this.spotifyApi.put('/me/player/seek?position_ms=' + Math.ceil(position));
    },
    toggleRepeat: function toggleRepeat() {
      var states = ['off', 'context', 'track'];

      if (this.meta.repeat_mode === 2) {
        this.meta.repeat_mode = 0;
      } else {
        this.meta.repeat_mode++;
      }

      this.spotifyApi.put('/me/player/repeat?state=' + states[this.meta.repeat_mode]);
    },
    toggleShuffle: function toggleShuffle() {
      this.spotifyApi.put('/me/player/shuffle?state=' + !this.meta.shuffle);
    },
    checkSaved: function () {
      var _ref18 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee12() {
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                _context12.next = 2;
                return this.spotifyApi.get('/me/tracks/contains?ids=' + this.meta.trackId);

              case 2:
                this.meta.trackSaved = _context12.sent.data[0];

              case 3:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12, this);
      }));

      function checkSaved() {
        return _ref18.apply(this, arguments);
      }

      return checkSaved;
    }(),
    stateChanged: function stateChanged() {
      this.checkSaved();
    }
  },

  computed: {
    progressPercentage: function progressPercentage() {
      return this.meta.position / this.meta.duration * 100 + '%';
    }
  }
});

/***/ }),

/***/ 380:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("dashboard-layout", { attrs: { "full-width": "" } }, [
    _vm.spotify_token
      ? _c("div", { staticClass: "player_container" }, [
          _c("div", { staticClass: "outer" }, [
            _c("div", { staticClass: "inner" }, [
              _c("div", { staticClass: "card-wrapper" }, [
                _c("div", { staticClass: "box-top" }, [
                  _c(
                    "a",
                    {
                      staticClass: "back-button",
                      on: {
                        click: function($event) {
                          $event.preventDefault()
                          _vm.searchToggle = !_vm.searchToggle
                        }
                      }
                    },
                    [
                      !_vm.searchToggle
                        ? _c("i", { staticClass: "fa fa-search" })
                        : _c("i", { staticClass: "fa fa-times" })
                    ]
                  ),
                  _vm._v(" "),
                  !_vm.searchToggle
                    ? _c(
                        "a",
                        {
                          staticClass: "fav-button",
                          attrs: { href: "javascript:void(0);" }
                        },
                        [
                          _vm.meta.trackSaved
                            ? _c("i", { staticClass: "fa fa-check" })
                            : _c("i", { staticClass: "fa fa-plus" })
                        ]
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _c("div", { staticClass: "status-box" }, [
                    !_vm.searchToggle
                      ? _c("span", [
                          _vm._v(_vm._s(_vm.meta.contextDescription))
                        ])
                      : _c("input", {
                          staticClass: "searchInput",
                          attrs: { type: "text" },
                          on: {
                            keyup: function($event) {
                              $event.preventDefault()
                              _vm.searchSpotify($event)
                            }
                          }
                        })
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "box-snapshot" }, [
                  _vm.searchToggle
                    ? _c(
                        "div",
                        { staticClass: "searchResults" },
                        _vm._l(_vm.search.tracks.items, function(track) {
                          return _c(
                            "p",
                            {
                              staticClass: "search--result-track",
                              on: {
                                click: function($event) {
                                  $event.preventDefault()
                                  _vm.playTrack(track.uri)
                                }
                              }
                            },
                            [
                              _vm._v(
                                "\n                                " +
                                  _vm._s(track.name) +
                                  " - " +
                                  _vm._s(_vm.trackArtists(track)) +
                                  "\n                            "
                              )
                            ]
                          )
                        })
                      )
                    : _c("img", { attrs: { src: _vm.meta.imageSrc } })
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "box-control" }, [
                  _c(
                    "div",
                    {
                      staticClass: "progress-bar",
                      on: {
                        click: function($event) {
                          $event.preventDefault()
                          _vm.setPosition($event)
                        }
                      }
                    },
                    [
                      _c("span", {
                        style: { width: _vm.progressPercentage },
                        attrs: { "data-percent": _vm.progressPercentage }
                      })
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "a",
                    {
                      staticClass: "shuffle-bt",
                      class: { "shuffle-loop-on": _vm.meta.shuffle === true },
                      on: {
                        click: function($event) {
                          $event.preventDefault()
                          _vm.toggleShuffle()
                        }
                      }
                    },
                    [_c("i", { staticClass: "fa fa-random" })]
                  ),
                  _vm._v(" "),
                  _c(
                    "a",
                    {
                      staticClass: "loop-bt",
                      class: { "shuffle-loop-on": _vm.meta.repeat_mode !== 0 },
                      on: {
                        click: function($event) {
                          $event.preventDefault()
                          _vm.toggleRepeat()
                        }
                      }
                    },
                    [
                      _vm.meta.repeat_mode === 1
                        ? _c("span", { staticClass: "repeat-ctx" })
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.meta.repeat_mode === 2
                        ? _c("span", { staticClass: "repeat-track" }, [
                            _vm._v("1")
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      _c("i", { staticClass: "fa fa-exchange" })
                    ]
                  ),
                  _vm._v(" "),
                  _c("span", { staticClass: "current-time" }, [
                    _vm._v(
                      _vm._s(_vm.millisToMinutesAndSeconds(_vm.meta.position))
                    )
                  ]),
                  _vm._v(" "),
                  _c("span", { staticClass: "total-time" }, [
                    _vm._v(
                      _vm._s(_vm.millisToMinutesAndSeconds(_vm.meta.duration))
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "box-player" }, [
                  _c("h1", { staticClass: "song-name" }, [
                    _vm._v(
                      _vm._s(_vm.meta.trackName) +
                        "\n                            "
                    ),
                    _c("span", { staticClass: "artist-name" }, [
                      _vm._v(_vm._s(_vm.meta.artistName))
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "control" }, [
                    _c(
                      "a",
                      {
                        on: {
                          click: function($event) {
                            $event.preventDefault()
                            _vm.previousTrack()
                          }
                        }
                      },
                      [_c("i", { staticClass: "fa fa-backward" })]
                    ),
                    _vm._v(" "),
                    _c(
                      "a",
                      {
                        staticClass: "play-bt",
                        on: {
                          click: function($event) {
                            $event.preventDefault()
                            return _vm.togglePlay($event)
                          }
                        }
                      },
                      [
                        !_vm.meta.playing
                          ? _c("i", { staticClass: "fa fa-play-circle" })
                          : _c("i", { staticClass: "fa fa-pause-circle" })
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "a",
                      {
                        on: {
                          click: function($event) {
                            $event.preventDefault()
                            _vm.nextTrack()
                          }
                        }
                      },
                      [_c("i", { staticClass: "fa fa-forward" })]
                    )
                  ])
                ])
              ])
            ])
          ])
        ])
      : _c("div", [
          _c(
            "h1",
            { staticStyle: { "text-align": "center" } },
            [
              _vm._v("To continue, please connect Spotify in "),
              _c("router-link", { attrs: { to: "/dashboard/settings" } }, [
                _vm._v("Settings")
              ]),
              _vm._v(".")
            ],
            1
          )
        ])
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-613e328f", module.exports)
  }
}

/***/ })

});