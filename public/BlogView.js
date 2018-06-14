webpackJsonp([2],{

/***/ 271:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(321)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(323)
/* template */
var __vue_template__ = __webpack_require__(329)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-619654f5"
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
Component.options.__file = "resources/assets/js/views/Blog.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-619654f5", Component.options)
  } else {
    hotAPI.reload("data-v-619654f5", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 297:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(298)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(300)
/* template */
var __vue_template__ = __webpack_require__(306)
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

/***/ 298:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(299);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("0d3287e2", content, false, {});
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

/***/ 299:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 300:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__i18n__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__InfoOverlay__ = __webpack_require__(301);
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

/***/ 301:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(302)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(304)
/* template */
var __vue_template__ = __webpack_require__(305)
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

/***/ 302:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(303);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("707cb525", content, false, {});
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

/***/ 303:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "\n.info-overlay[data-v-1e353a5b] {\n    width: 50px;\n    height: 50px;\n    background-color: #2c3e50;\n    position: fixed;\n    bottom: 15px;\n    right: 16px;\n    border-radius: 100%;\n    -webkit-box-shadow: 0px 0px 14px 0px rgba(0,0,0,0.75);\n    box-shadow: 0px 0px 14px 0px rgba(0,0,0,0.75);\n}\n.info-overlay--button[data-v-1e353a5b] {\n    color: white;\n    cursor: pointer;\n    text-align: center;\n    position: relative;\n    top: 0px;\n    font-size: 1.5em;\n    padding: 8px 0px 7px 0px;\n    z-index: 10;\n    background: #2c3e50;\n    border-radius: 100%;\n}\n.info-overlay--container[data-v-1e353a5b] {\n    position: relative;\n}\n.info-overlay--content[data-v-1e353a5b] {\n    -webkit-transition: width .2s, height .2s;\n    transition: width .2s, height .2s;\n    width: 0;\n    height: 0;\n    position: absolute;\n    bottom: 25px;\n    right: 27px;\n    background: #fff;\n    border-radius: 4px;\n    overflow: hidden;\n    -webkit-box-shadow: 0px 0px 14px 0px rgba(0,0,0,0.75);\n    box-shadow: 0px 0px 14px 0px rgba(0,0,0,0.75);\n    background: url('/images/tic-tac-toe.png');\n}\n.info-overlay--content .row[data-v-1e353a5b] {\n    margin-left: 0;\n    margin-right: 0;\n    background: #ffffff63;\n}\n.info-overlay--open[data-v-1e353a5b] {\n    width: 20em;\n    height: 25em;\n    overflow: auto;\n}\n", ""]);

// exports


/***/ }),

/***/ 304:
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

/***/ 305:
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

/***/ 306:
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
                  { attrs: { href: "/experiments", icon: "flask" } },
                  [_vm._v(_vm._s(_vm.lang.get("navbar.experiments")))]
                ),
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

