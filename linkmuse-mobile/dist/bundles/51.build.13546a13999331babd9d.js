webpackJsonp([51],{

/***/ 1211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_modelAgency_vue__ = __webpack_require__(1802);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_a23df704_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_modelAgency_vue__ = __webpack_require__(2468);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(2466)
}
var normalizeComponent = __webpack_require__(2)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-a23df704"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_modelAgency_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_a23df704_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_modelAgency_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/views/User/Company/Companies/modelAgency.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-a23df704", Component.options)
  } else {
    hotAPI.reload("data-v-a23df704", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 1485:
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var KEYS = {
  rate: 'rate',
  currency: 'currency',
  costOfWork: 'cost-of-work',
  periodSelection: 'period-selection'
};

/* harmony default export */ __webpack_exports__["a"] = ({
  inject: ['$validator'],
  props: {
    value: {
      default: null
    },
    currencies: {
      type: Array,
      default: []
    },
    periods: {
      type: Array,
      default: []
    }
  },
  data: function data() {
    var _ref;

    return {
      KEYS: KEYS,
      fields: [(_ref = {}, _ref[KEYS['currency']] = null, _ref[KEYS['costOfWork']] = null, _ref[KEYS['periodSelection']] = null, _ref)]
    };
  },

  computed: {
    hasCostOfWork: function hasCostOfWork() {
      return Boolean(Boolean(Number(this.fields[0][KEYS['costOfWork']])) && Number(this.fields[0][KEYS['costOfWork']]));
    }
  },
  watch: {
    value: function value(_value, old) {
      if (_value !== old) {
        var _ref2;

        if (_value && _value.length) {
          this.fields = _value;
        } else this.fields = [(_ref2 = {}, _ref2[KEYS['currency']] = null, _ref2[KEYS['costOfWork']] = null, _ref2[KEYS['periodSelection']] = null, _ref2)];
      }
    }
  },
  created: function created() {
    if (this.value && this.value.length) {
      this.fields = this.value;
    }
  },
  mounted: function mounted() {
    if (!this.fields[0][KEYS['currency']]) {
      this.fields[0][KEYS['currency']] = this.currencies && this.currencies.length ? this.currencies[0]['id'] : null;
      this.fields[0][KEYS['periodSelection']] = this.periods && this.periods.length ? this.periods[0]['id'] : null;
    }
  },

  methods: {
    _handleInputUpdateField: function _handleInputUpdateField() {
      this.$emit('input', this.hasCostOfWork ? this.fields : []);
    }
  }
});

/***/ }),

/***/ 1486:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _FIELD;

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var KEYS = {
  name: 'project-name',
  description: 'description',
  participationInProjects: 'participation-in-projects'
};

var FIELD = (_FIELD = {}, _FIELD[KEYS['name']] = null, _FIELD[KEYS['description']] = null, _FIELD);

/* harmony default export */ __webpack_exports__["a"] = ({
  inject: ['$validator'],
  props: {
    value: {
      default: null
    }
  },
  data: function data() {
    return {
      KEYS: KEYS,
      fields: []
    };
  },

  computed: {
    contentTooltipParticipationInProjects: function contentTooltipParticipationInProjects() {
      return '<div style="max-width: 226px;">\n        <span style="display: block; margin: 0;">\n           \u0414\u043E\u0431\u0430\u0432\u044C\u0442\u0435 \u0434\u0430\u043D\u043D\u044B\u0435, \u0435\u0441\u043B\u0438 \u0432\u044B \u0443\u0436\u0435 \u0443\u0447\u0430\u0441\u0442\u0432\u043E\u0432\u0430\u043B\u0438 \u0438\u043B\u0438 \u0443\u0447\u0430\u0441\u0442\u0432\u0443\u0435\u0442\u0435 \u0432 \u0434\u0430\u043D\u043D\u044B\u0439 \u043C\u043E\u043C\u0435\u043D\u0442 \u0432 \u043F\u0440\u043E\u0435\u043A\u0442\u0430\u0445\n        </span>\n      </div>';
    }
  },
  watch: {
    value: function value(_value, old) {
      var _this = this;

      if (_value !== old) {
        this.fields = [];
        if (_value && _value.length) {
          _value.forEach(function (item) {
            _this.fields.push(Object.assign(_this._.cloneDeep(FIELD), item));
          });
        }
      }
    }
  },
  created: function created() {
    this.fields = this.value || [];
  },

  methods: {
    _handleInputUpdateField: function _handleInputUpdateField() {
      this.$emit('input', this.fields);
    },
    _handleClickPushField: function _handleClickPushField() {
      this.fields.push(this._.clone(FIELD));
    },
    _handleClickRemoveField: function _handleClickRemoveField(index) {
      var _this2 = this;

      this.$confirm({
        cancelTxt: 'отмена',
        confirmTxt: 'удалить',
        title: 'Подтвердите действие',
        message: 'Вы уверены, что хотите удалить?'
      }).then(function () {
        Object.keys(_this2.fields[index]).forEach(function (item) {
          return _this2.fields[index][item] = null;
        });
        _this2.$nextTick(function () {
          _this2.fields.splice(index, 1);
        });
      }).catch(function () {});
    }
  }
});

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

