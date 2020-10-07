webpackJsonp([63],{

/***/ 1205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_default_vue__ = __webpack_require__(1796);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_d9e5169e_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_default_vue__ = __webpack_require__(2450);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(2448)
}
var normalizeComponent = __webpack_require__(2)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-d9e5169e"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_default_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_d9e5169e_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_default_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/views/User/Company/Companies/default.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-d9e5169e", Component.options)
  } else {
    hotAPI.reload("data-v-d9e5169e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 1487:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mint_ui__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mint_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_mint_ui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils__ = __webpack_require__(6);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };





/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      has: __WEBPACK_IMPORTED_MODULE_2__utils__["l" /* has */],
      loading: false,
      normalizeDotsToArrow: __WEBPACK_IMPORTED_MODULE_2__utils__["s" /* normalizeDotsToArrow */]
    };
  },

  computed: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["c" /* mapGetters */])({
    user: 'auth/getAuthUser',
    isAuthorized: 'auth/isAuthorized',
    isRegistered: 'auth/isRegistered',
    sources: 'user/company/getSources',
    company: 'user/company/getCompanyData'
  }), {
    id: function id() {
      var id = this.$route.params.id;

      return id || null;
    },
    title: function title() {
      return this.edit ? 'Редактировать компанию' : 'Новая компания';
    },
    isPublished: function isPublished() {
      return this.company ? Boolean(this.company.isPublished) : false;
    }
  }),
  created: function created() {
    if (this.edit) {
      var anketa = this.company.anketa;

      Object.assign(this.fields, Object(__WEBPACK_IMPORTED_MODULE_2__utils__["h" /* flatten */])(anketa, { safe: true }));
    }
  },

  methods: {
    _handleClickPreviousPage: function _handleClickPreviousPage() {
      if (window.history.length > 2) {
        this.$router.go(-1);
      } else this.$router.push({ name: 'users.companies.index' });
    },

    /**
     * Validate all fields on current transition
     * @returns {Promise<any>}
     * @private
     */
    _handleValidateFields: function _handleValidateFields() {
      var _this = this;

      return new Promise(function (resolve, reject) {
        _this.$validator.validateAll().then(function (result) {
          if (result) {
            resolve(result);
          } else reject && reject();
        });
      });
    },
    _handleClickActionCompany: function _handleClickActionCompany() {
      if (this.edit) {
        this._handleEditedCompany();
      } else this._handleCreatedCompany();
    },
    _handleCreatedCompany: function _handleCreatedCompany() {
      var _this2 = this;

      this._handleValidateFields().then(function () {
        _this2._createCompany().then(function (profession) {
          var id = profession.id;

          _this2.$router.push({ name: 'users.companies.show', params: { id: id } });
          Object(__WEBPACK_IMPORTED_MODULE_1_mint_ui__["Toast"])({ message: 'Компания успешно создана.', iconClass: 'mintui mintui-success' });
        }).catch(function () {
          return _this2._scrollToErrorFields();
        });
      }).catch(function () {
        return _this2._scrollToErrorFields();
      });
    },
    _createCompany: function _createCompany() {
      var _this3 = this;

      return new Promise(function (resolve, reject) {
        _this3.loading = true;
        __WEBPACK_IMPORTED_MODULE_1_mint_ui__["Indicator"].open();

        var companyName = _this3.companyName;

        var data = _this3._.cloneDeep(_this3.fields);

        _this3.$api.post('api/v2/users/companies', { companyName: companyName, 'anketa': _extends({}, data) }).then(function (response) {
          var data = response.data.data;


          __WEBPACK_IMPORTED_MODULE_1_mint_ui__["Indicator"].close();
          _this3.loading = false;
          _this3.$gtm.trackEvent({ event: 'add_company' });
          resolve && resolve(data);
        }, function (error) {
          var _error$response = error.response,
              data = _error$response.data,
              status = _error$response.status;


          __WEBPACK_IMPORTED_MODULE_1_mint_ui__["Indicator"].close();
          _this3.loading = false;
          Object(__WEBPACK_IMPORTED_MODULE_1_mint_ui__["Toast"])({ message: 'Произошла ошибка при создании компании', iconClass: 'mintui mintui-field-error' });

          reject && reject();

          if (status === 422) {
            var errors = data.errors;

            Object.keys(errors).forEach(function (key) {
              return _this3.$validator.errors.add({ field: key.replace('anketa.', ''), msg: errors[key].join(', ') });
            });
          } else throw new Error('Error create company.');
        });
      });
    },
    _handleEditedCompany: function _handleEditedCompany() {
      var _this4 = this;

      this._handleValidateFields().then(function () {
        _this4._editCompany().then(function (profession) {
          var id = profession.id;

          _this4.$router.push({ name: 'users.companies.show', params: { id: id } });
          Object(__WEBPACK_IMPORTED_MODULE_1_mint_ui__["Toast"])({ message: 'Компания успешно отредактирована.', iconClass: 'mintui mintui-success' });
        }).catch(function () {
          return _this4._scrollToErrorFields();
        });
      }).catch(function () {
        return _this4._scrollToErrorFields();
      });
    },
    _editCompany: function _editCompany() {
      var _this5 = this;

      return new Promise(function (resolve, reject) {
        _this5.loading = true;
        __WEBPACK_IMPORTED_MODULE_1_mint_ui__["Indicator"].open();

        var companyName = _this5.companyName,
            id = _this5.id;

        var data = _this5._.cloneDeep(_this5.fields);

        _this5.$api.patch('api/v2/users/companies/' + id, { companyName: companyName, 'anketa': _extends({}, data) }).then(function (response) {
          var data = response.data.data;


          __WEBPACK_IMPORTED_MODULE_1_mint_ui__["Indicator"].close();
          _this5.loading = false;
          resolve && resolve(data);
        }, function (error) {
          var _error$response2 = error.response,
              data = _error$response2.data,
              status = _error$response2.status;


          __WEBPACK_IMPORTED_MODULE_1_mint_ui__["Indicator"].close();
          _this5.loading = false;
          Object(__WEBPACK_IMPORTED_MODULE_1_mint_ui__["Toast"])({ message: 'Произошла ошибка при редактировании компании', iconClass: 'mintui mintui-field-error' });

          reject && reject();

          if (status === 422) {
            var errors = data.errors;

            Object.keys(errors).forEach(function (key) {
              return _this5.$validator.errors.add({ field: key.replace('anketa.', ''), msg: errors[key].join(', ') });
            });
          } else throw new Error('Error create company.');
        });
      });
    },
    _scrollToErrorFields: function _scrollToErrorFields() {
      var el = document.getElementsByClassName('error');
      if (el && el.length) this.$scrollTo(el[0], 500, { offset: -40 });
      // Toast({ message: 'Проверьте правильность ввода.', iconClass: 'mintui mintui-field-error' })
    },
    _handleClickChangeCompany: function _handleClickChangeCompany() {
      if (this.edit === false) {
        this.$modalRouter.push({ name: 'users.companies.create' });
      }
    }
  }
});

