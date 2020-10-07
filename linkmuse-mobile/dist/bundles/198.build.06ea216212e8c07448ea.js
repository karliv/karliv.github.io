webpackJsonp([198],{

/***/ 1314:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PitchesVote_vue__ = __webpack_require__(1683);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_ab597888_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_PitchesVote_vue__ = __webpack_require__(2131);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(2129)
}
var normalizeComponent = __webpack_require__(2)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-ab597888"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PitchesVote_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_ab597888_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_PitchesVote_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/views/CineMarket/PitchesVote.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-ab597888", Component.options)
  } else {
    hotAPI.reload("data-v-ab597888", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 1683:
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
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  metaInfo: {
    title: 'Питчинги'
  }
});

/***/ }),

/***/ 2129:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(2130);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("61035664", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js?sourceMap!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-ab597888\",\"scoped\":true,\"hasInlineConfig\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./PitchesVote.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js?sourceMap!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-ab597888\",\"scoped\":true,\"hasInlineConfig\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./PitchesVote.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 2130:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(true);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"PitchesVote.vue","sourceRoot":""}]);

// exports


/***/ }),

/***/ 2131:
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
    return _c("div", [
      _c("div", { staticClass: "cm-m-wrapper-content mb_4" }, [
        _c("div", { staticClass: "cm-m-text-h1 mb_4" }, [
          _vm._v("\n      Питчинги\n    ")
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "cm-m-text-h2" }, [
          _vm._v("\n      Веб-сериалы\n    ")
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "cm-m-wrapper-content mb_20" }, [
        _c("div", { staticClass: "cm-m-web-series mb_4_5" }, [
          _c("div", { staticClass: "cm-m-wrap-series" }, [
            _c("img", {
              staticClass: "cm-m-series br_4",
              attrs: { src: "/dist/img/photo.jpg", alt: "Веб-сериал" }
            }),
            _vm._v(" "),
            _c("div", { staticClass: "cm-m-wrap-text-series" }, [
              _c("span", { staticClass: "cm-m-h2-text-series" }, [
                _vm._v("Новое и старое")
              ]),
              _vm._v(" "),
              _c("span", { staticClass: "cm-m-h3-text-series" }, [
                _vm._v("Дмитрий Кузнецов")
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "cm-m-wrap-icon-series" }, [
              _c("img", {
                staticClass: "cm-m-icon-star-series",
                attrs: { src: "/dist/img/icons/svg/Star_green.svg", alt: "" }
              }),
              _vm._v(" "),
              _c("span", { staticClass: "cm-m-numbers-star" }, [_vm._v("1")])
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "cm-m-wrapper-content" }, [
        _c("div", { staticClass: "cm-m-web-series mb_4_5" }, [
          _c("div", { staticClass: "cm-m-wrap-series" }, [
            _c("img", {
              staticClass: "cm-m-series br_4",
              attrs: { src: "/dist/img/photo.jpg", alt: "Фото профиля" }
            }),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "m-flex__justify_end column cm-m-wrap-text-series"
              },
              [
                _c("span", { staticClass: "cm-m-h2-text-series" }, [
                  _vm._v("Новое и старое")
                ]),
                _vm._v(" "),
                _c("span", { staticClass: "cm-m-h3-text-series" }, [
                  _vm._v("Анна Иванова")
                ])
              ]
            ),
            _vm._v(" "),
            _c("div", { staticClass: "cm-m-wrap-icon-series" }, [
              _c("img", {
                staticClass: "cm-m-icon-star-series",
                attrs: { src: "/dist/img/icons/svg/Star_grey.svg", alt: "" }
              }),
              _vm._v(" "),
              _c("span", { staticClass: "cm-m-numbers-star" }, [_vm._v("2")])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "cm-m-wrap-choice" }, [
              _c("span", { staticClass: "cm-m-choice" }, [_vm._v("Ваш выбор")])
            ])
          ])
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
    require("vue-hot-reload-api")      .rerender("data-v-ab597888", esExports)
  }
}

/***/ })

});
//# sourceMappingURL=198.build.06ea216212e8c07448ea.js.map