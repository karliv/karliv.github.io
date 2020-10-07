webpackJsonp([85],{

/***/ 1403:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Index_vue__ = __webpack_require__(1778);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_19400101_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Index_vue__ = __webpack_require__(2400);
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
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_19400101_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Index_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/views/Notifications/Index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-19400101", Component.options)
  } else {
    hotAPI.reload("data-v-19400101", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 1535:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return EYE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return INFO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return CHECK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ALERT_WARN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ALERT_DANGER; });
var EYE = 'eye';
var INFO = 'info';
var CHECK = 'check-circle';
var ALERT_WARN = 'info btn__alert-3';
var ALERT_DANGER = 'info btn__alert-2';

/***/ }),

/***/ 1778:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modules_Notifications_Index_vue__ = __webpack_require__(2388);
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





/* harmony default export */ __webpack_exports__["a"] = ({
  components: { NotificationCard: __WEBPACK_IMPORTED_MODULE_2__modules_Notifications_Index_vue__["a" /* default */] },
  metaInfo: {
    title: 'Уведомления'
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
              return store.dispatch('notification/fetchNotificationsOnCatalog', { rewrite: true });

            case 2:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this);
    }))();
  },
  data: function data() {
    return {
      readOnScroll: false,
      unread: []
    };
  },

  computed: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_1_vuex__["c" /* mapGetters */])({
    role: 'auth/getRole',
    authUser: 'auth/getAuthUser',
    count: 'notification/getCountNotificationsOnCatalog',
    error: 'notification/getNotificationsErrorOnCatalog',
    notifications: 'notification/getNotificationsOnCatalog',
    loading: 'notification/getNotificationsLoadingOnCatalog',
    infiniteDisabled: 'notification/getNotificationsInfiniteDisabledOnCatalog'
  }), {
    isEmpty: function isEmpty() {
      return !this.loading && this.count === 0;
    }
  }),
  mounted: function mounted() {
    this.$store.dispatch('auth/setUserField', { key: 'counters.unreadNotifications', value: 0 });

    if (this.unread.length) {
      Object(__WEBPACK_IMPORTED_MODULE_0__utils__["v" /* on */])(window, 'scroll', this._handleScroll);
      this._handleScroll();
      this.readOnScroll = true;
    }
  },
  beforeDestroy: function beforeDestroy() {
    this.readOnScroll = false;
    Object(__WEBPACK_IMPORTED_MODULE_0__utils__["t" /* off */])(window, 'scroll', this._handleScroll);
  },

  methods: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_1_vuex__["b" /* mapActions */])({
    fetchNotificationsOnCatalog: 'notification/fetchNotificationsOnCatalog',
    clearNotificationsOnCatalog: 'notification/clearNotificationsOnCatalog',
    setNotificationOnCatalogFiledById: 'notification/setNotificationOnCatalogFiledById'
  }), {
    _handleInfiniteScroll: function _handleInfiniteScroll() {
      this.fetchNotificationsOnCatalog({ rewrite: false });
    },
    addOnRead: function addOnRead(item) {
      this.unread.push(item);
      this._handleScroll();

      if (this.readOnScroll) return;

      Object(__WEBPACK_IMPORTED_MODULE_0__utils__["v" /* on */])(window, 'scroll', this._handleScroll);
      this.readOnScroll = true;
    },
    _handleScroll: function _handleScroll() {
      var _this2 = this;

      if (!this.unread.length) {
        this.readOnScroll = false;
        return Object(__WEBPACK_IMPORTED_MODULE_0__utils__["t" /* off */])(window, 'scroll', this._handleScroll);
      }

      var minY = window.scrollY;
      var maxY = window.scrollY + window.innerHeight;

      this.unread = this.unread.filter(function (e) {
        var item = _this2.$refs['notificationCard-' + e.id][0].$el;

        if (!(item.offsetTop >= minY && item.offsetTop + item.offsetHeight <= maxY)) return true;

        _this2._handleRead(e);

        return false;
      });
    },
    _handleRead: function _handleRead(item) {
      var _this3 = this;

      this.$api.patch('api/v1/notifications/' + item.id + '/read').then(function (response) {
        _this3.setNotificationOnCatalogFiledById({ id: item.id, key: 'read', value: true });
      }, function (error) {
        console.error('Error notification read', error);
      });
    }
  })
});

/***/ }),

/***/ 1779:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mixins_User__ = __webpack_require__(2389);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mixins_Other__ = __webpack_require__(2391);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Enums_Types__ = __webpack_require__(1535);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_vuex__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__mixins_BoardCasting__ = __webpack_require__(2393);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__mixins_BoardLocation__ = __webpack_require__(2395);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__mixins_CertifyingSpecialist__ = __webpack_require__(2397);
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











/* harmony default export */ __webpack_exports__["a"] = ({
  mixins: [__WEBPACK_IMPORTED_MODULE_2__mixins_User__["a" /* default */], __WEBPACK_IMPORTED_MODULE_3__mixins_Other__["a" /* default */], __WEBPACK_IMPORTED_MODULE_6__mixins_BoardCasting__["a" /* default */], __WEBPACK_IMPORTED_MODULE_7__mixins_BoardLocation__["a" /* default */], __WEBPACK_IMPORTED_MODULE_8__mixins_CertifyingSpecialist__["a" /* default */]],
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  data: function data() {
    return {
      has: __WEBPACK_IMPORTED_MODULE_1__utils__["l" /* has */],
      text: '',
      avatar: '',
      type: __WEBPACK_IMPORTED_MODULE_4__Enums_Types__["c" /* CHECK */],
      click: function click() {},
      actions: '',
      init: false
    };
  },

  watch: {
    init: function init() {
      if (!this.init || this.read) return;

      this.$emit('onRead', this.item);
    }
  },
  mounted: function mounted() {
    if (!(this.isBoardCasting || this.isBoardLocation || this.isCertifyingSpecialist || this.isOther || this.isUser) && !this.read) {
      this.$emit('onRead', this.item);
    }
  },

  computed: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_5_vuex__["c" /* mapGetters */])({
    user: 'auth/getAuthUser'
  }), {
    read: function read() {
      return this.item.read;
    },
    from: function from() {
      if (this.grouped) return this.item.from.data[0];

      return this.item.from.data;
    },
    grouped: function grouped() {
      return Object(__WEBPACK_IMPORTED_MODULE_1__utils__["l" /* has */])(this.item, 'count') && this.item.from.data.length > 1;
    },
    count: function count() {
      if (!this.grouped) return;

      return this.item.from.data.length - 1;
    },
    date: function date() {
      return Object(__WEBPACK_IMPORTED_MODULE_1__utils__["l" /* has */])(this.item, 'created_at') ? this.item.created_at : null;
    },
    actionTemplate: function actionTemplate() {
      return __WEBPACK_IMPORTED_MODULE_0_vue__["default"].component('notification-actions', {
        template: '<div>' + this.actions + '</div>'
      });
    }
  }),
  methods: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_5_vuex__["b" /* mapActions */])({
    setNotificationOnCatalogFiledById: 'notification/setNotificationOnCatalogFiledById'
  }), {
    _handleInit: function _handleInit(options, click) {
      var _this = this;

      this.type = Object(__WEBPACK_IMPORTED_MODULE_1__utils__["l" /* has */])(options, 'avatar') ? '' : options.type;
      this.text = options.text(this);
      this.avatar = Object(__WEBPACK_IMPORTED_MODULE_1__utils__["l" /* has */])(options, 'avatar') ? options.avatar(this) : '';
      this.actions = Object(__WEBPACK_IMPORTED_MODULE_1__utils__["l" /* has */])(options, 'actions') ? options.actions(this) : '';
      this.click = Object(__WEBPACK_IMPORTED_MODULE_1__utils__["l" /* has */])(options, 'click') ? function () {
        options.click(_this);
      } : click;
      this.init = true;
    }
  })
});