/***/ }),

/***/ 1796:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modules_User_Company_mixins_form__ = __webpack_require__(1487);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'Default',
  mixins: [__WEBPACK_IMPORTED_MODULE_0__modules_User_Company_mixins_form__["a" /* default */]],
  props: {
    edit: {
      type: Boolean
    }
  }
});

/***/ }),

/***/ 2448:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(2449);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("8ab47d00", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-d9e5169e\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./default.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-d9e5169e\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./default.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 2449:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(true);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"default.vue","sourceRoot":""}]);

// exports


/***/ }),

/***/ 2450:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "page page_declaration" }, [
    _c("div", { staticClass: "page-inner__container" }, [
      _c(
        "div",
        { staticClass: "page__body page-inner__body_declaration pb_24" },
        [
          _c("div", { staticClass: "block block_declaration bt_none" }, [
            _c("div", { staticClass: "heading heading_h4 mb_2" }, [
              _vm._v("Новая компания")
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "m-text_semi-bold color_gray-2" }, [
              _vm._v("Компания не найдена")
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "form__group form__group_declaration mt_5" },
              [
                _c("div", { staticClass: "lm-dropdown-wrap" }, [
                  _c("div", { staticClass: "lm-dropdown" }, [
                    _c(
                      "select",
                      {
                        attrs: {
                          id: "profession__category",
                          disabled: _vm.edit
                        },
                        on: { click: _vm._handleClickChangeCompany }
                      },
                      [
                        _c(
                          "option",
                          {
                            attrs: {
                              selected: "selected",
                              disabled: "disabled",
                              hidden: "hidden"
                            }
                          },
                          [_vm._v("Выберите компанию из списка")]
                        )
                      ]
                    )
                  ])
                ])
              ]
            )
          ])
        ]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "page__footer page__footer_declaration" }, [
        _c(
          "div",
          {
            staticClass:
              "form__row form__row_buttons form__row_buttons_declaration"
          },
          [
            _c(
              "button",
              {
                staticClass: "btn btn_secondary",
                on: { click: _vm._handleClickPreviousPage }
              },
              [_vm._v("\n          Назад\n        ")]
            )
          ]
        )
      ])
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
    require("vue-hot-reload-api")      .rerender("data-v-d9e5169e", esExports)
  }
}

/***/ })

});
//# sourceMappingURL=63.build.5e187d9b5f6bde074eb4.js.map