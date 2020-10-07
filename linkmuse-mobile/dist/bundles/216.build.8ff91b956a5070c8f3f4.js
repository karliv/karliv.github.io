webpackJsonp([216],{

/***/ 1437:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Footer_vue__ = __webpack_require__(1896);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_1455e365_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Footer_vue__ = __webpack_require__(2707);
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Footer_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_1455e365_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Footer_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/views/includes/Footer/Footer.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1455e365", Component.options)
  } else {
    hotAPI.reload("data-v-1455e365", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 1896:
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  computed: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_1_vuex__["c" /* mapGetters */])({
    role: 'auth/getRole',
    user: 'auth/getAuthUser',
    isAuthorized: 'auth/isAuthorized',
    isRegistered: 'auth/isRegistered'
  }), {
    hasUnreadMessages: function hasUnreadMessages() {
      return this.user && this.user.hasOwnProperty('countUnreadMessages') ? this.user['countUnreadMessages'] : 0;
    },
    hasUnreadNotifications: function hasUnreadNotifications() {
      return this.user && this.user.hasOwnProperty('countUnreadNotifications') ? this.user['countUnreadNotifications'] : 0;
    }
  }),
  asyncComputed: {
    isCastingsPage: {
      get: function get() {
        return Object(__WEBPACK_IMPORTED_MODULE_0__utils__["l" /* has */])(this.$route, 'meta.castings') && this.$route.meta.castings === true;
      },

      default: false
    }
  },
  mounted: function mounted() {
    var _this = this;

    if (this.user) {
      this.$echo.private('user.' + this.user.id).listen('Message\\MessageWasReceived', function (_ref) {
        var data = _ref.data;

        _this.$store.dispatch('auth/addCountUnreadMessages');
      });
    }
  },

  methods: {
    _handleClickMoreNavigation: function _handleClickMoreNavigation() {
      this.$root.$emit('filtersIn');
    }
  }
});

/***/ }),

/***/ 2707:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("footer", [
    _c("div", { staticClass: "wrapper" }, [
      _c(
        "ul",
        { class: ["footer--menu", { "no-auth": !_vm.isAuthorized }] },
        [
          _vm.isAuthorized
            ? [
                _c(
                  "li",
                  [
                    _c(
                      "router-link",
                      {
                        staticClass: "footer--menu--profile",
                        attrs: {
                          to: {
                            name: "user.show",
                            params: {
                              username:
                                _vm.user && _vm.user.hasOwnProperty("username")
                                  ? _vm.user.username
                                  : "id1"
                            }
                          }
                        }
                      },
                      [_c("i"), _vm._v(" "), _c("span", [_vm._v("Профиль")])]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "li",
                  [
                    _c(
                      "router-link",
                      {
                        class: ["footer--menu--notificate"],
                        attrs: { to: { name: "notifications.index" } }
                      },
                      [
                        _c("i", { class: { new: _vm.hasUnreadNotifications } }),
                        _vm._v(" "),
                        _c("span", [_vm._v("Уведомления")])
                      ]
                    )
                  ],
                  1
                )
              ]
            : _vm._e(),
          _vm._v(" "),
          !_vm.isAuthorized
            ? [
                _c(
                  "li",
                  [
                    _c(
                      "router-link",
                      {
                        class: ["footer--menu--blog"],
                        attrs: { to: { name: "articles.index" } }
                      },
                      [_c("i"), _vm._v(" "), _c("span", [_vm._v("Блог")])]
                    )
                  ],
                  1
                )
              ]
            : _vm._e(),
          _vm._v(" "),
          _c(
            "li",
            [
              _vm.isAuthorized &&
              _vm.role === "customer" &&
              _vm.user &&
              _vm.user.hasOwnProperty("username")
                ? [
                    _c(
                      "router-link",
                      {
                        staticClass: "footer--menu--casting",
                        attrs: {
                          to: {
                            name: "user.castings",
                            params: { username: _vm.user.username }
                          }
                        }
                      },
                      [_c("i"), _vm._v(" "), _c("span", [_vm._v("Кастинги")])]
                    )
                  ]
                : [
                    _c(
                      "router-link",
                      {
                        class: [
                          "footer--menu--casting",
                          { active: _vm.isCastingsPage }
                        ],
                        attrs: { to: { name: "castings.index" } }
                      },
                      [_c("i"), _vm._v(" "), _c("span", [_vm._v("Кастинги")])]
                    )
                  ]
            ],
            2
          ),
          _vm._v(" "),
          _vm.isAuthorized
            ? [
                _c(
                  "li",
                  [
                    _c(
                      "router-link",
                      {
                        class: ["footer--menu--message"],
                        attrs: { to: { name: "messages.index" } }
                      },
                      [
                        _c("i", { class: { new: _vm.hasUnreadMessages } }),
                        _vm._v(" "),
                        _c("span", [_vm._v("Сообщения")])
                      ]
                    )
                  ],
                  1
                )
              ]
            : _vm._e(),
          _vm._v(" "),
          _c("li", [
            _c(
              "a",
              {
                staticClass: "footer--menu--menu",
                attrs: { href: "javascript:void(0)" },
                on: { click: _vm._handleClickMoreNavigation }
              },
              [_c("i"), _vm._v(" "), _c("span", [_vm._v("Меню")])]
            )
          ])
        ],
        2
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-1455e365", esExports)
  }
}

/***/ })

});
//# sourceMappingURL=216.build.8ff91b956a5070c8f3f4.js.map