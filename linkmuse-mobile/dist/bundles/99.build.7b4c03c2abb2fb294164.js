webpackJsonp([99],{

/***/ 1409:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Index_OLD_vue__ = __webpack_require__(1788);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_08908419_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Index_OLD_vue__ = __webpack_require__(2428);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(2426)
}
var normalizeComponent = __webpack_require__(2)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-08908419"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Index_OLD_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_08908419_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Index_OLD_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/views/Settings/Index.OLD.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-08908419", Component.options)
  } else {
    hotAPI.reload("data-v-08908419", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 1505:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);


/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      loadingCities: false
    };
  },

  methods: {
    /**
     * Handle change country select. Loaded cities.
     *
     * @param countryId
     * @param clear
     * @param loading
     * @param callback
     * @private
     */
    _handleChangeCountrySelect: function _handleChangeCountrySelect(countryId) {
      var clear = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

      var _this = this;

      var loading = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      var callback = arguments[3];

      if (!countryId) this.fields.cityId = null;
      if (clear) this.fields.cityId = null;

      return new Promise(function (resolve, reject) {
        if (!countryId) {
          reject && reject();
          return false;
        }

        if (callback && typeof callback === 'function') callback();

        _this.sources.cities = [];
        if (loading) _this.loadingCities = true;

        _this._fetchCities(countryId).then(function (data) {
          _this.loadingCities = false;
          _this.$set(_this.sources, 'cities', data);

          resolve && resolve();
        }).catch(function () {
          _this.loadingCities = false;
          reject && reject();
        });
      });
    },

    _handleSearchCities: __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.debounce(function (search, loading, options) {
      var _this2 = this;

      if (search) {
        loading(true);

        this._fetchCities(this.fields.countryId, search).then(function (data) {
          options(data);

          _this2.$set(_this2.sources, 'cities', data);

          var indexOf = data.map(function (c) {
            return c.id;
          }).indexOf(_this2.fields.cityId);
          if (indexOf < 0) _this2.fields.cityId = null;

          loading(false);
        }).catch(function () {
          loading(false);
        });
      }
    }, 500),
    _fetchCities: function _fetchCities(country_id) {
      var _this3 = this;

      var q = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

      return new Promise(function (resolve, reject) {
        _this3.$api.get('api/v1/geo/cities', { q: q, country_id: country_id }).then(function (response) {
          var data = response.data;

          resolve && resolve(data);
        }, function (error) {
          var _error$response = error.response,
              data = _error$response.data,
              status = _error$response.status;

          reject && reject();
          throw new Error('Error loading castings cities');
        });
      });
    }
  }
});

/***/ }),

/***/ 1515:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Mixins_Popup__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mint_ui__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mint_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_mint_ui__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  components: { 'mt-popup': __WEBPACK_IMPORTED_MODULE_2_mint_ui__["Popup"] },
  mixins: [__WEBPACK_IMPORTED_MODULE_1__components_Mixins_Popup__["a" /* default */]],
  data: function data() {
    return {
      modal: {
        zoom: 0,
        minZoom: 0,
        maxZoom: 2,
        path: null,
        value: false,
        preview: null,
        success: false,
        loading: false,
        loadingPhoto: false
      }
    };
  },

  computed: {
    hasPhoto: function hasPhoto() {
      var _modal = this.modal,
          value = _modal.value,
          path = _modal.path,
          loadingPhoto = _modal.loadingPhoto;

      return !!value && !!path && !loadingPhoto;
    },
    preview: function preview() {
      return this.modal.preview;
    },
    loading: function loading() {
      return this.modal.loading;
    },
    loadingPhoto: function loadingPhoto() {
      return this.modal.loadingPhoto;
    }
  },
  mounted: function mounted() {
    var _this = this;

    this.$root.$on('open-modal-cropper-avatar', function (path) {
      _this.modal.path = path;
      _this.modal.value = true;
      _this.modal.loadingPhoto = true;

      var image = new Image();
      image.src = _this.modal.path;

      image.onload = function (_) {
        _this.modal.loadingPhoto = false;
      };
    });
  },

  methods: {
    _handleInputPopup: function _handleInputPopup(value) {
      if (value === false) {
        this.$refs.cropper.destroy();
        this._handleClearModal();
      }
    },
    _handleHideModal: function _handleHideModal() {
      this.$refs.cropper.destroy();
      this._handleClearModal();
    },
    _handleClearModal: function _handleClearModal() {
      var _this2 = this;

      this.modal.value = false;

      this.$nextTick(function () {
        _this2.modal = {
          zoom: 0,
          minZoom: 0,
          maxZoom: 2,
          path: null,
          value: false,
          preview: null,
          success: false,
          loading: false,
          loadingPhoto: false
        };
      });
    },
    _handleCropReady: function _handleCropReady() {
      var _this3 = this;

      this.$nextTick(function () {
        var context = _this3.$refs.cropper;
        context.setCropBoxData({ width: 210, height: 210 });

        var image = context.getImageData();
        var cropBox = context.getCropBoxData();

        _this3.modal.zoom = image.height > image.width ? image.width / image.naturalWidth : image.height / image.naturalHeight;
        _this3.modal.minZoom = image.height > image.width ? cropBox.width / image.naturalWidth : cropBox.height / image.naturalHeight;
      });
    },

    _handleCropCropper: __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.debounce(function (e) {
      var context = this.$refs.cropper;
      var size = { width: 40, height: 40 };

      this.modal.preview = context.getCroppedCanvas(size).toDataURL();
    }, 100),
    _handleClickUploadAvatar: function _handleClickUploadAvatar() {
      var _this4 = this;

      __WEBPACK_IMPORTED_MODULE_2_mint_ui__["Indicator"].open();
      this.modal.loading = true;
      var context = this.$refs.cropper;
      var size = { width: 564, height: 564 };

      context.disable();
      context.getCroppedCanvas(size).toBlob(function (blob) {
        var data = new FormData();
        data.append('image', blob, 'avatar.png');

        _this4.$api.post('api/v2/settings/avatar', data).then(function (response) {
          context.enable();
          var data = response.data.data;


          _this4.$root.$emit('updated-avatar', data);
          _this4.$store.dispatch('auth/setUserField', { field: 'avatar', value: data });

          __WEBPACK_IMPORTED_MODULE_2_mint_ui__["Indicator"].close();
          _this4._handleHideModal();
          _this4.modal.loading = false;
        }, function (error) {
          context.enable();
          __WEBPACK_IMPORTED_MODULE_2_mint_ui__["Indicator"].close();
          _this4.modal.loading = false;

          var _error$response = error.response,
              data = _error$response.data,
              status = _error$response.status;

          Object(__WEBPACK_IMPORTED_MODULE_2_mint_ui__["Toast"])({ message: 'Произошла ошибка', iconClass: 'mintui mintui-field-error' });

          if (status === 422 && data.errors) {
            var errors = data.errors;
          } else throw new Error('Error upload avatar');
        });
      }, 'image/png');
    },
    _handleClickZoomPlus: function _handleClickZoomPlus() {
      var _this5 = this;

      this.$nextTick(function () {
        var context = _this5.$refs.cropper;
        context.relativeZoom(0.1);
      });
    },
    _handleClickZoomOut: function _handleClickZoomOut() {
      var _this6 = this;

      this.$nextTick(function () {
        var context = _this6.$refs.cropper;
        context.relativeZoom(-0.1);
      });
    },
    _handleClickRotate: function _handleClickRotate() {
      var _this7 = this;

      this.$nextTick(function () {
        var context = _this7.$refs.cropper;
        context.rotate(90);
      });
    },
    _handleCropZoom: function _handleCropZoom(event) {
      if (event.detail.ratio > this.modal.maxZoom) {
        event.preventDefault();
        this.$refs.cropper.zoomTo(this.modal.maxZoom);
      }

      this.modal.zoom = event.detail.ratio;
    }
  }
});

/***/ }),

/***/ 1548:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_CropperAvatar_vue__ = __webpack_require__(1515);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_1efbeebe_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_CropperAvatar_vue__ = __webpack_require__(1551);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1549)
}
var normalizeComponent = __webpack_require__(2)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-1efbeebe"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_CropperAvatar_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_1efbeebe_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_CropperAvatar_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/User/Modals/CropperAvatar.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1efbeebe", Component.options)
  } else {
    hotAPI.reload("data-v-1efbeebe", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 1549:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1550);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("93d245b2", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js?sourceMap!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1efbeebe\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./CropperAvatar.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js?sourceMap!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1efbeebe\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./CropperAvatar.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1550:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(true);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"CropperAvatar.vue","sourceRoot":""}]);

// exports


/***/ }),

