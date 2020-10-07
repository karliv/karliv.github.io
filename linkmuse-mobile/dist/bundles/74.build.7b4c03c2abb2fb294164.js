webpackJsonp([74],{

/***/ 1287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_User_vue__ = __webpack_require__(1642);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5c0aa1c2_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_User_vue__ = __webpack_require__(2000);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1994)
}
var normalizeComponent = __webpack_require__(2)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-5c0aa1c2"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_User_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5c0aa1c2_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_User_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/views/Board/Locations/User.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5c0aa1c2", Component.options)
  } else {
    hotAPI.reload("data-v-5c0aa1c2", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


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

/***/ 1542:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mint_ui__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mint_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_mint_ui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modules_Board_Location__ = __webpack_require__(1543);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modules_Board_Location_Enums_LocationState__ = __webpack_require__(437);
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








var APP_URL = "http://localhost";

/* harmony default export */ __webpack_exports__["a"] = ({
  props: {
    location: {
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
      show: true,
      has: __WEBPACK_IMPORTED_MODULE_0__utils__["l" /* has */],
      APP_URL: APP_URL
    };
  },

  computed: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_1_vuex__["c" /* mapGetters */])({
    role: 'auth/getRole',
    user: 'auth/getAuthUser',
    profile: 'auth/getProfile',
    isAuthorized: 'auth/isAuthorized'
  }), {
    id: function id() {
      return this.location.id;
    },
    slug: function slug() {
      return this.location.slug;
    },
    type: function type() {
      return this.location.type && Object(__WEBPACK_IMPORTED_MODULE_0__utils__["l" /* has */])(this.location.type, 'text') ? this.location.type.text : null;
    },
    state: function state() {
      return this.location.state;
    },
    classColorState: function classColorState() {
      return __WEBPACK_IMPORTED_MODULE_3__modules_Board_Location__["a" /* default */].getLocationStateClass(this.state);
    },
    photos: function photos() {
      return this.location.photos && this.location.photos.length ? this.location.photos : [];
    },
    photo: function photo() {
      return this.photos && this.photos.length ? this.photos[0] : null;
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
    city: function city() {
      return this.location && Object(__WEBPACK_IMPORTED_MODULE_0__utils__["l" /* has */])(this.location.city, 'text') ? this.location.city.text : null;
    },
    dimension: function dimension() {
      return Number(this.location.dimension);
    },
    roomType: function roomType() {
      return this.location.roomType && Object(__WEBPACK_IMPORTED_MODULE_0__utils__["l" /* has */])(this.location.roomType, 'text') ? this.location.roomType.text : null;
    },
    isCurrentUser: function isCurrentUser() {
      return this.user && this.user.id === this.location.user.id;
    },
    isModeration: function isModeration() {
      return this.state === __WEBPACK_IMPORTED_MODULE_4__modules_Board_Location_Enums_LocationState__["d" /* MODERATION */];
    },
    isPublished: function isPublished() {
      return this.state === __WEBPACK_IMPORTED_MODULE_4__modules_Board_Location_Enums_LocationState__["e" /* PUBLISHED */];
    },
    isDraft: function isDraft() {
      return this.state === __WEBPACK_IMPORTED_MODULE_4__modules_Board_Location_Enums_LocationState__["c" /* DRAFT */];
    },
    isArchived: function isArchived() {
      return this.state === __WEBPACK_IMPORTED_MODULE_4__modules_Board_Location_Enums_LocationState__["a" /* ARCHIVED */];
    },
    isRejected: function isRejected() {
      return this.state === __WEBPACK_IMPORTED_MODULE_4__modules_Board_Location_Enums_LocationState__["f" /* REJECTED */];
    },
    isAdmin: function isAdmin() {
      return this.user && this.user.hasOwnProperty('isAdmin') && this.user['isAdmin'] === true;
    },
    isFasten: function isFasten() {
      return this.location.isFasten || false;
    },
    phone: function phone() {
      return Object(__WEBPACK_IMPORTED_MODULE_0__utils__["l" /* has */])(this.location, 'phone') && this.location['phone'] ? this.location['phone'] : null;
    }
  }),
  methods: {
    _handleClickActionSheet: function _handleClickActionSheet() {
      var id = this.location.id;

      this.$emit('actionSheet', id, this.isCurrentUser);
    },
    _handleClickPublishedLocation: function _handleClickPublishedLocation() {
      var _this = this;

      return new Promise(function (resolve, reject) {

        __WEBPACK_IMPORTED_MODULE_2_mint_ui__["Indicator"].open();
        var id = _this.location.id;


        _this.$api.post('api/v2/boards/locations/' + id + '/publish').then(function (response) {
          var data = response.data;


          if (Object(__WEBPACK_IMPORTED_MODULE_0__utils__["l" /* has */])(_this.profile, 'without_moderate.castings') && _this.profile['without_moderate']['castings']) {
            _this.$emit('changeState', { id: id, key: 'state', value: __WEBPACK_IMPORTED_MODULE_4__modules_Board_Location_Enums_LocationState__["e" /* PUBLISHED */] });
          } else _this.$emit('changeState', { id: id, key: 'state', value: __WEBPACK_IMPORTED_MODULE_4__modules_Board_Location_Enums_LocationState__["d" /* MODERATION */] });

          __WEBPACK_IMPORTED_MODULE_2_mint_ui__["Indicator"].close();
          _this._clearSheet().then(function () {
            return _this._draftSheet();
          }).catch(function () {});

          resolve && resolve();
        }, function (error) {
          var data = error.response.data,
              status = error.response.status;


          __WEBPACK_IMPORTED_MODULE_2_mint_ui__["Indicator"].close();
          Object(__WEBPACK_IMPORTED_MODULE_2_mint_ui__["Toast"])({ message: 'Ошибка', iconClass: 'mintui mintui-field-error' });

          reject && reject();

          throw new Error('Error publish location');
        });
      });
    },
    _handleClickCallUser: function _handleClickCallUser() {
      this.$gtm.trackEvent({ event: 'location_call' });
    }
  }
});

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

/***/ 1575:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Location_vue__ = __webpack_require__(1542);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_54e6b634_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Location_vue__ = __webpack_require__(1578);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1576)
}
var normalizeComponent = __webpack_require__(2)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-54e6b634"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Location_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_54e6b634_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Location_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/Board/Location/Location.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-54e6b634", Component.options)
  } else {
    hotAPI.reload("data-v-54e6b634", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 1576:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1577);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("3717beff", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js?sourceMap!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-54e6b634\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Location.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js?sourceMap!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-54e6b634\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Location.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1577:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(true);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"Location.vue","sourceRoot":""}]);

