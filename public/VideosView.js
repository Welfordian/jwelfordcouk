webpackJsonp([3],{

/***/ 229:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(239)
}
var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(241),
  /* template */
  __webpack_require__(242),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-4107e0ee",
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/var/www/dev.site/resources/assets/js/views/Videos.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Videos.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4107e0ee", Component.options)
  } else {
    hotAPI.reload("data-v-4107e0ee", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 239:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(240);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(6)("ca210fd0", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-4107e0ee\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Videos.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-4107e0ee\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Videos.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 240:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(undefined);
// imports


// module
exports.push([module.i, "\n[data-v-4107e0ee]:root {\r\n    --refresh-hover-color: #586b7d;\n}\n.fa-refresh[data-v-4107e0ee] {\r\n\tfloat: right;\r\n\tcursor: pointer;\n}\n.fa-refresh[data-v-4107e0ee]:hover {\r\n\tcolor: var(--refresh-hover-color);\n}\n.loading-row[data-v-4107e0ee] {\r\n    text-align: center;\r\n    font-size: 5em;\r\n    color: #2c3e50;\n}\n.tutorial[data-v-4107e0ee] {\r\n    transition: all .3s;\n}\n.tutorial-link[data-v-4107e0ee],\r\n.tutorial-link[data-v-4107e0ee]:hover,\r\n.tutorial-link[data-v-4107e0ee]:active {\r\n    text-decoration: none;\r\ncolor: #FFFFF !important;\n}\n.tutorial[data-v-4107e0ee]:hover {\r\n    -webkit-transform: scale(1.03);\r\n    -ms-transform: scale(1.03);\r\n    transform: scale(1.03);\r\n    box-shadow: 0 0 13px #CCC;\r\n    z-index: 3;\n}\n.tutorial .title[data-v-4107e0ee] {\r\n    padding: 0 0 4px 8px;\r\n    font-weight: bold;\r\n    text-align: left;\r\n    max-width: 98%;\r\n    width: 98%;\r\n    overflow: hidden;\r\n    white-space: nowrap;\n}\n.intro-image-container[data-v-4107e0ee] {\r\n    overflow: hidden;\r\nposition: relative;\r\nheight: 148px;\n}\n.tutorial-intro-image[data-v-4107e0ee] {\r\n    -webkit-transition: -webkit-transform .3s;\r\n    transition: transform .3s;\r\n    -webkit-transform: scale(1.3);\r\n    -ms-transform: scale(1.3);\r\n    transform: scale(1.3);\r\nposition: absolute;\r\nheight: auto !important;\n}\n.tutorial-intro-image.youtube[data-v-4107e0ee]{\r\ntop: -25px;\n}\n.tutorial-intro-image[data-v-4107e0ee],\r\n.intro-image-container[data-v-4107e0ee] {\r\n    width: 100%;\r\n    min-width: 100%;\r\n    max-width: 100%;\n}\n.tutorial:hover .tutorial-intro-image[data-v-4107e0ee] {\r\n    -webkit-transform: scale(1);\r\n    -ms-transform: scale(1);\r\n    transform: scale(1)\n}\n.well-custom[data-v-4107e0ee] {\r\n    padding: 0;\r\n    background-color: #2c3e50;\r\n    color: #ffffff;\n}\n#tracks-title .fa-spotify[data-v-4107e0ee] {\r\n    color: #1DB954;\n}\r\n/* Make it a marquee */\n.marquee[data-v-4107e0ee] {\r\n    width: 450px;\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n    box-sizing: border-box;\n}\n.marquee span[data-v-4107e0ee] {\r\n    display: inline-block;\r\n    padding-left: 100%;\r\n    text-indent: 0;\r\n    animation: marquee-data-v-4107e0ee 5s linear infinite;\n}\n.marquee span[data-v-4107e0ee]:hover {\r\n    animation-play-state: paused\n}\r\n/* Make it move */\n@keyframes marquee-data-v-4107e0ee {\n0% {\r\n        transform: translate(0, 0);\n}\n100% {\r\n        transform: translate(-100%, 0);\n}\n}\r\n/* Make it pretty */\n.microsoft[data-v-4107e0ee] {\r\n    padding-left: 1.5em;\r\n    position: relative;\n}\r\n/* ::before was :before before ::before was ::before - kthx */\n.microsoft[data-v-4107e0ee]:before,\r\n.microsoft[data-v-4107e0ee]::before {\r\n    z-index: 2;\r\n    content: '';\r\n    position: absolute;\r\n    top: -1em;\r\n    left: -1em;\r\n    width: .5em;\r\n    height: .5em;\r\n    box-shadow: 1.0em 1.25em 0 #F65314, 1.6em 1.25em 0 #7CBB00, 1.0em 1.85em 0 #00A1F1, 1.6em 1.85em 0 #FFBB00;\n}\n.microsoft[data-v-4107e0ee]:after,\r\n.microsoft[data-v-4107e0ee]::after {\r\n    z-index: 1;\r\n    content: '';\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    width: 2em;\r\n    height: 2em;\r\n    background-image: linear-gradient(90deg, white 70%, rgba(255, 255, 255, 0));\n}\r\n/* Style the links */\n.vanity[data-v-4107e0ee] {\r\n    color: #333;\r\n    text-align: center;\n}\n.vanity a[data-v-4107e0ee],\r\n.microsoft a[data-v-4107e0ee] {\r\n    color: #1570A6;\r\n    transition: color .5s;\r\n    text-decoration: none;\n}\n.vanity a[data-v-4107e0ee]:hover,\r\n.microsoft a[data-v-4107e0ee]:hover {\r\n    color: #F65314;\n}\r\n/* Style toggle button */\n.toggle[data-v-4107e0ee] {\r\n    display: block;\r\n    margin: 2em auto;\n}\n#tracks-title .fa-refresh[data-v-4107e0ee] {\r\n    float: right;\r\n    cursor: pointer;\n}\n#tracks-title .fa-refresh[data-v-4107e0ee]:hover {\r\n    color: var(--refresh-hover-color);\n}\n.intro-image-origin[data-v-4107e0ee]{\r\nposition: absolute;\r\nbottom: 5px;\r\nleft: 5px;\r\nwidth: 45px;\n}\n.tooltip-inner[data-v-4107e0ee]{\r\nmax-width: 245px !important;\r\npadding: 8px;\n}\r\n", ""]);

// exports


/***/ }),

/***/ 241:
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
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            lang: __WEBPACK_IMPORTED_MODULE_0__i18n__["a" /* i18n */],
            videos: {}
        };
    },
    mounted: function mounted() {
        this.fetchVideos();
    },


    methods: {
        fetchVideos: function fetchVideos() {
            this.videos = {};

            __WEBPACK_IMPORTED_MODULE_1__Http__["a" /* _http */].get('https://welfordian-60215.firebaseio.com/videos.json?limitToLast=50&orderBy=%22$key%22').then(function (data) {
                this.videos = data.data;
            }.bind(this));
        }
    }
});

