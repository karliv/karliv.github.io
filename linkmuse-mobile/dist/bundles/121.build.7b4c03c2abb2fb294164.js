webpackJsonp([121],{

/***/ 1429:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Edit_vue__ = __webpack_require__(1886);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_112103b3_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Edit_vue__ = __webpack_require__(2676);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(2674)
}
var normalizeComponent = __webpack_require__(2)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-112103b3"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Edit_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_112103b3_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Edit_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/views/User/Profession/Edit.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-112103b3", Component.options)
  } else {
    hotAPI.reload("data-v-112103b3", Component.options)
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

/***/ 1886:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__views_User_Profession_Professions__ = __webpack_require__(1534);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

//
//
//
//





/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'EditProfession',
  asyncData: function asyncData(_ref) {
    var _this = this;

    var store = _ref.store,
        route = _ref.route;
    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var id;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              id = route.params.id;
              _context.next = 3;
              return store.dispatch('user/profession/getSources', Number(id));

            case 3:
              _context.next = 5;
              return store.dispatch('user/profession/getProfessionById', {
                id: Number(id),
                params: { edit: 1 }
              }).catch(function (error) {
                var _error$response = error.response,
                    _error$response$statu = _error$response.status,
                    status = _error$response$statu === undefined ? 500 : _error$response$statu,
                    _error$response$url = _error$response.url,
                    url = _error$response$url === undefined ? null : _error$response$url;

                throw { code: status, message: 'Error edit profession', url: url };
              });

            case 5:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this);
    }))();
  },

  computed: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_1_vuex__["c" /* mapGetters */])({
    role: 'auth/getRole',
    user: 'auth/getAuthUser',
    profile: 'auth/getProfile',
    error: 'user/profession/getProfessionError',
    loading: 'user/profession/getProfessionLoading',
    profession: 'user/profession/getProfessionData'
  }), {
    professionView: function professionView() {
      var profession = this.profession.profession.name;

      return Object.keys(__WEBPACK_IMPORTED_MODULE_2__views_User_Profession_Professions__["a" /* default */]).includes(__WEBPACK_IMPORTED_MODULE_0_lodash___default.a.camelCase(profession)) ? 'profession-' + __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.kebabCase(profession) : 'profession-default';
    }
  })
});

/***/ }),

/***/ 2674:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(2675);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("53a2b9f6", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js?sourceMap!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-112103b3\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Edit.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js?sourceMap!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-112103b3\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Edit.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 2675:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(true);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"Edit.vue","sourceRoot":""}]);

// exports


/***/ }),

/***/ 2676:
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
    require("vue-hot-reload-api")      .rerender("data-v-112103b3", esExports)
  }
}

/***/ })

});
//# sourceMappingURL=121.build.7b4c03c2abb2fb294164.js.map