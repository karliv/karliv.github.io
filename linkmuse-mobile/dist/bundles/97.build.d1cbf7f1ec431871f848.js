webpackJsonp([97],{

/***/ 1286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Show_vue__ = __webpack_require__(1640);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_64aa955e_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Show_vue__ = __webpack_require__(1993);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1987)
}
var normalizeComponent = __webpack_require__(2)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-64aa955e"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Show_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_64aa955e_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Show_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/views/Board/Locations/Show.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-64aa955e", Component.options)
  } else {
    hotAPI.reload("data-v-64aa955e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 1539:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return UP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FASTEN; });
var UP = 'up';
var FASTEN = 'fasten';

/***/ }),

/***/ 1543:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Enums_LocationState__ = __webpack_require__(437);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var Location = function () {
  function Location() {
    var _classes;

    _classCallCheck(this, Location);

    this.state = {
      classes: (_classes = {}, _classes[__WEBPACK_IMPORTED_MODULE_0__Enums_LocationState__["b" /* CREATED */]] = null, _classes[__WEBPACK_IMPORTED_MODULE_0__Enums_LocationState__["c" /* DRAFT */]] = 'color_gray-3', _classes[__WEBPACK_IMPORTED_MODULE_0__Enums_LocationState__["d" /* MODERATION */]] = 'color_support-3', _classes[__WEBPACK_IMPORTED_MODULE_0__Enums_LocationState__["f" /* REJECTED */]] = 'color_support-1', _classes[__WEBPACK_IMPORTED_MODULE_0__Enums_LocationState__["e" /* PUBLISHED */]] = null, _classes[__WEBPACK_IMPORTED_MODULE_0__Enums_LocationState__["a" /* ARCHIVED */]] = 'color_gray-3', _classes)
    };
  }

  Location.prototype.getLocationStateClass = function getLocationStateClass(status) {
    var item = this.state.classes[status];
    return item || '';
  };

  return Location;
}();

/* harmony default export */ __webpack_exports__["a"] = (new Location());

/***/ }),

