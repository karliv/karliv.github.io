webpackJsonp([235],{

/***/ 1318:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_500_vue__ = __webpack_require__(1687);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_4fc08d8b_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_500_vue__ = __webpack_require__(2139);
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_500_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_4fc08d8b_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_500_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/views/Errors/500.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4fc08d8b", Component.options)
  } else {
    hotAPI.reload("data-v-4fc08d8b", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 1687:
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

/* harmony default export */ __webpack_exports__["a"] = ({
  metaInfo: {
    title: '500'
  }
});

/***/ }),

/***/ 2139:
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
    return _c("div", { staticClass: "page page_error page_error_404" }, [
      _c("img", {
        staticClass: "page__img page__img_error page__img_error_404",
        attrs: {
          src: "/dist/img/page/__error/_404/page__error_404.svg",
          alt: "Error. Page not found"
        }
      }),
      _vm._v(" "),
      _c(
        "h1",
        { staticClass: "page__title page__title_error page__title_error_404" },
        [_vm._v("500")]
      ),
      _vm._v(" "),
      _c(
        "p",
        {
          staticClass:
            "page__paragraph page__paragraph_error page__paragraph_error_404"
        },
        [_vm._v("Сервер сдох.")]
      ),
      _vm._v(" "),
      _c("br", { staticClass: "paragraph__break" }),
      _vm._v(" "),
      _c("br", { staticClass: "paragraph__break" }),
      _vm._v(" "),
      _c("br", { staticClass: "paragraph__break paragraph__break_tablet" }),
      _vm._v(" "),
      _c(
        "p",
        {
          staticClass:
            "page__paragraph page__paragraph_error page__paragraph_error_404"
        },
        [
          _vm._v(
            " Нашему серверу очень нехорошо, и он не хочет ни с кем разговаривать. Если такое случилось несколько раз, напишите нам "
          ),
          _c("br", { staticClass: "paragraph__break paragraph__break_tablet" }),
          _c(
            "a",
            {
              staticClass: "page__link page__link_404",
              attrs: { href: "https://vk.com/linkmuse_com" }
            },
            [_vm._v("vk")]
          ),
          _vm._v(" или "),
          _c(
            "a",
            {
              staticClass: "page__link page__link_404",
              attrs: { href: "https://www.facebook.com/groups/linkmuse/" }
            },
            [_vm._v("facebook")]
          ),
          _vm._v(", либо отправьте письмо на "),
          _c(
            "a",
            {
              staticClass: "page__link page__link_404",
              attrs: { href: "mailto:help@linkmuse.com" }
            },
            [_vm._v("help@linkmuse.com")]
          )
        ]
      )
    ])
  }
]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-4fc08d8b", esExports)
  }
}

/***/ })

});
//# sourceMappingURL=235.build.8ff91b956a5070c8f3f4.js.map