/***/ 1488:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Rate_vue__ = __webpack_require__(1485);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_f402e03a_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Rate_vue__ = __webpack_require__(1491);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1489)
}
var normalizeComponent = __webpack_require__(2)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-f402e03a"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Rate_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_f402e03a_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Rate_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/User/Сompany/Form/Fields/Rate.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-f402e03a", Component.options)
  } else {
    hotAPI.reload("data-v-f402e03a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 1489:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1490);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("f75256d6", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-f402e03a\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Rate.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-f402e03a\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Rate.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1490:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(true);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"Rate.vue","sourceRoot":""}]);

// exports


/***/ }),

/***/ 1491:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("div", { staticClass: "form__group form__group_declaration" }, [
      _c("div", { staticClass: "form__row form__row_declaration" }, [
        _c("div", { staticClass: "form__column form__column_declaration" }, [
          _c(
            "label",
            {
              staticClass: "label input__label",
              attrs: { for: _vm.KEYS["costOfWork"] }
            },
            [_vm._v("Стоимость работы (от)")]
          ),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.fields[0][_vm.KEYS["costOfWork"]],
                expression: "fields[0][KEYS['costOfWork']]"
              },
              { name: "mask-numeric", rawName: "v-mask-numeric" },
              {
                name: "validate",
                rawName: "v-validate",
                value: "numeric|min:1|max_value:9999999",
                expression: "'numeric|min:1|max_value:9999999'"
              }
            ],
            class: [
              {
                error: _vm.verrors.has(
                  _vm.KEYS["rate"] + ".0." + _vm.KEYS["costOfWork"]
                )
              },
              "input",
              "form__input",
              "form__input_declaration"
            ],
            attrs: {
              type: "number",
              min: "1",
              inputmode: "numeric",
              pattern: "[0-9]*",
              id: _vm.KEYS["costOfWork"],
              name: _vm.KEYS["rate"] + ".0." + _vm.KEYS["costOfWork"],
              placeholder: "Введите сумму",
              "data-vv-as": "Сумма"
            },
            domProps: { value: _vm.fields[0][_vm.KEYS["costOfWork"]] },
            on: {
              input: [
                function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(
                    _vm.fields[0],
                    _vm.KEYS["costOfWork"],
                    $event.target.value
                  )
                },
                _vm._handleInputUpdateField
              ]
            }
          })
        ]),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass:
              "form__column form__column_declaration form__column_declaration_payment form__column_declaration_payment_currency",
            staticStyle: { "min-width": "72px" }
          },
          [
            _c(
              "label",
              {
                staticClass: "label input__label",
                attrs: { for: _vm.KEYS["currency"] }
              },
              [_vm._v("\n          Валюта\n        ")]
            ),
            _vm._v(" "),
            _c("lm-select", {
              directives: [
                {
                  name: "validate",
                  rawName: "v-validate",
                  value: { rules: { required: _vm.hasCostOfWork === true } },
                  expression:
                    "{ rules: { required: (hasCostOfWork === true) } }"
                }
              ],
              key: _vm.KEYS["rate"] + ".0." + _vm.KEYS["currency"],
              class: [
                {
                  error: _vm.verrors.has(
                    _vm.KEYS["rate"] + ".0." + _vm.KEYS["currency"]
                  )
                }
              ],
              attrs: {
                "input-id": _vm.KEYS["currency"],
                "input-name": _vm.KEYS["rate"] + ".0." + _vm.KEYS["currency"],
                "data-vv-name": _vm.KEYS["rate"] + ".0." + _vm.KEYS["currency"],
                "data-vv-as": "Валюта",
                options: _vm.currencies,
                placeholder: "Валюта",
                placeholderDisabled: true,
                placeholderHidden: true,
                label: "",
                disabled: _vm.hasCostOfWork === false
              },
              on: { change: _vm._handleInputUpdateField },
              model: {
                value: _vm.fields[0][_vm.KEYS["currency"]],
                callback: function($$v) {
                  _vm.$set(_vm.fields[0], _vm.KEYS["currency"], $$v)
                },
                expression: "fields[0][KEYS['currency']]"
              }
            })
          ],
          1
        )
      ])
    ]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "form__group form__group_declaration" },
      [
        _c(
          "label",
          {
            staticClass: "label input__label",
            attrs: { for: _vm.KEYS["periodSelection"] }
          },
          [_vm._v("Период оплаты")]
        ),
        _vm._v(" "),
        _c("lm-select", {
          directives: [
            {
              name: "validate",
              rawName: "v-validate",
              value: { rules: { required: _vm.hasCostOfWork === true } },
              expression: "{ rules: { required: (hasCostOfWork === true) } }"
            }
          ],
          key: _vm.KEYS["rate"] + ".0." + _vm.KEYS["periodSelection"],
          class: [
            {
              error: _vm.verrors.has(
                _vm.KEYS["rate"] + ".0." + _vm.KEYS["periodSelection"]
              )
            }
          ],
          attrs: {
            "input-id": _vm.KEYS["periodSelection"],
            "input-name":
              _vm.KEYS["rate"] + ".0." + _vm.KEYS["periodSelection"],
            "data-vv-name":
              _vm.KEYS["rate"] + ".0." + _vm.KEYS["periodSelection"],
            "data-vv-as": "Период оплаты",
            options: _vm.periods,
            placeholder: "Не выбран",
            placeholderDisabled: true,
            placeholderHidden: true,
            label: "",
            disabled: _vm.hasCostOfWork === false
          },
          on: { change: _vm._handleInputUpdateField },
          model: {
            value: _vm.fields[0][_vm.KEYS["periodSelection"]],
            callback: function($$v) {
              _vm.$set(_vm.fields[0], _vm.KEYS["periodSelection"], $$v)
            },
            expression: "fields[0][KEYS['periodSelection']]"
          }
        })
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
    require("vue-hot-reload-api")      .rerender("data-v-f402e03a", esExports)
  }
}