/***/ 1640:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mint_ui__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mint_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_mint_ui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vuex__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modules_Board_Location__ = __webpack_require__(1543);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Board_Location_Show_Map_vue__ = __webpack_require__(1989);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__modules_Rating_Enums_events__ = __webpack_require__(438);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__modules_Board_Enums_PromotionType__ = __webpack_require__(1539);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__modules_Board_Location_Enums_LocationState__ = __webpack_require__(437);
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  components: { ShowLocationMap: __WEBPACK_IMPORTED_MODULE_4__components_Board_Location_Show_Map_vue__["a" /* default */] },
  metaInfo: function metaInfo() {
    return {
      title: this.seoTitle,
      meta: [{ name: 'og:type', content: 'website' }, { name: 'og:title', content: this.seoTitle }, { name: 'description', content: this.$truncate(this.$striptags(this.seoDescription), 200) }, { name: 'og:description', content: this.$truncate(this.$striptags(this.seoDescription), 200) }, { name: 'og:image', content: 'https://s3.eu-central-1.amazonaws.com/linkmuse/upload/logo/logo_without_bottom_text_682.png' }]
    };
  },
  asyncData: function asyncData(_ref) {
    var _this = this;

    var store = _ref.store,
        route = _ref.route;
    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var id;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              id = route.params.id;
              _context.next = 3;
              return store.dispatch('board/location/getLocationById', { id: id }).catch(function (error) {
                var _error$response = error.response,
                    _error$response$statu = _error$response.status,
                    status = _error$response$statu === undefined ? 500 : _error$response$statu,
                    _error$response$url = _error$response.url,
                    url = _error$response$url === undefined ? null : _error$response$url;

                throw { code: status, message: 'Error show location', url: url };
              });

            case 3:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this);
    }))();
  },
  data: function data() {
    var _data, _promotion;

    return {
      has: __WEBPACK_IMPORTED_MODULE_0__utils__["l" /* has */],
      APP_URL: APP_URL,
      UP: __WEBPACK_IMPORTED_MODULE_6__modules_Board_Enums_PromotionType__["b" /* UP */], FASTEN: __WEBPACK_IMPORTED_MODULE_6__modules_Board_Enums_PromotionType__["a" /* FASTEN */],
      sheet: {
        value: false,
        actions: []
      },
      promotion: (_promotion = {
        payment: { form: {}, url: null }
      }, _promotion[__WEBPACK_IMPORTED_MODULE_6__modules_Board_Enums_PromotionType__["b" /* UP */]] = { success: false, loading: false }, _promotion[__WEBPACK_IMPORTED_MODULE_6__modules_Board_Enums_PromotionType__["a" /* FASTEN */]] = { success: false, loading: false }, _promotion.prices = { data: (_data = {}, _data[__WEBPACK_IMPORTED_MODULE_6__modules_Board_Enums_PromotionType__["b" /* UP */]] = { full: 0, percent: 0, discount: 0 }, _data[__WEBPACK_IMPORTED_MODULE_6__modules_Board_Enums_PromotionType__["a" /* FASTEN */]] = { full: 0, percent: 0, discount: 0 }, _data), loading: false, error: false }, _promotion),
      hideContacts: true
    };
  },

  computed: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_2_vuex__["c" /* mapGetters */])({
    role: 'auth/getRole',
    user: 'auth/getAuthUser',
    profile: 'auth/getProfile',
    isAuthorized: 'auth/isAuthorized',
    error: 'board/location/getLocationError',
    location: 'board/location/getLocationData',
    loading: 'board/location/getLocationLoading'
  }), {
    title: function title() {
      return this.location ? this.type + ' ' + (this.dimension ? this.dimension : 0) + '\u043C\xB2 - \u043E\u0442 ' + (this.price ? this.$currency(this.price, this.currency) : 0) + ' ' + (this.paymentPeriod ? this.paymentPeriod.toLowerCase() : '') : 'Ошибка';
    },
    photos: function photos() {
      return this.location.photos && this.location.photos.length ? this.location.photos : [];
    },
    description: function description() {
      var description = this.location.description;


      if (description) {
        description = this.$htmlspecialchars(description); // Escape special characters to HTML
        description = this.$markdown(description); // Transform markdown to html
        description = this.$anchorme(description); // find link and to <a>
      }

      return description;
    },
    state: function state() {
      return this.location.state;
    },
    isCurrentUser: function isCurrentUser() {
      return this.user && this.user.id === this.location.user.id;
    },
    isModeration: function isModeration() {
      return this.state === __WEBPACK_IMPORTED_MODULE_7__modules_Board_Location_Enums_LocationState__["d" /* MODERATION */];
    },
    isPublished: function isPublished() {
      return this.state === __WEBPACK_IMPORTED_MODULE_7__modules_Board_Location_Enums_LocationState__["e" /* PUBLISHED */];
    },
    isDraft: function isDraft() {
      return this.state === __WEBPACK_IMPORTED_MODULE_7__modules_Board_Location_Enums_LocationState__["c" /* DRAFT */];
    },
    isArchived: function isArchived() {
      return this.state === __WEBPACK_IMPORTED_MODULE_7__modules_Board_Location_Enums_LocationState__["a" /* ARCHIVED */];
    },
    isRejected: function isRejected() {
      return this.state === __WEBPACK_IMPORTED_MODULE_7__modules_Board_Location_Enums_LocationState__["f" /* REJECTED */];
    },
    isAdmin: function isAdmin() {
      return this.user && this.user.hasOwnProperty('isAdmin') && this.user['isAdmin'] === true;
    },
    type: function type() {
      return this.location.type && Object(__WEBPACK_IMPORTED_MODULE_0__utils__["l" /* has */])(this.location.type, 'text') ? this.location.type.text : null;
    },
    typeId: function typeId() {
      return this.location.type && Object(__WEBPACK_IMPORTED_MODULE_0__utils__["l" /* has */])(this.location.type, 'id') ? this.location.type.id : null;
    },
    dimension: function dimension() {
      return Number(this.location.dimension);
    },
    price: function price() {
      return this.location['price'];
    },
    currency: function currency() {
      return this.location.currency && Object(__WEBPACK_IMPORTED_MODULE_0__utils__["l" /* has */])(this.location.currency, 'symbol') ? this.location.currency.symbol : null;
    },
    paymentPeriod: function paymentPeriod() {
      return this.location.paymentPeriod && Object(__WEBPACK_IMPORTED_MODULE_0__utils__["l" /* has */])(this.location.paymentPeriod, 'text') ? this.location.paymentPeriod.text : null;
    },
    roomType: function roomType() {
      return this.location.roomType && Object(__WEBPACK_IMPORTED_MODULE_0__utils__["l" /* has */])(this.location.roomType, 'text') ? this.location.roomType.text : null;
    },
    roomHeight: function roomHeight() {
      return Number(this.location['roomHeight']);
    },
    facilities: function facilities() {
      return this.location['facilities'];
    },
    equipment: function equipment() {
      return this.location['equipment'];
    },
    hasScene: function hasScene() {
      return Boolean(this.location.scene);
    },
    hasParking: function hasParking() {
      return Boolean(this.location.parking);
    },
    hasExterior: function hasExterior() {
      return Boolean(this.location.exterior);
    },
    hasInterior: function hasInterior() {
      return Boolean(this.location.interior);
    },
    hasDaylight: function hasDaylight() {
      return Boolean(this.location.daylight);
    },
    hasCyclorama: function hasCyclorama() {
      return Boolean(this.location.cyclorama);
    },
    hasChromakey: function hasChromakey() {
      return Boolean(this.location.chromakey);
    },
    hasDressingRoom: function hasDressingRoom() {
      return Boolean(this.location.dressingRoom);
    },
    hasEquipmentRental: function hasEquipmentRental() {
      return Boolean(this.location.equipmentRental);
    },
    hasAdditionally: function hasAdditionally() {
      return this.hasScene || this.hasParking || this.hasExterior || this.hasInterior || this.hasDaylight || this.hasCyclorama || this.hasChromakey || this.hasDressingRoom || this.hasEquipmentRental;
    },
    additionally: function additionally() {
      var additionally = [];

      if (this.hasScene) additionally.push('Сцена');
      if (this.hasParking) additionally.push('Парковка');
      if (this.hasExterior) additionally.push('Экстерьер');
      if (this.hasInterior) additionally.push('Декорации');
      if (this.hasDaylight) additionally.push('Дневной свет');
      if (this.hasCyclorama) additionally.push('Циклорама');
      if (this.hasChromakey) additionally.push('Хромакей');
      if (this.hasDressingRoom) additionally.push('Гримёрка');
      if (this.hasEquipmentRental) additionally.push('Прокат оборудования');

      return additionally;
    },
    passSystem: function passSystem() {
      return this.location['passSystem'];
    },
    address: function address() {
      var attribute = '';

      if (Object(__WEBPACK_IMPORTED_MODULE_0__utils__["l" /* has */])(this.location, 'country.text')) {
        attribute += this.location.country.text;
      }

      if (Object(__WEBPACK_IMPORTED_MODULE_0__utils__["l" /* has */])(this.location, 'city.text')) {
        attribute += Object(__WEBPACK_IMPORTED_MODULE_0__utils__["l" /* has */])(this.location, 'country.text') ? ', ' : '';
        attribute += this.location.city.text;
      }

      if (Object(__WEBPACK_IMPORTED_MODULE_0__utils__["l" /* has */])(this.location, 'address.address')) {
        attribute += Object(__WEBPACK_IMPORTED_MODULE_0__utils__["l" /* has */])(this.location, 'country.text') || Object(__WEBPACK_IMPORTED_MODULE_0__utils__["l" /* has */])(this.location, 'city.text') ? ', ' : '';
        attribute += this.location.address['address'];
      }

      return attribute;
    },
    showMap: function showMap() {
      return this.lat && this.lng;
    },
    lat: function lat() {
      return this.location.address && Object(__WEBPACK_IMPORTED_MODULE_0__utils__["l" /* has */])(this.location.address, 'lat') ? this.location.address.lat : null;
    },
    lng: function lng() {
      return this.location.address && Object(__WEBPACK_IMPORTED_MODULE_0__utils__["l" /* has */])(this.location.address, 'lng') ? this.location.address.lng : null;
    },
    phone: function phone() {
      return Object(__WEBPACK_IMPORTED_MODULE_0__utils__["l" /* has */])(this.location, 'phone') && this.location['phone'] ? this.location['phone'] : null;
    },
    email: function email() {
      return Object(__WEBPACK_IMPORTED_MODULE_0__utils__["l" /* has */])(this.location, 'email') && this.location['email'] ? this.location['email'] : null;
    },
    site: function site() {
      return Object(__WEBPACK_IMPORTED_MODULE_0__utils__["l" /* has */])(this.location, 'site') && this.location['site'] ? this.location['site'] : null;
    },
    otherContact: function otherContact() {
      return Object(__WEBPACK_IMPORTED_MODULE_0__utils__["l" /* has */])(this.location, 'other') && this.location['other'] ? this.location['other'] : null;
    },
    hasContacts: function hasContacts() {
      return Boolean(this.phone) || Boolean(this.email) || Boolean(this.site) || Boolean(this.otherContact);
    },
    author: function author() {
      return this.location.user;
    },
    href: function href() {
      var _location = this.location,
          id = _location.id,
          slug = _location.slug;

      var query = this.isAuthorized && this.user ? { ref: this.user.id } : {};

      var _$router$resolve = this.$router.resolve({ name: 'board.locations.show', params: { id: id, slug: slug }, query: query }),
          href = _$router$resolve.href;

      return href;
    },
    isFasten: function isFasten() {
      return this.location.isFasten || false;
    },
    userBalance: function userBalance() {
      return this.user.balance;
    },
    seoTitle: function seoTitle() {
      var title = '' + this.type;

      if (Object(__WEBPACK_IMPORTED_MODULE_0__utils__["l" /* has */])(this.location.city, 'name')) {
        var city = this.$seo.inCity(this, this.location.city);

        if (city) title += ' \u0432 ' + city;
      }

      return title + ' ' + (this.dimension ? this.dimension : 0) + ' \u043A\u0432.\u043C. ' + (this.price ? '\u043E\u0442 ' + this.price + ' ' + this.currency : '') + ' ' + (this.paymentPeriod ? this.paymentPeriod.toLowerCase() : '');
    },
    seoDescription: function seoDescription() {
      var desc = this.type;

      if (Object(__WEBPACK_IMPORTED_MODULE_0__utils__["l" /* has */])(this.location.city, 'name')) {
        var city = this.$seo.inCity(this, this.location.city);

        if (city) desc += ' \u0432 ' + city;
      }

      return desc + ', \u0434\u0430\u0442\u0430 \u043F\u0443\u0431\u043B\u0438\u043A\u0430\u0446\u0438\u0438 ' + this.$moment(this.location.publishedAt).format('DD.MM.YY') + '. \u0412\u0441\u0435 \u043E\u0431\u044A\u044F\u0432\u043B\u0435\u043D\u0438\u044F \u043F\u0440\u043E\u0445\u043E\u0434\u044F\u0442 \u043F\u0440\u043E\u0432\u0435\u0440\u043A\u0443 \u043C\u043E\u0434\u0435\u0440\u0430\u0442\u043E\u0440\u043E\u043C';
    },
    hasPricePromotion: function hasPricePromotion() {
      return Boolean(this.promotion.prices['data'][__WEBPACK_IMPORTED_MODULE_6__modules_Board_Enums_PromotionType__["a" /* FASTEN */]]['discount'] && Boolean(this.promotion.prices['data'][__WEBPACK_IMPORTED_MODULE_6__modules_Board_Enums_PromotionType__["b" /* UP */]]['discount']) && this.promotion.prices.loading === false);
    }
  }),
  created: function created() {
    this._draftSheet();
  },
  mounted: function mounted() {
    var _$route = this.$route,
        ref = _$route.query.ref,
        path = _$route.path;


    if (ref) {
      this.$localStorage.set('redirect.register', path);
    }

    if (this.isAuthorized && this.isCurrentUser) {
      this.hideContacts = false;

      this._getPricePromotion();
    } else {
      if (__WEBPACK_IMPORTED_MODULE_0__utils__["n" /* isBrowser */]) this.$nsWebViewInterface.emit('rating', __WEBPACK_IMPORTED_MODULE_5__modules_Rating_Enums_events__["e" /* viewLocation */]);
    }
  },

  methods: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_2_vuex__["b" /* mapActions */])({
    setFieldLocationData: 'board/location/setFieldLocationData'
  }), {
    _getPricePromotion: function _getPricePromotion() {
      var _this2 = this;

      this.promotion.prices.loading = true;

      this.$api.get('api/v2/promotions/prices/board_location').then(function (response) {
        var data = response.data.data;


        Object.assign(_this2.promotion.prices, { data: data, loading: false, error: false });
      }, function (error) {
        var _error$response2 = error.response,
            data = _error$response2.data,
            status = _error$response2.status;


        Object.assign(_this2.promotion.prices, { error: true, loading: false });
        _this2.$notify({ type: 'error', title: 'Ошибка', text: 'Произошла ошибка при получении цен.' });

        throw new Error('Error fetch professions prices promotion');
      });
    },
    _draftSheet: function _draftSheet() {
      var _this3 = this;

      return new Promise(function (resolve, reject) {
        try {
          if (_this3.isCurrentUser === true) {
            if (_this3.location && _this3.location.state !== __WEBPACK_IMPORTED_MODULE_7__modules_Board_Location_Enums_LocationState__["a" /* ARCHIVED */]) {
              _this3.sheet.actions.push({
                name: 'Редактировать',
                method: _this3._handleClickEditLocation
              });
            }

            if (_this3.location && _this3.location.state === __WEBPACK_IMPORTED_MODULE_7__modules_Board_Location_Enums_LocationState__["a" /* ARCHIVED */]) {
              _this3.sheet.actions.push({
                name: 'Опубликовать',
                method: _this3._handleClickPublishedLocation
              });
            }

            if (_this3.location && _this3.location.state === __WEBPACK_IMPORTED_MODULE_7__modules_Board_Location_Enums_LocationState__["e" /* PUBLISHED */]) {
              _this3.sheet.actions.push({
                name: 'В архив',
                method: _this3._handleClickToArchiveLocation
              });
            }
          }

          if (_this3.isCurrentUser === false) {
            _this3.sheet.actions.push({
              name: 'Пожаловаться',
              method: _this3._handleAbuseLocation
            });
          }

          if (_this3.isAdmin === true && _this3.location.state === __WEBPACK_IMPORTED_MODULE_7__modules_Board_Location_Enums_LocationState__["d" /* MODERATION */]) {
            _this3.sheet.actions.push({
              name: 'Одобрить',
              method: _this3._handleClickApproveLocation
            });
          }

          if (_this3.isAuthorized && _this3.user) {
            _this3.sheet.actions.push({
              name: 'Скопировать ссылку',
              method: _this3._handleClickClipBoardLocation
            });
          }

          if (_this3.isAdmin === true && _this3.isCurrentUser === false) {
            _this3.sheet.actions.push({
              name: 'Редактировать',
              method: _this3._handleClickEditLocation
            });
          }

          resolve && resolve(true);
        } catch (e) {
          reject && reject(e);
        }
      });
    },
    _clearSheet: function _clearSheet() {
      var _this4 = this;

      return new Promise(function (resolve, reject) {
        try {
          _this4.sheet.actions = [];
          resolve && resolve(true);
        } catch (e) {
          reject && reject(e);
        }
      });
    },
    _handleClickPreviousPage: function _handleClickPreviousPage() {
      if (window.history.length > 2) {
        this.$router.go(-1);
      } else this.$router.push({ name: 'board.locations.index' });
    },
    _handleClickEditLocation: function _handleClickEditLocation() {
      var id = this.location.id;

      this.$router.push({ name: 'board.locations.edit', params: { id: id } });
    },
    _handleClickActionSheet: function _handleClickActionSheet() {
      this.sheet.value = true;
    },
    _handleClickClipBoardLocation: function _handleClickClipBoardLocation() {
      var _location2 = this.location,
          id = _location2.id,
          slug = _location2.slug;

      var _$router$resolve2 = this.$router.resolve({ name: 'board.locations.show', params: { id: id, slug: slug }, query: { ref: this.user.id } }),
          href = _$router$resolve2.href;

      this.$copyText(APP_URL + href).then(function (e) {
        Object(__WEBPACK_IMPORTED_MODULE_1_mint_ui__["Toast"])({ message: 'Успешно', iconClass: 'mintui mintui-success' });
      }, function (e) {
        Object(__WEBPACK_IMPORTED_MODULE_1_mint_ui__["Toast"])({ message: 'Ошибка', iconClass: 'mintui mintui-field-error' });
      });
    },
    _handleAbuseLocation: function _handleAbuseLocation() {
      var id = this.location.id;

      this.$root.$emit('open-modal-abuse-create', { id: id, type: 'board_location' });
    },
    _handleClickPublishedLocation: function _handleClickPublishedLocation() {
      var _this5 = this;

      return new Promise(function (resolve, reject) {

        __WEBPACK_IMPORTED_MODULE_1_mint_ui__["Indicator"].open();
        var id = _this5.location.id;


        _this5.$api.post('api/v2/boards/locations/' + id + '/publish').then(function (response) {
          var data = response.data;


          if (Object(__WEBPACK_IMPORTED_MODULE_0__utils__["l" /* has */])(_this5.profile, 'without_moderate.castings') && _this5.profile['without_moderate']['castings']) {
            _this5.setFieldLocationData({ key: 'state', value: __WEBPACK_IMPORTED_MODULE_7__modules_Board_Location_Enums_LocationState__["e" /* PUBLISHED */] });
          } else _this5.setFieldLocationData({ key: 'state', value: __WEBPACK_IMPORTED_MODULE_7__modules_Board_Location_Enums_LocationState__["d" /* MODERATION */] });

          __WEBPACK_IMPORTED_MODULE_1_mint_ui__["Indicator"].close();
          _this5._clearSheet().then(function () {
            return _this5._draftSheet();
          }).catch(function () {});

          resolve && resolve();
        }, function (error) {
          var data = error.response.data,
              status = error.response.status;


          __WEBPACK_IMPORTED_MODULE_1_mint_ui__["Indicator"].close();
          Object(__WEBPACK_IMPORTED_MODULE_1_mint_ui__["Toast"])({ message: 'Ошибка', iconClass: 'mintui mintui-field-error' });

          reject && reject();

          throw new Error('Error publish location');
        });
      });
    },
    _handleClickToArchiveLocation: function _handleClickToArchiveLocation() {
      var _this6 = this;

      this.$confirm({
        cancelTxt: 'отмена',
        confirmTxt: 'в архив',
        title: 'Подтвердите действие',
        message: 'Вы уверены, что хотите удалить и перенести объявление в архив?'
      }).then(function () {
        _this6._handleArchive();
      }).catch(function () {});
    },
    _handleArchive: function _handleArchive() {
      var _this7 = this;

      return new Promise(function (resolve, reject) {
        __WEBPACK_IMPORTED_MODULE_1_mint_ui__["Indicator"].open();

        var id = _this7.location.id;

        _this7.$api.post('api/v2/boards/locations/' + id + '/archive').then(function (response) {
          var data = response.data;

          _this7.setFieldLocationData({ key: 'state', value: __WEBPACK_IMPORTED_MODULE_7__modules_Board_Location_Enums_LocationState__["a" /* ARCHIVED */] });
          _this7._clearSheet().then(function () {
            return _this7._draftSheet();
          }).catch(function () {});

          __WEBPACK_IMPORTED_MODULE_1_mint_ui__["Indicator"].close();

          resolve();
        }, function (error) {
          var _error$response3 = error.response,
              data = _error$response3.data,
              status = _error$response3.status;


          __WEBPACK_IMPORTED_MODULE_1_mint_ui__["Indicator"].close();
          Object(__WEBPACK_IMPORTED_MODULE_1_mint_ui__["Toast"])({ message: 'Ошибка', iconClass: 'mintui mintui-field-error' });

          reject();

          throw new Error('Error draft location');
        });
      });
    },
    _handleClickMessage: function _handleClickMessage() {
      if (this.isAuthorized === false) {
        this._handleClickMessageWithoutAuthorized();
      } else this._handleMessage();

      this.$gtm.trackEvent({ event: 'location_write_message' });
    },
    _handleClickMessageWithoutAuthorized: function _handleClickMessageWithoutAuthorized() {
      var _this8 = this;

      this.$localStorage.set('redirect.register', this.href);
      this.$nextTick(function () {
        _this8.$router.push({ name: 'register' });
      });
    },
    _handleMessage: function _handleMessage() {
      var uid = this._.sortBy([this.author.id, this.user.id]).toString();
      this.$router.push({ name: 'messages.show', params: { uid: uid } });
    },
    _handleClickApproveLocation: function _handleClickApproveLocation() {
      var _this9 = this;

      __WEBPACK_IMPORTED_MODULE_1_mint_ui__["Indicator"].open();
      var id = this.location.id;


      this.$api.post('/api/admin/v1/boards/locations/' + id + '/approve').then(function (response) {
        __WEBPACK_IMPORTED_MODULE_1_mint_ui__["Indicator"].close();
        var data = response.data.data;

        _this9.setFieldLocationData({ key: 'state', value: __WEBPACK_IMPORTED_MODULE_7__modules_Board_Location_Enums_LocationState__["e" /* PUBLISHED */] });
        _this9._clearSheet().then(function () {
          return _this9._draftSheet();
        }).catch(function () {});
      }, function (err) {
        __WEBPACK_IMPORTED_MODULE_1_mint_ui__["Indicator"].close();
        Object(__WEBPACK_IMPORTED_MODULE_1_mint_ui__["Toast"])({ message: 'Ошибка', iconClass: 'mintui mintui-field-error' });
      });
    },
    isToday: function isToday(date) {
      var context = this.$moment(date);
      return this.$moment().isSame(context, 'd');
    },
    _handleShowContacts: function _handleShowContacts() {
      this.hideContacts = false;
      this.$gtm.trackEvent({ event: 'location_show_contact' });
    },
    _handleClickCreateLocationPromotion: function _handleClickCreateLocationPromotion(type) {
      var id = this.location.id;

      this._createLocationPromotion(id, type);
    },
    _createLocationPromotion: function _createLocationPromotion(locationId, type) {
      var _this10 = this;

      __WEBPACK_IMPORTED_MODULE_1_mint_ui__["Indicator"].open();
      this.promotion[type]['loading'] = true;

      var data = { promotedType: 'board_location', promotedId: locationId, typeName: type };

      this.$api.post('api/v2/boards/promotions', data).then(function (response) {
        var _response$data$data = response.data.data,
            id = _response$data$data.id,
            price = _response$data$data.type.price;


        if (_this10.userBalance >= Number(price)) {
          _this10._activatePromotion(id, type).then(function () {
            __WEBPACK_IMPORTED_MODULE_1_mint_ui__["Indicator"].close();
            _this10.promotion[type]['success'] = true;
            _this10.promotion[type]['loading'] = false;
          }).catch(function () {
            __WEBPACK_IMPORTED_MODULE_1_mint_ui__["Indicator"].close();_this10.promotion[type]['loading'] = false;
          });
        } else {
          _this10.$nativeCloudPayments.pay(price).then(function (data) {
            var status = data.status;


            if (status === 'success') {
              _this10.promotion[type]['success'] = true;
            }

            _this10.promotion[type]['loading'] = false;
            __WEBPACK_IMPORTED_MODULE_1_mint_ui__["Indicator"].close();
          }).catch(function (e) {
            _this10._getPaymentFields(price).then(function () {
              _this10._initCloudPaymentsWidget(id, type).then(function () {
                __WEBPACK_IMPORTED_MODULE_1_mint_ui__["Indicator"].close();
                _this10.promotion[type]['success'] = true;
                _this10.promotion[type]['loading'] = false;
              }).catch(function () {
                __WEBPACK_IMPORTED_MODULE_1_mint_ui__["Indicator"].close();_this10.promotion[type]['loading'] = false;
              });
            }).catch(function () {
              __WEBPACK_IMPORTED_MODULE_1_mint_ui__["Indicator"].close();_this10.promotion[type]['loading'] = false;
            });
          });
        }
      }).catch(function (err) {
        _this10.promotion[type]['loading'] = false;

        __WEBPACK_IMPORTED_MODULE_1_mint_ui__["Indicator"].close();
        Object(__WEBPACK_IMPORTED_MODULE_1_mint_ui__["Toast"])({ message: 'Ошибка', iconClass: 'mintui mintui-field-error' });

        throw new Error('Error create location promotion.');
      });
    },
    _activatePromotion: function _activatePromotion(id, type) {
      var _this11 = this;

      return new Promise(function (resolve, reject) {
        _this11.$api.post('api/v2/boards/promotions/' + id + '/activate').then(function (response) {
          var data = response.data;

          resolve && resolve();
        }, function (error) {
          var _error$response4 = error.response,
              data = _error$response4.data,
              status = _error$response4.status;


          reject && reject();
          Object(__WEBPACK_IMPORTED_MODULE_1_mint_ui__["Toast"])({ message: 'Ошибка', iconClass: 'mintui mintui-field-error' });

          throw new Error('Error payment promotion #' + id);
        });
      });
    },
    _getPaymentFields: function _getPaymentFields(price) {
      var _this12 = this;

      return new Promise(function (resolve, reject) {
        var amount = parseFloat(price).toFixed(2);

        if (!amount) reject && reject('Need price');

        _this12.$api.post('api/v2/billing/payment', { amount: amount }).then(function (response) {
          var _response$data = response.data,
              form = _response$data.form,
              url = _response$data.url;

          _this12.promotion.payment = { form: form, url: url };

          resolve && resolve();
        }).catch(function (err) {
          reject && reject();
          throw new Error('Error get payment fields');
        });
      });
    },
    _initCloudPaymentsWidget: function _initCloudPaymentsWidget(id, type) {
      var _this13 = this;

      if ((typeof cp === 'undefined' ? 'undefined' : _typeof(cp)) !== 'object') {
        throw new Error('Error load CloudPayments');
      }

      return new Promise(function (resolve, reject) {
        var widget = new cp.CloudPayments();
        var _promotion$payment$fo = _this13.promotion.payment.form,
            publicId = _promotion$payment$fo.publicId,
            description = _promotion$payment$fo.description,
            amount = _promotion$payment$fo.amount,
            currency = _promotion$payment$fo.currency,
            invoiceId = _promotion$payment$fo.invoiceId,
            accountId = _promotion$payment$fo.accountId;


        widget.charge({
          publicId: publicId,
          description: description,
          amount: Number(amount),
          currency: currency,
          invoiceId: invoiceId,
          accountId: accountId
        }, function (options) {
          _this13._activatePromotion(id, type).then(function () {
            resolve && resolve();
          }).catch(function () {
            reject && reject();
          });
        }, function (reason, options) {
          reject && reject();
          throw new Error('Error payment promotion #' + id + '. ' + reason);
        });
      });
    },
    _handleClickCallUser: function _handleClickCallUser() {
      this.$gtm.trackEvent({ event: 'location_call' });
    }
  })
});

