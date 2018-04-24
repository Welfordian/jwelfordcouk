webpackJsonp([2],{

/***/ 245:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(292)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(294)
/* template */
var __vue_template__ = __webpack_require__(296)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-3afe55c6"
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
Component.options.__file = "resources/assets/js/views/Contact.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3afe55c6", Component.options)
  } else {
    hotAPI.reload("data-v-3afe55c6", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 263:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(264)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(266)
/* template */
var __vue_template__ = __webpack_require__(267)
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

/***/ 264:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(265);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(9)("0d3287e2", content, false, {});
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

/***/ 265:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 266:
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



/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'default-layout',
  data: function data() {
    return {
      lang: __WEBPACK_IMPORTED_MODULE_0__i18n__["a" /* i18n */]
    };
  }
});

/***/ }),

/***/ 267:
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
    require("vue-hot-reload-api")      .rerender("data-v-3d4fbab8", module.exports)
  }
}

/***/ }),

/***/ 292:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(293);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(9)("0d06cec0", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-3afe55c6\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Contact.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-3afe55c6\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Contact.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 293:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)(false);
// imports


// module
exports.push([module.i, "\n.input-group-addon[data-v-3afe55c6] {\n    min-width: 130px;\n    text-align: right;\n}\n.input-group[data-v-3afe55c6] {\n    margin: 8px;\n}\n.error[data-v-3afe55c6] {\n    background: rgba(214, 44, 26, 0.77);\n    color: white;\n}\n._fade[data-v-3afe55c6] {\n    -webkit-transform: scale(0.5);\n            transform: scale(0.5);\n    opacity: 0;\n    -webkit-transition: all .2s linear;\n    transition: all .2s linear;\n}\n._fade.in[data-v-3afe55c6] {\n    opacity: 1;\n    -webkit-transform: scale(1);\n            transform: scale(1);\n}\n", ""]);

// exports


/***/ }),

/***/ 294:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_idb__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_idb___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_idb__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_noty__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_noty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_noty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__EventBus__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__i18n__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Http__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__stores_SharedStore__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_DefaultLayout__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_DefaultLayout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__components_DefaultLayout__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    components: { DefaultLayout: __WEBPACK_IMPORTED_MODULE_6__components_DefaultLayout___default.a },
    mounted: function mounted() {
        $('#offlineModal').on('hidden.bs.modal', function () {
            this.modalMessage = "It looks like there was a problem sending your message, but don't worry... I'll keep trying to resend it for you. You can click the button below to be notified when it has successfully sent.";
        }.bind(this));
    },
    data: function data() {
        return {
            lang: __WEBPACK_IMPORTED_MODULE_3__i18n__["a" /* i18n */],
            loading: false,
            sw: false,
            modalMessage: "It looks like there was a problem sending your message, but don't worry... I'll keep trying to resend it for you. You can click the button below to be notified when it has successfully sent.",
            form: {
                name: "",
                email: "",
                subject: "",
                message: ""
            }
        };
    },


    methods: {
        handleContactSubmit: function handleContactSubmit() {
            __WEBPACK_IMPORTED_MODULE_4__Http__["a" /* _http */].post('/contact', this.form).then(function (data) {
                new __WEBPACK_IMPORTED_MODULE_1_noty___default.a({
                    layout: 'topRight',
                    theme: 'bootstrap-v4',
                    type: 'success',
                    timeout: 5000,
                    text: 'Thanks, your message has been sent!'
                }).show();

                this.clearForm();
            }.bind(this)).catch(function (error) {
                if (!error.hasOwnProperty("response") || error.response == undefined) {
                    this.showOfflineModal();
                    this.queueMessage();
                } else {
                    if (error.response.hasOwnProperty("status")) {
                        switch (error.response.status) {
                            case 422:
                                this.handleValidationErrors(error.response.data);
                                break;
                            default:
                                console.error("Unknown error: ", error);
                                break;
                        }
                    }
                }
            }.bind(this));
        },
        showOfflineModal: function showOfflineModal() {
            $('#offlineModal').modal("show");
        },
        handleValidationErrors: function handleValidationErrors() {
            // I'll implement properly later, I'm tired now

            new __WEBPACK_IMPORTED_MODULE_1_noty___default.a({
                layout: 'topRight',
                theme: 'bootstrap-v4',
                type: 'error',
                timeout: 5000,
                text: 'Whoops, looks like you might have missed something.'
            }).show();
        },
        requestNotifications: function requestNotifications() {
            this.modalMessage = "Sure thing, I'll just need permission to send you notifications.";

            Notification.requestPermission().then(function (result) {
                if (result === 'denied') {
                    this.setNoPermissionText();

                    return;
                }
                if (result === 'default') {
                    this.setNoPermissionText();

                    return;
                }

                $('#offlineModal').modal("hide");
            }.bind(this));
        },
        setNoPermissionText: function setNoPermissionText() {
            this.modalMessage = "Sorry, you didn't give me permission. I won't show you a notification but I'll still try to send your message";
        },
        queueMessage: function queueMessage() {
            __WEBPACK_IMPORTED_MODULE_0_idb__["open"]('messages', 1, function (upgradeDb) {
                upgradeDb.createObjectStore('outbox', { autoIncrement: true, keyPath: 'id' });
            }).then(function (db) {
                var transaction = db.transaction('outbox', 'readwrite');
                return transaction.objectStore('outbox').put(this.form);
            }.bind(this)).then(function () {
                __WEBPACK_IMPORTED_MODULE_5__stores_SharedStore__["a" /* Store */].serviceWorker.sync.register('outbox');

                this.clearForm();
            }.bind(this));
        },
        clearForm: function clearForm() {
            this.form = {
                name: "",
                email: "",
                subject: "",
                message: ""
            };
        }
    }
});

