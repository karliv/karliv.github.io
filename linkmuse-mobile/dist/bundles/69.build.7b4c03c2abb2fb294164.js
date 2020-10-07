webpackJsonp([69],{

/***/ 1285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Index_vue__ = __webpack_require__(1637);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2b9cfbae_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Index_vue__ = __webpack_require__(1986);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1979)
}
var normalizeComponent = __webpack_require__(2)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-2b9cfbae"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2b9cfbae_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Index_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/views/Board/Locations/Index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2b9cfbae", Component.options)
  } else {
    hotAPI.reload("data-v-2b9cfbae", Component.options)
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

/***/ 1637:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mint_ui__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mint_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_mint_ui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modules_Board_Location_Enums_LocationState__ = __webpack_require__(437);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__modules_Board_Location_Enums_LocationEquip__ = __webpack_require__(1532);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__modules_SEO_mixins_Locations__ = __webpack_require__(1638);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_Board_Location_Location_vue__ = __webpack_require__(1575);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_Board_Location_Filter_vue__ = __webpack_require__(1982);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_Board_NavigationCategories_vue__ = __webpack_require__(1524);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_vuex_map_fields__ = __webpack_require__(22);
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
















var _createHelpers = Object(__WEBPACK_IMPORTED_MODULE_10_vuex_map_fields__["a" /* createHelpers */])({
  getterType: 'board/location/getField',
  mutationType: 'board/location/updateField'
}),
    mapFields = _createHelpers.mapFields;

/* harmony default export */ __webpack_exports__["a"] = ({
  mixins: [__WEBPACK_IMPORTED_MODULE_6__modules_SEO_mixins_Locations__["a" /* default */]],
  components: { 'mt-loadmore': __WEBPACK_IMPORTED_MODULE_2_mint_ui__["Loadmore"], LocationFilter: __WEBPACK_IMPORTED_MODULE_8__components_Board_Location_Filter_vue__["a" /* default */], LocationCard: __WEBPACK_IMPORTED_MODULE_7__components_Board_Location_Location_vue__["a" /* default */], NavigationCategories: __WEBPACK_IMPORTED_MODULE_9__components_Board_NavigationCategories_vue__["a" /* default */] },
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
      actionSheet: {
        actions: [],
        value: false,
        location: { id: null, slug: null }
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
              loadingSources = store.getters['board/location/getLoadingSources'];
              initializedSources = store.getters['board/location/getInitializedSources'];

              if (!(loadingSources === false && initializedSources === false)) {
                _context.next = 6;
                break;
              }

              _context.next = 6;
              return store.dispatch('board/location/getSources').catch(function (error) {
                var _error$response = error.response,
                    _error$response$statu = _error$response.status,
                    status = _error$response$statu === undefined ? 500 : _error$response$statu,
                    _error$response$url = _error$response.url,
                    url = _error$response$url === undefined ? null : _error$response$url;

                throw { code: status, message: 'Error sources locations', url: url };
              });

            case 6:
              defaultFields = store.getters['board/location/getCatalogDefaultFieldsFilter'];
              fields = Object(__WEBPACK_IMPORTED_MODULE_6__modules_SEO_mixins_Locations__["b" /* getFieldsFromRoute */])(route, store.getters['board/location/getSources'], Object(__WEBPACK_IMPORTED_MODULE_3__utils__["u" /* omitEmpty */])(Object.assign(__WEBPACK_IMPORTED_MODULE_0_lodash___default.a.clone(defaultFields), query), { omitZero: false }));
              isEqualFilter = __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.isEqual(fields, Object(__WEBPACK_IMPORTED_MODULE_3__utils__["u" /* omitEmpty */])(Object.assign(__WEBPACK_IMPORTED_MODULE_0_lodash___default.a.clone(defaultFields), store.getters['board/location/getField']('locations.filter')), { omitZero: false }));

              // TODO: Convert type input value. ( route === string, v-model === number )
              // console.log(fields)
              // console.log(omitEmpty(Object.assign(_.clone(defaultFields), store.getters['board/location/getField']('locations.filter')), { omitZero: false }))

              hasNew = store.getters['board/location/getLocationsHasNew'];
              loadingData = store.getters['board/location/getLocationsLoading'];
              initializedData = store.getters['board/location/getInitializedData'];

              if (!(loadingData === false && (isEqualFilter === false || initializedData === false || hasNew === true))) {
                _context.next = 19;
                break;
              }

              _context.next = 15;
              return store.dispatch('board/location/clearLocations');

            case 15:
              _context.next = 17;
              return store.commit('board/location/updateField', { path: 'locations.filter', value: Object.assign(__WEBPACK_IMPORTED_MODULE_0_lodash___default.a.clone(defaultFields), fields) });

            case 17:
              _context.next = 19;
              return store.dispatch('board/location/fetchLocations', { fields: fields, offset: 0 }).then(function (total) {
                store.dispatch('board/location/setInitializedLocationsData', true);
                if (typeof window !== 'undefined' && total < 4) {
                  window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
                }
              }).catch(function (error) {
                var _error$response2 = error.response,
                    _error$response2$stat = _error$response2.status,
                    status = _error$response2$stat === undefined ? 500 : _error$response2$stat,
                    _error$response2$url = _error$response2.url,
                    url = _error$response2$url === undefined ? null : _error$response2$url;

                throw { code: status, message: 'Error fetch locations', url: url };
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
    fields: 'locations.filter',
    defaultFields: 'locations.defaultFilter'
  }), Object(__WEBPACK_IMPORTED_MODULE_1_vuex__["c" /* mapGetters */])({
    user: 'auth/getAuthUser',
    profile: 'auth/getProfile',
    isAuthorized: 'auth/isAuthorized',
    sources: 'board/location/getSources',
    total: 'board/location/getLocationsTotal',
    error: 'board/location/getLocationsError',
    offset: 'board/location/getLocationsOffset',
    locations: 'board/location/getLocationsData',
    loading: 'board/location/getLocationsLoading',
    infiniteDisabled: 'board/location/getLocationsInfiniteDisabled'
  }), {
    isEmpty: function isEmpty() {
      return this.loading === false && this.total === 0;
    },
    isAdmin: function isAdmin() {
      return this.user && this.user.hasOwnProperty('isAdmin') && this.user['isAdmin'] === true;
    },
    hasFilter: function hasFilter() {
      var fields = this._.omit(this.fields, ['name']);
      var defaultFields = this._.omit(this.defaultFields, ['name']);

      return this._.isEqual(fields, defaultFields) === false;
    },
    citiesPlaceholder: function citiesPlaceholder() {
      return this.fields['countryId'] ? 'Не выбран' : 'Укажите страну';
    },
    equipmentAndFacilities: function equipmentAndFacilities() {
      return [{ id: __WEBPACK_IMPORTED_MODULE_5__modules_Board_Location_Enums_LocationEquip__["EQUIPMENT_RENTAL"], text: this.$t('dictionary.equipment-services.' + __WEBPACK_IMPORTED_MODULE_5__modules_Board_Location_Enums_LocationEquip__["EQUIPMENT_RENTAL"], 'web_ru') }, { id: __WEBPACK_IMPORTED_MODULE_5__modules_Board_Location_Enums_LocationEquip__["PARKING"], text: this.$t('dictionary.equipment-services.' + __WEBPACK_IMPORTED_MODULE_5__modules_Board_Location_Enums_LocationEquip__["PARKING"], 'web_ru') }, { id: __WEBPACK_IMPORTED_MODULE_5__modules_Board_Location_Enums_LocationEquip__["INTERIOR"], text: this.$t('dictionary.equipment-services.' + __WEBPACK_IMPORTED_MODULE_5__modules_Board_Location_Enums_LocationEquip__["INTERIOR"], 'web_ru') }, { id: __WEBPACK_IMPORTED_MODULE_5__modules_Board_Location_Enums_LocationEquip__["EXTERIOR"], text: this.$t('dictionary.equipment-services.' + __WEBPACK_IMPORTED_MODULE_5__modules_Board_Location_Enums_LocationEquip__["EXTERIOR"], 'web_ru') }, { id: __WEBPACK_IMPORTED_MODULE_5__modules_Board_Location_Enums_LocationEquip__["DRESSING_ROOM"], text: this.$t('dictionary.equipment-services.' + __WEBPACK_IMPORTED_MODULE_5__modules_Board_Location_Enums_LocationEquip__["DRESSING_ROOM"], 'web_ru') }, { id: __WEBPACK_IMPORTED_MODULE_5__modules_Board_Location_Enums_LocationEquip__["SCENE"], text: this.$t('dictionary.equipment-services.' + __WEBPACK_IMPORTED_MODULE_5__modules_Board_Location_Enums_LocationEquip__["SCENE"], 'web_ru') }, { id: __WEBPACK_IMPORTED_MODULE_5__modules_Board_Location_Enums_LocationEquip__["CHROMAKEY"], text: this.$t('dictionary.equipment-services.' + __WEBPACK_IMPORTED_MODULE_5__modules_Board_Location_Enums_LocationEquip__["CHROMAKEY"], 'web_ru') }, { id: __WEBPACK_IMPORTED_MODULE_5__modules_Board_Location_Enums_LocationEquip__["CYCLORAMA"], text: this.$t('dictionary.equipment-services.' + __WEBPACK_IMPORTED_MODULE_5__modules_Board_Location_Enums_LocationEquip__["CYCLORAMA"], 'web_ru') }, { id: __WEBPACK_IMPORTED_MODULE_5__modules_Board_Location_Enums_LocationEquip__["DAYLIGHT"], text: this.$t('dictionary.equipment-services.' + __WEBPACK_IMPORTED_MODULE_5__modules_Board_Location_Enums_LocationEquip__["DAYLIGHT"], 'web_ru') }];
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


    if (has(params, 'filter') || Object.keys(query).length) return next();

    this._clearFilter().then(function () {
      console.log('Cleared locations...');
      _this2.seoGenerate();
      next();
    }).catch(function () {
      _this2.seoGenerate();
      next();
    });
  },

  methods: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_1_vuex__["b" /* mapActions */])({
    fetchLocations: 'board/location/fetchLocations',
    clearLocations: 'board/location/clearLocations',
    _setInitializedLocationsData: 'board/location/setInitializedLocationsData'
  }), {
    _handleClickCreateBoard: function _handleClickCreateBoard() {
      this.$router.push({ name: 'board.create' });
    },
    _handleLoadTopLocations: function _handleLoadTopLocations() {
      var _this3 = this;

      var fields = this.fields;

      this._setInitializedLocationsData(false);
      this.fetchLocations({ fields: fields, offset: 0 }).then(function () {
        _this3.$refs.loadmore.onTopLoaded();
        _this3._setInitializedLocationsData(true);
      }).catch(function () {
        return console.log('Error loading');
      });
    },
    _handleTopStatusChangeLocations: function _handleTopStatusChangeLocations(status) {
      this.loadmore.topStatus = status;
    },
    _handleInfiniteScroll: function _handleInfiniteScroll() {
      var fields = this.fields,
          offset = this.offset;

      this.fetchLocations({ fields: fields, offset: offset });
    },
    _handleApplyFilter: function _handleApplyFilter() {
      var _this4 = this;

      this._toggleFilter();
      var fields = this.fields;

      var _getSeoRouterParams = this.getSeoRouterParams(Object(__WEBPACK_IMPORTED_MODULE_3__utils__["u" /* omitEmpty */])(fields, { omitZero: false })),
          query = _getSeoRouterParams.query,
          params = _getSeoRouterParams.params;

      this.clearLocations().then(function () {
        _this4._setInitializedLocationsData(false);

        _this4.$router.replace({ name: 'board.locations.index', query: query, params: params }, function () {
          _this4.seoGenerate();
          _this4._setInitializedLocationsData(true);
        });
        _this4.$gtm.trackEvent({ event: 'location_filter' });
      }).catch(function () {});
    },
    _clearFilter: function _clearFilter() {
      var _this5 = this;

      return new Promise(function (resolve, reject) {
        var fields = _this5.fields;

        try {
          _this5.fields = _this5._.clone(_this5.defaultFields);

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

        if (isCurrentUser === true && location.state !== __WEBPACK_IMPORTED_MODULE_4__modules_Board_Location_Enums_LocationState__["a" /* ARCHIVED */] || this.isAdmin) {
          this.actionSheet.actions.push({
            name: this.$t('location.location.edit'),
            method: this._handleClickEditLocation
          });
        }

        if (isCurrentUser === true) {
          if (location.state === __WEBPACK_IMPORTED_MODULE_4__modules_Board_Location_Enums_LocationState__["e" /* PUBLISHED */]) {
            this.actionSheet.actions.push({
              name: 'В архив',
              method: this._handleClickArchiveLocation
            });
          }
        }

        if (isCurrentUser === false) {
          this.actionSheet.actions.push({
            name: this.$t('location.location.report'),
            method: this._handleClickAbuseLocation
          });
        }

        if (this.isAdmin === true && location.state === __WEBPACK_IMPORTED_MODULE_4__modules_Board_Location_Enums_LocationState__["d" /* MODERATION */]) {
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
      var _this7 = this;

      var id = this.actionSheet.location.id;


      this.$confirm({
        cancelTxt: 'отмена',
        confirmTxt: 'в архив',
        title: 'Подтвердите действие',
        message: 'Вы уверены, что хотите удалить и перенести объявление в архив?'
      }).then(function () {
        _this7._handleArchive(id);
      }).catch(function () {});
    },
    _handleArchive: function _handleArchive(id) {
      var _this8 = this;

      return new Promise(function (resolve, reject) {
        __WEBPACK_IMPORTED_MODULE_2_mint_ui__["Indicator"].open();

        _this8.$api.post('api/v2/boards/locations/' + id + '/archive').then(function (response) {
          var data = response.data;

          _this8.$store.dispatch('board/location/setFieldLocationsData', { id: id, key: 'state', value: __WEBPACK_IMPORTED_MODULE_4__modules_Board_Location_Enums_LocationState__["a" /* ARCHIVED */] });

          __WEBPACK_IMPORTED_MODULE_2_mint_ui__["Indicator"].close();

          resolve();
        }, function (error) {
          var _error$response3 = error.response,
              data = _error$response3.data,
              status = _error$response3.status;


          __WEBPACK_IMPORTED_MODULE_2_mint_ui__["Indicator"].close();
          Object(__WEBPACK_IMPORTED_MODULE_2_mint_ui__["Toast"])({ message: 'Ошибка', iconClass: 'mintui mintui-field-error' });

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
      var _this9 = this;

      __WEBPACK_IMPORTED_MODULE_2_mint_ui__["Indicator"].open();
      var id = this.actionSheet.location.id;


      this.$api.post('/api/admin/v1/boards/locations/' + id + '/approve').then(function (response) {
        __WEBPACK_IMPORTED_MODULE_2_mint_ui__["Indicator"].close();
        var data = response.data.data;

        _this9.$store.dispatch('board/location/setFieldLocationsData', { id: id, key: 'state', value: __WEBPACK_IMPORTED_MODULE_4__modules_Board_Location_Enums_LocationState__["e" /* PUBLISHED */] });
      }, function (err) {
        __WEBPACK_IMPORTED_MODULE_2_mint_ui__["Indicator"].close();
        Object(__WEBPACK_IMPORTED_MODULE_2_mint_ui__["Toast"])({ message: 'Ошибка', iconClass: 'mintui mintui-field-error' });
      });
    }
  })
});

/***/ }),

/***/ 1638:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = getFieldsFromRoute;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vuex__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Enums_Locations__ = __webpack_require__(1981);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Enums_FilterOptionTypes__ = __webpack_require__(1567);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__modules_Board_Location_Enums_LocationEquip__ = __webpack_require__(1532);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__helpers__ = __webpack_require__(1568);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _FILTERS_OPTIONS;









var TITLE = '\u041A\u0430\u0442\u0430\u043B\u043E\u0433 \u043B\u043E\u043A\u0430\u0446\u0438\u0439::filter \u0434\u043B\u044F \u0441\u044A\u0451\u043C\u043E\u043A \u043A\u0438\u043D\u043E, \u0441\u0435\u0440\u0438\u0430\u043B\u043E\u0432, \u0440\u0435\u043A\u043B\u0430\u043C\u044B, \u043A\u043B\u0438\u043F\u043E\u0432, \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430\u043B\u044C\u043D\u044B\u0445 \u0444\u0438\u043B\u044C\u043C\u043E\u0432';
var DEFAULT_TITLE = 'Каталог локаций для съёмок кино, сериалов, рекламы, клипов, роликов, документальных фильмов';
var DESCRIPTION = '\u041C\u043D\u043E\u0436\u0435\u0441\u0442\u0432\u043E \u043B\u043E\u043A\u0430\u0446\u0438\u0439::filter. \u0412\u0441\u0435 \u043E\u0431\u044A\u044F\u0432\u043B\u0435\u043D\u0438\u044F \u043F\u0440\u043E\u0445\u043E\u0434\u044F\u0442 \u043F\u0440\u043E\u0432\u0435\u0440\u043A\u0443 \u043C\u043E\u0434\u0435\u0440\u0430\u0442\u043E\u0440\u043E\u043C';
var DEFAULT_DESCRIPTION = 'Множество локаций для съёмок. Все объявления проходят проверку модератором';
var FILTERS_OPTIONS = (_FILTERS_OPTIONS = {}, _FILTERS_OPTIONS[__WEBPACK_IMPORTED_MODULE_3__Enums_Locations__["TYPE"]] = {
  source: 'roomTypes',
  field: 'roomTypes'
}, _FILTERS_OPTIONS[__WEBPACK_IMPORTED_MODULE_3__Enums_Locations__["SERVICE"]] = {
  type: __WEBPACK_IMPORTED_MODULE_4__Enums_FilterOptionTypes__["c" /* WITH */],
  source: function source(value) {
    return Object.values(__WEBPACK_IMPORTED_MODULE_5__modules_Board_Location_Enums_LocationEquip__).indexOf(value) > -1 ? value : null;
  },
  inQuery: function inQuery(_this, query) {
    var field = 'equipmentAndFacilities';
    var param = false;

    if (!(Object(__WEBPACK_IMPORTED_MODULE_1__utils__["l" /* has */])(query, field) && query[field].length === 1)) return { param: param, query: query };

    param = Object.values(__WEBPACK_IMPORTED_MODULE_5__modules_Board_Location_Enums_LocationEquip__).indexOf(query[field][0]) > -1 ? query[field][0] : false;

    if (param) {
      delete query[field];
    }

    return { param: param, query: query };
  },
  field: function field(source) {
    return { equipmentAndFacilities: [source] };
  },
  phrase: function phrase(_ref, _this) {
    var source = _ref.source;

    return source ? _this.$t('dictionary.equipment-services.' + source + '.declension.single.tvor', 'web_ru') : '';
  }
}, _FILTERS_OPTIONS[__WEBPACK_IMPORTED_MODULE_3__Enums_Locations__["CATEGORY"]] = {
  type: __WEBPACK_IMPORTED_MODULE_4__Enums_FilterOptionTypes__["a" /* FOR */],
  source: 'categories',
  field: 'categoryIds',
  phraseDescription: function phraseDescription(_ref2, _this) {
    var source = _ref2.source;

    return source ? _this.$t('dictionary.location-type.' + source.id + '.declension.plural.rod', 'web_ru') : '';
  }
}, _FILTERS_OPTIONS);

function getFieldsFromRoute(route, sources, fields) {
  return Object(__WEBPACK_IMPORTED_MODULE_6__helpers__["c" /* getFields */])(route, sources, fields, __WEBPACK_IMPORTED_MODULE_3__Enums_Locations__, FILTERS_OPTIONS);
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
    filterSources: 'board/location/getSources'
  }), {
    seoFilter: function seoFilter() {
      return Object(__WEBPACK_IMPORTED_MODULE_6__helpers__["d" /* getFilter */])(this.$route);
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
      var str = '';

      for (var type in filtersFinal) {
        str += filtersFinal[type].length ? ' ' + (type !== 'empty' ? type + ' ' : '') + filtersFinal[type].join(',') : '';
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
    getDefaultPhrase: function getDefaultPhrase(_ref3) {
      var source = _ref3.source;

      return source ? source.text : '';
    },
    getDefaultField: function getDefaultField(source, field) {
      return Object(__WEBPACK_IMPORTED_MODULE_6__helpers__["a" /* getDefaultField */])(source, field);
    },
    getDefaultSource: function getDefaultSource(value, key) {
      return Object(__WEBPACK_IMPORTED_MODULE_6__helpers__["b" /* getDefaultSource */])(value, key, this.filterSources);
    },
    seoFilterInQuery: function seoFilterInQuery(_ref4, query) {
      var field = _ref4.field,
          source = _ref4.source;

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
        for (var key in __WEBPACK_IMPORTED_MODULE_3__Enums_Locations__) {
          var filterKey = __WEBPACK_IMPORTED_MODULE_3__Enums_Locations__[key];

          if (!part.includes(filterKey + '-') || !Object(__WEBPACK_IMPORTED_MODULE_1__utils__["l" /* has */])(FILTERS_OPTIONS, __WEBPACK_IMPORTED_MODULE_3__Enums_Locations__[key])) continue;

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
      var params = {};
      var filter = [];
      var query = this._.cloneDeep(q);

      for (var key in __WEBPACK_IMPORTED_MODULE_3__Enums_Locations__) {
        if (!Object(__WEBPACK_IMPORTED_MODULE_1__utils__["l" /* has */])(FILTERS_OPTIONS, __WEBPACK_IMPORTED_MODULE_3__Enums_Locations__[key])) continue;

        var options = FILTERS_OPTIONS[__WEBPACK_IMPORTED_MODULE_3__Enums_Locations__[key]];

        var _ref5 = Object(__WEBPACK_IMPORTED_MODULE_1__utils__["l" /* has */])(options, 'inQuery') ? options.inQuery(this, query) : this.seoFilterInQuery(options, query),
            param = _ref5.param,
            newQuery = _ref5.query;

        query = newQuery;

        if (param) {
          filter.push(__WEBPACK_IMPORTED_MODULE_3__Enums_Locations__[key] + '-' + param);
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

      return { query: q, params: {} };
    }
  }
});

/***/ }),

/***/ 1639:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mint_ui__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mint_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_mint_ui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vuex_map_fields__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modules_Board_Location_Enums_LocationEquip__ = __webpack_require__(1532);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modules_Geo_mixins_AjaxSelectCity__ = __webpack_require__(1505);
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  mixins: [__WEBPACK_IMPORTED_MODULE_4__modules_Geo_mixins_AjaxSelectCity__["a" /* default */]],
  props: {
    value: {
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    return {};
  },

  watch: {
    value: function value(val) {
      val ? window.nsWebViewInterface.emit('swipe2Back', true) : window.nsWebViewInterface.emit('swipe2Back', false);
      this.$root.$emit('open-modal-fullscreen', val);
    }
  },
  computed: _extends({}, mapFields({
    fields: 'locations.filter',
    defaultFields: 'locations.defaultFilter'
  }), Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["c" /* mapGetters */])({
    profile: 'auth/getProfile',
    isAuthorized: 'auth/isAuthorized',
    sources: 'board/location/getSources'
  }), {
    showReset: function showReset() {
      var fields = this._.omit(this.fields, ['name']);
      var defaultFields = this._.omit(this.defaultFields, ['name']);

      return this._.isEqual(fields, defaultFields) === false;
    },
    currencies: function currencies() {
      return this.sources['currencies'].map(function (curr) {
        return { id: curr.id, text: curr.symbol };
      });
    },
    equipmentAndFacilities: function equipmentAndFacilities() {
      return [{ id: __WEBPACK_IMPORTED_MODULE_3__modules_Board_Location_Enums_LocationEquip__["EQUIPMENT_RENTAL"], text: this.$t('dictionary.equipment-services.' + __WEBPACK_IMPORTED_MODULE_3__modules_Board_Location_Enums_LocationEquip__["EQUIPMENT_RENTAL"], 'web_ru') }, { id: __WEBPACK_IMPORTED_MODULE_3__modules_Board_Location_Enums_LocationEquip__["PARKING"], text: this.$t('dictionary.equipment-services.' + __WEBPACK_IMPORTED_MODULE_3__modules_Board_Location_Enums_LocationEquip__["PARKING"], 'web_ru') }, { id: __WEBPACK_IMPORTED_MODULE_3__modules_Board_Location_Enums_LocationEquip__["INTERIOR"], text: this.$t('dictionary.equipment-services.' + __WEBPACK_IMPORTED_MODULE_3__modules_Board_Location_Enums_LocationEquip__["INTERIOR"], 'web_ru') }, { id: __WEBPACK_IMPORTED_MODULE_3__modules_Board_Location_Enums_LocationEquip__["EXTERIOR"], text: this.$t('dictionary.equipment-services.' + __WEBPACK_IMPORTED_MODULE_3__modules_Board_Location_Enums_LocationEquip__["EXTERIOR"], 'web_ru') }, { id: __WEBPACK_IMPORTED_MODULE_3__modules_Board_Location_Enums_LocationEquip__["DRESSING_ROOM"], text: this.$t('dictionary.equipment-services.' + __WEBPACK_IMPORTED_MODULE_3__modules_Board_Location_Enums_LocationEquip__["DRESSING_ROOM"], 'web_ru') }, { id: __WEBPACK_IMPORTED_MODULE_3__modules_Board_Location_Enums_LocationEquip__["SCENE"], text: this.$t('dictionary.equipment-services.' + __WEBPACK_IMPORTED_MODULE_3__modules_Board_Location_Enums_LocationEquip__["SCENE"], 'web_ru') }, { id: __WEBPACK_IMPORTED_MODULE_3__modules_Board_Location_Enums_LocationEquip__["CHROMAKEY"], text: this.$t('dictionary.equipment-services.' + __WEBPACK_IMPORTED_MODULE_3__modules_Board_Location_Enums_LocationEquip__["CHROMAKEY"], 'web_ru') }, { id: __WEBPACK_IMPORTED_MODULE_3__modules_Board_Location_Enums_LocationEquip__["CYCLORAMA"], text: this.$t('dictionary.equipment-services.' + __WEBPACK_IMPORTED_MODULE_3__modules_Board_Location_Enums_LocationEquip__["CYCLORAMA"], 'web_ru') }, { id: __WEBPACK_IMPORTED_MODULE_3__modules_Board_Location_Enums_LocationEquip__["DAYLIGHT"], text: this.$t('dictionary.equipment-services.' + __WEBPACK_IMPORTED_MODULE_3__modules_Board_Location_Enums_LocationEquip__["DAYLIGHT"], 'web_ru') }];
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
          var _profile = _this5.profile,
              age = _profile.age,
              sex = _profile.sex;

          Object.assign(_this5.fields, {
            ageTo: age ? age + 1 : '',
            genderIds: sex ? [sex] : [],
            ageFrom: age ? age - 1 : ''
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

/***/ 1979:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1980);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("76740edb", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js?sourceMap!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-2b9cfbae\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Index.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js?sourceMap!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-2b9cfbae\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Index.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1980:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(true);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"Index.vue","sourceRoot":""}]);

// exports


/***/ }),

/***/ 1981:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TYPE", function() { return TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SERVICE", function() { return SERVICE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CATEGORY", function() { return CATEGORY; });
var TYPE = 'type';
var SERVICE = 'service';
var CATEGORY = 'cat';

/***/ }),

/***/ 1982:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Filter_vue__ = __webpack_require__(1639);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_727ead2e_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Filter_vue__ = __webpack_require__(1985);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1983)
}
var normalizeComponent = __webpack_require__(2)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-727ead2e"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Filter_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_727ead2e_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Filter_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/Board/Location/Filter.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-727ead2e", Component.options)
  } else {
    hotAPI.reload("data-v-727ead2e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 1983:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1984);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("1ef15b59", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js?sourceMap!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-727ead2e\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Filter.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js?sourceMap!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-727ead2e\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Filter.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1984:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(true);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"Filter.vue","sourceRoot":""}]);

// exports


/***/ }),

/***/ 1985:
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
                _vm._v(_vm._s(_vm.$t("location.location-filter.filters")))
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
                      staticClass: "label input__label",
                      attrs: { for: "form__select_declaration_types" }
                    },
                    [
                      _vm._v(
                        "\n            " +
                          _vm._s(
                            _vm.$t("location.location-filter.location-type")
                          ) +
                          "\n          "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c("lm-select", {
                    class: [
                      "lm-m-filter-line",
                      { filled: _vm.fields.types.length }
                    ],
                    attrs: {
                      "input-required": false,
                      "input-id": "form__select_declaration_types",
                      "input-name": "types",
                      "data-vv-name": "types",
                      "data-vv-as": _vm.$t(
                        "location.location-filter.location-type"
                      ),
                      placeholder: _vm.$t("location.location-filter.all"),
                      label: "",
                      multiple: true,
                      options: _vm.sources["types"]
                    },
                    model: {
                      value: _vm.fields.types,
                      callback: function($$v) {
                        _vm.$set(_vm.fields, "types", $$v)
                      },
                      expression: "fields.types"
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
                      attrs: { for: "form__select_declaration_roomTypes" }
                    },
                    [
                      _vm._v(
                        "\n            " +
                          _vm._s(_vm.$t("location.location-filter.room-type")) +
                          "\n          "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c("lm-select", {
                    class: [
                      "lm-m-filter-line",
                      { filled: _vm.fields.roomTypes.length }
                    ],
                    attrs: {
                      "input-required": false,
                      "input-id": "form__select_declaration_roomTypes",
                      "input-name": "roomTypes",
                      "data-vv-name": "roomTypes",
                      "data-vv-as": _vm.$t(
                        "location.location-filter.room-type"
                      ),
                      placeholder: _vm.$t("location.location-filter.all-rooms"),
                      label: "",
                      multiple: true,
                      options: _vm.sources["roomTypes"]
                    },
                    model: {
                      value: _vm.fields.roomTypes,
                      callback: function($$v) {
                        _vm.$set(_vm.fields, "roomTypes", $$v)
                      },
                      expression: "fields.roomTypes"
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
                      attrs: {
                        for: "form__select_declaration_equipmentAndFacilities"
                      }
                    },
                    [
                      _vm._v(
                        "\n            " +
                          _vm._s(
                            _vm.$t(
                              "location.location-filter.services-and-equipment"
                            )
                          ) +
                          "\n          "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c("lm-select", {
                    class: [
                      "lm-m-filter-line",
                      { filled: _vm.fields.equipmentAndFacilities.length }
                    ],
                    attrs: {
                      "input-required": false,
                      "input-id":
                        "form__select_declaration_equipmentAndFacilities",
                      "input-name": "equipmentAndFacilities",
                      "data-vv-name": "equipmentAndFacilities",
                      "data-vv-as": _vm.$t(
                        "location.location-filter.services-and-equipment"
                      ),
                      placeholder: _vm.$t(
                        "location.location-filter.all-services"
                      ),
                      label: "",
                      multiple: true,
                      options: _vm.equipmentAndFacilities
                    },
                    model: {
                      value: _vm.fields.equipmentAndFacilities,
                      callback: function($$v) {
                        _vm.$set(_vm.fields, "equipmentAndFacilities", $$v)
                      },
                      expression: "fields.equipmentAndFacilities"
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
              _c("div", { staticClass: "row row_justify_between" }, [
                _c("div", { staticClass: "column mr_4" }, [
                  _c("div", { staticClass: "input" }, [
                    _c(
                      "label",
                      {
                        staticClass: "input__label",
                        attrs: { for: "roomHeightMin" }
                      },
                      [
                        _vm._v(
                          _vm._s(_vm.$t("location.location-filter.room-height"))
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "mask-decimal",
                          rawName: "v-mask-decimal",
                          value: { digits: 2 },
                          expression: "{ digits: 2 }"
                        },
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.fields.roomHeightMin,
                          expression: "fields.roomHeightMin"
                        },
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "decimal:2|min_value:1|max_value:9999",
                          expression: "'decimal:2|min_value:1|max_value:9999'"
                        }
                      ],
                      ref: "roomHeightMin",
                      class: [
                        {
                          error: _vm.verrors.has("roomHeightMin"),
                          filled:
                            _vm.fields.roomHeightMin &&
                            !_vm.verrors.has("roomHeightMin")
                        },
                        "input__field",
                        "input__field_filters"
                      ],
                      attrs: {
                        type: "number",
                        placeholder: _vm.$t("location.location-filter.from"),
                        inputmode: "numeric",
                        pattern: "[0-9]*",
                        id: "roomHeightMin",
                        name: "roomHeightMin",
                        "data-vv-name": "roomHeightMin",
                        "data-vv-as": _vm.$t("location.location-filter.from"),
                        min: "1",
                        max: "9999"
                      },
                      domProps: { value: _vm.fields.roomHeightMin },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.fields,
                            "roomHeightMin",
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
                      {
                        staticClass: "input__label",
                        attrs: { for: "roomHeightMax" }
                      },
                      [_vm._v(" ")]
                    ),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "mask-decimal",
                          rawName: "v-mask-decimal",
                          value: { digits: 2 },
                          expression: "{ digits: 2 }"
                        },
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.fields.roomHeightMax,
                          expression: "fields.roomHeightMax"
                        },
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value:
                            "decimal:2|min_value:1|max_value:9999|minTarget:roomHeightMin",
                          expression:
                            "'decimal:2|min_value:1|max_value:9999|minTarget:roomHeightMin'"
                        }
                      ],
                      ref: "roomHeightMax",
                      class: [
                        {
                          error: _vm.verrors.has("roomHeightMax"),
                          filled:
                            _vm.fields.roomHeightMax &&
                            !_vm.verrors.has("roomHeightMax")
                        },
                        "input__field",
                        "input__field_filters"
                      ],
                      attrs: {
                        type: "number",
                        placeholder: _vm.$t("location.location-filter.to"),
                        inputmode: "numeric",
                        pattern: "[0-9]*",
                        id: "roomHeightMax",
                        name: "roomHeightMax",
                        "data-vv-name": "roomHeightMax",
                        "data-vv-as": _vm.$t("location.location-filter.to"),
                        min: "1",
                        max: "150"
                      },
                      domProps: { value: _vm.fields.roomHeightMax },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.fields,
                            "roomHeightMax",
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
            _c("div", { staticClass: "form__group form__group_declaration" }, [
              _c("div", { staticClass: "row row_justify_between" }, [
                _c("div", { staticClass: "column mr_4" }, [
                  _c("div", { staticClass: "input" }, [
                    _c(
                      "label",
                      {
                        staticClass: "input__label",
                        attrs: { for: "dimensionMin" }
                      },
                      [_vm._v(_vm._s(_vm.$t("location.location-filter.size")))]
                    ),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "mask-decimal",
                          rawName: "v-mask-decimal",
                          value: { digits: 2 },
                          expression: "{ digits: 2 }"
                        },
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.fields.dimensionMin,
                          expression: "fields.dimensionMin"
                        },
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "decimal:2|min_value:1|max_value:9999",
                          expression: "'decimal:2|min_value:1|max_value:9999'"
                        }
                      ],
                      ref: "dimensionMin",
                      class: [
                        {
                          error: _vm.verrors.has("dimensionMin"),
                          filled:
                            _vm.fields.dimensionMin &&
                            !_vm.verrors.has("dimensionMin")
                        },
                        "input__field",
                        "input__field_filters"
                      ],
                      attrs: {
                        type: "number",
                        placeholder: "От",
                        inputmode: "numeric",
                        pattern: "[0-9]*",
                        id: "dimensionMin",
                        name: "dimensionMin",
                        "data-vv-name": "dimensionMin",
                        "data-vv-as": _vm.$t("location.location-filter.from"),
                        min: "1",
                        max: "9999"
                      },
                      domProps: { value: _vm.fields.dimensionMin },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.fields,
                            "dimensionMin",
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
                      {
                        staticClass: "input__label",
                        attrs: { for: "dimensionMax" }
                      },
                      [_vm._v(" ")]
                    ),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "mask-decimal",
                          rawName: "v-mask-decimal",
                          value: { digits: 2 },
                          expression: "{ digits: 2 }"
                        },
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.fields.dimensionMax,
                          expression: "fields.dimensionMax"
                        },
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value:
                            "decimal:2|min_value:1|max_value:9999|minTarget:dimensionMin",
                          expression:
                            "'decimal:2|min_value:1|max_value:9999|minTarget:dimensionMin'"
                        }
                      ],
                      ref: "dimensionMax",
                      class: [
                        {
                          error: _vm.verrors.has("dimensionMax"),
                          filled:
                            _vm.fields.dimensionMax &&
                            !_vm.verrors.has("dimensionMax")
                        },
                        "input__field",
                        "input__field_filters"
                      ],
                      attrs: {
                        type: "number",
                        placeholder: "До",
                        inputmode: "numeric",
                        pattern: "[0-9]*",
                        id: "dimensionMax",
                        name: "dimensionMax",
                        "data-vv-name": "dimensionMax",
                        "data-vv-as": _vm.$t("location.location-filter.to"),
                        min: "1",
                        max: "9999"
                      },
                      domProps: { value: _vm.fields.dimensionMax },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.fields,
                            "dimensionMax",
                            $event.target.value
                          )
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
                      { staticClass: "input__label", attrs: { for: "price" } },
                      [_vm._v(_vm._s(_vm.$t("location.location-filter.price")))]
                    ),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        { name: "mask-numeric", rawName: "v-mask-numeric" },
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.fields.price,
                          expression: "fields.price"
                        },
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "numeric|min_value:1|max_value:9999999",
                          expression: "'numeric|min_value:1|max_value:9999999'"
                        }
                      ],
                      ref: "price",
                      class: [
                        {
                          error: _vm.verrors.has("price"),
                          filled: _vm.fields.price && !_vm.verrors.has("price")
                        },
                        "input__field",
                        "input__field_filters"
                      ],
                      attrs: {
                        type: "number",
                        placeholder: _vm.$t(
                          "location.location-filter.enter-amount"
                        ),
                        inputmode: "numeric",
                        pattern: "[0-9]*",
                        id: "price",
                        name: "price",
                        "data-vv-name": "price",
                        "data-vv-as": _vm.$t("location.location-filter.price"),
                        min: "1",
                        max: "9999999"
                      },
                      domProps: { value: _vm.fields.price },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.fields, "price", $event.target.value)
                        }
                      }
                    })
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "column w_auto min-w_72px" }, [
                  _c(
                    "div",
                    [
                      _c(
                        "label",
                        {
                          staticClass: "input__label",
                          attrs: { for: "form__select_declaration_currencyId" }
                        },
                        [
                          _vm._v(
                            "\n                  " +
                              _vm._s(
                                _vm.$t("location.location-filter.currency")
                              ) +
                              "\n                "
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c("lm-select", {
                        class: [
                          "lm-m-filter-line",
                          { filled: _vm.fields.currencyId }
                        ],
                        attrs: {
                          "input-required": false,
                          "input-id": "form__select_declaration_currencyId",
                          "input-name": "currencyId",
                          "data-vv-name": "currencyId",
                          "data-vv-as": _vm.$t(
                            "location.location-filter.currency"
                          ),
                          placeholder: _vm.$t(
                            "location.location-filter.not-cho"
                          ),
                          label: "",
                          multiple: false,
                          options: _vm.currencies
                        },
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
                    staticClass: "label input__label",
                    attrs: { for: "form__select_declaration_paymentPeriod" }
                  },
                  [
                    _vm._v(
                      "\n            " +
                        _vm._s(
                          _vm.$t("location.location-filter.payment-period")
                        ) +
                        "\n          "
                    )
                  ]
                ),
                _vm._v(" "),
                _c("lm-select", {
                  class: [
                    "lm-m-filter-line",
                    { filled: _vm.fields.paymentPeriod }
                  ],
                  attrs: {
                    "input-required": false,
                    "input-id": "form__select_declaration_paymentPeriod",
                    "input-name": "paymentPeriod",
                    "data-vv-name": "paymentPeriod",
                    "data-vv-as": _vm.$t(
                      "location.location-filter.payment-period"
                    ),
                    placeholder: _vm.$t("location.location-filter.not-chosen"),
                    label: "",
                    multiple: false,
                    options: _vm.sources["paymentPeriods"]
                  },
                  model: {
                    value: _vm.fields.paymentPeriod,
                    callback: function($$v) {
                      _vm.$set(_vm.fields, "paymentPeriod", $$v)
                    },
                    expression: "fields.paymentPeriod"
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
                    staticClass: "label input__label",
                    attrs: { for: "form__select_declaration_country" }
                  },
                  [
                    _vm._v(
                      "\n            " +
                        _vm._s(_vm.$t("location.location-filter.country")) +
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
                    "data-vv-as": _vm.$t("location.location-filter.country"),
                    placeholder: _vm.$t(
                      "location.location-filter.all-countries"
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
                    staticClass: "label input__label",
                    attrs: { for: "form__select_declaration_city" }
                  },
                  [
                    _vm._v(
                      "\n            " +
                        _vm._s(_vm.$t("location.location-filter.city")) +
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
                    "data-vv-as": _vm.$t("location.location-filter.city"),
                    placeholder: _vm.$t("location.location-filter.all-cities"),
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
                [_vm._v(_vm._s(_vm.$t("location.location-filter.back")))]
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
                [_vm._v(_vm._s(_vm.$t("location.location-filter.apply")))]
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
    require("vue-hot-reload-api")      .rerender("data-v-727ead2e", esExports)
  }
}

/***/ }),

/***/ 1986:
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
          attrs: { "top-method": _vm._handleLoadTopLocations },
          on: { "top-status-change": _vm._handleTopStatusChangeLocations }
        },
        [
          _c("div", { staticClass: "page__header page__header_feed" }, [
            _c("div", { staticClass: "row justify_between mb_4" }, [
              _c("div", { staticClass: "heading_h4" }, [
                _vm._v(_vm._s(_vm.$t("location.location.ads")))
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
                  _vm._l(_vm.locations, function(location) {
                    return _c("location-card", {
                      key: location.id,
                      attrs: { location: location },
                      on: {
                        actionSheet: _vm._handleActionSheetLocation,
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
                        [
                          _vm._v(
                            _vm._s(
                              _vm.$t("location.nothing-found.nothing-found")
                            )
                          )
                        ]
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
                      _vm._s(_vm.$t("location.location.filters")) +
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
    require("vue-hot-reload-api")      .rerender("data-v-2b9cfbae", esExports)
  }
}

/***/ })

});
//# sourceMappingURL=69.build.7b4c03c2abb2fb294164.js.map