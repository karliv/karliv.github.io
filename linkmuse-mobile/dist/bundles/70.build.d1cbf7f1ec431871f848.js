webpackJsonp([70],{

/***/ 1277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Index_vue__ = __webpack_require__(1621);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_1a2dd216_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Index_vue__ = __webpack_require__(1935);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1928)
}
var normalizeComponent = __webpack_require__(2)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-1a2dd216"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_1a2dd216_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Index_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/views/Board/Castings/Index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1a2dd216", Component.options)
  } else {
    hotAPI.reload("data-v-1a2dd216", Component.options)
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

/***/ 1508:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mint_ui__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mint_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_mint_ui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modules_Board_Casting__ = __webpack_require__(1511);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modules_Board_Casting_Enums_CastingState__ = __webpack_require__(435);
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








/* harmony default export */ __webpack_exports__["a"] = ({
  props: {
    casting: {
      type: Object,
      required: true
    },
    isCatalogPage: {
      type: Boolean,
      default: true
    },
    showMore: {
      type: Boolean,
      default: true
    },
    gtm: {
      type: String,
      required: false
    }
  },
  data: function data() {
    return {
      has: __WEBPACK_IMPORTED_MODULE_0__utils__["l" /* has */]
    };
  },

  computed: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_1_vuex__["c" /* mapGetters */])({
    role: 'auth/getRole',
    user: 'auth/getAuthUser',
    profile: 'auth/getProfile',
    isAuthorized: 'auth/isAuthorized'
  }), {
    isCustomer: function isCustomer() {
      return this.role === 'customer';
    },
    isExecutor: function isExecutor() {
      return this.role === 'executor';
    },
    hasSecondaryUser: function hasSecondaryUser() {
      return this.user && this.user.hasOwnProperty('secondary_user') ? this.user['secondary_user'] : false;
    },
    id: function id() {
      return this.casting.id;
    },
    slug: function slug() {
      return this.casting.slug;
    },
    isCurrentUser: function isCurrentUser() {
      return this.user && this.user.id === this.casting.user.id;
    },
    professions: function professions() {
      return this.casting.professions && this.casting.professions.length ? this.casting.professions.map(function (p) {
        return p.text;
      }) : [];
    },
    genders: function genders() {
      return this.casting.genders && this.casting.genders.length ? this.casting.genders.map(function (gender) {
        return gender.text;
      }) : [];
    },
    category: function category() {
      return this.casting.category && Object(__WEBPACK_IMPORTED_MODULE_0__utils__["l" /* has */])(this.casting.category, 'text') ? this.casting.category.text : null;
    },
    fee: function fee() {
      if (!this.casting.fee || this.casting.fee && this.casting.fee.available === false) return false;
      return __WEBPACK_IMPORTED_MODULE_3__modules_Board_Casting__["a" /* default */].getAmountSemanticCatalog(this.casting.fee);
    },
    author: function author() {
      return this.casting.user;
    },
    ages: function ages() {
      var attribute = '';
      if (this.casting.ageFrom || this.casting.ageTo) {
        if (this.casting.ageFrom) {
          attribute += this.casting.ageTo ? this.casting.ageFrom + ' - ' : 'от ' + this.casting.ageFrom;
        }

        if (this.casting.ageTo && this.casting.ageFrom) {
          attribute += this.casting.ageTo;
        } else if (this.casting.ageTo && !this.casting.ageFrom) {
          attribute += 'до ' + this.casting.ageTo;
        }
      }

      if (this.casting.ageFrom && this.casting.ageTo && this.casting.ageFrom === this.casting.ageTo) {
        attribute = this.casting.ageFrom;
      }

      return attribute;
    },
    isResponded: function isResponded() {
      return this.casting.isResponded || false;
    },
    responses: function responses() {
      if (this.isCurrentUser === false && this.isAdmin === false) return false;
      return Object(__WEBPACK_IMPORTED_MODULE_0__utils__["l" /* has */])(this.casting, 'counters.responses') ? this.casting.counters.responses : false;
    },
    city: function city() {
      return Object(__WEBPACK_IMPORTED_MODULE_0__utils__["l" /* has */])(this.casting, 'city.id') ? this.casting.city : null;
    },
    state: function state() {
      return this.casting.state;
    },
    classColorState: function classColorState() {
      return __WEBPACK_IMPORTED_MODULE_3__modules_Board_Casting__["a" /* default */].getCastingStateClass(this.state);
    },
    isModeration: function isModeration() {
      return this.state === __WEBPACK_IMPORTED_MODULE_4__modules_Board_Casting_Enums_CastingState__["d" /* MODERATION */];
    },
    isPublished: function isPublished() {
      return this.state === __WEBPACK_IMPORTED_MODULE_4__modules_Board_Casting_Enums_CastingState__["e" /* PUBLISHED */];
    },
    isDraft: function isDraft() {
      return this.state === __WEBPACK_IMPORTED_MODULE_4__modules_Board_Casting_Enums_CastingState__["c" /* DRAFT */];
    },
    isArchived: function isArchived() {
      return this.state === __WEBPACK_IMPORTED_MODULE_4__modules_Board_Casting_Enums_CastingState__["a" /* ARCHIVED */];
    },
    isRejected: function isRejected() {
      return this.state === __WEBPACK_IMPORTED_MODULE_4__modules_Board_Casting_Enums_CastingState__["f" /* REJECTED */];
    },
    isAdmin: function isAdmin() {
      return this.user && this.user.hasOwnProperty('isAdmin') && this.user['isAdmin'] === true;
    },
    canRespond: function canRespond() {
      return Object(__WEBPACK_IMPORTED_MODULE_0__utils__["l" /* has */])(this.casting, 'abilities.respond') ? this.casting['abilities']['respond'] : false;
    },
    canRespondWithoutSelectProfession: function canRespondWithoutSelectProfession() {
      return Object(__WEBPACK_IMPORTED_MODULE_0__utils__["l" /* has */])(this.casting, 'abilities.respondWithoutSelectProfession') ? this.casting['abilities']['respondWithoutSelectProfession'] : false;
    },
    isFasten: function isFasten() {
      return this.casting.isFasten || false;
    },
    canRespondOnCasting: function canRespondOnCasting() {
      return this.user && this.user.hasOwnProperty('can_respond_on_casting') ? this.user['can_respond_on_casting'] : false;
    },
    forTrusted: function forTrusted() {
      return this.casting.forTrusted || false;
    },
    portfolioBadQuality: function portfolioBadQuality() {
      return this.user && this.user.hasOwnProperty('portfolio_bad_quality') ? this.user['portfolio_bad_quality'] : null;
    },
    hasCertification: function hasCertification() {
      return this.user && this.user.hasOwnProperty('has_certification') ? this.user['has_certification'] : false;
    },
    hasPortfolio: function hasPortfolio() {
      return this.user && this.user.hasOwnProperty('has_portfolio') ? this.user['has_portfolio'] : false;
    }
  }),
  mounted: function mounted() {
    var _this = this;

    var id = this.casting.id;

    this.$root.$on('response-created', function (castingId, response) {
      if (castingId === id) {
        _this.$emit('changeState', { id: castingId, key: 'isResponded', value: true });
      }
    });
  },

  methods: {
    _handleClickResponse: function _handleClickResponse() {
      if (this.isAuthorized === true) {
        if (this.isResponded === false) {
          if (this.canRespond) {
            this.$modalRouter.push({ name: 'board.castings.responses.create', props: { casting: this.casting } });
          } else Object(__WEBPACK_IMPORTED_MODULE_2_mint_ui__["Toast"])({ message: 'Ограничение отклика на кастинг', iconClass: 'mintui mintui-field-error' });
        } else Object(__WEBPACK_IMPORTED_MODULE_2_mint_ui__["Toast"])({ message: 'Отклик уже отправлен', iconClass: 'mintui mintui-field-error' });
      } else this._handleClickResponseWithoutAuthorized();

      if (this.gtm) this.$gtm.trackEvent({ event: this.gtm });
    },
    _handleClickResponseWithoutAuthorized: function _handleClickResponseWithoutAuthorized() {
      this.$root.$emit('open-modal-access-response', this.href);
    },
    _handleResponse: function _handleResponse() {
      var _this2 = this;

      return new Promise(function (resolve, reject) {
        __WEBPACK_IMPORTED_MODULE_2_mint_ui__["Indicator"].open();

        var id = _this2.casting.id;

        _this2.$api.post('api/v2/boards/castings/' + id + '/responses').then(function (response) {
          var data = response.data;


          _this2.$emit('changeState', { id: id, key: 'isResponded', value: true });

          __WEBPACK_IMPORTED_MODULE_2_mint_ui__["Indicator"].close();

          resolve();
        }, function (error) {
          var _error$response = error.response,
              data = _error$response.data,
              status = _error$response.status;


          __WEBPACK_IMPORTED_MODULE_2_mint_ui__["Indicator"].close();
          Object(__WEBPACK_IMPORTED_MODULE_2_mint_ui__["Toast"])({ message: 'Ошибка', iconClass: 'mintui mintui-field-error' });

          reject();

          throw new Error('Error create response');
        });
      });
    },
    _handleClickActionSheet: function _handleClickActionSheet() {
      var id = this.casting.id;

      this.$emit('actionSheet', id, this.isCurrentUser);
    },
    _handleClickCreateAccount: function _handleClickCreateAccount() {
      var _this3 = this;

      var selectedRole = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      __WEBPACK_IMPORTED_MODULE_2_mint_ui__["Indicator"].open();

      this.$api.patch('api/v1/auth/role').then(function (response) {
        var _response$data = response.data,
            token = _response$data.token,
            role = _response$data.role;


        _this3.$auth.storeSession({ token: token, role: role });

        _this3.$store.dispatch('auth/setToken', { accessToken: token, refreshToken: token }).then(function (result) {
          _this3.$store.dispatch('auth/getUserByAPI').then(function (result) {
            __WEBPACK_IMPORTED_MODULE_2_mint_ui__["Indicator"].close();
            _this3._handleCloseModal();
            Object(__WEBPACK_IMPORTED_MODULE_2_mint_ui__["Toast"])({ message: 'Успешно', iconClass: 'mintui mintui-success' });
            if (selectedRole) _this3.$localStorage.set('register.role', selectedRole);

            _this3.$nextTick(function () {
              if (_this3.isRegistered === false) _this3.$router.push({ name: 'user.register' });
            });
          });
        });
      }, function (error) {
        var data = error.response.data,
            status = error.response.status;

        __WEBPACK_IMPORTED_MODULE_2_mint_ui__["Indicator"].close();
      });
    },
    _handleClickOpenCasting: function _handleClickOpenCasting() {
      if (this.gtm) this.$gtm.trackEvent({ event: this.gtm });
    }
  }
});

/***/ }),

/***/ 1509:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(6);
//
//
//
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
  name: 'NavigationCategories',
  data: function data() {
    return {
      isNative: __WEBPACK_IMPORTED_MODULE_0__utils__["o" /* isNative */]
    };
  }
});

