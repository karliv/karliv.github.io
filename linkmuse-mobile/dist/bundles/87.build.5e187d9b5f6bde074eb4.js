webpackJsonp([87],{

/***/ 1430:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Index_vue__ = __webpack_require__(1887);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_54b72c79_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Index_vue__ = __webpack_require__(2683);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(2677)
}
var normalizeComponent = __webpack_require__(2)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-54b72c79"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_54b72c79_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Index_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/views/User/Profession/Index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-54b72c79", Component.options)
  } else {
    hotAPI.reload("data-v-54b72c79", Component.options)
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

/***/ 1553:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mint_ui__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mint_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_mint_ui__);
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





var APP_URL = "http://localhost";

/* harmony default export */ __webpack_exports__["a"] = ({
  props: {
    profession: {
      type: Object,
      required: true
    },
    isCatalogPage: {
      type: Boolean,
      default: true
    }
  },
  data: function data() {
    return {
      has: __WEBPACK_IMPORTED_MODULE_1__utils__["l" /* has */],
      APP_URL: APP_URL
    };
  },

  computed: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["c" /* mapGetters */])({
    user: 'auth/getAuthUser',
    profile: 'auth/getProfile',
    isAuthorized: 'auth/isAuthorized'
  }), {
    id: function id() {
      return this.profession.id;
    },
    href: function href() {
      var id = this.profession.id;

      var query = this.isAuthorized && this.user ? { ref: this.user.id } : {};

      var _$router$resolve = this.$router.resolve({ name: 'users.professions.show', params: { id: id }, query: query }),
          href = _$router$resolve.href;

      return href;
    },
    author: function author() {
      return this.profession.user;
    },
    name: function name() {
      return Object(__WEBPACK_IMPORTED_MODULE_1__utils__["l" /* has */])(this.author, 'name') ? this.author.name : null;
    },
    avatar: function avatar() {
      if (this.author && Object(__WEBPACK_IMPORTED_MODULE_1__utils__["l" /* has */])(this.author, 'avatar.84x84')) {
        var image = this.author.avatar['84x84'];

        return image || __WEBPACK_IMPORTED_MODULE_1__utils__["a" /* AVATAR */];
      } else return __WEBPACK_IMPORTED_MODULE_1__utils__["a" /* AVATAR */];
    },
    isCurrentUser: function isCurrentUser() {
      return this.user && this.user.id === this.profession.user.id;
    },
    isPublished: function isPublished() {
      return this.profession.isPublished;
    },
    professionNode: function professionNode() {
      return this.profession.profession;
    },
    isCertifiedUser: function isCertifiedUser() {
      return this.author.isCertifiedUser || false;
    },
    inFolder: function inFolder() {
      return this.author.inFolder || false;
    },
    city: function city() {
      return Object(__WEBPACK_IMPORTED_MODULE_1__utils__["l" /* has */])(this.author, 'city.id') ? this.author.city : null;
    },
    age: function age() {
      return Object(__WEBPACK_IMPORTED_MODULE_1__utils__["l" /* has */])(this.author, 'age') ? this.author.age : null;
    },
    anketa: function anketa() {
      var anketa = this.profession.anketa;

      return anketa;
    },
    hasRate: function hasRate() {
      return Object(__WEBPACK_IMPORTED_MODULE_1__utils__["l" /* has */])(this.anketa, 'rate');
    },
    rate: function rate() {
      return this.anketa['rate'][0];
    },
    phone: function phone() {
      return Object(__WEBPACK_IMPORTED_MODULE_1__utils__["l" /* has */])(this.author, 'contacts.phone') && this.author['contacts']['phone'] ? this.author['contacts']['phone'] : null;
    },
    isFasten: function isFasten() {
      return this.profession.isFasten || false;
    }
  }),
  methods: {
    isToday: function isToday(date) {
      var context = this.$moment(date);
      return this.$moment().isSame(context, 'd');
    },
    _handleClickMessage: function _handleClickMessage() {
      if (this.isAuthorized === false) {
        this._handleClickMessageWithoutAuthorized();
      } else this._handleMessage();

      this.$gtm.trackEvent({ event: 'write_message' });
    },
    _handleClickMessageWithoutAuthorized: function _handleClickMessageWithoutAuthorized() {
      var _this = this;

      this.$localStorage.set('redirect.register', this.href);
      this.$nextTick(function () {
        _this.$router.push({ name: 'register' });
      });
    },
    _handleMessage: function _handleMessage() {
      var uid = this._.sortBy([this.author.id, this.user.id]).toString();
      this.$router.push({ name: 'messages.show', params: { uid: uid } });
    },
    _handleClickCallUser: function _handleClickCallUser() {
      this.$gtm.trackEvent({ event: 'call_user_number' });
    },
    _handleClickPublishProfession: function _handleClickPublishProfession() {
      this._handlePublishProfession();
    },
    _handlePublishProfession: function _handlePublishProfession() {
      var _this2 = this;

      return new Promise(function (resolve, reject) {
        __WEBPACK_IMPORTED_MODULE_2_mint_ui__["Indicator"].open();

        var id = _this2.profession.id;

        _this2.$api.post('api/v2/users/professions/' + id + '/publish').then(function (response) {
          var data = response.data;

          _this2.$emit('changeState', { id: id, key: 'isPublished', value: true });
          _this2.$gtm.trackEvent({ event: 'publish_profession' });

          __WEBPACK_IMPORTED_MODULE_2_mint_ui__["Indicator"].close();

          resolve();
        }, function (error) {
          var _error$response = error.response,
              data = _error$response.data,
              status = _error$response.status;


          __WEBPACK_IMPORTED_MODULE_2_mint_ui__["Indicator"].close();
          Object(__WEBPACK_IMPORTED_MODULE_2_mint_ui__["Toast"])({ message: 'Ошибка', iconClass: 'mintui mintui-field-error' });

          reject();

          throw new Error('Error publish profession');
        });
      });
    },
    _handleClickAddToFolder: function _handleClickAddToFolder() {
      this.$root.$emit('open-modal-add-user-on-folder', { user: this.author });
    },
    _handleClickActionSheet: function _handleClickActionSheet() {
      var id = this.profession.id;

      this.$emit('actionSheet', id, this.isCurrentUser);
    }
  }
});

/***/ }),

/***/ 1602:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(6);


var DEFAULT = '\n<div class="d-nav__text">\n  \u0420\u0430\u0431\u043E\u0442\u0430 \u0434\u043B\u044F \u0443\u0447\u0430\u0441\u0442\u043D\u0438\u043A\u043E\u0432 \u0441\u044A\u0451\u043C\u043E\u0447\u043D\u043E\u0439 \u0433\u0440\u0443\u043F\u043F\u044B: \u043F\u0440\u0435\u043F\u0440\u043E\u0434\u0430\u043A\u0448\u043D\u0430, \u043F\u0440\u043E\u0434\u0430\u043A\u0448\u043D\u0430, \u043F\u043E\u0441\u0442\u043F\u0440\u043E\u0434\u0430\u043A\u0448\u043D\u0430 \u0438 \u0442\u0430\u043B\u0430\u043D\u0442\u043E\u0432.\n</div>\n<div class="d-nav__text">\n  \u041A\u0430\u043A \u043D\u0430\u0439\u0442\u0438 \u0440\u0430\u0431\u043E\u0442\u0443 \u0432 \u043F\u0440\u043E\u0434\u0430\u043A\u0448\u043D? \u0413\u0434\u0435 \u043D\u0430\u0439\u0442\u0438 \u043E\u043F\u0435\u0440\u0430\u0442\u043E\u0440\u0430 \u0434\u043B\u044F \u0441\u044A\u0451\u043C\u043E\u043A?\n</div>\n<div class="d-nav__text">\n  \u0420\u0430\u0431\u043E\u0442\u0430 \u0432 \u043A\u0438\u043D\u043E\u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u0435 \u0438\u043C\u0435\u0435\u0442 \u0441\u0432\u043E\u044E \u0441\u043F\u0435\u0446\u0438\u0444\u0438\u043A\u0443. \u0412 \u043F\u0435\u0440\u0432\u0443\u044E \u043E\u0447\u0435\u0440\u0435\u0434\u044C \u043A\u0438\u043D\u043E\u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u043E \u0434\u0435\u043B\u0438\u0442\u0441\u044F \u043D\u0430 \u0442\u0440\u0438 \u044D\u0442\u0430\u043F\u0430:\n  <ul>\n    <li>\u041F\u0440\u0435\u043F\u0440\u043E\u0434\u0430\u043A\u0448\u043D</li>\n    <li>\u041F\u0440\u043E\u0434\u0430\u043A\u0448\u043D</li>\n    <li>\u041F\u043E\u0441\u0442\u043F\u0440\u043E\u0434\u0430\u043A\u0448\u043D</li>\n  </ul>\n</div>\n<div class="d-nav__text">\n  \u041D\u0430 \u043D\u0430\u0448\u0435\u043C \u0441\u0430\u0439\u0442\u0435 \u0435\u0441\u0442\u044C \u0431\u043E\u043B\u044C\u0448\u043E\u0439 \u043A\u0430\u0442\u0430\u043B\u043E\u0433 \u0440\u0430\u0431\u043E\u0442\u043D\u0438\u043A\u043E\u0432 \u043A\u0438\u043D\u043E, \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u0438\u0441\u0442\u043E\u0432 \u0443\u0447\u0430\u0441\u0442\u043D\u0438\u043A\u043E\u0432 \u0441\u044A\u0451\u043C\u043E\u0447\u043D\u043E\u0439 \u0433\u0440\u0443\u043F\u043F\u044B. \u0412 \u043D\u0451\u043C \u043C\u043E\u0436\u043D\u043E \u043C\u043E\u0436\u043D\u043E \u043D\u0430\u0439\u0442\u0438 \u043F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u043E\u043D\u0430\u043B\u043E\u0432 \u043F\u043E \u043C\u043D\u043E\u0433\u0438\u043C \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u0430\u043C: \u043E\u043F\u0435\u0440\u0430\u0442\u043E\u0440, \u043F\u0440\u043E\u0434\u044E\u0441\u0435\u0440, \u0440\u0435\u0436\u0438\u0441\u0441\u0451\u0440, \u0434\u0435\u043A\u043E\u0440\u0430\u0442\u043E\u0440, \u0437\u0432\u0443\u043A\u043E\u043E\u043F\u0435\u0440\u0430\u0442\u043E\u0440, \u0433\u0440\u0438\u043C\u0451\u0440, \u043E\u0441\u0432\u0435\u0442\u0438\u0442\u0435\u043B\u044C, \u0433\u0430\u0444\u0444\u0435\u0440, \u0438\u043D\u0436\u0435\u043D\u0435\u0440 \u0438 \u0442.\u0434. \u041C\u044B \u0432\u043D\u0438\u043C\u0430\u0442\u0435\u043B\u044C\u043D\u043E \u0441\u043B\u0435\u0434\u0438\u043C \u0437\u0430 \u043F\u0443\u0431\u043B\u0438\u043A\u0443\u0435\u043C\u044B\u043C\u0438 \u043F\u043E\u0440\u0442\u0444\u043E\u043B\u0438\u043E \u0438 \u0442\u0449\u0430\u0442\u0435\u043B\u044C\u043D\u043E \u043E\u0442\u0431\u0438\u0440\u0430\u0435\u043C \u043B\u0443\u0447\u0448\u0438\u0445 \u043A\u0430\u043D\u0434\u0438\u0434\u0430\u0442\u043E\u0432.\n</div>';

var model = '\n<div class="d-nav__text"><b>\u041A\u0442\u043E \u0442\u0430\u043A\u0430\u044F \u043C\u043E\u0434\u0435\u043B\u044C</b><br>\n\u042D\u0442\u043E \u0438\u0441\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C \u0438\u0437 \u0438\u043D\u0434\u0443\u0441\u0442\u0440\u0438\u0438 \u043C\u043E\u0434\u044B, \u0433\u043B\u0430\u0432\u043D\u0430\u044F \u0437\u0430\u0434\u0430\u0447\u0430 \u043A\u043E\u0442\u043E\u0440\u043E\u0433\u043E \u0441\u043E\u0441\u0442\u043E\u0438\u0442 \u0432 \u0434\u0435\u043C\u043E\u043D\u0441\u0442\u0440\u0430\u0446\u0438\u0438 \u043E\u0431\u0440\u0430\u0437\u0430. \u041C\u043E\u0434\u0435\u043B\u044C \u043F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0435\u0442 \u043E\u0434\u0435\u0436\u0434\u0443, \u043E\u0431\u0443\u0432\u044C \u0438 \u0430\u043A\u0441\u0435\u0441\u0441\u0443\u0430\u0440\u044B, \u0441\u0442\u0430\u0440\u0430\u044F\u0441\u044C \u043F\u043E\u0434\u0430\u0442\u044C \u0438\u0445 \u0441 \u043B\u0443\u0447\u0448\u0438\u0445 \u0441\u0442\u043E\u0440\u043E\u043D \u0438 \u0441\u043E\u0437\u0434\u0430\u0442\u044C \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u043D\u044B\u0439 \u0441\u0442\u0438\u043B\u044C. \u0420\u0430\u0431\u043E\u0442\u0430 \u043C\u043E\u0434\u0435\u043B\u044C\u044E \u0441\u043E\u0441\u0442\u043E\u0438\u0442 \u043D\u0435 \u0442\u043E\u043B\u044C\u043A\u043E \u0438\u0437 \u043F\u043E\u043A\u0430\u0437\u043E\u0432, \u0444\u043E\u0442\u043E\u0441\u044A\u0435\u043C\u043E\u043A \u0438 \u0433\u043B\u0430\u043C\u0443\u0440\u043D\u044B\u0445 \u0432\u0435\u0447\u0435\u0440\u0438\u043D\u043E\u043A, \u043D\u043E \u0438 \u0432\u043A\u043B\u044E\u0447\u0430\u0435\u0442 \u0432 \u0441\u0435\u0431\u044F \u0434\u043E\u043B\u0433\u0438\u0435 \u043E\u0436\u0438\u0434\u0430\u043D\u0438\u044F \u043D\u0430 \u043A\u0430\u0441\u0442\u0438\u043D\u0433\u0430\u0445, \u043F\u0440\u0438\u043C\u0435\u0440\u043A\u0438, \u0430 \u0442\u0430\u043A\u0436\u0435 \u0441\u0442\u0440\u043E\u0433\u0443\u044E \u0434\u0438\u0435\u0442\u0443 \u0438 \u0440\u0435\u0433\u0443\u043B\u044F\u0440\u043D\u044B\u0435 \u0437\u0430\u043D\u044F\u0442\u0438\u044F \u0441\u043F\u043E\u0440\u0442\u043E\u043C \u0434\u043B\u044F \u0442\u043E\u0433\u043E, \u0447\u0442\u043E\u0431\u044B \u043E\u0441\u0442\u0430\u0432\u0430\u0442\u044C\u0441\u044F \u0432 \u043B\u0443\u0447\u0448\u0435\u0439 \u0444\u043E\u0440\u043C\u0435. \u041C\u043E\u0434\u0435\u043B\u0438 \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E \u043F\u043E\u0441\u0442\u043E\u044F\u043D\u043D\u043E \u0441\u043B\u0435\u0434\u0438\u0442\u044C \u0437\u0430 \u0441\u0432\u043E\u0438\u043C \u0432\u043D\u0435\u0448\u043D\u0438\u043C \u0432\u0438\u0434\u043E\u043C \u0438 \u0441\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u0435\u043C \u043A\u043E\u0436\u0438, \u0432\u043E\u043B\u043E\u0441 \u0438 \u043D\u043E\u0433\u0442\u0435\u0439.\n</div>\n<div class="d-nav__text"><b>\u0413\u0434\u0435 \u0440\u0430\u0431\u043E\u0442\u0430\u044E\u0442 \u043C\u043E\u0434\u0435\u043B\u0438</b><br>\n\u041F\u043E\u043C\u0438\u043C\u043E \u0440\u0430\u0431\u043E\u0442\u044B \u043D\u0430 \u043C\u043E\u0434\u043D\u044B\u0445 \u043F\u043E\u043A\u0430\u0437\u0430\u0445 \u0438 \u0444\u044D\u0448\u043D-\u0441\u044A\u0435\u043C\u043A\u0430\u0445, \u043C\u043E\u0434\u0435\u043B\u0435\u0439 \u0447\u0430\u0441\u0442\u043E \u0438\u0449\u0443\u0442 \u043D\u0430 \u0441\u044A\u0435\u043C\u043A\u0438 \u043A\u0430\u0442\u0430\u043B\u043E\u0433\u043E\u0432, \u043A\u043E\u043C\u043C\u0435\u0440\u0447\u0435\u0441\u043A\u0438\u0445 \u0440\u043E\u043B\u0438\u043A\u043E\u0432 \u0438 \u0440\u0435\u043A\u043B\u0430\u043C\u044B. \u0422\u0430\u043A\u0436\u0435 \u043C\u043E\u0434\u0435\u043B\u0438 \u043D\u0443\u0436\u043D\u044B \u043D\u0430 \u0441\u0442\u0435\u043D\u0434\u044B \u043D\u0430 \u0432\u044B\u0441\u0442\u0430\u0432\u043A\u0430\u0445, \u0447\u0442\u043E\u0431\u044B \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043B\u044F\u0442\u044C \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u043D\u044B\u0439 \u043F\u0440\u043E\u0434\u0443\u043A\u0442 \u0438\u043B\u0438 \u0443\u0441\u043B\u0443\u0433\u0443.\n</div>\n<div class="d-nav__text"><b>\u0413\u0434\u0435 \u043D\u0430\u0439\u0442\u0438 \u0440\u0430\u0431\u043E\u0442\u0443 \u043C\u043E\u0434\u0435\u043B\u044F\u043C</b><br>\n\u041D\u0430\u0439\u0442\u0438 \u0440\u0430\u0431\u043E\u0442\u0443 \u043C\u043E\u0434\u0435\u043B\u044F\u043C \u043C\u043E\u0436\u043D\u043E \u0447\u0435\u0440\u0435\u0437 \u0430\u0433\u0435\u043D\u0442\u0441\u0442\u0432\u043E, \u043D\u043E \u0441 \u043A\u043E\u043C\u0438\u0441\u0441\u0438\u0435\u0439, \u043B\u0438\u0431\u043E \u0441\u0430\u043C\u043E\u0441\u0442\u043E\u044F\u0442\u0435\u043B\u044C\u043D\u043E. \u041D\u0430 \u043D\u0430\u0448\u0435\u0439 \u043F\u043B\u043E\u0449\u0430\u0434\u043A\u0435 \u043A\u0430\u0436\u0434\u044B\u0439 \u0434\u0435\u043D\u044C \u043F\u043E\u044F\u0432\u043B\u044F\u044E\u0442\u0441\u044F \u043D\u043E\u0432\u044B\u0435 \u0432\u0430\u043A\u0430\u043D\u0441\u0438\u0438 \u0434\u043B\u044F \u043C\u043E\u0434\u0435\u043B\u0435\u0439. \u0422\u0430\u043A\u0436\u0435 \u0434\u043B\u044F \u0442\u0435\u0445, \u043A\u0442\u043E \u0438\u0449\u0435\u0442 \u0434\u0430\u043D\u043D\u044B\u0445 \u0438\u0441\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u0435\u0439, \u043D\u0430 \u041B\u0438\u043D\u043A\u043C\u044C\u044E\u0441 \u0435\u0441\u0442\u044C \u0448\u0438\u0440\u043E\u043A\u0430\u044F \u0431\u0430\u0437\u0430 \u043C\u043E\u0434\u0435\u043B\u0435\u0439, \u0432 \u043A\u043E\u0442\u043E\u0440\u043E\u0439 \u043C\u043E\u0436\u043D\u043E \u043F\u043E\u0434\u043E\u0431\u0440\u0430\u0442\u044C \u0441\u0435\u0431\u0435 \u043F\u043E\u043D\u0440\u0430\u0432\u0438\u0432\u0448\u0435\u0433\u043E\u0441\u044F \u0447\u0435\u043B\u043E\u0432\u0435\u043A\u0430, \u0434\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0435\u0433\u043E \u0432 \u043F\u043E\u0434\u0431\u043E\u0440\u043A\u0443, \u0441\u043A\u0430\u0447\u0430\u0442\u044C \u0435\u0433\u043E \u043F\u043E\u0440\u0442\u0444\u043E\u043B\u0438\u043E \u0432 PDF, \u0430 \u0442\u0430\u043A\u0436\u0435 \u0431\u044B\u0441\u0442\u0440\u043E \u0441\u0432\u044F\u0437\u0430\u0442\u044C\u0441\u044F \u0441 \u043D\u0438\u043C \u0447\u0435\u0440\u0435\u0437 \u043B\u0438\u0447\u043D\u044B\u0435 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u044F \u0438\u043B\u0438 \u0437\u0432\u043E\u043D\u043E\u043A \u043D\u0430 \u043C\u043E\u0431\u0438\u043B\u044C\u043D\u044B\u0439 \u0442\u0435\u043B\u0435\u0444\u043E\u043D.\n\u041C\u044B \u043E\u0442\u0431\u0438\u0440\u0430\u0435\u043C \u0442\u043E\u043B\u044C\u043A\u043E \u043F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u043C\u043E\u0434\u0435\u043B\u0435\u0439, \u0443 \u043A\u043E\u0442\u043E\u0440\u044B\u0445 \u0435\u0441\u0442\u044C \u0440\u0435\u043B\u0435\u0432\u0430\u043D\u0442\u043D\u044B\u0439 \u043E\u043F\u044B\u0442 \u0440\u0430\u0431\u043E\u0442\u044B.\n</div>';

