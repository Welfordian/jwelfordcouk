webpackJsonp([17],{

/***/ 283:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(355)
/* template */
var __vue_template__ = __webpack_require__(396)
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
Component.options.__file = "resources/assets/js/views/dashboard/Settings.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7852d551", Component.options)
  } else {
    hotAPI.reload("data-v-7852d551", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 355:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
throw new Error("Cannot find module \"../components/DashboardLayout\"");
throw new Error("Cannot find module \"../Http\"");


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




/* harmony default export */ __webpack_exports__["default"] = ({
  components: { DashboardLayout: __WEBPACK_IMPORTED_MODULE_1__components_DashboardLayout___default.a },

  beforeMount: function beforeMount() {
    this.getSettings();
  },
  data: function data() {
    return {
      settings: false
    };
  },


  methods: {
    getSettings: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return __WEBPACK_IMPORTED_MODULE_2__Http__["_http"].get('/settings');

              case 2:
                this.settings = _context.sent.data.settings;

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getSettings() {
        return _ref.apply(this, arguments);
      }

      return getSettings;
    }(),
    redirectToSpotify: function redirectToSpotify() {
      window.location.href = this.settings.spotify.authUrl;
    },
    disconnectFromSpotify: function disconnectFromSpotify() {}
  }

});

/***/ }),

/***/ 396:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("dashboard-layout", [
    _vm.settings
      ? _c("div", [
          _c("h1", [_vm._v("Settings")]),
          _vm._v(" "),
          _c("hr"),
          _vm._v(" "),
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-md-2" }, [
              _c("h2", [_vm._v("Spotify")])
            ]),
            _vm._v(" "),
            !_vm.settings.spotify.connected
              ? _c("div", { staticClass: "col-md-10" }, [
                  _c("h2", [
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-success",
                        on: {
                          click: function($event) {
                            _vm.redirectToSpotify()
                          }
                        }
                      },
                      [_vm._v("Connect to Spotify")]
                    )
                  ])
                ])
              : _c("div", { staticClass: "col-md-8" }, [
                  _c("h2", [
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-danger",
                        on: {
                          click: function($event) {
                            _vm.disconnectFromSpotify()
                          }
                        }
                      },
                      [
                        _vm._v(
                          "Disconnect " + _vm._s(_vm.settings.spotify.username)
                        )
                      ]
                    )
                  ])
                ])
          ]),
          _vm._v(" "),
          _c("button", { staticClass: "btn btn-spotify" })
        ])
      : _c("div", [_vm._v("\n        Loading...\n    ")])
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-7852d551", module.exports)
  }
}

/***/ })

});