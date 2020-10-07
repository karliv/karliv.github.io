webpackJsonp([101],{

/***/ 1432:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Index_vue__ = __webpack_require__(1890);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_791ccde0_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Index_vue__ = __webpack_require__(2692);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(2690)
}
var normalizeComponent = __webpack_require__(2)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-791ccde0"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_791ccde0_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Index_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/views/User/Register/Index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-791ccde0", Component.options)
  } else {
    hotAPI.reload("data-v-791ccde0", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


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

/***/ 1890:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex_map_fields__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mint_ui__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mint_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_mint_ui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_User_Modals_CropperAvatar_vue__ = __webpack_require__(1548);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils__ = __webpack_require__(6);
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

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







var _createHelpers = Object(__WEBPACK_IMPORTED_MODULE_1_vuex_map_fields__["a" /* createHelpers */])({
  getterType: 'auth/getField',
  mutationType: 'auth/updateField'
}),
    mapFields = _createHelpers.mapFields;

var KEYS = {
  gender: 'genderId',
  guardian: 'guardian',
  lastname: 'lastName',
  birthday: 'birthday',
  firstname: 'firstName'
};

/* harmony default export */ __webpack_exports__["a"] = ({
  components: { CropperAvatarModal: __WEBPACK_IMPORTED_MODULE_3__components_User_Modals_CropperAvatar_vue__["a" /* default */] },
  metaInfo: {
    title: 'Регистрация'
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
              return store.dispatch('auth/getUserByAPI');

            case 2:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this);
    }))();
  },
  data: function data() {
    return {
      has: __WEBPACK_IMPORTED_MODULE_4__utils__["l" /* has */], normalizeDotsToArrow: __WEBPACK_IMPORTED_MODULE_4__utils__["s" /* normalizeDotsToArrow */], KEYS: KEYS,
      loading: false,
      error: false,
      success: false,
      avatar: {
        sheet: {
          value: false,
          actions: [{
            name: 'Изменить фото',
            method: this._handleClickChangeAvatar
          }, {
            name: 'Удалить фото',
            method: this._handleClickRemoveAvatar,
            color: '#fc2e5f'
          }]
        },
        modal: false,
        src: null,
        photo_id: null,
        crop: null
      },
      isAlreadyRegistered: false
    };
  },

  computed: _extends({}, mapFields(['register.data.fields']), Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["c" /* mapGetters */])({
    user: 'auth/getAuthUser',
    isAuthorized: 'auth/isAuthorized'
  }), {
    hasBirthday: function hasBirthday() {
      return !!this.fields[KEYS['birthday']];
    },
    isChild: function isChild() {
      var date = this.$moment(this.fields[KEYS['birthday']], 'DD.MM.YYYY', true),
          adult = this.$moment().subtract(18, 'years');

      return !this.verrors.has(Object(__WEBPACK_IMPORTED_MODULE_4__utils__["s" /* normalizeDotsToArrow */])(KEYS['birthday'])) && this.fields[KEYS['birthday']] && date.isValid() && date.isAfter(adult, 'day');
    }
  }),
  created: function created() {
    this.isAlreadyRegistered = Boolean(this.user.name.replace(/\s/g, ''));

    if (this.isAlreadyRegistered) {
      var gender = this.user.gender;
      var avatar = this.user.avatar;
      var name = this.user.name.split(' ');

      this.fields[KEYS['firstname']] = name && name.length ? name[0] : null;
      this.fields[KEYS['lastname']] = name && name.length && name.length > 1 ? name[1] : null;

      this.fields[KEYS['genderId']] = gender && Object(__WEBPACK_IMPORTED_MODULE_4__utils__["l" /* has */])(gender, 'id') ? gender['id'] : null;
      this.fields.avatar = avatar && Object(__WEBPACK_IMPORTED_MODULE_4__utils__["l" /* has */])(avatar, '183x183') ? avatar['183x183'] : __WEBPACK_IMPORTED_MODULE_4__utils__["a" /* AVATAR */];
    }
  },
  mounted: function mounted() {
    var _this2 = this;

    if (this.isAlreadyRegistered === false) {
      var fields = this.$localStorage.get('auth.post-register', null, Object);

      if (fields && (typeof fields === 'undefined' ? 'undefined' : _typeof(fields)) === 'object') {
        Object.assign(this.fields, fields);
      }
    } else this._handleOnComplete();

    this.$root.$on('updated-avatar', function (_ref2) {
      var image = _ref2['183x183'];

      _this2.fields['avatar'] = image;
    });
  },
  beforeDestroy: function beforeDestroy() {
    this.$root.$off('updated-avatar');
  },

  methods: {
    _handleBlurUpdateField: function _handleBlurUpdateField() {
      this.$localStorage.set('auth.post-register', JSON.stringify(this.fields));
    },

    /**
     * Validate all fields on current transition
     * @returns {Promise<any>}
     * @private
     */
    _handleValidateFields: function _handleValidateFields() {
      var _this3 = this;

      return new Promise(function (resolve, reject) {
        _this3.$validator.validateAll().then(function (result) {
          if (result) {
            resolve(result);
          } else reject();
        });
      });
    },

    /**
     * Handler save all form
     * @param event
     * @param fsm
     * @private
     */
    _handleOnComplete: function _handleOnComplete() {
      var _this4 = this;

      if (this.loading) return;

      this._handleValidateFields().then(function () {
        __WEBPACK_IMPORTED_MODULE_2_mint_ui__["Indicator"].open();
        _this4.loading = true;

        var fields = Object.keys(_this4.fields).filter(function (key) {
          return Object.values(KEYS).includes(key);
        }).reduce(function (obj, key) {
          var _extends2;

          return _extends({}, obj, (_extends2 = {}, _extends2[key] = _this4.fields[key], _extends2));
        }, {});

        var data = _extends({}, Object(__WEBPACK_IMPORTED_MODULE_4__utils__["h" /* flatten */])(fields));

        _this4.$api.post('/api/v2/auth/post-register', data).then(function (response) {
          var url = response.data.url;


          __WEBPACK_IMPORTED_MODULE_2_mint_ui__["Indicator"].close();
          _this4.loading = false;
          _this4.success = true;
          _this4.error = false;

          _this4.$localStorage.remove('auth.post-register');

          var user = _this4.$cookies.get('auth_user');
          var age = _this4.$moment().diff(_this4.$moment(_this4.fields[KEYS['birthday']], 'DD.MM.YYYY', true), 'years');

          var fields = {
            age: age,
            isRegistered: true,
            avatar: _this4.fields.avatar,
            gender: { id: _this4.fields[KEYS['genderId']] },
            name: _this4.fields[KEYS['lastname']] + ' ' + _this4.fields[KEYS['firstname']]
          };
          Object.assign(user, fields);
          _this4.$cookies.set('auth_user', user, { expires: __WEBPACK_IMPORTED_MODULE_4__utils__["f" /* expires */] });
          Object.keys(fields).forEach(function (key) {
            _this4.$store.dispatch('auth/setUserField', { key: key, value: fields[key] });
          });

          _this4.$gtm.trackEvent({ event: 'successfulreg' });

          _this4._handleRedirectAfterRegister();
        }, function (error) {
          var _error$response = error.response,
              data = _error$response.data,
              status = _error$response.status;


          __WEBPACK_IMPORTED_MODULE_2_mint_ui__["Indicator"].close();
          _this4.loading = false;
          _this4.success = false;
          _this4.error = true;

          if (status === 422) {
            _this4.$setLaravelValidationErrorsFromResponse(data);
          } else throw new Error('Error complete register user');
        });
      }).catch(function () {});
    },
    _handleRedirectAfterRegister: function _handleRedirectAfterRegister() {
      if (this.$localStorage.get('redirect.register', null, String)) {
        var location = this.$localStorage.get('redirect.register', '/', String);
        this.$localStorage.remove('redirect.register');
        this.$router.push(location);
      } else if (this.$localStorage.get('redirect.freekino', null, String)) {
        this.$localStorage.remove('redirect.freekino');
        window.location.href = process.env.FREEKINO_URL + '/?ak=' + this.$cookies.get('id_token');
      } else this.$router.push({ name: 'board.castings.index' });
    },
    _handleChangeInputAvatar: function _handleChangeInputAvatar(el) {
      var _this5 = this;

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
            _this5._handleUploadAvatar(file).then(function (_ref3) {
              var path = _ref3.path,
                  width = _ref3.width,
                  height = _ref3.height;

              _this5.fields['avatar'] = src;
              _this5.$root.$emit('open-modal-cropper-avatar', src);
            }).catch(function (data, status) {
              Object(__WEBPACK_IMPORTED_MODULE_2_mint_ui__["Toast"])({ message: 'Ошибка', iconClass: 'mintui mintui-field-error' });
            });
          };

          Object(__WEBPACK_IMPORTED_MODULE_4__utils__["x" /* resizeImage */])(event.target.result, 1280, null, 'image/png').then(function (_ref4) {
            var src = _ref4.src,
                blob = _ref4.blob;

            next(src, blob);
          }).catch(function (err) {
            next(event.target.result, file);
            console.error(err);
          });
        };
        reader.readAsDataURL(file);
      } else console.log('Sorry, FileReader API not supported');
    },
    _handleUploadAvatar: function _handleUploadAvatar(file) {
      var _this6 = this;

      return new Promise(function (resolve, reject) {
        __WEBPACK_IMPORTED_MODULE_2_mint_ui__["Indicator"].open();

        var data = new FormData();
        data.append('image', file, 'avatar.png');

        _this6.$api.post('api/v2/settings/avatar/original', data).then(function (response) {
          var _response$data = response.data,
              path = _response$data.path,
              width = _response$data.width,
              height = _response$data.height;


          __WEBPACK_IMPORTED_MODULE_2_mint_ui__["Indicator"].close();
          resolve({ path: path, width: width, height: height });
          _this6.$refs.fileInputAvatar.value = '';
          Object(__WEBPACK_IMPORTED_MODULE_2_mint_ui__["Toast"])({ message: 'Успешно', iconClass: 'mintui mintui-success' });
        }, function (error) {
          __WEBPACK_IMPORTED_MODULE_2_mint_ui__["Indicator"].close();

          var _error$response2 = error.response,
              data = _error$response2.data,
              status = _error$response2.status;

          Object(__WEBPACK_IMPORTED_MODULE_2_mint_ui__["Toast"])({ message: 'Ошибка', iconClass: 'mintui mintui-field-error' });

          if (status === 422 && data.errors) {
            var errors = data.errors;
          } else throw new Error('Error upload avatar');

          reject(data, status);
        });
      });
    },
    _handleClickActionSheetClick: function _handleClickActionSheetClick() {
      this.avatar.sheet.value = true;
    },
    _handleClickChangeAvatar: function _handleClickChangeAvatar() {
      var _this7 = this;

      this._handleClickRemoveAvatar().then(function () {
        _this7.$refs.fileInputAvatar.click();
      });
    },
    _handleClickRemoveAvatar: function _handleClickRemoveAvatar() {
      var _this8 = this;

      return new Promise(function (resolve, reject) {
        try {
          _this8.fields.avatar = null;
          _this8.avatar.sheet.value = false;
          resolve();
        } catch (e) {
          reject();
        }
      });
    }
  }
});
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(18)))

