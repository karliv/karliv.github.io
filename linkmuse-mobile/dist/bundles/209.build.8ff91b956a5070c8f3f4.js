webpackJsonp([209],{

/***/ 1282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Index_vue__ = __webpack_require__(1634);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7ac0737f_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Index_vue__ = __webpack_require__(1974);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1972)
}
var normalizeComponent = __webpack_require__(2)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-7ac0737f"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7ac0737f_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Index_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/views/Board/Index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7ac0737f", Component.options)
  } else {
    hotAPI.reload("data-v-7ac0737f", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 1634:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__i18n_languages__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__i18n_languages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__i18n_languages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_mint_ui__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_mint_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_mint_ui__);
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






/* harmony default export */ __webpack_exports__["a"] = ({
  computed: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["c" /* mapGetters */])({
    user: 'auth/getAuthUser',
    isAuthorized: 'auth/isAuthorized'
  })),
  methods: {
    _handleClickTestGtmNative: function _handleClickTestGtmNative() {
      this.$root.reachGoalGtm({ event: 'test_gtm' });
    },
    _handleClickTestGtmWrapper: function _handleClickTestGtmWrapper() {
      this.$gtm.trackEvent({ event: 'test_gtm' });
    },
    _handleClickSetLang: function _handleClickSetLang(locale) {
      var _this = this;

      if (this.isAuthorized) {
        this._savedUserLocale(locale).then(function () {
          _this._setLangToStorage(locale).then(function () {
            Object(__WEBPACK_IMPORTED_MODULE_2__utils__["w" /* redirect */])();
          }).catch(function () {});
        }).catch(function () {});
      } else this._setLangToStorage(locale).then(function () {
        Object(__WEBPACK_IMPORTED_MODULE_2__utils__["w" /* redirect */])();
      }).catch(function () {});
    },
    _setLangToStorage: function _setLangToStorage(lang) {
      var _this2 = this;

      return new Promise(function (resolve, reject) {
        var _ref = __WEBPACK_IMPORTED_MODULE_1__i18n_languages___default.a.find(function (l) {
          return lang === l.alternate || lang === l.locale;
        }) || {},
            locale = _ref.locale;

        if (!locale) {
          resolve && reject('Language not found');
          throw 'Language not found';
        } else {
          _this2.$store.dispatch('auth/setLocale', lang);
          resolve && resolve(lang);
        }
      });
    },
    _savedUserLocale: function _savedUserLocale(locale) {
      var _this3 = this;

      return new Promise(function (resolve, reject) {
        __WEBPACK_IMPORTED_MODULE_3_mint_ui__["Indicator"].open();

        _this3.$api.post('api/v2/users/locale', { locale: locale }).then(function (response) {
          var data = response.data;


          __WEBPACK_IMPORTED_MODULE_3_mint_ui__["Indicator"].close();
          resolve && resolve(locale);
        }, function (error) {
          __WEBPACK_IMPORTED_MODULE_3_mint_ui__["Indicator"].close();
          Object(__WEBPACK_IMPORTED_MODULE_3_mint_ui__["Toast"])({ message: 'Ошибка', iconClass: 'mintui mintui-field-error' });

          reject && reject();

          throw new Error('Error saved locale');
        });
      });
    }
  }
});

/***/ }),

/***/ 1972:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1973);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("0cb54fb5", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js?sourceMap!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-7ac0737f\",\"scoped\":true,\"hasInlineConfig\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Index.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js?sourceMap!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-7ac0737f\",\"scoped\":true,\"hasInlineConfig\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Index.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1973:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(true);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"Index.vue","sourceRoot":""}]);

// exports


/***/ }),

/***/ 1974:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "lm-m-article-wrap" }, [
    _c("div", { staticClass: "lm-m-article-wrap--item" }, [
      _c(
        "div",
        {
          staticClass: "lm-m-article-overflow-item",
          style: { paddingTop: "24px" }
        },
        [
          _c("h1", { staticClass: "blog-title" }, [
            _vm._v(_vm._s(_vm.$t("boardbox.boardbox-screen.ads")))
          ]),
          _vm._v(" "),
          [
            _c("div", { staticClass: "text" }, [
              _c("ul", [
                _c(
                  "li",
                  [
                    _c(
                      "router-link",
                      {
                        staticClass: "d-link",
                        attrs: { to: { name: "board.create" } }
                      },
                      [_vm._v("Создать")]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "li",
                  [
                    _c(
                      "router-link",
                      {
                        staticClass: "d-link",
                        attrs: { to: { name: "board.castings.index" } }
                      },
                      [_vm._v("Кастинги")]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "li",
                  [
                    _c(
                      "router-link",
                      {
                        staticClass: "d-link",
                        attrs: { to: { name: "board.locations.index" } }
                      },
                      [_vm._v("Локации")]
                    )
                  ],
                  1
                )
              ])
            ])
          ]
        ],
        2
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-7ac0737f", esExports)
  }
}

/***/ })

});
//# sourceMappingURL=209.build.8ff91b956a5070c8f3f4.js.map