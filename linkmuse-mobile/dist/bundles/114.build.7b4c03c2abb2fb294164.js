webpackJsonp([114],{

/***/ 1423:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Partners_vue__ = __webpack_require__(1832);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_e80dd976_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Partners_vue__ = __webpack_require__(2563);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(2559)
}
var normalizeComponent = __webpack_require__(2)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-e80dd976"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Partners_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_e80dd976_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Partners_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/views/User/Partners.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-e80dd976", Component.options)
  } else {
    hotAPI.reload("data-v-e80dd976", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 1832:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mint_ui__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mint_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_mint_ui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vuex__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_User_PartnerCard_vue__ = __webpack_require__(2561);
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








/* harmony default export */ __webpack_exports__["a"] = ({
  components: { 'mt-loadmore': __WEBPACK_IMPORTED_MODULE_1_mint_ui__["Loadmore"], UserCard: __WEBPACK_IMPORTED_MODULE_4__components_User_PartnerCard_vue__["a" /* default */] },
  metaInfo: function metaInfo() {
    return {
      title: 'Коллеги'
    };
  },
  asyncData: function asyncData(_ref) {
    var _this = this;

    var store = _ref.store,
        route = _ref.route;
    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var username;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              username = route.params.username;
              _context.next = 3;
              return store.dispatch('user/getUserByUsername', { username: username });

            case 3:
              _context.next = 5;
              return store.dispatch('user/getUserPartnersByUsername', {
                username: username,
                offset: 0
              });

            case 5:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this);
    }))();
  },
  data: function data() {
    return {
      height: 0,
      actionSheet: {
        actions: [],
        value: false,
        user: { id: null }
      },
      modal: {
        value: false,
        loading: false
      },
      searchFocused: false,
      fields: { query: null },
      loadmore: { topStatus: null }
    };
  },

  computed: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_2_vuex__["c" /* mapGetters */])({
    authUser: 'auth/getAuthUser',
    user: 'user/getShowUserData',
    users: 'user/getPartners',
    count: 'user/getCountPartners',
    error: 'user/getPartnersError',
    offset: 'user/getOffsetPartners',
    loading: 'user/getPartnersLoading',
    infiniteDisabled: 'user/getPartnersInfiniteDisabled'
  }), {
    isEmpty: function isEmpty() {
      return !this.loading && this.count === 0;
    },
    isCurrentUser: function isCurrentUser() {
      var username = this.$route.params.username;

      return this.authUser && Object(__WEBPACK_IMPORTED_MODULE_3__utils__["l" /* has */])(this.authUser, 'username') && this.authUser.username === String(username);
    },
    username: function username() {
      var username = this.$route.params.username;

      return username;
    },
    counters: function counters() {
      return this.user.counters;
    }
  }),
  beforeDestroy: function beforeDestroy() {
    this.modal.value = false;
  },
  created: function created() {
    this.modal.value = true;
  },
  mounted: function mounted() {
    this.height = document.documentElement.clientHeight - this.$refs.wrapper.getBoundingClientRect().top - 108 + 'px';
  },

  methods: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_2_vuex__["b" /* mapActions */])({
    _addPartner: 'user/createPartner',
    _destroyPartnerById: 'user/destroyPartnerById',
    _clearPartners: 'user/clearPartners',
    _fetchPartners: 'user/getUserPartnersByUsername'
  }), {
    _handleInputPopup: function _handleInputPopup(value) {
      if (value === false) {
        this._handleClearModal();
      }
    },
    _handleClearModal: function _handleClearModal() {
      this.modal = {
        value: false,
        loading: false
      };
    },

    _handleInputFieldSearchUsers: __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.debounce(function (e) {
      var _this2 = this;

      var el = e.target;
      var key = Object(__WEBPACK_IMPORTED_MODULE_3__utils__["j" /* getDataAttribute */])(el, 'key');

      this.$validator.validate(key).then(function (result) {
        if (result) {
          _this2._handleApplyFilter(false);
        }
      });
    }, 900),
    _handleFocusFieldSearchUsers: function _handleFocusFieldSearchUsers() {
      this.searchFocused = true;
    },
    _handleBlurFieldSearchUsers: function _handleBlurFieldSearchUsers() {
      this.searchFocused = false;
    },
    _handleClickCloseSearching: function _handleClickCloseSearching() {
      var _this3 = this;

      this.fields.query = null;

      this.$nextTick(function () {
        _this3._handleApplyFilter();
      });
    },
    _handleInfiniteScroll: function _handleInfiniteScroll() {
      var username = this.username,
          fields = this.fields,
          offset = this.offset;

      this._fetchPartners({ username: username, fields: fields, offset: offset });
    },
    _handleApplyFilter: function _handleApplyFilter() {
      var _this4 = this;

      this._clearPartners().then(function () {
        var username = _this4.username,
            fields = _this4.fields;

        _this4._fetchPartners({ username: username, fields: fields, offset: 0 }).then(function () {
          _this4.$refs.loadmore.onTopLoaded();
        }).catch(function () {
          return console.log('Error loading');
        });
      }).catch(function () {});
    },
    _handleLoadTopUsers: function _handleLoadTopUsers() {
      var _this5 = this;

      var username = this.username,
          fields = this.fields;

      this._fetchPartners({ username: username, fields: fields, offset: 0 }).then(function () {
        _this5.$refs.loadmore.onTopLoaded();
      }).catch(function () {
        return console.log('Error loading');
      });
    },
    _handleTopStatusChangeUsers: function _handleTopStatusChangeUsers(status) {
      this.loadmore.topStatus = status;
    },
    _handleChangePartnerUser: function _handleChangePartnerUser(userId) {
      this._destroyPartnerById(userId);

      var colleagues = this.counters['colleagues'];
      this.$store.dispatch('user/setFieldShowUserData', {
        key: 'counters.colleagues',
        value: colleagues - 1
      });
    }
  })
});

