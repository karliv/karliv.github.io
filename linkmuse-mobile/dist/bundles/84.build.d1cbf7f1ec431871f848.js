webpackJsonp([84],{

/***/ 1278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_User_vue__ = __webpack_require__(1624);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3fc0fff4_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_User_vue__ = __webpack_require__(1946);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1936)
}
var normalizeComponent = __webpack_require__(2)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-3fc0fff4"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_User_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3fc0fff4_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_User_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/views/Board/Castings/Responses/User.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3fc0fff4", Component.options)
  } else {
    hotAPI.reload("data-v-3fc0fff4", Component.options)
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

/***/ 1513:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RECEIVED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SELECTED; });
var RECEIVED = 'received';
var SELECTED = 'selected';

/***/ }),

/***/ 1624:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mint_ui__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mint_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_mint_ui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vuex_map_fields__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Board_Casting_Response_Filter_vue__ = __webpack_require__(1938);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_Board_Casting_Response_Response_vue__ = __webpack_require__(1942);
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







var _createHelpers = Object(__WEBPACK_IMPORTED_MODULE_3_vuex_map_fields__["a" /* createHelpers */])({
  getterType: 'board/casting/response/getField',
  mutationType: 'board/casting/response/updateField'
}),
    mapFields = _createHelpers.mapFields;




/* harmony default export */ __webpack_exports__["a"] = ({
  components: { 'mt-loadmore': __WEBPACK_IMPORTED_MODULE_2_mint_ui__["Loadmore"], CastingFilter: __WEBPACK_IMPORTED_MODULE_4__components_Board_Casting_Response_Filter_vue__["a" /* default */], ResponseCard: __WEBPACK_IMPORTED_MODULE_5__components_Board_Casting_Response_Response_vue__["a" /* default */] },
  metaInfo: function metaInfo() {
    return {
      title: '' + (this.isCurrentUser ? 'Мои отклики: кастинги' : 'Отклики: кастинги')
    };
  },
  data: function data() {
    return {
      height: 0,
      openFilter: false,
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
              fields = store.state.board.casting.response.responses.userFilter;
              _context.next = 4;
              return store.dispatch('user/getUserByUsername', { username: String(route.params.username) });

            case 4:
              _context.next = 6;
              return store.dispatch('board/casting/response/fetchUserResponses', {
                fields: fields,
                username: username,
                offset: 0
              });

            case 6:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this);
    }))();
  },

  computed: _extends({}, mapFields({
    fields: 'responses.userFilter',
    defaultFields: 'responses.defaultUserFilter'
  }), Object(__WEBPACK_IMPORTED_MODULE_1_vuex__["c" /* mapGetters */])({
    role: 'auth/getRole',
    authUser: 'auth/getAuthUser',
    user: 'user/getShowUserData',
    isAuthorized: 'auth/isAuthorized',
    total: 'board/casting/response/getResponsesTotal',
    error: 'board/casting/response/getResponsesError',
    offset: 'board/casting/response/getResponsesOffset',
    responses: 'board/casting/response/getResponsesData',
    loading: 'board/casting/response/getResponsesLoading',
    infiniteDisabled: 'board/casting/response/getResponsesInfiniteDisabled'
  }), {
    username: function username() {
      var username = this.$route.params.username;

      return username;
    },
    isCurrentUser: function isCurrentUser() {
      var username = this.$route.params.username;

      return this.authUser.username === String(username);
    },
    isEmpty: function isEmpty() {
      return this.loading === false && this.total === 0;
    }
  }),
  mounted: function mounted() {
    this.height = document.documentElement.clientHeight - this.$refs.wrapper.getBoundingClientRect().top + 'px';
  },

  methods: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_1_vuex__["b" /* mapActions */])({
    clearResponses: 'board/casting/response/clearResponses',
    fetchResponses: 'board/casting/response/fetchUserResponses'
  }), {
    _handleLoadTopResponses: function _handleLoadTopResponses() {
      var _this2 = this;

      var username = this.username,
          fields = this.fields;

      this.fetchResponses({ username: username, fields: fields, offset: 0 }).then(function () {
        _this2.$refs.loadmore.onTopLoaded();
      }).catch(function () {
        return console.log('Error loading');
      });
    },
    _handleTopStatusChangeResponses: function _handleTopStatusChangeResponses(status) {
      this.loadmore.topStatus = status;
    },
    _handleInfiniteScroll: function _handleInfiniteScroll() {
      var offset = this.offset,
          username = this.username,
          fields = this.fields;

      this.fetchResponses({ username: username, fields: fields, offset: offset });
    },
    _handleApplyFilter: function _handleApplyFilter() {
      var _this3 = this;

      this.clearResponses().then(function () {
        _this3._toggleFilter();
        var username = _this3.username,
            fields = _this3.fields;

        _this3.fetchResponses({ username: username, fields: fields, offset: 0 });
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
    }
  })
});