/***/ }),

/***/ 1511:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modules_User_Enums_Sex__ = __webpack_require__(1506);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Enums_CastingState__ = __webpack_require__(435);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }




var Casting = function () {
  function Casting() {
    var _sex, _classes;

    _classCallCheck(this, Casting);

    this.sex = (_sex = {}, _sex[__WEBPACK_IMPORTED_MODULE_0__modules_User_Enums_Sex__["b" /* MALE */]] = 'male', _sex[__WEBPACK_IMPORTED_MODULE_0__modules_User_Enums_Sex__["a" /* FEMALE */]] = 'female', _sex);

    this.state = {
      classes: (_classes = {}, _classes[__WEBPACK_IMPORTED_MODULE_1__Enums_CastingState__["b" /* CREATED */]] = null, _classes[__WEBPACK_IMPORTED_MODULE_1__Enums_CastingState__["c" /* DRAFT */]] = 'color_gray-3', _classes[__WEBPACK_IMPORTED_MODULE_1__Enums_CastingState__["d" /* MODERATION */]] = 'color_support-3', _classes[__WEBPACK_IMPORTED_MODULE_1__Enums_CastingState__["f" /* REJECTED */]] = 'color_support-1', _classes[__WEBPACK_IMPORTED_MODULE_1__Enums_CastingState__["e" /* PUBLISHED */]] = null, _classes[__WEBPACK_IMPORTED_MODULE_1__Enums_CastingState__["a" /* ARCHIVED */]] = 'color_gray-3', _classes)
    };
  }

  Casting.prototype.getAmountSemanticCatalog = function getAmountSemanticCatalog(_ref) {
    var amount = _ref.amount,
        available = _ref.available,
        currency = _ref.currency,
        type = _ref.type;

    if (available === false) return false;
    if (available === true && (typeof amount === 'undefined' || Number(amount) === 0)) return true;
    return { amount: amount, currency: currency['symbol'], type: type['text'] };
  };

  Casting.prototype.getCastingStateClass = function getCastingStateClass(status) {
    var item = this.state.classes[status];
    return item || '';
  };

  return Casting;
}();

/* harmony default export */ __webpack_exports__["a"] = (new Casting());

/***/ }),

/***/ 1520:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Casting_vue__ = __webpack_require__(1508);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_00805e0e_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Casting_vue__ = __webpack_require__(1523);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1521)
}
var normalizeComponent = __webpack_require__(2)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-00805e0e"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Casting_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_00805e0e_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Casting_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/Board/Casting/Casting.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-00805e0e", Component.options)
  } else {
    hotAPI.reload("data-v-00805e0e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 1521:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1522);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("0ff1fead", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js?sourceMap!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-00805e0e\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Casting.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js?sourceMap!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-00805e0e\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Casting.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1522:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(true);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"Casting.vue","sourceRoot":""}]);

// exports


/***/ }),

/***/ 1523:
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
        "card",
        "declaration__card",
        {
          card_premium: _vm.isCatalogPage === true && _vm.isFasten === true,
          opacity_64: _vm.isArchived === true,
          "in-moderation": _vm.isModeration
        }
      ]
    },
    [
      _c(
        "div",
        { staticClass: "row row_justify_between row_align_center mb_0_5" },
        [
          _c(
            "div",
            { class: ["declaration__type", _vm.classColorState] },
            [
              _vm.isCatalogPage === true
                ? [[_vm._v(_vm._s(_vm.category))]]
                : _vm._e(),
              _vm._v(" "),
              _vm.isCatalogPage === false
                ? [
                    _vm.isCurrentUser === false
                      ? [_vm._v(_vm._s(_vm.category))]
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.isCurrentUser === true
                      ? [
                          _vm.isDraft === true
                            ? [
                                _vm._v(
                                  _vm._s(_vm.$t("casting-page.draft.draft"))
                                )
                              ]
                            : _vm.isModeration === true
                            ? [
                                _vm._v(
                                  _vm._s(
                                    _vm.$t(
                                      "casting-page.casting-on-moderation.on-moderation"
                                    )
                                  )
                                )
                              ]
                            : _vm.isRejected === true
                            ? [
                                _vm._v(
                                  "\n            " +
                                    _vm._s(
                                      _vm.$t("casting-page.rejected.rejected")
                                    ) +
                                    ": " +
                                    _vm._s(
                                      _vm.has(
                                        _vm.casting,
                                        "rejection.cause.text"
                                      )
                                        ? _vm.casting["rejection"]["cause"][
                                            "text"
                                          ]
                                        : ""
                                    ) +
                                    ".\n            " +
                                    _vm._s(
                                      _vm.has(_vm.casting, "rejection.comment")
                                        ? _vm.casting["rejection"]["comment"]
                                        : ""
                                    ) +
                                    "\n          "
                                )
                              ]
                            : _vm.isPublished === true
                            ? [_vm._v("Опубликован")]
                            : _vm.isArchived === true
                            ? [
                                _vm._v(
                                  _vm._s(_vm.$t("casting-page.archive.archive"))
                                )
                              ]
                            : [
                                _vm._v(
                                  _vm._s(_vm.$t("boardbox.my-ads.your-ad"))
                                )
                              ]
                        ]
                      : _vm._e()
                  ]
                : _vm._e()
            ],
            2
          ),
          _vm._v(" "),
          _vm.isAuthorized === true && _vm.showMore === true
            ? [
                _c(
                  "button",
                  {
                    staticClass: "btn btn_options",
                    on: { click: _vm._handleClickActionSheet }
                  },
                  [
                    _c("svg", { staticClass: "icon icon_size_16" }, [
                      _c("use", {
                        attrs: {
                          "xlink:href":
                            "/dist/img/icons/svg/sprite.svg#icon_options"
                        }
                      })
                    ])
                  ]
                )
              ]
            : _vm._e()
        ],
        2
      ),
      _vm._v(" "),
      (_vm.casting.name && _vm.casting.name.length) ||
      (_vm.casting.professions && _vm.casting.professions.length)
        ? [
            _c(
              "router-link",
              {
                staticClass: "section declaration__section",
                attrs: {
                  to: {
                    name: "board.castings.show",
                    params: { slug: _vm.slug, id: _vm.id }
                  }
                },
                nativeOn: {
                  click: function($event) {
                    return _vm._handleClickOpenCasting($event)
                  }
                }
              },
              [
                _vm.casting.name && _vm.casting.name.length
                  ? [
                      _c(
                        "div",
                        { staticClass: "heading_h5 declaration__heading mb_0" },
                        [
                          _vm._v(
                            "\n          " +
                              _vm._s(_vm._f("truncate")(_vm.casting.name, 50)) +
                              "\n        "
                          )
                        ]
                      )
                    ]
                  : _vm._e(),
                _vm._v(" "),
                (_vm.professions && _vm.professions.length) ||
                (_vm.genders && _vm.genders.length) ||
                _vm.ages
                  ? [
                      _c(
                        "div",
                        {
                          staticClass:
                            "declaration__list declaration__list_parameters mt_2"
                        },
                        [
                          _vm.professions && _vm.professions.length
                            ? [
                                _c(
                                  "div",
                                  [
                                    _vm._v(
                                      _vm._s(
                                        _vm.professions.slice(0, 2).join(", ")
                                      ) + " "
                                    ),
                                    _vm.professions.length > 2
                                      ? [_vm._v("...")]
                                      : _vm._e()
                                  ],
                                  2
                                )
                              ]
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.genders && _vm.genders.length
                            ? [
                                _c("div", [
                                  _vm._v(
                                    _vm._s(
                                      _vm._f("truncate")(
                                        _vm.genders.join(", "),
                                        18
                                      )
                                    )
                                  )
                                ])
                              ]
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.ages
                            ? [_c("div", [_vm._v(_vm._s(_vm.ages))])]
                            : _vm._e()
                        ],
                        2
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
        { staticClass: "section declaration__section" },
        [
          _c("div", { staticClass: "row" }, [
            _c(
              "div",
              { staticClass: "declaration__date" },
              [
                _c("span", [
                  _vm._v(
                    _vm._s(_vm.$t("boardbox.boardbox-screen.casting-date")) +
                      ":"
                  )
                ]),
                _vm._v(" "),
                _vm.casting.dateStart || _vm.casting.dateEnd
                  ? [
                      _vm.casting.dateStart &&
                      _vm.casting.dateEnd &&
                      _vm.casting.dateStart === _vm.casting.dateEnd
                        ? [
                            _vm._v(
                              "\n            " +
                                _vm._s(
                                  _vm
                                    .$moment(
                                      _vm.casting.dateStart,
                                      "DD-MM-YYYY"
                                    )
                                    .format("D.MM.YY")
                                ) +
                                "\n          "
                            )
                          ]
                        : [
                            _vm.casting.dateStart
                              ? [
                                  _vm._v(
                                    "\n              " +
                                      _vm._s(_vm.casting.dateEnd ? "" : "с") +
                                      "\n              " +
                                      _vm._s(
                                        _vm
                                          .$moment(
                                            _vm.casting.dateStart,
                                            "DD-MM-YYYY"
                                          )
                                          .format("D.MM.YY")
                                      ) +
                                      "\n            "
                                  )
                                ]
                              : _vm._e(),
                            _vm._v(" "),
                            _vm.casting.dateEnd
                              ? [
                                  _vm._v(
                                    "\n              " +
                                      _vm._s(
                                        _vm.casting.dateStart ? "-" : "до"
                                      ) +
                                      "\n              " +
                                      _vm._s(
                                        _vm
                                          .$moment(
                                            _vm.casting.dateEnd,
                                            "DD-MM-YYYY"
                                          )
                                          .format("D.MM.YY")
                                      ) +
                                      "\n            "
                                  )
                                ]
                              : _vm._e()
                          ]
                    ]
                  : [
                      _vm._v(
                        _vm._s(_vm.$t("boardbox.boardbox-screen.specified"))
                      )
                    ]
              ],
              2
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "row" }, [
            _c(
              "div",
              { staticClass: "declaration__date" },
              [
                _c("span", [
                  _vm._v(
                    _vm._s(_vm.$t("boardbox.boardbox-screen.work-date")) + ":"
                  )
                ]),
                _vm._v(" "),
                _vm.casting.dateWorkStart || _vm.casting.dateWorkEnd
                  ? [
                      _vm.casting.dateWorkStart &&
                      _vm.casting.dateWorkEnd &&
                      _vm.casting.dateWorkStart === _vm.casting.dateWorkEnd
                        ? [
                            _vm._v(
                              "\n            " +
                                _vm._s(
                                  _vm
                                    .$moment(
                                      _vm.casting.dateWorkStart,
                                      "DD-MM-YYYY"
                                    )
                                    .format("D.MM.YY")
                                ) +
                                "\n          "
                            )
                          ]
                        : [
                            _vm.casting.dateWorkStart
                              ? [
                                  _vm._v(
                                    "\n              " +
                                      _vm._s(
                                        _vm.casting.dateWorkEnd ? "" : "с"
                                      ) +
                                      "\n              " +
                                      _vm._s(
                                        _vm
                                          .$moment(
                                            _vm.casting.dateWorkStart,
                                            "DD-MM-YYYY"
                                          )
                                          .format("D.MM.YY")
                                      ) +
                                      "\n            "
                                  )
                                ]
                              : _vm._e(),
                            _vm._v(" "),
                            _vm.casting.dateWorkEnd
                              ? [
                                  _vm._v(
                                    "\n              " +
                                      _vm._s(
                                        _vm.casting.dateWorkStart ? "-" : "до"
                                      ) +
                                      "\n              " +
                                      _vm._s(
                                        _vm
                                          .$moment(
                                            _vm.casting.dateWorkEnd,
                                            "DD-MM-YYYY"
                                          )
                                          .format("D.MM.YY")
                                      ) +
                                      "\n            "
                                  )
                                ]
                              : _vm._e()
                          ]
                    ]
                  : [
                      _vm._v(
                        _vm._s(_vm.$t("boardbox.boardbox-screen.specified"))
                      )
                    ]
              ],
              2
            )
          ]),
          _vm._v(" "),
          _vm.isAdmin === true && _vm.casting.publishedAt
            ? [
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "declaration__date" }, [
                    _c("span", [_vm._v("Дата публикации:")]),
                    _vm._v(
                      "\n          " +
                        _vm._s(
                          _vm
                            .$moment(_vm.casting.publishedAt)
                            .format("D.MM.YY HH:mm")
                        ) +
                        "\n        "
                    )
                  ])
                ])
              ]
            : _vm._e(),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "declaration__fee" },
            [
              _vm.fee
                ? [
                    _vm.fee.amount
                      ? [
                          _vm._v(
                            _vm._s(
                              _vm._f("currency")(
                                _vm.fee.amount,
                                _vm.fee.currency
                              )
                            ) + " "
                          ),
                          _vm.fee.type
                            ? [
                                _vm._v(
                                  "/ " +
                                    _vm._s(_vm._f("lowercase")(_vm.fee.type))
                                )
                              ]
                            : _vm._e()
                        ]
                      : [
                          _vm._v(
                            _vm._s(
                              _vm.$t("boardbox.my-ads.fee-to-be-specified")
                            )
                          )
                        ]
                  ]
                : [_vm._v(_vm._s(_vm.$t("boardbox.boardbox-screen.no-fee")))]
            ],
            2
          ),
          _vm._v(" "),
          _vm.isCurrentUser === false && _vm.isAdmin === true
            ? [
                _vm.responses.total
                  ? [
                      _c(
                        "div",
                        {
                          staticClass: "declaration__fee",
                          style: { marginTop: "8px" }
                        },
                        [
                          _vm._v(
                            "\n          Уже откликнулись " +
                              _vm._s(_vm.responses.total) +
                              " "
                          ),
                          _vm.responses["notRead"]
                            ? [
                                _vm._v(
                                  "(+" + _vm._s(_vm.responses["notRead"]) + ")"
                                )
                              ]
                            : _vm._e()
                        ],
                        2
                      )
                    ]
                  : _vm._e()
              ]
            : _vm._e()
        ],
        2
      ),
      _vm._v(" "),
      _vm.isCatalogPage === true ||
      (_vm.isCatalogPage === false &&
        (_vm.isPublished === true ||
          _vm.isArchived === true ||
          _vm.isDraft === true ||
          _vm.isRejected === true))
        ? [
            _c("div", { staticClass: "section declaration__section" }, [
              _c(
                "div",
                { staticClass: "row row_justify_center" },
                [
                  _vm.isCurrentUser === false
                    ? [
                        [
                          _vm.canRespond === true ||
                          _vm.isAuthorized === false ||
                          _vm.isResponded === true
                            ? [
                                _c(
                                  "button",
                                  {
                                    class: ["btn"],
                                    attrs: {
                                      disabled: _vm.isResponded === true
                                    },
                                    on: { click: _vm._handleClickResponse }
                                  },
                                  [
                                    _vm._v(
                                      "\n                " +
                                        _vm._s(
                                          _vm.isResponded === true
                                            ? _vm.$t("boardbox.my-ads.applied")
                                            : _vm.$t(
                                                "boardbox.boardbox-screen.apply"
                                              )
                                        ) +
                                        "\n              "
                                    )
                                  ]
                                )
                              ]
                            : _vm.canRespond === false
                            ? [
                                _c(
                                  "button",
                                  { class: ["btn"], attrs: { disabled: true } },
                                  [_vm._v("Кастинг неактуален")]
                                )
                              ]
                            : _vm._e()
                        ]
                      ]
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.isCurrentUser === true &&
                  (_vm.isCatalogPage === true ||
                    (_vm.isCatalogPage === false &&
                      (_vm.isPublished === true || _vm.isArchived === true)))
                    ? [
                        _c(
                          "router-link",
                          {
                            class: [
                              "btn",
                              { btn_secondary: _vm.isArchived === true }
                            ],
                            attrs: {
                              to: {
                                name: "board.castings.show",
                                params: { slug: _vm.slug, id: _vm.id },
                                query: { responses: true }
                              }
                            },
                            nativeOn: {
                              click: function($event) {
                                return _vm._handleClickOpenCasting($event)
                              }
                            }
                          },
                          [
                            _vm._v(
                              "\n            " +
                                _vm._s(_vm.$t("boardbox.my-ads.applications")) +
                                "\n            "
                            ),
                            _vm.responses.total
                              ? [
                                  _c(
                                    "div",
                                    { staticClass: "response__number" },
                                    [_vm._v(_vm._s(_vm.responses.total))]
                                  ),
                                  _vm._v(" "),
                                  _vm.responses["notRead"]
                                    ? _c(
                                        "div",
                                        { staticClass: "response__number_new" },
                                        [
                                          _vm._v(
                                            "(+" +
                                              _vm._s(_vm.responses["notRead"]) +
                                              ")"
                                          )
                                        ]
                                      )
                                    : _vm._e()
                                ]
                              : _vm._e()
                          ],
                          2
                        )
                      ]
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.isCurrentUser === true && _vm.isDraft === true
                    ? [
                        _c(
                          "router-link",
                          {
                            staticClass: "btn",
                            attrs: {
                              to: {
                                name: "board.castings.edit",
                                params: { id: _vm.id }
                              }
                            }
                          },
                          [_vm._v("\n            Продолжить\n          ")]
                        )
                      ]
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.isCurrentUser === true && _vm.isRejected === true
                    ? [
                        _c(
                          "router-link",
                          {
                            staticClass: "btn",
                            attrs: {
                              to: {
                                name: "board.castings.edit",
                                params: { id: _vm.id }
                              }
                            }
                          },
                          [_vm._v("\n            Редактировать\n          ")]
                        )
                      ]
                    : _vm._e()
                ],
                2
              )
            ])
          ]
        : _vm._e()
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-00805e0e", esExports)
  }
}

