webpackJsonp([77],{

/***/ 1276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Edit_vue__ = __webpack_require__(1620);
/* empty harmony namespace reexport */
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1926)
}
var normalizeComponent = __webpack_require__(2)
/* script */


/* template */
var __vue_template__ = null
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-c8be9314"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Edit_vue__["a" /* default */],
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/views/Board/Castings/Edit.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-c8be9314", Component.options)
  } else {
    hotAPI.reload("data-v-c8be9314", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 1505:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);


/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      loadingCities: false
    };
  },

  methods: {
    /**
     * Handle change country select. Loaded cities.
     *
     * @param countryId
     * @param clear
     * @param loading
     * @param callback
     * @private
     */
    _handleChangeCountrySelect: function _handleChangeCountrySelect(countryId) {
      var clear = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

      var _this = this;

      var loading = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      var callback = arguments[3];

      if (!countryId) this.fields.cityId = null;
      if (clear) this.fields.cityId = null;

      return new Promise(function (resolve, reject) {
        if (!countryId) {
          reject && reject();
          return false;
        }

        if (callback && typeof callback === 'function') callback();

        _this.sources.cities = [];
        if (loading) _this.loadingCities = true;

        _this._fetchCities(countryId).then(function (data) {
          _this.loadingCities = false;
          _this.$set(_this.sources, 'cities', data);

          resolve && resolve();
        }).catch(function () {
          _this.loadingCities = false;
          reject && reject();
        });
      });
    },

    _handleSearchCities: __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.debounce(function (search, loading, options) {
      var _this2 = this;

      if (search) {
        loading(true);

        this._fetchCities(this.fields.countryId, search).then(function (data) {
          options(data);

          _this2.$set(_this2.sources, 'cities', data);

          var indexOf = data.map(function (c) {
            return c.id;
          }).indexOf(_this2.fields.cityId);
          if (indexOf < 0) _this2.fields.cityId = null;

          loading(false);
        }).catch(function () {
          loading(false);
        });
      }
    }, 500),
    _fetchCities: function _fetchCities(country_id) {
      var _this3 = this;

      var q = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

      return new Promise(function (resolve, reject) {
        _this3.$api.get('api/v1/geo/cities', { q: q, country_id: country_id }).then(function (response) {
          var data = response.data;

          resolve && resolve(data);
        }, function (error) {
          var _error$response = error.response,
              data = _error$response.data,
              status = _error$response.status;

          reject && reject();
          throw new Error('Error loading castings cities');
        });
      });
    }
  }
});

/***/ }),

/***/ 1506:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return MALE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FEMALE; });
var MALE = 1; // Мужской
var FEMALE = 2; // Женский

/***/ }),

/***/ 1507:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mint_ui__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mint_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_mint_ui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vee_validate__ = __webpack_require__(440);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__xkeshi_vue_countdown__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modules_oauth_native__ = __webpack_require__(436);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_state_machine__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_state_machine___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_state_machine__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_libphonenumber_js__ = __webpack_require__(439);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__utils__ = __webpack_require__(6);
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










var KEYS_SIGN = {
  code: 'code',
  login: 'login',
  password: 'password'
};

var KEYS_REGISTER = {
  genderId: 'genderId',
  guardian: 'guardian',
  lastName: 'lastName',
  birthday: 'birthday',
  firstName: 'firstName'
};

var KEYS_ATTACH = {
  phone: 'phone'
};

/* harmony default export */ __webpack_exports__["a"] = ({
  components: { 'countdown': __WEBPACK_IMPORTED_MODULE_3__xkeshi_vue_countdown__["a" /* default */] },
  props: {
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    var _fields, _fields2, _fields3;

    return {
      KEYS_SIGN: KEYS_SIGN,
      KEYS_ATTACH: KEYS_ATTACH,
      KEYS_REGISTER: KEYS_REGISTER,
      isNative: true,
      normalizeDotsToArrow: __WEBPACK_IMPORTED_MODULE_7__utils__["s" /* normalizeDotsToArrow */],
      sign: {
        state: null,
        loading: false,
        counting: false,
        isEmailLogin: false,
        isPhoneLogin: false,
        fields: (_fields = {}, _fields[KEYS_SIGN['code']] = null, _fields[KEYS_SIGN['login']] = null, _fields[KEYS_SIGN['password']] = null, _fields)
      },
      register: {
        loading: false,
        fields: (_fields2 = {}, _fields2[KEYS_REGISTER['genderId']] = null, _fields2[KEYS_REGISTER['guardian']] = null, _fields2[KEYS_REGISTER['lastName']] = null, _fields2[KEYS_REGISTER['birthday']] = null, _fields2[KEYS_REGISTER['firstName']] = null, _fields2)
      },
      attached: {
        loading: false,
        fields: (_fields3 = {}, _fields3[KEYS_ATTACH['phone']] = null, _fields3)
      }
    };
  },

  computed: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["c" /* mapGetters */])({
    user: 'auth/getAuthUser',
    hasPhone: 'auth/hasPhone',
    isAuthorized: 'auth/isAuthorized',
    isRegistered: 'auth/isRegistered'
  }), {
    hasLoginFiled: function hasLoginFiled() {
      return !!this.sign.fields.login;
    },
    loggedByEmail: function loggedByEmail() {
      return Boolean(this.sign.isEmailLogin);
    },
    loggedByPhone: function loggedByPhone() {
      return Boolean(this.sign.isPhoneLogin);
    },
    isChildRegisterUser: function isChildRegisterUser() {
      var date = this.$moment(this.register.fields[KEYS_REGISTER['birthday']], 'DD.MM.YYYY', true),
          adult = this.$moment().subtract(18, 'years');

      return !this.verrors.has('register.birthday') && this.register.fields[KEYS_REGISTER['birthday']] && date.isValid() && date.isAfter(adult, 'day');
    },
    hasBirthdayRegisterUser: function hasBirthdayRegisterUser() {
      return !!this.register.fields['birthday'];
    }
  }),
  created: function created() {
    this.sign.fsm = __WEBPACK_IMPORTED_MODULE_5_state_machine__["StateMachine"].create({
      transitions: ['nextEmail : login > email', 'nextPhone : login > phone'],

      handlers: {
        'login@nextEmail': this._handleNextEmail,
        'login@nextPhone': this._handleNextPhone
      }
    });

    this.sign.state = __WEBPACK_IMPORTED_MODULE_5_state_machine__["StateHelper"].object(this.sign.fsm).data;
  },
  mounted: function mounted() {
    var _this = this;

    this.$root.$on('attached-phone', function () {
      _this.$store.dispatch('auth/getUserByAPI');
      _this.$store.dispatch('auth/setUserField', { key: 'hasPhone', value: true });
    });

    if (__WEBPACK_IMPORTED_MODULE_7__utils__["n" /* isBrowser */]) {
      setTimeout(function () {
        _this.isNative = Object(__WEBPACK_IMPORTED_MODULE_7__utils__["o" /* isNative */])();
      }, 100);
    }
  },

  watch: {
    'sign.fields.code': function signFieldsCode(val) {
      if (val && val.length === 4) {
        this._authByPhone();
      }
    }
  },
  methods: {
    /**
     * Validate all fields on current transition
     * @returns {Promise<any>}
     * @private
     */
    _handleValidateFields: function _handleValidateFields() {
      var _this2 = this;

      var scope = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      return new Promise(function (resolve, reject) {
        _this2.$validator.validateAll(scope).then(function (result) {
          if (result) {
            resolve(result);
          } else reject();
        });
      });
    },
    _scrollToErrorFields: function _scrollToErrorFields() {
      var el = document.getElementsByClassName('error');
      if (el && el.length) this.$scrollTo(el[0], 500, { offset: -40 });
    },
    _handleSubmitFormSign: function _handleSubmitFormSign(e) {
      var _this3 = this;

      e.preventDefault();
      return new Promise(function (resolve, reject) {
        _this3._handleValidateFields('sign').then(function () {
          if (_this3.sign.isEmailLogin) {
            _this3._authByEmail().then(function () {
              resolve && resolve();
            }).catch(function () {
              reject && reject();
            });
          } else if (_this3.sign.isPhoneLogin) {
            _this3._authByPhone().then(function () {
              resolve && resolve();
            }).catch(function () {
              reject && reject();
            });
          } else reject && reject();
        }).catch(function () {});
      });
    },
    _handleClickValidateLogin: function _handleClickValidateLogin() {
      var _this4 = this;

      var login = this.sign.fields.login;


      this._handleValidateFields('sign').then(function () {
        var validator = new __WEBPACK_IMPORTED_MODULE_2_vee_validate__["a" /* Validator */]();

        validator.verify(login, 'email').then(function (_ref) {
          var valid = _ref.valid;

          if (valid) {
            _this4.sign.fsm.do('nextEmail');
          } else {
            var phone = Object(__WEBPACK_IMPORTED_MODULE_6_libphonenumber_js__["b" /* parsePhoneNumberFromString */])(login, 'RU');
            // console.log(phone)

            if (phone && phone.isValid()) {
              var number = phone.number;

              _this4.sign.fields.login = number;

              _this4.sign.fsm.do('nextPhone');
            } else _this4.$validator.errors.add({ field: 'sign.login', msg: 'Проверьте правильность ввода.' });
          }
        });
      });
    },
    _handleClickEditLogin: function _handleClickEditLogin() {
      this.sign.isEmailLogin = false;
      this.sign.isPhoneLogin = false;
      this.sign.fields['code'] = null;

      this.sign.fsm.go('login', true);
    },
    _handleNextEmail: function _handleNextEmail(event, fsm) {
      var _this5 = this;

      fsm.pause();

      try {
        this.sign.isEmailLogin = true;
        this.sign.isPhoneLogin = false;

        fsm.resume();

        this.$nextTick(function () {
          return _this5.$refs['sign.password'].focus();
        });
      } catch (e) {
        fsm.cancel();
      }
    },
    _handleNextPhone: function _handleNextPhone(event, fsm) {
      var _this6 = this;

      fsm.pause();

      this._getCodeAuthByPhone().then(function () {
        _this6.sign.isPhoneLogin = true;
        _this6.sign.isEmailLogin = false;

        fsm.resume();

        _this6.$nextTick(function () {
          return _this6.$refs['sign.code'].focus();
        });
      }).catch(function (e) {
        fsm.cancel();
      });
    },
    _getCodeAuthByPhone: function _getCodeAuthByPhone() {
      var _this7 = this;

      return new Promise(function (resolve, reject) {

        __WEBPACK_IMPORTED_MODULE_1_mint_ui__["Indicator"].open();
        _this7.sign.loading = true;
        var phone = _this7.sign.fields.login;


        _this7.$api.post('api/v2/auth/login/phone', { phone: phone }).then(function (response) {
          __WEBPACK_IMPORTED_MODULE_1_mint_ui__["Indicator"].close();
          _this7.sign.loading = false;
          _this7.sign.counting = true;

          resolve && resolve(response);
        }).catch(function (error) {
          __WEBPACK_IMPORTED_MODULE_1_mint_ui__["Indicator"].close();
          _this7.sign.loading = false;

          reject && reject(error);
          var _error$response = error.response,
              data = _error$response.data,
              status = _error$response.status;


          if (status === 422) {
            var errors = data.errors;

            Object.keys(errors).forEach(function (key) {
              return _this7.$validator.errors.add({ field: 'sign.login', msg: errors[key].join(', ') });
            });
          } else if (status === 403) {
            _this7.$validator.errors.add({ field: 'sign.login', msg: 'Слишком много попыток подтверждения. Пожалуйста, повторите позже.' });
          } else throw new Error('Error authenticate profile');
        });
      });
    },
    _handleCountdownEndSign: function _handleCountdownEndSign() {
      this.sign.counting = false;
    },
    _authByEmail: function _authByEmail() {
      var _this8 = this;

      var _sign$fields = this.sign.fields,
          email = _sign$fields.login,
          password = _sign$fields.password;


      this._attemptSign(this.$api.post('api/v2/auth/login', { email: email, password: password })).then(function (response) {
        _this8.sign.fsm.go('login', true);
      }, function (error) {
        console.log(error);
        var _error$response2 = error.response,
            data = _error$response2.data,
            status = _error$response2.status;


        if (status === 422) {
          var errors = data.errors;

          Object.keys(errors).forEach(function (key) {
            return _this8.$validator.errors.add({ field: 'sign.login', msg: errors[key].join(', ') });
          });
        } else if (status === 403 || status === 401) {
          _this8.$validator.errors.add({ field: 'sign.login', msg: 'Введен неверный логин или пароль' });
        } else throw new Error('Error authenticate profile');
      });
    },
    _authByPhone: function _authByPhone() {
      var _this9 = this;

      var _sign$fields2 = this.sign.fields,
          phone = _sign$fields2.login,
          code = _sign$fields2.code;

      var referral = this.$cookies.get('referral');

      this._attemptSign(this.$api.post('api/v2/auth/login/phone/verify', { phone: phone, code: code, referral: referral })).then(function (response) {
        _this9.sign.fsm.go('login', true);
      }, function (error) {
        var _error$response3 = error.response,
            data = _error$response3.data,
            status = _error$response3.status;

        // this.$nextTick(() => this.$refs['code'].focus())

        if (status === 422 || status === 429) {
          var errors = data.errors;

          Object.keys(errors).forEach(function (key) {
            return _this9.$validator.errors.add({ field: 'sign.code', msg: errors[key].join(', ') });
          });
        } else if (status === 404 || status === 500) {
          _this9.$validator.errors.add({ field: 'sign.code', msg: 'Неверный код подтверждения.' });
        } else throw new Error('Error authenticate profile');
      });
    },
    _attemptSign: function _attemptSign(apiPromise) {
      var _this10 = this;

      return new Promise(function (resolve, reject) {
        __WEBPACK_IMPORTED_MODULE_1_mint_ui__["Indicator"].open();
        _this10.sign.loading = true;

        apiPromise.then(function (response) {
          var _response$data = response.data,
              token = _response$data.token,
              role = _response$data.role,
              hasEmail = _response$data.hasEmail,
              locale = _response$data.locale;


          _this10.$auth.storeSession({ token: token, role: role, hasEmail: hasEmail });

          _this10.$gtm.trackEvent({ event: 'authorization' });
          _this10.$store.dispatch('auth/setLocale', locale || 'ru');

          _this10.$store.dispatch('auth/setToken', { accessToken: token, refreshToken: token }).then(function (result) {
            _this10.$store.dispatch('auth/getUserByAPI').then(function (user) {
              __WEBPACK_IMPORTED_MODULE_1_mint_ui__["Indicator"].close();
              resolve && resolve(user);
              _this10.sign.loading = false;
            });
          });
        }, function (error) {
          var _error$response4 = error.response,
              data = _error$response4.data,
              status = _error$response4.status;


          __WEBPACK_IMPORTED_MODULE_1_mint_ui__["Indicator"].close();
          _this10.sign.loading = false;

          reject && reject(error);
          Object(__WEBPACK_IMPORTED_MODULE_1_mint_ui__["Toast"])({ message: 'Произошла ошибка при авторизации', iconClass: 'mintui mintui-field-error' });

          if (status === 422) {
            var errors = data.errors;

            Object.keys(errors).forEach(function (key) {
              return _this10.$validator.errors.add({ field: 'sign.' + key, msg: errors[key].join(', ') });
            });
          } else throw new Error('Error register user');
        });
      });
    },
    _handleClickRegisterUser: function _handleClickRegisterUser() {
      var _this11 = this;

      this._handleValidateFields('register').then(function () {
        _this11._registerUser();
      }).catch(function () {
        return _this11._scrollToErrorFields();
      });
    },
    _registerUser: function _registerUser() {
      var _this12 = this;

      this.register.loading = true;
      __WEBPACK_IMPORTED_MODULE_1_mint_ui__["Indicator"].open();

      var fields = Object.keys(this.register.fields).filter(function (key) {
        return Object.values(KEYS_REGISTER).includes(key);
      }).reduce(function (obj, key) {
        var _extends2;

        return _extends({}, obj, (_extends2 = {}, _extends2[key] = _this12.register.fields[key], _extends2));
      }, {});

      var data = _extends({}, Object(__WEBPACK_IMPORTED_MODULE_7__utils__["h" /* flatten */])(fields));

      this.$api.post('/api/v2/auth/post-register', data).then(function (response) {
        var url = response.data.url;


        __WEBPACK_IMPORTED_MODULE_1_mint_ui__["Indicator"].close();
        _this12.register.loading = false;

        var user = _this12.$cookies.get('auth_user');
        var age = _this12.$moment().diff(_this12.$moment(_this12.register.fields[KEYS_REGISTER['birthday']], 'DD.MM.YYYY', true), 'years');

        var fields = {
          age: age,
          isRegistered: true,
          gender: { id: _this12.register.fields[KEYS_REGISTER['genderId']] },
          avatar: { '84x84': __WEBPACK_IMPORTED_MODULE_7__utils__["a" /* AVATAR */], '183x183': __WEBPACK_IMPORTED_MODULE_7__utils__["a" /* AVATAR */] },
          name: _this12.register.fields[KEYS_REGISTER['lastName']] + ' ' + _this12.register.fields[KEYS_REGISTER['firstName']]
        };
        Object.assign(user, fields);
        _this12.$cookies.set('auth_user', user, { expires: __WEBPACK_IMPORTED_MODULE_7__utils__["f" /* expires */] });
        Object.keys(fields).forEach(function (key) {
          _this12.$store.dispatch('auth/setUserField', { key: key, value: fields[key] });
        });
      }, function (error) {
        var _error$response5 = error.response,
            data = _error$response5.data,
            status = _error$response5.status;


        __WEBPACK_IMPORTED_MODULE_1_mint_ui__["Indicator"].close();
        _this12.register.loading = false;

        Object(__WEBPACK_IMPORTED_MODULE_1_mint_ui__["Toast"])({ message: 'Произошла ошибка при регистрации', iconClass: 'mintui mintui-field-error' });

        if (status === 422) {
          var errors = data.errors;

          Object.keys(errors).forEach(function (key) {
            return _this12.$validator.errors.add({ field: 'register.' + key, msg: errors[key].join(', ') });
          });
        } else throw new Error('Error register user');
      });
    },
    _handleClickAttachPhoneUser: function _handleClickAttachPhoneUser() {
      var _this13 = this;

      this._handleValidateFields('attached').then(function () {
        var phone = _this13.attached.fields.phone;

        _this13.$modalRouter.push({ name: 'users.settings.phone.attach', props: { phone: phone } });
      }).catch(function () {
        return _this13._scrollToErrorFields();
      });
    },
    _handleClickOAuthVk: function _handleClickOAuthVk() {
      var _this14 = this;

      if (this.disabled) return false;

      this.$nativeOAuth.appOAuth(__WEBPACK_IMPORTED_MODULE_4__modules_oauth_native__["d" /* VK */]).then(function (data) {
        var get = Object(__WEBPACK_IMPORTED_MODULE_7__utils__["l" /* has */])(data, 'mobile') ? _this14.$api.get('/api/v1/oauth/vkontakte/callback', data) : _this14.$api.get('oauth/mobile/vkontakte/callback?code=' + data.code);
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

      if (this.disabled) return false;

      this.$nativeOAuth.appOAuth(__WEBPACK_IMPORTED_MODULE_4__modules_oauth_native__["b" /* FB */]).then(function (data) {
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

      if (this.disabled) return false;

      this.$nativeOAuth.appOAuth(__WEBPACK_IMPORTED_MODULE_4__modules_oauth_native__["c" /* GOOGLE */]).then(function (data) {
        if (!Object(__WEBPACK_IMPORTED_MODULE_7__utils__["l" /* has */])(data, 'code')) return _this16._handleError();

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

      if (this.disabled) return false;

      this.$oauth.appleAuth().then(function (data) {
        var social = data.social,
            code = data.code;

        _this17._attemptSign(_this17.$api.post('oauth/mobile/' + social + '/callback?code=' + code)).then(function (r) {}, function (e) {});
      }).catch(function (e) {
        throw new Error(e);
      });
    }
  }
});

/***/ }),

/***/ 1512:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modules_Board_Enums_BoardType__ = __webpack_require__(154);


/* harmony default export */ __webpack_exports__["a"] = ({
  computed: {
    boardTypes: function boardTypes() {
      return [{ id: __WEBPACK_IMPORTED_MODULE_0__modules_Board_Enums_BoardType__["a" /* CASTING */], text: 'Кастинги' }, { id: __WEBPACK_IMPORTED_MODULE_0__modules_Board_Enums_BoardType__["b" /* LOCATION */], text: 'Локации' }];
    }
  },
  methods: {
    _handleInputBoardType: function _handleInputBoardType(type) {
      if (type === __WEBPACK_IMPORTED_MODULE_0__modules_Board_Enums_BoardType__["a" /* CASTING */]) {
        // this.$loading.show({ loader: 'dots', color: '#0063da' })
        this.$router.push({ name: 'board.castings.create' });
      }

      if (type === __WEBPACK_IMPORTED_MODULE_0__modules_Board_Enums_BoardType__["b" /* LOCATION */]) {
        // this.$loading.show({ loader: 'dots', color: '#0063da' })
        this.$router.push({ name: 'board.locations.create' });
      }
    }
  }
});

/***/ }),

