webpackJsonp([104],{

/***/ 1401:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Index_vue__ = __webpack_require__(1773);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_86cc112e_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Index_vue__ = __webpack_require__(2376);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(2370)
}
var normalizeComponent = __webpack_require__(2)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-86cc112e"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_86cc112e_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Index_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/views/Messages/Index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-86cc112e", Component.options)
  } else {
    hotAPI.reload("data-v-86cc112e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 1773:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mint_ui__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mint_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_mint_ui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vuex__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Message_Dialog_Card_vue__ = __webpack_require__(2372);
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







/* harmony default export */ __webpack_exports__["a"] = ({
  components: { 'mt-popup': __WEBPACK_IMPORTED_MODULE_1_mint_ui__["Popup"], 'mt-loadmore': __WEBPACK_IMPORTED_MODULE_1_mint_ui__["Loadmore"], DialogCard: __WEBPACK_IMPORTED_MODULE_4__components_Message_Dialog_Card_vue__["a" /* default */] },
  metaInfo: {
    title: 'Сообщения'
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
              return store.dispatch('message/fetchDialogs', { rewrite: true });

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
      height: '100%',
      search: {
        q: null,
        enabled: false
      },
      loadmore: {
        topStatus: null
      },
      create: {
        keyword: null,
        enabled: false,
        data: [],
        count: 0,
        offset: 0,
        limit: 24,
        error: false,
        loading: false,
        infiniteDisabled: true
      }
    };
  },

  computed: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_2_vuex__["c" /* mapGetters */])({
    user: 'auth/getAuthUser',
    dialogs: 'message/getDialogs',
    count: 'message/getCountDialogs',
    offset: 'message/getOffsetDialogs',
    error: 'message/getDialogsError',
    loading: 'message/getDialogsLoading',
    infiniteDisabled: 'message/getDialogsInfiniteDisabled',
    searchDialogs: 'message/getSearchDialogs',
    searchCount: 'message/getSearchCountDialogs',
    searchError: 'message/getSearchDialogsError',
    searchLoading: 'message/getSearchDialogsLoading',
    searchInitial: 'message/getSearchDialogsInitial',
    searchInfiniteDisabled: 'message/getSearchDialogsInfiniteDisabled'
  }), {
    isEmpty: function isEmpty() {
      return !this.loading && this.count === 0;
    },
    isEmptySearch: function isEmptySearch() {
      return !this.searchLoading && this.searchCount === 0;
    },

    searching: {
      get: function get() {
        return this.search.enabled;
      },
      set: function set(value) {
        this.search.enabled = value;
      }
    },
    infiniteDisabledCreated: function infiniteDisabledCreated() {
      return this.create.infiniteDisabled;
    }
  }),
  beforeDestroy: function beforeDestroy() {
    // this.$chatBull.show()
    this.$echo.private('user.' + this.user.id).stopListening('Message\\MessageWasReceived');
  },
  mounted: function mounted() {
    var _this2 = this;

    // this.$chatBull.hide()
    this.height = document.documentElement.clientHeight - this.$refs.wrapper.getBoundingClientRect().top + 'px';

    if (this.user) {
      this.$echo.private('user.' + this.user.id).listen('Message\\MessageWasReceived', function (_ref2) {
        var data = _ref2.data;

        var message = data,
            _ = _this2._;

        var dialog = _.find(_this2.dialogs, function (d) {
          return d.id === message.uid;
        });

        if (dialog) {
          var value = {
            me: false, read: false, text: message.text,
            date: message.date, time: message.sent_time,
            is_attachment: message.attachments.length > 0
          };

          _this2._handleSetDialogFiledById({ id: dialog.id, key: 'message', value: value });
          _this2._handleSetDialogFiledById({ id: dialog.id, key: 'interlocutor.online', value: true });
        } else {
          var _data = [{
            id: message.uid,
            interlocutor: {
              id: message.from.data.user_id,
              avatar: message.from.data.avatar,
              name: message.from.data.name,
              username: message.from.data.username,
              online: true
            },
            message: {
              me: false, read: false, text: message.text,
              date: message.date, time: message.sent_time,
              is_attachment: message.attachments.length > 0
            }
          }];
          _this2._handleCreateDialog({ data: _data, count: _this2.count + 1, offset: _this2.offset + 1, rewrite: false });
        }

        _this2.$nextTick(function () {
          _this2._handleSetFirstPositionDialog(message.uid);
        });
      });
    }
  },

  methods: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_2_vuex__["b" /* mapActions */])({
    _handleDialog: 'message/fetchDialogs',
    _handleSearchDialog: 'message/fetchSearchDialogs',
    _handleSetDialogFiledById: 'message/setDialogFiledById',
    _handleSetFirstPositionDialog: 'message/setFirstPositionDialog'
  }), Object(__WEBPACK_IMPORTED_MODULE_2_vuex__["d" /* mapMutations */])({
    _handleCreateDialog: 'message/SET_DIALOGS_DATA'
  }), {
    _handleInfiniteScrollDialogs: function _handleInfiniteScrollDialogs() {
      this._handleDialog({ rewrite: false });
    },
    _handleInfiniteScrollSearchDialogs: function _handleInfiniteScrollSearchDialogs() {
      this._handleSearchDialog({
        q: this.search.q,
        rewrite: false
      });
    },
    _handleClickOpenSearching: function _handleClickOpenSearching() {
      this.searching = true;
    },
    _handleClickCloseSearching: function _handleClickCloseSearching() {
      this.searching = false;
    },

    _handleInputFieldSearchDialog: __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.debounce(function (e) {
      var _this3 = this;

      var el = e.target;
      var key = Object(__WEBPACK_IMPORTED_MODULE_3__utils__["j" /* getDataAttribute */])(el, 'key');

      this.$validator.validate(key).then(function (result) {
        if (result) {
          _this3._handleSearchDialog({
            q: _this3.search.q,
            rewrite: true
          });
        }
      });
    }, 900),
    _handleLoadTopDialogs: function _handleLoadTopDialogs() {
      var _this4 = this;

      this._handleDialog({ rewrite: true }).then(function () {
        _this4.$refs.loadmore.onTopLoaded();
      }).catch(function () {
        return console.log('Error loading');
      });
    },
    _handleTopStatusChangeDialogs: function _handleTopStatusChangeDialogs(status) {
      this.loadmore.topStatus = status;
    },
    _handleClickOpenCreating: function _handleClickOpenCreating() {
      var _this5 = this;

      __WEBPACK_IMPORTED_MODULE_1_mint_ui__["Indicator"].open();
      this._handleSearchUsers().then(function () {
        __WEBPACK_IMPORTED_MODULE_1_mint_ui__["Indicator"].close();
        _this5.create.enabled = true;
      });
    },
    fetchUserFollowers: function fetchUserFollowers() {
      var _this6 = this;

      return new Promise(function (resolve, reject) {
        if (_this6.create.loading) {
          reject && reject();
          return false;
        }

        __WEBPACK_IMPORTED_MODULE_1_mint_ui__["Indicator"].open();

        var offset = _this6.create.offset;


        _this6.$api.get('api/v1/users/' + _this6.user.id + '/followers', { offset: offset }).then(function (response) {
          var _response$data = response.data,
              data = _response$data.data,
              _response$data$meta = _response$data.meta,
              count = _response$data$meta.count,
              new_offset = _response$data$meta.new_offset;


          data.forEach(function (item) {
            return _this6.create.data.push(item);
          });
          /*
          this.create.count = count
          this.create.offset = offset
          this.create.infiniteDisabled = (new_offset >= count)
          */

          if (count === 0) {
            _this6._clearUsers().then(function () {
              _this6._handleSearchUsers().then(function () {
                __WEBPACK_IMPORTED_MODULE_1_mint_ui__["Indicator"].close();
                resolve && resolve();
              });
            });
          } else {
            __WEBPACK_IMPORTED_MODULE_1_mint_ui__["Indicator"].close();
            resolve && resolve();
          }
        }, function (error) {
          var data = error.response.data,
              status = error.response.status;


          __WEBPACK_IMPORTED_MODULE_1_mint_ui__["Indicator"].close();

          Object(__WEBPACK_IMPORTED_MODULE_1_mint_ui__["Toast"])({
            message: 'Ошибка',
            iconClass: 'mintui mintui-field-error'
          });

          reject && reject();

          throw new Error('Error follow user');
        });
      });
    },
    _clearUsers: function _clearUsers() {
      var _this7 = this;

      return new Promise(function (resolve, reject) {
        try {
          Object.assign(_this7.create, {
            data: [],
            count: 0,
            offset: 0
          });
          resolve && resolve();
        } catch (e) {
          reject && reject();
        }
      });
    },

    _handleInputFieldSearchUsers: __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.debounce(function (e) {
      var _this8 = this;

      var el = e.target;
      var key = Object(__WEBPACK_IMPORTED_MODULE_3__utils__["j" /* getDataAttribute */])(el, 'key');

      this.$validator.validate(key).then(function (result) {
        if (result) {
          _this8._clearUsers().then(function () {
            _this8._handleSearchUsers();
          });
        }
      });
    }, 900),
    _handleInfiniteScrollUsers: function _handleInfiniteScrollUsers() {
      this._handleSearchUsers();
    },
    _handleSearchUsers: function _handleSearchUsers() {
      var _this9 = this;

      return new Promise(function (resolve, reject) {
        if (_this9.create.loading) {
          reject && reject();return false;
        }

        _this9.create.loading = true;
        var _create = _this9.create,
            offset = _create.offset,
            keyword = _create.keyword;


        _this9.$api.get('api/v1/users', { offset: offset, keyword: keyword }).then(function (response) {
          var _response$data2 = response.data,
              data = _response$data2.data,
              _response$data2$meta = _response$data2.meta,
              count = _response$data2$meta.count,
              new_offset = _response$data2$meta.new_offset;


          data.forEach(function (item) {
            return _this9.create.data.push(item);
          });
          _this9.create.count = count;
          _this9.create.offset = new_offset;
          _this9.create.infiniteDisabled = new_offset >= count;
          _this9.create.loading = false;

          resolve && resolve();
        }, function (error) {
          var data = error.response.data,
              status = error.response.status;

          _this9.create.loading = false;

          reject && reject();

          Object(__WEBPACK_IMPORTED_MODULE_1_mint_ui__["Toast"])({
            message: 'Ошибка',
            iconClass: 'mintui mintui-field-error'
          });

          throw new Error('Error follow user');
        });
      });
    },
    formatUidDialog: function formatUidDialog(user_id) {
      return this._.sortBy([user_id, this.user.id]).toString();
    }
  })
});

