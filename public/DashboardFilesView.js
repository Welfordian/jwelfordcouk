webpackJsonp([10],{

/***/ 286:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(365)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(367)
/* template */
var __vue_template__ = __webpack_require__(371)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-decddd8e"
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
Component.options.__file = "resources/assets/js/views/dashboard/Files.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-decddd8e", Component.options)
  } else {
    hotAPI.reload("data-v-decddd8e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 289:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(290)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(292)
/* template */
var __vue_template__ = __webpack_require__(293)
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

/***/ 290:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(291);
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

/***/ 291:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 292:
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

/***/ 293:
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
                  { attrs: { href: "/dashboard/posts", icon: "pencil" } },
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

/***/ 365:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(366);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(9)("074982ee", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-decddd8e\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Files.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-decddd8e\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Files.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 366:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, "\n.list-enter-active[data-v-decddd8e] {\n    -webkit-transition: all 5s;\n    transition: all 5s;\n}\n.list-enter[data-v-decddd8e] {\n    background: yellow;\n}\n.loading-row[data-v-decddd8e] {\n    text-align: center;\n    font-size: 5em;\n    color: #2c3e50;\n}\n.fileOptions[data-v-decddd8e] {\n    padding: 4px 20px;\n    border-radius: 15px;\n    -webkit-transition: background .5s, color .5s, -webkit-box-shadow .5s;\n    transition: background .5s, color .5s, -webkit-box-shadow .5s;\n    transition: box-shadow .5s, background .5s, color .5s;\n    transition: box-shadow .5s, background .5s, color .5s, -webkit-box-shadow .5s;\n}\n.fileOptions[data-v-decddd8e]:hover {\n    background: #00bd9c;\n    color: white;\n    -webkit-box-shadow: 0px 0px 5px 1px #949494;\n    box-shadow: 0px 0px 5px 1px #ccc;\n}\ntd .loading-overlay[data-v-decddd8e] {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background: #a09c9ce3;\n    z-index: 2;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n    -ms-flex-pack: center;\n    justify-content: center;\n    -webkit-box-align: center;\n    -ms-flex-align: center;\n    align-items: center;\n    font-size: 1.6em;\n    color: white;\n}\n", ""]);

// exports


/***/ }),

/***/ 367:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stores_SharedStore__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Http__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_DashboardLayout__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_DashboardLayout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_DashboardLayout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_FileUploadButton__ = __webpack_require__(368);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_FileUploadButton___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__components_FileUploadButton__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
        FileUploadButton: __WEBPACK_IMPORTED_MODULE_3__components_FileUploadButton___default.a,
        DashboardLayout: __WEBPACK_IMPORTED_MODULE_2__components_DashboardLayout___default.a
    },

    data: function data() {
        return {
            store: __WEBPACK_IMPORTED_MODULE_0__stores_SharedStore__["a" /* Store */],
            gotFiles: false,
            files: [],
            searchResults: [],
            noSearchResults: false,
            sort: []
        };
    },

    mounted: function mounted() {
        var _this = this;

        __WEBPACK_IMPORTED_MODULE_1__Http__["a" /* _http */].get('/files').then(function (r) {
            _this.gotFiles = true;
            _this.files = _this.sortByName(r.data);
        });
    },


    methods: {
        toggleVisibility: function toggleVisibility(file) {
            file.updating = true;

            __WEBPACK_IMPORTED_MODULE_1__Http__["a" /* _http */].post('/files/visibility', { file: file }).then(function (r) {
                file.visibility = r.data.visibility;
                file.uri = r.data.uri;
                file.updating = false;
            });
        },
        fileUploaded: function fileUploaded(file) {
            this.files.push(file);

            this.files = this.sortByName(this.files);
        },
        determineIcon: function determineIcon(file) {
            if (['jpg', 'jpeg', 'png'].indexOf(file.type) !== -1) {
                return file.uri;
            } else {
                return 'https://cdn2.iconfinder.com/data/icons/text-file-essential/48/v-04-512.png';
            }
        },
        sortByName: function sortByName(files) {
            var _this2 = this;

            return files.sort(function (a, b) {
                var aName = a.name.toUpperCase().replace('files/' + _this2.store.user.user.id + '/', '');
                var bName = b.name.toUpperCase().replace('files/' + _this2.store.user.user.id + '/', '');

                return aName.localeCompare(bName);
            });
        },
        bytesToSize: function bytesToSize(bytes) {
            var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];

            if (bytes == 0) return '0 Byte';

            var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));

            return Math.round(bytes / Math.pow(1024, i), 2) + ' ' + sizes[i];
        },
        searchFiles: function searchFiles(evt) {
            if (evt.target.value.length) {
                var searchResults = this.files.filter(function (file) {
                    return file.name.toLowerCase().search(evt.target.value.toLowerCase()) !== -1;
                });

                if (searchResults.length) {
                    this.searchResults = searchResults;

                    this.noSearchResults = false;
                } else {
                    this.searchResults = [1];
                    this.noSearchResults = true;
                }
            } else {
                this.searchResults = [];
            }
        },
        timeSince: function timeSince(timestamp) {
            var date = new Date(timestamp);

            var seconds = Math.floor((new Date() - date) / 1000);

            var interval = Math.floor(seconds / 31536000);

            if (interval > 1) {
                return interval + " years ago";
            }
            interval = Math.floor(seconds / 2592000);
            if (interval > 1) {
                return interval + " months ago";
            }
            interval = Math.floor(seconds / 86400);
            if (interval > 1) {
                return interval + " days ago";
            }
            interval = Math.floor(seconds / 3600);
            if (interval > 1) {
                return interval + " hours ago";
            }
            interval = Math.floor(seconds / 60);
            if (interval > 1) {
                return interval + " minutes ago";
            }
            return "Just now";
        },
        visibility: function visibility(file) {
            return file.visibility === "public" ? "Private" : "Public";
        }
    },

    computed: {}
});

