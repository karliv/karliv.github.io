webpackJsonp([200],{

/***/ 1312:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Pitch_vue__ = __webpack_require__(1681);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_45bd5404_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Pitch_vue__ = __webpack_require__(2125);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(2123)
}
var normalizeComponent = __webpack_require__(2)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-45bd5404"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Pitch_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_45bd5404_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Pitch_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/views/CineMarket/Pitch.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-45bd5404", Component.options)
  } else {
    hotAPI.reload("data-v-45bd5404", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 1681:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mint_ui__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mint_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_mint_ui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vuex__ = __webpack_require__(27);
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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

/* harmony default export */ __webpack_exports__["a"] = ({
  metaInfo: function metaInfo() {
    return {
      title: this.title
    };
  },
  data: function data() {
    return {
      has: __WEBPACK_IMPORTED_MODULE_0__utils__["l" /* has */],
      category: null
    };
  },
  mounted: function mounted() {
    var _this = this;

    interval = setInterval(function () {
      _this.$store.dispatch('cinemarket/getPitches');
    }, 1000 * 60);
  },
  beforeDestroy: function beforeDestroy() {
    clearInterval(interval);
  },
  asyncData: function asyncData(_ref) {
    var _this2 = this;

    var store = _ref.store,
        route = _ref.route;
    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return Promise.all([store.dispatch('cinemarket/getPitchesCategories'), store.dispatch('cinemarket/getPitches'), store.dispatch('cinemarket/getTeam')]);

            case 2:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this2);
    }))();
  },

  computed: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_2_vuex__["c" /* mapGetters */])({
    team: 'cinemarket/getTeamData',
    isAuthorized: 'auth/isAuthorized',
    error: 'cinemarket/getPitchesError',
    pitches: 'cinemarket/getPitchesData',
    loading: 'cinemarket/getPitchesLoading',
    errorCategories: 'cinemarket/getPitchesCategoriesError',
    pitchesCategories: 'cinemarket/getPitchesCategoriesData',
    loadingCategories: 'cinemarket/getPitchesCategoriesLoading'
  }), {
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
    },
    pitch: function pitch() {
      if (!this.pitches.length) return;

      var pitch = {};
      var slug = this.$route.params.slug;
      for (var cat in this.pitchesFromCategories) {
        this.pitchesFromCategories[cat].forEach(function (e, i) {
          if (e.slug === slug) {
            pitch = _extends({}, e, { i: i });

            return pitch;
          }
        });
      }

      return pitch;
    },
    title: function title() {
      if (!this.pitch) return;

      var category = this.pitch ? this.pitch.category : '';

      this.$parent._handleUpdateTitle(category);

      return category;
    },
    teamPitch: function teamPitch() {
      var _this3 = this;

      if (!this.team.length || !this.pitch) return;

      return this.team.filter(function (e) {
        return e.pitch === _this3.pitch.name;
      });
    }
  }),
  methods: {
    _handleVote: function _handleVote(name) {
      var _this4 = this;

      this.$store.dispatch('cinemarket/votePitch', name).then(function () {
        console.log(_this4);
        Object(__WEBPACK_IMPORTED_MODULE_1_mint_ui__["Toast"])({ message: 'Успешно', iconClass: 'mintui mintui-success' });
      }).catch(function (err) {
        console.log(_this4);
        Object(__WEBPACK_IMPORTED_MODULE_1_mint_ui__["Toast"])({ message: 'Ошибка', iconClass: 'mintui mintui-field-error' });
      });
    }
  }
});

/***/ }),

/***/ 2123:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(2124);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("5628c3a4", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js?sourceMap!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-45bd5404\",\"scoped\":true,\"hasInlineConfig\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Pitch.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js?sourceMap!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-45bd5404\",\"scoped\":true,\"hasInlineConfig\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Pitch.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 2124:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(true);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"Pitch.vue","sourceRoot":""}]);

// exports


/***/ }),