/***/ }),

/***/ 1524:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_NavigationCategories_vue__ = __webpack_require__(1509);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_c219a6ae_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_NavigationCategories_vue__ = __webpack_require__(1527);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1525)
}
var normalizeComponent = __webpack_require__(2)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-c219a6ae"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_NavigationCategories_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_c219a6ae_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_NavigationCategories_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/Board/NavigationCategories.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-c219a6ae", Component.options)
  } else {
    hotAPI.reload("data-v-c219a6ae", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 1525:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1526);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("227aa7fb", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js?sourceMap!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-c219a6ae\",\"scoped\":true,\"hasInlineConfig\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./NavigationCategories.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js?sourceMap!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-c219a6ae\",\"scoped\":true,\"hasInlineConfig\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./NavigationCategories.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1526:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(true);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"NavigationCategories.vue","sourceRoot":""}]);

// exports


/***/ }),

/***/ 1527:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("nav", { staticClass: "nav nav_categories nav_categories_feed" }, [
    _c(
      "div",
      { staticClass: "nav__list nav__list_categories" },
      [
        _c(
          "router-link",
          {
            class: ["nav__item nav__item_categories"],
            attrs: {
              to: { name: "board.castings.index" },
              activeClass: "nav__item_categories_active"
            }
          },
          [_vm._v(_vm._s(_vm.$t("boardbox.boardbox-screen.castings")))]
        ),
        _vm._v(" "),
        _c(
          "router-link",
          {
            class: ["nav__item nav__item_categories"],
            attrs: {
              to: { name: "board.locations.index" },
              activeClass: "nav__item_categories_active"
            }
          },
          [_vm._v(_vm._s(_vm.$t("boardbox.boardbox-screen.locations")))]
        ),
        _vm._v(" "),
        0
          ? _c(
              "router-link",
              {
                class: ["nav__item nav__item_categories"],
                attrs: {
                  to: { name: "board.sales.index" },
                  activeClass: "nav__item_categories_active"
                }
              },
              [_vm._v(_vm._s(_vm.$t("boardbox.boardbox-screen.sale")))]
            )
          : _vm._e(),
        _vm._v(" "),
        0
          ? _c(
              "router-link",
              {
                class: ["nav__item nav__item_categories"],
                attrs: {
                  to: { name: "board.rents.index" },
                  activeClass: "nav__item_categories_active"
                }
              },
              [_vm._v(_vm._s(_vm.$t("boardbox.boardbox-screen.rent")))]
            )
          : _vm._e(),
        _vm._v(" "),
        _c(
          "router-link",
          {
            class: ["nav__item nav__item_categories"],
            attrs: {
              to: { name: "users.index" },
              activeClass: "nav__item_categories_active"
            }
          },
          [
            _vm._v(
              _vm._s(_vm.$t("unified-profile.professionals.professionals"))
            )
          ]
        )
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-c219a6ae", esExports)
  }
}

/***/ }),

/***/ 1567:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return IN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return WITH; });
var IN = 'в';
var FOR = 'для';
var WITH = 'с';

/***/ }),

/***/ 1568:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["d"] = getFilter;
/* harmony export (immutable) */ __webpack_exports__["a"] = getDefaultField;
/* harmony export (immutable) */ __webpack_exports__["b"] = getDefaultSource;
/* harmony export (immutable) */ __webpack_exports__["c"] = getFields;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__(6);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };




function getFilter(route) {
  var filter = route.params.filter;


  if (!filter) return;

  return filter.toLowerCase().split('/');
}

function getDefaultField(source, field) {
  var _ref;

  return source ? (_ref = {}, _ref[field] = [source.id], _ref) : null;
}

function getDefaultSource(value, key, sourses) {
  // eslint-disable-next-line eqeqeq
  return sourses[key].find(function (e) {
    return e.id == value || Object(__WEBPACK_IMPORTED_MODULE_1__utils__["l" /* has */])(e, 'name') && e.name.toLowerCase() == value;
  });
}

