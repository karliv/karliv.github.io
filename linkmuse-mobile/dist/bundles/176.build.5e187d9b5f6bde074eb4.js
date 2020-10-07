webpackJsonp([176],{

/***/ 1356:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_page_about_us_hr_vue__ = __webpack_require__(1728);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2f4f3fd6_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_page_about_us_hr_vue__ = __webpack_require__(2237);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(2235)
}
var normalizeComponent = __webpack_require__(2)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-2f4f3fd6"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_page_about_us_hr_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2f4f3fd6_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_page_about_us_hr_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/views/Makeup/pages/page/_about-us/page_about-us_hr.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2f4f3fd6", Component.options)
  } else {
    hotAPI.reload("data-v-2f4f3fd6", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 1728:
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
//
//
//
//
//
//
//
//
//
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

/***/ 2235:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(2236);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("202ddfe2", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-2f4f3fd6\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./page_about-us_hr.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-2f4f3fd6\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./page_about-us_hr.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 2236:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(true);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"page_about-us_hr.vue","sourceRoot":""}]);

// exports


/***/ }),

/***/ 2237:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "page page_hr" }, [
    _c("div", { staticClass: "page__content" }, [
      _c("div", { staticClass: "section page__section page__section_hr" }, [
        _c("div", { staticClass: "section__content" }, [
          _c("svg", { staticClass: "icon icon_logo-hr fill_main mb_6" }, [
            _c("use", {
              attrs: {
                "xlink:href": "/dist/img/icons/svg/sprite.svg#logo__label_hr"
              }
            })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "heading heading_h2" }, [
            _vm._v(
              "\n         Влияйте на творческую индустрию вместе с нами\n       "
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "mb_6" }, [
            _vm._v(
              "\n         Мы объединяем творческих профессионалов по всему миру и позволяем быстро и эффективно найти исполнителей\n         и заказчиков внутри индустрии моды, кино, рекламы, телевидения и шоу-бизнеса\n       "
            )
          ]),
          _vm._v(" "),
          _c("button", { staticClass: "btn btn_primary" }, [
            _vm._v("смотреть вакансии")
          ])
        ])
      ]),
      _vm._v(" "),
      _vm._m(0),
      _vm._v(" "),
      _vm._m(1),
      _vm._v(" "),
      _vm._m(2),
      _vm._v(" "),
      _c("div", {
        staticClass:
          "section page__section page__section_hr page__section_hr_cover"
      }),
      _vm._v(" "),
      _vm._m(3)
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "section page__section page__section_hr" },
      [
        _c("div", { staticClass: "section__content" }, [
          _c("div", { staticClass: "column" }, [
            _c("img", {
              staticClass: "mb_6 img img_hr border-radius_16px",
              staticStyle: { width: "100%" },
              attrs: {
                src: "/dist/img/about-us/our-team-1.png",
                alt: "team image"
              }
            }),
            _vm._v(" "),
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "column" }, [
                _c("div", { staticClass: "heading heading_h3" }, [
                  _vm._v("Что мы делаем?")
                ]),
                _vm._v(" "),
                _c("div", [
                  _vm._v(
                    "\n               Мы развиваем единую бесплатную площадку с неограниченными возможностями для самореализации,\n               на которую можно зайти с любого устройства. Так с помощью нашего сервиса фотографы находят\n               моделей, а кастинг-директора - актеров\n             "
                  )
                ])
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "column mt_6" }, [
            _c("img", {
              staticClass: "mb_6 img img_hr border-radius_16px",
              staticStyle: { width: "100%" },
              attrs: {
                src: "/dist/img/about-us/our-team-2.png",
                alt: "team image"
              }
            }),
            _vm._v(" "),
            _c("div", { staticClass: "row justify_center w_100" }, [
              _c("div", { staticClass: "column" }, [
                _c("div", { staticClass: "heading heading_h3" }, [
                  _vm._v("А что дальше?")
                ]),
                _vm._v(" "),
                _c("div", [
                  _vm._v(
                    "\n               В ближайшем будущем сетевые сообщества будут оказывать огромное влияние на индустрию\n               развлечений. Мы создаем будущее, в котором цифровые технологии позволяют оптимизировать\n               процесс ведения дел в медиа индустрии.\n             "
                  )
                ])
              ])
            ])
          ])
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "section page__section page__section_hr" },
      [
        _c("div", { staticClass: "section__content" }, [
          _c("div", { staticClass: "heading heading_h3" }, [
            _vm._v("Наши основные ценности")
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "list list_values" }, [
            _c("div", { staticClass: "list__item" }, [
              _c("div", { staticClass: "heading heading_h5" }, [
                _vm._v("Self-confidence")
              ]),
              _vm._v(" "),
              _c("div", [
                _vm._v("Вера размером с горчичное зерно способна двигать горы")
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "list__item" }, [
              _c("div", { staticClass: "heading heading_h5" }, [
                _vm._v("Motivation")
              ]),
              _vm._v(" "),
              _c("div", [
                _vm._v("Истинным стимулом жизни является завтрашняя радость")
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "list__item" }, [
              _c("div", { staticClass: "heading heading_h5" }, [
                _vm._v("Recognition & Success")
              ]),
              _vm._v(" "),
              _c("div", [
                _vm._v("Выбирая цель, целимся выше, не боясь попасть в звёзды")
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "list__item" }, [
              _c("div", { staticClass: "heading heading_h5" }, [
                _vm._v("Partnership & Mutual Support")
              ]),
              _vm._v(" "),
              _c("div", [
                _vm._v("Никто из нас так не силен, как все мы вместе")
              ])
            ])
          ])
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "section page__section page__section_hr" },
      [
        _c("div", { staticClass: "section__content" }, [
          _c("div", { staticClass: "heading heading_h3" }, [
            _vm._v("Наша "),
            _c("span", { staticClass: "color_main" }, [_vm._v("#ДримТим")])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "mb_3" }, [
            _vm._v(
              "У нас работает небольшой, но очень дружный и творческий коллектив."
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "mb_6" }, [
            _vm._v(
              "Каждый сотрудник обладает не только\n         высоким уровнем профессиональных знаний и умений в своей области, но и умеет креативно мыслить"
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "list list_features" }, [
            _c("div", { staticClass: "list__item" }, [
              _c("div", { staticClass: "heading heading_h5" }, [
                _vm._v("Мы умеем отдыхать")
              ]),
              _vm._v(" "),
              _c("div", [
                _vm._v(
                  "\n               Сотрудники любят участвовать в корпоративных мероприятиях, внутри офиса и за его пределами, от\n               настольных игр с пиццей до яхтинга и пикников\n             "
                )
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "list__item" }, [
              _c("div", { staticClass: "heading heading_h5" }, [
                _vm._v("Мы любим учиться")
              ]),
              _vm._v(" "),
              _c("div", [
                _vm._v(
                  "\n               Все работники периодически посещают тренинги, курсы, семинары, призванные повысить их профессиональную\n               квалификацию\n             "
                )
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "list__item" }, [
              _c("div", { staticClass: "heading heading_h5" }, [
                _vm._v("Мы дружны")
              ]),
              _vm._v(" "),
              _c("div", [
                _vm._v(
                  "\n               Во многом успеху компании способствует неформальная обстановка в офисе, который расположен в центре\n               Москвы на станции метро Маяковская. Мы регулярно отмечаем дни рождения, памятные события и активно\n               общаемся вне офиса\n             "
                )
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "list__item" }, [
              _c("div", { staticClass: "heading heading_h5" }, [
                _vm._v("Мы открыты новым лицам")
              ]),
              _vm._v(" "),
              _c("div", [
                _vm._v(
                  "\n               Если вы чувствуете в себе силы, уверенность и потенциал реализовать себя в области frontend, backend\n               разработки, продуктового дизайна, маркетинга и киноиндустрии, то приглашаем вас к сотрудничеству\n             "
                )
              ])
            ])
          ])
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass:
          "section page__section page__section_hr page__section_hr_vacancy"
      },
      [
        _c("div", { staticClass: "section__content" }, [
          _c("div", { staticClass: "heading heading_h1" }, [
            _vm._v("Вакансии")
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "column mb_6" }, [
            _c("div", { staticClass: "heading heading_h3 mb_6 color_gray-2" }, [
              _vm._v("Продажи")
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "card card_vacancy" }, [
              _c(
                "a",
                {
                  staticClass: "card__section card__section_vacancy",
                  attrs: { href: "#" }
                },
                [
                  _c("div", { staticClass: "heading heading_h5" }, [
                    _vm._v("Менеджер по продажам")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "fw_600" }, [_vm._v("В офис")])
                ]
              ),
              _vm._v(" "),
              _c(
                "a",
                {
                  staticClass: "card__section card__section_vacancy",
                  attrs: { href: "#" }
                },
                [
                  _c("div", { staticClass: "heading heading_h5" }, [
                    _vm._v("Менеджер по продажам")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "fw_600" }, [_vm._v("Удаленно")])
                ]
              )
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "column" }, [
            _c("div", { staticClass: "heading heading_h3 mb_6 color_gray-2" }, [
              _vm._v("Разработка")
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "card card_vacancy" }, [
              _c(
                "a",
                {
                  staticClass: "card__section card__section_vacancy",
                  attrs: { href: "#" }
                },
                [
                  _c("div", { staticClass: "heading heading_h5" }, [
                    _vm._v("Senior Frontend Engineer")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "fw_600" }, [_vm._v("В офис")])
                ]
              ),
              _vm._v(" "),
              _c(
                "a",
                {
                  staticClass: "card__section card__section_vacancy",
                  attrs: { href: "#" }
                },
                [
                  _c("div", { staticClass: "heading heading_h5" }, [
                    _vm._v("Support Lead")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "fw_600" }, [_vm._v("Удаленно")])
                ]
              )
            ])
          ])
        ])
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
    require("vue-hot-reload-api")      .rerender("data-v-2f4f3fd6", esExports)
  }
}

/***/ })

});
//# sourceMappingURL=176.build.5e187d9b5f6bde074eb4.js.map