/***/ 321:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(322);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("461e88b8", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-619654f5\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Blog.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-619654f5\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Blog.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 322:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "\n.loading-row[data-v-619654f5] {\n    text-align: center;\n    font-size: 5em;\n    color: #2c3e50;\n}\nli .fa[data-v-619654f5] {\n    margin-left: -5px;\n    margin-right: 5px;\n}\na.primary[data-v-619654f5] {\n    color: #2c3e50;\n}\nli a.danger[data-v-619654f5]{\n    color: #e74c3c;\n}\nli a.danger[data-v-619654f5]:hover, li a.danger[data-v-619654f5]:focus, li a.danger[data-v-619654f5]:active {\n    background-color: #e74c3c;\n    color: #fff;\n}\n[data-v-619654f5]:root {\n    --refresh-hover-color: #586b7d;\n}\n.loading-row[data-v-619654f5] {\n    text-align: center;\n    font-size: 5em;\n    color: #2c3e50;\n}\n.tutorial[data-v-619654f5] {\n    -webkit-transition: all .3s;\n    transition: all .3s;\n}\n.tutorial-link[data-v-619654f5],\n.tutorial-link[data-v-619654f5]:hover,\n.tutorial-link[data-v-619654f5]:active {\n    text-decoration: none;\n}\n.tutorial[data-v-619654f5]:hover {\n    -webkit-transform: scale(1.03);\n    transform: scale(1.03);\n    -webkit-box-shadow: 0 0 13px #CCC;\n            box-shadow: 0 0 13px #CCC;\n    z-index: 3;\n}\n.tutorial .title[data-v-619654f5] {\n    padding: 0 0 4px 8px;\n    font-weight: bold;\n    text-align: left;\n    max-width: 98%;\n    width: 98%;\n    overflow: hidden;\n    white-space: nowrap;\n}\n.intro-image-container[data-v-619654f5] {\n    overflow: hidden;\n}\n.tutorial-intro-image[data-v-619654f5] {\n    -webkit-transition: -webkit-transform .3s;\n    transition: -webkit-transform .3s;\n    transition: transform .3s;\n    transition: transform .3s, -webkit-transform .3s;\n    -webkit-transform: scale(1.3);\n    transform: scale(1.3);\n}\n.tutorial-intro-image[data-v-619654f5],\n.intro-image-container[data-v-619654f5] {\n    width: 100%;\n    min-width: 100%;\n    max-width: 100%;\n}\n.tutorial:hover .tutorial-intro-image[data-v-619654f5] {\n    -webkit-transform: scale(1);\n    transform: scale(1)\n}\n.well-custom[data-v-619654f5] {\n    padding: 0;\n    background-color: #2c3e50;\n    color: #ffffff;\n}\n#tracks-title .fa-spotify[data-v-619654f5] {\n    color: #1DB954;\n}\n.marquee[data-v-619654f5] {\n    width: 450px;\n    white-space: nowrap;\n    overflow: hidden;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n}\n.marquee span[data-v-619654f5] {\n    display: inline-block;\n    padding-left: 100%;\n    text-indent: 0;\n    -webkit-animation: marquee-data-v-619654f5 5s linear infinite;\n            animation: marquee-data-v-619654f5 5s linear infinite;\n}\n.marquee span[data-v-619654f5]:hover {\n    -webkit-animation-play-state: paused;\n            animation-play-state: paused\n}\n@-webkit-keyframes marquee-data-v-619654f5 {\n0% {\n        -webkit-transform: translate(0, 0);\n                transform: translate(0, 0);\n}\n100% {\n        -webkit-transform: translate(-100%, 0);\n                transform: translate(-100%, 0);\n}\n}\n@keyframes marquee-data-v-619654f5 {\n0% {\n        -webkit-transform: translate(0, 0);\n                transform: translate(0, 0);\n}\n100% {\n        -webkit-transform: translate(-100%, 0);\n                transform: translate(-100%, 0);\n}\n}\n.microsoft[data-v-619654f5] {\n    padding-left: 1.5em;\n    position: relative;\n}\n.microsoft[data-v-619654f5]:before,\n.microsoft[data-v-619654f5]::before {\n    z-index: 2;\n    content: '';\n    position: absolute;\n    top: -1em;\n    left: -1em;\n    width: .5em;\n    height: .5em;\n    -webkit-box-shadow: 1.0em 1.25em 0 #F65314, 1.6em 1.25em 0 #7CBB00, 1.0em 1.85em 0 #00A1F1, 1.6em 1.85em 0 #FFBB00;\n            box-shadow: 1.0em 1.25em 0 #F65314, 1.6em 1.25em 0 #7CBB00, 1.0em 1.85em 0 #00A1F1, 1.6em 1.85em 0 #FFBB00;\n}\n.microsoft[data-v-619654f5]:after,\n.microsoft[data-v-619654f5]::after {\n    z-index: 1;\n    content: '';\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 2em;\n    height: 2em;\n    background-image: -webkit-gradient(linear, left top, right top, color-stop(70%, white), to(rgba(255, 255, 255, 0)));\n    background-image: linear-gradient(90deg, white 70%, rgba(255, 255, 255, 0));\n}\n.vanity[data-v-619654f5] {\n    color: #333;\n    text-align: center;\n}\n.vanity a[data-v-619654f5],\n.microsoft a[data-v-619654f5] {\n    color: #1570A6;\n    -webkit-transition: color .5s;\n    transition: color .5s;\n    text-decoration: none;\n}\n.vanity a[data-v-619654f5]:hover,\n.microsoft a[data-v-619654f5]:hover {\n    color: #F65314;\n}\n/* Style toggle button */\n.toggle[data-v-619654f5] {\n    display: block;\n    margin: 2em auto;\n}\n#tracks-title .fa-refresh[data-v-619654f5] {\n    float: right;\n    cursor: pointer;\n}\n#tracks-title .fa-refresh[data-v-619654f5]:hover {\n    color: var(--refresh-hover-color);\n}\n.intro-text[data-v-619654f5] {\n    margin: 5px !important;\n}\n.read-more[data-v-619654f5] {\n    width: 95% !important;\n    margin-top: 10px;\n    margin-left: 2.5%;\n    margin-bottom: 10px;\n}\n", ""]);

// exports


/***/ }),

