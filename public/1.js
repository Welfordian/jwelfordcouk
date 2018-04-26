webpackJsonp([1],{

/***/ 254:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(323)
/* template */
var __vue_template__ = __webpack_require__(324)
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
Component.options.__file = "resources/assets/js/views/dashboard/posts/Edit.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1b92a8f4", Component.options)
  } else {
    hotAPI.reload("data-v-1b92a8f4", Component.options)
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

/***/ 273:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(274)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(276)
/* template */
var __vue_template__ = __webpack_require__(277)
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
Component.options.__file = "resources/assets/js/components/LimitedInput.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-e37e27f2", Component.options)
  } else {
    hotAPI.reload("data-v-e37e27f2", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 274:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(275);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(9)("39cbdcba", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-e37e27f2\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./LimitedInput.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-e37e27f2\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./LimitedInput.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 275:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)(false);
// imports


// module
exports.push([module.i, "\n.badChars {\n    background: rgba(255, 0, 0, 0.35);\n}\n.fakeInput {\n    max-height: 45px;\n    overflow: auto;\n    white-space: nowrap;\n}\n", ""]);

// exports


/***/ }),

/***/ 276:
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

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'limited-input',
  props: ['max', 'type', 'name', 'value'],

  data: function data() {
    return {
      charCount: 0
    };
  },
  mounted: function mounted() {
    this.checkInput();
  },
  beforeMount: function beforeMount() {
    this.inputValue = this.value === undefined ? "" : this.value;
    this.name = this.name === undefined ? '' : this.name;
    this.hasMax = this.max;
    this.inputType = this.type === undefined ? 'input' : this.type;
  },


  methods: {
    setEndOfContenteditable: function setEndOfContenteditable(contentEditableElement) {
      var range, selection;

      if (document.createRange) //Firefox, Chrome, Opera, Safari, IE 9+
        {
          range = document.createRange(); //Create a range (a range is a like the selection but invisible)
          range.selectNodeContents(contentEditableElement); //Select the entire contents of the element with the range
          range.collapse(false); //collapse the range to the end point. false means collapse to end rather than the start
          selection = window.getSelection(); //get the selection object (allows you to change selection)
          selection.removeAllRanges(); //remove any selections already made
          selection.addRange(range); //make the range you have just created the visible selection
        } else if (document.selection) //IE 8 and lower
        {
          range = document.body.createTextRange(); //Create a range (a range is a like the selection but invisible)
          range.moveToElementText(contentEditableElement); //Select the entire contents of the element with the range
          range.collapse(false); //collapse the range to the end point. false means collapse to end rather than the start
          range.select(); //Select the range (make it the visible selection
        }
    },
    checkInput: function checkInput() {
      this.inputValue = this.$refs.fakeInput.innerText;
      this.charCount = this.$refs.fakeInput.innerText.length;

      $(this.$refs.fakeInput).append(this.highlightBadChars());
      this.setEndOfContenteditable(this.$refs.fakeInput);

      this.$emit('input', this.$refs.fakeInput.innerText);
    },
    highlightBadChars: function highlightBadChars() {
      var okayChars = this.$refs.fakeInput.innerText.substring(0, this.max);
      var badChars = this.$refs.fakeInput.innerText.substring(this.max, this.$refs.fakeInput.innerText.length);

      $(this.$refs.fakeInput).empty();

      if (badChars.length) {
        this.$emit('hasBadChars', true);
      } else {
        this.$emit('hasBadChars', false);
      }

      return okayChars + '<span class="badChars">' + badChars + '</span>';
    }
  }
});

/***/ }),

/***/ 277:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.inputType === "input"
    ? _c("div", [
        _c(
          "div",
          {
            ref: "fakeInput",
            staticClass: "form-control fakeInput",
            staticStyle: { "margin-bottom": "10px" },
            attrs: { contenteditable: "true", type: "text" },
            on: { keyup: _vm.checkInput }
          },
          [_vm._v(_vm._s(_vm.inputValue))]
        ),
        _vm._v(" "),
        _c("input", {
          staticStyle: { display: "none" },
          attrs: { name: _vm.name, type: "text" },
          domProps: { value: _vm.inputValue }
        }),
        _vm._v(" "),
        _vm.hasMax
          ? _c("p", { staticClass: "text-right" }, [
              _vm._v(_vm._s(_vm.charCount) + " / " + _vm._s(_vm.max))
            ])
          : _vm._e()
      ])
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-e37e27f2", module.exports)
  }
}

/***/ }),

