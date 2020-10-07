webpackJsonp([111],{

/***/ 1266:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Tag_vue__ = __webpack_require__(1610);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_b9c6f228_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Tag_vue__ = __webpack_require__(1903);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1901)
}
var normalizeComponent = __webpack_require__(2)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Tag_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_b9c6f228_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Tag_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/views/Article/Pages/Tag.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-b9c6f228", Component.options)
  } else {
    hotAPI.reload("data-v-b9c6f228", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 1536:
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
//
//
//
//
//
//
//
//
//
//
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
    article: {
      type: Object,
      required: true
    }
  },
  computed: {
    tag: function tag() {
      return this.article && Object(__WEBPACK_IMPORTED_MODULE_0__utils__["l" /* has */])(this.article, 'tags.data') && this.article.tags.data.length ? this.article.tags.data[0] : null;
    },
    user: function user() {
      return this.article.user.data;
    }
  }
});

/***/ }),

/***/ 1557:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Card_vue__ = __webpack_require__(1536);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_412264af_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Card_vue__ = __webpack_require__(1560);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1558)
}
var normalizeComponent = __webpack_require__(2)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-412264af"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Card_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_412264af_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Card_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/Article/Catalog/Card.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-412264af", Component.options)
  } else {
    hotAPI.reload("data-v-412264af", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 1558:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1559);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("2624e116", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js?sourceMap!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-412264af\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Card.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js?sourceMap!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-412264af\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Card.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1559:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(true);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"Card.vue","sourceRoot":""}]);

// exports


/***/ }),

/***/ 1560:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "lm-m-articles--item" }, [
    _c(
      "div",
      { staticClass: "lm-m-articles--item--head" },
      [
        !_vm.article.is_custom
          ? _c(
              "router-link",
              {
                attrs: {
                  to: {
                    name: "articles.show",
                    params: { slug: _vm.article.slug }
                  }
                }
              },
              [
                _c("img", {
                  attrs: { src: _vm.article.image, alt: _vm.article.title }
                })
              ]
            )
          : _c("a", { attrs: { href: "/article/" + _vm.article.slug } }, [
              _c("img", {
                attrs: { src: _vm.article.image, alt: _vm.article.title }
              })
            ])
      ],
      1
    ),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "lm-m-articles--item--bottom" },
      [
        _c(
          "div",
          { staticClass: "lm-m-articles--item--top" },
          [
            _vm.tag
              ? _c(
                  "router-link",
                  {
                    staticClass: "type",
                    attrs: {
                      to: {
                        name: "articles.tag",
                        params: { tag: _vm.tag.slug }
                      }
                    }
                  },
                  [_vm._v(_vm._s(_vm.tag.name))]
                )
              : _vm._e(),
            _vm._v(" "),
            _c("span", { staticClass: "date" }, [
              _vm._v(
                _vm._s(
                  _vm.$moment(_vm.article.date, "DD-MM-YYYY").format("DD MMM Y")
                )
              )
            ])
          ],
          1
        ),
        _vm._v(" "),
        !_vm.article.is_custom
          ? _c(
              "router-link",
              {
                attrs: {
                  to: {
                    name: "articles.show",
                    params: { slug: _vm.article.slug }
                  }
                }
              },
              [
                _c("div", { staticClass: "lm-m-articles--item--name" }, [
                  _vm._v(_vm._s(_vm._f("truncate")(_vm.article.title, 50)))
                ])
              ]
            )
          : _c("a", { attrs: { href: "/article/" + _vm.article.slug } }, [
              _c("div", { staticClass: "lm-m-articles--item--name" }, [
                _vm._v(_vm._s(_vm._f("truncate")(_vm.article.title, 50)))
              ])
            ]),
        _vm._v(" "),
        _c(
          "router-link",
          {
            staticClass: "lm-user-block small",
            attrs: {
              to: { name: "user.show", params: { username: _vm.user.username } }
            }
          },
          [
            _c("img", {
              staticClass: "lm-user-block-avatar",
              attrs: { src: _vm.user.avatar["84x84"] }
            }),
            _vm._v(" "),
            _c("div", { staticClass: "lm-user-block-info" }, [
              _c("div", { staticClass: "lm-user-block-info-name" }, [
                _c("span", [_vm._v(_vm._s(_vm.user.name))])
              ])
            ])
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
    require("vue-hot-reload-api")      .rerender("data-v-412264af", esExports)
  }
}

/***/ }),