// exports


/***/ }),

/***/ 1578:
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
        "p_0",
        {
          card_premium: _vm.isCatalogPage === true && _vm.isFasten === true,
          opacity_64: _vm.isArchived === true
        }
      ]
    },
    [
      _c("div", { staticClass: "declaration__card_slider_wrap" }, [
        _c(
          "div",
          { staticClass: "declaration__card_slider_item" },
          [
            _vm.photos && _vm.photos.length
              ? [
                  _c("img", {
                    attrs: {
                      src: _vm.photo["paths"]["640x360"],
                      alt: "Локация #" + _vm.location.id
                    }
                  })
                ]
              : _vm._e(),
            _vm._v(" "),
            !_vm.photos || _vm.photos.length === 0
              ? [
                  _c("img", {
                    attrs: {
                      src: "https://i.linkmuse.com/404.jpg",
                      alt: "Локация #" + _vm.location.id
                    }
                  })
                ]
              : _vm._e()
          ],
          2
        )
      ]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "card declaration__card_location" },
        [
          _c(
            "div",
            { staticClass: "row justify_between row_align_center mb_0_5" },
            [
              _c(
                "div",
                { class: ["declaration__type", _vm.classColorState] },
                [
                  _vm.isCatalogPage === true
                    ? [[_vm._v(_vm._s(_vm.type))]]
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.isCatalogPage === false
                    ? [
                        _vm.isCurrentUser === false
                          ? [_vm._v(_vm._s(_vm.type))]
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.isCurrentUser === true
                          ? [
                              _vm.isDraft === true
                                ? [_vm._v("Черновик")]
                                : _vm.isModeration === true
                                ? [_vm._v("На модерации")]
                                : _vm.isRejected === true
                                ? [
                                    _vm._v(
                                      "\n              Отклонен: " +
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
                                        ".\n              " +
                                        _vm._s(
                                          _vm.has(
                                            _vm.casting,
                                            "rejection.comment"
                                          )
                                            ? _vm.casting["rejection"][
                                                "comment"
                                              ]
                                            : ""
                                        ) +
                                        "\n            "
                                    )
                                  ]
                                : _vm.isPublished === true
                                ? [_vm._v("Опубликован")]
                                : _vm.isArchived === true
                                ? [_vm._v("Архив")]
                                : [_vm._v("Ваше объявление")]
                            ]
                          : _vm._e()
                      ]
                    : _vm._e()
                ],
                2
              ),
              _vm._v(" "),
              _vm.isAuthorized === true
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
          _c(
            "router-link",
            {
              staticClass: "section declaration__section",
              attrs: {
                to: {
                  name: "board.locations.show",
                  params: { slug: _vm.slug, id: _vm.id }
                }
              }
            },
            [
              _c("div", { staticClass: "heading_h5 declaration__heading" }, [
                _vm._v(
                  "От " +
                    _vm._s(_vm._f("currency")(_vm.price, _vm.currency)) +
                    " / " +
                    _vm._s(_vm._f("lowercase")(_vm.paymentPeriod))
                )
              ]),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "declaration__list declaration__list_parameters"
                },
                [
                  _vm.city ? [_c("div", [_vm._v(_vm._s(_vm.city))])] : _vm._e(),
                  _vm._v(" "),
                  _vm.dimension
                    ? [
                        _c("div", [
                          _vm._v(_vm._s(_vm.dimension) + " м"),
                          _c("sup", [_vm._v("2")])
                        ])
                      ]
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.roomType
                    ? [_c("div", [_vm._v(_vm._s(_vm.roomType))])]
                    : _vm._e()
                ],
                2
              )
            ]
          ),
          _vm._v(" "),
          _c("div", { staticClass: "section declaration__section" }, [
            _c(
              "div",
              { staticClass: "row row_justify_center" },
              [
                _vm.isCurrentUser === false
                  ? [
                      _vm.phone
                        ? [
                            _c(
                              "a",
                              {
                                staticClass: "btn",
                                attrs: { href: "tel:" + _vm.phone },
                                on: { click: _vm._handleClickCallUser }
                              },
                              [_vm._v(_vm._s(_vm.$t("location.location.call")))]
                            )
                          ]
                        : !_vm.phone
                        ? [
                            _c(
                              "router-link",
                              {
                                staticClass: "btn",
                                attrs: {
                                  to: {
                                    name: "board.locations.show",
                                    params: { slug: _vm.slug, id: _vm.id }
                                  }
                                }
                              },
                              [_vm._v("\n              Открыть\n            ")]
                            )
                          ]
                        : _vm._e()
                    ]
                  : _vm._e(),
                _vm._v(" "),
                _vm.isCurrentUser === true
                  ? [
                      _vm.isArchived === false
                        ? [
                            _c(
                              "router-link",
                              {
                                staticClass: "btn",
                                attrs: {
                                  to: {
                                    name: "board.locations.edit",
                                    params: { id: _vm.id }
                                  }
                                }
                              },
                              [
                                _vm.isDraft === false
                                  ? [_vm._v("Редактировать")]
                                  : _vm.isDraft === true
                                  ? [_vm._v("Продолжить")]
                                  : _vm._e()
                              ],
                              2
                            )
                          ]
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.isArchived === true
                        ? [
                            _c(
                              "button",
                              {
                                staticClass: "btn",
                                on: { click: _vm._handleClickPublishedLocation }
                              },
                              [_vm._v("опубликовать")]
                            )
                          ]
                        : _vm._e()
                    ]
                  : _vm._e()
              ],
              2
            )
          ])
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
    require("vue-hot-reload-api")      .rerender("data-v-54e6b634", esExports)
  }
}