/***/ }),

/***/ 295:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


(function() {
  function toArray(arr) {
    return Array.prototype.slice.call(arr);
  }

  function promisifyRequest(request) {
    return new Promise(function(resolve, reject) {
      request.onsuccess = function() {
        resolve(request.result);
      };

      request.onerror = function() {
        reject(request.error);
      };
    });
  }

  function promisifyRequestCall(obj, method, args) {
    var request;
    var p = new Promise(function(resolve, reject) {
      request = obj[method].apply(obj, args);
      promisifyRequest(request).then(resolve, reject);
    });

    p.request = request;
    return p;
  }

  function promisifyCursorRequestCall(obj, method, args) {
    var p = promisifyRequestCall(obj, method, args);
    return p.then(function(value) {
      if (!value) return;
      return new Cursor(value, p.request);
    });
  }

  function proxyProperties(ProxyClass, targetProp, properties) {
    properties.forEach(function(prop) {
      Object.defineProperty(ProxyClass.prototype, prop, {
        get: function() {
          return this[targetProp][prop];
        },
        set: function(val) {
          this[targetProp][prop] = val;
        }
      });
    });
  }

  function proxyRequestMethods(ProxyClass, targetProp, Constructor, properties) {
    properties.forEach(function(prop) {
      if (!(prop in Constructor.prototype)) return;
      ProxyClass.prototype[prop] = function() {
        return promisifyRequestCall(this[targetProp], prop, arguments);
      };
    });
  }

  function proxyMethods(ProxyClass, targetProp, Constructor, properties) {
    properties.forEach(function(prop) {
      if (!(prop in Constructor.prototype)) return;
      ProxyClass.prototype[prop] = function() {
        return this[targetProp][prop].apply(this[targetProp], arguments);
      };
    });
  }

  function proxyCursorRequestMethods(ProxyClass, targetProp, Constructor, properties) {
    properties.forEach(function(prop) {
      if (!(prop in Constructor.prototype)) return;
      ProxyClass.prototype[prop] = function() {
        return promisifyCursorRequestCall(this[targetProp], prop, arguments);
      };
    });
  }

  function Index(index) {
    this._index = index;
  }

  proxyProperties(Index, '_index', [
    'name',
    'keyPath',
    'multiEntry',
    'unique'
  ]);

  proxyRequestMethods(Index, '_index', IDBIndex, [
    'get',
    'getKey',
    'getAll',
    'getAllKeys',
    'count'
  ]);

  proxyCursorRequestMethods(Index, '_index', IDBIndex, [
    'openCursor',
    'openKeyCursor'
  ]);

  function Cursor(cursor, request) {
    this._cursor = cursor;
    this._request = request;
  }

  proxyProperties(Cursor, '_cursor', [
    'direction',
    'key',
    'primaryKey',
    'value'
  ]);

  proxyRequestMethods(Cursor, '_cursor', IDBCursor, [
    'update',
    'delete'
  ]);

  // proxy 'next' methods
  ['advance', 'continue', 'continuePrimaryKey'].forEach(function(methodName) {
    if (!(methodName in IDBCursor.prototype)) return;
    Cursor.prototype[methodName] = function() {
      var cursor = this;
      var args = arguments;
      return Promise.resolve().then(function() {
        cursor._cursor[methodName].apply(cursor._cursor, args);
        return promisifyRequest(cursor._request).then(function(value) {
          if (!value) return;
          return new Cursor(value, cursor._request);
        });
      });
    };
  });

  function ObjectStore(store) {
    this._store = store;
  }

  ObjectStore.prototype.createIndex = function() {
    return new Index(this._store.createIndex.apply(this._store, arguments));
  };

  ObjectStore.prototype.index = function() {
    return new Index(this._store.index.apply(this._store, arguments));
  };

  proxyProperties(ObjectStore, '_store', [
    'name',
    'keyPath',
    'indexNames',
    'autoIncrement'
  ]);

  proxyRequestMethods(ObjectStore, '_store', IDBObjectStore, [
    'put',
    'add',
    'delete',
    'clear',
    'get',
    'getAll',
    'getKey',
    'getAllKeys',
    'count'
  ]);

  proxyCursorRequestMethods(ObjectStore, '_store', IDBObjectStore, [
    'openCursor',
    'openKeyCursor'
  ]);

  proxyMethods(ObjectStore, '_store', IDBObjectStore, [
    'deleteIndex'
  ]);

  function Transaction(idbTransaction) {
    this._tx = idbTransaction;
    this.complete = new Promise(function(resolve, reject) {
      idbTransaction.oncomplete = function() {
        resolve();
      };
      idbTransaction.onerror = function() {
        reject(idbTransaction.error);
      };
      idbTransaction.onabort = function() {
        reject(idbTransaction.error);
      };
    });
  }

  Transaction.prototype.objectStore = function() {
    return new ObjectStore(this._tx.objectStore.apply(this._tx, arguments));
  };

  proxyProperties(Transaction, '_tx', [
    'objectStoreNames',
    'mode'
  ]);

  proxyMethods(Transaction, '_tx', IDBTransaction, [
    'abort'
  ]);

  function UpgradeDB(db, oldVersion, transaction) {
    this._db = db;
    this.oldVersion = oldVersion;
    this.transaction = new Transaction(transaction);
  }

  UpgradeDB.prototype.createObjectStore = function() {
    return new ObjectStore(this._db.createObjectStore.apply(this._db, arguments));
  };

  proxyProperties(UpgradeDB, '_db', [
    'name',
    'version',
    'objectStoreNames'
  ]);

  proxyMethods(UpgradeDB, '_db', IDBDatabase, [
    'deleteObjectStore',
    'close'
  ]);

  function DB(db) {
    this._db = db;
  }

  DB.prototype.transaction = function() {
    return new Transaction(this._db.transaction.apply(this._db, arguments));
  };

  proxyProperties(DB, '_db', [
    'name',
    'version',
    'objectStoreNames'
  ]);

  proxyMethods(DB, '_db', IDBDatabase, [
    'close'
  ]);

  // Add cursor iterators
  // TODO: remove this once browsers do the right thing with promises
  ['openCursor', 'openKeyCursor'].forEach(function(funcName) {
    [ObjectStore, Index].forEach(function(Constructor) {
      Constructor.prototype[funcName.replace('open', 'iterate')] = function() {
        var args = toArray(arguments);
        var callback = args[args.length - 1];
        var nativeObject = this._store || this._index;
        var request = nativeObject[funcName].apply(nativeObject, args.slice(0, -1));
        request.onsuccess = function() {
          callback(request.result);
        };
      };
    });
  });

  // polyfill getAll
  [Index, ObjectStore].forEach(function(Constructor) {
    if (Constructor.prototype.getAll) return;
    Constructor.prototype.getAll = function(query, count) {
      var instance = this;
      var items = [];

      return new Promise(function(resolve) {
        instance.iterateCursor(query, function(cursor) {
          if (!cursor) {
            resolve(items);
            return;
          }
          items.push(cursor.value);

          if (count !== undefined && items.length == count) {
            resolve(items);
            return;
          }
          cursor.continue();
        });
      });
    };
  });

  var exp = {
    open: function(name, version, upgradeCallback) {
      var p = promisifyRequestCall(indexedDB, 'open', [name, version]);
      var request = p.request;

      request.onupgradeneeded = function(event) {
        if (upgradeCallback) {
          upgradeCallback(new UpgradeDB(request.result, event.oldVersion, request.transaction));
        }
      };

      return p.then(function(db) {
        return new DB(db);
      });
    },
    delete: function(name) {
      return promisifyRequestCall(indexedDB, 'deleteDatabase', [name]);
    }
  };

  if (true) {
    module.exports = exp;
    module.exports.default = module.exports;
  }
  else {
    self.idb = exp;
  }
}());