/***/ }),

/***/ 2388:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Index_vue__ = __webpack_require__(1779);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_023fd14c_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Index_vue__ = __webpack_require__(2399);
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
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_023fd14c_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Index_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/modules/Notifications/Index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-023fd14c", Component.options)
  } else {
    hotAPI.reload("data-v-023fd14c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 2389:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mint_ui__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mint_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_mint_ui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vuex__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_filters_string_truncate__ = __webpack_require__(442);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Enums_UserCategories__ = __webpack_require__(2390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Enums_Types__ = __webpack_require__(1535);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _options;








var options = (_options = {}, _options[__WEBPACK_IMPORTED_MODULE_4__Enums_UserCategories__["USER_ANKETA_NOT_FILLED"]] = {
  type: __WEBPACK_IMPORTED_MODULE_5__Enums_Types__["b" /* ALERT_WARN */],
  text: function text(_this) {
    return '\u0417\u0430\u043F\u043E\u043B\u043D\u0438\u0442\u0435 \u0430\u043D\u043A\u0435\u0442\u0443 \u043F\u0440\u043E\u0444\u0438\u043B\u044F, \u0447\u0442\u043E\u0431\u044B \u0443\u0432\u0435\u043B\u0438\u0447\u0438\u0442\u044C \u0441\u0432\u043E\u044E \u043F\u043E\u0437\u0438\u0446\u0438\u044E \u0432 \u043F\u043E\u0438\u0441\u043A\u043E\u0432\u043E\u0439 \u0432\u044B\u0434\u0430\u0447\u0435';
  },
  actions: function actions(_this) {
    return '<button @click="$parent.click" class="btn btn_primary notifications__btn">\u0437\u0430\u043F\u043E\u043B\u043D\u0438\u0442\u044C</button>';
  },
  click: function click(_this) {
    _this.$router.push({ name: 'user.show', params: { username: _this.user.username } });
  }
}, _options[__WEBPACK_IMPORTED_MODULE_4__Enums_UserCategories__["USER_PORTFOLIO_NOT_PUBLISHED"]] = {
  type: __WEBPACK_IMPORTED_MODULE_5__Enums_Types__["b" /* ALERT_WARN */],
  text: function text(_this) {
    return '\u041E\u043F\u0443\u0431\u043B\u0438\u043A\u0443\u0439\u0442\u0435 \u043F\u043E\u0440\u0442\u0444\u043E\u043B\u0438\u043E, \u0447\u0442\u043E\u0431\u044B \u0443\u0432\u0435\u043B\u0438\u0447\u0438\u0442\u044C \u0432\u043D\u0438\u043C\u0430\u043D\u0438\u0435 \u043A \u0441\u0432\u043E\u0435\u043C\u0443 \u043F\u0440\u043E\u0444\u0438\u043B\u044E \u0432 2 \u0440\u0430\u0437\u0430';
  },
  actions: function actions(_this) {
    return '<button @click="$parent.click" class="btn btn_primary notifications__btn">\u041E\u043F\u0443\u0431\u043B\u0438\u043A\u043E\u0432\u0430\u0442\u044C</button>';
  },
  click: function click(_this) {
    _this.$router.push({ name: 'user.show', params: { username: _this.user.username } });
  }
}, _options[__WEBPACK_IMPORTED_MODULE_4__Enums_UserCategories__["USER_REFERRAL_WAS_REGISTER"]] = {
  type: __WEBPACK_IMPORTED_MODULE_5__Enums_Types__["e" /* INFO */],
  text: function text(_this) {
    return _this.from.name + ' \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u043B\u0441\u044F \u043F\u043E \u0432\u0430\u0448\u0435\u0439 \u0441\u0441\u044B\u043B\u043A\u0435.';
  }
}, _options[__WEBPACK_IMPORTED_MODULE_4__Enums_UserCategories__["USER_INVITE_ON_CASTING"]] = {
  type: __WEBPACK_IMPORTED_MODULE_5__Enums_Types__["e" /* INFO */],
  text: function text(_this) {
    return _this.from.name + ' \u043F\u0440\u0438\u0433\u043B\u0430\u0441\u0438\u043B(\u0430) \u0432\u0430\u0441 \u043D\u0430 ' + (Object(__WEBPACK_IMPORTED_MODULE_0__utils__["l" /* has */])(_this.item, 'extra.name') ? '\u043A\u0430\u0441\u0442\u0438\u043D\u0433 <a class="d-link fw_600">\u201C' + _this.item.extra.name + '\u201C</a>' : '<a class="d-link fw_600">\u043A\u0430\u0441\u0442\u0438\u043D\u0433</a>');
  },
  click: function click(_this) {
    document.location = _this.item.url;
  }
}, _options[__WEBPACK_IMPORTED_MODULE_4__Enums_UserCategories__["USER_LIKE"]] = {
  type: __WEBPACK_IMPORTED_MODULE_5__Enums_Types__["e" /* INFO */],
  text: function text(_this) {
    return _this.from.name + ' \u043E\u0446\u0435\u043D\u0438\u043B(a) ' + _this.typeMedia;
  },
  avatar: function avatar(_this) {
    return _this.from.avatar;
  }
}, _options[__WEBPACK_IMPORTED_MODULE_4__Enums_UserCategories__["USER_FOLLOW"]] = {
  type: __WEBPACK_IMPORTED_MODULE_5__Enums_Types__["e" /* INFO */],
  text: function text(_this) {
    return _this.from.name + ' \u043F\u043E\u0434\u043F\u0438\u0441\u0430\u043B\u0441\u044F \u043D\u0430 \u0432\u0430\u0441 <a class="notifications__link fw_600">\u041F\u043E\u0434\u043F\u0438\u0441\u0430\u0442\u044C\u0441\u044F \u0432 \u043E\u0442\u0432\u0435\u0442</a>';
  },
  avatar: function avatar(_this) {
    return _this.from.avatar;
  }
}, _options[__WEBPACK_IMPORTED_MODULE_4__Enums_UserCategories__["USER_PARTNER_REQUESTED"]] = {
  type: __WEBPACK_IMPORTED_MODULE_5__Enums_Types__["e" /* INFO */],
  text: function text(_this) {
    _this._handleGetPartnersRequests();
    return '<a class="notifications__link fw_600">' + _this.from.name + '</a> \u043F\u0440\u0435\u0434\u043B\u0430\u0433\u0430\u0435\u0442 \u0432\u0430\u043C \u0441\u0442\u0430\u0442\u044C \u043A\u043E\u043B\u043B\u0435\u0433\u043E\u0439';
  },
  avatar: function avatar(_this) {
    return _this.from.avatar;
  },
  actions: function actions(_this) {
    return !_this.read ? '<button @click="$parent._handleAcceptPartner" class="btn btn_primary notifications__btn">\u043F\u0440\u0438\u043D\u044F\u0442\u044C</button>\n            <button @click="$parent._handleDeclinePartner" class="notifications__btn notifications__btn_disabled">\u043E\u0442\u043A\u043B\u043E\u043D\u0438\u0442\u044C</button>' : '<lm-m-loader></lm-m-loader>';
  }
}, _options[__WEBPACK_IMPORTED_MODULE_4__Enums_UserCategories__["USER_PARTNER_DELETE"]] = {
  type: __WEBPACK_IMPORTED_MODULE_5__Enums_Types__["a" /* ALERT_DANGER */],
  text: function text(_this) {
    return '<a class="notifications__link fw_600">' + _this.from.name + '</a> \u043F\u0435\u0440\u0435\u0441\u0442\u0430\u043B \u0431\u044B\u0442\u044C \u0432\u0430\u0448\u0438\u043C \u043A\u043E\u043B\u043B\u0435\u0433\u043E\u0439';
  },
  avatar: function avatar(_this) {
    return _this.from.avatar;
  }
}, _options[__WEBPACK_IMPORTED_MODULE_4__Enums_UserCategories__["USER_PARTNER_APPROVED"]] = {
  type: __WEBPACK_IMPORTED_MODULE_5__Enums_Types__["e" /* INFO */],
  text: function text(_this) {
    return '<a class="notifications__link fw_600">' + _this.from.name + '</a> \u0441\u0442\u0430\u043B \u0432\u0430\u0448\u0438\u043C \u043A\u043E\u043B\u043B\u0435\u0433\u043E\u0439';
  },
  avatar: function avatar(_this) {
    return _this.from.avatar;
  }
}, _options[__WEBPACK_IMPORTED_MODULE_4__Enums_UserCategories__["USER_PARTNER_EXCLUSIVE_REQUESTED"]] = {
  type: __WEBPACK_IMPORTED_MODULE_5__Enums_Types__["e" /* INFO */],
  text: function text(_this) {
    _this._handleGetPartnersRequests();
    return '<a class="notifications__link fw_600">' + _this.from.name + '</a> \u043F\u0440\u0435\u0434\u043B\u0430\u0433\u0430\u0435\u0442 \u0432\u0430\u043C \u044D\u043A\u0441\u043A\u043B\u044E\u0437\u0438\u0432\u043D\u043E\u0435 \u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u0447\u0435\u0441\u0442\u0432\u043E';
  },
  avatar: function avatar(_this) {
    return _this.from.avatar;
  },
  actions: function actions(_this) {
    return !_this.read ? '<button @click="$parent._handleAcceptExclusivePartner" class="btn btn_primary notifications__btn">\u043F\u0440\u0438\u043D\u044F\u0442\u044C</button>\n            <button @click="$parent._handleDeclineExclusivePartner" class="notifications__btn notifications__btn_disabled">\u043E\u0442\u043A\u043B\u043E\u043D\u0438\u0442\u044C</button>' : '<lm-m-loader></lm-m-loader>';
  }
}, _options[__WEBPACK_IMPORTED_MODULE_4__Enums_UserCategories__["USER_PARTNER_EXCLUSIVE_DELETE"]] = {
  type: __WEBPACK_IMPORTED_MODULE_5__Enums_Types__["a" /* ALERT_DANGER */],
  text: function text(_this) {
    return '<a class="notifications__link fw_600">' + _this.from.name + '</a> \u0440\u0430\u0441\u0442\u043E\u0440\u0433 \u044D\u043A\u0441\u043A\u043B\u044E\u0437\u0438\u0432\u043D\u043E\u0435 \u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u0447\u0435\u0441\u0442\u0432\u043E';
  },
  avatar: function avatar(_this) {
    return _this.from.avatar;
  }
}, _options[__WEBPACK_IMPORTED_MODULE_4__Enums_UserCategories__["USER_PARTNER_EXCLUSIVE_APPROVED"]] = {
  type: __WEBPACK_IMPORTED_MODULE_5__Enums_Types__["e" /* INFO */],
  text: function text(_this) {
    return '<a class="notifications__link fw_600">' + _this.from.name + '</a> \u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u043B \u044D\u043A\u0441\u043A\u043B\u044E\u0437\u0438\u0432\u043D\u043E\u0435 \u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u0447\u0435\u0441\u0442\u0432\u043E';
  },
  avatar: function avatar(_this) {
    return _this.from.avatar;
  }
}, _options);

/* harmony default export */ __webpack_exports__["a"] = ({
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  data: function data() {
    return {};
  },
  mounted: function mounted() {
    var _this2 = this;

    if (this.isUser) {
      this._handleInit(options[this.item.category], function () {
        _this2.$router.push({
          name: 'user.show',
          params: { username: _this2.from.username }
        });
      });
    }
  },

  computed: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_2_vuex__["c" /* mapGetters */])({
    partners: 'partner/getPartnersOnRequests',
    partnersCount: 'partner/getCountPartnersOnRequests',
    partnersError: 'partner/getPartnersErrorOnRequests',
    partnersLoading: 'partner/getPartnersLoadingOnRequests',
    partnersInfiniteDisabled: 'partner/getPartnersInfiniteDisabledOnRequests'
  }), {
    isUser: function isUser() {
      return Object.values(__WEBPACK_IMPORTED_MODULE_4__Enums_UserCategories__).indexOf(this.item.category) > -1;
    },
    typeMedia: function typeMedia() {
      var type = void 0;

      switch (this.item.content_type) {
        case 'photo':
          type = 'ваше фото';
          break;
        case 'video':
          type = 'ваше видео';
          break;
        case 'audio':
          type = 'ваше аудио';
          break;
        case 'casting':
          type = 'ваш кастинг';
          break;
        case 'project':
          type = 'ваш проект';
          break;
        case 'profile_portfolio':
          type = 'ваше портфолио';
          break;
        default:
          type = 'вашу запись';
      }

      return type;
    }
  }),
  beforeDestroy: function beforeDestroy() {
    this.clearPartnersOnRequests();
  },

  watch: {
    partners: function partners() {
      var _this3 = this;

      if ([__WEBPACK_IMPORTED_MODULE_4__Enums_UserCategories__["USER_PARTNER_EXCLUSIVE_REQUESTED"], __WEBPACK_IMPORTED_MODULE_4__Enums_UserCategories__["USER_PARTNER_REQUESTED"]].indexOf(this.item.category) < 0) return;

      if (!this.partnersCount) {
        this.actions = '';
        return;
      }

      var isExclusive = __WEBPACK_IMPORTED_MODULE_4__Enums_UserCategories__["USER_PARTNER_EXCLUSIVE_REQUESTED"] === this.item.category;

      if (this.partners.findIndex(function (e) {
        return e.user_id === _this3.from.id && (isExclusive && e.exclusive === 2 || !isExclusive && e.exclusive !== 2);
      }) > -1) {
        this.setNotificationOnCatalogFiledById({ id: this.item.id, key: 'read', value: false });
        this.actions = Object(__WEBPACK_IMPORTED_MODULE_0__utils__["l" /* has */])(options[this.item.category], 'actions') ? options[this.item.category].actions(this) : '';
      } else {
        this.actions = '';
      }
    }
  },
  methods: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_2_vuex__["b" /* mapActions */])({
    fetchPartnersOnRequests: 'partner/fetchPartnersOnRequests',
    clearPartnersOnRequests: 'partner/clearPartnersOnRequests'
  }), {
    _handleGetPartnersRequests: function _handleGetPartnersRequests() {
      var _this4 = this;

      if (this.partnersLoading || this.partnersInfiniteDisabled) return;

      this.fetchPartnersOnRequests({ rewrite: false, user_id: this.user.id }).then(function () {}).catch(function () {
        console.log('Error loading');
        _this4.actions = '';
      });
    },
    _handleAcceptPartner: function _handleAcceptPartner() {
      var _this5 = this;

      __WEBPACK_IMPORTED_MODULE_1_mint_ui__["Indicator"].open();

      this.$api.post('/api/v1/users/partners/' + this.from.id + '/approve').then(function (response) {
        _this5.$parent._handleRead(_this5.item);
        _this5.actions = '';
        __WEBPACK_IMPORTED_MODULE_1_mint_ui__["Indicator"].close();
        Object(__WEBPACK_IMPORTED_MODULE_1_mint_ui__["Toast"])({
          message: 'Успешно',
          iconClass: 'mintui mintui-success'
        });
      }).catch(function (err) {
        __WEBPACK_IMPORTED_MODULE_1_mint_ui__["Indicator"].close();
        Object(__WEBPACK_IMPORTED_MODULE_1_mint_ui__["Toast"])({ message: 'Ошибка', iconClass: 'mintui mintui-field-error' });
        console.error('Error accept partner', err);
        throw new Error(err);
      });
    },
    _handleDeclinePartner: function _handleDeclinePartner() {
      var _this6 = this;

      __WEBPACK_IMPORTED_MODULE_1_mint_ui__["Indicator"].open();

      this.$api.delete('/api/v1/users/partners/' + this.from.id).then(function (response) {
        _this6.$parent._handleRead(_this6.item);
        _this6.actions = '';
        __WEBPACK_IMPORTED_MODULE_1_mint_ui__["Indicator"].close();
        Object(__WEBPACK_IMPORTED_MODULE_1_mint_ui__["Toast"])({
          message: 'Успешно',
          iconClass: 'mintui mintui-success'
        });
      }).catch(function (err) {
        __WEBPACK_IMPORTED_MODULE_1_mint_ui__["Indicator"].close();
        Object(__WEBPACK_IMPORTED_MODULE_1_mint_ui__["Toast"])({ message: 'Ошибка', iconClass: 'mintui mintui-field-error' });
        console.error('Error decline partner', err);
        throw new Error(err);
      });
    },
    _handleAcceptExclusivePartner: function _handleAcceptExclusivePartner() {
      var _this7 = this;

      __WEBPACK_IMPORTED_MODULE_1_mint_ui__["Indicator"].open();

      this.$api.post('/api/v1/users/partners/' + this.from.id + '/exclusive/approve').then(function (response) {
        _this7.$parent._handleRead(_this7.item);
        _this7.actions = '';
        __WEBPACK_IMPORTED_MODULE_1_mint_ui__["Indicator"].close();
        Object(__WEBPACK_IMPORTED_MODULE_1_mint_ui__["Toast"])({
          message: 'Успешно',
          iconClass: 'mintui mintui-success'
        });
      }).catch(function (err) {
        __WEBPACK_IMPORTED_MODULE_1_mint_ui__["Indicator"].close();
        Object(__WEBPACK_IMPORTED_MODULE_1_mint_ui__["Toast"])({ message: 'Ошибка', iconClass: 'mintui mintui-field-error' });
        console.error('Error accept exclusive partner', err);
        throw new Error(err);
      });
    },
    _handleDeclineExclusivePartner: function _handleDeclineExclusivePartner() {
      var _this8 = this;

      __WEBPACK_IMPORTED_MODULE_1_mint_ui__["Indicator"].open();

      this.$api.post('/api/v1/users/partners/' + this.from.id + '/exclusive/disapprove').then(function (response) {
        _this8.$parent._handleRead(_this8.item);
        _this8.actions = '';
        __WEBPACK_IMPORTED_MODULE_1_mint_ui__["Indicator"].close();
        Object(__WEBPACK_IMPORTED_MODULE_1_mint_ui__["Toast"])({
          message: 'Успешно',
          iconClass: 'mintui mintui-success'
        });
      }).catch(function (err) {
        __WEBPACK_IMPORTED_MODULE_1_mint_ui__["Indicator"].close();
        Object(__WEBPACK_IMPORTED_MODULE_1_mint_ui__["Toast"])({ message: 'Ошибка', iconClass: 'mintui mintui-field-error' });
        console.error('Error decline exclusive partner', err);
        throw new Error(err);
      });
    }
  })
});

