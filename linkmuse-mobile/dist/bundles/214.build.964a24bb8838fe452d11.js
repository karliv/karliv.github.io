webpackJsonp([214],{

/***/ 1268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Login_OLD_vue__ = __webpack_require__(1612);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_27238d16_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Login_OLD_vue__ = __webpack_require__(1909);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1907)
}
var normalizeComponent = __webpack_require__(2)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Login_OLD_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_27238d16_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Login_OLD_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/views/Auth/Login.OLD.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-27238d16", Component.options)
  } else {
    hotAPI.reload("data-v-27238d16", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 1612:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vee_validate__ = __webpack_require__(440);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mint_ui__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mint_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_mint_ui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__xkeshi_vue_countdown__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_state_machine__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_state_machine___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_state_machine__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__modules_oauth_native__ = __webpack_require__(436);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_libphonenumber_js__ = __webpack_require__(439);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  components: { 'countdown': __WEBPACK_IMPORTED_MODULE_3__xkeshi_vue_countdown__["a" /* default */] },
  metaInfo: {
    title: 'Вход'
  },
  data: function data() {
    return {
      fields: {
        code: null,
        phone: null,
        login: null,
        password: null
      },
      state: null,
      isNative: true,
      loading: false,
      counting: false,
      isEmailLogin: false,
      isPhoneLogin: false
    };
  },

  computed: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["c" /* mapGetters */])({
    user: 'auth/getAuthUser',
    hasPhone: 'auth/hasPhone',
    isAuthorized: 'auth/isAuthorized',
    isRegistered: 'auth/isRegistered'
  }), {
    hasLoginFiled: function hasLoginFiled() {
      return !!this.fields.login;
    },
    loggedByEmail: function loggedByEmail() {
      return Boolean(this.isEmailLogin);
    },
    loggedByPhone: function loggedByPhone() {
      return Boolean(this.isPhoneLogin);
    },
    hasPhoneFiled: function hasPhoneFiled() {
      return !!this.fields['phone'];
    }
  }),
  created: function created() {
    var _this = this;

    this.fsm = __WEBPACK_IMPORTED_MODULE_5_state_machine__["StateMachine"].create({
      transitions: ['nextEmail : login > email', 'nextPhone : login > phone'],

      handlers: {
        'login@nextEmail': this._handleNextEmail,
        'login@nextPhone': this._handleNextPhone
      }
    });

    this.state = __WEBPACK_IMPORTED_MODULE_5_state_machine__["StateHelper"].object(this.fsm).data;

    this.$root.$on('attached-phone', function () {
      __WEBPACK_IMPORTED_MODULE_2_mint_ui__["Indicator"].open();

      _this.$store.dispatch('auth/setUserField', { key: 'hasPhone', value: true });
      _this.$store.dispatch('auth/getUserByAPI').then(function (user) {
        var isRegistered = user.isRegistered;

        if (isRegistered) {
          _this._handleRedirectAfterAuth().then(function () {
            __WEBPACK_IMPORTED_MODULE_2_mint_ui__["Indicator"].close();
          }).catch(function () {
            __WEBPACK_IMPORTED_MODULE_2_mint_ui__["Indicator"].close();
          });
        } else _this.$router.replace({ name: 'user.register' }, function () {
          __WEBPACK_IMPORTED_MODULE_2_mint_ui__["Indicator"].close();
        }, function () {
          __WEBPACK_IMPORTED_MODULE_2_mint_ui__["Indicator"].close();
        });
      });
    });
  },

  watch: {
    'fields.code': function fieldsCode(val) {
      if (val && val.length === 4) {
        this._authByPhone();
      }
    }
  },
  mounted: function mounted() {
    var _this2 = this;

    if (__WEBPACK_IMPORTED_MODULE_4__utils__["n" /* isBrowser */] && Object(__WEBPACK_IMPORTED_MODULE_4__utils__["l" /* has */])(this.$route.params, 'social') && Object(__WEBPACK_IMPORTED_MODULE_4__utils__["l" /* has */])(this.$route.query, 'code')) this._handleOAuth();
    if (__WEBPACK_IMPORTED_MODULE_4__utils__["n" /* isBrowser */]) {
      setTimeout(function () {
        _this2.isNative = Object(__WEBPACK_IMPORTED_MODULE_4__utils__["o" /* isNative */])();
      }, 100);
    }
  },

  methods: {
    _handleClickPreviousPage: function _handleClickPreviousPage() {
      this.$router.push({ name: 'index' });
    },
    _handleOAuth: function _handleOAuth() {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var _$route, social, code;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _$route = _this3.$route, social = _$route.params.social, code = _$route.query.code;


                _this3.attemptSign(_this3.$api.get('oauth/mobile/' + social + '/callback?code=' + code)).then(function (r) {}, function (e) {});

              case 2:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this3);
      }))();
    },
    _handleValidateFields: function _handleValidateFields() {
      var _this4 = this;

      return new Promise(function (resolve, reject) {
        _this4.$validator.validateAll().then(function (result) {
          if (result) {
            resolve(result);
          } else reject();
        });
      });
    },
    _handleSubmitFormLogin: function _handleSubmitFormLogin(e) {
      var _this5 = this;

      e.preventDefault();
      return new Promise(function (resolve, reject) {
        _this5._handleValidateFields().then(function () {
          if (_this5.isEmailLogin) {
            _this5._authByEmail().then(function () {
              resolve && resolve();
            }).catch(function () {
              reject && reject();
            });
          } else if (_this5.isPhoneLogin) {
            _this5._authByPhone().then(function () {
              resolve && resolve();
            }).catch(function () {
              reject && reject();
            });
          } else reject && reject();
        }).catch(function () {});
      });
    },
    _handleClickValidateLogin: function _handleClickValidateLogin() {
      var _this6 = this;

      var login = this.fields.login;


      this._handleValidateFields().then(function () {
        var validator = new __WEBPACK_IMPORTED_MODULE_1_vee_validate__["a" /* Validator */]();

        validator.verify(login, 'email').then(function (_ref) {
          var valid = _ref.valid;

          if (valid) {
            _this6.fsm.do('nextEmail');
          } else {
            var phone = Object(__WEBPACK_IMPORTED_MODULE_7_libphonenumber_js__["b" /* parsePhoneNumberFromString */])(login, 'RU');
            // console.log(phone)

            if (phone && phone.isValid()) {
              var number = phone.number;

              _this6.fields.login = number;

              _this6.fsm.do('nextPhone');
            } else _this6.$validator.errors.add({ field: 'login', msg: 'Проверьте правильность ввода.' });
          }
        });
      });
    },
    _handleClickEditLogin: function _handleClickEditLogin() {
      this.isEmailLogin = false;
      this.isPhoneLogin = false;
      this.fields['code'] = null;

      this.fsm.go('login', true);
    },
    _handleNextEmail: function _handleNextEmail(event, fsm) {
      var _this7 = this;

      fsm.pause();

      try {
        this.isEmailLogin = true;
        this.isPhoneLogin = false;

        fsm.resume();

        this.$nextTick(function () {
          return _this7.$refs['password'].focus();
        });
      } catch (e) {
        fsm.cancel();
      }
    },
    _handleNextPhone: function _handleNextPhone(event, fsm) {
      var _this8 = this;

      fsm.pause();

      this._getCodeAuthByPhone().then(function () {
        _this8.isPhoneLogin = true;
        _this8.isEmailLogin = false;

        fsm.resume();

        _this8.$nextTick(function () {
          return _this8.$refs['code'].focus();
        });
      }).catch(function (e) {
        fsm.cancel();
      });
    },
    _getCodeAuthByPhone: function _getCodeAuthByPhone() {
      var _this9 = this;

      return new Promise(function (resolve, reject) {

        __WEBPACK_IMPORTED_MODULE_2_mint_ui__["Indicator"].open();
        _this9.loading = true;
        var phone = _this9.fields.login;


        _this9.$api.post('api/v2/auth/login/phone', { phone: phone }).then(function (response) {
          __WEBPACK_IMPORTED_MODULE_2_mint_ui__["Indicator"].close();
          _this9.loading = false;
          _this9.counting = true;

          resolve && resolve(response);
        }).catch(function (error) {
          __WEBPACK_IMPORTED_MODULE_2_mint_ui__["Indicator"].close();
          _this9.loading = false;

          reject && reject(error);
          var _error$response = error.response,
              data = _error$response.data,
              status = _error$response.status;


          if (status === 422) {
            var errors = data.errors;

            Object.keys(errors).forEach(function (key) {
              return _this9.$validator.errors.add({ field: 'login', msg: errors[key].join(', ') });
            });
          } else if (status === 403) {
            _this9.$validator.errors.add({ field: 'login', msg: 'Слишком много попыток подтверждения. Пожалуйста, повторите позже.' });
          } else throw new Error('Error authenticate profile');
        });
      });
    },
    _handleCountdownEnd: function _handleCountdownEnd() {
      this.counting = false;
    },
    _authByEmail: function _authByEmail() {
      var _this10 = this;

      var _fields = this.fields,
          email = _fields.login,
          password = _fields.password;


      this._attemptSign(this.$api.post('api/v2/auth/login', { email: email, password: password })).then(function (response) {}, function (error) {
        console.log(error);
        var _error$response2 = error.response,
            data = _error$response2.data,
            status = _error$response2.status;


        if (status === 422) {
          var errors = data.errors;

          Object.keys(errors).forEach(function (key) {
            return _this10.$validator.errors.add({ field: 'login', msg: errors[key].join(', ') });
          });
        } else if (status === 403 || status === 401) {
          _this10.$validator.errors.add({ field: 'login', msg: 'Введен неверный логин или пароль' });
        } else throw new Error('Error authenticate profile');
      });
    },
    _authByPhone: function _authByPhone() {
      var _this11 = this;

      var _fields2 = this.fields,
          phone = _fields2.login,
          code = _fields2.code;

      var referral = this.$cookies.get('referral');

      this._attemptSign(this.$api.post('api/v2/auth/login/phone/verify', { phone: phone, code: code, referral: referral })).then(function (response) {}, function (error) {
        var _error$response3 = error.response,
            data = _error$response3.data,
            status = _error$response3.status;


        _this11.$nextTick(function () {
          return _this11.$refs['code'].focus();
        });

        if (status === 422 || status === 429) {
          var errors = data.errors;

          Object.keys(errors).forEach(function (key) {
            return _this11.$validator.errors.add({ field: 'code', msg: errors[key].join(', ') });
          });
        } else if (status === 404 || status === 500) {
          _this11.$validator.errors.add({ field: 'code', msg: 'Неверный код подтверждения.' });
        } else throw new Error('Error authenticate profile');
      });
    },
    _attemptSign: function _attemptSign(apiPromise) {
      var _this12 = this;

      return new Promise(function (resolve, reject) {
        __WEBPACK_IMPORTED_MODULE_2_mint_ui__["Indicator"].open();

        _this12.loading = true;

        apiPromise.then(function (response) {
          _this12.loading = false;

          Object(__WEBPACK_IMPORTED_MODULE_2_mint_ui__["Toast"])({
            message: 'Успешно',
            iconClass: 'mintui mintui-success'
          });

          var _response$data = response.data,
              token = _response$data.token,
              role = _response$data.role,
              hasEmail = _response$data.hasEmail,
              locale = _response$data.locale;


          _this12.$auth.storeSession({ token: token, role: role, hasEmail: hasEmail });

          _this12.$gtm.trackEvent({ event: 'authorization' });
          _this12.$store.dispatch('auth/setLocale', locale || 'ru');

          _this12.$store.dispatch('auth/setToken', { accessToken: token, refreshToken: token }).then(function (result) {
            _this12.$store.dispatch('auth/getUserByAPI').then(function (user) {
              var isRegistered = user.isRegistered,
                  hasPhone = user.hasPhone;

              if (hasPhone) {
                if (isRegistered) {
                  _this12._handleRedirectAfterAuth().then(function () {
                    __WEBPACK_IMPORTED_MODULE_2_mint_ui__["Indicator"].close();
                  }).catch(function () {
                    __WEBPACK_IMPORTED_MODULE_2_mint_ui__["Indicator"].close();
                  });
                } else _this12.$router.replace({ name: 'user.register' }, function () {
                  __WEBPACK_IMPORTED_MODULE_2_mint_ui__["Indicator"].close();
                }, function () {
                  __WEBPACK_IMPORTED_MODULE_2_mint_ui__["Indicator"].close();
                });
              } else __WEBPACK_IMPORTED_MODULE_2_mint_ui__["Indicator"].close();
            });
          });

          resolve && resolve(response);
        }).catch(function (e) {
          _this12._handleError();

          reject && reject(e);
        });
      });
    },
    _handleError: function _handleError() {
      __WEBPACK_IMPORTED_MODULE_2_mint_ui__["Indicator"].close();

      Object(__WEBPACK_IMPORTED_MODULE_2_mint_ui__["Toast"])({
        message: 'Ошибка',
        iconClass: 'mintui mintui-field-error'
      });

      this.loading = false;
    },
    _handleRedirectAfterAuth: function _handleRedirectAfterAuth() {
      var _this13 = this;

      return new Promise(function (resolve, reject) {
        if (_this13.$localStorage.get('redirect.register', null, String)) {
          var location = _this13.$localStorage.get('redirect.register', '/', String);
          _this13.$localStorage.remove('redirect.register');
          _this13.$router.push(location, function () {
            resolve && resolve();
          }, function () {
            reject && reject();
          });
        } else if (_this13.$localStorage.get('redirect.freekino', null, String)) {
          _this13.$localStorage.remove('redirect.freekino');
          window.location.href = process.env.FREEKINO_URL + '/?ak=' + _this13.$cookies.get('id_token');
          resolve && resolve();
        } else _this13.$router.push({ name: 'board.castings.index' }, function () {
          resolve && resolve();
        }, function () {
          reject && reject();
        });
      });
    },
    _handleClickOAuthVk: function _handleClickOAuthVk() {
      var _this14 = this;

      this.$nativeOAuth.appOAuth(__WEBPACK_IMPORTED_MODULE_6__modules_oauth_native__["d" /* VK */]).then(function (data) {
        var get = Object(__WEBPACK_IMPORTED_MODULE_4__utils__["l" /* has */])(data, 'mobile') ? _this14.$api.get('/api/v1/oauth/vkontakte/callback', data) : _this14.$api.get('oauth/mobile/vkontakte/callback?code=' + data.code);
        _this14._attemptSign(get).then(function (response) {}, function (e) {
          if (e) {
            var _data = e.response.data;

            _this14.$bugsnag.metaData = { data: _data };
            throw e;
          }
        });
      }).catch(function (e) {
        _this14.$oauth.vkAuth().then(function (data) {
          var social = data.social,
              code = data.code;

          _this14._attemptSign(_this14.$api.get('oauth/mobile/' + social + '/callback?code=' + code)).then(function (r) {}, function (e) {});
        }).catch(function (e) {
          throw new Error(e);
        });
      });
    },
    _handleClickOAuthFacebook: function _handleClickOAuthFacebook() {
      var _this15 = this;

      this.$nativeOAuth.appOAuth(__WEBPACK_IMPORTED_MODULE_6__modules_oauth_native__["b" /* FB */]).then(function (data) {
        _this15._attemptSign(_this15.$api.get('/api/v1/oauth/facebook/callback', data)).then(function (response) {}, function (e) {
          if (e) {
            var _data2 = e.response.data;

            _this15.$bugsnag.metaData = { data: _data2 };
            throw e;
          }
        });
      }).catch(function (e) {
        _this15.$oauth.fbAuth().then(function (data) {
          var social = data.social,
              code = data.code;

          _this15._attemptSign(_this15.$api.get('oauth/mobile/' + social + '/callback?code=' + code)).then(function (r) {}, function (e) {});
        }).catch(function (e) {
          throw new Error(e);
        });
      });
    },
    _handleClickOAuthGoogle: function _handleClickOAuthGoogle() {
      var _this16 = this;

      this.$nativeOAuth.appOAuth(__WEBPACK_IMPORTED_MODULE_6__modules_oauth_native__["c" /* GOOGLE */]).then(function (data) {
        if (!Object(__WEBPACK_IMPORTED_MODULE_4__utils__["l" /* has */])(data, 'code')) return _this16._handleError();

        _this16._attemptSign(_this16.$api.get('oauth/mobile/google/callback?code=' + data.code)).then(function (response) {}, function (e) {
          if (e) {
            var _data3 = e.response.data;

            _this16.$bugsnag.metaData = { data: _data3 };
            throw e;
          }
        });
      }).catch(function (e) {
        _this16.$oauth.googleAuth().then(function (data) {
          var social = data.social,
              code = data.code;

          _this16._attemptSign(_this16.$api.get('oauth/mobile/' + social + '/callback?code=' + code)).then(function (r) {}, function (e) {});
        }).catch(function (e) {
          throw new Error(e);
        });
      });
    },
    _handleClickOAuthApple: function _handleClickOAuthApple() {
      var _this17 = this;

      this.$oauth.appleAuth().then(function (data) {
        var social = data.social,
            code = data.code;

        _this17._attemptSign(_this17.$api.post('oauth/mobile/' + social + '/callback?code=' + code)).then(function (r) {}, function (e) {});
      }).catch(function (e) {
        throw new Error(e);
      });
    },
    _handleClickAttachPhoneUser: function _handleClickAttachPhoneUser() {
      var _this18 = this;

      this._handleValidateFields('attached').then(function () {
        var phone = _this18.fields.phone;

        _this18.$modalRouter.push({ name: 'users.settings.phone.attach', props: { phone: phone } });
      }).catch(function () {});
    }
  }
});
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(18)))