/***/ }),

/***/ 1833:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mint_ui__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mint_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_mint_ui__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    user: {
      type: Object,
      required: true
    },
    isCurrentUser: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    avatar: function avatar() {
      if (this.user && Object(__WEBPACK_IMPORTED_MODULE_0__utils__["l" /* has */])(this.user, 'avatar.84x84')) {
        var image = this.user.avatar['84x84'];

        return image || __WEBPACK_IMPORTED_MODULE_0__utils__["a" /* AVATAR */];
      } else return __WEBPACK_IMPORTED_MODULE_0__utils__["a" /* AVATAR */];
    },
    city: function city() {
      return Object(__WEBPACK_IMPORTED_MODULE_0__utils__["l" /* has */])(this.user, 'city.id') ? this.user.city : null;
    },
    age: function age() {
      return Object(__WEBPACK_IMPORTED_MODULE_0__utils__["l" /* has */])(this.user, 'age') ? this.user.age : null;
    }
  },
  methods: {
    _handleDestroyUser: function _handleDestroyUser() {
      var _this = this;

      this.$confirm({
        cancelTxt: 'отмена',
        confirmTxt: 'удалить',
        title: 'Подтвердите действие',
        message: 'Вы уверены, что хотите удалить пользователя из коллег?'
      }).then(function () {
        _this._destroyPartner();
      }).catch(function () {});
    },
    _destroyPartner: function _destroyPartner() {
      var _this2 = this;

      __WEBPACK_IMPORTED_MODULE_1_mint_ui__["Indicator"].open();

      var id = this.user.id;


      this.$api.delete('api/v1/users/partners/' + id).then(function (response) {
        __WEBPACK_IMPORTED_MODULE_1_mint_ui__["Indicator"].close();
        _this2.$emit('destroyPartner', id);
      }, function (error) {
        __WEBPACK_IMPORTED_MODULE_1_mint_ui__["Indicator"].close();
        var _error$response = error.response,
            data = _error$response.data,
            status = _error$response.status;

        Object(__WEBPACK_IMPORTED_MODULE_1_mint_ui__["Toast"])({ message: 'Ошибка', iconClass: 'mintui mintui-field-error' });

        throw new Error('Error user destroy partner.');
      });
    }
  }
});

