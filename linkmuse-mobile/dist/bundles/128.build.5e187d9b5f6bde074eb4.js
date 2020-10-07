webpackJsonp([128],{

/***/ 1417:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Show_vue__ = __webpack_require__(1813);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_fa4125ee_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Show_vue__ = __webpack_require__(2501);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(2499)
}
var normalizeComponent = __webpack_require__(2)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-fa4125ee"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Show_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_fa4125ee_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Show_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/views/User/Company/Show.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-fa4125ee", Component.options)
  } else {
    hotAPI.reload("data-v-fa4125ee", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 1813:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__(6);
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

var APP_URL = "http://localhost";




/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'ShowCompany',
  metaInfo: function metaInfo() {
    return {
      title: this.title
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
              return store.dispatch('user/company/getCompanyById', { id: Number(id) });

            case 3:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this);
    }))();
  },
  data: function data() {
    return {
      has: __WEBPACK_IMPORTED_MODULE_1__utils__["l" /* has */], getPartSocialUrl: __WEBPACK_IMPORTED_MODULE_1__utils__["k" /* getPartSocialUrl */],
      APP_URL: APP_URL,
      hideContacts: true
    };
  },

  computed: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["c" /* mapGetters */])({
    user: 'auth/getAuthUser',
    isAuthorized: 'auth/isAuthorized',
    error: 'user/company/getCompanyError',
    loading: 'user/company/getCompanyLoading',
    company: 'user/company/getCompanyData'
  }), {
    id: function id() {
      var id = this.$route.params.id;

      return id;
    },
    href: function href() {
      var id = this.company.id;

      var query = this.isAuthorized && this.user ? { ref: this.user.id } : {};

      var _$router$resolve = this.$router.resolve({ name: 'users.companies.show', params: { id: id }, query: query }),
          href = _$router$resolve.href;

      return href;
    },
    isCurrentUser: function isCurrentUser() {
      return this.user && this.user.id === this.author.id;
    },
    title: function title() {
      return this.name + ' | ' + this.companyName;
    },
    description: function description() {
      return '' + this.name;
    },
    author: function author() {
      var user = this.company.user;

      return user;
    },
    username: function username() {
      var username = this.author.username;

      return username;
    },
    name: function name() {
      return Object(__WEBPACK_IMPORTED_MODULE_1__utils__["l" /* has */])(this.author, 'name') ? this.author.name : null;
    },
    isCertifiedUser: function isCertifiedUser() {
      return this.author.isCertifiedUser || false;
    },
    avatar: function avatar() {
      if (this.author && Object(__WEBPACK_IMPORTED_MODULE_1__utils__["l" /* has */])(this.author, 'avatar.84x84')) {
        var image = this.author.avatar['84x84'];

        return image || __WEBPACK_IMPORTED_MODULE_1__utils__["a" /* AVATAR */];
      } else return __WEBPACK_IMPORTED_MODULE_1__utils__["a" /* AVATAR */];
    },
    originalAvatar: function originalAvatar() {
      if (this.author && Object(__WEBPACK_IMPORTED_MODULE_1__utils__["l" /* has */])(this.author, 'avatar.original')) {
        var image = this.author.avatar.original;

        return image || __WEBPACK_IMPORTED_MODULE_1__utils__["a" /* AVATAR */];
      } else return __WEBPACK_IMPORTED_MODULE_1__utils__["a" /* AVATAR */];
    },
    companyNode: function companyNode() {
      var company = this.company.company;

      return company;
    },
    companyName: function companyName() {
      var text = this.company.company.text;

      return text;
    },
    anketa: function anketa() {
      var anketa = this.company.anketa;

      return anketa;
    },
    hasParticipationInProjects: function hasParticipationInProjects() {
      return Object(__WEBPACK_IMPORTED_MODULE_1__utils__["l" /* has */])(this.anketa, 'participation-in-projects');
    },
    participationInProjects: function participationInProjects() {
      return this.anketa['participation-in-projects'];
    },
    phone: function phone() {
      return Object(__WEBPACK_IMPORTED_MODULE_1__utils__["l" /* has */])(this.author, 'contacts.phone') && this.author['contacts']['phone'] ? this.author['contacts']['phone'] : null;
    },
    email: function email() {
      return Object(__WEBPACK_IMPORTED_MODULE_1__utils__["l" /* has */])(this.author, 'contacts.email') && this.author['contacts']['email'] ? this.author['contacts']['email'] : null;
    },
    site: function site() {
      return Object(__WEBPACK_IMPORTED_MODULE_1__utils__["l" /* has */])(this.author, 'contacts.site') && this.author['contacts']['site'] ? this.author['contacts']['site'] : null;
    },
    telegram: function telegram() {
      return Object(__WEBPACK_IMPORTED_MODULE_1__utils__["l" /* has */])(this.author, 'contacts.telegram') && this.author['contacts']['telegram'] ? this.author['contacts']['telegram'] : null;
    },
    whatsapp: function whatsapp() {
      return Object(__WEBPACK_IMPORTED_MODULE_1__utils__["l" /* has */])(this.author, 'contacts.whatsapp') && this.author['contacts']['whatsapp'] ? this.author['contacts']['whatsapp'] : null;
    },
    viber: function viber() {
      return Object(__WEBPACK_IMPORTED_MODULE_1__utils__["l" /* has */])(this.author, 'contacts.viber') && this.author['contacts']['viber'] ? this.author['contacts']['viber'] : null;
    },
    instagram: function instagram() {
      return Object(__WEBPACK_IMPORTED_MODULE_1__utils__["l" /* has */])(this.author, 'contacts.instagram') && this.author['contacts']['instagram'] ? this.author['contacts']['instagram'] : null;
    },
    facebook: function facebook() {
      return Object(__WEBPACK_IMPORTED_MODULE_1__utils__["l" /* has */])(this.author, 'contacts.facebook') && this.author['contacts']['facebook'] ? this.author['contacts']['facebook'] : null;
    },
    youtube: function youtube() {
      return Object(__WEBPACK_IMPORTED_MODULE_1__utils__["l" /* has */])(this.author, 'contacts.youtube') && this.author['contacts']['youtube'] ? this.author['contacts']['youtube'] : null;
    },
    vk: function vk() {
      return Object(__WEBPACK_IMPORTED_MODULE_1__utils__["l" /* has */])(this.author, 'contacts.vk') && this.author['contacts']['vk'] ? this.author['contacts']['vk'] : null;
    },
    hasContacts: function hasContacts() {
      return Boolean(Object(__WEBPACK_IMPORTED_MODULE_1__utils__["l" /* has */])(this.author, 'contacts') && Object.keys(this._.omit(this.author.contacts, ['phone'])).length);
    },
    hasRate: function hasRate() {
      return Object(__WEBPACK_IMPORTED_MODULE_1__utils__["l" /* has */])(this.anketa, 'rate');
    },
    rate: function rate() {
      return this.anketa['rate'][0];
    },
    isPublished: function isPublished() {
      return Boolean(this.company.isPublished);
    },
    city: function city() {
      return Object(__WEBPACK_IMPORTED_MODULE_1__utils__["l" /* has */])(this.author, 'city.id') ? this.author.city : null;
    },
    age: function age() {
      return Object(__WEBPACK_IMPORTED_MODULE_1__utils__["l" /* has */])(this.author, 'age') ? this.author.age : null;
    }
  }),
  mounted: function mounted() {
    if (this.isAuthorized && this.isCurrentUser) {
      this.hideContacts = false;
    }
  },

  methods: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["b" /* mapActions */])({
    setFieldCompanyData: 'user/company/setFieldCompanyData'
  }), {
    _handleClickPreviousPage: function _handleClickPreviousPage() {
      if (window.history.length > 2) {
        this.$router.go(-1);
      } else this.$router.push({ name: 'users.companies.index' });
    },
    isToday: function isToday(date) {
      var context = this.$moment(date);
      return this.$moment().isSame(context, 'd');
    },
    _handleShowContacts: function _handleShowContacts() {
      this.hideContacts = false;
      this.$gtm.trackEvent({ event: 'show_contancts' });
    },
    _handleClickActionSheet: function _handleClickActionSheet() {},
    _handleClickMessage: function _handleClickMessage() {
      if (this.isAuthorized === false) {
        this._handleClickMessageWithoutAuthorized();
      } else this._handleMessage();

      this.$gtm.trackEvent({ event: 'company_write_message' });
    },
    _handleClickMessageWithoutAuthorized: function _handleClickMessageWithoutAuthorized() {
      var _this2 = this;

      this.$localStorage.set('redirect.register', this.href);
      this.$nextTick(function () {
        _this2.$router.push({ name: 'register' });
      });
    },
    _handleMessage: function _handleMessage() {
      var uid = this._.sortBy([this.author.id, this.user.id]).toString();

      this.$router.push({ name: 'messages.show', params: { uid: uid } });
    },
    _handleClickCallUser: function _handleClickCallUser() {
      this.$gtm.trackEvent({ event: 'call_user_number' });
    }
  })
});

