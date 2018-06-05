webpackJsonp([6],{

/***/ 278:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(336)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(338)
/* template */
var __vue_template__ = __webpack_require__(339)
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

/***/ 299:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(300)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(302)
/* template */
var __vue_template__ = __webpack_require__(308)
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
Component.options.__file = "resources/assets/js/components/DefaultLayout.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3d4fbab8", Component.options)
  } else {
    hotAPI.reload("data-v-3d4fbab8", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 300:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(301);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("0d3287e2", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-3d4fbab8\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./DefaultLayout.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-3d4fbab8\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./DefaultLayout.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 301:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 302:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__i18n__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__InfoOverlay__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__InfoOverlay___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__InfoOverlay__);
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
  components: { InfoOverlay: __WEBPACK_IMPORTED_MODULE_1__InfoOverlay___default.a },
  name: 'default-layout',
  data: function data() {
    return {
      lang: __WEBPACK_IMPORTED_MODULE_0__i18n__["a" /* i18n */]
    };
  }
});

/***/ }),

/***/ 303:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(304)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(306)
/* template */
var __vue_template__ = __webpack_require__(307)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-1e353a5b"
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
Component.options.__file = "resources/assets/js/components/InfoOverlay.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1e353a5b", Component.options)
  } else {
    hotAPI.reload("data-v-1e353a5b", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 304:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(305);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("707cb525", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1e353a5b\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./InfoOverlay.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1e353a5b\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./InfoOverlay.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 305:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "\n.info-overlay[data-v-1e353a5b] {\n    width: 50px;\n    height: 50px;\n    background-color: #2c3e50;\n    position: fixed;\n    bottom: 15px;\n    right: 16px;\n    border-radius: 100%;\n    -webkit-box-shadow: 0px 0px 14px 0px rgba(0,0,0,0.75);\n    box-shadow: 0px 0px 14px 0px rgba(0,0,0,0.75);\n}\n.info-overlay--button[data-v-1e353a5b] {\n    color: white;\n    cursor: pointer;\n    text-align: center;\n    position: relative;\n    top: 0px;\n    font-size: 1.5em;\n    padding: 8px 0px 7px 0px;\n    z-index: 10;\n    background: #2c3e50;\n    border-radius: 100%;\n}\n.info-overlay--container[data-v-1e353a5b] {\n    position: relative;\n}\n.info-overlay--content[data-v-1e353a5b] {\n    -webkit-transition: width .2s, height .2s;\n    transition: width .2s, height .2s;\n    width: 0;\n    height: 0;\n    position: absolute;\n    bottom: 25px;\n    right: 27px;\n    background: #fff;\n    border-radius: 4px;\n    overflow: hidden;\n    -webkit-box-shadow: 0px 0px 14px 0px rgba(0,0,0,0.75);\n    box-shadow: 0px 0px 14px 0px rgba(0,0,0,0.75);\n    background: url('/images/tic-tac-toe.png');\n}\n.info-overlay--content .row[data-v-1e353a5b] {\n    margin-left: 0;\n    margin-right: 0;\n    background: #ffffff63;\n}\n.info-overlay--open[data-v-1e353a5b] {\n    width: 20em;\n    height: 25em;\n    overflow: auto;\n}\n", ""]);

// exports


/***/ }),

/***/ 306:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
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
  name: 'info-overlay',

  data: function data() {
    return {
      open: false
    };
  },


  methods: {
    toggleInfoOverlay: function toggleInfoOverlay() {
      this.open = !this.open;

      if (this.open) {
        this.$refs.content.classList.add('info-overlay--open');
      } else {
        this.$refs.content.classList.remove('info-overlay--open');
      }
    }
  }
});

/***/ }),

/***/ 307:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "info-overlay" }, [
    _c("div", { staticClass: "info-overlay--container" }, [
      _c(
        "p",
        {
          staticClass: "info-overlay--button",
          on: { click: _vm.toggleInfoOverlay }
        },
        [_c("i", { staticClass: "fas fa-question" })]
      ),
      _vm._v(" "),
      _c("div", { ref: "content", staticClass: "info-overlay--content" }, [
        _vm._m(0)
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-md-12" }, [
        _c("h3", { staticClass: "info-overlay--title" }, [
          _vm._v("What's this about, then?")
        ]),
        _vm._v(" "),
        _c("p", [
          _vm._v(
            "\n                        This site serves as both my personal site & my playground for new technologies.\n                    "
          )
        ]),
        _vm._v(" "),
        _c("p", [
          _vm._v(
            "\n                        As you can probably tell, site design is not one of my strong points. But I'm always trying to keep up-to-date with new web technologies.\n                    "
          )
        ]),
        _vm._v(" "),
        _c("p", [
          _vm._v("Here's a few technologies in use/powering this site:-")
        ]),
        _vm._v(" "),
        _c("ul", [
          _c("li", [_vm._v("Ubuntu 16.04 (Xenial)")]),
          _vm._v(" "),
          _c("li", [_vm._v("Nginx 1.14")]),
          _vm._v(" "),
          _c("li", [_vm._v("Google PageSpeed NGX")]),
          _vm._v(" "),
          _c("li", [_vm._v("PHP 7.1.16")]),
          _vm._v(" "),
          _c("li", [_vm._v("WebP Images*")]),
          _vm._v(" "),
          _c("li", [_vm._v("Laravel 5.6.17")]),
          _vm._v(" "),
          _c("li", [_vm._v("ServiceWorker*^")]),
          _vm._v(" "),
          _c("li", [_vm._v("VueJS")])
        ]),
        _vm._v(" "),
        _c("p", [
          _vm._v(
            "\n                        * - Based on browser compatibility\n                    "
          )
        ]),
        _vm._v(" "),
        _c("p", [
          _vm._v(
            "\n                        ^ - Used for offline site availability & allows the contact form to work offline.\n                    "
          )
        ])
      ])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-1e353a5b", module.exports)
  }
}

/***/ }),