/***/ }),

/***/ 1642:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vuex__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_mint_ui__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_mint_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_mint_ui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Board_Location_Location_vue__ = __webpack_require__(1575);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_Board_Location_FilterUser_vue__ = __webpack_require__(1996);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_Board_NavigationCategoriesUser_vue__ = __webpack_require__(1528);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_vuex_map_fields__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__modules_Board_Enums_BoardType__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__modules_Board_Location_Enums_LocationState__ = __webpack_require__(437);
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













var _createHelpers = Object(__WEBPACK_IMPORTED_MODULE_7_vuex_map_fields__["a" /* createHelpers */])({
  getterType: 'board/location/getField',
  mutationType: 'board/location/updateField'
}),
    mapFields = _createHelpers.mapFields;




/* harmony default export */ __webpack_exports__["a"] = ({
  components: { 'mt-loadmore': __WEBPACK_IMPORTED_MODULE_3_mint_ui__["Loadmore"], LocationFilter: __WEBPACK_IMPORTED_MODULE_5__components_Board_Location_FilterUser_vue__["a" /* default */], LocationCard: __WEBPACK_IMPORTED_MODULE_4__components_Board_Location_Location_vue__["a" /* default */], NavigationCategoriesUser: __WEBPACK_IMPORTED_MODULE_6__components_Board_NavigationCategoriesUser_vue__["a" /* default */] },
  metaInfo: function metaInfo() {
    return {
      title: '' + (this.isCurrentUser ? 'Мои объявления: локации' : 'Объявления: локации')
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
              fields = store.state.board.location.locations.userFilter;
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
              return store.dispatch('board/location/fetchUserLocations', {
                fields: fields,
                username: username,
                offset: 0
              }).then(function () {
                store.dispatch('board/location/setHasNewLocationsData', true);
              }).catch(function (error) {
                var _error$response3 = error.response,
                    _error$response3$stat = _error$response3.status,
                    status = _error$response3$stat === undefined ? 500 : _error$response3$stat,
                    _error$response3$url = _error$response3.url,
                    url = _error$response3$url === undefined ? null : _error$response3$url;

                throw { code: status, message: 'Error fetch user location', url: url };
              });

            case 8:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this);
    }))();
  },
  beforeDestroy: function beforeDestroy() {
    this.$store.dispatch('board/location/setHasNewLocationsData', true);
  },
  data: function data() {
    return {
      height: 0,
      openFilter: false,
      actionSheet: {
        actions: [],
        value: false,
        location: { id: null, slug: null }
      },
      loadmore: { topStatus: null }
    };
  },

  computed: _extends({}, mapFields({
    fields: 'locations.userFilter',
    defaultFields: 'locations.defaultUserFilter'
  }), Object(__WEBPACK_IMPORTED_MODULE_2_vuex__["c" /* mapGetters */])({
    role: 'auth/getRole',
    authUser: 'auth/getAuthUser',
    user: 'user/getShowUserData',
    isAuthorized: 'auth/isAuthorized',
    total: 'board/location/getLocationsTotal',
    error: 'board/location/getLocationsError',
    offset: 'board/location/getLocationsOffset',
    locations: 'board/location/getLocationsData',
    loading: 'board/location/getLocationsLoading',
    infiniteDisabled: 'board/location/getLocationsInfiniteDisabled'
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

  methods: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_2_vuex__["b" /* mapActions */])({
    clearLocations: 'board/location/clearLocations',
    fetchLocations: 'board/location/fetchUserLocations'
  }), {
    _handleLoadTopLocations: function _handleLoadTopLocations() {
      var _this2 = this;

      var username = this.username,
          fields = this.fields;

      this.fetchLocations({ username: username, fields: fields, offset: 0 }).then(function () {
        _this2.$refs.loadmore.onTopLoaded();
      }).catch(function () {
        return console.log('Error loading');
      });
    },
    _handleTopStatusChangeLocations: function _handleTopStatusChangeLocations(status) {
      this.loadmore.topStatus = status;
    },
    _handleInfiniteScroll: function _handleInfiniteScroll() {
      var offset = this.offset,
          username = this.username;

      this.fetchLocations({ username: username, offset: offset });
    },
    _handleApplyFilter: function _handleApplyFilter() {
      var _this3 = this;

      this.clearLocations().then(function () {
        _this3._toggleFilter();
        var username = _this3.username,
            fields = _this3.fields;

        _this3.fetchLocations({ username: username, fields: fields, offset: 0 });
      }).catch(function () {});
    },
    _handleHideFilter: function _handleHideFilter() {
      this._toggleFilter();
    },
    _toggleFilter: function _toggleFilter() {
      var _this4 = this;

      return new Promise(function (resolve, reject) {
        try {
          _this4.openFilter = !_this4.openFilter;
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

      this.$store.dispatch('board/location/setFieldLocationsData', { id: id, key: key, value: value });
    },
    _handleActionSheetLocation: function _handleActionSheetLocation(locationId) {
      var isCurrentUser = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      var location = this._.find(this.locations, function (c) {
        return c.id === locationId;
      });
      if (location) {
        var id = location.id,
            slug = location.slug;

        Object.assign(this.actionSheet.location, { id: id, slug: slug });

        if (isCurrentUser === true && location.state !== __WEBPACK_IMPORTED_MODULE_9__modules_Board_Location_Enums_LocationState__["a" /* ARCHIVED */] || this.isAdmin) {
          this.actionSheet.actions.push({
            name: 'Редактировать',
            method: this._handleClickEditLocation
          });
        }

        if (isCurrentUser === true) {
          if (location.state === __WEBPACK_IMPORTED_MODULE_9__modules_Board_Location_Enums_LocationState__["e" /* PUBLISHED */]) {
            this.actionSheet.actions.push({
              name: 'В архив',
              method: this._handleClickArchiveLocation
            });
          }
        }

        if (isCurrentUser === false) {
          this.actionSheet.actions.push({
            name: 'Пожаловаться',
            method: this._handleClickAbuseLocation
          });
        }

        if (this.isAdmin === true && location.state === __WEBPACK_IMPORTED_MODULE_9__modules_Board_Location_Enums_LocationState__["d" /* MODERATION */]) {
          this.actionSheet.actions.push({
            name: 'Одобрить',
            method: this._handleClickApproveLocation
          });
        }

        this.actionSheet.value = true;
      }
    },
    _handleInputActionSheet: function _handleInputActionSheet(value) {
      if (value === false) {
        this.actionSheet = {
          actions: [],
          value: false,
          location: { id: null, value: null }
        };
      }
    },
    _handleClickEditLocation: function _handleClickEditLocation() {
      var id = this.actionSheet.location.id;

      this.$router.push({ name: 'board.locations.edit', params: { id: id } });
    },
    _handleClickArchiveLocation: function _handleClickArchiveLocation() {
      var _this5 = this;

      var id = this.actionSheet.location.id;


      this.$confirm({
        cancelTxt: 'отмена',
        confirmTxt: 'в архив',
        title: 'Подтвердите действие',
        message: 'Вы уверены, что хотите удалить и перенести объявление в архив?'
      }).then(function () {
        _this5._handleArchive(id);
      }).catch(function () {});
    },
    _handleArchive: function _handleArchive(id) {
      var _this6 = this;

      return new Promise(function (resolve, reject) {
        __WEBPACK_IMPORTED_MODULE_3_mint_ui__["Indicator"].open();

        _this6.$api.post('api/v2/boards/locations/' + id + '/archive').then(function (response) {
          var data = response.data;

          _this6.$store.dispatch('board/location/setFieldLocationsData', { id: id, key: 'state', value: __WEBPACK_IMPORTED_MODULE_9__modules_Board_Location_Enums_LocationState__["a" /* ARCHIVED */] });

          __WEBPACK_IMPORTED_MODULE_3_mint_ui__["Indicator"].close();

          resolve();
        }, function (error) {
          var _error$response4 = error.response,
              data = _error$response4.data,
              status = _error$response4.status;


          __WEBPACK_IMPORTED_MODULE_3_mint_ui__["Indicator"].close();
          Object(__WEBPACK_IMPORTED_MODULE_3_mint_ui__["Toast"])({ message: 'Ошибка', iconClass: 'mintui mintui-field-error' });

          reject();

          throw new Error('Error draft location');
        });
      });
    },
    _handleClickAbuseLocation: function _handleClickAbuseLocation() {
      var id = this.actionSheet.location.id;

      this.$root.$emit('open-modal-abuse-create', { id: id, type: 'board_location' });
    },
    _handleClickApproveLocation: function _handleClickApproveLocation() {
      var _this7 = this;

      __WEBPACK_IMPORTED_MODULE_3_mint_ui__["Indicator"].open();
      var id = this.actionSheet.location.id;


      this.$api.post('/api/admin/v1/boards/locations/' + id + '/approve').then(function (response) {
        __WEBPACK_IMPORTED_MODULE_3_mint_ui__["Indicator"].close();
        var data = response.data.data;

        _this7.$store.dispatch('board/location/setFieldLocationsData', { id: id, key: 'state', value: __WEBPACK_IMPORTED_MODULE_9__modules_Board_Location_Enums_LocationState__["e" /* PUBLISHED */] });
      }, function (err) {
        __WEBPACK_IMPORTED_MODULE_3_mint_ui__["Indicator"].close();
        Object(__WEBPACK_IMPORTED_MODULE_3_mint_ui__["Toast"])({ message: 'Ошибка', iconClass: 'mintui mintui-field-error' });
      });
    }
  })
});

/***/ }),

