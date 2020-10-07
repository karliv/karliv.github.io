webpackJsonp([103],{

/***/ 1433:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_portfolio_vue__ = __webpack_require__(1891);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_6a7e4c6c_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_portfolio_vue__ = __webpack_require__(2695);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(2693)
}
var normalizeComponent = __webpack_require__(2)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-6a7e4c6c"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_portfolio_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_6a7e4c6c_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_portfolio_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/views/User/Register/helpers/portfolio.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6a7e4c6c", Component.options)
  } else {
    hotAPI.reload("data-v-6a7e4c6c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 1552:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mint_ui__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mint_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_mint_ui__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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

var resizeCropImage = function resizeCropImage(next, src) {
  return new Promise(function (resolve) {
    Object(__WEBPACK_IMPORTED_MODULE_0__utils__["x" /* resizeImage */])(src, 2560).then(function (_ref) {
      var src = _ref.src;

      next(src);
      resolve(src);
    }, function (err) {
      next(src);
      resolve(src);
      console.error(err);
    });
  });
};

/* harmony default export */ __webpack_exports__["a"] = ({
  components: { 'mt-popup': __WEBPACK_IMPORTED_MODULE_1_mint_ui__["Popup"] },
  props: {
    portfolio: {
      required: true
    }
  },
  data: function data() {
    return {
      has: __WEBPACK_IMPORTED_MODULE_0__utils__["l" /* has */],
      activeCell: null,
      cells: this.portfolio.cells,
      loaders: [],
      errors: [],
      cropper: {
        loading: false,
        modal: false,
        src: null
      }
    };
  },

  methods: {
    _handleClickUploadPhoto: function _handleClickUploadPhoto(cell) {
      this.activeCell = cell;
      this.$refs.fileInputPhotoPortfolio.click();
    },
    _handleClickOpenPhoto: function _handleClickOpenPhoto(cell) {
      var _this = this;

      this.activeCell = cell;

      var _cells$data$cell = this.cells['data'][cell],
          path = _cells$data$cell.data.path,
          points = _cells$data$cell.points,
          resized = _cells$data$cell.resized;


      __WEBPACK_IMPORTED_MODULE_1_mint_ui__["Indicator"].open();

      Object(__WEBPACK_IMPORTED_MODULE_0__utils__["d" /* checkLoadImage */])(resized || path).then(function (_ref2) {
        var path = _ref2.path,
            status = _ref2.status;

        var next = function next(path) {
          __WEBPACK_IMPORTED_MODULE_1_mint_ui__["Indicator"].close();
          _this.cropper.src = path;
          _this.cropper.modal = true;

          _this.$nextTick(function () {
            var context = _this.$refs.cropper_portfolio_photo;
            // context.setCanvasData(points)
            context.replace(path);
          });
        };

        if (resized) {
          next(resized);
        } else {
          resizeCropImage(next, path).then(function (src) {
            _this.$set(_this.cells['data'][cell], 'resized', src);
          });
        }
      }).catch(function () {
        __WEBPACK_IMPORTED_MODULE_1_mint_ui__["Indicator"].close();

        Object(__WEBPACK_IMPORTED_MODULE_1_mint_ui__["Toast"])({
          message: 'Ошибка',
          iconClass: 'mintui mintui-field-error'
        });
      });
    },
    _handleClickUploadVideo: function _handleClickUploadVideo(cell) {
      this.activeCell = cell;
      this.$refs.fileInputVideoPortfolio.click();
    },
    _handleClickOpenVideo: function _handleClickOpenVideo(cell) {},
    _handleChangeInputPhoto: function _handleChangeInputPhoto(el) {
      var _this2 = this;

      var files = el.target.files || el.dataTransfer.files;
      if (!files.length) return;

      var file = el.target.files[0];
      var cell = this.activeCell;

      if (!file.type.includes('image/')) {
        console.log('Please select an image file');
        return;
      }

      if (typeof FileReader === 'function') {
        var reader = new FileReader();

        reader.onload = function (event) {
          var next = function next(src) {
            _this2.cropper.src = src;

            _this2._handleUploadPhoto(file).then(function (_ref3) {
              var photo_id = _ref3.photo_id,
                  path = _ref3.path;

              _this2.$set(_this2.cells['data'][cell], 'data', {
                path: path,
                id: photo_id,
                thumbnail: path,
                uploaded: false
              });
              _this2.$set(_this2.cells['data'][cell], 'resized', src);

              _this2.cropper.modal = true;
              _this2.$refs.cropper_portfolio_photo.replace(src);
            }).catch(function (data, status) {});
          };

          resizeCropImage(next, event.target.result);
        };
        reader.readAsDataURL(file);
      } else console.log('Sorry, FileReader API not supported');
    },
    _handleChangeInputVideo: function _handleChangeInputVideo(el) {
      var _this3 = this;

      var files = el.target.files || el.dataTransfer.files;
      if (!files.length) return;

      var file = el.target.files[0];
      var cell = this.activeCell;

      if (!file.type.includes('video/')) {
        console.log('Please select an video file');
        return;
      }

      this._handleUploadVideo(file).then(function (data) {
        _this3.$set(_this3.cells['data'][cell], 'data', data);
        var video_id = data.video_id;


        __WEBPACK_IMPORTED_MODULE_1_mint_ui__["Indicator"].open();

        _this3.$api.post('api/v1/profiles/portfolio/' + _this3.portfolio.id + '/positions/' + cell, { content_id: video_id }).then(function (response) {
          var data = response.data;


          _this3.$emit('updated', cell, _this3.cells['data'][cell]);
          _this3.activeCell = null;

          __WEBPACK_IMPORTED_MODULE_1_mint_ui__["Indicator"].close();

          Object(__WEBPACK_IMPORTED_MODULE_1_mint_ui__["Toast"])({
            message: 'Успешно',
            iconClass: 'mintui mintui-success'
          });
        }, function (error) {
          var data = error.response.data,
              status = error.response.status;


          _this3.activeCell = null;

          __WEBPACK_IMPORTED_MODULE_1_mint_ui__["Indicator"].close();
          if (status === 422 && data.errors) {
            var errors = data.errors;
          } else throw new Error('Error attach video');
        });
      }).catch(function (data, status) {});
    },
    _handleUploadPhoto: function _handleUploadPhoto(file) {
      var _this4 = this;

      return new Promise(function (resolve, reject) {
        __WEBPACK_IMPORTED_MODULE_1_mint_ui__["Indicator"].open();

        var cell = _this4.activeCell;

        if (_this4.loaders.indexOf(cell) < 0) {
          _this4.loaders.push(cell);
        }

        var data = new FormData();
        data.append('file', file, 'photo.png');

        _this4.$api.post('api/v1/profiles/portfolio/positions/photos', data, { baseURL: BASE_URL_UPLOAD, timeout: 120000 }).then(function (response) {
          var _response$data = response.data,
              photo_id = _response$data.photo_id,
              path = _response$data.path;


          _this4.$refs.fileInputPhotoPortfolio.value = '';

          __WEBPACK_IMPORTED_MODULE_1_mint_ui__["Indicator"].close();
          Object(__WEBPACK_IMPORTED_MODULE_1_mint_ui__["Toast"])({
            message: 'Успешно',
            iconClass: 'mintui mintui-success'
          });

          _this4.loaders.splice(_this4.loaders.indexOf(cell), 1);
          _this4.errors.splice(_this4.errors.indexOf(cell), 1);
          resolve({ photo_id: photo_id, path: path });
        }, function (error) {
          __WEBPACK_IMPORTED_MODULE_1_mint_ui__["Indicator"].close();

          _this4.loaders.splice(_this4.loaders.indexOf(cell), 1);
          _this4.errors.push(cell);

          Object(__WEBPACK_IMPORTED_MODULE_1_mint_ui__["Toast"])({
            message: 'Ошибка',
            iconClass: 'mintui mintui-field-error'
          });

          var data = error.response.data,
              status = error.response.status;


          if (status === 422 && data.errors) {
            var errors = data.errors;
          } else throw new Error('Error upload photo');

          reject(data, status);
        });
      });
    },
    _handleBlurInputVideoUrl: function _handleBlurInputVideoUrl(el) {
      var _this5 = this;

      var value = el.target.value;

      if (!value) return;

      var cell = 1;
      this.activeCell = 1;

      this._handleUploadVideo(value).then(function (data) {
        _this5.$set(_this5.cells['data'][cell], 'data', data);
        var video_id = data.video_id;


        __WEBPACK_IMPORTED_MODULE_1_mint_ui__["Indicator"].open();

        _this5.$api.post('api/v1/profiles/portfolio/' + _this5.portfolio.id + '/positions/' + cell, { content_id: video_id }).then(function (response) {
          var data = response.data;


          _this5.$emit('updated', cell, _this5.cells['data'][cell]);

          _this5.activeCell = null;

          __WEBPACK_IMPORTED_MODULE_1_mint_ui__["Indicator"].close();

          Object(__WEBPACK_IMPORTED_MODULE_1_mint_ui__["Toast"])({
            message: 'Успешно',
            iconClass: 'mintui mintui-success'
          });
        }, function (error) {
          var data = error.response.data,
              status = error.response.status;


          _this5.activeCell = null;

          __WEBPACK_IMPORTED_MODULE_1_mint_ui__["Indicator"].close();
          if (status === 422 && data.errors) {
            var errors = data.errors;
          } else throw new Error('Error attach video');
        });
      }).catch(function (data, status) {});
    },
    _handleUploadVideo: function _handleUploadVideo(file) {
      var _this6 = this;

      return new Promise(function (resolve, reject) {
        __WEBPACK_IMPORTED_MODULE_1_mint_ui__["Indicator"].open();

        var cell = _this6.activeCell;

        if (_this6.loaders.indexOf(cell) < 0) {
          _this6.loaders.push(cell);
        }

        var data = new FormData();
        data.append('file', file);

        _this6.$api.post('api/v1/users/videos', data, { baseURL: BASE_URL_UPLOAD, timeout: 120000 }).then(function (response) {
          var data = response.data.data;


          _this6.$refs.fileInputVideoPortfolio.value = '';

          __WEBPACK_IMPORTED_MODULE_1_mint_ui__["Indicator"].close();

          _this6.loaders.splice(_this6.loaders.indexOf(cell), 1);
          _this6.errors.splice(_this6.errors.indexOf(cell), 1);
          resolve(data);
        }, function (error) {
          __WEBPACK_IMPORTED_MODULE_1_mint_ui__["Indicator"].close();

          _this6.loaders.splice(_this6.loaders.indexOf(cell), 1);
          _this6.errors.push(cell);

          Object(__WEBPACK_IMPORTED_MODULE_1_mint_ui__["Toast"])({
            message: 'Ошибка',
            iconClass: 'mintui mintui-field-error'
          });

          var data = error.response.data,
              status = error.response.status;


          if (status === 422 && data.errors) {
            var errors = data.errors;
          } else throw new Error('Error upload video');

          reject(data, status);
        });
      });
    },
    _handleClickCloseCropperPhoto: function _handleClickCloseCropperPhoto() {
      var cell = this.activeCell;

      if (Object(__WEBPACK_IMPORTED_MODULE_0__utils__["l" /* has */])(this.cells['data'][cell], 'data.uploaded') && this.cells['data'][cell]['data']['uploaded'] === false) {
        var el = JSON.parse(JSON.stringify(this.cells.data[cell]));
        this.$set(this.cells.data, cell, {
          type: el.type,
          position: el.position,
          size: el.size || null
        });
      }

      this.activeCell = null;
      this.cropper.modal = false;
      this.cropper.src = null;
    },
    _handleClickCropPhoto: function _handleClickCropPhoto() {
      var _this7 = this;

      __WEBPACK_IMPORTED_MODULE_1_mint_ui__["Indicator"].open();

      var cell = this.cells['data'][this.activeCell];
      var context = this.$refs.cropper_portfolio_photo;
      var size = { "width": this.cells.data[this.activeCell]['size']['width'], "height": this.cells.data[this.activeCell]['size']['height'] };

      var canvasData = context.getCanvasData();
      this.$set(this.cells['data'][this.activeCell]['data'], 'uploaded', true);
      this.$set(this.cells['data'][this.activeCell], 'thumbnail', context.getCroppedCanvas(size).toDataURL());

      context.getCroppedCanvas(size).toBlob(function (blob) {
        var data = new FormData();

        data.append('content_id', cell['data']['id']);
        data.append('thumbnail', blob, 'thumbnail.jpg');

        _this7.$set(_this7.cells['data'][_this7.activeCell], 'points', canvasData);
        Object.keys(canvasData).forEach(function (key) {
          return data.append('points[' + key + ']', canvasData[key].toFixed(3));
        });

        _this7.$api.post('api/v1/profiles/portfolio/' + _this7.portfolio.id + '/positions/' + cell['position'], data).then(function (response) {
          var data = response.data;


          cell['attach'] = true;

          _this7.$emit('updated', _this7.activeCell, _this7.cells['data'][_this7.activeCell]);

          _this7.cropper.modal = false;
          _this7.cropper.src = null;
          _this7.activeCell = null;

          __WEBPACK_IMPORTED_MODULE_1_mint_ui__["Indicator"].close();
        }, function (error) {
          var data = error.response.data,
              status = error.response.status;


          _this7.cropper.modal = false;
          _this7.cropper.src = null;
          _this7.activeCell = null;

          __WEBPACK_IMPORTED_MODULE_1_mint_ui__["Indicator"].close();
          if (status === 422 && data.errors) {
            var errors = data.errors;
          } else throw new Error('Error attach avatar');
        });
      });
    },
    _handleClickClearCell: function _handleClickClearCell(cell) {
      var _this8 = this;

      return new Promise(function (resolve, reject) {
        __WEBPACK_IMPORTED_MODULE_1_mint_ui__["Indicator"].open();

        var el = JSON.parse(JSON.stringify(_this8.cells.data[cell]));

        _this8.$set(_this8.cells.data, cell, {
          type: el.type,
          position: el.position,
          size: el.size || null
        });

        _this8.$api.delete('api/v1/profiles/portfolio/' + _this8.portfolio.id + '/positions/' + cell).then(function (response) {
          __WEBPACK_IMPORTED_MODULE_1_mint_ui__["Indicator"].close();
          _this8.$emit('updated', cell, _this8.cells.data[cell]);
          _this8.$emit('unpublished');
          resolve();
        }, function (error) {
          var data = error.response.data,
              status = error.response.status;


          _this8.$set(_this8.cells.data, cell, el);
          _this8.$emit('updated', cell, _this8.cells.data[cell]);

          __WEBPACK_IMPORTED_MODULE_1_mint_ui__["Indicator"].close();

          if (status === 422 && data.errors) {
            var errors = data.errors;
          } else throw new Error('Error attach avatar');

          reject(error);
        });
      });
    }
  }
});

/***/ }),

