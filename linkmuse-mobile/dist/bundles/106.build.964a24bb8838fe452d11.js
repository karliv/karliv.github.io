webpackJsonp([106],{

/***/ 1322:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Category_vue__ = __webpack_require__(1694);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_6770979e_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Category_vue__ = __webpack_require__(2161);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(2159)
}
var normalizeComponent = __webpack_require__(2)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-6770979e"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Category_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_6770979e_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Category_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/views/Interview/Pages/Category.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6770979e", Component.options)
  } else {
    hotAPI.reload("data-v-6770979e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 1547:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    interview: {
      type: Object,
      required: true
    }
  },
  computed: {
    category: function category() {
      return this.interview.category;
    },
    user: function user() {
      return this.interview.user.data;
    },
    user_name: function user_name() {
      return this.interview.user_name || this.user.name;
    },
    likes: function likes() {
      return this.interview.likes;
    }
  },
  methods: {
    _handleCreateLike: function _handleCreateLike(count, liked) {
      this.$store.dispatch('interview/setInterviewOnCatalogFiledById', {
        id: this.interview.id,
        key: 'likes',
        value: { count: count, liked: liked }
      });
    }
  }
});

/***/ }),

/***/ 1592:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Card_vue__ = __webpack_require__(1547);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_4170a184_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Card_vue__ = __webpack_require__(1595);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1593)
}
var normalizeComponent = __webpack_require__(2)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-4170a184"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Card_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_4170a184_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Card_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/Interview/Catalog/Card.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4170a184", Component.options)
  } else {
    hotAPI.reload("data-v-4170a184", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 1593:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1594);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("6a446f6e", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js?sourceMap!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-4170a184\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Card.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js?sourceMap!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-4170a184\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Card.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1594:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(true);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"Card.vue","sourceRoot":""}]);

// exports


/***/ }),

/***/ 1595:
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
        "lm-m-interviews--item",
        { "not-publish": _vm.interview.approve === 0 }
      ]
    },
    [
      _vm.interview.approve === 0
        ? [
            _c("corner-ribbon", { staticStyle: { "font-size": "13px" } }, [
              _vm._v("Не опубликовано")
            ])
          ]
        : _vm._e(),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "lm-m-interviews--item--head" },
        [
          _c("like-custom-el", {
            class: [
              "lm-icon--like--blog",
              { active: _vm.interview.likes["liked"] }
            ],
            attrs: {
              type: "interview",
              id: _vm.interview.id,
              count: _vm.likes.count,
              liked: _vm.likes.liked,
              gtm: "LIKE_ARTICLE_LIST"
            },
            on: { like: _vm._handleCreateLike }
          }),
          _vm._v(" "),
          _c(
            "router-link",
            {
              attrs: {
                to: {
                  name: "interviews.show",
                  params: {
                    category: _vm.category.slug,
                    slug: _vm.interview.slug
                  }
                }
              }
            },
            [
              _c("img", {
                attrs: {
                  src: _vm.interview.images["254x318"],
                  alt: _vm.interview.title
                }
              })
            ]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "lm-m-interviews--item--bottom" },
        [
          _c(
            "router-link",
            {
              attrs: {
                to: {
                  name: "interviews.show",
                  params: {
                    category: _vm.category.slug,
                    slug: _vm.interview.slug
                  }
                }
              }
            },
            [
              _c("div", { staticClass: "lm-m-interviews--item--name" }, [
                _vm._v(
                  "«" +
                    _vm._s(_vm._f("truncate")(_vm.interview.quote, 50)) +
                    "»"
                )
              ])
            ]
          ),
          _vm._v(" "),
          _c(
            "router-link",
            {
              staticClass: "lm-user-block",
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
                _c("div", { staticClass: "lm-user-block-info-name" }, [
                  _c("span", [_vm._v(_vm._s(_vm.user_name))])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "lm-user-block-info-type" }, [
                  _vm._v(
                    _vm._s(
                      _vm._f("truncate")(_vm.interview["user_description"], 21)
                    )
                  )
                ])
              ])
            ]
          )
        ],
        1
      )
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
    require("vue-hot-reload-api")      .rerender("data-v-4170a184", esExports)
  }
}

/***/ }),

/***/ 1694:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Interview_Catalog_Card_vue__ = __webpack_require__(1592);
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

  components: { InterviewCard: __WEBPACK_IMPORTED_MODULE_1__components_Interview_Catalog_Card_vue__["a" /* default */], 'mt-loadmore': __WEBPACK_IMPORTED_MODULE_2_mint_ui__["Loadmore"] },
  metaInfo: {
    title: 'BIO'
  },

  asyncData: function asyncData(_ref) {
    var _this = this;

    var store = _ref.store,
        route = _ref.route;
    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var category;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              category = route.params.category;
              _context.next = 3;
              return Promise.all([store.dispatch('interview/fetchInterviewsByCategory', { rewrite: true, category: category })]);

            case 3:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this);
    }))();
  },

  computed: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["c" /* mapGetters */])({
    interviews: 'interview/getInterviews',
    error: 'interview/getInterviewsError',
    loading: 'interview/getInterviewsLoading',
    count: 'interview/getInterviewsCount',
    infiniteDisabled: 'interview/getInterviewsInfiniteDisabled'
  }), {
    isEmpty: function isEmpty() {
      return !this.loading && this.count === 0;
    }
  }),
  methods: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["b" /* mapActions */])({
    fetchInterviewsByCategory: 'interview/fetchInterviewsByCategory'
  }), {
    _handleInfiniteScroll: function _handleInfiniteScroll() {
      var category = this.$route.params.category;

      this.fetchInterviewsByCategory({ rewrite: false, category: category });
    },
    _handleLoadTopInterviews: function _handleLoadTopInterviews() {
      var _this2 = this;

      var category = this.$route.params.category;

      this.fetchInterviewsByCategory({ rewrite: true, category: category }).then(function () {
        _this2.$refs.loadmore.onTopLoaded();
      }).catch(function () {
        return console.log('Error loading');
      });
    },
    _handleTopStatusChangeInterviews: function _handleTopStatusChangeInterviews(status) {
      this.loadmore.topStatus = status;
    }
  })
});

/***/ }),

/***/ 2159:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(2160);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("e7fa3dc0", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js?sourceMap!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6770979e\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Category.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js?sourceMap!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6770979e\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Category.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 2160:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(true);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"Category.vue","sourceRoot":""}]);

// exports


/***/ }),

/***/ 2161:
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
          attrs: { "top-method": _vm._handleLoadTopInterviews },
          on: { "top-status-change": _vm._handleTopStatusChangeInterviews }
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
              staticClass: "lm-m-interviews--list row",
              attrs: {
                "infinite-scroll-disabled": "infiniteDisabled",
                "infinite-scroll-distance": "1400"
              }
            },
            [
              _vm.isEmpty
                ? _c("div", { staticClass: "lm-m-empty-desc" }, [
                    _vm._v("На данный момент, био отсутствуют 🌚")
                  ])
                : _vm._e(),
              _vm._v(" "),
              _vm._l(_vm.interviews, function(interview) {
                return _c("interview-card", {
                  key: interview.id,
                  attrs: { interview: interview }
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
    require("vue-hot-reload-api")      .rerender("data-v-6770979e", esExports)
  }
}

/***/ })

});
//# sourceMappingURL=106.build.964a24bb8838fe452d11.js.map