/***/ }),

/***/ 2690:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(2691);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("c9b65672", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js?sourceMap!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-791ccde0\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/sass-loader/lib/loader.js?indentedSyntax!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Index.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js?sourceMap!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-791ccde0\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/sass-loader/lib/loader.js?indentedSyntax!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Index.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 2691:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(true);
// imports


// module
exports.push([module.i, "\n.moderate_rules[data-v-791ccde0] {\n  padding: 20px;\n  border-radius: 8px;\n  background-color: #ebf3fc;\n}\n", "", {"version":3,"sources":["/home/karliv/work/linkmuse-mobile/src/views/User/Register/Index.vue"],"names":[],"mappings":";AAAA;EACE,cAAc;EACd,mBAAmB;EACnB,0BAA0B;CAAE","file":"Index.vue","sourcesContent":[".moderate_rules {\n  padding: 20px;\n  border-radius: 8px;\n  background-color: #ebf3fc; }\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 2692:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "wrapper lm-m-register-page-wrapper final-step-register" },
    [
      _c(
        "div",
        { staticClass: "lm-m-register-wrap-form" },
        [
          _c(
            "h2",
            { staticClass: "heading heading_h2 mb_9" },
            [
              _vm.isAlreadyRegistered === false
                ? [_vm._v("Регистрация")]
                : _vm._e(),
              _vm._v(" "),
              _vm.isAlreadyRegistered === true
                ? [_vm._v("Обновите информацию")]
                : _vm._e()
            ],
            2
          ),
          _vm._v(" "),
          _vm.isAlreadyRegistered === true
            ? [
                _c("div", { staticClass: "fw_600 mb_6" }, [
                  _vm._v(
                    "Для продолжения работы с сайтом, пожалуйста, заполните недостающую информацию."
                  )
                ])
              ]
            : _vm._e(),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "lm-m-upload-avatar-wrap" },
            [
              _vm.fields.avatar
                ? [
                    _c("img", {
                      staticClass: "lm-m-upload-avatar-image mb_3",
                      attrs: { src: _vm.fields.avatar, alt: "Avatar" },
                      on: {
                        click: function($event) {
                          return _vm._handleClickActionSheetClick()
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass: "m-text_bold color_main",
                        on: {
                          click: function($event) {
                            return _vm._handleClickActionSheetClick()
                          }
                        }
                      },
                      [_vm._v("Загрузить фото")]
                    )
                  ]
                : _vm._e(),
              _vm._v(" "),
              _c("input", {
                ref: "fileInputAvatar",
                staticStyle: { visibility: "hidden", display: "none" },
                attrs: { type: "file", accept: "image/*", id: "upload-avatar" },
                on: { change: _vm._handleChangeInputAvatar }
              }),
              _vm._v(" "),
              _vm.fields.avatar === null
                ? [
                    _vm._m(0),
                    _vm._v(" "),
                    _c(
                      "label",
                      {
                        staticClass: "m-block m-text_bold color_main",
                        attrs: { for: "upload-avatar" }
                      },
                      [_vm._v("Загрузить фото")]
                    )
                  ]
                : _vm._e()
            ],
            2
          ),
          _vm._v(" "),
          _c("div", { staticClass: "lm-input-wrap" }, [
            _c("input", {
              directives: [
                {
                  name: "validate",
                  rawName: "v-validate",
                  value: "required",
                  expression: "'required'"
                },
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.fields[_vm.KEYS["firstname"]],
                  expression: "fields[KEYS['firstname']]"
                }
              ],
              key: _vm.KEYS["firstname"],
              class: [
                {
                  error: _vm.verrors.has(
                    _vm.normalizeDotsToArrow(_vm.KEYS["firstname"])
                  )
                },
                "lm-input"
              ],
              attrs: {
                type: "text",
                name: _vm.normalizeDotsToArrow(_vm.KEYS["firstname"]),
                id: _vm.KEYS["firstname"],
                placeholder: "Имя",
                "data-lm-key": _vm.KEYS["firstname"]
              },
              domProps: { value: _vm.fields[_vm.KEYS["firstname"]] },
              on: {
                blur: _vm._handleBlurUpdateField,
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(
                    _vm.fields,
                    _vm.KEYS["firstname"],
                    $event.target.value
                  )
                }
              }
            }),
            _vm._v(" "),
            _vm.verrors.has(_vm.normalizeDotsToArrow(_vm.KEYS["firstname"]))
              ? _c("span", { staticClass: "lm-input-error mt_2" }, [
                  _vm._v(
                    "\n          " +
                      _vm._s(
                        _vm.verrors.first(
                          _vm.normalizeDotsToArrow(_vm.KEYS["firstname"])
                        )
                      ) +
                      "\n        "
                  )
                ])
              : _vm._e()
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "lm-input-wrap" }, [
            _c("input", {
              directives: [
                {
                  name: "validate",
                  rawName: "v-validate",
                  value: "required",
                  expression: "'required'"
                },
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.fields[_vm.KEYS["lastname"]],
                  expression: "fields[KEYS['lastname']]"
                }
              ],
              key: _vm.KEYS["lastname"],
              class: [
                {
                  error: _vm.verrors.has(
                    _vm.normalizeDotsToArrow(_vm.KEYS["lastname"])
                  )
                },
                "lm-input"
              ],
              attrs: {
                type: "text",
                name: _vm.normalizeDotsToArrow(_vm.KEYS["lastname"]),
                id: _vm.KEYS["lastname"],
                placeholder: "Фамилия",
                "data-lm-key": _vm.KEYS["lastname"]
              },
              domProps: { value: _vm.fields[_vm.KEYS["lastname"]] },
              on: {
                blur: _vm._handleBlurUpdateField,
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(
                    _vm.fields,
                    _vm.KEYS["lastname"],
                    $event.target.value
                  )
                }
              }
            }),
            _vm._v(" "),
            _vm.verrors.has(_vm.normalizeDotsToArrow(_vm.KEYS["lastname"]))
              ? _c("span", { staticClass: "lm-input-error mt_2" }, [
                  _vm._v(
                    "\n          " +
                      _vm._s(
                        _vm.verrors.first(
                          _vm.normalizeDotsToArrow(_vm.KEYS["lastname"])
                        )
                      ) +
                      "\n        "
                  )
                ])
              : _vm._e()
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "lm-input-wrap" }, [
            _c("input", {
              directives: [
                { name: "mask-date", rawName: "v-mask-date" },
                {
                  name: "validate",
                  rawName: "v-validate",
                  value:
                    "required|date_format:DD.MM.YYYY|dateAfter:" +
                    _vm
                      .$moment()
                      .subtract("150", "year")
                      .format("DD.MM.YYYY") +
                    "|dateBefore:" +
                    _vm.$moment().format("DD.MM.YYYY"),
                  expression:
                    "'required|date_format:DD.MM.YYYY|dateAfter:' + $moment().subtract('150', 'year').format('DD.MM.YYYY') + '|dateBefore:' + $moment().format('DD.MM.YYYY')"
                },
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.fields[_vm.KEYS["birthday"]],
                  expression: "fields[KEYS['birthday']]"
                }
              ],
              key: _vm.KEYS["birthday"],
              class: [
                {
                  error: _vm.verrors.has(
                    _vm.normalizeDotsToArrow(_vm.KEYS["birthday"])
                  )
                },
                "lm-input"
              ],
              attrs: {
                type: "text",
                name: _vm.normalizeDotsToArrow(_vm.KEYS["birthday"]),
                id: "birthday",
                placeholder: "Дата рождения",
                inputmode: "numeric",
                pattern: "[0-9]*",
                "data-lm-key": _vm.KEYS["birthday"]
              },
              domProps: { value: _vm.fields[_vm.KEYS["birthday"]] },
              on: {
                blur: _vm._handleBlurUpdateField,
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(
                    _vm.fields,
                    _vm.KEYS["birthday"],
                    $event.target.value
                  )
                }
              }
            }),
            _vm._v(" "),
            _vm.verrors.has(_vm.normalizeDotsToArrow(_vm.KEYS["birthday"]))
              ? _c("span", { staticClass: "lm-input-error mt_2" }, [
                  _vm._v(
                    "\n          " +
                      _vm._s(
                        _vm.verrors.first(
                          _vm.normalizeDotsToArrow(_vm.KEYS["birthday"])
                        )
                      ) +
                      "\n        "
                  )
                ])
              : _vm._e()
          ]),
          _vm._v(" "),
          _vm.hasBirthday && _vm.isChild === true
            ? [
                _c("div", { staticClass: "lm-input-wrap" }, [
                  _c("input", {
                    directives: [
                      {
                        name: "validate",
                        rawName: "v-validate",
                        value: "required",
                        expression: "'required'"
                      },
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.fields[_vm.KEYS["guardian"]],
                        expression: "fields[KEYS['guardian']]"
                      }
                    ],
                    key: _vm.KEYS["guardian"],
                    class: [
                      {
                        error: _vm.verrors.has(
                          _vm.normalizeDotsToArrow(_vm.KEYS["guardian"])
                        )
                      },
                      "lm-input"
                    ],
                    attrs: {
                      type: "text",
                      name: _vm.normalizeDotsToArrow(_vm.KEYS["guardian"]),
                      id: _vm.KEYS["guardian"],
                      placeholder: "Имя родителя",
                      "data-lm-key": _vm.KEYS["guardian"]
                    },
                    domProps: { value: _vm.fields[_vm.KEYS["guardian"]] },
                    on: {
                      blur: _vm._handleBlurUpdateField,
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.fields,
                          _vm.KEYS["guardian"],
                          $event.target.value
                        )
                      }
                    }
                  }),
                  _vm._v(" "),
                  _vm.verrors.has(
                    _vm.normalizeDotsToArrow(_vm.KEYS["guardian"])
                  )
                    ? _c("span", { staticClass: "lm-input-error mt_2" }, [
                        _vm._v(
                          "\n            " +
                            _vm._s(
                              _vm.verrors.first(
                                _vm.normalizeDotsToArrow(_vm.KEYS["guardian"])
                              )
                            ) +
                            "\n          "
                        )
                      ])
                    : _vm._e()
                ])
              ]
            : _vm._e(),
          _vm._v(" "),
          _c("div", { staticClass: "mb_9" }, [
            _c("div", { staticClass: "form__row form__row_declaration" }, [
              _c(
                "div",
                { staticClass: "form__column form__column_declaration" },
                [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.fields[_vm.KEYS["gender"]],
                        expression: "fields[KEYS['gender']]"
                      }
                    ],
                    staticClass:
                      "form__checkbox form__checkbox_declaration form__checkbox_declaration_gender",
                    attrs: {
                      id: "female1",
                      type: "radio",
                      name: _vm.normalizeDotsToArrow(_vm.KEYS["gender"]),
                      value: "2",
                      "data-lm-key": _vm.KEYS["gender"]
                    },
                    domProps: {
                      checked: _vm._q(_vm.fields[_vm.KEYS["gender"]], "2")
                    },
                    on: {
                      change: function($event) {
                        return _vm.$set(_vm.fields, _vm.KEYS["gender"], "2")
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "label",
                    {
                      staticClass:
                        "checkbox__label_declaration checkbox__label_declaration_gender",
                      attrs: { for: "female1" }
                    },
                    [_vm._v("Женский")]
                  )
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "form__column form__column_declaration" },
                [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.fields[_vm.KEYS["gender"]],
                        expression: "fields[KEYS['gender']]"
                      }
                    ],
                    staticClass:
                      "form__checkbox form__checkbox_declaration form__checkbox_declaration_gender",
                    attrs: {
                      id: "male1",
                      type: "radio",
                      name: _vm.normalizeDotsToArrow(_vm.KEYS["gender"]),
                      value: "1",
                      "data-lm-key": _vm.KEYS["gender"]
                    },
                    domProps: {
                      checked: _vm._q(_vm.fields[_vm.KEYS["gender"]], "1")
                    },
                    on: {
                      change: function($event) {
                        return _vm.$set(_vm.fields, _vm.KEYS["gender"], "1")
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "label",
                    {
                      staticClass:
                        "checkbox__label_declaration checkbox__label_declaration_gender",
                      attrs: { for: "male1" }
                    },
                    [_vm._v("Мужской")]
                  )
                ]
              )
            ]),
            _vm._v(" "),
            _vm.verrors.has(_vm.normalizeDotsToArrow(_vm.KEYS["gender"]))
              ? _c("span", { staticClass: "lm-text-error" }, [
                  _vm._v(
                    "\n            " +
                      _vm._s(
                        _vm.verrors.first(
                          _vm.normalizeDotsToArrow(_vm.KEYS["gender"])
                        )
                      ) +
                      "\n          "
                  )
                ])
              : _vm._e()
          ]),
          _vm._v(" "),
          _vm.isChild
            ? _c("div", { staticClass: "lm-input-wrap moderate_rules mb_9" }, [
                _vm._v(
                  "\n        " +
                    _vm._s(
                      _vm.isAlreadyRegistered
                        ? "Обновляя информацию"
                        : "Регистрируясь"
                    ) +
                    ", вы также соглашаетесь с\n        "
                ),
                _c(
                  "a",
                  {
                    staticClass: "m-text_bold color_main",
                    attrs: {
                      target: "_blank",
                      href: "/pages/agreements_children"
                    }
                  },
                  [
                    _vm._v(
                      "Политикой обработки персональных данных несовершеннолетнего"
                    )
                  ]
                )
              ])
            : _vm._e(),
          _vm._v(" "),
          _c("div", { staticClass: "fix" }),
          _vm._v(" "),
          _c("div", { staticClass: "lm-m-post-register-fixed-bottom" }, [
            _c(
              "button",
              {
                staticClass: "lm-primary-button middle",
                on: { click: _vm._handleOnComplete }
              },
              [
                _vm._v(
                  "\n          " +
                    _vm._s(
                      _vm.isAlreadyRegistered ? "Обновить" : "Создать аккаунт"
                    ) +
                    "\n        "
                )
              ]
            )
          ])
        ],
        2
      ),
      _vm._v(" "),
      _c("cropper-avatar-modal"),
      _vm._v(" "),
      _c("actionsheet", {
        attrs: { actions: _vm.avatar.sheet.actions, "cancel-text": "" },
        model: {
          value: _vm.avatar.sheet.value,
          callback: function($$v) {
            _vm.$set(_vm.avatar.sheet, "value", $$v)
          },
          expression: "avatar.sheet.value"
        }
      })
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "label",
      {
        staticClass: "lm-m-upload-avatar mb_3",
        attrs: { for: "upload-avatar" }
      },
      [_c("i", { staticClass: "lm-icon-square-upload" })]
    )
  }
]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-791ccde0", esExports)
  }
}

/***/ })

});
//# sourceMappingURL=101.build.d1cbf7f1ec431871f848.js.map