/***/ }),

/***/ 2390:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER_LIKE", function() { return USER_LIKE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER_FOLLOW", function() { return USER_FOLLOW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER_PARTNER_DELETE", function() { return USER_PARTNER_DELETE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER_PARTNER_APPROVED", function() { return USER_PARTNER_APPROVED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER_INVITE_ON_CASTING", function() { return USER_INVITE_ON_CASTING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER_ANKETA_NOT_FILLED", function() { return USER_ANKETA_NOT_FILLED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER_PARTNER_REQUESTED", function() { return USER_PARTNER_REQUESTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER_REFERRAL_WAS_REGISTER", function() { return USER_REFERRAL_WAS_REGISTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER_PORTFOLIO_NOT_PUBLISHED", function() { return USER_PORTFOLIO_NOT_PUBLISHED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER_PARTNER_EXCLUSIVE_DELETE", function() { return USER_PARTNER_EXCLUSIVE_DELETE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER_PARTNER_EXCLUSIVE_APPROVED", function() { return USER_PARTNER_EXCLUSIVE_APPROVED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER_PARTNER_EXCLUSIVE_REQUESTED", function() { return USER_PARTNER_EXCLUSIVE_REQUESTED; });
var USER_LIKE = 'user.like';
var USER_FOLLOW = 'user.follow';
var USER_PARTNER_DELETE = 'user.partner.delete';
var USER_PARTNER_APPROVED = 'user.partner.approved';
var USER_INVITE_ON_CASTING = 'user.invite_on_casting';
var USER_ANKETA_NOT_FILLED = 'user.anketa_not_filled';
var USER_PARTNER_REQUESTED = 'user.partner.requested';
var USER_REFERRAL_WAS_REGISTER = 'user.referral_was_register';
var USER_PORTFOLIO_NOT_PUBLISHED = 'user.portfolio_not_published';
var USER_PARTNER_EXCLUSIVE_DELETE = 'user.partner.exclusive.delete';
var USER_PARTNER_EXCLUSIVE_APPROVED = 'user.partner.exclusive.approved';
var USER_PARTNER_EXCLUSIVE_REQUESTED = 'user.partner.exclusive.requested';

/***/ }),

/***/ 2391:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Enums_OtherCategories__ = __webpack_require__(2392);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Enums_Types__ = __webpack_require__(1535);
var _options;





var options = (_options = {}, _options[__WEBPACK_IMPORTED_MODULE_1__Enums_OtherCategories__["MODERATION_BANNED"]] = {
  type: __WEBPACK_IMPORTED_MODULE_2__Enums_Types__["a" /* ALERT_DANGER */],
  text: function text(_this) {
    return '\u041C\u043E\u0434\u0435\u0440\u0430\u0442\u043E\u0440 \u0437\u0430\u0431\u043B\u043E\u043A\u0438\u0440\u043E\u0432\u0430\u043B ' + _this.typeBanned;
  }
}, _options);

/* harmony default export */ __webpack_exports__["a"] = ({
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  data: function data() {
    return {};
  },
  mounted: function mounted() {
    if (this.isOther) this._handleInit(options[this.item.category], function () {});
  },

  computed: {
    isOther: function isOther() {
      return Object.values(__WEBPACK_IMPORTED_MODULE_1__Enums_OtherCategories__).indexOf(this.item.category) > -1;
    },
    typeBanned: function typeBanned() {
      var type = void 0;

      switch (this.item.content_type) {
        case 'photo':
          type = 'ваше фото';
          break;
        case 'video':
          type = 'ваше видео';
          break;
        case 'audio':
          type = 'ваше аудио';
          break;
        case 'casting':
          type = 'ваш кастинг';
          break;
        case 'project':
          type = 'ваш проект';
          break;
        default:
          type = 'вашу запись';
      }

      return type;
    }
  }
});

/***/ }),