/***/ 323:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_DashboardLayout__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_DashboardLayout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_DashboardLayout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_LimitedInput__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_LimitedInput___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_LimitedInput__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_ImageUploadButton__ = __webpack_require__(338);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_ImageUploadButton___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_ImageUploadButton__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Http__ = __webpack_require__(4);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    ImageUploadButton: __WEBPACK_IMPORTED_MODULE_2__components_ImageUploadButton___default.a,
    LimitedInput: __WEBPACK_IMPORTED_MODULE_1__components_LimitedInput___default.a,
    DashboardLayout: __WEBPACK_IMPORTED_MODULE_0__components_DashboardLayout___default.a
  },

  mounted: function mounted() {
    this.watchTuiEditor();
  },
  data: function data() {
    return {
      titleHasBadChars: false,
      post: this.$route.meta.post,
      deleteText: "Delete Post",
      deleteConfirmed: false,
      deleteTimeout: setTimeout.prototype
    };
  },


  methods: {
    confirmDelete: function confirmDelete() {
      var _this = this;

      if (this.deleteConfirmed) {
        clearTimeout(this.deleteTimeout);

        __WEBPACK_IMPORTED_MODULE_3__Http__["a" /* _http */].delete('/posts/' + this.post.slug).then(function () {
          _this.$router.push('/dashboard/posts');
        });
      } else {
        this.deleteText = "Are you sure (click again)?";
        this.deleteConfirmed = true;

        this.deleteTimeout = setTimeout(function () {
          _this.deleteText = "Delete Post";
          _this.deleteConfirmed = false;
        }, 500);
      }
    },
    updatePost: function updatePost() {
      __WEBPACK_IMPORTED_MODULE_3__Http__["a" /* _http */].patch('/posts/' + this.post.slug, this.post).then(function (response) {
        console.log(response);
      });
    },
    watchTuiEditor: function watchTuiEditor() {
      var _this2 = this;

      var targetNode = $('.tui-editor-contents').get(0);

      var config = { attributes: true, childList: true };

      var callback = function callback(mutationsList) {
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = mutationsList[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var mutation = _step.value;

            if (mutation.type == 'childList') {
              _this2.post.content = $('.tui-editor-contents').html();
              _this2.$forceUpdate();
            }
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }
      };

      var observer = new MutationObserver(callback);

      observer.observe(targetNode, config);
    },
    updateTitleStatus: function updateTitleStatus(hasBadChars) {
      this.titleHasBadChars = hasBadChars;
    }
  },

  computed: {
    savable: function savable() {
      return this.post.title.length !== 0 && this.post.intro_text.length !== 0 && this.post.intro_image.length !== 0 && this.post.content.length !== 0 && !this.titleHasBadChars;
    }
  }
});

/***/ }),

/***/ 324:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("dashboard-layout", [
    _c("div", [
      _c("div", { staticClass: "row" }, [
        _c("h1", [_vm._v("Edit Post ID #" + _vm._s(_vm.post.id))]),
        _vm._v(" "),
        _c("hr"),
        _vm._v(" "),
        _c(
          "div",
          [
            _c("label", [_vm._v("Title")]),
            _vm._v(" "),
            _c("limited-input", {
              attrs: { max: "50", name: "title" },
              on: { hasBadChars: _vm.updateTitleStatus },
              model: {
                value: _vm.post.title,
                callback: function($$v) {
                  _vm.$set(_vm.post, "title", $$v)
                },
                expression: "post.title"
              }
            }),
            _vm._v(" "),
            _c("label", [_vm._v("Intro Text")]),
            _vm._v(" "),
            _c("textarea", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.post.intro_text,
                  expression: "post.intro_text"
                }
              ],
              ref: "intro_text",
              staticClass: "form-control",
              staticStyle: { "margin-bottom": "10px" },
              domProps: { value: _vm.post.intro_text },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.post, "intro_text", $event.target.value)
                }
              }
            }),
            _vm._v(" "),
            _c("label", [_vm._v("Intro Image")]),
            _vm._v(" "),
            _c("image-upload-button", {
              model: {
                value: _vm.post.intro_image,
                callback: function($$v) {
                  _vm.$set(_vm.post, "intro_image", $$v)
                },
                expression: "post.intro_image"
              }
            }),
            _vm._v(" "),
            _c("tui-editor", {
              attrs: {
                options: { height: "600px", initialValue: _vm.post.content }
              }
            }),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass: "btn btn-danger",
                staticStyle: { "margin-top": "10px" },
                on: { click: _vm.confirmDelete }
              },
              [
                _vm._v(
                  "\n                    " +
                    _vm._s(_vm.deleteText) +
                    "\n                "
                )
              ]
            ),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass: "btn btn-success pull-right",
                staticStyle: { "margin-top": "10px" },
                attrs: { disabled: !_vm.savable },
                on: {
                  click: function($event) {
                    _vm.updatePost()
                  }
                }
              },
              [_vm._v("Update Post\n                ")]
            )
          ],
          1
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
    require("vue-hot-reload-api")      .rerender("data-v-1b92a8f4", module.exports)
  }
}