/***/ 308:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c(
      "div",
      { staticClass: "container" },
      [
        _c(
          "navbar",
          [
            _c(
              "template",
              { slot: "left-links" },
              [
                _c("navbar-link", { attrs: { href: "/about", icon: "user" } }, [
                  _vm._v(_vm._s(_vm.lang.get("navbar.about")))
                ]),
                _vm._v(" "),
                _c(
                  "navbar-link",
                  { attrs: { href: "/posts", icon: "pencil" } },
                  [_vm._v(_vm._s(_vm.lang.get("navbar.blog")))]
                ),
                _vm._v(" "),
                _c(
                  "navbar-link",
                  { attrs: { href: "/music", icon: "music" } },
                  [_vm._v(_vm._s(_vm.lang.get("navbar.music")))]
                ),
                _vm._v(" "),
                _c(
                  "navbar-link",
                  { attrs: { href: "/photography", icon: "camera-retro" } },
                  [_vm._v(_vm._s(_vm.lang.get("navbar.photography")))]
                ),
                _vm._v(" "),
                _c(
                  "navbar-link",
                  { attrs: { href: "/contact", icon: "inbox" } },
                  [_vm._v(_vm._s(_vm.lang.get("navbar.contact")))]
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
                      _c("router-link", { attrs: { to: "/dashboard" } }, [
                        _c("i", { staticClass: "glyphicon glyphicon-flash" }),
                        _vm._v(" Dashboard")
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
        _c("transition", { attrs: { name: "fade" } }, [_vm._t("default")], 2),
        _vm._v(" "),
        _c("info-overlay")
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
    require("vue-hot-reload-api")      .rerender("data-v-3d4fbab8", module.exports)
  }
}

/***/ }),

/***/ 336:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(337);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("8c49898c", content, false, {});
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

/***/ 337:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "\n[data-v-9e472c3c]:root {\n\t--refresh-hover-color: #586b7d;\n}\n.loading-row[data-v-9e472c3c] {\n    text-align: center;\n    font-size: 5em;\n    color: #2c3e50;\n}\n.tutorial[data-v-9e472c3c] {\n\t-webkit-transition: all .3s;\n\ttransition: all .3s;\n}\n.tutorial-link[data-v-9e472c3c],\n.tutorial-link[data-v-9e472c3c]:hover,\n.tutorial-link[data-v-9e472c3c]:active {\n\ttext-decoration: none;\n}\n.tutorial[data-v-9e472c3c]:hover {\n\t-webkit-transform: scale(1.03);\n\ttransform: scale(1.03);\n\t-webkit-box-shadow: 0 0 13px #CCC;\n\t        box-shadow: 0 0 13px #CCC;\n\tz-index: 3;\n}\n.tutorial .title[data-v-9e472c3c] {\n\tpadding: 0 0 4px 8px;\n\tfont-weight: bold;\n\ttext-align: left;\n\tmax-width: 98%;\n\twidth: 98%;\n\toverflow: hidden;\n\twhite-space: nowrap;\n}\n.intro-image-container[data-v-9e472c3c] {\n\toverflow: hidden;\n}\n.tutorial-intro-image[data-v-9e472c3c] {\n\t-webkit-transition: -webkit-transform .3s;\n\ttransition: -webkit-transform .3s;\n\ttransition: transform .3s;\n\ttransition: transform .3s, -webkit-transform .3s;\n\t-webkit-transform: scale(1.3);\n\ttransform: scale(1.3);\n}\n.tutorial-intro-image[data-v-9e472c3c],\n.intro-image-container[data-v-9e472c3c] {\n\twidth: 100%;\n\tmin-width: 100%;\n\tmax-width: 100%;\n}\n.tutorial:hover .tutorial-intro-image[data-v-9e472c3c] {\n\t-webkit-transform: scale(1);\n\ttransform: scale(1)\n}\n.well-custom[data-v-9e472c3c] {\n\tpadding: 0;\n\tbackground-color: #2c3e50;\n\tcolor: #ffffff;\n}\n#tracks-title .fa-spotify[data-v-9e472c3c] {\n\tcolor: #1DB954;\n}\n.marquee[data-v-9e472c3c] {\n\twidth: 450px;\n\twhite-space: nowrap;\n\toverflow: hidden;\n\t-webkit-box-sizing: border-box;\n\t        box-sizing: border-box;\n}\n.marquee span[data-v-9e472c3c] {\n\tdisplay: inline-block;\n\tpadding-left: 100%;\n\ttext-indent: 0;\n\t-webkit-animation: marquee-data-v-9e472c3c 5s linear infinite;\n\t        animation: marquee-data-v-9e472c3c 5s linear infinite;\n}\n.marquee span[data-v-9e472c3c]:hover {\n\t-webkit-animation-play-state: paused;\n\t        animation-play-state: paused\n}\n@-webkit-keyframes marquee-data-v-9e472c3c {\n0% {\n\t\t-webkit-transform: translate(0, 0);\n\t\t        transform: translate(0, 0);\n}\n100% {\n\t\t-webkit-transform: translate(-100%, 0);\n\t\t        transform: translate(-100%, 0);\n}\n}\n@keyframes marquee-data-v-9e472c3c {\n0% {\n\t\t-webkit-transform: translate(0, 0);\n\t\t        transform: translate(0, 0);\n}\n100% {\n\t\t-webkit-transform: translate(-100%, 0);\n\t\t        transform: translate(-100%, 0);\n}\n}\n.microsoft[data-v-9e472c3c] {\n\tpadding-left: 1.5em;\n\tposition: relative;\n}\n.microsoft[data-v-9e472c3c]:before,\n.microsoft[data-v-9e472c3c]::before {\n\tz-index: 2;\n\tcontent: '';\n\tposition: absolute;\n\ttop: -1em;\n\tleft: -1em;\n\twidth: .5em;\n\theight: .5em;\n\t-webkit-box-shadow: 1.0em 1.25em 0 #F65314, 1.6em 1.25em 0 #7CBB00, 1.0em 1.85em 0 #00A1F1, 1.6em 1.85em 0 #FFBB00;\n\t        box-shadow: 1.0em 1.25em 0 #F65314, 1.6em 1.25em 0 #7CBB00, 1.0em 1.85em 0 #00A1F1, 1.6em 1.85em 0 #FFBB00;\n}\n.microsoft[data-v-9e472c3c]:after,\n.microsoft[data-v-9e472c3c]::after {\n\tz-index: 1;\n\tcontent: '';\n\tposition: absolute;\n\ttop: 0;\n\tleft: 0;\n\twidth: 2em;\n\theight: 2em;\n\tbackground-image: -webkit-gradient(linear, left top, right top, color-stop(70%, white), to(rgba(255, 255, 255, 0)));\n\tbackground-image: linear-gradient(90deg, white 70%, rgba(255, 255, 255, 0));\n}\n.vanity[data-v-9e472c3c] {\n\tcolor: #333;\n\ttext-align: center;\n}\n.vanity a[data-v-9e472c3c],\n.microsoft a[data-v-9e472c3c] {\n\tcolor: #1570A6;\n\t-webkit-transition: color .5s;\n\ttransition: color .5s;\n\ttext-decoration: none;\n}\n.vanity a[data-v-9e472c3c]:hover,\n.microsoft a[data-v-9e472c3c]:hover {\n\tcolor: #F65314;\n}\n/* Style toggle button */\n.toggle[data-v-9e472c3c] {\n\tdisplay: block;\n\tmargin: 2em auto;\n}\n#tracks-title .fa-sync[data-v-9e472c3c] {\n\tfloat: right;\n\tcursor: pointer;\n}\n#tracks-title .fa-sync[data-v-9e472c3c]:hover {\n\tcolor: var(--refresh-hover-color);\n}\n", ""]);

// exports


/***/ }),

/***/ 338:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__i18n__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Http__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_DefaultLayout__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_DefaultLayout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_DefaultLayout__);
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
    components: { DefaultLayout: __WEBPACK_IMPORTED_MODULE_2__components_DefaultLayout___default.a },
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

/***/ 339:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("default-layout", [
    _c("div", [
      _c("h1", { attrs: { id: "tracks-title" } }, [
        _c("i", {
          staticClass: "fab fa-spotify",
          attrs: { title: "via Spotify" }
        }),
        _vm._v(" " + _vm._s(_vm.lang.get("music.title")) + " "),
        _c("i", {
          staticClass: "fal fa-sync",
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
                      _c(
                        "h4",
                        { staticClass: "title", attrs: { id: "title" } },
                        [
                          _c(
                            "span",
                            { attrs: { title: _vm.getTrackTitle(track) } },
                            [_vm._v(_vm._s(_vm.getTrackTitle(track)))]
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "intro-image-container" }, [
                        _c("img", {
                          staticClass: "tutorial-intro-image image",
                          attrs: {
                            id: "track-image",
                            src: _vm.getLargestAlbumImage(track),
                            alt: "Album Art"
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
              staticClass: "fal fa-circle-notch fa-spin",
              attrs: { "aria-hidden": "true" }
            })
          ])
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