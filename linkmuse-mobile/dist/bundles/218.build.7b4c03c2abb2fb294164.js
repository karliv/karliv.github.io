webpackJsonp([218],{

/***/ 1418:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Index_vue__ = __webpack_require__(1814);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_25f5c3e8_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Index_vue__ = __webpack_require__(2502);
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
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_25f5c3e8_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Index_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/views/User/EmptyEmail/Index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-25f5c3e8", Component.options)
  } else {
    hotAPI.reload("data-v-25f5c3e8", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 1814:
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
//
//




/* harmony default export */ __webpack_exports__["a"] = ({
  metaInfo: {
    title: 'Подтверждение email'
  },
  data: function data() {
    return {
      loading: false,
      error: false,
      success: false,
      fields: {
        email: null
      }
    };
  },

  computed: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["c" /* mapGetters */])({
    user: 'auth/getAuthUser'
  }), {
    isValidEmail: function isValidEmail() {
      return this.vfields && this.vfields.hasOwnProperty('email') && this.vfields.email.valid;
    }
  }),
  methods: {
    _handleValidateFields: function _handleValidateFields() {
      var _this = this;

      return new Promise(function (resolve, reject) {
        _this.$validator.validateAll().then(function (result) {
          if (result) {
            resolve(result);
          } else reject();
        });
      });
    },
    saveEmail: function saveEmail() {
      var _this2 = this;

      this._handleValidateFields().then(function (result) {
        if (result) {
          if (_this2.loading) return;

          __WEBPACK_IMPORTED_MODULE_1_mint_ui__["Indicator"].open();
          _this2.loading = true;

          _this2.$api.post('/api/v1/users/email', _this2.fields).then(function (response) {
            __WEBPACK_IMPORTED_MODULE_1_mint_ui__["Indicator"].close();
            _this2.loading = false;

            Object(__WEBPACK_IMPORTED_MODULE_1_mint_ui__["Toast"])({
              message: 'Успешно',
              iconClass: 'mintui mintui-success'
            });

            _this2.$store.dispatch('auth/setHasEmail', true);

            var username = _this2.user.username;


            _this2.$router.push({ name: 'user.show', params: { username: username } });
          }, function (error) {
            __WEBPACK_IMPORTED_MODULE_1_mint_ui__["Indicator"].close();

            Object(__WEBPACK_IMPORTED_MODULE_1_mint_ui__["Toast"])({
              message: 'Ошибка',
              iconClass: 'mintui mintui-field-error'
            });

            _this2.loading = false;

            var data = error.response.data,
                status = error.response.status;


            if (status === 422) {
              _this2.$setLaravelValidationErrorsFromResponse(data);
            } else throw new Error('Error attach email');
          });
        }
      });
    },
    recovery: function recovery() {
      var _this3 = this;

      return new Promise(function (resolve, reject) {
        __WEBPACK_IMPORTED_MODULE_1_mint_ui__["Indicator"].open();

        _this3.loading = true;

        var email = _this3.fields.email;


        _this3.$api.post('api/v1/auth/recovery', { email: email }).then(function (response) {
          __WEBPACK_IMPORTED_MODULE_1_mint_ui__["Indicator"].close();
          _this3.loading = false;

          Object(__WEBPACK_IMPORTED_MODULE_1_mint_ui__["Toast"])({
            message: 'Успешно',
            iconClass: 'mintui mintui-success'
          });

          var data = response.data;


          resolve(data);
        }, function (error) {
          __WEBPACK_IMPORTED_MODULE_1_mint_ui__["Indicator"].close();

          Object(__WEBPACK_IMPORTED_MODULE_1_mint_ui__["Toast"])({
            message: 'Ошибка',
            iconClass: 'mintui mintui-field-error'
          });

          _this3.loading = false;

          var data = error.response.data,
              status = error.response.status;


          if (status === 422) {
            _this3.$setLaravelValidationErrorsFromResponse(data);
          } else throw new Error('Error recovery password');

          reject(data);
        });
      });
    }
  }
});

/***/ }),

/***/ 2502:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "lm-m-register-page" }, [
    _c("div", { staticClass: "wrapper lm-m-register-page-wrapper" }, [
      _c("div", { staticClass: "lm-m-register-wrap-form" }, [
        _c("h2", { staticClass: "heading heading_h2 mb_9" }, [
          _vm._v("Необходимо ввести email")
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "lm-input-wrap" }, [
          _c("input", {
            directives: [
              {
                name: "validate",
                rawName: "v-validate",
                value: "required|email",
                expression: "'required|email'"
              },
              {
                name: "model",
                rawName: "v-model",
                value: _vm.fields.email,
                expression: "fields.email"
              }
            ],
            class: [
              { error: _vm.verrors.has("email"), ok: _vm.isValidEmail },
              "lm-input"
            ],
            attrs: {
              type: "email",
              tabindex: "1",
              name: "email",
              autocapitalize: "off",
              placeholder: "E-mail"
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
            ? _c("span", { staticClass: "lm-input-error" }, [
                _vm._v(_vm._s(_vm.verrors.first("email")))
              ])
            : _vm._e()
        ]),
        _vm._v(" "),
        _c("div", [
          _c(
            "button",
            {
              class: [
                "lm-primary-button",
                { disabled: this.verrors.any() || !_vm.fields.email }
              ],
              attrs: { href: "javascript:void(0)" },
              on: { click: _vm.saveEmail }
            },
            [_vm._v("Продолжить\n        ")]
          )
        ])
      ]),
      _vm._v(" "),
      _c("div")
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
    require("vue-hot-reload-api")      .rerender("data-v-25f5c3e8", esExports)
  }
}

/***/ })

});
//# sourceMappingURL=218.build.7b4c03c2abb2fb294164.js.map