var photographer = '\n<div class="d-nav__text"><b>\u041A\u0442\u043E \u0442\u0430\u043A\u043E\u0439 \u0444\u043E\u0442\u043E\u0433\u0440\u0430\u0444</b><br>\n\u042D\u0442\u043E \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u0438\u0441\u0442, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u0437\u0430\u043D\u0438\u043C\u0430\u0435\u0442\u0441\u044F \u043F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u043C \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u0435\u043C \u0444\u043E\u0442\u043E\u0433\u0440\u0430\u0444\u0438\u0438. \u0412 \u0445\u0443\u0434\u043E\u0436\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u043C \u0441\u043C\u044B\u0441\u043B\u0435, \u0444\u043E\u0442\u043E\u0433\u0440\u0430\u0444 \u043E\u0441\u0442\u0430\u043D\u0430\u0432\u043B\u0438\u0432\u0430\u0435\u0442 \u043C\u043E\u043C\u0435\u043D\u0442\u044B \u043F\u0440\u0435\u043A\u0440\u0430\u0441\u043D\u043E\u0433\u043E \u0438 \u0437\u0430\u043F\u0435\u0447\u0430\u0442\u043B\u044F\u0435\u0442 \u0438\u0445 \u043D\u0430 \u0444\u043E\u0442\u043E. \u0420\u0430\u0431\u043E\u0442\u0430 \u0444\u043E\u0442\u043E\u0433\u0440\u0430\u0444\u043E\u043C \u0437\u0430\u043A\u043B\u044E\u0447\u0430\u0435\u0442\u0441\u044F \u0432 \u043F\u043E\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0435 \u043A\u0430\u0434\u0440\u0430, \u0441\u044A\u0435\u043C\u043A\u0435 \u0441 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0435\u043C \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0433\u043E \u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u044F \u0438 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0435 \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u043D\u044B\u0445 \u043A\u0430\u0434\u0440\u043E\u0432 \u0432 \u0444\u043E\u0442\u043E\u0448\u043E\u043F\u0435 \u043F\u0440\u0438 \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E\u0441\u0442\u0438. \u0424\u043E\u0442\u043E\u0433\u0440\u0430\u0444\u0443 \u0432\u0430\u0436\u043D\u043E \u043D\u0430\u0439\u0442\u0438 \u043E\u043F\u0442\u0438\u043C\u0430\u043B\u044C\u043D\u043E\u0435 \u043E\u0441\u0432\u0435\u0449\u0435\u043D\u0438\u0435 \u0438 \u0440\u0430\u043A\u0443\u0440\u0441 \u0434\u043B\u044F \u0441\u044A\u0451\u043C\u043A\u0438. \u0415\u043C\u0443 \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E \u0432\u043B\u0430\u0434\u0435\u0442\u044C \u0442\u0435\u0445\u043D\u0438\u0447\u0435\u0441\u043A\u0438\u043C\u0438 \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0430\u043C\u0438 \u0438 \u0438 \u0443\u043C\u0435\u0442\u044C \u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u043E \u043D\u0430\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u0442\u044C \u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u0435. \u041A\u0440\u043E\u043C\u0435 \u044D\u0442\u043E\u0433\u043E, \u0444\u043E\u0442\u043E\u0433\u0440\u0430\u0444 \u043E\u0431\u044F\u0437\u0430\u043D \u0443\u043C\u0435\u0442\u044C \u043F\u0440\u043E\u0432\u043E\u0434\u0438\u0442\u044C \u043F\u0435\u0440\u0435\u0433\u043E\u0432\u043E\u0440\u044B \u0441 \u0437\u0430\u043A\u0430\u0437\u0447\u0438\u043A\u043E\u043C, \u0434\u043E\u0433\u043E\u0432\u0430\u0440\u0438\u0432\u0430\u0442\u044C\u0441\u044F \u043E \u0442\u0435\u043C\u0435 \u0438 \u0443\u0441\u043B\u043E\u0432\u0438\u044F\u0445 \u043F\u0440\u043E\u0432\u043E\u0434\u0438\u043C\u043E\u0439 \u0441\u044A\u0435\u043C\u043A\u0438, \u043E \u043D\u0430\u043B\u0438\u0447\u0438\u0438 \u0440\u0435\u043A\u0432\u0438\u0437\u0438\u0442\u0430 \u0438 \u043F\u0440\u043E\u0447\u0435\u043C. \u041D\u0435\u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u0444\u0443\u043D\u043A\u0446\u0438\u0438 \u043C\u043E\u0433\u0443\u0442 \u0431\u044B\u0442\u044C \u0434\u0435\u043B\u0435\u0433\u0438\u0440\u043E\u0432\u0430\u043D\u044B \u0434\u0440\u0443\u0433\u0438\u043C \u043B\u044E\u0434\u044F\u043C, \u0435\u0441\u043B\u0438 \u0435\u0441\u0442\u044C \u0441\u044A\u0451\u043C\u043E\u0447\u043D\u0430\u044F \u043A\u043E\u043C\u0430\u043D\u0434\u0430, \u043D\u043E \u0437\u0430\u0447\u0430\u0441\u0442\u0443\u044E \u0432\u0435\u0441\u044C \u043F\u0440\u043E\u0446\u0435\u0441\u0441 \u0444\u043E\u0442\u043E\u0441\u044A\u0435\u043C\u043A\u0438 \u043B\u043E\u0436\u0438\u0442\u0441\u044F \u043E\u0442 \u0438 \u0434\u043E \u043D\u0430 \u0441\u0430\u043C\u043E\u0433\u043E \u0444\u043E\u0442\u043E\u0433\u0440\u0430\u0444\u0430.\n</div>\n<div class="d-nav__text"><b>\u0413\u0434\u0435 \u0440\u0430\u0431\u043E\u0442\u0430\u044E\u0442 \u0444\u043E\u0442\u043E\u0433\u0440\u0430\u0444\u044B</b><br>\n\u0412\u0430\u043A\u0430\u043D\u0441\u0438\u0438 \u0444\u043E\u0442\u043E\u0433\u0440\u0430\u0444\u043E\u0432 \u043C\u043E\u0436\u043D\u043E \u0432\u0441\u0442\u0440\u0435\u0442\u0438\u0442\u044C \u0432 \u0440\u0435\u0434\u0430\u043A\u0446\u0438\u044F\u0445 \u0438 \u0441\u0444\u0435\u0440\u0435 \u0421\u041C\u0418 \u0438 \u043C\u0435\u0434\u0438\u0430, \u0432 \u0444\u043E\u0442\u043E\u0441\u0442\u0443\u0434\u0438\u044F\u0445 \u0438 \u0444\u043E\u0442\u043E\u0430\u0442\u0435\u043B\u044C\u0435 \u043F\u043E \u043D\u0430\u0439\u043C\u0443, \u0430 \u0442\u0430\u043A\u0436\u0435 \u0432 \u0447\u0430\u0441\u0442\u043D\u044B\u0445 \u043E\u0431\u044A\u044F\u0432\u043B\u0435\u043D\u0438\u044F\u0445 \u043E\u0442 \u0437\u0430\u043A\u0430\u0437\u0447\u0438\u043A\u043E\u0432 \u043D\u0430 \u043A\u043E\u043C\u043C\u0435\u0440\u0447\u0435\u0441\u043A\u0438\u0439 \u043F\u0440\u043E\u0435\u043A\u0442. \u0424\u043E\u0442\u043E\u0433\u0440\u0430\u0444\u044B \u043E\u0447\u0435\u043D\u044C \u0432\u043E\u0441\u0442\u0440\u0435\u0431\u043E\u0432\u0430\u043D\u044B \u0432 \u0438\u043D\u0434\u0443\u0441\u0442\u0440\u0438\u0438 \u043C\u043E\u0434\u044B, \u0440\u0430\u0437\u0432\u043B\u0435\u0447\u0435\u043D\u0438\u0439 \u0438 \u043D\u0430 \u0447\u0430\u0441\u0442\u043D\u044B\u0445 \u0438 \u043A\u043E\u0440\u043F\u043E\u0440\u0430\u0442\u0438\u0432\u043D\u044B\u0445 \u0438\u0432\u0435\u043D\u0442\u0430\u0445.\n</div>\n<div class="d-nav__text"><b>\u041A\u0430\u043A \u043D\u0430\u0439\u0442\u0438 \u0440\u0430\u0431\u043E\u0442\u0443 \u0444\u043E\u0442\u043E\u0433\u0440\u0430\u0444\u0443</b><br>\n\u041D\u0430 \u043D\u0430\u0448\u0435\u0439 \u043F\u043B\u043E\u0449\u0430\u0434\u043A\u0435 \u043A\u0430\u0436\u0434\u044B\u0439 \u0434\u0435\u043D\u044C \u043F\u043E\u044F\u0432\u043B\u044F\u044E\u0442\u0441\u044F \u043D\u043E\u0432\u044B\u0435 \u0432\u0430\u043A\u0430\u043D\u0441\u0438\u0438 \u0434\u043B\u044F \u0444\u043E\u0442\u043E\u0433\u0440\u0430\u0444\u043E\u0432. \u0422\u0430\u043A\u0436\u0435 \u0434\u043B\u044F \u0442\u0435\u0445, \u043A\u0442\u043E \u0438\u0449\u0435\u0442 \u0434\u0430\u043D\u043D\u044B\u0445 \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u0438\u0441\u0442\u043E\u0432, \u043D\u0430 \u041B\u0438\u043D\u043A\u043C\u044C\u044E\u0441 \u0435\u0441\u0442\u044C \u0448\u0438\u0440\u043E\u043A\u0430\u044F \u0431\u0430\u0437\u0430 \u0444\u043E\u0442\u043E\u0433\u0440\u0430\u0444\u043E\u0432, \u0432 \u043A\u043E\u0442\u043E\u0440\u043E\u0439 \u043C\u043E\u0436\u043D\u043E \u043F\u043E\u0434\u043E\u0431\u0440\u0430\u0442\u044C \u0441\u0435\u0431\u0435 \u043F\u043E\u043D\u0440\u0430\u0432\u0438\u0432\u0448\u0435\u0433\u043E\u0441\u044F \u0447\u0435\u043B\u043E\u0432\u0435\u043A\u0430, \u0434\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0435\u0433\u043E \u0432 \u043F\u043E\u0434\u0431\u043E\u0440\u043A\u0443, \u0441\u043A\u0430\u0447\u0430\u0442\u044C \u0435\u0433\u043E \u043F\u043E\u0440\u0442\u0444\u043E\u043B\u0438\u043E \u0432 PDF, \u0430 \u0442\u0430\u043A\u0436\u0435 \u0431\u044B\u0441\u0442\u0440\u043E \u0441\u0432\u044F\u0437\u0430\u0442\u044C\u0441\u044F \u0441 \u043D\u0438\u043C \u0447\u0435\u0440\u0435\u0437 \u043B\u0438\u0447\u043D\u044B\u0435 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u044F \u0438\u043B\u0438 \u0437\u0432\u043E\u043D\u043E\u043A \u043D\u0430 \u043C\u043E\u0431\u0438\u043B\u044C\u043D\u044B\u0439 \u0442\u0435\u043B\u0435\u0444\u043E\u043D.\n\u041C\u044B \u043E\u0442\u0431\u0438\u0440\u0430\u0435\u043C \u0442\u043E\u043B\u044C\u043A\u043E \u043B\u0443\u0447\u0448\u0438\u0445 \u0444\u043E\u0442\u043E\u0433\u0440\u0430\u0444\u043E\u0432, \u0443 \u043A\u043E\u0442\u043E\u0440\u044B\u0445 \u0435\u0441\u0442\u044C \u0440\u0435\u043B\u0435\u0432\u0430\u043D\u0442\u043D\u044B\u0439 \u043E\u043F\u044B\u0442 \u0440\u0430\u0431\u043E\u0442\u044B.\n</div>';

var videographer = '\n<div class="d-nav__text"><b>\u041A\u0442\u043E \u0442\u0430\u043A\u043E\u0439 \u0432\u0438\u0434\u0435\u043E\u0433\u0440\u0430\u0444</b><br>\n\u0421\u043F\u0435\u0446\u0438\u0430\u043B\u0438\u0441\u0442, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u0437\u0430\u043D\u0438\u043C\u0430\u0435\u0442\u0441\u044F \u043F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u043C \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u0435\u043C \u043F\u043E\u043B\u043D\u043E\u0446\u0435\u043D\u043D\u043E\u0433\u043E \u0432\u0438\u0434\u0435\u043E\u0444\u0438\u043B\u044C\u043C\u0430. \u0420\u0430\u0431\u043E\u0442\u0430 \u0432\u0438\u0434\u0435\u043E\u0433\u0440\u0430\u0444\u0430 \u043C\u043E\u0436\u0435\u0442 \u0432\u043A\u043B\u044E\u0447\u0430\u0435\u0442 \u0432 \u0441\u0435\u0431\u044F \u0432\u0435\u0441\u044C \u043F\u0440\u043E\u0446\u0435\u0441\u0441 \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u044F \u0432\u0438\u0434\u0435\u043E \u043E\u0442 \u0435\u0433\u043E \u0442\u0432\u043E\u0440\u0447\u0435\u0441\u043A\u043E\u0439 \u0437\u0430\u0434\u0443\u043C\u043A\u0438 \u0438 \u043F\u043B\u0430\u043D\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F \u043A\u0430\u0434\u0440\u043E\u0432, \u043F\u043E\u0434\u0433\u043E\u0442\u043E\u0432\u043A\u0438 \u0442\u0435\u0445\u043D\u0438\u0447\u0435\u0441\u043A\u043E\u0433\u043E \u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u044F, \u043E\u043F\u0435\u0440\u0430\u0442\u043E\u0440\u0441\u043A\u043E\u0439 \u0440\u0430\u0431\u043E\u0442\u044B \u0438 \u0440\u0435\u0436\u0438\u0441\u0441\u0443\u0440\u044B \u043F\u043E\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0438 \u043A\u0430\u0434\u0440\u0430 \u0434\u043E \u0444\u0438\u043D\u0430\u043B\u044C\u043D\u043E\u0433\u043E \u043C\u043E\u043D\u0442\u0430\u0436\u0430 \u0438 \u0441\u0432\u0435\u0434\u0435\u043D\u0438\u044F. \u0422\u0430\u043A\u0438\u0435 \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u0438\u0441\u0442\u044B \u043F\u043E\u043B\u0435\u0437\u043D\u044B \u0442\u0435\u043C, \u0447\u0442\u043E \u0434\u0435\u043B\u0430\u044E\u0442 \u0432\u0441\u0451 \u0438 \u0441\u0440\u0430\u0437\u0443. \u0422\u0430\u043A\u0438\u043C \u043E\u0431\u0440\u0430\u0437\u043E\u043C, \u0437\u0430\u0447\u0430\u0441\u0442\u0443\u044E \u0441\u043E\u0445\u0440\u0430\u043D\u044F\u0435\u0442\u0441\u044F \u0435\u0434\u0438\u043D\u0430\u044F \u043A\u043E\u043D\u0446\u0435\u043F\u0446\u0438\u044F \u0438 \u0437\u0430\u0434\u0443\u043C\u043A\u0430 \u0432\u0438\u0434\u0435\u043E. \u042D\u0442\u0438\u043C \u043E\u043D \u043E\u0442\u043B\u0438\u0447\u0430\u0435\u0442\u0441\u044F \u043E\u0442 \u043E\u043F\u0435\u0440\u0430\u0442\u043E\u0440\u0430, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u0437\u0430\u043D\u0438\u043C\u0430\u0435\u0442\u0441\u044F \u043B\u0438\u0448\u044C \u0441\u044A\u0435\u043C\u043A\u043E\u0439 \u0441\u0430\u043C\u043E\u0433\u043E \u0432\u0438\u0434\u0435\u043E \u043D\u0430 \u043F\u043B\u043E\u0449\u0430\u0434\u043A\u0435, \u0438\u043B\u0438 \u043C\u043E\u043D\u0442\u0430\u0436\u0435\u0440\u0430, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442 \u0442\u043E\u043B\u044C\u043A\u043E \u043D\u0430 \u043F\u043E\u0441\u0442\u043F\u0440\u043E\u0434\u0430\u043A\u0448\u0435\u043D\u0435.\n</div>\n<div class="d-nav__text"><b>\u0413\u0434\u0435 \u0440\u0430\u0431\u043E\u0442\u0430\u044E\u0442 \u0432\u0438\u0434\u0435\u043E\u0433\u0440\u0430\u0444\u044B</b><br>\n\u0424\u043E\u0442\u043E\u0433\u0440\u0430\u0444 \u0432\u0438\u0434\u0435\u043E\u0433\u0440\u0430\u0444 \u0432\u043E\u0441\u0442\u0440\u0435\u0431\u043E\u0432\u0430\u043D \u0432\u043E \u043C\u043D\u043E\u0433\u0438\u0445 \u0441\u0444\u0435\u0440\u0430\u0445. \u0423\u0441\u043B\u0443\u0433\u0438 \u0432\u0438\u0434\u0435\u043E\u0433\u0440\u0430\u0444\u0430 \u0438\u0449\u0443\u0442 \u0434\u043B\u044F \u0441\u044A\u0435\u043C\u043E\u043A \u043A\u043E\u043C\u043C\u0435\u0440\u0447\u0435\u0441\u043A\u0438\u0445 \u0440\u043E\u043B\u0438\u043A\u043E\u0432, \u0432\u0438\u0434\u0435\u043E\u0431\u043B\u043E\u0433\u043E\u0432, \u043F\u0440\u043E\u0435\u043A\u0442\u043E\u0432 \u0432 \u0442\u0435\u043B\u0435\u0432\u0438\u0437\u0438\u043E\u043D\u043D\u043E\u0439 \u0438 \u0438\u043D\u0442\u0435\u0440\u043D\u0435\u0442-\u0440\u0435\u043A\u043B\u0430\u043C\u0435. \u0412\u0438\u0434\u0435\u043E\u0433\u0440\u0430\u0444 \u043D\u0430 \u0441\u0432\u0430\u0434\u044C\u0431\u0443 - \u043E\u0434\u0438\u043D \u0438\u0437 \u043B\u0438\u0434\u0438\u0440\u0443\u044E\u0449\u0438\u0445 \u0437\u0430\u043F\u0440\u043E\u0441\u043E\u0432 \u0432 \u043F\u043E\u0438\u0441\u043A\u043E\u0432\u0438\u043A\u0430\u0445, \u0442\u0430\u043A\u0438\u0445 \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u0438\u0441\u0442\u043E\u0432 \u0447\u0430\u0441\u0442\u043E \u043F\u0440\u0438\u0433\u043B\u0430\u0448\u0430\u044E\u0442 \u0441\u043D\u0438\u043C\u0430\u0442\u044C \u043A\u043E\u0440\u043F\u043E\u0440\u0430\u0442\u0438\u0432\u043D\u044B\u0435 \u043C\u0435\u0440\u043E\u043F\u0440\u0438\u044F\u0442\u0438\u044F \u0438 \u0440\u0430\u0437\u043D\u044B\u0435 \u0438\u0432\u0435\u043D\u0442\u044B.\n</div>\n<div class="d-nav__text"><b>\u0413\u0434\u0435 \u043D\u0430\u0439\u0442\u0438 \u0440\u0430\u0431\u043E\u0442\u0443 \u0432\u0438\u0434\u0435\u043E\u0433\u0440\u0430\u0444\u0443</b><br>\n\u041D\u0430\u0447\u0438\u043D\u0430\u044E\u0449\u0435\u043C\u0443 \u0432\u0438\u0434\u0435\u043E\u0433\u0440\u0430\u0444\u0443 \u043C\u043E\u0436\u0435\u0442 \u0431\u044B\u0442\u044C \u0442\u0440\u0443\u0434\u043D\u043E \u043D\u0430\u0439\u0442\u0438 \u0440\u0430\u0431\u043E\u0442\u0443 \u043D\u0430 \u043F\u0435\u0440\u0432\u044B\u0445 \u043F\u043E\u0440\u0430\u0445. \u0415\u043C\u0443 \u043C\u043E\u0433\u0443\u0442 \u043F\u043E\u043C\u043E\u0447\u044C \u0441\u043E\u0446\u0438\u0430\u043B\u044C\u043D\u044B\u0435 \u0441\u0435\u0442\u0438, \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u0438\u0437\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0435 \u043F\u043E\u0440\u0442\u0430\u043B\u044B \u0438 \u0434\u043E\u0441\u043A\u0438 \u043E\u0431\u044A\u044F\u0432\u043B\u0435\u043D\u0438\u0439, \u0433\u0434\u0435 \u043E\u043D \u0441\u043C\u043E\u0436\u0435\u0442 \u0440\u0430\u0441\u0441\u043A\u0430\u0437\u0430\u0442\u044C \u043E \u0441\u0432\u043E\u0438\u0445 \u0443\u0441\u043B\u0443\u0433\u0430\u0445 \u0438 \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0438\u0442\u044C \u0438\u0445 \u043A\u043E\u043D\u043A\u0440\u0435\u0442\u043D\u043E\u043C\u0443 \u043B\u0438\u0446\u0443. \u041D\u0430 \u043D\u0430\u0448\u0435\u0439 \u043F\u043B\u043E\u0449\u0430\u0434\u043A\u0435 \u043A\u0430\u0436\u0434\u044B\u0439 \u0434\u0435\u043D\u044C \u043F\u043E\u044F\u0432\u043B\u044F\u044E\u0442\u0441\u044F \u043D\u043E\u0432\u044B\u0435 \u0432\u0430\u043A\u0430\u043D\u0441\u0438\u0438 \u0434\u043B\u044F \u0432\u0438\u0434\u0435\u043E\u0433\u0440\u0430\u0444\u043E\u0432. \u0422\u0430\u043A\u0436\u0435 \u0434\u043B\u044F \u0442\u0435\u0445, \u043A\u0442\u043E \u0438\u0449\u0435\u0442 \u0434\u0430\u043D\u043D\u044B\u0445 \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u0438\u0441\u0442\u043E\u0432, \u043D\u0430 \u041B\u0438\u043D\u043A\u043C\u044C\u044E\u0441 \u0435\u0441\u0442\u044C \u0448\u0438\u0440\u043E\u043A\u0430\u044F \u0431\u0430\u0437\u0430 \u0432\u0438\u0434\u0435\u043E\u0433\u0440\u0430\u0444\u043E\u0432, \u0432 \u043A\u043E\u0442\u043E\u0440\u043E\u0439 \u043C\u043E\u0436\u043D\u043E \u043F\u043E\u0434\u043E\u0431\u0440\u0430\u0442\u044C \u0441\u0435\u0431\u0435 \u043F\u043E\u043D\u0440\u0430\u0432\u0438\u0432\u0448\u0435\u0433\u043E\u0441\u044F \u0447\u0435\u043B\u043E\u0432\u0435\u043A\u0430, \u0434\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0435\u0433\u043E \u0432 \u043F\u043E\u0434\u0431\u043E\u0440\u043A\u0443, \u0441\u043A\u0430\u0447\u0430\u0442\u044C \u0435\u0433\u043E \u043F\u043E\u0440\u0442\u0444\u043E\u043B\u0438\u043E \u0432 PDF, \u0430 \u0442\u0430\u043A\u0436\u0435 \u0431\u044B\u0441\u0442\u0440\u043E \u0441\u0432\u044F\u0437\u0430\u0442\u044C\u0441\u044F \u0441 \u043D\u0438\u043C \u0447\u0435\u0440\u0435\u0437 \u043B\u0438\u0447\u043D\u044B\u0435 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u044F \u0438\u043B\u0438 \u0437\u0432\u043E\u043D\u043E\u043A \u043D\u0430 \u043C\u043E\u0431\u0438\u043B\u044C\u043D\u044B\u0439 \u0442\u0435\u043B\u0435\u0444\u043E\u043D.\n\u041C\u044B \u043E\u0442\u0431\u0438\u0440\u0430\u0435\u043C \u0442\u043E\u043B\u044C\u043A\u043E \u043B\u0443\u0447\u0448\u0438\u0445 \u0432\u0438\u0434\u0435\u043E\u0433\u0440\u0430\u0444\u043E\u0432, \u0443 \u043A\u043E\u0442\u043E\u0440\u044B\u0445 \u0435\u0441\u0442\u044C \u0440\u0435\u043B\u0435\u0432\u0430\u043D\u0442\u043D\u044B\u0439 \u043E\u043F\u044B\u0442 \u0440\u0430\u0431\u043E\u0442\u044B.\n</div>';