/***/ 1551:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "mt-popup",
    {
      staticClass: "modal-cropper",
      attrs: { position: "bottom", modal: false },
      on: { input: _vm._handleInputPopup },
      model: {
        value: _vm.modal.value,
        callback: function($$v) {
          _vm.$set(_vm.modal, "value", $$v)
        },
        expression: "modal.value"
      }
    },
    [
      _c(
        "div",
        { staticClass: "lm-m-cropper-header m-text_bold row justify_between" },
        [
          _c(
            "a",
            {
              staticClass: "color_white",
              attrs: { href: "javascript:void(0)" },
              on: { click: _vm._handleHideModal }
            },
            [_vm._v("Отмена")]
          ),
          _vm._v(" "),
          _c(
            "a",
            {
              staticClass: "color_white",
              attrs: { href: "javascript:void(0)" },
              on: { click: _vm._handleClickUploadAvatar }
            },
            [_vm._v("Сохранить")]
          )
        ]
      ),
      _vm._v(" "),
      _vm.hasPhoto
        ? [
            _c("div", { staticClass: "column align_center" }, [
              _c(
                "div",
                { staticClass: "lm-m-cropper-wrap" },
                [
                  _c("vue-cropper", {
                    ref: "cropper",
                    staticClass: "lm-m-cropper-canvas",
                    attrs: {
                      id: "cropper",
                      guides: false,
                      background: false,
                      "view-mode": 1,
                      "drag-mode": "move",
                      "aspect-ratio": 1,
                      "auto-crop-area": 0.5,
                      "check-orientation": true,
                      cropBoxMovable: false,
                      cropBoxResizable: false,
                      src: _vm.modal.path,
                      zoom: _vm._handleCropZoom,
                      crop: _vm._handleCropCropper,
                      ready: _vm._handleCropReady
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c("div", { staticClass: "lm-m-cropper-preview" }, [
                _c("img", {
                  staticStyle: { width: "40px", height: "40px" },
                  attrs: { src: _vm.preview, alt: "Preview 40x40" }
                })
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "corrector-icon" }, [
                _c(
                  "svg",
                  {
                    class: [
                      "icon",
                      "icon_size_16",
                      "fill_white",
                      "mr_4",
                      { disabled: _vm.modal.zoom >= this.modal.maxZoom }
                    ],
                    on: { click: _vm._handleClickZoomPlus }
                  },
                  [
                    _c("use", {
                      attrs: {
                        "xlink:href":
                          "/dist/img/icons/svg/sprite.svg#lm-icon-zoom-in"
                      }
                    })
                  ]
                ),
                _vm._v(" "),
                _c(
                  "svg",
                  {
                    class: [
                      "icon",
                      "icon_size_16",
                      "fill_white",
                      "mr_4",
                      { disabled: _vm.modal.zoom <= this.modal.minZoom }
                    ],
                    on: { click: _vm._handleClickZoomOut }
                  },
                  [
                    _c("use", {
                      attrs: {
                        "xlink:href":
                          "/dist/img/icons/svg/sprite.svg#lm-icon-zoom-out"
                      }
                    })
                  ]
                ),
                _vm._v(" "),
                _c(
                  "svg",
                  {
                    staticClass: "icon icon_size_16 fill_white",
                    on: { click: _vm._handleClickRotate }
                  },
                  [
                    _c("use", {
                      attrs: {
                        "xlink:href":
                          "/dist/img/icons/svg/sprite.svg#lm-icon-rotate"
                      }
                    })
                  ]
                )
              ])
            ])
          ]
        : _vm._e(),
      _vm._v(" "),
      _vm.loadingPhoto ? _c("lm-m-loader") : _vm._e()
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-1efbeebe", esExports)
  }
}

/***/ }),

/***/ 1788:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mint_ui__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mint_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_mint_ui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vuex_map_fields__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modules_oauth_native__ = __webpack_require__(436);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_User_Modals_CropperAvatar_vue__ = __webpack_require__(1548);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__modules_Geo_mixins_AjaxSelectCity__ = __webpack_require__(1505);
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//











var _createHelpers = Object(__WEBPACK_IMPORTED_MODULE_3_vuex_map_fields__["a" /* createHelpers */])({
  getterType: 'user/getField',
  mutationType: 'user/updateField'
}),
    mapFields = _createHelpers.mapFields;

/* harmony default export */ __webpack_exports__["a"] = ({
  mixins: [__WEBPACK_IMPORTED_MODULE_6__modules_Geo_mixins_AjaxSelectCity__["a" /* default */]],
  components: { CropperAvatarModal: __WEBPACK_IMPORTED_MODULE_5__components_User_Modals_CropperAvatar_vue__["a" /* default */] },
  metaInfo: {
    title: 'Настройки'
  },
  asyncData: function asyncData(_ref) {
    var _this = this;

    var store = _ref.store,
        route = _ref.route;
    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var promises, initializedSources;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              promises = [];
              initializedSources = store.getters['user/getInitializedSettingsSources'];

              if (initializedSources) {
                _context.next = 5;
                break;
              }

              _context.next = 5;
              return store.dispatch('user/getSourcesSettings');

            case 5:
              _context.next = 7;
              return store.dispatch('user/getFieldsSettings');

            case 7:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this);
    }))();
  },
  data: function data() {
    return {
      avatarCrop: {
        modal: false,
        crop: null
      },
      isNative: true,
      username: { default: null },
      phone: { token: null, default: null },
      email: { default: null, success: false },
      loading: false,
      disabled: {
        phone: true,
        email: true,
        password: true,
        username: true
      }
    };
  },

  computed: _extends({}, mapFields({ fields: 'settings.fields' }), Object(__WEBPACK_IMPORTED_MODULE_1_vuex__["c" /* mapGetters */])({
    hasEmail: 'auth/hasEmail',
    hasPhone: 'auth/hasPhone',
    user: 'auth/getAuthUser',
    sources: 'user/getSettingsSources'
  }), {
    hasCountry: function hasCountry() {
      return !!this.fields.countryId;
    },
    hasCity: function hasCity() {
      return !!this.fields.cityId;
    },
    hasPhoneField: function hasPhoneField() {
      return !!this.fields.phone;
    },
    hasEmailField: function hasEmailField() {
      return !!this.fields.email;
    },
    avatar: function avatar() {
      var path = this.fields.avatar['183x183'];

      return path;
    },
    socialAccounts: function socialAccounts() {
      var socialAccounts = this.fields.socialAccounts;

      return socialAccounts;
    },
    hasSocialAccountApple: function hasSocialAccountApple() {
      return this.socialAccounts && Object(__WEBPACK_IMPORTED_MODULE_0__utils__["l" /* has */])(this.socialAccounts, 'apple');
    },
    hasSocialAccountVkontakte: function hasSocialAccountVkontakte() {
      return this.socialAccounts && Object(__WEBPACK_IMPORTED_MODULE_0__utils__["l" /* has */])(this.socialAccounts, 'vkontakte');
    },
    hasSocialAccountFacebook: function hasSocialAccountFacebook() {
      return this.socialAccounts && Object(__WEBPACK_IMPORTED_MODULE_0__utils__["l" /* has */])(this.socialAccounts, 'facebook');
    },
    hasSocialAccountGoogle: function hasSocialAccountGoogle() {
      return this.socialAccounts && Object(__WEBPACK_IMPORTED_MODULE_0__utils__["l" /* has */])(this.socialAccounts, 'google');
    }
  }),
  beforeDestroy: function beforeDestroy() {
    this.$root.$off('detach-phone');
    this.$root.$off('attached-phone');
    this.$root.$off('updated-avatar');
  },
  created: function created() {
    var _this2 = this;

    this.$root.$on('detach-phone', function (token) {
      _this2.phone['token'] = token;
      _this2._clearPhoneField();
    });

    this.$root.$on('attached-phone', function () {
      _this2.phone['token'] = null;
      _this2._handleClickChangeDisabled('phone');
      Object(__WEBPACK_IMPORTED_MODULE_2_mint_ui__["Toast"])({ message: 'Настройки безопасности изменены', iconClass: 'mintui mintui-success' });
    });

    this.$root.$on('updated-avatar', function (data) {
      Object.assign(_this2.fields['avatar'], data);
    });
  },
  mounted: function mounted() {
    var _this3 = this;

    if (__WEBPACK_IMPORTED_MODULE_0__utils__["n" /* isBrowser */]) {
      setTimeout(function () {
        _this3.isNative = Object(__WEBPACK_IMPORTED_MODULE_0__utils__["o" /* isNative */])();
      }, 100);
    }
  },

  methods: {
    _handleClickPreviousPage: function _handleClickPreviousPage() {
      if (window.history.length > 2) {
        this.$router.go(-1);
      } else this.$router.push({ name: 'user.show', params: { username: this.user.username } });
    },

    /**
     * Validate all fields on current transition
     * @returns {Promise<any>}
     * @private
     */
    _handleValidateFields: function _handleValidateFields() {
      var _this4 = this;

      return new Promise(function (resolve, reject) {
        _this4.$validator.validateAll().then(function (result) {
          if (result) {
            resolve(result);
          } else reject();
        });
      });
    },
    _handleClickChangeDisabled: function _handleClickChangeDisabled(field) {
      if (this.disabled.hasOwnProperty(field)) {
        this.disabled[field] = !Boolean(this.disabled[field]);
      } else throw new Error('Not found disabled field.');
    },
    _handleClickChangeDisabledPhone: function _handleClickChangeDisabledPhone() {
      if (this.hasPhone) {
        this._detachPhone();
      } else this._clearPhoneField();
    },
    _detachPhone: function _detachPhone() {
      var phone = this.fields.phone;

      this.$modalRouter.push({ name: 'users.settings.phone.detach', props: { phone: phone } });
    },
    _clearPhoneField: function _clearPhoneField() {
      var _this5 = this;

      var phone = this.fields.phone;

      this.phone['default'] = phone;

      this.fields['phone'] = null;
      this._handleClickChangeDisabled('phone');
      this.$nextTick(function () {
        return _this5.$refs['phone'].focus();
      });
    },
    _handleClickReturnChangeDisabledPhone: function _handleClickReturnChangeDisabledPhone() {
      this.fields['phone'] = this.phone['default'];
      this._handleClickChangeDisabled('phone');
    },
    _handleClickAttachPhone: function _handleClickAttachPhone() {
      var _this6 = this;

      this.$validator.validate('phone').then(function (result) {
        if (result) {
          var token = _this6.phone.token;
          var phone = _this6.fields.phone;

          _this6.$modalRouter.push({ name: 'users.settings.phone.attach', props: { token: token, phone: phone } });
        }
      });
    },
    _handleClickChangeDisabledEmail: function _handleClickChangeDisabledEmail() {
      this._clearEmailField();
    },
    _handleClickReturnChangeDisabledEmail: function _handleClickReturnChangeDisabledEmail() {
      this.fields['email'] = this.email['default'];
      this._handleClickChangeDisabled('email');
    },
    _clearEmailField: function _clearEmailField() {
      var _this7 = this;

      var email = this.fields.email;

      this.email['default'] = email;

      this.fields['email'] = null;
      this._handleClickChangeDisabled('email');
      this.$nextTick(function () {
        return _this7.$refs['email'].focus();
      });
    },
    _handleClickAttachEmail: function _handleClickAttachEmail() {
      var _this8 = this;

      this.$validator.validate('email').then(function (result) {
        if (result) {
          var email = _this8.fields.email;

          __WEBPACK_IMPORTED_MODULE_2_mint_ui__["Indicator"].open();

          return new Promise(function (resolve, reject) {
            _this8.$api.patch('api/v2/settings/email', { email: email }).then(function (response) {
              var data = response.data.data;


              __WEBPACK_IMPORTED_MODULE_2_mint_ui__["Indicator"].close();
              _this8.email['success'] = true;
              _this8.$store.dispatch('auth/getUserByAPI');
              _this8.$store.dispatch('auth/setUserField', { key: 'hasEmail', value: true });
              Object(__WEBPACK_IMPORTED_MODULE_2_mint_ui__["Toast"])({ message: 'Настройки безопасности изменены', iconClass: 'mintui mintui-success' });
              resolve && resolve(data);
            }, function (error) {
              var _error$response = error.response,
                  data = _error$response.data,
                  status = _error$response.status;


              __WEBPACK_IMPORTED_MODULE_2_mint_ui__["Indicator"].close();
              Object(__WEBPACK_IMPORTED_MODULE_2_mint_ui__["Toast"])({ message: 'Ошибка', iconClass: 'mintui mintui-field-error' });

              reject && reject();

              if (status === 422) {
                _this8.$setLaravelValidationErrorsFromResponse(data);
              } else throw new Error('Error save settings');
            });
          });
        }
      });
    },
    _handleClickChangeDisabledUsername: function _handleClickChangeDisabledUsername() {
      this._clearUsernameField();
    },
    _clearUsernameField: function _clearUsernameField() {
      var _this9 = this;

      var username = this.fields.username;

      this.username['default'] = username;

      this.fields['username'] = null;
      this._handleClickChangeDisabled('username');
      this.$nextTick(function () {
        return _this9.$refs['username'].focus();
      });
    },
    _handleClickReturnChangeDisabledUsername: function _handleClickReturnChangeDisabledUsername() {
      this.fields['username'] = this.email['username'];
      this._handleClickChangeDisabled('username');
    },
    _handleClickChangeDisabledPassword: function _handleClickChangeDisabledPassword() {
      this._clearPasswordField();
    },
    _clearPasswordField: function _clearPasswordField() {
      var _this10 = this;

      this.fields['password'] = null;
      this._handleClickChangeDisabled('password');
      this.$nextTick(function () {
        return _this10.$refs['password'].focus();
      });
    },
    _handleClickReturnChangeDisabledPassword: function _handleClickReturnChangeDisabledPassword() {
      this.fields['password'] = null;
      this._handleClickChangeDisabled('password');
    },
    _handleClickSaveSettings: function _handleClickSaveSettings() {
      var _this11 = this;

      this._handleValidateFields().then(function () {
        _this11._saveSettings().then(function () {
          Object(__WEBPACK_IMPORTED_MODULE_2_mint_ui__["Toast"])({ message: 'Настройки успешно сохранены', iconClass: 'mintui mintui-success' });
          _this11.$store.dispatch('auth/getUserByAPI').then(function (user) {
            var username = user.username;

            _this11.$router.push({ name: 'user.show', params: { username: username } });
          }).catch(function () {});
        }).catch(function () {
          return _this11._scrollToErrorFields();
        });
      }).catch(function () {
        return _this11._scrollToErrorFields();
      });
    },
    _scrollToErrorFields: function _scrollToErrorFields() {
      var el = document.getElementsByClassName('error');
      if (el && el.length) this.$scrollTo(el[0], 500, { offset: -40 });
    },
    _saveSettings: function _saveSettings() {
      var _this12 = this;

      return new Promise(function (resolve, reject) {

        _this12.loading = true;
        __WEBPACK_IMPORTED_MODULE_2_mint_ui__["Indicator"].open();

        var data = _this12._.cloneDeep(_this12.fields);

        if (_this12.disabled['password']) {
          _this12.$delete(data, 'password');
        }

        if (_this12.disabled['username']) {
          _this12.$delete(data, 'username');
        }

        _this12.$api.patch('api/v2/settings', data).then(function (response) {
          var data = response.data.data;


          __WEBPACK_IMPORTED_MODULE_2_mint_ui__["Indicator"].close();
          _this12.loading = false;
          resolve && resolve(data);
        }, function (error) {
          var _error$response2 = error.response,
              data = _error$response2.data,
              status = _error$response2.status;


          __WEBPACK_IMPORTED_MODULE_2_mint_ui__["Indicator"].close();
          _this12.loading = false;
          Object(__WEBPACK_IMPORTED_MODULE_2_mint_ui__["Toast"])({ message: 'Ошибка', iconClass: 'mintui mintui-field-error' });

          reject && reject();

          if (status === 422) {
            _this12.$setLaravelValidationErrorsFromResponse(data);
          } else throw new Error('Error save settings');
        });
      });
    },
    _handleClickDestroyPage: function _handleClickDestroyPage() {
      var _this13 = this;

      this.$confirm({
        cancelTxt: 'отмена',
        confirmTxt: 'удалить',
        title: 'Подтвердите действие',
        message: 'Вы уверены, что хотите удалить аккаунт и все данные в нем?'
      }).then(function (args) {
        __WEBPACK_IMPORTED_MODULE_2_mint_ui__["Indicator"].open();
        _this13.$api.delete('/api/v1/users').then(function (response) {
          __WEBPACK_IMPORTED_MODULE_2_mint_ui__["Indicator"].close();
          _this13.$gtm.trackEvent({ event: 'delete_page' });
          Object(__WEBPACK_IMPORTED_MODULE_2_mint_ui__["Toast"])({ message: 'Аккаунт успешно удален', iconClass: 'mintui mintui-success' });
          _this13.logout();
        }, function (error) {
          __WEBPACK_IMPORTED_MODULE_2_mint_ui__["Indicator"].close();
          Object(__WEBPACK_IMPORTED_MODULE_2_mint_ui__["Toast"])({ message: 'Ошибка', iconClass: 'mintui mintui-field-error' });
          throw new Error('Error destroy account.');
        });
      }).catch(function (args) {});
    },
    logout: function logout() {
      var _this14 = this;

      __WEBPACK_IMPORTED_MODULE_2_mint_ui__["Indicator"].open();

      this.$auth.logout().then(function () {
        var redirection = '/';

        _this14.$store.dispatch('auth/destroyToken', { reload: false }).then(function (res) {
          if (_this14.$route.query.redirect) {
            redirection = _this14.$route.query.redirect;
          }

          _this14.$router.replace(redirection, function () {
            __WEBPACK_IMPORTED_MODULE_2_mint_ui__["Indicator"].close();
          });
        }, function (err) {
          _this14.$router.replace(redirection, function () {
            __WEBPACK_IMPORTED_MODULE_2_mint_ui__["Indicator"].close();
          });
        });
      }).catch(function (error) {
        console.log(error);
        _this14.$store.dispatch('auth/destroyToken', { reload: true });
      });
    },
    _handleChangeInputAvatar: function _handleChangeInputAvatar(el) {
      var _this15 = this;

      var files = el.target.files || el.dataTransfer.files;
      if (!files.length) return;

      var file = el.target.files[0];

      if (!file.type.includes('image/')) {
        console.log('Please select an image file');
        return;
      }

      if (typeof FileReader === 'function') {
        var reader = new FileReader();

        reader.onload = function (event) {
          var next = function next(src, file) {
            _this15._handleUploadAvatar(file).then(function (_ref2) {
              var path = _ref2.path;

              _this15.fields['avatar']['path'] = src;
              _this15.fields['avatar']['183x183'] = src;
              _this15.$store.dispatch('auth/getUserByAPI');
              _this15.$root.$emit('open-modal-cropper-avatar', src);
            }).catch(function (data, status) {
              Object(__WEBPACK_IMPORTED_MODULE_2_mint_ui__["Toast"])({ message: 'Ошибка', iconClass: 'mintui mintui-field-error' });
            });
          };

          Object(__WEBPACK_IMPORTED_MODULE_0__utils__["x" /* resizeImage */])(event.target.result, 1280, null, 'image/png').then(function (_ref3) {
            var src = _ref3.src,
                blob = _ref3.blob;

            next(src, blob);
          }).catch(function (err) {
            _this15.fields['avatar']['path'] = event.target.result;
            next(event.target.result, file);
            console.error(err);
          });
        };
        reader.readAsDataURL(file);
      } else console.log('Sorry, FileReader API not supported');
    },
    _handleUploadAvatar: function _handleUploadAvatar(file) {
      var _this16 = this;

      return new Promise(function (resolve, reject) {
        __WEBPACK_IMPORTED_MODULE_2_mint_ui__["Indicator"].open();

        var data = new FormData();
        data.append('image', file, 'avatar.png');

        _this16.$api.post('api/v2/settings/avatar/original', data).then(function (response) {
          var path = response.data.data.path;


          __WEBPACK_IMPORTED_MODULE_2_mint_ui__["Indicator"].close();
          _this16.$gtm.trackEvent({ event: 'UPLOAD_PHOTO_AVATAR' });
          resolve({ path: path });
        }, function (error) {
          __WEBPACK_IMPORTED_MODULE_2_mint_ui__["Indicator"].close();

          var _error$response3 = error.response,
              data = _error$response3.data,
              status = _error$response3.status;


          if (status === 422 && data.errors) {
            var errors = data.errors;
          } else throw new Error('Error upload avatar');

          reject(data, status);
        });
      });
    },
    _handleClickDestroyAvatar: function _handleClickDestroyAvatar() {
      var _this17 = this;

      this.$confirm({
        cancelTxt: 'отмена',
        confirmTxt: 'удалить',
        title: 'Подтвердите действие',
        message: 'Вы уверены, что хотите удалить аватар?'
      }).then(function (args) {
        __WEBPACK_IMPORTED_MODULE_2_mint_ui__["Indicator"].open();
        _this17.$api.delete('api/v2/settings/avatar').then(function (response) {
          __WEBPACK_IMPORTED_MODULE_2_mint_ui__["Indicator"].close();
          _this17.$store.dispatch('auth/getUserByAPI');
          _this17.$store.dispatch('auth/setUserField', { field: 'avatar.84x84', value: __WEBPACK_IMPORTED_MODULE_0__utils__["a" /* AVATAR */] });
          Object(__WEBPACK_IMPORTED_MODULE_2_mint_ui__["Toast"])({ message: 'Аватар успешно удален', iconClass: 'mintui mintui-success' });
        }, function (error) {
          __WEBPACK_IMPORTED_MODULE_2_mint_ui__["Indicator"].close();
          Object(__WEBPACK_IMPORTED_MODULE_2_mint_ui__["Toast"])({ message: 'Ошибка', iconClass: 'mintui mintui-field-error' });
          throw new Error('Error delete avatar.');
        });
      }).catch(function (args) {});
    },
    onFocus: function onFocus() {
      event.target.parentNode.querySelector('input').focus();
      //console.log(event.target.tagName)
    },
    _handleClickDetachSocial: function _handleClickDetachSocial(social) {
      var _this18 = this;

      __WEBPACK_IMPORTED_MODULE_2_mint_ui__["Indicator"].open();
      this._deleteSocial(social).then(function () {
        __WEBPACK_IMPORTED_MODULE_2_mint_ui__["Indicator"].close();
        _this18.$delete(_this18.fields.socialAccounts, social);
      }).catch(function () {
        __WEBPACK_IMPORTED_MODULE_2_mint_ui__["Indicator"].close();
      });
    },
    _deleteSocial: function _deleteSocial(social) {
      var _this19 = this;

      return new Promise(function (resolve, reject) {

        _this19.$api.delete('api/v2/users/social/' + social).then(function (response) {
          resolve && resolve();
        }, function (error) {
          var _error$response4 = error.response,
              data = _error$response4.data,
              status = _error$response4.status;


          reject && reject();

          Object(__WEBPACK_IMPORTED_MODULE_2_mint_ui__["Toast"])({ message: 'Ошибка', iconClass: 'mintui mintui-field-error' });

          throw new Error('Error delete social');
        });
      });
    },
    _handleClickOAuthVk: function _handleClickOAuthVk() {
      var _this20 = this;

      this.$nativeOAuth.appOAuth(__WEBPACK_IMPORTED_MODULE_4__modules_oauth_native__["d" /* VK */]).then(function (data) {
        var get = Object(__WEBPACK_IMPORTED_MODULE_0__utils__["l" /* has */])(data, 'mobile') ? _this20.$api.get('/api/v1/oauth/vkontakte/callback', data) : _this20.$api.get('oauth/mobile/vkontakte/callback?code=' + data.code);
        _this20._attemptSign(get, 'vkontakte').then(function (response) {}, function (e) {
          if (e) {
            var _data = e.response.data;

            _this20.$bugsnag.metaData = { data: _data };
            throw e;
          }
        });
      }).catch(function (e) {
        _this20.$oauth.vkAuth().then(function (data) {
          var social = data.social,
              code = data.code;

          _this20._attemptSign(_this20.$api.get('oauth/mobile/' + social + '/callback?code=' + code), social).then(function (r) {}, function (e) {});
        }).catch(function (e) {
          throw new Error(e);
        });
      });
    },
    _handleClickOAuthFacebook: function _handleClickOAuthFacebook() {
      var _this21 = this;

      this.$nativeOAuth.appOAuth(__WEBPACK_IMPORTED_MODULE_4__modules_oauth_native__["b" /* FB */]).then(function (data) {
        _this21._attemptSign(_this21.$api.get('/api/v1/oauth/facebook/callback', data), 'facebook').then(function (response) {}, function (e) {
          if (e) {
            var _data2 = e.response.data;

            _this21.$bugsnag.metaData = { data: _data2 };
            throw e;
          }
        });
      }).catch(function (e) {
        _this21.$oauth.fbAuth().then(function (data) {
          var social = data.social,
              code = data.code;

          _this21._attemptSign(_this21.$api.get('oauth/mobile/' + social + '/callback?code=' + code), social).then(function (r) {}, function (e) {});
        }).catch(function (e) {
          throw new Error(e);
        });
      });
    },
    _handleClickOAuthGoogle: function _handleClickOAuthGoogle() {
      var _this22 = this;

      this.$nativeOAuth.appOAuth(__WEBPACK_IMPORTED_MODULE_4__modules_oauth_native__["c" /* GOOGLE */]).then(function (data) {
        if (!Object(__WEBPACK_IMPORTED_MODULE_0__utils__["l" /* has */])(data, 'code')) return _this22._handleError();

        _this22._attemptSign(_this22.$api.get('oauth/mobile/google/callback?code=' + data.code), 'google').then(function (response) {}, function (e) {
          if (e) {
            var _data3 = e.response.data;

            _this22.$bugsnag.metaData = { data: _data3 };
            throw e;
          }
        });
      }).catch(function (e) {
        _this22.$oauth.googleAuth().then(function (data) {
          var social = data.social,
              code = data.code;

          _this22._attemptSign(_this22.$api.get('oauth/mobile/' + social + '/callback?code=' + code), social).then(function (r) {}, function (e) {});
        }).catch(function (e) {
          throw new Error(e);
        });
      });
    },
    _handleClickOAuthApple: function _handleClickOAuthApple() {
      var _this23 = this;

      this.$oauth.appleAuth().then(function (data) {
        var social = data.social,
            code = data.code;

        _this23._attemptSign(_this23.$api.post('oauth/mobile/' + social + '/callback?code=' + code), social).then(function (r) {}, function (e) {});
      }).catch(function (e) {
        throw new Error(e);
      });
    },
    _attemptSign: function _attemptSign(apiPromise, social) {
      var _this24 = this;

      return new Promise(function (resolve, reject) {
        __WEBPACK_IMPORTED_MODULE_2_mint_ui__["Indicator"].open();

        apiPromise.then(function (response) {
          var _response$data = response.data,
              uid = _response$data.uid,
              link = _response$data.link;


          __WEBPACK_IMPORTED_MODULE_2_mint_ui__["Indicator"].close();

          _this24.$set(_this24.fields.socialAccounts, social, { uid: uid, link: link });
          resolve && resolve(response);
        }).catch(function (e) {
          __WEBPACK_IMPORTED_MODULE_2_mint_ui__["Indicator"].close();

          reject && reject(e);

          Object(__WEBPACK_IMPORTED_MODULE_2_mint_ui__["Toast"])({ message: 'Ошибка', iconClass: 'mintui mintui-field-error' });
        });
      });
    }
  }
});

