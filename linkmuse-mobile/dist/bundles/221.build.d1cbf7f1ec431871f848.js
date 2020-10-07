webpackJsonp([221],{

/***/ 1336:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_WaitAfterMeeting_vue__ = __webpack_require__(1708);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_65bef288_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_WaitAfterMeeting_vue__ = __webpack_require__(2177);
var disposed = false
var normalizeComponent = __webpack_require__(2)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_WaitAfterMeeting_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_65bef288_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_WaitAfterMeeting_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/views/Makeup/CertifyingSpecialist/WaitAfterMeeting.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-65bef288", Component.options)
  } else {
    hotAPI.reload("data-v-65bef288", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 1708:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["a"] = ({
  metaInfo: {
    title: 'Ожидайте'
  },
  computed: {},
  data: function data() {
    return {};
  },

  methods: {}
});

/***/ }),

/***/ 2177:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c(
        "div",
        {
          staticClass:
            "lm-m-cs-wait-page lm-m-cs-wait-after-meeting-page lm-m-fullh-page"
        },
        [
          _c("div", { staticClass: "lm-m-cs-wait-page--wrap" }, [
            _c("h3", { staticClass: "title" }, [_vm._v("Ожидайте")]),
            _vm._v(" "),
            _c("div", { staticClass: "desc" }, [
              _c("div", { staticClass: "top" }, [
                _vm._v("Ваша встреча прошла, надеемся, что всё прошло отлично")
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "middle" }),
              _vm._v(" "),
              _c("div", { staticClass: "bottom" }, [
                _vm._v(
                  "Используйте “диспут” при проблемах со специалистом, мы вам поможем"
                )
              ])
            ])
          ]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "lm-action-buttons lm-bottom-actions-buttons" },
            [
              _c(
                "a",
                {
                  staticClass: "lm-link-button",
                  attrs: { href: "javascript:void(0)" }
                },
                [_vm._v("назад")]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "lm-primary-button lm-outline-button red middle"
                },
                [_vm._v("Диспут")]
              )
            ]
          )
        ]
      )
    ])
  }
]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-65bef288", esExports)
  }
}

/***/ })

});
//# sourceMappingURL=221.build.d1cbf7f1ec431871f848.js.map