/***/ }),

/***/ 1774:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__(27);
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: {
    dialog: {
      required: true
    }
  },
  data: function data() {
    return {
      typing: false
    };
  },

  computed: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["c" /* mapGetters */])({
    user: 'auth/getAuthUser'
  }), {
    text: function text() {
      var text = this.dialog['message']['text'];

      if (text) {
        text = this.$striptags(text); // Removed all tags
        text = this.$nl2br(text); // nl2br to <br>
        // text = this.$emoji(text) // :emoji: to <img>
        text = this.$truncate(text, 25, { keepImageTag: true }); // truncate text
      }

      return text;
    },
    date: function date() {
      return this.dialog['message']['date'];
    },
    time: function time() {
      return this.dialog['message']['time'];
    },
    isToday: function isToday() {
      var context = this.$moment(this.date, 'DD-MM-YYYY');
      return this.$moment().isSame(context, 'd');
    },
    isYesterday: function isYesterday() {
      var context = this.$moment(this.date, 'DD-MM-YYYY');
      return this.$moment().subtract(1, 'day').isSame(context, 'd');
    },
    isAttachment: function isAttachment() {
      return this.dialog['message']['is_attachment'];
    },
    isRead: function isRead() {
      return this.dialog['message']['read'];
    },
    isLastMessageMe: function isLastMessageMe() {
      return this.dialog['message']['me'];
    },
    interlocutor: function interlocutor() {
      return this.dialog['interlocutor'];
    }
  }),
  beforeDestroy: function beforeDestroy() {
    this.$echo.private('dialog.' + this.dialog.id).stopListening('typing');
  },
  mounted: function mounted() {
    var _this = this;

    var typing = null;
    this.$echo.private('dialog.' + this.dialog.id).listenForWhisper('typing', function (e) {
      if (e.dialog_id === _this.dialog.id) {
        _this.typing = e.typing;

        clearTimeout(typing);
        typing = setTimeout(function () {
          _this.typing = false;
        }, 900);
      }
    });
  }
});