var actor = '\n<div class="d-nav__text"><b>\u041A\u0442\u043E \u0442\u0430\u043A\u043E\u0439 \u0430\u043A\u0442\u0451\u0440</b><br>\n\u042D\u0442\u043E \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u0438\u0441\u0442, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u0443\u043C\u0435\u0435\u0442 \u043F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u043E \u0438\u0441\u043F\u043E\u043B\u043D\u044F\u0442\u044C \u0440\u0430\u0437\u043B\u0438\u0447\u043D\u044B\u0435 \u0440\u043E\u043B\u0438 \u0438 \u043E\u0431\u0440\u0430\u0437\u044B \u043D\u0430 \u043A\u0430\u043C\u0435\u0440\u0443 \u0438 \u043F\u0435\u0440\u0435\u0434 \u043F\u0443\u0431\u043B\u0438\u043A\u043E\u0439. \u0410\u043A\u0442\u0451\u0440\u044B \u0438\u0433\u0440\u0430\u044E\u0442 \u0432 \u0441\u043F\u0435\u043A\u0442\u0430\u043A\u043B\u044F\u0445, \u0441\u043D\u0438\u043C\u0430\u044E\u0442\u0441\u044F \u0432 \u0444\u0438\u043B\u044C\u043C\u0430\u0445, \u0440\u0435\u043A\u043B\u0430\u043C\u043D\u044B\u0445 \u0440\u043E\u043B\u0438\u043A\u0430\u0445 \u0438 \u0432\u0438\u0434\u0435\u043E\u043A\u043B\u0438\u043F\u0430\u0445.\n\u0420\u0430\u0431\u043E\u0442\u0430 \u0430\u043A\u0442\u0435\u0440\u043E\u043C \u043D\u0435 \u0442\u0430\u043A \u043F\u0440\u043E\u0441\u0442\u0430, \u043A\u0430\u043A \u043A\u0430\u0436\u0435\u0442\u0441\u044F. \u0417\u0430 \u043B\u0430\u0432\u0440\u0430\u043C\u0438, \u043A\u0440\u0430\u0441\u043D\u044B\u043C\u0438 \u043A\u043E\u0432\u0440\u043E\u0432\u044B\u043C\u0438 \u0434\u043E\u0440\u043E\u0436\u043A\u0430\u043C\u0438 \u0438 \u041E\u0441\u043A\u0430\u0440\u0430\u043C\u0438 \u0437\u0430\u0447\u0430\u0441\u0442\u0443\u044E \u043F\u0440\u044F\u0447\u0435\u0442\u0441\u044F \u0442\u0438\u0442\u0430\u043D\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0442\u0440\u0443\u0434, \u043C\u043D\u043E\u0433\u043E\u043A\u0440\u0430\u0442\u043D\u044B\u0435 \u0440\u0435\u043F\u0435\u0442\u0438\u0446\u0438\u0438, \u0434\u043E\u043B\u0433\u0438\u0435 \u043E\u0436\u0438\u0434\u0430\u043D\u0438\u044F \u043D\u0430 \u043F\u0440\u043E\u0441\u043B\u0443\u0448\u0438\u0432\u0430\u043D\u0438\u044F\u0445 \u0438 \u043C\u043D\u043E\u0433\u043E\u0447\u0438\u0441\u043B\u0435\u043D\u043D\u044B\u0435 \u043E\u0442\u043A\u0430\u0437\u044B \u0432 \u0440\u043E\u043B\u0438.\n</div>\n<div class="d-nav__text"><b>\u0413\u0434\u0435 \u0440\u0430\u0431\u043E\u0442\u0430\u044E\u0442 \u0430\u043A\u0442\u0451\u0440\u044B</b><br>\n\u0410\u043D\u0438\u043C\u0430\u0442\u043E\u0440\u0430\u043C\u0438, \u0432\u0435\u0434\u0443\u0449\u0438\u043C\u0438, \u043D\u0430 \u0437\u0430\u043A\u0430\u0437\u043D\u044B\u0445 \u043C\u0435\u0440\u043E\u043F\u0440\u0438\u044F\u0442\u0438\u044F\u0445. \u0420\u0430\u0431\u043E\u0442\u0430 \u0432 \u043A\u0438\u043D\u043E \u0438\u043B\u0438 \u0432 \u0442\u0435\u0430\u0442\u0440\u0435 \u2013 \u043D\u0435 \u0435\u0434\u0438\u043D\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0435, \u0447\u0435\u043C \u043C\u043E\u0436\u0435\u0442 \u0437\u0430\u043D\u0438\u043C\u0430\u0442\u044C\u0441\u044F \u0430\u043A\u0442\u0435\u0440.\n\u041E\u043D \u043C\u043E\u0436\u0435\u0442 \u0443\u0447\u0430\u0441\u0442\u0432\u043E\u0432\u0430\u0442\u044C \u0432 \u0441\u044A\u0451\u043C\u043A\u0430\u0445 \u0440\u0435\u043A\u043B\u0430\u043C\u043D\u044B\u0445 \u0440\u043E\u043B\u0438\u043A\u043E\u0432, \u0430\u043D\u0438\u043C\u0430\u0442\u043E\u0440\u043E\u0432, \u043A\u043E\u043C\u043C\u0435\u0440\u0447\u0435\u0441\u043A\u0438\u0445 \u043F\u0440\u043E\u0435\u043A\u0442\u043E\u0432 \u0438 \u0434\u0430\u0436\u0435 \u0432 \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u0432\u0435\u0434\u0443\u0449\u0438\u0445 \u043C\u0435\u0440\u043E\u043F\u0440\u0438\u044F\u0442\u0438\u0439. \u041D\u0430\u0432\u044B\u043A\u0438 \u0430\u043A\u0442\u0435\u0440\u0441\u043A\u043E\u0433\u043E \u043C\u0430\u0441\u0442\u0435\u0440\u0441\u0442\u0432\u0430 \u043F\u043E\u043C\u043E\u0433\u0430\u044E\u0442 \u043D\u0435 \u0442\u043E\u043B\u044C\u043A\u043E \u043D\u0430 \u0441\u0446\u0435\u043D\u0435 \u0438\u043B\u0438 \u043F\u0435\u0440\u0435\u0434 \u043A\u0430\u043C\u0435\u0440\u043E\u0439, \u043E\u043D\u0438 \u0441\u043B\u0443\u0436\u0430\u0442 \u043E\u0441\u043D\u043E\u0432\u043E\u0439 \u043A\u043E\u043C\u043C\u0443\u043D\u0438\u043A\u0430\u0446\u0438\u0438 \u0441 \u043B\u044E\u0434\u044C\u043C\u0438 \u0438 \u044D\u0444\u0444\u0435\u043A\u0442\u043D\u043E\u0439 \u043F\u0440\u0435\u0437\u0435\u043D\u0442\u0430\u0446\u0438\u0435\u0439. \u041C\u043D\u043E\u0433\u0438\u0435 \u0430\u043A\u0442\u0451\u0440\u044B \u0441\u0435\u0433\u043E\u0434\u043D\u044F \u0442\u0430\u043A\u0436\u0435 \u0432\u044B\u0441\u0442\u0443\u043F\u0430\u044E\u0442 \u043A\u0430\u043A \u043F\u0440\u0438\u0433\u043B\u0430\u0448\u0435\u043D\u043D\u044B\u0435 \u0441\u043F\u0438\u043A\u0435\u0440\u044B \u043D\u0430 \u043C\u0435\u0440\u043E\u043F\u0440\u0438\u044F\u0442\u0438\u044F\u0445.\n</div>\n<div class="d-nav__text"><b>\u0413\u0434\u0435 \u043D\u0430\u0439\u0442\u0438 \u0440\u0430\u0431\u043E\u0442\u0443 \u0430\u043A\u0442\u0435\u0440\u0430\u043C</b><br>\n\u0420\u0430\u0431\u043E\u0442\u0443 \u0430\u043A\u0442\u0435\u0440\u0430\u043C \u043C\u043E\u0436\u043D\u043E \u0438\u0441\u043A\u0430\u0442\u044C \u0447\u0435\u0440\u0435\u0437 \u0430\u0433\u0435\u043D\u0442\u043E\u0432, \u0430\u043A\u0442\u0451\u0440\u0441\u043A\u043E\u0435 \u0430\u0433\u0435\u043D\u0442\u0441\u0442\u0432\u043E \u043B\u0438\u0431\u043E \u0441\u0430\u043C\u043E\u0441\u0442\u043E\u044F\u0442\u0435\u043B\u044C\u043D\u043E. \u0410\u0433\u0435\u043D\u0442\u044B \u0431\u0435\u0440\u0443\u0442 \u043A\u043E\u043C\u0438\u0441\u0441\u0438\u044E \u0437\u0430 \u0441\u0432\u043E\u044E \u0440\u0430\u0431\u043E\u0442\u0443, \u0438 \u0435\u0441\u043B\u0438 \u0443 \u0432\u0430\u0441 \u044D\u043A\u0441\u043A\u043B\u044E\u0437\u0438\u0432\u043D\u043E\u0435 \u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u0447\u0435\u0441\u0442\u0432\u043E, \u0432\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u0440\u0430\u0431\u043E\u0442\u0430\u0442\u044C \u0442\u043E\u043B\u044C\u043A\u043E \u0447\u0435\u0440\u0435\u0437 \u044D\u0442\u043E\u0433\u043E \u0430\u0433\u0435\u043D\u0442\u0430. \n\u041D\u0430\u0447\u0438\u043D\u0430\u044E\u0449\u0438\u043C \u0430\u043A\u0442\u0451\u0440\u0430\u043C \u0438\u043C\u0435\u0435\u0442 \u0441\u043C\u044B\u0441\u043B \u0438\u0441\u043A\u0430\u0442\u044C \u043D\u0430 \u0440\u0430\u043D\u043D\u0438\u0445 \u043F\u043E\u0440\u0430\u0445 \u0440\u0430\u0431\u043E\u0442\u0443 \u0441\u0430\u043C\u043E\u0441\u0442\u043E\u044F\u0442\u0435\u043B\u044C\u043D\u043E.\n\u041D\u0430 \u043D\u0430\u0448\u0435\u0439 \u043F\u043B\u043E\u0449\u0430\u0434\u043A\u0435 \u043A\u0430\u0436\u0434\u044B\u0439 \u0434\u0435\u043D\u044C \u043F\u043E\u044F\u0432\u043B\u044F\u044E\u0442\u0441\u044F \u043D\u043E\u0432\u044B\u0435 \u0432\u0430\u043A\u0430\u043D\u0441\u0438\u0438 \u0434\u043B\u044F \u0430\u043A\u0442\u0451\u0440\u043E\u0432. \u0422\u0430\u043A\u0436\u0435 \u0434\u043B\u044F \u0442\u0435\u0445, \u043A\u0442\u043E \u0438\u0449\u0435\u0442 \u0434\u0430\u043D\u043D\u044B\u0445 \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u0438\u0441\u0442\u043E\u0432, \u043D\u0430 \u041B\u0438\u043D\u043A\u043C\u044C\u044E\u0441 \u0435\u0441\u0442\u044C \u0448\u0438\u0440\u043E\u043A\u0430\u044F \u0430\u043A\u0442\u0435\u0440\u0441\u043A\u0430\u044F \u0431\u0430\u0437\u0430, \u0432 \u043A\u043E\u0442\u043E\u0440\u043E\u0439 \u043C\u043E\u0436\u043D\u043E \u043F\u043E\u0434\u043E\u0431\u0440\u0430\u0442\u044C \u0441\u0435\u0431\u0435 \u043F\u043E\u043D\u0440\u0430\u0432\u0438\u0432\u0448\u0435\u0433\u043E\u0441\u044F \u0447\u0435\u043B\u043E\u0432\u0435\u043A\u0430, \u0434\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0435\u0433\u043E \u0432 \u043F\u043E\u0434\u0431\u043E\u0440\u043A\u0443, \u0441\u043A\u0430\u0447\u0430\u0442\u044C \u0435\u0433\u043E \u043F\u043E\u0440\u0442\u0444\u043E\u043B\u0438\u043E \u0432 PDF, \u0430 \u0442\u0430\u043A\u0436\u0435 \u0431\u044B\u0441\u0442\u0440\u043E \u0441\u0432\u044F\u0437\u0430\u0442\u044C\u0441\u044F \u0441 \u043D\u0438\u043C \u0447\u0435\u0440\u0435\u0437 \u043B\u0438\u0447\u043D\u044B\u0435 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u044F \u0438\u043B\u0438 \u0437\u0432\u043E\u043D\u043E\u043A \u043D\u0430 \u043C\u043E\u0431\u0438\u043B\u044C\u043D\u044B\u0439 \u0442\u0435\u043B\u0435\u0444\u043E\u043D.\n\u041C\u044B \u043E\u0442\u0431\u0438\u0440\u0430\u0435\u043C \u0442\u043E\u043B\u044C\u043A\u043E \u043F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0430\u043A\u0442\u0435\u0440\u043E\u0432, \u0443 \u043A\u043E\u0442\u043E\u0440\u044B\u0445 \u0435\u0441\u0442\u044C \u0440\u0435\u043B\u0435\u0432\u0430\u043D\u0442\u043D\u044B\u0439 \u043E\u043F\u044B\u0442 \u0440\u0430\u0431\u043E\u0442\u044B.\n</div>';

var leading = '\n<div class="d-nav__text"><b>\u041A\u0442\u043E \u0442\u0430\u043A\u043E\u0439 \u0432\u0435\u0434\u0443\u0449\u0438\u0439</b><br>\n\u042D\u0442\u043E \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u0438\u0441\u0442, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u0443\u043C\u0435\u0435\u0442 \u043F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u043E \u0432\u0435\u0441\u0442\u0438 \u0440\u0430\u0437\u0432\u043B\u0435\u043A\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u0435 \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u044B, \u0433\u0440\u0430\u043C\u043E\u0442\u043D\u043E \u0434\u043E\u043D\u043E\u0441\u0438\u0442\u044C \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044E \u0434\u043E \u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u0438 \u0438 \u0432\u0437\u0430\u0438\u043C\u043E\u0434\u0435\u0439\u0441\u0442\u0432\u043E\u0432\u0430\u0442\u044C \u0441 \u043D\u0435\u0439 \u043D\u0430\u043F\u0440\u044F\u043C\u0443\u044E.\n\u0420\u0430\u0431\u043E\u0442\u0430 \u0432\u0435\u0434\u0443\u0449\u0438\u043C \u043F\u043E\u0434\u0440\u0430\u0437\u0443\u043C\u0435\u0432\u0430\u0435\u0442 \u043D\u0430\u043B\u0438\u0447\u0438\u0435 \u0436\u0443\u0440\u043D\u0430\u043B\u0438\u0441\u0442\u0441\u043A\u0438\u0445 \u043D\u0430\u0432\u044B\u043A\u043E\u0432, \u0443\u043C\u0435\u043D\u0438\u044F \u0440\u0430\u0431\u043E\u0442\u0430\u0442\u044C \u0441 \u0431\u043E\u043B\u044C\u0448\u0438\u043C \u043E\u0431\u044A\u0435\u043C\u043E\u043C \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u0438, \u043E\u0440\u0430\u0442\u043E\u0440\u0441\u043A\u043E\u0433\u043E \u0438 \u0434\u0430\u0436\u0435 \u0430\u043A\u0442\u0451\u0440\u0441\u043A\u043E\u0433\u043E \u043C\u0430\u0441\u0442\u0435\u0440\u0441\u0442\u0432\u0430.\n</div>\n<div class="d-nav__text"><b>\u0413\u0434\u0435 \u0440\u0430\u0431\u043E\u0442\u0430\u044E\u0442 \u0432\u0435\u0434\u0443\u0449\u0438\u0435</b><br>\n\u0412\u0435\u0434\u0443\u0449\u0438\u0435 \u0432 \u0421\u041C\u0418 \u0434\u0435\u043B\u044F\u0442\u0441\u044F \u043F\u043E \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u044F\u043C: \u0442\u0435\u043B\u0435\u0432\u0435\u0434\u0443\u0449\u0438\u0439 \u0438 \u0440\u0430\u0434\u0438\u043E\u0432\u0435\u0434\u0443\u0449\u0438\u0439. \u0414\u043B\u044F \u043F\u0435\u0440\u0432\u043E\u0439 \u0437\u0430\u0447\u0430\u0441\u0442\u0443\u044E \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u0430 \u043F\u0440\u0435\u0437\u0435\u043D\u0442\u0430\u0431\u0435\u043B\u044C\u043D\u0430\u044F \u0432\u043D\u0435\u0448\u043D\u043E\u0441\u0442\u044C \u0438 \u0443\u043C\u0435\u043D\u0438\u0435 \u043F\u043E\u0441\u0442\u0440\u043E\u0438\u0442\u044C \u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u044B\u0439 \u0432\u0438\u0437\u0443\u0430\u043B\u044C\u043D\u044B\u0439 \u043E\u0431\u0440\u0430\u0437, \u0430 \u0434\u043B\u044F \u043F\u043E\u0441\u043B\u0435\u0434\u043D\u0435\u0439 \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u044B \u0445\u043E\u0440\u043E\u0448\u0438\u0435 \u0433\u043E\u043B\u043E\u0441\u043E\u0432\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435. \u0422\u0430\u043A\u0436\u0435 \u0432\u0435\u0434\u0443\u0449\u0438\u0445 \u043F\u0440\u0438\u0433\u043B\u0430\u0448\u0430\u044E\u0442 \u0432\u0435\u0441\u0442\u0438 \u043A\u043E\u0440\u043F\u043E\u0440\u0430\u0442\u0438\u0432\u043D\u044B\u0435 \u043C\u0435\u0440\u043E\u043F\u0440\u0438\u044F\u0442\u0438\u044F \u0438 \u0440\u0430\u0437\u043B\u0438\u0447\u043D\u044B\u0435 \u0438\u0432\u0435\u043D\u0442\u044B.\n</div>\n<div class="d-nav__text"><b>\u0413\u0434\u0435 \u043D\u0430\u0439\u0442\u0438 \u0440\u0430\u0431\u043E\u0442\u0443 \u0432\u0435\u0434\u0443\u0449\u0435\u043C\u0443</b><br>\n\u041D\u0430 \u043D\u0430\u0448\u0435\u0439 \u043F\u043B\u043E\u0449\u0430\u0434\u043A\u0435 \u043A\u0430\u0436\u0434\u044B\u0439 \u0434\u0435\u043D\u044C \u043F\u043E\u044F\u0432\u043B\u044F\u044E\u0442\u0441\u044F \u043D\u043E\u0432\u044B\u0435 \u0432\u0430\u043A\u0430\u043D\u0441\u0438\u0438 \u0434\u043B\u044F \u0432\u0435\u0434\u0443\u0449\u0438\u0445. \u0422\u0430\u043A\u0436\u0435 \u0434\u043B\u044F \u0442\u0435\u0445, \u043A\u0442\u043E \u0438\u0449\u0435\u0442 \u0434\u0430\u043D\u043D\u044B\u0445 \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u0438\u0441\u0442\u043E\u0432, \u043D\u0430 \u041B\u0438\u043D\u043A\u043C\u044C\u044E\u0441 \u0435\u0441\u0442\u044C \u0448\u0438\u0440\u043E\u043A\u0430\u044F \u0431\u0430\u0437\u0430 \u0432\u0435\u0434\u0443\u0449\u0438\u0445, \u0432 \u043A\u043E\u0442\u043E\u0440\u043E\u0439 \u043C\u043E\u0436\u043D\u043E \u043F\u043E\u0434\u043E\u0431\u0440\u0430\u0442\u044C \u0441\u0435\u0431\u0435 \u043F\u043E\u043D\u0440\u0430\u0432\u0438\u0432\u0448\u0435\u0433\u043E\u0441\u044F \u0447\u0435\u043B\u043E\u0432\u0435\u043A\u0430, \u0434\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0435\u0433\u043E \u0432 \u043F\u043E\u0434\u0431\u043E\u0440\u043A\u0443, \u0441\u043A\u0430\u0447\u0430\u0442\u044C \u0435\u0433\u043E \u043F\u043E\u0440\u0442\u0444\u043E\u043B\u0438\u043E \u0432 PDF, \u0430 \u0442\u0430\u043A\u0436\u0435 \u0431\u044B\u0441\u0442\u0440\u043E \u0441\u0432\u044F\u0437\u0430\u0442\u044C\u0441\u044F \u0441 \u043D\u0438\u043C \u0447\u0435\u0440\u0435\u0437 \u043B\u0438\u0447\u043D\u044B\u0435 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u044F \u0438\u043B\u0438 \u0437\u0432\u043E\u043D\u043E\u043A \u043D\u0430 \u043C\u043E\u0431\u0438\u043B\u044C\u043D\u044B\u0439 \u0442\u0435\u043B\u0435\u0444\u043E\u043D.\n\u041C\u044B \u043E\u0442\u0431\u0438\u0440\u0430\u0435\u043C \u0442\u043E\u043B\u044C\u043A\u043E \u043B\u0443\u0447\u0448\u0438\u0445 \u0432\u0435\u0434\u0443\u0449\u0438\u0445, \u0443 \u043A\u043E\u0442\u043E\u0440\u044B\u0445 \u0435\u0441\u0442\u044C \u0440\u0435\u043B\u0435\u0432\u0430\u043D\u0442\u043D\u044B\u0439 \u043E\u043F\u044B\u0442 \u0440\u0430\u0431\u043E\u0442\u044B.\n</div>';

var musician = '\n<div class="d-nav__text"><b>\u041A\u0442\u043E \u0442\u0430\u043A\u043E\u0439 \u043C\u0443\u0437\u044B\u043A\u0430\u043D\u0442</b><br>\n\u042D\u0442\u043E \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u0438\u0441\u0442 \u0432 \u043E\u0431\u043B\u0430\u0441\u0442\u0438 \u043C\u0443\u0437\u044B\u043A\u0438. \u0420\u0430\u0431\u043E\u0442\u0430 \u043C\u0443\u0437\u044B\u043A\u0430\u043D\u0442\u043E\u043C \u043F\u043E\u0434\u0440\u0430\u0437\u0443\u043C\u0435\u0432\u0430\u0435\u0442 \u043F\u043E\u043B\u043D\u044B\u0439 \u0446\u0438\u043A\u043B \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u044F \u043C\u0443\u0437\u044B\u043A\u0430\u043B\u044C\u043D\u043E\u0433\u043E \u043F\u0440\u043E\u0438\u0437\u0432\u0435\u0434\u0435\u043D\u0438\u044F \u043E\u0442 \u0435\u0433\u043E \u043D\u0430\u0447\u0430\u043B\u044C\u043D\u043E\u0439 \u0437\u0430\u0434\u0443\u043C\u043A\u0438 \u0434\u043E \u0444\u0438\u043D\u0430\u043B\u044C\u043D\u043E\u0433\u043E \u0438\u0441\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044F. \u041F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0439 \u043C\u0443\u0437\u044B\u043A\u0430\u043D\u0442 \u0432\u043B\u0430\u0434\u0435\u0435\u0442 \u0432\u043E\u043A\u0430\u043B\u043E\u043C \u0438\u043B\u0438 \u0438\u0433\u0440\u043E\u0439 \u043D\u0430 \u0440\u0430\u0437\u043D\u044B\u0445 \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u0430\u0445, \u0430 \u0442\u0430\u043A\u0436\u0435 \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u044C\u043D\u044B\u043C\u0438 \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0430\u043C\u0438 \u0434\u043B\u044F \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u044F \u043C\u0443\u0437\u044B\u043A\u0438.\n</div>\n<div class="d-nav__text"><b>\u0413\u0434\u0435 \u0440\u0430\u0431\u043E\u0442\u0430\u044E\u0442 \u043C\u0443\u0437\u044B\u043A\u0430\u043D\u0442\u044B \u0438 \u043C\u0443\u0437\u044B\u043A\u0430\u043B\u044C\u043D\u044B\u0435 \u0433\u0440\u0443\u043F\u043F\u044B</b><br>\n\u041C\u0443\u0437\u044B\u043A\u0430\u043D\u0442\u044B \u0438 \u043C\u0443\u0437\u044B\u043A\u0430\u043B\u044C\u043D\u044B\u0435 \u0433\u0440\u0443\u043F\u043F\u044B \u0432 \u043E\u0441\u043D\u043E\u0432\u043D\u043E\u043C \u0432\u044B\u0431\u0438\u0440\u0430\u044E\u0442 \u043B\u0438\u0447\u043D\u043E\u0435 \u0440\u0430\u0437\u0432\u0438\u0442\u0438\u0435 \u0438 \u043F\u0440\u043E\u0434\u0432\u0438\u0436\u0435\u043D\u0438\u0435 \u0447\u0435\u0440\u0435\u0437 \u043A\u043E\u043D\u0446\u0435\u0440\u0442\u043D\u0443\u044E \u0434\u0435\u044F\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u044C, \u043F\u0440\u043E\u0434\u0430\u0436\u0443 \u0441\u043E\u0431\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0445 \u0430\u043B\u044C\u0431\u043E\u043C\u043E\u0432, \u0441\u0438\u043D\u0433\u043B\u043E\u0432, \u043C\u0435\u0440\u0447\u0430 \u0438 \u043F\u0440\u043E\u0434\u0443\u043A\u0446\u0438\u0438, \u0441\u0432\u044F\u0437\u0430\u043D\u043D\u043E\u0439 \u0441 \u0431\u0440\u0435\u043D\u0434\u043E\u043C \u043C\u0443\u0437\u044B\u043A\u0430\u043B\u044C\u043D\u043E\u0433\u043E \u0438\u0441\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044F. \u041D\u043E \u0442\u0430\u043A\u0436\u0435 \u043C\u0443\u0437\u044B\u043A\u0430\u043D\u0442\u0430\u043C \u043C\u043E\u0433\u0443\u0442 \u043F\u043E\u0441\u0442\u0443\u043F\u0430\u0442\u044C \u0437\u0430\u043A\u0430\u0437\u044B \u043D\u0430 \u0432\u044B\u0441\u0442\u0443\u043F\u043B\u0435\u043D\u0438\u044F \u043D\u0430 \u0440\u0430\u0437\u043B\u0438\u0447\u043D\u044B\u0445 \u0438\u0432\u0435\u043D\u0442\u0430\u0445, \u043A\u043E\u0440\u043F\u043E\u0440\u0430\u0442\u0438\u0432\u043D\u044B\u0445 \u043C\u0435\u0440\u043E\u043F\u0440\u0438\u044F\u0442\u0438\u044F\u0445, \u0441\u0435\u043C\u0435\u0439\u043D\u044B\u0445 \u043F\u0440\u0430\u0437\u0434\u043D\u0438\u043A\u0430\u0445. \u041D\u0435\u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u043C\u0443\u0437\u044B\u043A\u0430\u043D\u0442\u044B \u043F\u0440\u0435\u0434\u043B\u0430\u0433\u0430\u044E\u0442 \u0441\u0432\u043E\u0438 \u0443\u0441\u043B\u0443\u0433\u0438 \u043F\u043E \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u044E \u043A\u043E\u043C\u043F\u043E\u0437\u0438\u0446\u0438\u0438 \u0438\u043B\u0438 \u0437\u0430\u043F\u0438\u0441\u0438 \u0430\u0440\u0430\u043D\u0436\u0438\u0440\u043E\u0432\u043A\u0438 \u043F\u043E\u0434 \u0437\u0430\u043A\u0430\u0437. \n</div>\n<div class="d-nav__text"><b>\u0413\u0434\u0435 \u043D\u0430\u0439\u0442\u0438 \u0440\u0430\u0431\u043E\u0442\u0443 \u043C\u0443\u0437\u044B\u043A\u0430\u043D\u0442\u0443</b><br>\n\u041D\u0430 \u043D\u0430\u0448\u0435\u0439 \u043F\u043B\u043E\u0449\u0430\u0434\u043A\u0435 \u043A\u0430\u0436\u0434\u044B\u0439 \u0434\u0435\u043D\u044C \u043F\u043E\u044F\u0432\u043B\u044F\u044E\u0442\u0441\u044F \u043D\u043E\u0432\u044B\u0435 \u0432\u0430\u043A\u0430\u043D\u0441\u0438\u0438 \u0434\u043B\u044F \u043C\u0443\u0437\u044B\u043A\u0430\u043D\u0442\u043E\u0432. \u0422\u0430\u043A\u0436\u0435 \u0434\u043B\u044F \u0442\u0435\u0445, \u043A\u0442\u043E \u0438\u0449\u0435\u0442 \u0434\u0430\u043D\u043D\u044B\u0445 \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u0438\u0441\u0442\u043E\u0432, \u043D\u0430 \u041B\u0438\u043D\u043A\u043C\u044C\u044E\u0441 \u0435\u0441\u0442\u044C \u0448\u0438\u0440\u043E\u043A\u0430\u044F \u0431\u0430\u0437\u0430 \u043C\u0443\u0437\u044B\u043A\u0430\u043D\u0442\u043E\u0432, \u0432 \u043A\u043E\u0442\u043E\u0440\u043E\u0439 \u043C\u043E\u0436\u043D\u043E \u043F\u043E\u0434\u043E\u0431\u0440\u0430\u0442\u044C \u0441\u0435\u0431\u0435 \u043F\u043E\u043D\u0440\u0430\u0432\u0438\u0432\u0448\u0435\u0433\u043E\u0441\u044F \u0447\u0435\u043B\u043E\u0432\u0435\u043A\u0430, \u0434\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0435\u0433\u043E \u0432 \u043F\u043E\u0434\u0431\u043E\u0440\u043A\u0443, \u0441\u043A\u0430\u0447\u0430\u0442\u044C \u0435\u0433\u043E \u043F\u043E\u0440\u0442\u0444\u043E\u043B\u0438\u043E \u0432 PDF, \u0430 \u0442\u0430\u043A\u0436\u0435 \u0431\u044B\u0441\u0442\u0440\u043E \u0441\u0432\u044F\u0437\u0430\u0442\u044C\u0441\u044F \u0441 \u043D\u0438\u043C \u0447\u0435\u0440\u0435\u0437 \u043B\u0438\u0447\u043D\u044B\u0435 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u044F \u0438\u043B\u0438 \u0437\u0432\u043E\u043D\u043E\u043A \u043D\u0430 \u043C\u043E\u0431\u0438\u043B\u044C\u043D\u044B\u0439 \u0442\u0435\u043B\u0435\u0444\u043E\u043D.\n\u041C\u044B \u043E\u0442\u0431\u0438\u0440\u0430\u0435\u043C \u0442\u043E\u043B\u044C\u043A\u043E \u043B\u0443\u0447\u0448\u0438\u0445 \u043C\u0443\u0437\u044B\u043A\u0430\u043D\u0442\u043E\u0432, \u0443 \u043A\u043E\u0442\u043E\u0440\u044B\u0445 \u0435\u0441\u0442\u044C \u0440\u0435\u043B\u0435\u0432\u0430\u043D\u0442\u043D\u044B\u0439 \u043E\u043F\u044B\u0442 \u0440\u0430\u0431\u043E\u0442\u044B.\n</div>';