/***/ }),

/***/ 338:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(339)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(341)
/* template */
var __vue_template__ = __webpack_require__(342)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-7eb7bd32"
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
Component.options.__file = "resources/assets/js/components/ImageUploadButton.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7eb7bd32", Component.options)
  } else {
    hotAPI.reload("data-v-7eb7bd32", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 339:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(340);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(9)("32f86e52", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-7eb7bd32\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./ImageUploadButton.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-7eb7bd32\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./ImageUploadButton.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 340:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)(false);
// imports


// module
exports.push([module.i, "\ninput[type=file][data-v-7eb7bd32] {\n    display: none !important;\n}\n.buttonContainer[data-v-7eb7bd32] {\n    position: relative;\n    margin-bottom: 10px;\n}\n.clearFile[data-v-7eb7bd32] {\n    margin-left: 10px;\n    cursor: pointer;\n    font-size: 20px;\n    position: relative;\n    top: 4px;\n}\n.buttonContainer button[data-v-7eb7bd32] {\n    position: relative;\n    overflow: hidden;\n}\n.buttonContainer button div[data-v-7eb7bd32] {\n    position: absolute;\n    top: -2px;\n    left: -2px;\n    height: 110%;\n    width: 0%;\n    z-index: 999;\n    background-color: #2c3e50ad;\n    border: 1px solid #2c3e50ad;\n    border-radius: 3px;\n}\nimg[data-v-7eb7bd32] {\n    position: absolute;\n    right: 15px;\n    top: 0;\n    width: 50px;\n    z-index: 999;\n}\nimg.enlarged[data-v-7eb7bd32] {\n    max-width: 800px;\n    width: auto;\n}\n.loader[data-v-7eb7bd32] {\n    margin-left: 5px;\n    cursor: pointer;\n    font-size: 20px;\n    position: relative;\n    top: 4px;\n}\n", ""]);

// exports


/***/ }),

/***/ 341:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Http__ = __webpack_require__(4);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'image-upload-button',

  data: function data() {
    return {
      buttonText: 'Select an Image',
      hasFile: false,
      inputValue: "",
      error: false,
      useURL: false,
      imageUrlError: false,
      hasURL: false,
      checkingURL: false
    };
  },


  methods: {
    verifyURL: function verifyURL(e) {
      var _this = this;

      var imageUrl = e.target.value.trim();

      if (imageUrl.length) {
        this.checkingURL = true;

        __WEBPACK_IMPORTED_MODULE_0__Http__["a" /* _http */].post('/posts/image/verify_url', { url: imageUrl }).then(function (response) {
          if (response.data.error) {
            _this.error = "Please enter a valid URL";
          } else {
            _this.hasURL = true;
            _this.$refs.imagePreview.src = imageUrl;
            _this.error = false;
          }

          _this.checkingURL = false;
        });
      } else {
        this.error = 'Please enter a valid URL';
      }
    },
    enlargeImagePreview: function enlargeImagePreview() {
      this.$refs.imagePreview.classList.add('enlarged');
    },
    shrinkImagePreview: function shrinkImagePreview() {
      this.$refs.imagePreview.classList.remove('enlarged');
    },
    setImagePreview: function setImagePreview() {
      var _this2 = this;

      if (this.$refs.input.files && this.$refs.input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
          _this2.$refs.imagePreview.src = e.target.result;
        };

        reader.readAsDataURL(this.$refs.input.files[0]);
      }
    },
    clearFile: function clearFile() {
      this.buttonText = "Choose File";
      this.$refs.input.value = "";
      this.hasFile = false;

      this.$emit('input', "");
    },
    validFileExtension: function validFileExtension(ext) {
      var validExtensions = ['jpg', 'jpeg', 'png', 'gif', 'bmp'];

      return validExtensions.indexOf(ext.toLowerCase()) !== -1;
    },
    setButtonValue: function setButtonValue(e) {
      this.error = false;

      var fileName = e.target.value.replace("C:\\fakepath\\", "");
      var fileExtension = /(?:\.([^.]+))?$/.exec(fileName)[1];

      if (this.validFileExtension(fileExtension)) {
        this.uploadImage(fileName);
      } else {
        this.error = "Invalid file extension";
      }
    },
    uploadImage: function uploadImage(fileName) {
      var _this3 = this;

      var data = new FormData();

      data.append('intro_image', this.$refs.input.files[0]);

      var config = {
        onUploadProgress: function onUploadProgress(progressEvent) {
          var percentCompleted = Math.round(progressEvent.loaded * 100 / progressEvent.total);

          _this3.$refs.uploadProgress.style.width = percentCompleted + 3 + '%';
        }
      };

      __WEBPACK_IMPORTED_MODULE_0__Http__["a" /* _http */].post('/posts/images', data, config).then(function (response) {
        _this3.$refs.uploadProgress.style.width = '0%';

        _this3.buttonText = fileName;
        _this3.hasFile = true;

        _this3.setImagePreview();

        _this3.$emit('input', response.data.path);
      });
    }
  },

  watch: {
    useURL: function useURL() {
      this.hasURL = false;
      this.error = false;
    }
  }
});