/***/ }),

/***/ 1625:
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
//





var _createHelpers = Object(__WEBPACK_IMPORTED_MODULE_2_vuex_map_fields__["a" /* createHelpers */])({
  getterType: 'board/casting/response/getField',
  mutationType: 'board/casting/response/updateField'
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
    }
  },
  computed: _extends({}, mapFields({
    fields: 'responses.userFilter',
    defaultFields: 'responses.defaultUserFilter'
  }), Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["c" /* mapGetters */])({
    profile: 'auth/getProfile',
    isAuthorized: 'auth/isAuthorized',
    sources: 'board/casting/getSources'
  }), {
    showReset: function showReset() {
      var fields = this._.omit(this.fields, ['name']);
      var defaultFields = this._.omit(this.defaultFields, ['name']);

      return this._.isEqual(fields, defaultFields) === false;
    },
    sourcesViewedResponse: function sourcesViewedResponse() {
      return [{ id: 1, text: 'Просмотрен' }, { id: 0, text: 'Не просмотрен' }];
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
        } else _this2.fields[k] = null;
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

/***/ 1626:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modules_Board_Casting__ = __webpack_require__(1511);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modules_Board_Casting_Response_Enums_ResponseState__ = __webpack_require__(1513);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    response: {
      type: Object,
      required: true
    }
  },
  data: function data() {
    return {
      has: __WEBPACK_IMPORTED_MODULE_0__utils__["l" /* has */]
    };
  },

  computed: {
    casting: function casting() {
      return this.response.casting;
    },
    id: function id() {
      return this.casting.id;
    },
    slug: function slug() {
      return this.casting.slug;
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
      return __WEBPACK_IMPORTED_MODULE_1__modules_Board_Casting__["a" /* default */].getAmountSemanticCatalog(this.casting.fee);
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
    createdAt: function createdAt() {
      return this.response.createdAt;
    },
    read: function read() {
      return this.response.read;
    },
    isReceived: function isReceived() {
      return this.response.state === __WEBPACK_IMPORTED_MODULE_2__modules_Board_Casting_Response_Enums_ResponseState__["a" /* RECEIVED */];
    },
    isSelected: function isSelected() {
      return this.response.state === __WEBPACK_IMPORTED_MODULE_2__modules_Board_Casting_Response_Enums_ResponseState__["b" /* SELECTED */];
    }
  }
});

/***/ }),

/***/ 1936:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1937);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("59b899ff", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-3fc0fff4\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./User.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-3fc0fff4\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./User.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1937:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(true);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"User.vue","sourceRoot":""}]);

// exports


/***/ }),

/***/ 1938:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Filter_vue__ = __webpack_require__(1625);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_1ebf4b1e_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Filter_vue__ = __webpack_require__(1941);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1939)
}
var normalizeComponent = __webpack_require__(2)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-1ebf4b1e"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Filter_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_1ebf4b1e_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Filter_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/Board/Casting/Response/Filter.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1ebf4b1e", Component.options)
  } else {
    hotAPI.reload("data-v-1ebf4b1e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 1939:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1940);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("52ae352d", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1ebf4b1e\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Filter.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1ebf4b1e\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Filter.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1940:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(true);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"Filter.vue","sourceRoot":""}]);

// exports


/***/ }),

/***/ 1941:
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
                _vm._v(
                  _vm._s(_vm.$t("applications-page.viewed-responses.options"))
                )
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
                      [
                        _vm._v(
                          _vm._s(
                            _vm.$t("applications-page.viewed-responses.reset")
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
                    attrs: { for: "form__select_declaration_read" }
                  },
                  [
                    _vm._v(
                      "\n            " +
                        _vm._s(
                          _vm.$t(
                            "applications-page.viewed-responses.response-status"
                          )
                        ) +
                        "\n          "
                    )
                  ]
                ),
                _vm._v(" "),
                _c("lm-select", {
                  class: ["lm-m-filter-line", { filled: _vm.fields.read }],
                  attrs: {
                    "input-required": false,
                    "input-id": "form__select_declaration_read",
                    "input-name": "read",
                    "data-vv-name": "read",
                    "data-vv-as": "Статус",
                    placeholder: _vm.$t(
                      "applications-page.all-statuses.all-statuses"
                    ),
                    placeholderDisabled: true,
                    label: "",
                    multiple: false,
                    options: _vm.sourcesViewedResponse
                  },
                  model: {
                    value: _vm.fields.read,
                    callback: function($$v) {
                      _vm.$set(_vm.fields, "read", $$v)
                    },
                    expression: "fields.read"
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
                [
                  _vm._v(
                    _vm._s(_vm.$t("applications-page.viewed-responses.back"))
                  )
                ]
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
                [
                  _vm._v(
                    _vm._s(_vm.$t("applications-page.viewed-responses.set"))
                  )
                ]
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
    require("vue-hot-reload-api")      .rerender("data-v-1ebf4b1e", esExports)
  }
}

/***/ }),

