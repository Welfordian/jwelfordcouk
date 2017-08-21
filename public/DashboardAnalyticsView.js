webpackJsonp([2],{

/***/ 235:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(262)
}
var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(264),
  /* template */
  __webpack_require__(265),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-eff006b6",
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/var/www/dev.site/resources/assets/js/views/dashboard/Analytics.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Analytics.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-eff006b6", Component.options)
  } else {
    hotAPI.reload("data-v-eff006b6", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 262:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(263);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(6)("6dcbdd0d", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-eff006b6\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Analytics.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-eff006b6\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Analytics.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 263:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(undefined);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 264:
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



/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            members: [],
            geo: {
                get: function get(id) {
                    return this.hasOwnProperty(id) ? this[id] : "Unkown";
                }
            }
        };
    },


    methods: {
        setMembers: function setMembers() {
            var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

            var _members = $.map(this.$analytics.members.members, function (value, index) {
                if (data) {
                    if ('id' in data) {
                        if (data.id === index) {
                            value['route'] = data.route;
                        }
                    } else if ('client' in data) {
                        if (data.client.id === index) {
                            value['route'] = data.route;
                        }
                    }
                }

                if (!value.hasOwnProperty("route")) {
                    value.route = "Unknown";
                }

                return [value];
            });

            this.members = _members;
        },
        getGeoLocation: function getGeoLocation(members) {
            var type = Object.getPrototypeOf(members).constructor.name;

            if (type === "Members") {
                for (var prop in members.members) {
                    var ip = members.members[prop].ip;
                    console.log(ip);
                }
            } else if (type === "Object") {}
        }
    },

    mounted: function mounted() {
        this.$analytics.bind('pusher:subscription_succeeded', function (data) {
            this.setMembers();
            this.getGeoLocation(data);

            this.$analytics.trigger('client-analytics-refresh', {});

            this.$analytics.bind('pusher:member_added', function (data) {
                this.setMembers(data);
                this.getGeoLocation(data);
            }.bind(this));

            this.$analytics.bind('pusher:member_removed', function (data) {
                this.setMembers();
            }.bind(this));

            this.$analytics.bind('client-route-navigate', function (data) {
                this.setMembers();
            }.bind(this));
        }.bind(this));
    }
});

/***/ }),

/***/ 265:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('h1', [_vm._v("Analytics")]), _vm._v(" "), _c('table', {
    staticClass: "table table-striped"
  }, [_vm._m(0), _vm._v(" "), _c('tbody', _vm._l((_vm.members), function(member) {
    return _c('tr', [_c('td', [_vm._v(_vm._s(member.ip))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(member.route))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.geo.get('id')))])])
  }))])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('thead', [_c('tr', [_c('th', [_vm._v("IP Address")]), _vm._v(" "), _c('th', [_vm._v("Page")]), _vm._v(" "), _c('th', [_vm._v("Location")])])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-eff006b6", module.exports)
  }
}

/***/ })

});