/***/ }),

/***/ 296:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("default-layout", [
    _c("div", [
      _c("h1", [
        !_vm.loading
          ? _c("i", {
              staticClass: "fa fa-envelope",
              staticStyle: { "margin-left": "8px", "margin-right": "6px" }
            })
          : _c("i", {
              staticClass: "fa fa-refresh fa-spin",
              staticStyle: { "margin-left": "8px", "margin-right": "6px" }
            }),
        _vm._v(
          "\n            " +
            _vm._s(_vm.lang.get("contact.title")) +
            "\n        "
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-md-9" }, [
          _c(
            "form",
            {
              attrs: { role: "form" },
              on: {
                submit: function($event) {
                  $event.preventDefault()
                  return _vm.handleContactSubmit($event)
                }
              }
            },
            [
              _c("div", { staticClass: "input-group" }, [
                _c("span", { staticClass: "input-group-addon" }, [
                  _vm._v(_vm._s(_vm.lang.get("full_name")) + " ")
                ]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.form.name,
                      expression: "form.name"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: {
                    name: "name",
                    id: "prependedtext",
                    placeholder: "John Doe...",
                    type: "text",
                    required: "",
                    value: ""
                  },
                  domProps: { value: _vm.form.name },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.form, "name", $event.target.value)
                    }
                  }
                })
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "input-group" }, [
                _c("span", { staticClass: "input-group-addon" }, [
                  _vm._v(_vm._s(_vm.lang.get("email_address")) + " ")
                ]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.form.email,
                      expression: "form.email"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: {
                    name: "email",
                    id: "prependedtext",
                    placeholder: "john.doe@example.com",
                    type: "email",
                    required: "",
                    value: ""
                  },
                  domProps: { value: _vm.form.email },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.form, "email", $event.target.value)
                    }
                  }
                })
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "input-group" }, [
                _c("span", { staticClass: "input-group-addon" }, [
                  _vm._v(_vm._s(_vm.lang.get("subject")) + " ")
                ]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.form.subject,
                      expression: "form.subject"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: {
                    name: "subject",
                    id: "prependedtext",
                    placeholder: _vm.lang.get("subject.placeholder"),
                    type: "text",
                    required: "",
                    value: ""
                  },
                  domProps: { value: _vm.form.subject },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.form, "subject", $event.target.value)
                    }
                  }
                })
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "input-group" }, [
                _c("span", { staticClass: "input-group-addon" }, [
                  _vm._v(_vm._s(_vm.lang.get("message")) + " ")
                ]),
                _vm._v(" "),
                _c("textarea", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.form.message,
                      expression: "form.message"
                    }
                  ],
                  staticClass: "form-control",
                  staticStyle: { resize: "none" },
                  attrs: {
                    name: "message",
                    placeholder: _vm.lang.get("message.placeholder"),
                    required: ""
                  },
                  domProps: { value: _vm.form.message },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.form, "message", $event.target.value)
                    }
                  }
                })
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "col-md-6", staticStyle: { padding: "5px" } },
                [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-success",
                      staticStyle: { width: "100%" }
                    },
                    [_vm._v(_vm._s(_vm.lang.get("send_message")))]
                  )
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "col-md-6", staticStyle: { padding: "5px" } },
                [
                  _c(
                    "a",
                    {
                      staticClass: "btn btn-danger",
                      staticStyle: { width: "100%" },
                      on: { click: _vm.clearForm }
                    },
                    [_vm._v(_vm._s(_vm.lang.get("clear_form")))]
                  )
                ]
              )
            ]
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-md-3" }, [
          _c(
            "a",
            {
              staticClass: "btn btn-block btn-social btn-twitter",
              staticStyle: { "margin-top": "7px" },
              attrs: {
                href: "https://twitter.com/welfordian",
                target: "_blank"
              }
            },
            [
              _c("i", {
                staticClass: "fa fa-twitter",
                staticStyle: { "margin-top": "3px" }
              }),
              _vm._v(_vm._s(_vm.lang.get("find_me_on")) + " Twitter")
            ]
          ),
          _vm._v(" "),
          _c(
            "a",
            {
              staticClass: "btn btn-block btn-social btn-github",
              staticStyle: { "margin-top": "7px" },
              attrs: { href: "https://github.com/welfordian", target: "_blank" }
            },
            [
              _c("i", {
                staticClass: "fa fa-github",
                staticStyle: { "margin-top": "3px" }
              }),
              _vm._v(_vm._s(_vm.lang.get("find_me_on")) + " GitHub")
            ]
          ),
          _vm._v(" "),
          _c(
            "a",
            {
              staticClass: "btn btn-block btn-social btn-linkedin",
              staticStyle: { "margin-top": "7px" },
              attrs: {
                href: "https://www.linkedin.com/in/josh-welford-1432777a/",
                target: "_blank"
              }
            },
            [
              _c("i", {
                staticClass: "fa fa-linkedin",
                staticStyle: { "margin-top": "3px" }
              }),
              _vm._v(_vm._s(_vm.lang.get("find_me_on")) + " LinkedIn")
            ]
          )
        ])
      ]),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "modal _fade",
          attrs: { tabindex: "-1", role: "dialog", id: "offlineModal" }
        },
        [
          _c(
            "div",
            { staticClass: "modal-dialog", attrs: { role: "document" } },
            [
              _c("div", { staticClass: "modal-content" }, [
                _c("div", { staticClass: "modal-header" }, [
                  _c(
                    "button",
                    {
                      staticClass: "close",
                      attrs: { type: "button", "aria-label": "Close" }
                    },
                    [
                      _c("span", { attrs: { "aria-hidden": "true" } }, [
                        _vm._v("×")
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c("h4", { staticClass: "modal-title" }, [
                    _vm._v("Seems there was a problem...")
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "modal-body" }, [
                  _c("p", [_vm._v(_vm._s(_vm.modalMessage))])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "modal-footer" }, [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-default",
                      attrs: { type: "button", "data-dismiss": "modal" }
                    },
                    [_vm._v("Close")]
                  ),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-primary",
                      attrs: { type: "button" },
                      on: { click: _vm.requestNotifications }
                    },
                    [_vm._v("Notify Me When Sent")]
                  )
                ])
              ])
            ]
          )
        ]
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-3afe55c6", module.exports)
  }
}

/***/ })

});