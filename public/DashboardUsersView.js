webpackJsonp([1],{

/***/ 244:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(267)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(269)
/* template */
var __vue_template__ = __webpack_require__(270)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-196a976c"
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
Component.options.__file = "resources/assets/js/views/dashboard/Users.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-196a976c", Component.options)
  } else {
    hotAPI.reload("data-v-196a976c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 267:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(268);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(6)("7ac71f08", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-196a976c\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Users.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-196a976c\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Users.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 268:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(false);
// imports


// module
exports.push([module.i, "\n.content-loader[data-v-196a976c] {\n    font-size: 4em;\n    text-align: center;\n    margin-top: 2em;\n}\nli .fa[data-v-196a976c] {\n    margin-left: -5px;\n    margin-right: 5px;\n}\na.primary[data-v-196a976c] {\n    color: #2c3e50;\n}\nli a.danger[data-v-196a976c]{\n    color: #e74c3c;\n}\nli a.danger[data-v-196a976c]:hover, li a.danger[data-v-196a976c]:focus, li a.danger[data-v-196a976c]:active {\n    background-color: #e74c3c;\n    color: #fff;\n}\n\n", ""]);

// exports


/***/ }),

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Http__ = __webpack_require__(10);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
            confirmsDelete: false,
            users: []
        };
    },


    methods: {
        confirmDelete: function confirmDelete() {
            this.confirmsDelete = true;

            setTimeout(function () {
                this.confirmsDelete = false;
            }.bind(this), 3000);
        },
        confirmedDelete: function confirmedDelete() {
            this.confirmsDelete = false;
        }
    },

    beforeMount: function beforeMount() {
        __WEBPACK_IMPORTED_MODULE_0__Http__["a" /* _http */].get('/users').then(function (response) {
            this.users = response.data;
        }.bind(this)).catch(function (error) {
            console.error(error);
        });
    }
});

/***/ }),

/***/ 270:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "row" }, [
    _vm._m(0),
    _vm._v(" "),
    _c("hr"),
    _vm._v(" "),
    _vm.users.length === 0
      ? _c("p", { staticClass: "content-loader" }, [
          _c("i", { staticClass: "fa fa-refresh fa-spin" })
        ])
      : _c("table", { staticClass: "table table-striped" }, [
          _vm._m(1),
          _vm._v(" "),
          _c(
            "tbody",
            _vm._l(_vm.users, function(user) {
              return _c("tr", [
                _c("td", [
                  _vm._v(
                    "\n                    " +
                      _vm._s(user.id) +
                      "\n                "
                  )
                ]),
                _vm._v(" "),
                _c("td", [
                  _vm._v(
                    "\n                    " +
                      _vm._s(user.name) +
                      "\n                "
                  )
                ]),
                _vm._v(" "),
                _c("td", [
                  _vm._v(
                    "\n                    " +
                      _vm._s(user.email) +
                      "\n                "
                  )
                ]),
                _vm._v(" "),
                _c("td", [
                  _vm._v(
                    "\n                    " +
                      _vm._s(
                        _vm._f("date")(user.created_at, "Do MMM YYYY h:s a")
                      ) +
                      "\n                "
                  )
                ]),
                _vm._v(" "),
                _c("td", [
                  _vm._v(
                    "\n                    " +
                      _vm._s(
                        _vm._f("date")(user.updated_at, "Do MMM YYYY h:s a")
                      ) +
                      "\n                "
                  )
                ]),
                _vm._v(" "),
                _c("td", [
                  _c("div", { staticClass: "dropdown" }, [
                    _vm._m(2, true),
                    _vm._v(" "),
                    _c(
                      "ul",
                      {
                        staticClass: "dropdown-menu",
                        attrs: { role: "menu", "aria-labelledby": "dLabel" }
                      },
                      [
                        _vm._m(3, true),
                        _vm._v(" "),
                        _c("li", {
                          staticClass: "divider",
                          attrs: { role: "separator" }
                        }),
                        _vm._v(" "),
                        _c("li", [
                          _c(
                            "a",
                            {
                              directives: [
                                {
                                  name: "show",
                                  rawName: "v-show",
                                  value: !_vm.confirmsDelete,
                                  expression: "!confirmsDelete"
                                }
                              ],
                              staticClass: "danger",
                              attrs: {
                                tabindex: "-1",
                                href: "#",
                                "data-prevent-close": ""
                              },
                              on: {
                                click: function($event) {
                                  $event.preventDefault()
                                  return _vm.confirmDelete($event)
                                }
                              }
                            },
                            [
                              _c("i", { staticClass: "fa fa-trash" }),
                              _vm._v(" Delete")
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "a",
                            {
                              directives: [
                                {
                                  name: "show",
                                  rawName: "v-show",
                                  value: _vm.confirmsDelete,
                                  expression: "confirmsDelete"
                                }
                              ],
                              staticClass: "danger",
                              attrs: { tabindex: "-1", href: "#" },
                              on: {
                                click: function($event) {
                                  $event.preventDefault()
                                  return _vm.confirmedDelete($event)
                                }
                              }
                            },
                            [
                              _c("i", { staticClass: "fa fa-trash" }),
                              _vm._v(" Are you sure?")
                            ]
                          )
                        ])
                      ]
                    )
                  ])
                ])
              ])
            })
          )
        ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h1", [
      _vm._v("Users "),
      _c("button", { staticClass: "btn btn-primary pull-right" }, [
        _vm._v("Create")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("#")]),
        _vm._v(" "),
        _c("th", [_vm._v("Name")]),
        _vm._v(" "),
        _c("th", [_vm._v("Email")]),
        _vm._v(" "),
        _c("th", [_vm._v("Created")]),
        _vm._v(" "),
        _c("th", [_vm._v("Updated")]),
        _vm._v(" "),
        _c("th", [_vm._v("Options")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "a",
      {
        staticClass: "dropdown-toggle rowlink primary",
        attrs: { "data-toggle": "dropdown", href: "#" }
      },
      [_c("i", { staticClass: "fa fa-caret-square-o-down" })]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", [
      _c("a", { attrs: { tabindex: "-1", href: "#" } }, [
        _c("i", { staticClass: "fa fa-cogs" }),
        _vm._v(" Permissions")
      ])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-196a976c", module.exports)
  }
}

/***/ })

});