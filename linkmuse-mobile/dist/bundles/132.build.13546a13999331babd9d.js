webpackJsonp([132],{

/***/ 1400:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_page_vs_rules_vue__ = __webpack_require__(1772);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5d765016_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_page_vs_rules_vue__ = __webpack_require__(2369);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(2367)
}
var normalizeComponent = __webpack_require__(2)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-5d765016"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_page_vs_rules_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5d765016_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_page_vs_rules_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/views/Makeup/pages/page/_vs-rules/page_vs-rules.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5d765016", Component.options)
  } else {
    hotAPI.reload("data-v-5d765016", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 1772:
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
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({});

/***/ }),

/***/ 2367:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(2368);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("1b9767bb", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-5d765016\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./page_vs-rules.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-5d765016\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./page_vs-rules.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 2368:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(true);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"page_vs-rules.vue","sourceRoot":""}]);

// exports


/***/ }),

/***/ 2369:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "page page_vs-rules" }, [
      _c("div", { staticClass: "page__body page__body_vs-rules" }, [
        _c("div", { staticClass: "heading heading_h4" }, [
          _vm._v("Правила Linkmuse")
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "fsize_12 color_gray-2" }, [
          _vm._v(
            "На этой странице доступны все правила нашего сервиса. Вы можете ознакомиться с ними, если не делали этого ранее"
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "column mt_6 mb_6" }, [
          _c(
            "a",
            { staticClass: "link link_vs-rules mb_3", attrs: { href: "#" } },
            [_vm._v("Пользовательское соглашение")]
          ),
          _vm._v(" "),
          _c(
            "a",
            { staticClass: "link link_vs-rules mb_3", attrs: { href: "#" } },
            [_vm._v("Правила верификации")]
          ),
          _vm._v(" "),
          _c(
            "a",
            { staticClass: "link link_vs-rules mb_3", attrs: { href: "#" } },
            [_vm._v("Инструкция")]
          ),
          _vm._v(" "),
          _c(
            "a",
            { staticClass: "link link_vs-rules mb_3", attrs: { href: "#" } },
            [_vm._v("Договор")]
          )
        ])
      ])
    ])
  }
]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-5d765016", esExports)
  }
}

/***/ })

});
//# sourceMappingURL=132.build.13546a13999331babd9d.js.map