/***/ 1516:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_SignBlock_vue__ = __webpack_require__(1507);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_ed5b0172_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_SignBlock_vue__ = __webpack_require__(1519);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1517)
}
var normalizeComponent = __webpack_require__(2)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-ed5b0172"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_SignBlock_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_ed5b0172_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_SignBlock_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/Board/SignBlock.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-ed5b0172", Component.options)
  } else {
    hotAPI.reload("data-v-ed5b0172", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 1517:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1518);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("7028498e", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js?sourceMap!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-ed5b0172\",\"scoped\":true,\"hasInlineConfig\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./SignBlock.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js?sourceMap!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-ed5b0172\",\"scoped\":true,\"hasInlineConfig\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./SignBlock.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1518:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(true);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"SignBlock.vue","sourceRoot":""}]);

// exports


/***/ }),

/***/ 1519:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      class: [
        "section",
        "form__section form__section_declaration",
        { form__section_declaration_disabled: _vm.disabled }
      ]
    },
    [
      _vm._m(0),
      _vm._v(" "),
      _vm.isAuthorized === false
        ? [
            _c(
              "div",
              { staticClass: "lm-social mb_6" },
              [
                false
                  ? [
                      _c(
                        "div",
                        {
                          class: [
                            "lm-social-apple",
                            { disabled: _vm.disabled }
                          ],
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
                      )
                    ]
                  : _vm._e(),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    class: ["lm-social-fb", { disabled: _vm.disabled }],
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
                    class: ["lm-social-vk", { disabled: _vm.disabled }],
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
                    class: ["lm-social-google", { disabled: _vm.disabled }],
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
              ],
              2
            )
          ]
        : _vm._e(),
      _vm._v(" "),
      _vm.isAuthorized === false ||
      (_vm.isAuthorized === true && _vm.isRegistered === false)
        ? [
            _c(
              "form",
              {
                staticClass: "mb_6",
                attrs: { method: "POST" },
                on: {
                  submit: function($event) {
                    $event.preventDefault()
                    return _vm._handleSubmitFormSign($event)
                  }
                }
              },
              [
                _c(
                  "div",
                  { staticClass: "form__group form__group_declaration" },
                  [
                    _c(
                      "label",
                      {
                        staticClass: "label input__label",
                        attrs: { for: _vm.KEYS_SIGN["login"] }
                      },
                      [_vm._v("\n          Телефон или Почта\n        ")]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass:
                          "column justify_center align_flex-end position_relative"
                      },
                      [
                        _vm.sign.state.is.phone
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
                            },
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.sign.fields[_vm.KEYS_SIGN["login"]],
                              expression: "sign.fields[KEYS_SIGN['login']]"
                            }
                          ],
                          class: [
                            {
                              error: _vm.verrors.has(
                                "sign." +
                                  _vm.normalizeDotsToArrow(
                                    _vm.KEYS_SIGN["login"]
                                  )
                              )
                            },
                            "input",
                            "form__input",
                            "form__input_declaration"
                          ],
                          attrs: {
                            type: "text",
                            tabindex: "1",
                            autocomplete: "off",
                            autocapitalize: "off",
                            name: _vm.normalizeDotsToArrow(
                              _vm.KEYS_SIGN["login"]
                            ),
                            id: _vm.KEYS_SIGN["login"],
                            placeholder: "Телефон или Почта",
                            "data-vv-name": "login",
                            "data-vv-as": _vm.sign.state.is.login
                              ? "Телефон или Почта"
                              : _vm.loggedByPhone
                              ? "телефон"
                              : "почта",
                            "data-vv-scope": "sign",
                            disabled:
                              _vm.disabled ||
                              _vm.isAuthorized === true ||
                              _vm.sign.state.is.phone ||
                              _vm.sign.loading
                          },
                          domProps: {
                            value: _vm.sign.fields[_vm.KEYS_SIGN["login"]]
                          },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.sign.fields,
                                _vm.KEYS_SIGN["login"],
                                $event.target.value
                              )
                            }
                          }
                        })
                      ],
                      2
                    ),
                    _vm._v(" "),
                    _vm.verrors.has(
                      "sign." + _vm.normalizeDotsToArrow(_vm.KEYS_SIGN["login"])
                    )
                      ? [
                          _c(
                            "div",
                            {
                              staticClass:
                                "form__notification form__notification_declaration form__notification_declaration_required"
                            },
                            [
                              _vm._v(
                                _vm._s(
                                  _vm.verrors.first(
                                    "sign." +
                                      _vm.normalizeDotsToArrow(
                                        _vm.KEYS_SIGN["login"]
                                      )
                                  )
                                )
                              )
                            ]
                          )
                        ]
                      : _vm._e()
                  ],
                  2
                ),
                _vm._v(" "),
                _vm.sign.state.is.email
                  ? [
                      _c(
                        "div",
                        { staticClass: "form__group form__group_declaration" },
                        [
                          _c(
                            "label",
                            {
                              staticClass: "label input__label",
                              attrs: { for: _vm.KEYS_SIGN["password"] }
                            },
                            [_vm._v("\n            Пароль\n          ")]
                          ),
                          _vm._v(" "),
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
                                value:
                                  _vm.sign.fields[_vm.KEYS_SIGN["password"]],
                                expression: "sign.fields[KEYS_SIGN['password']]"
                              }
                            ],
                            ref: "sign.password",
                            class: [
                              {
                                error: _vm.verrors.has(
                                  "sign." +
                                    _vm.normalizeDotsToArrow(
                                      _vm.KEYS_SIGN["password"]
                                    )
                                )
                              },
                              "input",
                              "form__input",
                              "form__input_declaration"
                            ],
                            attrs: {
                              type: "password",
                              autocomplete: "off",
                              autocapitalize: "off",
                              name: _vm.normalizeDotsToArrow(
                                _vm.KEYS_SIGN["password"]
                              ),
                              id: _vm.KEYS_SIGN["password"],
                              placeholder: "Введите пароль",
                              "data-vv-scope": "sign",
                              "data-vv-as": "Пароль",
                              disabled:
                                _vm.disabled || _vm.isAuthorized === true
                            },
                            domProps: {
                              value: _vm.sign.fields[_vm.KEYS_SIGN["password"]]
                            },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.sign.fields,
                                  _vm.KEYS_SIGN["password"],
                                  $event.target.value
                                )
                              }
                            }
                          }),
                          _vm._v(" "),
                          _vm.verrors.has(
                            "sign." +
                              _vm.normalizeDotsToArrow(
                                _vm.KEYS_SIGN["password"]
                              )
                          )
                            ? [
                                _c(
                                  "div",
                                  {
                                    staticClass:
                                      "form__notification form__notification_declaration form__notification_declaration_required"
                                  },
                                  [
                                    _vm._v(
                                      _vm._s(
                                        _vm.verrors.first(
                                          "sign." +
                                            _vm.normalizeDotsToArrow(
                                              _vm.KEYS_SIGN["password"]
                                            )
                                        )
                                      )
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
                _vm.sign.state.is.phone
                  ? [
                      _c(
                        "div",
                        { staticClass: "form__group form__group_declaration" },
                        [
                          _c(
                            "label",
                            {
                              staticClass: "label input__label",
                              attrs: { for: _vm.KEYS_SIGN["code"] }
                            },
                            [_vm._v("\n            Смс код\n          ")]
                          ),
                          _vm._v(" "),
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
                                value: _vm.sign.fields[_vm.KEYS_SIGN["code"]],
                                expression: "sign.fields[KEYS_SIGN['code']]"
                              }
                            ],
                            ref: "sign.code",
                            class: [
                              {
                                error: _vm.verrors.has(
                                  "sign." +
                                    _vm.normalizeDotsToArrow(
                                      _vm.KEYS_SIGN["code"]
                                    )
                                )
                              },
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
                              name: _vm.normalizeDotsToArrow(
                                _vm.KEYS_SIGN["code"]
                              ),
                              id: _vm.KEYS_SIGN["code"],
                              placeholder: "Смс код",
                              "data-vv-as": "Код",
                              "data-vv-name": "code",
                              "data-vv-scope": "sign",
                              disabled:
                                _vm.disabled ||
                                _vm.isAuthorized === true ||
                                _vm.sign.loading
                            },
                            domProps: {
                              value: _vm.sign.fields[_vm.KEYS_SIGN["code"]]
                            },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.sign.fields,
                                  _vm.KEYS_SIGN["code"],
                                  $event.target.value
                                )
                              }
                            }
                          }),
                          _vm._v(" "),
                          _vm.verrors.has(
                            "sign." +
                              _vm.normalizeDotsToArrow(_vm.KEYS_SIGN["code"])
                          )
                            ? [
                                _c(
                                  "div",
                                  {
                                    staticClass:
                                      "form__notification form__notification_declaration form__notification_declaration_required"
                                  },
                                  [
                                    _vm._v(
                                      _vm._s(
                                        _vm.verrors.first(
                                          "sign." +
                                            _vm.normalizeDotsToArrow(
                                              _vm.KEYS_SIGN["code"]
                                            )
                                        )
                                      )
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
                _vm.isAuthorized === false
                  ? [
                      _c(
                        "div",
                        { staticClass: "form__group form__group_declaration" },
                        [
                          _vm.sign.state.is.login
                            ? [
                                _c(
                                  "button",
                                  {
                                    staticClass: "btn btn_primary",
                                    attrs: {
                                      disabled:
                                        _vm.hasLoginFiled === false &&
                                        _vm.disabled
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
                          _vm.sign.state.is.email || _vm.sign.state.is.phone
                            ? [
                                _c(
                                  "button",
                                  {
                                    staticClass: "btn btn_primary",
                                    attrs: { disabled: _vm.disabled }
                                  },
                                  [_vm._v("Войти")]
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
            ),
            _vm._v(" "),
            _vm.isAuthorized === true && _vm.isRegistered === false
              ? [
                  _c(
                    "div",
                    { staticClass: "form__group form__group_declaration" },
                    [
                      _c(
                        "label",
                        {
                          staticClass: "label input__label",
                          attrs: { for: _vm.KEYS_REGISTER["firstName"] }
                        },
                        [_vm._v("\n          Имя\n        ")]
                      ),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "validate",
                            rawName: "v-validate",
                            value: "required|min:1|max:255",
                            expression: "'required|min:1|max:255'"
                          },
                          {
                            name: "model",
                            rawName: "v-model",
                            value:
                              _vm.register.fields[
                                _vm.KEYS_REGISTER["firstName"]
                              ],
                            expression:
                              "register.fields[KEYS_REGISTER['firstName']]"
                          }
                        ],
                        class: [
                          {
                            error: _vm.verrors.has(
                              "register." +
                                _vm.normalizeDotsToArrow(
                                  _vm.KEYS_REGISTER["firstName"]
                                )
                            )
                          },
                          "input",
                          "form__input",
                          "form__input_declaration"
                        ],
                        attrs: {
                          type: "text",
                          autocomplete: "off",
                          name: _vm.normalizeDotsToArrow(
                            _vm.KEYS_REGISTER["firstName"]
                          ),
                          id: _vm.KEYS_REGISTER["firstName"],
                          "data-vv-name": _vm.KEYS_REGISTER["firstName"],
                          "data-vv-as": "Имя",
                          placeholder: "Введите имя",
                          "data-vv-scope": "register"
                        },
                        domProps: {
                          value:
                            _vm.register.fields[_vm.KEYS_REGISTER["firstName"]]
                        },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.register.fields,
                              _vm.KEYS_REGISTER["firstName"],
                              $event.target.value
                            )
                          }
                        }
                      }),
                      _vm._v(" "),
                      _vm.verrors.has(
                        "register." +
                          _vm.normalizeDotsToArrow(
                            _vm.KEYS_REGISTER["firstName"]
                          )
                      )
                        ? [
                            _c(
                              "div",
                              {
                                staticClass:
                                  "form__notification form__notification_declaration form__notification_declaration_required"
                              },
                              [
                                _vm._v(
                                  _vm._s(
                                    _vm.verrors.first(
                                      "register." +
                                        _vm.normalizeDotsToArrow(
                                          _vm.KEYS_REGISTER["firstName"]
                                        )
                                    )
                                  )
                                )
                              ]
                            )
                          ]
                        : _vm._e()
                    ],
                    2
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "form__group form__group_declaration" },
                    [
                      _c(
                        "label",
                        {
                          staticClass: "label input__label",
                          attrs: { for: _vm.KEYS_REGISTER["lastName"] }
                        },
                        [_vm._v("\n          Фамилия\n        ")]
                      ),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "validate",
                            rawName: "v-validate",
                            value: "required|min:1|max:255",
                            expression: "'required|min:1|max:255'"
                          },
                          {
                            name: "model",
                            rawName: "v-model",
                            value:
                              _vm.register.fields[
                                _vm.KEYS_REGISTER["lastName"]
                              ],
                            expression:
                              "register.fields[KEYS_REGISTER['lastName']]"
                          }
                        ],
                        class: [
                          {
                            error: _vm.verrors.has(
                              "register." +
                                _vm.normalizeDotsToArrow(
                                  _vm.KEYS_REGISTER["lastName"]
                                )
                            )
                          },
                          "input",
                          "form__input",
                          "form__input_declaration"
                        ],
                        attrs: {
                          type: "text",
                          autocomplete: "off",
                          name: _vm.normalizeDotsToArrow(
                            _vm.KEYS_REGISTER["lastName"]
                          ),
                          id: _vm.KEYS_REGISTER["lastName"],
                          "data-vv-name": _vm.KEYS_REGISTER["lastName"],
                          "data-vv-as": "Имя",
                          placeholder: "Введите фамилию",
                          "data-vv-scope": "register"
                        },
                        domProps: {
                          value:
                            _vm.register.fields[_vm.KEYS_REGISTER["lastName"]]
                        },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.register.fields,
                              _vm.KEYS_REGISTER["lastName"],
                              $event.target.value
                            )
                          }
                        }
                      }),
                      _vm._v(" "),
                      _vm.verrors.has(
                        "register." +
                          _vm.normalizeDotsToArrow(
                            _vm.KEYS_REGISTER["lastName"]
                          )
                      )
                        ? [
                            _c(
                              "div",
                              {
                                staticClass:
                                  "form__notification form__notification_declaration form__notification_declaration_required"
                              },
                              [
                                _vm._v(
                                  _vm._s(
                                    _vm.verrors.first(
                                      "register." +
                                        _vm.normalizeDotsToArrow(
                                          _vm.KEYS_REGISTER["lastName"]
                                        )
                                    )
                                  )
                                )
                              ]
                            )
                          ]
                        : _vm._e()
                    ],
                    2
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "form__group form__group_declaration" },
                    [
                      _c(
                        "label",
                        {
                          staticClass: "label input__label",
                          attrs: { for: _vm.KEYS_REGISTER["birthday"] }
                        },
                        [_vm._v("\n          Дата рождения\n        ")]
                      ),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          { name: "mask-date", rawName: "v-mask-date" },
                          {
                            name: "validate",
                            rawName: "v-validate",
                            value: "date_format:DD.MM.YYYY|required",
                            expression: "`date_format:DD.MM.YYYY|required`"
                          },
                          {
                            name: "model",
                            rawName: "v-model",
                            value:
                              _vm.register.fields[
                                _vm.KEYS_REGISTER["birthday"]
                              ],
                            expression:
                              "register.fields[KEYS_REGISTER['birthday']]"
                          }
                        ],
                        class: [
                          {
                            error: _vm.verrors.has(
                              "register." +
                                _vm.normalizeDotsToArrow(
                                  _vm.KEYS_REGISTER["birthday"]
                                )
                            )
                          },
                          "input",
                          "form__input",
                          "form__input_declaration"
                        ],
                        attrs: {
                          type: "text",
                          autocomplete: "off",
                          name: _vm.normalizeDotsToArrow(
                            _vm.KEYS_REGISTER["birthday"]
                          ),
                          id: _vm.KEYS_REGISTER["birthday"],
                          "data-vv-name": _vm.KEYS_REGISTER["birthday"],
                          "data-vv-as": "Дата рождения",
                          placeholder: "Введите дату рождения",
                          "data-vv-scope": "register"
                        },
                        domProps: {
                          value:
                            _vm.register.fields[_vm.KEYS_REGISTER["birthday"]]
                        },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.register.fields,
                              _vm.KEYS_REGISTER["birthday"],
                              $event.target.value
                            )
                          }
                        }
                      }),
                      _vm._v(" "),
                      _vm.verrors.has(
                        "register." +
                          _vm.normalizeDotsToArrow(
                            _vm.KEYS_REGISTER["birthday"]
                          )
                      )
                        ? [
                            _c(
                              "div",
                              {
                                staticClass:
                                  "form__notification form__notification_declaration form__notification_declaration_required"
                              },
                              [
                                _vm._v(
                                  _vm._s(
                                    _vm.verrors.first(
                                      "register." +
                                        _vm.normalizeDotsToArrow(
                                          _vm.KEYS_REGISTER["birthday"]
                                        )
                                    )
                                  )
                                )
                              ]
                            )
                          ]
                        : _vm._e()
                    ],
                    2
                  ),
                  _vm._v(" "),
                  _vm.hasBirthdayRegisterUser &&
                  _vm.isChildRegisterUser === true
                    ? [
                        _c(
                          "div",
                          {
                            staticClass: "form__group form__group_declaration"
                          },
                          [
                            _c(
                              "label",
                              {
                                staticClass: "label input__label",
                                attrs: { for: _vm.KEYS_REGISTER["guardian"] }
                              },
                              [_vm._v("\n            Имя родителя\n          ")]
                            ),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "validate",
                                  rawName: "v-validate",
                                  value: "required|min:1|max:255",
                                  expression: "'required|min:1|max:255'"
                                },
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value:
                                    _vm.register.fields[
                                      _vm.KEYS_REGISTER["guardian"]
                                    ],
                                  expression:
                                    "register.fields[KEYS_REGISTER['guardian']]"
                                }
                              ],
                              class: [
                                {
                                  error: _vm.verrors.has(
                                    "register." +
                                      _vm.normalizeDotsToArrow(
                                        _vm.KEYS_REGISTER["guardian"]
                                      )
                                  )
                                },
                                "input",
                                "form__input",
                                "form__input_declaration"
                              ],
                              attrs: {
                                type: "text",
                                autocomplete: "off",
                                name: _vm.normalizeDotsToArrow(
                                  _vm.KEYS_REGISTER["guardian"]
                                ),
                                id: _vm.KEYS_REGISTER["guardian"],
                                "data-vv-name": _vm.KEYS_REGISTER["guardian"],
                                "data-vv-as": "Введите имя и фамилию",
                                placeholder: "Введите имя и фамилию",
                                "data-vv-scope": "register"
                              },
                              domProps: {
                                value:
                                  _vm.register.fields[
                                    _vm.KEYS_REGISTER["guardian"]
                                  ]
                              },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.register.fields,
                                    _vm.KEYS_REGISTER["guardian"],
                                    $event.target.value
                                  )
                                }
                              }
                            }),
                            _vm._v(" "),
                            _vm.verrors.has(
                              "register." +
                                _vm.normalizeDotsToArrow(
                                  _vm.KEYS_REGISTER["guardian"]
                                )
                            )
                              ? [
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "form__notification form__notification_declaration form__notification_declaration_required"
                                    },
                                    [
                                      _vm._v(
                                        _vm._s(
                                          _vm.verrors.first(
                                            "register." +
                                              _vm.normalizeDotsToArrow(
                                                _vm.KEYS_REGISTER["guardian"]
                                              )
                                          )
                                        )
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
                    { staticClass: "form__group form__group_declaration" },
                    [
                      _c("label", { staticClass: "label input__label" }, [
                        _vm._v("\n          Пол\n        ")
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "form__row form__row_declaration" },
                        [
                          _c(
                            "div",
                            {
                              staticClass:
                                "form__column form__column_declaration"
                            },
                            [
                              _c("input", {
                                directives: [
                                  {
                                    name: "validate",
                                    rawName: "v-validate",
                                    value: "required",
                                    expression: "'required'"
                                  },
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value:
                                      _vm.register.fields[
                                        _vm.KEYS_REGISTER["genderId"]
                                      ],
                                    expression:
                                      "register.fields[KEYS_REGISTER['genderId']]"
                                  }
                                ],
                                staticClass:
                                  "form__checkbox form__checkbox_declaration form__checkbox_declaration_gender",
                                attrs: {
                                  id:
                                    "form__checkbox_declaration_gender_female",
                                  type: "radio",
                                  disabled: _vm.disabled,
                                  name: _vm.normalizeDotsToArrow(
                                    _vm.KEYS_REGISTER["genderId"]
                                  ),
                                  "data-vv-name": _vm.KEYS_REGISTER["genderId"],
                                  "data-vv-as": "Пол",
                                  "data-vv-scope": "register"
                                },
                                domProps: {
                                  value: 2,
                                  checked: _vm._q(
                                    _vm.register.fields[
                                      _vm.KEYS_REGISTER["genderId"]
                                    ],
                                    2
                                  )
                                },
                                on: {
                                  change: function($event) {
                                    return _vm.$set(
                                      _vm.register.fields,
                                      _vm.KEYS_REGISTER["genderId"],
                                      2
                                    )
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _c(
                                "label",
                                {
                                  staticClass:
                                    "checkbox__label_declaration checkbox__label_declaration_gender",
                                  attrs: {
                                    for:
                                      "form__checkbox_declaration_gender_female"
                                  }
                                },
                                [_vm._v("Женский")]
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass:
                                "form__column form__column_declaration"
                            },
                            [
                              _c("input", {
                                directives: [
                                  {
                                    name: "validate",
                                    rawName: "v-validate",
                                    value: "required",
                                    expression: "'required'"
                                  },
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value:
                                      _vm.register.fields[
                                        _vm.KEYS_REGISTER["genderId"]
                                      ],
                                    expression:
                                      "register.fields[KEYS_REGISTER['genderId']]"
                                  }
                                ],
                                staticClass:
                                  "form__checkbox form__checkbox_declaration form__checkbox_declaration_gender",
                                attrs: {
                                  id: "form__checkbox_declaration_gender_male",
                                  type: "radio",
                                  disabled: _vm.disabled,
                                  name: _vm.normalizeDotsToArrow(
                                    _vm.KEYS_REGISTER["genderId"]
                                  ),
                                  "data-vv-name": _vm.KEYS_REGISTER["genderId"],
                                  "data-vv-as": "Пол",
                                  "data-vv-scope": "register"
                                },
                                domProps: {
                                  value: 1,
                                  checked: _vm._q(
                                    _vm.register.fields[
                                      _vm.KEYS_REGISTER["genderId"]
                                    ],
                                    1
                                  )
                                },
                                on: {
                                  change: function($event) {
                                    return _vm.$set(
                                      _vm.register.fields,
                                      _vm.KEYS_REGISTER["genderId"],
                                      1
                                    )
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _c(
                                "label",
                                {
                                  staticClass:
                                    "checkbox__label_declaration checkbox__label_declaration_gender",
                                  attrs: {
                                    for:
                                      "form__checkbox_declaration_gender_male"
                                  }
                                },
                                [_vm._v("Мужской")]
                              )
                            ]
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _vm.verrors.has(
                        "register." +
                          _vm.normalizeDotsToArrow(
                            _vm.KEYS_REGISTER["genderId"]
                          )
                      )
                        ? [
                            _c(
                              "div",
                              {
                                staticClass:
                                  "form__notification form__notification_declaration form__notification_declaration_required"
                              },
                              [
                                _vm._v(
                                  _vm._s(
                                    _vm.verrors.first(
                                      "register." +
                                        _vm.normalizeDotsToArrow(
                                          _vm.KEYS_REGISTER["genderId"]
                                        )
                                    )
                                  )
                                )
                              ]
                            )
                          ]
                        : _vm._e()
                    ],
                    2
                  ),
                  _vm._v(" "),
                  _vm._m(1),
                  _vm._v(" "),
                  _vm.hasBirthdayRegisterUser &&
                  _vm.isChildRegisterUser === true
                    ? [_vm._m(2)]
                    : _vm._e(),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "form__group form__group_declaration" },
                    [
                      _c(
                        "button",
                        {
                          staticClass: "btn btn_primary",
                          attrs: { disabled: _vm.disabled },
                          on: { click: _vm._handleClickRegisterUser }
                        },
                        [_vm._v("Зарегистрироваться")]
                      )
                    ]
                  )
                ]
              : _vm._e()
          ]
        : _vm._e()
    ],
    2
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "moderate_rules mb_6" }, [
      _c("div", { staticClass: "moderate_rules__title mb_2" }, [
        _vm._v("Вы не авторизованны")
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "moderate_rules__text" }, [
        _vm._v(
          "Для публикации объявления войдите в свой аккаунт или зарегистрируйте новый"
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "lm-input-wrap moderate_rules mb_9" }, [
      _vm._v("\n        Регистрируясь, вы соглашаетесь на обработку\n        "),
      _c(
        "a",
        {
          staticClass: "m-text_bold color_main",
          attrs: { target: "_blank", href: "/pages/agreements" }
        },
        [_vm._v("Персональных данных")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "lm-input-wrap moderate_rules mb_9" }, [
      _vm._v("\n          Регистрируясь, вы также соглашаетесь с\n          "),
      _c(
        "a",
        {
          staticClass: "m-text_bold color_main",
          attrs: { target: "_blank", href: "/pages/agreements_children" }
        },
        [_vm._v("Политикой обработки персональных данных несовершеннолетнего")]
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
    require("vue-hot-reload-api")      .rerender("data-v-ed5b0172", esExports)
  }
}

/***/ }),

/***/ 1537:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return PUBLISH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DRAFT; });
/* unused harmony export REPUBLISH */
/* unused harmony export APPROVE */
/* unused harmony export REJECT */
/* unused harmony export ARCHIVE */
var PUBLISH = 'publish';
var DRAFT = 'draft';
var REPUBLISH = 'republish';
var APPROVE = 'approve';
var REJECT = 'reject';
var ARCHIVE = 'archive';

/***/ }),

/***/ 1538:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Board_SignBlock_vue__ = __webpack_require__(1516);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  components: {
    SignBlock: __WEBPACK_IMPORTED_MODULE_0__components_Board_SignBlock_vue__["a" /* default */]
  }
});

/***/ }),

