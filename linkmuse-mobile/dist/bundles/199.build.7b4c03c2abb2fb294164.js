webpackJsonp([199],{

/***/ 1313:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Pitches_vue__ = __webpack_require__(1682);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2948aeb2_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Pitches_vue__ = __webpack_require__(2128);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(2126)
}
var normalizeComponent = __webpack_require__(2)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-2948aeb2"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Pitches_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2948aeb2_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Pitches_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/views/CineMarket/Pitches.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2948aeb2", Component.options)
  } else {
    hotAPI.reload("data-v-2948aeb2", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 1682:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mint_ui__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mint_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_mint_ui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vuex__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vuex_map_fields__ = __webpack_require__(22);
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
//
//
//
//
//
//






var interval = null;

var _createHelpers = Object(__WEBPACK_IMPORTED_MODULE_3_vuex_map_fields__["a" /* createHelpers */])({
  getterType: 'cinemarket/getField',
  mutationType: 'cinemarket/updateField'
}),
    mapFields = _createHelpers.mapFields;

/* harmony default export */ __webpack_exports__["a"] = ({
  metaInfo: {
    title: 'Питчинги'
  },
  data: function data() {
    return {
      has: __WEBPACK_IMPORTED_MODULE_0__utils__["l" /* has */],
      title: 'Питчинги'
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
              return Promise.all([store.dispatch('cinemarket/getPitchesCategories'), store.dispatch('cinemarket/getPitches')]);

            case 2:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this);
    }))();
  },
  mounted: function mounted() {
    var _this2 = this;

    interval = setInterval(function () {
      _this2.$store.dispatch('cinemarket/getPitches');
    }, 1000 * 60);
  },
  beforeDestroy: function beforeDestroy() {
    clearInterval(interval);
  },

  computed: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_2_vuex__["c" /* mapGetters */])({
    isAuthorized: 'auth/isAuthorized',
    error: 'cinemarket/getPitchesError',
    pitches: 'cinemarket/getPitchesData',
    loading: 'cinemarket/getPitchesLoading',
    errorCategories: 'cinemarket/getPitchesCategoriesError',
    pitchesCategories: 'cinemarket/getPitchesCategoriesData',
    loadingCategories: 'cinemarket/getPitchesCategoriesLoading'
  }), mapFields({
    category: 'pitches.categories.active'
  }), {
    activeCategory: function activeCategory() {
      return this.category ? this.category : this.pitchesCategories.length ? this.pitchesCategories[0] : null;
    },
    pitchesFromCategories: function pitchesFromCategories() {
      if (!this.pitches.length) return;

      var result = {};

      this.pitchesCategories.forEach(function (category) {
        result[category] = [];
      });

      this.pitches.forEach(function (item) {
        return result[item.category].push(item);
      });

      return result;
    },
    voteInCategories: function voteInCategories() {
      if (!this.pitches.length) return;

      var result = {};

      for (var cat in this.pitchesFromCategories) {
        if (this.pitchesFromCategories[cat].find(function (e) {
          return e.voted;
        })) result[cat] = true;
      }

      return result;
    }
  }),
  methods: {
    _handleVote: function _handleVote(name) {
      var _this3 = this;

      this.$store.dispatch('cinemarket/votePitch', name).then(function () {
        console.log(_this3);
        Object(__WEBPACK_IMPORTED_MODULE_1_mint_ui__["Toast"])({ message: 'Успешно', iconClass: 'mintui mintui-success' });
      }).catch(function (err) {
        console.log(_this3);
        Object(__WEBPACK_IMPORTED_MODULE_1_mint_ui__["Toast"])({ message: 'Ошибка', iconClass: 'mintui mintui-field-error' });
      });
    }
  }
});

/***/ }),

/***/ 2126:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(2127);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("37b1c406", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js?sourceMap!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-2948aeb2\",\"scoped\":true,\"hasInlineConfig\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Pitches.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js?sourceMap!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-2948aeb2\",\"scoped\":true,\"hasInlineConfig\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Pitches.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 2127:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(true);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"Pitches.vue","sourceRoot":""}]);

// exports


/***/ }),

