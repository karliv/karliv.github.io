webpackJsonp([113],{

/***/ 1304:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Success_vue__ = __webpack_require__(1673);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_4f94ceee_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Success_vue__ = __webpack_require__(2101);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(2099)
}
var normalizeComponent = __webpack_require__(2)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-4f94ceee"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Success_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_4f94ceee_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Success_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/views/CertifyingSpecialist/Executor/Orders/Show/Success.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4f94ceee", Component.options)
  } else {
    hotAPI.reload("data-v-4f94ceee", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 1496:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return NOT_PAID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return PAID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return MATCH_MEETING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return WAIT_CONFIRM_MEETING_CLIENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AGREED_MEETING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return WAIT_WORK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return WAIT_CONFIRM_WORK_CLIENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return FINALIZING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return FINISHED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CANCELED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return getPaidCategory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return getMeetingCategory; });
/* unused harmony export getInWorkCategory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return getInWorkCategorySpecialist; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return getArchivalCategory; });
var NOT_PAID = 'not_paid'; // Не оплачен
var PAID = 'paid'; // Оплачен
var MATCH_MEETING = 'match_meeting'; // Согласование даты и времени
var WAIT_CONFIRM_MEETING_CLIENT = 'wait_confirm_meeting_client'; // Ожидается подтверждение времени Клиентом
var AGREED_MEETING = 'agreed_meeting'; // Согласовано время и дата (встреча назначена)
var WAIT_WORK = 'wait_work'; // Ожидает исполнения работы (загрузка данных)
var WAIT_CONFIRM_WORK_CLIENT = 'wait_confirm_work_client'; // Ожидает подтверждения работы Клиентом
var FINALIZING = 'finalizing'; // На доработке
var FINISHED = 'finished'; // Завершен
var CANCELED = 'canceled'; // Отменен

var getPaidCategory = function getPaidCategory() {
  return [PAID];
};

var getMeetingCategory = function getMeetingCategory() {
  return [MATCH_MEETING, WAIT_CONFIRM_MEETING_CLIENT, AGREED_MEETING];
};

var getInWorkCategory = function getInWorkCategory() {
  return [WAIT_WORK, WAIT_CONFIRM_WORK_CLIENT, FINALIZING];
};

var getInWorkCategorySpecialist = function getInWorkCategorySpecialist() {
  return [WAIT_WORK, FINALIZING];
};

var getArchivalCategory = function getArchivalCategory() {
  return [FINISHED, CANCELED];
};

/***/ }),

/***/ 1497:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return PHOTO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return VIDEO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MEASUREMENT; });
var PHOTO = 'photo';
var VIDEO = 'video';
var MEASUREMENT = 'measurement'; // Обмер

/***/ }),

/***/ 1583:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(a,b){if(true)!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (b),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else if("undefined"!=typeof exports)b();else{b(),a.FileSaver={exports:{}}.exports}})(this,function(){"use strict";function b(a,b){return"undefined"==typeof b?b={autoBom:!1}:"object"!=typeof b&&(console.warn("Deprecated: Expected third argument to be a object"),b={autoBom:!b}),b.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(a.type)?new Blob(["\uFEFF",a],{type:a.type}):a}function c(b,c,d){var e=new XMLHttpRequest;e.open("GET",b),e.responseType="blob",e.onload=function(){a(e.response,c,d)},e.onerror=function(){console.error("could not download file")},e.send()}function d(a){var b=new XMLHttpRequest;b.open("HEAD",a,!1);try{b.send()}catch(a){}return 200<=b.status&&299>=b.status}function e(a){try{a.dispatchEvent(new MouseEvent("click"))}catch(c){var b=document.createEvent("MouseEvents");b.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),a.dispatchEvent(b)}}var f="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof global&&global.global===global?global:void 0,a=f.saveAs||("object"!=typeof window||window!==f?function(){}:"download"in HTMLAnchorElement.prototype?function(b,g,h){var i=f.URL||f.webkitURL,j=document.createElement("a");g=g||b.name||"download",j.download=g,j.rel="noopener","string"==typeof b?(j.href=b,j.origin===location.origin?e(j):d(j.href)?c(b,g,h):e(j,j.target="_blank")):(j.href=i.createObjectURL(b),setTimeout(function(){i.revokeObjectURL(j.href)},4E4),setTimeout(function(){e(j)},0))}:"msSaveOrOpenBlob"in navigator?function(f,g,h){if(g=g||f.name||"download","string"!=typeof f)navigator.msSaveOrOpenBlob(b(f,h),g);else if(d(f))c(f,g,h);else{var i=document.createElement("a");i.href=f,i.target="_blank",setTimeout(function(){e(i)})}}:function(a,b,d,e){if(e=e||open("","_blank"),e&&(e.document.title=e.document.body.innerText="downloading..."),"string"==typeof a)return c(a,b,d);var g="application/octet-stream"===a.type,h=/constructor/i.test(f.HTMLElement)||f.safari,i=/CriOS\/[\d]+/.test(navigator.userAgent);if((i||g&&h)&&"object"==typeof FileReader){var j=new FileReader;j.onloadend=function(){var a=j.result;a=i?a:a.replace(/^data:[^;]*;/,"data:attachment/file;"),e?e.location.href=a:location=a,e=null},j.readAsDataURL(a)}else{var k=f.URL||f.webkitURL,l=k.createObjectURL(a);e?e.location=l:location.href=l,e=null,setTimeout(function(){k.revokeObjectURL(l)},4E4)}});f.saveAs=a.saveAs=a,"undefined"!=typeof module&&(module.exports=a)});

//# sourceMappingURL=FileSaver.min.js.map
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(23)))

