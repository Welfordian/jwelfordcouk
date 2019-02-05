webpackJsonp([2],{

/***/ 239:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(248)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(250)
/* template */
var __vue_template__ = __webpack_require__(251)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-3c6bd2eb"
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
Component.options.__file = "resources/assets/js/views/Videos.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3c6bd2eb", Component.options)
  } else {
    hotAPI.reload("data-v-3c6bd2eb", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 248:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(249);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(6)("3657b5f6", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-3c6bd2eb\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Videos.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-3c6bd2eb\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Videos.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 249:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(false);
// imports


// module
exports.push([module.i, "\n[data-v-3c6bd2eb]:root {\n    --refresh-hover-color: #586b7d;\n}\n.fa-refresh[data-v-3c6bd2eb] {\n\tfloat: right;\n\tcursor: pointer;\n}\n.fa-refresh[data-v-3c6bd2eb]:hover {\n\tcolor: var(--refresh-hover-color);\n}\n.loading-row[data-v-3c6bd2eb] {\n    text-align: center;\n    font-size: 5em;\n    color: #2c3e50;\n}\n.tutorial[data-v-3c6bd2eb] {\n    -webkit-transition: all .3s;\n    transition: all .3s;\n}\n.tutorial-link[data-v-3c6bd2eb],\n.tutorial-link[data-v-3c6bd2eb]:hover,\n.tutorial-link[data-v-3c6bd2eb]:active {\n    text-decoration: none;\ncolor: #FFFFF !important;\n}\n.tutorial[data-v-3c6bd2eb]:hover {\n    -webkit-transform: scale(1.03);\n    transform: scale(1.03);\n    -webkit-box-shadow: 0 0 13px #CCC;\n            box-shadow: 0 0 13px #CCC;\n    z-index: 3;\n}\n.tutorial .title[data-v-3c6bd2eb] {\n    padding: 0 0 4px 8px;\n    font-weight: bold;\n    text-align: left;\n    max-width: 98%;\n    width: 98%;\n    overflow: hidden;\n    white-space: nowrap;\n}\n.intro-image-container[data-v-3c6bd2eb] {\n    overflow: hidden;\nposition: relative;\nheight: 148px;\n}\n.tutorial-intro-image[data-v-3c6bd2eb] {\n    -webkit-transition: -webkit-transform .3s;\n    transition: -webkit-transform .3s;\n    transition: transform .3s;\n    transition: transform .3s, -webkit-transform .3s;\n    -webkit-transform: scale(1.3);\n    transform: scale(1.3);\nposition: absolute;\nheight: auto !important;\n}\n.tutorial-intro-image.youtube[data-v-3c6bd2eb]{\ntop: -25px;\n}\n.tutorial-intro-image[data-v-3c6bd2eb],\n.intro-image-container[data-v-3c6bd2eb] {\n    width: 100%;\n    min-width: 100%;\n    max-width: 100%;\n}\n.tutorial:hover .tutorial-intro-image[data-v-3c6bd2eb] {\n    -webkit-transform: scale(1);\n    transform: scale(1)\n}\n.well-custom[data-v-3c6bd2eb] {\n    padding: 0;\n    background-color: #2c3e50;\n    color: #ffffff;\n}\n#tracks-title .fa-spotify[data-v-3c6bd2eb] {\n    color: #1DB954;\n}\n/* Make it a marquee */\n.marquee[data-v-3c6bd2eb] {\n    width: 450px;\n    white-space: nowrap;\n    overflow: hidden;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n}\n.marquee span[data-v-3c6bd2eb] {\n    display: inline-block;\n    padding-left: 100%;\n    text-indent: 0;\n    -webkit-animation: marquee-data-v-3c6bd2eb 5s linear infinite;\n            animation: marquee-data-v-3c6bd2eb 5s linear infinite;\n}\n.marquee span[data-v-3c6bd2eb]:hover {\n    -webkit-animation-play-state: paused;\n            animation-play-state: paused\n}\n/* Make it move */\n@-webkit-keyframes marquee-data-v-3c6bd2eb {\n0% {\n        -webkit-transform: translate(0, 0);\n                transform: translate(0, 0);\n}\n100% {\n        -webkit-transform: translate(-100%, 0);\n                transform: translate(-100%, 0);\n}\n}\n@keyframes marquee-data-v-3c6bd2eb {\n0% {\n        -webkit-transform: translate(0, 0);\n                transform: translate(0, 0);\n}\n100% {\n        -webkit-transform: translate(-100%, 0);\n                transform: translate(-100%, 0);\n}\n}\n/* Make it pretty */\n.microsoft[data-v-3c6bd2eb] {\n    padding-left: 1.5em;\n    position: relative;\n}\n/* ::before was :before before ::before was ::before - kthx */\n.microsoft[data-v-3c6bd2eb]:before,\n.microsoft[data-v-3c6bd2eb]::before {\n    z-index: 2;\n    content: '';\n    position: absolute;\n    top: -1em;\n    left: -1em;\n    width: .5em;\n    height: .5em;\n    -webkit-box-shadow: 1.0em 1.25em 0 #F65314, 1.6em 1.25em 0 #7CBB00, 1.0em 1.85em 0 #00A1F1, 1.6em 1.85em 0 #FFBB00;\n            box-shadow: 1.0em 1.25em 0 #F65314, 1.6em 1.25em 0 #7CBB00, 1.0em 1.85em 0 #00A1F1, 1.6em 1.85em 0 #FFBB00;\n}\n.microsoft[data-v-3c6bd2eb]:after,\n.microsoft[data-v-3c6bd2eb]::after {\n    z-index: 1;\n    content: '';\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 2em;\n    height: 2em;\n    background-image: -webkit-gradient(linear, left top, right top, color-stop(70%, white), to(rgba(255, 255, 255, 0)));\n    background-image: linear-gradient(90deg, white 70%, rgba(255, 255, 255, 0));\n}\n/* Style the links */\n.vanity[data-v-3c6bd2eb] {\n    color: #333;\n    text-align: center;\n}\n.vanity a[data-v-3c6bd2eb],\n.microsoft a[data-v-3c6bd2eb] {\n    color: #1570A6;\n    -webkit-transition: color .5s;\n    transition: color .5s;\n    text-decoration: none;\n}\n.vanity a[data-v-3c6bd2eb]:hover,\n.microsoft a[data-v-3c6bd2eb]:hover {\n    color: #F65314;\n}\n/* Style toggle button */\n.toggle[data-v-3c6bd2eb] {\n    display: block;\n    margin: 2em auto;\n}\n#tracks-title .fa-refresh[data-v-3c6bd2eb] {\n    float: right;\n    cursor: pointer;\n}\n#tracks-title .fa-refresh[data-v-3c6bd2eb]:hover {\n    color: var(--refresh-hover-color);\n}\n.intro-image-origin[data-v-3c6bd2eb]{\nposition: absolute;\nbottom: 5px;\nleft: 5px;\nwidth: 45px;\n}\n.tooltip-inner[data-v-3c6bd2eb]{\nmax-width: 245px !important;\npadding: 8px;\n}\n", ""]);

// exports


/***/ }),

/***/ 250:
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

/***/ 251:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("h1", [
      _c("i", {
        staticClass: "fa fa-youtube-play",
        staticStyle: { color: "#e52d27" }
      }),
      _vm._v(" " + _vm._s(_vm.lang.get("videos.title")) + " "),
      _c("i", {
        staticClass: "fa fa-refresh",
        class: { "fa-spin": !Object.keys(_vm.videos).length },
        on: { click: _vm.fetchVideos }
      })
    ]),
    _vm._v(" "),
    _c("hr"),
    _vm._v(" "),
    Object.keys(_vm.videos).length
      ? _c(
          "div",
          { staticClass: "row viewing-habits" },
          _vm._l(_vm.videos, function(video) {
            return video.title
              ? _c("div", { staticClass: "col-md-3 col-lg-3" }, [
                  _c(
                    "a",
                    {
                      staticClass: "tutorial-link",
                      attrs: {
                        target: "_blank",
                        rel: "noreferrer noopener",
                        href: video.url
                      }
                    },
                    [
                      _c("div", { staticClass: "well well-custom tutorial" }, [
                        _c(
                          "h4",
                          { staticClass: "title", attrs: { id: "title" } },
                          [
                            _c("span", { attrs: { title: video.title } }, [
                              _vm._v(_vm._s(video.title))
                            ])
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass: "intro-image-container",
                            staticStyle: { position: "relative" }
                          },
                          [
                            _c("img", {
                              staticClass: "tutorial-intro-image image",
                              class: video.tag,
                              attrs: { id: "track-image", src: video.image }
                            }),
                            _vm._v(" "),
                            video.tag == "youtube"
                              ? _c("img", {
                                  staticClass: "intro-image-origin",
                                  attrs: {
                                    src:
                                      "//cdn.jwelford.co.uk/images/youtube-play.svg"
                                  }
                                })
                              : _c("img", {
                                  staticClass: "intro-image-origin",
                                  staticStyle: { width: "145px" },
                                  attrs: {
                                    src:
                                      "//cdn.jwelford.co.uk/images/netflix-n.svg"
                                  }
                                })
                          ]
                        )
                      ])
                    ]
                  )
                ])
              : _vm._e()
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
    require("vue-hot-reload-api")      .rerender("data-v-3c6bd2eb", module.exports)
  }
}

/***/ })

});