/***/ 2392:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MODERATION_BANNED", function() { return MODERATION_BANNED; });
var MODERATION_BANNED = 'moderation.banned';

/***/ }),

/***/ 2393:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_filters_string_truncate__ = __webpack_require__(442);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Enums_BoardCastingCategories__ = __webpack_require__(2394);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Enums_Types__ = __webpack_require__(1535);
var _options;






var options = (_options = {}, _options[__WEBPACK_IMPORTED_MODULE_2__Enums_BoardCastingCategories__["CASTING_APPROVE"]] = {
  type: __WEBPACK_IMPORTED_MODULE_3__Enums_Types__["c" /* CHECK */],
  text: function text(_this) {
    return '\u041C\u043E\u0434\u0435\u0440\u0430\u0442\u043E\u0440 \u043F\u0440\u043E\u0432\u0435\u0440\u0438\u043B \u0438 \u043E\u043F\u0443\u0431\u043B\u0438\u043A\u043E\u0432\u0430\u043B \u0432\u0430\u0448\u0435 \u043E\u0431\u044A\u044F\u0432\u043B\u0435\u043D\u0438\u0435 <a class="notifications__link fw_600">\u201C' + _this.casting_name + '\u201D</a>';
  },
  click: function click(_this) {
    _this.$router.push({ name: 'board.castings.show', params: { slug: _this.casting_slug, id: _this.casting_id } });
  }
}, _options[__WEBPACK_IMPORTED_MODULE_2__Enums_BoardCastingCategories__["BOARD_CASTING_APPROVE"]] = {
  type: __WEBPACK_IMPORTED_MODULE_3__Enums_Types__["c" /* CHECK */],
  text: function text(_this) {
    return '\u041C\u043E\u0434\u0435\u0440\u0430\u0442\u043E\u0440 \u043F\u0440\u043E\u0432\u0435\u0440\u0438\u043B \u0438 \u043E\u043F\u0443\u0431\u043B\u0438\u043A\u043E\u0432\u0430\u043B \u0432\u0430\u0448\u0435 \u043E\u0431\u044A\u044F\u0432\u043B\u0435\u043D\u0438\u0435 <a class="notifications__link fw_600">\u201C' + _this.casting_name + '\u201D</a>';
  },
  click: function click(_this) {
    _this.$router.push({ name: 'board.castings.show', params: { slug: _this.casting_slug, id: _this.casting_id } });
  }
}, _options[__WEBPACK_IMPORTED_MODULE_2__Enums_BoardCastingCategories__["BOARD_CASTING_DELETE"]] = {
  type: __WEBPACK_IMPORTED_MODULE_3__Enums_Types__["a" /* ALERT_DANGER */],
  text: function text(_this) {
    return '\u041C\u043E\u0434\u0435\u0440\u0430\u0442\u043E\u0440 \u0443\u0434\u0430\u043B\u0438\u043B \u0432\u0430\u0448\u0435 \u043E\u0431\u044A\u044F\u0432\u043B\u0435\u043D\u0438\u0435 <a class="notifications__link fw_600">\u201C' + _this.casting_name + '\u201D</a>\n        \u043F\u043E \u043F\u0440\u0438\u0447\u0438\u043D\u0435: \u201C' + _this.casting_reason + '\u201D</a>';
  },
  click: function click() {}
}, _options[__WEBPACK_IMPORTED_MODULE_2__Enums_BoardCastingCategories__["BOARD_CASTING_FORCE_PUBLISH"]] = {
  type: __WEBPACK_IMPORTED_MODULE_3__Enums_Types__["c" /* CHECK */],
  text: function text(_this) {
    return '\u0412\u0430\u0448\u0435 \u043E\u0431\u044A\u044F\u0432\u043B\u0435\u043D\u0438\u0435 <a class="notifications__link fw_600">\u201C' + _this.casting_name + '\u201D</a> \u043E\u043F\u0443\u0431\u043B\u0438\u043A\u043E\u0432\u0430\u043D\u043E \u0432 \u043B\u0435\u043D\u0442\u0435';
  }
}, _options[__WEBPACK_IMPORTED_MODULE_2__Enums_BoardCastingCategories__["BOARD_CASTING_NEW_RESPONSE"]] = {
  type: __WEBPACK_IMPORTED_MODULE_3__Enums_Types__["e" /* INFO */],
  text: function text(_this) {
    return '\u041F\u043E\u043B\u0443\u0447\u0435\u043D \u043D\u043E\u0432\u044B\u0439 \u043E\u0442\u043A\u043B\u0438\u043A \u043D\u0430 \u043E\u0431\u044A\u044F\u0432\u043B\u0435\u043D\u0438\u0435 <a class="notifications__link fw_600">\u201C' + _this.casting_name + '\u201D</a>';
  }
}, _options[__WEBPACK_IMPORTED_MODULE_2__Enums_BoardCastingCategories__["BOARD_CASTING_REJECT"]] = {
  type: __WEBPACK_IMPORTED_MODULE_3__Enums_Types__["b" /* ALERT_WARN */],
  text: function text(_this) {
    return '\u0412\u0430\u0448\u0435 \u043E\u0431\u044A\u044F\u0432\u043B\u0435\u043D\u0438\u0435 <a class="notifications__link fw_600">\u201C' + _this.casting_name + '\u201D</a> \u0441\u043D\u044F\u0442\u043E \u0441 \u043F\u0443\u0431\u043B\u0438\u043A\u0430\u0446\u0438\u0438';
  }
}, _options[__WEBPACK_IMPORTED_MODULE_2__Enums_BoardCastingCategories__["BOARD_CASTING_RESPONSE_VIEWED"]] = {
  type: __WEBPACK_IMPORTED_MODULE_3__Enums_Types__["d" /* EYE */],
  text: function text(_this) {
    return '\u0412\u0430\u0448 \u043E\u0442\u043A\u043B\u0438\u043A \u043D\u0430 \u043E\u0431\u044A\u044F\u0432\u043B\u0435\u043D\u0438\u0435  <a class="notifications__link fw_600">\u201C' + _this.casting_name + '\u201D</a> \u0431\u044B\u043B \u043F\u0440\u043E\u0441\u043C\u043E\u0442\u0440\u0435\u043D';
  }
}, _options[__WEBPACK_IMPORTED_MODULE_2__Enums_BoardCastingCategories__["CASTING_RESPONSE_NEW"]] = {
  type: __WEBPACK_IMPORTED_MODULE_3__Enums_Types__["e" /* INFO */],
  text: function text(_this) {
    return (_this.grouped ? '\u041D\u043E\u0432\u044B\u0435 (' + _this.count + ') \u043E\u0442\u043A\u043B\u0438\u043A\u0438 \u043D\u0430 \u043A\u0430\u0441\u0442\u0438\u043D\u0433' : 'Новый отклик на кастинг') + (' <a class="notifications__link fw_600">\u201C' + _this.casting_name + '\u201D</a>');
  }
}, _options);