/***/ }),

/***/ 1673:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_file_saver__ = __webpack_require__(1583);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_file_saver___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_file_saver__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mint_ui__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mint_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_mint_ui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vuex__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modules_CertifyingSpecialist_Enums_OrderStatuses__ = __webpack_require__(1496);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__modules_CertifyingSpecialist_Enums_Services__ = __webpack_require__(1497);
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






var BASE_URL_UPLOAD = "https://feature-single-profile.test.cnt.team";




/* harmony default export */ __webpack_exports__["a"] = ({
  metaInfo: {
    title: 'Верификация пройдена'
  },
  data: function data() {
    return {
      FINISHED: __WEBPACK_IMPORTED_MODULE_4__modules_CertifyingSpecialist_Enums_OrderStatuses__["d" /* FINISHED */], has: __WEBPACK_IMPORTED_MODULE_0__utils__["l" /* has */],
      fields: {
        rating: null,
        body: null,
        disabled: false
      },
      loading: false,
      measurement: {
        'body-parameters': {
          'height': null,
          'volume-of-breast': null,
          'weight': null,
          'waist': null,
          'hips': null
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
              return store.dispatch('certifying/getOrderById', {
                id: Number(route.params.order_id),
                include: 'service,photos,video,measurement,review,certifying_specialist,certified_user'
              });

            case 2:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this);
    }))();
  },

  computed: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_3_vuex__["c" /* mapGetters */])({
    order: 'certifying/getSingleOrderData',
    order_loading: 'certifying/geSingleOrderLoading'
  }), {
    service: function service() {
      if (!this.order) return {};
      return this.order.service.data;
    },
    works: function works() {
      if (!this.service) return {};
      return this.service.works;
    },
    worksKeys: function worksKeys() {
      if (!this.works) return [];
      return Object.keys(this.works);
    },
    work_has_measurement: function work_has_measurement() {
      if (!this.works) return;
      return this.worksKeys.includes(__WEBPACK_IMPORTED_MODULE_5__modules_CertifyingSpecialist_Enums_Services__["a" /* MEASUREMENT */]);
    },
    work_has_photo: function work_has_photo() {
      if (!this.works) return;
      return this.worksKeys.includes(__WEBPACK_IMPORTED_MODULE_5__modules_CertifyingSpecialist_Enums_Services__["b" /* PHOTO */]);
    },
    work_has_video: function work_has_video() {
      if (!this.works) return;
      return this.worksKeys.includes(__WEBPACK_IMPORTED_MODULE_5__modules_CertifyingSpecialist_Enums_Services__["c" /* VIDEO */]);
    },
    photos: function photos() {
      if (!this.order || !this.work_has_photo || !Object(__WEBPACK_IMPORTED_MODULE_0__utils__["l" /* has */])(this.order, 'photos.data')) return [];
      return this.order['photos']['data'];
    },
    video: function video() {
      if (!this.order || !this.work_has_video || !Object(__WEBPACK_IMPORTED_MODULE_0__utils__["l" /* has */])(this.order, 'video.data')) return [];
      return [this.order['video']['data']];
    },
    slides: function slides() {
      return [].concat(this.photos, this.video);
    },
    has_review: function has_review() {
      return Object(__WEBPACK_IMPORTED_MODULE_0__utils__["l" /* has */])(this.order, 'review.data');
    },
    archive_path: function archive_path() {
      return Object(__WEBPACK_IMPORTED_MODULE_0__utils__["l" /* has */])(this.order, 'archive_path') && this.order['archive_path'] ? this.order['archive_path'] : null;
    }
  }),
  created: function created() {
    if (this.work_has_measurement && this.order['measurement']) {
      var data = this.order['measurement'].data;

      for (var index in data['body-parameters']) {
        if (typeof this.measurement['body-parameters'][index] === 'undefined') return;
        this.measurement['body-parameters'][index] = data['body-parameters'][index];
      }
    }

    if (Object(__WEBPACK_IMPORTED_MODULE_0__utils__["l" /* has */])(this.order, 'review.data.rating')) {
      this.fields.rating = this.order.review.data.rating;
      this.fields.body = this.order.review.data.body;
      this.fields.disabled = true;
    }
  },

  methods: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_3_vuex__["b" /* mapActions */])({
    setReviewData: 'certifying/setSingleOrderFieldByKey'
  }), {
    preReviewOrder: function preReviewOrder() {
      var _this2 = this;

      return new Promise(function (resolve, reject) {
        _this2.$validator.validateAll().then(function (result) {
          if (result) {
            resolve(true);
          }
        });
      });
    },
    _handleClickReviewOrder: function _handleClickReviewOrder() {
      var _this3 = this;

      this.preReviewOrder().then(function (result) {
        _this3.loading = true;
        __WEBPACK_IMPORTED_MODULE_2_mint_ui__["Indicator"].open();

        var _fields = _this3.fields,
            rating = _fields.rating,
            body = _fields.body;


        _this3.$api.post('/api/v2/certifying-specialists/orders/' + _this3.order.id + '/reviews', { rating: rating, body: body }).then(function (response) {
          var data = response.data;


          _this3.setReviewData({ key: 'review', data: data });

          _this3.loading = false;

          __WEBPACK_IMPORTED_MODULE_2_mint_ui__["Indicator"].close();
          Object(__WEBPACK_IMPORTED_MODULE_2_mint_ui__["Toast"])({ message: 'Успешно', iconClass: 'mintui mintui-success' });
        }).catch(function (err) {
          _this3.loading = false;

          __WEBPACK_IMPORTED_MODULE_2_mint_ui__["Indicator"].close();
          Object(__WEBPACK_IMPORTED_MODULE_2_mint_ui__["Toast"])({ message: 'Ошибка', iconClass: 'mintui mintui-field-error' });

          var _error = error,
              data = _error.response.data,
              status = _error.response.status;

          if (status === 422 && data.errors) {
            _this3.$setLaravelValidationErrorsFromResponse(data);
          } else throw new Error('Error create review order#' + _this3.order.id);
        });
      });
    },
    _handleClickDownloadArchive: function _handleClickDownloadArchive() {
      var _this4 = this;

      __WEBPACK_IMPORTED_MODULE_2_mint_ui__["Indicator"].open();
      this.loading = true;
      this.$api.post('/api/v2/certifying-specialists/orders/' + this.order.id + '/archive', {}, {
        timeout: 120000,
        responseType: 'blob',
        baseURL: BASE_URL_UPLOAD
      }).then(function (response) {
        _this4.loading = false;
        __WEBPACK_IMPORTED_MODULE_2_mint_ui__["Indicator"].close();

        var data = response.data;

        __WEBPACK_IMPORTED_MODULE_1_file_saver___default.a.saveAs(data, 'certification-' + _this4.order.id + '.zip');
      }).catch(function (err) {
        _this4.loading = false;
        __WEBPACK_IMPORTED_MODULE_2_mint_ui__["Indicator"].close();
        Object(__WEBPACK_IMPORTED_MODULE_2_mint_ui__["Toast"])({ message: 'Ошибка', iconClass: 'mintui mintui-field-error' });
        throw new Error('Error download archive order#' + _this4.order.id);
      });
    }
  })
});