/***/ }),

/***/ 1641:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue2_google_maps__ = __webpack_require__(445);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue2_google_maps___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__node_modules_vue2_google_maps__);
//
//
//
//
//
//
//
//
//
//
//
//



 // SUPER PUPER FIXIK

/* harmony default export */ __webpack_exports__["a"] = ({
  components: { GmapMap: __WEBPACK_IMPORTED_MODULE_1__node_modules_vue2_google_maps__["Map"], GmapMarker: __WEBPACK_IMPORTED_MODULE_1__node_modules_vue2_google_maps__["Marker"] },
  props: {
    lat: {
      type: Number,
      required: true
    },
    lng: {
      type: Number,
      required: true
    }
  },
  data: function data() {
    return {
      has: __WEBPACK_IMPORTED_MODULE_0__utils__["l" /* has */],
      map: {
        center: { lat: this.lat, lng: this.lng },
        zoom: 17,
        type: 'roadmap',
        markers: [],
        places: [],
        currentPlace: null,
        style: {
          width: '100%',
          height: '150px'
        },
        options: {
          zoomControl: false,
          scaleControl: false,
          rotateControl: false,
          mapTypeControl: false,
          disableDefaultUi: false,
          fullscreenControl: false,
          streetViewControl: false
        }
      }
    };
  }
});

