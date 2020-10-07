webpackJsonp([131],{

/***/ 1404:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Login_vue__ = __webpack_require__(1780);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_e8a0c19e_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Login_vue__ = __webpack_require__(2403);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(2401)
}
var normalizeComponent = __webpack_require__(2)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-e8a0c19e"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Login_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_e8a0c19e_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Login_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/views/OAuth/Callback/Login.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-e8a0c19e", Component.options)
  } else {
    hotAPI.reload("data-v-e8a0c19e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 1780:
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




/* harmony default export */ __webpack_exports__["a"] = ({
  metaInfo: {
    title: 'Авторизация'
  },
  data: function data() {
    return {
      loading: false,
      isNative: false,
      title: 'Переадресация'
    };
  },
  mounted: function mounted() {
    var _this = this;

    if (__WEBPACK_IMPORTED_MODULE_0__utils__["n" /* isBrowser */]) {
      var _$route = this.$route,
          social = _$route.params.social,
          code = _$route.query.code;


      __WEBPACK_IMPORTED_MODULE_1_mint_ui__["Indicator"].open();
      if (window && window.opener) {
        if (code && social) {
          window.opener.postMessage({ auth: { code: code, social: social } }, window.opener.location);
        } else window.opener.postMessage({ error: 'Login failed' }, window.opener.location);
        __WEBPACK_IMPORTED_MODULE_1_mint_ui__["Indicator"].close();
      } else {
        setTimeout(function () {
          __WEBPACK_IMPORTED_MODULE_1_mint_ui__["Indicator"].close();
          _this.isNative = Object(__WEBPACK_IMPORTED_MODULE_0__utils__["o" /* isNative */])();
          if (_this.isNative === false) {
            if (social && code) {
              _this.$router.push({ name: 'login', params: { social: social }, query: { code: code } });
            } else _this.$router.push({ name: 'login' });
          } else {
            _this.title = 'Произошла ошибка';
            _this.$router.push({ name: 'login' });
            Object(__WEBPACK_IMPORTED_MODULE_1_mint_ui__["Toast"])({ message: 'Ошибка', iconClass: 'mintui mintui-field-error' });
          }
        }, 300);
      }
    }
  }
});

/***/ }),

/***/ 2401:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(2402);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("7498b76b", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js?sourceMap!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-e8a0c19e\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Login.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js?sourceMap!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-e8a0c19e\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Login.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 2402:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(true);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"Login.vue","sourceRoot":""}]);

// exports


/***/ }),

/***/ 2403:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c(
      "div",
      { staticClass: "wrapper lm-m-register-page-wrapper page-inner" },
      [
        _c("div", { staticClass: "lm-m-register-wrap-form" }, [
          _c("h2", { staticClass: "heading heading_h2 mb_9" }, [
            _vm._v(_vm._s(_vm.title))
          ])
        ])
      ]
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
    require("vue-hot-reload-api")      .rerender("data-v-e8a0c19e", esExports)
  }
}

/***/ })

});
//# sourceMappingURL=131.build.06ea216212e8c07448ea.js.map