/***/ }),

/***/ 2370:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(2371);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("5056f835", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js?sourceMap!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-86cc112e\",\"scoped\":true,\"hasInlineConfig\":true}!../../../node_modules/sass-loader/lib/loader.js?indentedSyntax!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Index.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js?sourceMap!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-86cc112e\",\"scoped\":true,\"hasInlineConfig\":true}!../../../node_modules/sass-loader/lib/loader.js?indentedSyntax!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Index.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 2371:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(true);
// imports


// module
exports.push([module.i, "\n.mint-loadmore-content[data-v-86cc112e] {\n  height: calc(100% + 50px);\n  overflow-y: scroll;\n  margin-top: -50px;\n}\n.lm-m-messages--list[data-v-86cc112e] {\n  overflow: scroll;\n  transition: .2s;\n  -webkit-transition: .2s;\n}\n.lm-m-messages--list .mint-loadmore[data-v-86cc112e] {\n    height: 100%;\n    overflow: scroll;\n}\n.null[data-v-86cc112e] {\n  height: 100vh;\n}\n.arrow[data-v-86cc112e] {\n  display: inline-block;\n  vertical-align: middle;\n  -webkit-transition: .2s linear;\n  transition: .2s linear;\n}\n.arrow.rotate[data-v-86cc112e] {\n    transform: rotate(180deg);\n    -webkit-transform: rotate(180deg);\n}\n", "", {"version":3,"sources":["/home/karliv/work/linkmuse-mobile/src/views/Messages/Index.vue"],"names":[],"mappings":";AAAA;EACE,0BAA0B;EAC1B,mBAAmB;EACnB,kBAAkB;CAAE;AAEtB;EACE,iBAAiB;EACjB,gBAAgB;EAChB,wBAAwB;CAAE;AAC1B;IACE,aAAa;IACb,iBAAiB;CAAE;AAEvB;EACE,cAAc;CAAE;AAElB;EACE,sBAAsB;EACtB,uBAAuB;EACvB,+BAA+B;EAC/B,uBAAuB;CAAE;AACzB;IACE,0BAA0B;IAC1B,kCAAkC;CAAE","file":"Index.vue","sourcesContent":[".mint-loadmore-content {\n  height: calc(100% + 50px);\n  overflow-y: scroll;\n  margin-top: -50px; }\n\n.lm-m-messages--list {\n  overflow: scroll;\n  transition: .2s;\n  -webkit-transition: .2s; }\n  .lm-m-messages--list .mint-loadmore {\n    height: 100%;\n    overflow: scroll; }\n\n.null {\n  height: 100vh; }\n\n.arrow {\n  display: inline-block;\n  vertical-align: middle;\n  -webkit-transition: .2s linear;\n  transition: .2s linear; }\n  .arrow.rotate {\n    transform: rotate(180deg);\n    -webkit-transform: rotate(180deg); }\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 2372:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Card_vue__ = __webpack_require__(1774);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_45b8f022_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Card_vue__ = __webpack_require__(2375);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(2373)
}
var normalizeComponent = __webpack_require__(2)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-45b8f022"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Card_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_45b8f022_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Card_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/Message/Dialog/Card.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-45b8f022", Component.options)
  } else {
    hotAPI.reload("data-v-45b8f022", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 2373:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(2374);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("35f7c9e9", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js?sourceMap!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-45b8f022\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Card.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js?sourceMap!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-45b8f022\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Card.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 2374:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(true);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"Card.vue","sourceRoot":""}]);

// exports


/***/ }),