/***/ }),

/***/ 1987:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1988);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("41401ca7", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js?sourceMap!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-64aa955e\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Show.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js?sourceMap!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-64aa955e\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Show.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1988:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(true);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"Show.vue","sourceRoot":""}]);

// exports


/***/ }),

/***/ 1989:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Map_vue__ = __webpack_require__(1641);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_49d2e1db_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Map_vue__ = __webpack_require__(1992);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1990)
}
var normalizeComponent = __webpack_require__(2)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-49d2e1db"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Map_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_49d2e1db_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Map_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/Board/Location/Show/Map.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-49d2e1db", Component.options)
  } else {
    hotAPI.reload("data-v-49d2e1db", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 1990:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1991);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("d1ebfd54", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-49d2e1db\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Map.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-49d2e1db\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Map.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1991:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(true);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"Map.vue","sourceRoot":""}]);

// exports


/***/ }),

/***/ 1992:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "gmap-map",
    {
      ref: "map",
      style: _vm.map.style,
      attrs: {
        center: _vm.map.center,
        zoom: _vm.map.zoom,
        "map-type-id": _vm.map.type,
        options: _vm.map.options
      }
    },
    [
      _c("gmap-marker", {
        attrs: {
          clickable: false,
          draggable: false,
          position: { lat: _vm.lat, lng: _vm.lng }
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
    require("vue-hot-reload-api")      .rerender("data-v-49d2e1db", esExports)
  }
}

/***/ }),