/***/ 1561:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mint_ui__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mint_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_mint_ui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vuex_map_fields__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_UI_Dropzone_Index_vue__ = __webpack_require__(434);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__modules_User_Enums_Sex__ = __webpack_require__(1506);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__modules_Board_Casting_Enums_CastingRole__ = __webpack_require__(1562);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__modules_Board_Casting_Enums_CastingTransition__ = __webpack_require__(1537);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__modules_Geo_mixins_AjaxSelectCity__ = __webpack_require__(1505);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };













var _createHelpers = Object(__WEBPACK_IMPORTED_MODULE_3_vuex_map_fields__["a" /* createHelpers */])({
  getterType: 'board/casting/getField',
  mutationType: 'board/casting/updateField'
}),
    mapFields = _createHelpers.mapFields;

var BASE_URL_UPLOAD = "https://feature-single-profile.test.cnt.team";

/* harmony default export */ __webpack_exports__["a"] = ({
  mixins: [__WEBPACK_IMPORTED_MODULE_8__modules_Geo_mixins_AjaxSelectCity__["a" /* default */]],
  components: { 'lm-dropzone': __WEBPACK_IMPORTED_MODULE_4__components_UI_Dropzone_Index_vue__["a" /* default */] },
  data: function data() {
    return {
      has: __WEBPACK_IMPORTED_MODULE_0__utils__["l" /* has */],
      MALE: __WEBPACK_IMPORTED_MODULE_5__modules_User_Enums_Sex__["b" /* MALE */],
      FEMALE: __WEBPACK_IMPORTED_MODULE_5__modules_User_Enums_Sex__["a" /* FEMALE */],
      PUBLISH: __WEBPACK_IMPORTED_MODULE_7__modules_Board_Casting_Enums_CastingTransition__["b" /* PUBLISH */],
      DRAFT: __WEBPACK_IMPORTED_MODULE_7__modules_Board_Casting_Enums_CastingTransition__["a" /* DRAFT */],
      state: null,
      uploads: [],
      showFieldForm: true
    };
  },

  computed: _extends({}, mapFields({ fields: 'form.fields', defaultFields: 'form.defaultFields' }), Object(__WEBPACK_IMPORTED_MODULE_1_vuex__["c" /* mapGetters */])({
    user: 'auth/getAuthUser',
    hasPhone: 'auth/hasPhone',
    hasEmail: 'auth/hasEmail',
    profile: 'auth/getProfile',
    isAuthorized: 'auth/isAuthorized',
    isRegistered: 'auth/isRegistered',
    sources: 'board/casting/getSources'
  }), {
    hasCategory: function hasCategory() {
      return this.fields.categoryId !== null;
    },
    hasCountry: function hasCountry() {
      return !!this.fields.countryId;
    },
    isPublishCastingTransition: function isPublishCastingTransition() {
      return this.fields.transition === __WEBPACK_IMPORTED_MODULE_7__modules_Board_Casting_Enums_CastingTransition__["b" /* PUBLISH */];
    },
    feeCurrencies: function feeCurrencies() {
      return this.sources['feeCurrencies'].map(function (curr) {
        return { id: curr.id, text: curr.symbol };
      });
    },
    isCastingOnline: function isCastingOnline() {
      return Boolean(Number(this.fields.isOnline));
    },
    isCurrentUser: function isCurrentUser() {
      return this.user && this.edit && this.user.id === this.casting.user.id || !this.edit;
    },
    isAdmin: function isAdmin() {
      return this.user && this.user.hasOwnProperty('isAdmin') && this.user['isAdmin'] === true;
    },
    isForActorAndModel: function isForActorAndModel() {
      var _this = this;

      if (this.fields.professions.length === 0) return false;

      // TODO: Bad method
      var professions = this.sources['professions'].filter(function (r) {
        return _this.fields.professions.includes(r.id);
      }).map(function (r) {
        return r.name;
      });
      return this._.difference(professions, [__WEBPACK_IMPORTED_MODULE_6__modules_Board_Casting_Enums_CastingRole__["a" /* ACTOR */], __WEBPACK_IMPORTED_MODULE_6__modules_Board_Casting_Enums_CastingRole__["b" /* MODEL */]]).length === 0 || false;
    },
    placeholderDescription: function placeholderDescription() {
      return '\u0420\u0430\u0441\u0441\u043A\u0430\u0436\u0438\u0442\u0435 \u0432 \u043F\u043E\u0434\u0440\u043E\u0431\u043D\u043E\u0441\u0442\u044F\u0445 \u043E\u0431 \u043E\u0431\u044A\u044F\u0432\u043B\u0435\u043D\u0438\u0438. \u041E\u043F\u0438\u0448\u0438\u0442\u0435 \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u044B\u0435 \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u044B, \u043E\u0431\u044F\u0437\u0430\u043D\u043D\u043E\u0441\u0442\u0438 \u0438 \u0432\u0440\u0435\u043C\u044F \u0440\u0430\u0431\u043E\u0442\u044B\n\n\u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F \u0438\u0437 \u043E\u043F\u0438\u0441\u0430\u043D\u0438\u044F \u0434\u043E\u043B\u0436\u043D\u0430 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u043E\u0432\u0430\u0442\u044C \u0432\u0441\u0435\u043C \u0437\u0430\u043F\u043E\u043B\u043D\u0435\u043D\u043D\u044B\u043C \u043F\u043E\u043B\u044F\u043C\u2028\n\n\u0412 \u043E\u043F\u0438\u0441\u0430\u043D\u0438\u0438 \u0437\u0430\u043F\u0440\u0435\u0449\u0435\u043D\u043E \u0443\u043A\u0430\u0437\u044B\u0432\u0430\u0442\u044C \u043A\u043E\u043D\u0442\u0430\u043A\u0442\u043D\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435 \u0438 \u0441\u0441\u044B\u043B\u043A\u0438 \u043D\u0430 \u0434\u0440\u0443\u0433\u0438\u0435 \u0440\u0435\u0441\u0443\u0440\u0441\u044B';
    },
    showReset: function showReset() {
      var fields = this._.omit(this.fields);
      var defaultFields = this._.omit(this.defaultFields);

      return this._.isEqual(fields, defaultFields) === false;
    }
  }),
  created: function created() {
    this.fields['isOnline'] = 0;
    this.fields['fee'] = 1;
  },
  mounted: function mounted() {
    if (!this.fields['feeCurrencyId']) {
      this.fields['feeCurrencyId'] = this.sources['feeCurrencies'].length ? this.sources['feeCurrencies'][0]['id'] : null;
    }
  },


  methods: {
    _handleBlurUpdateField: function _handleBlurUpdateField() {
      if (this.edit === false) {
        this.$localStorage.set('board.create', JSON.stringify(this.fields));
      }
    },
    _handleClickPreviousPage: function _handleClickPreviousPage() {
      var _this2 = this;

      if (this.edit === false && this.hasCategory && this.isAuthorized && this.isRegistered && this.hasEmail) {
        this.$confirm({
          cancelTxt: 'выйти',
          confirmTxt: 'отмена',
          title: 'Вы покидаете страницу',
          message: 'Внесенные данные не сохранятся, желаете ?'
        }).then(function () {
          // this._handleClickCreateCasting(DRAFT)
        }).catch(function () {
          return _this2._handlePreviousPage();
        });
      } else this._handlePreviousPage();
    },
    _handlePreviousPage: function _handlePreviousPage() {
      if (window.history.length > 2) {
        this.$router.go(-1);
      } else this.$router.push({ name: 'board.castings.index' });
    },

    /**
     * Handle change category select
     * @private
     */
    _handleInputCategory: function _handleInputCategory() {
      var _this3 = this;

      setTimeout(function () {
        _this3.$scrollTo('#form__group_declaration_role', 500, { offset: -20 });
      }, 250);
    },

    /**
     * Validate all fields on current transition
     * @returns {Promise<any>}
     * @private
     */
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

    /**
     * Next transition
     * @private
     */
    _handleClickNextTransition: function _handleClickNextTransition() {
      this.fsm.do('next');
    },

    /**
     * Back transition
     * @private
     */
    _handleClickBackTransition: function _handleClickBackTransition() {
      this.fsm.do('back');
    },

    /**
     * Handle updated items DropZone
     * @param items
     */
    handleUploadItems: function handleUploadItems(items) {
      this.uploads = items;
      this.fields.references = items.map(function (item) {
        return item.id;
      });
    },

    /**
     * Add item on DropZone
     *
     * @param item
     * @param file
     * @param progress
     * @param success
     * @param error
     * @private
     */
    _handleAttach: function _handleAttach(item, file, progress, success, error) {
      var data = new FormData();

      data.append('reference', file);

      var url = this.edit && this.casting ? 'api/v2/boards/castings/' + this.casting.id + '/references' : 'api/v2/boards/castings/references';

      this.$api.post(url, data, {
        baseURL: BASE_URL_UPLOAD,
        cancelToken: item.source.token,
        timeout: 120000,
        onUploadProgress: function onUploadProgress(progressEvent) {
          progress(item.uid, progressEvent);
        }
      }).then(function (response) {
        var _response$data$data = response.data.data,
            id = _response$data$data.id,
            path = _response$data$data.path;


        success(item.uid, { id: id, path: path });
      }).catch(function (err) {
        error(item.uid, err, 'reference');
        console.error('Error upload reference');
      });
    },

    /**
     * Removed item on DropZone
     * @param item
     * @param remove
     * @private
     */
    _handleAttachRemove: function _handleAttachRemove(item, remove) {
      this.$api.delete('api/v2/boards/castings/references/' + item.id).then(function (response) {
        remove(item.uid);
      }).catch(function () {
        remove(item.uid, false);
        throw new Error('Error delete reference');
      });
    }
  }
});