function getFields(route, sources, fields, filters, FILTERS_OPTIONS) {
  var filter = getFilter(route);

  if (!filter) return fields;

  var filterFields = {};

  filter.forEach(function (part) {
    for (var key in filters) {
      var filterKey = filters[key];

      if (!part.includes(filterKey + '-') || !Object(__WEBPACK_IMPORTED_MODULE_1__utils__["l" /* has */])(FILTERS_OPTIONS, filters[key])) continue;

      var _filter = FILTERS_OPTIONS[filterKey];

      var value = part.replace(filterKey + '-', '').toLowerCase();
      var source = typeof _filter.source === 'function' ? _filter.source(value) : getDefaultSource(value, _filter.source, sources);
      var filterField = typeof _filter.field === 'function' ? _filter.field(source) : getDefaultField(source, _filter.field);

      filterFields = _extends({}, filterField, filterFields);
    }
  });

  return __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.merge(fields, filterFields);
}

/***/ }),

/***/ 1621:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mint_ui__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mint_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_mint_ui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modules_SEO_mixins_Casting__ = __webpack_require__(1622);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_Board_Casting_Casting_vue__ = __webpack_require__(1520);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_Board_Casting_Filter_vue__ = __webpack_require__(1931);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_Board_NavigationCategories_vue__ = __webpack_require__(1524);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_vuex_map_fields__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__modules_Board_Casting_Enums_CastingState__ = __webpack_require__(435);
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














var _createHelpers = Object(__WEBPACK_IMPORTED_MODULE_8_vuex_map_fields__["a" /* createHelpers */])({
  getterType: 'board/casting/getField',
  mutationType: 'board/casting/updateField'
}),
    mapFields = _createHelpers.mapFields;



/* harmony default export */ __webpack_exports__["a"] = ({
  components: { 'mt-loadmore': __WEBPACK_IMPORTED_MODULE_2_mint_ui__["Loadmore"], CastingFilter: __WEBPACK_IMPORTED_MODULE_6__components_Board_Casting_Filter_vue__["a" /* default */], CastingCard: __WEBPACK_IMPORTED_MODULE_5__components_Board_Casting_Casting_vue__["a" /* default */], NavigationCategories: __WEBPACK_IMPORTED_MODULE_7__components_Board_NavigationCategories_vue__["a" /* default */] },
  mixins: [__WEBPACK_IMPORTED_MODULE_4__modules_SEO_mixins_Casting__["a" /* default */]],
  metaInfo: function metaInfo() {
    return {
      title: this.seoTitle,
      meta: [{ name: 'description', content: this.seoDescription }]
    };
  },
  data: function data() {
    return {
      height: 0,
      openFilter: false,
      searchFocused: false,
      actionSheet: {
        actions: [],
        value: false,
        casting: { id: null, slug: null }
      },
      loadmore: { topStatus: null }
    };
  },
  asyncData: function asyncData(_ref) {
    var _this = this;

    var store = _ref.store,
        route = _ref.route;
    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var query, loadingSources, initializedSources, defaultFields, fields, isEqualFilter, hasNew, loadingData, initializedData;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              query = route.query;
              loadingSources = store.getters['board/casting/getLoadingSources'];
              initializedSources = store.getters['board/casting/getInitializedSources'];

              if (!(loadingSources === false && initializedSources === false)) {
                _context.next = 6;
                break;
              }

              _context.next = 6;
              return store.dispatch('board/casting/getSources').catch(function (error) {
                var _error$response = error.response,
                    _error$response$statu = _error$response.status,
                    status = _error$response$statu === undefined ? 500 : _error$response$statu,
                    _error$response$url = _error$response.url,
                    url = _error$response$url === undefined ? null : _error$response$url;

                throw { code: status, message: 'Error sources castings', url: url };
              });

            case 6:
              defaultFields = store.getters['board/casting/getCatalogDefaultFieldsFilter'];
              fields = Object(__WEBPACK_IMPORTED_MODULE_4__modules_SEO_mixins_Casting__["b" /* getFieldsFromRoute */])(route, store.getters['board/casting/getSources'], Object(__WEBPACK_IMPORTED_MODULE_3__utils__["u" /* omitEmpty */])(Object.assign(__WEBPACK_IMPORTED_MODULE_0_lodash___default.a.clone(defaultFields), query), { omitZero: false }));
              isEqualFilter = __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.isEqual(fields, Object(__WEBPACK_IMPORTED_MODULE_3__utils__["u" /* omitEmpty */])(Object.assign(__WEBPACK_IMPORTED_MODULE_0_lodash___default.a.clone(defaultFields), store.getters['board/casting/getField']('castings.filter')), { omitZero: false }));

              // TODO: Convert type input value. ( route === string, v-model === number )
              // console.log(fields)
              // console.log(omitEmpty(Object.assign(_.clone(defaultFields), store.getters['board/casting/getField']('castings.filter')), { omitZero: false }))

              hasNew = store.getters['board/casting/getCastingsHasNew'];
              loadingData = store.getters['board/casting/getCastingsLoading'];
              initializedData = store.getters['board/casting/getInitializedData'];

              if (!(loadingData === false && (isEqualFilter === false || initializedData === false || hasNew === true))) {
                _context.next = 19;
                break;
              }

              _context.next = 15;
              return store.dispatch('board/casting/clearCastings');

            case 15:
              _context.next = 17;
              return store.commit('board/casting/updateField', { path: 'castings.filter', value: Object.assign(__WEBPACK_IMPORTED_MODULE_0_lodash___default.a.clone(defaultFields), fields) });

            case 17:
              _context.next = 19;
              return store.dispatch('board/casting/fetchCastings', { fields: fields, offset: 0 }).then(function (total) {
                store.dispatch('board/casting/setInitializedCastingsData', true);
                if (typeof window !== 'undefined' && total < 4) {
                  window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
                }
              }).catch(function (error) {
                var _error$response2 = error.response,
                    _error$response2$stat = _error$response2.status,
                    status = _error$response2$stat === undefined ? 500 : _error$response2$stat,
                    _error$response2$url = _error$response2.url,
                    url = _error$response2$url === undefined ? null : _error$response2$url;

                throw { code: status, message: 'Error fetch castings', url: url };
              });

            case 19:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this);
    }))();
  },

  computed: _extends({}, mapFields({
    fields: 'castings.filter',
    defaultFields: 'castings.defaultFilter'
  }), Object(__WEBPACK_IMPORTED_MODULE_1_vuex__["c" /* mapGetters */])({
    user: 'auth/getAuthUser',
    isAuthorized: 'auth/isAuthorized',
    total: 'board/casting/getCastingsTotal',
    error: 'board/casting/getCastingsError',
    offset: 'board/casting/getCastingsOffset',
    castings: 'board/casting/getCastingsData',
    loading: 'board/casting/getCastingsLoading',
    infiniteDisabled: 'board/casting/getCastingsInfiniteDisabled'
  }), {
    isEmpty: function isEmpty() {
      return this.loading === false && this.total === 0;
    },
    isAdmin: function isAdmin() {
      return this.user.hasOwnProperty('isAdmin') && this.user['isAdmin'] === true;
    },
    hasFilter: function hasFilter() {
      var fields = this._.omit(this.fields, ['name']);
      var defaultFields = this._.omit(this.defaultFields, ['name']);

      return this._.isEqual(fields, defaultFields) === false;
    }
  }),
  created: function created() {
    var query = this.$route.query;

    this._.merge(this.fields, query);
  },
  mounted: function mounted() {
    this.height = document.documentElement.clientHeight - this.$refs.wrapper.getBoundingClientRect().top + 'px';
  },
  beforeRouteUpdate: function beforeRouteUpdate(to, from, next) {
    var _this2 = this;

    var query = to.query,
        params = to.params;


    if (Object(__WEBPACK_IMPORTED_MODULE_3__utils__["l" /* has */])(params, 'filter') || Object.keys(query).length) return next();

    var clearParameters = !(Boolean(Object.keys(query).length) || Object(__WEBPACK_IMPORTED_MODULE_3__utils__["l" /* has */])(params, 'filter'));
    this._clearFilter(clearParameters).then(function () {
      console.log('Cleared filter castings...');
      _this2.seoGenerate();

      next();
    }).catch(function () {
      _this2.seoGenerate();

      next();
    });
  },

  methods: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_1_vuex__["b" /* mapActions */])({
    fetchCastings: 'board/casting/fetchCastings',
    clearCastings: 'board/casting/clearCastings',
    _setInitializedCastingsData: 'board/casting/setInitializedCastingsData'
  }), {
    _handleInputFieldSearchTalent: __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.debounce(function (e) {
      var _this3 = this;

      var el = e.target;
      var key = Object(__WEBPACK_IMPORTED_MODULE_3__utils__["j" /* getDataAttribute */])(el, 'key');

      this.$validator.validate(key).then(function (result) {
        if (result) {
          var fields = _this3.fields;

          _this3.clearCastings().then(function () {
            _this3.fetchCastings({ fields: fields, offset: 0 });
          }).catch(function () {});
        }
      });
    }, 900),
    _handleLoadTopCastings: function _handleLoadTopCastings() {
      var _this4 = this;

      var fields = this.fields;

      this._setInitializedCastingsData(false);
      this.fetchCastings({ fields: fields, offset: 0 }).then(function () {
        _this4.$refs.loadmore.onTopLoaded();
        _this4._setInitializedCastingsData(true);
      }).catch(function () {
        return console.log('Error loading');
      });
    },
    _handleTopStatusChangeCastings: function _handleTopStatusChangeCastings(status) {
      this.loadmore.topStatus = status;
    },
    _handleInfiniteScroll: function _handleInfiniteScroll() {
      var fields = this.fields,
          offset = this.offset;

      this.fetchCastings({ fields: fields, offset: offset });
    },
    _clearFilter: function _clearFilter() {
      var _this5 = this;

      var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

      return new Promise(function (resolve, reject) {
        if (parameters) _this5.parameters = false;

        try {
          _this5.fields = _this5._.clone(_this5.defaultFields);
          resolve && resolve();
        } catch (e) {
          reject && reject(e);
        }
      });
    },
    _handleApplyFilter: function _handleApplyFilter() {
      var _this6 = this;

      this.clearCastings().then(function () {
        _this6._toggleFilter();
        var fields = _this6.fields;
        // this.fetchCastings({ fields, offset: 0 })

        _this6._setInitializedCastingsData(false);

        var _getSeoRouterParams = _this6.getSeoRouterParams(Object(__WEBPACK_IMPORTED_MODULE_3__utils__["u" /* omitEmpty */])(fields, { omitZero: false })),
            query = _getSeoRouterParams.query,
            params = _getSeoRouterParams.params;

        _this6.$router.replace({ name: 'board.castings.index', query: query, params: params }, function () {
          _this6.seoGenerate();
          _this6._setInitializedCastingsData(true);
        });
      }).catch(function () {});
    },
    _handleHideFilter: function _handleHideFilter() {
      this._toggleFilter();
    },
    _toggleFilter: function _toggleFilter() {
      var _this7 = this;

      return new Promise(function (resolve, reject) {
        try {
          _this7.openFilter = !_this7.openFilter;
          resolve();
        } catch (e) {
          reject(e);
        }
      });
    },
    _handleClickCloseSearching: function _handleClickCloseSearching() {
      var _this8 = this;

      this.fields.name = null;

      this.$nextTick(function () {
        _this8.clearCastings().then(function () {
          var fields = _this8.fields;

          _this8.fetchCastings({ fields: fields, offset: 0 });
        }).catch(function () {});
      });
    },
    _handleChangeState: function _handleChangeState(_ref2) {
      var id = _ref2.id,
          key = _ref2.key,
          value = _ref2.value;

      this.$store.dispatch('board/casting/setFieldCastingsData', { id: id, key: key, value: value });
    },
    _handleActionSheetCasting: function _handleActionSheetCasting(castingId) {
      var isCurrentUser = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      var casting = this._.find(this.castings, function (c) {
        return c.id === castingId;
      });
      if (casting) {
        var id = casting.id,
            slug = casting.slug;

        Object.assign(this.actionSheet.casting, { id: id, slug: slug });

        this.actionSheet.actions.push({
          name: 'Открыть',
          method: this._handleClickShowCasting
        });

        if (isCurrentUser === true) {
          if (casting.state === __WEBPACK_IMPORTED_MODULE_9__modules_Board_Casting_Enums_CastingState__["e" /* PUBLISHED */] || casting.state === __WEBPACK_IMPORTED_MODULE_9__modules_Board_Casting_Enums_CastingState__["a" /* ARCHIVED */]) {
            this.actionSheet.actions.push({
              name: 'Отклики',
              method: this._handleClickOpenCastingResponses
            });
          }

          if (this.isAdmin) {
            this.actionSheet.actions.push({
              name: 'Редактировать',
              method: this._handleClickEditCasting
            });
          }

          if (casting.state === __WEBPACK_IMPORTED_MODULE_9__modules_Board_Casting_Enums_CastingState__["e" /* PUBLISHED */]) {
            this.actionSheet.actions.push({
              name: 'В архив',
              method: this._handleClickArchiveCasting
            });
          }
        }

        if (isCurrentUser === false) {
          this.actionSheet.actions.push({
            name: this.$t('boardbox.report.report'),
            method: this._handleClickAbuseCasting
          });

          if (this.isAdmin) {
            this.actionSheet.actions.push({
              name: 'Редактировать',
              method: this._handleClickEditCasting
            });
          }
        }

        if (this.isAdmin === true && casting.state === __WEBPACK_IMPORTED_MODULE_9__modules_Board_Casting_Enums_CastingState__["d" /* MODERATION */]) {
          this.actionSheet.actions.push({
            name: 'Одобрить',
            method: this._handleClickApproveCasting
          });
        }

        this.actionSheet.value = true;
      }
    },
    _handleClickEditCasting: function _handleClickEditCasting() {
      var id = this.actionSheet.casting.id;

      this.$router.push({ name: 'board.castings.edit', params: { id: id } });
    },
    _handleClickShowCasting: function _handleClickShowCasting() {
      var _actionSheet$casting = this.actionSheet.casting,
          slug = _actionSheet$casting.slug,
          id = _actionSheet$casting.id;

      this.$router.push({ name: 'board.castings.show', params: { slug: slug, id: id } });
    },
    _handleClickOpenCastingResponses: function _handleClickOpenCastingResponses() {
      var _actionSheet$casting2 = this.actionSheet.casting,
          id = _actionSheet$casting2.id,
          slug = _actionSheet$casting2.slug;

      this.$router.push({ name: 'board.castings.show', params: { id: id, slug: slug }, query: { responses: true } });
    },
    _handleClickUnpublishedCasting: function _handleClickUnpublishedCasting() {
      var _this9 = this;

      var id = this.actionSheet.casting.id;


      this.$confirm({
        cancelTxt: 'отмена',
        confirmTxt: 'снять',
        title: 'Подтвердите действие',
        message: 'Вы уверены, что хотите снять объявление с публикации?'
      }).then(function () {
        _this9._handleDraft(id);
      }).catch(function () {});
    },
    _handleClickArchiveCasting: function _handleClickArchiveCasting() {
      var _this10 = this;

      var id = this.actionSheet.casting.id;


      this.$confirm({
        cancelTxt: 'отмена',
        confirmTxt: 'в архив',
        title: 'Подтвердите действие',
        message: 'Вы уверены, что хотите удалить и перенести объявление в архив?'
      }).then(function () {
        _this10._handleArchive(id);
      }).catch(function () {});
    },
    _handleDraft: function _handleDraft(id) {
      var _this11 = this;

      return new Promise(function (resolve, reject) {
        __WEBPACK_IMPORTED_MODULE_2_mint_ui__["Indicator"].open();

        _this11.$api.post('api/v2/boards/castings/' + id + '/draft').then(function (response) {
          var data = response.data;

          _this11.$store.dispatch('board/casting/setFieldCastingsData', { id: id, key: 'state', value: __WEBPACK_IMPORTED_MODULE_9__modules_Board_Casting_Enums_CastingState__["c" /* DRAFT */] });

          __WEBPACK_IMPORTED_MODULE_2_mint_ui__["Indicator"].close();
          resolve();
        }, function (error) {
          var _error$response3 = error.response,
              data = _error$response3.data,
              status = _error$response3.status;


          __WEBPACK_IMPORTED_MODULE_2_mint_ui__["Indicator"].close();
          Object(__WEBPACK_IMPORTED_MODULE_2_mint_ui__["Toast"])({ message: 'Ошибка', iconClass: 'mintui mintui-field-error' });

          reject();

          throw new Error('Error draft casting');
        });
      });
    },
    _handleArchive: function _handleArchive(id) {
      var _this12 = this;

      return new Promise(function (resolve, reject) {
        __WEBPACK_IMPORTED_MODULE_2_mint_ui__["Indicator"].open();

        _this12.$api.post('api/v2/boards/castings/' + id + '/archive').then(function (response) {
          var data = response.data;

          _this12.$store.dispatch('board/casting/setFieldCastingsData', { id: id, key: 'state', value: __WEBPACK_IMPORTED_MODULE_9__modules_Board_Casting_Enums_CastingState__["a" /* ARCHIVED */] });

          __WEBPACK_IMPORTED_MODULE_2_mint_ui__["Indicator"].close();

          resolve();
        }, function (error) {
          var _error$response4 = error.response,
              data = _error$response4.data,
              status = _error$response4.status;


          __WEBPACK_IMPORTED_MODULE_2_mint_ui__["Indicator"].close();
          Object(__WEBPACK_IMPORTED_MODULE_2_mint_ui__["Toast"])({ message: 'Ошибка', iconClass: 'mintui mintui-field-error' });

          reject();

          throw new Error('Error draft casting');
        });
      });
    },
    _handleInputActionSheet: function _handleInputActionSheet(value) {
      if (value === false) {
        this.actionSheet = {
          actions: [],
          value: false,
          casting: { id: null, value: null }
        };
      }
    },
    _handleClickAbuseCasting: function _handleClickAbuseCasting() {
      var id = this.actionSheet.casting.id;

      this.$root.$emit('open-modal-abuse-create', { id: id, type: 'board_casting' });
    },
    _handleFocusFieldSearchTalent: function _handleFocusFieldSearchTalent() {
      this.searchFocused = true;
    },
    _handleBlurFieldSearchTalent: function _handleBlurFieldSearchTalent() {
      this.searchFocused = false;
    },
    _handleClickCreateBoard: function _handleClickCreateBoard() {
      this.$router.push({ name: 'board.create' });
    },
    _handleClickApproveCasting: function _handleClickApproveCasting() {
      var _this13 = this;

      __WEBPACK_IMPORTED_MODULE_2_mint_ui__["Indicator"].open();
      var id = this.actionSheet.casting.id;


      this.$api.post('/api/admin/v1/boards/castings/' + id + '/approve').then(function (response) {
        __WEBPACK_IMPORTED_MODULE_2_mint_ui__["Indicator"].close();
        var data = response.data.data;

        _this13.$store.dispatch('board/casting/setFieldCastingsData', { id: id, key: 'state', value: __WEBPACK_IMPORTED_MODULE_9__modules_Board_Casting_Enums_CastingState__["e" /* PUBLISHED */] });
      }, function (err) {
        __WEBPACK_IMPORTED_MODULE_2_mint_ui__["Indicator"].close();
        Object(__WEBPACK_IMPORTED_MODULE_2_mint_ui__["Toast"])({ message: 'Ошибка', iconClass: 'mintui mintui-field-error' });
      });
    }
  })
});

