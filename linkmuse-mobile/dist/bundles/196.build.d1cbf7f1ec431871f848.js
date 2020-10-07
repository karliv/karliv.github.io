webpackJsonp([196],{

/***/ 1316:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Index_vue__ = __webpack_require__(1685);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_c84dce24_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Index_vue__ = __webpack_require__(2137);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(2135)
}
var normalizeComponent = __webpack_require__(2)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_c84dce24_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Index_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/views/CloudPayment/Index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-c84dce24", Component.options)
  } else {
    hotAPI.reload("data-v-c84dce24", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 1685:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mint_ui__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mint_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mint_ui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__(6);
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["a"] = ({
  metaInfo: {
    title: 'Оплата'
  },
  data: function data() {
    return {
      loading: true,
      payment: {}
    };
  },

  computed: {},
  mounted: function mounted() {
    var _this = this;

    if (__WEBPACK_IMPORTED_MODULE_1__utils__["n" /* isBrowser */]) {
      var amount = this.$route.params.amount;


      amount /= 100;

      this._getPaymentFields(amount).then(function () {
        _this._initCloudPaymentsWidget().then(function () {
          window.location.href = 'comlinkmuse://pay/success';
        }).catch(function () {
          window.location.href = 'comlinkmuse://pay/error';
        });
      }).catch(function () {
        window.location.href = 'comlinkmuse://pay/error';
      });
    }
  },

  methods: {
    _getPaymentFields: function _getPaymentFields(price) {
      var _this2 = this;

      var amount = parseFloat(price).toFixed(2);

      if (!amount) reject && reject('Need price');

      return new Promise(function (resolve, reject) {
        _this2.$api.post('api/v2/billing/payment', { amount: amount }).then(function (response) {
          var _response$data = response.data,
              form = _response$data.form,
              url = _response$data.url;

          _this2.payment = { form: form, url: url };
          resolve && resolve();
        }).catch(function (err) {
          reject && reject();
          throw new Error('Error get payment fields');
        });
      });
    },
    _initCloudPaymentsWidget: function _initCloudPaymentsWidget() {
      var _this3 = this;

      if ((typeof cp === 'undefined' ? 'undefined' : _typeof(cp)) !== 'object') {
        throw new Error('Error load CloudPayments');
      }

      return new Promise(function (resolve, reject) {
        var widget = new cp.CloudPayments();
        var _payment$form = _this3.payment.form,
            publicId = _payment$form.publicId,
            description = _payment$form.description,
            amount = _payment$form.amount,
            currency = _payment$form.currency,
            invoiceId = _payment$form.invoiceId,
            accountId = _payment$form.accountId;


        widget.charge({
          publicId: publicId,
          description: description,
          amount: Number(amount),
          currency: currency,
          invoiceId: invoiceId,
          accountId: accountId
        }, function (options) {
          resolve();
        }, function (reason, options) {
          reject && reject();
        });
      });
    }
  }
});

/***/ }),

/***/ 2135:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(2136);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("03b21f88", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js?sourceMap!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-c84dce24\",\"scoped\":false,\"hasInlineConfig\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Index.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js?sourceMap!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-c84dce24\",\"scoped\":false,\"hasInlineConfig\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Index.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 2136:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(true);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"Index.vue","sourceRoot":""}]);

// exports


/***/ }),

/***/ 2137:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div")
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-c84dce24", esExports)
  }
}

/***/ })

});
//# sourceMappingURL=196.build.d1cbf7f1ec431871f848.js.map