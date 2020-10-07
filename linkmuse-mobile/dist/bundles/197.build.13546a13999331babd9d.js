webpackJsonp([197],{

/***/ 1315:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Program_vue__ = __webpack_require__(1684);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_f83adb70_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Program_vue__ = __webpack_require__(2134);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(2132)
}
var normalizeComponent = __webpack_require__(2)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-f83adb70"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Program_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_f83adb70_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Program_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/views/CineMarket/Program.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-f83adb70", Component.options)
  } else {
    hotAPI.reload("data-v-f83adb70", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 1684:
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
    title: 'Программа'
  },
  data: function data() {
    return {
      activeDay: '25.10',
      days: {
        '25.10': {
          text: '25 Окт'
        },
        '26.10': {
          text: '26 Окт'
        },
        '27.10': {
          text: '27 Окт'
        }
      }
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
              return Promise.all([store.dispatch('cinemarket/getProgram')]);

            case 2:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this);
    }))();
  },

  computed: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_1_vuex__["c" /* mapGetters */])({
    error: 'cinemarket/getProgramError',
    program: 'cinemarket/getProgramData',
    loading: 'cinemarket/getProgramLoading'
  }), {
    programRows: function programRows() {
      if (!this.program) return;

      var res = {};

      this.program.forEach(function (program) {
        var rows = [];

        program.timeFrom.forEach(function (e, i) {
          var item = {
            timeFrom: e,
            text: Object(__WEBPACK_IMPORTED_MODULE_0__utils__["l" /* has */])(program, 'text.' + i) ? program.text[i] : '',
            place: Object(__WEBPACK_IMPORTED_MODULE_0__utils__["l" /* has */])(program, 'place.' + i) ? program.place[i] : '',
            timeTo: Object(__WEBPACK_IMPORTED_MODULE_0__utils__["l" /* has */])(program, 'timeTo.' + i) ? program.timeTo[i] : ''
          };
          rows.push(_extends({}, item, { pitches: item.text.toLowerCase().includes('питчинг') }));
        });

        res[program.date] = rows;
      });

      return res;
    }
  }),
  methods: {
    _handleNavPitches: function _handleNavPitches(val) {
      if (val) this.$router.push({ name: 'cinemarket.pitches' });
    }
  }
});

/***/ }),

/***/ 2132:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(2133);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("d41d1e16", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js?sourceMap!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-f83adb70\",\"scoped\":true,\"hasInlineConfig\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Program.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js?sourceMap!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-f83adb70\",\"scoped\":true,\"hasInlineConfig\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Program.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 2133:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(true);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"Program.vue","sourceRoot":""}]);

// exports


/***/ }),

/***/ 2134:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("div", { staticClass: "cm-m-wrapper-content cm-m-bg-prime cm-m-head" }, [
      _c("div", { staticClass: "cm-wrap-content" }, [
        _c("div", { staticClass: "cm-m-row" }, [
          _c("nav", { staticClass: "cm-m-nav-date center" }, [
            _c(
              "div",
              { staticClass: "cm-m-nav-list-date" },
              [
                _vm._l(_vm.days, function(day, key) {
                  return [
                    _c(
                      "a",
                      {
                        class: [
                          "cm-m-nav-item-date",
                          {
                            active: _vm.activeDay === key,
                            "cm-m-color-prime": _vm.activeDay === key
                          }
                        ],
                        on: {
                          click: function($event) {
                            _vm.activeDay = key
                          }
                        }
                      },
                      [
                        _vm._v(
                          "\n                " +
                            _vm._s(day.text) +
                            "\n              "
                        )
                      ]
                    )
                  ]
                })
              ],
              2
            )
          ])
        ])
      ])
    ]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "cm-m-wrapper-content fh" },
      [
        _vm.loading ? _c("lm-m-loader") : _vm._e(),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "cm-wrap-content" },
          [
            _vm.program
              ? [
                  _vm._l(_vm.program, function(day) {
                    return [
                      _c(
                        "transition",
                        { attrs: { name: "fade", mode: "out-in" } },
                        [
                          day.date === _vm.activeDay
                            ? _c(
                                "div",
                                _vm._l(_vm.programRows[day.date], function(
                                  row
                                ) {
                                  return _c(
                                    "div",
                                    {
                                      staticClass: "cm-m-wrap-program mb_3",
                                      on: {
                                        click: function($event) {
                                          return _vm._handleNavPitches(
                                            row.pitches
                                          )
                                        }
                                      }
                                    },
                                    [
                                      _c(
                                        "div",
                                        {
                                          staticClass:
                                            "cm-m-container-time-program"
                                        },
                                        [
                                          _c(
                                            "div",
                                            {
                                              staticClass: "cm-m-text-h3 mb_0_5"
                                            },
                                            [_vm._v(_vm._s(row.timeFrom))]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "div",
                                            {
                                              staticClass:
                                                "cm-m-text-h3 cm-m-color-gray"
                                            },
                                            [_vm._v(_vm._s(row.timeTo))]
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        {
                                          staticClass:
                                            "cm-m-container-text-program cm-m-bg-second"
                                        },
                                        [
                                          _c(
                                            "div",
                                            {
                                              staticClass:
                                                "cm-m-text-h3 lh-18 mb_0_5 "
                                            },
                                            [
                                              _vm._v(
                                                "\n                    " +
                                                  _vm._s(row.text) +
                                                  "\n                  "
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "div",
                                            {
                                              staticClass:
                                                "cm-m-text-h4 cm-m-color-gray"
                                            },
                                            [
                                              _vm._v(
                                                "\n                    " +
                                                  _vm._s(row.place) +
                                                  "\n                  "
                                              )
                                            ]
                                          )
                                        ]
                                      )
                                    ]
                                  )
                                }),
                                0
                              )
                            : _vm._e()
                        ]
                      )
                    ]
                  })
                ]
              : _vm._e()
          ],
          2
        )
      ],
      1
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
    require("vue-hot-reload-api")      .rerender("data-v-f83adb70", esExports)
  }
}

/***/ })

});
//# sourceMappingURL=197.build.13546a13999331babd9d.js.map