/***/ }),

/***/ 1492:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_ParticipationInProjects_vue__ = __webpack_require__(1486);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_430efd2d_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_ParticipationInProjects_vue__ = __webpack_require__(1495);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1493)
}
var normalizeComponent = __webpack_require__(2)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-430efd2d"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_ParticipationInProjects_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_430efd2d_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_ParticipationInProjects_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/User/Сompany/Form/Fields/ParticipationInProjects.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-430efd2d", Component.options)
  } else {
    hotAPI.reload("data-v-430efd2d", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 1493:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1494);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("8a5a485c", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-430efd2d\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./ParticipationInProjects.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-430efd2d\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./ParticipationInProjects.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1494:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(true);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"ParticipationInProjects.vue","sourceRoot":""}]);

// exports


/***/ }),

/***/ 1495:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "block block_declaration" },
    [
      _c("div", { staticClass: "m-text_bold mb_4" }, [
        _vm._v("\n    Участие в проектах\n  ")
      ]),
      _vm._v(" "),
      _vm.fields.length === 0
        ? [
            _vm._m(0),
            _vm._v(" "),
            _c(
              "a",
              {
                staticClass: "m-text_bold color_main mb_4",
                attrs: { href: "javascript:void(0)" },
                on: { click: _vm._handleClickPushField }
              },
              [_vm._v("Добавить")]
            )
          ]
        : _vm._e(),
      _vm._v(" "),
      _vm._l(_vm.fields, function(item, index) {
        return [
          _c(
            "div",
            { style: [{ marginTop: index >= 1 ? "36px" : "0" }] },
            [
              _c(
                "div",
                { staticClass: "form__group form__group_declaration mb_6" },
                [
                  _c(
                    "label",
                    {
                      staticClass: "label input__label",
                      attrs: {
                        for:
                          _vm.KEYS["participationInProjects"] +
                          "." +
                          index +
                          "." +
                          _vm.KEYS["name"]
                      }
                    },
                    [
                      _vm._v("\n          Проект\n          "),
                      _c(
                        "span",
                        { staticClass: "label_declaration_required" },
                        [_vm._v("•")]
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "validate",
                        rawName: "v-validate",
                        value: { rules: { required: true, max: 255 } },
                        expression: "{ rules: { required: true, max: 255 } }"
                      },
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.fields[index][_vm.KEYS["name"]],
                        expression: "fields[index][KEYS['name']]"
                      }
                    ],
                    key:
                      _vm.KEYS["participationInProjects"] +
                      "." +
                      index +
                      "." +
                      _vm.KEYS["name"],
                    class: [
                      {
                        error: _vm.verrors.has(
                          _vm.KEYS["participationInProjects"] +
                            "." +
                            index +
                            "." +
                            _vm.KEYS["name"]
                        )
                      },
                      "input",
                      "form__input",
                      "form__input_declaration"
                    ],
                    attrs: {
                      type: "text",
                      autocomplete: "off",
                      id:
                        _vm.KEYS["participationInProjects"] +
                        "." +
                        index +
                        "." +
                        _vm.KEYS["name"],
                      name:
                        _vm.KEYS["participationInProjects"] +
                        "." +
                        index +
                        "." +
                        _vm.KEYS["name"],
                      "data-vv-name":
                        _vm.KEYS["participationInProjects"] +
                        "." +
                        index +
                        "." +
                        _vm.KEYS["name"],
                      placeholder: "Поле чудес",
                      "data-vv-as": "Проект"
                    },
                    domProps: { value: _vm.fields[index][_vm.KEYS["name"]] },
                    on: {
                      input: [
                        function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.fields[index],
                            _vm.KEYS["name"],
                            $event.target.value
                          )
                        },
                        _vm._handleInputUpdateField
                      ]
                    }
                  }),
                  _vm._v(" "),
                  _vm.verrors.has(
                    _vm.KEYS["participationInProjects"] +
                      "." +
                      index +
                      "." +
                      _vm.KEYS["name"]
                  )
                    ? [
                        _c(
                          "div",
                          {
                            staticClass:
                              "form__notification form__notification_declaration form__notification_declaration_required"
                          },
                          [
                            _vm._v(
                              _vm._s(
                                _vm.verrors.first(
                                  _vm.KEYS["participationInProjects"] +
                                    "." +
                                    index +
                                    "." +
                                    _vm.KEYS["name"]
                                )
                              )
                            )
                          ]
                        )
                      ]
                    : _vm._e()
                ],
                2
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "form__group form__group_declaration mb_4" },
                [
                  _c(
                    "label",
                    {
                      staticClass:
                        "label textarea__label textarea__label_declaration",
                      attrs: {
                        for:
                          _vm.KEYS["participationInProjects"] +
                          "." +
                          index +
                          "." +
                          _vm.KEYS["description"]
                      }
                    },
                    [_vm._v("Описание")]
                  ),
                  _vm._v(" "),
                  _c("textarea", {
                    directives: [
                      {
                        name: "validate",
                        rawName: "v-validate",
                        value: { rules: { max: 65000 } },
                        expression: "{ rules: { max: 65000 } }"
                      },
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.fields[index][_vm.KEYS["description"]],
                        expression: "fields[index][KEYS['description']]"
                      }
                    ],
                    key:
                      _vm.KEYS["participationInProjects"] +
                      "." +
                      index +
                      "." +
                      _vm.KEYS["description"],
                    class: [
                      {
                        error: _vm.verrors.has(
                          _vm.KEYS["participationInProjects"] +
                            "." +
                            index +
                            "." +
                            _vm.KEYS["description"]
                        )
                      },
                      "textarea",
                      "form__textarea_declaration",
                      "form__textarea_declaration",
                      "lm-m-textarea-profile-settings"
                    ],
                    style: { minHeight: "76px" },
                    attrs: {
                      autocomplete: "off",
                      rows: "13",
                      id:
                        _vm.KEYS["participationInProjects"] +
                        "." +
                        index +
                        "." +
                        _vm.KEYS["description"],
                      name:
                        _vm.KEYS["participationInProjects"] +
                        "." +
                        index +
                        "." +
                        _vm.KEYS["description"],
                      "data-vv-name":
                        _vm.KEYS["participationInProjects"] +
                        "." +
                        index +
                        "." +
                        _vm.KEYS["description"],
                      placeholder: "Художник-постановщик в 12-13 годах",
                      "data-vv-as": "Описание"
                    },
                    domProps: {
                      value: _vm.fields[index][_vm.KEYS["description"]]
                    },
                    on: {
                      input: [
                        function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.fields[index],
                            _vm.KEYS["description"],
                            $event.target.value
                          )
                        },
                        _vm._handleInputUpdateField
                      ]
                    }
                  }),
                  _vm._v(" "),
                  _vm.verrors.has(
                    _vm.KEYS["participationInProjects"] +
                      "." +
                      index +
                      "." +
                      _vm.KEYS["description"]
                  )
                    ? [
                        _c(
                          "div",
                          {
                            staticClass:
                              "form__notification form__notification_declaration form__notification_declaration_required"
                          },
                          [
                            _vm._v(
                              _vm._s(
                                _vm.verrors.first(
                                  _vm.KEYS["participationInProjects"] +
                                    "." +
                                    index +
                                    "." +
                                    _vm.KEYS["description"]
                                )
                              )
                            )
                          ]
                        )
                      ]
                    : _vm._e()
                ],
                2
              ),
              _vm._v(" "),
              index === _vm.fields.length - 1
                ? [
                    _c("div", { staticClass: "m-flex__justify_between" }, [
                      _c(
                        "a",
                        {
                          staticClass: "m-text_bold color_main",
                          attrs: { href: "javascript:void(0)" },
                          on: { click: _vm._handleClickPushField }
                        },
                        [_vm._v("\n            Добавить ещё\n          ")]
                      ),
                      _vm._v(" "),
                      _c(
                        "a",
                        {
                          staticClass: "m-text_bold color_gray-3",
                          attrs: { href: "javascript:void(0)" },
                          on: {
                            click: function($event) {
                              return _vm._handleClickRemoveField(index)
                            }
                          }
                        },
                        [_vm._v("Удалить")]
                      )
                    ])
                  ]
                : [
                    _c("div", { staticClass: "m-flex__justify_end" }, [
                      _c(
                        "a",
                        {
                          staticClass: "m-text_bold color_gray-3",
                          attrs: { href: "javascript:void(0)" },
                          on: {
                            click: function($event) {
                              return _vm._handleClickRemoveField(index)
                            }
                          }
                        },
                        [_vm._v("Удалить")]
                      )
                    ])
                  ]
            ],
            2
          )
        ]
      })
    ],
    2
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "mb_4 advanced-container" }, [
      _c("span", { staticClass: "m-text_normal color_gray-2" }, [
        _vm._v(
          "\n        Добавьте данные, если вы уже участвовали или участвуете в данный момент в проектах\n      "
        )
      ])
    ])
  }
]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-430efd2d", esExports)
  }
}

