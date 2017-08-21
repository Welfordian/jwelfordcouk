webpackJsonp([6],{

/***/ 236:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(266),
  /* template */
  __webpack_require__(267),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/var/www/dev.site/resources/assets/js/views/NotFound.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] NotFound.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-f6d5f9f6", Component.options)
  } else {
    hotAPI.reload("data-v-f6d5f9f6", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 266:
/***/ (function(module, exports) {

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/***/ }),

/***/ 267:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "row-fluid"
  }, [_c('div', {
    staticClass: "col-lg-12"
  }, [_c('div', {
    staticClass: "centering text-center"
  }, [_vm._m(0), _vm._v(" "), _vm._m(1), _vm._v(" "), _c('hr'), _vm._v(" "), _c('ul', {
    staticClass: "pager"
  }, [_c('li', [_c('router-link', {
    attrs: {
      "to": "/about"
    }
  }, [_vm._v("← About")])], 1), _vm._v(" "), _c('li', [_c('router-link', {
    attrs: {
      "to": "/videos"
    }
  }, [_vm._v(" Videos")])], 1), _vm._v(" "), _c('li', [_c('router-link', {
    attrs: {
      "to": "/music"
    }
  }, [_vm._v(" Music")])], 1), _vm._v(" "), _c('li', [_c('router-link', {
    attrs: {
      "to": "/contact"
    }
  }, [_vm._v("→ Contact")])], 1)])])])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "text-center"
  }, [_c('h2', {
    staticClass: "without-margin"
  }, [_vm._v("Whoops! I can't find that page.")]), _vm._v(" "), _c('h4', {
    staticClass: "text-success"
  }, [_vm._v("Page not found")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "text-center"
  }, [_c('h3', [_c('small', [_vm._v("Sorry about that, Jim.")])])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-f6d5f9f6", module.exports)
  }
}

/***/ })

});