/***/ }),

/***/ 368:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(369)
/* template */
var __vue_template__ = __webpack_require__(370)
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
Component.options.__file = "resources/assets/js/components/FileUploadButton.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-787186e6", Component.options)
  } else {
    hotAPI.reload("data-v-787186e6", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 369:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Http__ = __webpack_require__(5);
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'file-upload-button',

  props: ['type'],

  data: function data() {
    return {
      uploadType: 0
    };
  },
  mounted: function mounted() {
    this.uploadType = this.type || 0;
  },


  methods: {
    startUpload: function startUpload() {
      var _this = this;

      var formData = new FormData();

      formData.append("file", this.$refs.fileInput.files[0]);

      __WEBPACK_IMPORTED_MODULE_0__Http__["a" /* _http */].post('files', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }).then(function (r) {
        _this.$emit('fileUploaded', r.data);
      });
    }
  }
});

/***/ }),

/***/ 370:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c(
      "button",
      {
        staticClass: "btn btn-success",
        on: {
          click: function($event) {
            return _vm.$refs.fileInput.click()
          }
        }
      },
      [_vm._v("Upload New File")]
    ),
    _vm._v(" "),
    _c("input", {
      ref: "fileInput",
      staticClass: "hidden",
      attrs: { type: "file" },
      on: {
        change: function($event) {
          return _vm.startUpload()
        }
      }
    })
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-787186e6", module.exports)
  }
}

/***/ }),