/***/ }),

/***/ 1622:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = getFieldsFromRoute;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vuex__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Enums_Casting__ = __webpack_require__(1930);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Enums_FilterOptionTypes__ = __webpack_require__(1567);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__helpers__ = __webpack_require__(1568);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _FILTERS_OPTIONS;








var TITLE = '\u041A\u0430\u0441\u0442\u0438\u043D\u0433\u0438:filter \u0432 ' + new Date().getFullYear();
var DEFAULT_TITLE = 'Кастинги: работа для актёров, моделей, ведущих, танцоров';
var DESCRIPTION = '\u0415\u0436\u0435\u0434\u043D\u0435\u0432\u043D\u043E \u0434\u0435\u0441\u044F\u0442\u043A\u0438 \u043D\u043E\u0432\u044B\u0445 \u043A\u0430\u0441\u0442\u0438\u043D\u0433\u043E\u0432:filter. \u0412\u0441\u0435 \u043A\u0430\u0441\u0442\u0438\u043D\u0433\u0438 \u043F\u0440\u043E\u0445\u043E\u0434\u044F\u0442 \u043F\u0440\u043E\u0432\u0435\u0440\u043A\u0443 \u043C\u043E\u0434\u0435\u0440\u0430\u0442\u043E\u0440\u043E\u043C';
var DEFAULT_DESCRIPTION = 'Ежедневно десятки новых кастингов для мужчин, девушек и детей. Все кастинги проходят проверку модератором';
var FILTERS_OPTIONS = (_FILTERS_OPTIONS = {}, _FILTERS_OPTIONS[__WEBPACK_IMPORTED_MODULE_3__Enums_Casting__["SEX"]] = {
  type: __WEBPACK_IMPORTED_MODULE_4__Enums_FilterOptionTypes__["a" /* FOR */],
  source: 'genders',
  field: 'genderIds',
  phrase: function phrase(_ref) {
    var value = _ref.value;

    return value === 'male' ? 'Мужчин' : 'Женщин';
  }
}, _FILTERS_OPTIONS[__WEBPACK_IMPORTED_MODULE_3__Enums_Casting__["ROLE"]] = {
  type: __WEBPACK_IMPORTED_MODULE_4__Enums_FilterOptionTypes__["a" /* FOR */],
  source: 'roles',
  field: 'roleIds',
  phrase: function phrase(_ref2, _this) {
    var source = _ref2.source;

    return source ? _this.$t('dictionary.casting-role.' + source.name + '.declension.single.rod', 'web_ru') : '';
  }
}, _FILTERS_OPTIONS[__WEBPACK_IMPORTED_MODULE_3__Enums_Casting__["CATEGORY"]] = {
  type: __WEBPACK_IMPORTED_MODULE_4__Enums_FilterOptionTypes__["a" /* FOR */],
  source: 'categories',
  field: 'categoryIds',
  phrase: function phrase(_ref3, _this) {
    var source = _ref3.source;

    return source ? _this.$t('dictionary.casting-category.' + source.name + '.declension.single.rod', 'web_ru') : '';
  }
}, _FILTERS_OPTIONS);