/***/ }),

/***/ 2426:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(2427);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("50dc5f11", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js?sourceMap!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-08908419\",\"scoped\":true,\"hasInlineConfig\":true}!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Index.OLD.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js?sourceMap!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-08908419\",\"scoped\":true,\"hasInlineConfig\":true}!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Index.OLD.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 2427:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(true);
// imports


// module
exports.push([module.i, "\n.lm-upload_avatar--remove[data-v-08908419] {\n  border-radius: 8px;\n  background: url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"> <path fill=\"%23ffffff\" d=\"M10.467 3.766L7.995 6.238 5.59 3.834c-.424-.425-.99-.425-1.413-.001l-.283.282c-.423.424-.423.99.001 1.414L6.3 7.933l-2.472 2.472c-.423.424-.423.99.001 1.413l.354.354c.424.424.99.425 1.413 0l2.402-2.4 2.404 2.403c.424.425.99.425 1.413.001l.353-.353c.424-.424.424-.989 0-1.413L9.691 7.935l2.401-2.402c.424-.423.424-.989 0-1.413l-.284-.283c-.353-.495-.99-.424-1.342-.071z\"/></svg>') no-repeat center, rgba(40, 42, 54, 0.64);\n  overflow: hidden;\n  width: 24px;\n  height: 24px;\n  display: block;\n  position: absolute;\n  right: 8px;\n  top: 8px;\n  z-index: 4;\n  cursor: pointer;\n}\n", "", {"version":3,"sources":["/home/karliv/work/linkmuse-mobile/src/views/Settings/Index.OLD.vue"],"names":[],"mappings":";AAAA;EACE,mBAAmB;EACnB,wkBAAwkB;EACxkB,iBAAiB;EACjB,YAAY;EACZ,aAAa;EACb,eAAe;EACf,mBAAmB;EACnB,WAAW;EACX,SAAS;EACT,WAAW;EACX,gBAAgB;CAAE","file":"Index.OLD.vue","sourcesContent":[".lm-upload_avatar--remove {\n  border-radius: 8px;\n  background: url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"> <path fill=\"%23ffffff\" d=\"M10.467 3.766L7.995 6.238 5.59 3.834c-.424-.425-.99-.425-1.413-.001l-.283.282c-.423.424-.423.99.001 1.414L6.3 7.933l-2.472 2.472c-.423.424-.423.99.001 1.413l.354.354c.424.424.99.425 1.413 0l2.402-2.4 2.404 2.403c.424.425.99.425 1.413.001l.353-.353c.424-.424.424-.989 0-1.413L9.691 7.935l2.401-2.402c.424-.423.424-.989 0-1.413l-.284-.283c-.353-.495-.99-.424-1.342-.071z\"/></svg>') no-repeat center, rgba(40, 42, 54, 0.64);\n  overflow: hidden;\n  width: 24px;\n  height: 24px;\n  display: block;\n  position: absolute;\n  right: 8px;\n  top: 8px;\n  z-index: 4;\n  cursor: pointer; }\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 2428:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("div", { staticClass: "page page_declaration" }, [
        _c("div", { staticClass: "page-inner__container" }, [
          _c(
            "div",
            { staticClass: "page__body page-inner__body_declaration" },
            [
              _c("div", { staticClass: "block block_declaration bt_none" }, [
                _c("div", { staticClass: "heading heading_h4 mb_0" }, [
                  _vm._v(
                    "\n            " +
                      _vm._s(
                        _vm.$t("unified-profile.profile-settings.settings")
                      ) +
                      "\n          "
                  )
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "block block_declaration" }, [
                _c("div", { staticClass: "m-text_bold mb_4" }, [
                  _vm._v(
                    "\n            " +
                      _vm._s(
                        _vm.$t("unified-profile.profile-settings.personal-data")
                      ) +
                      "\n          "
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "column mb_6" }, [
                  _c("div", { staticClass: "label input__label" }, [
                    _vm._v(
                      "\n              " +
                        _vm._s(
                          _vm.$t("unified-profile.profile-settings.profile-img")
                        ) +
                        "\n            "
                    )
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass: "mb_4",
                      staticStyle: {
                        position: "relative",
                        height: "128px",
                        width: "128px"
                      }
                    },
                    [
                      0
                        ? _c("i", {
                            staticClass: "lm-upload_avatar--remove",
                            on: {
                              click: function($event) {
                                $event.stopPropagation()
                                return _vm._handleClickDestroyAvatar($event)
                              }
                            }
                          })
                        : _vm._e(),
                      _vm._v(" "),
                      _c(
                        "label",
                        {
                          staticClass:
                            "avatar-container avatar-container_setting mb_4",
                          attrs: { for: "upload_avatar" }
                        },
                        [
                          _c("img", {
                            staticClass: "d-img",
                            attrs: { src: _vm.avatar, alt: "Загрузите аватар" }
                          })
                        ]
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "label",
                    {
                      staticClass: "m-text_bold color_main",
                      attrs: { for: "upload_avatar" }
                    },
                    [
                      _vm._v(
                        _vm._s(
                          _vm.$t(
                            "unified-profile.profile-settings.download-image"
                          )
                        )
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c("input", {
                    staticStyle: { visibility: "hidden", display: "none" },
                    attrs: {
                      type: "file",
                      id: "upload_avatar",
                      accept: "image/*"
                    },
                    on: { change: _vm._handleChangeInputAvatar }
                  })
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
                        attrs: { for: "firstName" }
                      },
                      [
                        _vm._v(
                          "\n              " +
                            _vm._s(
                              _vm.$t(
                                "unified-profile.profile-settings.first-name"
                              )
                            ) +
                            "\n              "
                        ),
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
                          value: "required|min:2|max:255",
                          expression: "'required|min:2|max:255'"
                        },
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.fields["firstName"],
                          expression: "fields['firstName']"
                        }
                      ],
                      class: [
                        { error: _vm.verrors.has("firstName") },
                        "input",
                        "form__input",
                        "form__input_declaration"
                      ],
                      attrs: {
                        type: "text",
                        autocomplete: "off",
                        name: "firstName",
                        id: "firstName",
                        "data-vv-as": _vm.$t(
                          "unified-profile.profile-settings.first-name"
                        ),
                        placeholder: _vm.$t(
                          "unified-profile.profile-settings.ivan"
                        )
                      },
                      domProps: { value: _vm.fields["firstName"] },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.fields, "firstName", $event.target.value)
                        }
                      }
                    }),
                    _vm._v(" "),
                    _vm.verrors.has("firstName")
                      ? [
                          _c(
                            "div",
                            {
                              staticClass:
                                "form__notification form__notification_declaration form__notification_declaration_required"
                            },
                            [_vm._v(_vm._s(_vm.verrors.first("firstName")))]
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
                        staticClass: "label input__label",
                        attrs: { for: "lastName" }
                      },
                      [
                        _vm._v(
                          "\n              " +
                            _vm._s(
                              _vm.$t(
                                "unified-profile.profile-settings.last-name"
                              )
                            ) +
                            "\n              "
                        ),
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
                          value: "required|min:2|max:255",
                          expression: "'required|min:2|max:255'"
                        },
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.fields["lastName"],
                          expression: "fields['lastName']"
                        }
                      ],
                      class: [
                        { error: _vm.verrors.has("lastName") },
                        "input",
                        "form__input",
                        "form__input_declaration"
                      ],
                      attrs: {
                        type: "text",
                        autocomplete: "off",
                        name: "lastName",
                        id: "lastName",
                        "data-vv-as": _vm.$t(
                          "unified-profile.profile-settings.last-name"
                        ),
                        placeholder: _vm.$t(
                          "unified-profile.profile-settings.ivanov"
                        )
                      },
                      domProps: { value: _vm.fields["lastName"] },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.fields, "lastName", $event.target.value)
                        }
                      }
                    }),
                    _vm._v(" "),
                    _vm.verrors.has("lastName")
                      ? [
                          _c(
                            "div",
                            {
                              staticClass:
                                "form__notification form__notification_declaration form__notification_declaration_required"
                            },
                            [_vm._v(_vm._s(_vm.verrors.first("lastName")))]
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
                        staticClass: "label input__label",
                        attrs: { for: "birthday" }
                      },
                      [
                        _vm._v(
                          "\n              " +
                            _vm._s(
                              _vm.$t(
                                "unified-profile.profile-settings.date-of-birth"
                              )
                            ) +
                            "\n              "
                        ),
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
                        { name: "mask-date", rawName: "v-mask-date" },
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "date_format:DD.MM.YYYY|required",
                          expression: "`date_format:DD.MM.YYYY|required`"
                        },
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.fields["birthday"],
                          expression: "fields['birthday']"
                        }
                      ],
                      class: [
                        { error: _vm.verrors.has("birthday") },
                        "input",
                        "form__input",
                        "form__input_declaration"
                      ],
                      attrs: {
                        type: "text",
                        autocomplete: "off",
                        name: "birthday",
                        id: "birthday",
                        "data-vv-as": _vm.$t(
                          "unified-profile.profile-settings.date-of-birth"
                        ),
                        placeholder: _vm.$t(
                          "unified-profile.profile-settings.dd-mm-yyyy"
                        )
                      },
                      domProps: { value: _vm.fields["birthday"] },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.fields, "birthday", $event.target.value)
                        }
                      }
                    }),
                    _vm._v(" "),
                    _vm.verrors.has("birthday")
                      ? [
                          _c(
                            "div",
                            {
                              staticClass:
                                "form__notification form__notification_declaration form__notification_declaration_required"
                            },
                            [_vm._v(_vm._s(_vm.verrors.first("birthday")))]
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
                    _c("label", { staticClass: "label input__label" }, [
                      _vm._v(
                        "\n              " +
                          _vm._s(
                            _vm.$t("unified-profile.profile-settings.gender")
                          ) +
                          "\n              "
                      ),
                      _c(
                        "span",
                        { staticClass: "label_declaration_required" },
                        [_vm._v("•")]
                      )
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "form__row form__row_declaration" },
                      _vm._l(_vm.sources["genders"], function(gender) {
                        return _c(
                          "div",
                          {
                            staticClass: "form__column form__column_declaration"
                          },
                          [
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.fields["genderId"],
                                  expression: "fields['genderId']"
                                }
                              ],
                              staticClass:
                                "form__checkbox form__checkbox_declaration form__checkbox_declaration_gender",
                              attrs: {
                                id:
                                  "form__checkbox_declaration_gender_" +
                                  gender.id,
                                type: "radio",
                                name: "gender"
                              },
                              domProps: {
                                value: gender.id,
                                checked: _vm._q(
                                  _vm.fields["genderId"],
                                  gender.id
                                )
                              },
                              on: {
                                change: function($event) {
                                  return _vm.$set(
                                    _vm.fields,
                                    "genderId",
                                    gender.id
                                  )
                                }
                              }
                            }),
                            _vm._v(" "),
                            _c(
                              "label",
                              {
                                staticClass:
                                  "checkbox__label_declaration checkbox__label_declaration_gender",
                                attrs: {
                                  for:
                                    "form__checkbox_declaration_gender_" +
                                    gender.id
                                }
                              },
                              [_vm._v(_vm._s(gender.text))]
                            )
                          ]
                        )
                      }),
                      0
                    )
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "form__group form__group_declaration" },
                  [
                    _c(
                      "label",
                      {
                        staticClass: "label input__label",
                        attrs: { for: "declaration__country" }
                      },
                      [
                        _vm._v(
                          "\n              " +
                            _vm._s(
                              _vm.$t("unified-profile.profile-settings.country")
                            ) +
                            "\n              "
                        ),
                        _c(
                          "span",
                          { staticClass: "label_declaration_required" },
                          [_vm._v("•")]
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c("lm-select", {
                      directives: [
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required",
                          expression: "'required'"
                        }
                      ],
                      class: [{ error: _vm.verrors.has("countryId") }],
                      attrs: {
                        searchable: true,
                        filterable: true,
                        title: "Выбор страны",
                        "data-vv-name": "countryId",
                        "data-vv-as": _vm.$t(
                          "unified-profile.profile-settings.country"
                        ),
                        "input-required": false,
                        "input-id": "declaration__country",
                        "input-name": "country",
                        placeholder: _vm.$t(
                          "board-create-casting.new-casting.category-not-selected"
                        ),
                        placeholderDisabled: true,
                        placeholderHidden: true,
                        label: "",
                        options: _vm.sources["countries"]
                      },
                      on: {
                        input: function($event) {
                          var i = arguments.length,
                            argsArray = Array(i)
                          while (i--) argsArray[i] = arguments[i]
                          return _vm._handleChangeCountrySelect.apply(
                            void 0,
                            argsArray.concat([true], [true])
                          )
                        }
                      },
                      model: {
                        value: _vm.fields.countryId,
                        callback: function($$v) {
                          _vm.$set(_vm.fields, "countryId", $$v)
                        },
                        expression: "fields.countryId"
                      }
                    }),
                    _vm._v(" "),
                    _vm.verrors.has("countryId")
                      ? [
                          _c(
                            "div",
                            {
                              staticClass:
                                "form__notification form__notification_declaration form__notification_declaration_required"
                            },
                            [_vm._v(_vm._s(_vm.verrors.first("countryId")))]
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
                        staticClass: "label input__label",
                        attrs: { for: "declaration__city" }
                      },
                      [
                        _vm._v(
                          "\n              " +
                            _vm._s(
                              _vm.$t("unified-profile.profile-settings.city")
                            ) +
                            "\n              "
                        ),
                        _c(
                          "span",
                          { staticClass: "label_declaration_required" },
                          [_vm._v("•")]
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c("lm-select", {
                      directives: [
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required",
                          expression: "'required'"
                        }
                      ],
                      class: [{ error: _vm.verrors.has("cityId") }],
                      attrs: {
                        searchable: true,
                        filterable: false,
                        loading: _vm.loadingCities,
                        title: "Выбор города",
                        "data-vv-name": "cityId",
                        "data-vv-as": _vm.$t(
                          "unified-profile.profile-settings.city"
                        ),
                        "input-required": false,
                        "input-id": "declaration__city",
                        "input-name": "city",
                        placeholder: _vm.$t(
                          "board-create-casting.new-casting.city-not-selected"
                        ),
                        placeholderDisabled: true,
                        placeholderHidden: true,
                        label: "",
                        disabled: _vm.hasCountry === false,
                        options: _vm.sources["cities"]
                      },
                      on: { search: _vm._handleSearchCities },
                      model: {
                        value: _vm.fields.cityId,
                        callback: function($$v) {
                          _vm.$set(_vm.fields, "cityId", $$v)
                        },
                        expression: "fields.cityId"
                      }
                    }),
                    _vm._v(" "),
                    _vm.verrors.has("cityId")
                      ? [
                          _c(
                            "div",
                            {
                              staticClass:
                                "form__notification form__notification_declaration form__notification_declaration_required"
                            },
                            [_vm._v(_vm._s(_vm.verrors.first("cityId")))]
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
                        attrs: { for: "aboutMe" }
                      },
                      [
                        _vm._v(
                          "\n              " +
                            _vm._s(
                              _vm.$t("unified-profile.profile-settings.about")
                            ) +
                            "\n            "
                        )
                      ]
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
                          value: _vm.fields["aboutMe"],
                          expression: "fields['aboutMe']"
                        }
                      ],
                      class: [
                        { error: _vm.verrors.has("aboutMe") },
                        "textarea",
                        "form__textarea",
                        "form__textarea_declaration",
                        "lm-m-textarea-profile-settings"
                      ],
                      style: { minHeight: "76px" },
                      attrs: {
                        autocomplete: "off",
                        name: "aboutMe",
                        id: "aboutMe",
                        "data-vv-as": "Описание",
                        placeholder: _vm.$t(
                          "unified-profile.profile-settings.tell-us"
                        )
                      },
                      domProps: { value: _vm.fields["aboutMe"] },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.fields, "aboutMe", $event.target.value)
                        }
                      }
                    }),
                    _vm._v(" "),
                    _vm.verrors.has("aboutMe")
                      ? [
                          _c(
                            "div",
                            {
                              staticClass:
                                "form__notification form__notification_declaration form__notification_declaration_required"
                            },
                            [_vm._v(_vm._s(_vm.verrors.first("aboutMe")))]
                          )
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
                      "form__group form__group_declaration form__group_declaration_switch"
                  },
                  [
                    _c(
                      "div",
                      {
                        staticClass:
                          "form__row form__row_declaration form__row_declaration_payment"
                      },
                      [
                        _c(
                          "div",
                          { staticClass: "switch switch_declaration" },
                          [
                            _c(
                              "label",
                              {
                                staticClass: "m-text_bold color_gray-2",
                                attrs: { for: "representative" }
                              },
                              [
                                _vm._v(
                                  _vm._s(
                                    _vm.$t(
                                      "unified-profile.profile-settings.representative"
                                    )
                                  )
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.fields["representative"],
                                  expression: "fields['representative']"
                                }
                              ],
                              staticClass: "switch__mark",
                              attrs: {
                                id: "representative",
                                type: "checkbox",
                                name: "representative"
                              },
                              domProps: {
                                checked: Array.isArray(
                                  _vm.fields["representative"]
                                )
                                  ? _vm._i(_vm.fields["representative"], null) >
                                    -1
                                  : _vm.fields["representative"]
                              },
                              on: {
                                change: function($event) {
                                  var $$a = _vm.fields["representative"],
                                    $$el = $event.target,
                                    $$c = $$el.checked ? true : false
                                  if (Array.isArray($$a)) {
                                    var $$v = null,
                                      $$i = _vm._i($$a, $$v)
                                    if ($$el.checked) {
                                      $$i < 0 &&
                                        _vm.$set(
                                          _vm.fields,
                                          "representative",
                                          $$a.concat([$$v])
                                        )
                                    } else {
                                      $$i > -1 &&
                                        _vm.$set(
                                          _vm.fields,
                                          "representative",
                                          $$a
                                            .slice(0, $$i)
                                            .concat($$a.slice($$i + 1))
                                        )
                                    }
                                  } else {
                                    _vm.$set(_vm.fields, "representative", $$c)
                                  }
                                }
                              }
                            }),
                            _vm._v(" "),
                            _c("label", {
                              staticClass: "switch__btn",
                              attrs: { for: "representative" }
                            })
                          ]
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "switch__declaration_description" },
                      [
                        _c("span", [
                          _vm._v(
                            _vm._s(
                              _vm.$t("unified-profile.profile-settings.turn-on")
                            )
                          )
                        ])
                      ]
                    )
                  ]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "block block_declaration" }, [
                _c("div", { staticClass: "m-text_bold mb_4" }, [
                  _vm._v(
                    "\n            " +
                      _vm._s(
                        _vm.$t("unified-profile.profile-settings.contacts")
                      ) +
                      "\n          "
                  )
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
                        attrs: { for: "telegram" }
                      },
                      [_vm._v("\n              Telegram\n            ")]
                    ),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        { name: "mask-phone", rawName: "v-mask-phone" },
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "phone",
                          expression: "'phone'"
                        },
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.fields["telegram"],
                          expression: "fields['telegram']"
                        }
                      ],
                      class: [
                        { error: _vm.verrors.has("telegram") },
                        "input",
                        "form__input",
                        "form__input_declaration"
                      ],
                      attrs: {
                        type: "tel",
                        autocomplete: "off",
                        id: "telegram",
                        name: "telegram",
                        "data-vv-as": "Telegram",
                        placeholder: "+7 900 000 00 00"
                      },
                      domProps: { value: _vm.fields["telegram"] },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.fields, "telegram", $event.target.value)
                        }
                      }
                    }),
                    _vm._v(" "),
                    _vm.verrors.has("telegram")
                      ? [
                          _c(
                            "div",
                            {
                              staticClass:
                                "form__notification form__notification_declaration form__notification_declaration_required"
                            },
                            [_vm._v(_vm._s(_vm.verrors.first("telegram")))]
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
                        staticClass: "label input__label",
                        attrs: { for: "whatsapp" }
                      },
                      [_vm._v("\n              Whatsapp\n            ")]
                    ),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        { name: "mask-phone", rawName: "v-mask-phone" },
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "phone",
                          expression: "'phone'"
                        },
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.fields["whatsapp"],
                          expression: "fields['whatsapp']"
                        }
                      ],
                      class: [
                        { error: _vm.verrors.has("telegram") },
                        "input",
                        "form__input",
                        "form__input_declaration"
                      ],
                      attrs: {
                        type: "tel",
                        autocomplete: "off",
                        id: "whatsapp",
                        name: "whatsapp",
                        "data-vv-as": "Whatsapp",
                        placeholder: "+7 900 000 00 00"
                      },
                      domProps: { value: _vm.fields["whatsapp"] },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.fields, "whatsapp", $event.target.value)
                        }
                      }
                    }),
                    _vm._v(" "),
                    _vm.verrors.has("whatsapp")
                      ? [
                          _c(
                            "div",
                            {
                              staticClass:
                                "form__notification form__notification_declaration form__notification_declaration_required"
                            },
                            [_vm._v(_vm._s(_vm.verrors.first("telegram")))]
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
                        staticClass: "label input__label",
                        attrs: { for: "viber" }
                      },
                      [_vm._v("\n              Viber\n            ")]
                    ),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        { name: "mask-phone", rawName: "v-mask-phone" },
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "phone",
                          expression: "'phone'"
                        },
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.fields["viber"],
                          expression: "fields['viber']"
                        }
                      ],
                      class: [
                        { error: _vm.verrors.has("telegram") },
                        "input",
                        "form__input",
                        "form__input_declaration"
                      ],
                      attrs: {
                        type: "tel",
                        autocomplete: "off",
                        id: "viber",
                        name: "viber",
                        "data-vv-as": "Viber",
                        placeholder: "+7 900 000 00 00"
                      },
                      domProps: { value: _vm.fields["viber"] },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.fields, "viber", $event.target.value)
                        }
                      }
                    }),
                    _vm._v(" "),
                    _vm.verrors.has("viber")
                      ? [
                          _c(
                            "div",
                            {
                              staticClass:
                                "form__notification form__notification_declaration form__notification_declaration_required"
                            },
                            [_vm._v(_vm._s(_vm.verrors.first("viber")))]
                          )
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
                      "form__group form__group_declaration lm-input-wrap prefix"
                  },
                  [
                    _c(
                      "label",
                      {
                        staticClass: "label input__label",
                        attrs: { for: "vk" }
                      },
                      [_vm._v("\n              ВКонтакте\n            ")]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        class: [
                          "lm-input-prefix",
                          { error: _vm.verrors.has("vk") }
                        ]
                      },
                      [
                        _c(
                          "div",
                          {
                            staticClass: "lm-input-prefix-text",
                            on: {
                              click: function($event) {
                                return _vm.onFocus()
                              }
                            }
                          },
                          [_vm._v("vk.com/")]
                        ),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            { name: "mask-social", rawName: "v-mask-social" },
                            {
                              name: "validate",
                              rawName: "v-validate",
                              value: "max:50",
                              expression: "'max:50'"
                            },
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.fields["vk"],
                              expression: "fields['vk']"
                            }
                          ],
                          class: [
                            { error: _vm.verrors.has("vk") },
                            "input",
                            "form__input",
                            "form__input_declaration"
                          ],
                          attrs: {
                            type: "text",
                            autocomplete: "off",
                            id: "vk",
                            name: "vk",
                            "data-vv-as": "ВКонтакте",
                            placeholder: "id"
                          },
                          domProps: { value: _vm.fields["vk"] },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(_vm.fields, "vk", $event.target.value)
                            }
                          }
                        })
                      ]
                    ),
                    _vm._v(" "),
                    _vm.verrors.has("vk")
                      ? [
                          _c(
                            "div",
                            {
                              staticClass:
                                "form__notification form__notification_declaration form__notification_declaration_required"
                            },
                            [_vm._v(_vm._s(_vm.verrors.first("vk")))]
                          )
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
                      "form__group form__group_declaration lm-input-wrap prefix"
                  },
                  [
                    _c(
                      "label",
                      {
                        staticClass: "label input__label",
                        attrs: { for: "instagram" }
                      },
                      [_vm._v("\n              Instagram\n            ")]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        class: [
                          "lm-input-prefix",
                          { error: _vm.verrors.has("instagram") }
                        ]
                      },
                      [
                        _c(
                          "div",
                          {
                            staticClass: "lm-input-prefix-text",
                            on: {
                              click: function($event) {
                                return _vm.onFocus()
                              }
                            }
                          },
                          [_vm._v("instagram.com/")]
                        ),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            { name: "mask-social", rawName: "v-mask-social" },
                            {
                              name: "validate",
                              rawName: "v-validate",
                              value: "max:50",
                              expression: "'max:50'"
                            },
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.fields["instagram"],
                              expression: "fields['instagram']"
                            }
                          ],
                          class: [
                            { error: _vm.verrors.has("instagram") },
                            "input",
                            "form__input",
                            "form__input_declaration"
                          ],
                          attrs: {
                            type: "text",
                            autocomplete: "off",
                            id: "instagram",
                            name: "instagram",
                            "data-vv-as": "Instagram",
                            placeholder: "id"
                          },
                          domProps: { value: _vm.fields["instagram"] },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.fields,
                                "instagram",
                                $event.target.value
                              )
                            }
                          }
                        })
                      ]
                    ),
                    _vm._v(" "),
                    _vm.verrors.has("instagram")
                      ? [
                          _c(
                            "div",
                            {
                              staticClass:
                                "form__notification form__notification_declaration form__notification_declaration_required"
                            },
                            [_vm._v(_vm._s(_vm.verrors.first("instagram")))]
                          )
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
                      "form__group form__group_declaration lm-input-wrap prefix"
                  },
                  [
                    _c(
                      "label",
                      {
                        staticClass: "label input__label",
                        attrs: { for: "facebook" }
                      },
                      [_vm._v("\n              Facebook\n            ")]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        class: [
                          "lm-input-prefix",
                          { error: _vm.verrors.has("facebook") }
                        ]
                      },
                      [
                        _c(
                          "div",
                          {
                            staticClass: "lm-input-prefix-text",
                            on: {
                              click: function($event) {
                                return _vm.onFocus()
                              }
                            }
                          },
                          [_vm._v("facebook.com/")]
                        ),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            { name: "mask-social", rawName: "v-mask-social" },
                            {
                              name: "validate",
                              rawName: "v-validate",
                              value: "max:50",
                              expression: "'max:50'"
                            },
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.fields["facebook"],
                              expression: "fields['facebook']"
                            }
                          ],
                          class: [
                            { error: _vm.verrors.has("facebook") },
                            "input",
                            "form__input",
                            "form__input_declaration"
                          ],
                          attrs: {
                            type: "text",
                            autocomplete: "off",
                            id: "facebook",
                            name: "facebook",
                            "data-vv-as": "Facebook",
                            placeholder: "id"
                          },
                          domProps: { value: _vm.fields["facebook"] },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.fields,
                                "facebook",
                                $event.target.value
                              )
                            }
                          }
                        })
                      ]
                    ),
                    _vm._v(" "),
                    _vm.verrors.has("facebook")
                      ? [
                          _c(
                            "div",
                            {
                              staticClass:
                                "form__notification form__notification_declaration form__notification_declaration_required"
                            },
                            [_vm._v(_vm._s(_vm.verrors.first("facebook")))]
                          )
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
                      "form__group form__group_declaration lm-input-wrap prefix"
                  },
                  [
                    _c(
                      "label",
                      {
                        staticClass: "label input__label",
                        attrs: { for: "youtube" }
                      },
                      [_vm._v("\n              Youtube\n            ")]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        class: [
                          "lm-input-prefix",
                          { error: _vm.verrors.has("youtube") }
                        ]
                      },
                      [
                        _c(
                          "div",
                          {
                            staticClass: "lm-input-prefix-text",
                            on: {
                              click: function($event) {
                                return _vm.onFocus()
                              }
                            }
                          },
                          [_vm._v("youtube.com/user/")]
                        ),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            { name: "mask-social", rawName: "v-mask-social" },
                            {
                              name: "validate",
                              rawName: "v-validate",
                              value: "max:50",
                              expression: "'max:50'"
                            },
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.fields["youtube"],
                              expression: "fields['youtube']"
                            }
                          ],
                          class: [
                            { error: _vm.verrors.has("youtube") },
                            "input",
                            "form__input",
                            "form__input_declaration"
                          ],
                          attrs: {
                            type: "text",
                            autocomplete: "off",
                            id: "youtube",
                            name: "youtube",
                            "data-vv-as": "Youtube",
                            placeholder: "id"
                          },
                          domProps: { value: _vm.fields["youtube"] },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.fields,
                                "youtube",
                                $event.target.value
                              )
                            }
                          }
                        })
                      ]
                    ),
                    _vm._v(" "),
                    _vm.verrors.has("youtube")
                      ? [
                          _c(
                            "div",
                            {
                              staticClass:
                                "form__notification form__notification_declaration form__notification_declaration_required"
                            },
                            [_vm._v(_vm._s(_vm.verrors.first("youtube")))]
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
                        staticClass: "label input__label",
                        attrs: { for: "site" }
                      },
                      [
                        _vm._v(
                          "\n              " +
                            _vm._s(
                              _vm.$t("unified-profile.profile-settings.website")
                            ) +
                            "\n            "
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "url",
                          expression: "'url'"
                        },
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.fields["site"],
                          expression: "fields['site']"
                        }
                      ],
                      class: [
                        { error: _vm.verrors.has("site") },
                        "input",
                        "form__input",
                        "form__input_declaration"
                      ],
                      attrs: {
                        type: "text",
                        autocomplete: "off",
                        id: "site",
                        name: "site",
                        "data-vv-as": "Сайт",
                        placeholder: _vm.$t(
                          "unified-profile.profile-settings.link"
                        )
                      },
                      domProps: { value: _vm.fields["site"] },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.fields, "site", $event.target.value)
                        }
                      }
                    }),
                    _vm._v(" "),
                    _vm.verrors.has("site")
                      ? [
                          _c(
                            "div",
                            {
                              staticClass:
                                "form__notification form__notification_declaration form__notification_declaration_required"
                            },
                            [_vm._v(_vm._s(_vm.verrors.first("site")))]
                          )
                        ]
                      : _vm._e()
                  ],
                  2
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "block block_declaration" }, [
                _c("div", { staticClass: "m-text_bold mb_4" }, [
                  _vm._v("\n            Сервисы\n          ")
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass:
                      "form__group form__group_declaration form__group_service"
                  },
                  [
                    _c(
                      "label",
                      {
                        staticClass: "label input__label",
                        attrs: { for: "apple_id" }
                      },
                      [_vm._v("Apple id")]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass:
                          "column justify_center align_flex-end position_relative"
                      },
                      [
                        _c("svg", { staticClass: "icon icon_size_16" }, [
                          _c("use", {
                            attrs: {
                              "xlink:href":
                                "/dist/img/icons/svg/sprite.svg#lm-icon-apple"
                            }
                          })
                        ]),
                        _vm._v(" "),
                        [
                          _vm.hasSocialAccountApple === true
                            ? [
                                _c(
                                  "a",
                                  {
                                    staticClass: "form__input_change-link",
                                    attrs: { href: "javascript:void(0)" },
                                    on: {
                                      click: function($event) {
                                        return _vm._handleClickDetachSocial(
                                          "apple"
                                        )
                                      }
                                    }
                                  },
                                  [_vm._v("отвязать")]
                                )
                              ]
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.hasSocialAccountApple === false
                            ? [
                                _c(
                                  "a",
                                  {
                                    staticClass: "form__input_change-link",
                                    attrs: { href: "javascript:void(0)" },
                                    on: { click: _vm._handleClickOAuthApple }
                                  },
                                  [_vm._v("привязать")]
                                )
                              ]
                            : _vm._e()
                        ],
                        _vm._v(" "),
                        _c("input", {
                          staticClass:
                            "d-input form__input form__input_declaration",
                          attrs: {
                            type: "text",
                            autocomplete: "off",
                            id: "apple_id",
                            name: "apple_id",
                            placeholder: "",
                            disabled: true
                          },
                          domProps: {
                            value: _vm.hasSocialAccountApple
                              ? _vm.socialAccounts["apple"]["uid"]
                              : null
                          }
                        })
                      ],
                      2
                    )
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass:
                      "form__group form__group_declaration form__group_service"
                  },
                  [
                    _c(
                      "label",
                      {
                        staticClass: "label input__label",
                        attrs: { for: "fb_id" }
                      },
                      [_vm._v("Facebook")]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass:
                          "column justify_center align_flex-end position_relative"
                      },
                      [
                        _c("svg", { staticClass: "icon icon_size_16" }, [
                          _c("use", {
                            attrs: {
                              "xlink:href":
                                "/dist/img/icons/svg/sprite.svg#lm-icon-fb"
                            }
                          })
                        ]),
                        _vm._v(" "),
                        [
                          _vm.hasSocialAccountFacebook === true
                            ? [
                                _c(
                                  "a",
                                  {
                                    staticClass: "form__input_change-link",
                                    attrs: { href: "javascript:void(0)" },
                                    on: {
                                      click: function($event) {
                                        return _vm._handleClickDetachSocial(
                                          "facebook"
                                        )
                                      }
                                    }
                                  },
                                  [_vm._v("отвязать")]
                                )
                              ]
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.hasSocialAccountFacebook === false
                            ? [
                                _c(
                                  "a",
                                  {
                                    staticClass: "form__input_change-link",
                                    attrs: { href: "javascript:void(0)" },
                                    on: { click: _vm._handleClickOAuthFacebook }
                                  },
                                  [_vm._v("привязать")]
                                )
                              ]
                            : _vm._e()
                        ],
                        _vm._v(" "),
                        _c("input", {
                          staticClass:
                            "d-input form__input form__input_declaration",
                          attrs: {
                            type: "text",
                            autocomplete: "off",
                            id: "fb_id",
                            name: "fb_id",
                            placeholder: "",
                            disabled: true
                          },
                          domProps: {
                            value: _vm.hasSocialAccountFacebook
                              ? _vm.socialAccounts["facebook"]["link"] ||
                                _vm.socialAccounts["facebook"]["uid"]
                              : null
                          }
                        })
                      ],
                      2
                    )
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass:
                      "form__group form__group_declaration form__group_service"
                  },
                  [
                    _c(
                      "label",
                      {
                        staticClass: "label input__label",
                        attrs: { for: "vk_id" }
                      },
                      [_vm._v("ВКонтакте")]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass:
                          "column justify_center align_flex-end position_relative"
                      },
                      [
                        _c("svg", { staticClass: "icon icon_size_16" }, [
                          _c("use", {
                            attrs: {
                              "xlink:href":
                                "/dist/img/icons/svg/sprite.svg#lm-icon-vk"
                            }
                          })
                        ]),
                        _vm._v(" "),
                        [
                          _vm.hasSocialAccountVkontakte === true
                            ? [
                                _c(
                                  "a",
                                  {
                                    staticClass: "form__input_change-link",
                                    attrs: { href: "javascript:void(0)" },
                                    on: {
                                      click: function($event) {
                                        return _vm._handleClickDetachSocial(
                                          "vkontakte"
                                        )
                                      }
                                    }
                                  },
                                  [_vm._v("отвязать")]
                                )
                              ]
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.hasSocialAccountVkontakte === false
                            ? [
                                _c(
                                  "a",
                                  {
                                    staticClass: "form__input_change-link",
                                    attrs: { href: "javascript:void(0)" },
                                    on: { click: _vm._handleClickOAuthVk }
                                  },
                                  [_vm._v("привязать")]
                                )
                              ]
                            : _vm._e()
                        ],
                        _vm._v(" "),
                        _c("input", {
                          staticClass:
                            "d-input form__input form__input_declaration",
                          attrs: {
                            type: "text",
                            autocomplete: "off",
                            id: "vk_id",
                            name: "vk_id",
                            placeholder: "",
                            disabled: true
                          },
                          domProps: {
                            value: _vm.hasSocialAccountVkontakte
                              ? _vm.socialAccounts["vkontakte"]["link"] ||
                                _vm.socialAccounts["vkontakte"]["uid"]
                              : null
                          }
                        })
                      ],
                      2
                    )
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass:
                      "form__group form__group_declaration form__group_service"
                  },
                  [
                    _c(
                      "label",
                      {
                        staticClass: "label input__label",
                        attrs: { for: "google_id" }
                      },
                      [_vm._v("Google")]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass:
                          "column justify_center align_flex-end position_relative"
                      },
                      [
                        _c("svg", { staticClass: "icon icon_size_16" }, [
                          _c("use", {
                            attrs: {
                              "xlink:href":
                                "/dist/img/icons/svg/sprite.svg#lm-icon-google"
                            }
                          })
                        ]),
                        _vm._v(" "),
                        [
                          _vm.hasSocialAccountGoogle === true
                            ? [
                                _c(
                                  "a",
                                  {
                                    staticClass: "form__input_change-link",
                                    attrs: { href: "javascript:void(0)" },
                                    on: {
                                      click: function($event) {
                                        return _vm._handleClickDetachSocial(
                                          "google"
                                        )
                                      }
                                    }
                                  },
                                  [_vm._v("отвязать")]
                                )
                              ]
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.hasSocialAccountGoogle === false
                            ? [
                                _c(
                                  "a",
                                  {
                                    staticClass: "form__input_change-link",
                                    attrs: { href: "javascript:void(0)" },
                                    on: { click: _vm._handleClickOAuthGoogle }
                                  },
                                  [_vm._v("привязать")]
                                )
                              ]
                            : _vm._e()
                        ],
                        _vm._v(" "),
                        _c("input", {
                          staticClass:
                            "d-input form__input form__input_declaration",
                          attrs: {
                            type: "text",
                            autocomplete: "off",
                            id: "google_id",
                            name: "google_id",
                            placeholder: "",
                            disabled: true
                          },
                          domProps: {
                            value: _vm.hasSocialAccountGoogle
                              ? _vm.socialAccounts["google"]["uid"]
                              : null
                          }
                        })
                      ],
                      2
                    )
                  ]
                )
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "block block_declaration" },
                [
                  _c("div", { staticClass: "m-text_bold mb_4" }, [
                    _vm._v("\n            Безопасность\n          ")
                  ]),
                  _vm._v(" "),
                  (_vm.hasEmail === false && _vm.disabled["email"] === true) ||
                  (_vm.hasPhone === false && _vm.disabled["phone"] === true)
                    ? [
                        _c(
                          "div",
                          {
                            staticClass: "form__group form__group_declaration"
                          },
                          [
                            _c(
                              "div",
                              { staticClass: "section__hint" },
                              [
                                _c(
                                  "div",
                                  { staticClass: "heading heading_h5" },
                                  [
                                    _vm._v(
                                      "\n                  Подумайте о безопасности\n                "
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _vm.hasEmail === false &&
                                _vm.disabled["email"] === true
                                  ? [
                                      _c(
                                        "div",
                                        { staticClass: "color_gray-2 mb_2" },
                                        [
                                          _vm._v(
                                            "\n                    Добавьте почту, для восстановления доступа к своей странице\n                  "
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "a",
                                        {
                                          staticClass: "m-text_bold color_main",
                                          attrs: { href: "javascript:void(0)" },
                                          on: {
                                            click:
                                              _vm._handleClickChangeDisabledEmail
                                          }
                                        },
                                        [_vm._v("Добавить")]
                                      )
                                    ]
                                  : _vm.hasPhone === false &&
                                    _vm.disabled["phone"] === true
                                  ? [
                                      _c(
                                        "div",
                                        { staticClass: "color_gray-2 mb_2" },
                                        [
                                          _vm._v(
                                            "\n                    Добавьте номер телефона, для восстановления доступа к своей странице, при утрате почты\n                  "
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "a",
                                        {
                                          staticClass: "m-text_bold color_main",
                                          attrs: { href: "javascript:void(0)" },
                                          on: {
                                            click:
                                              _vm._handleClickChangeDisabledPhone
                                          }
                                        },
                                        [_vm._v("Добавить")]
                                      )
                                    ]
                                  : _vm._e()
                              ],
                              2
                            )
                          ]
                        )
                      ]
                    : _vm._e(),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "form__group form__group_declaration" },
                    [
                      _c(
                        "label",
                        {
                          staticClass: "label input__label",
                          attrs: { for: "phone" }
                        },
                        [
                          _vm._v(
                            "\n              " +
                              _vm._s(
                                _vm.$t(
                                  "unified-profile.profile-settings.telephone-number"
                                )
                              ) +
                              "\n            "
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass:
                            "column justify_center align_flex-end position_relative"
                        },
                        [
                          _vm.disabled["phone"] === true
                            ? [
                                _c(
                                  "a",
                                  {
                                    staticClass: "form__input_change-link",
                                    attrs: { href: "javascript:void(0)" },
                                    on: {
                                      click: _vm._handleClickChangeDisabledPhone
                                    }
                                  },
                                  [
                                    _vm.hasPhone === true
                                      ? [
                                          _vm._v(
                                            _vm._s(
                                              _vm.$t(
                                                "unified-profile.profile-settings.change"
                                              )
                                            )
                                          )
                                        ]
                                      : _vm._e(),
                                    _vm._v(" "),
                                    _vm.hasPhone === false
                                      ? [
                                          _vm._v(
                                            _vm._s(
                                              _vm.$t(
                                                "unified-profile.profile-settings.add"
                                              )
                                            )
                                          )
                                        ]
                                      : _vm._e()
                                  ],
                                  2
                                )
                              ]
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.disabled["phone"] === false
                            ? [
                                _c(
                                  "a",
                                  {
                                    staticClass: "form__input_change-link",
                                    attrs: { href: "javascript:void(0)" },
                                    on: {
                                      click:
                                        _vm._handleClickReturnChangeDisabledPhone
                                    }
                                  },
                                  [_vm._v("Отменить")]
                                )
                              ]
                            : _vm._e(),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              { name: "mask-phone", rawName: "v-mask-phone" },
                              {
                                name: "validate",
                                rawName: "v-validate",
                                value: "phone",
                                expression: "'phone'"
                              },
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.fields["phone"],
                                expression: "fields['phone']"
                              }
                            ],
                            ref: "phone",
                            staticClass:
                              "input form__input form__input_declaration",
                            attrs: {
                              type: "tel",
                              autocomplete: "off",
                              id: "phone",
                              name: "phone",
                              "data-vv-as": _vm.$t(
                                "unified-profile.profile-settings.telephone-number"
                              ),
                              placeholder: "+7 900 000-00-00",
                              disabled: _vm.disabled["phone"]
                            },
                            domProps: { value: _vm.fields["phone"] },
                            on: {
                              keyup: function($event) {
                                if (
                                  !$event.type.indexOf("key") &&
                                  _vm._k(
                                    $event.keyCode,
                                    "enter",
                                    13,
                                    $event.key,
                                    "Enter"
                                  )
                                ) {
                                  return null
                                }
                                return _vm._handleClickAttachPhone($event)
                              },
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.fields,
                                  "phone",
                                  $event.target.value
                                )
                              }
                            }
                          })
                        ],
                        2
                      ),
                      _vm._v(" "),
                      _vm.verrors.has("phone")
                        ? [
                            _c(
                              "div",
                              {
                                staticClass:
                                  "form__notification form__notification_declaration form__notification_declaration_required"
                              },
                              [_vm._v(_vm._s(_vm.verrors.first("phone")))]
                            )
                          ]
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.disabled["phone"] === false
                        ? [
                            _c("div", { staticClass: "d-row mt_4" }, [
                              _c(
                                "button",
                                {
                                  staticClass: "btn btn_primary",
                                  attrs: {
                                    disabled: _vm.hasPhoneField === false
                                  },
                                  on: { click: _vm._handleClickAttachPhone }
                                },
                                [
                                  _vm._v(
                                    "\n                  " +
                                      _vm._s(
                                        _vm.hasPhone === false
                                          ? "Добавить"
                                          : "Изменить"
                                      ) +
                                      "\n                "
                                  )
                                ]
                              )
                            ])
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
                          staticClass: "label input__label",
                          attrs: { for: "email" }
                        },
                        [_vm._v("\n              E-mail\n            ")]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass:
                            "column justify_center align_flex-end position_relative"
                        },
                        [
                          _vm.disabled["email"] === true
                            ? [
                                _c(
                                  "a",
                                  {
                                    staticClass: "form__input_change-link",
                                    attrs: { href: "javascript:void(0)" },
                                    on: {
                                      click: _vm._handleClickChangeDisabledEmail
                                    }
                                  },
                                  [
                                    _vm.hasEmail === true
                                      ? [
                                          _vm._v(
                                            _vm._s(
                                              _vm.$t(
                                                "unified-profile.profile-settings.change"
                                              )
                                            )
                                          )
                                        ]
                                      : _vm._e(),
                                    _vm._v(" "),
                                    _vm.hasEmail === false
                                      ? [_vm._v("Добавить")]
                                      : _vm._e()
                                  ],
                                  2
                                )
                              ]
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.disabled["email"] === false
                            ? [
                                _c(
                                  "a",
                                  {
                                    staticClass: "form__input_change-link",
                                    attrs: { href: "javascript:void(0)" },
                                    on: {
                                      click:
                                        _vm._handleClickReturnChangeDisabledEmail
                                    }
                                  },
                                  [_vm._v("Отменить")]
                                )
                              ]
                            : _vm._e(),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.fields["email"],
                                expression: "fields['email']"
                              },
                              {
                                name: "validate",
                                rawName: "v-validate",
                                value: "email|max:255",
                                expression: "'email|max:255'"
                              }
                            ],
                            ref: "email",
                            class: [
                              { error: _vm.verrors.has("email") },
                              "input",
                              "form__input",
                              "form__input_declaration"
                            ],
                            attrs: {
                              type: "email",
                              autocomplete: "off",
                              autocapitalize: "off",
                              id: "email",
                              name: "email",
                              "data-vv-as": "E-mail",
                              placeholder: "pochta@gmaill.com",
                              disabled: _vm.disabled["email"]
                            },
                            domProps: { value: _vm.fields["email"] },
                            on: {
                              keyup: function($event) {
                                if (
                                  !$event.type.indexOf("key") &&
                                  _vm._k(
                                    $event.keyCode,
                                    "enter",
                                    13,
                                    $event.key,
                                    "Enter"
                                  )
                                ) {
                                  return null
                                }
                                return _vm._handleClickAttachEmail($event)
                              },
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.fields,
                                  "email",
                                  $event.target.value
                                )
                              }
                            }
                          })
                        ],
                        2
                      ),
                      _vm._v(" "),
                      _vm.verrors.has("email")
                        ? [
                            _c(
                              "div",
                              {
                                staticClass:
                                  "form__notification form__notification_declaration form__notification_declaration_required"
                              },
                              [_vm._v(_vm._s(_vm.verrors.first("email")))]
                            )
                          ]
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.disabled["email"] === false
                        ? [
                            _c("div", { staticClass: "d-row mt_4" }, [
                              _c(
                                "button",
                                {
                                  staticClass: "btn btn_primary",
                                  attrs: {
                                    disabled: _vm.hasEmailField === false
                                  },
                                  on: { click: _vm._handleClickAttachEmail }
                                },
                                [
                                  _vm._v(
                                    "\n                  " +
                                      _vm._s(
                                        _vm.hasEmail === false
                                          ? "Добавить"
                                          : "Изменить"
                                      ) +
                                      "\n                "
                                  )
                                ]
                              )
                            ])
                          ]
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.disabled["email"] === true &&
                      _vm.email["success"] === true
                        ? [_vm._m(0)]
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
                          staticClass: "label input__label",
                          attrs: { for: "password" }
                        },
                        [
                          _vm._v(
                            "\n              " +
                              _vm._s(
                                _vm.$t(
                                  "unified-profile.profile-settings.password"
                                )
                              ) +
                              "\n            "
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass:
                            "column justify_center align_flex-end position_relative"
                        },
                        [
                          _vm.disabled["password"]
                            ? [
                                _c(
                                  "a",
                                  {
                                    staticClass: "form__input_change-link",
                                    attrs: { href: "javascript:void(0)" },
                                    on: {
                                      click:
                                        _vm._handleClickChangeDisabledPassword
                                    }
                                  },
                                  [
                                    _vm._v(
                                      _vm._s(
                                        _vm.$t(
                                          "unified-profile.profile-settings.change"
                                        )
                                      )
                                    )
                                  ]
                                )
                              ]
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.disabled["password"] === false
                            ? [
                                _c(
                                  "a",
                                  {
                                    staticClass: "form__input_change-link",
                                    attrs: { href: "javascript:void(0)" },
                                    on: {
                                      click:
                                        _vm._handleClickReturnChangeDisabledPassword
                                    }
                                  },
                                  [_vm._v("Отменить")]
                                )
                              ]
                            : _vm._e(),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "validate",
                                rawName: "v-validate",
                                value: "min:6",
                                expression: "'min:6'"
                              },
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.fields["password"],
                                expression: "fields['password']"
                              }
                            ],
                            ref: "password",
                            class: [
                              { error: _vm.verrors.has("password") },
                              "input",
                              "form__input",
                              "form__input_declaration"
                            ],
                            attrs: {
                              type: "password",
                              autocomplete: "off",
                              autocapitalize: "off",
                              id: "password",
                              name: "password",
                              "data-vv-as": _vm.$t(
                                "unified-profile.profile-settings.password"
                              ),
                              placeholder: "******",
                              disabled: _vm.disabled["password"]
                            },
                            domProps: { value: _vm.fields["password"] },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.fields,
                                  "password",
                                  $event.target.value
                                )
                              }
                            }
                          }),
                          _vm._v(" "),
                          _vm.verrors.has("password")
                            ? [
                                _c(
                                  "div",
                                  {
                                    staticClass:
                                      "form__notification form__notification_declaration form__notification_declaration_required"
                                  },
                                  [
                                    _vm._v(
                                      _vm._s(_vm.verrors.first("password"))
                                    )
                                  ]
                                )
                              ]
                            : _vm._e()
                        ],
                        2
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "form__group form__group_declaration" },
                    [
                      _c(
                        "label",
                        {
                          staticClass: "label input__label",
                          attrs: { for: "username" }
                        },
                        [
                          _vm._v(
                            "\n              " +
                              _vm._s(
                                _vm.$t(
                                  "unified-profile.profile-settings.address-page"
                                )
                              ) +
                              "\n            "
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          class: [
                            "form__group",
                            "form__group_declaration",
                            "form__group_declaration_switch",
                            {
                              error: _vm.verrors.has("username"),
                              disabled: _vm.disabled["username"]
                            }
                          ]
                        },
                        [
                          _c(
                            "div",
                            {
                              staticClass:
                                "form__row form__row_declaration form__row_declaration_payment p_0"
                            },
                            [
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "column justify_center align_flex-end position_relative"
                                },
                                [
                                  _vm.disabled["username"]
                                    ? [
                                        _c(
                                          "a",
                                          {
                                            staticClass:
                                              "form__input_change-link",
                                            attrs: {
                                              href: "javascript:void(0)"
                                            },
                                            on: {
                                              click:
                                                _vm._handleClickChangeDisabledUsername
                                            }
                                          },
                                          [
                                            _vm._v(
                                              _vm._s(
                                                _vm.$t(
                                                  "unified-profile.profile-settings.change"
                                                )
                                              )
                                            )
                                          ]
                                        )
                                      ]
                                    : _vm._e(),
                                  _vm._v(" "),
                                  _vm.disabled["username"] === false
                                    ? [
                                        _c(
                                          "a",
                                          {
                                            staticClass:
                                              "form__input_change-link",
                                            attrs: {
                                              href: "javascript:void(0)"
                                            },
                                            on: {
                                              click:
                                                _vm._handleClickReturnChangeDisabledUsername
                                            }
                                          },
                                          [_vm._v("Отменить")]
                                        )
                                      ]
                                    : _vm._e(),
                                  _vm._v(" "),
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "mask-regexp",
                                        rawName: "v-mask-regexp",
                                        value: "d*[a-z._-][0-9a-zd._-]*",
                                        expression:
                                          "'\\d*[a-z._-][0-9a-z\\d._-]*'"
                                      },
                                      {
                                        name: "validate",
                                        rawName: "v-validate",
                                        value: "min:4|max:20",
                                        expression: "'min:4|max:20'"
                                      },
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.fields["username"],
                                        expression: "fields['username']"
                                      }
                                    ],
                                    ref: "username",
                                    class: [
                                      { error: _vm.verrors.has("username") },
                                      "bd_none"
                                    ],
                                    attrs: {
                                      type: "text",
                                      autocomplete: "off",
                                      autocapitalize: "off",
                                      id: "username",
                                      name: "username",
                                      "data-vv-as": _vm.$t(
                                        "unified-profile.profile-settings.address-page"
                                      ),
                                      placeholder: "Адрес страницы",
                                      disabled: _vm.disabled["username"]
                                    },
                                    domProps: { value: _vm.fields["username"] },
                                    on: {
                                      input: function($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.$set(
                                          _vm.fields,
                                          "username",
                                          $event.target.value
                                        )
                                      }
                                    }
                                  })
                                ],
                                2
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _vm.disabled["username"] === false
                            ? [_vm._m(1)]
                            : _vm._e()
                        ],
                        2
                      ),
                      _vm._v(" "),
                      _vm.verrors.has("username")
                        ? [
                            _c(
                              "div",
                              {
                                staticClass:
                                  "form__notification form__notification_declaration form__notification_declaration_required"
                              },
                              [_vm._v(_vm._s(_vm.verrors.first("username")))]
                            )
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
                        "form__group form__group_declaration form__group_declaration_switch"
                    },
                    [
                      _c(
                        "div",
                        {
                          staticClass:
                            "form__row form__row_declaration form__row_declaration_payment"
                        },
                        [
                          _c(
                            "div",
                            { staticClass: "switch switch_declaration" },
                            [
                              _c(
                                "label",
                                {
                                  staticClass: "m-text_bold color_gray-2",
                                  attrs: { for: "serviceNewsletter" }
                                },
                                [
                                  _vm._v(
                                    _vm._s(
                                      _vm.$t(
                                        "unified-profile.profile-settings.service-mailing"
                                      )
                                    )
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value:
                                      _vm.fields["notifications"]["service"],
                                    expression:
                                      "fields['notifications']['service']"
                                  }
                                ],
                                staticClass: "switch__mark",
                                attrs: {
                                  id: "serviceNewsletter",
                                  type: "checkbox",
                                  name: "serviceNewsletter"
                                },
                                domProps: {
                                  checked: Array.isArray(
                                    _vm.fields["notifications"]["service"]
                                  )
                                    ? _vm._i(
                                        _vm.fields["notifications"]["service"],
                                        null
                                      ) > -1
                                    : _vm.fields["notifications"]["service"]
                                },
                                on: {
                                  change: function($event) {
                                    var $$a =
                                        _vm.fields["notifications"]["service"],
                                      $$el = $event.target,
                                      $$c = $$el.checked ? true : false
                                    if (Array.isArray($$a)) {
                                      var $$v = null,
                                        $$i = _vm._i($$a, $$v)
                                      if ($$el.checked) {
                                        $$i < 0 &&
                                          _vm.$set(
                                            _vm.fields["notifications"],
                                            "service",
                                            $$a.concat([$$v])
                                          )
                                      } else {
                                        $$i > -1 &&
                                          _vm.$set(
                                            _vm.fields["notifications"],
                                            "service",
                                            $$a
                                              .slice(0, $$i)
                                              .concat($$a.slice($$i + 1))
                                          )
                                      }
                                    } else {
                                      _vm.$set(
                                        _vm.fields["notifications"],
                                        "service",
                                        $$c
                                      )
                                    }
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _c("label", {
                                staticClass: "switch__btn",
                                attrs: { for: "serviceNewsletter" }
                              })
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "switch switch_declaration" },
                            [
                              _c(
                                "label",
                                {
                                  staticClass: "m-text_bold color_gray-2",
                                  attrs: { for: "newsletter" }
                                },
                                [
                                  _vm._v(
                                    _vm._s(
                                      _vm.$t(
                                        "unified-profile.profile-settings.newsletter"
                                      )
                                    )
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.fields["notifications"]["news"],
                                    expression:
                                      "fields['notifications']['news']"
                                  }
                                ],
                                staticClass: "switch__mark",
                                attrs: {
                                  id: "newsletter",
                                  type: "checkbox",
                                  name: "newsletter"
                                },
                                domProps: {
                                  checked: Array.isArray(
                                    _vm.fields["notifications"]["news"]
                                  )
                                    ? _vm._i(
                                        _vm.fields["notifications"]["news"],
                                        null
                                      ) > -1
                                    : _vm.fields["notifications"]["news"]
                                },
                                on: {
                                  change: function($event) {
                                    var $$a =
                                        _vm.fields["notifications"]["news"],
                                      $$el = $event.target,
                                      $$c = $$el.checked ? true : false
                                    if (Array.isArray($$a)) {
                                      var $$v = null,
                                        $$i = _vm._i($$a, $$v)
                                      if ($$el.checked) {
                                        $$i < 0 &&
                                          _vm.$set(
                                            _vm.fields["notifications"],
                                            "news",
                                            $$a.concat([$$v])
                                          )
                                      } else {
                                        $$i > -1 &&
                                          _vm.$set(
                                            _vm.fields["notifications"],
                                            "news",
                                            $$a
                                              .slice(0, $$i)
                                              .concat($$a.slice($$i + 1))
                                          )
                                      }
                                    } else {
                                      _vm.$set(
                                        _vm.fields["notifications"],
                                        "news",
                                        $$c
                                      )
                                    }
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _c("label", {
                                staticClass: "switch__btn",
                                attrs: { for: "newsletter" }
                              })
                            ]
                          )
                        ]
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "a",
                    {
                      staticClass: "m-text_bold color_support-1",
                      attrs: { href: "javascript:void(0)" },
                      on: { click: _vm._handleClickDestroyPage }
                    },
                    [
                      _vm._v(
                        _vm._s(
                          _vm.$t(
                            "unified-profile.profile-settings.delete-account"
                          )
                        )
                      )
                    ]
                  )
                ],
                2
              )
            ]
          ),
          _vm._v(" "),
          _c("div", { staticClass: "page__footer page__footer_declaration" }, [
            _c("div", { staticClass: "page__block_declaration" }, [
              _c("div", { staticClass: "row justify_between" }, [
                _c(
                  "button",
                  {
                    staticClass: "btn btn_secondary",
                    on: { click: _vm._handleClickPreviousPage }
                  },
                  [
                    _vm._v(
                      "\n              " +
                        _vm._s(
                          _vm.$t("unified-profile.profile-settings.back")
                        ) +
                        "\n            "
                    )
                  ]
                ),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "btn btn_primary",
                    on: { click: _vm._handleClickSaveSettings }
                  },
                  [
                    _vm._v(
                      "\n              " +
                        _vm._s(
                          _vm.$t("unified-profile.profile-settings.save")
                        ) +
                        "\n            "
                    )
                  ]
                )
              ])
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c("cropper-avatar-modal")
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "section__hint mt_4" }, [
      _c("div", { staticClass: "heading heading_h5" }, [
        _vm._v("\n                  Проверьте почту\n                ")
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "color_gray-1" }, [
        _vm._v(
          "\n                  Мы выслали вам письмо для подтверждения почты\n                "
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "switch__declaration_description" }, [
      _c("span", {}, [
        _vm._v(
          "Адрес страницы может содержать только буквы (A–Z), цифры (0–9) и точки (.), без расширений\n                  (.com, .net)\n                "
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
    require("vue-hot-reload-api")      .rerender("data-v-08908419", esExports)
  }
}

/***/ })

});
//# sourceMappingURL=99.build.7b4c03c2abb2fb294164.js.map