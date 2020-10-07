webpackJsonp([211],{

/***/ 1272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Reset_vue__ = __webpack_require__(1616);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7bb7b0d8_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Reset_vue__ = __webpack_require__(1919);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1917)
}
var normalizeComponent = __webpack_require__(2)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-7bb7b0d8"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Reset_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7bb7b0d8_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Reset_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/views/Auth/Password/Reset.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7bb7b0d8", Component.options)
  } else {
    hotAPI.reload("data-v-7bb7b0d8", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 1616:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mint_ui__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mint_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mint_ui__);
function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    title: 'Восстановление пароля'
  },
  data: function data() {
    return {
      fields: {
        email: null,
        password: null,
        password_confirmation: null
      },
      loading: false,
      passwordFieldType: 'password',
      passwordConfirmationFieldType: 'password'
    };
  },
  created: function created() {
    var email = this.$route.query.email;

    console.log(email);
    if (email) this.fields.email = email;
  },

  computed: {
    token: function token() {
      return this.$route.params.token;
    },
    isValidEmail: function isValidEmail() {
      return this.fields.email && this.vfields && this.vfields.hasOwnProperty('email') && this.vfields.email.valid;
    },
    isValidPassword: function isValidPassword() {
      return this.fields.password && this.vfields && this.vfields.hasOwnProperty('password') && this.vfields.password.valid;
    },
    isValidPasswordConfirmation: function isValidPasswordConfirmation() {
      return this.fields.password_confirmation && this.vfields && this.vfields.hasOwnProperty('password_confirmation') && this.vfields.password_confirmation.valid;
    }
  },
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
    _handleClickSwitchVisibilityPassword: function _handleClickSwitchVisibilityPassword() {
      this.passwordFieldType = this.passwordFieldType === 'password' ? 'text' : 'password';
    },
    _handleClickSwitchVisibilityPasswordConfirmation: function _handleClickSwitchVisibilityPasswordConfirmation() {
      this.passwordConfirmationFieldType = this.passwordConfirmationFieldType === 'password' ? 'text' : 'password';
    },
    _handleSubmitFormReset: function _handleSubmitFormReset(e) {
      var _this2 = this;

      e.preventDefault();
      return new Promise(function (resolve, reject) {
        _this2._handleValidateFields().then(function () {
          _this2.reset();
          resolve();
        }).catch(function () {});
      });
    },
    reset: function reset() {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var _fields, email, password, password_confirmation;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                __WEBPACK_IMPORTED_MODULE_0_mint_ui__["Indicator"].open();

                _this3.loading = true;

                _fields = _this3.fields, email = _fields.email, password = _fields.password, password_confirmation = _fields.password_confirmation;


                _this3.$api.post('api/v1/auth/reset', { email: email, password: password, password_confirmation: password_confirmation, token: _this3.token }).then(function (response) {
                  __WEBPACK_IMPORTED_MODULE_0_mint_ui__["Indicator"].close();
                  _this3.loading = false;

                  Object(__WEBPACK_IMPORTED_MODULE_0_mint_ui__["Toast"])({
                    message: 'Успешно',
                    iconClass: 'mintui mintui-success'
                  });

                  var token = response.data.token;

                  _this3.$auth.storeSession({ token: token });

                  _this3.$store.dispatch('auth/setToken', { accessToken: token, refreshToken: token }).then(function (result) {
                    _this3.$store.dispatch('auth/getUserByAPI').then(function (result) {
                      _this3.$router.replace({ name: 'index' });
                    });
                  });
                }, function (error) {
                  __WEBPACK_IMPORTED_MODULE_0_mint_ui__["Indicator"].close();

                  Object(__WEBPACK_IMPORTED_MODULE_0_mint_ui__["Toast"])({
                    message: 'Ошибка',
                    iconClass: 'mintui mintui-field-error'
                  });

                  _this3.loading = false;

                  var data = error.response.data,
                      status = error.response.status;


                  if (status === 422) {
                    _this3.$setLaravelValidationErrorsFromResponse(data);
                  } else throw new Error('Error reset password');
                });

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this3);
      }))();
    }
  }
});

/***/ }),

/***/ 1917:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1918);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("0a354aea", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js?sourceMap!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-7bb7b0d8\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Reset.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js?sourceMap!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-7bb7b0d8\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Reset.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1918:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(true);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"Reset.vue","sourceRoot":""}]);

// exports


/***/ }),

