webpackJsonp([108],{

/***/ 1289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_User_vue__ = __webpack_require__(1645);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_21a459ba_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_User_vue__ = __webpack_require__(2006);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(2004)
}
var normalizeComponent = __webpack_require__(2)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-21a459ba"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_User_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_21a459ba_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_User_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/views/Board/Rents/User.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-21a459ba", Component.options)
  } else {
    hotAPI.reload("data-v-21a459ba", Component.options)
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

/***/ 1645:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Board_NavigationCategoriesUser_vue__ = __webpack_require__(1528);
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




/* harmony default export */ __webpack_exports__["a"] = ({
  components: { NavigationCategoriesUser: __WEBPACK_IMPORTED_MODULE_1__components_Board_NavigationCategoriesUser_vue__["a" /* default */] },
  metaInfo: function metaInfo() {
    return {
      title: '' + (this.isCurrentUser ? 'Мои объявления: аренда' : 'Объявления: аренда')
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
              return Promise.all([store.dispatch('user/getUserByUsername', { username: String(route.params.username) })]);

            case 3:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this);
    }))();
  },

  computed: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["c" /* mapGetters */])({
    role: 'auth/getRole',
    authUser: 'auth/getAuthUser',
    user: 'user/getShowUserData',
    isAuthorized: 'auth/isAuthorized'
  }), {
    username: function username() {
      var username = this.$route.params.username;

      return username;
    },
    isCurrentUser: function isCurrentUser() {
      var username = this.$route.params.username;

      return this.authUser.username === String(username);
    }
  })
});

/***/ }),

/***/ 2004:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(2005);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("3d49b214", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js?sourceMap!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-21a459ba\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./User.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js?sourceMap!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-21a459ba\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./User.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 2005:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(true);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"User.vue","sourceRoot":""}]);

// exports


/***/ }),

/***/ 2006:
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
                      attrs: { to: { name: "board.castings.create" } }
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
      _c("div", { staticClass: "page__content page__content_feed" }, [
        _c("div", { staticClass: "page__plug page__plug_feed_unavailable" }, [
          _c("svg", { staticClass: "icon icon_size_lg icon_fill_blue mb_5" }, [
            _c("use", {
              attrs: { "xlink:href": "/dist/img/icons/svg/sprite.svg#lm-wait" }
            })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "heading heading_h5" }, [
            _vm._v("Аренда пока недоступна")
          ]),
          _vm._v(" "),
          _vm._m(0),
          _vm._v(" "),
          _c(
            "a",
            {
              staticClass: "btn btn_primary",
              attrs: {
                href: "https://linkmuse.typeform.com/to/A3Rn4O",
                target: "_blank"
              }
            },
            [_vm._v("Записаться")]
          )
        ])
      ])
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
      _vm._v("Запишитесь на ранний доступ к разделу"),
      _c("br"),
      _vm._v("и протестируйте его в числе первых")
    ])
  }
]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-21a459ba", esExports)
  }
}

/***/ })

});
//# sourceMappingURL=108.build.d1cbf7f1ec431871f848.js.map