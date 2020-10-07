webpackJsonp([234],{

/***/ 1321:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Index_vue__ = __webpack_require__(1693);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_6616515a_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Index_vue__ = __webpack_require__(2158);
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
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_6616515a_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Index_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/views/Interview/Index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6616515a", Component.options)
  } else {
    hotAPI.reload("data-v-6616515a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 1693:
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



/* harmony default export */ __webpack_exports__["a"] = ({
  metaInfo: {
    title: 'BIO'
  },
  asyncData: function asyncData(_ref) {
    var _this = this;

    var store = _ref.store;
    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return Promise.all([store.dispatch('interview/fetchCategories')]);

            case 2:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this);
    }))();
  },

  computed: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["c" /* mapGetters */])({
    categories: 'interview/getCategories'
  }), {
    isEmpty: function isEmpty() {
      return !this.loading && this.count === 0;
    }
  }),
  methods: {}
});

/***/ }),

/***/ 2158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("div", { staticClass: "lm-m-nav-menu" }, [
      _c("div", { staticClass: "lm-m-nav-wrapper" }, [
        _c(
          "div",
          { staticClass: "lm-m-nav-menu--left" },
          [
            _c(
              "router-link",
              {
                staticClass: "lm-m-nav-menu--item",
                attrs: {
                  to: { name: "articles.index" },
                  "active-class": "active"
                }
              },
              [_c("span", { staticClass: "text" }, [_vm._v("Статьи")])]
            ),
            _vm._v(" "),
            _c(
              "router-link",
              {
                staticClass: "lm-m-nav-menu--item",
                attrs: { to: { name: "interviews.index" } }
              },
              [_c("span", { staticClass: "text" }, [_vm._v("BIO")])]
            )
          ],
          1
        ),
        _vm._v(" "),
        _c("div", { staticClass: "lm-m-nav-menu--right" })
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "lm-m-filter-categories-wrap" }, [
      _c(
        "div",
        { staticClass: "lm-m-filter-categories lm-tags" },
        [
          _c(
            "router-link",
            {
              staticClass: "lm-tag",
              attrs: { to: { name: "interviews.index" } }
            },
            [_vm._v("Все")]
          ),
          _vm._v(" "),
          _vm.categories.length
            ? _vm._l(_vm.categories, function(category) {
                return _c(
                  "router-link",
                  {
                    key: category.id,
                    staticClass: "lm-tag",
                    attrs: {
                      to: {
                        name: "interviews.category",
                        params: { category: category.slug }
                      }
                    }
                  },
                  [
                    _vm._v(
                      "\n          " +
                        _vm._s(_vm._f("truncate")(category.name, 20)) +
                        "\n        "
                    )
                  ]
                )
              })
            : _vm._e()
        ],
        2
      )
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "wrapper no-padding" }, [_c("router-view")], 1)
  ])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-6616515a", esExports)
  }
}

/***/ })

});
//# sourceMappingURL=234.build.06ea216212e8c07448ea.js.map