/***/ 371:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("dashboard-layout", [
    _c("div", [
      _c(
        "h1",
        { staticClass: "flex justify-between" },
        [
          _vm._v("Files\n            "),
          _c("file-upload-button", { on: { fileUploaded: _vm.fileUploaded } })
        ],
        1
      ),
      _vm._v(" "),
      _c("hr"),
      _vm._v(" "),
      _vm.gotFiles
        ? _c("div", [
            _c("input", {
              staticClass: "form-control",
              staticStyle: { "margin-bottom": "1em" },
              attrs: { type: "text", placeholder: "Search files..." },
              on: {
                keyup: function($event) {
                  return _vm.searchFiles($event)
                }
              }
            }),
            _vm._v(" "),
            _vm.files.length && !_vm.searchResults.length
              ? _c(
                  "table",
                  { staticClass: "table table-bordered" },
                  [
                    _c("thead", [
                      _c("tr", [
                        _c("td", [_vm._v("Name")]),
                        _vm._v(" "),
                        _c("td", [_vm._v("Size")]),
                        _vm._v(" "),
                        _c("td", [_vm._v("Last Modified")]),
                        _vm._v(" "),
                        _c("td", [_vm._v("Actions")])
                      ])
                    ]),
                    _vm._v(" "),
                    _c(
                      "transition-group",
                      { tag: "tbody", attrs: { name: "list" } },
                      _vm._l(_vm.files, function(file) {
                        return _c("tr", { key: file.meta.basename }, [
                          _c("td", [
                            _c(
                              "a",
                              { attrs: { href: file.uri, target: "_blank" } },
                              [
                                _vm._v(
                                  _vm._s(
                                    file.name.replace(
                                      "files/" + _vm.store.user.user.id + "/",
                                      ""
                                    )
                                  )
                                )
                              ]
                            )
                          ]),
                          _vm._v(" "),
                          _c("td", [
                            _vm._v(_vm._s(_vm.bytesToSize(file.meta.size)))
                          ]),
                          _vm._v(" "),
                          _c("td", [
                            _vm._v(
                              _vm._s(_vm.timeSince(file.meta.timestamp * 1000))
                            )
                          ]),
                          _vm._v(" "),
                          _c(
                            "td",
                            {
                              staticStyle: { position: "relative" },
                              attrs: { align: "center" }
                            },
                            [
                              file.updating
                                ? _c(
                                    "div",
                                    { staticClass: "loading-overlay" },
                                    [
                                      _c("i", {
                                        staticClass:
                                          "fas fa-circle-notch fa-spin"
                                      })
                                    ]
                                  )
                                : _vm._e(),
                              _vm._v(" "),
                              _c("div", { staticClass: "dropdown show" }, [
                                _c("i", {
                                  staticClass:
                                    "far fa-ellipsis-h fileOptions dropdown-toggle",
                                  attrs: {
                                    role: "button",
                                    "data-toggle": "dropdown",
                                    "aria-haspopup": "true",
                                    "aria-expanded": "false"
                                  }
                                }),
                                _vm._v(" "),
                                _c(
                                  "ul",
                                  {
                                    staticClass: "dropdown-menu",
                                    attrs: {
                                      "aria-labelledby": "dropdownMenu1"
                                    }
                                  },
                                  [
                                    _c("li", [
                                      _c("a", { attrs: { href: "#" } }, [
                                        _vm._v("Share")
                                      ])
                                    ]),
                                    _vm._v(" "),
                                    _c("li", [
                                      _c("a", { attrs: { href: "#" } }, [
                                        _vm._v("Share Privately")
                                      ])
                                    ]),
                                    _vm._v(" "),
                                    _c("li", [
                                      _c(
                                        "a",
                                        {
                                          attrs: { href: "#" },
                                          on: {
                                            click: function($event) {
                                              $event.preventDefault()
                                              return _vm.toggleVisibility(file)
                                            }
                                          }
                                        },
                                        [
                                          _vm._v(
                                            "Make " +
                                              _vm._s(_vm.visibility(file))
                                          )
                                        ]
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c("li", {
                                      staticClass: "divider",
                                      attrs: { role: "separator" }
                                    }),
                                    _vm._v(" "),
                                    _c("li", [
                                      _c("a", { attrs: { href: "#" } }, [
                                        _vm._v("Delete")
                                      ])
                                    ])
                                  ]
                                )
                              ])
                            ]
                          )
                        ])
                      }),
                      0
                    )
                  ],
                  1
                )
              : _c("div", [
                  _vm.searchResults.length
                    ? _c("div", [
                        !_vm.noSearchResults
                          ? _c(
                              "table",
                              { staticClass: "table table-bordered" },
                              [
                                _c("thead", [
                                  _c("tr", [
                                    _c("td", [_vm._v("Name")]),
                                    _vm._v(" "),
                                    _c("td", [_vm._v("Size")]),
                                    _vm._v(" "),
                                    _c("td", [_vm._v("Last Modified")]),
                                    _vm._v(" "),
                                    _c("td", [_vm._v("Actions")])
                                  ])
                                ]),
                                _vm._v(" "),
                                _c(
                                  "tbody",
                                  _vm._l(_vm.searchResults, function(file) {
                                    return _c("tr", [
                                      _c("td", [
                                        _c(
                                          "a",
                                          {
                                            attrs: {
                                              href: file.uri,
                                              target: "_blank"
                                            }
                                          },
                                          [
                                            _vm._v(
                                              _vm._s(
                                                file.name.replace(
                                                  "files/" +
                                                    _vm.store.user.user.id +
                                                    "/",
                                                  ""
                                                )
                                              )
                                            )
                                          ]
                                        )
                                      ]),
                                      _vm._v(" "),
                                      _c("td", [
                                        _vm._v(
                                          _vm._s(
                                            _vm.bytesToSize(file.meta.size)
                                          )
                                        )
                                      ]),
                                      _vm._v(" "),
                                      _c("td", [
                                        _vm._v(
                                          _vm._s(
                                            _vm.timeSince(
                                              file.meta.timestamp * 1000
                                            )
                                          )
                                        )
                                      ]),
                                      _vm._v(" "),
                                      _c("td", { attrs: { align: "center" } }, [
                                        _c(
                                          "div",
                                          { staticClass: "dropdown show" },
                                          [
                                            _c("i", {
                                              staticClass:
                                                "far fa-ellipsis-h fileOptions dropdown-toggle",
                                              attrs: {
                                                role: "button",
                                                "data-toggle": "dropdown",
                                                "aria-haspopup": "true",
                                                "aria-expanded": "false"
                                              }
                                            }),
                                            _vm._v(" "),
                                            _c(
                                              "ul",
                                              {
                                                staticClass: "dropdown-menu",
                                                attrs: {
                                                  "aria-labelledby":
                                                    "dropdownMenu1"
                                                }
                                              },
                                              [
                                                _c("li", [
                                                  _c(
                                                    "a",
                                                    { attrs: { href: "#" } },
                                                    [_vm._v("Share")]
                                                  )
                                                ]),
                                                _vm._v(" "),
                                                _c("li", [
                                                  _c(
                                                    "a",
                                                    {
                                                      attrs: { href: "#" },
                                                      on: {
                                                        click: function(
                                                          $event
                                                        ) {
                                                          $event.preventDefault()
                                                          return _vm.toggleVisibility(
                                                            file
                                                          )
                                                        }
                                                      }
                                                    },
                                                    [
                                                      _vm._v(
                                                        "Make " +
                                                          _vm._s(
                                                            _vm.visibility(file)
                                                          )
                                                      )
                                                    ]
                                                  )
                                                ]),
                                                _vm._v(" "),
                                                _c("li", {
                                                  staticClass: "divider",
                                                  attrs: { role: "separator" }
                                                }),
                                                _vm._v(" "),
                                                _c("li", [
                                                  _c(
                                                    "a",
                                                    { attrs: { href: "#" } },
                                                    [_vm._v("Delete")]
                                                  )
                                                ])
                                              ]
                                            )
                                          ]
                                        )
                                      ])
                                    ])
                                  }),
                                  0
                                )
                              ]
                            )
                          : _c(
                              "table",
                              { staticClass: "table table-bordered" },
                              [
                                _c("thead", [
                                  _c("tr", [
                                    _c("td", [_vm._v("Name")]),
                                    _vm._v(" "),
                                    _c("td", [_vm._v("Size")]),
                                    _vm._v(" "),
                                    _c("td", [_vm._v("Last Modified")]),
                                    _vm._v(" "),
                                    _c("td", [_vm._v("Actions")])
                                  ])
                                ]),
                                _vm._v(" "),
                                _c("tbody", [
                                  _c("tr", [
                                    _c("td", { attrs: { colspan: "4" } }, [
                                      _c(
                                        "p",
                                        {
                                          staticClass: "flex justify-center",
                                          staticStyle: { margin: ".5em 0" }
                                        },
                                        [_vm._v("No Search Results")]
                                      )
                                    ])
                                  ])
                                ])
                              ]
                            )
                      ])
                    : _c("div", [_c("p", [_vm._v("No files.")])])
                ])
          ])
        : _c("div", { staticClass: "row loading-row" }, [
            _c("h1", [_vm._v("Loading Files")]),
            _vm._v(" "),
            _c("h1", [_c("i", { staticClass: "fas fa-circle-notch fa-spin" })])
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
    require("vue-hot-reload-api")      .rerender("data-v-decddd8e", module.exports)
  }
}

/***/ })

});