webpackJsonp([154],{

/***/ 1378:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_page_notifications_vue__ = __webpack_require__(1750);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_4325cec5_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_page_notifications_vue__ = __webpack_require__(2303);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(2301)
}
var normalizeComponent = __webpack_require__(2)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-4325cec5"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_page_notifications_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_4325cec5_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_page_notifications_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/views/Makeup/pages/page/_notifications/page_notifications.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4325cec5", Component.options)
  } else {
    hotAPI.reload("data-v-4325cec5", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 1750:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__(27);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  computed: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["c" /* mapGetters */])({
    count: 'notification/getCountNotificationsOnCatalog',
    loading: 'notification/getNotificationsLoadingOnCatalog'
  }), {
    isEmpty: function isEmpty() {
      return !this.loading && this.count === 0;
    }
  })
});

/***/ }),

/***/ 2301:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(2302);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("1758fb2c", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-4325cec5\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/sass-loader/lib/loader.js?indentedSyntax!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./page_notifications.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-4325cec5\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/sass-loader/lib/loader.js?indentedSyntax!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./page_notifications.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 2302:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(true);
// imports


// module
exports.push([module.i, "\n.lm-m-page .lm-m-page--head[data-v-4325cec5] {\n  border-radius: 4px;\n  margin-bottom: 8px;\n}\n.lm-m-page .lm-m-page--head span[data-v-4325cec5] {\n    font-size: 18px;\n    font-weight: 600;\n    font-style: normal;\n    font-stretch: normal;\n    line-height: 1.33;\n    letter-spacing: 0.25px;\n    color: #282a36;\n}\n", "", {"version":3,"sources":["/home/karliv/work/linkmuse-mobile/src/views/Makeup/pages/page/_notifications/page_notifications.vue"],"names":[],"mappings":";AAAA;EACE,mBAAmB;EACnB,mBAAmB;CAAE;AACrB;IACE,gBAAgB;IAChB,iBAAiB;IACjB,mBAAmB;IACnB,qBAAqB;IACrB,kBAAkB;IAClB,uBAAuB;IACvB,eAAe;CAAE","file":"page_notifications.vue","sourcesContent":[".lm-m-page .lm-m-page--head {\n  border-radius: 4px;\n  margin-bottom: 8px; }\n  .lm-m-page .lm-m-page--head span {\n    font-size: 18px;\n    font-weight: 600;\n    font-style: normal;\n    font-stretch: normal;\n    line-height: 1.33;\n    letter-spacing: 0.25px;\n    color: #282a36; }\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 2303:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "lm-m-v2-notifications lm-m-page" }, [
    _vm._m(0),
    _vm._v(" "),
    _vm.isEmpty
      ? _c("div", { staticClass: "lm-m-v2-notifications-body" }, [_vm._m(1)])
      : _vm._e(),
    _vm._v(" "),
    !_vm.isEmpty
      ? _c("div", { staticClass: "lm-m-v2-notifications-body-isEmpty" }, [
          _vm._v("\n    Новых уведомлений нет\n  ")
        ])
      : _vm._e()
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "lm-m-v2-notifications-head lm-m-page--head" },
      [_c("span", [_vm._v("Уведомления")])]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass: "lm-m-v2-notifications-list",
        attrs: {
          "infinite-scroll-distance": "200",
          "infinite-scroll-disabled": "infiniteDisabled"
        }
      },
      [
        _c("section", { staticClass: "lm-m-v2-notifications-item" }, [
          _c(
            "div",
            { staticClass: "notifications-avatar-wrap btn btn_round" },
            [
              _c("img", { staticClass: "notifications-avatar" }),
              _vm._v(" "),
              _c("i", { staticClass: "notifications-avatar-icon check-circle" })
            ]
          ),
          _vm._v(" "),
          _c("div", { staticClass: "notifications-info-wrap ml_3" }, [
            _c("div", { staticClass: "notifications__text" }, [
              _vm._v("\n            Ваше объявление "),
              _c(
                "a",
                {
                  staticClass: "notifications__link fw_600",
                  attrs: { href: "#" }
                },
                [_vm._v("“Название”")]
              ),
              _vm._v(" опубликовано в ленте\n          ")
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "notifications__date mt_2" }, [
              _vm._v("27 июня 2019")
            ])
          ])
        ]),
        _vm._v(" "),
        _c("section", { staticClass: "lm-m-v2-notifications-item" }, [
          _c(
            "div",
            { staticClass: "notifications-avatar-wrap btn btn_round" },
            [
              _c("img", { staticClass: "notifications-avatar" }),
              _vm._v(" "),
              _c("i", {
                staticClass: "notifications-avatar-icon info btn__alert-2"
              })
            ]
          ),
          _vm._v(" "),
          _c("div", { staticClass: "notifications-info-wrap ml_3" }, [
            _c("div", { staticClass: "notifications__text" }, [
              _vm._v("\n            Ваше объявление "),
              _c(
                "a",
                {
                  staticClass: "notifications__link fw_600",
                  attrs: { href: "#" }
                },
                [_vm._v("“Название”")]
              ),
              _vm._v(" снято с публикации\n          ")
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "notifications__date mt_2" }, [
              _vm._v("27 июня 2019")
            ])
          ])
        ]),
        _vm._v(" "),
        _c("section", { staticClass: "lm-m-v2-notifications-item" }, [
          _c(
            "div",
            { staticClass: "notifications-avatar-wrap btn btn_round" },
            [
              _c("img", { staticClass: "notifications-avatar" }),
              _vm._v(" "),
              _c("i", {
                staticClass: "notifications-avatar-icon info btn__alert-3"
              })
            ]
          ),
          _vm._v(" "),
          _c("div", { staticClass: "notifications-info-wrap ml_3" }, [
            _c("div", { staticClass: "notifications__text" }, [
              _vm._v("\n            Срок публикации вашего объявления "),
              _c(
                "a",
                {
                  staticClass: "notifications__link fw_600",
                  attrs: { href: "#" }
                },
                [_vm._v("“Название”")]
              ),
              _vm._v(" закончится\n            через 3 дня\n          ")
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "notifications__date mt_2" }, [
              _vm._v("27 июня 2019")
            ]),
            _vm._v(" "),
            _c(
              "button",
              { staticClass: "btn btn_primary notifications__btn" },
              [_vm._v("Продлить")]
            )
          ])
        ]),
        _vm._v(" "),
        _c("section", { staticClass: "lm-m-v2-notifications-item" }, [
          _c(
            "div",
            { staticClass: "notifications-avatar-wrap btn btn_round" },
            [
              _c("img", { staticClass: "notifications-avatar" }),
              _vm._v(" "),
              _c("i", { staticClass: "notifications-avatar-icon info" })
            ]
          ),
          _vm._v(" "),
          _c("div", { staticClass: "notifications-info-wrap ml_3" }, [
            _c("div", { staticClass: "notifications__text" }, [
              _vm._v("\n            Получен новый отклик на объявление "),
              _c(
                "a",
                {
                  staticClass: "notifications__link fw_600",
                  attrs: { href: "#" }
                },
                [_vm._v("“Название”")]
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "notifications__date mt_2" }, [
              _vm._v("27 июня 2019")
            ])
          ])
        ]),
        _vm._v(" "),
        _c("section", { staticClass: "lm-m-v2-notifications-item" }, [
          _c(
            "div",
            { staticClass: "notifications-avatar-wrap btn btn_round" },
            [
              _c("img", { staticClass: "notifications-avatar" }),
              _vm._v(" "),
              _c("i", { staticClass: "notifications-avatar-icon check-circle" })
            ]
          ),
          _vm._v(" "),
          _c("div", { staticClass: "notifications-info-wrap ml_3" }, [
            _c("div", { staticClass: "notifications__text" }, [
              _vm._v(
                "\n            Модератор проверил и опубликовал ваше объявление "
              ),
              _c(
                "a",
                {
                  staticClass: "notifications__link fw_600",
                  attrs: { href: "#" }
                },
                [_vm._v("“Название”")]
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "notifications__date mt_2" }, [
              _vm._v("27 июня 2019")
            ])
          ])
        ]),
        _vm._v(" "),
        _c("section", { staticClass: "lm-m-v2-notifications-item" }, [
          _c(
            "div",
            { staticClass: "notifications-avatar-wrap btn btn_round" },
            [
              _c("img", { staticClass: "notifications-avatar" }),
              _vm._v(" "),
              _c("i", {
                staticClass: "notifications-avatar-icon info btn__alert-2"
              })
            ]
          ),
          _vm._v(" "),
          _c("div", { staticClass: "notifications-info-wrap ml_3" }, [
            _c("div", { staticClass: "notifications__text" }, [
              _vm._v("\n            Модератор отклонил ваше объявление "),
              _c(
                "a",
                {
                  staticClass: "notifications__link fw_600",
                  attrs: { href: "#" }
                },
                [_vm._v("“Название”")]
              ),
              _vm._v("\n            по причине: “Причина”\n          ")
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "notifications__date mt_2" }, [
              _vm._v("27 июня 2019")
            ])
          ])
        ]),
        _vm._v(" "),
        _c("section", { staticClass: "lm-m-v2-notifications-item" }, [
          _c(
            "div",
            { staticClass: "notifications-avatar-wrap btn btn_round" },
            [
              _c("img", { staticClass: "notifications-avatar" }),
              _vm._v(" "),
              _c("i", {
                staticClass: "notifications-avatar-icon info btn__alert-2"
              })
            ]
          ),
          _vm._v(" "),
          _c("div", { staticClass: "notifications-info-wrap ml_3" }, [
            _c("div", { staticClass: "notifications__text" }, [
              _vm._v("\n            Модератор удалил ваше объявление "),
              _c(
                "a",
                {
                  staticClass: "notifications__link fw_600",
                  attrs: { href: "#" }
                },
                [_vm._v("“Название”")]
              ),
              _vm._v("\n            по причине: “Причина”\n          ")
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "notifications__date mt_2" }, [
              _vm._v("27 июня 2019")
            ])
          ])
        ]),
        _vm._v(" "),
        _c("section", { staticClass: "lm-m-v2-notifications-item" }, [
          _c(
            "div",
            { staticClass: "notifications-avatar-wrap btn btn_round" },
            [
              _c("img", { staticClass: "notifications-avatar" }),
              _vm._v(" "),
              _c("i", { staticClass: "notifications-avatar-icon eye" })
            ]
          ),
          _vm._v(" "),
          _c("div", { staticClass: "notifications-info-wrap ml_3" }, [
            _c("div", { staticClass: "notifications__text" }, [
              _vm._v("\n            Ваш отклик на объявление "),
              _c(
                "a",
                {
                  staticClass: "notifications__link fw_600",
                  attrs: { href: "#" }
                },
                [_vm._v("“Название”")]
              ),
              _vm._v(" был просмотрен\n          ")
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "notifications__date mt_2" }, [
              _vm._v("27 июня 2019")
            ])
          ])
        ]),
        _vm._v(" "),
        _c("section", { staticClass: "lm-m-v2-notifications-item" }, [
          _c(
            "div",
            { staticClass: "notifications-avatar-wrap btn btn_round" },
            [
              _c("img", { staticClass: "notifications-avatar" }),
              _vm._v(" "),
              _c("i", {
                staticClass: "notifications-avatar-icon info btn__alert-2"
              })
            ]
          ),
          _vm._v(" "),
          _c("div", { staticClass: "notifications-info-wrap ml_3" }, [
            _c("div", { staticClass: "notifications__text" }, [
              _vm._v(
                "\n            Один из ваших откликов больше не актуален, т.к. автор объявления был заблокирован\n          "
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "notifications__date mt_2" }, [
              _vm._v("27 июня 2019")
            ])
          ])
        ]),
        _vm._v(" "),
        _c("section", { staticClass: "lm-m-v2-notifications-item" }, [
          _c(
            "div",
            { staticClass: "notifications-avatar-wrap btn btn_round" },
            [
              _c("img", { staticClass: "notifications-avatar" }),
              _vm._v(" "),
              _c("i", { staticClass: "notifications-avatar-icon eye" })
            ]
          ),
          _vm._v(" "),
          _c("div", { staticClass: "notifications-info-wrap ml_3" }, [
            _c("div", { staticClass: "notifications__text" }, [
              _vm._v(
                "\n            За вчерашний день ваш профиль был просмотрен “кол-во” раз\n          "
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "notifications__date mt_2" }, [
              _vm._v("27 июня 2019")
            ])
          ])
        ]),
        _vm._v(" "),
        _c("section", { staticClass: "lm-m-v2-notifications-item" }, [
          _c(
            "div",
            { staticClass: "notifications-avatar-wrap btn btn_round" },
            [
              _c("img", { staticClass: "notifications-avatar" }),
              _vm._v(" "),
              _c("i", {
                staticClass: "notifications-avatar-icon info btn__alert-2"
              })
            ]
          ),
          _vm._v(" "),
          _c("div", { staticClass: "notifications-info-wrap ml_3" }, [
            _c("div", { staticClass: "notifications__text" }, [
              _vm._v("\n            Ваша заявка на верификацию отклонена. "),
              _c(
                "a",
                {
                  staticClass: "notifications__link fw_600",
                  attrs: { href: "#" }
                },
                [_vm._v("Узнать причину")]
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "notifications__date mt_2" }, [
              _vm._v("27 июня 2019")
            ])
          ])
        ]),
        _vm._v(" "),
        _c("section", { staticClass: "lm-m-v2-notifications-item" }, [
          _c(
            "div",
            { staticClass: "notifications-avatar-wrap btn btn_round" },
            [
              _c("img", { staticClass: "notifications-avatar" }),
              _vm._v(" "),
              _c("i", { staticClass: "notifications-avatar-icon check-circle" })
            ]
          ),
          _vm._v(" "),
          _c("div", { staticClass: "notifications-info-wrap ml_3" }, [
            _c("div", { staticClass: "notifications__text" }, [
              _vm._v("\n            Вы успешно оплатили услугу "),
              _c(
                "a",
                {
                  staticClass: "notifications__link fw_600",
                  attrs: { href: "#" }
                },
                [_vm._v("“Название”")]
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "notifications__date mt_2" }, [
              _vm._v("27 июня 2019")
            ])
          ])
        ]),
        _vm._v(" "),
        _c("section", { staticClass: "lm-m-v2-notifications-item" }, [
          _c(
            "div",
            { staticClass: "notifications-avatar-wrap btn btn_round" },
            [
              _c("img", { staticClass: "notifications-avatar" }),
              _vm._v(" "),
              _c("i", { staticClass: "notifications-avatar-icon info" })
            ]
          ),
          _vm._v(" "),
          _c("div", { staticClass: "notifications-info-wrap ml_3" }, [
            _c("div", { staticClass: "notifications__text" }, [
              _vm._v("Вы открыли доступ. Ожидайте решения модератора")
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "notifications__date mt_2" }, [
              _vm._v("27 июня 2019")
            ])
          ])
        ]),
        _vm._v(" "),
        _c("section", { staticClass: "lm-m-v2-notifications-item" }, [
          _c(
            "div",
            { staticClass: "notifications-avatar-wrap btn btn_round" },
            [
              _c("img", { staticClass: "notifications-avatar" }),
              _vm._v(" "),
              _c("i", {
                staticClass:
                  "notifications-avatar-icon check-circle btn__alert-2"
              })
            ]
          ),
          _vm._v(" "),
          _c("div", { staticClass: "notifications-info-wrap ml_3" }, [
            _c("div", { staticClass: "notifications__text" }, [
              _vm._v("\n            Ваш доступ закрыт "),
              _c(
                "a",
                {
                  staticClass: "notifications__link fw_600",
                  attrs: { href: "#" }
                },
                [_vm._v("Узнать решение")]
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "notifications__date mt_2" }, [
              _vm._v("27 июня 2019")
            ])
          ])
        ]),
        _vm._v(" "),
        _c("section", { staticClass: "lm-m-v2-notifications-item" }, [
          _c(
            "div",
            { staticClass: "notifications-avatar-wrap btn btn_round" },
            [
              _c("img", { staticClass: "notifications-avatar" }),
              _vm._v(" "),
              _c("i", { staticClass: "notifications-avatar-icon check-circle" })
            ]
          ),
          _vm._v(" "),
          _c("div", { staticClass: "notifications-info-wrap ml_3" }, [
            _c("div", { staticClass: "notifications__text" }, [
              _vm._v("\n            Ваш заказ готов "),
              _c(
                "a",
                {
                  staticClass: "notifications__link fw_600",
                  attrs: { href: "#" }
                },
                [_vm._v("Посмотреть детали")]
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "notifications__date mt_2" }, [
              _vm._v("27 июня 2019")
            ])
          ])
        ]),
        _vm._v(" "),
        _c("section", { staticClass: "lm-m-v2-notifications-item" }, [
          _c(
            "div",
            { staticClass: "notifications-avatar-wrap btn btn_round" },
            [
              _c("img", { staticClass: "notifications-avatar" }),
              _vm._v(" "),
              _c("i", { staticClass: "notifications-avatar-icon check-circle" })
            ]
          ),
          _vm._v(" "),
          _c("div", { staticClass: "notifications-info-wrap ml_3" }, [
            _c("div", { staticClass: "notifications__text" }, [
              _vm._v("\n            Вы успешно назначили встречу "),
              _c(
                "a",
                {
                  staticClass: "notifications__link fw_600",
                  attrs: { href: "#" }
                },
                [_vm._v("Посмотреть детали")]
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "notifications__date mt_2" }, [
              _vm._v("27 июня 2019")
            ])
          ])
        ]),
        _vm._v(" "),
        _c("section", { staticClass: "lm-m-v2-notifications-item" }, [
          _c(
            "div",
            { staticClass: "notifications-avatar-wrap btn btn_round" },
            [
              _c("img", { staticClass: "notifications-avatar" }),
              _vm._v(" "),
              _c("i", { staticClass: "notifications-avatar-icon info" })
            ]
          ),
          _vm._v(" "),
          _c("div", { staticClass: "notifications-info-wrap ml_3" }, [
            _c("div", { staticClass: "notifications__text" }, [
              _vm._v("\n            У вас новый заказ "),
              _c(
                "a",
                {
                  staticClass: "notifications__link fw_600",
                  attrs: { href: "#" }
                },
                [_vm._v("Посмотреть")]
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "notifications__date mt_2" }, [
              _vm._v("27 июня 2019")
            ])
          ])
        ]),
        _vm._v(" "),
        _c("section", { staticClass: "lm-m-v2-notifications-item" }, [
          _c(
            "div",
            { staticClass: "notifications-avatar-wrap btn btn_round" },
            [
              _c("img", { staticClass: "notifications-avatar" }),
              _vm._v(" "),
              _c("i", { staticClass: "notifications-avatar-icon check-circle" })
            ]
          ),
          _vm._v(" "),
          _c("div", { staticClass: "notifications-info-wrap ml_3" }, [
            _c("div", { staticClass: "notifications__text" }, [
              _vm._v("\n            Ваш заказ завершен "),
              _c(
                "a",
                {
                  staticClass: "notifications__link fw_600",
                  attrs: { href: "#" }
                },
                [_vm._v("Посмотреть детали")]
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "notifications__date mt_2" }, [
              _vm._v("27 июня 2019")
            ])
          ])
        ]),
        _vm._v(" "),
        _c("section", { staticClass: "lm-m-v2-notifications-item" }, [
          _c(
            "div",
            { staticClass: "notifications-avatar-wrap btn btn_round" },
            [
              _c("img", { staticClass: "notifications-avatar" }),
              _vm._v(" "),
              _c("i", { staticClass: "notifications-avatar-icon check-circle" })
            ]
          ),
          _vm._v(" "),
          _c("div", { staticClass: "notifications-info-wrap ml_3" }, [
            _c("div", { staticClass: "notifications__text" }, [
              _vm._v(
                "\n            Модератор одобрил вашу заявку на регистрацию в программе ВС\n          "
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "notifications__date mt_2" }, [
              _vm._v("27 июня 2019")
            ])
          ])
        ]),
        _vm._v(" "),
        _c("section", { staticClass: "lm-m-v2-notifications-item" }, [
          _c(
            "div",
            { staticClass: "notifications-avatar-wrap btn btn_round" },
            [
              _c("img", { staticClass: "notifications-avatar" }),
              _vm._v(" "),
              _c("i", {
                staticClass: "notifications-avatar-icon info btn__alert-3"
              })
            ]
          ),
          _vm._v(" "),
          _c("div", { staticClass: "notifications-info-wrap ml_3" }, [
            _c("div", { staticClass: "notifications__text" }, [
              _vm._v(
                "\n            Опубликуйте портфолио, чтобы увеличить внимание к своему профилю в 2 раза\n          "
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "notifications__date mt_2" }, [
              _vm._v("27 июня 2019")
            ]),
            _vm._v(" "),
            _c(
              "button",
              { staticClass: "btn btn_primary notifications__btn" },
              [_vm._v("Опубликовать")]
            )
          ])
        ]),
        _vm._v(" "),
        _c("section", { staticClass: "lm-m-v2-notifications-item" }, [
          _c(
            "div",
            { staticClass: "notifications-avatar-wrap btn btn_round" },
            [
              _c("img", { staticClass: "notifications-avatar" }),
              _vm._v(" "),
              _c("i", {
                staticClass: "notifications-avatar-icon info btn__alert-3"
              })
            ]
          ),
          _vm._v(" "),
          _c("div", { staticClass: "notifications-info-wrap ml_3" }, [
            _c("div", { staticClass: "notifications__text" }, [
              _vm._v(
                "\n            Заполните анкету профиля, чтобы увеличить свою позицию в поисковой выдаче\n          "
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "notifications__date mt_2" }, [
              _vm._v("27 июня 2019")
            ]),
            _vm._v(" "),
            _c(
              "button",
              { staticClass: "btn btn_primary notifications__btn" },
              [_vm._v("заполнить")]
            )
          ])
        ]),
        _vm._v(" "),
        _c("section", { staticClass: "lm-m-v2-notifications-item" }, [
          _c(
            "div",
            { staticClass: "notifications-avatar-wrap btn btn_round" },
            [
              _c("img", { staticClass: "notifications-avatar" }),
              _vm._v(" "),
              _c("i", { staticClass: "notifications-avatar-icon" })
            ]
          ),
          _vm._v(" "),
          _c("div", { staticClass: "notifications-info-wrap ml_3" }, [
            _c("div", { staticClass: "notifications__text" }, [
              _vm._v("\n            Роман Васильев подписался на вас "),
              _c(
                "a",
                {
                  staticClass: "notifications__link fw_600",
                  attrs: { href: "#" }
                },
                [_vm._v("Подписаться в ответ")]
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "notifications__date mt_2" }, [
              _vm._v("27 июня 2019")
            ])
          ])
        ]),
        _vm._v(" "),
        _c("section", { staticClass: "lm-m-v2-notifications-item" }, [
          _c(
            "div",
            { staticClass: "notifications-avatar-wrap btn btn_round" },
            [
              _c("img", { staticClass: "notifications-avatar" }),
              _vm._v(" "),
              _c("i", { staticClass: "notifications-avatar-icon" })
            ]
          ),
          _vm._v(" "),
          _c("div", { staticClass: "notifications-info-wrap ml_3" }, [
            _c("div", { staticClass: "notifications__text" }, [
              _c(
                "a",
                {
                  staticClass: "notifications__link fw_600",
                  attrs: { href: "#" }
                },
                [_vm._v("Роман Васильев")]
              ),
              _vm._v(" предлагает вам сотрудничество\n          ")
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "notifications__date mt_2" }, [
              _vm._v("27 июня 2019")
            ]),
            _vm._v(" "),
            _c(
              "button",
              { staticClass: "btn btn_primary notifications__btn" },
              [_vm._v("принять")]
            ),
            _vm._v(" "),
            _c(
              "button",
              { staticClass: "notifications__btn notifications__btn_disabled" },
              [_vm._v("отклонить")]
            )
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
    require("vue-hot-reload-api")      .rerender("data-v-4325cec5", esExports)
  }
}

/***/ })

});
//# sourceMappingURL=154.build.d1cbf7f1ec431871f848.js.map