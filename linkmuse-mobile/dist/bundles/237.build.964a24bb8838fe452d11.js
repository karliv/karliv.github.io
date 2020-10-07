webpackJsonp([237],{

/***/ 1273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Register_vue__ = __webpack_require__(1617);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_028c8680_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Register_vue__ = __webpack_require__(1920);
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
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_028c8680_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Register_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/views/Auth/Register.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-028c8680", Component.options)
  } else {
    hotAPI.reload("data-v-028c8680", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 1617:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modules_oauth__ = __webpack_require__(444);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mint_ui__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mint_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_mint_ui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__xkeshi_vue_countdown__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_state_machine__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_state_machine___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_state_machine__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__modules_oauth_native__ = __webpack_require__(436);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  components: { 'countdown': __WEBPACK_IMPORTED_MODULE_2__xkeshi_vue_countdown__["a" /* default */] },
  metaInfo: {
    title: 'Регистрация'
  },
  data: function data() {
    return {
      fields: {
        code: null,
        phone: null
      },
      state: null,
      loading: false,
      counting: false
    };
  },

  computed: {
    hasPhoneFiled: function hasPhoneFiled() {
      return !!this.fields['phone'];
    }
  },
  created: function created() {
    this.fsm = __WEBPACK_IMPORTED_MODULE_4_state_machine__["StateMachine"].create({
      transitions: ['next : phone > code', 'back : phone < code'],

      handlers: {
        'phone@next': this._handleNextPhone
      }
    });

    this.state = __WEBPACK_IMPORTED_MODULE_4_state_machine__["StateHelper"].object(this.fsm).data;
  },

  watch: {
    'fields.code': function fieldsCode(val) {
      if (val && val.length === 4) {
        this._authByPhone();
      }
    }
  },
  mounted: function mounted() {
    // this.$gtm.trackEvent({ event: 'START_REGISTRATION' })
    this.$gtm.trackEvent({ event: 'startreg' });

    if (__WEBPACK_IMPORTED_MODULE_3__utils__["n" /* isBrowser */]) {
      if (Object(__WEBPACK_IMPORTED_MODULE_3__utils__["l" /* has */])(this.$route.query, 'from') && this.$route.query.from === 'svobodnoekino') {
        this.$localStorage.set('redirect.freekino', 'true');
      }
    }
  },

  methods: {
    _handleClickPreviousPage: function _handleClickPreviousPage() {
      this.$router.push({ name: 'index' });
    },
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
    _handleSubmitFormRegister: function _handleSubmitFormRegister(e) {
      var _this2 = this;

      e.preventDefault();
      return new Promise(function (resolve, reject) {
        _this2._handleValidateFields().then(function () {
          _this2._authByPhone().then(function () {
            resolve && resolve();
          }).catch(function () {
            reject && reject();
          });
        }).catch(function () {});
      });
    },
    _handleClickValidateLogin: function _handleClickValidateLogin() {
      this.fsm.do('next');
    },
    _handleNextPhone: function _handleNextPhone(event, fsm) {
      var _this3 = this;

      fsm.pause();

      this._handleValidateFields().then(function () {
        _this3._getCodeAuthByPhone().then(function () {
          fsm.resume();

          _this3.$nextTick(function () {
            return _this3.$refs['code'].focus();
          });
        }).catch(function (e) {
          fsm.cancel();
        });
      }).catch(function () {
        fsm.cancel();
      });
    },
    _handleClickEditLogin: function _handleClickEditLogin() {
      this.fields['code'] = null;
      this.fsm.go('phone', true);
    },
    _getCodeAuthByPhone: function _getCodeAuthByPhone() {
      var _this4 = this;

      return new Promise(function (resolve, reject) {

        _this4.loading = true;
        var phone = _this4.fields.phone;

        __WEBPACK_IMPORTED_MODULE_1_mint_ui__["Indicator"].open();

        _this4.$api.post('api/v2/auth/login/phone', { phone: phone }).then(function (response) {
          __WEBPACK_IMPORTED_MODULE_1_mint_ui__["Indicator"].close();
          _this4.loading = false;
          _this4.counting = true;

          resolve && resolve(response);
        }).catch(function (error) {
          __WEBPACK_IMPORTED_MODULE_1_mint_ui__["Indicator"].close();
          _this4.loading = false;

          reject && reject(error);
          var _error$response = error.response,
              data = _error$response.data,
              status = _error$response.status;


          if (status === 422) {
            var errors = data.errors;

            Object.keys(errors).forEach(function (key) {
              return _this4.$validator.errors.add({ field: key, msg: errors[key].join(', ') });
            });
          } else if (status === 403) {
            _this4.$validator.errors.add({ field: 'phone', msg: 'Слишком много попыток подтверждения. Пожалуйста, повторите позже.' });
          } else throw new Error('Error authenticate profile');
        });
      });
    },
    _handleCountdownEnd: function _handleCountdownEnd() {
      this.counting = false;
    },
    _authByPhone: function _authByPhone() {
      var _this5 = this;

      var _fields = this.fields,
          phone = _fields.phone,
          code = _fields.code;

      var referral = this.$cookies.get('referral');

      this._attemptSign(this.$api.post('api/v2/auth/login/phone/verify', { phone: phone, code: code, referral: referral })).then(function (response) {}, function (error) {
        var _error$response2 = error.response,
            data = _error$response2.data,
            status = _error$response2.status;


        _this5.$nextTick(function () {
          return _this5.$refs['code'].focus();
        });

        if (status === 422 || status === 429) {
          var errors = data.errors;

          Object.keys(errors).forEach(function (key) {
            return _this5.$validator.errors.add({ field: 'code', msg: errors[key].join(', ') });
          });
        } else if (status === 404 || status === 500) {
          _this5.$validator.errors.add({ field: 'code', msg: 'Неверный код подтверждения.' });
        } else throw new Error('Error authenticate profile');
      });
    },
    _attemptSign: function _attemptSign(apiPromise) {
      var _this6 = this;

      return new Promise(function (resolve, reject) {
        __WEBPACK_IMPORTED_MODULE_1_mint_ui__["Indicator"].open();
        _this6.loading = true;

        apiPromise.then(function (response) {
          _this6.loading = false;

          Object(__WEBPACK_IMPORTED_MODULE_1_mint_ui__["Toast"])({
            message: 'Успешно',
            iconClass: 'mintui mintui-success'
          });

          var _response$data = response.data,
              token = _response$data.token,
              role = _response$data.role,
              hasEmail = _response$data.hasEmail,
              locale = _response$data.locale;


          _this6.$auth.storeSession({ token: token, role: role, hasEmail: hasEmail });

          _this6.$gtm.trackEvent({ event: 'authorization' });
          _this6.$store.dispatch('auth/setLocale', locale || 'ru');

          _this6.$store.dispatch('auth/setToken', { accessToken: token, refreshToken: token }).then(function (result) {
            _this6.$store.dispatch('auth/getUserByAPI').then(function (user) {
              var isRegistered = user.isRegistered;

              _this6.$store.dispatch('board/casting/setHasNewCastingsData', true);
              if (isRegistered) {
                _this6._handleRedirectAfterAuth().then(function () {
                  __WEBPACK_IMPORTED_MODULE_1_mint_ui__["Indicator"].close();
                }).catch(function () {
                  __WEBPACK_IMPORTED_MODULE_1_mint_ui__["Indicator"].close();
                });
              } else _this6.$router.replace({ name: 'user.register' }, function () {
                __WEBPACK_IMPORTED_MODULE_1_mint_ui__["Indicator"].close();
              }, function () {
                __WEBPACK_IMPORTED_MODULE_1_mint_ui__["Indicator"].close();
              });
            });
          });

          resolve(response);
        }).catch(function (e) {
          _this6._handleError();

          reject(e);
        });
      });
    },
    _handleError: function _handleError() {
      __WEBPACK_IMPORTED_MODULE_1_mint_ui__["Indicator"].close();

      Object(__WEBPACK_IMPORTED_MODULE_1_mint_ui__["Toast"])({
        message: 'Ошибка',
        iconClass: 'mintui mintui-field-error'
      });

      this.loading = false;
    },
    _handleRedirectAfterAuth: function _handleRedirectAfterAuth() {
      var _this7 = this;

      return new Promise(function (resolve, reject) {
        if (_this7.$localStorage.get('redirect.register', null, String)) {
          var location = _this7.$localStorage.get('redirect.register', '/', String);
          _this7.$localStorage.remove('redirect.register');
          _this7.$router.push(location, function () {
            resolve && resolve();
          }, function () {
            reject && reject();
          });
        } else if (_this7.$localStorage.get('redirect.freekino', null, String)) {
          _this7.$localStorage.remove('redirect.freekino');
          window.location.href = process.env.FREEKINO_URL + '/?ak=' + _this7.$cookies.get('id_token');
          resolve && resolve();
        } else _this7.$router.push({ name: 'board.castings.index' }, function () {
          resolve && resolve();
        }, function () {
          reject && reject();
        });
      });
    },
    _savedUserLocale: function _savedUserLocale(locale) {
      var _this8 = this;

      return new Promise(function (resolve, reject) {
        __WEBPACK_IMPORTED_MODULE_1_mint_ui__["Indicator"].open();

        _this8.$api.post('api/v2/users/locale', { locale: locale }).then(function (response) {
          var data = response.data;


          __WEBPACK_IMPORTED_MODULE_1_mint_ui__["Indicator"].close();
          resolve && resolve(locale);
        }, function (error) {
          __WEBPACK_IMPORTED_MODULE_1_mint_ui__["Indicator"].close();
          Object(__WEBPACK_IMPORTED_MODULE_1_mint_ui__["Toast"])({ message: 'Ошибка', iconClass: 'mintui mintui-field-error' });

          reject && reject();

          throw new Error('Error saved locale');
        });
      });
    }
  }
});
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(18)))