var agent = '\n<div class="d-nav__text"><b>\u041A\u0442\u043E \u0442\u0430\u043A\u043E\u0439 \u0430\u0433\u0435\u043D\u0442</b><br>\n\u042D\u0442\u043E \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u0438\u0442\u0435\u043B\u044C \u0438\u043D\u0442\u0435\u0440\u0435\u0441\u043E\u0432 \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u043D\u043E\u0439 \u0441\u0442\u043E\u0440\u043E\u043D\u044B, \u043F\u043E\u0441\u0440\u0435\u0434\u043D\u0438\u043A \u043C\u0435\u0436\u0434\u0443 \u0437\u0430\u043A\u0430\u0437\u0447\u0438\u043A\u043E\u043C \u0438 \u0438\u0441\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u0435\u043C, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u0437\u0430\u043D\u0438\u043C\u0430\u0435\u0442\u0441\u044F \u044E\u0440\u0438\u0434\u0438\u0447\u0435\u0441\u043A\u0438\u043C\u0438, \u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440\u0441\u043A\u0438\u043C\u0438 \u0438 \u0430\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u0438\u0432\u043D\u044B\u043C\u0438 \u043E\u0431\u044F\u0437\u0430\u043D\u043D\u043E\u0441\u0442\u044F\u043C\u0438. \u0422\u0430\u043A\u0436\u0435 \u043E\u043D \u043C\u043E\u0436\u0435\u0442 \u043F\u0438\u0430\u0440\u0438\u0442\u044C \u0438 \u0437\u0430\u043D\u0438\u043C\u0430\u0442\u044C\u0441\u044F \u043F\u0440\u043E\u0434\u0432\u0438\u0436\u0435\u043D\u0438\u0435\u043C \u0441\u0432\u043E\u0435\u0433\u043E \u0434\u043E\u0432\u0435\u0440\u0435\u043D\u043D\u043E\u0433\u043E \u043B\u0438\u0446\u0430. \u0420\u0430\u0431\u043E\u0442\u0430 \u0430\u0433\u0435\u043D\u0442\u043E\u0432 \u043C\u043E\u0436\u0435\u0442 \u0432\u043A\u043B\u044E\u0447\u0430\u0442\u044C \u0432 \u0441\u0435\u0431\u044F \u043F\u0440\u043E\u0432\u0435\u0434\u0435\u043D\u0438\u0435 \u043F\u0435\u0440\u0435\u0433\u043E\u0432\u043E\u0440\u043E\u0432 \u0441 \u043F\u043E\u0442\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u044B\u043C\u0438 \u0437\u0430\u043A\u0430\u0437\u0447\u0438\u043A\u0430\u043C\u0438 \u0438\u043B\u0438 \u043F\u0430\u0440\u0442\u043D\u0435\u0440\u0430\u043C\u0438, \u043E\u0444\u043E\u0440\u043C\u043B\u0435\u043D\u0438\u0435 \u043A\u043E\u043D\u0442\u0440\u0430\u043A\u0442\u043E\u0432 \u0438 \u0434\u043E\u0433\u043E\u0432\u043E\u0440\u043E\u0432, \u0430 \u0442\u0430\u043A\u0436\u0435 \u0437\u0430\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u0435 \u0444\u0438\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0441\u0434\u0435\u043B\u043E\u043A \u043D\u0430 \u0432\u0437\u0430\u0438\u043C\u043E\u0432\u044B\u0433\u043E\u0434\u043D\u044B\u0445 \u0443\u0441\u043B\u043E\u0432\u0438\u044F\u0445.\n\u0413\u0434\u0435 \u0440\u0430\u0431\u043E\u0442\u0430\u044E\u0442 \u0430\u0433\u0435\u043D\u0442\u044B\n\u0412 \u0441\u0444\u0435\u0440\u0435 \u0438\u043D\u0434\u0443\u0441\u0442\u0440\u0438\u0438 \u0440\u0430\u0437\u0432\u043B\u0435\u0447\u0435\u043D\u0438\u0439 \u0430\u0433\u0435\u043D\u0442\u044B \u043C\u043E\u0433\u0443\u0442 \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043B\u044F\u0442\u044C \u0438\u043D\u0442\u0435\u0440\u0435\u0441\u044B \u043C\u0435\u0434\u0438\u0439\u043D\u044B\u0445 \u043F\u0435\u0440\u0441\u043E\u043D, \u0448\u043E\u0443-\u043C\u0435\u043D\u043E\u0432, \u0430\u043A\u0442\u0435\u0440\u043E\u0432, \u043C\u043E\u0434\u0435\u043B\u0435\u0439, \u043C\u0443\u0437\u044B\u043A\u0430\u043D\u0442\u043E\u0432 \u0438 \u0434\u0440\u0443\u0433\u0438\u0445 \u0442\u0432\u043E\u0440\u0447\u0435\u0441\u043A\u0438\u0445 \u0438\u0441\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u0435\u0439.\n</div>\n<div class="d-nav__text"><b>\u0413\u0434\u0435 \u043D\u0430\u0439\u0442\u0438 \u0440\u0430\u0431\u043E\u0442\u0443 \u0430\u0433\u0435\u043D\u0442\u0443</b><br>\n\u041D\u0430 \u043D\u0430\u0448\u0435\u0439 \u043F\u043B\u043E\u0449\u0430\u0434\u043A\u0435 \u043A\u0430\u0436\u0434\u044B\u0439 \u0434\u0435\u043D\u044C \u043F\u043E\u044F\u0432\u043B\u044F\u044E\u0442\u0441\u044F \u043D\u043E\u0432\u044B\u0435 \u0432\u0430\u043A\u0430\u043D\u0441\u0438\u0438 \u0434\u043B\u044F \u0430\u0433\u0435\u043D\u0442\u043E\u0432. \u0422\u0430\u043A\u0436\u0435 \u0434\u043B\u044F \u0442\u0435\u0445, \u043A\u0442\u043E \u0438\u0449\u0435\u0442 \u0434\u0430\u043D\u043D\u044B\u0445 \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u0438\u0441\u0442\u043E\u0432, \u043D\u0430 \u041B\u0438\u043D\u043A\u043C\u044C\u044E\u0441 \u0435\u0441\u0442\u044C \u0448\u0438\u0440\u043E\u043A\u0430\u044F \u0431\u0430\u0437\u0430 \u0430\u0433\u0435\u043D\u0442\u043E\u0432, \u0432 \u043A\u043E\u0442\u043E\u0440\u043E\u0439 \u043C\u043E\u0436\u043D\u043E \u043F\u043E\u0434\u043E\u0431\u0440\u0430\u0442\u044C \u0441\u0435\u0431\u0435 \u043F\u043E\u043D\u0440\u0430\u0432\u0438\u0432\u0448\u0435\u0433\u043E\u0441\u044F \u0447\u0435\u043B\u043E\u0432\u0435\u043A\u0430, \u0434\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0435\u0433\u043E \u0432 \u043F\u043E\u0434\u0431\u043E\u0440\u043A\u0443, \u0441\u043A\u0430\u0447\u0430\u0442\u044C \u0435\u0433\u043E \u043F\u043E\u0440\u0442\u0444\u043E\u043B\u0438\u043E \u0432 PDF, \u0430 \u0442\u0430\u043A\u0436\u0435 \u0431\u044B\u0441\u0442\u0440\u043E \u0441\u0432\u044F\u0437\u0430\u0442\u044C\u0441\u044F \u0441 \u043D\u0438\u043C \u0447\u0435\u0440\u0435\u0437 \u043B\u0438\u0447\u043D\u044B\u0435 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u044F \u0438\u043B\u0438 \u0437\u0432\u043E\u043D\u043E\u043A \u043D\u0430 \u043C\u043E\u0431\u0438\u043B\u044C\u043D\u044B\u0439 \u0442\u0435\u043B\u0435\u0444\u043E\u043D.\n\u041C\u044B \u043E\u0442\u0431\u0438\u0440\u0430\u0435\u043C \u0442\u043E\u043B\u044C\u043A\u043E \u043B\u0443\u0447\u0448\u0438\u0445 \u0430\u0433\u0435\u043D\u0442\u043E\u0432, \u0443 \u043A\u043E\u0442\u043E\u0440\u044B\u0445 \u0435\u0441\u0442\u044C \u0440\u0435\u043B\u0435\u0432\u0430\u043D\u0442\u043D\u044B\u0439 \u043E\u043F\u044B\u0442 \u0440\u0430\u0431\u043E\u0442\u044B.\n</div>';

var castingDirector = '\n<div class="d-nav__text"><b>\u041A\u0442\u043E \u0442\u0430\u043A\u043E\u0439 \u043A\u0430\u0441\u0442\u0438\u043D\u0433-\u0434\u0438\u0440\u0435\u043A\u0442\u043E\u0440</b><br>\n\u042D\u0442\u043E \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u0438\u0441\u0442, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u0437\u0430\u043D\u0438\u043C\u0430\u0435\u0442\u0441\u044F \u043F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u043C \u043F\u043E\u0434\u0431\u043E\u0440\u043E\u043C \u0438\u0441\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u0435\u0439 \u043D\u0430 \u0440\u0430\u0437\u043B\u0438\u0447\u043D\u044B\u0435 \u043F\u0440\u043E\u0435\u043A\u0442\u044B. \u0420\u0430\u0431\u043E\u0442\u0430 \u043A\u0430\u0441\u0442\u0438\u043D\u0433-\u0434\u0438\u0440\u0435\u043A\u0442\u043E\u0440\u043E\u043C \u0432\u043A\u043B\u044E\u0447\u0430\u0435\u0442 \u0432 \u0441\u0435\u0431\u044F \u043F\u0443\u0431\u043B\u0438\u043A\u0430\u0446\u0438\u044E \u043E\u0431\u044A\u044F\u0432\u043B\u0435\u043D\u0438\u044F \u043E \u043A\u0430\u0441\u0442\u0438\u043D\u0433\u0435 \u0432 \u0441\u043E\u0446\u0438\u0430\u043B\u044C\u043D\u044B\u0445 \u0441\u0435\u0442\u044F\u0445 \u0438 \u043D\u0430 \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u0438\u0437\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0445 \u0444\u043E\u0440\u0443\u043C\u0430\u0445, \u043F\u043E\u0438\u0441\u043A\u0430 \u043F\u043E\u0434\u0445\u043E\u0434\u044F\u0449\u0438\u0445 \u043A\u0430\u043D\u0434\u0438\u0434\u0430\u0442\u043E\u0432 \u0438 \u043F\u0440\u0438\u0433\u043B\u0430\u0448\u0435\u043D\u0438\u044F \u0438\u0445 \u043D\u0430 \u043A\u0430\u0441\u0442\u0438\u043D\u0433, \u043E\u0442\u0431\u043E\u0440 \u043D\u0430\u0438\u0431\u043E\u043B\u0435\u0435 \u043F\u043E\u043D\u0440\u0430\u0432\u0438\u0432\u0448\u0438\u0445\u0441\u044F \u0438\u0441\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u0435\u0439 \u0432 \u0448\u043E\u0440\u0442-\u043B\u0438\u0441\u0442 \u0438 \u043E\u0431\u0441\u0443\u0436\u0434\u0435\u043D\u0438\u0435 \u0444\u0438\u043D\u0430\u043B\u044C\u043D\u043E\u0433\u043E \u0440\u0435\u0448\u0435\u043D\u0438\u044F \u0441 \u0437\u0430\u043A\u0430\u0437\u0447\u0438\u043A\u043E\u043C \u0438\u043B\u0438 \u0440\u0435\u0436\u0438\u0441\u0441\u0435\u0440\u043E\u043C.\n</div>\n<div class="d-nav__text"><b>\u0413\u0434\u0435 \u0440\u0430\u0431\u043E\u0442\u0430\u044E\u0442 \u043A\u0430\u0441\u0442\u0438\u043D\u0433-\u0434\u0438\u0440\u0435\u043A\u0442\u043E\u0440\u044B</b><br>\n\u041A\u0430\u0441\u0442\u0438\u043D\u0433-\u0434\u0438\u0440\u0435\u043A\u0442\u043E\u0440\u044B \u043C\u043E\u0433\u0443\u0442 \u0440\u0430\u0431\u043E\u0442\u0430\u0442\u044C \u0432 \u043A\u0438\u043D\u043E\u0438\u043D\u0434\u0443\u0441\u0442\u0440\u0438\u0438, \u043C\u043E\u0434\u0435\u043B\u044C\u043D\u043E\u0439 \u0441\u0444\u0435\u0440\u0435 \u0438\u043B\u0438 \u043F\u0440\u0438 \u0430\u0433\u0435\u043D\u0442\u0441\u0442\u0432\u0435 \u0442\u0430\u043B\u0430\u043D\u0442\u043E\u0432. \u041E\u043D\u0438 \u0437\u0430\u043D\u0438\u043C\u0430\u044E\u0442\u0441\u044F \u043F\u043E\u0434\u0431\u043E\u0440\u043E\u043C \u043B\u044E\u0434\u0435\u0439 \u0432 \u043C\u0443\u0437\u044B\u043A\u0430\u043B\u044C\u043D\u044B\u0435 \u043A\u043B\u0438\u043F\u044B, \u0444\u0438\u043B\u044C\u043C\u044B, \u0440\u0435\u043A\u043B\u0430\u043C\u043D\u044B\u0435 \u0440\u043E\u043B\u0438\u043A\u0438, \u043D\u0430 \u043F\u043E\u043A\u0430\u0437\u044B, \u0441\u044A\u0451\u043C\u043A\u0438 \u043D\u043E\u0432\u044B\u0445 \u043A\u043E\u043B\u043B\u0435\u043A\u0446\u0438\u0439 \u043E\u0434\u0435\u0436\u0434\u044B \u0438 \u043A\u043E\u043C\u043C\u0435\u0440\u0447\u0435\u0441\u043A\u0438\u0435 \u043F\u0440\u043E\u0435\u043A\u0442\u044B.\n</div>\n<div class="d-nav__text"><b>\u041A\u0430\u043A \u043D\u0430\u0439\u0442\u0438 \u043A\u0430\u0441\u0442\u0438\u043D\u0433-\u0434\u0438\u0440\u0435\u043A\u0442\u043E\u0440\u0430</b><br>\n\u0410 \u0447\u0442\u043E \u0435\u0441\u043B\u0438 \u0432\u044B \u0437\u0430\u043A\u0430\u0437\u0447\u0438\u043A \u0438 \u0432\u0430\u043C \u043D\u0443\u0436\u0435\u043D \u043A\u0430\u0441\u0442\u0438\u043D\u0433-\u0434\u0438\u0440\u0435\u043A\u0442\u043E\u0440, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u0431\u044B \u043F\u043E\u043C\u043E\u0433 \u0431\u044B\u0441\u0442\u0440\u043E \u0438 \u044D\u0444\u0444\u0435\u043A\u0442\u0438\u0432\u043D\u043E \u043D\u0430\u0439\u0442\u0438 \u043B\u044E\u0434\u0435\u0439 \u0432 \u043A\u043E\u043C\u043C\u0435\u0440\u0447\u0435\u0441\u043A\u0438\u0439 \u043F\u0440\u043E\u0435\u043A\u0442?\n\u0412 \u043D\u0430\u0448\u0435\u043C \u043A\u0430\u0442\u0430\u043B\u043E\u0433\u0435 \u0435\u0441\u0442\u044C \u0431\u043E\u043B\u044C\u0448\u043E\u0439 \u0432\u044B\u0431\u043E\u0440 \u043A\u0430\u0441\u0442\u0438\u043D\u0433-\u0434\u0438\u0440\u0435\u043A\u0442\u043E\u0440\u043E\u0432, \u0441 \u043A\u043E\u0442\u043E\u0440\u044B\u043C\u0438 \u043C\u043E\u0436\u043D\u043E \u0441\u0432\u044F\u0437\u0430\u0442\u044C\u0441\u044F \u043D\u0430\u043F\u0440\u044F\u043C\u0443\u044E, \u043F\u043E\u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C, \u043A\u0430\u043A\u0438\u0445 \u043B\u044E\u0434\u0435\u0439 \u0434\u043B\u044F \u043A\u0430\u043A\u0438\u0445 \u043F\u0440\u043E\u0435\u043A\u0442\u043E\u0432 \u043E\u043D\u0438 \u0438\u0449\u0443\u0442 \u0441\u0435\u0439\u0447\u0430\u0441\n\u0415\u0441\u043B\u0438 \u0437\u0430\u043A\u0430\u0437\u0447\u0438\u043A\u0443 \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E \u043D\u0430\u0439\u0442\u0438 \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u043D\u044B\u0445 \u043B\u044E\u0434\u0435\u0439 \u043D\u0430 \u043A\u043E\u043C\u043C\u0435\u0440\u0447\u0435\u0441\u043A\u0438\u0439 \u043F\u0440\u043E\u0435\u043A\u0442, \u0442\u043E \u043E\u043D \u043C\u043E\u0436\u0435\u0442 \u043D\u0430\u043D\u044F\u0442\u044C \u043A\u0430\u0441\u0442\u0438\u043D\u0433-\u0434\u0438\u0440\u0435\u043A\u0442\u043E\u0440\u0430 \u0438 \u0434\u0435\u043B\u0435\u0433\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0435\u043C\u0443 \u044D\u0442\u0443 \u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0441\u0442\u044C.\n\u0412 \u0441\u043B\u0443\u0447\u0430\u0435, \u0435\u0441\u043B\u0438 \u0432\u044B \u043A\u0430\u0441\u0442\u0438\u043D\u0433-\u0434\u0438\u0440\u0435\u043A\u0442\u043E\u0440 \u0438 \u0432 \u043F\u043E\u0441\u0442\u043E\u044F\u043D\u043D\u043E\u043C \u043F\u043E\u0438\u0441\u043A\u0435 \u043D\u043E\u0432\u044B\u0445 \u043B\u0438\u0446, \u043D\u0430 \u041B\u0438\u043D\u043A\u043C\u044C\u044E\u0441 \u0435\u0441\u0442\u044C \u0448\u0438\u0440\u043E\u043A\u0430\u044F \u0431\u0430\u0437\u0430 \u0441\u0430\u043C\u044B\u0445 \u0440\u0430\u0437\u043D\u044B\u0445 \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u0438\u0441\u0442\u043E\u0432, \u0430 \u0442\u0430\u043A\u0436\u0435 \u0435\u0436\u0435\u0434\u043D\u0435\u0432\u043D\u043E \u043E\u0431\u043D\u043E\u0432\u043B\u044F\u044E\u0449\u0430\u044F\u0441\u044F \u0434\u043E\u0441\u043A\u0430 \u043E\u0431\u044A\u044F\u0432\u043B\u0435\u043D\u0438\u0439, \u0433\u0434\u0435 \u0432\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u043F\u0443\u0431\u043B\u0438\u043A\u043E\u0432\u0430\u0442\u044C \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044E \u043E \u043A\u0430\u0441\u0442\u0438\u043D\u0433\u0430\u0445 \u0438 \u0431\u044B\u0441\u0442\u0440\u043E \u043F\u0440\u043E\u0441\u043C\u0430\u0442\u0440\u0438\u0432\u0430\u0442\u044C \u043E\u0442\u043A\u043B\u0438\u043A\u0438 \u0432 \u0443\u0434\u043E\u0431\u043D\u043E \u0443\u0441\u0442\u0440\u043E\u0435\u043D\u043D\u043E\u043C \u0438\u043D\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0435.\n</div>';

var directorOfPhotography = '\n<div class="d-nav__text"><b>\u041A\u0442\u043E \u0442\u0430\u043A\u043E\u0439 \u043E\u043F\u0435\u0440\u0430\u0442\u043E\u0440-\u043F\u043E\u0441\u0442\u0430\u043D\u043E\u0432\u0449\u0438\u043A</b><br>\n\u042D\u0442\u043E \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u0438\u0441\u0442, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u043E\u0442\u0432\u0435\u0447\u0430\u0435\u0442 \u0437\u0430 \u0432\u0438\u0437\u0443\u0430\u043B\u044C\u043D\u043E\u0435 \u0438\u0441\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u0435 \u0434\u043B\u044F \u0444\u0438\u043B\u044C\u043C\u0430 \u0438\u043B\u0438 \u043A\u0430\u043A\u043E\u0433\u043E-\u043B\u0438\u0431\u043E \u0432\u0438\u0434\u0435\u043E. \u0412 \u043E\u0431\u044F\u0437\u0430\u043D\u043D\u043E\u0441\u0442\u0438 \u043E\u043F\u0435\u0440\u0430\u0442\u043E\u0440\u0430 \u043F\u043E\u0441\u0442\u0430\u043D\u043E\u0432\u0449\u0438\u043A\u0430 \u0432\u0445\u043E\u0434\u0438\u0442 \u043E\u0442\u0431\u043E\u0440 \u0438 \u0441\u044A\u0451\u043C\u043A\u0430 \u043D\u0430\u0438\u0431\u043E\u043B\u0435\u0435 \u0432\u044B\u0433\u043E\u0434\u043D\u044B\u0445 \u0441\u0432\u0435\u0442\u043E\u0432\u044B\u0445, \u043A\u043E\u043C\u043F\u043E\u0437\u0438\u0446\u0438\u043E\u043D\u043D\u044B\u0445 \u0438 \u0446\u0432\u0435\u0442\u043E\u0432\u044B\u0445 \u0440\u0435\u0448\u0435\u043D\u0438\u0439 \u0434\u043B\u044F \u0432\u0438\u0434\u0435\u043E\u0440\u044F\u0434\u0430. \u041E\u0442 \u043E\u0431\u044B\u0447\u043D\u043E\u0433\u043E \u043E\u043F\u0435\u0440\u0430\u0442\u043E\u0440\u0430 \u043E\u043F\u0435\u0440\u0430\u0442\u043E\u0440\u0430 \u043F\u043E\u0441\u0442\u0430\u043D\u043E\u0432\u0449\u0438\u043A\u0430 \u043E\u0442\u043B\u0438\u0447\u0430\u0435\u0442 \u0442\u043E, \u0447\u0442\u043E \u043E\u043D \u0440\u0443\u043A\u043E\u0432\u043E\u0434\u0438\u0442 \u0432\u0441\u0435\u0439 \u043E\u043F\u0435\u0440\u0430\u0442\u043E\u0440\u0441\u043A\u043E\u0439 \u0433\u0440\u0443\u043F\u043F\u043E\u0439 \u0438 \u0430\u0441\u0441\u0438\u0441\u0442\u0435\u043D\u0442\u0430\u043C\u0438, \u043F\u0440\u0438\u043D\u0438\u043C\u0430\u044F \u043D\u0430\u0438\u0431\u043E\u043B\u0435\u0435 \u0432\u0430\u0436\u043D\u044B\u0435 \u0440\u0435\u0448\u0435\u043D\u0438\u044F \u0441 \u0440\u0435\u0436\u0438\u0441\u0441\u0435\u0440\u043E\u043C.\n</div>\n<div class="d-nav__text"><b>\u0413\u0434\u0435 \u0440\u0430\u0431\u043E\u0442\u0430\u044E\u0442 \u043E\u043F\u0435\u0440\u0430\u0442\u043E\u0440\u044B \u043F\u043E\u0441\u0442\u0430\u043D\u043E\u0432\u0449\u0438\u043A\u0438</b><br>\n\u0412\u0430\u043A\u0430\u043D\u0441\u0438\u044E \u043E\u043F\u0435\u0440\u0430\u0442\u043E\u0440\u043E\u043C \u043F\u043E\u0441\u0442\u0430\u043D\u043E\u0432\u0449\u0438\u043A\u043E\u043C \u043C\u043E\u0436\u043D\u043E \u0432\u0441\u0442\u0440\u0435\u0442\u0438\u0442\u044C \u0432 \u043A\u0438\u043D\u043E\u0438\u043D\u0434\u0443\u0441\u0442\u0440\u0438\u0438 \u0438 \u0441\u0444\u0435\u0440\u0435 \u0442\u0435\u043B\u0435\u0432\u0438\u0434\u0435\u043D\u0438\u044F, \u0434\u043B\u044F \u0441\u044A\u0435\u043C\u043E\u043A \u043A\u0430\u043A\u0438\u0445-\u043B\u0438\u0431\u043E \u0442\u0435\u043B\u0435\u043F\u0435\u0440\u0435\u0434\u0430\u0447. \u041E\u043F\u0435\u0440\u0430\u0442\u043E\u0440 \u043F\u043E\u0441\u0442\u0430\u043D\u043E\u0432\u0449\u0438\u043A \u0437\u0430\u0447\u0430\u0441\u0442\u0443\u044E \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442 \u0441 \u0443\u0436\u0435 \u0441\u043B\u043E\u0436\u0438\u0432\u0448\u0435\u0439\u0441\u044F \u043A\u043E\u043C\u0430\u043D\u0434\u043E\u0439, \u043A\u043E\u0442\u043E\u0440\u0430\u044F \u043F\u043E\u043D\u0438\u043C\u0430\u0435\u0442 \u0435\u0433\u043E \u0432\u0438\u0434\u0435\u043D\u0438\u0435 \u0438 \u0437\u043D\u0430\u0435\u0442, \u043A\u0430\u043A \u0435\u0433\u043E \u0440\u0435\u0430\u043B\u0438\u0437\u043E\u0432\u0430\u0442\u044C.\n</div>\n<div class="d-nav__text"><b>\u0413\u0434\u0435 \u043D\u0430\u0439\u0442\u0438 \u0440\u0430\u0431\u043E\u0442\u0443 \u043E\u043F\u0435\u0440\u0430\u0442\u043E\u0440\u0443 \u043F\u043E\u0441\u0442\u0430\u043D\u043E\u0432\u0449\u0438\u043A\u0443</b><br>\n\u041D\u0430 \u043D\u0430\u0448\u0435\u0439 \u043F\u043B\u043E\u0449\u0430\u0434\u043A\u0435 \u043A\u0430\u0436\u0434\u044B\u0439 \u0434\u0435\u043D\u044C \u043F\u043E\u044F\u0432\u043B\u044F\u044E\u0442\u0441\u044F \u043D\u043E\u0432\u044B\u0435 \u0432\u0430\u043A\u0430\u043D\u0441\u0438\u0438 \u0434\u043B\u044F \u043E\u043F\u0435\u0440\u0430\u0442\u043E\u0440\u043E\u0432 \u043F\u043E\u0441\u0442\u0430\u043D\u043E\u0432\u0449\u0438\u043A\u043E\u0432. \u0422\u0430\u043A\u0436\u0435 \u0434\u043B\u044F \u0442\u0435\u0445, \u043A\u0442\u043E \u0438\u0449\u0435\u0442 \u0434\u0430\u043D\u043D\u044B\u0445 \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u0438\u0441\u0442\u043E\u0432, \u043D\u0430 \u041B\u0438\u043D\u043A\u043C\u044C\u044E\u0441 \u0435\u0441\u0442\u044C \u0448\u0438\u0440\u043E\u043A\u0430\u044F \u0431\u0430\u0437\u0430 \u043E\u043F\u0435\u0440\u0430\u0442\u043E\u0440\u043E\u0432, \u0432 \u043A\u043E\u0442\u043E\u0440\u043E\u0439 \u043C\u043E\u0436\u043D\u043E \u043F\u043E\u0434\u043E\u0431\u0440\u0430\u0442\u044C \u0441\u0435\u0431\u0435 \u043F\u043E\u043D\u0440\u0430\u0432\u0438\u0432\u0448\u0435\u0433\u043E\u0441\u044F \u0447\u0435\u043B\u043E\u0432\u0435\u043A\u0430, \u0434\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0435\u0433\u043E \u0432 \u043F\u043E\u0434\u0431\u043E\u0440\u043A\u0443, \u0441\u043A\u0430\u0447\u0430\u0442\u044C \u0435\u0433\u043E \u043F\u043E\u0440\u0442\u0444\u043E\u043B\u0438\u043E \u0432 PDF, \u0430 \u0442\u0430\u043A\u0436\u0435 \u0431\u044B\u0441\u0442\u0440\u043E \u0441\u0432\u044F\u0437\u0430\u0442\u044C\u0441\u044F \u0441 \u043D\u0438\u043C \u0447\u0435\u0440\u0435\u0437 \u043B\u0438\u0447\u043D\u044B\u0435 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u044F \u0438\u043B\u0438 \u0437\u0432\u043E\u043D\u043E\u043A \u043D\u0430 \u043C\u043E\u0431\u0438\u043B\u044C\u043D\u044B\u0439 \u0442\u0435\u043B\u0435\u0444\u043E\u043D.\n\u041C\u044B \u043E\u0442\u0431\u0438\u0440\u0430\u0435\u043C \u0442\u043E\u043B\u044C\u043A\u043E \u043B\u0443\u0447\u0448\u0438\u0445 \u043E\u043F\u0435\u0440\u0430\u0442\u043E\u0440\u043E\u0432 \u043F\u043E\u0441\u0442\u0430\u043D\u043E\u0432\u0449\u0438\u043A\u043E\u0432, \u0443 \u043A\u043E\u0442\u043E\u0440\u044B\u0445 \u0435\u0441\u0442\u044C \u0440\u0435\u043B\u0435\u0432\u0430\u043D\u0442\u043D\u044B\u0439 \u043E\u043F\u044B\u0442 \u0440\u0430\u0431\u043E\u0442\u044B.\n</div>';

