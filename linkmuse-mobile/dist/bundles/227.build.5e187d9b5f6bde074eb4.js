webpackJsonp([227],{

/***/ 1330:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Paid_vue__ = __webpack_require__(1702);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_b45f0a98_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Paid_vue__ = __webpack_require__(2171);
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Paid_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_b45f0a98_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Paid_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/views/Makeup/CertifyingSpecialist/Paid.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-b45f0a98", Component.options)
  } else {
    hotAPI.reload("data-v-b45f0a98", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 1702:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__(27);
//
//
//
//
//
//
//
//
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
    title: 'Услуга оплачена/неоплачена'
  },
  computed: {}
});

/***/ }),

/***/ 2171:
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
    return _c("div", { staticClass: "lm-m-cs-paid" }, [
      _c("div", { staticClass: "lm-m-cs-paid-wrap" }, [
        _c("div", { staticClass: "title" }, [_vm._v("Услуга оплачена!")]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "desc", staticStyle: { "margin-bottom": "40px" } },
          [
            _vm._v(
              "Квитанцию об оплате и информацию\n      о событии мы отправили вам на почту"
            )
          ]
        ),
        _vm._v(" "),
        _c("div", { staticClass: "desc" }, [
          _vm._v("Напишите специалисту свои пожелания по дате и времени")
        ]),
        _vm._v(" "),
        _c(
          "a",
          {
            staticClass: "lm-outline-button middle",
            attrs: { href: "javascript:void(0)" }
          },
          [_vm._v("Написать")]
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "lm-m-cs-paid-wrap" }, [
        _c("div", { staticClass: "title" }, [_vm._v("Услуга не оплачена!")]),
        _vm._v(" "),
        _c("div", { staticClass: "desc" }, [
          _vm._v(
            "Произошла ошибка при переводе средств,\n      пожалуйста, повторите попытку"
          )
        ]),
        _vm._v(" "),
        _c(
          "a",
          {
            staticClass: "lm-outline-button middle",
            attrs: { href: "javascript:void(0)" }
          },
          [_vm._v("Повторить")]
        )
      ])
    ])
  }
]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-b45f0a98", esExports)
  }
}

/***/ })

});
//# sourceMappingURL=227.build.5e187d9b5f6bde074eb4.js.map