/***/ 1598:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Model_vue__ = __webpack_require__(1552);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_61068f58_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Model_vue__ = __webpack_require__(1601);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1599)
}
var normalizeComponent = __webpack_require__(2)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-61068f58"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Model_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_61068f58_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Model_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/User/Executor/Portfolio/Templates/Model.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-61068f58", Component.options)
  } else {
    hotAPI.reload("data-v-61068f58", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 1599:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1600);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("0da5cb90", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-61068f58\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Model.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-61068f58\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Model.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1600:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(true);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"Model.vue","sourceRoot":""}]);

// exports


/***/ }),

/***/ 1601:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _vm.portfolio
        ? _c("div", { staticClass: "portfolio-wrap" }, [
            _c(
              "div",
              {
                class: [
                  {
                    uploaded:
                      _vm.has(_vm.cells["data"][0], "data.path") &&
                      _vm.has(_vm.cells["data"][0], "data.id"),
                    error: _vm.errors.indexOf(0) > -1,
                    loaded: _vm.loaders.indexOf(0) > -1
                  },
                  "lm-m-post-register-portfolio--item",
                  "first"
                ]
              },
              [
                !_vm.has(_vm.cells["data"][0], "data.id")
                  ? [
                      _c(
                        "div",
                        {
                          staticClass: "item-upload-wrap",
                          on: {
                            click: function($event) {
                              return _vm._handleClickUploadPhoto(0)
                            }
                          }
                        },
                        [
                          _c("i", { staticClass: "lm-icon-square-upload" }),
                          _vm._v(" "),
                          _c("span", { staticClass: "desc" }, [
                            _vm._v("Портретное фото")
                          ])
                        ]
                      )
                    ]
                  : _vm.has(_vm.cells["data"][0], "data.path") &&
                    _vm.has(_vm.cells["data"][0], "data.id")
                  ? [
                      _c(
                        "div",
                        {
                          staticClass: "item-wrap",
                          on: {
                            click: function($event) {
                              return _vm._handleClickOpenPhoto(0)
                            }
                          }
                        },
                        [
                          _c("img", {
                            style: { height: "auto" },
                            attrs: {
                              src: _vm.cells["data"][0]["thumbnail"],
                              alt: _vm.cells["data"][0]["data"]["description"]
                            }
                          }),
                          _vm._v(" "),
                          _c("i", {
                            staticClass: "remove",
                            on: {
                              click: function($event) {
                                $event.stopPropagation()
                                $event.preventDefault()
                                return _vm._handleClickClearCell(0)
                              }
                            }
                          })
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
              {
                class: [
                  {
                    uploaded:
                      _vm.has(_vm.cells["data"][2], "data.path") &&
                      _vm.has(_vm.cells["data"][2], "data.id"),
                    error: _vm.errors.indexOf(2) > -1,
                    loaded: _vm.loaders.indexOf(2) > -1
                  },
                  "lm-m-post-register-portfolio--item",
                  "second"
                ]
              },
              [
                !_vm.has(_vm.cells["data"][2], "data.id")
                  ? [
                      _c(
                        "div",
                        {
                          staticClass: "item-upload-wrap",
                          on: {
                            click: function($event) {
                              return _vm._handleClickUploadPhoto(2)
                            }
                          }
                        },
                        [
                          _c("i", { staticClass: "lm-icon-square-upload" }),
                          _vm._v(" "),
                          _c("span", { staticClass: "desc" }, [
                            _vm._v("Фото в полный рост")
                          ])
                        ]
                      )
                    ]
                  : _vm.has(_vm.cells["data"][2], "data.path") &&
                    _vm.has(_vm.cells["data"][2], "data.id")
                  ? [
                      _c(
                        "div",
                        {
                          staticClass: "item-wrap",
                          on: {
                            click: function($event) {
                              return _vm._handleClickOpenPhoto(2)
                            }
                          }
                        },
                        [
                          _c("img", {
                            style: { height: "auto" },
                            attrs: {
                              src: _vm.cells["data"][2]["thumbnail"],
                              alt: _vm.cells["data"][2]["data"]["description"]
                            }
                          }),
                          _vm._v(" "),
                          _c("i", {
                            staticClass: "remove",
                            on: {
                              click: function($event) {
                                $event.stopPropagation()
                                $event.preventDefault()
                                return _vm._handleClickClearCell(2)
                              }
                            }
                          })
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
              {
                class: [
                  {
                    uploaded:
                      _vm.has(_vm.cells["data"][3], "data.path") &&
                      _vm.has(_vm.cells["data"][3], "data.id"),
                    error: _vm.errors.indexOf(3) > -1,
                    loaded: _vm.loaders.indexOf(3) > -1
                  },
                  "lm-m-post-register-portfolio--item",
                  "second"
                ]
              },
              [
                !_vm.has(_vm.cells["data"][3], "data.id")
                  ? [
                      _c(
                        "div",
                        {
                          staticClass: "item-upload-wrap",
                          on: {
                            click: function($event) {
                              return _vm._handleClickUploadPhoto(3)
                            }
                          }
                        },
                        [
                          _c("i", { staticClass: "lm-icon-square-upload" }),
                          _vm._v(" "),
                          _c("span", { staticClass: "desc" }, [
                            _vm._v("Фото в полный рост")
                          ])
                        ]
                      )
                    ]
                  : _vm.has(_vm.cells["data"][3], "data.path") &&
                    _vm.has(_vm.cells["data"][3], "data.id")
                  ? [
                      _c(
                        "div",
                        {
                          staticClass: "item-wrap",
                          on: {
                            click: function($event) {
                              return _vm._handleClickOpenPhoto(3)
                            }
                          }
                        },
                        [
                          _c("img", {
                            style: { height: "auto" },
                            attrs: {
                              src: _vm.cells["data"][3]["thumbnail"],
                              alt: _vm.cells["data"][3]["data"]["description"]
                            }
                          }),
                          _vm._v(" "),
                          _c("i", {
                            staticClass: "remove",
                            on: {
                              click: function($event) {
                                $event.stopPropagation()
                                $event.preventDefault()
                                return _vm._handleClickClearCell(3)
                              }
                            }
                          })
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
              {
                class: [
                  {
                    uploaded: _vm.has(_vm.cells["data"][1], "data.id"),
                    error: _vm.errors.indexOf(1) > -1,
                    loaded: _vm.loaders.indexOf(1) > -1
                  },
                  "lm-m-post-register-portfolio--item",
                  "three"
                ]
              },
              [
                !_vm.has(_vm.cells["data"][1], "data.id")
                  ? [
                      _c(
                        "div",
                        {
                          staticClass: "item-upload-wrap",
                          on: {
                            click: function($event) {
                              return _vm._handleClickUploadVideo(1)
                            }
                          }
                        },
                        [
                          _c("i", { staticClass: "lm-icon-square-upload" }),
                          _vm._v(" "),
                          _c("span", { staticClass: "desc" }, [_vm._v("Видео")])
                        ]
                      )
                    ]
                  : _vm.has(_vm.cells["data"][1], "data.id")
                  ? [
                      _c(
                        "div",
                        {
                          staticClass: "item-wrap",
                          on: {
                            click: function($event) {
                              return _vm._handleClickOpenVideo(1)
                            }
                          }
                        },
                        [
                          _c("img", {
                            style: { height: "auto" },
                            attrs: {
                              src:
                                _vm.cells["data"][1]["data"][
                                  "cover_image_orig"
                                ],
                              alt: _vm.cells["data"][1]["data"]["description"]
                            }
                          }),
                          _vm._v(" "),
                          _c("i", {
                            staticClass: "remove",
                            on: {
                              click: function($event) {
                                $event.stopPropagation()
                                $event.preventDefault()
                                return _vm._handleClickClearCell(1)
                              }
                            }
                          })
                        ]
                      )
                    ]
                  : _vm._e()
              ],
              2
            ),
            _vm._v(" "),
            _c("input", {
              ref: "fileInputPhotoPortfolio",
              staticStyle: { display: "none" },
              attrs: { type: "file", accept: "image/*" },
              on: { change: _vm._handleChangeInputPhoto }
            }),
            _vm._v(" "),
            _c("input", {
              ref: "fileInputVideoPortfolio",
              staticStyle: { display: "none" },
              attrs: { type: "file", accept: "video/*" },
              on: { change: _vm._handleChangeInputVideo }
            })
          ])
        : _vm._e(),
      _vm._v(" "),
      !_vm.has(_vm.cells["data"][1], "data.id")
        ? _c("div", { staticClass: "lm-input-wrap" }, [
            _c("input", {
              staticClass: "lm-input",
              attrs: { type: "text", placeholder: "Добавьте ссылку" },
              on: { blur: _vm._handleBlurInputVideoUrl }
            }),
            _vm._v(" "),
            _c("span", { staticClass: "desc" }, [
              _vm._v(
                "Вместо загрузки видео вы можете указать ссылку на Youtube, Rutube, Vimeo и другие"
              )
            ])
          ])
        : _vm._e(),
      _vm._v(" "),
      _c(
        "mt-popup",
        {
          staticClass:
            "lm-m-post-register-page-wrapper lm-m-post-register-select-role lm-m-crop-avatar-image",
          attrs: { position: "bottom", modal: false },
          model: {
            value: _vm.cropper.modal,
            callback: function($$v) {
              _vm.$set(_vm.cropper, "modal", $$v)
            },
            expression: "cropper.modal"
          }
        },
        [
          _c("h1", { staticStyle: { "margin-bottom": "12px" } }, [
            _vm._v("Обрежьте фото")
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "lm-m-post-register-crop-wrap" }, [
            _c("div", { staticClass: "lm-m-cropper" }, [
              _c(
                "div",
                { staticClass: "lm-m-cropper-editor" },
                [
                  _vm.activeCell !== null &&
                  _vm.cropper.src &&
                  _vm.cropper.modal
                    ? _c("vue-cropper", {
                        ref: "cropper_portfolio_photo",
                        staticClass: "lm-m-cropper-canvas",
                        attrs: {
                          guides: false,
                          checkCrossOrigin: true,
                          background: false,
                          "view-mode": 1,
                          "drag-mode": "move",
                          "aspect-ratio":
                            this.cells.data[_vm.activeCell]["size"]["width"] /
                            this.cells.data[_vm.activeCell]["size"]["height"],
                          "auto-crop-area": 0.5,
                          cropBoxMovable: false,
                          cropBoxResizable: false,
                          src: _vm.cropper.src,
                          alt: "Photo"
                        }
                      })
                    : _vm._e()
                ],
                1
              )
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "lm-m-post-register-fixed-bottom" }, [
            _c(
              "a",
              {
                staticClass: "lm-link-button",
                attrs: { href: "javascript:void(0)" },
                on: { click: _vm._handleClickCloseCropperPhoto }
              },
              [_vm._v("отмена")]
            ),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass: "lm-primary-button middle",
                on: { click: _vm._handleClickCropPhoto }
              },
              [_vm._v("Обрезать")]
            )
          ])
        ]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-61068f58", esExports)
  }
}

/***/ }),

/***/ 1891:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mint_ui__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mint_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_mint_ui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_User_Executor_Portfolio_Templates_Model_vue__ = __webpack_require__(1598);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

//
//
//
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
  components: { 'template-model': __WEBPACK_IMPORTED_MODULE_3__components_User_Executor_Portfolio_Templates_Model_vue__["a" /* default */] },
  props: {
    is_current_user: {
      type: Boolean,
      required: false
    }
  },
  data: function data() {
    return {
      portfolio: null
    };
  },

  computed: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_1_vuex__["c" /* mapGetters */])({
    role: 'auth/getRole',
    user: 'auth/getAuthUser'
  }), {
    isExecutor: function isExecutor() {
      return this.role === 'executor';
    },
    disabledPublish: function disabledPublish() {
      if (!this.portfolio) return true;
      return this.portfolio.cells.data.some(function (cell) {
        return Object(__WEBPACK_IMPORTED_MODULE_0__utils__["l" /* has */])(cell, 'data.id') === false;
      });
    }
  }),
  created: function created() {
    var _this = this;

    this.$api.get('api/v1/users/' + this.user.id + '/portfolio').then(function (response) {
      var data = response.data.data;

      _this.portfolio = data ? data[0] : null;
    }, function (error) {
      var data = error.response.data,
          status = error.response.status;


      if (status === 422 && data.errors) {
        var errors = data.errors;
      } else throw new Error('Error loading portfolio');
    });
  },

  methods: {
    _handleClickSkipPublishPortfolio: function _handleClickSkipPublishPortfolio() {
      this._handleRedirectAfterRegister();
    },
    _handleClickPublishPortfolio: function _handleClickPublishPortfolio() {
      var _this2 = this;

      __WEBPACK_IMPORTED_MODULE_2_mint_ui__["Indicator"].open();

      this.$api.patch('api/v1/profiles/portfolio/' + this.portfolio.id + '/publish').then(function (response) {
        var data = response.data.data;


        __WEBPACK_IMPORTED_MODULE_2_mint_ui__["Indicator"].close();
        _this2._handleRedirectAfterRegister();
      }, function (error) {
        var data = error.response.data,
            status = error.response.status;


        __WEBPACK_IMPORTED_MODULE_2_mint_ui__["Indicator"].close();

        if (status === 422 && data.errors) {
          var errors = data.errors;
        } else throw new Error('Error loading portfolio');
      });
    },
    _handleRedirectAfterRegister: function _handleRedirectAfterRegister() {
      var _this3 = this;

      if (this.$localStorage.get('redirect.register', null, String)) {
        var location = this.$localStorage.get('redirect.register', '/', String);
        this.$localStorage.remove('redirect.register');
        this.$router.push(location);
      } else this.$router.push({ name: 'user.show', params: { username: this.user.username } });

      this.$nextTick(function () {
        _this3.$root.$emit('open-modal-draw-geo');
      });
    }
  }
});

/***/ }),

/***/ 2693:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(2694);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("4e33ebc5", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6a7e4c6c\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./portfolio.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6a7e4c6c\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./portfolio.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 2694:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(true);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"portfolio.vue","sourceRoot":""}]);

// exports


/***/ }),