function getFieldsFromRoute(route, sources, fields) {
  return Object(__WEBPACK_IMPORTED_MODULE_5__helpers__["c" /* getFields */])(route, sources, fields, __WEBPACK_IMPORTED_MODULE_3__Enums_Casting__, FILTERS_OPTIONS);
}

/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    var _filters;

    return {
      seo: {
        filtersData: {},
        filterFields: {},
        filters: (_filters = {}, _filters[__WEBPACK_IMPORTED_MODULE_4__Enums_FilterOptionTypes__["b" /* IN */]] = [], _filters[__WEBPACK_IMPORTED_MODULE_4__Enums_FilterOptionTypes__["a" /* FOR */]] = [], _filters[__WEBPACK_IMPORTED_MODULE_4__Enums_FilterOptionTypes__["c" /* WITH */]] = [], _filters.empty = [], _filters)
      }
    };
  },
  created: function created() {
    if (this.seoFilter) {
      this.seoGenerate();
      this.updateQueryFilters();
    }
  },

  computed: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_2_vuex__["c" /* mapGetters */])({
    filterSources: 'board/casting/getSources'
  }), {
    seoFilter: function seoFilter() {
      return Object(__WEBPACK_IMPORTED_MODULE_5__helpers__["d" /* getFilter */])(this.$route);
    },
    seoTitle: function seoTitle() {
      if (!this.seoFilter) return DEFAULT_TITLE;

      var filter = this.getFilterString();

      return filter ? TITLE.replace(':filter', filter) : DEFAULT_TITLE;
    },
    seoDescription: function seoDescription() {
      if (!this.seoFilter) return DEFAULT_DESCRIPTION;

      var filter = this.getFilterString(true);

      return filter ? DESCRIPTION.replace(':filter', filter) : DEFAULT_DESCRIPTION;
    }
  }),
  methods: {
    getFilterString: function getFilterString(description) {
      var filtersFinal = this.getFiltersFinal(description);
      var gender = !!description || this.seo.filtersData[__WEBPACK_IMPORTED_MODULE_3__Enums_Casting__["SEX"]] ? '' : ' для мужчин, девушек и детей';

      var str = ' ';

      for (var type in filtersFinal) {
        str += type === __WEBPACK_IMPORTED_MODULE_4__Enums_FilterOptionTypes__["b" /* IN */] ? String(gender) : filtersFinal[type].length ? ' ' + (type !== 'empty' ? type + ' ' : '') + filtersFinal[type].join(',') : '';
      }

      return str;
    },
    getFiltersFinal: function getFiltersFinal(description) {
      var filtersFinal = {};

      for (var type in this.seo.filters) {
        filtersFinal[type] = this.seo.filters[type].filter(function (e) {
          return !!e;
        }).map(function (e) {
          return e[+!!description];
        });
      }

      return filtersFinal;
    },
    getDefaultPhrase: function getDefaultPhrase(_ref4) {
      var source = _ref4.source;

      return source ? source.text : '';
    },
    getDefaultField: function getDefaultField(source, field) {
      return Object(__WEBPACK_IMPORTED_MODULE_5__helpers__["a" /* getDefaultField */])(source, field);
    },
    getDefaultSource: function getDefaultSource(value, key) {
      return Object(__WEBPACK_IMPORTED_MODULE_5__helpers__["b" /* getDefaultSource */])(value, key, this.filterSources);
    },
    seoFilterInQuery: function seoFilterInQuery(_ref5, query) {
      var field = _ref5.field,
          source = _ref5.source;

      var param = false;

      if (!(Object(__WEBPACK_IMPORTED_MODULE_1__utils__["l" /* has */])(query, field) && query[field].length === 1)) return { param: param, query: query };

      var val = Number(query[field][0]);

      source = Number.isNaN(val) ? { name: query[field][0] } : this.filterSources[source].find(function (e) {
        return Number(e.id) === val;
      });
      param = source ? source.name : false;

      if (param) delete query[field];

      return { param: param, query: query };
    },
    seoGenerate: function seoGenerate() {
      var _filters2,
          _this2 = this;

      if (!this.seoFilter) return;

      this.seo = {
        filtersData: {},
        filterFields: {},
        filters: (_filters2 = {}, _filters2[__WEBPACK_IMPORTED_MODULE_4__Enums_FilterOptionTypes__["b" /* IN */]] = [], _filters2[__WEBPACK_IMPORTED_MODULE_4__Enums_FilterOptionTypes__["a" /* FOR */]] = [], _filters2[__WEBPACK_IMPORTED_MODULE_4__Enums_FilterOptionTypes__["c" /* WITH */]] = [], _filters2.empty = [], _filters2)
      };

      this.seoFilter.forEach(function (part) {
        for (var key in __WEBPACK_IMPORTED_MODULE_3__Enums_Casting__) {
          var filterKey = __WEBPACK_IMPORTED_MODULE_3__Enums_Casting__[key];

          if (!part.includes(filterKey + '-') || !Object(__WEBPACK_IMPORTED_MODULE_1__utils__["l" /* has */])(FILTERS_OPTIONS, __WEBPACK_IMPORTED_MODULE_3__Enums_Casting__[key])) continue;

          var filter = FILTERS_OPTIONS[filterKey];
          var type = Object(__WEBPACK_IMPORTED_MODULE_1__utils__["l" /* has */])(filter, 'type') ? filter.type : 'empty';
          var value = part.replace(filterKey + '-', '').toLowerCase();
          var source = typeof filter.source === 'function' ? filter.source(value) : _this2.getDefaultSource(value, filter.source);
          var filterField = typeof filter.field === 'function' ? filter.field(source) : _this2.getDefaultField(source, filter.field);
          var phrase = Object(__WEBPACK_IMPORTED_MODULE_1__utils__["l" /* has */])(filter, 'phrase') ? [filter.phrase({
            source: source,
            value: value
          }, _this2)] : [_this2.getDefaultPhrase({ source: source })];

          phrase.push(Object(__WEBPACK_IMPORTED_MODULE_1__utils__["l" /* has */])(filter, 'phraseDescription') ? filter.phraseDescription({ source: source, value: value }, _this2) : phrase[0]);

          _this2.seo.filters[type].push(phrase);
          _this2.seo.filtersData[filterKey] = true;
          _this2.seo.filterFields = _extends({}, filterField, _this2.seo.filterFields);
        }
      });
    },
    updateQueryFilters: function updateQueryFilters() {
      if (Object.keys(this.seo.filterFields).length) {
        this._.merge(this.fields, this.seo.filterFields);
      }
    },
    getSeoRouterParams: function getSeoRouterParams(q) {
      var filter = [];
      var params = {};
      var query = this._.cloneDeep(q);

      for (var key in __WEBPACK_IMPORTED_MODULE_3__Enums_Casting__) {
        if (!Object(__WEBPACK_IMPORTED_MODULE_1__utils__["l" /* has */])(FILTERS_OPTIONS, __WEBPACK_IMPORTED_MODULE_3__Enums_Casting__[key])) continue;

        var options = FILTERS_OPTIONS[__WEBPACK_IMPORTED_MODULE_3__Enums_Casting__[key]];

        var _ref6 = Object(__WEBPACK_IMPORTED_MODULE_1__utils__["l" /* has */])(options, 'inQuery') ? options.inQuery(this, query) : this.seoFilterInQuery(options, query),
            param = _ref6.param,
            newQuery = _ref6.query;

        query = newQuery;

        if (param) {
          filter.push(__WEBPACK_IMPORTED_MODULE_3__Enums_Casting__[key] + '-' + param);
          /**
           * TODO multi filters
           */
          break;
        }
      }

      if (!Object.keys(query).length && filter.length) {
        params.filter = filter.join('/');

        return { query: query, params: params };
      }

      return { query: q, params: params };
    }
  }
});

/***/ }),

/***/ 1623:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mint_ui__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mint_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_mint_ui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vuex_map_fields__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modules_Geo_mixins_AjaxSelectCity__ = __webpack_require__(1505);
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

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








var _createHelpers = Object(__WEBPACK_IMPORTED_MODULE_2_vuex_map_fields__["a" /* createHelpers */])({
  getterType: 'board/casting/getField',
  mutationType: 'board/casting/updateField'
}),
    mapFields = _createHelpers.mapFields;

/* harmony default export */ __webpack_exports__["a"] = ({
  mixins: [__WEBPACK_IMPORTED_MODULE_3__modules_Geo_mixins_AjaxSelectCity__["a" /* default */]],
  props: {
    value: {
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    return {
      parameters: false
    };
  },

  watch: {
    value: function value(val) {
      val ? window.nsWebViewInterface.emit('swipe2Back', true) : window.nsWebViewInterface.emit('swipe2Back', false);
      this.$root.$emit('open-modal-fullscreen', val);
    }
  },
  computed: _extends({}, mapFields({
    fields: 'castings.filter',
    defaultFields: 'castings.defaultFilter'
  }), Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["c" /* mapGetters */])({
    user: 'auth/getAuthUser',
    isAuthorized: 'auth/isAuthorized',
    sources: 'board/casting/getSources'
  }), {
    showReset: function showReset() {
      var fields = this._.omit(this.fields, ['name']);
      var defaultFields = this._.omit(this.defaultFields, ['name']);

      return this._.isEqual(fields, defaultFields) === false;
    }
  }),
  created: function created() {
    var _this = this;

    this.$nextTick(function () {
      if (_this.fields.countryId && _this.sources.cities.length === 0) {
        _this._handleChangeCountrySelect(_this.fields.countryId, false, true);
      }
    });
  },

  methods: {
    /**
     *
     * */
    _handleClickHideFilter: function _handleClickHideFilter() {
      this.$emit('hide');
    },

    /**
     *
     */
    _handleClickApplyFilter: function _handleClickApplyFilter() {
      var _this2 = this;

      this._handleValidateFields().then(function () {
        _this2.parameters = false;
        _this2.$emit('apply');
      }).catch(function () {});
    },

    /**
     *
     */
    _handleClickClearFilter: function _handleClickClearFilter() {
      this._clearFilter().then(function () {}).catch(function () {});
    },
    _clearFilter: function _clearFilter(parameters) {
      var _this3 = this;

      return new Promise(function (resolve, reject) {
        try {
          if (parameters) _this3.parameters = false;
          var fields = _this3._.omit(_this3.fields, ['name']);

          Object.keys(fields).forEach(function (k) {
            if (_this3.fields[k] === null && _typeof(_this3.fields[k]) === "object") {
              _this3.fields[k] = null;
            } else if (_typeof(_this3.fields[k]) === 'object') {
              _this3.fields[k] = [];
            } else _this3.fields[k] = '';
          });
          _this3.fields.isOnline = String('');
          resolve && resolve();
        } catch (e) {
          reject && reject(e);
        }
      });
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
    _handleInputPickParameters: function _handleInputPickParameters() {
      var _this5 = this;

      if (this.parameters) {
        this._clearFilter(false).then(function () {
          var _user = _this5.user,
              genderId = _user.gender.id,
              age = _user.age;

          Object.assign(_this5.fields, {
            ageTo: age ? age + 1 : '',
            ageFrom: age ? age - 1 : '',
            genderIds: genderId ? [genderId] : []
          });
        }).catch(function () {});
      } else {
        this._clearFilter(false).then(function () {
          Object.assign(_this5.fields, {
            ageTo: '',
            ageFrom: '',
            genderIds: []
          });
        }).catch(function () {});
      }
    }
  }
});

/***/ }),

