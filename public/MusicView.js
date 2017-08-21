webpackJsonp([4],{

/***/ 230:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(243)
}
var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(245),
  /* template */
  __webpack_require__(246),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-0955e102",
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/var/www/dev.site/resources/assets/js/views/Music.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Music.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0955e102", Component.options)
  } else {
    hotAPI.reload("data-v-0955e102", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 243:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(244);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(6)("81260bd2", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-0955e102\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Music.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-0955e102\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Music.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 244:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(undefined);
// imports


// module
exports.push([module.i, "\n[data-v-0955e102]:root {\r\n\t--refresh-hover-color: #586b7d;\n}\n.loading-row[data-v-0955e102] {\r\n    text-align: center;\r\n    font-size: 5em;\r\n    color: #2c3e50;\n}\n.tutorial[data-v-0955e102] {\r\n\ttransition: all .3s;\n}\n.tutorial-link[data-v-0955e102],\r\n.tutorial-link[data-v-0955e102]:hover,\r\n.tutorial-link[data-v-0955e102]:active {\r\n\ttext-decoration: none;\n}\n.tutorial[data-v-0955e102]:hover {\r\n\t-webkit-transform: scale(1.03);\r\n\t-ms-transform: scale(1.03);\r\n\ttransform: scale(1.03);\r\n\tbox-shadow: 0 0 13px #CCC;\r\n\tz-index: 3;\n}\n.tutorial .title[data-v-0955e102] {\r\n\tpadding: 0 0 4px 8px;\r\n\tfont-weight: bold;\r\n\ttext-align: left;\r\n\tmax-width: 98%;\r\n\twidth: 98%;\r\n\toverflow: hidden;\r\n\twhite-space: nowrap;\n}\n.intro-image-container[data-v-0955e102] {\r\n\toverflow: hidden;\n}\n.tutorial-intro-image[data-v-0955e102] {\r\n\t-webkit-transition: -webkit-transform .3s;\r\n\ttransition: transform .3s;\r\n\t-webkit-transform: scale(1.3);\r\n\t-ms-transform: scale(1.3);\r\n\ttransform: scale(1.3);\n}\n.tutorial-intro-image[data-v-0955e102],\r\n.intro-image-container[data-v-0955e102] {\r\n\twidth: 100%;\r\n\tmin-width: 100%;\r\n\tmax-width: 100%;\n}\n.tutorial:hover .tutorial-intro-image[data-v-0955e102] {\r\n\t-webkit-transform: scale(1);\r\n\t-ms-transform: scale(1);\r\n\ttransform: scale(1)\n}\n.well-custom[data-v-0955e102] {\r\n\tpadding: 0;\r\n\tbackground-color: #2c3e50;\r\n\tcolor: #ffffff;\n}\n#tracks-title .fa-spotify[data-v-0955e102] {\r\n\tcolor: #1DB954;\n}\n.marquee[data-v-0955e102] {\r\n\twidth: 450px;\r\n\twhite-space: nowrap;\r\n\toverflow: hidden;\r\n\tbox-sizing: border-box;\n}\n.marquee span[data-v-0955e102] {\r\n\tdisplay: inline-block;\r\n\tpadding-left: 100%;\r\n\ttext-indent: 0;\r\n\tanimation: marquee-data-v-0955e102 5s linear infinite;\n}\n.marquee span[data-v-0955e102]:hover {\r\n\tanimation-play-state: paused\n}\n@keyframes marquee-data-v-0955e102 {\n0% {\r\n\t\ttransform: translate(0, 0);\n}\n100% {\r\n\t\ttransform: translate(-100%, 0);\n}\n}\n.microsoft[data-v-0955e102] {\r\n\tpadding-left: 1.5em;\r\n\tposition: relative;\n}\n.microsoft[data-v-0955e102]:before,\r\n.microsoft[data-v-0955e102]::before {\r\n\tz-index: 2;\r\n\tcontent: '';\r\n\tposition: absolute;\r\n\ttop: -1em;\r\n\tleft: -1em;\r\n\twidth: .5em;\r\n\theight: .5em;\r\n\tbox-shadow: 1.0em 1.25em 0 #F65314, 1.6em 1.25em 0 #7CBB00, 1.0em 1.85em 0 #00A1F1, 1.6em 1.85em 0 #FFBB00;\n}\n.microsoft[data-v-0955e102]:after,\r\n.microsoft[data-v-0955e102]::after {\r\n\tz-index: 1;\r\n\tcontent: '';\r\n\tposition: absolute;\r\n\ttop: 0;\r\n\tleft: 0;\r\n\twidth: 2em;\r\n\theight: 2em;\r\n\tbackground-image: linear-gradient(90deg, white 70%, rgba(255, 255, 255, 0));\n}\n.vanity[data-v-0955e102] {\r\n\tcolor: #333;\r\n\ttext-align: center;\n}\n.vanity a[data-v-0955e102],\r\n.microsoft a[data-v-0955e102] {\r\n\tcolor: #1570A6;\r\n\ttransition: color .5s;\r\n\ttext-decoration: none;\n}\n.vanity a[data-v-0955e102]:hover,\r\n.microsoft a[data-v-0955e102]:hover {\r\n\tcolor: #F65314;\n}\r\n/* Style toggle button */\n.toggle[data-v-0955e102] {\r\n\tdisplay: block;\r\n\tmargin: 2em auto;\n}\n#tracks-title .fa-refresh[data-v-0955e102] {\r\n\tfloat: right;\r\n\tcursor: pointer;\n}\n#tracks-title .fa-refresh[data-v-0955e102]:hover {\r\n\tcolor: var(--refresh-hover-color);\n}\r\n", ""]);

// exports


/***/ }),

/***/ 245:
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

/***/ 246:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('h1', {
    attrs: {
      "id": "tracks-title"
    }
  }, [_c('i', {
    staticClass: "fa fa-spotify",
    attrs: {
      "title": "via Spotify"
    }
  }), _vm._v(" " + _vm._s(_vm.lang.get('music.title')) + " "), _c('i', {
    staticClass: "fa fa-refresh",
    class: {
      'fa-spin': !_vm.tracks.length
    },
    on: {
      "click": _vm.fetchTracks
    }
  })]), _vm._v(" "), _c('hr'), _vm._v(" "), (_vm.tracks.length) ? _c('div', {
    staticClass: "row",
    attrs: {
      "id": "tracks-container"
    }
  }, _vm._l((_vm.tracks), function(track) {
    return _c('div', {
      staticClass: "col-md-3"
    }, [_c('a', {
      staticClass: "tutorial-link",
      attrs: {
        "target": "_blank",
        "rel": "noreferrer noopener",
        "href": track.url
      }
    }, [_c('div', {
      staticClass: "well well-custom tutorial"
    }, [_c('h4', {
      staticClass: "title",
      attrs: {
        "id": "title"
      }
    }, [_c('span', {
      attrs: {
        "title": _vm.getTrackTitle(track)
      }
    }, [_vm._v(_vm._s(_vm.getTrackTitle(track)))])]), _vm._v(" "), _c('div', {
      staticClass: "intro-image-container"
    }, [_c('img', {
      staticClass: "tutorial-intro-image image",
      attrs: {
        "id": "track-image",
        "src": _vm.getLargestAlbumImage(track)
      }
    })])])])])
  })) : _c('div', {
    staticClass: "row loading-row"
  }, [_c('i', {
    staticClass: "fa fa-circle-o-notch fa-spin",
    attrs: {
      "aria-hidden": "true"
    }
  })])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-0955e102", module.exports)
  }
}

/***/ })

});