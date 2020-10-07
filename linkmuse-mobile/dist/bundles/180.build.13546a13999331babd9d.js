webpackJsonp([180],{

/***/ 1352:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_castings_invitation_customer_vue__ = __webpack_require__(1724);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_6e49a415_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_castings_invitation_customer_vue__ = __webpack_require__(2225);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(2223)
}
var normalizeComponent = __webpack_require__(2)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-6e49a415"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_castings_invitation_customer_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_6e49a415_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_castings_invitation_customer_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/views/Makeup/common/castings/_invitation/_customer/castings_invitation_customer.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6e49a415", Component.options)
  } else {
    hotAPI.reload("data-v-6e49a415", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 1724:
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

/* harmony default export */ __webpack_exports__["a"] = ({});

/***/ }),

/***/ 2223:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(2224);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("36e69a32", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6e49a415\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./castings_invitation_customer.vue", function() {
     var newContent = require("!!../../../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6e49a415\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./castings_invitation_customer.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 2224:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(true);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"castings_invitation_customer.vue","sourceRoot":""}]);

// exports


/***/ }),

/***/ 2225:
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
    return _c("div", { staticClass: "invitations invitations_customer" }, [
      _c(
        "div",
        { staticClass: "card card_invitation card_invitation_customer" },
        [
          _c(
            "div",
            {
              staticClass:
                "card__header card__header_invitation card__header_invitation_customer"
            },
            [
              _c(
                "span",
                {
                  staticClass:
                    "card__status card__status_invitation card__status_invitation_customer card__status_invitation_customer_viewed"
                },
                [_vm._v("Просмотрен")]
              )
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass:
                "card__body card__body_invitation card__body_invitation_customer"
            },
            [
              _c(
                "div",
                {
                  staticClass:
                    "card__profile card__profile_contractor  card__profile_contractor_invitation"
                },
                [
                  _c(
                    "a",
                    {
                      staticClass:
                        "card__link card__link_profile card__link_profile_contractor card__link_profile_contractor_invitation",
                      attrs: { href: "#" }
                    },
                    [
                      _c("div", {
                        staticClass:
                          "card__img card__img_avatar card__img_avatar_contractor card__img_avatar_contractor_invitation"
                      }),
                      _vm._v(" "),
                      _c(
                        "span",
                        {
                          staticClass:
                            "card__name card__name_contractor card__name_contractor_invitation"
                        },
                        [_vm._v("Артемий Королев")]
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "card__portfolio card__portfolio_contractor card__portfolio_contractor_invitation"
                    },
                    [
                      _c(
                        "div",
                        {
                          staticClass:
                            "gallery card__gallery card__gallery_portfolio card__gallery_portfolio_cotractor card__gallery_portfolio_cotractor_invitation"
                        },
                        [
                          _c("div", {
                            staticClass:
                              "gallery__img gallery__img_portfolio gallery__img_portfolio_contractor gallery__img_portfolio_contractor_invitation"
                          }),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass:
                                "gallery__bullets gallery__bullets_portfolio gallery__bullets_portfolio_contractor gallery__bullets_portfolio_contractor_invitation"
                            },
                            [
                              _c("span", {
                                staticClass:
                                  "gallery__bullet gallery__bullet_portfolio gallery__bullet_portfolio_contractor gallery__bullet_portfolio_contractor_invitation"
                              }),
                              _vm._v(" "),
                              _c("span", {
                                staticClass:
                                  "gallery__bullet gallery__bullet_portfolio gallery__bullet_portfolio_contractor gallery__bullet_portfolio_contractor_invitation"
                              }),
                              _vm._v(" "),
                              _c("span", {
                                staticClass:
                                  "gallery__bullet gallery__bullet_portfolio gallery__bullet_portfolio_contractor gallery__bullet_portfolio_contractor_invitation"
                              })
                            ]
                          )
                        ]
                      )
                    ]
                  )
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass:
                    "card__message card__message_invitation card__message_invitation_customer"
                },
                [_vm._v("Приглашаем вас на наш кастинг")]
              )
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass:
                "card__footer card__footer_invitation card__footer_invitation_customer"
            },
            [
              _c(
                "div",
                { staticClass: "card__buttons card__buttons_invitation" },
                [
                  _c(
                    "button",
                    {
                      staticClass:
                        "button card__button card__button_invitation card__button_invitation_cancel"
                    },
                    [_vm._v("Отменить")]
                  ),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass:
                        "button card__button card__button_invitation card__button_invitation_chat"
                    },
                    [_vm._v("Написать")]
                  )
                ]
              )
            ]
          )
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "card card_invitation card_invitation_customer" },
        [
          _c(
            "div",
            {
              staticClass:
                "card__header card__header_invitation card__header_invitation_customer"
            },
            [
              _c(
                "span",
                {
                  staticClass:
                    "card__status card__status_invitation card__status_invitation_customer card__status_invitation_customer_not-viewed"
                },
                [_vm._v("Не просмотрен")]
              )
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass:
                "card__body card__body_invitation card__body_invitation_customer"
            },
            [
              _c(
                "div",
                {
                  staticClass:
                    "card__profile card__profile_contractor  card__profile_contractor_invitation"
                },
                [
                  _c(
                    "a",
                    {
                      staticClass:
                        "card__link card__link_profile card__link_profile_contractor card__link_profile_contractor_invitation",
                      attrs: { href: "#" }
                    },
                    [
                      _c("div", {
                        staticClass:
                          "card__img card__img_avatar card__img_avatar_contractor card__img_avatar_contractor_invitation"
                      }),
                      _vm._v(" "),
                      _c(
                        "span",
                        {
                          staticClass:
                            "card__name card__name_contractor card__name_contractor_invitation"
                        },
                        [_vm._v("Виталий Героев")]
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "card__portfolio card__portfolio_contractor card__portfolio_contractor_invitation"
                    },
                    [
                      _c(
                        "div",
                        {
                          staticClass:
                            "gallery card__gallery card__gallery_portfolio card__gallery_portfolio_cotractor card__gallery_portfolio_cotractor_invitation"
                        },
                        [
                          _c("div", {
                            staticClass:
                              "gallery__img gallery__img_portfolio gallery__img_portfolio_contractor gallery__img_portfolio_contractor_invitation"
                          }),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass:
                                "gallery__bullets gallery__bullets_portfolio gallery__bullets_portfolio_contractor gallery__bullets_portfolio_contractor_invitation"
                            },
                            [
                              _c("span", {
                                staticClass:
                                  "gallery__bullet gallery__bullet_portfolio gallery__bullet_portfolio_contractor gallery__bullet_portfolio_contractor_invitation"
                              }),
                              _vm._v(" "),
                              _c("span", {
                                staticClass:
                                  "gallery__bullet gallery__bullet_portfolio gallery__bullet_portfolio_contractor gallery__bullet_portfolio_contractor_invitation"
                              }),
                              _vm._v(" "),
                              _c("span", {
                                staticClass:
                                  "gallery__bullet gallery__bullet_portfolio gallery__bullet_portfolio_contractor gallery__bullet_portfolio_contractor_invitation"
                              })
                            ]
                          )
                        ]
                      )
                    ]
                  )
                ]
              )
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass:
                "card__footer card__footer_invitation card__footer_invitation_customer"
            },
            [
              _c(
                "div",
                { staticClass: "card__buttons card__buttons_invitation" },
                [
                  _c(
                    "button",
                    {
                      staticClass:
                        "button card__button card__button_invitation card__button_invitation_cancel"
                    },
                    [_vm._v("Отменить")]
                  ),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass:
                        "button card__button card__button_invitation card__button_invitation_chat"
                    },
                    [_vm._v("Написать")]
                  )
                ]
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
    require("vue-hot-reload-api")      .rerender("data-v-6e49a415", esExports)
  }
}

/***/ })

});
//# sourceMappingURL=180.build.13546a13999331babd9d.js.map