var stageDirector = '\n<div class="d-nav__text"><b>\u0420\u0435\u0436\u0438\u0441\u0441\u0435\u0440 \u043F\u043E\u0441\u0442\u0430\u043D\u043E\u0432\u0449\u0438\u043A \u2013 \u043A\u0442\u043E \u044D\u0442\u043E</b><br>\n\u042D\u0442\u043E \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u0438\u0441\u0442, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u0440\u0443\u043A\u043E\u0432\u043E\u0434\u0438\u0442 \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u0435\u043C \u0442\u0432\u043E\u0440\u0447\u0435\u0441\u043A\u043E\u0433\u043E \u043F\u0440\u043E\u0435\u043A\u0442\u0430: \u0441\u043F\u0435\u043A\u0442\u0430\u043A\u043B\u044F, \u0448\u043E\u0443 \u0438\u043B\u0438 \u0444\u0438\u043B\u044C\u043C\u0430. \u0420\u0430\u0431\u043E\u0442\u0430 \u0440\u0435\u0436\u0438\u0441\u0441\u0435\u0440\u043E\u043C \u043F\u043E\u0441\u0442\u0430\u043D\u043E\u0432\u0449\u0438\u043A\u043E\u043C \u0441\u043E\u0441\u0442\u043E\u0438\u0442 \u0432 \u0442\u043E\u043C, \u0447\u0442\u043E\u0431\u044B \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u043E\u0432\u0430\u0442\u044C \u043F\u043E\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0443 \u0438 \u043B\u044E\u0434\u0435\u0439 \u0432 \u043D\u0435\u0439. \u0420\u0435\u0436\u0438\u0441\u0441\u0435\u0440-\u043F\u043E\u0441\u0442\u0430\u043D\u043E\u0432\u0449\u0438\u043A \u2013 \u044D\u0442\u043E \u0441\u0432\u044F\u0437\u0443\u044E\u0449\u0435\u0435 \u0437\u0432\u0435\u043D\u043E \u0432 \u043A\u043E\u043C\u0430\u043D\u0434\u0435: \u043E\u043D \u043F\u043E\u043C\u043E\u0433\u0430\u0435\u0442 \u0432\u044B\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u0442\u044C \u043A\u043E\u043C\u043C\u0443\u043D\u0438\u043A\u0430\u0446\u0438\u0438 \u043C\u0435\u0436\u0434\u0443 \u0430\u043A\u0442\u0435\u0440\u0430\u043C\u0438, \u043E\u043F\u0435\u0440\u0430\u0442\u043E\u0440\u0430\u043C\u0438, \u0445\u0443\u0434\u043E\u0436\u043D\u0438\u043A\u0430\u043C\u0438, \u0442\u0435\u0445\u043D\u0438\u0447\u0435\u0441\u043A\u0438\u043C\u0438 \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u0438\u0441\u0442\u0430\u043C\u0438 \u0438 \u0434\u0440\u0443\u0433\u0438\u043C\u0438 \u0443\u0447\u0430\u0441\u0442\u043D\u0438\u043A\u0430\u043C\u0438 \u043A\u043E\u043C\u0430\u043D\u0434\u044B.\n</div>\n<div class="d-nav__text"><b>\u0413\u0434\u0435 \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442 \u0440\u0435\u0436\u0438\u0441\u0441\u0435\u0440 \u043F\u043E\u0441\u0442\u0430\u043D\u043E\u0432\u0449\u0438\u043A</b><br>\n\u0412\u0430\u043A\u0430\u043D\u0441\u0438\u044E \u0440\u0435\u0436\u0438\u0441\u0441\u0435\u0440\u0430 \u043F\u043E\u0441\u0442\u0430\u043D\u043E\u0432\u0449\u0438\u043A\u0430 \u043C\u043E\u0436\u043D\u043E \u0432\u0441\u0442\u0440\u0435\u0442\u0438\u0442\u044C \u0432 \u0441\u0444\u0435\u0440\u0435 \u043A\u0438\u043D\u043E, \u0442\u0435\u0430\u0442\u0440\u0430, \u0442\u0435\u043B\u0435\u0432\u0438\u0437\u0438\u043E\u043D\u043D\u044B\u0445 \u043F\u0440\u043E\u0435\u043A\u0442\u043E\u0432 \u0438 \u0446\u0438\u0440\u043A\u043E\u0432\u044B\u0445 \u0432\u044B\u0441\u0442\u0443\u043F\u043B\u0435\u043D\u0438\u0439. \u0412 \u0437\u0430\u0432\u0438\u0441\u0438\u043C\u043E\u0441\u0442\u0438 \u043E\u0442 \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u0438, \u043C\u043D\u043E\u0433\u0438\u0435 \u0440\u0435\u0436\u0438\u0441\u0441\u0435\u0440\u044B \u043F\u043E\u0441\u0442\u0430\u043D\u043E\u0432\u0449\u0438\u043A\u0438 \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u0440\u0435\u0430\u043B\u0438\u0437\u0443\u044E\u0442 \u0441\u0435\u0431\u044F \u0438 \u0432 \u0434\u0440\u0443\u0433\u0438\u0445 \u043E\u0431\u043B\u0430\u0441\u0442\u044F\u0445, \u0433\u0434\u0435 \u043D\u0443\u0436\u043D\u044B \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0442\u043E\u0440\u0441\u043A\u0438\u0435 \u043D\u0430\u0432\u044B\u043A\u0438.\n</div>\n<div class="d-nav__text"><b>\u0413\u0434\u0435 \u043D\u0430\u0439\u0442\u0438 \u0440\u0430\u0431\u043E\u0442\u0443 \u0440\u0435\u0436\u0438\u0441\u0441\u0435\u0440\u0443 \u043F\u043E\u0441\u0442\u0430\u043D\u043E\u0432\u0449\u0438\u043A\u0443</b><br>\n\u041D\u0430 \u043D\u0430\u0448\u0435\u0439 \u043F\u043B\u043E\u0449\u0430\u0434\u043A\u0435 \u043A\u0430\u0436\u0434\u044B\u0439 \u0434\u0435\u043D\u044C \u043F\u043E\u044F\u0432\u043B\u044F\u044E\u0442\u0441\u044F \u043D\u043E\u0432\u044B\u0435 \u0432\u0430\u043A\u0430\u043D\u0441\u0438\u0438 \u0434\u043B\u044F \u0440\u0435\u0436\u0438\u0441\u0441\u0435\u0440\u043E\u0432 \u043F\u043E\u0441\u0442\u0430\u043D\u043E\u0432\u0449\u0438\u043A\u043E\u0432. \u0422\u0430\u043A\u0436\u0435 \u0434\u043B\u044F \u0442\u0435\u0445, \u043A\u0442\u043E \u0438\u0449\u0435\u0442 \u0434\u0430\u043D\u043D\u044B\u0445 \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u0438\u0441\u0442\u043E\u0432, \u043D\u0430 \u041B\u0438\u043D\u043A\u043C\u044C\u044E\u0441 \u0435\u0441\u0442\u044C \u0448\u0438\u0440\u043E\u043A\u0430\u044F \u0431\u0430\u0437\u0430 \u0440\u0435\u0436\u0438\u0441\u0441\u0435\u0440\u043E\u0432, \u0432 \u043A\u043E\u0442\u043E\u0440\u043E\u0439 \u043C\u043E\u0436\u043D\u043E \u043F\u043E\u0434\u043E\u0431\u0440\u0430\u0442\u044C \u0441\u0435\u0431\u0435 \u043F\u043E\u043D\u0440\u0430\u0432\u0438\u0432\u0448\u0435\u0433\u043E\u0441\u044F \u0447\u0435\u043B\u043E\u0432\u0435\u043A\u0430, \u0434\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0435\u0433\u043E \u0432 \u043F\u043E\u0434\u0431\u043E\u0440\u043A\u0443, \u0441\u043A\u0430\u0447\u0430\u0442\u044C \u0435\u0433\u043E \u043F\u043E\u0440\u0442\u0444\u043E\u043B\u0438\u043E \u0432 PDF, \u0430 \u0442\u0430\u043A\u0436\u0435 \u0431\u044B\u0441\u0442\u0440\u043E \u0441\u0432\u044F\u0437\u0430\u0442\u044C\u0441\u044F \u0441 \u043D\u0438\u043C \u0447\u0435\u0440\u0435\u0437 \u043B\u0438\u0447\u043D\u044B\u0435 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u044F \u0438\u043B\u0438 \u0437\u0432\u043E\u043D\u043E\u043A \u043D\u0430 \u043C\u043E\u0431\u0438\u043B\u044C\u043D\u044B\u0439 \u0442\u0435\u043B\u0435\u0444\u043E\u043D.\n\u041C\u044B \u043E\u0442\u0431\u0438\u0440\u0430\u0435\u043C \u0442\u043E\u043B\u044C\u043A\u043E \u043F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0440\u0435\u0436\u0438\u0441\u0441\u0435\u0440\u043E\u0432 \u043F\u043E\u0441\u0442\u0430\u043D\u043E\u0432\u0449\u0438\u043A\u043E\u0432, \u0443 \u043A\u043E\u0442\u043E\u0440\u044B\u0445 \u0435\u0441\u0442\u044C \u0440\u0435\u043B\u0435\u0432\u0430\u043D\u0442\u043D\u044B\u0439 \u043E\u043F\u044B\u0442 \u0440\u0430\u0431\u043E\u0442\u044B.\n</div>';

var dresser = '\n<div class="d-nav__text"><b>\u041A\u0442\u043E \u0442\u0430\u043A\u043E\u0439 \u043A\u043E\u0441\u0442\u044E\u043C\u0435\u0440</b><br>\n\u042D\u0442\u043E \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u0438\u0441\u0442, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u043E\u0442\u0432\u0435\u0447\u0430\u0435\u0442 \u0437\u0430 \u043A\u043E\u0441\u0442\u044E\u043C\u044B \u0432 \u0442\u0435\u0430\u0442\u0440\u0435, \u043A\u0438\u043D\u043E\u0441\u0442\u0443\u0434\u0438\u0438 \u0438 \u043F\u043E\u0434\u0433\u043E\u0442\u0430\u0432\u043B\u0438\u0432\u0430\u0435\u0442 \u043A\u043E\u0441\u0442\u044E\u043C\u044B \u0434\u043B\u044F \u0432\u044B\u0441\u0442\u0443\u043F\u043B\u0435\u043D\u0438\u0439 \u043D\u0430 \u0441\u0446\u0435\u043D\u0435 \u0438 \u0441\u044A\u0435\u043C\u043E\u043A.\n\u0420\u0430\u0431\u043E\u0442\u0430 \u043A\u043E\u0441\u0442\u044E\u043C\u0435\u0440\u043E\u043C \u043F\u043E\u0434\u0440\u0430\u0437\u0443\u043C\u0435\u0432\u0430\u0435\u0442 \u0433\u043B\u0443\u0431\u043E\u043A\u0438\u0435 \u0437\u043D\u0430\u043D\u0438\u044F \u0432 \u043E\u0431\u043B\u0430\u0441\u0442\u0438 \u043C\u043E\u0434\u044B, \u0438\u0441\u0442\u043E\u0440\u0438\u0447\u0435\u0441\u043A\u043E\u0433\u043E \u0438 \u0441\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u043E\u0433\u043E \u043A\u043E\u0441\u0442\u044E\u043C\u0430. \u041E\u043D \u0434\u043E\u043B\u0436\u0435\u043D \u0437\u043D\u0430\u0442\u044C \u043F\u043E\u0440\u044F\u0434\u043E\u043A \u0445\u0440\u0430\u043D\u0435\u043D\u0438\u044F \u043A\u043E\u0441\u0442\u044E\u043C\u0430 \u0438 \u0443\u0445\u043E\u0434\u0430 \u0437\u0430 \u043D\u0438\u043C, \u0432\u044B\u043F\u043E\u043B\u043D\u044F\u0442\u044C \u043C\u0435\u043B\u043A\u0438\u0439 \u0440\u0435\u043C\u043E\u043D\u0442, \u0433\u043B\u0430\u0436\u043A\u0443 \u0438 \u0447\u0438\u0441\u0442\u043A\u0443 \u0432\u0435\u0449\u0438, \u0447\u0442\u043E\u0431\u044B \u043E\u043D\u0430 \u0441\u043E\u0445\u0440\u0430\u043D\u044F\u043B\u0430 \u0441\u0432\u043E\u0439 \u043B\u0443\u0447\u0448\u0438\u0439 \u0432\u0438\u0434.\n</div>\n<div class="d-nav__text"><b>\u0413\u0434\u0435 \u0440\u0430\u0431\u043E\u0442\u0430\u044E\u0442 \u043A\u043E\u0441\u0442\u044E\u043C\u0435\u0440\u044B</b><br>\n\u0412\u0430\u043A\u0430\u043D\u0441\u0438\u044E \u043A\u043E\u0441\u0442\u044E\u043C\u0435\u0440\u043E\u043C \u0447\u0430\u0441\u0442\u043E \u043C\u043E\u0436\u043D\u043E \u0432\u0441\u0442\u0440\u0435\u0442\u0438\u0442\u044C \u0432 \u0441\u0444\u0435\u0440\u0435 \u0442\u0435\u0430\u0442\u0440\u0430, \u043A\u0438\u043D\u043E, \u0438\u043D\u0434\u0443\u0441\u0442\u0440\u0438\u0438 \u0440\u0430\u0437\u0432\u043B\u0435\u0447\u0435\u043D\u0438\u0439 \u0438 \u043C\u0435\u0434\u0438\u0430. \u0422\u0435\u0430\u0442\u0440\u0430\u043B\u044C\u043D\u044B\u0439 \u043A\u043E\u0441\u0442\u044E\u043C\u0435\u0440 \u0437\u0430\u043D\u0438\u043C\u0430\u0435\u0442\u0441\u044F \u0445\u0440\u0430\u043D\u0435\u043D\u0438\u0435\u043C \u0438 \u043F\u043E\u0434\u0433\u043E\u0442\u043E\u0432\u043A\u043E\u0439 \u043A\u043E\u0441\u0442\u044E\u043C\u043E\u0432 \u0434\u043B\u044F \u0430\u043A\u0442\u0451\u0440\u043E\u0432 \u0441\u043F\u0435\u043A\u0442\u0430\u043A\u043B\u044F. \u041A\u043E\u0441\u0442\u044E\u043C\u0435\u0440\u044B \u0432 \u043A\u0438\u043D\u043E\u0441\u0442\u0443\u0434\u0438\u0438 \u043E\u0442\u0432\u0435\u0447\u0430\u044E\u0442 \u0437\u0430 \u043A\u043E\u0441\u0442\u044E\u043C\u044B \u0438 \u0440\u0435\u043A\u0432\u0438\u0437\u0438\u0442 \u0434\u043B\u044F \u0441\u044A\u0451\u043C\u043E\u043A \u0444\u0438\u043B\u044C\u043C\u043E\u0432. \u0422\u0430\u043A\u0436\u0435 \u043A\u043E\u0441\u0442\u044E\u043C\u0435\u0440 \u043C\u043E\u0436\u0435\u0442 \u0441\u043E\u0441\u0442\u043E\u044F\u0442\u044C \u0432 \u0441\u043E\u0441\u0442\u0430\u0432\u0435 \u043A\u043E\u043C\u0430\u043D\u0434\u044B \u043A\u0430\u043A\u043E\u0433\u043E-\u043B\u0438\u0431\u043E \u043F\u0443\u0431\u043B\u0438\u0447\u043D\u043E\u0433\u043E \u0434\u0435\u044F\u0442\u0435\u043B\u044F \u0438\u043B\u0438 \u043C\u0443\u0437\u044B\u043A\u0430\u043B\u044C\u043D\u043E\u0439 \u0433\u0440\u0443\u043F\u043F\u044B \u0438 \u0441\u043E\u043F\u0440\u043E\u0432\u043E\u0436\u0434\u0430\u0442\u044C \u0435\u0451 \u043D\u0430 \u0432\u0441\u0435\u0445 \u0432\u044B\u0441\u0442\u0443\u043F\u043B\u0435\u043D\u0438\u044F\u0445 \u0438 \u0433\u0430\u0441\u0442\u0440\u043E\u043B\u044F\u0445.\n</div>\n<div class="d-nav__text"><b>\u041A\u0430\u043A \u043D\u0430\u0439\u0442\u0438 \u0440\u0430\u0431\u043E\u0442\u0443</b><br>\n\u041D\u0430 \u043D\u0430\u0448\u0435\u0439 \u043F\u043B\u043E\u0449\u0430\u0434\u043A\u0435 \u043A\u0430\u0436\u0434\u044B\u0439 \u0434\u0435\u043D\u044C \u043F\u043E\u044F\u0432\u043B\u044F\u044E\u0442\u0441\u044F \u043D\u043E\u0432\u044B\u0435 \u0432\u0430\u043A\u0430\u043D\u0441\u0438\u0438 \u0434\u043B\u044F \u043A\u043E\u0441\u0442\u044E\u043C\u0435\u0440\u043E\u0432. \u0422\u0430\u043A\u0436\u0435 \u0434\u043B\u044F \u0442\u0435\u0445, \u043A\u0442\u043E \u0438\u0449\u0435\u0442 \u0434\u0430\u043D\u043D\u044B\u0445 \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u0438\u0441\u0442\u043E\u0432, \u043D\u0430 \u041B\u0438\u043D\u043A\u043C\u044C\u044E\u0441 \u0435\u0441\u0442\u044C \u0448\u0438\u0440\u043E\u043A\u0430\u044F \u0431\u0430\u0437\u0430 \u043A\u043E\u0441\u0442\u044E\u043C\u0435\u0440\u043E\u0432, \u0432 \u043A\u043E\u0442\u043E\u0440\u043E\u0439 \u043C\u043E\u0436\u043D\u043E \u043F\u043E\u0434\u043E\u0431\u0440\u0430\u0442\u044C \u0441\u0435\u0431\u0435 \u043F\u043E\u043D\u0440\u0430\u0432\u0438\u0432\u0448\u0435\u0433\u043E\u0441\u044F \u0447\u0435\u043B\u043E\u0432\u0435\u043A\u0430, \u0434\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0435\u0433\u043E \u0432 \u043F\u043E\u0434\u0431\u043E\u0440\u043A\u0443, \u0441\u043A\u0430\u0447\u0430\u0442\u044C \u0435\u0433\u043E \u043F\u043E\u0440\u0442\u0444\u043E\u043B\u0438\u043E \u0432 PDF, \u0430 \u0442\u0430\u043A\u0436\u0435 \u0431\u044B\u0441\u0442\u0440\u043E \u0441\u0432\u044F\u0437\u0430\u0442\u044C\u0441\u044F \u0441 \u043D\u0438\u043C \u0447\u0435\u0440\u0435\u0437 \u043B\u0438\u0447\u043D\u044B\u0435 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u044F \u0438\u043B\u0438 \u0437\u0432\u043E\u043D\u043E\u043A \u043D\u0430 \u043C\u043E\u0431\u0438\u043B\u044C\u043D\u044B\u0439 \u0442\u0435\u043B\u0435\u0444\u043E\u043D.\n\u041C\u044B \u043E\u0442\u0431\u0438\u0440\u0430\u0435\u043C \u0442\u043E\u043B\u044C\u043A\u043E \u043B\u0443\u0447\u0448\u0438\u0445 \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u0438\u0441\u0442\u043E\u0432 \u043A\u043E\u0441\u0442\u044E\u043C\u0435\u0440\u043E\u0432, \u0443 \u043A\u043E\u0442\u043E\u0440\u044B\u0445 \u0435\u0441\u0442\u044C \u0440\u0435\u043B\u0435\u0432\u0430\u043D\u0442\u043D\u044B\u0439 \u043E\u043F\u044B\u0442 \u0440\u0430\u0431\u043E\u0442\u044B.\n</div>';

