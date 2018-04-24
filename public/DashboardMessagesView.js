webpackJsonp([14],{

/***/ 251:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(315)
/* template */
var __vue_template__ = __webpack_require__(316)
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
Component.options.__file = "resources/assets/js/views/dashboard/Messages.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0cdc5dfa", Component.options)
  } else {
    hotAPI.reload("data-v-0cdc5dfa", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 258:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(259)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(261)
/* template */
var __vue_template__ = __webpack_require__(262)
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

/***/ 259:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(260);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(9)("5c1a3f27", content, false, {});
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

/***/ 260:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 261:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__i18n__ = __webpack_require__(3);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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

/***/ 262:
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
                      ])
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

/***/ 315:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_DashboardLayout__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_DashboardLayout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_DashboardLayout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Http__ = __webpack_require__(4);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  components: { DashboardLayout: __WEBPACK_IMPORTED_MODULE_0__components_DashboardLayout___default.a },

  data: function data() {
    return {
      messages: []
    };
  },
  mounted: function mounted() {
    var _this = this;

    this.getMessages().then(function (response) {
      return _this.messages = response.data.reverse();
    });
  },


  methods: {
    goToMessage: function goToMessage(id) {
      this.$router.push('/dashboard/messages/' + id);
    },
    getMessages: function getMessages() {
      return __WEBPACK_IMPORTED_MODULE_1__Http__["a" /* _http */].get('/messages');
    }
  }

});

/***/ }),

/***/ 316:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("dashboard-layout", [
    _c("div", { staticClass: "row" }, [
      _c("h1", [_vm._v("Messages")]),
      _vm._v(" "),
      _c("table", { staticClass: "table table-striped" }, [
        _c("thead", [
          _c("tr", [
            _c("th", [_vm._v("Name")]),
            _vm._v(" "),
            _c("th", [_vm._v("Email")])
          ])
        ]),
        _vm._v(" "),
        _c(
          "tbody",
          _vm._l(_vm.messages, function(message) {
            return _c(
              "tr",
              {
                on: {
                  click: function($event) {
                    _vm.goToMessage(message.id)
                  }
                }
              },
              [
                _c("td", [_vm._v(_vm._s(message.name))]),
                _vm._v(" "),
                _c("td", [_vm._v(_vm._s(message.email))])
              ]
            )
          })
        )
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
    require("vue-hot-reload-api")      .rerender("data-v-0cdc5dfa", module.exports)
  }
}

/***/ })

});