webpackJsonp([9],{

/***/ 248:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(303)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(305)
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
Component.options.__file = "resources/assets/js/views/dashboard/Editor.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-f0e4d9ca", Component.options)
  } else {
    hotAPI.reload("data-v-f0e4d9ca", Component.options)
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

/***/ 303:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(304);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(9)("9f30f5aa", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-f0e4d9ca\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Editor.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-f0e4d9ca\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Editor.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 304:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)(false);
// imports


// module
exports.push([module.i, "\n#jw-editor {\n    position: fixed;\n    width: 350px;\n    height: 300px;\n    background-color: #2d3e4f;\n    color: white;\n    padding: 10px;\n}\n", ""]);

// exports


/***/ }),

/***/ 305:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_DashboardLayout__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_DashboardLayout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_DashboardLayout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Http__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      frameBody: false,
      editType: 0,
      currentSelector: false,
      modification: {
        innerText: ""
      },
      modifications: {},
      originalModifications: {},
      modificationsDirty: false,
      injectedEditor: false
    };
  },
  beforeMount: function beforeMount() {
    jQuery.fn.extend({
      getPath: function getPath() {
        var pathes = [];

        this.each(function (index, element) {
          var path,
              $node = jQuery(element);

          while ($node.length) {
            var realNode = $node.get(0),
                name = realNode.localName;
            if (!name) {
              break;
            }

            name = name.toLowerCase();
            var parent = $node.parent();
            var sameTagSiblings = parent.children(name);

            if (sameTagSiblings.length > 1) {
              var allSiblings = parent.children();
              var index = allSiblings.index(realNode) + 1;
              if (index > 0) {
                name += ':nth-child(' + index + ')';
              }
            }

            path = name + (path ? ' > ' + path : '');
            $node = parent;
          }

          pathes.push(path);
        });

        return pathes.join(',');
      }
    });
  },
  mounted: function mounted() {
    var _this = this;

    __WEBPACK_IMPORTED_MODULE_1__Http__["a" /* _http */].get('/modifications').then(function (response) {
      return _this.modifications = JSON.parse(response.data.config);
    }).catch(function (e) {
      return modifications = true;
    });

    this.originalModifications = __WEBPACK_IMPORTED_MODULE_2_vue__["util"].extend({}, this.modifications);

    $(this.$refs.editorFrame).on('mouseout', function () {
      _this.frameBody.find('#jw-rect').remove();
    });

    this.$refs.editorFrame.onload = function () {
      _this.frameBody = $(_this.$refs.editorFrame.contentDocument.body);

      _this.frameBody.ready(function () {
        $(document).on('keyup', function (e) {
          if (e.keyCode === 27) {
            _this.clearEditing();
          }
        });

        _this.frameBody.on('keyup', function (e) {
          if (e.keyCode === 27) {
            _this.clearEditing();
          }
        });

        _this.injectEditor();

        _this.frameBody.bind('mouseover mouseout', function (event) {
          if (!_this.currentElement) {
            var $tgt = event.target;

            _this.addFrameRect($tgt);
          }
        }).click(function (event) {
          if (event.target.parentElement.parentElement.parentElement.parentElement.id !== 'jw-editor' || event.target.id === 'jw-editor') {
            event.stopImmediatePropagation();
            event.stopPropagation();
            event.preventDefault();

            _this.currentElement = event.target;

            _this.currentSelector = $(_this.currentElement).getPath();

            if (!_this.modifications.hasOwnProperty(_this.currentSelector)) {
              _this.modifications[_this.currentSelector] = __WEBPACK_IMPORTED_MODULE_2_vue__["util"].extend({}, _this.modification);

              //this.modifications[this.currentSelector].innerText = this.currentElement.innerText;
            }

            _this.showEditor();

            return false;
          }
        });
      });

      _this.addFrameStyles();
    };
  },


  methods: {
    injectEditor: function injectEditor() {
      this.injectedEditor = this.$refs.editor.cloneNode('deep');

      this.addEditorInputs();

      this.frameBody.append(this.injectedEditor);
    },
    addEditorInputs: function addEditorInputs() {
      var _this2 = this;

      var editor = $(this.injectedEditor);

      this.innerHTMLTextarea = $("<textarea>", {
        style: 'width: 100%;'
      });

      this.innerHTMLTextarea.on('keyup', function (event) {
        console.log('hello');
        _this2.modifications[_this2.currentSelector].innerText = event.target.value;
        _this2.updateElementText(event);
      });

      editor.find('#innerHTMLPlaceholder').html(this.innerHTMLTextarea);
    },
    showEditor: function showEditor() {
      var editor = $(this.injectedEditor);

      this.innerHTMLTextarea.val(this.currentElement.innerText);

      editor.removeClass('hidden');
    },
    hideEditor: function hideEditor() {
      var editor = $(this.injectedEditor);

      editor.addClass('hidden');
    },
    splitHostname: function splitHostname() {
      var result = {};
      var regexParse = new RegExp('([a-z\-0-9]{2,63})\.([a-z\.]{2,5})$');
      var urlParts = regexParse.exec(window.location.hostname);
      result.domain = urlParts[1];
      result.type = urlParts[2];
      result.subdomain = window.location.hostname.replace(result.domain + '.' + result.type, '').slice(0, -1);

      return result;
    },
    saveModifications: function saveModifications() {
      __WEBPACK_IMPORTED_MODULE_1__Http__["a" /* _http */].post('/modifications/save', {
        domain: this.splitHostname()['subdomain'],
        config: this.modifications
      });
    },
    clearEditing: function clearEditing() {
      this.editType = 0;
      this.currentElement = false;
      this.hideEditor();
      this.elementText = "";
    },
    updateElementText: function updateElementText() {
      this.currentElement.innerText = this.modifications[this.currentSelector].innerText;
    },
    isTextElement: function isTextElement(element) {
      var nodeType = element.nodeName;
      var textTypes = ['P', 'SPAN', 'H1', 'H2', 'H3', 'H4', 'H5', 'DIV'];

      return textTypes.indexOf(nodeType) !== -1;
    },
    showTextEdit: function showTextEdit(element) {
      this.modifications[this.currentSelector].innerText = element.innerText;
      this.editType = 1;
    },
    getCoords: function getCoords(elem) {
      var left = 0,
          top = 0;

      do {
        left += elem.offsetLeft - elem.scrollLeft;
        top += elem.offsetTop - elem.scrollTop;
      } while (elem = elem.offsetParent);

      return { left: left, top: top };
    },
    getSize: function getSize(elem) {
      return { width: elem.offsetWidth, height: elem.offsetHeight };
    },
    createRect: function createRect(elem, position, size) {
      var div = $('<div />');

      div.css({
        position: 'absolute',
        top: position.top,
        left: position.left,
        width: size.width,
        height: size.height,
        border: '2px solid red',
        zIndex: '9999',
        pointerEvents: 'none'
      });

      div.attr('id', 'jw-rect');

      return div;
    },
    addFrameRect: function addFrameRect(elem) {
      var position = this.getCoords(elem);
      var size = this.getSize(elem);
      var rect = this.createRect(elem, position, size);

      this.frameBody.find('#jw-rect').remove();

      this.frameBody.append(rect);
    },
    addFrameStyles: function addFrameStyles() {
      var link = document.createElement('link');

      link.rel = "stylesheet";
      link.type = "text/css";
      link.href = "/css/framed.css";

      this.frameBody.append(link);
    }
  },

  watch: {
    'modifications': {
      handler: function handler() {
        this.modificationsDirty = Object.keys(this.modifications).join('') !== Object.keys(this.originalModifications).join('');
      },


      deep: true
    }
  }

});

/***/ }),

/***/ 306:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("dashboard-layout", { attrs: { "full-width": true } }, [
    _c("div", [
      _c("div", { staticStyle: { width: "100%", height: "700px" } }, [
        _c("iframe", {
          ref: "editorFrame",
          staticClass: "col-md-12",
          staticStyle: { height: "100%", width: "100%", border: "none" },
          attrs: { src: "/" }
        })
      ]),
      _vm._v(" "),
      _c("div", [
        _c(
          "button",
          {
            staticClass: "btn btn-success",
            staticStyle: { position: "fixed", bottom: "10px", right: "10px" },
            on: { click: _vm.saveModifications }
          },
          [_vm._v("Save Modifications\n            ")]
        )
      ]),
      _vm._v(" "),
      _c(
        "div",
        { ref: "editor", staticClass: "hidden", attrs: { id: "jw-editor" } },
        [
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-md-12" }, [
              _c("div", { attrs: { id: "innerHTMLPlaceholder" } })
            ])
          ])
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
    require("vue-hot-reload-api")      .rerender("data-v-f0e4d9ca", module.exports)
  }
}

/***/ })

});