/***/ }),

/***/ 1907:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1908);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("9d4e9d5e", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js?sourceMap!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-27238d16\",\"scoped\":false,\"hasInlineConfig\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Login.OLD.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js?sourceMap!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-27238d16\",\"scoped\":false,\"hasInlineConfig\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Login.OLD.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1908:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(true);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"Login.OLD.vue","sourceRoot":""}]);

// exports


/***/ }),

/***/ 1909:
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
    _c("div", { staticClass: "wrapper lm-m-register-page-wrapper" }, [
      _c(
        "div",
        { staticClass: "lm-m-register-wrap-form" },
        [
          _vm.isAuthorized === false
            ? [
                _c("h2", { staticClass: "heading heading_h2 mb_9" }, [
                  _vm._v("Вход")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "lm-social" }, [
                  _c(
                    "div",
                    {
                      staticClass: "lm-social-apple",
                      on: {
                        click: function($event) {
                          return _vm._handleClickOAuthApple()
                        }
                      }
                    },
                    [
                      _c("svg", { staticClass: "icon icon_size_18" }, [
                        _c("use", {
                          attrs: {
                            "xlink:href":
                              "/dist/img/icons/svg/sprite.svg#lm-icon-apple"
                          }
                        })
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass: "lm-social-fb",
                      on: {
                        click: function($event) {
                          return _vm._handleClickOAuthFacebook()
                        }
                      }
                    },
                    [
                      _c("svg", { staticClass: "icon icon_size_16" }, [
                        _c("use", {
                          attrs: {
                            "xlink:href":
                              "/dist/img/icons/svg/sprite.svg#lm-icon-fb"
                          }
                        })
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass: "lm-social-vk",
                      on: {
                        click: function($event) {
                          return _vm._handleClickOAuthVk()
                        }
                      }
                    },
                    [
                      _c("svg", { staticClass: "icon icon_size_18" }, [
                        _c("use", {
                          attrs: {
                            "xlink:href":
                              "/dist/img/icons/svg/sprite.svg#lm-icon-vk"
                          }
                        })
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass: "lm-social-google",
                      on: {
                        click: function($event) {
                          return _vm._handleClickOAuthGoogle()
                        }
                      }
                    },
                    [
                      _c("svg", { staticClass: "icon icon_size_16" }, [
                        _c("use", {
                          attrs: {
                            "xlink:href":
                              "/dist/img/icons/svg/sprite.svg#lm-icon-google"
                          }
                        })
                      ])
                    ]
                  )
                ]),
                _vm._v(" "),
                _c(
                  "form",
                  {
                    attrs: { methods: "POST", action: "/login" },
                    on: {
                      submit: function($event) {
                        $event.preventDefault()
                        return _vm._handleSubmitFormLogin($event)
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
                            _vm.state.is.phone
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
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.fields.login,
                                  expression: "fields.login"
                                },
                                {
                                  name: "validate",
                                  rawName: "v-validate",
                                  value: {
                                    rules: {
                                      required: true,
                                      phone: _vm.loggedByPhone,
                                      email: _vm.loggedByEmail
                                    }
                                  },
                                  expression:
                                    "{ rules: { required: true, phone: loggedByPhone, email: loggedByEmail } }"
                                }
                              ],
                              class: [
                                { error: _vm.verrors.has("login") },
                                "input",
                                "form__input",
                                "form__input_declaration"
                              ],
                              attrs: {
                                type: "text",
                                tabindex: "1",
                                name: "login",
                                id: "login",
                                autocapitalize: "off",
                                placeholder: "Телефон или Почта",
                                "data-vv-as": _vm.state.is.login
                                  ? "Телефон или Почта"
                                  : _vm.loggedByPhone
                                  ? "телефон"
                                  : "почта",
                                disabled: _vm.loading || _vm.state.is.phone
                              },
                              domProps: { value: _vm.fields.login },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.fields,
                                    "login",
                                    $event.target.value
                                  )
                                }
                              }
                            })
                          ],
                          2
                        ),
                        _vm._v(" "),
                        _vm.verrors.has("login")
                          ? [
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "form__notification form__notification_declaration form__notification_declaration_required"
                                },
                                [_vm._v(_vm._s(_vm.verrors.first("login")))]
                              )
                            ]
                          : _vm._e()
                      ],
                      2
                    ),
                    _vm._v(" "),
                    _vm.state.is.email
                      ? [
                          _c(
                            "div",
                            {
                              staticClass: "form__group form__group_declaration"
                            },
                            [
                              _c("input", {
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
                                  { error: _vm.verrors.has("password") },
                                  "input",
                                  "form__input",
                                  "form__input_declaration"
                                ],
                                attrs: {
                                  type: "password",
                                  tabindex: "2",
                                  name: "password",
                                  id: "password",
                                  placeholder: "Пароль",
                                  "data-vv-as": "Пароль",
                                  disabled: _vm.loading
                                },
                                domProps: { value: _vm.fields.password },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.fields,
                                      "password",
                                      $event.target.value
                                    )
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _vm.verrors.has("password")
                                ? [
                                    _c(
                                      "div",
                                      {
                                        staticClass:
                                          "form__notification form__notification_declaration form__notification_declaration_required"
                                      },
                                      [
                                        _vm._v(
                                          _vm._s(_vm.verrors.first("password"))
                                        )
                                      ]
                                    )
                                  ]
                                : _vm._e()
                            ],
                            2
                          )
                        ]
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.state.is.phone
                      ? [
                          _c(
                            "div",
                            {
                              staticClass: "form__group form__group_declaration"
                            },
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
                                      [
                                        _vm._v(
                                          _vm._s(_vm.verrors.first("code"))
                                        )
                                      ]
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
                        _vm.state.is.login
                          ? [
                              _c(
                                "button",
                                {
                                  staticClass: "btn btn_primary w_100",
                                  attrs: {
                                    disabled: _vm.hasLoginFiled === false
                                  },
                                  on: {
                                    click: function($event) {
                                      $event.stopPropagation()
                                      $event.preventDefault()
                                      return _vm._handleClickValidateLogin(
                                        $event
                                      )
                                    }
                                  }
                                },
                                [_vm._v("Продолжить")]
                              )
                            ]
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.state.is.email || _vm.state.is.phone
                          ? [
                              _c(
                                "button",
                                { staticClass: "btn btn_primary w_100" },
                                [_vm._v("Войти")]
                              )
                            ]
                          : _vm._e()
                      ],
                      2
                    )
                  ],
                  2
                ),
                _vm._v(" "),
                [
                  _vm.state.is.login || _vm.state.is.email
                    ? [
                        _c(
                          "div",
                          { staticClass: "lm-m-sign-up" },
                          [
                            _c("div", { staticClass: "heading heading_h5" }, [
                              _vm._v("Не можете войти?")
                            ]),
                            _vm._v(" "),
                            _c(
                              "div",
                              {
                                staticClass: "m-text_normal-2 color_gray-2 mb_2"
                              },
                              [
                                _vm._v(
                                  "Восстановите пароль, в случае смены или утраты доступа к почте"
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "router-link",
                              {
                                staticClass: "m-text_bold color_main",
                                attrs: {
                                  to: { name: "password.email" },
                                  href: "javascript:void(0)"
                                }
                              },
                              [
                                _vm._v(
                                  "\n                Восстановить доступ\n              "
                                )
                              ]
                            )
                          ],
                          1
                        )
                      ]
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.state.is.phone
                    ? [
                        _c(
                          "div",
                          { staticClass: "mt_9" },
                          [
                            _vm.counting
                              ? [
                                  _c("countdown", {
                                    attrs: { time: 60000 },
                                    on: {
                                      countdownend: _vm._handleCountdownEnd
                                    },
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
                                                [
                                                  _vm._v(
                                                    "Отправить код ещё раз"
                                                  )
                                                ]
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
                ]
              ]
            : _vm._e(),
          _vm._v(" "),
          _vm.isAuthorized === true && _vm.hasPhone === false
            ? [
                _c("h2", { staticClass: "heading heading_h2 mb_3" }, [
                  _vm._v("Вход")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "m-text_normal color_gray-3 mb_9" }, [
                  _vm._v(
                    "Подтвердите номер телефона, чтобы продолжить авторизацию"
                  )
                ]),
                _vm._v(" "),
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
                            { error: _vm.verrors.has("password") },
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
                            disabled: _vm.loading
                          },
                          domProps: { value: _vm.fields.phone },
                          on: {
                            keyup: function($event) {
                              if (
                                !$event.type.indexOf("key") &&
                                _vm._k(
                                  $event.keyCode,
                                  "enter",
                                  13,
                                  $event.key,
                                  "Enter"
                                )
                              ) {
                                return null
                              }
                              return _vm._handleClickAttachPhoneUser($event)
                            },
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(_vm.fields, "phone", $event.target.value)
                            }
                          }
                        })
                      ]
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
                _c("div", [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn_primary w_100 mb_6",
                      attrs: { disabled: _vm.hasPhoneFiled === false },
                      on: {
                        click: function($event) {
                          $event.stopPropagation()
                          $event.preventDefault()
                          return _vm._handleClickAttachPhoneUser($event)
                        }
                      }
                    },
                    [_vm._v("Продолжить")]
                  ),
                  _vm._v(" "),
                  _vm._m(0)
                ])
              ]
            : _vm._e(),
          _vm._v(" "),
          _vm.isAuthorized === true && _vm.hasPhone === true
            ? [
                _c("h2", { staticClass: "heading heading_h2 mb_9" }, [
                  _vm._v("Идет переадресация")
                ])
              ]
            : _vm._e()
        ],
        2
      )
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "m-text_normal color_gray-3 mt_6" }, [
      _vm._v(
        "\n            Указывая номер телефона, вы соглашаетесь на обработку "
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
    require("vue-hot-reload-api")      .rerender("data-v-27238d16", esExports)
  }
}

/***/ })

});
//# sourceMappingURL=214.build.964a24bb8838fe452d11.js.map