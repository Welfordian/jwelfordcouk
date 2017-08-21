webpackJsonp([7],{

/***/ 232:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(252),
  /* template */
  __webpack_require__(253),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/var/www/dev.site/resources/assets/js/views/Login.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Login.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7d99cec3", Component.options)
  } else {
    hotAPI.reload("data-v-7d99cec3", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 252:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stores_SharedStore__ = __webpack_require__(4);
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
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

/***/ 253:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('login-panel', {
    attrs: {
      "use-ajax": ""
    }
  })], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-7d99cec3", module.exports)
  }
}

/***/ })

});