/***/ }),

/***/ 2099:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(2100);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("38ce3708", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-4f94ceee\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Success.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-4f94ceee\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Success.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 2100:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(true);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"Success.vue","sourceRoot":""}]);

// exports


/***/ }),

/***/ 2101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _vm.order && _vm.order.status === _vm.FINISHED
        ? [
            _vm.has_review === false
              ? [
                  _c(
                    "div",
                    {
                      staticClass: "lm-m-cs-certification-page lm-m-fullh-page"
                    },
                    [
                      _c(
                        "div",
                        { staticClass: "lm-m-cs-certification-page--wrap" },
                        [
                          _c("h3", { staticClass: "title" }, [
                            _vm._v("Верификация пройдена")
                          ]),
                          _vm._v(" "),
                          !_vm.has_review
                            ? [
                                _c("div", { staticClass: "desc" }, [
                                  _vm._v(
                                    "\n              Оцените работу специалиста\n            "
                                  )
                                ]),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  {
                                    staticClass:
                                      "lm-m-cs-certification-page--rating"
                                  },
                                  [
                                    _c("span", { staticClass: "title" }, [
                                      _vm._v("Оцените работу:")
                                    ]),
                                    _vm._v(" "),
                                    _c("lm-rate", {
                                      directives: [
                                        {
                                          name: "validate",
                                          rawName: "v-validate",
                                          value: "required",
                                          expression: "'required'"
                                        }
                                      ],
                                      class: {
                                        "has-error": _vm.verrors.has("rating")
                                      },
                                      attrs: {
                                        length: 5,
                                        name: "rating",
                                        disabled: _vm.fields.disabled
                                      },
                                      model: {
                                        value: _vm.fields.rating,
                                        callback: function($$v) {
                                          _vm.$set(_vm.fields, "rating", $$v)
                                        },
                                        expression: "fields.rating"
                                      }
                                    })
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c("div", { staticClass: "separator" }),
                                _vm._v(" "),
                                _c("div", { staticClass: "lm-input-wrap" }, [
                                  _c("label", { attrs: { for: "body" } }, [
                                    _vm._v("Отзыв о специалисте:")
                                  ]),
                                  _vm._v(" "),
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.fields.body,
                                        expression: "fields.body"
                                      },
                                      {
                                        name: "validate",
                                        rawName: "v-validate",
                                        value: "max:256",
                                        expression: "'max:256'"
                                      }
                                    ],
                                    class: {
                                      "lm-input": true,
                                      error: _vm.verrors.has("body")
                                    },
                                    attrs: {
                                      id: "body",
                                      name: "body",
                                      type: "text",
                                      placeholder:
                                        "Напишите все, что вам понравилось и нет"
                                    },
                                    domProps: { value: _vm.fields.body },
                                    on: {
                                      input: function($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.$set(
                                          _vm.fields,
                                          "body",
                                          $event.target.value
                                        )
                                      }
                                    }
                                  })
                                ])
                              ]
                            : _vm._e()
                        ],
                        2
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass:
                            "lm-action-buttons lm-bottom-actions-buttons"
                        },
                        [
                          _c(
                            "router-link",
                            {
                              staticClass: "lm-link-button",
                              attrs: {
                                to: {
                                  name: "certifying.executor.orders.show",
                                  params: { order_id: _vm.order.id }
                                }
                              }
                            },
                            [_vm._v("назад")]
                          ),
                          _vm._v(" "),
                          _c(
                            "button",
                            {
                              staticClass: "lm-primary-button middle",
                              on: {
                                click: function($event) {
                                  return _vm._handleClickReviewOrder()
                                }
                              }
                            },
                            [_vm._v("Готово")]
                          )
                        ],
                        1
                      )
                    ]
                  )
                ]
              : _vm._e(),
            _vm._v(" "),
            _vm.has_review
              ? [
                  _c(
                    "div",
                    {
                      staticClass: "lm-m-cs-certification-page lm-m-fullh-page"
                    },
                    [
                      _c(
                        "div",
                        { staticClass: "lm-m-cs-certification-page--wrap" },
                        [
                          _c("h3", { staticClass: "title" }, [
                            _vm._v("Верификация пройдена")
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "desc" }, [
                            _vm._v(
                              "\n            Данные будут сохранены на вашей странице. Следующую верификацию рекомендуется провести через полгода\n          "
                            )
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "separator" }),
                          _vm._v(" "),
                          _vm.work_has_measurement
                            ? [
                                _c(
                                  "div",
                                  {
                                    staticClass: "lm-m-cs-certification-params"
                                  },
                                  [
                                    _c("span", { staticClass: "title" }, [
                                      _vm._v("Параметры:")
                                    ]),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      {
                                        staticClass:
                                          "lm-m-cs-certification-params--wrap"
                                      },
                                      [
                                        _c(
                                          "div",
                                          { staticClass: "item height" },
                                          [
                                            _c("span", [_vm._v("Рост")]),
                                            _vm._v(" "),
                                            _c(
                                              "b",
                                              [
                                                _vm._v(
                                                  _vm._s(
                                                    _vm.measurement[
                                                      "body-parameters"
                                                    ]["height"]
                                                  ) + " "
                                                ),
                                                _c("font", [_vm._v("см")])
                                              ],
                                              1
                                            )
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          { staticClass: "item weight" },
                                          [
                                            _c("span", [_vm._v("Вес")]),
                                            _vm._v(" "),
                                            _c(
                                              "b",
                                              [
                                                _vm._v(
                                                  _vm._s(
                                                    _vm.measurement[
                                                      "body-parameters"
                                                    ]["weight"]
                                                  ) + " "
                                                ),
                                                _c("font", [_vm._v("кг")])
                                              ],
                                              1
                                            )
                                          ]
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      {
                                        staticClass:
                                          "lm-m-cs-certification-params--wrap"
                                      },
                                      [
                                        _c(
                                          "div",
                                          { staticClass: "item chest" },
                                          [
                                            _c("span", [_vm._v("Грудь")]),
                                            _vm._v(" "),
                                            _c(
                                              "b",
                                              [
                                                _vm._v(
                                                  _vm._s(
                                                    _vm.measurement[
                                                      "body-parameters"
                                                    ]["volume-of-breast"]
                                                  ) + " "
                                                ),
                                                _c("font", [_vm._v("см")])
                                              ],
                                              1
                                            )
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          { staticClass: "item waist" },
                                          [
                                            _c("span", [_vm._v("Талия")]),
                                            _vm._v(" "),
                                            _c(
                                              "b",
                                              [
                                                _vm._v(
                                                  _vm._s(
                                                    _vm.measurement[
                                                      "body-parameters"
                                                    ]["waist"]
                                                  ) + " "
                                                ),
                                                _c("font", [_vm._v("см")])
                                              ],
                                              1
                                            )
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          { staticClass: "item byrd" },
                                          [
                                            _c("span", [_vm._v("Бедра")]),
                                            _vm._v(" "),
                                            _c(
                                              "b",
                                              [
                                                _vm._v(
                                                  _vm._s(
                                                    _vm.measurement[
                                                      "body-parameters"
                                                    ]["hips"]
                                                  ) + " "
                                                ),
                                                _c("font", [_vm._v("см")])
                                              ],
                                              1
                                            )
                                          ]
                                        )
                                      ]
                                    )
                                  ]
                                )
                              ]
                            : _vm._e()
                        ],
                        2
                      ),
                      _vm._v(" "),
                      _vm.work_has_photo || _vm.work_has_video
                        ? [
                            _c("div", { staticClass: "separator" }),
                            _vm._v(" "),
                            _vm.slides.length > 0
                              ? _c(
                                  "div",
                                  {
                                    class: [
                                      "lm-m-cs-certification-attachments",
                                      { null: _vm.slides.length === 0 }
                                    ]
                                  },
                                  [
                                    _vm.slides.length > 0
                                      ? [
                                          _vm._m(0),
                                          _vm._v(" "),
                                          _c(
                                            "div",
                                            {
                                              staticClass:
                                                "lm-m-cs-certification-attachments--wrap"
                                            },
                                            _vm._l(_vm.slides, function(slide) {
                                              return _c(
                                                "div",
                                                {
                                                  staticClass:
                                                    "lm-m-cs-certification-attachments--item"
                                                },
                                                [
                                                  _c(
                                                    "media",
                                                    {
                                                      class: [
                                                        slide.type.includes(
                                                          "photo"
                                                        )
                                                          ? "photo"
                                                          : "video"
                                                      ],
                                                      attrs: {
                                                        media: slide,
                                                        type: slide.type.includes(
                                                          "photo"
                                                        )
                                                          ? "photo"
                                                          : "video",
                                                        src: slide.type.includes(
                                                          "photo"
                                                        )
                                                          ? slide.paths.original
                                                          : null,
                                                        player: slide.type.includes(
                                                          "video"
                                                        )
                                                          ? slide.player
                                                          : null,
                                                        album:
                                                          "order_" +
                                                          _vm.order.id
                                                      }
                                                    },
                                                    [
                                                      _c("img", {
                                                        attrs: {
                                                          src: slide.type.includes(
                                                            "photo"
                                                          )
                                                            ? slide.paths[
                                                                "128x128"
                                                              ]
                                                            : slide.cover_image,
                                                          alt:
                                                            "Заказ #" +
                                                            _vm.order.id
                                                        }
                                                      }),
                                                      _vm._v(" "),
                                                      _vm.has(slide, "type") &&
                                                      slide.type.includes(
                                                        "video"
                                                      )
                                                        ? _c("i", {
                                                            staticClass:
                                                              "lm-play-button"
                                                          })
                                                        : _vm._e()
                                                    ]
                                                  )
                                                ],
                                                1
                                              )
                                            }),
                                            0
                                          )
                                        ]
                                      : _vm._e(),
                                    _vm._v(" "),
                                    _vm.archive_path
                                      ? [
                                          _c(
                                            "div",
                                            {
                                              staticClass:
                                                "lm-m-cs-certification-page--wrap"
                                            },
                                            [
                                              _c(
                                                "a",
                                                {
                                                  staticClass:
                                                    "lm-m-cs-certification-attachments--archive",
                                                  attrs: {
                                                    href: _vm.archive_path
                                                  }
                                                },
                                                [
                                                  _c("i", {
                                                    staticClass:
                                                      "lm-icon-square-download"
                                                  }),
                                                  _vm._v(" "),
                                                  _c("span", [
                                                    _vm._v("скачать архивом")
                                                  ])
                                                ]
                                              )
                                            ]
                                          )
                                        ]
                                      : _vm._e(),
                                    _vm._v(" "),
                                    !_vm.archive_path ? [_vm._m(1)] : _vm._e()
                                  ],
                                  2
                                )
                              : _vm._e()
                          ]
                        : _vm._e(),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass:
                            "lm-action-buttons lm-bottom-actions-buttons"
                        },
                        [
                          _c(
                            "router-link",
                            {
                              staticClass: "lm-link-button",
                              attrs: {
                                to: {
                                  name: "certifying.executor.orders.show",
                                  params: { order_id: _vm.order.id }
                                }
                              }
                            },
                            [_vm._v("назад")]
                          ),
                          _vm._v(" "),
                          _c(
                            "router-link",
                            {
                              staticClass: "lm-primary-button middle",
                              attrs: {
                                to: { name: "certifying.executor.orders.index" }
                              }
                            },
                            [_vm._v("Готово")]
                          )
                        ],
                        1
                      )
                    ],
                    2
                  )
                ]
              : _vm._e()
          ]
        : [
            _c(
              "div",
              { staticClass: "lm-m-cs-agree-meeting-page lm-m-fullh-page" },
              [
                _vm._m(2),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "lm-action-buttons lm-bottom-actions-buttons"
                  },
                  [
                    _c(
                      "router-link",
                      {
                        staticClass: "lm-link-button",
                        attrs: {
                          to: { name: "certifying.executor.orders.index" }
                        }
                      },
                      [_vm._v("назад")]
                    )
                  ],
                  1
                )
              ]
            )
          ]
    ],
    2
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "lm-m-cs-certification-page--wrap" }, [
      _c("span", { staticClass: "title" }, [_vm._v("Файлы:")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "lm-m-cs-certification-page--wrap" }, [
      _c("a", { staticClass: "lm-m-cs-certification-attachments--archive" }, [
        _c("span", [_vm._v("Идет генерация архива...")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "lm-m-cs-wait-page--wrap" }, [
      _c("h3", { staticClass: "title" }, [_vm._v("Заказ найден")]),
      _vm._v(" "),
      _c("div", { staticClass: "desc" }, [
        _c("div", { staticClass: "top" }, [
          _vm._v("К сожалению, данный заказ не найден.")
        ])
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
    require("vue-hot-reload-api")      .rerender("data-v-4f94ceee", esExports)
  }
}

/***/ })

});
//# sourceMappingURL=113.build.5e187d9b5f6bde074eb4.js.map