/***/ }),

/***/ 242:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('h1', [_c('i', {
    staticClass: "fa fa-youtube-play",
    staticStyle: {
      "color": "#e52d27"
    }
  }), _vm._v(" " + _vm._s(_vm.lang.get('videos.title')) + " "), _c('i', {
    staticClass: "fa fa-refresh",
    class: {
      'fa-spin': !Object.keys(_vm.videos).length
    },
    on: {
      "click": _vm.fetchVideos
    }
  })]), _vm._v(" "), _c('hr'), _vm._v(" "), (Object.keys(_vm.videos).length) ? _c('div', {
    staticClass: "row viewing-habits"
  }, _vm._l((_vm.videos), function(video) {
    return (video.title) ? _c('div', {
      staticClass: "col-md-3 col-lg-3"
    }, [_c('a', {
      staticClass: "tutorial-link",
      attrs: {
        "target": "_blank",
        "rel": "noreferrer noopener",
        "href": video.url
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
        "title": video.title
      }
    }, [_vm._v(_vm._s(video.title))])]), _vm._v(" "), _c('div', {
      staticClass: "intro-image-container",
      staticStyle: {
        "position": "relative"
      }
    }, [_c('img', {
      staticClass: "tutorial-intro-image image",
      class: video.tag,
      attrs: {
        "id": "track-image",
        "src": video.image
      }
    }), _vm._v(" "), (video.tag == 'youtube') ? _c('img', {
      staticClass: "intro-image-origin",
      attrs: {
        "src": "//cdn.jwelford.co.uk/images/youtube-play.svg"
      }
    }) : _c('img', {
      staticClass: "intro-image-origin",
      staticStyle: {
        "width": "145px"
      },
      attrs: {
        "src": "//cdn.jwelford.co.uk/images/netflix-n.svg"
      }
    })])])])]) : _vm._e()
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
     require("vue-hot-reload-api").rerender("data-v-4107e0ee", module.exports)
  }
}

/***/ })

});