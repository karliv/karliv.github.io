webpackJsonp([72],{

/***/ 1280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_User_vue__ = __webpack_require__(1631);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2c416bb7_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_User_vue__ = __webpack_require__(1968);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1962)
}
var normalizeComponent = __webpack_require__(2)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-2c416bb7"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_User_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2c416bb7_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_User_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/views/Board/Castings/User.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2c416bb7", Component.options)
  } else {
    hotAPI.reload("data-v-2c416bb7", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


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

/***/ 1510:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(27);
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




/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'NavigationCategories',
  data: function data() {
    return {
      isNative: __WEBPACK_IMPORTED_MODULE_0__utils__["o" /* isNative */]
    };
  },

  computed: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_1_vuex__["c" /* mapGetters */])({
    user: 'auth/getAuthUser',
    isAuthorized: 'auth/isAuthorized',
    isRegistered: 'auth/isRegistered',
    castings: 'board/getCastingsCount',
    locations: 'board/getLocationsCount'
  }), {
    username: function username() {
      var username = this.$route.params.username;

      return username || (this.isAuthorized && Object(__WEBPACK_IMPORTED_MODULE_0__utils__["l" /* has */])(this.user, 'username') ? this.user.username : null);
    },
    routeCastings: function routeCastings() {
      var username = this.username;
      return username ? { name: 'board.castings.user', params: { username: username } } : { name: 'board.castings.index' };
    },
    routeLocations: function routeLocations() {
      var username = this.username;
      return username ? { name: 'board.locations.user', params: { username: username } } : { name: 'board.locations.index' };
    },
    routeSales: function routeSales() {
      var username = this.username;
      return username ? { name: 'board.sales.user', params: { username: username } } : { name: 'board.sales.index' };
    },
    routeRents: function routeRents() {
      var username = this.username;
      return username ? { name: 'board.rents.user', params: { username: username } } : { name: 'board.rents.index' };
    }
  })
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

/***/ 1528:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_NavigationCategoriesUser_vue__ = __webpack_require__(1510);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7ce62e94_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_NavigationCategoriesUser_vue__ = __webpack_require__(1531);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1529)
}
var normalizeComponent = __webpack_require__(2)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-7ce62e94"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_NavigationCategoriesUser_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7ce62e94_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_NavigationCategoriesUser_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/Board/NavigationCategoriesUser.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7ce62e94", Component.options)
  } else {
    hotAPI.reload("data-v-7ce62e94", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 1529:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1530);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("3aefc92c", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js?sourceMap!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-7ce62e94\",\"scoped\":true,\"hasInlineConfig\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./NavigationCategoriesUser.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js?sourceMap!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-7ce62e94\",\"scoped\":true,\"hasInlineConfig\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./NavigationCategoriesUser.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1530:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(true);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"NavigationCategoriesUser.vue","sourceRoot":""}]);

// exports


/***/ }),

/***/ 1531:
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
              to: _vm.routeCastings,
              activeClass: "nav__item_categories_active"
            }
          },
          [
            _vm._v(
              _vm._s(_vm.$t("boardbox.boardbox-screen.castings")) +
                " " +
                _vm._s(_vm.castings || "")
            )
          ]
        ),
        _vm._v(" "),
        _c(
          "router-link",
          {
            class: ["nav__item nav__item_categories"],
            attrs: {
              to: _vm.routeLocations,
              activeClass: "nav__item_categories_active"
            }
          },
          [
            _vm._v(
              _vm._s(_vm.$t("boardbox.boardbox-screen.locations")) +
                " " +
                _vm._s(_vm.locations || "")
            )
          ]
        ),
        _vm._v(" "),
        0
          ? _c(
              "router-link",
              {
                class: ["nav__item nav__item_categories"],
                attrs: {
                  to: _vm.routeSales,
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
                  to: _vm.routeRents,
                  activeClass: "nav__item_categories_active"
                }
              },
              [_vm._v(_vm._s(_vm.$t("boardbox.boardbox-screen.rent")))]
            )
          : _vm._e()
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
    require("vue-hot-reload-api")      .rerender("data-v-7ce62e94", esExports)
  }
}

/***/ }),