/***/ 2695:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c(
      "div",
      { staticClass: "lm-m-post-register-enter-info lm-portfolio" },
      [
        _vm.portfolio
          ? _c("template-model", {
              attrs: {
                portfolio: _vm.portfolio,
                is_current_user: _vm.is_current_user
              }
            })
          : _vm._e()
      ],
      1
    ),
    _vm._v(" "),
    _vm.is_current_user
      ? _c(
          "div",
          {
            staticClass: "lm-m-post-register-fixed-bottom",
            attrs: { slot: "actions" },
            slot: "actions"
          },
          [
            _c(
              "a",
              {
                staticClass: "lm-link-button",
                attrs: { href: "javascript:void(0)" },
                on: { click: _vm._handleClickSkipPublishPortfolio }
              },
              [_vm._v("Пропустить")]
            ),
            _vm._v(" "),
            _vm.disabledPublish === false
              ? _c(
                  "button",
                  {
                    staticClass: "lm-primary-button middle",
                    on: { click: _vm._handleClickPublishPortfolio }
                  },
                  [_vm._v("Завершить")]
                )
              : _vm._e()
          ]
        )
      : _vm._e()
  ])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-6a7e4c6c", esExports)
  }
}

/***/ })

});
//# sourceMappingURL=103.build.d1cbf7f1ec431871f848.js.map