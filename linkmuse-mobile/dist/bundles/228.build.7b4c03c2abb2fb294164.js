webpackJsonp([228],{

/***/ 1329:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_OpenDispute_vue__ = __webpack_require__(1701);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_ac61113c_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_OpenDispute_vue__ = __webpack_require__(2170);
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_OpenDispute_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_ac61113c_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_OpenDispute_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/views/Makeup/CertifyingSpecialist/OpenDispute.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-ac61113c", Component.options)
  } else {
    hotAPI.reload("data-v-ac61113c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 1701:
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    title: 'Заполните данные о себе'
  },
  computed: {},
  data: function data() {
    return {};
  },

  methods: {}
});

/***/ }),

/***/ 2170:
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
      _c("div", { staticClass: "lm-m-cs-open-dispute lm-m-fullh-page" }, [
        _c("div", { staticClass: "lm-m-cs-open-dispute--wrap" }, [
          _c("div", { staticClass: "title" }, [
            _vm._v("Решили начать диспут?")
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "desc" }, [
            _vm._v(
              "Выберите причину, по которой выбранная услуга вам не понравилась, а также способ решения, который удовлетворил бы вас"
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "lm-radio-buttons" }, [
            _c("span", [_vm._v("Причина диспута:")]),
            _vm._v(" "),
            _c("li", [
              _c("input", { attrs: { id: "reason-1", type: "radio" } }),
              _vm._v(" "),
              _c("label", { attrs: { for: "reason-1" } }, [
                _vm._v("Специалист меня игнорирует")
              ])
            ]),
            _vm._v(" "),
            _c("li", [
              _c("input", { attrs: { id: "reason-2", type: "radio" } }),
              _vm._v(" "),
              _c("label", { attrs: { for: "reason-2" } }, [
                _vm._v("Не устраивает качество работы")
              ])
            ]),
            _vm._v(" "),
            _c("li", [
              _c("input", { attrs: { id: "reason-3", type: "radio" } }),
              _vm._v(" "),
              _c("label", { attrs: { for: "reason-3" } }, [
                _vm._v("Встреча не состоялась")
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "lm-radio-buttons" }, [
            _c("span", [_vm._v("Способ решения:")]),
            _vm._v(" "),
            _c("li", [
              _c("input", { attrs: { id: "decide-1", type: "radio" } }),
              _vm._v(" "),
              _c("label", { attrs: { for: "decide-1" } }, [
                _vm._v("Возвращение средств")
              ])
            ]),
            _vm._v(" "),
            _c("li", [
              _c("input", { attrs: { id: "decide-2", type: "radio" } }),
              _vm._v(" "),
              _c("label", { attrs: { for: "decide-2" } }, [
                _vm._v("Замена специалиста")
              ])
            ]),
            _vm._v(" "),
            _c("li", [
              _c("input", { attrs: { id: "decide-3", type: "radio" } }),
              _vm._v(" "),
              _c("label", { attrs: { for: "decide-3" } }, [
                _vm._v("Повторная верификация")
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "separator" }),
          _vm._v(" "),
          _c("div", { staticClass: "lm-input-wrap" }, [
            _c("label", { attrs: { for: "dispute-comment" } }, [
              _vm._v("Комментарий:")
            ]),
            _vm._v(" "),
            _c("input", {
              staticClass: "lm-input",
              attrs: {
                id: "dispute-comment",
                type: "text",
                placeholder: "Описание ситуации"
              }
            })
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
            _c("button", { staticClass: "lm-primary-button middle" }, [
              _vm._v("Отправить")
            ])
          ]
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
    require("vue-hot-reload-api")      .rerender("data-v-ac61113c", esExports)
  }
}

/***/ })

});
//# sourceMappingURL=228.build.7b4c03c2abb2fb294164.js.map