var mounting = '\n<div class="d-nav__text"><b>\u041A\u0442\u043E \u0442\u0430\u043A\u043E\u0439 \u043C\u043E\u043D\u0442\u0430\u0436\u0435\u0440</b><br>\n\u042D\u0442\u043E \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u0438\u0441\u0442, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u0437\u0430\u043D\u0438\u043C\u0430\u0435\u0442\u0441\u044F \u043F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u043C \u0441\u0432\u0435\u0434\u0435\u043D\u0438\u0435\u043C \u0438 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u043E\u0439 \u043E\u0442\u0434\u0435\u043B\u044C\u043D\u044B\u0445 \u0432\u0438\u0434\u0435\u043E\u0444\u0440\u0430\u0433\u043C\u0435\u043D\u0442\u043E\u0432 \u0432 \u0435\u0434\u0438\u043D\u044B\u0439 \u0432\u0438\u0434\u0435\u043E\u0440\u043E\u043B\u0438\u043A. \u0412\u0438\u0434\u0435\u043E\u043C\u043E\u043D\u0442\u0430\u0436\u0435\u0440 \u043C\u043E\u0436\u0435\u0442 \u0441\u043C\u043E\u043D\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0441\u0432\u0430\u0434\u0435\u0431\u043D\u044B\u0439 \u0444\u0438\u043B\u044C\u043C, \u0441\u044E\u0436\u0435\u0442 \u0434\u043B\u044F \u043D\u043E\u0432\u043E\u0441\u0442\u043D\u043E\u0433\u043E \u043A\u0430\u043D\u0430\u043B\u0430 \u0438\u043B\u0438 \u0442\u0435\u043B\u0435\u043F\u0435\u0440\u0435\u0434\u0430\u0447\u0438, \u0440\u043E\u043B\u0438\u043A \u0434\u043B\u044F \u0432\u0438\u0434\u0435\u043E\u0431\u043B\u043E\u0433\u0430 \u0438 \u043C\u043D\u043E\u0433\u043E\u0435 \u0434\u0440\u0443\u0433\u043E\u0435.\n\u0420\u0430\u0431\u043E\u0442\u0430 \u043C\u043E\u043D\u0442\u0430\u0436\u0435\u0440\u043E\u043C \u043F\u0440\u0435\u0434\u043F\u043E\u043B\u0430\u0433\u0430\u0435\u0442 \u0432\u043B\u0430\u0434\u0435\u043D\u0438\u0435 \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u0438\u0437\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u043C\u0438 \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0430\u043C\u0438 \u043F\u043E \u0440\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044E \u0432\u0438\u0434\u0435\u043E, \u043D\u0430\u043B\u0438\u0447\u0438\u0435 \u0445\u0443\u0434\u043E\u0436\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0433\u043E \u0432\u043A\u0443\u0441\u0430 \u0438 \u0443\u043C\u0435\u043D\u0438\u0435 \u0441\u043E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0435\u0434\u0438\u043D\u0443\u044E \u043A\u043E\u043C\u043F\u043E\u0437\u0438\u0446\u0438\u044E. \u041F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u044F \u0432\u0438\u0434\u0435\u043E\u043C\u043E\u043D\u0442\u0430\u0436\u0435\u0440\u0430 \u043C\u043E\u0436\u0435\u0442 \u0431\u044B\u0442\u044C \u043E\u0447\u0435\u043D\u044C \u0442\u0432\u043E\u0440\u0447\u0435\u0441\u043A\u043E\u0439 \u0438 \u0443\u0432\u043B\u0435\u043A\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0439, \u043D\u043E \u043D\u0435 \u0441\u0442\u043E\u0438\u0442 \u0438\u0441\u043A\u043B\u044E\u0447\u0430\u0442\u044C \u0438 \u0440\u0443\u0442\u0438\u043D\u043D\u044B\u0435 \u043C\u043E\u043C\u0435\u043D\u0442\u044B, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u043D\u0443\u0436\u043D\u043E \u0432\u044B\u043F\u043E\u043B\u043D\u044F\u0442\u044C \u0438\u0437 \u0440\u0430\u0437\u0430 \u0432 \u0440\u0430\u0437: \u0441\u0432\u0435\u0434\u0435\u043D\u0438\u0435 \u0437\u0432\u0443\u043A\u0430 \u0438 \u043A\u0430\u0440\u0442\u0438\u043D\u043A\u0438, \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u0441\u043F\u0435\u0446\u044D\u0444\u0444\u0435\u043A\u0442\u043E\u0432, \u0444\u043E\u0442\u043E-, \u043C\u0443\u0437\u044B\u043A\u0438 \u0438 \u0434\u0440\u0443\u0433\u0438\u0445 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u043E\u0432, \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0430 \u0446\u0432\u0435\u0442\u043E\u043A\u043E\u0440\u0440\u0435\u043A\u0446\u0438\u0438 \u0438 \u0443\u0440\u043E\u0432\u043D\u044F \u0433\u0440\u043E\u043C\u043A\u043E\u0441\u0442\u0438.\n</div>\n<div class="d-nav__text"><b>\u0413\u0434\u0435 \u0440\u0430\u0431\u043E\u0442\u0430\u044E\u0442 \u043C\u043E\u043D\u0442\u0430\u0436\u0435\u0440\u044B</b><br>\n\u0412\u0430\u043A\u0430\u043D\u0441\u0438\u0438 \u0432\u0438\u0434\u0435\u043E\u043C\u043E\u043D\u0442\u0430\u0436\u0435\u0440\u043E\u0432 \u043C\u043E\u0436\u043D\u043E \u0432\u0441\u0442\u0440\u0435\u0442\u0438\u0442\u044C \u0432\u0435\u0437\u0434\u0435, \u0433\u0434\u0435 \u0435\u0441\u0442\u044C \u0441\u0442\u0430\u0434\u0438\u044F \u043F\u043E\u0441\u0442\u043F\u0440\u043E\u0434\u0430\u043A\u0448\u0435\u043D\u0430: \u0442\u0435\u043B\u0435\u0432\u0438\u0434\u0435\u043D\u0438\u0435, \u043A\u0438\u043D\u043E\u0438\u043D\u0434\u0443\u0441\u0442\u0440\u0438\u044F, \u0441\u0444\u0435\u0440\u0430 \u0432\u0438\u0434\u0435\u043E\u0440\u0435\u043A\u043B\u0430\u043C\u044B, \u0430 \u0442\u0430\u043A\u0436\u0435 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0430 \u0432\u0438\u0434\u0435\u043E \u0441 \u0440\u0430\u0437\u043B\u0438\u0447\u043D\u044B\u0445 \u043C\u0435\u0440\u043E\u043F\u0440\u0438\u044F\u0442\u0438\u0439 \u0438 \u043A\u043E\u0440\u043F\u043E\u0440\u0430\u0442\u0438\u0432\u043D\u043E\u0433\u043E \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u0430.\n</div>\n<div class="d-nav__text"><b>\u041A\u0430\u043A \u043D\u0430\u0439\u0442\u0438 \u0440\u0430\u0431\u043E\u0442\u0443 \u043C\u043E\u043D\u0442\u0430\u0436\u0435\u0440\u0443</b><br>\n\u041D\u0430 \u043D\u0430\u0448\u0435\u0439 \u043F\u043B\u043E\u0449\u0430\u0434\u043A\u0435 \u043A\u0430\u0436\u0434\u044B\u0439 \u0434\u0435\u043D\u044C \u043F\u043E\u044F\u0432\u043B\u044F\u044E\u0442\u0441\u044F \u043D\u043E\u0432\u044B\u0435 \u0432\u0430\u043A\u0430\u043D\u0441\u0438\u0438 \u0434\u043B\u044F \u043C\u043E\u043D\u0442\u0430\u0436\u0435\u0440\u043E\u0432. \u0422\u0430\u043A\u0436\u0435 \u0434\u043B\u044F \u0442\u0435\u0445, \u043A\u0442\u043E \u0438\u0449\u0435\u0442 \u0434\u0430\u043D\u043D\u044B\u0445 \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u0438\u0441\u0442\u043E\u0432, \u043D\u0430 \u041B\u0438\u043D\u043A\u043C\u044C\u044E\u0441 \u0435\u0441\u0442\u044C \u0448\u0438\u0440\u043E\u043A\u0430\u044F \u0431\u0430\u0437\u0430 \u043C\u043E\u043D\u0442\u0430\u0436\u0435\u0440\u043E\u0432, \u0432 \u043A\u043E\u0442\u043E\u0440\u043E\u0439 \u043C\u043E\u0436\u043D\u043E \u043F\u043E\u0434\u043E\u0431\u0440\u0430\u0442\u044C \u0441\u0435\u0431\u0435 \u043F\u043E\u043D\u0440\u0430\u0432\u0438\u0432\u0448\u0435\u0433\u043E\u0441\u044F \u0447\u0435\u043B\u043E\u0432\u0435\u043A\u0430, \u0434\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0435\u0433\u043E \u0432 \u043F\u043E\u0434\u0431\u043E\u0440\u043A\u0443, \u0441\u043A\u0430\u0447\u0430\u0442\u044C \u0435\u0433\u043E \u043F\u043E\u0440\u0442\u0444\u043E\u043B\u0438\u043E \u0432 PDF, \u0430 \u0442\u0430\u043A\u0436\u0435 \u0431\u044B\u0441\u0442\u0440\u043E \u0441\u0432\u044F\u0437\u0430\u0442\u044C\u0441\u044F \u0441 \u043D\u0438\u043C \u0447\u0435\u0440\u0435\u0437 \u043B\u0438\u0447\u043D\u044B\u0435 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u044F \u0438\u043B\u0438 \u0437\u0432\u043E\u043D\u043E\u043A \u043D\u0430 \u043C\u043E\u0431\u0438\u043B\u044C\u043D\u044B\u0439 \u0442\u0435\u043B\u0435\u0444\u043E\u043D.\n\u041C\u044B \u043E\u0442\u0431\u0438\u0440\u0430\u0435\u043C \u0442\u043E\u043B\u044C\u043A\u043E \u043B\u0443\u0447\u0448\u0438\u0445 \u043C\u043E\u043D\u0442\u0430\u0436\u0435\u0440\u043E\u0432, \u0443 \u043A\u043E\u0442\u043E\u0440\u044B\u0445 \u0435\u0441\u0442\u044C \u0440\u0435\u043B\u0435\u0432\u0430\u043D\u0442\u043D\u044B\u0439 \u043E\u043F\u044B\u0442 \u0440\u0430\u0431\u043E\u0442\u044B.\n</div>';

var decoratorPlaster = '\n<div class="d-nav__text"><b>\u041A\u0442\u043E \u0442\u0430\u043A\u043E\u0439 \u0431\u0443\u0442\u0430\u0444\u043E\u0440 \u0434\u0435\u043A\u043E\u0440\u0430\u0442\u043E\u0440</b><br>\n\u0425\u0443\u0434\u043E\u0436\u043D\u0438\u043A \u0431\u0443\u0442\u0430\u0444\u043E\u0440-\u0434\u0435\u043A\u043E\u0440\u0430\u0442\u043E\u0440 \u0437\u0430\u043D\u0438\u043C\u0430\u0435\u0442\u0441\u044F \u0442\u0435\u043C, \u0447\u0442\u043E \u0440\u0430\u0437\u0440\u0430\u0431\u0430\u0442\u044B\u0432\u0430\u0435\u0442, \u0441\u043E\u0437\u0434\u0430\u0435\u0442 \u0438 \u0440\u0435\u043C\u043E\u043D\u0442\u0438\u0440\u0443\u0435\u0442 \u0431\u0443\u0442\u0430\u0444\u043E\u0440\u0438\u044E \u0438 \u0440\u0435\u043A\u0432\u0438\u0437\u0438\u0442. \u041E\u0442 \u043F\u0435\u0440\u0432\u043E\u043D\u0430\u0447\u0430\u043B\u044C\u043D\u043E\u0439 \u0437\u0430\u0434\u0443\u043C\u043A\u0438 \u0434\u043E \u0444\u0438\u043D\u0430\u043B\u044C\u043D\u043E\u0433\u043E \u0438\u0441\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044F: \u0445\u0443\u0434\u043E\u0436\u043D\u0438\u043A \u0431\u0443\u0442\u0430\u0444\u043E\u0440 \u2013 \u044D\u0442\u043E \u0447\u0435\u043B\u043E\u0432\u0435\u043A, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u043E\u0442\u0432\u0435\u0447\u0430\u0435\u0442 \u0437\u0430 \u0432\u0441\u0435 \u044D\u0442\u0430\u043F\u044B \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u044F \u0432\u0438\u0437\u0443\u0430\u043B\u044C\u043D\u043E\u0433\u043E \u043E\u0431\u0440\u0430\u0437\u0430 \u0441\u0446\u0435\u043D\u044B. \u0410 \u0435\u0449\u0451 \u0432 \u043E\u0431\u044F\u0437\u0430\u043D\u043D\u043E\u0441\u0442\u0438 \u0431\u0443\u0442\u0430\u0444\u043E\u0440\u0430 \u0432\u0445\u043E\u0434\u0438\u0442 \u043D\u0435 \u043A\u0443\u043F\u0438\u0442\u044C \u0431\u0443\u0442\u0430\u0444\u043E\u0440\u0438\u044E, \u0430 \u0441\u0434\u0435\u043B\u0430\u0442\u044C \u0435\u0451 \u0441\u0430\u043C\u043E\u043C\u0443. \u041C\u0430\u0441\u0442\u0435\u0440 \u0431\u0443\u0442\u0430\u0444\u043E\u0440 \u0443\u043C\u0435\u0435\u0442 \u0440\u0430\u0431\u043E\u0442\u0430\u0442\u044C \u0441 \u0440\u0430\u0437\u043B\u0438\u0447\u043D\u044B\u043C\u0438 \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u0430\u043C\u0438 \u0434\u043B\u044F \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u044F \u043A\u0443\u043A\u043E\u043B, \u043C\u0430\u0441\u043E\u043A, \u0442\u0435\u0430\u0442\u0440\u0430\u043B\u044C\u043D\u043E\u0433\u043E \u0440\u0435\u043A\u0432\u0438\u0437\u0438\u0442\u0430 \u0438 \u043F\u0440\u043E\u0447\u0435\u0439 \u0431\u0443\u0442\u0430\u0444\u043E\u0440\u0438\u0438, \u043A\u043E\u0442\u043E\u0440\u0430\u044F \u043C\u043E\u0436\u0435\u0442 \u0431\u044B\u0442\u044C \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u0430 \u043D\u0430 \u0441\u0446\u0435\u043D\u0435.\n</div>\n<div class="d-nav__text"><b>\u0413\u0434\u0435 \u0440\u0430\u0431\u043E\u0442\u0430\u044E\u0442 \u0434\u0435\u043A\u043E\u0440\u0430\u0442\u043E\u0440\u044B-\u0431\u0443\u0442\u0430\u0444\u043E\u0440\u044B</b><br>\n\u0411\u0443\u0442\u0430\u0444\u043E\u0440\u044B \u043C\u043E\u0433\u0443\u0442 \u043F\u0440\u0438\u043C\u0435\u043D\u044F\u0442\u044C \u0441\u0432\u043E\u0438 \u043D\u0430\u0432\u044B\u043A\u0438 \u0432 \u0440\u0430\u0437\u043D\u044B\u0445 \u043E\u0431\u043B\u0430\u0441\u0442\u044F\u0445. \u0422\u0435\u0430\u0442\u0440\u0430\u043B\u044C\u043D\u044B\u0435 \u0431\u0443\u0442\u0430\u0444\u043E\u0440\u044B \u0441\u043E\u0437\u0434\u0430\u044E\u0442 \u0440\u0435\u043A\u0432\u0438\u0437\u0438\u0442 \u0434\u043B\u044F \u0441\u0446\u0435\u043D\u044B, \u0434\u0440\u0443\u0433\u0438\u0435 \u0434\u0435\u043A\u043E\u0440\u0430\u0442\u043E\u0440\u044B \u0440\u0430\u0431\u043E\u0442\u0430\u044E\u0442 \u0432 \u043C\u0430\u043A\u0435\u0442\u043D\u044B\u0445 \u0446\u0435\u0445\u0430\u0445, \u0433\u0434\u0435 \u0441\u043E\u0437\u0434\u0430\u044E\u0442 \u043F\u0440\u0435\u0434\u043C\u0435\u0442\u044B \u043F\u043E \u044D\u0441\u043A\u0438\u0437\u0430\u043C \u043D\u0430 \u0437\u0430\u043A\u0430\u0437. \u041D\u0435\u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u0434\u0430\u0436\u0435 \u043D\u0430\u0445\u043E\u0434\u044F\u0442 \u0440\u0430\u0431\u043E\u0442\u0443 \u0432 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u044F\u0445, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u0441\u043E\u0437\u0434\u0430\u044E\u0442 \u043A\u0432\u0435\u0441\u0442-\u043A\u043E\u043C\u043D\u0430\u0442\u044B, \u0432\u0435\u0434\u044C \u0438\u043C\u0435\u043D\u043D\u043E \u0442\u0430\u043C \u0442\u0430\u043A \u0447\u0430\u0441\u0442\u043E \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E \u0441\u043E\u0437\u0434\u0430\u0432\u0430\u0442\u044C \u0443\u043D\u0438\u043A\u0430\u043B\u044C\u043D\u044B\u0439 \u0440\u0435\u043A\u0432\u0438\u0437\u0438\u0442 \u043F\u043E\u0434 \u0440\u0430\u0437\u043D\u044B\u0435 \u0446\u0435\u043B\u0438 \u0438 \u0442\u0435\u043C\u0430\u0442\u0438\u043A\u0438.\n</div>\n<div class="d-nav__text">\u0412\u043E\u0442 \u043B\u0438\u0448\u044C \u043D\u0435\u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u0441\u0444\u0435\u0440\u044B, \u0433\u0434\u0435 \u0432\u0441\u0435\u0433\u0434\u0430 \u0431\u0443\u0434\u0435\u0442 \u0430\u043A\u0442\u0443\u0430\u043B\u044C\u043D\u0430 \u0432\u0430\u043A\u0430\u043D\u0441\u0438\u044F \u0431\u0443\u0442\u0430\u0444\u043E\u0440-\u0434\u0435\u043A\u043E\u0440\u0430\u0442\u043E\u0440:\n<ul>\n<li>\u0422\u0435\u0430\u0442\u0440\u0430\u043B\u044C\u043D\u0430\u044F \u0441\u0444\u0435\u0440\u0430</li>\n<li>\u041A\u0438\u043D\u043E\u0438\u043D\u0434\u0443\u0441\u0442\u0440\u0438\u044F</li>\n<li>\u041A\u0443\u043A\u043E\u043B\u044C\u043D\u0430\u044F \u0430\u043D\u0438\u043C\u0430\u0446\u0438\u044F</li>\n<li>\u0418\u043D\u0434\u0443\u0441\u0442\u0440\u0438\u044F \u0440\u0430\u0437\u0432\u043B\u0435\u0447\u0435\u043D\u0438\u0439</li>\n<li>\u0425\u0443\u0434\u043E\u0436\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0435 \u043C\u0430\u0441\u0442\u0435\u0440\u0441\u043A\u0438\u0435</li>\n</ul>\n</div>\n<div class="d-nav__text"><b>\u0413\u0434\u0435 \u043D\u0430\u0439\u0442\u0438 \u0440\u0430\u0431\u043E\u0442\u0443 \u0445\u0443\u0434\u043E\u0436\u043D\u0438\u043A\u0443-\u0431\u0443\u0442\u0430\u0444\u043E\u0440\u0443</b><br>\n\u041D\u0430 \u043D\u0430\u0448\u0435\u0439 \u043F\u043B\u043E\u0449\u0430\u0434\u043A\u0435 \u043A\u0430\u0436\u0434\u044B\u0439 \u0434\u0435\u043D\u044C \u043F\u043E\u044F\u0432\u043B\u044F\u044E\u0442\u0441\u044F \u043D\u043E\u0432\u044B\u0435 \u0432\u0430\u043A\u0430\u043D\u0441\u0438\u0438 \u0434\u043B\u044F \u0445\u0443\u0434\u043E\u0436\u043D\u0438\u043A\u043E\u0432 \u0431\u0443\u0442\u0430\u0444\u043E\u0440\u043E\u0432. \u0422\u0430\u043A\u0436\u0435 \u0434\u043B\u044F \u0442\u0435\u0445, \u043A\u0442\u043E \u0438\u0449\u0435\u0442 \u0434\u0430\u043D\u043D\u044B\u0445 \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u0438\u0441\u0442\u043E\u0432, \u043D\u0430 \u041B\u0438\u043D\u043A\u043C\u044C\u044E\u0441 \u0435\u0441\u0442\u044C \u0448\u0438\u0440\u043E\u043A\u0430\u044F \u0431\u0430\u0437\u0430 \u0445\u0443\u0434\u043E\u0436\u043D\u0438\u043A\u043E\u0432 \u0434\u0435\u043A\u043E\u0440\u0430\u0442\u043E\u0440\u043E\u0432, \u0432 \u043A\u043E\u0442\u043E\u0440\u043E\u0439 \u043C\u043E\u0436\u043D\u043E \u043F\u043E\u0434\u043E\u0431\u0440\u0430\u0442\u044C \u0441\u0435\u0431\u0435 \u043F\u043E\u043D\u0440\u0430\u0432\u0438\u0432\u0448\u0435\u0433\u043E\u0441\u044F \u0447\u0435\u043B\u043E\u0432\u0435\u043A\u0430, \u0434\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0435\u0433\u043E \u0432 \u043F\u043E\u0434\u0431\u043E\u0440\u043A\u0443, \u0441\u043A\u0430\u0447\u0430\u0442\u044C \u0435\u0433\u043E \u043F\u043E\u0440\u0442\u0444\u043E\u043B\u0438\u043E \u0432 PDF, \u0430 \u0442\u0430\u043A\u0436\u0435 \u0431\u044B\u0441\u0442\u0440\u043E \u0441\u0432\u044F\u0437\u0430\u0442\u044C\u0441\u044F \u0441 \u043D\u0438\u043C \u0447\u0435\u0440\u0435\u0437 \u043B\u0438\u0447\u043D\u044B\u0435 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u044F \u0438\u043B\u0438 \u0437\u0432\u043E\u043D\u043E\u043A \u043D\u0430 \u043C\u043E\u0431\u0438\u043B\u044C\u043D\u044B\u0439 \u0442\u0435\u043B\u0435\u0444\u043E\u043D.\n\u041C\u044B \u043E\u0442\u0431\u0438\u0440\u0430\u0435\u043C \u0442\u043E\u043B\u044C\u043A\u043E \u043B\u0443\u0447\u0448\u0438\u0445 \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u0438\u0441\u0442\u043E\u0432, \u0443 \u043A\u043E\u0442\u043E\u0440\u044B\u0445 \u0435\u0441\u0442\u044C \u0440\u0435\u043B\u0435\u0432\u0430\u043D\u0442\u043D\u044B\u0439 \u043E\u043F\u044B\u0442 \u0440\u0430\u0431\u043E\u0442\u044B.\n</div>';

var gaffer = '\n<div class="d-nav__text"><b>\u041A\u0442\u043E \u0442\u0430\u043A\u043E\u0439 \u0431\u0440\u0438\u0433\u0430\u0434\u0438\u0440 \u043E\u0441\u0432\u0435\u0442\u0438\u0442\u0435\u043B\u0435\u0439 \u0438\u043B\u0438 \u0433\u0430\u0444\u0435\u0440</b><br>\n\u0413\u0430\u0444\u0435\u0440 \u0438\u043B\u0438 \u0431\u0440\u0438\u0433\u0430\u0434\u0438\u0440 \u043E\u0441\u0432\u0435\u0442\u0438\u0442\u0435\u043B\u0435\u0439 \u2013 \u044D\u0442\u043E \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u0438\u0441\u0442, \u043E\u0442\u0432\u0435\u0447\u0430\u044E\u0449\u0438\u0439 \u0437\u0430 \u0441\u0432\u0435\u0442\u043E\u0432\u043E\u0435 \u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u0435 \u043D\u0430 \u0441\u044A\u0451\u043C\u043E\u0447\u043D\u043E\u0439 \u043F\u043B\u043E\u0449\u0430\u0434\u043A\u0435 \u0438\u043B\u0438 \u0441\u0446\u0435\u043D\u0435. \u0418\u043C\u0435\u043D\u043D\u043E \u043E\u0442 \u043D\u0435\u0433\u043E \u0437\u0430\u0432\u0438\u0441\u0438\u0442 \u0441\u0432\u0435\u0442\u043E\u0432\u0430\u044F \u043A\u043E\u043C\u043F\u043E\u0437\u0438\u0446\u0438\u044F \u0432 \u043A\u0438\u043D\u043E \u0438\u043B\u0438 \u0438\u0433\u0440\u0430 \u0441\u043E\u0444\u0438\u0442\u0430\u043C\u0438 \u043D\u0430 \u0441\u0446\u0435\u043D\u0435. \u0420\u0430\u0431\u043E\u0442\u0430 \u0433\u0430\u0444\u0435\u0440\u043E\u043C \u0432\u043A\u043B\u044E\u0447\u0430\u0435\u0442 \u0432 \u0441\u0435\u0431\u044F \u0437\u043D\u0430\u043D\u0438\u044F \u043E\u0441\u043E\u0431\u0435\u043D\u043D\u043E\u0441\u0442\u0435\u0439 \u0440\u0430\u0431\u043E\u0442\u044B \u0441\u0432\u0435\u0442\u043E\u0432\u043E\u0433\u043E \u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u044F, \u043A\u043E\u043C\u043F\u043E\u0437\u0438\u0446\u0438\u0438 \u0441\u0432\u0435\u0442\u0430 \u0432 \u043A\u0430\u0434\u0440\u0435 \u0438 \u0432\u043E\u0441\u043F\u0440\u0438\u044F\u0442\u0438\u044F \u0441\u0432\u0435\u0442\u043E\u0432\u043E\u0433\u043E \u0440\u0435\u0448\u0435\u043D\u0438\u044F \u0437\u0440\u0438\u0442\u0435\u043B\u0435\u043C.\n</div>\n<div class="d-nav__text"><b>\u0413\u0434\u0435 \u0440\u0430\u0431\u043E\u0442\u0430\u044E\u0442 \u0433\u0430\u0444\u0435\u0440\u044B \u0438 \u0431\u0440\u0438\u0433\u0430\u0434\u0438\u0440\u044B \u043E\u0441\u0432\u0435\u0442\u0438\u0442\u0435\u043B\u0435\u0439</b><br>\n\u0413\u0430\u0444\u0435\u0440\u044B \u043D\u0430\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u044E\u0442 \u0441\u0432\u0435\u0442 \u043D\u0430 \u0441\u043F\u0435\u043A\u0442\u0430\u043A\u043B\u044F\u0445, \u0434\u043B\u044F \u0446\u0438\u0440\u043A\u043E\u0432\u043E\u0439 \u0430\u0440\u0435\u043D\u044B, \u0442\u0435\u043B\u0435\u043F\u0435\u0440\u0435\u0434\u0430\u0447, \u043D\u0430 \u0441\u044A\u0451\u043C\u043E\u0447\u043D\u043E\u0439 \u043F\u043B\u043E\u0449\u0430\u0434\u043A\u0435 \u0432 \u043A\u0438\u043D\u043E\u043F\u0430\u0432\u0438\u043B\u044C\u043E\u043D\u0435 \u0438\u043B\u0438 \u0441\u0442\u0443\u0434\u0438\u0438. \u0427\u0430\u0449\u0435 \u0432\u0441\u0435\u0433\u043E, \u043E\u043D\u0438 \u0440\u0430\u0431\u043E\u0442\u0430\u044E\u0442 \u0432 \u0441\u043E\u0441\u0442\u0430\u0432\u0435 \u0443\u0436\u0435 \u0441\u043B\u0430\u0436\u0435\u043D\u043D\u043E\u0439 \u043A\u043E\u043C\u0430\u043D\u0434\u044B \u0434\u0440\u0443\u0433\u0438\u0445 \u043F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u043E\u043D\u0430\u043B\u043E\u0432, \u0447\u0442\u043E \u043F\u043E\u0437\u0432\u043E\u043B\u044F\u0435\u0442 \u0438\u043C \u0431\u044B\u0441\u0442\u0440\u043E \u0440\u0430\u0431\u043E\u0442\u0430\u0442\u044C \u0438 \u043F\u043E\u043D\u0438\u043C\u0430\u0442\u044C \u0434\u0440\u0443\u0433 \u0434\u0440\u0443\u0433\u0430.\n</div>\n<div class="d-nav__text"><b>\u0413\u0434\u0435 \u043D\u0430\u0439\u0442\u0438 \u0440\u0430\u0431\u043E\u0442\u0443 \u0433\u0430\u0444\u0435\u0440\u0443</b><br>\n\u041D\u0430 \u043D\u0430\u0448\u0435\u0439 \u043F\u043B\u043E\u0449\u0430\u0434\u043A\u0435 \u043A\u0430\u0436\u0434\u044B\u0439 \u0434\u0435\u043D\u044C \u043F\u043E\u044F\u0432\u043B\u044F\u044E\u0442\u0441\u044F \u043D\u043E\u0432\u044B\u0435 \u0432\u0430\u043A\u0430\u043D\u0441\u0438\u0438 \u0434\u043B\u044F \u0433\u0430\u0444\u0435\u0440\u043E\u0432. \u0422\u0430\u043A\u0436\u0435 \u0434\u043B\u044F \u0442\u0435\u0445, \u043A\u0442\u043E \u0438\u0449\u0435\u0442 \u0434\u0430\u043D\u043D\u044B\u0445 \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u0438\u0441\u0442\u043E\u0432, \u043D\u0430 \u041B\u0438\u043D\u043A\u043C\u044C\u044E\u0441 \u0435\u0441\u0442\u044C \u0448\u0438\u0440\u043E\u043A\u0430\u044F \u0431\u0430\u0437\u0430 \u0431\u0440\u0438\u0433\u0430\u0434\u0438\u0440\u043E\u0432 \u043E\u0441\u0432\u0435\u0442\u0438\u0442\u0435\u043B\u0435\u0439, \u0432 \u043A\u043E\u0442\u043E\u0440\u043E\u0439 \u043C\u043E\u0436\u043D\u043E \u043F\u043E\u0434\u043E\u0431\u0440\u0430\u0442\u044C \u0441\u0435\u0431\u0435 \u043F\u043E\u043D\u0440\u0430\u0432\u0438\u0432\u0448\u0435\u0433\u043E\u0441\u044F \u0447\u0435\u043B\u043E\u0432\u0435\u043A\u0430, \u0434\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0435\u0433\u043E \u0432 \u043F\u043E\u0434\u0431\u043E\u0440\u043A\u0443, \u0441\u043A\u0430\u0447\u0430\u0442\u044C \u0435\u0433\u043E \u043F\u043E\u0440\u0442\u0444\u043E\u043B\u0438\u043E \u0432 PDF, \u0430 \u0442\u0430\u043A\u0436\u0435 \u0431\u044B\u0441\u0442\u0440\u043E \u0441\u0432\u044F\u0437\u0430\u0442\u044C\u0441\u044F \u0441 \u043D\u0438\u043C \u0447\u0435\u0440\u0435\u0437 \u043B\u0438\u0447\u043D\u044B\u0435 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u044F \u0438\u043B\u0438 \u0437\u0432\u043E\u043D\u043E\u043A \u043D\u0430 \u043C\u043E\u0431\u0438\u043B\u044C\u043D\u044B\u0439 \u0442\u0435\u043B\u0435\u0444\u043E\u043D.\n\u041C\u044B \u043E\u0442\u0431\u0438\u0440\u0430\u0435\u043C \u0442\u043E\u043B\u044C\u043A\u043E \u043B\u0443\u0447\u0448\u0438\u0445 \u0433\u0430\u0444\u0435\u0440\u043E\u0432, \u0443 \u043A\u043E\u0442\u043E\u0440\u044B\u0445 \u0435\u0441\u0442\u044C \u0440\u0435\u043B\u0435\u0432\u0430\u043D\u0442\u043D\u044B\u0439 \u043E\u043F\u044B\u0442 \u0440\u0430\u0431\u043E\u0442\u044B.\n</div>';