/***/ 2128:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c(
      "div",
      {
        staticClass:
          "cm-m-wrapper-content cm-m-bg-prime cm-m-head cm-wrap-content"
      },
      [
        _c("div", { staticClass: "cm-m-row" }, [
          _c("nav", { staticClass: "cm-m-nav-date" }, [
            _c(
              "div",
              { staticClass: "cm-m-nav-list-date" },
              [
                _vm._l(_vm.pitchesCategories, function(cat) {
                  return [
                    _c(
                      "a",
                      {
                        class: [
                          "cm-m-nav-item-date",
                          {
                            active: _vm.activeCategory === cat,
                            "cm-m-color-prime": _vm.activeCategory === cat
                          }
                        ],
                        on: {
                          click: function($event) {
                            _vm.category = cat
                          }
                        }
                      },
                      [
                        _vm._v(
                          "\n              " + _vm._s(cat) + "\n            "
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
      ]
    ),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "cm-m-wrapper-content fh cm-wrap-content" },
      [
        _vm.loading ? _c("lm-m-loader") : _vm._e(),
        _vm._v(" "),
        _vm.pitchesCategories && _vm.pitchesFromCategories
          ? [
              _vm._l(_vm.pitchesCategories, function(cat) {
                return [
                  _c(
                    "transition",
                    { attrs: { name: "list-fade", mode: "out-in" } },
                    [
                      _vm.activeCategory === cat
                        ? _c(
                            "div",
                            _vm._l(_vm.pitchesFromCategories[cat], function(
                              pitch,
                              i
                            ) {
                              return _c(
                                "div",
                                {
                                  staticClass: "cm-m-web-series mb_3",
                                  class: { voted: pitch.voted }
                                },
                                [
                                  _c(
                                    "router-link",
                                    {
                                      class: [
                                        "cm-m-wrap-series",
                                        {
                                          voted:
                                            pitch.voted ||
                                            _vm.has(_vm.voteInCategories, cat)
                                        }
                                      ],
                                      attrs: {
                                        tag: "div",
                                        to: {
                                          name: "cinemarket.pitch",
                                          params: { slug: pitch.slug }
                                        }
                                      }
                                    },
                                    [
                                      _c("div", { staticClass: "cm-m-photo" }, [
                                        _c("img", {
                                          staticClass: "cm-m-series",
                                          attrs: { src: pitch.photo }
                                        })
                                      ]),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        {
                                          staticClass: "cm-m-wrap-text-series"
                                        },
                                        [
                                          _c(
                                            "div",
                                            {
                                              staticClass: "cm-m-h2-text-series"
                                            },
                                            [_vm._v(_vm._s(pitch.name))]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "div",
                                            {
                                              staticClass: "cm-m-h3-text-series"
                                            },
                                            [_vm._v(_vm._s(pitch.member))]
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        {
                                          staticClass: "cm-m-wrap-icon-series"
                                        },
                                        [
                                          _c(
                                            "div",
                                            {
                                              class: [
                                                "cm-m-icon-star-series",
                                                { active: !i }
                                              ]
                                            },
                                            [
                                              _c(
                                                "span",
                                                {
                                                  staticClass:
                                                    "cm-m-numbers-star"
                                                },
                                                [_vm._v(_vm._s(i + 1))]
                                              )
                                            ]
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      pitch.voted
                                        ? _c(
                                            "div",
                                            {
                                              staticClass:
                                                "cm-m-wrap-choice cm-m-bg-second"
                                            },
                                            [
                                              _c(
                                                "span",
                                                { staticClass: "cm-m-choice" },
                                                [_vm._v("Ваш выбор")]
                                              )
                                            ]
                                          )
                                        : _vm._e()
                                    ]
                                  ),
                                  _vm._v(" "),
                                  !pitch.voted &&
                                  pitch.ready &&
                                    String(pitch.ready).toLowerCase() ===
                                      "да" &&
                                  !_vm.has(_vm.voteInCategories, cat) &&
                                  _vm.isAuthorized
                                    ? _c(
                                        "div",
                                        {
                                          staticClass:
                                            "cm-m-wrap-content cm-m-bg-second",
                                          on: {
                                            click: function($event) {
                                              return _vm._handleVote(pitch.name)
                                            }
                                          }
                                        },
                                        [
                                          pitch.loading
                                            ? _c("lm-m-loader", {
                                                attrs: { color: "#ffffff" }
                                              })
                                            : _vm._e(),
                                          _vm._v(" "),
                                          !pitch.loading
                                            ? [
                                                _c(
                                                  "button",
                                                  { staticClass: "cm-m-btn" },
                                                  [_vm._v("Проголосовать")]
                                                )
                                              ]
                                            : _vm._e()
                                        ],
                                        2
                                      )
                                    : _vm._e()
                                ],
                                1
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
  ])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-2948aeb2", esExports)
  }
}

/***/ })

});
//# sourceMappingURL=199.build.7b4c03c2abb2fb294164.js.map