/***/ 323:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__i18n__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Http__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_DefaultLayout__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_DefaultLayout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_DefaultLayout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_BlogPostCard__ = __webpack_require__(324);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_BlogPostCard___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__components_BlogPostCard__);
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
  components: {
    BlogPostCard: __WEBPACK_IMPORTED_MODULE_3__components_BlogPostCard___default.a,
    DefaultLayout: __WEBPACK_IMPORTED_MODULE_2__components_DefaultLayout___default.a },
  data: function data() {
    return {
      lang: __WEBPACK_IMPORTED_MODULE_0__i18n__["a" /* i18n */],
      posts: []
    };
  },
  mounted: function mounted() {
    var _this = this;

    this.getPosts().then(function (response) {
      return _this.posts = response.data.reverse();
    });
  },


  methods: {
    getPosts: function getPosts() {
      return __WEBPACK_IMPORTED_MODULE_1__Http__["a" /* _http */].get('/posts');
    }
  }
});

/***/ }),

/***/ 324:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(325)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(327)
/* template */
var __vue_template__ = __webpack_require__(328)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-14460249"
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
Component.options.__file = "resources/assets/js/components/BlogPostCard.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-14460249", Component.options)
  } else {
    hotAPI.reload("data-v-14460249", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 325:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(326);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("5c621c78", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-14460249\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./BlogPostCard.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-14460249\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./BlogPostCard.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 326:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "\n.loading-row[data-v-14460249] {\n    text-align: center;\n    font-size: 5em;\n    color: #2c3e50;\n}\nli .fa[data-v-14460249] {\n    margin-left: -5px;\n    margin-right: 5px;\n}\na.primary[data-v-14460249] {\n    color: #2c3e50;\n}\nli a.danger[data-v-14460249]{\n    color: #e74c3c;\n}\nli a.danger[data-v-14460249]:hover, li a.danger[data-v-14460249]:focus, li a.danger[data-v-14460249]:active {\n    background-color: #e74c3c;\n    color: #fff;\n}\n[data-v-14460249]:root {\n    --refresh-hover-color: #586b7d;\n}\n.loading-row[data-v-14460249] {\n    text-align: center;\n    font-size: 5em;\n    color: #2c3e50;\n}\n.tutorial[data-v-14460249] {\n    -webkit-transition: all .3s;\n    transition: all .3s;\n}\n.tutorial-link[data-v-14460249],\n.tutorial-link[data-v-14460249]:hover,\n.tutorial-link[data-v-14460249]:active {\n    text-decoration: none;\n}\n.tutorial[data-v-14460249]:hover {\n    -webkit-transform: scale(1.03);\n    transform: scale(1.03);\n    -webkit-box-shadow: 0 0 13px #CCC;\n            box-shadow: 0 0 13px #CCC;\n    z-index: 3;\n}\n.tutorial .title[data-v-14460249] {\n    padding: 0 0 4px 8px;\n    font-weight: bold;\n    text-align: left;\n    max-width: 98%;\n    width: 98%;\n    overflow: hidden;\n    white-space: nowrap;\n}\n.intro-image-container[data-v-14460249] {\n    overflow: hidden;\n}\n.tutorial-intro-image[data-v-14460249] {\n    -webkit-transition: -webkit-transform .3s;\n    transition: -webkit-transform .3s;\n    transition: transform .3s;\n    transition: transform .3s, -webkit-transform .3s;\n    -webkit-transform: scale(1.3);\n    transform: scale(1.3);\n}\n.tutorial-intro-image[data-v-14460249],\n.intro-image-container[data-v-14460249] {\n    width: 100%;\n    min-width: 100%;\n    max-width: 100%;\n}\n.tutorial:hover .tutorial-intro-image[data-v-14460249] {\n    -webkit-transform: scale(1);\n    transform: scale(1)\n}\n.well-custom[data-v-14460249] {\n    padding: 0;\n    background-color: #2c3e50;\n    color: #ffffff;\n}\n#tracks-title .fa-spotify[data-v-14460249] {\n    color: #1DB954;\n}\n.marquee[data-v-14460249] {\n    width: 450px;\n    white-space: nowrap;\n    overflow: hidden;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n}\n.marquee span[data-v-14460249] {\n    display: inline-block;\n    padding-left: 100%;\n    text-indent: 0;\n    -webkit-animation: marquee-data-v-14460249 5s linear infinite;\n            animation: marquee-data-v-14460249 5s linear infinite;\n}\n.marquee span[data-v-14460249]:hover {\n    -webkit-animation-play-state: paused;\n            animation-play-state: paused\n}\n@-webkit-keyframes marquee-data-v-14460249 {\n0% {\n        -webkit-transform: translate(0, 0);\n                transform: translate(0, 0);\n}\n100% {\n        -webkit-transform: translate(-100%, 0);\n                transform: translate(-100%, 0);\n}\n}\n@keyframes marquee-data-v-14460249 {\n0% {\n        -webkit-transform: translate(0, 0);\n                transform: translate(0, 0);\n}\n100% {\n        -webkit-transform: translate(-100%, 0);\n                transform: translate(-100%, 0);\n}\n}\n.microsoft[data-v-14460249] {\n    padding-left: 1.5em;\n    position: relative;\n}\n.microsoft[data-v-14460249]:before,\n.microsoft[data-v-14460249]::before {\n    z-index: 2;\n    content: '';\n    position: absolute;\n    top: -1em;\n    left: -1em;\n    width: .5em;\n    height: .5em;\n    -webkit-box-shadow: 1.0em 1.25em 0 #F65314, 1.6em 1.25em 0 #7CBB00, 1.0em 1.85em 0 #00A1F1, 1.6em 1.85em 0 #FFBB00;\n            box-shadow: 1.0em 1.25em 0 #F65314, 1.6em 1.25em 0 #7CBB00, 1.0em 1.85em 0 #00A1F1, 1.6em 1.85em 0 #FFBB00;\n}\n.microsoft[data-v-14460249]:after,\n.microsoft[data-v-14460249]::after {\n    z-index: 1;\n    content: '';\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 2em;\n    height: 2em;\n    background-image: -webkit-gradient(linear, left top, right top, color-stop(70%, white), to(rgba(255, 255, 255, 0)));\n    background-image: linear-gradient(90deg, white 70%, rgba(255, 255, 255, 0));\n}\n.vanity[data-v-14460249] {\n    color: #333;\n    text-align: center;\n}\n.vanity a[data-v-14460249],\n.microsoft a[data-v-14460249] {\n    color: #1570A6;\n    -webkit-transition: color .5s;\n    transition: color .5s;\n    text-decoration: none;\n}\n.vanity a[data-v-14460249]:hover,\n.microsoft a[data-v-14460249]:hover {\n    color: #F65314;\n}\n/* Style toggle button */\n.toggle[data-v-14460249] {\n    display: block;\n    margin: 2em auto;\n}\n#tracks-title .fa-refresh[data-v-14460249] {\n    float: right;\n    cursor: pointer;\n}\n#tracks-title .fa-refresh[data-v-14460249]:hover {\n    color: var(--refresh-hover-color);\n}\n.intro-text[data-v-14460249] {\n    margin: 5px !important;\n}\n.read-more[data-v-14460249] {\n    width: 95% !important;\n    margin-top: 10px;\n    margin-left: 2.5%;\n    margin-bottom: 10px;\n}\n", ""]);

// exports


/***/ }),

