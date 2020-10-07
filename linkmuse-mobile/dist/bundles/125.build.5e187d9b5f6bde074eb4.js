webpackJsonp([125],{

/***/ 1281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Create_vue__ = __webpack_require__(1633);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0502471f_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Create_vue__ = __webpack_require__(1971);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1969)
}
var normalizeComponent = __webpack_require__(2)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-0502471f"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Create_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0502471f_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Create_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/views/Board/Create.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0502471f", Component.options)
  } else {
    hotAPI.reload("data-v-0502471f", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 1512:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modules_Board_Enums_BoardType__ = __webpack_require__(154);


/* harmony default export */ __webpack_exports__["a"] = ({
  computed: {
    boardTypes: function boardTypes() {
      return [{ id: __WEBPACK_IMPORTED_MODULE_0__modules_Board_Enums_BoardType__["a" /* CASTING */], text: 'Кастинги' }, { id: __WEBPACK_IMPORTED_MODULE_0__modules_Board_Enums_BoardType__["b" /* LOCATION */], text: 'Локации' }];
    }
  },
  methods: {
    _handleInputBoardType: function _handleInputBoardType(type) {
      if (type === __WEBPACK_IMPORTED_MODULE_0__modules_Board_Enums_BoardType__["a" /* CASTING */]) {
        // this.$loading.show({ loader: 'dots', color: '#0063da' })
        this.$router.push({ name: 'board.castings.create' });
      }

      if (type === __WEBPACK_IMPORTED_MODULE_0__modules_Board_Enums_BoardType__["b" /* LOCATION */]) {
        // this.$loading.show({ loader: 'dots', color: '#0063da' })
        this.$router.push({ name: 'board.locations.create' });
      }
    }
  }
});

/***/ }),

/***/ 1633:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modules_Board_mixins_form_js__ = __webpack_require__(1512);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  mixins: [__WEBPACK_IMPORTED_MODULE_0__modules_Board_mixins_form_js__["a" /* default */]],
  metaInfo: {
    title: 'Создание объявления'
  },
  data: function data() {
    return {
      edit: false,
      sources: {},
      fields: {
        categoryBoard: null,
        description: null,
        countryId: null,
        cityId: null
      }
    };
  },

  computed: {
    title: function title() {
      return 'Новое объявление';
    },
    placeholderDescription: function placeholderDescription() {
      return 'Расскажите в подробностях об объявлении. Опишите необходимые параметры, возможности и время работы\n\n' + 'Информация из описания должна соответствовать всем заполненным полям\n\n' + 'В описании запрещено указывать контактные данные и ссылки на другие ресурсы\n\n ';
    }
  },
  methods: {
    _handleClickPreviousPage: function _handleClickPreviousPage() {
      this._handlePreviousPage();
    },
    _handlePreviousPage: function _handlePreviousPage() {
      if (window.history.length > 2) {
        this.$router.go(-1);
      } else this.$router.push({ name: 'board.castings.index' });
    }
  }
});

/***/ }),

/***/ 1969:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1970);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("645b2512", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js?sourceMap!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-0502471f\",\"scoped\":true,\"hasInlineConfig\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Create.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js?sourceMap!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-0502471f\",\"scoped\":true,\"hasInlineConfig\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Create.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1970:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(true);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"Create.vue","sourceRoot":""}]);

// exports


/***/ }),