/***/ }),

/***/ 1920:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c(
      "button",
      {
        staticClass: "btn btn_back_login",
        on: { click: _vm._handleClickPreviousPage }
      },
      [
        _c("svg", { staticClass: "icon icon_size_16" }, [
          _c("use", {
            attrs: {
              "xlink:href": "/dist/img/icons/_declaration/sprite.svg#icon_close"
            }
          })
        ])
      ]
    ),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "wrapper lm-m-register-page-wrapper" },
      [
         false ? [_vm._m(0)] : _vm._e(),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "lm-m-register-wrap-form" },
          [
            _c("h2", { staticClass: "heading heading_h2 mb_9" }, [
              _vm._v("Регистрация")
            ]),
            _vm._v(" "),
            _c(
              "form",
              {
                attrs: { methods: "POST", action: "/register" },
                on: {
                  submit: function($event) {
                    $event.preventDefault()
                    return _vm._handleSubmitFormRegister($event)
                  }
                }
              },
              [
                _c(
                  "div",
                  { staticClass: "form__group form__group_declaration" },
                  [
                    _c(
                      "div",
                      {
                        staticClass:
                          "column justify_center align_flex-end position_relative"
                      },
                      [
                        _vm.state.is.code
                          ? [
                              _c(
                                "a",
                                {
                                  staticClass: "form__input_change-link",
                                  attrs: { href: "javascript:void(0)" },
                                  on: { click: _vm._handleClickEditLogin }
                                },
                                [
                                  _c(
                                    "svg",
                                    {
                                      staticClass:
                                        "icon icon_size_16 icon_fill_lm-gray-3"
                                    },
                                    [
                                      _c("use", {
                                        attrs: {
                                          "xlink:href":
                                            "/dist/img/icons/_declaration/sprite.svg#icon_edit"
                                        }
                                      })
                                    ]
                                  )
                                ]
                              )
                            ]
                          : _vm._e(),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            { name: "mask-phone", rawName: "v-mask-phone" },
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.fields.phone,
                              expression: "fields.phone"
                            },
                            {
                              name: "validate",
                              rawName: "v-validate",
                              value: { rules: { required: true, phone: true } },
                              expression:
                                "{ rules: { required: true, phone: true } }"
                            }
                          ],
                          ref: "phone",
                          class: [
                            { error: _vm.verrors.has("phone") },
                            "input",
                            "form__input",
                            "form__input_declaration"
                          ],
                          attrs: {
                            type: "tel",
                            autocomplete: "off",
                            autofocus: "",
                            name: "phone",
                            id: "phone",
                            placeholder: "+7 900 000 00 00",
                            "data-vv-as": "Телефон",
                            disabled: _vm.loading || _vm.state.is.code
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
                        })
                      ],
                      2
                    ),
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
                _vm.state.is.code
                  ? [
                      _c(
                        "div",
                        { staticClass: "form__group form__group_declaration" },
                        [
                          _c("input", {
                            directives: [
                              {
                                name: "mask-static",
                                rawName: "v-mask-static",
                                value: "9{4}",
                                expression: "'9{4}'"
                              },
                              {
                                name: "validate",
                                rawName: "v-validate",
                                value: "digits:4|required",
                                expression: "'digits:4|required'"
                              },
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.fields.code,
                                expression: "fields.code"
                              }
                            ],
                            ref: "code",
                            class: [
                              { error: _vm.verrors.has("code") },
                              "input",
                              "form__input",
                              "form__input_declaration"
                            ],
                            attrs: {
                              type: "number",
                              pattern: "[0-9]*",
                              min: "0",
                              inputmode: "numeric",
                              tabindex: "2",
                              name: "code",
                              id: "code",
                              placeholder: "Смс код",
                              "data-vv-as": "Код",
                              disabled: _vm.loading
                            },
                            domProps: { value: _vm.fields.code },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.fields,
                                  "code",
                                  $event.target.value
                                )
                              }
                            }
                          }),
                          _vm._v(" "),
                          _vm.verrors.has("code")
                            ? [
                                _c(
                                  "div",
                                  {
                                    staticClass:
                                      "form__notification form__notification_declaration form__notification_declaration_required"
                                  },
                                  [_vm._v(_vm._s(_vm.verrors.first("code")))]
                                )
                              ]
                            : _vm._e()
                        ],
                        2
                      )
                    ]
                  : _vm._e(),
                _vm._v(" "),
                _c(
                  "div",
                  [
                    _c(
                      "button",
                      {
                        staticClass: "btn btn_primary w_100",
                        attrs: { disabled: _vm.hasPhoneFiled === false },
                        on: {
                          click: function($event) {
                            $event.stopPropagation()
                            $event.preventDefault()
                            return _vm._handleClickValidateLogin($event)
                          }
                        }
                      },
                      [_vm._v("Продолжить")]
                    ),
                    _vm._v(" "),
                    _vm.state.is.phone ? [_vm._m(1)] : _vm._e()
                  ],
                  2
                )
              ],
              2
            ),
            _vm._v(" "),
            _vm.state.is.phone
              ? [
                  _c(
                    "div",
                    { staticClass: "lm-m-sign-up" },
                    [
                      _c("div", { staticClass: "heading heading_h5" }, [
                        _vm._v("Уже есть аккаунт?")
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "m-text_normal-2 color_gray-2 mb_2" },
                        [
                          _vm._v(
                            "Войдите, используя номер телефона или почту, указанную при регистрации"
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "router-link",
                        {
                          staticClass: "m-text_bold color_main",
                          attrs: { to: { name: "login" } }
                        },
                        [_vm._v("Войти в аккаунт")]
                      )
                    ],
                    1
                  )
                ]
              : _vm._e(),
            _vm._v(" "),
            _vm.state.is.code
              ? [
                  _c(
                    "div",
                    { staticClass: "mt_9" },
                    [
                      _vm.counting
                        ? [
                            _c("countdown", {
                              attrs: { time: 60000 },
                              on: { countdownend: _vm._handleCountdownEnd },
                              scopedSlots: _vm._u(
                                [
                                  {
                                    key: "default",
                                    fn: function(props) {
                                      return [
                                        _c(
                                          "div",
                                          {
                                            staticClass:
                                              "heading heading_h5 mb_1"
                                          },
                                          [_vm._v("Отправить код ещё раз")]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          {
                                            staticClass:
                                              "m-text_normal-2 color_gray-2"
                                          },
                                          [
                                            _vm._v(
                                              "через " +
                                                _vm._s(props.seconds) +
                                                " секунд"
                                            )
                                          ]
                                        )
                                      ]
                                    }
                                  }
                                ],
                                null,
                                false,
                                4034692830
                              )
                            })
                          ]
                        : _vm.counting === false
                        ? [
                            _c(
                              "a",
                              {
                                staticClass: "m-text_bold color_main",
                                attrs: { href: "javascript:void(0)" },
                                on: { click: _vm._getCodeAuthByPhone }
                              },
                              [_vm._v("Отправить код ещё раз")]
                            )
                          ]
                        : _vm._e()
                    ],
                    2
                  )
                ]
              : _vm._e()
          ],
          2
        )
      ],
      2
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "a",
      {
        staticClass: "banner",
        attrs: { href: "https://m.linkmuse.com/certifying/executor" }
      },
      [
        _c("img", {
          attrs: {
            src: "/dist/img/register/__banners/banner_mobile.png",
            alt: "mobile banner"
          }
        })
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "m-text_normal color_gray-3 mt_6" }, [
      _vm._v(
        "\n              Указывая номер телефона, вы соглашаетесь на обработку "
      ),
      _c(
        "a",
        {
          staticClass: "color_main",
          attrs: { target: "_blank", href: "/pages/agreements" }
        },
        [_vm._v("Персональных данных")]
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
    require("vue-hot-reload-api")      .rerender("data-v-028c8680", esExports)
  }
}

/***/ })

});
//# sourceMappingURL=237.build.964a24bb8838fe452d11.js.map