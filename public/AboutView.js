webpackJsonp([7],{

/***/ 238:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(246)
/* template */
var __vue_template__ = __webpack_require__(247)
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
Component.options.__file = "resources/assets/js/views/About.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-49c1ab4a", Component.options)
  } else {
    hotAPI.reload("data-v-49c1ab4a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 246:
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
//
//
//
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

/***/ 247:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("header-image", {
        attrs: {
          name: "Joshua Welford",
          image: "me-min.jpg",
          background: "//cdn.jwelford.co.uk/images/cover.jpg"
        }
      }),
      _vm._v(" "),
      _c("about-summary", { attrs: { title: "Summary" } }, [
        _vm._v("\n        " + _vm._s(_vm.lang.get("summary")) + "\n    ")
      ]),
      _vm._v(" "),
      _c(
        "about-languages",
        { attrs: { "show-title": "" } },
        [
          _c("about-language", { attrs: { language: "HTML(5)", years: "6" } }, [
            _vm._v(
              "\n            " +
                _vm._s(_vm.lang.get("languages.html")) +
                "\n        "
            )
          ]),
          _vm._v(" "),
          _c("about-language", { attrs: { language: "PHP", years: "5" } }, [
            _vm._v(
              "\n            " +
                _vm._s(_vm.lang.get("languages.php")) +
                "\n        "
            )
          ]),
          _vm._v(" "),
          _c(
            "about-language",
            { attrs: { language: "Javascript", years: "6" } },
            [
              _vm._v(
                "\n            " +
                  _vm._s(_vm.lang.get("languages.javascript")) +
                  "\n        "
              )
            ]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "about-languages",
        [
          _c("about-language", { attrs: { language: "CSS", years: "6" } }, [
            _vm._v(
              "\n            " +
                _vm._s(_vm.lang.get("languages.css")) +
                "\n        "
            )
          ]),
          _vm._v(" "),
          _c("about-language", { attrs: { language: "jQuery", years: "5" } }, [
            _vm._v(
              "\n            " +
                _vm._s(_vm.lang.get("languages.jquery")) +
                "\n        "
            )
          ]),
          _vm._v(" "),
          _c(
            "about-language",
            { attrs: { language: "Angular(2)", years: "2" } },
            [
              _vm._v(
                "\n            " +
                  _vm._s(_vm.lang.get("languages.angular")) +
                  "\n        "
              )
            ]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "about-languages",
        [
          _c("about-language", { attrs: { language: "NodeJS", years: "3" } }, [
            _vm._v(
              "\n            " +
                _vm._s(_vm.lang.get("languages.nodejs")) +
                "\n        "
            )
          ]),
          _vm._v(" "),
          _c(
            "about-language",
            { attrs: { language: "Debian / Ubuntu", years: "3" } },
            [
              _vm._v(
                "\n            " +
                  _vm._s(_vm.lang.get("languages.debian")) +
                  "\n        "
              )
            ]
          ),
          _vm._v(" "),
          _c("about-language", { attrs: { language: "Laravel", years: "3" } }, [
            _vm._v(
              "\n            " +
                _vm._s(_vm.lang.get("languages.laravel")) +
                "\n        "
            )
          ])
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "experience-set",
        [
          _c(
            "experience",
            {
              attrs: {
                from: "Mar 2018",
                to: "Present",
                role: "Web Developer",
                location: "RightMessage—Remote",
                link: "https://rightmessage.com"
              }
            },
            [
              _vm._v(
                "\n            " +
                  _vm._s(_vm.lang.get("experience.rm")) +
                  "\n            "
              ),
              _c("hr")
            ]
          ),
          _vm._v(" "),
          _c(
            "experience",
            {
              attrs: {
                from: "Feb 2018",
                to: "Mar 2018",
                role: "PHP Developer",
                location: "Netsells—York",
                link: "https://netsells.co.uk"
              }
            },
            [
              _vm._v(
                "\n            " +
                  _vm._s(_vm.lang.get("experience.netsells")) +
                  "\n            "
              ),
              _c("hr")
            ]
          ),
          _vm._v(" "),
          _c(
            "experience",
            {
              attrs: {
                from: "Oct 2017",
                to: "Feb 2018",
                role: "Web Developer",
                location: "VIA Creative—Middlesbrough",
                link: "https://viacreative.co.uk"
              }
            },
            [
              _vm._v(
                "\n            " +
                  _vm._s(_vm.lang.get("experience.via")) +
                  "\n            "
              ),
              _c("hr")
            ]
          ),
          _vm._v(" "),
          _c(
            "experience",
            {
              attrs: {
                from: "Mar 2017",
                to: "Jul 2017",
                role: "PHP Developer",
                location: "Leadbyte—Middlesbrough",
                link: "https://leadbyte.co.uk"
              }
            },
            [
              _vm._v(
                "\n            " +
                  _vm._s(_vm.lang.get("experiences.leadbyte")) +
                  "\n            "
              ),
              _c("hr")
            ]
          ),
          _vm._v(" "),
          _c(
            "experience",
            {
              attrs: {
                from: "Aug 2016",
                to: "Feb 2017",
                role: "PHP Developer",
                location: "Better Brand Agency—Middlesbrough",
                link: "https://www.betterbrandagency.com/"
              }
            },
            [
              _vm._v(
                "\n            " +
                  _vm._s(_vm.lang.get("experiences.better")) +
                  "\n            "
              ),
              _c("hr")
            ]
          ),
          _vm._v(" "),
          _c(
            "experience",
            {
              attrs: {
                from: "Sept 2013",
                to: "June 2016",
                role: "Web Developer",
                location: "Gbiz IT Ltd—Marske-By-The-Sea",
                link: "https://gbizit.co.uk"
              }
            },
            [
              _vm._v(
                "\n            " +
                  _vm._s(_vm.lang.get("experiences.gbizit")) +
                  "\n        "
              )
            ]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("education-set", [_c("education")], 1),
      _vm._v(" "),
      _c("div", { staticClass: "row", attrs: { id: "interests" } }, [
        _c("a", { attrs: { name: "interests" } }),
        _vm._v(" "),
        _c("div", { staticClass: "col-md-12" }, [
          _c("h2", { staticClass: "noselect" }, [
            _vm._v(_vm._s(_vm.lang.get("interests.title")) + " "),
            _vm._m(0)
          ]),
          _vm._v(" "),
          _c("p", { staticStyle: { "text-align": "justify" } }, [
            _vm._v(_vm._s(_vm.lang.get("interests")))
          ])
        ])
      ])
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "a",
      { staticClass: "part-link", attrs: { href: "#interests" } },
      [_c("i", { staticClass: "glyphicon glyphicon-link" })]
    )
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-49c1ab4a", module.exports)
  }
}

/***/ })

});