/***/ 1631:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vuex__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_mint_ui__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_mint_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_mint_ui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Board_Casting_Casting_vue__ = __webpack_require__(1520);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_Board_Casting_FilterUser_vue__ = __webpack_require__(1964);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_Board_NavigationCategoriesUser_vue__ = __webpack_require__(1528);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_vuex_map_fields__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__modules_Board_Casting_Enums_CastingState__ = __webpack_require__(435);
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













var _createHelpers = Object(__WEBPACK_IMPORTED_MODULE_7_vuex_map_fields__["a" /* createHelpers */])({
  getterType: 'board/casting/getField',
  mutationType: 'board/casting/updateField'
}),
    mapFields = _createHelpers.mapFields;



/* harmony default export */ __webpack_exports__["a"] = ({
  components: { 'mt-loadmore': __WEBPACK_IMPORTED_MODULE_3_mint_ui__["Loadmore"], CastingFilter: __WEBPACK_IMPORTED_MODULE_5__components_Board_Casting_FilterUser_vue__["a" /* default */], CastingCard: __WEBPACK_IMPORTED_MODULE_4__components_Board_Casting_Casting_vue__["a" /* default */], NavigationCategoriesUser: __WEBPACK_IMPORTED_MODULE_6__components_Board_NavigationCategoriesUser_vue__["a" /* default */] },
  metaInfo: function metaInfo() {
    return {
      /* TODO: Придумать заголовки (Мои кастинги) ? (Его кастигнги) */
      title: '' + (this.isCurrentUser ? 'Мои объявления: кастинги' : 'Объявления: кастинги')
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
      var username, fields;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              username = route.params.username;
              fields = store.state.board.casting.castings.userFilter;
              _context.next = 4;
              return store.dispatch('board/getCountersBoard', { username: username }).catch(function (error) {
                var _error$response = error.response,
                    _error$response$statu = _error$response.status,
                    status = _error$response$statu === undefined ? 500 : _error$response$statu,
                    _error$response$url = _error$response.url,
                    url = _error$response$url === undefined ? null : _error$response$url;

                throw { code: status, message: 'Error get counters board user', url: url };
              });

            case 4:
              _context.next = 6;
              return store.dispatch('user/getUserByUsername', { username: String(route.params.username) }).catch(function (error) {
                var _error$response2 = error.response,
                    _error$response2$stat = _error$response2.status,
                    status = _error$response2$stat === undefined ? 500 : _error$response2$stat,
                    _error$response2$url = _error$response2.url,
                    url = _error$response2$url === undefined ? null : _error$response2$url;

                throw { code: status, message: 'Error get user', url: url };
              });

            case 6:
              _context.next = 8;
              return store.dispatch('board/casting/fetchUserCastings', {
                fields: fields,
                username: username,
                offset: 0
              }).then(function () {
                store.dispatch('board/casting/setHasNewCastingsData', true);
              }).catch(function (error) {
                var _error$response3 = error.response,
                    _error$response3$stat = _error$response3.status,
                    status = _error$response3$stat === undefined ? 500 : _error$response3$stat,
                    _error$response3$url = _error$response3.url,
                    url = _error$response3$url === undefined ? null : _error$response3$url;

                throw { code: status, message: 'Error fetch user castings', url: url };
              });

            case 8:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this);
    }))();
  },

  computed: _extends({}, mapFields({
    fields: 'castings.userFilter'
  }), Object(__WEBPACK_IMPORTED_MODULE_2_vuex__["c" /* mapGetters */])({
    role: 'auth/getRole',
    authUser: 'auth/getAuthUser',
    user: 'user/getShowUserData',
    isAuthorized: 'auth/isAuthorized',
    total: 'board/casting/getCastingsTotal',
    error: 'board/casting/getCastingsError',
    offset: 'board/casting/getCastingsOffset',
    castings: 'board/casting/getCastingsData',
    loading: 'board/casting/getCastingsLoading',
    infiniteDisabled: 'board/casting/getCastingsInfiniteDisabled'
  }), {
    username: function username() {
      var username = this.$route.params.username;

      return username;
    },
    isCurrentUser: function isCurrentUser() {
      var username = this.$route.params.username;

      return this.authUser && Object(__WEBPACK_IMPORTED_MODULE_1__utils__["l" /* has */])(this.authUser, 'username') && this.authUser.username === String(username);
    },
    isEmpty: function isEmpty() {
      return this.loading === false && this.total === 0;
    },
    isAdmin: function isAdmin() {
      return this.authUser && this.authUser.hasOwnProperty('isAdmin') && this.authUser['isAdmin'] === true;
    }
  }),
  mounted: function mounted() {
    this.height = document.documentElement.clientHeight - this.$refs.wrapper.getBoundingClientRect().top + 'px';
  },
  beforeDestroy: function beforeDestroy() {
    this.$store.dispatch('board/casting/setHasNewCastingsData', true);
  },

  methods: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_2_vuex__["b" /* mapActions */])({
    clearCastings: 'board/casting/clearCastings',
    fetchCastings: 'board/casting/fetchUserCastings'
  }), {
    _handleLoadTopCastings: function _handleLoadTopCastings() {
      var _this2 = this;

      var username = this.username,
          fields = this.fields;

      this.fetchCastings({ username: username, fields: fields, offset: 0 }).then(function () {
        _this2.$refs.loadmore.onTopLoaded();
      }).catch(function () {
        return console.log('Error loading');
      });
    },
    _handleTopStatusChangeCastings: function _handleTopStatusChangeCastings(status) {
      this.loadmore.topStatus = status;
    },
    _handleInfiniteScroll: function _handleInfiniteScroll() {
      var offset = this.offset,
          username = this.username;

      this.fetchCastings({ username: username, offset: offset });
    },

    _handleInputFieldSearchTalent: __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.debounce(function (e) {
      var _this3 = this;

      var el = e.target;
      var key = Object(__WEBPACK_IMPORTED_MODULE_1__utils__["j" /* getDataAttribute */])(el, 'key');

      this.$validator.validate(key).then(function (result) {
        if (result) {
          _this3.clearCastings().then(function () {
            var username = _this3.username,
                fields = _this3.fields;

            _this3.fetchCastings({ username: username, fields: fields, offset: 0 });
          }).catch(function () {});
        }
      });
    }, 900),
    _handleFocusFieldSearchTalent: function _handleFocusFieldSearchTalent() {
      this.searchFocused = true;
    },
    _handleBlurFieldSearchTalent: function _handleBlurFieldSearchTalent() {
      this.searchFocused = false;
    },
    _handleClickCloseSearching: function _handleClickCloseSearching() {
      var _this4 = this;

      this.fields.name = null;

      this.$nextTick(function () {
        _this4.clearCastings().then(function () {
          var username = _this4.username,
              fields = _this4.fields;

          _this4.fetchCastings({ username: username, fields: fields, offset: 0 });
        }).catch(function () {});
      });
    },
    _handleApplyFilter: function _handleApplyFilter() {
      var _this5 = this;

      this.clearCastings().then(function () {
        _this5._toggleFilter();
        var username = _this5.username,
            fields = _this5.fields;

        _this5.fetchCastings({ username: username, fields: fields, offset: 0 });
      }).catch(function () {});
    },
    _handleHideFilter: function _handleHideFilter() {
      this._toggleFilter();
    },
    _toggleFilter: function _toggleFilter() {
      var _this6 = this;

      return new Promise(function (resolve, reject) {
        try {
          _this6.openFilter = !_this6.openFilter;
          resolve();
        } catch (e) {
          reject(e);
        }
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
          if (casting.state === __WEBPACK_IMPORTED_MODULE_8__modules_Board_Casting_Enums_CastingState__["e" /* PUBLISHED */] || casting.state === __WEBPACK_IMPORTED_MODULE_8__modules_Board_Casting_Enums_CastingState__["a" /* ARCHIVED */]) {
            this.actionSheet.actions.push({
              name: 'Отклики',
              method: this._handleClickOpenCastingResponses
            });
          }

          if (casting.state !== __WEBPACK_IMPORTED_MODULE_8__modules_Board_Casting_Enums_CastingState__["e" /* PUBLISHED */] && casting.state !== __WEBPACK_IMPORTED_MODULE_8__modules_Board_Casting_Enums_CastingState__["a" /* ARCHIVED */] || this.isAdmin) {
            this.actionSheet.actions.push({
              name: 'Редактировать',
              method: this._handleClickEditCasting
            });
          }

          if (casting.state === __WEBPACK_IMPORTED_MODULE_8__modules_Board_Casting_Enums_CastingState__["e" /* PUBLISHED */]) {
            this.actionSheet.actions.push({
              name: 'В архив',
              method: this._handleClickArchiveCasting
            });
          }

          if (casting.state === __WEBPACK_IMPORTED_MODULE_8__modules_Board_Casting_Enums_CastingState__["a" /* ARCHIVED */]) {
            this.actionSheet.actions.push({
              name: 'Опубликовать',
              method: this._handleClickPublishedCasting
            });
          }
        }

        if (isCurrentUser === false) {
          this.actionSheet.actions.push({
            name: this.$t('boardbox.report.report'),
            method: this._handleClickAbuseCasting
          });
        }

        if (this.isAdmin === true && casting.state === __WEBPACK_IMPORTED_MODULE_8__modules_Board_Casting_Enums_CastingState__["d" /* MODERATION */]) {
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
          id = _actionSheet$casting.id,
          slug = _actionSheet$casting.slug;

      this.$router.push({ name: 'board.castings.show', params: { id: id, slug: slug } });
    },
    _handleClickOpenCastingResponses: function _handleClickOpenCastingResponses() {
      var _actionSheet$casting2 = this.actionSheet.casting,
          id = _actionSheet$casting2.id,
          slug = _actionSheet$casting2.slug;

      this.$router.push({ name: 'board.castings.show', params: { id: id, slug: slug }, query: { responses: true } });
    },
    _handleClickUnpublishedCasting: function _handleClickUnpublishedCasting() {
      var _this7 = this;

      var id = this.actionSheet.casting.id;


      this.$confirm({
        cancelTxt: 'отмена',
        confirmTxt: 'снять',
        title: 'Подтвердите действие',
        message: 'Вы уверены, что хотите снять объявление с публикации?'
      }).then(function () {
        _this7._handleDraft(id);
      }).catch(function () {});
    },
    _handleClickArchiveCasting: function _handleClickArchiveCasting() {
      var _this8 = this;

      var id = this.actionSheet.casting.id;


      this.$confirm({
        cancelTxt: 'отмена',
        confirmTxt: 'в архив',
        title: 'Подтвердите действие',
        message: 'Вы уверены, что хотите удалить и перенести объявление в архив?'
      }).then(function () {
        _this8._handleArchive(id);
      }).catch(function () {});
    },
    _handleDraft: function _handleDraft(id) {
      var _this9 = this;

      return new Promise(function (resolve, reject) {
        __WEBPACK_IMPORTED_MODULE_3_mint_ui__["Indicator"].open();

        _this9.$api.post('api/v2/boards/castings/' + id + '/draft').then(function (response) {
          var data = response.data;

          _this9.$store.dispatch('board/casting/setFieldCastingsData', { id: id, key: 'state', value: __WEBPACK_IMPORTED_MODULE_8__modules_Board_Casting_Enums_CastingState__["c" /* DRAFT */] });

          __WEBPACK_IMPORTED_MODULE_3_mint_ui__["Indicator"].close();
          resolve();
        }, function (error) {
          var _error$response4 = error.response,
              data = _error$response4.data,
              status = _error$response4.status;


          __WEBPACK_IMPORTED_MODULE_3_mint_ui__["Indicator"].close();
          Object(__WEBPACK_IMPORTED_MODULE_3_mint_ui__["Toast"])({ message: 'Ошибка', iconClass: 'mintui mintui-field-error' });

          reject();

          throw new Error('Error draft casting');
        });
      });
    },
    _handleArchive: function _handleArchive(id) {
      var _this10 = this;

      return new Promise(function (resolve, reject) {
        __WEBPACK_IMPORTED_MODULE_3_mint_ui__["Indicator"].open();

        _this10.$api.post('api/v2/boards/castings/' + id + '/archive').then(function (response) {
          var data = response.data;

          _this10.$store.dispatch('board/casting/setFieldCastingsData', { id: id, key: 'state', value: __WEBPACK_IMPORTED_MODULE_8__modules_Board_Casting_Enums_CastingState__["a" /* ARCHIVED */] });

          __WEBPACK_IMPORTED_MODULE_3_mint_ui__["Indicator"].close();

          resolve();
        }, function (error) {
          var _error$response5 = error.response,
              data = _error$response5.data,
              status = _error$response5.status;


          __WEBPACK_IMPORTED_MODULE_3_mint_ui__["Indicator"].close();
          Object(__WEBPACK_IMPORTED_MODULE_3_mint_ui__["Toast"])({ message: 'Ошибка', iconClass: 'mintui mintui-field-error' });

          reject();

          throw new Error('Error draft casting');
        });
      });
    },
    _handleClickAbuseCasting: function _handleClickAbuseCasting() {
      var id = this.actionSheet.casting.id;

      this.$root.$emit('open-modal-abuse-create', { id: id, type: 'board_casting' });
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
    _handleClickApproveCasting: function _handleClickApproveCasting() {
      var _this11 = this;

      __WEBPACK_IMPORTED_MODULE_3_mint_ui__["Indicator"].open();
      var id = this.actionSheet.casting.id;


      this.$api.post('/api/admin/v1/boards/castings/' + id + '/approve').then(function (response) {
        __WEBPACK_IMPORTED_MODULE_3_mint_ui__["Indicator"].close();
        var data = response.data.data;

        _this11.$store.dispatch('board/casting/setFieldCastingsData', { id: id, key: 'state', value: __WEBPACK_IMPORTED_MODULE_8__modules_Board_Casting_Enums_CastingState__["e" /* PUBLISHED */] });
      }, function (err) {
        __WEBPACK_IMPORTED_MODULE_3_mint_ui__["Indicator"].close();
        Object(__WEBPACK_IMPORTED_MODULE_3_mint_ui__["Toast"])({ message: 'Ошибка', iconClass: 'mintui mintui-field-error' });
      });
    },
    _handleClickPublishedCasting: function _handleClickPublishedCasting() {
      var _this12 = this;

      return new Promise(function (resolve, reject) {
        __WEBPACK_IMPORTED_MODULE_3_mint_ui__["Indicator"].open();
        var id = _this12.actionSheet.casting.id;


        _this12.$api.post('api/v2/boards/castings/' + id + '/publish').then(function (response) {
          var data = response.data;

          if (Object(__WEBPACK_IMPORTED_MODULE_1__utils__["l" /* has */])(_this12.profile, 'without_moderate.castings') && _this12.profile['without_moderate']['castings']) {
            _this12.setFieldCastingData({ key: 'state', value: __WEBPACK_IMPORTED_MODULE_8__modules_Board_Casting_Enums_CastingState__["e" /* PUBLISHED */] });
          } else _this12.setFieldCastingData({ key: 'state', value: __WEBPACK_IMPORTED_MODULE_8__modules_Board_Casting_Enums_CastingState__["d" /* MODERATION */] });

          _this12._clearSheet().then(function () {
            return _this12._draftSheet();
          }).catch(function () {});

          __WEBPACK_IMPORTED_MODULE_3_mint_ui__["Indicator"].close();
          resolve();
        }, function (error) {
          var data = error.response.data,
              status = error.response.status;


          __WEBPACK_IMPORTED_MODULE_3_mint_ui__["Indicator"].close();
          Object(__WEBPACK_IMPORTED_MODULE_3_mint_ui__["Toast"])({ message: 'Ошибка', iconClass: 'mintui mintui-field-error' });

          reject();

          throw new Error('Error draft casting');
        });
      });
    }
  })
});