/***/ 1610:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Article_Catalog_Card_vue__ = __webpack_require__(1557);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mint_ui__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mint_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_mint_ui__);
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





/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      loadmore: {
        topStatus: null
      }
    };
  },

  components: { ArticleCard: __WEBPACK_IMPORTED_MODULE_1__components_Article_Catalog_Card_vue__["a" /* default */], 'mt-loadmore': __WEBPACK_IMPORTED_MODULE_2_mint_ui__["Loadmore"] },
  asyncData: function asyncData(_ref) {
    var _this = this;

    var store = _ref.store,
        route = _ref.route;
    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var tag;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              tag = route.params.tag;
              _context.next = 3;
              return Promise.all([store.dispatch('article/fetchArticlesByTag', { rewrite: true, tag: tag })]);

            case 3:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this);
    }))();
  },

  computed: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["c" /* mapGetters */])({
    articles: 'article/getArticles',
    error: 'article/getArticlesError',
    loading: 'article/getArticlesLoading',
    count: 'article/getArticlesCount',
    infiniteDisabled: 'article/getArticlesInfiniteDisabled'
  }), {
    isEmpty: function isEmpty() {
      return !this.loading && this.count === 0;
    }
  }),
  methods: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["b" /* mapActions */])({
    fetchArticlesByTag: 'article/fetchArticlesByTag'
  }), {
    _handleInfiniteScroll: function _handleInfiniteScroll() {
      var tag = this.$route.params.tag;

      this.fetchArticlesByTag({ rewrite: false, tag: tag });
    },
    _handleLoadTopArticles: function _handleLoadTopArticles() {
      var _this2 = this;

      var tag = this.$route.params.tag;

      this.fetchArticlesByTag({ rewrite: true, tag: tag }).then(function () {
        _this2.$refs.loadmore.onTopLoaded();
      }).catch(function () {
        return console.log('Error loading');
      });
    },
    _handleTopStatusChangeArticles: function _handleTopStatusChangeArticles(status) {
      this.loadmore.topStatus = status;
    }
  })
});

/***/ }),

/***/ 1901:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1902);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("56849862", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js?sourceMap!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-b9c6f228\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/sass-loader/lib/loader.js?indentedSyntax!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Tag.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js?sourceMap!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-b9c6f228\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/sass-loader/lib/loader.js?indentedSyntax!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Tag.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1902:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(true);
// imports


// module
exports.push([module.i, "", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"Tag.vue","sourceRoot":""}]);

// exports


/***/ }),

/***/ 1903:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "wrapper no-padding" },
    [
      _c(
        "mt-loadmore",
        {
          ref: "loadmore",
          attrs: { "top-method": _vm._handleLoadTopArticles },
          on: { "top-status-change": _vm._handleTopStatusChangeArticles }
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
              staticClass: "lm-m-articles--list row",
              attrs: {
                "infinite-scroll-disabled": "infiniteDisabled",
                "infinite-scroll-distance": "1100"
              }
            },
            [
              _vm.isEmpty
                ? _c("div", { staticClass: "lm-m-empty-desc" }, [
                    _vm._v("На данный момент, статьи отсутствуют 🌚")
                  ])
                : _vm._e(),
              _vm._v(" "),
              _vm._l(_vm.articles, function(article) {
                return _c("article-card", {
                  key: article.id,
                  attrs: { article: article }
                })
              }),
              _vm._v(" "),
              _vm.loading && _vm.loadmore.topStatus !== "loading"
                ? _c("lm-m-loader")
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
    require("vue-hot-reload-api")      .rerender("data-v-b9c6f228", esExports)
  }
}

/***/ })

});
//# sourceMappingURL=111.build.7b4c03c2abb2fb294164.js.map