/***/ }),

/***/ 1802:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modules_User_Company_mixins_form__ = __webpack_require__(1487);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_User_ompany_Form_Fields_Rate_vue__ = __webpack_require__(1488);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_User_ompany_Form_Fields_ParticipationInProjects_vue__ = __webpack_require__(1492);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var KEYS = {
  rate: 'rate',
  other: 'other',
  functions: 'functions',
  participationInProjects: 'participation-in-projects'
};





/* harmony default export */ __webpack_exports__["a"] = ({
  mixins: [__WEBPACK_IMPORTED_MODULE_0__modules_User_Company_mixins_form__["a" /* default */]],
  components: { RateFiled: __WEBPACK_IMPORTED_MODULE_1__components_User_ompany_Form_Fields_Rate_vue__["a" /* default */], ParticipationInProjectsFiled: __WEBPACK_IMPORTED_MODULE_2__components_User_ompany_Form_Fields_ParticipationInProjects_vue__["a" /* default */] },
  props: {
    edit: {
      type: Boolean
    }
  },
  provide: function provide() {
    return {
      $validator: this.$validator
    };
  },
  data: function data() {
    var _fields;

    return {
      KEYS: KEYS,
      companyName: 'model-agency',
      fields: (_fields = {}, _fields[KEYS['rate']] = [], _fields[KEYS['other']] = null, _fields[KEYS['functions']] = [], _fields[KEYS['participationInProjects']] = [], _fields)
    };
  }
});