/* harmony default export */ __webpack_exports__["a"] = ({
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  data: function data() {
    return {};
  },
  mounted: function mounted() {
    var _this2 = this;

    if (this.isBoardCasting) this._handleInit(options[this.item.category], function () {
      _this2.$router.push({ name: 'board.castings.show', params: { slug: _this2.casting_slug, id: _this2.casting_id } });
    });
  },

  computed: {
    isBoardCasting: function isBoardCasting() {
      return Object.values(__WEBPACK_IMPORTED_MODULE_2__Enums_BoardCastingCategories__).indexOf(this.item.category) > -1;
    },
    casting_id: function casting_id() {
      if (!this.isBoardCasting) return;

      return Object(__WEBPACK_IMPORTED_MODULE_0__utils__["l" /* has */])(this.item, 'extra.casting.id') ? this.item.extra.casting.id : Object(__WEBPACK_IMPORTED_MODULE_0__utils__["l" /* has */])(this.item, 'extra.id') ? this.item.extra.id : null;
    },
    casting_slug: function casting_slug() {
      if (!this.isBoardCasting) return;

      return Object(__WEBPACK_IMPORTED_MODULE_0__utils__["l" /* has */])(this.item, 'extra.casting.slug') ? this.item.extra.casting.slug : Object(__WEBPACK_IMPORTED_MODULE_0__utils__["l" /* has */])(this.item, 'extra.slug') ? this.item.extra.slug : null;
    },
    casting_name: function casting_name() {
      if (!this.isBoardCasting) return;

      return Object(__WEBPACK_IMPORTED_MODULE_0__utils__["l" /* has */])(this.item, 'extra.casting.name') ? Object(__WEBPACK_IMPORTED_MODULE_1__src_filters_string_truncate__["a" /* default */])(this.item.extra.casting.name, 50) : Object(__WEBPACK_IMPORTED_MODULE_0__utils__["l" /* has */])(this.item, 'extra.name') ? Object(__WEBPACK_IMPORTED_MODULE_1__src_filters_string_truncate__["a" /* default */])(this.item.extra.name, 50) : null;
    },
    casting_reason: function casting_reason() {
      if (!this.isBoardCasting) return;

      return Object(__WEBPACK_IMPORTED_MODULE_0__utils__["l" /* has */])(this.item, 'extra.reason') ? Object(__WEBPACK_IMPORTED_MODULE_1__src_filters_string_truncate__["a" /* default */])(this.item.extra.reason, 150) : null;
    }
  }
});

