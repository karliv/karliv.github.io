webpackJsonp([122],{

/***/ 1426:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Create_vue__ = __webpack_require__(1883);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_69e2ad65_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Create_vue__ = __webpack_require__(2667);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(2665)
}
var normalizeComponent = __webpack_require__(2)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-69e2ad65"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Create_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_69e2ad65_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Create_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/views/User/Profession/Create.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-69e2ad65", Component.options)
  } else {
    hotAPI.reload("data-v-69e2ad65", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 1534:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  model: true,
  actor: true,
  leading: true,
  musician: true,
  dancer: true,
  circusArtist: true,
  choreographer: true,
  actorOfMassScenes: true,
  radioHost: true,

  agent: true,
  castingDirector: true,
  brigadierMass: true,

  directorOfPhotography: true,
  gaffer: true,
  operator: true,
  steadicam: true,
  droneOperator: true,

  stageDirector: true,
  filmDirector: true,

  decoratorPlaster: true,
  productionDesigner: true,
  director: true,

  makeupArtist: true,

  dresser: true,
  costumeDesigner: true,

  mounting: true,
  editingDirector: true,
  colorist: true,
  sfxSupervisor: true,
  vfxSupervisor: true,

  photographer: true,
  videographer: true,

  propertyMaster: true,

  soundDirector: true,

  locationManager: true,
  producer: true,
  executiveProducer: true,

  stuntDirector: true,

  screenwriter: true,
  composer: true,

  liveBroadcastDirector: true,
  tvPresenter: true,
  tvHost: true,
  programDirector: true,

  dubbingActor: true,
  announcer: true,

  default: true
});

/***/ }),

/***/ 1883:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__views_User_Profession_Professions__ = __webpack_require__(1534);
function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

//
//
//
//




/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'CreateProfession',
  computed: {
    professionView: function professionView() {
      var profession = this.$route.params.profession;

      return Object.keys(__WEBPACK_IMPORTED_MODULE_1__views_User_Profession_Professions__["a" /* default */]).includes(__WEBPACK_IMPORTED_MODULE_0_lodash___default.a.camelCase(profession)) ? 'profession-' + __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.kebabCase(profession) : 'profession-default';
    }
  },
  asyncData: function asyncData(_ref) {
    var _this = this;

    var store = _ref.store,
        route = _ref.route;
    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var initializedSources;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              initializedSources = Boolean(store.getters['user/profession/getInitializedSources']);

              if (!(initializedSources === false)) {
                _context.next = 4;
                break;
              }

              _context.next = 4;
              return store.dispatch('user/profession/getSources');

            case 4:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this);
    }))();
  }
});

/***/ }),

/***/ 2665:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(2666);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("6d466e38", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js?sourceMap!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-69e2ad65\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Create.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js?sourceMap!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-69e2ad65\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Create.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 2666:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(true);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"Create.vue","sourceRoot":""}]);

// exports


/***/ }),

/***/ 2667:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("router-view", { attrs: { profession: _vm.professionView } })
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-69e2ad65", esExports)
  }
}

/***/ })

});
//# sourceMappingURL=122.build.d1cbf7f1ec431871f848.js.map