/***/ 1643:
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
  getterType: 'board/location/getField',
  mutationType: 'board/location/updateField'
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
    fields: 'locations.userFilter',
    defaultFields: 'locations.defaultUserFilter'
  }), Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["c" /* mapGetters */])({
    profile: 'auth/getProfile',
    isAuthorized: 'auth/isAuthorized',
    sources: 'board/location/getSources'
  }), {
    showReset: function showReset() {
      var fields = this._.omit(this.fields, ['type']);
      var defaultFields = this._.omit(this.defaultFields, ['type']);

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

/***/ 1994:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1995);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("e324898a", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js?sourceMap!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-5c0aa1c2\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./User.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js?sourceMap!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-5c0aa1c2\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./User.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1995:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(true);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"User.vue","sourceRoot":""}]);

// exports


/***/ }),

/***/ 1996:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_FilterUser_vue__ = __webpack_require__(1643);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_57b16958_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_FilterUser_vue__ = __webpack_require__(1999);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1997)
}
var normalizeComponent = __webpack_require__(2)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-57b16958"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_FilterUser_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_57b16958_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_FilterUser_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/Board/Location/FilterUser.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-57b16958", Component.options)
  } else {
    hotAPI.reload("data-v-57b16958", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 1997:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1998);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("7b2eb0d1", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js?sourceMap!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-57b16958\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./FilterUser.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js?sourceMap!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-57b16958\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./FilterUser.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1998:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(true);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"FilterUser.vue","sourceRoot":""}]);