/***/ }),

/***/ 2466:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(2467);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("5037d87e", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-a23df704\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./modelAgency.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-a23df704\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./modelAgency.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 2467:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(true);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"modelAgency.vue","sourceRoot":""}]);

// exports


/***/ }),

/***/ 2468:
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
              _vm._v(_vm._s(_vm.title))
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "m-text_semi-bold color_gray-2" }, [
              _vm._v("Модельное агенство")
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "block block_declaration" }, [
            _c("div", { staticClass: "m-text_bold mb_4" }, [
              _vm._v("Основная информация")
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "form__group form__group_declaration" }, [
              _vm._m(0),
              _vm._v(" "),
              _c("div", { staticClass: "lm-dropdown-wrap" }, [
                _c("div", { staticClass: "lm-dropdown" }, [
                  _c(
                    "select",
                    {
                      attrs: { id: "profession__category", disabled: _vm.edit },
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
                        [_vm._v("Модельное агенство")]
                      )
                    ]
                  )
                ])
              ])
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "form__group form__group_declaration" },
              [
                _c(
                  "label",
                  {
                    staticClass: "label input__label",
                    attrs: { for: _vm.KEYS["functions"] }
                  },
                  [_vm._v("Функции")]
                ),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "validate",
                      rawName: "v-validate",
                      value: "max:255",
                      expression: "'max:255'"
                    },
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.fields[_vm.KEYS["functions"]],
                      expression: "fields[KEYS['functions']]"
                    }
                  ],
                  class: [
                    {
                      error: _vm.verrors.has(
                        _vm.normalizeDotsToArrow(_vm.KEYS["functions"])
                      )
                    },
                    "input",
                    "form__input",
                    "form__input_declaration"
                  ],
                  attrs: {
                    type: "text",
                    autocomplete: "off",
                    id: _vm.KEYS["functions"],
                    name: _vm.normalizeDotsToArrow(_vm.KEYS["functions"]),
                    placeholder: "Функции",
                    "data-vv-as": "Функции"
                  },
                  domProps: { value: _vm.fields[_vm.KEYS["functions"]] },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.fields,
                        _vm.KEYS["functions"],
                        $event.target.value
                      )
                    }
                  }
                }),
                _vm._v(" "),
                _vm.verrors.has(_vm.normalizeDotsToArrow(_vm.KEYS["functions"]))
                  ? [
                      _c(
                        "div",
                        {
                          staticClass:
                            "form__notification form__notification_declaration form__notification_declaration_required"
                        },
                        [
                          _vm._v(
                            _vm._s(
                              _vm.verrors.first(
                                _vm.normalizeDotsToArrow(_vm.KEYS["functions"])
                              )
                            )
                          )
                        ]
                      )
                    ]
                  : _vm._e()
              ],
              2
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "form__group form__group_declaration" },
              [
                _c(
                  "label",
                  {
                    staticClass:
                      "label textarea__label textarea__label_declaration",
                    attrs: { for: _vm.KEYS["other"] }
                  },
                  [_vm._v("Другое")]
                ),
                _vm._v(" "),
                _c("textarea", {
                  directives: [
                    {
                      name: "validate",
                      rawName: "v-validate",
                      value: "max:65000",
                      expression: "'max:65000'"
                    },
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.fields[_vm.KEYS["other"]],
                      expression: "fields[KEYS['other']]"
                    }
                  ],
                  class: [
                    {
                      error: _vm.verrors.has(
                        _vm.normalizeDotsToArrow(_vm.KEYS["other"])
                      )
                    },
                    "textarea",
                    "form__textarea",
                    "form__textarea_declaration",
                    "lm-m-textarea-profile-settings"
                  ],
                  style: { minHeight: "76px" },
                  attrs: {
                    autocomplete: "off",
                    rows: "13",
                    id: _vm.KEYS["other"],
                    name: _vm.normalizeDotsToArrow(_vm.KEYS["other"]),
                    placeholder: "Другое",
                    "data-vv-as": "Другое"
                  },
                  domProps: { value: _vm.fields[_vm.KEYS["other"]] },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.fields,
                        _vm.KEYS["other"],
                        $event.target.value
                      )
                    }
                  }
                }),
                _vm._v(" "),
                _vm.verrors.has(_vm.normalizeDotsToArrow(_vm.KEYS["other"]))
                  ? [
                      _c(
                        "div",
                        {
                          staticClass:
                            "form__notification form__notification_declaration form__notification_declaration_required"
                        },
                        [
                          _vm._v(
                            _vm._s(
                              _vm.verrors.first(
                                _vm.normalizeDotsToArrow(_vm.KEYS["other"])
                              )
                            )
                          )
                        ]
                      )
                    ]
                  : _vm._e()
              ],
              2
            )
          ]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "block block_declaration" },
            [
              _c("div", { staticClass: "m-text_bold mb_4" }, [
                _vm._v("Ставка")
              ]),
              _vm._v(" "),
              _c("rate-filed", {
                attrs: {
                  currencies: _vm.sources["lists"]["valyuty"],
                  periods: _vm.sources["lists"]["vybor-perioda"]
                },
                model: {
                  value: _vm.fields[_vm.KEYS["rate"]],
                  callback: function($$v) {
                    _vm.$set(_vm.fields, _vm.KEYS["rate"], $$v)
                  },
                  expression: "fields[KEYS['rate']]"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c("participation-in-projects-filed", {
            staticClass: "pb_24",
            model: {
              value: _vm.fields[_vm.KEYS["participationInProjects"]],
              callback: function($$v) {
                _vm.$set(_vm.fields, _vm.KEYS["participationInProjects"], $$v)
              },
              expression: "fields[KEYS['participationInProjects']]"
            }
          }),
          _vm._v(" "),
          _vm.edit === false && _vm.showReset === true
            ? [
                _c(
                  "div",
                  { staticClass: "form__group form__group_declaration" },
                  [
                    _c(
                      "button",
                      {
                        staticClass: "btn btn_secondary_filled w_100",
                        on: { click: _vm._handleClickClearForm }
                      },
                      [_vm._v("Очистить форму")]
                    )
                  ]
                )
              ]
            : _vm._e()
        ],
        2
      )
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "page__footer page-inner__footer" }, [
      _c("div", { staticClass: "page-inner__body_declaration" }, [
        _c("div", { staticClass: "row row_justify_between" }, [
          _c(
            "button",
            {
              staticClass: "btn btn_secondary",
              on: { click: _vm._handleClickPreviousPage }
            },
            [_vm._v("\n          Назад\n        ")]
          ),
          _vm._v(" "),
          _c(
            "button",
            {
              staticClass: "btn btn_primary",
              on: { click: _vm._handleClickActionCompany }
            },
            [
              _vm._v(
                "\n          " +
                  _vm._s(_vm.isPublished ? "Сохранить" : "Опубликовать") +
                  "\n        "
              )
            ]
          )
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "label",
      {
        staticClass: "label input__label",
        attrs: { for: "profession__category" }
      },
      [
        _vm._v("\n            Компания\n            "),
        _c("span", { staticClass: "label_declaration_required" }, [_vm._v("•")])
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
    require("vue-hot-reload-api")      .rerender("data-v-a23df704", esExports)
  }
}

/***/ })

});
//# sourceMappingURL=51.build.13546a13999331babd9d.js.map