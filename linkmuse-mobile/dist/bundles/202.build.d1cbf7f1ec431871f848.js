webpackJsonp([202],{

/***/ 1310:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Organizer_vue__ = __webpack_require__(1679);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7d5e831a_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Organizer_vue__ = __webpack_require__(2119);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(2117)
}
var normalizeComponent = __webpack_require__(2)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-7d5e831a"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Organizer_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7d5e831a_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Organizer_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/views/CineMarket/Organizer.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7d5e831a", Component.options)
  } else {
    hotAPI.reload("data-v-7d5e831a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 1679:
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    title: 'Организатор'
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
              return Promise.all([store.dispatch('cinemarket/getOrganization')]);

            case 2:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this);
    }))();
  },

  computed: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_1_vuex__["c" /* mapGetters */])({
    error: 'cinemarket/getOrganizationError',
    organization: 'cinemarket/getOrganizationData',
    loading: 'cinemarket/getOrganizationLoading'
  }), {
    description: function description() {
      if (!this.organization) return 'Кино.Платформа Potential с 2014 года поддерживает начинающих кинематографистов<br><br>За 5 лет работы мы реализовали 11 кинопроектов, провели более 10 конкурсов, вычитали почти 3000\n' + '              сценариев и организовали около 70 профессиональных и зрительских мероприятий';

      return this.organization.description.replace(/\r?\n/g, '<br>');
    },
    team: function team() {
      if (!this.organization) return;

      var team = this.organization.team;
      var rows = [];

      team.name.forEach(function (e, i) {
        rows.push({
          name: e,
          text: Object(__WEBPACK_IMPORTED_MODULE_0__utils__["l" /* has */])(team, 'text.' + i) && team.text[i] ? team.text[i] : '',
          photo: Object(__WEBPACK_IMPORTED_MODULE_0__utils__["l" /* has */])(team, 'photo.' + i) ? team.photo[i] : ''
        });
      });

      return rows;
    }
  })
});

/***/ }),

/***/ 2117:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(2118);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("077922c6", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js?sourceMap!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-7d5e831a\",\"scoped\":true,\"hasInlineConfig\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Organizer.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js?sourceMap!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-7d5e831a\",\"scoped\":true,\"hasInlineConfig\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Organizer.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 2118:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(true);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"Organizer.vue","sourceRoot":""}]);

// exports


/***/ }),

/***/ 2119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("div", { staticClass: "cm-m-wrapper-content fh mb_6" }, [
      _c("div", { staticClass: "cm-wrap-content" }, [
        _vm._m(0),
        _vm._v(" "),
        _c("div", { staticClass: "сm-m-wrap-card mb_6" }, [
          _c("div", { staticClass: "cm-m-wrap-text-card" }, [
            _c("div", {
              staticClass: "cm-m-text-h3",
              domProps: { innerHTML: _vm._s(_vm.description) }
            })
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "cm-m-text-h2 mb_4" }, [
          _vm._v("\n        Команда\n      ")
        ]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "mb_6" },
          [
            _vm.team
              ? _vm._l(_vm.team, function(item) {
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
                    _c("div", { staticClass: "cm-m-wrap-text-card" }, [
                      _c("div", { staticClass: "cm-m-text-h3 mb_1" }, [
                        _vm._v(
                          "\n                " +
                            _vm._s(item.name) +
                            "\n              "
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "cm-m-text-h4" }, [
                        _vm._v(
                          "\n                " +
                            _vm._s(item.text) +
                            "\n              "
                        )
                      ])
                    ])
                  ])
                })
              : _vm._e()
          ],
          2
        ),
        _vm._v(" "),
        _c("div", { staticClass: "cm-m-text-h2 mb_4" }, [
          _vm._v("\n        Направления\n      ")
        ]),
        _vm._v(" "),
        _vm._m(1),
        _vm._v(" "),
        _vm._m(2),
        _vm._v(" "),
        _vm._m(3),
        _vm._v(" "),
        _vm._m(4)
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "cm-m-banner mb_4" }, [
      _c("img", {
        staticClass: "cm-m-banner-img",
        attrs: { src: "/dist/img/icons/svg/potential_logo.svg", alt: "" }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "a",
      {
        staticClass: "cm-m-wrap-section",
        attrs: {
          target: "_blank",
          href: "https://potential-platform.com/communication"
        }
      },
      [
        _c("div", { staticClass: "cm-list-item cm-m-bg-second" }, [
          _c("div", { staticClass: "cm-m-text-h3" }, [
            _vm._v("\n            Образовательные мероприятия\n          ")
          ])
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "a",
      {
        staticClass: "cm-m-wrap-section",
        attrs: {
          target: "_blank",
          href: "https://potential-platform.com/contest-all"
        }
      },
      [
        _c("div", { staticClass: "cm-list-item cm-m-bg-second" }, [
          _c("div", { staticClass: "cm-m-text-h3" }, [
            _vm._v("\n            Ежегодные конкурсы\n          ")
          ])
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "a",
      {
        staticClass: "cm-m-wrap-section",
        attrs: {
          target: "_blank",
          href: "https://potential-platform.com/authors"
        }
      },
      [
        _c("div", { staticClass: "cm-list-item cm-m-bg-second" }, [
          _c("div", { staticClass: "cm-m-text-h3" }, [
            _vm._v("\n            Поиск и продажа сценариев\n          ")
          ])
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "a",
      {
        staticClass: "cm-m-wrap-section bb_none",
        attrs: {
          target: "_blank",
          href: "https://potential-platform.com/production-center"
        }
      },
      [
        _c("div", { staticClass: "cm-list-item cm-m-bg-second" }, [
          _c("div", { staticClass: "cm-m-text-h3" }, [
            _vm._v("\n            Съемки кино\n          ")
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
    require("vue-hot-reload-api")      .rerender("data-v-7d5e831a", esExports)
  }
}

/***/ })

});
//# sourceMappingURL=202.build.d1cbf7f1ec431871f848.js.map