/***/ }),

/***/ 1632:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mint_ui__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mint_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_mint_ui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vuex_map_fields__ = __webpack_require__(22);
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





var _createHelpers = Object(__WEBPACK_IMPORTED_MODULE_2_vuex_map_fields__["a" /* createHelpers */])({
  getterType: 'board/casting/getField',
  mutationType: 'board/casting/updateField'
}),
    mapFields = _createHelpers.mapFields;

/* harmony default export */ __webpack_exports__["a"] = ({
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
    fields: 'castings.userFilter',
    defaultFields: 'castings.defaultUserFilter'
  }), Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["c" /* mapGetters */])({
    profile: 'auth/getProfile',
    isAuthorized: 'auth/isAuthorized',
    sources: 'board/casting/getSources'
  }), {
    showReset: function showReset() {
      var fields = this._.omit(this.fields, ['name', 'type']);
      var defaultFields = this._.omit(this.defaultFields, ['name', 'type']);

      return this._.isEqual(fields, defaultFields) === false;
    }
  }),
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
      var _this = this;

      this._handleValidateFields().then(function () {
        _this.$emit('apply');
      }).catch(function () {});
    },

    /**
     *
     */
    _handleClickClearFilter: function _handleClickClearFilter() {
      var _this2 = this;

      var fields = this._.omit(this.fields, ['name']);

      Object.keys(fields).forEach(function (k) {
        if (_this2.fields[k] === null && _typeof(_this2.fields[k]) === "object") {
          _this2.fields[k] = null;
        } else if (_typeof(_this2.fields[k]) === 'object') {
          _this2.fields[k] = [];
        } else _this2.fields[k] = '';
      });
    },

    /**
     * Validate all fields on current transition
     * @returns {Promise<any>}
     * @private
     */
    _handleValidateFields: function _handleValidateFields() {
      var _this3 = this;

      return new Promise(function (resolve, reject) {
        _this3.$validator.validateAll().then(function (result) {
          if (result) {
            resolve(result);
          } else reject();
        });
      });
    }
  }
});