/***/ }),

/***/ 2394:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CASTING_APPROVE", function() { return CASTING_APPROVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BOARD_CASTING_DELETE", function() { return BOARD_CASTING_DELETE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BOARD_CASTING_REJECT", function() { return BOARD_CASTING_REJECT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BOARD_CASTING_APPROVE", function() { return BOARD_CASTING_APPROVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CASTING_RESPONSE_NEW", function() { return CASTING_RESPONSE_NEW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BOARD_CASTING_NEW_RESPONSE", function() { return BOARD_CASTING_NEW_RESPONSE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BOARD_CASTING_FORCE_PUBLISH", function() { return BOARD_CASTING_FORCE_PUBLISH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BOARD_CASTING_RESPONSE_VIEWED", function() { return BOARD_CASTING_RESPONSE_VIEWED; });
var CASTING_APPROVE = 'casting.approved';
var BOARD_CASTING_DELETE = 'board.casting.delete';
var BOARD_CASTING_REJECT = 'board.casting.reject';
var BOARD_CASTING_APPROVE = 'board.casting.approve';
var CASTING_RESPONSE_NEW = 'casting.response.new';
var BOARD_CASTING_NEW_RESPONSE = 'board.casting.new_response';
var BOARD_CASTING_FORCE_PUBLISH = 'board.casting.force_publish';
var BOARD_CASTING_RESPONSE_VIEWED = 'board.casting.response_viewed';

/***/ }),

/***/ 2395:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_filters_string_truncate__ = __webpack_require__(442);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Enums_BoardLocationCategories__ = __webpack_require__(2396);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Enums_Types__ = __webpack_require__(1535);
var _options;






var options = (_options = {}, _options[__WEBPACK_IMPORTED_MODULE_2__Enums_BoardLocationCategories__["BOARD_LOCATION_APPROVED"]] = {
  type: __WEBPACK_IMPORTED_MODULE_3__Enums_Types__["c" /* CHECK */],
  text: function text(_this) {
    return '\u041C\u043E\u0434\u0435\u0440\u0430\u0442\u043E\u0440 \u043F\u0440\u043E\u0432\u0435\u0440\u0438\u043B \u0438 \u043E\u043F\u0443\u0431\u043B\u0438\u043A\u043E\u0432\u0430\u043B \u0432\u0430\u0448\u0435 \u043E\u0431\u044A\u044F\u0432\u043B\u0435\u043D\u0438\u0435 ' + (_this.location_name ? '<a class="d-link fw_600">\u201C' + _this.location_name + '\u201D</a>' : '');
  }
}, _options[__WEBPACK_IMPORTED_MODULE_2__Enums_BoardLocationCategories__["BOARD_LOCATION_DELETED"]] = {
  type: __WEBPACK_IMPORTED_MODULE_3__Enums_Types__["a" /* ALERT_DANGER */],
  text: function text(_this) {
    return '\u041C\u043E\u0434\u0435\u0440\u0430\u0442\u043E\u0440 \u0443\u0434\u0430\u043B\u0438\u043B \u0432\u0430\u0448\u0435 \u043E\u0431\u044A\u044F\u0432\u043B\u0435\u043D\u0438\u0435 ' + (_this.location_name ? '<a class="d-link fw_600">\u201C' + _this.location_name + '\u201D</a>' : '') + '\n        \u043F\u043E \u043F\u0440\u0438\u0447\u0438\u043D\u0435: \u201C' + _this.location_reason + '\u201D</a>';
  },
  click: function click() {}
}, _options[__WEBPACK_IMPORTED_MODULE_2__Enums_BoardLocationCategories__["BOARD_LOCATION_FORCE_PUBLISHED"]] = {
  type: __WEBPACK_IMPORTED_MODULE_3__Enums_Types__["c" /* CHECK */],
  text: function text(_this) {
    return '\u0412\u0430\u0448\u0435 \u043E\u0431\u044A\u044F\u0432\u043B\u0435\u043D\u0438\u0435 ' + (_this.location_name ? '<a class="d-link fw_600">\u201C' + _this.location_name + '\u201D</a>' : '') + ' \u043E\u043F\u0443\u0431\u043B\u0438\u043A\u043E\u0432\u0430\u043D\u043E \u0432 \u043B\u0435\u043D\u0442\u0435';
  }
}, _options[__WEBPACK_IMPORTED_MODULE_2__Enums_BoardLocationCategories__["BOARD_LOCATION_REJECTED"]] = {
  type: __WEBPACK_IMPORTED_MODULE_3__Enums_Types__["b" /* ALERT_WARN */],
  text: function text(_this) {
    return '\u0412\u0430\u0448\u0435 \u043E\u0431\u044A\u044F\u0432\u043B\u0435\u043D\u0438\u0435 ' + (_this.location_name ? '<a class="d-link fw_600">\u201C' + _this.location_name + '\u201D</a>' : '') + ' \u0441\u043D\u044F\u0442\u043E \u0441 \u043F\u0443\u0431\u043B\u0438\u043A\u0430\u0446\u0438\u0438';
  }
}, _options);

