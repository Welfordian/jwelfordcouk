webpackJsonp([5],{

/***/ 233:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(254)
}
var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(256),
  /* template */
  __webpack_require__(257),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-bb466924",
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/var/www/dev.site/resources/assets/js/views/Dashboard.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Dashboard.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-bb466924", Component.options)
  } else {
    hotAPI.reload("data-v-bb466924", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 254:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(255);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(6)("49c77f58", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-bb466924\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Dashboard.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-bb466924\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Dashboard.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 255:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(undefined);
// imports


// module
exports.push([module.i, "\n.title[data-v-bb466924] {\n    margin-top: 0px;\n    margin-bottom: 35px;\n    margin-left: 15px;\n}\n", ""]);

// exports


/***/ }),

/***/ 256:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stores_SharedStore__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Http__ = __webpack_require__(10);
//
//
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
            store: __WEBPACK_IMPORTED_MODULE_0__stores_SharedStore__["a" /* Store */],
            stats: {
                users: false,
                posts: false,
                messages: false,
                files: false
            },
            analytics: this.$analytics
        };
    },
    mounted: function mounted() {
        this.analytics.bind('client-route-navigate', function () {
            console.log(arguments);
        });
    },
    beforeMount: function beforeMount() {
        __WEBPACK_IMPORTED_MODULE_1__Http__["a" /* _http */].get('/dashboard/stats').then(function (response) {
            this.stats = response.data;
        }.bind(this)).catch(function (error) {
            console.error("Couldn't fetch stats", error);
        });
    }
});

/***/ }),

/***/ 257:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "row"
  }, [_c('h1', {
    staticClass: "title"
  }, [_vm._v("Welcome " + _vm._s(_vm.store.user.get('name')))]), _vm._v(" "), _c('dashboard-stat', {
    attrs: {
      "data": _vm.stats.users,
      "link": "/dashboard/users",
      "title": "Users",
      "icon": "users",
      "size": "6"
    }
  }), _vm._v(" "), _c('dashboard-stat', {
    attrs: {
      "data": _vm.stats.posts,
      "link": "/dashboard/posts",
      "title": "Posts",
      "icon": "newspaper-o",
      "size": "6"
    }
  }), _vm._v(" "), _c('dashboard-stat', {
    attrs: {
      "data": _vm.stats.messages,
      "link": "/dashboard/messages",
      "title": "Emails",
      "icon": "envelope",
      "size": "4"
    }
  }), _vm._v(" "), _c('dashboard-stat', {
    attrs: {
      "data": _vm.stats.files,
      "link": "/dashboard/files",
      "title": "Files",
      "icon": "file",
      "size": "4"
    }
  }), _vm._v(" "), _c('dashboard-stat', {
    attrs: {
      "data": _vm.analytics.members.count,
      "link": "/dashboard/analytics",
      "title": "Analytics",
      "icon": "line-chart",
      "size": "4"
    }
  })], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-bb466924", module.exports)
  }
}

/***/ })

});