webpackJsonp([151],{

/***/ 1381:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_page_profile_archival_profession_vue__ = __webpack_require__(1753);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_01cbaed3_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_page_profile_archival_profession_vue__ = __webpack_require__(2312);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(2310)
}
var normalizeComponent = __webpack_require__(2)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-01cbaed3"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_page_profile_archival_profession_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_01cbaed3_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_page_profile_archival_profession_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/views/Makeup/pages/page/_profile/page_profile_archival_profession.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-01cbaed3", Component.options)
  } else {
    hotAPI.reload("data-v-01cbaed3", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 1753:
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({});

/***/ }),

/***/ 2310:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(2311);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("ad3a8e04", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-01cbaed3\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./page_profile_archival_profession.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-01cbaed3\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./page_profile_archival_profession.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 2311:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(true);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"page_profile_archival_profession.vue","sourceRoot":""}]);

// exports


/***/ }),

/***/ 2312:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "lm-m-div-container" }, [
    _c("div", { staticClass: "page lm-m-page-profile" }, [
      _c(
        "div",
        {
          staticClass:
            "page__header page__header_declaration page__header_declaration_casting w_100 max-w_564px"
        },
        [
          _c(
            "div",
            {
              staticClass: "block block_declaration block_declaration_casting"
            },
            [
              _c("div", { staticClass: "row row_justify_between" }, [
                _c("button", { staticClass: "btn btn_rounded btn_back" }, [
                  _c("svg", { staticClass: "icon icon_back" }, [
                    _c("use", {
                      attrs: {
                        "xlink:href":
                          "/dist/img/icons/_declaration/sprite.svg#icon_back"
                      }
                    })
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c(
                    "a",
                    {
                      staticClass: "btn btn_rounded btn_edit",
                      attrs: { href: "#" }
                    },
                    [
                      _c("svg", { staticClass: "icon icon_edit" }, [
                        _c("use", {
                          attrs: {
                            "xlink:href":
                              "/dist/img/icons/_declaration/sprite.svg#icon_edit"
                          }
                        })
                      ])
                    ]
                  )
                ])
              ])
            ]
          )
        ]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "lm-m-block-text-archival" }, [
        _vm._v("\n    Снято с публикации\n  ")
      ]),
      _vm._v(" "),
      _vm._m(0),
      _vm._v(" "),
      _vm._m(1)
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "lm-m-wrap-list-profile mb_0" }, [
      _c("div", { staticClass: "lm-m-wrap-content-list-profile pb_56" }, [
        _c("div", { staticClass: "lm-m-name-h4-text-profile" }, [
          _vm._v("\n        21 Июня 2019\n      ")
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "lm-m-wrap-card-profile-published" }, [
          _c("div", { staticClass: "lm-m-wrap-text-card" }, [
            _c("div", { staticClass: "lm-m-name-h1-text-card" }, [
              _vm._v("\n            Евгений Белоусов\n          ")
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "lm-m-name-h3-text-card" }, [
              _vm._v("\n            Санкт-Петербург\n          ")
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "lm-m-name-h3-text-card" }, [
              _vm._v("\n            25 лет\n          ")
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "lm-m-wrap-photo-card" }, [
            _c("img", {
              staticClass: "lm-m-avatar-card-profile",
              attrs: { src: "/dist/img/icons/svg/avatar-profile.svg", alt: "" }
            })
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "lm-m-profile-container mt_24" }, [
          _c("div", { staticClass: "lm-m-block-text-profile" }, [
            _c("div", { staticClass: "lm-m-name-h4-text-profile" }, [
              _vm._v("\n          Профессия\n        ")
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "lm-m-name-h2-text-profile" }, [
              _vm._v("\n          Актер\n        ")
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "lm-m-block-text-profile" }, [
            _c("div", { staticClass: "lm-m-name-h4-text-profile" }, [
              _vm._v("\n          Стоимость работы\n        ")
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "lm-m-name-h2-text-profile" }, [
              _vm._v("\n          От 100 000 ₽ / мес\n        ")
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "lm-m-block-text-profile" }, [
            _c("div", { staticClass: "lm-m-name-h4-text-profile" }, [
              _vm._v("\n          Дополнительно\n        ")
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "lm-m-name-h2-text-profile" }, [
              _vm._v(
                "\n          Готов принять участие в студенческих, короткометражных или некоммерческих проектах\n        "
              )
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "lm-m-profile-container" }, [
          _c("div", { staticClass: "lm-m-block-text-profile" }, [
            _c("div", { staticClass: "lm-m-name-h4-text-profile" }, [
              _vm._v("\n          Игровой возраст\n        ")
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "lm-m-name-h2-text-profile" }, [
              _vm._v("\n          от 18 – до 26 лет\n        ")
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "lm-m-block-text-profile" }, [
            _c("div", { staticClass: "lm-m-name-h4-text-profile" }, [
              _vm._v("\n          Направления\n        ")
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "lm-m-name-h2-text-profile" }, [
              _vm._v("\n          Массовка, Реклама, Выставки\n        ")
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "lm-m-profile-container" }, [
          _c("div", { staticClass: "lm-m-block-text-profile" }, [
            _c("div", { staticClass: "lm-m-section-write" }, [
              _c("div", { staticClass: "lm-m-section-content" }, [
                _c("div", { staticClass: "lm-m-name-h2-text-profile" }, [
                  _vm._v(
                    "\n              Узнайте контакты, используя «Показать контакты»\n            "
                  )
                ]),
                _vm._v(" "),
                _c("button", { staticClass: "btn btn_primary m_t_16" }, [
                  _vm._v("Показать контакты")
                ])
              ])
            ])
          ])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass:
          "page__footer page__footer_declaration page__footer_declaration_casting"
      },
      [
        _c(
          "div",
          {
            staticClass:
              "form__row form__row_buttons form__row_buttons_declaration justify_center"
          },
          [
            _c(
              "button",
              {
                staticClass:
                  "button form__button form__button_publish form__button_publish_declaration w_100 max-w_376px"
              },
              [_vm._v("\n      Опубликовать\n    ")]
            )
          ]
        )
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
    require("vue-hot-reload-api")      .rerender("data-v-01cbaed3", esExports)
  }
}

/***/ })

});
//# sourceMappingURL=151.build.8ff91b956a5070c8f3f4.js.map