/***/ 1928:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1929);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("fa1560e4", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js?sourceMap!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1a2dd216\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Index.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js?sourceMap!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1a2dd216\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Index.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1929:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(true);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"Index.vue","sourceRoot":""}]);

// exports


/***/ }),

/***/ 1930:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEX", function() { return SEX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROLE", function() { return ROLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ONLINE", function() { return ONLINE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CATEGORY", function() { return CATEGORY; });
var SEX = 'sex';
// export const CITY = 'city'
var ROLE = 'role';
var ONLINE = 'online';
var CATEGORY = 'cat';

/***/ }),

/***/ 1931:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Filter_vue__ = __webpack_require__(1623);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_18870a06_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Filter_vue__ = __webpack_require__(1934);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1932)
}
var normalizeComponent = __webpack_require__(2)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-18870a06"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Filter_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_18870a06_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Filter_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/Board/Casting/Filter.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-18870a06", Component.options)
  } else {
    hotAPI.reload("data-v-18870a06", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 1932:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1933);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("e1b9f122", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js?sourceMap!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-18870a06\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Filter.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js?sourceMap!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-18870a06\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Filter.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1933:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(true);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"Filter.vue","sourceRoot":""}]);

// exports


/***/ }),

/***/ 1934:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      directives: [
        {
          name: "show",
          rawName: "v-show",
          value: _vm.value,
          expression: "value"
        }
      ],
      staticClass: "modal modal_filters modal_active"
    },
    [
      _c("div", { staticClass: "modal__content modal__content_filters" }, [
        _c("div", { staticClass: "form form_filters" }, [
          _c(
            "div",
            { staticClass: "row row_justify_between" },
            [
              _c("div", { staticClass: "heading_h4" }, [
                _vm._v(_vm._s(_vm.$t("boardbox.filters.options")))
              ]),
              _vm._v(" "),
              _vm.showReset
                ? [
                    _c(
                      "button",
                      {
                        staticClass: "btn btn_reset",
                        on: {
                          click: function($event) {
                            $event.stopPropagation()
                            $event.preventDefault()
                            return _vm._handleClickClearFilter($event)
                          }
                        }
                      },
                      [_vm._v(_vm._s(_vm.$t("boardbox.filters.reset")))]
                    )
                  ]
                : _vm._e()
            ],
            2
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "form__section form__section_filters" },
            [
              _vm.isAuthorized === true
                ? [
                    _c(
                      "div",
                      { staticClass: "form__group form__group_declaration" },
                      [
                        _c("div", { staticClass: "row" }, [
                          _c("div", { staticClass: "switch w_100" }, [
                            _c(
                              "label",
                              {
                                staticClass: "switch__label",
                                attrs: { for: "parameters" }
                              },
                              [
                                _vm._v(
                                  _vm._s(
                                    _vm.$t(
                                      "casting-page.filters-choose-my-preferences.choose-my-preferences"
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
                                  value: _vm.parameters,
                                  expression: "parameters"
                                }
                              ],
                              staticClass: "switch__mark",
                              attrs: { id: "parameters", type: "checkbox" },
                              domProps: {
                                checked: Array.isArray(_vm.parameters)
                                  ? _vm._i(_vm.parameters, null) > -1
                                  : _vm.parameters
                              },
                              on: {
                                change: [
                                  function($event) {
                                    var $$a = _vm.parameters,
                                      $$el = $event.target,
                                      $$c = $$el.checked ? true : false
                                    if (Array.isArray($$a)) {
                                      var $$v = null,
                                        $$i = _vm._i($$a, $$v)
                                      if ($$el.checked) {
                                        $$i < 0 &&
                                          (_vm.parameters = $$a.concat([$$v]))
                                      } else {
                                        $$i > -1 &&
                                          (_vm.parameters = $$a
                                            .slice(0, $$i)
                                            .concat($$a.slice($$i + 1)))
                                      }
                                    } else {
                                      _vm.parameters = $$c
                                    }
                                  },
                                  _vm._handleInputPickParameters
                                ]
                              }
                            }),
                            _vm._v(" "),
                            _c("label", {
                              staticClass: "switch__btn",
                              attrs: { for: "parameters" }
                            })
                          ])
                        ])
                      ]
                    )
                  ]
                : _vm._e(),
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
                        "\n            " +
                          _vm._s(_vm.$t("boardbox.filters.category")) +
                          "\n          "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c("lm-select", {
                    class: [
                      "lm-m-filter-line",
                      { filled: _vm.fields.categoryIds.length }
                    ],
                    attrs: {
                      "input-required": false,
                      "input-id": "form__select_declaration_category",
                      "input-name": "categoryIds",
                      "data-vv-name": "categoryIds",
                      "data-vv-as": _vm.$t("boardbox.filters.category"),
                      placeholder: _vm.$t("boardbox.filters.all-categories"),
                      label: "",
                      multiple: true,
                      options: _vm.sources["categories"]
                    },
                    model: {
                      value: _vm.fields.categoryIds,
                      callback: function($$v) {
                        _vm.$set(_vm.fields, "categoryIds", $$v)
                      },
                      expression: "fields.categoryIds"
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
                      staticClass:
                        "label select__label select__label_declaration",
                      attrs: { for: "form__select_declaration_role" }
                    },
                    [
                      _vm._v(
                        "\n            " +
                          _vm._s(_vm.$t("boardbox.filters.role")) +
                          "\n          "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c("lm-select", {
                    class: [
                      "lm-m-filter-line",
                      { filled: _vm.fields.professionNames.length }
                    ],
                    attrs: {
                      "input-required": false,
                      "input-id": "form__select_declaration_role",
                      "input-name": "professionNames",
                      "data-vv-name": "professionNames",
                      "data-vv-as": _vm.$t("boardbox.filters.role"),
                      placeholder: _vm.$t("boardbox.filters.all-roles"),
                      label: "",
                      multiple: true,
                      options: _vm.sources["professions"]
                    },
                    model: {
                      value: _vm.fields.professionNames,
                      callback: function($$v) {
                        _vm.$set(_vm.fields, "professionNames", $$v)
                      },
                      expression: "fields.professionNames"
                    }
                  })
                ],
                1
              )
            ],
            2
          ),
          _vm._v(" "),
          _c("div", { staticClass: "form__section form__section_filters" }, [
            _c("div", { staticClass: "form__group form__group_declaration" }, [
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
                            value: _vm.fields["genderIds"],
                            expression: "fields['genderIds']"
                          }
                        ],
                        staticClass:
                          "form__checkbox form__checkbox_declaration form__checkbox_declaration_gender",
                        attrs: {
                          id: "form__checkbox_declaration_gender_" + gender.id,
                          type: "checkbox",
                          name: "gender",
                          "data-vv-as": _vm.$t("boardbox.filters.gender")
                        },
                        domProps: {
                          value: gender.id,
                          checked: Array.isArray(_vm.fields["genderIds"])
                            ? _vm._i(_vm.fields["genderIds"], gender.id) > -1
                            : _vm.fields["genderIds"]
                        },
                        on: {
                          change: function($event) {
                            var $$a = _vm.fields["genderIds"],
                              $$el = $event.target,
                              $$c = $$el.checked ? true : false
                            if (Array.isArray($$a)) {
                              var $$v = gender.id,
                                $$i = _vm._i($$a, $$v)
                              if ($$el.checked) {
                                $$i < 0 &&
                                  _vm.$set(
                                    _vm.fields,
                                    "genderIds",
                                    $$a.concat([$$v])
                                  )
                              } else {
                                $$i > -1 &&
                                  _vm.$set(
                                    _vm.fields,
                                    "genderIds",
                                    $$a.slice(0, $$i).concat($$a.slice($$i + 1))
                                  )
                              }
                            } else {
                              _vm.$set(_vm.fields, "genderIds", $$c)
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
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "row row_justify_between" }, [
              _c("div", { staticClass: "column mr_4" }, [
                _c("div", { staticClass: "input" }, [
                  _c(
                    "label",
                    { staticClass: "input__label", attrs: { for: "ageFrom" } },
                    [_vm._v(_vm._s(_vm.$t("boardbox.filters.age-from")))]
                  ),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      { name: "mask-numeric", rawName: "v-mask-numeric" },
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.fields.ageFrom,
                        expression: "fields.ageFrom"
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
                      {
                        error: _vm.verrors.has("ageFrom"),
                        filled: _vm.fields.ageTo && !_vm.verrors.has("ageFrom")
                      },
                      "input__field",
                      "input__field_filters"
                    ],
                    attrs: {
                      type: "number",
                      inputmode: "numeric",
                      pattern: "[0-9]*",
                      id: "ageFrom",
                      name: "ageFrom",
                      "data-vv-name": "ageFrom",
                      "data-vv-as": _vm.$t("boardbox.filters.age-from"),
                      min: "1",
                      max: "150"
                    },
                    domProps: { value: _vm.fields.ageFrom },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.fields, "ageFrom", $event.target.value)
                      }
                    }
                  })
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "column" }, [
                _c("div", { staticClass: "input" }, [
                  _c(
                    "label",
                    { staticClass: "input__label", attrs: { for: "ageTo" } },
                    [_vm._v(_vm._s(_vm.$t("boardbox.filters.age-to")))]
                  ),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      { name: "mask-numeric", rawName: "v-mask-numeric" },
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.fields.ageTo,
                        expression: "fields.ageTo"
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
                      {
                        error: _vm.verrors.has("ageTo"),
                        filled: _vm.fields.ageTo && !_vm.verrors.has("ageTo")
                      },
                      "input__field",
                      "input__field_filters"
                    ],
                    attrs: {
                      type: "number",
                      inputmode: "numeric",
                      pattern: "[0-9]*",
                      id: "ageTo",
                      name: "ageTo",
                      "data-vv-name": "ageTo",
                      "data-vv-as": _vm.$t("boardbox.filters.age-to"),
                      min: "1",
                      max: "150"
                    },
                    domProps: { value: _vm.fields.ageTo },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.fields, "ageTo", $event.target.value)
                      }
                    }
                  })
                ])
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "form__section form__section_filters" }, [
            _c(
              "div",
              { staticClass: "form__group form__group_declaration" },
              [
                _c(
                  "label",
                  {
                    staticClass: "label input__label",
                    attrs: { for: "form__select_declaration_country" }
                  },
                  [
                    _vm._v(
                      "\n            " +
                        _vm._s(_vm.$t("boardbox.filters.country")) +
                        "\n          "
                    )
                  ]
                ),
                _vm._v(" "),
                _c("lm-select", {
                  class: ["lm-m-filter-line", { filled: _vm.fields.countryId }],
                  attrs: {
                    searchable: true,
                    filterable: true,
                    title: "Выбор страны",
                    "input-required": false,
                    "input-id": "form__select_declaration_country",
                    "input-name": "countryId",
                    "data-vv-name": "countryId",
                    "data-vv-as": _vm.$t("boardbox.filters.country"),
                    placeholder: _vm.$t("boardbox.filters.all-countries"),
                    label: "",
                    multiple: false,
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
                    attrs: { for: "form__select_declaration_city" }
                  },
                  [
                    _vm._v(
                      "\n            " +
                        _vm._s(_vm.$t("boardbox.filters.city")) +
                        "\n          "
                    )
                  ]
                ),
                _vm._v(" "),
                _c("lm-select", {
                  class: ["lm-m-filter-line", { filled: _vm.fields.cityId }],
                  attrs: {
                    searchable: true,
                    filterable: false,
                    loading: _vm.loadingCities,
                    title: "Выбор города",
                    "input-required": false,
                    "input-id": "form__select_declaration_city",
                    "input-name": "cityId",
                    "data-vv-name": "cityId",
                    "data-vv-as": _vm.$t("boardbox.filters.city"),
                    placeholder: _vm.$t("boardbox.filters.all-cities"),
                    label: "",
                    multiple: false,
                    disabled: !_vm.fields.countryId,
                    options: _vm.sources["cities"]
                  },
                  on: { search: _vm._handleSearchCities },
                  model: {
                    value: _vm.fields.cityId,
                    callback: function($$v) {
                      _vm.$set(_vm.fields, "cityId", $$v)
                    },
                    expression: "fields.cityId"
                  }
                })
              ],
              1
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "form__section form__section_filters" }, [
            _c("div", { staticClass: "form__group form__group_declaration" }, [
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "switch w_100" }, [
                  _c(
                    "label",
                    {
                      staticClass: "switch__label",
                      attrs: { for: "isOnline" }
                    },
                    [_vm._v("Кастинг онлайн")]
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
                      id: "isOnline",
                      type: "checkbox",
                      "true-value": "1",
                      "false-value": ""
                    },
                    domProps: {
                      checked: Array.isArray(_vm.fields.isOnline)
                        ? _vm._i(_vm.fields.isOnline, null) > -1
                        : _vm._q(_vm.fields.isOnline, "1")
                    },
                    on: {
                      change: function($event) {
                        var $$a = _vm.fields.isOnline,
                          $$el = $event.target,
                          $$c = $$el.checked ? "1" : ""
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
                                $$a.slice(0, $$i).concat($$a.slice($$i + 1))
                              )
                          }
                        } else {
                          _vm.$set(_vm.fields, "isOnline", $$c)
                        }
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c("label", {
                    staticClass: "switch__btn",
                    attrs: { for: "isOnline" }
                  })
                ])
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "form__controls form__controls_filters" }, [
            _c("div", { staticClass: "row row_justify_between" }, [
              _c(
                "button",
                {
                  staticClass: "btn btn_secondary",
                  on: {
                    click: function($event) {
                      $event.stopPropagation()
                      $event.preventDefault()
                      return _vm._handleClickHideFilter($event)
                    }
                  }
                },
                [_vm._v(_vm._s(_vm.$t("boardbox.filters.back")))]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn_primary",
                  on: {
                    click: function($event) {
                      $event.stopPropagation()
                      $event.preventDefault()
                      return _vm._handleClickApplyFilter($event)
                    }
                  }
                },
                [_vm._v(_vm._s(_vm.$t("boardbox.filters.search")))]
              )
            ])
          ])
        ])
      ])
    ]
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-18870a06", esExports)
  }
}

