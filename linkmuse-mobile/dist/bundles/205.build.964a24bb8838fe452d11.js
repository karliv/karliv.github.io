webpackJsonp([205],{

/***/ 1307:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Guest_vue__ = __webpack_require__(1676);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_1f469ac8_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Guest_vue__ = __webpack_require__(2110);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(2108)
}
var normalizeComponent = __webpack_require__(2)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-1f469ac8"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Guest_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_1f469ac8_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Guest_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/views/CineMarket/Guest.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1f469ac8", Component.options)
  } else {
    hotAPI.reload("data-v-1f469ac8", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 1676:
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
//
//
//
//
//




/* harmony default export */ __webpack_exports__["a"] = ({
  metaInfo: {
    title: 'Гости'
  },
  data: function data() {
    return {
      types: ['Жюри', 'Спикеры', 'Специальные гости'],
      textOfType: ['Один из жюри', 'Один из спикеров', 'Один из специальных гостей']
    };
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
              return Promise.all([store.dispatch('cinemarket/getGuests')]);

            case 2:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this);
    }))();
  },

  computed: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_1_vuex__["c" /* mapGetters */])({
    error: 'cinemarket/getGuestsError',
    guests: 'cinemarket/getGuestsData',
    loading: 'cinemarket/getGuestsLoading'
  }), {
    guestsRows: function guestsRows() {
      var _this2 = this;

      if (!this.guests) return;

      var res = [];

      this.guests.forEach(function (guests, k) {
        var rows = [];

        guests.name.forEach(function (e, i) {
          rows.push({
            name: e,
            text: Object(__WEBPACK_IMPORTED_MODULE_0__utils__["l" /* has */])(guests, 'text.' + i) && guests.text[i] ? guests.text[i] : _this2.textOfType[k],
            logo: Object(__WEBPACK_IMPORTED_MODULE_0__utils__["l" /* has */])(guests, 'logo.' + i) ? guests.logo[i] : ''
          });
        });

        res.push(rows);
      });

      return res;
    }
  })
});

/***/ }),

/***/ 2108:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(2109);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("2dcf3a5c", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js?sourceMap!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1f469ac8\",\"scoped\":true,\"hasInlineConfig\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Guest.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js?sourceMap!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1f469ac8\",\"scoped\":true,\"hasInlineConfig\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Guest.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 2109:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(true);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"Guest.vue","sourceRoot":""}]);

// exports


/***/ }),

/***/ 2110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("div", { staticClass: "cm-m-wrapper-content cm-m-bg-prime cm-m-head" }, [
      _c(
        "div",
        { staticClass: "cm-m-wrapper-content cm-wrap-content fh" },
        [
          _vm.guests
            ? [
                _vm._l(_vm.types, function(type, key) {
                  return [
                    _c("div", { staticClass: "cm-m-text-h2 mb_4" }, [
                      _vm._v("\n            " + _vm._s(type) + "\n          ")
                    ]),
                    _vm._v(" "),
                    _vm._l(_vm.guestsRows[key], function(guest) {
                      return _c("div", { staticClass: "сm-m-wrap-card mb_3" }, [
                        _c(
                          "div",
                          { staticClass: "mr_20" },
                          [
                            guest.logo
                              ? [
                                  _c(
                                    "media",
                                    {
                                      attrs: {
                                        media: _vm.$parent.mediaByUrl(
                                          guest.logo
                                        ),
                                        type: "photo",
                                        src: guest.logo
                                      }
                                    },
                                    [
                                      _c("img", {
                                        staticClass:
                                          "сm-m-wrap-photo-card cm-m-bg-second",
                                        attrs: { src: guest.logo, alt: "" }
                                      })
                                    ]
                                  )
                                ]
                              : [
                                  _c("img", {
                                    staticClass:
                                      "сm-m-wrap-photo-card cm-m-bg-second",
                                    attrs: { src: guest.logo, alt: "" }
                                  })
                                ]
                          ],
                          2
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "cm-m-wrap-text-card" }, [
                          _c("div", { staticClass: "cm-m-text-h3 mb_0_5" }, [
                            _vm._v(
                              "\n                " +
                                _vm._s(guest.name) +
                                "\n              "
                            )
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "cm-m-text-h4" }, [
                            _vm._v(
                              "\n                " +
                                _vm._s(guest.text) +
                                "\n              "
                            )
                          ])
                        ])
                      ])
                    })
                  ]
                })
              ]
            : _vm._e()
        ],
        2
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-1f469ac8", esExports)
  }
}

/***/ })

});
//# sourceMappingURL=205.build.964a24bb8838fe452d11.js.map