/***/ 2125:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c(
      "div",
      { staticClass: "cm-m-wrapper-content cm-wrap-content fh" },
      [
        _vm.loading ? _c("lm-m-loader") : _vm._e(),
        _vm._v(" "),
        _vm.pitch
          ? _c("div", { staticClass: "cm-m-web-series mb_6" }, [
              _c(
                "div",
                { class: ["cm-m-wrap-series", { voted: _vm.pitch.voted }] },
                [
                  _vm.pitch.photo
                    ? [
                        _c(
                          "media",
                          {
                            staticClass: "cm-m-photo",
                            attrs: {
                              media: _vm.$parent.mediaByUrl(_vm.pitch.photo),
                              type: "photo",
                              src: _vm.pitch.photo
                            }
                          },
                          [
                            _c("img", {
                              staticClass: "cm-m-series",
                              attrs: { src: _vm.pitch.photo }
                            })
                          ]
                        )
                      ]
                    : [
                        _c("div", { staticClass: "cm-m-photo" }, [
                          _c("img", {
                            staticClass: "cm-m-series",
                            attrs: { src: _vm.pitch.photo }
                          })
                        ])
                      ],
                  _vm._v(" "),
                  _c("div", { staticClass: "cm-m-wrap-text-series" }, [
                    _c("div", { staticClass: "cm-m-h2-text-series" }, [
                      _vm._v(_vm._s(_vm.pitch.name))
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "cm-m-h3-text-series" }, [
                      _vm._v(_vm._s(_vm.pitch.member))
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "cm-m-wrap-icon-series" }, [
                    _c(
                      "div",
                      {
                        class: [
                          "cm-m-icon-star-series",
                          { active: !_vm.pitch.i }
                        ]
                      },
                      [
                        _c("span", { staticClass: "cm-m-numbers-star" }, [
                          _vm._v(_vm._s(_vm.pitch.i + 1))
                        ])
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _vm.pitch.voted
                    ? _c(
                        "div",
                        { staticClass: "cm-m-wrap-choice cm-m-bg-second" },
                        [
                          _c("span", { staticClass: "cm-m-choice" }, [
                            _vm._v("Ваш выбор")
                          ])
                        ]
                      )
                    : _vm._e()
                ],
                2
              )
            ])
          : _vm._e(),
        _vm._v(" "),
        _c("div", { staticClass: "cm-m-pitch-wrap" }, [
          _vm.pitch.format
            ? _c("div", { staticClass: "cm-m-section mb_4" }, [
                _c("div", { staticClass: "cm-m-text-h4 mb_0_5" }, [
                  _vm._v("\n          Формат\n        ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "cm-m-text-h3" }, [
                  _vm._v(
                    "\n          " + _vm._s(_vm.pitch.format) + "\n        "
                  )
                ])
              ])
            : _vm._e(),
          _vm._v(" "),
          _vm.pitch.genre
            ? _c("div", { staticClass: "cm-m-section mb_4" }, [
                _c("div", { staticClass: "cm-m-text-h4 mb_0_5" }, [
                  _vm._v("\n          Жанр\n        ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "cm-m-text-h3" }, [
                  _vm._v(
                    "\n          " + _vm._s(_vm.pitch.genre) + "\n        "
                  )
                ])
              ])
            : _vm._e(),
          _vm._v(" "),
          _vm.pitch.angle
            ? _c("div", { staticClass: "cm-m-section mb_4" }, [
                _c("div", { staticClass: "cm-m-text-h4 mb_0_5" }, [
                  _vm._v("\n          Теглайн\n        ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "cm-m-text-h3" }, [
                  _vm._v(
                    "\n          " + _vm._s(_vm.pitch.angle) + "\n        "
                  )
                ])
              ])
            : _vm._e(),
          _vm._v(" "),
          _vm.pitch.description
            ? _c("div", { staticClass: "cm-m-section mb_4" }, [
                _c("div", { staticClass: "cm-m-text-h4 mb_0_5" }, [
                  _vm._v("\n          Описание\n        ")
                ]),
                _vm._v(" "),
                _c("div", {
                  staticClass: "cm-m-text-h3",
                  domProps: {
                    innerHTML: _vm._s(
                      _vm.$options.filters.nl2br(_vm.pitch.description)
                    )
                  }
                })
              ])
            : _vm._e(),
          _vm._v(" "),
          _vm.teamPitch
            ? _c(
                "div",
                { staticClass: "cm-m-pitch-team-wrap" },
                [
                  _c(
                    "div",
                    { staticClass: "cm-m-text-h2 mb_4 cm-m-color-prime" },
                    [_vm._v("\n          Комманда\n        ")]
                  ),
                  _vm._v(" "),
                  _vm._l(_vm.teamPitch, function(item) {
                    return _c("div", { staticClass: "сm-m-wrap-card mb_3" }, [
                      _c(
                        "div",
                        { staticClass: "mr_20" },
                        [
                          item.photo
                            ? [
                                _c(
                                  "media",
                                  {
                                    attrs: {
                                      media: _vm.$parent.mediaByUrl(item.photo),
                                      type: "photo",
                                      src: item.photo
                                    }
                                  },
                                  [
                                    _c("img", {
                                      staticClass:
                                        "сm-m-wrap-photo-card cm-m-bg-second",
                                      attrs: { src: item.photo, alt: "" }
                                    })
                                  ]
                                )
                              ]
                            : [
                                _c("img", {
                                  staticClass:
                                    "сm-m-wrap-photo-card cm-m-bg-second",
                                  attrs: { src: item.photo, alt: "" }
                                })
                              ]
                        ],
                        2
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "cm-m-wrap-text-card" },
                        [
                          _c("div", { staticClass: "cm-m-text-h3 mb_1" }, [
                            _vm._v(
                              "\n              " +
                                _vm._s(item.name) +
                                "\n            "
                            )
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "cm-m-text-h4 mb_4" }, [
                            _vm._v(
                              "\n              " +
                                _vm._s(item.profession) +
                                "\n            "
                            )
                          ]),
                          _vm._v(" "),
                          item.birth
                            ? [
                                _c(
                                  "div",
                                  { staticClass: "cm-m-text-h4 mb_1" },
                                  [
                                    _vm._v(
                                      "\n                Родился\n              "
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  { staticClass: "cm-m-text-h3 mb_4" },
                                  [
                                    _vm._v(
                                      "\n                " +
                                        _vm._s(
                                          _vm._f("moment")(
                                            [item.birth, "DD.MM.YYYY"],
                                            "DD MMMM Y"
                                          )
                                        ) +
                                        " г.\n              "
                                    )
                                  ]
                                )
                              ]
                            : _vm._e(),
                          _vm._v(" "),
                          item.films
                            ? [
                                _c(
                                  "div",
                                  { staticClass: "cm-m-text-h4 mb_1" },
                                  [
                                    _vm._v(
                                      "\n                Фильмография\n              "
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _c("div", {
                                  staticClass: "cm-m-text-h3 mb_4",
                                  domProps: {
                                    innerHTML: _vm._s(
                                      _vm.$options.filters.nl2br(item.films)
                                    )
                                  }
                                })
                              ]
                            : _vm._e()
                        ],
                        2
                      )
                    ])
                  })
                ],
                2
              )
            : _vm._e(),
          _vm._v(" "),
          !_vm.pitch.voted &&
          _vm.pitch.ready && String(_vm.pitch.ready).toLowerCase() === "да" &&
          !_vm.has(_vm.voteInCategories, _vm.pitch.category) &&
          _vm.isAuthorized
            ? _c(
                "div",
                {
                  staticClass: "cm-m-wrap-content cm-m-vote-btn cm-m-bg-second",
                  on: {
                    click: function($event) {
                      return _vm._handleVote(_vm.pitch.name)
                    }
                  }
                },
                [
                  _vm.pitch.loading
                    ? _c("lm-m-loader", { attrs: { color: "#fff" } })
                    : _vm._e(),
                  _vm._v(" "),
                  !_vm.pitch.loading
                    ? [
                        _c("button", { staticClass: "cm-m-btn" }, [
                          _vm._v("Проголосовать")
                        ])
                      ]
                    : _vm._e()
                ],
                2
              )
            : _vm._e()
        ])
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
    require("vue-hot-reload-api")      .rerender("data-v-45bd5404", esExports)
  }
}

/***/ })

});
//# sourceMappingURL=200.build.5e187d9b5f6bde074eb4.js.map