var makeupArtist = '\n<div class="d-nav__text"><b>\u041A\u0442\u043E \u0442\u0430\u043A\u043E\u0439 \u0445\u0443\u0434\u043E\u0436\u043D\u0438\u043A \u043F\u043E \u0433\u0440\u0438\u043C\u0443 \u0438\u043B\u0438 \u0433\u0440\u0438\u043C\u0435\u0440</b><br>\n\u042D\u0442\u043E \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u0438\u0441\u0442, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u0432\u043B\u0430\u0434\u0435\u0435\u0442 \u0438\u0441\u043A\u0443\u0441\u0441\u0442\u0432\u043E\u043C \u043D\u0430\u043A\u043B\u0430\u0434\u044B\u0432\u0430\u0442\u044C \u0433\u0440\u0438\u043C \u0438, \u0442\u0430\u043A\u0438\u043C \u043E\u0431\u0440\u0430\u0437\u043E\u043C, \u043F\u0440\u0435\u043E\u0431\u0440\u0430\u0437\u043E\u0432\u044B\u0432\u0430\u0442\u044C \u0432\u043D\u0435\u0448\u043D\u043E\u0441\u0442\u044C \u0430\u043A\u0442\u0451\u0440\u0430 \u043F\u043E\u0434 \u0440\u0430\u0437\u043D\u044B\u0435 \u0442\u0432\u043E\u0440\u0447\u0435\u0441\u043A\u0438\u0435 \u0437\u0430\u0434\u0430\u0447\u0438. \u0414\u043E\u0431\u0438\u0432\u0430\u0435\u0442\u0441\u044F \u044D\u0442\u043E\u0433\u043E \u043F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0439 \u0433\u0440\u0438\u043C\u0435\u0440 \u0437\u0430 \u0441\u0447\u0435\u0442 \u0440\u0430\u0437\u043B\u0438\u0447\u043D\u044B\u0445 \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u043E\u0432: \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0439 \u043A\u043E\u0441\u043C\u0435\u0442\u0438\u043A\u0438, \u043A\u0440\u0430\u0441\u043E\u043A, \u043D\u0430\u043A\u043B\u0435\u0435\u043A, \u043D\u0430\u043A\u043B\u0430\u0434\u043D\u044B\u0445 \u0443\u0441\u043E\u0432, \u0431\u043E\u0440\u043E\u0434\u044B \u0438 \u043F\u0440\u043E\u0447\u0438\u0445 \u0430\u043A\u0441\u0435\u0441\u0441\u0443\u0430\u0440\u043E\u0432.\n</div>\n<div class="d-nav__text"><b>\u0413\u0434\u0435 \u0440\u0430\u0431\u043E\u0442\u0430\u044E\u0442 \u0433\u0440\u0438\u043C\u0435\u0440\u044B</b><br>\n\u0412\u0430\u043A\u0430\u043D\u0441\u0438\u0438 \u0433\u0440\u0438\u043C\u0435\u0440\u0430 \u043C\u043E\u0436\u043D\u043E \u043D\u0430\u0439\u0442\u0438 \u0432 \u0441\u0444\u0435\u0440\u0435 \u043A\u0438\u043D\u043E, \u0442\u0435\u043B\u0435\u0432\u0438\u0434\u0435\u043D\u0438\u044F, \u0442\u0435\u0430\u0442\u0440\u0430 \u0438 \u0446\u0438\u0440\u043A\u043E\u0432\u044B\u0445 \u0432\u044B\u0441\u0442\u0443\u043F\u043B\u0435\u043D\u0438\u0439. \u0412 \u0437\u0430\u0432\u0438\u0441\u0438\u043C\u043E\u0441\u0442\u0438 \u043E\u0442 \u0441\u0442\u0435\u043F\u0435\u043D\u0438 \u0432\u043B\u0430\u0434\u0435\u043D\u0438\u044F \u0440\u0430\u0437\u043D\u044B\u043C\u0438 \u043F\u0440\u0438\u0435\u043C\u0430\u043C\u0438 \u0433\u0440\u0438\u043C\u0430, \u0433\u0440\u0438\u043C\u0435\u0440 \u043C\u043E\u0436\u0435\u0442 \u0440\u0430\u0431\u043E\u0442\u0430\u0442\u044C \u0432 \u0441\u043E\u0432\u0435\u0440\u0448\u0435\u043D\u043D\u043E \u0440\u0430\u0437\u043D\u044B\u0445 \u043E\u0431\u043B\u0430\u0441\u0442\u044F\u0445, \u0433\u0434\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442 \u0441\u0432\u043E\u044F \u0441\u043F\u0435\u0446\u0438\u0444\u0438\u043A\u0430.\n</div>\n<div class="d-nav__text"><b>\u0413\u0434\u0435 \u043D\u0430\u0439\u0442\u0438 \u0440\u0430\u0431\u043E\u0442\u0443 \u0433\u0440\u0438\u043C\u0435\u0440\u0443</b><br>\n\u041D\u0430 \u043D\u0430\u0448\u0435\u0439 \u043F\u043B\u043E\u0449\u0430\u0434\u043A\u0435 \u043A\u0430\u0436\u0434\u044B\u0439 \u0434\u0435\u043D\u044C \u043F\u043E\u044F\u0432\u043B\u044F\u044E\u0442\u0441\u044F \u043D\u043E\u0432\u044B\u0435 \u0432\u0430\u043A\u0430\u043D\u0441\u0438\u0438 \u0434\u043B\u044F \u0433\u0440\u0438\u043C\u0435\u0440\u043E\u0432. \u0422\u0430\u043A\u0436\u0435 \u0434\u043B\u044F \u0442\u0435\u0445, \u043A\u0442\u043E \u0438\u0449\u0435\u0442 \u0434\u0430\u043D\u043D\u044B\u0445 \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u0438\u0441\u0442\u043E\u0432, \u043D\u0430 \u041B\u0438\u043D\u043A\u043C\u044C\u044E\u0441 \u0435\u0441\u0442\u044C \u0448\u0438\u0440\u043E\u043A\u0430\u044F \u0431\u0430\u0437\u0430 \u0433\u0440\u0438\u043C\u0435\u0440\u043E\u0432, \u0432 \u043A\u043E\u0442\u043E\u0440\u043E\u0439 \u043C\u043E\u0436\u043D\u043E \u043F\u043E\u0434\u043E\u0431\u0440\u0430\u0442\u044C \u0441\u0435\u0431\u0435 \u043F\u043E\u043D\u0440\u0430\u0432\u0438\u0432\u0448\u0435\u0433\u043E\u0441\u044F \u0447\u0435\u043B\u043E\u0432\u0435\u043A\u0430, \u0434\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0435\u0433\u043E \u0432 \u043F\u043E\u0434\u0431\u043E\u0440\u043A\u0443, \u0441\u043A\u0430\u0447\u0430\u0442\u044C \u0435\u0433\u043E \u043F\u043E\u0440\u0442\u0444\u043E\u043B\u0438\u043E \u0432 PDF, \u0430 \u0442\u0430\u043A\u0436\u0435 \u0431\u044B\u0441\u0442\u0440\u043E \u0441\u0432\u044F\u0437\u0430\u0442\u044C\u0441\u044F \u0441 \u043D\u0438\u043C \u0447\u0435\u0440\u0435\u0437 \u043B\u0438\u0447\u043D\u044B\u0435 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u044F \u0438\u043B\u0438 \u0437\u0432\u043E\u043D\u043E\u043A \u043D\u0430 \u043C\u043E\u0431\u0438\u043B\u044C\u043D\u044B\u0439 \u0442\u0435\u043B\u0435\u0444\u043E\u043D.\n\u041C\u044B \u043E\u0442\u0431\u0438\u0440\u0430\u0435\u043C \u0442\u043E\u043B\u044C\u043A\u043E \u043F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0433\u0440\u0438\u043C\u0435\u0440\u043E\u0432, \u0443 \u043A\u043E\u0442\u043E\u0440\u044B\u0445 \u0435\u0441\u0442\u044C \u0440\u0435\u043B\u0435\u0432\u0430\u043D\u0442\u043D\u044B\u0439 \u043E\u043F\u044B\u0442 \u0440\u0430\u0431\u043E\u0442\u044B.\n</div>';

var PROFESSION = {
  model: model,
  photographer: photographer,
  videographer: videographer,
  actor: actor,
  leading: leading,
  musician: musician,
  agent: agent,
  'casting-director': castingDirector,
  'director-of-photography': directorOfPhotography,
  'stage-director': stageDirector,
  dresser: dresser,
  mounting: mounting,
  'decorator-plaster': decoratorPlaster,
  gaffer: gaffer,
  'makeup-artist': makeupArtist
};

/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {};
  },

  computed: {
    seoText: function seoText() {
      var params = this.$route.params;
      var professionName = params.profession;


      return professionName && Object(__WEBPACK_IMPORTED_MODULE_0__utils__["l" /* has */])(PROFESSION, professionName) ? PROFESSION[professionName] : DEFAULT;
    }
  }
});

/***/ }),

/***/ 1604:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Profession_vue__ = __webpack_require__(1553);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_03f5d95b_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Profession_vue__ = __webpack_require__(1607);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1605)
}
var normalizeComponent = __webpack_require__(2)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-03f5d95b"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Profession_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_03f5d95b_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Profession_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/User/Profession/Profession.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-03f5d95b", Component.options)
  } else {
    hotAPI.reload("data-v-03f5d95b", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 1605:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1606);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("5cd3905a", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js?sourceMap!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-03f5d95b\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Profession.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js?sourceMap!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-03f5d95b\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Profession.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1606:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(true);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"Profession.vue","sourceRoot":""}]);

// exports


/***/ }),

/***/ 1607:
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
        { card_premium: _vm.isCatalogPage === true && _vm.isFasten === true }
      ]
    },
    [
      _c(
        "div",
        { staticClass: "row mb_3" },
        [
          _vm.isCatalogPage === true
            ? [
                _c("div", { staticClass: "profile-card__avatar" }, [
                  _c("img", { attrs: { src: _vm.avatar, alt: _vm.name } })
                ])
              ]
            : _vm._e(),
          _vm._v(" "),
          _c(
            "div",
            { class: ["column", { ml_4: _vm.isCatalogPage === true }] },
            [
              _c(
                "div",
                { staticClass: "row justify_between align_center" },
                [
                  _c(
                    "span",
                    {
                      class: [
                        "declaration__type",
                        { "color_gray-3": _vm.isPublished === false }
                      ]
                    },
                    [
                      _vm.isCatalogPage === true
                        ? [_vm._v(_vm._s(_vm.professionNode["text"]))]
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.isCatalogPage === false
                        ? [
                            _vm.isCurrentUser === true
                              ? [
                                  _vm._v(
                                    "\n                " +
                                      _vm._s(
                                        _vm.isPublished
                                          ? _vm.$t(
                                              "unified-profile.profile.published"
                                            )
                                          : "снято с публикации"
                                      ) +
                                      "\n              "
                                  )
                                ]
                              : _vm._e(),
                            _vm._v(" "),
                            _vm.isCurrentUser === false
                              ? [_vm._v(_vm._s(_vm.professionNode["group"]))]
                              : _vm._e()
                          ]
                        : _vm._e()
                    ],
                    2
                  ),
                  _vm._v(" "),
                  [
                    _vm.isAuthorized &&
                    _vm.isCurrentUser === true &&
                    _vm.isCatalogPage === false
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
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.isAuthorized && _vm.isCurrentUser === false
                      ? [
                          _c(
                            "button",
                            {
                              staticClass: "btn btn_options",
                              on: { click: _vm._handleClickAddToFolder }
                            },
                            [
                              _c(
                                "svg",
                                {
                                  class: [
                                    "icon",
                                    "icon_size_16",
                                    { icon_fill_red: _vm.inFolder }
                                  ]
                                },
                                [
                                  _c("use", {
                                    attrs: {
                                      "xlink:href":
                                        "/dist/img/icons/svg/sprite.svg#lm-heart"
                                    }
                                  })
                                ]
                              )
                            ]
                          )
                        ]
                      : _vm._e()
                  ]
                ],
                2
              ),
              _vm._v(" "),
              _c(
                "router-link",
                {
                  staticClass: "profile-card__description",
                  attrs: {
                    to: {
                      name: "users.professions.show",
                      params: { id: _vm.id }
                    }
                  }
                },
                [
                  _c(
                    "div",
                    { staticClass: "row align_center" },
                    [
                      _c(
                        "span",
                        { staticClass: "m-text_bold color_gray-1 " },
                        [
                          _vm.isCatalogPage === true
                            ? [_vm._v(_vm._s(_vm.name))]
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.isCatalogPage === false
                            ? [_vm._v(_vm._s(_vm.professionNode["text"]))]
                            : _vm._e()
                        ],
                        2
                      ),
                      _vm._v(" "),
                      _vm.isCertifiedUser === true && _vm.isCatalogPage === true
                        ? [
                            _c(
                              "svg",
                              { staticClass: "icon icon_size_16 ml_2" },
                              [
                                _c("use", {
                                  attrs: {
                                    "xlink:href":
                                      "/dist/img/icons/svg/sprite.svg#round_lm-verification"
                                  }
                                })
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
                      staticClass:
                        "declaration__list declaration__list_parameters mt_1"
                    },
                    [
                      _c("div", [
                        _vm._v(
                          _vm._s(_vm.city ? _vm.city.text : "Город не указан")
                        )
                      ]),
                      _vm._v(" "),
                      _vm.age
                        ? [
                            _c("div", [
                              _vm._v(
                                _vm._s(
                                  _vm.$pluralize(_vm.age, [
                                    "год",
                                    "года",
                                    "лет"
                                  ])
                                )
                              )
                            ])
                          ]
                        : _vm._e()
                    ],
                    2
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "m-text_bold-2 color_gray-1 row mt_2" },
                    [
                      _vm.hasRate === true
                        ? [
                            _vm._v(
                              "\n            От " +
                                _vm._s(
                                  _vm._f("currency")(
                                    _vm.rate["cost-of-work"],
                                    _vm.rate["currency"]["text"]
                                  )
                                ) +
                                " "
                            ),
                            _vm.rate["period-selection"]
                              ? [
                                  _vm._v(
                                    "/ " +
                                      _vm._s(
                                        _vm._f("lowercase")(
                                          _vm.rate["period-selection"]["text"]
                                        )
                                      )
                                  )
                                ]
                              : _vm._e()
                          ]
                        : _vm.hasRate === false
                        ? [
                            _vm._v(
                              "\n            " +
                                _vm._s(
                                  _vm.$t(
                                    "unified-profile.professionals.by-agreement"
                                  )
                                ) +
                                "\n          "
                            )
                          ]
                        : _vm._e()
                    ],
                    2
                  )
                ]
              )
            ],
            1
          )
        ],
        2
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass:
            "section declaration__section profile-card__buttons justify_evenly align_center"
        },
        [
          _vm.isCurrentUser
            ? [
                _vm.isPublished === true
                  ? [
                      _c(
                        "router-link",
                        {
                          staticClass: "btn",
                          attrs: {
                            to: {
                              name: "users.professions.edit",
                              params: { id: _vm.id }
                            }
                          }
                        },
                        [_vm._v(_vm._s(_vm.$t("unified-profile.profile.edit")))]
                      )
                    ]
                  : _vm._e(),
                _vm._v(" "),
                _vm.isPublished === false
                  ? [
                      _c(
                        "a",
                        {
                          staticClass: "btn",
                          attrs: { href: "javascript:void(0)" },
                          on: { click: _vm._handleClickPublishProfession }
                        },
                        [_vm._v("Опубликовать")]
                      )
                    ]
                  : _vm._e()
              ]
            : [
                _vm.phone
                  ? [
                      _c(
                        "a",
                        {
                          staticClass: "btn",
                          attrs: { href: "tel:" + _vm.phone },
                          on: { click: _vm._handleClickCallUser }
                        },
                        [
                          _vm._v(
                            _vm._s(_vm.$t("unified-profile.professionals.call"))
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c("span", { staticClass: "vertical-dash" })
                    ]
                  : _vm._e(),
                _vm._v(" "),
                _c(
                  "a",
                  {
                    staticClass: "btn",
                    attrs: { href: "javascript:void(0)" },
                    on: { click: _vm._handleClickMessage }
                  },
                  [
                    _vm._v(
                      _vm._s(_vm.$t("unified-profile.professionals.write"))
                    )
                  ]
                )
              ]
        ],
        2
      )
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
    require("vue-hot-reload-api")      .rerender("data-v-03f5d95b", esExports)
  }
}

/***/ }),

/***/ 1887:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mint_ui__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mint_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_mint_ui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modules_SEO_mixins_Professions__ = __webpack_require__(1602);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_User_Profession_Filter_vue__ = __webpack_require__(2679);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_User_Profession_Profession_vue__ = __webpack_require__(1604);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_vuex_map_fields__ = __webpack_require__(22);
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











var _createHelpers = Object(__WEBPACK_IMPORTED_MODULE_7_vuex_map_fields__["a" /* createHelpers */])({
  getterType: 'user/profession/getField',
  mutationType: 'user/profession/updateField'
}),
    mapFields = _createHelpers.mapFields;

/* harmony default export */ __webpack_exports__["a"] = ({
  mixins: [__WEBPACK_IMPORTED_MODULE_4__modules_SEO_mixins_Professions__["a" /* default */]],
  components: { 'mt-loadmore': __WEBPACK_IMPORTED_MODULE_2_mint_ui__["Loadmore"], ProfessionCard: __WEBPACK_IMPORTED_MODULE_6__components_User_Profession_Profession_vue__["a" /* default */], ProfessionFilter: __WEBPACK_IMPORTED_MODULE_5__components_User_Profession_Filter_vue__["a" /* default */] },
  metaInfo: function metaInfo() {
    return {
      title: this.title,
      meta: [{ name: 'description', content: this.description }]
    };
  },
  data: function data() {
    return {
      height: 0,
      openFilter: false,
      searchFocused: false,
      loadmore: { topStatus: null },
      seoTextShow: false
    };
  },
  asyncData: function asyncData(_ref) {
    var _this = this;

    var store = _ref.store,
        route = _ref.route;
    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var params, query, professionName, initialized, defaultFields, fields;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (__WEBPACK_IMPORTED_MODULE_3__utils__["n" /* isBrowser */]) {
                params = route.params, query = route.query;
                professionName = params.profession;
                initialized = store.getters['user/profession/getInitializedSources'];
                defaultFields = store.getters['user/profession/getCatalogDefaultFieldsFilter'];
                fields = Object(__WEBPACK_IMPORTED_MODULE_3__utils__["u" /* omitEmpty */])(__WEBPACK_IMPORTED_MODULE_0_lodash___default.a.merge(defaultFields, _extends({}, query, { professionName: professionName })), { omitZero: false });


                store.dispatch('user/profession/clearProfessions');
                store.dispatch('user/profession/fetchProfessions', { fields: fields, offset: 0 });

                if (!initialized) {
                  store.dispatch('user/profession/getSources');
                }
              }

            case 1:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this);
    }))();
  },
  serverPrefetch: function serverPrefetch() {
    var _this2 = this;

    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
      var _$route, params, query, professionName, initialized, defaultFields, fields;

      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _$route = _this2.$route, params = _$route.params, query = _$route.query;
              professionName = params.profession;
              initialized = _this2.$store.getters['user/profession/getInitializedSources'];
              defaultFields = _this2.$store.getters['user/profession/getCatalogDefaultFieldsFilter'];
              fields = Object(__WEBPACK_IMPORTED_MODULE_3__utils__["u" /* omitEmpty */])(__WEBPACK_IMPORTED_MODULE_0_lodash___default.a.merge(defaultFields, _extends({}, query, { professionName: professionName })), { omitZero: false });

              if (initialized) {
                _context2.next = 8;
                break;
              }

              _context2.next = 8;
              return _this2.$store.dispatch('user/profession/getSources').catch(function (error) {
                var _error$response = error.response,
                    _error$response$statu = _error$response.status,
                    status = _error$response$statu === undefined ? 500 : _error$response$statu,
                    _error$response$url = _error$response.url,
                    url = _error$response$url === undefined ? null : _error$response$url;

                throw { code: status, message: 'Error fetch sources professions', url: url };
              });

            case 8:
              _context2.next = 10;
              return _this2.$store.dispatch('user/profession/fetchProfessions', { fields: fields, offset: 0 }).catch(function (error) {
                var _error$response2 = error.response,
                    _error$response2$stat = _error$response2.status,
                    status = _error$response2$stat === undefined ? 500 : _error$response2$stat,
                    _error$response2$url = _error$response2.url,
                    url = _error$response2$url === undefined ? null : _error$response2$url;

                throw { code: status, message: 'Error fetch professions', url: url };
              });

            case 10:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, _this2);
    }))();
  },

  computed: _extends({}, mapFields({
    fields: 'professions.filter',
    defaultFields: 'professions.defaultFilter'
  }), Object(__WEBPACK_IMPORTED_MODULE_1_vuex__["c" /* mapGetters */])({
    user: 'auth/getAuthUser',
    isAuthorized: 'auth/isAuthorized',
    sources: 'user/profession/getSources',
    total: 'user/profession/getProfessionsTotal',
    error: 'user/profession/getProfessionsError',
    offset: 'user/profession/getProfessionsOffset',
    professions: 'user/profession/getProfessionsData',
    loading: 'user/profession/getProfessionsLoading',
    infiniteDisabled: 'user/profession/getProfessionsInfiniteDisabled'
  }), {
    isEmpty: function isEmpty() {
      return this.loading === false && this.total === 0;
    },
    isAdmin: function isAdmin() {
      return this.user && this.user.hasOwnProperty('isAdmin') && this.user['isAdmin'] === true;
    },
    hasFilter: function hasFilter() {
      var fields = this._.omit(this.fields);
      var defaultFields = this._.omit(this.defaultFields);

      return this._.isEqual(fields, defaultFields) === false;
    },
    title: function title() {
      var profession = this.$route.params.profession;

      // if (profession) return `Работа для ${this.$seo.forProffesion(this, profession)} в ${new Date().getFullYear()}`

      return 'Работа для участников съёмочной группы: препродакшена, продакшена, постпродакшена и талантов';
    },
    description: function description() {
      var profession = this.$route.params.profession;

      // if (profession) return `Выбирайте лучших ${this.$seo.forProffesion(this, profession)} по вашим критериям, бесплатный подбор, удобный график`

      return 'Выбирайте лучших профессионалов по вашим критериям, бесплатный подбор, удобный график';
    }
  }),
  created: function created() {
    var _$route2 = this.$route,
        params = _$route2.params,
        query = _$route2.query;
    var professionName = params.profession;

    this._.merge(this.fields, _extends({}, query, { professionName: professionName }));
  },
  beforeDestroy: function beforeDestroy() {
    this._clearFilter().then(function () {
      console.log('Cleared professions...');
    }).catch(function () {});

    this.$root.$off('user-updated-state-folder');
  },
  beforeRouteUpdate: function beforeRouteUpdate(to, from, next) {
    var _this3 = this;

    var params = to.params,
        query = to.query;
    var professionName = params.profession;


    this._clearFilter().then(function () {
      console.log('Cleared professions...');
      Object.assign(_this3.fields, _extends({}, query, { professionName: professionName || null }));
      next();
    }).catch(function () {
      next();
    });
  },
  mounted: function mounted() {
    var _this4 = this;

    this.height = document.documentElement.clientHeight - this.$refs.wrapper.getBoundingClientRect().top + 'px';

    this.$root.$on('user-updated-state-folder', function (userId, inFolder) {
      var professions = _this4.professions.filter(function (p) {
        return p['user']['id'] === userId;
      });

      professions.forEach(function (p) {
        return _this4.$store.dispatch('user/profession/setFieldProfessionsData', { id: p['id'], key: 'user.inFolder', value: inFolder });
      });
    });
  },

  methods: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_1_vuex__["b" /* mapActions */])({
    fetchProfessions: 'user/profession/fetchProfessions',
    clearProfessions: 'user/profession/clearProfessions'
  }), {
    _handleFocusFieldSearchProfession: function _handleFocusFieldSearchProfession() {
      this.searchFocused = true;
    },
    _handleBlurFieldSearchProfession: function _handleBlurFieldSearchProfession() {
      this.searchFocused = false;
    },
    _handleClickCloseSearching: function _handleClickCloseSearching() {
      var _this5 = this;

      this.fields.query = null;

      this.$nextTick(function () {
        _this5._handleApplyFilter();
      });
    },

    _handleInputFieldSearchProfessions: __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.debounce(function (e) {
      var _this6 = this;

      var el = e.target;
      var key = Object(__WEBPACK_IMPORTED_MODULE_3__utils__["j" /* getDataAttribute */])(el, 'key');

      this.$validator.validate(key).then(function (result) {
        if (result) {
          _this6._handleApplyFilter(false);
        }
      });
    }, 900),
    _handleLoadTopProfessions: function _handleLoadTopProfessions() {
      var _this7 = this;

      var fields = this.fields;

      this.fetchProfessions({ fields: fields, offset: 0 }).then(function () {
        _this7.$refs.loadmore.onTopLoaded();
      }).catch(function () {
        return console.log('Error loading');
      });
    },
    _handleTopStatusChangeProfessions: function _handleTopStatusChangeProfessions(status) {
      this.loadmore.topStatus = status;
    },
    _handleInfiniteScroll: function _handleInfiniteScroll() {
      var fields = this.fields,
          offset = this.offset;

      this.fetchProfessions({ fields: fields, offset: offset });
    },
    _handleApplyFilter: function _handleApplyFilter() {
      var toggleFilter = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

      if (toggleFilter) this._toggleFilter();

      var fields = this.fields;

      this.$gtm.trackEvent({ event: 'filter_profession' });

      var profession = fields.professionName;

      var query = Object(__WEBPACK_IMPORTED_MODULE_3__utils__["u" /* omitEmpty */])(this._.omit(fields, ['professionName']), { omitZero: false });

      this.$router.replace({ name: 'users.professions.index', params: { profession: profession }, query: query });
    },
    _clearFilter: function _clearFilter() {
      var _this8 = this;

      return new Promise(function (resolve, reject) {
        try {
          _this8.fields = _this8._.clone(_this8.defaultFields);

          resolve && resolve();
        } catch (e) {
          reject && reject(e);
        }
      });
    },
    _handleHideFilter: function _handleHideFilter() {
      this._toggleFilter();
    },
    _toggleFilter: function _toggleFilter() {
      var _this9 = this;

      return new Promise(function (resolve, reject) {
        try {
          _this9.openFilter = !_this9.openFilter;

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

      this.$store.dispatch('user/profession/setFieldProfessionsData', { id: id, key: key, value: value });
    }
  })
});

