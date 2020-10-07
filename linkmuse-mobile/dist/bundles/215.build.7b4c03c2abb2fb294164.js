webpackJsonp([215],{

/***/ 1267:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Index_vue__ = __webpack_require__(1611);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0e61059a_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Index_vue__ = __webpack_require__(1906);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1904)
}
var normalizeComponent = __webpack_require__(2)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-0e61059a"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0e61059a_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Index_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/views/Article/Show/Index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0e61059a", Component.options)
  } else {
    hotAPI.reload("data-v-0e61059a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 1611:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(27);
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




/* harmony default export */ __webpack_exports__["a"] = ({
  metaInfo: function metaInfo() {
    return {
      title: this.title,
      meta: [{ name: 'description', content: this.$truncate(this.$striptags(this.description), 200) }]
    };
  },
  asyncData: function asyncData(_ref) {
    var _this = this;

    var store = _ref.store,
        route = _ref.route;
    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var slug;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              slug = route.params.slug;
              _context.next = 3;
              return Promise.all([store.dispatch('article/getArticleBySlug', { slug: slug })]);

            case 3:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this);
    }))();
  },

  computed: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_1_vuex__["c" /* mapGetters */])({
    authUser: 'auth/getAuthUser',
    isAuthorized: 'auth/isAuthorized',
    article: 'article/getSingleArticleData',
    loading: 'article/getSingleArticleLoading',
    error: 'article/getSingleArticleError'
  }), {
    tag: function tag() {
      return this.article && Object(__WEBPACK_IMPORTED_MODULE_0__utils__["l" /* has */])(this.article, 'tags.data') && this.article.tags.data.length ? this.article.tags.data[0] : null;
    },
    likes: function likes() {
      return this.article.likes;
    },
    user: function user() {
      return this.article ? this.article.user.data : null;
    },
    isCustom: function isCustom() {
      return this.article.is_custom;
    },
    title: function title() {
      return this.article ? this.article.title : 'Статья';
    },
    description: function description() {
      var description = this.article.description;


      if (description) {
        description = this.$htmlspecialchars(description);
        description = this.$markdown(description);
        description = this.$anchorme(description);
      }

      return description;
    }
  }),
  methods: {
    _handleClickPreviousPage: function _handleClickPreviousPage() {
      if (window.history.length > 2) {
        this.$router.go(-1);
      } else {
        this.$router.push({ name: 'articles.index' });
      }
    }
  }
});

/***/ }),

/***/ 1904:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1905);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("90891ce2", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js?sourceMap!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-0e61059a\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/sass-loader/lib/loader.js?indentedSyntax!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Index.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js?sourceMap!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-0e61059a\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/sass-loader/lib/loader.js?indentedSyntax!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Index.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1905:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(true);
// imports


// module
exports.push([module.i, "\n.delimiter[data-v-0e61059a] {\n  width: 10px;\n}\n", "", {"version":3,"sources":["/home/karliv/work/linkmuse-mobile/src/views/Article/Show/Index.vue"],"names":[],"mappings":";AAAA;EACE,YAAY;CAAE","file":"Index.vue","sourcesContent":[".delimiter {\n  width: 10px; }\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 1906:
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
      !(_vm.article && _vm.isCustom)
        ? _c(
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
                  ])
                ])
              ]),
              _vm._v(" "),
              _vm.article
                ? [
                    !_vm.isCustom
                      ? [
                          _c(
                            "div",
                            {
                              staticClass:
                                "lm-m-article-wrap--item-head artile-fix"
                            },
                            [
                              _c("img", {
                                staticClass: "image-article",
                                attrs: {
                                  src: _vm.article.image_big,
                                  alt: _vm.article.title
                                }
                              })
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "lm-m-article-overflow-item" },
                            [
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "lm-m-article-overflow-item-title"
                                },
                                [
                                  _vm._l(_vm.article.tags.data, function(
                                    item,
                                    index
                                  ) {
                                    return [
                                      index
                                        ? _c(
                                            "span",
                                            { staticClass: "delimiter" },
                                            [_vm._v(", ")]
                                          )
                                        : _vm._e(),
                                      _vm._v(" "),
                                      _c(
                                        "router-link",
                                        {
                                          staticClass: "category news",
                                          attrs: {
                                            to: {
                                              name: "articles.tag",
                                              params: { tag: item.slug }
                                            }
                                          }
                                        },
                                        [_vm._v(_vm._s(item.name))]
                                      )
                                    ]
                                  }),
                                  _vm._v(" "),
                                  _c("span", { staticClass: "date" }, [
                                    _vm._v(
                                      _vm._s(
                                        _vm._f("moment")(
                                          [_vm.article.date, "DD-MM-YYYY"],
                                          "DD MMM Y"
                                        )
                                      )
                                    )
                                  ])
                                ],
                                2
                              ),
                              _vm._v(" "),
                              _c("h1", { staticClass: "blog-title" }, [
                                _vm._v(
                                  _vm._s(
                                    _vm._f("truncate")(_vm.article.title, 50)
                                  )
                                )
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
                                          params: {
                                            username: _vm.user.username
                                          }
                                        }
                                      }
                                    },
                                    [
                                      _c("img", {
                                        staticClass: "lm-user-block-avatar",
                                        attrs: { src: _vm.user.avatar["84x84"] }
                                      }),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        { staticClass: "lm-user-block-info" },
                                        [
                                          _c(
                                            "div",
                                            {
                                              staticClass:
                                                "lm-user-block-info-name"
                                            },
                                            [
                                              _c("span", [
                                                _vm._v(_vm._s(_vm.user.name))
                                              ])
                                            ]
                                          )
                                        ]
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "lm-m-article-item-share" },
                                    [
                                      _c("social-share", {
                                        attrs: {
                                          url: _vm.article.href,
                                          title: "Bio " + _vm.article.title,
                                          description: _vm.article.description
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
                                domProps: {
                                  innerHTML: _vm._s(_vm.article.description)
                                }
                              })
                            ]
                          )
                        ]
                      : _vm._e()
                  ]
                : _vm._e(),
              _vm._v(" "),
              !_vm.article
                ? [_c("span", [_vm._v("Ошибка, статья не найдено.")])]
                : _vm._e()
            ],
            2
          )
        : [
            _c("div", {
              domProps: { innerHTML: _vm._s(_vm.article.custom.css) }
            }),
            _vm._v(" "),
            _c("div", {
              domProps: { innerHTML: _vm._s(_vm.article.custom.js) }
            }),
            _vm._v(" "),
            _c("div", {
              staticStyle: { "padding-bottom": "68px" },
              domProps: { innerHTML: _vm._s(_vm.article.custom.html) }
            })
          ]
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
    require("vue-hot-reload-api")      .rerender("data-v-0e61059a", esExports)
  }
}

/***/ })

});
//# sourceMappingURL=215.build.7b4c03c2abb2fb294164.js.map