webpackJsonp([9],{

/***/ 277:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(344)
/* template */
var __vue_template__ = __webpack_require__(345)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
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
Component.options.__file = "resources/assets/js/views/Login.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-33212926", Component.options)
  } else {
    hotAPI.reload("data-v-33212926", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 294:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(295)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(297)
/* template */
var __vue_template__ = __webpack_require__(303)
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

/***/ 295:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(296);
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

/***/ 296:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__i18n__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__InfoOverlay__ = __webpack_require__(298);
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

/***/ 298:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(299)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(301)
/* template */
var __vue_template__ = __webpack_require__(302)
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

/***/ 299:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(300);
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

/***/ 300:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "\n.info-overlay[data-v-1e353a5b] {\n    width: 50px;\n    height: 50px;\n    background-color: #2c3e50;\n    position: fixed;\n    bottom: 15px;\n    right: 16px;\n    border-radius: 100%;\n    -webkit-box-shadow: 0px 0px 14px 0px rgba(0,0,0,0.75);\n    box-shadow: 0px 0px 14px 0px rgba(0,0,0,0.75);\n}\n.info-overlay--button[data-v-1e353a5b] {\n    color: white;\n    cursor: pointer;\n    text-align: center;\n    position: relative;\n    top: 0px;\n    font-size: 1.5em;\n    padding: 8px 0px 7px 0px;\n    z-index: 10;\n    background: #2c3e50;\n    border-radius: 100%;\n}\n.info-overlay--container[data-v-1e353a5b] {\n    position: relative;\n}\n.info-overlay--content[data-v-1e353a5b] {\n    -webkit-transition: width .2s, height .2s;\n    transition: width .2s, height .2s;\n    width: 0;\n    height: 0;\n    position: absolute;\n    bottom: 25px;\n    right: 27px;\n    background: #fff;\n    border-radius: 4px;\n    overflow: hidden;\n    -webkit-box-shadow: 0px 0px 14px 0px rgba(0,0,0,0.75);\n    box-shadow: 0px 0px 14px 0px rgba(0,0,0,0.75);\n    background: url('/images/tic-tac-toe.png');\n}\n.info-overlay--content .row[data-v-1e353a5b] {\n    margin-left: 0;\n    margin-right: 0;\n    background: #ffffff63;\n}\n.info-overlay--open[data-v-1e353a5b] {\n    width: 20em;\n    height: 25em;\n    overflow: auto;\n}\n", ""]);

// exports


/***/ }),

/***/ 301:
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

/***/ 302:
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

/***/ 303:
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

/***/ 344:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stores_SharedStore__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_DefaultLayout__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_DefaultLayout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_DefaultLayout__);
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
    components: { DefaultLayout: __WEBPACK_IMPORTED_MODULE_1__components_DefaultLayout___default.a },
    beforeRouteEnter: function beforeRouteEnter(to, from, next) {
        if (__WEBPACK_IMPORTED_MODULE_0__stores_SharedStore__["a" /* Store */].auth.authenticated) {
            next(function (vm) {
                vm.$router.push('/dashboard');
            });
        } else {
            next(function (vm) {
                vm.$router.push('/login');
            });
        }
    }
});

/***/ }),

/***/ 345:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("default-layout", [
    _c("div", [_c("login-panel", { attrs: { "use-ajax": "" } })], 1)
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-33212926", module.exports)
  }
}

/***/ })

});