/***/ }),

/***/ 1888:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mint_ui__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mint_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_mint_ui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vuex_map_fields__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modules_Geo_mixins_AjaxSelectCity__ = __webpack_require__(1505);
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







var _createHelpers = Object(__WEBPACK_IMPORTED_MODULE_2_vuex_map_fields__["a" /* createHelpers */])({
  getterType: 'user/profession/getField',
  mutationType: 'user/profession/updateField'
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
      groupId: null
    };
  },

  watch: {
    value: function value(val) {
      val ? window.nsWebViewInterface.emit('swipe2Back', true) : window.nsWebViewInterface.emit('swipe2Back', false);
      this.$root.$emit('open-modal-fullscreen', val);
    }
  },
  computed: _extends({}, mapFields({
    fields: 'professions.filter',
    defaultFields: 'professions.defaultFilter'
  }), Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["c" /* mapGetters */])({
    sources: 'user/profession/getSources'
  }), {
    showReset: function showReset() {
      var fields = this._.omit(this.fields, ['query']);
      var defaultFields = this._.omit(this.defaultFields, ['query']);

      return this._.isEqual(fields, defaultFields) === false;
    },
    groups: function groups() {
      return this.sources.professions.map(function (g) {
        return { id: g['name'], text: g['text'] };
      });
    },
    professions: function professions() {
      var _this = this;

      if (this.groupId) {
        var index = this._.findIndex(this.sources.professions, function (g) {
          return g.name === _this.groupId;
        });
        if (index > -1) {
          return this.sources.professions[index]['professions'].map(function (g) {
            return { id: g['data']['name'], text: g['text'] };
          });
        } else return [];
      } else return [];
    }
  }),
  mounted: function mounted() {
    var params = this.$route.params;
    var professionName = params.profession;


    if (professionName) {
      var professions = this.sources.professions;

      var indexOfProfession = _.findIndex(professions, _.flow(_.property('professions'), _.partialRight(_.some, { data: { name: professionName } })));

      if (indexOfProfession > -1) {
        this.groupId = this.sources['professions'][indexOfProfession]['name'];
      }
    }
  },
  created: function created() {
    var _this2 = this;

    this.$nextTick(function () {
      if (_this2.fields.countryId && _this2.sources.cities.length === 0) {
        _this2._handleChangeCountrySelect(_this2.fields.countryId, false, true);
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
      var _this3 = this;

      this._handleValidateFields().then(function () {
        _this3.$emit('apply');
      }).catch(function () {});
    },

    /**
     *
     */
    _handleClickClearFilter: function _handleClickClearFilter() {
      // this._clearFilter().then(() => {
      // }).catch(() => {})
      __WEBPACK_IMPORTED_MODULE_1_mint_ui__["Indicator"].open();

      this.$router.push({ name: 'users.index' }, function () {
        __WEBPACK_IMPORTED_MODULE_1_mint_ui__["Indicator"].close();
      }, function () {
        __WEBPACK_IMPORTED_MODULE_1_mint_ui__["Indicator"].close();
      });
    },
    _clearFilter: function _clearFilter() {
      var _this4 = this;

      return new Promise(function (resolve, reject) {
        try {
          _this4.fields = _this4._.clone(_this4.defaultFields);

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
      var _this5 = this;

      return new Promise(function (resolve, reject) {
        _this5.$validator.validateAll().then(function (result) {
          if (result) {
            resolve(result);
          } else reject();
        });
      });
    },
    _handleChangeGroupSelect: function _handleChangeGroupSelect() {
      this.fields.professionName = null;
    }
  }
});

/***/ }),

/***/ 2677:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(2678);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("76cc8c32", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js?sourceMap!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-54b72c79\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/sass-loader/lib/loader.js?indentedSyntax!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Index.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js?sourceMap!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-54b72c79\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/sass-loader/lib/loader.js?indentedSyntax!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Index.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 2678:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(true);
// imports


// module
exports.push([module.i, "\n.short-view[data-v-54b72c79] {\n  overflow: hidden;\n  height: 90px;\n}\n.d-nav-more[data-v-54b72c79] {\n  opacity: 0.72;\n  font-size: 12px;\n  font-weight: 600;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.33;\n  letter-spacing: 0.5px;\n  color: #515562;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  height: 19px;\n  margin-top: 12px;\n}\n.page__about[data-v-54b72c79] {\n  padding: 16px;\n}\n.d-icon_size_16[data-v-54b72c79] {\n  width: 16px;\n  height: 16px;\n}\n", "", {"version":3,"sources":["/home/karliv/work/linkmuse-mobile/src/views/User/Profession/Index.vue"],"names":[],"mappings":";AAAA;EACE,iBAAiB;EACjB,aAAa;CAAE;AAEjB;EACE,cAAc;EACd,gBAAgB;EAChB,iBAAiB;EACjB,qBAAqB;EACrB,mBAAmB;EACnB,kBAAkB;EAClB,sBAAsB;EACtB,eAAe;EACf,qBAAc;EAAd,sBAAc;EAAd,qBAAc;EAAd,cAAc;EACd,0BAAoB;EAApB,4BAAoB;MAApB,uBAAoB;UAApB,oBAAoB;EACpB,aAAa;EACb,iBAAiB;CAAE;AAErB;EACE,cAAc;CAAE;AAElB;EACE,YAAY;EACZ,aAAa;CAAE","file":"Index.vue","sourcesContent":[".short-view {\n  overflow: hidden;\n  height: 90px; }\n\n.d-nav-more {\n  opacity: 0.72;\n  font-size: 12px;\n  font-weight: 600;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.33;\n  letter-spacing: 0.5px;\n  color: #515562;\n  display: flex;\n  align-items: center;\n  height: 19px;\n  margin-top: 12px; }\n\n.page__about {\n  padding: 16px; }\n\n.d-icon_size_16 {\n  width: 16px;\n  height: 16px; }\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 2679:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Filter_vue__ = __webpack_require__(1888);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5b2f2157_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Filter_vue__ = __webpack_require__(2682);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(2680)
}
var normalizeComponent = __webpack_require__(2)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-5b2f2157"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Filter_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5b2f2157_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Filter_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/User/Profession/Filter.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5b2f2157", Component.options)
  } else {
    hotAPI.reload("data-v-5b2f2157", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 2680:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(2681);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("0b0951a4", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js?sourceMap!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-5b2f2157\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Filter.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js?sourceMap!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-5b2f2157\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Filter.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 2681:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(true);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"Filter.vue","sourceRoot":""}]);

// exports


/***/ }),

/***/ 2682:
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
                _vm._v(_vm._s(_vm.$t("unified-profile.filters.filters")))
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
                      [_vm._v("Сбросить")]
                    )
                  ]
                : _vm._e()
            ],
            2
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "form__section form__section_filters bt_none" },
            [
              _c(
                "div",
                { staticClass: "form__group form__group_declaration" },
                [
                  _c(
                    "label",
                    {
                      staticClass: "input__label",
                      attrs: { for: "form__select_declaration_groups" }
                    },
                    [
                      _vm._v(
                        "\n            " +
                          _vm._s(
                            _vm.$t("unified-profile.filters.professional-area")
                          ) +
                          "\n          "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c("lm-select", {
                    class: [
                      "lm-m-filter-line",
                      { filled: !!_vm.fields.groupId }
                    ],
                    attrs: {
                      "input-required": false,
                      "input-id": "form__select_declaration_groups",
                      "input-name": "groups",
                      "data-vv-name": "groups",
                      "data-vv-as": _vm.$t("unified-profile.filters.filters"),
                      placeholder: _vm.$t(
                        "unified-profile.filters.choose-professional-area"
                      ),
                      label: "",
                      multiple: false,
                      options: _vm.groups
                    },
                    on: { change: _vm._handleChangeGroupSelect },
                    model: {
                      value: _vm.groupId,
                      callback: function($$v) {
                        _vm.groupId = $$v
                      },
                      expression: "groupId"
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
                      staticClass: "input__label",
                      attrs: { for: "form__select_declaration_professions" }
                    },
                    [
                      _vm._v(
                        "\n            " +
                          _vm._s(_vm.$t("unified-profile.filters.profession")) +
                          "\n          "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c("lm-select", {
                    class: [
                      "lm-m-filter-line",
                      { filled: !!_vm.fields.professionName }
                    ],
                    attrs: {
                      "input-required": false,
                      "input-id": "form__select_declaration_professions",
                      "input-name": "professions",
                      "data-vv-name": "professions",
                      "data-vv-as": _vm.$t(
                        "unified-profile.filters.profession"
                      ),
                      placeholder: _vm.$t(
                        "unified-profile.filters.choose-profession"
                      ),
                      label: "",
                      disabled: !_vm.groupId,
                      multiple: false,
                      options: _vm.professions
                    },
                    model: {
                      value: _vm.fields["professionName"],
                      callback: function($$v) {
                        _vm.$set(_vm.fields, "professionName", $$v)
                      },
                      expression: "fields['professionName']"
                    }
                  })
                ],
                1
              )
            ]
          ),
          _vm._v(" "),
          _c("div", { staticClass: "form__section form__section_filters" }, [
            _c("div", { staticClass: "form__group form__group_declaration" }, [
              _c("label", { staticClass: "label input__label" }, [
                _vm._v(_vm._s(_vm.$t("unified-profile.filters.gender")))
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
                          "data-vv-as": _vm.$t("unified-profile.filters.gender")
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
            _c("div", { staticClass: "form__group form__group_declaration" }, [
              _c("div", { staticClass: "row row_justify_between" }, [
                _c("div", { staticClass: "column mr_4" }, [
                  _c("div", { staticClass: "input" }, [
                    _c(
                      "label",
                      { staticClass: "input__label", attrs: { for: "ageMin" } },
                      [_vm._v(_vm._s(_vm.$t("unified-profile.filters.age")))]
                    ),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        { name: "mask-numeric", rawName: "v-mask-numeric" },
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.fields.ageMin,
                          expression: "fields.ageMin"
                        },
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "decimal:3|min_value:1|max_value:150",
                          expression: "'decimal:3|min_value:1|max_value:150'"
                        }
                      ],
                      ref: "ageMin",
                      class: [
                        {
                          error: _vm.verrors.has("ageMin"),
                          filled: _vm.fields.ageTo && !_vm.verrors.has("ageMin")
                        },
                        "input__field",
                        "input__field_filters"
                      ],
                      attrs: {
                        type: "number",
                        inputmode: "numeric",
                        pattern: "[0-9]*",
                        id: "ageMin",
                        name: "ageMin",
                        "data-vv-name": "ageMin",
                        "data-vv-as": _vm.$t("unified-profile.filters.age"),
                        placeholder: _vm.$t("unified-profile.filters.from"),
                        min: "1",
                        max: "150"
                      },
                      domProps: { value: _vm.fields.ageMin },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.fields, "ageMin", $event.target.value)
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
                      { staticClass: "input__label", attrs: { for: "ageMax" } },
                      [_vm._v(" ")]
                    ),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        { name: "mask-numeric", rawName: "v-mask-numeric" },
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.fields.ageMax,
                          expression: "fields.ageMax"
                        },
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value:
                            "decimal:3|min_value:1|max_value:150|minTarget:ageMax",
                          expression:
                            "'decimal:3|min_value:1|max_value:150|minTarget:ageMax'"
                        }
                      ],
                      ref: "ageMax",
                      class: [
                        {
                          error: _vm.verrors.has("ageMax"),
                          filled:
                            _vm.fields.ageMax && !_vm.verrors.has("ageMax")
                        },
                        "input__field",
                        "input__field_filters"
                      ],
                      attrs: {
                        type: "number",
                        inputmode: "numeric",
                        pattern: "[0-9]*",
                        id: "ageMax",
                        name: "ageMax",
                        "data-vv-name": "ageMax",
                        "data-vv-as": _vm.$t("unified-profile.filters.to"),
                        placeholder: _vm.$t("unified-profile.filters.to"),
                        min: "1",
                        max: "150"
                      },
                      domProps: { value: _vm.fields.ageMax },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.fields, "ageMax", $event.target.value)
                        }
                      }
                    })
                  ])
                ])
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "form__section form__section_filters" }, [
            _c("div", { staticClass: "form__group form__group_declaration" }, [
              _c("div", { staticClass: "row row_justify_between" }, [
                _c("div", { staticClass: "column mr_4" }, [
                  _c("div", { staticClass: "input" }, [
                    _c(
                      "label",
                      {
                        staticClass: "input__label",
                        attrs: { for: "rateCostOfWorkMin" }
                      },
                      [_vm._v(_vm._s(_vm.$t("unified-profile.filters.rate")))]
                    ),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        { name: "mask-numeric", rawName: "v-mask-numeric" },
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.fields.rateCostOfWorkMin,
                          expression: "fields.rateCostOfWorkMin"
                        },
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "decimal:3|min_value:1|max_value:9999999",
                          expression:
                            "'decimal:3|min_value:1|max_value:9999999'"
                        }
                      ],
                      ref: "rateCostOfWorkMin",
                      class: [
                        {
                          error: _vm.verrors.has("rateCostOfWorkMin"),
                          filled:
                            _vm.fields.rateCostOfWorkMin &&
                            !_vm.verrors.has("rateCostOfWorkMin")
                        },
                        "input__field",
                        "input__field_filters"
                      ],
                      attrs: {
                        type: "text",
                        id: "rateCostOfWorkMin",
                        name: "rateCostOfWorkMin",
                        "data-vv-name": "rateCostOfWorkMin",
                        "data-vv-as": _vm.$t("unified-profile.filters.age"),
                        placeholder: _vm.$t("unified-profile.filters.from"),
                        min: "1",
                        max: "9999999"
                      },
                      domProps: { value: _vm.fields.rateCostOfWorkMin },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.fields,
                            "rateCostOfWorkMin",
                            $event.target.value
                          )
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
                      { staticClass: "input__label", attrs: { for: "ageMax" } },
                      [_vm._v(" ")]
                    ),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        { name: "mask-numeric", rawName: "v-mask-numeric" },
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.fields.rateCostOfWorkMax,
                          expression: "fields.rateCostOfWorkMax"
                        },
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value:
                            "decimal:3|min_value:1|max_value:9999999|minTarget:rateCostOfWorkMin",
                          expression:
                            "'decimal:3|min_value:1|max_value:9999999|minTarget:rateCostOfWorkMin'"
                        }
                      ],
                      ref: "rateCostOfWorkMax",
                      class: [
                        {
                          error: _vm.verrors.has("rateCostOfWorkMax"),
                          filled:
                            _vm.fields.rateCostOfWorkMax &&
                            !_vm.verrors.has("rateCostOfWorkMax")
                        },
                        "input__field",
                        "input__field_filters"
                      ],
                      attrs: {
                        type: "text",
                        id: "rateCostOfWorkMax",
                        name: "rateCostOfWorkMax",
                        "data-vv-name": "rateCostOfWorkMax",
                        "data-vv-as": _vm.$t("unified-profile.filters.to"),
                        placeholder: _vm.$t("unified-profile.filters.to"),
                        min: "1",
                        max: "9999999"
                      },
                      domProps: { value: _vm.fields.rateCostOfWorkMax },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.fields,
                            "rateCostOfWorkMax",
                            $event.target.value
                          )
                        }
                      }
                    })
                  ])
                ])
              ])
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "form__group form__group_declaration" },
              [
                _c(
                  "label",
                  {
                    staticClass: "input__label",
                    attrs: {
                      for: "form__select_declaration_ratePeriodSelection"
                    }
                  },
                  [
                    _vm._v(
                      "\n            " +
                        _vm._s(
                          _vm.$t("unified-profile.filters.payment-period")
                        ) +
                        "\n          "
                    )
                  ]
                ),
                _vm._v(" "),
                _c("lm-select", {
                  class: [
                    "lm-m-filter-line",
                    {
                      filled: _vm.fields.ratePeriodSelection,
                      error: _vm.verrors.has("ratePeriodSelection")
                    }
                  ],
                  attrs: {
                    "input-required": false,
                    "input-id": "form__select_declaration_ratePeriodSelection",
                    "input-name": "ratePeriodSelection",
                    "data-vv-name": "ratePeriodSelection",
                    "data-vv-as": _vm.$t(
                      "unified-profile.filters.payment-period"
                    ),
                    placeholder: _vm.$t("unified-profile.filters.not-chosen"),
                    label: "",
                    multiple: false,
                    options: _vm.sources["lists"]["vybor-perioda"]
                  },
                  model: {
                    value: _vm.fields.ratePeriodSelection,
                    callback: function($$v) {
                      _vm.$set(_vm.fields, "ratePeriodSelection", $$v)
                    },
                    expression: "fields.ratePeriodSelection"
                  }
                })
              ],
              1
            )
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
                    staticClass: "input__label",
                    attrs: { for: "form__select_declaration_country" }
                  },
                  [
                    _vm._v(
                      "\n            " +
                        _vm._s(_vm.$t("unified-profile.filters.country")) +
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
                    "data-vv-as": _vm.$t("unified-profile.filters.country"),
                    placeholder: _vm.$t(
                      "unified-profile.filters.all-countries"
                    ),
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
                    staticClass: "input__label",
                    attrs: { for: "form__select_declaration_city" }
                  },
                  [
                    _vm._v(
                      "\n            " +
                        _vm._s(_vm.$t("unified-profile.filters.city")) +
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
                    "data-vv-as": _vm.$t("unified-profile.filters.city"),
                    placeholder: _vm.$t("unified-profile.filters.all-cities"),
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
                [_vm._v(_vm._s(_vm.$t("unified-profile.filters.back")))]
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
                [_vm._v(_vm._s(_vm.$t("unified-profile.filters.set")))]
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
    require("vue-hot-reload-api")      .rerender("data-v-5b2f2157", esExports)
  }
}

/***/ }),

/***/ 2683:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "page page_feed profession-list" },
    [
      _c(
        "mt-loadmore",
        {
          ref: "loadmore",
          attrs: { "top-method": _vm._handleLoadTopProfessions },
          on: { "top-status-change": _vm._handleTopStatusChangeProfessions }
        },
        [
          _c("div", { staticClass: "page__header page__header_feed" }, [
            _c("div", { staticClass: "row row_justify_between" }, [
              _c("div", { staticClass: "heading_h4" }, [
                _vm._v(
                  _vm._s(
                    _vm.$t("unified-profile.professionals.professionals")
                  ) + " "
                ),
                _c("span", { staticClass: "section__counter_responses" }, [
                  _vm._v(_vm._s(_vm.total))
                ])
              ])
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "input input_search input_search_feed mb_0" },
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
                      value: "max:50",
                      expression: "'max:50'"
                    },
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.fields.query,
                      expression: "fields.query"
                    }
                  ],
                  ref: "query",
                  class: [
                    "input__field",
                    "input__field_search",
                    { error: _vm.verrors.has("query") }
                  ],
                  attrs: {
                    type: "text",
                    name: "query",
                    autocomplete: "false",
                    "data-lm-key": "query",
                    placeholder: _vm.$t("unified-profile.professionals.search")
                  },
                  domProps: { value: _vm.fields.query },
                  on: {
                    focus: _vm._handleFocusFieldSearchProfession,
                    blur: _vm._handleBlurFieldSearchProfession,
                    input: [
                      function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.fields, "query", $event.target.value)
                      },
                      _vm._handleInputFieldSearchProfessions
                    ]
                  }
                }),
                _vm._v(" "),
                _vm.fields.query
                  ? _c("button", {
                      staticClass: "btn btn_close",
                      on: { click: _vm._handleClickCloseSearching }
                    })
                  : _vm._e()
              ]
            )
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
                  _vm._l(_vm.professions, function(profession) {
                    return _c("profession-card", {
                      key: profession.id,
                      attrs: { profession: profession },
                      on: { changeState: _vm._handleChangeState }
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
                        [
                          _vm._v(
                            _vm._s(
                              _vm.$t("unified-profile.nothing-found.no-results")
                            )
                          )
                        ]
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _c("div", { staticClass: "page__about" }, [
                    _c("div", { staticClass: "d-card d-card_outline" }, [
                      _c("div", {
                        staticClass: "d-nav d-nav_inline-bullet",
                        class: [{ "short-view": !_vm.seoTextShow }],
                        domProps: { innerHTML: _vm._s(_vm.seoText) }
                      }),
                      _vm._v(" "),
                      _c(
                        "a",
                        {
                          staticClass: "d-nav-more",
                          attrs: { href: "javascript:void(0)" },
                          on: {
                            click: function($event) {
                              _vm.seoTextShow = !_vm.seoTextShow
                            }
                          }
                        },
                        [
                          _vm.seoTextShow
                            ? [
                                _vm._v("Свернуть\n                "),
                                _c(
                                  "svg",
                                  {
                                    staticClass:
                                      "d-icon d-icon_size_16 rotate_180"
                                  },
                                  [
                                    _c("use", {
                                      attrs: {
                                        "xlink:href":
                                          "/dist/img/icons/svg/sprite.svg#lm-chevron-bottom"
                                      }
                                    })
                                  ]
                                )
                              ]
                            : [
                                _vm._v("Читать польностью\n                "),
                                _c(
                                  "svg",
                                  { staticClass: "d-icon d-icon_size_16" },
                                  [
                                    _c("use", {
                                      attrs: {
                                        "xlink:href":
                                          "/dist/img/icons/svg/sprite.svg#lm-chevron-bottom"
                                      }
                                    })
                                  ]
                                )
                              ]
                        ],
                        2
                      )
                    ])
                  ])
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
                      _vm._s(_vm.$t("unified-profile.professionals.filters")) +
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
      _c("profession-filter", {
        on: { hide: _vm._handleHideFilter, apply: _vm._handleApplyFilter },
        model: {
          value: _vm.openFilter,
          callback: function($$v) {
            _vm.openFilter = $$v
          },
          expression: "openFilter"
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
    require("vue-hot-reload-api")      .rerender("data-v-54b72c79", esExports)
  }
}

/***/ })

});
//# sourceMappingURL=87.build.5e187d9b5f6bde074eb4.js.map