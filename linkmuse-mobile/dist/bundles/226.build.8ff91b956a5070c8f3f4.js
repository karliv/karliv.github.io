webpackJsonp([226],{

/***/ 1331:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Register_vue__ = __webpack_require__(1703);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_4beb49ea_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Register_vue__ = __webpack_require__(2172);
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Register_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_4beb49ea_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Register_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/views/Makeup/CertifyingSpecialist/Register.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4beb49ea", Component.options)
  } else {
    hotAPI.reload("data-v-4beb49ea", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 1703:
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    return {
      step: 1,
      modal: false,
      search: false
    };
  },

  methods: {
    nextStep: function nextStep() {
      this.step++;
    }
  }
});

/***/ }),

/***/ 2172:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _vm._m(0),
    _vm._v(" "),
    _vm.step == 1
      ? _c("div", { staticClass: "lm-m-cs-register" }, [
          _vm._m(1),
          _vm._v(" "),
          _c("div", { staticClass: "lm-action-buttons" }, [
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
                staticClass: "lm-primary-button middle",
                on: { click: _vm.nextStep }
              },
              [_vm._v("Продолжить")]
            )
          ])
        ])
      : _vm._e(),
    _vm._v(" "),
    _vm.step == 2
      ? _c("div", { staticClass: "lm-m-cs-register" }, [
          _c("div", { staticClass: "lm-m-cs-register-wrap" }, [
            _c("div", { staticClass: "title" }, [
              _vm._v("Заполните данные о себе")
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "desc" }, [
              _vm._v(
                "Пожалуйста, прикрепите свои работы для оценки качества съёмки. Фотографии будут отображаться в вашем профиле, после одобрения заявки"
              )
            ]),
            _vm._v(" "),
            _vm._m(2),
            _vm._v(" "),
            _c("div", { staticClass: "lm-m-upload-file-wrap" }, [
              _vm._m(3),
              _vm._v(" "),
              _vm._m(4),
              _vm._v(" "),
              _vm._m(5),
              _vm._v(" "),
              _vm._m(6),
              _vm._v(" "),
              _c("div", { staticClass: "lm-m-upload-file-item uploading" }, [
                _c("i", { staticClass: "lm-m-remove" }),
                _vm._v(" "),
                _c("div", { staticClass: "lm-circle-loader" }, [
                  _c(
                    "svg",
                    {
                      staticClass: "lds-ring",
                      staticStyle: { background: "none" },
                      attrs: {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "200px",
                        height: "200px",
                        viewBox: "0 0 100 100",
                        preserveAspectRatio: "xMidYMid"
                      }
                    },
                    [
                      _c("circle", {
                        attrs: {
                          cx: "50",
                          cy: "50",
                          fill: "none",
                          r: "16",
                          stroke: "#000000",
                          "stroke-width": "0"
                        }
                      }),
                      _vm._v(" "),
                      _c(
                        "circle",
                        {
                          attrs: {
                            cx: "50",
                            cy: "50",
                            fill: "none",
                            r: "16",
                            stroke: "#fff",
                            "stroke-width": "4",
                            "stroke-linecap": "round",
                            transform: "rotate(49.5442 50 50)"
                          }
                        },
                        [
                          _c("animateTransform", {
                            attrs: {
                              attributeName: "transform",
                              type: "rotate",
                              calcMode: "linear",
                              values: "0 50 50;180 50 50;720 50 50",
                              keyTimes: "0;0.5;1",
                              dur: "4s",
                              begin: "0s",
                              repeatCount: "indefinite"
                            }
                          }),
                          _vm._v(" "),
                          _c("animate", {
                            attrs: {
                              attributeName: "stroke-dasharray",
                              calcMode: "linear",
                              values: "50",
                              keyTimes: "0;0.5;1",
                              dur: "4",
                              begin: "0s",
                              repeatCount: "indefinite"
                            }
                          })
                        ],
                        1
                      )
                    ]
                  )
                ]),
                _vm._v(" "),
                _c("img", {
                  attrs: {
                    src:
                      "https://i.linkmuse.com/upload/images/background/FF/Xt/FFXtl4bfb30I97luQt2v-211x211.png",
                    alt: ""
                  }
                })
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "lm-action-buttons" }, [
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
                staticClass: "lm-primary-button middle",
                on: { click: _vm.nextStep }
              },
              [_vm._v("Отправить")]
            )
          ])
        ])
      : _vm._e(),
    _vm._v(" "),
    _vm.step == 3
      ? _c("div", { staticClass: "lm-m-cs-paid" }, [_vm._m(7)])
      : _vm._e()
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "lm-m-register-steps" }, [
      _c("div", { staticStyle: { width: "10%" } })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "lm-m-cs-register-wrap" }, [
      _c("div", { staticClass: "title" }, [_vm._v("Заполните данные о себе")]),
      _vm._v(" "),
      _c("div", { staticClass: "desc" }, [
        _vm._v(
          "Чтобы получать деньги за заказы, введите все необходимые данные. Мы не передаём информацию третьим лицам"
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "lm-radio-buttons" }, [
        _c("span", [_vm._v("Вы:")]),
        _vm._v(" "),
        _c("li", [
          _c("input", { attrs: { id: "type-1", type: "radio" } }),
          _vm._v(" "),
          _c("label", { attrs: { for: "type-1" } }, [
            _vm._v("Юридическое лицо")
          ])
        ]),
        _vm._v(" "),
        _c("li", [
          _c("input", { attrs: { id: "type-2", type: "radio" } }),
          _vm._v(" "),
          _c("label", { attrs: { for: "type-2" } }, [_vm._v("ИП")])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "separator" }),
      _vm._v(" "),
      _c("div", { staticClass: "lm-input-wrap" }, [
        _c("label", { attrs: { for: "" } }, [_vm._v("ФИО:")]),
        _vm._v(" "),
        _c("input", {
          staticClass: "lm-input",
          attrs: { type: "text", placeholder: "Иванов Иван Иванович" }
        })
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "lm-input-wrap" }, [
        _c("label", { attrs: { for: "" } }, [_vm._v("Телефон:")]),
        _vm._v(" "),
        _c("input", {
          staticClass: "lm-input error",
          attrs: { type: "text", placeholder: "+7 (000) 000-00-00" }
        }),
        _vm._v(" "),
        _c("span", { staticClass: "lm-input-error" }, [
          _vm._v("введите номер полностью")
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "lm-input-wrap" }, [
        _c("label", { attrs: { for: "" } }, [_vm._v("Название организации:")]),
        _vm._v(" "),
        _c("input", {
          staticClass: "lm-input",
          attrs: { type: "text", placeholder: "ООО Название" }
        })
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "lm-input-wrap" }, [
        _c("label", { attrs: { for: "" } }, [_vm._v("ИНН:")]),
        _vm._v(" "),
        _c("input", {
          staticClass: "lm-input error",
          attrs: { type: "text", placeholder: "0000 0000 0000" }
        }),
        _vm._v(" "),
        _c("span", { staticClass: "lm-input-error" }, [
          _vm._v("введите номер полностью")
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "lm-input-wrap" }, [
        _c("label", { attrs: { for: "" } }, [_vm._v("кпп:")]),
        _vm._v(" "),
        _c("input", {
          staticClass: "lm-input",
          attrs: { type: "text", placeholder: "0000 0000 0" }
        })
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "separator" }),
      _vm._v(" "),
      _c("div", { staticClass: "lm-input-wrap" }, [
        _c("label", { attrs: { for: "" } }, [_vm._v("банк-получатель:")]),
        _vm._v(" "),
        _c("input", {
          staticClass: "lm-input",
          attrs: { type: "text", placeholder: "Сбербанк" }
        })
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "lm-input-wrap" }, [
        _c("label", { attrs: { for: "" } }, [_vm._v("корр-счет:")]),
        _vm._v(" "),
        _c("input", {
          staticClass: "lm-input",
          attrs: { type: "text", placeholder: "0000 0000 0000 0000 0000" }
        })
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "lm-input-wrap" }, [
        _c("label", { attrs: { for: "" } }, [_vm._v("бик:")]),
        _vm._v(" "),
        _c("input", {
          staticClass: "lm-input",
          attrs: { type: "text", placeholder: "0000 0000 0" }
        })
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "separator" }),
      _vm._v(" "),
      _c("div", { staticClass: "lm-input-wrap" }, [
        _c("label", { attrs: { for: "" } }, [_vm._v("юридический адрес:")]),
        _vm._v(" "),
        _c("input", {
          staticClass: "lm-input",
          attrs: { type: "text", placeholder: "Адрес" }
        })
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "lm-input-wrap" }, [
        _c("label", { attrs: { for: "" } }, [_vm._v("фактический адрес:")]),
        _vm._v(" "),
        _c("input", {
          staticClass: "lm-input",
          attrs: { type: "text", placeholder: "Адрес" }
        })
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "lm-m-upload-file-wrap no-upload" }, [
      _c("i"),
      _vm._v(" "),
      _c("span", [_vm._v("Загрузить файлы "), _c("br"), _vm._v(" (max 30)")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "lm-m-upload-file-item" }, [
      _c("i", { staticClass: "lm-m-remove" }),
      _vm._v(" "),
      _c("img", {
        attrs: {
          src:
            "https://i.linkmuse.com/upload/images/background/FF/Xt/FFXtl4bfb30I97luQt2v-211x211.png",
          alt: ""
        }
      }),
      _vm._v(" "),
      _c("div", { staticClass: "lm-m-time" }, [_vm._v("13:32")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "lm-m-upload-file-item" }, [
      _c("i", { staticClass: "lm-m-remove" }),
      _vm._v(" "),
      _c("img", {
        attrs: {
          src:
            "https://i.linkmuse.com/upload/images/background/FF/Xt/FFXtl4bfb30I97luQt2v-211x211.png",
          alt: ""
        }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "lm-m-upload-file-item uploading" }, [
      _c("i", { staticClass: "lm-m-remove" }),
      _vm._v(" "),
      _c("img", {
        attrs: {
          src:
            "https://i.linkmuse.com/upload/images/background/FF/Xt/FFXtl4bfb30I97luQt2v-211x211.png",
          alt: ""
        }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "lm-m-upload-file-item uploading" }, [
      _c("i", { staticClass: "lm-m-remove" }),
      _vm._v(" "),
      _c("i", { staticClass: "lm-error" }),
      _vm._v(" "),
      _c("img", {
        attrs: {
          src:
            "https://i.linkmuse.com/upload/images/background/FF/Xt/FFXtl4bfb30I97luQt2v-211x211.png",
          alt: ""
        }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "lm-m-cs-paid-wrap" }, [
      _c("div", { staticClass: "title" }, [_vm._v("Заявка принята!")]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "desc", staticStyle: { "margin-bottom": "40px" } },
        [_vm._v("Ваша заявка будет рассмотрена в ближайшее время")]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "desc" }, [
        _vm._v("С нами уже 3200 специалистов!")
      ]),
      _vm._v(" "),
      _c(
        "a",
        {
          staticClass: "lm-outline-button middle",
          attrs: { href: "javascript:void(0)" }
        },
        [_vm._v("посмотреть всех")]
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
    require("vue-hot-reload-api")      .rerender("data-v-4beb49ea", esExports)
  }
}

/***/ })

});
//# sourceMappingURL=226.build.8ff91b956a5070c8f3f4.js.map