/***/ }),

/***/ 1935:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "page page_feed" },
    [
      _c(
        "mt-loadmore",
        {
          ref: "loadmore",
          attrs: { "top-method": _vm._handleLoadTopCastings },
          on: { "top-status-change": _vm._handleTopStatusChangeCastings }
        },
        [
          _c("div", { staticClass: "page__header page__header_feed" }, [
            _c("div", { staticClass: "row row_justify_between" }, [
              _c("div", { staticClass: "heading heading_h4" }, [
                _vm._v(_vm._s(_vm.$t("boardbox.boardbox-screen.ads")))
              ]),
              _vm._v(" "),
              _c(
                "a",
                {
                  staticClass: "btn btn_round btn_primary btn_plus",
                  attrs: { href: "javascript:void(0)" },
                  on: {
                    click: function($event) {
                      $event.stopPropagation()
                      $event.preventDefault()
                      return _vm._handleClickCreateBoard($event)
                    }
                  }
                },
                [
                  _c("span", [
                    _c(
                      "svg",
                      { staticClass: "icon icon_size_16 icon_fill_white" },
                      [
                        _c("use", {
                          attrs: {
                            "xlink:href":
                              "/dist/img/icons/svg/sprite.svg#icon_plus"
                          }
                        })
                      ]
                    )
                  ])
                ]
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "input input_search input_search_feed" }, [
              _c(
                "svg",
                {
                  class: [
                    "icon",
                    "icon_size_16",
                    "icon_search",
                    _vm.searchFocused ? "icon_fill_blue" : "icon_fill_lm-gray-3"
                  ]
                },
                [
                  _c("use", {
                    attrs: {
                      "xlink:href": "/dist/img/icons/svg/sprite.svg#icon_search"
                    }
                  }),
                  _vm._v(" "),
                  _c("use", {
                    attrs: {
                      "xlink:href": "/dist/img/icons/svg/sprite.svg#icon_search"
                    }
                  })
                ]
              ),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "validate",
                    rawName: "v-validate",
                    value: "max:25",
                    expression: "'max:25'"
                  },
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.fields.name,
                    expression: "fields.name"
                  }
                ],
                ref: "name",
                class: [
                  "input__field",
                  "input__field_search",
                  { error: _vm.verrors.has("name") }
                ],
                attrs: {
                  type: "text",
                  name: "name",
                  autocomplete: "false",
                  "data-lm-key": "name",
                  placeholder: _vm.$t("boardbox.boardbox-screen.search")
                },
                domProps: { value: _vm.fields.name },
                on: {
                  focus: _vm._handleFocusFieldSearchTalent,
                  blur: _vm._handleBlurFieldSearchTalent,
                  input: [
                    function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.fields, "name", $event.target.value)
                    },
                    _vm._handleInputFieldSearchTalent
                  ]
                }
              }),
              _vm._v(" "),
              _vm.fields.name
                ? _c("button", {
                    staticClass: "btn btn_close",
                    on: { click: _vm._handleClickCloseSearching }
                  })
                : _vm._e()
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "row" }, [_c("navigation-categories")], 1)
          ]),
          _vm._v(" "),
          _c(
            "div",
            {
              ref: "wrapper",
              class: [
                "page__content",
                "page__content_feed",
                { fsfads: _vm.isEmpty }
              ]
            },
            [
              _c(
                "div",
                {
                  directives: [
                    {
                      name: "infinite-scroll",
                      rawName: "v-infinite-scroll",
                      value: _vm._handleInfiniteScroll,
                      expression: "_handleInfiniteScroll"
                    }
                  ],
                  style: { minHeight: _vm.height, paddingBottom: "90px" },
                  attrs: {
                    "infinite-scroll-disabled": "infiniteDisabled",
                    "infinite-scroll-distance": "1900"
                  }
                },
                [
                  _vm._l(_vm.castings, function(casting) {
                    return _c("casting-card", {
                      key: casting.id,
                      attrs: { casting: casting },
                      on: {
                        actionSheet: _vm._handleActionSheetCasting,
                        changeState: _vm._handleChangeState
                      }
                    })
                  }),
                  _vm._v(" "),
                  _vm.loading && _vm.loadmore.topStatus !== "loading"
                    ? _c("lm-m-loader")
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.isEmpty === true
                    ? _c(
                        "div",
                        { staticClass: "page__plug page__plug_feed_empty" },
                        [_vm._v("По вашему запросу ничего не найдено")]
                      )
                    : _vm._e()
                ],
                2
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  class: [
                    "btn",
                    "btn_icon",
                    "btn_primary",
                    "btn_filters",
                    { active: _vm.hasFilter }
                  ],
                  on: { click: _vm._toggleFilter }
                },
                [
                  _c(
                    "svg",
                    {
                      staticClass:
                        "icon icon_size_16 btn__icon_left icon_fill_white"
                    },
                    [
                      _c("use", {
                        attrs: {
                          "xlink:href":
                            "/dist/img/icons/svg/sprite.svg#icon_filter"
                        }
                      })
                    ]
                  ),
                  _vm._v(
                    "\n        " +
                      _vm._s(_vm.$t("boardbox.boardbox-screen.filters")) +
                      "\n      "
                  )
                ]
              )
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "mint-loadmore-top",
              attrs: { slot: "top" },
              slot: "top"
            },
            [
              _vm.loadmore.topStatus === "loading"
                ? [_c("lm-m-loader")]
                : _vm._e(),
              _vm._v(" "),
              _vm.loadmore.topStatus !== "loading"
                ? _c(
                    "span",
                    {
                      class: [
                        "arrow",
                        { rotate: _vm.loadmore.topStatus === "drop" }
                      ]
                    },
                    [_vm._v("↓")]
                  )
                : _vm._e()
            ],
            2
          )
        ]
      ),
      _vm._v(" "),
      _c("casting-filter", {
        on: { hide: _vm._handleHideFilter, apply: _vm._handleApplyFilter },
        model: {
          value: _vm.openFilter,
          callback: function($$v) {
            _vm.openFilter = $$v
          },
          expression: "openFilter"
        }
      }),
      _vm._v(" "),
      _c("actionsheet", {
        attrs: {
          actions: _vm.actionSheet.actions,
          "cancel-text": "",
          lockScroll: true
        },
        on: { input: _vm._handleInputActionSheet },
        model: {
          value: _vm.actionSheet.value,
          callback: function($$v) {
            _vm.$set(_vm.actionSheet, "value", $$v)
          },
          expression: "actionSheet.value"
        }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-1a2dd216", esExports)
  }
}

/***/ })

});
//# sourceMappingURL=70.build.d1cbf7f1ec431871f848.js.map