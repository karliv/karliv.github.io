webpackJsonp([204],{

/***/ 1308:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Index_vue__ = __webpack_require__(1677);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_15a8bed4_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Index_vue__ = __webpack_require__(2113);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(2111)
}
var normalizeComponent = __webpack_require__(2)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-15a8bed4"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_15a8bed4_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Index_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/views/CineMarket/Index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-15a8bed4", Component.options)
  } else {
    hotAPI.reload("data-v-15a8bed4", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 1677:
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    title: 'CineMarket'
  }
});

/***/ }),

/***/ 2111:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(2112);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("1c897e6c", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js?sourceMap!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-15a8bed4\",\"scoped\":true,\"hasInlineConfig\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Index.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js?sourceMap!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-15a8bed4\",\"scoped\":true,\"hasInlineConfig\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Index.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 2112:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(true);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"Index.vue","sourceRoot":""}]);

// exports


/***/ }),

/***/ 2113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _vm._m(0),
    _vm._v(" "),
    _c("div", { staticClass: "cm-m-wrapper-content" }, [
      _c(
        "div",
        { staticClass: "cm-wrap-content cm-m-index-content" },
        [
          _c(
            "router-link",
            {
              staticClass: "cm-m-link mb_9",
              attrs: { tag: "div", to: { name: "cinemarket.pitches" } }
            },
            [
              _c("div", { staticClass: "cm-m-link-icon cm-m-pitches-icon" }),
              _vm._v(" "),
              _c("div", { staticClass: "cm-m-link-item" }, [
                _c("div", { staticClass: "cm-m-text-h3" }, [_vm._v("Питчинги")])
              ])
            ]
          ),
          _vm._v(" "),
          _c(
            "router-link",
            {
              staticClass: "cm-m-link mb_9",
              attrs: { tag: "div", to: { name: "cinemarket.program" } }
            },
            [
              _c("div", { staticClass: "cm-m-link-icon cm-m-program-icon" }),
              _vm._v(" "),
              _c("div", { staticClass: "cm-m-link-item" }, [
                _c("div", { staticClass: "cm-m-text-h3" }, [
                  _vm._v("Программа")
                ])
              ])
            ]
          ),
          _vm._v(" "),
          _c(
            "router-link",
            {
              staticClass: "cm-m-link mb_9",
              attrs: { tag: "div", to: { name: "cinemarket.guest" } }
            },
            [
              _c("div", { staticClass: "cm-m-link-icon cm-m-guests-icon" }),
              _vm._v(" "),
              _c("div", { staticClass: "cm-m-link-item" }, [
                _c("div", { staticClass: "cm-m-text-h3" }, [_vm._v("Гости")])
              ])
            ]
          ),
          _vm._v(" "),
          _c(
            "router-link",
            {
              staticClass: "cm-m-link mb_9",
              attrs: { tag: "div", to: { name: "cinemarket.partners" } }
            },
            [
              _c("div", { staticClass: "cm-m-link-icon cm-m-partners-icon" }),
              _vm._v(" "),
              _c("div", { staticClass: "cm-m-link-item" }, [
                _c("div", { staticClass: "cm-m-text-h3" }, [_vm._v("Партнеры")])
              ])
            ]
          ),
          _vm._v(" "),
          _c(
            "router-link",
            {
              staticClass: "cm-m-link mb_9",
              attrs: { tag: "div", to: { name: "cinemarket.organizer" } }
            },
            [
              _c("div", {
                staticClass: "cm-m-link-icon cm-m-organization-icon"
              }),
              _vm._v(" "),
              _c("div", { staticClass: "cm-m-link-item" }, [
                _c("div", { staticClass: "cm-m-text-h3" }, [
                  _vm._v("Организатор")
                ])
              ])
            ]
          ),
          _vm._v(" "),
          _c(
            "router-link",
            {
              staticClass: "cm-m-link mb_9",
              attrs: { tag: "div", to: { name: "cinemarket.news" } }
            },
            [
              _c("div", { staticClass: "cm-m-link-icon cm-m-news-icon" }),
              _vm._v(" "),
              _c("div", { staticClass: "cm-m-link-item" }, [
                _c("div", { staticClass: "cm-m-text-h3" }, [_vm._v("Новости")])
              ])
            ]
          ),
          _vm._v(" "),
          _c(
            "router-link",
            {
              staticClass: "cm-m-link mb_9",
              attrs: { tag: "div", to: { name: "cinemarket.contacts" } }
            },
            [
              _c("div", { staticClass: "cm-m-link-icon cm-m-contacts-icon" }),
              _vm._v(" "),
              _c("div", { staticClass: "cm-m-link-item" }, [
                _c("div", { staticClass: "cm-m-text-h3" }, [_vm._v("Контакты")])
              ])
            ]
          ),
          _vm._v(" "),
          _c(
            "router-link",
            {
              staticClass: "cm-m-link mb_9",
              attrs: { tag: "div", to: { name: "index" } }
            },
            [
              _c("div", { staticClass: "cm-m-link-icon cm-m-logout-icon" }),
              _vm._v(" "),
              _c("div", { staticClass: "cm-m-link-item" }, [
                _c("div", { staticClass: "cm-m-text-h3" }, [_vm._v("Выйти")])
              ])
            ]
          )
        ],
        1
      )
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "mb_48 cm-m-wrapper-content mt_5" }, [
      _c("div", { staticClass: "cm-wrap-content ta_center cm-m-white" }, [
        _c("div", { staticClass: "cm-m-text-h1 mb_2" }, [
          _vm._v("\n        25 - 27 "),
          _c("br"),
          _vm._v(" Октября\n      ")
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "cm-m-text-h2 mb_0_5" }, [
          _vm._v("\n        Ежегодный кинорынок\n      ")
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "cm-m-text-h3 cm-m-white" }, [
          _vm._v("\n        Место, где рождается кино\n      ")
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
    require("vue-hot-reload-api")      .rerender("data-v-15a8bed4", esExports)
  }
}

/***/ })

});
//# sourceMappingURL=204.build.d1cbf7f1ec431871f848.js.map