/***/ }),

/***/ 2559:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(2560);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("e6582646", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js?sourceMap!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-e80dd976\",\"scoped\":true,\"hasInlineConfig\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Partners.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js?sourceMap!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-e80dd976\",\"scoped\":true,\"hasInlineConfig\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Partners.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 2560:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(true);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"Partners.vue","sourceRoot":""}]);

// exports


/***/ }),

/***/ 2561:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PartnerCard_vue__ = __webpack_require__(1833);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_70904478_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_PartnerCard_vue__ = __webpack_require__(2562);
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PartnerCard_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_70904478_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_PartnerCard_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/User/PartnerCard.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-70904478", Component.options)
  } else {
    hotAPI.reload("data-v-70904478", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 2562:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "personal-list__item row align_center" },
    [
      _c(
        "router-link",
        {
          staticClass: "row w_100",
          attrs: {
            to: { name: "user.show", params: { username: _vm.user.username } }
          }
        },
        [
          _c(
            "div",
            { staticClass: "notifications-avatar-wrap btn btn_round" },
            [
              _c("img", {
                staticClass: "notifications-avatar",
                attrs: { src: _vm.avatar, alt: _vm.user.name }
              })
            ]
          ),
          _vm._v(" "),
          _c("div", { staticClass: "column justify_center ml_3" }, [
            _c("div", { staticClass: "heading_h5 color_gray-1 mb_0_5" }, [
              _vm._v(
                "\n        " +
                  _vm._s(_vm._f("truncate")(_vm.user.name, 50)) +
                  "\n      "
              )
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "label_declaration" },
              [
                [_vm._v(_vm._s(_vm.city ? _vm.city.text : "Город не указан"))],
                _vm.age
                  ? [
                      _vm._v(
                        ", " +
                          _vm._s(
                            _vm.$pluralize(_vm.age, ["год", "года", "лет"])
                          )
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
      _vm.isCurrentUser === true
        ? [
            _c(
              "a",
              {
                staticClass: "row m-text_bold color_gray-3",
                attrs: { href: "javascript:void(0)" },
                on: {
                  click: function($event) {
                    $event.stopPropagation()
                    $event.preventDefault()
                    return _vm._handleDestroyUser($event)
                  }
                }
              },
              [_vm._v("Удалить")]
            )
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
    require("vue-hot-reload-api")      .rerender("data-v-70904478", esExports)
  }
}

/***/ }),

/***/ 2563:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "mt-popup",
    {
      class: [
        "lm-m-modal-wrap",
        "lm-m-modal-tree-professions",
        "m-text",
        "pb_0"
      ],
      attrs: { position: "center", modal: true },
      on: { input: _vm._handleInputPopup },
      model: {
        value: _vm.modal.value,
        callback: function($$v) {
          _vm.$set(_vm.modal, "value", $$v)
        },
        expression: "modal.value"
      }
    },
    [
      _c(
        "div",
        {
          staticClass: "modal__content_tree-professions form_tree-professions"
        },
        [
          _c(
            "div",
            {
              staticClass:
                "modal__content_header modal__content_header_fixed column align_center"
            },
            [
              _c(
                "div",
                { staticClass: "row align_center justify_center w_100 mb_3" },
                [
                  _c("div", { staticClass: "heading_h5 mb_0" }, [
                    _vm._v("Аудитория")
                  ]),
                  _vm._v(" "),
                  _c(
                    "router-link",
                    {
                      staticClass: "m-text_bold color_main",
                      staticStyle: { position: "absolute", right: "0" },
                      attrs: {
                        to: {
                          name: "user.show",
                          params: { username: _vm.username }
                        }
                      }
                    },
                    [_vm._v("Готово")]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass:
                    "nav nav_categories nav_categories_feed justify_center mt_3"
                },
                [
                  _c(
                    "div",
                    { staticClass: "nav__list nav__list_categories" },
                    [
                      _c(
                        "router-link",
                        {
                          class: ["nav__item", "m-text_bold-2", "mr_6"],
                          attrs: {
                            to: {
                              name: "partners.user",
                              params: { username: _vm.username }
                            },
                            activeClass: "nav__item_active"
                          }
                        },
                        [
                          _vm._v(
                            "Коллеги " +
                              _vm._s(
                                _vm._f("numeral")(
                                  _vm.counters["colleagues"],
                                  "0a"
                                )
                              )
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "router-link",
                        {
                          class: ["nav__item", "m-text_bold-2", "mr_6"],
                          attrs: {
                            to: {
                              name: "followers.user",
                              params: { username: _vm.username }
                            },
                            activeClass: "nav__item_active"
                          }
                        },
                        [
                          _vm._v(
                            "Подписчики " +
                              _vm._s(
                                _vm._f("numeral")(
                                  _vm.counters["followers"],
                                  "0a"
                                )
                              )
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "router-link",
                        {
                          class: ["nav__item", "m-text_bold-2"],
                          attrs: {
                            to: {
                              name: "following.user",
                              params: { username: _vm.username }
                            },
                            activeClass: "nav__item_active"
                          }
                        },
                        [
                          _vm._v(
                            "Подписки " +
                              _vm._s(
                                _vm._f("numeral")(
                                  _vm.counters["following"],
                                  "0a"
                                )
                              )
                          )
                        ]
                      )
                    ],
                    1
                  )
                ]
              )
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              ref: "wrapper",
              class: [
                "modal__content_body",
                { "modal__content_body-empty": _vm.isEmpty }
              ]
            },
            [
              _vm.isEmpty === false
                ? [
                    _c(
                      "div",
                      { staticClass: "personal-list column" },
                      [
                        _c(
                          "mt-loadmore",
                          {
                            ref: "loadmore",
                            attrs: { "top-method": _vm._handleLoadTopUsers },
                            on: {
                              "top-status-change":
                                _vm._handleTopStatusChangeUsers
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
                                  "infinite-scroll-disabled":
                                    "infiniteDisabled",
                                  "infinite-scroll-distance": "200"
                                }
                              },
                              [
                                _vm._l(_vm.users, function(user, key) {
                                  return _c("user-card", {
                                    key: "partner-user-" + user.id + "-" + key,
                                    attrs: {
                                      user: user,
                                      isCurrentUser: _vm.isCurrentUser
                                    },
                                    on: {
                                      destroyPartner:
                                        _vm._handleChangePartnerUser
                                    }
                                  })
                                }),
                                _vm._v(" "),
                                _vm.loading &&
                                _vm.loadmore.topStatus !== "loading"
                                  ? _c("lm-m-loader", {
                                      style: { marginTop: "15px" }
                                    })
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
                                          {
                                            rotate:
                                              _vm.loadmore.topStatus === "drop"
                                          }
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
                      ],
                      1
                    )
                  ]
                : [
                    _c(
                      "div",
                      {
                        staticClass:
                          "page__plug page__plug_feed_empty-list mt_1"
                      },
                      [
                        _c(
                          "svg",
                          {
                            staticClass: "icon icon_size_lg icon_fill_blue mb_5"
                          },
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
                          _vm._v("Тут будут ваши коллеги")
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "m-text_normal-2" }, [
                          _vm._v("Мы покажем их, как только вы"),
                          _c("br"),
                          _vm._v(" кого-нибудь добавите")
                        ])
                      ]
                    )
                  ]
            ],
            2
          )
        ]
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
    require("vue-hot-reload-api")      .rerender("data-v-e80dd976", esExports)
  }
}

/***/ })

});
//# sourceMappingURL=114.build.7b4c03c2abb2fb294164.js.map