/***/ }),

/***/ 1562:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ACTOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return MODEL; });
var ACTOR = 'actor';
var MODEL = 'model';

/***/ }),

/***/ 1563:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Form_vue__ = __webpack_require__(1538);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_6e711050_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Form_vue__ = __webpack_require__(1566);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1564)
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Form_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_6e711050_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Form_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/modules/Board/Casting/extends/Form.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6e711050", Component.options)
  } else {
    hotAPI.reload("data-v-6e711050", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 1564:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1565);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("0c06431d", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6e711050\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js?indentedSyntax!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Form.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6e711050\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js?indentedSyntax!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Form.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1565:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(true);
// imports


// module
exports.push([module.i, "\n.moderate_rules {\n  padding: 20px;\n  border-radius: 8px;\n  background-color: #ebf3fc;\n}\n.moderate_rules__title {\n    color: #282a36;\n    font-size: 14px;\n    font-weight: 600;\n}\n.moderate_rules__text {\n    color: #515562;\n    font-size: 14px;\n    line-height: 1.29;\n}\n.moderate_rules__link {\n    color: #0d69dc;\n    font-size: 14px;\n    font-weight: 600;\n}\n", "", {"version":3,"sources":["/home/karliv/work/linkmuse-mobile/src/modules/Board/Casting/extends/Form.vue"],"names":[],"mappings":";AAAA;EACE,cAAc;EACd,mBAAmB;EACnB,0BAA0B;CAAE;AAC5B;IACE,eAAe;IACf,gBAAgB;IAChB,iBAAiB;CAAE;AACrB;IACE,eAAe;IACf,gBAAgB;IAChB,kBAAkB;CAAE;AACtB;IACE,eAAe;IACf,gBAAgB;IAChB,iBAAiB;CAAE","file":"Form.vue","sourcesContent":[".moderate_rules {\n  padding: 20px;\n  border-radius: 8px;\n  background-color: #ebf3fc; }\n  .moderate_rules__title {\n    color: #282a36;\n    font-size: 14px;\n    font-weight: 600; }\n  .moderate_rules__text {\n    color: #515562;\n    font-size: 14px;\n    line-height: 1.29; }\n  .moderate_rules__link {\n    color: #0d69dc;\n    font-size: 14px;\n    font-weight: 600; }\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 1566:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "page page_declaration" }, [
    _c(
      "div",
      { staticClass: "form form_declaration" },
      [
        _c("div", { staticClass: "form__header form__header_declaration" }, [
          _c("div", { staticClass: "form__title form__title_declaration" }, [
            _vm._v(_vm._s(_vm.title))
          ]),
          _vm._v(" "),
          _c(
            "button",
            {
              staticClass: "form__button_close_declaration",
              on: { click: _vm._handleClickPreviousPage }
            },
            [
              _c("svg", { staticClass: "btn__icon icon_fill_white" }, [
                _c("use", {
                  attrs: {
                    "xlink:href": "/dist/img/icons/svg/sprite.svg#lm-close"
                  }
                })
              ])
            ]
          )
        ]),
        _vm._v(" "),
        _vm._m(0),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "section form__section form__section_declaration" },
          [
            _c(
              "div",
              { staticClass: "form__group form__group_declaration" },
              [
                _c(
                  "label",
                  {
                    staticClass: "label input__label",
                    attrs: { for: "form__select_declaration_type" }
                  },
                  [
                    _vm._v(
                      "\n          " +
                        _vm._s(
                          _vm.$t(
                            "board-create-casting.new-casting.casting-type"
                          )
                        ) +
                        "\n          "
                    ),
                    _c("span", { staticClass: "label_declaration_required" }, [
                      _vm._v("•")
                    ])
                  ]
                ),
                _vm._v(" "),
                _c("lm-select", {
                  attrs: {
                    label: "",
                    "data-vv-as": "Тип объявления",
                    "input-required": false,
                    "input-id": "form__select_declaration_type",
                    "input-name": "categoryBoard",
                    placeholder: "Не выбрано",
                    placeholderDisabled: true,
                    placeholderHidden: true,
                    disabled: _vm.edit === true,
                    options: _vm.boardTypes
                  },
                  on: { input: _vm._handleInputBoardType },
                  model: {
                    value: _vm.fields["categoryBoard"],
                    callback: function($$v) {
                      _vm.$set(_vm.fields, "categoryBoard", $$v)
                    },
                    expression: "fields['categoryBoard']"
                  }
                })
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "form__group form__group_declaration" },
              [
                _c(
                  "label",
                  {
                    staticClass: "label input__label",
                    attrs: { for: "form__select_declaration_category" }
                  },
                  [
                    _vm._v(
                      "\n          " +
                        _vm._s(
                          _vm.$t(
                            "board-create-casting.new-casting.casting-category"
                          )
                        ) +
                        "\n          "
                    ),
                    _c("span", { staticClass: "label_declaration_required" }, [
                      _vm._v("•")
                    ])
                  ]
                ),
                _vm._v(" "),
                _c("lm-select", {
                  directives: [
                    {
                      name: "validate",
                      rawName: "v-validate",
                      value: "required",
                      expression: "'required'"
                    }
                  ],
                  class: [{ error: _vm.verrors.has("categoryId") }],
                  attrs: {
                    "data-vv-name": "categoryId",
                    "data-vv-as": "категория",
                    "input-required": false,
                    "input-id": "form__select_declaration_category",
                    "input-name": "category",
                    placeholder: _vm.$t(
                      "board-create-casting.new-casting.category-not-selected"
                    ),
                    placeholderDisabled: true,
                    placeholderHidden: true,
                    label: "",
                    options: _vm.sources["categories"]
                  },
                  on: {
                    input: _vm._handleInputCategory,
                    change: _vm._handleBlurUpdateField
                  },
                  model: {
                    value: _vm.fields.categoryId,
                    callback: function($$v) {
                      _vm.$set(_vm.fields, "categoryId", $$v)
                    },
                    expression: "fields.categoryId"
                  }
                }),
                _vm._v(" "),
                _vm.verrors.has("categoryId")
                  ? [
                      _c(
                        "div",
                        {
                          staticClass:
                            "form__notification form__notification_declaration form__notification_declaration_required"
                        },
                        [_vm._v(_vm._s(_vm.verrors.first("categoryId")))]
                      )
                    ]
                  : _vm._e()
              ],
              2
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "form__group form__group_declaration",
                attrs: { id: "form__group_declaration_role" }
              },
              [
                _c(
                  "label",
                  {
                    staticClass: "label input__label",
                    attrs: { for: "form__select_declaration_role" }
                  },
                  [
                    _vm._v(
                      "\n          " +
                        _vm._s(
                          _vm.$t(
                            "board-create-casting.new-casting.casting-role"
                          )
                        ) +
                        "\n        "
                    )
                  ]
                ),
                _vm._v(" "),
                _c("lm-select", {
                  class: [{ error: _vm.verrors.has("professions") }],
                  attrs: {
                    "data-vv-name": "professions",
                    "data-vv-as": "Роль",
                    "input-required": false,
                    "input-id": "form__select_declaration_role",
                    "input-name": "professions",
                    placeholder: _vm.$t(
                      "board-create-casting.new-casting.role-not-selected"
                    ),
                    multiple: true,
                    label: "",
                    disabled:
                      _vm.hasCategory === false ||
                      !_vm.sources["professions"].length,
                    options: _vm.sources["professions"]
                  },
                  on: { input: _vm._handleBlurUpdateField },
                  model: {
                    value: _vm.fields.professions,
                    callback: function($$v) {
                      _vm.$set(_vm.fields, "professions", $$v)
                    },
                    expression: "fields.professions"
                  }
                }),
                _vm._v(" "),
                _vm.verrors.has("professions")
                  ? [
                      _c(
                        "div",
                        {
                          staticClass:
                            "form__notification form__notification_declaration form__notification_declaration_required"
                        },
                        [_vm._v(_vm._s(_vm.verrors.first("professions")))]
                      )
                    ]
                  : _vm._e()
              ],
              2
            )
          ]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            class: [
              "section",
              "form__section form__section_declaration",
              { form__section_declaration_disabled: _vm.hasCategory === false }
            ]
          },
          [
            _c(
              "div",
              { staticClass: "form__group form__group_declaration" },
              [
                _c("label", { staticClass: "label input__label" }, [
                  _vm._v(_vm._s(_vm.$t("boardbox.filters.gender")))
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "form__row form__row_declaration" },
                  _vm._l(_vm.sources["genders"], function(gender) {
                    return _c(
                      "div",
                      { staticClass: "form__column form__column_declaration" },
                      [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.fields["genders"],
                              expression: "fields['genders']"
                            }
                          ],
                          staticClass:
                            "form__checkbox form__checkbox_declaration form__checkbox_declaration_gender form__checkbox_declaration_gender_male",
                          attrs: {
                            id:
                              "form__checkbox_declaration_gender_" + gender.id,
                            type: "checkbox",
                            name: "gender",
                            disabled: _vm.hasCategory === false,
                            "data-vv-as": "Пол"
                          },
                          domProps: {
                            value: gender.id,
                            checked: Array.isArray(_vm.fields["genders"])
                              ? _vm._i(_vm.fields["genders"], gender.id) > -1
                              : _vm.fields["genders"]
                          },
                          on: {
                            blur: _vm._handleBlurUpdateField,
                            change: function($event) {
                              var $$a = _vm.fields["genders"],
                                $$el = $event.target,
                                $$c = $$el.checked ? true : false
                              if (Array.isArray($$a)) {
                                var $$v = gender.id,
                                  $$i = _vm._i($$a, $$v)
                                if ($$el.checked) {
                                  $$i < 0 &&
                                    _vm.$set(
                                      _vm.fields,
                                      "genders",
                                      $$a.concat([$$v])
                                    )
                                } else {
                                  $$i > -1 &&
                                    _vm.$set(
                                      _vm.fields,
                                      "genders",
                                      $$a
                                        .slice(0, $$i)
                                        .concat($$a.slice($$i + 1))
                                    )
                                }
                              } else {
                                _vm.$set(_vm.fields, "genders", $$c)
                              }
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c(
                          "label",
                          {
                            staticClass:
                              "checkbox__label_declaration checkbox__label_declaration_gender",
                            attrs: {
                              for:
                                "form__checkbox_declaration_gender_" + gender.id
                            }
                          },
                          [_vm._v(_vm._s(gender.text))]
                        )
                      ]
                    )
                  }),
                  0
                ),
                _vm._v(" "),
                _vm.verrors.has("genders")
                  ? [
                      _c(
                        "div",
                        {
                          staticClass:
                            "form__notification form__notification_declaration form__notification_declaration_required"
                        },
                        [_vm._v(_vm._s(_vm.verrors.first("genders")))]
                      )
                    ]
                  : _vm._e()
              ],
              2
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "form__group form__group_declaration" },
              [
                _c("div", { staticClass: "form__row form__row_declaration" }, [
                  _c(
                    "div",
                    { staticClass: "form__column form__column_declaration" },
                    [
                      _c(
                        "label",
                        {
                          staticClass: "label input__label",
                          attrs: { for: "form__select_declaration_age_from" }
                        },
                        [
                          _vm._v(
                            _vm._s(
                              _vm.$t(
                                "board-create-casting.new-casting.age-from"
                              )
                            )
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          { name: "mask-numeric", rawName: "v-mask-numeric" },
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.fields["ageFrom"],
                            expression: "fields['ageFrom']"
                          },
                          {
                            name: "mask-static",
                            rawName: "v-mask-static",
                            value: "9{1,3}",
                            expression: "'9{1,3}'"
                          },
                          {
                            name: "validate",
                            rawName: "v-validate",
                            value: "decimal:3|min_value:1|max_value:150",
                            expression: "'decimal:3|min_value:1|max_value:150'"
                          }
                        ],
                        ref: "ageFrom",
                        class: [
                          { error: _vm.verrors.has("ageFrom") },
                          "lm-input"
                        ],
                        staticStyle: { "box-sizing": "border-box" },
                        attrs: {
                          type: "tel",
                          min: "1",
                          maxlength: "20",
                          autocomplete: "off",
                          autocapitalize: "sentences",
                          placeholder: _vm.$t(
                            "board-create-casting.new-casting.age-from-form"
                          ),
                          id: "form__select_declaration_age_from",
                          name: "ageFrom",
                          "data-vv-as": _vm.$t(
                            "board-create-casting.new-casting.age-from-form"
                          ),
                          disabled: _vm.hasCategory === false
                        },
                        domProps: { value: _vm.fields["ageFrom"] },
                        on: {
                          blur: _vm._handleBlurUpdateField,
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.fields, "ageFrom", $event.target.value)
                          }
                        }
                      })
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "form__column form__column_declaration" },
                    [
                      _c(
                        "label",
                        {
                          staticClass: "label input__label",
                          attrs: { for: "form__select_declaration_age_to" }
                        },
                        [
                          _vm._v(
                            _vm._s(
                              _vm.$t("board-create-casting.new-casting.age-to")
                            )
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          { name: "mask-numeric", rawName: "v-mask-numeric" },
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.fields["ageTo"],
                            expression: "fields['ageTo']"
                          },
                          {
                            name: "mask-static",
                            rawName: "v-mask-static",
                            value: "9{1,3}",
                            expression: "'9{1,3}'"
                          },
                          {
                            name: "validate",
                            rawName: "v-validate",
                            value:
                              "decimal:3|min_value:1|max_value:150|minTarget:ageFrom",
                            expression:
                              "'decimal:3|min_value:1|max_value:150|minTarget:ageFrom'"
                          }
                        ],
                        ref: "ageTo",
                        class: [
                          { error: _vm.verrors.has("ageTo") },
                          "lm-input"
                        ],
                        staticStyle: { "box-sizing": "border-box" },
                        attrs: {
                          type: "tel",
                          min: "1",
                          maxlength: "20",
                          autocomplete: "off",
                          autocapitalize: "sentences",
                          placeholder: _vm.$t(
                            "board-create-casting.new-casting.age-to-form"
                          ),
                          id: "form__select_declaration_age_to",
                          name: "ageTo",
                          "data-vv-as": _vm.$t(
                            "board-create-casting.new-casting.age-to-form"
                          ),
                          disabled: _vm.hasCategory === false
                        },
                        domProps: { value: _vm.fields["ageTo"] },
                        on: {
                          blur: _vm._handleBlurUpdateField,
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.fields, "ageTo", $event.target.value)
                          }
                        }
                      })
                    ]
                  )
                ]),
                _vm._v(" "),
                _vm.verrors.has("ageFrom") || _vm.verrors.has("ageTo")
                  ? [
                      _vm.verrors.has("ageFrom")
                        ? _c(
                            "div",
                            {
                              staticClass:
                                "form__notification form__notification_declaration form__notification_declaration_required"
                            },
                            [_vm._v(_vm._s(_vm.verrors.first("ageFrom")))]
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.verrors.has("ageTo")
                        ? _c(
                            "div",
                            {
                              staticClass:
                                "form__notification form__notification_declaration form__notification_declaration_required"
                            },
                            [_vm._v(_vm._s(_vm.verrors.first("ageTo")))]
                          )
                        : _vm._e()
                    ]
                  : _vm._e()
              ],
              2
            )
          ]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            class: [
              "section",
              "form__section form__section_declaration",
              { form__section_declaration_disabled: _vm.hasCategory === false }
            ]
          },
          [
            _c(
              "div",
              { staticClass: "form__group form__group_declaration" },
              [
                _c(
                  "label",
                  {
                    staticClass: "label input__label",
                    attrs: { for: "form__input_declaration_casting-title" }
                  },
                  [
                    _vm._v(
                      "\n          " +
                        _vm._s(
                          _vm.$t(
                            "board-create-casting.new-casting.casting-name"
                          )
                        ) +
                        "\n          "
                    ),
                    _c("span", { staticClass: "label_declaration_required" }, [
                      _vm._v("•")
                    ])
                  ]
                ),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.fields.name,
                      expression: "fields.name"
                    },
                    {
                      name: "validate",
                      rawName: "v-validate",
                      value: {
                        rules: {
                          required: _vm.isPublishCastingTransition,
                          min: 3,
                          max: 255
                        }
                      },
                      expression:
                        "{ rules: { required: (isPublishCastingTransition), min: 3, max: 255 } }"
                    }
                  ],
                  class: [
                    { error: _vm.verrors.has("name") },
                    "input",
                    "form__input",
                    "form__input_declaration"
                  ],
                  attrs: {
                    id: "form__input_declaration_casting-title",
                    type: "text",
                    name: "name",
                    autocomplete: "off",
                    placeholder: _vm.$t(
                      "board-create-casting.new-casting.casting-headline-form"
                    ),
                    "data-vv-as": _vm.$t(
                      "board-create-casting.new-casting.casting-name"
                    ),
                    disabled: _vm.hasCategory === false
                  },
                  domProps: { value: _vm.fields.name },
                  on: {
                    blur: _vm._handleBlurUpdateField,
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.fields, "name", $event.target.value)
                    }
                  }
                }),
                _vm._v(" "),
                _vm.verrors.has("name")
                  ? [
                      _c(
                        "div",
                        {
                          staticClass:
                            "form__notification form__notification_declaration form__notification_declaration_required"
                        },
                        [_vm._v(_vm._s(_vm.verrors.first("name")))]
                      )
                    ]
                  : _vm._e()
              ],
              2
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "form__group form__group_declaration" },
              [
                _c(
                  "label",
                  {
                    staticClass:
                      "label textarea__label textarea__label_declaration",
                    attrs: { for: "form__textarea_casting-description" }
                  },
                  [
                    _vm._v(
                      "\n          " +
                        _vm._s(
                          _vm.$t(
                            "board-create-casting.new-casting.casting-description"
                          )
                        ) +
                        "\n        "
                    )
                  ]
                ),
                _vm._v(" "),
                _c("textarea", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.fields.description,
                      expression: "fields.description"
                    },
                    {
                      name: "validate",
                      rawName: "v-validate",
                      value: "min:3|max:65000",
                      expression: "'min:3|max:65000'"
                    }
                  ],
                  class: [
                    { error: _vm.verrors.has("description") },
                    "textarea",
                    "form__textarea",
                    "form__textarea_declaration"
                  ],
                  attrs: {
                    id: "form__textarea_casting-description",
                    rows: "13",
                    name: "description",
                    "data-vv-as": _vm.$t(
                      "board-create-casting.new-casting.casting-description"
                    ),
                    disabled: _vm.hasCategory === false,
                    placeholder: _vm.placeholderDescription
                  },
                  domProps: { value: _vm.fields.description },
                  on: {
                    blur: _vm._handleBlurUpdateField,
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.fields, "description", $event.target.value)
                    }
                  }
                }),
                _vm._v(" "),
                _vm.verrors.has("description")
                  ? [
                      _c(
                        "div",
                        {
                          staticClass:
                            "form__notification form__notification_declaration form__notification_declaration_required"
                        },
                        [_vm._v(_vm._s(_vm.verrors.first("description")))]
                      )
                    ]
                  : _vm._e()
              ],
              2
            )
          ]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            class: [
              "section",
              "form__section form__section_declaration",
              { form__section_declaration_disabled: _vm.hasCategory === false }
            ]
          },
          [
            _c(
              "div",
              {
                staticClass:
                  "form__group form__group_declaration form__group_declaration_switch"
              },
              [
                _c(
                  "div",
                  {
                    staticClass:
                      "form__row form__row_declaration form__row_declaration_payment"
                  },
                  [
                    _c("div", { staticClass: "switch switch_declaration" }, [
                      _c(
                        "label",
                        {
                          staticClass: "switch__label",
                          attrs: { for: "form__checkbox_payment" }
                        },
                        [
                          _vm._v(
                            _vm._s(
                              _vm.$t(
                                "board-create-casting.new-casting.paid-work"
                              )
                            )
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.fields.fee,
                            expression: "fields.fee"
                          }
                        ],
                        staticClass: "switch__mark",
                        attrs: {
                          id: "form__checkbox_payment",
                          type: "checkbox",
                          "true-value": "1",
                          "false-value": "0",
                          name: "fee",
                          disabled: _vm.hasCategory === false
                        },
                        domProps: {
                          checked: Array.isArray(_vm.fields.fee)
                            ? _vm._i(_vm.fields.fee, null) > -1
                            : _vm._q(_vm.fields.fee, "1")
                        },
                        on: {
                          change: [
                            function($event) {
                              var $$a = _vm.fields.fee,
                                $$el = $event.target,
                                $$c = $$el.checked ? "1" : "0"
                              if (Array.isArray($$a)) {
                                var $$v = null,
                                  $$i = _vm._i($$a, $$v)
                                if ($$el.checked) {
                                  $$i < 0 &&
                                    _vm.$set(
                                      _vm.fields,
                                      "fee",
                                      $$a.concat([$$v])
                                    )
                                } else {
                                  $$i > -1 &&
                                    _vm.$set(
                                      _vm.fields,
                                      "fee",
                                      $$a
                                        .slice(0, $$i)
                                        .concat($$a.slice($$i + 1))
                                    )
                                }
                              } else {
                                _vm.$set(_vm.fields, "fee", $$c)
                              }
                            },
                            _vm._handleBlurUpdateField
                          ]
                        }
                      }),
                      _vm._v(" "),
                      _c("label", {
                        staticClass: "switch__btn",
                        attrs: { for: "form__checkbox_payment" }
                      })
                    ])
                  ]
                ),
                _vm._v(" "),
                _vm._m(1)
              ]
            ),
            _vm._v(" "),
            Boolean(Number(_vm.fields.fee))
              ? [
                  _c(
                    "div",
                    { staticClass: "form__group form__group_declaration" },
                    [
                      _c(
                        "div",
                        { staticClass: "form__row form__row_declaration" },
                        [
                          _c(
                            "div",
                            {
                              staticClass:
                                "form__column form__column_declaration"
                            },
                            [
                              _c(
                                "label",
                                {
                                  staticClass: "label input__label",
                                  attrs: {
                                    for: "form__input_declaration_work-payment"
                                  }
                                },
                                [
                                  _vm._v(
                                    "\n                " +
                                      _vm._s(
                                        _vm.$t(
                                          "board-create-casting.work-paid.fee"
                                        )
                                      ) +
                                      "\n              "
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.fields.feeAmount,
                                    expression: "fields.feeAmount"
                                  },
                                  {
                                    name: "mask-numeric",
                                    rawName: "v-mask-numeric"
                                  },
                                  {
                                    name: "validate",
                                    rawName: "v-validate",
                                    value: "numeric|min:1|max_value:9999999",
                                    expression:
                                      "'numeric|min:1|max_value:9999999'"
                                  }
                                ],
                                class: [
                                  { error: _vm.verrors.has("feeAmount") },
                                  "input",
                                  "form__input",
                                  "form__input_declaration"
                                ],
                                attrs: {
                                  type: "tel",
                                  min: "1",
                                  maxlength: "20",
                                  autocomplete: "off",
                                  autocapitalize: "sentences",
                                  id: "form__input_declaration_work-payment",
                                  name: "feeAmount",
                                  disabled: !Boolean(Number(_vm.fields.fee)),
                                  placeholder: "Введите сумму"
                                },
                                domProps: { value: _vm.fields.feeAmount },
                                on: {
                                  blur: _vm._handleBlurUpdateField,
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.fields,
                                      "feeAmount",
                                      $event.target.value
                                    )
                                  }
                                }
                              })
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass:
                                "form__column form__column_declaration form__column_declaration_payment form__column_declaration_payment_currency",
                              staticStyle: { "min-width": "72px" }
                            },
                            [
                              _c(
                                "label",
                                {
                                  staticClass: "label input__label",
                                  attrs: { for: "form__select_period_payment" }
                                },
                                [
                                  _vm._v(
                                    "\n                " +
                                      _vm._s(
                                        _vm.$t(
                                          "board-create-casting.work-paid.currency"
                                        )
                                      ) +
                                      "\n              "
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c("lm-select", {
                                directives: [
                                  {
                                    name: "validate",
                                    rawName: "v-validate",
                                    value: {
                                      rules: {
                                        required:
                                          Boolean(Number(_vm.fields.fee)) &&
                                          Number(_vm.fields.feeAmount)
                                      }
                                    },
                                    expression:
                                      "{ rules: { required: (Boolean(Number(fields.fee)) && Number(fields.feeAmount)) } }"
                                  }
                                ],
                                class: [
                                  { error: _vm.verrors.has("feeCurrencyId") }
                                ],
                                attrs: {
                                  "data-vv-name": "feeCurrencyId",
                                  "data-vv-as": "Валюта",
                                  "input-required": false,
                                  "input-id": "form__select_period_payment",
                                  "input-name": "feeCurrencyId",
                                  placeholder: "₽",
                                  placeholderDisabled: true,
                                  placeholderHidden: true,
                                  label: "",
                                  disabled:
                                    !Boolean(Number(_vm.fields.fee)) ||
                                    !Number(_vm.fields.feeAmount),
                                  options: _vm.feeCurrencies
                                },
                                on: { change: _vm._handleBlurUpdateField },
                                model: {
                                  value: _vm.fields.feeCurrencyId,
                                  callback: function($$v) {
                                    _vm.$set(_vm.fields, "feeCurrencyId", $$v)
                                  },
                                  expression: "fields.feeCurrencyId"
                                }
                              })
                            ],
                            1
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _vm.verrors.has("feeAmount")
                        ? [
                            _c(
                              "div",
                              {
                                staticClass:
                                  "form__notification form__notification_declaration form__notification_declaration_required"
                              },
                              [_vm._v(_vm._s(_vm.verrors.first("feeAmount")))]
                            )
                          ]
                        : _vm._e()
                    ],
                    2
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "form__group form__group_declaration" },
                    [
                      _c(
                        "label",
                        {
                          staticClass: "label input__label",
                          attrs: { for: "form__select_period_payment" }
                        },
                        [
                          _vm._v(
                            "\n            " +
                              _vm._s(
                                _vm.$t(
                                  "board-create-casting.work-paid.fee-period"
                                )
                              ) +
                              "\n          "
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c("lm-select", {
                        directives: [
                          {
                            name: "validate",
                            rawName: "v-validate",
                            value: {
                              rules: {
                                required:
                                  Boolean(Number(_vm.fields.fee)) &&
                                  Number(_vm.fields.feeAmount)
                              }
                            },
                            expression:
                              "{ rules: { required: (Boolean(Number(fields.fee)) && Number(fields.feeAmount)) } }"
                          }
                        ],
                        class: [{ error: _vm.verrors.has("feeTypeId") }],
                        attrs: {
                          "data-vv-name": "feeTypeId",
                          "data-vv-as": "Период",
                          "input-required": false,
                          "input-id": "form__select_period_payment",
                          "input-name": "feeTypeId",
                          placeholder: "Не выбран",
                          placeholderDisabled: true,
                          placeholderHidden: true,
                          label: "",
                          disabled:
                            !Boolean(Number(_vm.fields.fee)) ||
                            !Number(_vm.fields.feeAmount),
                          options: _vm.sources["feeTypes"]
                        },
                        on: { change: _vm._handleBlurUpdateField },
                        model: {
                          value: _vm.fields.feeTypeId,
                          callback: function($$v) {
                            _vm.$set(_vm.fields, "feeTypeId", $$v)
                          },
                          expression: "fields.feeTypeId"
                        }
                      }),
                      _vm._v(" "),
                      _vm.verrors.has("feeTypeId")
                        ? [
                            _c(
                              "div",
                              {
                                staticClass:
                                  "form__notification form__notification_declaration form__notification_declaration_required"
                              },
                              [_vm._v(_vm._s(_vm.verrors.first("feeTypeId")))]
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
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            class: [
              "section",
              "form__section form__section_declaration",
              { form__section_declaration_disabled: _vm.hasCategory === false }
            ]
          },
          [
            _c(
              "div",
              { staticClass: "form__group form__group_declaration" },
              [
                _c("div", { staticClass: "form__row form__row_declaration" }, [
                  _c(
                    "div",
                    { staticClass: "form__column form__column_declaration" },
                    [
                      _c(
                        "label",
                        {
                          staticClass: "label input__label",
                          attrs: {
                            for: "form__select_declaration_casting-date_from"
                          }
                        },
                        [
                          _vm._v(
                            _vm._s(
                              _vm.$t(
                                "board-create-casting.new-casting.casting-date-from"
                              )
                            )
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          { name: "mask-date", rawName: "v-mask-date" },
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.fields.dateStart,
                            expression: "fields.dateStart"
                          },
                          {
                            name: "validate",
                            rawName: "v-validate",
                            value: {
                              rules: {
                                date_format: "DD.MM.YYYY",
                                after:
                                  _vm.edit === false
                                    ? _vm
                                        .$moment()
                                        .subtract("1", "day")
                                        .format("DD.MM.YYYY")
                                    : false
                              }
                            },
                            expression:
                              "{ rules: { date_format: 'DD.MM.YYYY', after: (edit === false) ? $moment().subtract('1', 'day').format('DD.MM.YYYY') : false } }"
                          }
                        ],
                        ref: "dateStart",
                        class: [
                          { error: _vm.verrors.has("dateStart") },
                          "input",
                          "form__input",
                          "form__input_declaration",
                          "form__input_declaration_from"
                        ],
                        attrs: {
                          placeholder: "дд.мм.гг",
                          id: "form__select_declaration_casting-date_from",
                          name: "dateStart",
                          type: "tel",
                          min: "1",
                          maxlength: "20",
                          autocomplete: "off",
                          autocapitalize: "sentences",
                          "data-vv-as": "Дата начала кастинга",
                          disabled: _vm.hasCategory === false,
                          max: _vm
                            .$moment()
                            .add("1", "year")
                            .format("DD.MM.YYYY")
                        },
                        domProps: { value: _vm.fields.dateStart },
                        on: {
                          blur: _vm._handleBlurUpdateField,
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.fields,
                              "dateStart",
                              $event.target.value
                            )
                          }
                        }
                      })
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "form__column form__column_declaration" },
                    [
                      _c(
                        "label",
                        {
                          staticClass: "label input__label",
                          attrs: {
                            for: "form__select_declaration_casting-date_to"
                          }
                        },
                        [
                          _vm._v(
                            _vm._s(
                              _vm.$t(
                                "board-create-casting.new-casting.casting-date-to"
                              )
                            )
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          { name: "mask-date", rawName: "v-mask-date" },
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.fields.dateEnd,
                            expression: "fields.dateEnd"
                          },
                          {
                            name: "validate",
                            rawName: "v-validate",
                            value: {
                              rules: {
                                date_format: "DD.MM.YYYY",
                                dateAfterRef: _vm.fields.dateStart
                                  ? "dateStart"
                                  : false
                              }
                            },
                            expression:
                              "{ rules: { date_format: 'DD.MM.YYYY', dateAfterRef: (fields.dateStart) ? 'dateStart' : false } }"
                          }
                        ],
                        ref: "dateEnd",
                        class: [
                          { error: _vm.verrors.has("dateEnd") },
                          "input",
                          "form__input",
                          "form__input_declaration",
                          "form__input_declaration_to"
                        ],
                        attrs: {
                          placeholder: "дд.мм.гг",
                          id: "form__select_declaration_casting-date_to",
                          name: "dateEnd",
                          type: "tel",
                          min: "1",
                          maxlength: "20",
                          autocomplete: "off",
                          autocapitalize: "sentences",
                          "data-vv-as": "Дата окончания кастинга",
                          disabled: _vm.hasCategory === false,
                          max: _vm
                            .$moment()
                            .add("1", "year")
                            .format("DD.MM.YYYY")
                        },
                        domProps: { value: _vm.fields.dateEnd },
                        on: {
                          blur: _vm._handleBlurUpdateField,
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.fields, "dateEnd", $event.target.value)
                          }
                        }
                      })
                    ]
                  )
                ]),
                _vm._v(" "),
                _vm.verrors.has("dateStart") || _vm.verrors.has("dateEnd")
                  ? [
                      _vm.verrors.has("dateStart")
                        ? _c(
                            "div",
                            {
                              staticClass:
                                "form__notification form__notification_declaration form__notification_declaration_required"
                            },
                            [_vm._v(_vm._s(_vm.verrors.first("dateStart")))]
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.verrors.has("dateEnd")
                        ? _c(
                            "div",
                            {
                              staticClass:
                                "form__notification form__notification_declaration form__notification_declaration_required"
                            },
                            [_vm._v(_vm._s(_vm.verrors.first("dateEnd")))]
                          )
                        : _vm._e()
                    ]
                  : _vm._e()
              ],
              2
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "form__group form__group_declaration" },
              [
                _c("div", { staticClass: "form__row form__row_declaration" }, [
                  _c(
                    "div",
                    { staticClass: "form__column form__column_declaration" },
                    [
                      _c(
                        "label",
                        {
                          staticClass: "label input__label",
                          attrs: {
                            for: "form__input_declaration_work-date_from"
                          }
                        },
                        [
                          _vm._v(
                            _vm._s(
                              _vm.$t(
                                "board-create-casting.new-casting.work-date-from"
                              )
                            )
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          { name: "mask-date", rawName: "v-mask-date" },
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.fields.dateWorkStart,
                            expression: "fields.dateWorkStart"
                          },
                          {
                            name: "validate",
                            rawName: "v-validate",
                            value: {
                              rules: {
                                date_format: "DD.MM.YYYY",
                                after:
                                  _vm.edit === false
                                    ? _vm
                                        .$moment()
                                        .subtract("1", "day")
                                        .format("DD.MM.YYYY")
                                    : false
                              }
                            },
                            expression:
                              "{ rules: { date_format: 'DD.MM.YYYY', after: (edit === false) ? $moment().subtract('1', 'day').format('DD.MM.YYYY') : false } }"
                          }
                        ],
                        ref: "dateWorkStart",
                        class: [
                          { error: _vm.verrors.has("dateWorkStart") },
                          "input",
                          "form__input",
                          "form__input_declaration",
                          "form__input_declaration_from"
                        ],
                        attrs: {
                          id: "form__input_declaration_work-date_from",
                          placeholder: "дд.мм.гг",
                          name: "dateWorkStart",
                          type: "tel",
                          min: "1",
                          maxlength: "20",
                          autocomplete: "off",
                          autocapitalize: "sentences",
                          "data-vv-as": "Дата начала работы",
                          disabled: _vm.hasCategory === false,
                          max: _vm
                            .$moment()
                            .add("1", "year")
                            .format("DD.MM.YYYY")
                        },
                        domProps: { value: _vm.fields.dateWorkStart },
                        on: {
                          blur: _vm._handleBlurUpdateField,
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.fields,
                              "dateWorkStart",
                              $event.target.value
                            )
                          }
                        }
                      })
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "form__column form__column_declaration" },
                    [
                      _c(
                        "label",
                        {
                          staticClass: "label input__label",
                          attrs: { for: "form__input_declaration_work-date_to" }
                        },
                        [
                          _vm._v(
                            _vm._s(
                              _vm.$t(
                                "board-create-casting.new-casting.work-date-to"
                              )
                            )
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          { name: "mask-date", rawName: "v-mask-date" },
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.fields.dateWorkEnd,
                            expression: "fields.dateWorkEnd"
                          },
                          {
                            name: "validate",
                            rawName: "v-validate",
                            value: {
                              rules: {
                                date_format: "DD.MM.YYYY",
                                dateAfterRef: _vm.fields.dateWorkStart
                                  ? "dateWorkStart"
                                  : false
                              }
                            },
                            expression:
                              "{ rules: { date_format: 'DD.MM.YYYY', dateAfterRef: (fields.dateWorkStart) ? 'dateWorkStart' : false } }"
                          }
                        ],
                        ref: "dateWorkEnd",
                        class: [
                          { error: _vm.verrors.has("dateWorkEnd") },
                          "input",
                          "form__input",
                          "form__input_declaration",
                          "form__input_declaration_to"
                        ],
                        attrs: {
                          id: "form__input_declaration_work-date_to",
                          placeholder: "дд.мм.гг",
                          name: "dateWorkEnd",
                          type: "tel",
                          min: "1",
                          maxlength: "20",
                          autocomplete: "off",
                          autocapitalize: "sentences",
                          "data-vv-as": "Дата окончания работы",
                          disabled: _vm.hasCategory === false,
                          min: _vm.$moment().format("DD.MM.YYYY"),
                          max: _vm
                            .$moment()
                            .add("1", "year")
                            .format("DD.MM.YYYY")
                        },
                        domProps: { value: _vm.fields.dateWorkEnd },
                        on: {
                          blur: _vm._handleBlurUpdateField,
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.fields,
                              "dateWorkEnd",
                              $event.target.value
                            )
                          }
                        }
                      })
                    ]
                  )
                ]),
                _vm._v(" "),
                _vm.verrors.has("dateWorkStart") ||
                _vm.verrors.has("dateWorkEnd")
                  ? [
                      _vm.verrors.has("dateWorkStart")
                        ? _c(
                            "div",
                            {
                              staticClass:
                                "form__notification form__notification_declaration form__notification_declaration_required"
                            },
                            [_vm._v(_vm._s(_vm.verrors.first("dateWorkStart")))]
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.verrors.has("dateWorkEnd")
                        ? _c(
                            "div",
                            {
                              staticClass:
                                "form__notification form__notification_declaration form__notification_declaration_required"
                            },
                            [_vm._v(_vm._s(_vm.verrors.first("dateWorkEnd")))]
                          )
                        : _vm._e()
                    ]
                  : _vm._e()
              ],
              2
            )
          ]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            class: [
              "section form__section",
              "form__section_declaration",
              { form__section_declaration_disabled: _vm.hasCategory === false }
            ],
            attrs: { id: "form__select_declaration_country" }
          },
          [
            _c(
              "div",
              { staticClass: "form__group form__group_declaration" },
              [
                _c("label", { staticClass: "label input__label" }, [
                  _vm._v(
                    "\n          " +
                      _vm._s(
                        _vm.$t(
                          "board-create-casting.new-casting.casting-country"
                        )
                      ) +
                      "\n          "
                  ),
                  _c("span", { staticClass: "label_declaration_required" }, [
                    _vm._v("•")
                  ])
                ]),
                _vm._v(" "),
                _c("lm-select", {
                  directives: [
                    {
                      name: "validate",
                      rawName: "v-validate",
                      value: {
                        rules: { required: _vm.isPublishCastingTransition }
                      },
                      expression:
                        "{ rules: { required: (isPublishCastingTransition) } }"
                    }
                  ],
                  class: [{ error: _vm.verrors.has("countryId") }],
                  attrs: {
                    searchable: true,
                    filterable: true,
                    title: "Выбор страны",
                    "data-vv-name": "countryId",
                    "data-vv-as": _vm.$t(
                      "board-create-casting.new-casting.casting-country"
                    ),
                    "input-required": false,
                    "input-id": "form__select_declaration_coutry",
                    "input-name": "country",
                    placeholder: _vm.$t(
                      "board-create-casting.new-casting.category-not-selected"
                    ),
                    placeholderDisabled: true,
                    placeholderHidden: true,
                    label: "",
                    disabled: _vm.hasCategory === false,
                    options: _vm.sources["countries"]
                  },
                  on: {
                    input: function($event) {
                      var i = arguments.length,
                        argsArray = Array(i)
                      while (i--) argsArray[i] = arguments[i]
                      return _vm._handleChangeCountrySelect.apply(
                        void 0,
                        argsArray.concat([true], [true])
                      )
                    }
                  },
                  model: {
                    value: _vm.fields.countryId,
                    callback: function($$v) {
                      _vm.$set(_vm.fields, "countryId", $$v)
                    },
                    expression: "fields.countryId"
                  }
                }),
                _vm._v(" "),
                _vm.verrors.has("countryId")
                  ? [
                      _c(
                        "div",
                        {
                          staticClass:
                            "form__notification form__notification_declaration form__notification_declaration_required"
                        },
                        [_vm._v(_vm._s(_vm.verrors.first("countryId")))]
                      )
                    ]
                  : _vm._e()
              ],
              2
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "form__group form__group_declaration" },
              [
                _c(
                  "label",
                  {
                    staticClass: "label input__label",
                    attrs: { for: "form__select_declaration_city" }
                  },
                  [
                    _vm._v(
                      "\n          " +
                        _vm._s(
                          _vm.$t(
                            "board-create-casting.new-casting.casting-city"
                          )
                        ) +
                        "\n          "
                    ),
                    _c("span", { staticClass: "label_declaration_required" }, [
                      _vm._v("•")
                    ])
                  ]
                ),
                _vm._v(" "),
                _c("lm-select", {
                  directives: [
                    {
                      name: "validate",
                      rawName: "v-validate",
                      value: {
                        rules: { required: _vm.isPublishCastingTransition }
                      },
                      expression:
                        "{ rules: { required: (isPublishCastingTransition) } }"
                    }
                  ],
                  class: [{ error: _vm.verrors.has("cityId") }],
                  attrs: {
                    searchable: true,
                    filterable: false,
                    loading: _vm.loadingCities,
                    title: "Выбор города",
                    "data-vv-name": "cityId",
                    "data-vv-as": _vm.$t(
                      "board-create-casting.new-casting.casting-city"
                    ),
                    "input-required": false,
                    "input-id": "form__select_declaration_city",
                    "input-name": "city",
                    placeholder: _vm.$t(
                      "board-create-casting.new-casting.city-not-selected"
                    ),
                    placeholderDisabled: true,
                    placeholderHidden: true,
                    label: "",
                    disabled:
                      _vm.hasCategory === false || _vm.hasCountry === false,
                    options: _vm.sources["cities"]
                  },
                  on: {
                    search: _vm._handleSearchCities,
                    change: _vm._handleBlurUpdateField
                  },
                  model: {
                    value: _vm.fields.cityId,
                    callback: function($$v) {
                      _vm.$set(_vm.fields, "cityId", $$v)
                    },
                    expression: "fields.cityId"
                  }
                }),
                _vm._v(" "),
                _vm.verrors.has("cityId")
                  ? [
                      _c(
                        "div",
                        {
                          staticClass:
                            "form__notification form__notification_declaration form__notification_declaration_required"
                        },
                        [_vm._v(_vm._s(_vm.verrors.first("cityId")))]
                      )
                    ]
                  : _vm._e()
              ],
              2
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "form__group form__group_declaration" },
              [
                _c(
                  "label",
                  {
                    staticClass: "label input__label",
                    attrs: { for: "form__input_declaration_address" }
                  },
                  [
                    _vm._v(
                      "\n          " +
                        _vm._s(
                          _vm.$t(
                            "board-create-casting.new-casting.casting-address"
                          )
                        ) +
                        "\n        "
                    )
                  ]
                ),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "validate",
                      rawName: "v-validate",
                      value: "min:3|max:255",
                      expression: "'min:3|max:255'"
                    },
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.fields["address"],
                      expression: "fields['address']"
                    }
                  ],
                  ref: "address",
                  class: [
                    { error: _vm.verrors.has("address") },
                    "input",
                    "form__input",
                    "form__input_declaration"
                  ],
                  attrs: {
                    type: "text",
                    placeholder: _vm.$t(
                      "board-create-casting.new-casting.address-form"
                    ),
                    id: "form__input_declaration_address",
                    "data-vv-as": _vm.$t(
                      "board-create-casting.new-casting.casting-address"
                    ),
                    name: "address",
                    disabled:
                      _vm.hasCategory === false || _vm.isCastingOnline === true
                  },
                  domProps: { value: _vm.fields["address"] },
                  on: {
                    blur: _vm._handleBlurUpdateField,
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.fields, "address", $event.target.value)
                    }
                  }
                }),
                _vm._v(" "),
                _vm.verrors.has("address")
                  ? [
                      _c(
                        "div",
                        {
                          staticClass:
                            "form__notification form__notification_declaration form__notification_declaration_required"
                        },
                        [_vm._v(_vm._s(_vm.verrors.first("address")))]
                      )
                    ]
                  : _vm._e()
              ],
              2
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass:
                  "form__group form__group_declaration form__group_declaration_switch"
              },
              [
                _c(
                  "div",
                  {
                    staticClass:
                      "form__row form__row_declaration form__row_declaration_payment"
                  },
                  [
                    _c("div", { staticClass: "switch switch_declaration" }, [
                      _c(
                        "label",
                        {
                          staticClass: "switch__label",
                          attrs: { for: "form__checkbox_isOnline" }
                        },
                        [_vm._v("Онлайн кастинг")]
                      ),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.fields.isOnline,
                            expression: "fields.isOnline"
                          }
                        ],
                        staticClass: "switch__mark",
                        attrs: {
                          id: "form__checkbox_isOnline",
                          type: "checkbox",
                          "true-value": "1",
                          "false-value": "0",
                          name: "isOnline",
                          disabled: _vm.hasCategory === false
                        },
                        domProps: {
                          checked: Array.isArray(_vm.fields.isOnline)
                            ? _vm._i(_vm.fields.isOnline, null) > -1
                            : _vm._q(_vm.fields.isOnline, "1")
                        },
                        on: {
                          change: [
                            function($event) {
                              var $$a = _vm.fields.isOnline,
                                $$el = $event.target,
                                $$c = $$el.checked ? "1" : "0"
                              if (Array.isArray($$a)) {
                                var $$v = null,
                                  $$i = _vm._i($$a, $$v)
                                if ($$el.checked) {
                                  $$i < 0 &&
                                    _vm.$set(
                                      _vm.fields,
                                      "isOnline",
                                      $$a.concat([$$v])
                                    )
                                } else {
                                  $$i > -1 &&
                                    _vm.$set(
                                      _vm.fields,
                                      "isOnline",
                                      $$a
                                        .slice(0, $$i)
                                        .concat($$a.slice($$i + 1))
                                    )
                                }
                              } else {
                                _vm.$set(_vm.fields, "isOnline", $$c)
                              }
                            },
                            _vm._handleBlurUpdateField
                          ]
                        }
                      }),
                      _vm._v(" "),
                      _c("label", {
                        staticClass: "switch__btn",
                        attrs: { for: "form__checkbox_isOnline" }
                      })
                    ])
                  ]
                ),
                _vm._v(" "),
                _vm._m(2)
              ]
            )
          ]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            class: [
              "section",
              "form__section form__section_declaration",
              { form__section_declaration_disabled: _vm.hasCategory === false }
            ]
          },
          [
            _c(
              "div",
              { staticClass: "form__group form__group_declaration" },
              [
                _c(
                  "label",
                  {
                    staticClass: "label input__label",
                    attrs: { for: "form__input_declaration_character" }
                  },
                  [
                    _vm._v(
                      "\n          " +
                        _vm._s(
                          _vm.$t("board-create-casting.new-casting.type")
                        ) +
                        "\n        "
                    )
                  ]
                ),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.fields.characterType,
                      expression: "fields.characterType"
                    },
                    {
                      name: "validate",
                      rawName: "v-validate",
                      value: "min:3|max:255",
                      expression: "'min:3|max:255'"
                    }
                  ],
                  class: [
                    { error: _vm.verrors.has("characterType") },
                    "input",
                    "form__input",
                    "form__input_declaration"
                  ],
                  attrs: {
                    type: "text",
                    id: "form__input_declaration_character",
                    name: "characterType",
                    placeholder: _vm.$t(
                      "board-create-casting.new-casting.casting-type-form"
                    ),
                    "data-vv-as": _vm.$t(
                      "board-create-casting.new-casting.type"
                    ),
                    disabled: _vm.hasCategory === false
                  },
                  domProps: { value: _vm.fields.characterType },
                  on: {
                    blur: _vm._handleBlurUpdateField,
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.fields, "characterType", $event.target.value)
                    }
                  }
                }),
                _vm._v(" "),
                _vm.verrors.has("characterType")
                  ? [
                      _c(
                        "div",
                        {
                          staticClass:
                            "form__notification form__notification_declaration form__notification_declaration_required"
                        },
                        [_vm._v(_vm._s(_vm.verrors.first("characterType")))]
                      )
                    ]
                  : _vm._e()
              ],
              2
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "form__group form__group_declaration" },
              [
                _c("label", { staticClass: "label input__label" }, [
                  _vm._v("\n          Референс\n        ")
                ]),
                _vm._v(" "),
                _vm.showFieldForm
                  ? [
                      _c("lm-dropzone", {
                        staticClass: "form__dropzone",
                        attrs: {
                          label: "Загрузить референс",
                          mediaModal: false,
                          "max-items": 10,
                          disabled:
                            _vm.hasCategory === false ||
                            _vm.isAuthorized === false,
                          multiple: true,
                          accept: ["image/*"],
                          defaultItems: _vm.uploads
                        },
                        on: {
                          update: _vm.handleUploadItems,
                          onUpload: _vm._handleAttach,
                          onRemove: _vm._handleAttachRemove
                        }
                      })
                    ]
                  : _vm._e()
              ],
              2
            )
          ]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            class: [
              "section",
              "form__section form__section_declaration",
              {
                form__section_declaration_disabled: _vm.hasCategory === false,
                bb_none: _vm.edit
              }
            ]
          },
          [
            _c(
              "div",
              { staticClass: "form__group form__group_declaration" },
              [
                _c(
                  "label",
                  {
                    staticClass: "label input__label",
                    attrs: { for: "casting__phone" }
                  },
                  [_vm._v("\n          Телефон\n        ")]
                ),
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
                      value: "phone",
                      expression: "'phone'"
                    }
                  ],
                  class: [
                    { error: _vm.verrors.has("phone") },
                    "input",
                    "form__input",
                    "form__input_declaration"
                  ],
                  attrs: {
                    type: "tel",
                    id: "casting__phone",
                    name: "phone",
                    autocomplete: "off",
                    placeholder: "+7 900 000 00 00",
                    "data-vv-as": "Телефон",
                    disabled: _vm.hasCategory === false
                  },
                  domProps: { value: _vm.fields.phone },
                  on: {
                    blur: _vm._handleBlurUpdateField,
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.fields, "phone", $event.target.value)
                    }
                  }
                }),
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
            _c(
              "div",
              { staticClass: "form__group form__group_declaration" },
              [
                _c(
                  "label",
                  {
                    staticClass: "label input__label",
                    attrs: { for: "casting__email" }
                  },
                  [_vm._v("\n          E-mail\n        ")]
                ),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.fields.email,
                      expression: "fields.email"
                    },
                    {
                      name: "validate",
                      rawName: "v-validate",
                      value: "email",
                      expression: "'email'"
                    }
                  ],
                  class: [
                    { error: _vm.verrors.has("email") },
                    "input",
                    "form__input",
                    "form__input_declaration"
                  ],
                  attrs: {
                    type: "email",
                    id: "casting__email",
                    name: "email",
                    autocomplete: "off",
                    autocapitalize: "off",
                    placeholder: "pochta@gmaill.com",
                    "data-vv-as": "E-mail",
                    disabled: _vm.hasCategory === false
                  },
                  domProps: { value: _vm.fields.email },
                  on: {
                    blur: _vm._handleBlurUpdateField,
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
                  ? [
                      _c(
                        "div",
                        {
                          staticClass:
                            "form__notification form__notification_declaration form__notification_declaration_required"
                        },
                        [_vm._v(_vm._s(_vm.verrors.first("email")))]
                      )
                    ]
                  : _vm._e()
              ],
              2
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "form__group form__group_declaration" },
              [
                _c(
                  "label",
                  {
                    staticClass: "label input__label",
                    attrs: { for: "casting__other" }
                  },
                  [_vm._v("\n          Другое\n        ")]
                ),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.fields.other,
                      expression: "fields.other"
                    },
                    {
                      name: "validate",
                      rawName: "v-validate",
                      value: "min:3|max:255",
                      expression: "'min:3|max:255'"
                    }
                  ],
                  class: [
                    { error: _vm.verrors.has("other") },
                    "input",
                    "form__input",
                    "form__input_declaration"
                  ],
                  attrs: {
                    type: "text",
                    id: "casting__other",
                    name: "other",
                    autocomplete: "off",
                    autocapitalize: "off",
                    placeholder: "Телефон, почта или соц сеть",
                    "data-vv-as": "Другое",
                    disabled: _vm.hasCategory === false
                  },
                  domProps: { value: _vm.fields.other },
                  on: {
                    blur: _vm._handleBlurUpdateField,
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.fields, "other", $event.target.value)
                    }
                  }
                }),
                _vm._v(" "),
                _vm.verrors.has("other")
                  ? [
                      _c(
                        "div",
                        {
                          staticClass:
                            "form__notification form__notification_declaration form__notification_declaration_required"
                        },
                        [_vm._v(_vm._s(_vm.verrors.first("other")))]
                      )
                    ]
                  : _vm._e()
              ],
              2
            )
          ]
        ),
        _vm._v(" "),
        _vm.isAuthorized && _vm.isRegistered
          ? [
              _vm.edit === false && _vm.showReset === true
                ? [
                    _c(
                      "section",
                      {
                        staticClass:
                          "section form__section form__section_declaration"
                      },
                      [
                        _c(
                          "button",
                          {
                            staticClass: "btn btn_secondary_filled w_100",
                            on: { click: _vm._handleClickClearForm }
                          },
                          [_vm._v("Очистить форму")]
                        )
                      ]
                    )
                  ]
                : _vm._e(),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "row justify_between" },
                [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn_secondary",
                      on: { click: _vm._handleClickPreviousPage }
                    },
                    [_vm._v(_vm._s(_vm.$t("casting-page.edit-ad.back")))]
                  ),
                  _vm._v(" "),
                  (_vm.edit && _vm.isCurrentUser) || !_vm.edit
                    ? [
                        _c(
                          "button",
                          {
                            staticClass: "btn btn_primary",
                            on: {
                              click: function($event) {
                                return _vm._handleClickActionCasting(
                                  _vm.PUBLISH
                                )
                              }
                            }
                          },
                          [
                            _vm._v(
                              _vm._s(_vm.$t("casting-page.edit-ad.publish"))
                            )
                          ]
                        )
                      ]
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.edit && _vm.isAdmin && _vm.isCurrentUser === false
                    ? [
                        _c(
                          "button",
                          {
                            staticClass: "btn btn_primary",
                            on: {
                              click: function($event) {
                                return _vm._handleClickActionCasting(
                                  _vm.PUBLISH
                                )
                              }
                            }
                          },
                          [_vm._v("Изменить")]
                        )
                      ]
                    : _vm._e()
                ],
                2
              )
            ]
          : _vm._e(),
        _vm._v(" "),
        _vm.isAuthorized === false ||
        (_vm.isAuthorized === true && _vm.isRegistered === false)
          ? [
              _c("sign-block", {
                attrs: { disabled: _vm.hasCategory === false }
              })
            ]
          : _vm._e()
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
    return _c("div", { staticClass: "section form__section_declaration" }, [
      _c("div", { staticClass: "moderate_rules" }, [
        _c("div", { staticClass: "moderate_rules__title mb_2" }, [
          _vm._v("Будьте внимательны")
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "moderate_rules__text mb_2" }, [
          _vm._v("После публикации объявление будет отправлено на модерацию")
        ]),
        _vm._v(" "),
        _c(
          "a",
          {
            staticClass: "moderate_rules__link",
            attrs: {
              href:
                "https://m.linkmuse.com/pages/politika-moderacii-obyavlenij-linkmuse",
              target: "_blank"
            }
          },
          [_vm._v("Правила модерации")]
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "switch__declaration_description" }, [
      _c("span", { staticClass: "switch__span_work-is-paid" }, [
        _vm._v(
          "Включите этот пункт и заполните поля, если у вашего кастинга имеется гонорар"
        )
      ]),
      _vm._v(" "),
      _c("span", { staticClass: "switch__span_work-is-paid" }, [
        _vm._v(
          "Включите этот пункт, но не заполняйте поля, если гонорар обсуждается"
        )
      ]),
      _vm._v(" "),
      _c("span", { staticClass: "switch__span_third" }, [
        _vm._v("Выключите этот пункт, если вы проводите кастинг без гонорара")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "switch__declaration_description" }, [
      _c("span", { staticClass: "switch__span_online-castings" }, [
        _vm._v("Включите этот пункт, если ваш кастинг проводится онлайн")
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
    require("vue-hot-reload-api")      .rerender("data-v-6e711050", esExports)
  }
}

/***/ }),

/***/ 1620:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mint_ui__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mint_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_mint_ui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modules_Board_mixins_form_js__ = __webpack_require__(1512);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modules_Rating_Enums_events__ = __webpack_require__(438);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__modules_Board_Casting_mixins_form__ = __webpack_require__(1561);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__modules_Board_Casting_extends_Form_vue__ = __webpack_require__(1563);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__modules_Board_Casting_Enums_CastingTransition__ = __webpack_require__(1537);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }











/* harmony default export */ __webpack_exports__["a"] = ({
  extends: __WEBPACK_IMPORTED_MODULE_6__modules_Board_Casting_extends_Form_vue__["a" /* default */],
  mixins: [__WEBPACK_IMPORTED_MODULE_3__modules_Board_mixins_form_js__["a" /* default */], __WEBPACK_IMPORTED_MODULE_5__modules_Board_Casting_mixins_form__["a" /* default */]],
  metaInfo: {
    title: 'Редактирование кастинга'
  },
  asyncData: function asyncData(_ref) {
    var _this = this;

    var store = _ref.store,
        route = _ref.route;
    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return store.dispatch('board/casting/getSources', Number(route.params.id));

            case 2:
              _context.next = 4;
              return store.dispatch('board/casting/clearCastingFields');

            case 4:
              _context.next = 6;
              return store.dispatch('board/casting/getCastingById', {
                id: Number(route.params.id),
                editable: true
              }).catch(function (error) {
                var _error$response = error.response,
                    _error$response$statu = _error$response.status,
                    status = _error$response$statu === undefined ? 500 : _error$response$statu,
                    _error$response$url = _error$response.url,
                    url = _error$response$url === undefined ? null : _error$response$url;

                throw { code: status, message: 'Error edit casting', url: url };
              });

            case 6:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this);
    }))();
  },
  data: function data() {
    return {
      edit: true
    };
  },

  computed: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_1_vuex__["c" /* mapGetters */])({
    role: 'auth/getRole',
    user: 'auth/getAuthUser',
    profile: 'auth/getProfile',
    isAuthorized: 'auth/isAuthorized',
    error: 'board/casting/getCastingError',
    casting: 'board/casting/getCastingData',
    loading: 'board/casting/getCastingLoading'
  }), {
    title: function title() {
      return this.$t('casting-page.edit-ad.ad-editing');
    },
    isCurrentUser: function isCurrentUser() {
      return this.user && this.edit && this.user.id === this.casting.user.id;
    },
    isAdmin: function isAdmin() {
      return this.user && this.user.hasOwnProperty('isAdmin') && this.user['isAdmin'] === true;
    }
  }),
  created: function created() {
    var _this2 = this;

    this.uploads = this.casting.references || [];
    this.$nextTick(function () {
      _this2._setFieldsOnCastingEdit().then(function () {
        _this2.$nextTick(function () {
          if (_this2.fields.countryId && _this2.sources.cities.length === 0) {
            _this2._handleChangeCountrySelect(_this2.fields.countryId, false, true).then(function () {
              _this2.fields.cityId = _this2.casting.city && Object(__WEBPACK_IMPORTED_MODULE_0__utils__["l" /* has */])(_this2.casting.city, 'id') ? _this2.casting.city.id : null;
            }).catch(function () {});
          }
        });
      });
    });
  },

  methods: {
    _handleClickActionCasting: function _handleClickActionCasting(transition) {
      this._handleClickUpdateCasting(transition);
    },
    _handleClickUpdateCasting: function _handleClickUpdateCasting(transition) {
      var _this3 = this;

      if (this.isAdmin && this.isCurrentUser === false) {
        this.$delete(this.fields, 'transition');
      } else this.fields.transition = transition;

      this._handleValidateFields().then(function () {
        var isAfterStart = _this3.$moment().subtract('1', 'day').isAfter(_this3.$moment(_this3.fields.dateStart, 'DD.MM.YYYY'));
        var isSameStart = _this3.$moment(_this3.casting.dateStart, 'DD-MM-YYYY').isSame(_this3.$moment(_this3.fields.dateStart, 'DD.MM.YYYY'));

        var isAfterWorkStart = _this3.$moment().subtract('1', 'day').isAfter(_this3.$moment(_this3.fields.dateWorkStart, 'DD.MM.YYYY'));
        var isSameWorkStart = _this3.$moment(_this3.casting.dateWorkStart, 'DD-MM-YYYY').isSame(_this3.$moment(_this3.fields.dateWorkStart, 'DD.MM.YYYY'));

        if (isAfterStart && isSameStart === false || isAfterWorkStart && isSameWorkStart === false) {
          _this3.$confirm({
            cancelTxt: 'отмена',
            confirmTxt: 'подтвердить',
            title: 'Подтвердите действие',
            message: 'Проверьте актуальность указанной даты. Кастинги с прошедшими датами могут не пройти модерацию.'
          }).then(function () {
            _this3.$nextTick(function () {
              return _this3._handleUpdateCasting();
            });
          }).catch(function () {});
        } else _this3.$nextTick(function () {
          return _this3._handleUpdateCasting();
        });
      }).catch(function () {
        return _this3._scrollToErrorFields();
      });
    },
    _handleUpdateCasting: function _handleUpdateCasting() {
      var _this4 = this;

      var _casting = this.casting,
          id = _casting.id,
          slug = _casting.slug;


      this._updateCasting().then(function () {
        if (_this4.isAdmin && _this4.isCurrentUser === false) {
          Object(__WEBPACK_IMPORTED_MODULE_2_mint_ui__["Toast"])({ message: 'Кастинг отредактирован', iconClass: 'mintui mintui-success' });
          return _this4.$router.push({ name: 'board.castings.show', params: { id: id, slug: slug } });
        }

        var username = _this4.user.username;
        var transition = _this4.fields.transition;

        _this4.$store.dispatch('board/casting/setHasNewCastingsData', true);

        if (transition === __WEBPACK_IMPORTED_MODULE_7__modules_Board_Casting_Enums_CastingTransition__["b" /* PUBLISH */]) {
          if (Object(__WEBPACK_IMPORTED_MODULE_0__utils__["l" /* has */])(_this4.profile, 'without_moderate.castings') && _this4.profile['without_moderate']['castings']) {
            Object(__WEBPACK_IMPORTED_MODULE_2_mint_ui__["Toast"])({ message: 'Кастинг опубликован', iconClass: 'mintui mintui-success' });
            _this4.$router.push({ name: 'board.castings.index' });
          } else {
            Object(__WEBPACK_IMPORTED_MODULE_2_mint_ui__["Toast"])({ message: 'Кастинг отправлен на модерацию', iconClass: 'mintui mintui-success' });
            _this4.$router.push({ name: 'board.castings.user', params: { username: username } });
          }

          _this4.$nsWebViewInterface.emit('rating', __WEBPACK_IMPORTED_MODULE_4__modules_Rating_Enums_events__["a" /* createCasting */]);
        } else {
          Object(__WEBPACK_IMPORTED_MODULE_2_mint_ui__["Toast"])({ message: 'Кастинг сохранен в черновик', iconClass: 'mintui mintui-success' });
          _this4.$router.push({ name: 'board.castings.user', params: { username: username } });
        }
      }).catch(function () {
        return _this4._scrollToErrorFields();
      });
    },
    _scrollToErrorFields: function _scrollToErrorFields() {
      var el = document.getElementsByClassName('error');
      if (el && el.length) this.$scrollTo(el[0], 500, { offset: -40 });
    },
    _updateCasting: function _updateCasting() {
      var _this5 = this;

      return new Promise(function (resolve, reject) {

        __WEBPACK_IMPORTED_MODULE_2_mint_ui__["Indicator"].open();

        var data = _this5._.cloneDeep(_this5.fields);
        if (!Boolean(Number(_this5.fields.fee))) {
          _this5.$delete(data, 'feeAmount');
          _this5.$delete(data, 'feeTypeId');
          _this5.$delete(data, 'feeCurrencyId');
        }
        if (!Boolean(Number(_this5.isForActorAndModel))) {
          _this5.$delete(data, 'forTrusted');
        }
        _this5.$delete(data, 'references');

        _this5.$api.patch('api/v2/boards/castings/' + _this5.casting.id, data).then(function (response) {
          var data = response.data.data;


          __WEBPACK_IMPORTED_MODULE_2_mint_ui__["Indicator"].close();
          resolve(data);
        }, function (error) {
          var data = error.response.data,
              status = error.response.status;


          __WEBPACK_IMPORTED_MODULE_2_mint_ui__["Indicator"].close();
          Object(__WEBPACK_IMPORTED_MODULE_2_mint_ui__["Toast"])({ message: 'Ошибка', iconClass: 'mintui mintui-field-error' });

          reject();

          if (status === 422) {
            _this5.$setLaravelValidationErrorsFromResponse(data);
          } else throw new Error('Error create board casting');
        });
      });
    },
    _setFieldsOnCastingEdit: function _setFieldsOnCastingEdit() {
      var _this6 = this;

      return new Promise(function (resolve, reject) {
        try {
          _this6.fields.categoryId = _this6.casting.category && Object(__WEBPACK_IMPORTED_MODULE_0__utils__["l" /* has */])(_this6.casting.category, 'id') ? _this6.casting.category.id : null;

          _this6.fields.countryId = _this6.casting.country && Object(__WEBPACK_IMPORTED_MODULE_0__utils__["l" /* has */])(_this6.casting.country, 'id') ? _this6.casting.country.id : null;

          if (_this6.sources['cities'] && _this6.sources.cities.length) {
            _this6.fields.cityId = _this6.casting.city && Object(__WEBPACK_IMPORTED_MODULE_0__utils__["l" /* has */])(_this6.casting.city, 'id') ? _this6.casting.city.id : null;
          }

          _this6.fields.professions = _this6.casting.professions && _this6.casting.professions.length ? _this6.casting.professions.map(function (p) {
            return p.id;
          }) : [];
          _this6.fields.genders = _this6.casting.genders && _this6.casting.genders.length ? _this6.casting.genders.map(function (gender) {
            return gender.id;
          }) : [];

          _this6.fields.name = _this6.casting.name || null;
          _this6.fields.ageTo = _this6.casting.ageTo ? String(_this6.casting.ageTo) : null;
          _this6.fields.ageFrom = _this6.casting.ageFrom ? String(_this6.casting.ageFrom) : null;
          _this6.fields.address = _this6.casting.address || null;
          _this6.fields.isOnline = Number(_this6.casting.isOnline);

          _this6.fields.forTrusted = Number(_this6.casting.forTrusted);

          _this6.fields.description = _this6.casting.description || null;
          _this6.fields.characterType = _this6.casting.characterType || null;

          _this6.fields.email = _this6.casting.email || null;
          _this6.fields.phone = _this6.casting.phone || null;
          _this6.fields.other = _this6.casting.other || null;

          _this6.fields.dateEnd = _this6.casting.dateEnd ? _this6.$moment(_this6.casting.dateEnd, 'DD-MM-YYYY').format('DD.MM.YYYY') : null;
          _this6.fields.dateStart = _this6.casting.dateStart ? _this6.$moment(_this6.casting.dateStart, 'DD-MM-YYYY').format('DD.MM.YYYY') : null;

          _this6.fields.dateWorkEnd = _this6.casting.dateWorkEnd ? _this6.$moment(_this6.casting.dateWorkEnd, 'DD-MM-YYYY').format('DD.MM.YYYY') : null;
          _this6.fields.dateWorkStart = _this6.casting.dateWorkStart ? _this6.$moment(_this6.casting.dateWorkStart, 'DD-MM-YYYY').format('DD.MM.YYYY') : null;

          _this6.fields.fee = _this6.casting.fee.available ? 1 : 0;
          _this6.fields.feeAmount = _this6.casting.fee.amount ? Number(_this6.casting.fee.amount) : null;
          _this6.fields.feeTypeId = _this6.casting.fee && Object(__WEBPACK_IMPORTED_MODULE_0__utils__["l" /* has */])(_this6.casting.fee, 'type.id') ? _this6.casting.fee.type['id'] : null;
          _this6.fields.feeCurrencyId = _this6.casting.fee && Object(__WEBPACK_IMPORTED_MODULE_0__utils__["l" /* has */])(_this6.casting.fee, 'currency.id') ? _this6.casting.fee.currency['id'] : null;

          resolve && resolve(true);
        } catch (e) {
          reject && reject(e);
        }
      });
    }
  }
});

/***/ }),

/***/ 1926:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1927);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("4507d6e2", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js?sourceMap!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-c8be9314\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Edit.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js?sourceMap!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-c8be9314\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Edit.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1927:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(true);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"Edit.vue","sourceRoot":""}]);

// exports


/***/ })

});
//# sourceMappingURL=77.build.06ea216212e8c07448ea.js.map