/***/ 327:
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

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'blog-post-card',
  props: ['post']
});

/***/ }),

/***/ 328:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "router-link",
        {
          staticClass: "tutorial-link",
          attrs: { to: "posts/" + _vm.post.slug }
        },
        [
          _c("div", { staticClass: "well well-custom tutorial" }, [
            _c("h4", { staticClass: "title", attrs: { id: "title" } }, [
              _vm._v(_vm._s(_vm.post.title))
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "intro-image-container" }, [
              _c("img", {
                staticClass: "tutorial-intro-image image",
                attrs: {
                  id: "track-image",
                  src: "/storage/" + _vm.post.intro_image,
                  alt: "Post intro image"
                }
              })
            ]),
            _vm._v(" "),
            _c("p", { staticClass: "intro-text" }, [
              _vm._v(_vm._s(_vm.post.intro_text))
            ]),
            _vm._v(" "),
            _c("button", { staticClass: "read-more btn btn-success" }, [
              _vm._v("Read More")
            ])
          ])
        ]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-14460249", module.exports)
  }
}

/***/ }),

/***/ 329:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("default-layout", [
    _c("div", { staticClass: "row" }, [
      _c("h1", [_vm._v(_vm._s(_vm.lang.get("navbar.blog")))]),
      _vm._v(" "),
      _c("hr"),
      _vm._v(" "),
      _vm.posts.length === 0
        ? _c("div", { staticClass: "row loading-row" }, [
            _c("i", {
              staticClass: "fa fa-circle-o-notch fa-spin",
              attrs: { "aria-hidden": "true" }
            })
          ])
        : _vm._e(),
      _vm._v(" "),
      _vm.posts.length
        ? _c(
            "div",
            { staticClass: "row", attrs: { id: "tracks-container" } },
            _vm._l(_vm.posts, function(post) {
              return _c(
                "div",
                { staticClass: "col-md-4" },
                [_c("blog-post-card", { attrs: { post: post } })],
                1
              )
            })
          )
        : _vm._e()
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-619654f5", module.exports)
  }
}

/***/ })

});