/***/ }),

/***/ 342:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("div", { staticClass: "row" }, [
      !_vm.useURL
        ? _c("div", { staticClass: "buttonContainer col-md-6" }, [
            _c(
              "button",
              {
                ref: "button",
                staticClass: "btn btn-success",
                on: {
                  click: function($event) {
                    _vm.$refs.input.click()
                  }
                }
              },
              [
                _c("div", { ref: "uploadProgress" }),
                _vm._v(
                  "\n                " +
                    _vm._s(_vm.buttonText) +
                    "\n            "
                )
              ]
            ),
            _vm._v(" "),
            !_vm.hasFile
              ? _c("div", { staticStyle: { display: "inline-block" } }, [
                  _c(
                    "span",
                    {
                      staticStyle: {
                        "margin-left": "10px",
                        "margin-right": "10px",
                        color: "#2c3e509e"
                      }
                    },
                    [_vm._v("OR")]
                  ),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-primary",
                      on: {
                        click: function($event) {
                          _vm.useURL = true
                        }
                      }
                    },
                    [_vm._v("Use image URL")]
                  )
                ])
              : _vm._e(),
            _vm._v(" "),
            _vm.hasFile
              ? _c(
                  "span",
                  {
                    staticClass: "clearFile",
                    on: {
                      click: function($event) {
                        $event.preventDefault()
                        return _vm.clearFile($event)
                      }
                    }
                  },
                  [_vm._v("×")]
                )
              : _vm._e()
          ])
        : _vm._e(),
      _vm._v(" "),
      _vm.useURL
        ? _c(
            "div",
            {
              staticClass: "col-md-6",
              staticStyle: { "margin-bottom": "10px" }
            },
            [
              _c("input", {
                staticClass: "form-control",
                staticStyle: { width: "95%", display: "inline-block" },
                attrs: { type: "text" },
                on: { blur: _vm.verifyURL }
              }),
              _vm._v(" "),
              !_vm.checkingURL
                ? _c(
                    "span",
                    {
                      staticClass: "clearFile",
                      on: {
                        click: function($event) {
                          $event.preventDefault()
                          _vm.useURL = false
                        }
                      }
                    },
                    [_vm._v("×")]
                  )
                : _vm._e(),
              _vm._v(" "),
              _vm.checkingURL
                ? _c("span", { staticClass: "loader" }, [
                    _c("i", {
                      staticClass: "fa fa-circle-o-notch fa-spin",
                      attrs: { "aria-hidden": "true" }
                    })
                  ])
                : _vm._e()
            ]
          )
        : _vm._e(),
      _vm._v(" "),
      _c("div", { staticClass: "previewContainer col-md-6" }, [
        _c("img", {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: _vm.hasFile || _vm.hasURL,
              expression: "hasFile || hasURL"
            }
          ],
          ref: "imagePreview",
          on: {
            mouseenter: _vm.enlargeImagePreview,
            mouseleave: _vm.shrinkImagePreview
          }
        })
      ])
    ]),
    _vm._v(" "),
    _c("input", {
      ref: "input",
      attrs: { type: "file" },
      on: { change: _vm.setButtonValue }
    }),
    _vm._v(" "),
    _vm.error
      ? _c("p", { staticClass: "text-danger" }, [_vm._v(_vm._s(this.error))])
      : _vm._e()
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-7eb7bd32", module.exports)
  }
}

/***/ })

});