/***/ 2375:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "lm-m-messages--item" },
    [
      _c(
        "router-link",
        {
          attrs: {
            to: { name: "messages.show", params: { uid: _vm.dialog.id } }
          }
        },
        [
          _c("div", { staticClass: "lm-user-block" }, [
            _c("div", { staticClass: "lm-user-block-avatar-wrap" }, [
              _c(
                "object",
                [
                  _c(
                    "router-link",
                    {
                      attrs: {
                        to: {
                          name: "user.show",
                          params: { username: _vm.interlocutor.username }
                        }
                      }
                    },
                    [
                      _c("img", {
                        staticClass: "lm-user-block-avatar",
                        attrs: {
                          src: _vm.interlocutor.avatar,
                          alt: _vm.interlocutor.name
                        }
                      }),
                      _vm._v(" "),
                      _c("div", {
                        class: [
                          "lm-user-block-avatar-status",
                          {
                            online: _vm.interlocutor.online === true,
                            offline: _vm.interlocutor.online === false
                          }
                        ]
                      })
                    ]
                  )
                ],
                1
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "lm-user-block-info" }, [
              _c("div", { staticClass: "lm-m-messages--item-name" }, [
                _c("div", { staticClass: "lm-user-block-info-name" }, [
                  _c("span", [
                    _vm._v(
                      _vm._s(_vm._f("truncate")(_vm.interlocutor.name, 30))
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "lm-m-messages--item-date" }, [
                  _vm._v(
                    _vm._s(
                      _vm.isToday
                        ? _vm.time
                        : _vm.isYesterday
                        ? "Вчера"
                        : _vm.$moment(_vm.date, "DD-MM-YYYY").format("D MMM")
                    )
                  )
                ])
              ]),
              _vm._v(" "),
              _c(
                "div",
                {
                  class: [
                    "lm-m-messages--item-text",
                    {
                      "no-read":
                        _vm.isLastMessageMe === true && _vm.isRead === false
                    }
                  ]
                },
                [
                  _vm.typing === false
                    ? [
                        _vm.isLastMessageMe === true && _vm.user
                          ? [
                              _c("img", {
                                staticClass: "lm-my-avatar",
                                attrs: {
                                  src: _vm.user.avatar["84x84"],
                                  alt: _vm.user.name
                                }
                              })
                            ]
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.isAttachment === false
                          ? [
                              _c("div", {
                                staticClass: "lm-user-block-info-type",
                                domProps: { innerHTML: _vm._s(_vm.text) }
                              })
                            ]
                          : _vm.isAttachment === true
                          ? [
                              _c(
                                "div",
                                { staticClass: "lm-user-block-info-type" },
                                [_vm._v("Вложение")]
                              )
                            ]
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.isLastMessageMe === false && _vm.isRead === false
                          ? [
                              _c(
                                "div",
                                { staticClass: "lm-m-messages--item-read" },
                                [_c("div", { staticClass: "no-read" })]
                              )
                            ]
                          : _vm._e()
                      ]
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.typing === true
                    ? [
                        _c("div", { staticClass: "typing" }, [
                          _c("span", [_vm._v("Печатает сообщение")]),
                          _vm._v(" "),
                          _c("div", { staticClass: "typing-message" }, [
                            _c("div", { staticClass: "bt" }),
                            _vm._v(" "),
                            _c("div", { staticClass: "bt" }),
                            _vm._v(" "),
                            _c("div", { staticClass: "bt" })
                          ])
                        ])
                      ]
                    : _vm._e()
                ],
                2
              )
            ])
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
    require("vue-hot-reload-api")      .rerender("data-v-45b8f022", esExports)
  }
}

/***/ }),

/***/ 2376:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      class: [
        "lm-m-messages",
        "lm-m-page",
        {
          null:
            _vm.isEmpty ||
            (_vm.searching && _vm.isEmptySearch) ||
            _vm.create.enabled
        }
      ]
    },
    [
      _c("div", { staticClass: "lm-m-messages-head lm-m-page--head" }, [
        _c(
          "div",
          { staticClass: "left" },
          [
            !_vm.isEmpty
              ? [
                  _c("i", {
                    class: ["lm-icon-zoom", { active: _vm.searching }],
                    on: { click: _vm._handleClickOpenSearching }
                  })
                ]
              : _vm._e()
          ],
          2
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "center" },
          [
            _vm.searching === false
              ? [
                  _c("span", [
                    _vm._v(_vm._s(_vm.$t("messages.dialogue.messages")))
                  ])
                ]
              : _vm.searching === true
              ? [
                  _c("input", {
                    directives: [
                      {
                        name: "validate",
                        rawName: "v-validate",
                        value: "required|max:25",
                        expression: "'required|max:25'"
                      },
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.search.q,
                        expression: "search.q"
                      }
                    ],
                    class: [
                      "lm-input",
                      "input-search",
                      { error: _vm.verrors.has("q") }
                    ],
                    attrs: {
                      type: "text",
                      name: "q",
                      "data-lm-key": "q",
                      placeholder: _vm.$t("messages.search.search")
                    },
                    domProps: { value: _vm.search.q },
                    on: {
                      input: [
                        function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.search, "q", $event.target.value)
                        },
                        _vm._handleInputFieldSearchDialog
                      ]
                    }
                  })
                ]
              : _vm._e()
          ],
          2
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "right" },
          [
            _vm.searching === false
              ? [
                  _c("i", {
                    staticClass: "lm-plus-icon",
                    on: { click: _vm._handleClickOpenCreating }
                  })
                ]
              : _vm.searching === true
              ? [
                  _c("i", {
                    staticClass: "lm-close",
                    on: { click: _vm._handleClickCloseSearching }
                  })
                ]
              : _vm._e()
          ],
          2
        )
      ]),
      _vm._v(" "),
      _c(
        "div",
        {
          ref: "wrapper",
          class: [
            "lm-m-messages--list",
            { null: _vm.isEmpty || (_vm.searching && _vm.isEmptySearch) }
          ],
          style: { height: _vm.height }
        },
        [
          _vm.searching === false
            ? [
                _vm.isEmpty === true
                  ? [
                      _c("div", { staticClass: "lm-m-messages--null" }, [
                        _c("span", [
                          _vm._v("Выберите собеседника и начните общение")
                        ]),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass: "lm-outline-button middle",
                            on: { click: _vm._handleClickOpenCreating }
                          },
                          [_vm._v("Выбрать")]
                        )
                      ])
                    ]
                  : _vm.isEmpty === false
                  ? [
                      _c(
                        "mt-loadmore",
                        {
                          ref: "loadmore",
                          attrs: { "top-method": _vm._handleLoadTopDialogs },
                          on: {
                            "top-status-change":
                              _vm._handleTopStatusChangeDialogs
                          }
                        },
                        [
                          _c(
                            "div",
                            {
                              directives: [
                                {
                                  name: "infinite-scroll",
                                  rawName: "v-infinite-scroll",
                                  value: _vm._handleInfiniteScrollDialogs,
                                  expression: "_handleInfiniteScrollDialogs"
                                }
                              ],
                              attrs: {
                                "infinite-scroll-disabled": "infiniteDisabled",
                                "infinite-scroll-distance": "200"
                              }
                            },
                            _vm._l(_vm.dialogs, function(dialog) {
                              return _c("dialog-card", {
                                key: dialog.id,
                                attrs: { dialog: dialog }
                              })
                            }),
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass: "mint-loadmore-top",
                              attrs: { slot: "top" },
                              slot: "top"
                            },
                            [
                              _vm.loadmore.topStatus === "loading"
                                ? [_c("lm-m-loader")]
                                : _vm._e(),
                              _vm._v(" "),
                              _vm.loadmore.topStatus !== "loading"
                                ? _c(
                                    "span",
                                    {
                                      class: [
                                        "arrow",
                                        {
                                          rotate:
                                            _vm.loadmore.topStatus === "drop"
                                        }
                                      ]
                                    },
                                    [_vm._v("↓")]
                                  )
                                : _vm._e()
                            ],
                            2
                          )
                        ]
                      )
                    ]
                  : _vm._e()
              ]
            : _vm.searching === true
            ? [
                _vm.searchLoading
                  ? _c("lm-m-loader", {
                      staticStyle: { "margin-bottom": "10px" }
                    })
                  : _vm._e(),
                _vm._v(" "),
                _vm.isEmptySearch === true
                  ? [
                      _vm.searchInitial === false
                        ? _c("div", { staticClass: "lm-m-messages--null" }, [
                            _c("span", [
                              _vm._v(
                                _vm._s(_vm.$t("messages.search.start-typing"))
                              )
                            ])
                          ])
                        : _vm.searchInitial === true
                        ? _c("div", { staticClass: "lm-m-messages--null" }, [
                            _c("span", [
                              _vm._v(
                                _vm._s(
                                  _vm.$t(
                                    "messages.unfortunately-nothing-found.nothing-found"
                                  )
                                )
                              )
                            ])
                          ])
                        : _vm._e()
                    ]
                  : _vm.isEmptySearch === false
                  ? [
                      _c(
                        "div",
                        {
                          directives: [
                            {
                              name: "infinite-scroll",
                              rawName: "v-infinite-scroll",
                              value: _vm._handleInfiniteScrollSearchDialogs,
                              expression: "_handleInfiniteScrollSearchDialogs"
                            }
                          ],
                          attrs: {
                            "infinite-scroll-disabled":
                              "searchInfiniteDisabled",
                            "infinite-scroll-distance": "200"
                          }
                        },
                        [
                          _c(
                            "div",
                            _vm._l(_vm.searchDialogs, function(dialog) {
                              return _c("dialog-card", {
                                key: dialog.id,
                                attrs: { dialog: dialog }
                              })
                            }),
                            1
                          )
                        ]
                      )
                    ]
                  : _vm._e()
              ]
            : _vm._e()
        ],
        2
      ),
      _vm._v(" "),
      _c(
        "mt-popup",
        {
          staticClass: "lm-m-modal-wrap",
          attrs: { position: "bottom", modal: true },
          model: {
            value: _vm.create.enabled,
            callback: function($$v) {
              _vm.$set(_vm.create, "enabled", $$v)
            },
            expression: "create.enabled"
          }
        },
        [
          _c("div", { staticClass: "lm-m-modal-list-menu" }, [
            _c("input", {
              directives: [
                {
                  name: "validate",
                  rawName: "v-validate",
                  value: "max:25",
                  expression: "'max:25'"
                },
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.create.keyword,
                  expression: "create.keyword"
                }
              ],
              class: [
                "lm-input",
                "search",
                { error: _vm.verrors.has("keyword") }
              ],
              attrs: {
                type: "text",
                name: "keyword",
                "data-lm-key": "keyword",
                placeholder: "Введите имя или фамилию"
              },
              domProps: { value: _vm.create.keyword },
              on: {
                input: [
                  function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.create, "keyword", $event.target.value)
                  },
                  _vm._handleInputFieldSearchUsers
                ]
              }
            }),
            _vm._v(" "),
            _c(
              "div",
              {
                directives: [
                  {
                    name: "infinite-scroll",
                    rawName: "v-infinite-scroll",
                    value: _vm._handleInfiniteScrollUsers,
                    expression: "_handleInfiniteScrollUsers"
                  }
                ],
                staticClass: "message-scroll",
                attrs: {
                  "infinite-scroll-disabled": "infiniteDisabledCreated",
                  "infinite-scroll-distance": "200"
                }
              },
              [
                _vm._l(_vm.create.data, function(profile) {
                  return _c(
                    "div",
                    { staticClass: "lm-m-modal-list-menu--item user" },
                    [
                      _c(
                        "router-link",
                        {
                          attrs: {
                            to: {
                              name: "messages.show",
                              params: {
                                uid: _vm.formatUidDialog(profile.user_id)
                              }
                            }
                          }
                        },
                        [
                          _c("div", { staticClass: "lm-user-block" }, [
                            _c("img", {
                              staticClass: "lm-user-block-avatar",
                              attrs: { src: profile.avatar }
                            }),
                            _vm._v(" "),
                            _c("div", { staticClass: "lm-user-block-info" }, [
                              _c(
                                "div",
                                { staticClass: "lm-user-block-info-name" },
                                [
                                  _c("span", [
                                    _vm._v(
                                      _vm._s(
                                        _vm._f("truncate")(profile.name, 25)
                                      )
                                    )
                                  ])
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "lm-user-block-info-type" },
                                [
                                  Array.isArray(profile.category) &&
                                  profile.category.length
                                    ? [
                                        _vm._v(
                                          "\n                    " +
                                            _vm._s(
                                              _vm._f("truncate")(
                                                profile.category.join(", "),
                                                18
                                              )
                                            ) +
                                            "\n                  "
                                        )
                                      ]
                                    : Array.isArray(profile.category) ===
                                        false && profile.category
                                    ? [
                                        _vm._v(
                                          "\n                    " +
                                            _vm._s(profile.category) +
                                            "\n                  "
                                        )
                                      ]
                                    : _vm._e()
                                ],
                                2
                              )
                            ])
                          ])
                        ]
                      )
                    ],
                    1
                  )
                }),
                _vm._v(" "),
                _vm.create.loading ? _c("lm-m-loader") : _vm._e(),
                _vm._v(" "),
                !this.create.loading && this.create.count === 0
                  ? _c(
                      "div",
                      { staticClass: "lm-m-modal-list-menu--item user" },
                      [_c("span", [_vm._v("К сожалению, ничего не найдено")])]
                    )
                  : _vm._e()
              ],
              2
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
    require("vue-hot-reload-api")      .rerender("data-v-86cc112e", esExports)
  }
}

/***/ })

});
//# sourceMappingURL=104.build.d1cbf7f1ec431871f848.js.map