/***/ }),

/***/ 1962:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1963);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("3c826b6a", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js?sourceMap!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-2c416bb7\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./User.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js?sourceMap!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-2c416bb7\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./User.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1963:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(true);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"User.vue","sourceRoot":""}]);

// exports


/***/ }),

/***/ 1964:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_FilterUser_vue__ = __webpack_require__(1632);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_d60f9a30_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_FilterUser_vue__ = __webpack_require__(1967);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1965)
}
var normalizeComponent = __webpack_require__(2)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-d60f9a30"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_FilterUser_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_d60f9a30_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_FilterUser_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/Board/Casting/FilterUser.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-d60f9a30", Component.options)
  } else {
    hotAPI.reload("data-v-d60f9a30", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 1965:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1966);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("2e73fdb5", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js?sourceMap!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-d60f9a30\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./FilterUser.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js?sourceMap!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-d60f9a30\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./FilterUser.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1966:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(true);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"FilterUser.vue","sourceRoot":""}]);

// exports


/***/ }),

/***/ 1967:
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
              _c("div", { staticClass: "heading_h4" }, [_vm._v("Параметры")]),
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
                      [_vm._v("Сбросить")]
                    )
                  ]
                : _vm._e()
            ],
            2
          ),
          _vm._v(" "),
          _c("div", { staticClass: "form__section form__section_filters" }, [
            _c(
              "div",
              { staticClass: "form__group form__group_declaration" },
              [
                _c(
                  "label",
                  {
                    staticClass:
                      "label select__label select__label_declaration",
                    attrs: { for: "form__select_declaration_state" }
                  },
                  [_vm._v("\n            Статус объявления\n          ")]
                ),
                _vm._v(" "),
                _c("lm-select", {
                  class: [
                    "lm-m-filter-line",
                    { filled: _vm.fields.state.length }
                  ],
                  attrs: {
                    "input-required": false,
                    "input-id": "form__select_declaration_state",
                    "input-name": "state",
                    "data-vv-name": "state",
                    "data-vv-as": "Статус",
                    placeholder: "Все статусы",
                    label: "",
                    multiple: true,
                    options: _vm.sources["stateCasting"]
                  },
                  model: {
                    value: _vm.fields.state,
                    callback: function($$v) {
                      _vm.$set(_vm.fields, "state", $$v)
                    },
                    expression: "fields.state"
                  }
                })
              ],
              1
            )
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
                [_vm._v("Назад")]
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
                [_vm._v("Применить")]
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
    require("vue-hot-reload-api")      .rerender("data-v-d60f9a30", esExports)
  }
}