/***/ }),

/***/ 2499:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(2500);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("e971f67c", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js?sourceMap!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-fa4125ee\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Show.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js?sourceMap!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-fa4125ee\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Show.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 2500:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(true);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"Show.vue","sourceRoot":""}]);

// exports


/***/ }),

/***/ 2501:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "page page_declaration" },
    [
      _c(
        "div",
        { staticClass: "page-inner__container" },
        [
          _c("div", { staticClass: "page__header page__header_declaration" }, [
            _c("div", { staticClass: "block block_declaration bt_none" }, [
              _c("div", { staticClass: "row row_justify_between" }, [
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
                _c(
                  "div",
                  { staticClass: "row" },
                  [
                    _vm.isPublished === true
                      ? [
                          _vm.isCurrentUser === true
                            ? [
                                _c(
                                  "router-link",
                                  {
                                    staticClass:
                                      "btn btn_rounded btn_edit mr_4",
                                    attrs: {
                                      to: {
                                        name: "users.companies.edit",
                                        params: { id: _vm.id }
                                      }
                                    }
                                  },
                                  [
                                    _c(
                                      "svg",
                                      { staticClass: "icon icon_edit" },
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
                              _c("button", { staticClass: "btn btn_rounded" }, [
                                _c("svg", { staticClass: "icon icon_share" }, [
                                  _c("use", {
                                    attrs: {
                                      "xlink:href":
                                        "/dist/img/icons/_declaration/sprite.svg#icon_share"
                                    }
                                  })
                                ])
                              ])
                            ]
                          )
                        ]
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.isPublished === false
                      ? [
                          _c(
                            "router-link",
                            {
                              staticClass: "btn btn_rounded btn_edit",
                              attrs: {
                                to: {
                                  name: "users.companies.edit",
                                  params: { id: _vm.id }
                                }
                              }
                            },
                            [
                              _c("svg", { staticClass: "icon icon_edit" }, [
                                _c("use", {
                                  attrs: {
                                    "xlink:href":
                                      "/dist/img/icons/_declaration/sprite.svg#icon_edit"
                                  }
                                })
                              ])
                            ]
                          )
                        ]
                      : _vm._e()
                  ],
                  2
                )
              ])
            ])
          ]),
          _vm._v(" "),
          _vm.isCurrentUser === true
            ? [
                _vm.isPublished === false
                  ? [
                      _c("div", { staticClass: "lm-m-block-text-archival" }, [
                        _vm._v("\n          Снято с публикации\n        ")
                      ])
                    ]
                  : _vm._e()
              ]
            : _vm._e(),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "page__body page-inner__body_declaration" },
            [
              _c(
                "div",
                { staticClass: "block block_declaration" },
                [
                  _c(
                    "div",
                    { staticClass: "list list__title-info mb_3" },
                    [
                      _vm.isPublished === true
                        ? [
                            _c(
                              "div",
                              {
                                staticClass: "list__item casting__creation-date"
                              },
                              [
                                _vm._v(
                                  "\n              " +
                                    _vm._s(
                                      _vm.isToday(_vm.company.publishedAt)
                                        ? "Сегодня, " +
                                            _vm
                                              .$moment(_vm.company.publishedAt)
                                              .format("HH:mm")
                                        : _vm
                                            .$moment(_vm.company.publishedAt)
                                            .format("DD MMM YYYY, HH:mm")
                                    ) +
                                    "\n            "
                                )
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
                      staticClass: "row align_center",
                      attrs: {
                        tag: "div",
                        to: {
                          name: "user.show",
                          params: { username: _vm.username }
                        }
                      }
                    },
                    [
                      _c("div", { staticClass: "avatar-container row mr_5" }, [
                        _c("img", {
                          staticClass: "d-img",
                          attrs: { src: _vm.avatar, alt: _vm.name }
                        })
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "row w_100" }, [
                        _c("div", { staticClass: "m-text_normal" }, [
                          _c(
                            "div",
                            {
                              staticClass: "d-row",
                              staticStyle: { "margin-bottom": "2px" }
                            },
                            [
                              _c(
                                "div",
                                { staticClass: "heading heading_h4 mb_0" },
                                [
                                  _vm._v(
                                    "\n                  " +
                                      _vm._s(_vm.name) +
                                      "\n\n                  "
                                  ),
                                  _vm.isCertifiedUser
                                    ? [
                                        _c(
                                          "svg",
                                          {
                                            staticClass:
                                              "icon icon_size_16 ml_1",
                                            staticStyle: {
                                              "vertical-align": "middle"
                                            }
                                          },
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
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "color_gray-1 mb_2" },
                            [
                              _c("span", [
                                _vm._v(
                                  _vm._s(
                                    _vm.city
                                      ? _vm.city.text + ", "
                                      : "Город не указан, "
                                  )
                                )
                              ]),
                              _vm._v(" "),
                              _vm.age
                                ? [
                                    _c("span", [
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
                          _c("div", { staticClass: "m-text_bold color_main" }, [
                            _vm._v("Перейти в профиль")
                          ])
                        ])
                      ])
                    ]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c("div", { staticClass: "block block_declaration" }, [
                _c("div", [
                  _c("div", { staticClass: "page-inner__label-title mb_1" }, [
                    _vm._v("Компания")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "m-text_bold" }, [
                    _vm._v(_vm._s(_vm.companyName))
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "mt_6" }, [
                  _c("div", { staticClass: "page-inner__label-title mb_1" }, [
                    _vm._v("Стоимость работы")
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "m-text_bold" },
                    [
                      _vm.hasRate === true
                        ? [
                            _vm._v(
                              "\n              от " +
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
                        ? [_vm._v("Без гонорара")]
                        : _vm._e()
                    ],
                    2
                  )
                ])
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "block block_declaration" },
                [
                  _vm.has(_vm.anketa, "functions")
                    ? [
                        _c("div", { staticClass: "mt_6" }, [
                          _c(
                            "div",
                            { staticClass: "page-inner__label-title mb_1" },
                            [_vm._v("Функции")]
                          ),
                          _vm._v(" "),
                          _c("div", { staticClass: "m-text_bold" }, [
                            _vm._v(_vm._s(_vm.anketa["functions"]))
                          ])
                        ])
                      ]
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.has(_vm.anketa, "other")
                    ? [
                        _c("div", { staticClass: "mt_6" }, [
                          _c(
                            "div",
                            { staticClass: "page-inner__label-title mb_1" },
                            [_vm._v("Другое")]
                          ),
                          _vm._v(" "),
                          _c("div", { staticClass: "m-text_bold" }, [
                            _vm._v(_vm._s(_vm.anketa["other"]))
                          ])
                        ])
                      ]
                    : _vm._e()
                ],
                2
              ),
              _vm._v(" "),
              _vm.hasParticipationInProjects
                ? [
                    _c(
                      "div",
                      { staticClass: "block block_declaration" },
                      [
                        _vm._l(_vm.participationInProjects, function(item) {
                          return [
                            _c("div", { staticClass: "mt_6" }, [
                              _c(
                                "div",
                                { staticClass: "page-inner__label-title" },
                                [_vm._v("Проект")]
                              ),
                              _vm._v(" "),
                              _c("div", { staticClass: "m-text_bold mt_1" }, [
                                _vm._v(_vm._s(item["project-name"]))
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "m-text_normal mt_1" }, [
                                _vm._v(_vm._s(item.description))
                              ])
                            ])
                          ]
                        })
                      ],
                      2
                    )
                  ]
                : _vm._e(),
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
                                { staticClass: "section_contacts_action" },
                                [
                                  _c("span", { staticClass: "m-text_bold" }, [
                                    _vm._v(
                                      "Узнайте контакты, используя «Показать контакты»"
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c(
                                    "button",
                                    {
                                      staticClass: "btn btn_primary",
                                      on: { click: _vm._handleShowContacts }
                                    },
                                    [_vm._v("Показать контакты")]
                                  )
                                ]
                              )
                            ]
                          : [
                              _vm.vk
                                ? [
                                    _c("div", { staticClass: "mt_6" }, [
                                      _c(
                                        "div",
                                        {
                                          staticClass: "page-inner__label-title"
                                        },
                                        [_vm._v("Вконтакте")]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        { staticClass: "m-text_bold mt_1" },
                                        [
                                          _c(
                                            "a",
                                            {
                                              staticClass:
                                                "fw_600 color_gray-1",
                                              attrs: {
                                                href:
                                                  "https://vk.com/" +
                                                  _vm.getPartSocialUrl(
                                                    _vm.vk,
                                                    "vk.com"
                                                  ),
                                                target: "_blank"
                                              }
                                            },
                                            [_vm._v(_vm._s(_vm.vk))]
                                          )
                                        ]
                                      )
                                    ])
                                  ]
                                : _vm._e(),
                              _vm._v(" "),
                              _vm.instagram
                                ? [
                                    _c("div", { staticClass: "mt_6" }, [
                                      _c(
                                        "div",
                                        {
                                          staticClass: "page-inner__label-title"
                                        },
                                        [_vm._v("Instagram")]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        { staticClass: "m-text_bold mt_1" },
                                        [
                                          _c(
                                            "a",
                                            {
                                              staticClass: "color_gray-1",
                                              attrs: {
                                                href:
                                                  "https://instagram.com/" +
                                                  _vm.getPartSocialUrl(
                                                    _vm.instagram,
                                                    "instagram.com"
                                                  ),
                                                target: "_blank"
                                              }
                                            },
                                            [_vm._v(_vm._s(_vm.instagram))]
                                          )
                                        ]
                                      )
                                    ])
                                  ]
                                : _vm._e(),
                              _vm._v(" "),
                              _vm.facebook
                                ? [
                                    _c("div", { staticClass: "mt_6" }, [
                                      _c(
                                        "div",
                                        {
                                          staticClass: "page-inner__label-title"
                                        },
                                        [_vm._v("Facebook")]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        { staticClass: "m-text_bold mt_1" },
                                        [
                                          _c(
                                            "a",
                                            {
                                              staticClass: "color_gray-1",
                                              attrs: {
                                                href:
                                                  "https://facebook.com/" +
                                                  _vm.getPartSocialUrl(
                                                    _vm.getPartSocialUrl(
                                                      _vm.facebook,
                                                      "facebook.com"
                                                    ),
                                                    "fb.com"
                                                  ),
                                                target: "_blank"
                                              }
                                            },
                                            [_vm._v(_vm._s(_vm.facebook))]
                                          )
                                        ]
                                      )
                                    ])
                                  ]
                                : _vm._e(),
                              _vm._v(" "),
                              _vm.youtube
                                ? [
                                    _c("div", { staticClass: "mt_6" }, [
                                      _c(
                                        "div",
                                        {
                                          staticClass: "page-inner__label-title"
                                        },
                                        [_vm._v("YouTube")]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        { staticClass: "m-text_bold mt_1" },
                                        [
                                          _c(
                                            "a",
                                            {
                                              staticClass: "color_gray-1",
                                              attrs: {
                                                href:
                                                  "https://youtube.com/" +
                                                  _vm.getPartSocialUrl(
                                                    _vm.youtube,
                                                    "youtube.com"
                                                  ),
                                                target: "_blank"
                                              }
                                            },
                                            [_vm._v(_vm._s(_vm.youtube))]
                                          )
                                        ]
                                      )
                                    ])
                                  ]
                                : _vm._e(),
                              _vm._v(" "),
                              _vm.telegram
                                ? [
                                    _c("div", { staticClass: "mt_6" }, [
                                      _c(
                                        "div",
                                        {
                                          staticClass: "page-inner__label-title"
                                        },
                                        [_vm._v("Сайт")]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        { staticClass: "m-text_bold mt_1" },
                                        [
                                          _c(
                                            "a",
                                            {
                                              staticClass: "color_gray-1",
                                              attrs: {
                                                href:
                                                  "tg://resolve?domain=" +
                                                  _vm.telegram,
                                                target: "_self"
                                              }
                                            },
                                            [_vm._v(_vm._s(_vm.telegram))]
                                          )
                                        ]
                                      )
                                    ])
                                  ]
                                : _vm._e(),
                              _vm._v(" "),
                              _vm.whatsapp
                                ? [
                                    _c("div", { staticClass: "mt_6" }, [
                                      _c(
                                        "div",
                                        {
                                          staticClass: "page-inner__label-title"
                                        },
                                        [_vm._v("Whatsapp")]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        { staticClass: "m-text_bold mt_1" },
                                        [
                                          _c(
                                            "a",
                                            {
                                              staticClass: "color_gray-1",
                                              attrs: {
                                                href:
                                                  "whatsapp://send?phone=" +
                                                  _vm.whatsapp,
                                                target: "_self"
                                              }
                                            },
                                            [_vm._v(_vm._s(_vm.whatsapp))]
                                          )
                                        ]
                                      )
                                    ])
                                  ]
                                : _vm._e(),
                              _vm._v(" "),
                              _vm.viber
                                ? [
                                    _c("div", { staticClass: "mt_6" }, [
                                      _c(
                                        "div",
                                        {
                                          staticClass: "page-inner__label-title"
                                        },
                                        [_vm._v("Viber")]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        { staticClass: "m-text_bold mt_1" },
                                        [
                                          _c(
                                            "a",
                                            {
                                              staticClass: "color_gray-1",
                                              attrs: {
                                                href:
                                                  "viber://chat?number=" +
                                                  _vm.viber,
                                                target: "_self"
                                              }
                                            },
                                            [_vm._v(_vm._s(_vm.viber))]
                                          )
                                        ]
                                      )
                                    ])
                                  ]
                                : _vm._e(),
                              _vm._v(" "),
                              _vm.email
                                ? [
                                    _c("div", { staticClass: "mt_6" }, [
                                      _c(
                                        "div",
                                        {
                                          staticClass: "page-inner__label-title"
                                        },
                                        [_vm._v("E-mail")]
                                      ),
                                      _vm._v(" "),
                                      _c("div", {
                                        staticClass: "m-text_bold mt_1",
                                        domProps: {
                                          innerHTML: _vm._s(
                                            _vm.$anchorme(_vm.email)
                                          )
                                        }
                                      })
                                    ])
                                  ]
                                : _vm._e(),
                              _vm._v(" "),
                              _vm.site
                                ? [
                                    _c("div", { staticClass: "mt_6" }, [
                                      _c(
                                        "div",
                                        {
                                          staticClass: "page-inner__label-title"
                                        },
                                        [_vm._v("Сайт")]
                                      ),
                                      _vm._v(" "),
                                      _c("div", {
                                        staticClass: "m-text_bold mt_1",
                                        domProps: {
                                          innerHTML: _vm._s(
                                            _vm.$anchorme(_vm.site)
                                          )
                                        }
                                      })
                                    ])
                                  ]
                                : _vm._e()
                            ]
                      ],
                      2
                    )
                  ]
                : _vm._e()
            ],
            2
          )
        ],
        2
      ),
      _vm._v(" "),
      _vm.isCurrentUser === false
        ? [
            _c(
              "div",
              { staticClass: "page__footer page__footer_declaration" },
              [
                _c("div", { staticClass: "page__block_declaration" }, [
                  _c(
                    "div",
                    { staticClass: "row row_justify_between" },
                    [
                      _vm.phone
                        ? [
                            _c(
                              "button",
                              {
                                staticClass: "btn btn_round btn_primary",
                                on: { click: _vm._handleClickMessage }
                              },
                              [
                                _c(
                                  "svg",
                                  {
                                    staticClass:
                                      "icon icon_size_16 icon_fill_white"
                                  },
                                  [
                                    _c("use", {
                                      attrs: {
                                        "xlink:href":
                                          "/dist/img/icons/_declaration/sprite.svg#icon_chat"
                                      }
                                    })
                                  ]
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "a",
                              {
                                staticClass:
                                  "btn btn_primary w_100 max-w_272px ml_9",
                                attrs: { href: "tel:" + _vm.phone },
                                on: { click: _vm._handleClickCallUser }
                              },
                              [
                                _vm._v(
                                  "\n              Позвонить\n            "
                                )
                              ]
                            )
                          ]
                        : !_vm.phone
                        ? [
                            _c(
                              "button",
                              {
                                staticClass: "btn btn_primary w_100",
                                on: { click: _vm._handleClickMessage }
                              },
                              [_vm._v("Написать")]
                            )
                          ]
                        : _vm._e()
                    ],
                    2
                  )
                ])
              ]
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
    require("vue-hot-reload-api")      .rerender("data-v-fa4125ee", esExports)
  }
}

/***/ })

});
//# sourceMappingURL=128.build.5e187d9b5f6bde074eb4.js.map