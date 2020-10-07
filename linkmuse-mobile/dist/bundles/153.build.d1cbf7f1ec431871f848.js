webpackJsonp([153],{

/***/ 1379:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_page_onboarding_vue__ = __webpack_require__(1751);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7121eb5d_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_page_onboarding_vue__ = __webpack_require__(2306);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(2304)
}
var normalizeComponent = __webpack_require__(2)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-7121eb5d"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_page_onboarding_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7121eb5d_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_page_onboarding_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/views/Makeup/pages/page/_onboarding/page_onboarding.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7121eb5d", Component.options)
  } else {
    hotAPI.reload("data-v-7121eb5d", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 1751:
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
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({});

/***/ }),

/***/ 2304:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(2305);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("bd7b63a4", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-7121eb5d\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./page_onboarding.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-7121eb5d\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./page_onboarding.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 2305:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(true);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"page_onboarding.vue","sourceRoot":""}]);

// exports


/***/ }),

/***/ 2306:
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
    return _c(
      "div",
      { staticClass: "page page_onboarding page_onboarding_slide" },
      [
        _c("div", { staticClass: "page__content" }, [
          _c("div", [
            _c("img", {
              staticClass: "img",
              attrs: {
                src: "/dist/img/onboarding/slide_2.png",
                alt: "Доска объявлений"
              }
            })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "page__section" }, [
            _c("div", { staticClass: "heading mt_8" }, [_vm._v("Приложения")]),
            _vm._v(" "),
            _c("div", [
              _vm._v(
                "Обновлённая лента, упрощённая навигация и новые услуги доступны также сейчас в "
              ),
              _c(
                "a",
                {
                  staticClass: "link",
                  attrs: {
                    href: "https://apps.apple.com/ru/app/linkmuse/id1309529188"
                  }
                },
                [_vm._v("App Store")]
              ),
              _vm._v(" и "),
              _c(
                "a",
                {
                  staticClass: "link",
                  attrs: {
                    href:
                      "https://play.google.com/store/apps/details?id=com.linkmuse&hl=ru"
                  }
                },
                [_vm._v("Google Play")]
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "page__buttons" }, [
              _c("button", { staticClass: "btn btn_secondary min-w_144px" }, [
                _vm._v("Назад")
              ]),
              _vm._v(" "),
              _c("button", { staticClass: "btn btn_primary min-w_144px" }, [
                _vm._v("Закончить")
              ])
            ])
          ])
        ])
      ]
    )
  }
]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-7121eb5d", esExports)
  }
}

/***/ })

});
//# sourceMappingURL=153.build.d1cbf7f1ec431871f848.js.map