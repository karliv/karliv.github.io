webpackJsonp([219],{

/***/ 1411:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Index_vue__ = __webpack_require__(1790);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3c2d91ac_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Index_vue__ = __webpack_require__(2432);
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3c2d91ac_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Index_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/views/Unsubscribe/Index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3c2d91ac", Component.options)
  } else {
    hotAPI.reload("data-v-3c2d91ac", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 1790:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mint_ui__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mint_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_mint_ui__);
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




/* harmony default export */ __webpack_exports__["a"] = ({
  metaInfo: function metaInfo() {
    return {
      title: '\u041F\u043E\u0447\u0442\u043E\u0432\u0430\u044F \u0440\u0430\u0441\u0441\u044B\u043B\u043A\u0430'
    };
  },

  computed: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["c" /* mapGetters */])({
    status: 'unsubscribe/getStatus',
    error: 'unsubscribe/getError',
    loading: 'unsubscribe/getLoading'
  })),
  mounted: function mounted() {
    var _this = this;

    __WEBPACK_IMPORTED_MODULE_1_mint_ui__["Indicator"].open();

    var userId = this.$route.params.user_id,
        signature = this.$route.query.signature;


    this.$store.dispatch('unsubscribe/getStatus', { userId: userId, signature: signature });

    this.$store.subscribe(function (mutation) {
      if (mutation.type === 'unsubscribe/SET_LOADING') {
        if (_this.loading) {
          __WEBPACK_IMPORTED_MODULE_1_mint_ui__["Indicator"].open();
        } else __WEBPACK_IMPORTED_MODULE_1_mint_ui__["Indicator"].close();
      }
    });
  },

  methods: {
    _handleSetStatus: function _handleSetStatus() {
      var userId = this.$route.params.user_id,
          signature = this.$route.query.signature;


      this.$store.dispatch('unsubscribe/setStatus', { userId: userId, signature: signature });
    }
  }
});

/***/ }),

/***/ 2432:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    !_vm.status
      ? _c(
          "div",
          { staticClass: "page page_mailing page_mailing_unsubscribe" },
          [
            _c(
              "h1",
              {
                staticClass:
                  "page__title page__title_mailing page__title_mailing_unsubscribe"
              },
              [_vm._v("Решили отписаться?")]
            ),
            _vm._v(" "),
            _c(
              "p",
              {
                staticClass:
                  "page__paragraph page__paragraph_mailing page__paragraph_mailing_unsubscribe"
              },
              [
                _vm._v(
                  "Для прекращения получения\n      от нас рекламных рассылок нажмите “отписаться”."
                )
              ]
            ),
            _vm._v(" "),
            _c("br", {
              staticClass: "paragraph__break paragraph__break_mobile"
            }),
            _vm._v(" "),
            _vm._m(0),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass: "button button_mailing button_mailing_unsubscribe",
                on: {
                  click: function($event) {
                    $event.stopPropagation()
                    $event.preventDefault()
                    return _vm._handleSetStatus($event)
                  }
                }
              },
              [_vm._v("\n      Отписаться\n    ")]
            )
          ]
        )
      : _vm._e(),
    _vm._v(" "),
    _vm.status
      ? _c("div", { staticClass: "page page_mailing page_mailing_subscribe" }, [
          _c(
            "h1",
            {
              staticClass:
                "page__title page__title_mailing page__title_mailing_subscribe"
            },
            [_vm._v("Очень жаль")]
          ),
          _vm._v(" "),
          _vm._m(1),
          _vm._v(" "),
          _c(
            "button",
            {
              staticClass: "button button_mailing button_mailing_subscribe",
              on: {
                click: function($event) {
                  $event.stopPropagation()
                  $event.preventDefault()
                  return _vm._handleSetStatus($event)
                }
              }
            },
            [_vm._v("\n      Подписаться\n    ")]
          )
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
      "p",
      {
        staticClass:
          "page__paragraph page__paragraph_mailing page__paragraph_mailing_unsubscribe"
      },
      [
        _vm._v(
          "Обратите внимание, если вы\n      имеете аккаунт, вы продолжите получать "
        ),
        _c("br", { staticClass: "paragraph__break paragraph__break_tablet" }),
        _vm._v(
          "письма об\n      актуальных транзакциях, подписчиках и сообщениях."
        )
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "p",
      {
        staticClass:
          "page__paragraph page__paragraph_mailing page__paragraph_mailing_subscribe"
      },
      [
        _vm._v("Если вы передумаете, то\n      всегда сможете подписаться на "),
        _c("br", { staticClass: "paragraph__break paragraph__break_tablet" }),
        _vm._v("рекламные рассылки снова,\n      нажав “подписаться”.")
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
    require("vue-hot-reload-api")      .rerender("data-v-3c2d91ac", esExports)
  }
}

/***/ })

});
//# sourceMappingURL=219.build.964a24bb8838fe452d11.js.map