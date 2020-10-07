webpackJsonp([201],{

/***/ 1311:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Partners_vue__ = __webpack_require__(1680);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_8c4437d2_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Partners_vue__ = __webpack_require__(2122);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(2120)
}
var normalizeComponent = __webpack_require__(2)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-8c4437d2"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Partners_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_8c4437d2_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Partners_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/views/CineMarket/Partners.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-8c4437d2", Component.options)
  } else {
    hotAPI.reload("data-v-8c4437d2", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 1680:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(27);
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




/* harmony default export */ __webpack_exports__["a"] = ({
  metaInfo: {
    title: 'Партнеры'
  },
  data: function data() {
    return {};
  },
  asyncData: function asyncData(_ref) {
    var _this = this;

    var store = _ref.store,
        route = _ref.route;
    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return Promise.all([store.dispatch('cinemarket/getPartners')]);

            case 2:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this);
    }))();
  },

  computed: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_1_vuex__["c" /* mapGetters */])({
    error: 'cinemarket/getPartnersError',
    partners: 'cinemarket/getPartnersData',
    loading: 'cinemarket/getPartnersLoading'
  }), {
    partnersRows: function partnersRows() {
      var _this2 = this;

      if (!this.partners) return;

      var rows = [];

      this.partners.name.forEach(function (e, i) {
        rows.push({
          name: e,
          text: Object(__WEBPACK_IMPORTED_MODULE_0__utils__["l" /* has */])(_this2.partners, 'text.' + i) && _this2.partners.text[i] ? _this2.partners.text[i] : '',
          photo: Object(__WEBPACK_IMPORTED_MODULE_0__utils__["l" /* has */])(_this2.partners, 'photo.' + i) ? _this2.partners.photo[i] : '',
          link: Object(__WEBPACK_IMPORTED_MODULE_0__utils__["l" /* has */])(_this2.partners, 'photo.' + i) ? _this2.partners.link[i] : ''
        });
      });

      return rows;
    }
  })
});

/***/ }),

/***/ 2120:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(2121);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("1c50d80c", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js?sourceMap!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-8c4437d2\",\"scoped\":true,\"hasInlineConfig\":true}!../../../node_modules/sass-loader/lib/loader.js?indentedSyntax!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Partners.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js?sourceMap!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-8c4437d2\",\"scoped\":true,\"hasInlineConfig\":true}!../../../node_modules/sass-loader/lib/loader.js?indentedSyntax!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Partners.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 2121:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(true);
// imports


// module
exports.push([module.i, "\n.partner_link[data-v-8c4437d2] {\n  color: white;\n}\n", "", {"version":3,"sources":["/home/karliv/work/linkmuse-mobile/src/views/CineMarket/Partners.vue"],"names":[],"mappings":";AAAA;EACE,aAAa;CAAE","file":"Partners.vue","sourcesContent":[".partner_link {\n  color: white; }\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 2122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c(
      "div",
      { staticClass: "cm-m-wrapper-content fh cm-wrap-content mb_6" },
      [
        _vm.partners
          ? _vm._l(_vm.partnersRows, function(partner) {
              return _c("div", { staticClass: "сm-m-wrap-card mb_3" }, [
                _c(
                  "div",
                  { staticClass: "mr_20" },
                  [
                    partner.photo
                      ? [
                          _c(
                            "media",
                            {
                              attrs: {
                                media: _vm.$parent.mediaByUrl(partner.photo),
                                type: "photo",
                                src: partner.photo
                              }
                            },
                            [
                              _c("img", {
                                staticClass:
                                  "сm-m-wrap-photo-card patner-card cm-m-bg-second",
                                attrs: { src: partner.photo, alt: "" }
                              })
                            ]
                          )
                        ]
                      : [
                          _c("img", {
                            staticClass:
                              "сm-m-wrap-photo-card patner-card cm-m-bg-second",
                            attrs: {
                              src: "/dist/img/icons/potential_logo_partner.png",
                              alt: ""
                            }
                          })
                        ]
                  ],
                  2
                ),
                _vm._v(" "),
                _c("div", { staticClass: "cm-m-wrap-text-card" }, [
                  _c("div", { staticClass: "cm-m-text-h3 mb_1" }, [
                    _vm._v(
                      "\n            " + _vm._s(partner.name) + "\n          "
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "cm-m-text-h4" }, [
                    _vm._v(
                      "\n            " + _vm._s(partner.text) + "\n            "
                    ),
                    _c("br"),
                    _vm._v(" "),
                    partner.link
                      ? _c(
                          "a",
                          {
                            staticClass: "partner_link",
                            attrs: { href: partner.link }
                          },
                          [_vm._v(_vm._s(partner.link))]
                        )
                      : _vm._e()
                  ])
                ])
              ])
            })
          : _vm._e()
      ],
      2
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
    require("vue-hot-reload-api")      .rerender("data-v-8c4437d2", esExports)
  }
}

/***/ })

});
//# sourceMappingURL=201.build.13546a13999331babd9d.js.map