/***/ 1993:
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
        "page",
        "page_declaration",
        "page_declaration_location",
        "m-text",
        { pb_0: _vm.isCurrentUser === true }
      ]
    },
    [
      _c(
        "div",
        { staticClass: "container container_declaration" },
        [
          _c(
            "div",
            {
              staticClass:
                "page__header page__header_declaration page__header_absolute"
            },
            [
              _c("div", { staticClass: "block block_declaration" }, [
                _c(
                  "div",
                  {
                    staticClass:
                      "row row_justify_between row_justify_between_z-index"
                  },
                  [
                    _c(
                      "button",
                      {
                        staticClass: "btn btn_rounded btn_back",
                        on: { click: _vm._handleClickPreviousPage }
                      },
                      [
                        _c("svg", { staticClass: "icon icon_back" }, [
                          _c("use", {
                            attrs: {
                              "xlink:href":
                                "/dist/img/icons/_declaration/sprite.svg#icon_back"
                            }
                          })
                        ])
                      ]
                    ),
                    _vm._v(" "),
                    _vm.location && _vm.error === false
                      ? [
                          _c(
                            "div",
                            { staticClass: "row" },
                            [
                              _c(
                                "social-share-popup",
                                {
                                  attrs: {
                                    url: _vm.APP_URL + _vm.href,
                                    title: _vm.title,
                                    description: _vm.$truncate(
                                      this.$striptags(_vm.description),
                                      50
                                    )
                                  }
                                },
                                [
                                  _c(
                                    "button",
                                    { staticClass: "btn btn_rounded" },
                                    [
                                      _c(
                                        "svg",
                                        { staticClass: "icon icon_share" },
                                        [
                                          _c("use", {
                                            attrs: {
                                              "xlink:href":
                                                "/dist/img/icons/_declaration/sprite.svg#icon_share"
                                            }
                                          })
                                        ]
                                      )
                                    ]
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _vm.isAuthorized === true
                                ? [
                                    _vm.isCurrentUser === true
                                      ? [
                                          _c(
                                            "button",
                                            {
                                              staticClass:
                                                "btn btn_rounded btn_edit",
                                              on: {
                                                click:
                                                  _vm._handleClickEditLocation
                                              }
                                            },
                                            [
                                              _c(
                                                "svg",
                                                {
                                                  staticClass: "icon icon_edit"
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
                                    _c(
                                      "button",
                                      {
                                        staticClass: "btn btn_rounded",
                                        on: {
                                          click: _vm._handleClickActionSheet
                                        }
                                      },
                                      [
                                        _c(
                                          "svg",
                                          { staticClass: "icon icon_options" },
                                          [
                                            _c("use", {
                                              attrs: {
                                                "xlink:href":
                                                  "/dist/img/icons/_declaration/sprite.svg#icon_options"
                                              }
                                            })
                                          ]
                                        )
                                      ]
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
              ])
            ]
          ),
          _vm._v(" "),
          _vm.location && _vm.error === false
            ? [
                _c(
                  "div",
                  { staticClass: "page_declaration_location_slider" },
                  [
                    _vm.photos && _vm.photos.length
                      ? [
                          _c(
                            "no-ssr",
                            [
                              _c(
                                "carousel",
                                {
                                  staticClass: "d-carousel",
                                  attrs: { perPage: 1, mouseDrag: true }
                                },
                                _vm._l(_vm.photos, function(photo) {
                                  return _c(
                                    "slide",
                                    {
                                      key: "slide-location-" + photo.id,
                                      staticClass: "d-carousel-slide"
                                    },
                                    [
                                      _c(
                                        "media",
                                        {
                                          attrs: {
                                            type: "photo",
                                            src: photo.paths["original"],
                                            media: photo,
                                            album:
                                              "locations-" + _vm.location.id,
                                            thumbs: true
                                          }
                                        },
                                        [
                                          _c("img", {
                                            attrs: {
                                              src: photo["paths"]["640x360"],
                                              alt:
                                                "Локация " +
                                                _vm.type +
                                                " #" +
                                                _vm.location.id
                                            }
                                          })
                                        ]
                                      )
                                    ],
                                    1
                                  )
                                }),
                                1
                              )
                            ],
                            1
                          )
                        ]
                      : _vm._e(),
                    _vm._v(" "),
                    !_vm.photos || _vm.photos.length === 0
                      ? [_vm._m(0)]
                      : _vm._e()
                  ],
                  2
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "page__body page__body_declaration" },
                  [
                    [
                      _vm.isRejected === true
                        ? [
                            _c(
                              "span",
                              {
                                staticClass:
                                  "declaration__status declaration__status_refused"
                              },
                              [
                                _vm._v(
                                  "Отклонен:\n              " +
                                    _vm._s(
                                      _vm.has(
                                        _vm.location,
                                        "rejection.cause.text"
                                      )
                                        ? _vm.location["rejection"]["cause"][
                                            "text"
                                          ]
                                        : ""
                                    ) +
                                    ".\n              " +
                                    _vm._s(
                                      _vm.has(_vm.location, "rejection.comment")
                                        ? _vm.location["rejection"]["comment"]
                                        : ""
                                    )
                                )
                              ]
                            )
                          ]
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.isModeration === true
                        ? [
                            _c(
                              "span",
                              {
                                staticClass:
                                  "declaration__status declaration__status_moderation"
                              },
                              [_vm._v("На модерации")]
                            )
                          ]
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.isDraft === true
                        ? [
                            _c(
                              "span",
                              {
                                staticClass:
                                  "declaration__status declaration__status_draft"
                              },
                              [_vm._v("Черновик")]
                            )
                          ]
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.isArchived === true
                        ? [
                            _c(
                              "span",
                              {
                                staticClass:
                                  "declaration__status declaration__status_archive"
                              },
                              [_vm._v("Архив")]
                            )
                          ]
                        : _vm._e()
                    ],
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "block block_declaration bt_none" },
                      [
                        _c(
                          "div",
                          { staticClass: "list list__title-info mb_3" },
                          [
                            _vm.isFasten === true
                              ? [
                                  _c("div", { staticClass: "list__item" }, [
                                    _c(
                                      "svg",
                                      {
                                        staticClass:
                                          "icon icon_size_12 fill_support-3 mr_2"
                                      },
                                      [
                                        _c("use", {
                                          attrs: {
                                            "xlink:href":
                                              "/dist/img/icons/svg/sprite.svg#lm-favourite"
                                          }
                                        })
                                      ]
                                    ),
                                    _vm._v(
                                      "\n                Премиум\n              "
                                    )
                                  ])
                                ]
                              : _vm._e(),
                            _vm._v(" "),
                            _vm.isPublished === true
                              ? [
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "list__item casting__creation-date"
                                    },
                                    [
                                      _vm._v(
                                        "\n                " +
                                          _vm._s(
                                            _vm.isToday(
                                              _vm.location.publishedAt
                                            )
                                              ? "Сегодня"
                                              : _vm
                                                  .$moment(
                                                    _vm.location.publishedAt
                                                  )
                                                  .format("DD MMMM YYYY")
                                          ) +
                                          "\n              "
                                      )
                                    ]
                                  )
                                ]
                              : _vm._e()
                          ],
                          2
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "heading heading_h4 mb_0" }, [
                          _vm._v(
                            "От " +
                              _vm._s(
                                _vm._f("currency")(_vm.price, _vm.currency)
                              ) +
                              " / " +
                              _vm._s(_vm._f("lowercase")(_vm.paymentPeriod))
                          )
                        ]),
                        _vm._v(" "),
                        _vm.location.description
                          ? [
                              _c("div", {
                                staticClass:
                                  "description description_declaration description_declaration_location",
                                domProps: { innerHTML: _vm._s(_vm.description) }
                              })
                            ]
                          : _vm._e()
                      ],
                      2
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "block block_declaration" },
                      [
                        _vm.type
                          ? [
                              _c(
                                "div",
                                { staticClass: "column column_declaration" },
                                [
                                  _c(
                                    "div",
                                    { staticClass: "label label_declaration" },
                                    [
                                      _vm._v(
                                        _vm._s(
                                          _vm.$t(
                                            "location.location-page.location-type"
                                          )
                                        )
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "text text_declaration" },
                                    [_vm._v(_vm._s(_vm.type))]
                                  )
                                ]
                              )
                            ]
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.roomType
                          ? [
                              _c(
                                "div",
                                { staticClass: "column column_declaration" },
                                [
                                  _c(
                                    "div",
                                    { staticClass: "label label_declaration" },
                                    [_vm._v("Тип помещения")]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "text text_declaration" },
                                    [_vm._v(_vm._s(_vm.roomType))]
                                  )
                                ]
                              )
                            ]
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.roomHeight
                          ? [
                              _c(
                                "div",
                                { staticClass: "column column_declaration" },
                                [
                                  _c(
                                    "div",
                                    { staticClass: "label label_declaration" },
                                    [_vm._v("Высота помещения")]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "text text_declaration" },
                                    [_vm._v(_vm._s(_vm.roomHeight) + " м")]
                                  )
                                ]
                              )
                            ]
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.dimension
                          ? [
                              _c(
                                "div",
                                { staticClass: "column column_declaration" },
                                [
                                  _c(
                                    "div",
                                    { staticClass: "label label_declaration" },
                                    [
                                      _vm._v(
                                        _vm._s(
                                          _vm.$t(
                                            "location.location-page.total-area"
                                          )
                                        )
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "text text_declaration" },
                                    [
                                      _vm._v(_vm._s(_vm.dimension) + " м"),
                                      _c("sup", [_vm._v("2")])
                                    ]
                                  )
                                ]
                              )
                            ]
                          : _vm._e()
                      ],
                      2
                    ),
                    _vm._v(" "),
                    _vm.hasAdditionally || _vm.facilities || _vm.equipment
                      ? [
                          _c(
                            "div",
                            { staticClass: "block block_declaration" },
                            [
                              _vm.facilities
                                ? [
                                    _c(
                                      "div",
                                      {
                                        staticClass: "column column_declaration"
                                      },
                                      [
                                        _c(
                                          "div",
                                          {
                                            staticClass:
                                              "label label_declaration"
                                          },
                                          [
                                            _vm._v(
                                              _vm._s(
                                                _vm.$t(
                                                  "location.location-page.amenities-and-services"
                                                )
                                              )
                                            )
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          {
                                            staticClass: "text text_declaration"
                                          },
                                          [_vm._v(_vm._s(_vm.facilities))]
                                        )
                                      ]
                                    )
                                  ]
                                : _vm._e(),
                              _vm._v(" "),
                              _vm.equipment
                                ? [
                                    _c(
                                      "div",
                                      {
                                        staticClass: "column column_declaration"
                                      },
                                      [
                                        _c(
                                          "div",
                                          {
                                            staticClass:
                                              "label label_declaration"
                                          },
                                          [
                                            _vm._v(
                                              _vm._s(
                                                _vm.$t(
                                                  "location.location-page.equipment"
                                                )
                                              )
                                            )
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          {
                                            staticClass: "text text_declaration"
                                          },
                                          [_vm._v(_vm._s(_vm.equipment))]
                                        )
                                      ]
                                    )
                                  ]
                                : _vm._e(),
                              _vm._v(" "),
                              _vm.hasAdditionally
                                ? [
                                    _c(
                                      "div",
                                      {
                                        staticClass: "column column_declaration"
                                      },
                                      [
                                        _c(
                                          "div",
                                          {
                                            staticClass:
                                              "label label_declaration"
                                          },
                                          [
                                            _vm._v(
                                              _vm._s(
                                                _vm.$t(
                                                  "location.location-page.extra"
                                                )
                                              )
                                            )
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          {
                                            staticClass: "text text_declaration"
                                          },
                                          [
                                            _vm._v(
                                              _vm._s(
                                                _vm.additionally.join(", ")
                                              )
                                            )
                                          ]
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
                      { staticClass: "block block_declaration" },
                      [
                        _vm.passSystem
                          ? [
                              _c(
                                "div",
                                { staticClass: "column column_declaration" },
                                [
                                  _c(
                                    "div",
                                    { staticClass: "label label_declaration" },
                                    [_vm._v("Проходная система")]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "text text_declaration" },
                                    [_vm._v(_vm._s(_vm.passSystem))]
                                  )
                                ]
                              )
                            ]
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.location.country
                          ? [
                              _c(
                                "div",
                                { staticClass: "column column_declaration" },
                                [
                                  _c(
                                    "div",
                                    { staticClass: "label label_declaration" },
                                    [
                                      _vm._v(
                                        _vm._s(
                                          _vm.$t(
                                            "location.location-page.country"
                                          )
                                        )
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "text text_declaration" },
                                    [_vm._v(_vm._s(_vm.location.country.text))]
                                  )
                                ]
                              )
                            ]
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.location.city
                          ? [
                              _c(
                                "div",
                                { staticClass: "column column_declaration" },
                                [
                                  _c(
                                    "div",
                                    { staticClass: "label label_declaration" },
                                    [
                                      _vm._v(
                                        _vm._s(
                                          _vm.$t("location.location-page.city")
                                        )
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "text text_declaration" },
                                    [_vm._v(_vm._s(_vm.location.city.text))]
                                  )
                                ]
                              )
                            ]
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.location.address &&
                        _vm.has(_vm.location.address, "address")
                          ? [
                              _c(
                                "div",
                                { staticClass: "column column_declaration" },
                                [
                                  _c(
                                    "div",
                                    { staticClass: "label label_declaration" },
                                    [
                                      _vm._v(
                                        _vm._s(
                                          _vm.$t(
                                            "location.location-page.address"
                                          )
                                        )
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "text text_declaration" },
                                    [
                                      _vm._v(
                                        _vm._s(_vm.location.address["address"])
                                      )
                                    ]
                                  )
                                ]
                              )
                            ]
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.showMap
                          ? [
                              _c(
                                "div",
                                { staticClass: "column column_declaration" },
                                [
                                  _c(
                                    "div",
                                    { staticClass: "label label_declaration" },
                                    [
                                      _vm._v(
                                        _vm._s(
                                          _vm.$t("location.location-page.map")
                                        )
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "text text_declaration" },
                                    [
                                      _c("show-location-map", {
                                        attrs: { lat: _vm.lat, lng: _vm.lng }
                                      })
                                    ],
                                    1
                                  )
                                ]
                              )
                            ]
                          : _vm._e()
                      ],
                      2
                    ),
                    _vm._v(" "),
                    _vm.hasContacts === true
                      ? [
                          _c(
                            "div",
                            { staticClass: "block block_declaration" },
                            [
                              _vm.hideContacts === true
                                ? [
                                    _c(
                                      "div",
                                      {
                                        staticClass: "section_contacts_action"
                                      },
                                      [
                                        _c("span", [
                                          _vm._v(
                                            _vm._s(
                                              _vm.$t(
                                                "location.location-page.click"
                                              )
                                            )
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c(
                                          "button",
                                          {
                                            staticClass: "btn btn_primary",
                                            on: {
                                              click: _vm._handleShowContacts
                                            }
                                          },
                                          [
                                            _vm._v(
                                              _vm._s(
                                                _vm.$t(
                                                  "location.location-page.show"
                                                )
                                              )
                                            )
                                          ]
                                        )
                                      ]
                                    )
                                  ]
                                : [
                                    _vm.phone
                                      ? [
                                          _c(
                                            "div",
                                            {
                                              staticClass:
                                                "column column_declaration"
                                            },
                                            [
                                              _c(
                                                "div",
                                                {
                                                  staticClass:
                                                    "label label_declaration"
                                                },
                                                [_vm._v("Телефон")]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "div",
                                                {
                                                  staticClass:
                                                    "text text_declaration"
                                                },
                                                [
                                                  _c(
                                                    "a",
                                                    {
                                                      attrs: {
                                                        href:
                                                          "tel:" + _vm.phone,
                                                        target: "_self"
                                                      }
                                                    },
                                                    [_vm._v(_vm._s(_vm.phone))]
                                                  )
                                                ]
                                              )
                                            ]
                                          )
                                        ]
                                      : _vm._e(),
                                    _vm._v(" "),
                                    _vm.email
                                      ? [
                                          _c(
                                            "div",
                                            {
                                              staticClass:
                                                "column column_declaration"
                                            },
                                            [
                                              _c(
                                                "div",
                                                {
                                                  staticClass:
                                                    "label label_declaration"
                                                },
                                                [_vm._v("E-mail")]
                                              ),
                                              _vm._v(" "),
                                              _c("div", {
                                                staticClass:
                                                  "text text_declaration",
                                                domProps: {
                                                  innerHTML: _vm._s(
                                                    _vm.$anchorme(_vm.email)
                                                  )
                                                }
                                              })
                                            ]
                                          )
                                        ]
                                      : _vm._e(),
                                    _vm._v(" "),
                                    _vm.site
                                      ? [
                                          _c(
                                            "div",
                                            {
                                              staticClass:
                                                "column column_declaration"
                                            },
                                            [
                                              _c(
                                                "div",
                                                {
                                                  staticClass:
                                                    "label label_declaration"
                                                },
                                                [_vm._v("Сайт")]
                                              ),
                                              _vm._v(" "),
                                              _c("div", {
                                                staticClass:
                                                  "text text_declaration",
                                                domProps: {
                                                  innerHTML: _vm._s(
                                                    _vm.$anchorme(_vm.site)
                                                  )
                                                }
                                              })
                                            ]
                                          )
                                        ]
                                      : _vm._e(),
                                    _vm._v(" "),
                                    _vm.otherContact
                                      ? [
                                          _c(
                                            "div",
                                            {
                                              staticClass:
                                                "column column_declaration"
                                            },
                                            [
                                              _c(
                                                "div",
                                                {
                                                  staticClass:
                                                    "label label_declaration"
                                                },
                                                [_vm._v("Другое")]
                                              ),
                                              _vm._v(" "),
                                              _c("div", {
                                                staticClass:
                                                  "text text_declaration",
                                                domProps: {
                                                  innerHTML: _vm._s(
                                                    _vm.$anchorme(
                                                      _vm.otherContact
                                                    )
                                                  )
                                                }
                                              })
                                            ]
                                          )
                                        ]
                                      : _vm._e()
                                  ]
                            ],
                            2
                          )
                        ]
                      : _vm._e(),
                    _vm._v(" "),
                    _c("div", { staticClass: "block block_declaration" }, [
                      _c(
                        "div",
                        { staticClass: "preview profile__preview" },
                        [
                          _c(
                            "router-link",
                            {
                              staticClass: "row row_align_center",
                              attrs: {
                                to: {
                                  name: "user.show",
                                  params: { username: _vm.author.username }
                                }
                              }
                            },
                            [
                              _c("img", {
                                staticClass:
                                  "img preview__img preview__img_profile",
                                attrs: {
                                  src: _vm.author.avatar,
                                  alt: _vm.author.name
                                }
                              }),
                              _vm._v(" "),
                              _c("div", { staticClass: "column" }, [
                                _c("div", { staticClass: "column" }, [
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "preview__title preview__title_profile"
                                    },
                                    [_vm._v(_vm._s(_vm.author.name))]
                                  ),
                                  _vm._v(" "),
                                  Array.isArray(_vm.author.category) &&
                                  _vm.author.category.length
                                    ? _c(
                                        "div",
                                        {
                                          staticClass:
                                            "preview__role preview__role_profile"
                                        },
                                        [
                                          _vm._v(
                                            "\n                    " +
                                              _vm._s(
                                                _vm._f("truncate")(
                                                  _vm.author.category.join(
                                                    ", "
                                                  ),
                                                  18
                                                )
                                              ) +
                                              "\n                  "
                                          )
                                        ]
                                      )
                                    : _vm._e()
                                ])
                              ])
                            ]
                          )
                        ],
                        1
                      )
                    ]),
                    _vm._v(" "),
                    _vm.isCurrentUser === true && true === false
                      ? [
                          _c(
                            "div",
                            { staticClass: "block block_declaration" },
                            [
                              _c(
                                "div",
                                { staticClass: "row" },
                                [
                                  _c(
                                    "div",
                                    { staticClass: "widget widget_views" },
                                    [
                                      _c(
                                        "svg",
                                        {
                                          staticClass:
                                            "icon widget__icon icon_views"
                                        },
                                        [
                                          _c("use", {
                                            attrs: {
                                              "xlink:href":
                                                "/dist/img/icons/_declaration/sprite.svg#icon_eye"
                                            }
                                          })
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        { staticClass: "widget__count" },
                                        [
                                          _vm._v(
                                            _vm._s(_vm.location.counters.viewed)
                                          )
                                        ]
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                   false
                                    ? [
                                        _c(
                                          "div",
                                          { staticClass: "widget widget_like" },
                                          [
                                            _c(
                                              "svg",
                                              {
                                                staticClass:
                                                  "icon widget__icon icon_like"
                                              },
                                              [
                                                _c("use", {
                                                  attrs: {
                                                    "xlink:href":
                                                      "/dist/img/icons/_declaration/sprite.svg#icon_like"
                                                  }
                                                })
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "div",
                                              { staticClass: "widget__count" },
                                              [_vm._v("0")]
                                            )
                                          ]
                                        )
                                      ]
                                    : _vm._e()
                                ],
                                2
                              )
                            ]
                          )
                        ]
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.isCurrentUser === true && _vm.isFasten === false
                      ? [
                          _vm.promotion["prices"]["loading"]
                            ? _c("lm-m-loader")
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.hasPricePromotion
                            ? [
                                _vm.promotion[_vm.UP]["success"] === false
                                  ? [
                                      _c(
                                        "div",
                                        {
                                          class: [
                                            "card",
                                            "card__placement",
                                            "card__placement_premium",
                                            {
                                              mb_4:
                                                _vm.promotion[_vm.UP][
                                                  "success"
                                                ] === false,
                                              mb_6:
                                                _vm.promotion[_vm.UP][
                                                  "success"
                                                ] === true
                                            }
                                          ]
                                        },
                                        [
                                          _c(
                                            "div",
                                            { staticClass: "card__content" },
                                            [
                                              _vm.promotion[_vm.FASTEN][
                                                "success"
                                              ] === false
                                                ? [
                                                    _c(
                                                      "div",
                                                      {
                                                        staticClass:
                                                          "row align_center mb_1"
                                                      },
                                                      [
                                                        _c(
                                                          "div",
                                                          {
                                                            staticClass:
                                                              "heading heading_h5 mb_0"
                                                          },
                                                          [
                                                            _vm._v(
                                                              "Премиум-размещение"
                                                            )
                                                          ]
                                                        ),
                                                        _vm._v(" "),
                                                        _c(
                                                          "svg",
                                                          {
                                                            staticClass:
                                                              "icon icon_size_16 fill_support-3 ml_2"
                                                          },
                                                          [
                                                            _c("use", {
                                                              attrs: {
                                                                "xlink:href":
                                                                  "/dist/img/icons/svg/sprite.svg#lm-favourite"
                                                              }
                                                            })
                                                          ]
                                                        )
                                                      ]
                                                    ),
                                                    _vm._v(" "),
                                                    _c(
                                                      "div",
                                                      {
                                                        staticClass:
                                                          "m-text_normal mb_3"
                                                      },
                                                      [
                                                        _vm._v(
                                                          "Увеличивает кол-во звонков в 3 раза"
                                                        )
                                                      ]
                                                    ),
                                                    _vm._v(" "),
                                                    _c(
                                                      "div",
                                                      {
                                                        staticClass:
                                                          "sale-line m-text_bold-2 color_white"
                                                      },
                                                      [
                                                        _vm._v(
                                                          "Скидка " +
                                                            _vm._s(
                                                              _vm.promotion[
                                                                "prices"
                                                              ]["data"][
                                                                _vm.FASTEN
                                                              ]["percent"]
                                                            ) +
                                                            "%"
                                                        )
                                                      ]
                                                    ),
                                                    _vm._v(" "),
                                                    _c("div", {
                                                      staticClass:
                                                        "line-border_absolute"
                                                    }),
                                                    _vm._v(" "),
                                                    _c(
                                                      "div",
                                                      {
                                                        staticClass:
                                                          "m-text_normal p_t_12 mb_4"
                                                      },
                                                      [
                                                        _vm._v(
                                                          "Срок размещения: до "
                                                        ),
                                                        _c(
                                                          "span",
                                                          {
                                                            staticClass:
                                                              "tt_capitalize"
                                                          },
                                                          [
                                                            _vm._v(
                                                              _vm._s(
                                                                _vm
                                                                  .$moment()
                                                                  .add(
                                                                    "7",
                                                                    "day"
                                                                  )
                                                                  .format(
                                                                    "DD MMMM YYYY"
                                                                  )
                                                              )
                                                            )
                                                          ]
                                                        ),
                                                        _c("br"),
                                                        _vm._v(
                                                          " Оплата: за 7 дней"
                                                        )
                                                      ]
                                                    ),
                                                    _vm._v(" "),
                                                    _c(
                                                      "div",
                                                      {
                                                        staticClass:
                                                          "row justify_between"
                                                      },
                                                      [
                                                        _c(
                                                          "button",
                                                          {
                                                            staticClass:
                                                              "btn btn_primary w_100 max-w_272px mr_5",
                                                            on: {
                                                              click: function(
                                                                $event
                                                              ) {
                                                                return _vm._handleClickCreateLocationPromotion(
                                                                  _vm.FASTEN
                                                                )
                                                              }
                                                            }
                                                          },
                                                          [_vm._v("Выбрать")]
                                                        ),
                                                        _vm._v(" "),
                                                        _c(
                                                          "div",
                                                          {
                                                            staticClass:
                                                              "card__price"
                                                          },
                                                          [
                                                            _c(
                                                              "div",
                                                              {
                                                                staticClass:
                                                                  "m-text_bold mb_1"
                                                              },
                                                              [
                                                                _vm._v(
                                                                  _vm._s(
                                                                    _vm._f(
                                                                      "currency"
                                                                    )(
                                                                      _vm
                                                                        .promotion[
                                                                        "prices"
                                                                      ]["data"][
                                                                        _vm
                                                                          .FASTEN
                                                                      ][
                                                                        "discount"
                                                                      ],
                                                                      "₽"
                                                                    )
                                                                  ) +
                                                                    " / 7 дней"
                                                                )
                                                              ]
                                                            ),
                                                            _vm._v(" "),
                                                            _c(
                                                              "div",
                                                              {
                                                                staticClass:
                                                                  "m-text_normal"
                                                              },
                                                              [
                                                                _vm._v(
                                                                  _vm._s(
                                                                    _vm._f(
                                                                      "currency"
                                                                    )(
                                                                      _vm
                                                                        .promotion[
                                                                        "prices"
                                                                      ]["data"][
                                                                        _vm
                                                                          .FASTEN
                                                                      ]["full"],
                                                                      "₽"
                                                                    )
                                                                  ) +
                                                                    " / 7 дней"
                                                                )
                                                              ]
                                                            )
                                                          ]
                                                        )
                                                      ]
                                                    )
                                                  ]
                                                : _vm._e(),
                                              _vm._v(" "),
                                              _vm.promotion[_vm.FASTEN][
                                                "success"
                                              ] === true
                                                ? [
                                                    _c(
                                                      "div",
                                                      {
                                                        staticClass:
                                                          "row align_center mb_1"
                                                      },
                                                      [
                                                        _c(
                                                          "div",
                                                          {
                                                            staticClass:
                                                              "heading heading_h5 mb_0"
                                                          },
                                                          [
                                                            _vm._v(
                                                              "Объявление закреплено"
                                                            )
                                                          ]
                                                        ),
                                                        _vm._v(" "),
                                                        _c(
                                                          "svg",
                                                          {
                                                            staticClass:
                                                              "icon icon_size_16 icon_check ml_3"
                                                          },
                                                          [
                                                            _c("use", {
                                                              attrs: {
                                                                "xlink:href":
                                                                  "/dist/img/icons/svg/sprite.svg#checkbox__mark"
                                                              }
                                                            })
                                                          ]
                                                        )
                                                      ]
                                                    ),
                                                    _vm._v(" "),
                                                    _c(
                                                      "div",
                                                      {
                                                        staticClass:
                                                          "m-text_normal"
                                                      },
                                                      [
                                                        _vm._v(
                                                          "Ваше обьявление теперь закреплено в топе ленты на семь дней"
                                                        )
                                                      ]
                                                    )
                                                  ]
                                                : _vm._e()
                                            ],
                                            2
                                          )
                                        ]
                                      )
                                    ]
                                  : _vm._e(),
                                _vm._v(" "),
                                _vm.promotion[_vm.UP]["success"] === false
                                  ? [
                                      _c(
                                        "div",
                                        {
                                          staticClass:
                                            "card card__placement mb_6"
                                        },
                                        [
                                          _c(
                                            "div",
                                            { staticClass: "card__content" },
                                            [
                                              _vm.promotion[_vm.FASTEN][
                                                "success"
                                              ] === false
                                                ? [
                                                    _c(
                                                      "div",
                                                      {
                                                        staticClass:
                                                          "row align_center mb_1"
                                                      },
                                                      [
                                                        _c(
                                                          "div",
                                                          {
                                                            staticClass:
                                                              "heading heading_h5 mb_0"
                                                          },
                                                          [
                                                            _vm._v(
                                                              "Поднятие в топ"
                                                            )
                                                          ]
                                                        ),
                                                        _vm._v(" "),
                                                        _c(
                                                          "svg",
                                                          {
                                                            staticClass:
                                                              "icon icon_size_16 icon_check fill_white rotate_180 ml_2"
                                                          },
                                                          [
                                                            _c("use", {
                                                              attrs: {
                                                                "xlink:href":
                                                                  "/dist/img/icons/svg/sprite.svg#lm-chevron"
                                                              }
                                                            })
                                                          ]
                                                        )
                                                      ]
                                                    ),
                                                    _vm._v(" "),
                                                    _c(
                                                      "div",
                                                      {
                                                        staticClass:
                                                          "m-text_normal mb_3"
                                                      },
                                                      [
                                                        _vm._v(
                                                          "Увеличивает кол-во трафика в 2 раза"
                                                        )
                                                      ]
                                                    ),
                                                    _vm._v(" "),
                                                    _c("div", {
                                                      staticClass:
                                                        "line-border mb_3"
                                                    }),
                                                    _vm._v(" "),
                                                    _vm._m(1),
                                                    _vm._v(" "),
                                                    _c(
                                                      "div",
                                                      {
                                                        staticClass:
                                                          "row justify_between align_center"
                                                      },
                                                      [
                                                        _c(
                                                          "button",
                                                          {
                                                            staticClass:
                                                              "btn btn_primary w_100 max-w_272px mr_5",
                                                            on: {
                                                              click: function(
                                                                $event
                                                              ) {
                                                                return _vm._handleClickCreateLocationPromotion(
                                                                  _vm.UP
                                                                )
                                                              }
                                                            }
                                                          },
                                                          [_vm._v("Выбрать")]
                                                        ),
                                                        _vm._v(" "),
                                                        _c(
                                                          "div",
                                                          {
                                                            staticClass:
                                                              "card__price"
                                                          },
                                                          [
                                                            _c(
                                                              "div",
                                                              {
                                                                staticClass:
                                                                  "m-text_bold"
                                                              },
                                                              [
                                                                _vm._v(
                                                                  _vm._s(
                                                                    _vm._f(
                                                                      "currency"
                                                                    )(
                                                                      _vm
                                                                        .promotion[
                                                                        "prices"
                                                                      ]["data"][
                                                                        _vm.UP
                                                                      ][
                                                                        "discount"
                                                                      ],
                                                                      "₽"
                                                                    )
                                                                  ) + " / 1 раз"
                                                                )
                                                              ]
                                                            )
                                                          ]
                                                        )
                                                      ]
                                                    )
                                                  ]
                                                : _vm._e(),
                                              _vm._v(" "),
                                              _vm.promotion[_vm.FASTEN][
                                                "success"
                                              ] === true
                                                ? [
                                                    _c(
                                                      "div",
                                                      {
                                                        staticClass:
                                                          "row align_center mb_1"
                                                      },
                                                      [
                                                        _c(
                                                          "div",
                                                          {
                                                            staticClass:
                                                              "heading heading_h5 mb_0"
                                                          },
                                                          [
                                                            _vm._v(
                                                              "Объявление поднято"
                                                            )
                                                          ]
                                                        ),
                                                        _vm._v(" "),
                                                        _c(
                                                          "svg",
                                                          {
                                                            staticClass:
                                                              "icon icon_size_16 icon_check ml_3"
                                                          },
                                                          [
                                                            _c("use", {
                                                              attrs: {
                                                                "xlink:href":
                                                                  "/dist/img/icons/svg/sprite.svg#checkbox__mark"
                                                              }
                                                            })
                                                          ]
                                                        )
                                                      ]
                                                    ),
                                                    _vm._v(" "),
                                                    _c(
                                                      "div",
                                                      {
                                                        staticClass:
                                                          "m-text_normal"
                                                      },
                                                      [
                                                        _vm._v(
                                                          "Ваше обьявление теперь поднято в топе ленты"
                                                        )
                                                      ]
                                                    )
                                                  ]
                                                : _vm._e()
                                            ],
                                            2
                                          )
                                        ]
                                      )
                                    ]
                                  : _vm._e()
                              ]
                            : _vm._e()
                        ]
                      : _vm._e()
                  ],
                  2
                )
              ]
            : _vm._e(),
          _vm._v(" "),
          !_vm.location || _vm.error
            ? [_c("span", [_vm._v("Ошибка, локация не найдена.")])]
            : _vm._e()
        ],
        2
      ),
      _vm._v(" "),
      _vm.isCurrentUser === false && _vm.location && _vm.error === false
        ? [
            _c(
              "div",
              { staticClass: "page__footer page__footer_declaration" },
              [
                _c("div", { staticClass: "page__block_declaration" }, [
                  _c("div", { staticClass: "row row_justify_between" }, [
                    _c(
                      "button",
                      {
                        staticClass: "btn btn_chat btn_rounded",
                        on: { click: _vm._handleClickMessage }
                      },
                      [
                        _c("svg", { staticClass: "icon icon_chat" }, [
                          _c("use", {
                            attrs: {
                              "xlink:href":
                                "/dist/img/icons/_declaration/sprite.svg#icon_chat"
                            }
                          })
                        ])
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "a",
                      {
                        staticClass: "btn btn_primary w_100 max-w_272px ml_9",
                        attrs: { href: "tel:" + _vm.phone },
                        on: { click: _vm._handleClickCallUser }
                      },
                      [_vm._v(_vm._s(_vm.$t("location.location-page.call")))]
                    )
                  ])
                ])
              ]
            )
          ]
        : _vm._e(),
      _vm._v(" "),
      _c("actionsheet", {
        attrs: {
          actions: _vm.sheet.actions,
          "cancel-text": "",
          lockScroll: true
        },
        model: {
          value: _vm.sheet.value,
          callback: function($$v) {
            _vm.$set(_vm.sheet, "value", $$v)
          },
          expression: "sheet.value"
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
    return _c("div", { staticClass: "d-carousel" }, [
      _c("div", { staticClass: "d-carousel-slide" }, [
        _c("img", { attrs: { src: "https://i.linkmuse.com/404.jpg" } })
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "m-text_normal mb_4" }, [
      _vm._v("Срок размещения: единоразово"),
      _c("br"),
      _vm._v(" Оплата: за 1 раз")
    ])
  }
]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-64aa955e", esExports)
  }
}

/***/ })

});
//# sourceMappingURL=97.build.d1cbf7f1ec431871f848.js.map