/***/ 1971:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "page page_declaration" }, [
    _c("div", { staticClass: "form form_declaration" }, [
      _c("div", { staticClass: "form__header form__header_declaration" }, [
        _c("div", { staticClass: "form__title form__title_declaration" }, [
          _vm._v(_vm._s(_vm.title))
        ]),
        _vm._v(" "),
        _c(
          "button",
          {
            staticClass: "form__button_close_declaration",
            on: { click: _vm._handleClickPreviousPage }
          },
          [
            _c("svg", { staticClass: "btn__icon icon_fill_white" }, [
              _c("use", {
                attrs: {
                  "xlink:href": "/dist/img/icons/svg/sprite.svg#lm-close"
                }
              })
            ])
          ]
        )
      ]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "section form__section form__section_declaration" },
        [
          _c(
            "div",
            { staticClass: "form__group form__group_declaration" },
            [
              _vm._m(0),
              _vm._v(" "),
              _c("lm-select", {
                attrs: {
                  label: "",
                  "data-vv-as": "Тип объявления",
                  "input-required": false,
                  "input-id": "form__select_declaration_type",
                  "input-name": "categoryBoard",
                  placeholder: "Не выбрано",
                  placeholderDisabled: true,
                  placeholderHidden: true,
                  disabled: _vm.edit === true,
                  options: _vm.boardTypes
                },
                on: { input: _vm._handleInputBoardType },
                model: {
                  value: _vm.fields["categoryBoard"],
                  callback: function($$v) {
                    _vm.$set(_vm.fields, "categoryBoard", $$v)
                  },
                  expression: "fields['categoryBoard']"
                }
              })
            ],
            1
          )
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          class: [
            "section",
            "form__section form__section_declaration",
            { form__section_declaration_disabled: true }
          ]
        },
        [
          _c(
            "div",
            { staticClass: "form__group form__group_declaration" },
            [
              _c(
                "label",
                {
                  staticClass:
                    "label textarea__label textarea__label_declaration",
                  attrs: { for: "form__textarea_casting-description" }
                },
                [_vm._v("\n          Описание\n        ")]
              ),
              _vm._v(" "),
              _c("textarea", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.fields.description,
                    expression: "fields.description"
                  },
                  {
                    name: "validate",
                    rawName: "v-validate",
                    value: "min:3|max:65000",
                    expression: "'min:3|max:65000'"
                  }
                ],
                class: [
                  { error: _vm.verrors.has("description") },
                  "textarea",
                  "form__textarea",
                  "form__textarea_declaration"
                ],
                attrs: {
                  id: "form__textarea_casting-description",
                  rows: "13",
                  name: "description",
                  "data-vv-as": "Описание",
                  disabled: true,
                  placeholder: _vm.placeholderDescription
                },
                domProps: { value: _vm.fields.description },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.fields, "description", $event.target.value)
                  }
                }
              }),
              _vm._v(" "),
              _vm.verrors.has("description")
                ? [
                    _c(
                      "div",
                      {
                        staticClass:
                          "form__notification form__notification_declaration form__notification_declaration_required"
                      },
                      [_vm._v(_vm._s(_vm.verrors.first("description")))]
                    )
                  ]
                : _vm._e()
            ],
            2
          )
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          class: [
            "section form__section",
            "form__section_declaration",
            { form__section_declaration_disabled: true }
          ]
        },
        [
          _c(
            "div",
            { staticClass: "form__group form__group_declaration" },
            [
              _vm._m(1),
              _vm._v(" "),
              _c("lm-select", {
                class: [{ error: _vm.verrors.has("countryId") }],
                attrs: {
                  "data-vv-name": "countryId",
                  "data-vv-as": "Страна",
                  "input-required": false,
                  "input-id": "form__select_declaration_coutry",
                  "input-name": "country",
                  placeholder: "Страна",
                  placeholderDisabled: true,
                  placeholderHidden: true,
                  label: "",
                  disabled: true,
                  options: _vm.sources["countries"]
                },
                model: {
                  value: _vm.fields.countryId,
                  callback: function($$v) {
                    _vm.$set(_vm.fields, "countryId", $$v)
                  },
                  expression: "fields.countryId"
                }
              }),
              _vm._v(" "),
              _vm.verrors.has("countryId")
                ? [
                    _c(
                      "div",
                      {
                        staticClass:
                          "form__notification form__notification_declaration form__notification_declaration_required"
                      },
                      [_vm._v(_vm._s(_vm.verrors.first("countryId")))]
                    )
                  ]
                : _vm._e()
            ],
            2
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "form__group form__group_declaration" },
            [
              _vm._m(2),
              _vm._v(" "),
              _c("lm-select", {
                class: [{ error: _vm.verrors.has("cityId") }],
                attrs: {
                  "data-vv-name": "cityId",
                  "data-vv-as": "Город",
                  "input-required": false,
                  "input-id": "form__select_declaration_city",
                  "input-name": "city",
                  placeholder: "Город",
                  placeholderDisabled: true,
                  placeholderHidden: true,
                  label: "",
                  disabled: true,
                  options: _vm.sources["cities"]
                },
                model: {
                  value: _vm.fields.cityId,
                  callback: function($$v) {
                    _vm.$set(_vm.fields, "cityId", $$v)
                  },
                  expression: "fields.cityId"
                }
              }),
              _vm._v(" "),
              _vm.verrors.has("cityId")
                ? [
                    _c(
                      "div",
                      {
                        staticClass:
                          "form__notification form__notification_declaration form__notification_declaration_required"
                      },
                      [_vm._v(_vm._s(_vm.verrors.first("cityId")))]
                    )
                  ]
                : _vm._e()
            ],
            2
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "form__group form__group_declaration" },
            [
              _c(
                "label",
                {
                  staticClass: "label input__label",
                  attrs: { for: "form__input_declaration_address" }
                },
                [_vm._v("\n          Адрес\n        ")]
              ),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "validate",
                    rawName: "v-validate",
                    value: "min:3|max:255",
                    expression: "'min:3|max:255'"
                  },
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.fields["address"],
                    expression: "fields['address']"
                  }
                ],
                ref: "address",
                class: [
                  { error: _vm.verrors.has("address") },
                  "input",
                  "form__input",
                  "form__input_declaration"
                ],
                attrs: {
                  type: "text",
                  placeholder: "ул. Большая садовая, д. 1",
                  id: "form__input_declaration_address",
                  "data-vv-as": "Адрес",
                  name: "address",
                  disabled: true
                },
                domProps: { value: _vm.fields["address"] },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.fields, "address", $event.target.value)
                  }
                }
              }),
              _vm._v(" "),
              _vm.verrors.has("address")
                ? [
                    _c(
                      "div",
                      {
                        staticClass:
                          "form__notification form__notification_declaration form__notification_declaration_required"
                      },
                      [_vm._v(_vm._s(_vm.verrors.first("address")))]
                    )
                  ]
                : _vm._e()
            ],
            2
          )
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          class: [
            "section",
            "form__section form__section_declaration",
            { form__section_declaration_disabled: true }
          ]
        },
        [
          _c(
            "div",
            { staticClass: "form__group form__group_declaration" },
            [
              _c(
                "label",
                {
                  staticClass: "label input__label",
                  attrs: { for: "casting__phone" }
                },
                [_vm._v("\n          Телефон\n        ")]
              ),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.fields.phone,
                    expression: "fields.phone"
                  },
                  {
                    name: "validate",
                    rawName: "v-validate",
                    value: "phone",
                    expression: "'phone'"
                  }
                ],
                class: [
                  { error: _vm.verrors.has("phone") },
                  "input",
                  "form__input",
                  "form__input_declaration"
                ],
                attrs: {
                  type: "tel",
                  id: "casting__phone",
                  name: "phone",
                  autocomplete: "off",
                  placeholder: "+7 900 000 00 00",
                  "data-vv-as": "Телефон",
                  disabled: true
                },
                domProps: { value: _vm.fields.phone },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.fields, "phone", $event.target.value)
                  }
                }
              }),
              _vm._v(" "),
              _vm.verrors.has("phone")
                ? [
                    _c(
                      "div",
                      {
                        staticClass:
                          "form__notification form__notification_declaration form__notification_declaration_required"
                      },
                      [_vm._v(_vm._s(_vm.verrors.first("phone")))]
                    )
                  ]
                : _vm._e()
            ],
            2
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "form__group form__group_declaration" },
            [
              _c(
                "label",
                {
                  staticClass: "label input__label",
                  attrs: { for: "casting__email" }
                },
                [_vm._v("\n          E-mail\n        ")]
              ),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.fields.email,
                    expression: "fields.email"
                  },
                  {
                    name: "validate",
                    rawName: "v-validate",
                    value: "email",
                    expression: "'email'"
                  }
                ],
                class: [
                  { error: _vm.verrors.has("email") },
                  "input",
                  "form__input",
                  "form__input_declaration"
                ],
                attrs: {
                  type: "email",
                  id: "casting__email",
                  name: "email",
                  autocomplete: "off",
                  autocapitalize: "off",
                  placeholder: "pochta@gmaill.com",
                  "data-vv-as": "E-mail",
                  disabled: true
                },
                domProps: { value: _vm.fields.email },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.fields, "email", $event.target.value)
                  }
                }
              }),
              _vm._v(" "),
              _vm.verrors.has("email")
                ? [
                    _c(
                      "div",
                      {
                        staticClass:
                          "form__notification form__notification_declaration form__notification_declaration_required"
                      },
                      [_vm._v(_vm._s(_vm.verrors.first("email")))]
                    )
                  ]
                : _vm._e()
            ],
            2
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "form__group form__group_declaration" },
            [
              _c(
                "label",
                {
                  staticClass: "label input__label",
                  attrs: { for: "casting__other" }
                },
                [_vm._v("\n          Другое\n        ")]
              ),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.fields.other,
                    expression: "fields.other"
                  },
                  {
                    name: "validate",
                    rawName: "v-validate",
                    value: "min:3|max:255",
                    expression: "'min:3|max:255'"
                  }
                ],
                class: [
                  { error: _vm.verrors.has("other") },
                  "input",
                  "form__input",
                  "form__input_declaration"
                ],
                attrs: {
                  type: "text",
                  id: "casting__other",
                  name: "other",
                  autocomplete: "off",
                  autocapitalize: "off",
                  placeholder: "Телефон, почта или соц сеть",
                  "data-vv-as": "Другое",
                  disabled: true
                },
                domProps: { value: _vm.fields.other },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.fields, "other", $event.target.value)
                  }
                }
              }),
              _vm._v(" "),
              _vm.verrors.has("other")
                ? [
                    _c(
                      "div",
                      {
                        staticClass:
                          "form__notification form__notification_declaration form__notification_declaration_required"
                      },
                      [_vm._v(_vm._s(_vm.verrors.first("other")))]
                    )
                  ]
                : _vm._e()
            ],
            2
          )
        ]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "row justify_between mt_4" }, [
        _c(
          "button",
          {
            staticClass: "btn btn_secondary",
            on: { click: _vm._handleClickPreviousPage }
          },
          [_vm._v("отмена")]
        ),
        _vm._v(" "),
        _c(
          "button",
          { staticClass: "btn btn_primary", attrs: { disabled: "" } },
          [_vm._v("опубликовать")]
        )
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "label",
      {
        staticClass: "label input__label",
        attrs: { for: "form__select_declaration_type" }
      },
      [
        _vm._v("\n          Тип объявления\n          "),
        _c("span", { staticClass: "label_declaration_required" }, [_vm._v("•")])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", { staticClass: "label input__label" }, [
      _vm._v("\n          Страна\n          "),
      _c("span", { staticClass: "label_declaration_required" }, [_vm._v("•")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "label",
      {
        staticClass: "label input__label",
        attrs: { for: "form__select_declaration_city" }
      },
      [
        _vm._v("\n          Город\n          "),
        _c("span", { staticClass: "label_declaration_required" }, [_vm._v("•")])
      ]
    )
  }
]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-0502471f", esExports)
  }
}

/***/ })

});
//# sourceMappingURL=125.build.5e187d9b5f6bde074eb4.js.map