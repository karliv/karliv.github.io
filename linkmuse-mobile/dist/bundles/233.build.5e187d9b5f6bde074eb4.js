webpackJsonp([233],{

/***/ 1324:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Index_vue__ = __webpack_require__(1696);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_10bbb0c8_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Index_vue__ = __webpack_require__(2165);
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
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_10bbb0c8_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Index_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/views/Interview/Show/Index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-10bbb0c8", Component.options)
  } else {
    hotAPI.reload("data-v-10bbb0c8", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 1696:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__(27);
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



/* harmony default export */ __webpack_exports__["a"] = ({
  metaInfo: {
    title: 'Интервью'
  },
  data: function data() {
    return {
      sheet: {
        value: false,
        actions: [{
          name: 'Подтвердить публикацию',
          method: this._handleClickApprove
        }]
      }
    };
  },
  asyncData: function asyncData(_ref) {
    var _this = this;

    var store = _ref.store,
        route = _ref.route;
    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var _route$params, category, slug;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _route$params = route.params, category = _route$params.category, slug = _route$params.slug;
              _context.next = 3;
              return Promise.all([store.dispatch('interview/getInterviewByCategoryAndSlug', { category: category, slug: slug })]);

            case 3:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this);
    }))();
  },

  computed: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["c" /* mapGetters */])({
    authUser: 'auth/getAuthUser',
    isAuthorized: 'auth/isAuthorized',
    interview: 'interview/getSingleInterviewData',
    loading: 'interview/getSingleInterviewLoading',
    error: 'interview/getSingleInterviewError'
  }), {
    category: function category() {
      return this.interview.category;
    },
    user: function user() {
      return this.interview ? this.interview.user.data : null;
    },
    user_name: function user_name() {
      return this.interview.user_name || this.user.name;
    },
    likes: function likes() {
      return this.interview.likes;
    },
    isCurrentUser: function isCurrentUser() {
      return this.user && this.authUser.id === this.user.id;
    }
  }),
  methods: {
    _handleClickActionSheetClick: function _handleClickActionSheetClick() {
      this.sheet.value = true;
    },
    _handleClickApprove: function _handleClickApprove() {
      var _this2 = this;

      if (!this.isAuthorized) {
        this.$root.$emit('open-access-auth-modal');
        return false;
      }

      this.$api.patch('/api/v1/interviews/' + this.interview.id + '/approve', { status: 1 }).then(function (response) {
        _this2.$store.dispatch('interview/setSingleInterviewDataFields', { approve: 1 });
      }).catch(function (response) {
        _this2.$store.dispatch('interview/setSingleInterviewDataFields', { approve: 0 });
      });
    },
    _handleClickPreviousPage: function _handleClickPreviousPage() {
      if (window.history.length > 2) {
        this.$router.go(-1);
      } else {
        this.$router.push({ name: 'interviews.index' });
      }
    }
  }
});

/***/ }),

/***/ 2165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "lm-m-article-wrap" },
    [
      _c(
        "div",
        { staticClass: "lm-m-article-wrap--item" },
        [
          _c("div", { staticClass: "lm-m-black-head-nav" }, [
            _c("div", { staticClass: "lm-m-black-head-nav-wrap" }, [
              _c("div", { staticClass: "left" }, [
                _c("a", { on: { click: _vm._handleClickPreviousPage } }, [
                  _c("i", { staticClass: "lm-back-icon" }),
                  _vm._v(" "),
                  _c("span", [_vm._v("К списку")])
                ])
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "right" },
                [
                  _vm.isCurrentUser && _vm.interview.approve === 0
                    ? [
                        _c("i", {
                          staticClass: "lm-more-icon",
                          on: { click: _vm._handleClickActionSheetClick }
                        })
                      ]
                    : _vm._e()
                ],
                2
              )
            ])
          ]),
          _vm._v(" "),
          _vm.interview
            ? [
                _c("div", { staticClass: "lm-m-article-wrap--item-head" }, [
                  _c("img", {
                    staticClass: "background",
                    attrs: {
                      src: _vm.interview.images["media_social"],
                      alt: _vm.interview.title
                    }
                  }),
                  _vm._v(" "),
                  _c("div", { staticClass: "lm-m-article-overflow" }, [
                    _c("img", {
                      staticClass: "image",
                      attrs: {
                        src: _vm.interview.images["346x442"],
                        alt: _vm.interview.title
                      }
                    })
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "lm-m-article-overflow-item" }, [
                  _c(
                    "div",
                    { staticClass: "lm-m-article-overflow-item-title" },
                    [
                      _c(
                        "router-link",
                        {
                          staticClass: "category bio",
                          attrs: {
                            to: {
                              name: "interviews.category",
                              params: { category: _vm.category.slug }
                            }
                          }
                        },
                        [
                          _vm._v(
                            "\n            " +
                              _vm._s(_vm.category.name) +
                              "\n          "
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c("span", { staticClass: "date" }, [
                        _vm._v(
                          _vm._s(
                            _vm._f("moment")(
                              [_vm.interview.date, "DD-MM-YYYY"],
                              "DD MMM Y"
                            )
                          )
                        )
                      ])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("h1", { staticClass: "blog-title" }, [
                    _vm._v(_vm._s(_vm._f("truncate")(_vm.interview.title, 50)))
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "lm-m-article-item-user" },
                    [
                      _c(
                        "router-link",
                        {
                          staticClass: "lm-user-block small",
                          attrs: {
                            to: {
                              name: "user.show",
                              params: { username: _vm.user.username }
                            }
                          }
                        },
                        [
                          _c("img", {
                            staticClass: "lm-user-block-avatar",
                            attrs: { src: _vm.user.avatar }
                          }),
                          _vm._v(" "),
                          _c("div", { staticClass: "lm-user-block-info" }, [
                            _c(
                              "div",
                              { staticClass: "lm-user-block-info-name" },
                              [_c("span", [_vm._v(_vm._s(_vm.user_name))])]
                            )
                          ])
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "lm-m-article-item-share" },
                        [
                          _c("social-share", {
                            attrs: {
                              url: _vm.interview.href,
                              title: "Bio " + _vm.interview.title,
                              description: _vm.$truncate(
                                _vm.interview.description,
                                50
                              ),
                              media: _vm.interview.og.vk
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "lm-m-article-item-view" },
                        [
                          _c("like-el", {
                            attrs: {
                              type: "interview",
                              id: _vm.interview.id,
                              count: _vm.likes.count,
                              liked: _vm.likes.liked,
                              gtm: "LIKE_ARTICLE_LIST"
                            }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("div", {
                    staticClass: "text",
                    domProps: { innerHTML: _vm._s(_vm.interview.description) }
                  })
                ])
              ]
            : _vm._e(),
          _vm._v(" "),
          !_vm.interview
            ? [_c("span", [_vm._v("Ошибка, интервью не найдено.")])]
            : _vm._e()
        ],
        2
      ),
      _vm._v(" "),
      _c("actionsheet", {
        attrs: { actions: _vm.sheet.actions, "cancel-text": "" },
        model: {
          value: _vm.sheet.value,
          callback: function($$v) {
            _vm.$set(_vm.sheet, "value", $$v)
          },
          expression: "sheet.value"
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
    require("vue-hot-reload-api")      .rerender("data-v-10bbb0c8", esExports)
  }
}

/***/ })

});
//# sourceMappingURL=233.build.5e187d9b5f6bde074eb4.js.map