/***/ 1942:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Response_vue__ = __webpack_require__(1626);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5f86827a_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Response_vue__ = __webpack_require__(1945);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1943)
}
var normalizeComponent = __webpack_require__(2)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-5f86827a"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Response_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5f86827a_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Response_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/Board/Casting/Response/Response.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5f86827a", Component.options)
  } else {
    hotAPI.reload("data-v-5f86827a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 1943:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1944);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("88dd3718", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-5f86827a\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Response.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-5f86827a\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Response.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1944:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(true);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"Response.vue","sourceRoot":""}]);

// exports


/***/ }),

/***/ 1945:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "card card_response_my" },
    [
      _c("div", { staticClass: "section card__section_response" }, [
        _c("div", { staticClass: "row row_justify_between row_align_center" }, [
          _c(
            "div",
            {
              class: [
                "response__status",
                {
                  color_main: _vm.read,
                  "response__status_not-viewed": _vm.read === false
                }
              ]
            },
            [
              _vm._v(
                "\n        " +
                  _vm._s(
                    _vm.read
                      ? _vm.$t("applications-page.viewed.viewed")
                      : _vm.$t(
                          "applications-page.my-applications-page.not-viewed"
                        )
                  ) +
                  "\n      "
              )
            ]
          )
        ])
      ]),
      _vm._v(" "),
      _c(
        "router-link",
        {
          staticClass: "section card__section_response",
          attrs: {
            to: {
              name: "board.castings.show",
              params: { slug: _vm.slug, id: _vm.id }
            }
          }
        },
        [
          _c("div", { staticClass: "heading_h5 declaration__heading" }, [
            _vm._v(_vm._s(_vm._f("truncate")(_vm.casting.name, 50)))
          ]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "response__list response__list_parameters" },
            [
              _vm.professions && _vm.professions.length
                ? [
                    _c(
                      "div",
                      [
                        _vm._v(
                          _vm._s(_vm.professions.slice(0, 2).join(", ")) + " "
                        ),
                        _vm.professions.length > 2 ? [_vm._v("...")] : _vm._e()
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
                        _vm._s(_vm._f("truncate")(_vm.genders.join(", "), 15))
                      )
                    ])
                  ]
                : _vm._e(),
              _vm._v(" "),
              _vm.ages ? [_c("div", [_vm._v(_vm._s(_vm.ages))])] : _vm._e()
            ],
            2
          ),
          _vm._v(" "),
          _c("div", { staticClass: "response__date color_gray-3" }, [
            _vm._v(_vm._s(_vm._f("moment")(_vm.createdAt, "DD MMM YYYY")))
          ])
        ]
      )
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
    require("vue-hot-reload-api")      .rerender("data-v-5f86827a", esExports)
  }
}

/***/ }),

/***/ 1946:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "page page_feed page_my-responses" },
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
        _c("div", { staticClass: "row row_justify_between" }, [
          _c("div", { staticClass: "heading_h4" }, [
            _vm._v(
              _vm._s(
                _vm.isCurrentUser
                  ? _vm.$t("applications-page.viewed.my-responses")
                  : _vm.$t(
                      "applications-page.my-applications-page.applications"
                    )
              )
            )
          ])
        ])
      ]),
      _vm._v(" "),
      _c(
        "div",
        { ref: "wrapper", class: ["page__content", { empty: _vm.isEmpty }] },
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
                    ])
                  ]
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
                    attrs: { "top-method": _vm._handleLoadTopResponses },
                    on: {
                      "top-status-change": _vm._handleTopStatusChangeResponses
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
                        _vm._l(_vm.responses, function(response) {
                          return _c("response-card", {
                            key: response.id,
                            attrs: { response: response }
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
      })
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
    require("vue-hot-reload-api")      .rerender("data-v-3fc0fff4", esExports)
  }
}

/***/ })

});
//# sourceMappingURL=84.build.d1cbf7f1ec431871f848.js.map