/***/ 1919:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "wrapper lm-m-register-page-wrapper" }, [
    _c("div", { staticClass: "lm-m-register-wrap-form" }, [
      _c("h2", { staticClass: "heading heading_h2 mb_2" }, [
        _vm._v("Восстановление")
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "m-text_normal-2 color_gray-2 mb_8" }, [
        _vm._v(
          "\n      Придумайте новый пароль, состоящий минимум из 6 символов\n    "
        )
      ]),
      _vm._v(" "),
      _c(
        "form",
        {
          attrs: { methods: "POST", action: "/password/rest" },
          on: {
            submit: function($event) {
              $event.preventDefault()
              return _vm._handleSubmitFormReset($event)
            }
          }
        },
        [
          _c("div", { staticClass: "lm-input-wrap" }, [
            _vm.passwordFieldType === "checkbox"
              ? _c("input", {
                  directives: [
                    {
                      name: "validate",
                      rawName: "v-validate",
                      value: "required|min:6",
                      expression: "'required|min:6'"
                    },
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.fields.password,
                      expression: "fields.password"
                    }
                  ],
                  ref: "password",
                  class: [
                    {
                      error: _vm.verrors.has("password"),
                      ok: _vm.isValidPassword
                    },
                    "lm-input",
                    "lm-input--password"
                  ],
                  attrs: {
                    id: "password",
                    name: "password",
                    tabindex: "2",
                    placeholder: "Введите пароль",
                    type: "checkbox"
                  },
                  domProps: {
                    checked: Array.isArray(_vm.fields.password)
                      ? _vm._i(_vm.fields.password, null) > -1
                      : _vm.fields.password
                  },
                  on: {
                    change: function($event) {
                      var $$a = _vm.fields.password,
                        $$el = $event.target,
                        $$c = $$el.checked ? true : false
                      if (Array.isArray($$a)) {
                        var $$v = null,
                          $$i = _vm._i($$a, $$v)
                        if ($$el.checked) {
                          $$i < 0 &&
                            _vm.$set(_vm.fields, "password", $$a.concat([$$v]))
                        } else {
                          $$i > -1 &&
                            _vm.$set(
                              _vm.fields,
                              "password",
                              $$a.slice(0, $$i).concat($$a.slice($$i + 1))
                            )
                        }
                      } else {
                        _vm.$set(_vm.fields, "password", $$c)
                      }
                    }
                  }
                })
              : _vm.passwordFieldType === "radio"
              ? _c("input", {
                  directives: [
                    {
                      name: "validate",
                      rawName: "v-validate",
                      value: "required|min:6",
                      expression: "'required|min:6'"
                    },
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.fields.password,
                      expression: "fields.password"
                    }
                  ],
                  ref: "password",
                  class: [
                    {
                      error: _vm.verrors.has("password"),
                      ok: _vm.isValidPassword
                    },
                    "lm-input",
                    "lm-input--password"
                  ],
                  attrs: {
                    id: "password",
                    name: "password",
                    tabindex: "2",
                    placeholder: "Введите пароль",
                    type: "radio"
                  },
                  domProps: { checked: _vm._q(_vm.fields.password, null) },
                  on: {
                    change: function($event) {
                      return _vm.$set(_vm.fields, "password", null)
                    }
                  }
                })
              : _c("input", {
                  directives: [
                    {
                      name: "validate",
                      rawName: "v-validate",
                      value: "required|min:6",
                      expression: "'required|min:6'"
                    },
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.fields.password,
                      expression: "fields.password"
                    }
                  ],
                  ref: "password",
                  class: [
                    {
                      error: _vm.verrors.has("password"),
                      ok: _vm.isValidPassword
                    },
                    "lm-input",
                    "lm-input--password"
                  ],
                  attrs: {
                    id: "password",
                    name: "password",
                    tabindex: "2",
                    placeholder: "Введите пароль",
                    type: _vm.passwordFieldType
                  },
                  domProps: { value: _vm.fields.password },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.fields, "password", $event.target.value)
                    }
                  }
                }),
            _vm._v(" "),
            _vm.verrors.has("password")
              ? _c("span", { staticClass: "lm-input-error mt_2" }, [
                  _vm._v(_vm._s(_vm.verrors.first("password")))
                ])
              : _vm._e(),
            _vm._v(" "),
            _c("div", {
              class: [
                _vm.passwordFieldType === "password" ? "eye-hide" : "eye-show"
              ],
              on: { click: _vm._handleClickSwitchVisibilityPassword }
            })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "lm-input-wrap" }, [
            _vm.passwordConfirmationFieldType === "checkbox"
              ? _c("input", {
                  directives: [
                    {
                      name: "validate",
                      rawName: "v-validate",
                      value: "required|min:6|confirmed:password",
                      expression: "'required|min:6|confirmed:password'"
                    },
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.fields.password_confirmation,
                      expression: "fields.password_confirmation"
                    }
                  ],
                  class: [
                    {
                      error: _vm.verrors.has("password_confirmation"),
                      ok: _vm.isValidPasswordConfirmation
                    },
                    "lm-input",
                    "lm-input--password"
                  ],
                  attrs: {
                    id: "password_confirmation",
                    name: "password_confirmation",
                    tabindex: "3",
                    placeholder: "Повторите пароль",
                    type: "checkbox"
                  },
                  domProps: {
                    checked: Array.isArray(_vm.fields.password_confirmation)
                      ? _vm._i(_vm.fields.password_confirmation, null) > -1
                      : _vm.fields.password_confirmation
                  },
                  on: {
                    change: function($event) {
                      var $$a = _vm.fields.password_confirmation,
                        $$el = $event.target,
                        $$c = $$el.checked ? true : false
                      if (Array.isArray($$a)) {
                        var $$v = null,
                          $$i = _vm._i($$a, $$v)
                        if ($$el.checked) {
                          $$i < 0 &&
                            _vm.$set(
                              _vm.fields,
                              "password_confirmation",
                              $$a.concat([$$v])
                            )
                        } else {
                          $$i > -1 &&
                            _vm.$set(
                              _vm.fields,
                              "password_confirmation",
                              $$a.slice(0, $$i).concat($$a.slice($$i + 1))
                            )
                        }
                      } else {
                        _vm.$set(_vm.fields, "password_confirmation", $$c)
                      }
                    }
                  }
                })
              : _vm.passwordConfirmationFieldType === "radio"
              ? _c("input", {
                  directives: [
                    {
                      name: "validate",
                      rawName: "v-validate",
                      value: "required|min:6|confirmed:password",
                      expression: "'required|min:6|confirmed:password'"
                    },
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.fields.password_confirmation,
                      expression: "fields.password_confirmation"
                    }
                  ],
                  class: [
                    {
                      error: _vm.verrors.has("password_confirmation"),
                      ok: _vm.isValidPasswordConfirmation
                    },
                    "lm-input",
                    "lm-input--password"
                  ],
                  attrs: {
                    id: "password_confirmation",
                    name: "password_confirmation",
                    tabindex: "3",
                    placeholder: "Повторите пароль",
                    type: "radio"
                  },
                  domProps: {
                    checked: _vm._q(_vm.fields.password_confirmation, null)
                  },
                  on: {
                    change: function($event) {
                      return _vm.$set(_vm.fields, "password_confirmation", null)
                    }
                  }
                })
              : _c("input", {
                  directives: [
                    {
                      name: "validate",
                      rawName: "v-validate",
                      value: "required|min:6|confirmed:password",
                      expression: "'required|min:6|confirmed:password'"
                    },
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.fields.password_confirmation,
                      expression: "fields.password_confirmation"
                    }
                  ],
                  class: [
                    {
                      error: _vm.verrors.has("password_confirmation"),
                      ok: _vm.isValidPasswordConfirmation
                    },
                    "lm-input",
                    "lm-input--password"
                  ],
                  attrs: {
                    id: "password_confirmation",
                    name: "password_confirmation",
                    tabindex: "3",
                    placeholder: "Повторите пароль",
                    type: _vm.passwordConfirmationFieldType
                  },
                  domProps: { value: _vm.fields.password_confirmation },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.fields,
                        "password_confirmation",
                        $event.target.value
                      )
                    }
                  }
                }),
            _vm._v(" "),
            _vm.verrors.has("password_confirmation")
              ? _c("span", { staticClass: "lm-input-error mt_2" }, [
                  _vm._v(_vm._s(_vm.verrors.first("password_confirmation")))
                ])
              : _vm._e(),
            _vm._v(" "),
            _c("div", {
              class: [
                _vm.passwordConfirmationFieldType === "password"
                  ? "eye-hide"
                  : "eye-show"
              ],
              on: {
                click: _vm._handleClickSwitchVisibilityPasswordConfirmation
              }
            })
          ]),
          _vm._v(" "),
          _vm._m(0)
        ]
      )
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c("button", { staticClass: "lm-primary-button mb_6 w_100" }, [
        _vm._v("Изменить пароль")
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
    require("vue-hot-reload-api")      .rerender("data-v-7bb7b0d8", esExports)
  }
}

/***/ })

});
//# sourceMappingURL=211.build.7b4c03c2abb2fb294164.js.map