/***/ }),

/***/ 1968:
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
      _vm.isCurrentUser === false
        ? [
            _c(
              "div",
              { staticClass: "row" },
              [
                _c(
                  "router-link",
                  {
                    attrs: {
                      to: {
                        name: "user.show",
                        params: { username: _vm.username }
                      }
                    }
                  },
                  [
                    _c("div", { staticClass: "profile" }, [
                      _c("div", { staticClass: "profile__name" }, [
                        _vm._v(_vm._s(_vm.user.fullname))
                      ])
                    ])
                  ]
                )
              ],
              1
            )
          ]
        : _vm._e(),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "page__header page__header_feed" },
        [
          _c(
            "div",
            { staticClass: "row row_justify_between mb_3" },
            [
              _c("div", { staticClass: "heading heading_h4" }, [
                _vm._v(
                  _vm._s(_vm.isCurrentUser ? "Мои объявления" : "Объявления")
                )
              ]),
              _vm._v(" "),
              _vm.isCurrentUser === true
                ? [
                    _c(
                      "router-link",
                      {
                        staticClass: "btn btn_round btn_primary btn_plus",
                        attrs: { to: { name: "board.castings.create" } }
                      },
                      [
                        _c("span", [
                          _c(
                            "svg",
                            {
                              staticClass: "icon icon_size_16 icon_fill_white"
                            },
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
                  ]
                : _vm._e()
            ],
            2
          ),
          _vm._v(" "),
           false
            ? [
                _c(
                  "div",
                  { staticClass: "input input_search input_search_feed" },
                  [
                    _c(
                      "svg",
                      {
                        class: [
                          "icon",
                          "icon_size_16",
                          "icon_search",
                          _vm.searchFocused
                            ? "icon_fill_blue"
                            : "icon_fill_lm-gray-3"
                        ]
                      },
                      [
                        _c("use", {
                          attrs: {
                            "xlink:href":
                              "/dist/img/icons/svg/sprite.svg#icon_search"
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
                        placeholder: "Поиск"
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
                  ]
                )
              ]
            : _vm._e(),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "row" },
            [_c("navigation-categories-user")],
            1
          )
        ],
        2
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          ref: "wrapper",
          class: ["page__content", "page__content_feed", { empty: _vm.isEmpty }]
        },
        [
          _vm.isEmpty === true
            ? [
                _c(
                  "div",
                  {
                    staticClass: "page__plug page__plug_feed_empty-list",
                    staticStyle: { height: "auto" }
                  },
                  [
                    _c(
                      "svg",
                      { staticClass: "icon icon_size_lg icon_fill_blue mb_5" },
                      [
                        _c("use", {
                          attrs: {
                            "xlink:href":
                              "/dist/img/icons/svg/sprite.svg#icon_info"
                          }
                        })
                      ]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "heading heading_h5" }, [
                      _vm._v("Тут пока пусто")
                    ]),
                    _vm._v(" "),
                    _vm.isCurrentUser === true && _vm.isAuthorized === true
                      ? [
                          _vm._m(0),
                          _vm._v(" "),
                          _c(
                            "router-link",
                            {
                              staticClass: "btn btn_primary",
                              attrs: { to: { name: "board.castings.create" } }
                            },
                            [_vm._v("Добавить")]
                          )
                        ]
                      : _vm._e()
                  ],
                  2
                )
              ]
            : _vm._e(),
          _vm._v(" "),
          _vm.isEmpty === false
            ? [
                _c(
                  "mt-loadmore",
                  {
                    ref: "loadmore",
                    attrs: { "top-method": _vm._handleLoadTopCastings },
                    on: {
                      "top-status-change": _vm._handleTopStatusChangeCastings
                    }
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
                        style: { minHeight: _vm.height },
                        attrs: {
                          "infinite-scroll-disabled": "infiniteDisabled",
                          "infinite-scroll-distance": "1900"
                        }
                      },
                      [
                        _vm._l(_vm.castings, function(casting) {
                          return _c("casting-card", {
                            key: casting.id,
                            attrs: { casting: casting, isCatalogPage: false },
                            on: {
                              actionSheet: _vm._handleActionSheetCasting,
                              changeState: _vm._handleChangeState
                            }
                          })
                        }),
                        _vm._v(" "),
                        _vm.loading && _vm.loadmore.topStatus !== "loading"
                          ? _c("lm-m-loader", { style: { marginTop: "15px" } })
                          : _vm._e()
                      ],
                      2
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
                )
              ]
            : _vm._e()
        ],
        2
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
    2
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "mb_3" }, [
      _vm._v("Для начала работы добавьте "),
      _c("br"),
      _vm._v("новое объявление")
    ])
  }
]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-2c416bb7", esExports)
  }
}

/***/ })

});
//# sourceMappingURL=72.build.964a24bb8838fe452d11.js.map