/* harmony default export */ __webpack_exports__["a"] = ({
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  data: function data() {
    return {
      location: null,
      locationError: null
    };
  },
  mounted: function mounted() {
    var _this2 = this;

    if (this.isBoardLocation) {
      this.getLocation();
      this._handleInit(options[this.item.category], function () {
        _this2.$router.push({ name: 'board.locations.show', params: { slug: _this2.location_slug, id: _this2.location_id } });
      });
    }
  },

  watch: {
    location: function location() {
      if (this.type) {
        this.text = options[this.item.category].text(this);
      }
    },
    locationError: function locationError() {
      if (this.locationError) {
        this.loading = false;
      }
    }
  },
  computed: {
    isBoardLocation: function isBoardLocation() {
      return Object.values(__WEBPACK_IMPORTED_MODULE_2__Enums_BoardLocationCategories__).indexOf(this.item.category) > -1;
    },
    location_id: function location_id() {
      if (!this.isBoardLocation) return;

      return Object(__WEBPACK_IMPORTED_MODULE_0__utils__["l" /* has */])(this.item, 'extra.location.id') ? this.item.extra.location.id : Object(__WEBPACK_IMPORTED_MODULE_0__utils__["l" /* has */])(this.item, 'extra.id') ? this.item.extra.id : null;
    },
    location_slug: function location_slug() {
      if (!this.isBoardLocation) return;

      return Object(__WEBPACK_IMPORTED_MODULE_0__utils__["l" /* has */])(this.item, 'extra.location.slug') ? this.item.extra.location.slug : Object(__WEBPACK_IMPORTED_MODULE_0__utils__["l" /* has */])(this.item, 'extra.slug') ? this.item.extra.slug : null;
    },
    location_reason: function location_reason() {
      if (!this.isBoardLocation) return;

      return Object(__WEBPACK_IMPORTED_MODULE_0__utils__["l" /* has */])(this.item, 'extra.reason') ? Object(__WEBPACK_IMPORTED_MODULE_1__src_filters_string_truncate__["a" /* default */])(this.item.extra.reason, 150) : null;
    },
    location_dimension: function location_dimension() {
      return Number(this.location.dimension);
    },
    location_price: function location_price() {
      return this.location['price'];
    },
    location_currency: function location_currency() {
      return this.location.currency && Object(__WEBPACK_IMPORTED_MODULE_0__utils__["l" /* has */])(this.location.currency, 'symbol') ? this.location.currency.symbol : null;
    },
    location_paymentPeriod: function location_paymentPeriod() {
      return this.location.paymentPeriod && Object(__WEBPACK_IMPORTED_MODULE_0__utils__["l" /* has */])(this.location.paymentPeriod, 'text') ? this.location.paymentPeriod.text : null;
    },
    location_type: function location_type() {
      return this.location.type && Object(__WEBPACK_IMPORTED_MODULE_0__utils__["l" /* has */])(this.location.type, 'text') ? this.location.type.text : null;
    },
    location_name: function location_name() {
      if (!this.isBoardLocation) return;

      return this.location ? this.location_type + ' ' + (this.location_dimension ? this.location_dimension : 0) + '\u043C\xB2 - \u043E\u0442 ' + (this.location_price ? this.$currency(this.location_price, this.location_currency) : 0) + ' ' + (this.location_paymentPeriod ? this.location_paymentPeriod.toLowerCase() : '') : '';
    }
  },
  methods: {
    getLocation: function getLocation() {
      var _this3 = this;

      this.$api.get('api/v2/boards/locations/' + this.location_id).then(function (response) {
        var data = response.data.data;


        _this3.location = data;
      }).catch(function () {
        _this3.locationError = true;
      });
    }
  }
});

/***/ }),

/***/ 2396:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BOARD_LOCATION_DELETED", function() { return BOARD_LOCATION_DELETED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BOARD_LOCATION_REJECTED", function() { return BOARD_LOCATION_REJECTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BOARD_LOCATION_APPROVED", function() { return BOARD_LOCATION_APPROVED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BOARD_LOCATION_FORCE_PUBLISHED", function() { return BOARD_LOCATION_FORCE_PUBLISHED; });
var BOARD_LOCATION_DELETED = 'board.location.deleted';
var BOARD_LOCATION_REJECTED = 'board.location.rejected';
var BOARD_LOCATION_APPROVED = 'board.location.approved';
var BOARD_LOCATION_FORCE_PUBLISHED = 'board.location.force_published';

/***/ }),

/***/ 2397:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Enums_CertifyingSpecialistCategories__ = __webpack_require__(2398);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Enums_Types__ = __webpack_require__(1535);
var _options;





var options = (_options = {}, _options[__WEBPACK_IMPORTED_MODULE_1__Enums_CertifyingSpecialistCategories__["CERTIFYING_SPECIALIST_APPROVED"]] = {
  type: __WEBPACK_IMPORTED_MODULE_2__Enums_Types__["c" /* CHECK */],
  text: function text(_this) {
    return '\u041C\u043E\u0434\u0435\u0440\u0430\u0442\u043E\u0440 \u043E\u0434\u043E\u0431\u0440\u0438\u043B \u0432\u0430\u0448\u0443 \u0437\u0430\u044F\u0432\u043A\u0443 \u043D\u0430 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044E \u0432 \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0435 \u0412\u0421';
  },
  click: function click() {}
}, _options[__WEBPACK_IMPORTED_MODULE_1__Enums_CertifyingSpecialistCategories__["CERTIFYING_SPECIALIST_ORDER_CANCELED"]] = {
  type: __WEBPACK_IMPORTED_MODULE_2__Enums_Types__["a" /* ALERT_DANGER */],
  text: function text(_this) {
    return '\u0412\u0430\u0448\u0430 \u0437\u0430\u044F\u0432\u043A\u0430 \u043D\u0430 \u0432\u0435\u0440\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u044E \u043E\u0442\u043A\u043B\u043E\u043D\u0435\u043D\u0430. <a class="notifications__link fw_600">\u0423\u0437\u043D\u0430\u0442\u044C \u043F\u0440\u0438\u0447\u0438\u043D\u0443</a>';
  }
}, _options[__WEBPACK_IMPORTED_MODULE_1__Enums_CertifyingSpecialistCategories__["CERTIFYING_SPECIALIST_ORDER_CONFIRM_MEETING"]] = {
  type: __WEBPACK_IMPORTED_MODULE_2__Enums_Types__["c" /* CHECK */],
  text: function text(_this) {
    return '\u0412\u044B \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u043D\u0430\u0437\u043D\u0430\u0447\u0438\u043B\u0438 \u0432\u0441\u0442\u0440\u0435\u0447\u0443 <a class="notifications__link fw_600">\u041F\u043E\u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u0434\u0435\u0442\u0430\u043B\u0438</a>';
  }
}, _options[__WEBPACK_IMPORTED_MODULE_1__Enums_CertifyingSpecialistCategories__["CERTIFYING_SPECIALIST_ORDER_DISPUTE_FINISHED"]] = {
  type: __WEBPACK_IMPORTED_MODULE_2__Enums_Types__["a" /* ALERT_DANGER */],
  text: function text(_this) {
    return '\u0412\u0430\u0448 \u0434\u0438\u0441\u043F\u0443\u0442 \u0437\u0430\u043A\u0440\u044B\u0442 <a class="notifications__link fw_600">\u0423\u0437\u043D\u0430\u0442\u044C \u0440\u0435\u0448\u0435\u043D\u0438\u0435</a>';
  }
}, _options[__WEBPACK_IMPORTED_MODULE_1__Enums_CertifyingSpecialistCategories__["CERTIFYING_SPECIALIST_ORDER_DISPUTE_OPENED"]] = {
  type: __WEBPACK_IMPORTED_MODULE_2__Enums_Types__["e" /* INFO */],
  text: function text(_this) {
    return _this.isCustomer ? '\u041D\u0430 \u0432\u0430\u0448 \u0437\u0430\u043A\u0430\u0437 \u0431\u044B\u043B \u043E\u0442\u043A\u0440\u044B\u0442 \u0434\u0438\u0441\u043F\u0443\u0442. \u041E\u0436\u0438\u0434\u0430\u0439\u0442\u0435 \u0440\u0435\u0448\u0435\u043D\u0438\u044F \u043C\u043E\u0434\u0435\u0440\u0430\u0442\u043E\u0440\u0430' : '\u0412\u044B \u043E\u0442\u043A\u0440\u044B\u043B\u0438 \u0434\u0438\u0441\u043F\u0443\u0442. \u041E\u0436\u0438\u0434\u0430\u0439\u0442\u0435 \u0440\u0435\u0448\u0435\u043D\u0438\u044F \u043C\u043E\u0434\u0435\u0440\u0430\u0442\u043E\u0440\u0430';
  }
}, _options[__WEBPACK_IMPORTED_MODULE_1__Enums_CertifyingSpecialistCategories__["CERTIFYING_SPECIALIST_ORDER_FINISHED"]] = {
  type: __WEBPACK_IMPORTED_MODULE_2__Enums_Types__["c" /* CHECK */],
  text: function text(_this) {
    return '\u0412\u0430\u0448 \u0437\u0430\u043A\u0430\u0437 \u0433\u043E\u0442\u043E\u0432 <a class="notifications__link fw_600">\u041F\u043E\u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u0434\u0435\u0442\u0430\u043B\u0438</a>';
  }
}, _options[__WEBPACK_IMPORTED_MODULE_1__Enums_CertifyingSpecialistCategories__["CERTIFYING_SPECIALIST_ORDER_NEW"]] = {
  type: __WEBPACK_IMPORTED_MODULE_2__Enums_Types__["e" /* INFO */],
  text: function text(_this) {
    return '\u0423 \u0432\u0430\u0441 \u043D\u043E\u0432\u044B\u0439 \u0437\u0430\u043A\u0430\u0437 <a class="notifications__link fw_600">\u041F\u043E\u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C</a>';
  }
}, _options[__WEBPACK_IMPORTED_MODULE_1__Enums_CertifyingSpecialistCategories__["CERTIFYING_SPECIALIST_ORDER_PAID"]] = {
  type: __WEBPACK_IMPORTED_MODULE_2__Enums_Types__["e" /* INFO */],
  text: function text(_this) {
    return '\u0412\u044B \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u043E\u043F\u043B\u0430\u0442\u0438\u043B\u0438 \u0443\u0441\u043B\u0443\u0433\u0443 <a class="notifications__link fw_600">\u041F\u043E\u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u0434\u0435\u0442\u0430\u043B\u0438</a>';
  }
}, _options);

