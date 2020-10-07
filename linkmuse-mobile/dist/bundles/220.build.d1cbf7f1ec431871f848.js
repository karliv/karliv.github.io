webpackJsonp([220],{

/***/ 1407:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Redirect_vue__ = __webpack_require__(1784);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_6ca03c16_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Redirect_vue__ = __webpack_require__(2414);
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Redirect_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_6ca03c16_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Redirect_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/views/Redirect.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6ca03c16", Component.options)
  } else {
    hotAPI.reload("data-v-6ca03c16", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 1784:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(6);
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["a"] = ({
  metaInfo: {
    title: '301'
  },
  mounted: function mounted() {
    var _this = this;

    if (this.url && __WEBPACK_IMPORTED_MODULE_0__utils__["n" /* isBrowser */]) {
      this.$refs.redirect.click();
      setTimeout(function () {
        _this.$router.push({ name: 'index' });
      }, 2000);
    } else {
      this.$router.push({ name: 'index' });
    }
  },

  computed: {
    url: function url() {
      var url = this.$route.query.url;

      return url;
    }
  }
});

/***/ }),

/***/ 2414:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "page page_error page_error_404",
      staticStyle: { display: "none" }
    },
    [_c("a", { ref: "redirect", attrs: { href: _vm.url, target: "_blank" } })]
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-6ca03c16", esExports)
  }
}

/***/ })

});
//# sourceMappingURL=220.build.d1cbf7f1ec431871f848.js.map