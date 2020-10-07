webpackJsonp([75],{

/***/ 1284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Edit_vue__ = __webpack_require__(1636);
/* empty harmony namespace reexport */
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1977)
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
var __vue_scopeId__ = "data-v-4159f9de"
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
Component.options.__file = "src/views/Board/Locations/Edit.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4159f9de", Component.options)
  } else {
    hotAPI.reload("data-v-4159f9de", Component.options)
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

/***/ 1532:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SCENE", function() { return SCENE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PARKING", function() { return PARKING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INTERIOR", function() { return INTERIOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EXTERIOR", function() { return EXTERIOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DAYLIGHT", function() { return DAYLIGHT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHROMAKEY", function() { return CHROMAKEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CYCLORAMA", function() { return CYCLORAMA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DRESSING_ROOM", function() { return DRESSING_ROOM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EQUIPMENT_RENTAL", function() { return EQUIPMENT_RENTAL; });
var SCENE = 'scene';
var PARKING = 'parking';
var INTERIOR = 'interior';
var EXTERIOR = 'exterior';
var DAYLIGHT = 'daylight';
var CHROMAKEY = 'chromakey';
var CYCLORAMA = 'cyclorama';
var DRESSING_ROOM = 'dressing_room';
var EQUIPMENT_RENTAL = 'equipment_rental';

/***/ }),

/***/ 1540:
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



/* harmony default export */ __webpack_exports__["a"] = ({
  components: {
    SignBlock: __WEBPACK_IMPORTED_MODULE_0__components_Board_SignBlock_vue__["a" /* default */]
  }
});

/***/ }),

/***/ 1541:
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

/***/ 1569:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Form_vue__ = __webpack_require__(1540);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_6e4191ba_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Form_vue__ = __webpack_require__(1572);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1570)
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
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_6e4191ba_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Form_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/modules/Board/Location/extends/Form.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6e4191ba", Component.options)
  } else {
    hotAPI.reload("data-v-6e4191ba", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 1570:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1571);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("6a13bb0d", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6e4191ba\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js?indentedSyntax!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Form.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6e4191ba\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js?indentedSyntax!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Form.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1571:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(true);
// imports


// module
exports.push([module.i, "\n.moderate_rules {\n  padding: 20px;\n  border-radius: 8px;\n  background-color: #ebf3fc;\n}\n.moderate_rules__title {\n    color: #282a36;\n    font-size: 14px;\n    margin-bottom: 8px;\n    font-weight: 600;\n}\n.moderate_rules__text {\n    color: #515562;\n    font-size: 14px;\n    line-height: 1.29;\n    margin-bottom: 8px;\n}\n.moderate_rules__link {\n    color: #0d69dc;\n    font-size: 14px;\n    font-weight: 600;\n}\n", "", {"version":3,"sources":["/home/karliv/work/linkmuse-mobile/src/modules/Board/Location/extends/Form.vue"],"names":[],"mappings":";AAAA;EACE,cAAc;EACd,mBAAmB;EACnB,0BAA0B;CAAE;AAC5B;IACE,eAAe;IACf,gBAAgB;IAChB,mBAAmB;IACnB,iBAAiB;CAAE;AACrB;IACE,eAAe;IACf,gBAAgB;IAChB,kBAAkB;IAClB,mBAAmB;CAAE;AACvB;IACE,eAAe;IACf,gBAAgB;IAChB,iBAAiB;CAAE","file":"Form.vue","sourcesContent":[".moderate_rules {\n  padding: 20px;\n  border-radius: 8px;\n  background-color: #ebf3fc; }\n  .moderate_rules__title {\n    color: #282a36;\n    font-size: 14px;\n    margin-bottom: 8px;\n    font-weight: 600; }\n  .moderate_rules__text {\n    color: #515562;\n    font-size: 14px;\n    line-height: 1.29;\n    margin-bottom: 8px; }\n  .moderate_rules__link {\n    color: #0d69dc;\n    font-size: 14px;\n    font-weight: 600; }\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 1572:
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
                _vm._m(1),
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
                _vm._m(2),
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
                  class: [{ error: _vm.verrors.has("type") }],
                  attrs: {
                    "data-vv-name": "type",
                    "data-vv-as": "Тип локации",
                    "input-required": false,
                    "input-id": "form__select_declaration_location__type",
                    "input-name": "category",
                    placeholder: "Не выбрано",
                    placeholderDisabled: true,
                    placeholderHidden: true,
                    label: "",
                    options: _vm.sources["types"]
                  },
                  on: {
                    input: _vm._handleInputType,
                    change: _vm._handleBlurUpdateField
                  },
                  model: {
                    value: _vm.fields.type,
                    callback: function($$v) {
                      _vm.$set(_vm.fields, "type", $$v)
                    },
                    expression: "fields.type"
                  }
                }),
                _vm._v(" "),
                _vm.verrors.has("type")
                  ? [
                      _c(
                        "div",
                        {
                          staticClass:
                            "form__notification form__notification_declaration form__notification_declaration_required"
                        },
                        [_vm._v(_vm._s(_vm.verrors.first("type")))]
                      )
                    ]
                  : _vm._e()
              ],
              2
            ),
            _vm._v(" "),
            _vm.isRoom === true
              ? [
                  _c(
                    "div",
                    {
                      staticClass: "form__group form__group_declaration",
                      attrs: { id: "form__group_declaration_roomType" }
                    },
                    [
                      _vm._m(3),
                      _vm._v(" "),
                      _c("lm-select", {
                        directives: [
                          {
                            name: "validate",
                            rawName: "v-validate",
                            value: {
                              rules: {
                                required: _vm.isPublishLocationTransition
                              }
                            },
                            expression:
                              "{ rules: { required: (isPublishLocationTransition) } }"
                          }
                        ],
                        class: [{ error: _vm.verrors.has("roomType") }],
                        attrs: {
                          "data-vv-name": "roomType",
                          "data-vv-as": "Тип помещения",
                          "input-required": false,
                          "input-id":
                            "form__select_declaration_location__roomType",
                          "input-name": "category",
                          placeholder: "Не выбрано",
                          placeholderDisabled: true,
                          placeholderHidden: true,
                          label: "",
                          options: _vm.sources["roomTypes"]
                        },
                        on: { change: _vm._handleBlurUpdateField },
                        model: {
                          value: _vm.fields.roomType,
                          callback: function($$v) {
                            _vm.$set(_vm.fields, "roomType", $$v)
                          },
                          expression: "fields.roomType"
                        }
                      }),
                      _vm._v(" "),
                      _vm.verrors.has("roomType")
                        ? [
                            _c(
                              "div",
                              {
                                staticClass:
                                  "form__notification form__notification_declaration form__notification_declaration_required"
                              },
                              [_vm._v(_vm._s(_vm.verrors.first("roomType")))]
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
              { form__section_declaration_disabled: _vm.hasType === false }
            ]
          },
          [
            _vm.isRoom === true
              ? [
                  _c(
                    "div",
                    { staticClass: "form__group form__group_declaration" },
                    [
                      _c(
                        "label",
                        {
                          staticClass: "label input__label",
                          attrs: { for: "form__input_declaration_roomHeight" }
                        },
                        [
                          _vm._v(
                            "\n            Высота помещения (м)\n          "
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.fields.roomHeight,
                            expression: "fields.roomHeight"
                          },
                          {
                            name: "mask-decimal",
                            rawName: "v-mask-decimal",
                            value: { digits: 2 },
                            expression: "{ digits: 2 }"
                          },
                          {
                            name: "validate",
                            rawName: "v-validate",
                            value: "decimal:2|min:1|max_value:9999",
                            expression: "'decimal:2|min:1|max_value:9999'"
                          }
                        ],
                        class: [
                          { error: _vm.verrors.has("roomHeight") },
                          "input",
                          "form__input",
                          "form__input_declaration"
                        ],
                        attrs: {
                          type: "number",
                          inputmode: "numeric",
                          pattern: "[0-9]*",
                          "data-numeric-input": "",
                          "data-numeric-input-nav-disabled": "",
                          "data-enhanced-numeric-input": "",
                          id: "form__input_declaration_roomHeight",
                          name: "roomHeight",
                          placeholder: "Введите число",
                          "data-vv-as": "Высота помещения",
                          disabled: _vm.hasType === false
                        },
                        domProps: { value: _vm.fields.roomHeight },
                        on: {
                          blur: _vm._handleBlurUpdateField,
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.fields,
                              "roomHeight",
                              $event.target.value
                            )
                          }
                        }
                      }),
                      _vm._v(" "),
                      _vm.verrors.has("roomHeight")
                        ? [
                            _c(
                              "div",
                              {
                                staticClass:
                                  "form__notification form__notification_declaration form__notification_declaration_required"
                              },
                              [_vm._v(_vm._s(_vm.verrors.first("roomHeight")))]
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
              {
                staticClass: "form__group form__group_declaration",
                attrs: { id: "form__group_declaration_dimension" }
              },
              [
                _vm._m(4),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.fields.dimension,
                      expression: "fields.dimension"
                    },
                    {
                      name: "mask-decimal",
                      rawName: "v-mask-decimal",
                      value: { digits: 2 },
                      expression: "{ digits: 2 }"
                    },
                    {
                      name: "validate",
                      rawName: "v-validate",
                      value: {
                        rules: {
                          required: _vm.isPublishLocationTransition,
                          decimal: 2
                        }
                      },
                      expression:
                        "{ rules: { required: (isPublishLocationTransition), decimal: 2 } }"
                    }
                  ],
                  class: [
                    { error: _vm.verrors.has("dimension") },
                    "input",
                    "form__input",
                    "form__input_declaration"
                  ],
                  attrs: {
                    type: "number",
                    inputmode: "numeric",
                    pattern: "[0-9]*",
                    "data-numeric-input": "",
                    "data-numeric-input-nav-disabled": "",
                    "data-enhanced-numeric-input": "",
                    id: "form__input_declaration_casting-title",
                    name: "dimension",
                    placeholder: "Введите число",
                    "data-vv-as": "Общая площадь",
                    disabled: _vm.hasType === false
                  },
                  domProps: { value: _vm.fields.dimension },
                  on: {
                    blur: _vm._handleBlurUpdateField,
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.fields, "dimension", $event.target.value)
                    }
                  }
                }),
                _vm._v(" "),
                _vm.verrors.has("dimension")
                  ? [
                      _c(
                        "div",
                        {
                          staticClass:
                            "form__notification form__notification_declaration form__notification_declaration_required"
                        },
                        [_vm._v(_vm._s(_vm.verrors.first("dimension")))]
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
                      _vm._m(5),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.fields.price,
                            expression: "fields.price"
                          },
                          { name: "mask-numeric", rawName: "v-mask-numeric" },
                          {
                            name: "validate",
                            rawName: "v-validate",
                            value: {
                              rules: {
                                required: _vm.isPublishLocationTransition,
                                numeric: true,
                                min: 1,
                                max_value: 9999999
                              }
                            },
                            expression:
                              "{ rules: { required: (isPublishLocationTransition), numeric: true, min: 1, max_value: 9999999 } }"
                          }
                        ],
                        class: [
                          { error: _vm.verrors.has("price") },
                          "input",
                          "form__input",
                          "form__input_declaration"
                        ],
                        attrs: {
                          type: "number",
                          pattern: "[0-9]*",
                          min: "1",
                          maxlength: "20",
                          autocomplete: "off",
                          autocapitalize: "sentences",
                          id: "form__input_declaration_payment",
                          name: "price",
                          disabled: _vm.hasType === false,
                          "data-vv-as": "Цена",
                          placeholder: "Введите сумму"
                        },
                        domProps: { value: _vm.fields.price },
                        on: {
                          blur: _vm._handleBlurUpdateField,
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.fields, "price", $event.target.value)
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
                          attrs: { for: "form__select_currency" }
                        },
                        [_vm._v("\n              Валюта\n            ")]
                      ),
                      _vm._v(" "),
                      _c("lm-select", {
                        directives: [
                          {
                            name: "validate",
                            rawName: "v-validate",
                            value: {
                              rules: { required: Number(_vm.fields.price) }
                            },
                            expression:
                              "{ rules: { required: (Number(fields.price)) } }"
                          }
                        ],
                        class: [{ error: _vm.verrors.has("currencyId") }],
                        attrs: {
                          "data-vv-name": "currencyId",
                          "data-vv-as": "Валюта",
                          "input-required": false,
                          "input-id": "form__select_currency",
                          "input-name": "currencyId",
                          placeholder: "Валюта",
                          placeholderDisabled: true,
                          placeholderHidden: true,
                          label: "",
                          disabled: !Number(_vm.fields.price),
                          options: _vm.currencies
                        },
                        on: { change: _vm._handleBlurUpdateField },
                        model: {
                          value: _vm.fields.currencyId,
                          callback: function($$v) {
                            _vm.$set(_vm.fields, "currencyId", $$v)
                          },
                          expression: "fields.currencyId"
                        }
                      })
                    ],
                    1
                  )
                ]),
                _vm._v(" "),
                _vm.verrors.has("price")
                  ? [
                      _c(
                        "div",
                        {
                          staticClass:
                            "form__notification form__notification_declaration form__notification_declaration_required"
                        },
                        [_vm._v(_vm._s(_vm.verrors.first("price")))]
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
                _vm._m(6),
                _vm._v(" "),
                _c("lm-select", {
                  directives: [
                    {
                      name: "validate",
                      rawName: "v-validate",
                      value: { rules: { required: Number(_vm.fields.price) } },
                      expression:
                        "{ rules: { required: (Number(fields.price)) } }"
                    }
                  ],
                  class: [{ error: _vm.verrors.has("paymentPeriod") }],
                  attrs: {
                    "data-vv-name": "paymentPeriod",
                    "data-vv-as": "Период оплаты",
                    "input-required": false,
                    "input-id": "form__select_period_payment",
                    "input-name": "paymentPeriod",
                    placeholder: "Не выбран",
                    placeholderDisabled: true,
                    placeholderHidden: true,
                    label: "",
                    disabled: !Number(_vm.fields.price),
                    options: _vm.sources["paymentPeriods"]
                  },
                  on: { change: _vm._handleBlurUpdateField },
                  model: {
                    value: _vm.fields.paymentPeriod,
                    callback: function($$v) {
                      _vm.$set(_vm.fields, "paymentPeriod", $$v)
                    },
                    expression: "fields.paymentPeriod"
                  }
                }),
                _vm._v(" "),
                _vm.verrors.has("paymentPeriod")
                  ? [
                      _c(
                        "div",
                        {
                          staticClass:
                            "form__notification form__notification_declaration form__notification_declaration_required"
                        },
                        [_vm._v(_vm._s(_vm.verrors.first("paymentPeriod")))]
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
        _c(
          "div",
          {
            class: [
              "section",
              "form__section form__section_declaration",
              { form__section_declaration_disabled: _vm.hasType === false }
            ]
          },
          [
            _c(
              "div",
              { staticClass: "form__group form__group_declaration" },
              [
                _vm._m(7),
                _vm._v(" "),
                _vm.showFieldForm
                  ? [
                      _c("lm-dropzone", {
                        staticClass: "form__dropzone",
                        attrs: {
                          label: "добавить фото",
                          mediaModal: false,
                          "max-items": 10,
                          disabled:
                            _vm.hasType === false || _vm.isAuthorized === false,
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
                  : _vm._e(),
                _vm._v(" "),
                _vm.verrors.has("photos")
                  ? [
                      _c(
                        "div",
                        {
                          staticClass:
                            "form__notification form__notification_declaration form__notification_declaration_required"
                        },
                        [_vm._v(_vm._s(_vm.verrors.first("photos")))]
                      )
                    ]
                  : _vm._e()
              ],
              2
            ),
            _vm._v(" "),
            _vm.isConcertHall === true ||
            _vm.isTheater === true ||
            _vm.isPavilion === true ||
            _vm.isPhotoStudio === true
              ? [
                  _c(
                    "div",
                    { staticClass: "form__group form__group_declaration" },
                    [
                      _c(
                        "label",
                        {
                          staticClass: "label input__label",
                          attrs: { for: "declaration__facilities" }
                        },
                        [_vm._v("\n            Удобства и услуги\n          ")]
                      ),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.fields.facilities,
                            expression: "fields.facilities"
                          },
                          {
                            name: "validate",
                            rawName: "v-validate",
                            value: "min:3|max:255",
                            expression: "'min:3|max:255'"
                          }
                        ],
                        class: [
                          { error: _vm.verrors.has("facilities") },
                          "input",
                          "form__input",
                          "form__input_declaration"
                        ],
                        attrs: {
                          id: "declaration__facilities",
                          type: "text",
                          name: "facilities",
                          placeholder: "Wi-Fi, бар, гример, стилист",
                          "data-vv-as": "Удобства и услуги",
                          disabled: _vm.hasType === false
                        },
                        domProps: { value: _vm.fields.facilities },
                        on: {
                          blur: _vm._handleBlurUpdateField,
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.fields,
                              "facilities",
                              $event.target.value
                            )
                          }
                        }
                      }),
                      _vm._v(" "),
                      _vm.verrors.has("facilities")
                        ? [
                            _c(
                              "div",
                              {
                                staticClass:
                                  "form__notification form__notification_declaration form__notification_declaration_required"
                              },
                              [_vm._v(_vm._s(_vm.verrors.first("facilities")))]
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
                          attrs: { for: "declaration__equipment" }
                        },
                        [_vm._v("\n            Оборудование\n          ")]
                      ),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.fields.equipment,
                            expression: "fields.equipment"
                          },
                          {
                            name: "validate",
                            rawName: "v-validate",
                            value: "min:3|max:255",
                            expression: "'min:3|max:255'"
                          }
                        ],
                        class: [
                          { error: _vm.verrors.has("equipment") },
                          "input",
                          "form__input",
                          "form__input_declaration"
                        ],
                        attrs: {
                          id: "declaration__equipment",
                          type: "text",
                          name: "facilities",
                          placeholder: "Свет, камеры, крепления",
                          "data-vv-as": "Оборудование",
                          disabled: _vm.hasType === false
                        },
                        domProps: { value: _vm.fields.equipment },
                        on: {
                          blur: _vm._handleBlurUpdateField,
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.fields,
                              "equipment",
                              $event.target.value
                            )
                          }
                        }
                      }),
                      _vm._v(" "),
                      _vm.verrors.has("equipment")
                        ? [
                            _c(
                              "div",
                              {
                                staticClass:
                                  "form__notification form__notification_declaration form__notification_declaration_required"
                              },
                              [_vm._v(_vm._s(_vm.verrors.first("equipment")))]
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
                        [_vm._v("\n            Описание\n          ")]
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
                          "data-vv-as": "Описание",
                          disabled: _vm.hasType === false,
                          placeholder: _vm.placeholderDescription
                        },
                        domProps: { value: _vm.fields.description },
                        on: {
                          blur: _vm._handleBlurUpdateField,
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.fields,
                              "description",
                              $event.target.value
                            )
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
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "form__group form__group_declaration form__group_declaration_switch",
                      staticStyle: { "box-sizing": "border-box" }
                    },
                    [
                      _c(
                        "div",
                        {
                          staticClass:
                            "form__row form__row_declaration form__row_declaration_payment"
                        },
                        [
                          _vm._l(_vm.equipmentAndFacilities, function(item) {
                            return _vm.equipCondition(item.id)
                              ? [
                                  _c(
                                    "div",
                                    {
                                      staticClass: "switch switch_declaration"
                                    },
                                    [
                                      _c(
                                        "label",
                                        {
                                          staticClass: "switch__label",
                                          attrs: {
                                            for: "form__checkbox_" + item.field
                                          }
                                        },
                                        [_vm._v(_vm._s(item.text))]
                                      ),
                                      _vm._v(" "),
                                      _c("input", {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value: _vm.fields[item.field],
                                            expression: "fields[item.field]"
                                          }
                                        ],
                                        staticClass: "switch__mark",
                                        attrs: {
                                          id: "form__checkbox_" + item.field,
                                          type: "checkbox",
                                          "true-value": "1",
                                          "false-value": "0",
                                          name: item.field,
                                          disabled: _vm.hasType === false
                                        },
                                        domProps: {
                                          checked: Array.isArray(
                                            _vm.fields[item.field]
                                          )
                                            ? _vm._i(
                                                _vm.fields[item.field],
                                                null
                                              ) > -1
                                            : _vm._q(
                                                _vm.fields[item.field],
                                                "1"
                                              )
                                        },
                                        on: {
                                          change: [
                                            function($event) {
                                              var $$a = _vm.fields[item.field],
                                                $$el = $event.target,
                                                $$c = $$el.checked ? "1" : "0"
                                              if (Array.isArray($$a)) {
                                                var $$v = null,
                                                  $$i = _vm._i($$a, $$v)
                                                if ($$el.checked) {
                                                  $$i < 0 &&
                                                    _vm.$set(
                                                      _vm.fields,
                                                      item.field,
                                                      $$a.concat([$$v])
                                                    )
                                                } else {
                                                  $$i > -1 &&
                                                    _vm.$set(
                                                      _vm.fields,
                                                      item.field,
                                                      $$a
                                                        .slice(0, $$i)
                                                        .concat(
                                                          $$a.slice($$i + 1)
                                                        )
                                                    )
                                                }
                                              } else {
                                                _vm.$set(
                                                  _vm.fields,
                                                  item.field,
                                                  $$c
                                                )
                                              }
                                            },
                                            _vm._handleBlurUpdateField
                                          ]
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c("label", {
                                        staticClass: "switch__btn",
                                        attrs: {
                                          for: "form__checkbox_" + item.field
                                        }
                                      })
                                    ]
                                  )
                                ]
                              : _vm._e()
                          })
                        ],
                        2
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
          {
            class: [
              "section",
              "form__section form__section_declaration",
              { form__section_declaration_disabled: _vm.hasType === false }
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
                    attrs: { for: "declaration__passSystem" }
                  },
                  [_vm._v("\n          Проходная система\n        ")]
                ),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.fields.passSystem,
                      expression: "fields.passSystem"
                    },
                    {
                      name: "validate",
                      rawName: "v-validate",
                      value: "min:3|max:255",
                      expression: "'min:3|max:255'"
                    }
                  ],
                  class: [
                    { error: _vm.verrors.has("passSystem") },
                    "input",
                    "form__input",
                    "form__input_declaration"
                  ],
                  attrs: {
                    id: "declaration__passSystem",
                    type: "text",
                    name: "passSystem",
                    placeholder: "По записи, по паспорту",
                    autocomplete: "off",
                    "data-vv-as": "Проходная система",
                    disabled: _vm.hasType === false
                  },
                  domProps: { value: _vm.fields.passSystem },
                  on: {
                    blur: _vm._handleBlurUpdateField,
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.fields, "passSystem", $event.target.value)
                    }
                  }
                }),
                _vm._v(" "),
                _vm.verrors.has("passSystem")
                  ? [
                      _c(
                        "div",
                        {
                          staticClass:
                            "form__notification form__notification_declaration form__notification_declaration_required"
                        },
                        [_vm._v(_vm._s(_vm.verrors.first("passSystem")))]
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
                attrs: { id: "form__select_declaration_country" }
              },
              [
                _vm._m(8),
                _vm._v(" "),
                _c("lm-select", {
                  directives: [
                    {
                      name: "validate",
                      rawName: "v-validate",
                      value: {
                        rules: { required: _vm.isPublishLocationTransition }
                      },
                      expression:
                        "{ rules: { required: (isPublishLocationTransition) } }"
                    }
                  ],
                  class: [{ error: _vm.verrors.has("countryId") }],
                  attrs: {
                    searchable: true,
                    filterable: true,
                    title: "Выбор страны",
                    "data-vv-name": "countryId",
                    "data-vv-as": "Страна",
                    "input-required": false,
                    "input-id": "form__select_declaration_coutry",
                    "input-name": "country",
                    placeholder: _vm.$t(
                      "board-create-casting.new-casting.category-not-selected"
                    ),
                    placeholderDisabled: true,
                    placeholderHidden: true,
                    label: "",
                    disabled: _vm.hasType === false,
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
                _vm._m(9),
                _vm._v(" "),
                _c("lm-select", {
                  directives: [
                    {
                      name: "validate",
                      rawName: "v-validate",
                      value: {
                        rules: { required: _vm.isPublishLocationTransition }
                      },
                      expression:
                        "{ rules: { required: (isPublishLocationTransition) } }"
                    }
                  ],
                  class: [{ error: _vm.verrors.has("cityId") }],
                  attrs: {
                    searchable: true,
                    filterable: false,
                    loading: _vm.loadingCities,
                    title: "Выбор города",
                    "data-vv-name": "cityId",
                    "data-vv-as": "Город",
                    "input-required": false,
                    "input-id": "form__select_declaration_city",
                    "input-name": "city",
                    placeholder: "Не выбран",
                    placeholderDisabled: true,
                    placeholderHidden: true,
                    label: "",
                    disabled: _vm.hasType === false || _vm.hasCountry === false,
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
            _vm.noSsr && _vm.showFieldForm
              ? [
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
                        [_vm._v("\n            Адрес\n          ")]
                      ),
                      _vm._v(" "),
                      _c("gmap-autocomplete", {
                        directives: [
                          {
                            name: "validate",
                            rawName: "v-validate",
                            value: "min:3|max:255",
                            expression: "'min:3|max:255'"
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
                          placeholder: "ул. Большая садовая, д. 1",
                          id: "form__input_declaration_address",
                          autocomplete: "off",
                          "data-vv-as": "Адрес",
                          name: "address",
                          disabled: _vm.hasType === false
                        },
                        on: {
                          blur: _vm._handleBlurUpdateField,
                          place_changed: _vm.setPlaceLocation
                        },
                        model: {
                          value: _vm.fields["address"]["address"],
                          callback: function($$v) {
                            _vm.$set(_vm.fields["address"], "address", $$v)
                          },
                          expression: "fields['address']['address']"
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
              {
                form__section_declaration_disabled: _vm.hasType === false,
                bb_none: _vm.edit
              }
            ]
          },
          [
            _c(
              "div",
              { staticClass: "form__group form__group_declaration" },
              [
                _vm._m(10),
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
                    disabled: _vm.hasType === false
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
                    disabled: _vm.hasType === false
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
                    attrs: { for: "casting__site" }
                  },
                  [_vm._v("\n          Сайт\n        ")]
                ),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.fields.site,
                      expression: "fields.site"
                    },
                    {
                      name: "validate",
                      rawName: "v-validate",
                      value: { url: { require_protocol: false } },
                      expression: "{ url: { require_protocol: false } }"
                    }
                  ],
                  class: [
                    { error: _vm.verrors.has("site") },
                    "input",
                    "form__input",
                    "form__input_declaration"
                  ],
                  attrs: {
                    type: "text",
                    id: "casting__site",
                    name: "site",
                    autocomplete: "off",
                    autocapitalize: "off",
                    placeholder: "Введите url",
                    "data-vv-as": "Сайт",
                    disabled: _vm.hasType === false
                  },
                  domProps: { value: _vm.fields.site },
                  on: {
                    blur: _vm._handleBlurUpdateField,
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.fields, "site", $event.target.value)
                    }
                  }
                }),
                _vm._v(" "),
                _vm.verrors.has("site")
                  ? [
                      _c(
                        "div",
                        {
                          staticClass:
                            "form__notification form__notification_declaration form__notification_declaration_required"
                        },
                        [_vm._v(_vm._s(_vm.verrors.first("site")))]
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
                    disabled: _vm.hasType === false
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
                    [_vm._v("Отмена")]
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
                                return _vm._handleClickActionLocation(
                                  _vm.PUBLISH
                                )
                              }
                            }
                          },
                          [_vm._v("Опубликовать")]
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
                                return _vm._handleClickActionLocation(
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
          ? [_c("sign-block", { attrs: { disabled: _vm.hasType === false } })]
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
        _c("div", { staticClass: "moderate_rules__title" }, [
          _vm._v("Будте внимательны")
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "moderate_rules__text" }, [
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
    return _c(
      "label",
      {
        staticClass: "label input__label",
        attrs: { for: "form__select_declaration_type" }
      },
      [
        _vm._v("\n          Тип объявления\n          "),
        _c("span", { staticClass: "label_declaration_required" }, [_vm._v("•")])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "label",
      {
        staticClass: "label input__label",
        attrs: { for: "form__select_declaration_location__type" }
      },
      [
        _vm._v("\n          Тип локации\n          "),
        _c("span", { staticClass: "label_declaration_required" }, [_vm._v("•")])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "label",
      {
        staticClass: "label input__label",
        attrs: { for: "form__select_declaration_location__roomType" }
      },
      [
        _vm._v("\n            Тип помещения\n            "),
        _c("span", { staticClass: "label_declaration_required" }, [_vm._v("•")])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "label",
      {
        staticClass: "label input__label",
        attrs: { for: "form__input_declaration_casting-title" }
      },
      [
        _vm._v("\n          Общая площадь (м²)\n          "),
        _c("span", { staticClass: "label_declaration_required" }, [_vm._v("•")])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "label",
      {
        staticClass: "label input__label",
        attrs: { for: "form__input_declaration_payment" }
      },
      [
        _vm._v("\n              Цена (от)\n              "),
        _c("span", { staticClass: "label_declaration_required" }, [_vm._v("•")])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "label",
      {
        staticClass: "label input__label",
        attrs: { for: "form__select_period_payment" }
      },
      [
        _vm._v("\n          Период оплаты\n          "),
        _c("span", { staticClass: "label_declaration_required" }, [_vm._v("•")])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", { staticClass: "label input__label" }, [
      _vm._v("\n          Фотографии\n          "),
      _c("span", { staticClass: "label_declaration_required" }, [_vm._v("•")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", { staticClass: "label input__label" }, [
      _vm._v("\n          Страна\n          "),
      _c("span", { staticClass: "label_declaration_required" }, [_vm._v("•")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "label",
      {
        staticClass: "label input__label",
        attrs: { for: "form__select_declaration_city" }
      },
      [
        _vm._v("\n          Город\n          "),
        _c("span", { staticClass: "label_declaration_required" }, [_vm._v("•")])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "label",
      { staticClass: "label input__label", attrs: { for: "casting__phone" } },
      [
        _vm._v("\n          Телефон\n          "),
        _c("span", { staticClass: "label_declaration_required" }, [_vm._v("•")])
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
    require("vue-hot-reload-api")      .rerender("data-v-6e4191ba", esExports)
  }
}

/***/ }),

/***/ 1573:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mint_ui__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mint_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_mint_ui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vuex_map_fields__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_UI_Dropzone_Index_vue__ = __webpack_require__(434);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__modules_Board_Location_Enums_LocationTransition__ = __webpack_require__(1541);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__modules_Board_Location_Enums_LocationType__ = __webpack_require__(1574);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__modules_Board_Location_Enums_LocationEquip__ = __webpack_require__(1532);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__modules_Geo_mixins_AjaxSelectCity__ = __webpack_require__(1505);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };













var _createHelpers = Object(__WEBPACK_IMPORTED_MODULE_3_vuex_map_fields__["a" /* createHelpers */])({
  getterType: 'board/location/getField',
  mutationType: 'board/location/updateField'
}),
    mapFields = _createHelpers.mapFields;

var BASE_URL_UPLOAD = "https://feature-single-profile.test.cnt.team";

/* harmony default export */ __webpack_exports__["a"] = ({
  mixins: [__WEBPACK_IMPORTED_MODULE_8__modules_Geo_mixins_AjaxSelectCity__["a" /* default */]],
  components: { 'lm-dropzone': __WEBPACK_IMPORTED_MODULE_4__components_UI_Dropzone_Index_vue__["a" /* default */] },
  data: function data() {
    return {
      has: __WEBPACK_IMPORTED_MODULE_0__utils__["l" /* has */],
      DRAFT: __WEBPACK_IMPORTED_MODULE_5__modules_Board_Location_Enums_LocationTransition__["a" /* DRAFT */],
      PUBLISH: __WEBPACK_IMPORTED_MODULE_5__modules_Board_Location_Enums_LocationTransition__["b" /* PUBLISH */],
      EQUIPMENT_RENTAL: __WEBPACK_IMPORTED_MODULE_7__modules_Board_Location_Enums_LocationEquip__["EQUIPMENT_RENTAL"],
      PARKING: __WEBPACK_IMPORTED_MODULE_7__modules_Board_Location_Enums_LocationEquip__["PARKING"],
      INTERIOR: __WEBPACK_IMPORTED_MODULE_7__modules_Board_Location_Enums_LocationEquip__["INTERIOR"],
      EXTERIOR: __WEBPACK_IMPORTED_MODULE_7__modules_Board_Location_Enums_LocationEquip__["EXTERIOR"],
      DRESSING_ROOM: __WEBPACK_IMPORTED_MODULE_7__modules_Board_Location_Enums_LocationEquip__["DRESSING_ROOM"],
      SCENE: __WEBPACK_IMPORTED_MODULE_7__modules_Board_Location_Enums_LocationEquip__["SCENE"],
      CHROMAKEY: __WEBPACK_IMPORTED_MODULE_7__modules_Board_Location_Enums_LocationEquip__["CHROMAKEY"],
      CYCLORAMA: __WEBPACK_IMPORTED_MODULE_7__modules_Board_Location_Enums_LocationEquip__["CYCLORAMA"],
      DAYLIGHT: __WEBPACK_IMPORTED_MODULE_7__modules_Board_Location_Enums_LocationEquip__["DAYLIGHT"],
      state: null,
      uploads: [],
      noSsr: false,
      initWysiwyg: false,
      loadingForm: false,
      showFieldForm: true,
      description: {
        tooltip: {
          show: false,
          bottom: false
        }
      }
    };
  },


  computed: _extends({}, mapFields({ fields: 'form.fields', defaultFields: 'form.defaultFields' }), Object(__WEBPACK_IMPORTED_MODULE_1_vuex__["c" /* mapGetters */])({
    user: 'auth/getAuthUser',
    hasEmail: 'auth/hasEmail',
    hasPhone: 'auth/hasPhone',
    profile: 'auth/getProfile',
    isAuthorized: 'auth/isAuthorized',
    isRegistered: 'auth/isRegistered',
    sources: 'board/location/getSources'
  }), {
    hasType: function hasType() {
      return this.fields.type !== null;
    },
    hasRoomType: function hasRoomType() {
      return this.fields.roomType !== null;
    },
    hasDimension: function hasDimension() {
      return !!this.fields.dimension;
    },
    hasPrice: function hasPrice() {
      return !!this.fields.price;
    },
    hasPhotos: function hasPhotos() {
      return !!this.fields.photos.length;
    },
    hasCountry: function hasCountry() {
      return !!this.fields.countryId;
    },
    hasCity: function hasCity() {
      return !!this.fields.cityId;
    },
    hasPhoneField: function hasPhoneField() {
      return !!this.fields.phone;
    },
    isPublishLocationTransition: function isPublishLocationTransition() {
      return this.fields.transition === __WEBPACK_IMPORTED_MODULE_5__modules_Board_Location_Enums_LocationTransition__["b" /* PUBLISH */];
    },
    currencies: function currencies() {
      return this.sources['currencies'].map(function (curr) {
        return { id: curr.id, text: curr.symbol };
      });
    },
    canPublished: function canPublished() {
      return this.hasType && this.hasDimension && this.hasPrice && this.hasPhotos && this.hasCountry && this.hasCity && this.hasPhoneField && (!this.isRoom || this.isRoom && this.hasRoomType);
    },
    placeholderDescription: function placeholderDescription() {
      return 'Расскажите в подробностях об объявлении. Опишите необходимые параметры, возможности и время работы\n\n' + 'Информация из описания должна соответствовать всем заполненным полям\n\n' + 'В описании запрещено указывать контактные данные и ссылки на другие ресурсы\n\n ';
    },
    isRoom: function isRoom() {
      return this.hasType && this.fields.type === __WEBPACK_IMPORTED_MODULE_6__modules_Board_Location_Enums_LocationType__["d" /* ROOM */];
    },
    isConcertHall: function isConcertHall() {
      return this.hasType && this.fields.type === __WEBPACK_IMPORTED_MODULE_6__modules_Board_Location_Enums_LocationType__["a" /* CONCERT_HALL */];
    },
    isTheater: function isTheater() {
      return this.hasType && this.fields.type === __WEBPACK_IMPORTED_MODULE_6__modules_Board_Location_Enums_LocationType__["e" /* THEATER */];
    },
    isPavilion: function isPavilion() {
      return this.hasType && this.fields.type === __WEBPACK_IMPORTED_MODULE_6__modules_Board_Location_Enums_LocationType__["b" /* PAVILION */];
    },
    isPhotoStudio: function isPhotoStudio() {
      return this.hasType && this.fields.type === __WEBPACK_IMPORTED_MODULE_6__modules_Board_Location_Enums_LocationType__["c" /* PHOTO_STUDIO */];
    },
    equipmentAndFacilities: function equipmentAndFacilities() {
      return [{ id: __WEBPACK_IMPORTED_MODULE_7__modules_Board_Location_Enums_LocationEquip__["EQUIPMENT_RENTAL"], text: this.$t('dictionary.equipment-services.' + __WEBPACK_IMPORTED_MODULE_7__modules_Board_Location_Enums_LocationEquip__["EQUIPMENT_RENTAL"], 'web_ru'), field: this._.camelCase(__WEBPACK_IMPORTED_MODULE_7__modules_Board_Location_Enums_LocationEquip__["EQUIPMENT_RENTAL"]) }, { id: __WEBPACK_IMPORTED_MODULE_7__modules_Board_Location_Enums_LocationEquip__["PARKING"], text: this.$t('dictionary.equipment-services.' + __WEBPACK_IMPORTED_MODULE_7__modules_Board_Location_Enums_LocationEquip__["PARKING"], 'web_ru'), field: this._.camelCase(__WEBPACK_IMPORTED_MODULE_7__modules_Board_Location_Enums_LocationEquip__["PARKING"]) }, { id: __WEBPACK_IMPORTED_MODULE_7__modules_Board_Location_Enums_LocationEquip__["INTERIOR"], text: this.$t('dictionary.equipment-services.' + __WEBPACK_IMPORTED_MODULE_7__modules_Board_Location_Enums_LocationEquip__["INTERIOR"], 'web_ru'), field: this._.camelCase(__WEBPACK_IMPORTED_MODULE_7__modules_Board_Location_Enums_LocationEquip__["INTERIOR"]) }, { id: __WEBPACK_IMPORTED_MODULE_7__modules_Board_Location_Enums_LocationEquip__["EXTERIOR"], text: this.$t('dictionary.equipment-services.' + __WEBPACK_IMPORTED_MODULE_7__modules_Board_Location_Enums_LocationEquip__["EXTERIOR"], 'web_ru'), field: this._.camelCase(__WEBPACK_IMPORTED_MODULE_7__modules_Board_Location_Enums_LocationEquip__["EXTERIOR"]) }, { id: __WEBPACK_IMPORTED_MODULE_7__modules_Board_Location_Enums_LocationEquip__["DRESSING_ROOM"], text: this.$t('dictionary.equipment-services.' + __WEBPACK_IMPORTED_MODULE_7__modules_Board_Location_Enums_LocationEquip__["DRESSING_ROOM"], 'web_ru'), field: this._.camelCase(__WEBPACK_IMPORTED_MODULE_7__modules_Board_Location_Enums_LocationEquip__["DRESSING_ROOM"]) }, { id: __WEBPACK_IMPORTED_MODULE_7__modules_Board_Location_Enums_LocationEquip__["SCENE"], text: this.$t('dictionary.equipment-services.' + __WEBPACK_IMPORTED_MODULE_7__modules_Board_Location_Enums_LocationEquip__["SCENE"], 'web_ru'), field: this._.camelCase(__WEBPACK_IMPORTED_MODULE_7__modules_Board_Location_Enums_LocationEquip__["SCENE"]) }, { id: __WEBPACK_IMPORTED_MODULE_7__modules_Board_Location_Enums_LocationEquip__["CHROMAKEY"], text: this.$t('dictionary.equipment-services.' + __WEBPACK_IMPORTED_MODULE_7__modules_Board_Location_Enums_LocationEquip__["CHROMAKEY"], 'web_ru'), field: this._.camelCase(__WEBPACK_IMPORTED_MODULE_7__modules_Board_Location_Enums_LocationEquip__["CHROMAKEY"]) }, { id: __WEBPACK_IMPORTED_MODULE_7__modules_Board_Location_Enums_LocationEquip__["CYCLORAMA"], text: this.$t('dictionary.equipment-services.' + __WEBPACK_IMPORTED_MODULE_7__modules_Board_Location_Enums_LocationEquip__["CYCLORAMA"], 'web_ru'), field: this._.camelCase(__WEBPACK_IMPORTED_MODULE_7__modules_Board_Location_Enums_LocationEquip__["CYCLORAMA"]) }, { id: __WEBPACK_IMPORTED_MODULE_7__modules_Board_Location_Enums_LocationEquip__["DAYLIGHT"], text: this.$t('dictionary.equipment-services.' + __WEBPACK_IMPORTED_MODULE_7__modules_Board_Location_Enums_LocationEquip__["DAYLIGHT"], 'web_ru'), field: this._.camelCase(__WEBPACK_IMPORTED_MODULE_7__modules_Board_Location_Enums_LocationEquip__["DAYLIGHT"]) }];
    },
    showReset: function showReset() {
      var fields = this._.omit(this.fields);
      var defaultFields = this._.omit(this.defaultFields);

      return this._.isEqual(fields, defaultFields) === false;
    }
  }),

  created: function created() {},
  mounted: function mounted() {
    var _this = this;

    setTimeout(function () {
      _this.noSsr = true;
    }, 1000);

    if (!this.fields['currencyId']) {
      this.fields['currencyId'] = this.sources['currencies'].length ? this.sources['currencies'][0]['id'] : null;
    }
  },


  methods: {
    equipCondition: function equipCondition(key) {
      switch (key) {
        case __WEBPACK_IMPORTED_MODULE_7__modules_Board_Location_Enums_LocationEquip__["INTERIOR"]:
          return this.isRoom === true || this.isPhotoStudio === true;
        case __WEBPACK_IMPORTED_MODULE_7__modules_Board_Location_Enums_LocationEquip__["EXTERIOR"]:
          return this.isRoom === true;
        case __WEBPACK_IMPORTED_MODULE_7__modules_Board_Location_Enums_LocationEquip__["DRESSING_ROOM"]:
        case __WEBPACK_IMPORTED_MODULE_7__modules_Board_Location_Enums_LocationEquip__["EQUIPMENT_RENTAL"]:
          return this.isConcertHall === true || this.isTheater === true || this.isPavilion === true || this.isPhotoStudio === true;
        case __WEBPACK_IMPORTED_MODULE_7__modules_Board_Location_Enums_LocationEquip__["SCENE"]:
          return this.isTheater === true;
        case __WEBPACK_IMPORTED_MODULE_7__modules_Board_Location_Enums_LocationEquip__["CHROMAKEY"]:
        case __WEBPACK_IMPORTED_MODULE_7__modules_Board_Location_Enums_LocationEquip__["CYCLORAMA"]:
          return this.isPavilion === true || this.isPhotoStudio === true;
        case __WEBPACK_IMPORTED_MODULE_7__modules_Board_Location_Enums_LocationEquip__["DAYLIGHT"]:
          return this.isPhotoStudio === true;
        default:
          return true;
      }
    },
    _handleBlurUpdateField: function _handleBlurUpdateField() {
      if (this.edit === false) {
        this.$localStorage.set('board.create.location', JSON.stringify(this.fields));
      }
    },
    _handleClickPreviousPage: function _handleClickPreviousPage() {
      var _this2 = this;

      if (this.edit === false && this.hasType && this.isAuthorized && this.isRegistered && this.hasEmail) {
        this.$confirm({
          cancelTxt: 'выйти',
          confirmTxt: 'отмена',
          title: 'Вы покидаете страницу',
          message: 'Внесенные данные не сохранятся, желаете покинуть страницу?'
        }).then(function () {
          // this._handleClickCreateLocation(DRAFT)
        }).catch(function () {
          return _this2._handlePreviousPage();
        });
      } else this._handlePreviousPage();
    },
    _handlePreviousPage: function _handlePreviousPage() {
      if (window.history.length > 2) {
        this.$router.go(-1);
      } else this.$router.push({ name: 'board.locations.index' });
    },

    /**
     * Handle change type select
     * @private
     */
    _handleInputType: function _handleInputType() {
      var _this3 = this;

      if (this.fields.type) {
        setTimeout(function () {
          if (_this3.isRoom === false) {
            _this3.$scrollTo('#form__group_declaration_dimension', 500, { offset: -50 });
          } else _this3.$scrollTo('#form__group_declaration_roomType', 500, { offset: -50 });
        }, 250);
      }
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
     * Handle updated items DropZone
     * @param items
     */
    handleUploadItems: function handleUploadItems(items) {
      this.uploads = items;
      this.fields.photos = items.map(function (item) {
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
      this.$validator.errors.remove('photos');

      data.append('photo', file);

      var url = this.edit && this.location ? 'api/v2/boards/locations/' + this.location.id + '/photos' : 'api/v2/boards/locations/photos';

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
      }).catch(function () {
        error(item.uid);
        console.error('Error upload photo');
      });
    },

    /**
     * Removed item on DropZone
     * @param item
     * @param remove
     * @private
     */
    _handleAttachRemove: function _handleAttachRemove(item, remove) {
      this.$api.delete('api/v2/boards/locations/photos/' + item.id).then(function (response) {
        remove(item.uid);
      }).catch(function () {
        remove(item.uid, false);
        throw new Error('Error delete photo');
      });
    },
    setPlaceLocation: function setPlaceLocation(place) {
      var address = {
        address: place.formatted_address,
        lat: place.geometry.location.lat(),
        lng: place.geometry.location.lng()
      };

      Object.assign(this.fields.address, address);

      this._handleBlurUpdateField();
    }
  }
});

/***/ }),

/***/ 1574:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return ROOM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CONCERT_HALL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return THEATER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return PAVILION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return PHOTO_STUDIO; });
var ROOM = 'room';
var CONCERT_HALL = 'concert-hall';
var THEATER = 'theater';
var PAVILION = 'pavilion';
var PHOTO_STUDIO = 'photo-studio';

/***/ }),

/***/ 1636:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mint_ui__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mint_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_mint_ui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modules_Board_mixins_form_js__ = __webpack_require__(1512);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modules_Board_Location_extends_Form_vue__ = __webpack_require__(1569);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__modules_Board_Location_mixins_form_js__ = __webpack_require__(1573);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__modules_Rating_Enums_events__ = __webpack_require__(438);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__modules_Board_Location_Enums_LocationTransition__ = __webpack_require__(1541);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }












/* harmony default export */ __webpack_exports__["a"] = ({
  extends: __WEBPACK_IMPORTED_MODULE_4__modules_Board_Location_extends_Form_vue__["a" /* default */],
  mixins: [__WEBPACK_IMPORTED_MODULE_3__modules_Board_mixins_form_js__["a" /* default */], __WEBPACK_IMPORTED_MODULE_5__modules_Board_Location_mixins_form_js__["a" /* default */]],
  metaInfo: {
    title: 'Редактирование локации'
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
              return store.dispatch('board/location/getSources', Number(route.params.id));

            case 2:
              _context.next = 4;
              return store.dispatch('board/location/clearLocationFields');

            case 4:
              _context.next = 6;
              return store.dispatch('board/location/getLocationById', {
                id: Number(route.params.id),
                editable: true
              }).catch(function (error) {
                var _error$response = error.response,
                    _error$response$statu = _error$response.status,
                    status = _error$response$statu === undefined ? 500 : _error$response$statu,
                    _error$response$url = _error$response.url,
                    url = _error$response$url === undefined ? null : _error$response$url;

                throw { code: status, message: 'Error edit location', url: url };
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
    error: 'board/location/getLocationError',
    location: 'board/location/getLocationData',
    loading: 'board/location/getLocationLoading'
  }), {
    title: function title() {
      return 'Редактирование объявления';
    },
    isCurrentUser: function isCurrentUser() {
      return this.user && this.edit && this.user.id === this.location.user.id;
    },
    isAdmin: function isAdmin() {
      return this.user && this.user.hasOwnProperty('isAdmin') && this.user['isAdmin'] === true;
    }
  }),
  created: function created() {
    var _this2 = this;

    this.uploads = this.location.photos || [];
    this.fields.photos = this.uploads.map(function (item) {
      return item.id;
    });

    this.$nextTick(function () {
      _this2._setFieldsOnLocationEdit().then(function () {
        _this2.$nextTick(function () {
          if (_this2.fields.countryId && _this2.sources.cities.length === 0) {
            _this2._handleChangeCountrySelect(_this2.fields.countryId, false, true).then(function () {
              _this2.fields.cityId = _this2.location.city && Object(__WEBPACK_IMPORTED_MODULE_0__utils__["l" /* has */])(_this2.location.city, 'id') ? _this2.location.city.id : null;
            }).catch(function () {});
          }
        });
      });
    });
  },

  methods: {
    _handleClickActionLocation: function _handleClickActionLocation(transition) {
      this._handleClickUpdateLocation(transition);

      var event = transition === __WEBPACK_IMPORTED_MODULE_7__modules_Board_Location_Enums_LocationTransition__["b" /* PUBLISH */] ? 'location_publication' : 'location_draft';
      this.$gtm.trackEvent({ event: event });
    },
    _handleClickUpdateLocation: function _handleClickUpdateLocation(transition) {
      var _this3 = this;

      if (this.isAdmin && this.isCurrentUser === false) {
        this.$delete(this.fields, 'transition');
      } else this.fields.transition = transition;

      this.$nextTick(function () {
        _this3._handleValidateFields().then(function () {
          _this3.$nextTick(function () {
            return _this3._handleUpdateLocation();
          });
        }).catch(function () {
          return _this3._scrollToErrorFields();
        });
      });
    },
    _handleUpdateLocation: function _handleUpdateLocation() {
      var _this4 = this;

      this._updateLocation().then(function () {
        var _location = _this4.location,
            id = _location.id,
            slug = _location.slug;


        if (_this4.isAdmin && _this4.isCurrentUser === false) {
          Object(__WEBPACK_IMPORTED_MODULE_2_mint_ui__["Toast"])({ message: 'Локация успешно изменена.', iconClass: 'mintui mintui-success' });

          return _this4.$router.push({ name: 'board.locations.show', params: { id: id, slug: slug } });
        }

        var username = _this4.user.username;
        var transition = _this4.fields.transition;

        _this4.$store.dispatch('board/location/setHasNewLocationsData', true);

        if (transition === __WEBPACK_IMPORTED_MODULE_7__modules_Board_Location_Enums_LocationTransition__["b" /* PUBLISH */]) {
          if (Object(__WEBPACK_IMPORTED_MODULE_0__utils__["l" /* has */])(_this4.profile, 'without_moderate.castings') && _this4.profile['without_moderate']['castings']) {
            Object(__WEBPACK_IMPORTED_MODULE_2_mint_ui__["Toast"])({ message: 'Объявление успешно опубликовано', iconClass: 'mintui mintui-success' });
            // this.$router.push({ name: 'board.locations.index' })
            _this4.$router.push({ name: 'board.locations.show', params: { id: id, slug: slug } });
          } else {
            Object(__WEBPACK_IMPORTED_MODULE_2_mint_ui__["Toast"])({ message: 'Объявление отправлено на модерацию.', iconClass: 'mintui mintui-success' });
            // this.$router.push({ name: 'board.locations.user', params: { username } })
            _this4.$router.push({ name: 'board.locations.show', params: { id: id, slug: slug } });
          }

          _this4.$nsWebViewInterface.emit('rating', __WEBPACK_IMPORTED_MODULE_6__modules_Rating_Enums_events__["b" /* createLocation */]);
        } else {
          Object(__WEBPACK_IMPORTED_MODULE_2_mint_ui__["Toast"])({ message: 'Объявление сохранено в черновик.', iconClass: 'mintui mintui-success' });
          // this.$router.push({ name: 'board.locations.user', params: { username } })
          _this4.$router.push({ name: 'board.locations.show', params: { id: id, slug: slug } });
        }
      }).catch(function () {
        return _this4._scrollToErrorFields();
      });
    },
    _scrollToErrorFields: function _scrollToErrorFields() {
      var el = document.getElementsByClassName('error');
      if (el && el.length) this.$scrollTo(el[0], 500, { offset: -40 });
      Object(__WEBPACK_IMPORTED_MODULE_2_mint_ui__["Toast"])({ message: 'Проверьте правильность ввода.', iconClass: 'mintui mintui-field-error' });
    },
    _updateLocation: function _updateLocation() {
      var _this5 = this;

      return new Promise(function (resolve, reject) {

        __WEBPACK_IMPORTED_MODULE_2_mint_ui__["Indicator"].open();
        _this5.loadingForm = true;

        var data = _this5._.cloneDeep(_this5.fields);
        if (_this5.isRoom === false) {
          _this5.$delete(data, 'roomType');
          _this5.$delete(data, 'roomHeight');
          _this5.$delete(data, 'exterior');
        }

        _this5.$delete(data, 'photos');

        _this5.$api.patch('api/v2/boards/locations/' + _this5.location.id, data).then(function (response) {
          var data = response.data.data;


          __WEBPACK_IMPORTED_MODULE_2_mint_ui__["Indicator"].close();
          _this5.loadingForm = false;
          resolve(data);
        }, function (error) {
          var data = error.response.data,
              status = error.response.status;


          __WEBPACK_IMPORTED_MODULE_2_mint_ui__["Indicator"].close();
          _this5.loadingForm = false;
          Object(__WEBPACK_IMPORTED_MODULE_2_mint_ui__["Toast"])({ message: 'Ошибка', iconClass: 'mintui mintui-field-error' });

          reject();

          if (status === 422) {
            _this5.$setLaravelValidationErrorsFromResponse(data);
          } else throw new Error('Error create board location');
        });
      });
    },
    _setFieldsOnLocationEdit: function _setFieldsOnLocationEdit() {
      var _this6 = this;

      return new Promise(function (resolve, reject) {
        try {
          _this6.fields.type = _this6.location.type && Object(__WEBPACK_IMPORTED_MODULE_0__utils__["l" /* has */])(_this6.location.type, 'id') ? _this6.location.type.id : null;

          _this6.fields.roomType = Object(__WEBPACK_IMPORTED_MODULE_0__utils__["l" /* has */])(_this6.location.roomType, 'id') && _this6.location.roomType ? _this6.location.roomType.id : null;
          _this6.fields.roomHeight = Number(_this6.location.roomHeight) ? Number(_this6.location.roomHeight) : null;

          _this6.fields.price = Number(_this6.location.price) ? Number(_this6.location.price) : null;
          _this6.fields.currencyId = Object(__WEBPACK_IMPORTED_MODULE_0__utils__["l" /* has */])(_this6.location, 'currency.id') ? _this6.location.currency['id'] : null;
          _this6.fields.paymentPeriod = Object(__WEBPACK_IMPORTED_MODULE_0__utils__["l" /* has */])(_this6.location, 'paymentPeriod.id') ? _this6.location.paymentPeriod['id'] : null;

          _this6.fields.countryId = _this6.location.country && Object(__WEBPACK_IMPORTED_MODULE_0__utils__["l" /* has */])(_this6.location.country, 'id') ? _this6.location.country.id : null;

          if (_this6.sources['cities'] && _this6.sources.cities.length) {
            _this6.fields.cityId = _this6.location.city && Object(__WEBPACK_IMPORTED_MODULE_0__utils__["l" /* has */])(_this6.location.city, 'id') ? _this6.location.city.id : null;
          }

          _this6.fields.dimension = Number(_this6.location.dimension) ? Number(_this6.location.dimension) : null;
          _this6.fields.equipment = _this6.location.equipment || null;
          _this6.fields.passSystem = _this6.location.passSystem || null;
          _this6.fields.facilities = _this6.location.facilities || null;
          _this6.fields.description = _this6.location.description || null;

          _this6.fields.site = _this6.location.site || null;
          _this6.fields.email = _this6.location.email || null;
          _this6.fields.phone = _this6.location.phone || null;
          _this6.fields.other = _this6.location.other || null;

          _this6.fields.scene = _this6.location.scene ? 1 : 0;
          _this6.fields.parking = _this6.location.parking ? 1 : 0;
          _this6.fields.exterior = _this6.location.exterior ? 1 : 0;
          _this6.fields.interior = _this6.location.interior ? 1 : 0;
          _this6.fields.daylight = _this6.location.daylight ? 1 : 0;
          _this6.fields.cyclorama = _this6.location.cyclorama ? 1 : 0;
          _this6.fields.chromakey = _this6.location.chromakey ? 1 : 0;
          _this6.fields.dressingRoom = _this6.location.dressingRoom ? 1 : 0;
          _this6.fields.equipmentRental = _this6.location.equipmentRental ? 1 : 0;

          if (Object(__WEBPACK_IMPORTED_MODULE_0__utils__["l" /* has */])(_this6.location, 'address')) {
            _this6.fields.address['lat'] = Object(__WEBPACK_IMPORTED_MODULE_0__utils__["l" /* has */])(_this6.location.address, 'lat') ? _this6.location.address.lat : null;
            _this6.fields.address['lng'] = Object(__WEBPACK_IMPORTED_MODULE_0__utils__["l" /* has */])(_this6.location.address, 'lng') ? _this6.location.address.lng : null;
            _this6.fields.address['address'] = Object(__WEBPACK_IMPORTED_MODULE_0__utils__["l" /* has */])(_this6.location.address, 'address') ? _this6.location.address.address : null;
          }
          resolve && resolve(true);
        } catch (e) {
          reject && reject(e);
        }
      });
    }
  }
});

/***/ }),

/***/ 1977:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1978);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("7653beb2", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js?sourceMap!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-4159f9de\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Edit.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js?sourceMap!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-4159f9de\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Edit.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1978:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(true);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"Edit.vue","sourceRoot":""}]);

// exports


/***/ })

});
//# sourceMappingURL=75.build.d1cbf7f1ec431871f848.js.map