/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {};
  },
  mounted: function mounted() {
    var _this2 = this;

    if (!this.isCertifyingSpecialist) return;

    this._handleInit(options[this.item.category], function () {
      if (_this2.isCustomer) {
        _this2.$router.push({ name: 'certifying.customer.orders.index', params: { order_id: _this2.cs_order_id } });
      } else {
        _this2.$router.push({ name: 'certifying.executor.orders.show', params: { order_id: _this2.cs_order_id } });
      }
    });
  },

  computed: {
    isCertifyingSpecialist: function isCertifyingSpecialist() {
      return Object.values(__WEBPACK_IMPORTED_MODULE_1__Enums_CertifyingSpecialistCategories__).indexOf(this.item.category) > -1;
    },
    cs_order_id: function cs_order_id() {
      return Object(__WEBPACK_IMPORTED_MODULE_0__utils__["l" /* has */])(this.item, 'extra.order_id') ? this.item.extra.order_id : Object(__WEBPACK_IMPORTED_MODULE_0__utils__["l" /* has */])(this.item, 'content_id') ? this.item.content_id : null;
    }
  }
});

/***/ }),

/***/ 2398:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CERTIFYING_SPECIALIST_APPROVED", function() { return CERTIFYING_SPECIALIST_APPROVED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CERTIFYING_SPECIALIST_ORDER_NEW", function() { return CERTIFYING_SPECIALIST_ORDER_NEW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CERTIFYING_SPECIALIST_ORDER_PAID", function() { return CERTIFYING_SPECIALIST_ORDER_PAID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CERTIFYING_SPECIALIST_ORDER_CANCELED", function() { return CERTIFYING_SPECIALIST_ORDER_CANCELED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CERTIFYING_SPECIALIST_ORDER_FINISHED", function() { return CERTIFYING_SPECIALIST_ORDER_FINISHED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CERTIFYING_SPECIALIST_ORDER_DISPUTE_OPENED", function() { return CERTIFYING_SPECIALIST_ORDER_DISPUTE_OPENED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CERTIFYING_SPECIALIST_ORDER_CONFIRM_MEETING", function() { return CERTIFYING_SPECIALIST_ORDER_CONFIRM_MEETING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CERTIFYING_SPECIALIST_ORDER_DISPUTE_FINISHED", function() { return CERTIFYING_SPECIALIST_ORDER_DISPUTE_FINISHED; });
var CERTIFYING_SPECIALIST_APPROVED = 'certifying_specialist.approved';
var CERTIFYING_SPECIALIST_ORDER_NEW = 'certifying_specialist.order.new';
var CERTIFYING_SPECIALIST_ORDER_PAID = 'certifying_specialist.order.paid';
var CERTIFYING_SPECIALIST_ORDER_CANCELED = 'certifying_specialist.order.canceled';
var CERTIFYING_SPECIALIST_ORDER_FINISHED = 'certifying_specialist.order.stop_work';
var CERTIFYING_SPECIALIST_ORDER_DISPUTE_OPENED = 'certifying_specialist.order.dispute_opened';
var CERTIFYING_SPECIALIST_ORDER_CONFIRM_MEETING = 'certifying_specialist.order.confirm_meeting';
var CERTIFYING_SPECIALIST_ORDER_DISPUTE_FINISHED = 'certifying_specialist.order.dispute_finished';

/***/ }),

/***/ 2399:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "section",
    {
      directives: [
        { name: "show", rawName: "v-show", value: _vm.init, expression: "init" }
      ],
      staticClass: "lm-m-v2-notifications-item"
    },
    [
      _c(
        "div",
        {
          staticClass: "notifications-avatar-wrap btn btn_round",
          on: {
            click: function($event) {
              return _vm.click(this)
            }
          }
        },
        [
          _vm.avatar
            ? _c("img", {
                staticClass: "notifications-avatar",
                attrs: { src: _vm.avatar["84x84"] }
              })
            : _vm._e(),
          _vm._v(" "),
          !_vm.avatar
            ? _c("i", { class: ["notifications-avatar-icon", _vm.type] })
            : _vm._e()
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "notifications-info-wrap ml_3" },
        [
          _c("div", {
            staticClass: "notifications__text",
            domProps: { innerHTML: _vm._s(_vm.text) },
            on: {
              click: function($event) {
                return _vm.click(this)
              }
            }
          }),
          _vm._v(" "),
          _vm.date
            ? _c("div", { staticClass: "notifications__date mt_2" }, [
                _vm._v(_vm._s(_vm._f("moment")(_vm.date, "DD MMMM YYYY")))
              ])
            : _vm._e(),
          _vm._v(" "),
          _vm.actions ? _c(_vm.actionTemplate, { tag: "component" }) : _vm._e()
        ],
        1
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
    require("vue-hot-reload-api")      .rerender("data-v-023fd14c", esExports)
  }
}

/***/ }),

/***/ 2400:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "lm-m-v2-notifications lm-m-page" }, [
    _vm._m(0),
    _vm._v(" "),
    !_vm.isEmpty
      ? _c("div", { staticClass: "lm-m-v2-notifications-body" }, [
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
              staticClass: "lm-m-v2-notifications-list",
              attrs: {
                "infinite-scroll-distance": "200",
                "infinite-scroll-disabled": "infiniteDisabled"
              }
            },
            [
              _vm._l(_vm.notifications, function(item) {
                return [
                  _c("notification-card", {
                    ref: "notificationCard-" + item.id,
                    refInFor: true,
                    attrs: { item: item },
                    on: { onRead: _vm.addOnRead }
                  })
                ]
              }),
              _vm._v(" "),
              _vm.loading ? _c("lm-m-loader") : _vm._e()
            ],
            2
          )
        ])
      : _vm._e(),
    _vm._v(" "),
    _vm.isEmpty
      ? _c("div", { staticClass: "lm-m-v2-notifications-body-isEmpty" }, [
          _vm._v("\n    Новых уведомлений нет\n  ")
        ])
      : _vm._e()
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "lm-m-v2-notifications-head lm-m-page--head" },
      [_c("span", [_vm._v("Уведомления")])]
    )
  }
]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-19400101", esExports)
  }
}

/***/ })

});
//# sourceMappingURL=85.build.5e187d9b5f6bde074eb4.js.map