// exports


/***/ }),

/***/ 1999:
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
                    options: _vm.sources["stateLocation"]
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
    require("vue-hot-reload-api")      .rerender("data-v-57b16958", esExports)
  }
}

/***/ }),

/***/ 2000:
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
      _c("div", { staticClass: "page__header page__header_feed" }, [
        _c(
          "div",
          { staticClass: "row row_justify_between mb_3" },
          [
            _c("div", { staticClass: "heading_h4" }, [
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
                      attrs: { to: { name: "board.locations.create" } }
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
                ]
              : _vm._e()
          ],
          2
        ),
        _vm._v(" "),
        _c("div", { staticClass: "row" }, [_c("navigation-categories-user")], 1)
      ]),
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
                              attrs: { to: { name: "board.locations.create" } }
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
                    attrs: { "top-method": _vm._handleLoadTopLocations },
                    on: {
                      "top-status-change": _vm._handleTopStatusChangeLocations
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
                        _vm._l(_vm.locations, function(location) {
                          return _c("location-card", {
                            key: location.id,
                            attrs: { location: location, isCatalogPage: false },
                            on: {
                              actionSheet: _vm._handleActionSheetLocation,
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
      _c("location-filter", {
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
    require("vue-hot-reload-api")      .rerender("data-v-5c0aa1c2", esExports)
  }
}

/***/ })

});
//# sourceMappingURL=74.build.7b4c03c2abb2fb294164.js.map