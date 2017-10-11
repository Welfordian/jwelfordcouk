webpackJsonp([16],{

/***/ 228:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(236),
  /* template */
  __webpack_require__(237),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/var/www/dev.site/resources/assets/js/views/About.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] About.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-d78b5e32", Component.options)
  } else {
    hotAPI.reload("data-v-d78b5e32", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 236:
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
            lang: __WEBPACK_IMPORTED_MODULE_0__i18n__["a" /* i18n */]
        };
    }
});

/***/ }),

/***/ 237:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('header-image', {
    attrs: {
      "name": "Joshua Welford",
      "image": "me-min.jpg",
      "background": "//cdn.jwelford.co.uk/images/cover.jpg"
    }
  }), _vm._v(" "), _c('about-summary', {
    attrs: {
      "title": "Summary"
    }
  }, [_vm._v("\n        " + _vm._s(_vm.lang.get('summary')) + "\n    ")]), _vm._v(" "), _c('about-languages', {
    attrs: {
      "show-title": ""
    }
  }, [_c('about-language', {
    attrs: {
      "language": "HTML(5)",
      "years": "5"
    }
  }, [_vm._v("\n            " + _vm._s(_vm.lang.get('languages.html')) + "\n        ")]), _vm._v(" "), _c('about-language', {
    attrs: {
      "language": "PHP",
      "years": "4"
    }
  }, [_vm._v("\n            " + _vm._s(_vm.lang.get('languages.php')) + "\n        ")]), _vm._v(" "), _c('about-language', {
    attrs: {
      "language": "Javascript",
      "years": "5"
    }
  }, [_vm._v("\n            " + _vm._s(_vm.lang.get('languages.javascript')) + "\n        ")])], 1), _vm._v(" "), _c('about-languages', [_c('about-language', {
    attrs: {
      "language": "CSS",
      "years": "5"
    }
  }, [_vm._v("\n            " + _vm._s(_vm.lang.get('languages.css')) + "\n        ")]), _vm._v(" "), _c('about-language', {
    attrs: {
      "language": "jQuery",
      "years": "4"
    }
  }, [_vm._v("\n            " + _vm._s(_vm.lang.get('languages.jquery')) + "\n        ")]), _vm._v(" "), _c('about-language', {
    attrs: {
      "language": "Angular(2)",
      "years": "2"
    }
  }, [_vm._v("\n            " + _vm._s(_vm.lang.get('languages.angular')) + "\n        ")])], 1), _vm._v(" "), _c('about-languages', [_c('about-language', {
    attrs: {
      "language": "NodeJS",
      "years": "2"
    }
  }, [_vm._v("\n            " + _vm._s(_vm.lang.get('languages.nodejs')) + "\n        ")]), _vm._v(" "), _c('about-language', {
    attrs: {
      "language": "Debian / Ubuntu",
      "years": "2"
    }
  }, [_vm._v("\n            " + _vm._s(_vm.lang.get('languages.debian')) + "\n        ")]), _vm._v(" "), _c('about-language', {
    attrs: {
      "language": "Laravel",
      "years": "2"
    }
  }, [_vm._v("\n            " + _vm._s(_vm.lang.get('languages.laravel')) + "\n        ")])], 1), _vm._v(" "), _c('experience-set', [_c('experience', {
    attrs: {
      "from": "Mar 2017",
      "to": "Jul 2017",
      "role": "PHP Developer",
      "location": "Leadbyte—Middlesbrough"
    }
  }, [_vm._v("\n            " + _vm._s(_vm.lang.get('experiences.leadbyte')) + "\n            "), _c('hr')]), _vm._v(" "), _c('experience', {
    attrs: {
      "from": "Aug 2016",
      "to": "Feb 2017",
      "role": "PHP Developer",
      "location": "Better Brand Agency—Middlesbrough"
    }
  }, [_vm._v("\n            " + _vm._s(_vm.lang.get('experiences.better')) + "\n            "), _c('hr')]), _vm._v(" "), _c('experience', {
    attrs: {
      "from": "Sept 2013",
      "to": "June 2016",
      "role": "Web Developer",
      "location": "Gbiz IT Ltd—Marske-By-The-Sea"
    }
  }, [_vm._v("\n            " + _vm._s(_vm.lang.get('experiences.gbizit')) + "\n        ")])], 1), _vm._v(" "), _c('education-set', [_c('education')], 1), _vm._v(" "), _c('div', {
    staticClass: "row",
    attrs: {
      "id": "interests"
    }
  }, [_c('a', {
    attrs: {
      "name": "interests"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "col-md-12"
  }, [_c('h2', {
    staticClass: "noselect"
  }, [_vm._v(_vm._s(_vm.lang.get('interests.title')) + " "), _vm._m(0)]), _vm._v(" "), _c('p', {
    staticStyle: {
      "text-align": "justify"
    }
  }, [_vm._v(_vm._s(_vm.lang.get('interests')))])])])], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('a', {
    staticClass: "part-link",
    attrs: {
      "href": "#interests"
    }
  }, [_c('i', {
    staticClass: "glyphicon glyphicon-link"
  })])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-d78b5e32", module.exports)
  }
}

/***/ })

});