webpackJsonp([92],{

/***/ 1402:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Show_vue__ = __webpack_require__(1775);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_8cdc5394_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Show_vue__ = __webpack_require__(2387);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(2377)
}
var normalizeComponent = __webpack_require__(2)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-8cdc5394"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Show_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_8cdc5394_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Show_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/views/Messages/Show.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-8cdc5394", Component.options)
  } else {
    hotAPI.reload("data-v-8cdc5394", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 1775:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mint_ui__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mint_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_mint_ui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vuex__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Message_Messages_Input_vue__ = __webpack_require__(2379);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Message_Messages_Message_vue__ = __webpack_require__(2383);
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







/* harmony default export */ __webpack_exports__["a"] = ({
  components: { ChatMessage: __WEBPACK_IMPORTED_MODULE_4__components_Message_Messages_Message_vue__["a" /* default */], ChatInput: __WEBPACK_IMPORTED_MODULE_3__components_Message_Messages_Input_vue__["a" /* default */], 'mt-loadmore': __WEBPACK_IMPORTED_MODULE_1_mint_ui__["Loadmore"] },
  metaInfo: {
    title: 'Сообщения'
  },
  asyncData: function asyncData(_ref) {
    var _this = this;

    var store = _ref.store,
        route = _ref.route;
    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var uid;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              uid = route.params.uid;
              _context.next = 3;
              return store.dispatch('message/fetchMessagesByDialogId', { uid: String(uid), rewrite: true });

            case 3:
              _context.next = 5;
              return store.dispatch('message/getDialogById', String(uid));

            case 5:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this);
    }))();
  },
  data: function data() {
    return {
      height: 0,
      typing: false,
      dialog_id: null,
      sheets: {
        dialog: {
          value: false,
          actions: [{
            name: this.$t('messages.open-profile-or-delete-dialogue.open-profile'),
            method: this._handleClickOpenProfile
          }, {
            name: this.$t('messages.open-profile-or-delete-dialogue.delete'),
            method: this._handleClickDestroyDialog,
            color: '#fc2e5f'
          }]
        },
        error: {
          value: false,
          uuid: null,
          actions: [{
            name: 'Открыть повторно',
            method: this._handleClickRetryErrorMessage
          }, {
            name: 'Удалить',
            method: this._handleClickDestroyErrorMessage,
            color: '#fc2e5f'
          }]
        }
      },
      loadmore: {
        bottomStatus: null
      }
    };
  },

  computed: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_2_vuex__["c" /* mapGetters */])({
    user: 'auth/getAuthUser',
    messages: 'message/getMessages',
    count: 'message/getCountMessages',
    offset: 'message/getOffsetMessages',
    error: 'message/getMessagesError',
    dialog: 'message/getShowDialogData',
    loading: 'message/getMessagesLoading',
    loadingDialog: 'message/getShowDialogLoading',
    errorDialog: 'message/getShowDialogError'
  }), {
    isEmpty: function isEmpty() {
      return !this.loading && this.count === 0;
    },
    dates: function dates() {
      return this._.groupBy(this.messages, function (msg) {
        return msg.date;
      });
    },
    interlocutor: function interlocutor() {
      return this.dialog.interlocutor;
    },
    recipient_id: function recipient_id() {
      return this.interlocutor.id;
    },
    can_write_messages: function can_write_messages() {
      return true;
      // return this.dialog.privacy.data['write_messages']
    }
  }),
  created: function created() {
    this.dialog_id = String(this.$route.params.uid);
  },
  beforeDestroy: function beforeDestroy() {
    // this.$chatBull.show()
    Object(__WEBPACK_IMPORTED_MODULE_0__utils__["t" /* off */])(window, 'resize');
    this.$echo.private('dialog.' + this.dialog_id).stopListening('typing');
    this.$echo.private('user.' + this.user.id).stopListening('Message\\MessageWasReceived');
    this.$nsWebViewInterface.emit("hide_dialog", this.dialog_id);
  },
  mounted: function mounted() {
    var _this2 = this;

    // this.$chatBull.hide()
    Object(__WEBPACK_IMPORTED_MODULE_0__utils__["v" /* on */])(window, 'resize', this._handleResizeWindow);
    this.height = document.documentElement.clientHeight - this.$refs.wrapper.getBoundingClientRect().top - 60 + 'px';

    var typing = null;
    this.$echo.private('dialog.' + this.dialog_id).listenForWhisper('typing', function (e) {
      if (e.dialog_id === _this2.dialog_id) {
        _this2.typing = e.typing;

        clearTimeout(typing);
        typing = setTimeout(function () {
          _this2.typing = false;
        }, 900);
      }
    });

    this.$echo.private('user.' + this.user.id).listen('Message\\MessageWasReceived', function (_ref2) {
      var data = _ref2.data;

      _this2._addMessage(data);
      _this2._updateOffsetMessages();
    });

    this.$nsWebViewInterface.emit("show_dialog", this.dialog_id);
  },

  methods: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_2_vuex__["b" /* mapActions */])({
    _handleFetchMessages: 'message/fetchMessagesByDialogId'
  }), Object(__WEBPACK_IMPORTED_MODULE_2_vuex__["d" /* mapMutations */])({
    _addMessage: 'message/ADD_NEW_MESSAGE_ON_DATA',
    _updateMessageByUuid: 'message/UPDATE_MESSAGE_ON_DATA_BY_UUID',
    _updateFieldMessageByUuid: 'message/UPDATE_FIELD_MESSAGE_ON_DATA_BY_UUID',
    _destroyMessageByUuid: 'message/DESTROY_MESSAGE_ON_DATA_BY_UUID',
    _updateOffsetMessages: 'message/UPDATE_OFFSET_MESSAGE_ON_DATA'
  }), {
    _handleResizeWindow: function _handleResizeWindow() {
      this.height = document.documentElement.clientHeight - this.$refs.wrapper.getBoundingClientRect().top - 60 + 'px';
    },
    _handleScrollTop: function _handleScrollTop() {
      console.log(this.offset >= this.count);
      if (this.loading || this.offset >= this.count) return;
      this._handleFetchMessages({ uid: String(this.dialog_id), rewrite: false });
    },
    isToday: function isToday(date) {
      var context = this.$moment(date, 'DD-MM-YYYY');
      return this.$moment().isSame(context, 'd');
    },
    isYesterday: function isYesterday(date) {
      var context = this.$moment(date, 'DD-MM-YYYY');
      return this.$moment().subtract(1, 'day').isSame(context, 'd');
    },
    _handleSendMessage: function _handleSendMessage(message, uuid) {
      this._updateMessageByUuid({ uuid: uuid, message: message });
      this._updateOffsetMessages();
    },
    _handlePreSendMessage: function _handlePreSendMessage(message) {
      this._addMessage(message);
    },
    _handleErrorSendMessage: function _handleErrorSendMessage(uuid) {
      this._updateFieldMessageByUuid({ uuid: uuid, key: 'error', value: true });
    },
    _handleClickActionSheetDialog: function _handleClickActionSheetDialog() {
      this.sheets.dialog.value = true;
    },
    _handleClickOpenProfile: function _handleClickOpenProfile() {
      this.$router.push({ name: 'user.show', params: { username: this.interlocutor.username } });
    },
    _handleClickDestroyDialog: function _handleClickDestroyDialog() {
      var _this3 = this;

      __WEBPACK_IMPORTED_MODULE_1_mint_ui__["Indicator"].open();

      this.$api.delete('api/v1/dialogs/' + this.dialog_id).then(function (response) {

        __WEBPACK_IMPORTED_MODULE_1_mint_ui__["Indicator"].close();

        _this3.$router.replace({ name: 'messages.index' });
      }, function (error) {
        var data = error.response.data,
            status = error.response.status;


        __WEBPACK_IMPORTED_MODULE_1_mint_ui__["Indicator"].close();

        Object(__WEBPACK_IMPORTED_MODULE_1_mint_ui__["Toast"])({
          message: 'Ошибка',
          iconClass: 'mintui mintui-field-error'
        });

        throw new Error('Error follow user');
      });
    },
    _handleClickErrorMessage: function _handleClickErrorMessage(uuid) {
      this.sheets.error.uuid = uuid;
      this.sheets.error.value = true;
    },
    _handleClickRetryErrorMessage: function _handleClickRetryErrorMessage() {
      var uuid = this.sheets.error.uuid;


      if (!uuid) return;

      var message = this._.find(this.messages, function (msg) {
        return msg.uuid === uuid;
      });
      if (message) {
        this.$emit('retry', message);
      }
    },
    _handleClickDestroyErrorMessage: function _handleClickDestroyErrorMessage() {
      var uuid = this.sheets.error.uuid;


      if (!uuid) return;

      this._destroyMessageByUuid({ uuid: uuid });
    },
    _handleLoadBottomMessages: function _handleLoadBottomMessages() {
      var _this4 = this;

      this._handleFetchMessages({ uid: String(this.dialog_id), rewrite: true }).then(function () {
        _this4.$refs.loadmore.onBottomLoaded();
      }).catch(function () {
        return console.log('Error loading');
      });
    },
    _handleBottomStatusChangeMessages: function _handleBottomStatusChangeMessages(status) {
      this.loadmore.bottomStatus = status;
    },
    _handleClickPreviousPage: function _handleClickPreviousPage() {
      if (window.history.length > 2) {
        this.$router.go(-1);
      } else {
        this.$router.push({ name: 'messages.index' });
      }
    },
    _handleClick: function _handleClick() {
      window.nsWebViewInterface.emit('dismissKeyboard');
    }
  })
});

/***/ }),

/***/ 1776:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ACCEPT_PHOTO */
/* unused harmony export ACCEPT_VIDEO */
/* unused harmony export ACCEPT_DOCUMENT */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mint_ui__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mint_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_mint_ui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_UI_ProgressBar_Loader_vue__ = __webpack_require__(443);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils__ = __webpack_require__(6);
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






var ACCEPT_PHOTO = 'image/*';
var ACCEPT_VIDEO = 'video/*';
var ACCEPT_DOCUMENT = '.doc,.docx,.pdf,.zip,.rar,.txt,.xls,.xlsx,.ods,.ppt,.pptx';

var queue = [];
var VIDEO_THUMBNAIL = '/dist/img/default_video.jpg';
var BASE_URL_UPLOAD = "https://feature-single-profile.test.cnt.team";
var PHOTO_THUMBNAIL = 'data:image/svg+xml;utf8,<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg" version="1.1"><rect width="200" height="200" fill="%23fff"/></svg>';

/* harmony default export */ __webpack_exports__["a"] = ({
  components: { 'lm-progress-loader': __WEBPACK_IMPORTED_MODULE_2__components_UI_ProgressBar_Loader_vue__["a" /* default */] },
  props: {
    dialog_id: {
      type: String,
      required: true
    },
    recipient_id: {
      type: Number,
      required: true
    }
  },
  data: function data() {
    return {
      fields: {
        text: null,
        recipient_id: this.recipient_id
      },
      attachments: {
        maxItems: 10,
        loading: false,
        maxFileSize: 109000,
        queueInterval: null,
        items: []
      }
    };
  },

  computed: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["c" /* mapGetters */])({
    user: 'auth/getAuthUser'
  }), {
    attachmentsData: function attachmentsData() {
      return this.attachments.items.filter(function (item) {
        return !item.remove;
      });
    },
    attachmentsCount: function attachmentsCount() {
      return this.attachmentsData.length;
    },
    uploadedAttachmentsItems: function uploadedAttachmentsItems() {
      return this.attachmentsData.filter(function (item) {
        return !item.error && item.id;
      });
    },
    canUploadAttachments: function canUploadAttachments() {
      return this.attachments.maxItems && this.attachments.maxItems > this.attachmentsCount;
    },
    uploadingAttachmentsCount: function uploadingAttachmentsCount() {
      return this.attachmentsData.filter(function (item) {
        return !item.error && !item.id && item.loading && item.uploading;
      }).length;
    },
    acceptedFiles: function acceptedFiles() {
      return [ACCEPT_PHOTO, ACCEPT_VIDEO, ACCEPT_DOCUMENT];
    }
  }),
  watch: {
    'fields.text': function fieldsText() {
      var _this = this;

      var channel = this.$echo.private('dialog.' + this.dialog_id);
      setTimeout(function () {
        channel.whisper('typing', {
          dialog_id: _this.dialog_id,
          typing: true
        });
      }, 300);
    }
  },
  created: function created() {
    var uid = this.$route.params.uid;


    if (__WEBPACK_IMPORTED_MODULE_3__utils__["n" /* isBrowser */]) {
      var messages = this.$localStorage.get('messages', {}, Object);
      if (messages.hasOwnProperty(String(uid)) && messages[String(uid)]) {
        this.fields['text'] = messages[String(uid)];
      }
    }
  },
  mounted: function mounted() {
    var _this2 = this;

    this.$parent.$on('retry', function (message) {
      var uuid = message.uuid;


      _this2.$api.post('/api/v1/dialogs/messages', _extends({}, message)).then(function (response) {
        var data = response.data.data;

        _this2.$emit('send', data, uuid);
      }).catch(function (err) {
        _this2.$emit('error', uuid);
        throw new Error('Error send message');
      });
    });
  },

  methods: {
    _handleInputMessage: function _handleInputMessage(value) {
      var messages = this.$localStorage.get('messages', {}, Object);
      messages[String(this.dialog_id)] = value;
      this.$localStorage.set('messages', JSON.stringify(messages));
    },
    _handlePasteImage: function _handlePasteImage() {},
    _handleShowEmojiPicker: function _handleShowEmojiPicker() {},
    _handleClickSendButton: function _handleClickSendButton() {
      var _this3 = this;

      var _fields = this.fields,
          text = _fields.text,
          recipient_id = _fields.recipient_id;

      var attachments = JSON.parse(JSON.stringify(this.uploadedAttachmentsItems));

      if ((!text || text.length === 0 || /^\s*$/.test(text)) && !attachments.length) return;

      var uuid = Object(__WEBPACK_IMPORTED_MODULE_3__utils__["i" /* generateUUID */])();
      this.generatePreSendMessage(uuid).then(function (message) {
        _this3.$emit('presend', message);
        _this3._handleInputMessage();
        _this3.clearInput();
      });

      this.$api.post('/api/v1/dialogs/messages', { text: text, recipient_id: recipient_id, attachments: attachments }).then(function (response) {
        var data = response.data.data;

        _this3.$emit('send', data, uuid);
      }).catch(function (err) {
        _this3.$emit('error', uuid);
        throw new Error('Error send message');
      });
    },
    generatePreSendMessage: function generatePreSendMessage(uuid) {
      var _this4 = this;

      return new Promise(function (resolve, reject) {
        var _fields2 = _this4.fields,
            text = _fields2.text,
            recipient_id = _fields2.recipient_id;

        var attachments = JSON.parse(JSON.stringify(_this4.uploadedAttachmentsItems));

        var message = {
          uuid: uuid,
          text: text,
          attachments: attachments,
          recipient_id: recipient_id,
          date: _this4.$moment().format('DD-MM-YYYY'),
          sent: _this4.$moment().format('DD-MM-YYYY HH:mm'),
          sent_time: _this4.$moment().format('HH:mm'),
          read: false,
          from_id: _this4.user.id,
          me_avatar: _this4.user.avatar,
          error: false,
          from: {
            data: {
              name: _this4.user.fullname,
              avatar: _this4.user.avatar,
              href: _this4.user.href
            }
          }
        };
        resolve(message);
      });
    },
    clearInput: function clearInput() {
      this.fields.text = null;
      this.$emit('clear-emoji-area');
      this.attachments['items'] = this.attachmentsData.filter(function (item) {
        return !item.error && !item.id && item.loading && item.uploading;
      });
    },
    _handleChangeAttachments: function _handleChangeAttachments(el) {
      var _this5 = this;

      var files = el.target.files || el.dataTransfer.files;
      if (!files.length) {
        return;
      }

      var maxItems = this.attachments.maxItems;
      var count = this.attachmentsCount;

      this.attachments.loading = true;

      this._.forEach(files, function (file, i) {
        if (maxItems && count === maxItems) return false;
        setTimeout(function () {
          if (file.type.includes('image/')) {
            _this5._createImage(file);
          } else if (file.type.includes('video/')) {
            _this5._createVideo(file);
          } else _this5._createDocument(file);
        }, (i < 2 ? 100 : 1000) + i * 200);
        count++;
      });

      this._clearInputFileAttach();
    },
    _createImage: function _createImage(file) {
      var _this6 = this;

      var reader = new FileReader();
      var item = {
        id: null,
        path: null,
        show: false,
        hide: false,
        error: false,
        loading: true,
        remove: false,
        type: 'photo',
        size: file.size,
        errorText: null,
        uploading: false,
        description: null,
        uid: Object(__WEBPACK_IMPORTED_MODULE_3__utils__["i" /* generateUUID */])(),
        thumbnail: PHOTO_THUMBNAIL,
        source: this.$api.getSource()
      };

      reader.onload = function (el) {
        item.path = el.target.result;

        var defaultRender = function defaultRender() {
          return _this6.$nextTick(function () {
            item.path = el.target.result;
            item.thumbnail = el.target.result;

            _this6.$refs[item.uid][0].onload = function () {
              item.show = true;
            };
          });
        };

        Object(__WEBPACK_IMPORTED_MODULE_3__utils__["x" /* resizeImage */])(el.target.result, 60).then(function (_ref) {
          var src = _ref.src;

          item.thumbnail = src;
          item.show = true;
        }).catch(function (err) {
          return defaultRender();
        });

        reader.onerror = function (error) {
          return console.log(error);
        };
      };

      this.attachments.items.push(item);

      if (file.size > this.fileSize) {
        console.log('\u041C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u044B\u0439 \u0440\u0430\u0437\u043C\u0435\u0440 ' + Object(__WEBPACK_IMPORTED_MODULE_3__utils__["m" /* humanFileSize */])(this.fileSize));
      } else this._handleUploadAttachment(file, item, 'api/v1/dialogs/messages/upload-photo');

      reader.readAsDataURL(file);
    },
    _createVideo: function _createVideo(file) {
      var item = {
        id: null,
        path: null,
        show: true,
        hide: false,
        error: false,
        loading: true,
        remove: false,
        type: 'video',
        size: file.size,
        errorText: null,
        uploading: false,
        description: null,
        uid: Object(__WEBPACK_IMPORTED_MODULE_3__utils__["i" /* generateUUID */])(),
        thumbnail: VIDEO_THUMBNAIL,
        source: this.$api.getSource()
      };

      this.attachments.items.push(item);

      if (file.size > this.fileSize) {
        console.log('\u041C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u044B\u0439 \u0440\u0430\u0437\u043C\u0435\u0440 ' + Object(__WEBPACK_IMPORTED_MODULE_3__utils__["m" /* humanFileSize */])(this.fileSize));
      } else this._handleUploadAttachment(file, item, 'api/v1/dialogs/messages/upload-video');
    },
    _createDocument: function _createDocument(file) {
      var filename = file.name;

      var item = {
        id: null,
        path: null,
        show: true,
        hide: false,
        error: false,
        loading: true,
        remove: false,
        errorText: null,
        type: 'document',
        extension: /[.]/.exec(filename) ? /[^.]+$/.exec(filename)[0] : 'file',
        size: file.size,
        uploading: false,
        uid: Object(__WEBPACK_IMPORTED_MODULE_3__utils__["i" /* generateUUID */])(),
        description: filename,
        source: this.$api.getSource()
      };

      this.attachments.items.push(item);

      if (file.size > this.fileSize) {
        console.log('\u041C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u044B\u0439 \u0440\u0430\u0437\u043C\u0435\u0440 ' + Object(__WEBPACK_IMPORTED_MODULE_3__utils__["m" /* humanFileSize */])(this.fileSize));
      } else this._handleUploadAttachment(file, item, 'api/v1/dialogs/messages/upload-document');
    },
    _handleUploadAttachment: function _handleUploadAttachment(file, item, api) {
      if (!file) return;

      queue.push({ file: file, item: item, api: api });

      this._handleQueueAttachments(api);
    },
    _handleQueueAttachments: function _handleQueueAttachments() {
      var _this7 = this;

      if (this.attachments.queueInterval) return;

      this.attachments.queueInterval = setInterval(function () {

        if (!queue.length) {
          clearInterval(_this7.attachments.queueInterval);
          _this7.attachments.queueInterval = null;
          return false;
        }

        if (_this7.uploadingAttachmentsCount < 2) {
          var _queue$shift = queue.shift(),
              item = _queue$shift.item,
              file = _queue$shift.file,
              api = _queue$shift.api;

          item.uploading = true;

          _this7._handleQueueAttachments();
          _this7._handleUploadToServer(item, file, api).then(function (_ref2) {
            var uid = _ref2.uid,
                data = _ref2.data;

            _this7._handleUploadAttachmentSuccess(uid, data);
          }).catch(function (_ref3) {
            var uid = _ref3.uid,
                text = _ref3.text;

            _this7._handleUploadAttachmentError(uid, text);
          });
        }
      }, 1000);
    },
    _handleUploadToServer: function _handleUploadToServer(item, file, api) {
      var _this8 = this;

      return new Promise(function (resolve, reject) {

        var vm = _this8;
        var data = new FormData();
        data.append('file', file);

        _this8.$api.post(api, data, {
          timeout: 120000,
          baseURL: BASE_URL_UPLOAD,
          cancelToken: item.source.token,
          onUploadProgress: function onUploadProgress(progressEvent) {
            vm._handleUploadAttachmentProgress(item.uid, progressEvent);
          }
        }).then(function (response) {
          var data = response.data;

          resolve && resolve({ uid: item.uid, data: data });
        }, function (error) {
          var text = null;
          var response = error.response;


          if (response) {
            var _data = response.data,
                status = response.status;

            if (status === 422 && Object(__WEBPACK_IMPORTED_MODULE_3__utils__["l" /* has */])(_data, 'errors')) {
              var errors = _data.errors;

              text = JSON.stringify(errors['file'][0]);
            }
          }

          reject && reject({ uid: item.uid, text: text });
          if (!response) throw new Error('Error upload attach');
        });
      });
    },
    _handleUploadAttachmentProgress: function _handleUploadAttachmentProgress(uid, event) {
      var _this9 = this;

      this.$nextTick(function () {
        var index = _this9.attachments.items.findIndex(function (item) {
          return item.uid === uid;
        });

        if (index < 0) return;

        var progress = Math.floor(event.loaded * 100 / event.total);

        _this9.$set(_this9.attachments.items[index], 'progress', progress);
      });
    },
    _handleUploadAttachmentSuccess: function _handleUploadAttachmentSuccess(uid, data) {
      var _this10 = this;

      this.attachments.loading = false;

      this.$nextTick(function () {
        var index = _this10.attachments.items.findIndex(function (item) {
          return item.uid === uid;
        });

        if (index < 0) return;

        var item = _this10.attachments.items[index];
        item.loading = false;
        item.progress = 100;
        item.id = data.id;

        if (Object(__WEBPACK_IMPORTED_MODULE_3__utils__["l" /* has */])(data, 'player')) _this10.$set(item, 'player', data.player);

        if (Object(__WEBPACK_IMPORTED_MODULE_3__utils__["l" /* has */])(data, 'path')) _this10.$set(item, 'path', data.path);

        _this10.attachments.items[index] = item;
      });
    },
    _handleUploadAttachmentError: function _handleUploadAttachmentError(uid, text) {
      var _this11 = this;

      this.attachments.loading = false;

      this.$nextTick(function () {
        var index = _this11.attachments.items.findIndex(function (item) {
          return item.uid === uid;
        });

        if (index < 0) return;

        var item = _this11.attachments.items[index];

        if (!item.show) return;

        item.error = true;

        if (text) item.errorText = text;
        setTimeout(function () {
          return _this11._handleUploadRemoveAttachment(uid);
        }, 6000);
      });
    },
    _handleUploadRemoveAttachment: function _handleUploadRemoveAttachment(uid, status) {
      var _this12 = this;

      this.attachments.loading = false;

      this.$nextTick(function () {
        var index = _this12.attachments.items.findIndex(function (item) {
          return item.uid === uid;
        });

        if (index < 0) return;

        if (typeof status !== 'undefined' && status === false) {
          _this12.attachments.items[index].loading = false;

          return;
        }

        var item = _this12.attachments.items[index];

        item.show = false;
        item.hide = true;
        setTimeout(function () {
          item.remove = true;
        }, 500);
      });
    },
    _handleClickRemoveAttachmentItem: function _handleClickRemoveAttachmentItem(uid) {
      var index = this.attachments.items.findIndex(function (item) {
        return item.uid === uid;
      });

      if (index < 0) return;

      var item = this.attachments.items[index];

      return this._removeAttachmentItem(item);
    },
    _removeAttachmentItem: function _removeAttachmentItem(item) {
      var _this13 = this;

      if (item.loading && Object(__WEBPACK_IMPORTED_MODULE_3__utils__["l" /* has */])(item, 'source')) item.source.cancel();

      if (item.id) {
        item.loading = true;
        item.progress = 50;
        item.error = false;
        this._handleUploadRemoveAttachment(item.uid);
      } else {
        var index = this.attachments.items.findIndex(function (e) {
          return e.uid === item.uid;
        });

        this.$nextTick(function () {
          var item = _this13.attachments.items[index];

          item.show = false;
          item.hide = true;

          setTimeout(function () {
            item.remove = true;
          }, 500);
        });
      }
    },
    _clearInputFileAttach: function _clearInputFileAttach() {
      var input = this.$refs.attachedInputFile;
      input.value = '';
      // input.type = 'text'
      // input.type = 'file'
    },
    humanFileSize: function humanFileSize(size) {
      return Object(__WEBPACK_IMPORTED_MODULE_3__utils__["m" /* humanFileSize */])(size);
    }
  }
});

/***/ }),

/***/ 1777:
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



/* harmony default export */ __webpack_exports__["a"] = ({
  props: {
    message: {
      type: Object,
      required: true
    }
  },
  computed: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["c" /* mapGetters */])({
    user: 'auth/getAuthUser'
  }), {
    isFromMe: function isFromMe() {
      return this.message['from_id'] === this.user.id;
    },
    isNotRead: function isNotRead() {
      return this.message['read'] === false;
    },
    text: function text() {
      var text = this.message.text;


      var allowed = ['span'];

      if (this.message['is_html']) {
        allowed = [].concat(allowed, ['ul', 'li', 'b', 'h3', 'ol', 'p', 'a']);
      }

      if (text) {
        text = this.$striptags(text, allowed); // Removed all tags
        text = this.$nl2br(text); // nl2br to <br>
        text = this.$emoji(text); // :emoji: to <img>
        text = this.$anchorme(text); // find link and to <a>
      }

      return text;
    },
    error: function error() {
      return this.message.error || false;
    },
    thumbs_attachments: function thumbs_attachments() {
      return this.message.attachments.filter(function (item) {
        return item.type === 'photo' || item.type === 'video';
      });
    },
    other_attachments: function other_attachments() {
      return this.message.attachments.filter(function (item) {
        return item.type === 'document';
      });
    }
  }),
  mounted: function mounted() {
    if (this.isFromMe === false && this.isNotRead === true) {
      this.$store.dispatch('auth/subtractCountUnreadMessages');
    }
  },

  methods: {
    _handleClickError: function _handleClickError() {
      this.$emit('error', this.message.uuid);
    }
  }
});

/***/ }),

/***/ 2377:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(2378);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("5a8d9877", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js?sourceMap!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-8cdc5394\",\"scoped\":true,\"hasInlineConfig\":true}!../../../node_modules/sass-loader/lib/loader.js?indentedSyntax!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Show.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js?sourceMap!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-8cdc5394\",\"scoped\":true,\"hasInlineConfig\":true}!../../../node_modules/sass-loader/lib/loader.js?indentedSyntax!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Show.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 2378:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(true);
// imports


// module
exports.push([module.i, "\n.typing p[data-v-8cdc5394] {\n  display: inline-block;\n}\n.typing .typing-message[data-v-8cdc5394] {\n  display: inline-block;\n  margin-left: 6px;\n}\n", "", {"version":3,"sources":["/home/karliv/work/linkmuse-mobile/src/views/Messages/Show.vue"],"names":[],"mappings":";AAAA;EACE,sBAAsB;CAAE;AAE1B;EACE,sBAAsB;EACtB,iBAAiB;CAAE","file":"Show.vue","sourcesContent":[".typing p {\n  display: inline-block; }\n\n.typing .typing-message {\n  display: inline-block;\n  margin-left: 6px; }\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 2379:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Input_vue__ = __webpack_require__(1776);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_e689ca02_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Input_vue__ = __webpack_require__(2382);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(2380)
}
var normalizeComponent = __webpack_require__(2)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-e689ca02"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Input_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_e689ca02_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Input_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/Message/Messages/Input.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-e689ca02", Component.options)
  } else {
    hotAPI.reload("data-v-e689ca02", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 2380:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(2381);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("46e51f72", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js?sourceMap!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-e689ca02\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/sass-loader/lib/loader.js!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Input.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js?sourceMap!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-e689ca02\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/sass-loader/lib/loader.js!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Input.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 2381:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(true);
// imports


// module
exports.push([module.i, "\n.im_editable[data-v-e689ca02] {\n  padding-left: 20px;\n  margin-top: 10px;\n  margin-bottom: 10px;\n  padding-right: 185px;\n  padding-top: 0;\n  padding-bottom: 0;\n  min-height: 48px;\n  max-height: 100px;\n  border: 0;\n  overflow: auto;\n  width: 100%;\n  color: #000000;\n  font-size: 15px;\n  font-family: -apple-system, BlinkMacSystemFont, Roboto, Arial;\n  line-height: 22px;\n}\n.im_editable.lock[data-v-e689ca02] {\n    color: #B5B9C0;\n    padding-right: 20px;\n}\n.im_editable[data-v-e689ca02]:empty:before {\n    content: attr(placeholder);\n    display: block;\n}\n.im_editable img[data-v-e689ca02] {\n    height: 18px;\n    width: 18px;\n}\n.im_editable *[data-v-e689ca02] {\n    vertical-align: middle;\n}\n.lm-m-dialog-attaches .attachments--item-wrap[data-v-e689ca02] {\n  margin-bottom: 4px;\n  margin-left: 6px;\n}\n.lm-m-dialog-attaches .attachments--item-wrap.loading .attachments--item-media[data-v-e689ca02]:after {\n    content: '';\n    display: block;\n    position: absolute;\n    height: 100%;\n    width: 100%;\n    background: #000000;\n    opacity: 0.05;\n    top: 0;\n    left: 0;\n    border-radius: 2px;\n}\n.lm-m-dialog-attaches .attachments--item-wrap.loading .attachments--item-media img[data-v-e689ca02], .lm-m-dialog-attaches .attachments--item-wrap.loading .attachments--item-media .file-type[data-v-e689ca02] {\n    -webkit-filter: blur(1.5px);\n            filter: blur(1.5px);\n}\n.lm-m-dialog-attaches .attachments--item-wrap.hide-item[data-v-e689ca02] {\n    -webkit-transform: scale(0.3);\n            transform: scale(0.3);\n    -webkit-animation: media-out .5s;\n            animation: media-out .5s;\n}\n.lm-m-dialog-attaches .attachments--item-wrap.show-item[data-v-e689ca02] {\n    opacity: 1;\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    -webkit-animation: media-in .5s;\n            animation: media-in .5s;\n}\n.lm-m-dialog-attaches .attachments--item-wrap .attachments--item-media[data-v-e689ca02] {\n    display: inline-block;\n    height: 36px;\n    width: 46px;\n    border-radius: 6px;\n    overflow: hidden;\n    position: relative;\n}\n.lm-m-dialog-attaches .attachments--item-wrap .attachments--item-media img[data-v-e689ca02] {\n      margin-right: 0;\n      -o-object-fit: cover;\n         object-fit: cover;\n}\n.lm-m-dialog-attaches .attachments--item-wrap .attachments--item-media .attachments--item--loader[data-v-e689ca02] {\n      height: 100%;\n      width: 100%;\n      position: absolute;\n      left: 0;\n      top: 0;\n      display: -webkit-box;\n      display: -webkit-flex;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-align: center;\n      -webkit-align-items: center;\n          -ms-flex-align: center;\n              align-items: center;\n      -webkit-box-pack: center;\n      -webkit-justify-content: center;\n          -ms-flex-pack: center;\n              justify-content: center;\n      z-index: 4;\n      pointer-events: none;\n}\n.lm-m-dialog-attaches .attachments--item-wrap .attachments--item-media .attachments--item--loader svg[data-v-e689ca02] {\n        z-index: 2;\n}\n.lm-m-dialog-attaches .attachments--item-wrap .attachments--item-media .attachments--item--loader svg[data-v-e689ca02]:before {\n          content: '';\n          position: absolute;\n          top: 0;\n          left: 0;\n          right: 0;\n          bottom: 0;\n          width: 20px;\n          height: 20px;\n          margin: auto;\n          background-color: #000;\n          border-radius: 50%;\n          opacity: 0.4;\n          z-index: 1;\n          -webkit-filter: blur(10px);\n                  filter: blur(10px);\n}\n.lm-m-dialog-attaches .attachments--item-wrap .attachments--item-media .attachments--item--alert[data-v-e689ca02] {\n      background: url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><path fill=\"%23FC2E5F\" fill-rule=\"evenodd\" d=\"M0 8c0-4.4 3.6-8 8-8s8 3.6 8 8-3.6 8-8 8-8-3.6-8-8zm2 0c0 3.3 2.7 6 6 6s6-2.7 6-6-2.7-6-6-6-6 2.7-6 6z\" clip-rule=\"evenodd\"/><path fill=\"%23FC2E5F\" d=\"M7 4h2v5H7V4zM8 12a1 1 0 1 0 0-2 1 1 0 0 0 0 2z\"/></svg>');\n      background-repeat: no-repeat;\n      background-size: contain;\n      width: 16px;\n      height: 16px;\n      position: absolute;\n      left: 0;\n      top: 0;\n      right: 0;\n      bottom: 0;\n      margin: auto;\n      z-index: 6;\n}\n", "", {"version":3,"sources":["/home/karliv/work/linkmuse-mobile/src/components/Message/Messages/Input.vue"],"names":[],"mappings":";AAAA;EACE,mBAAmB;EACnB,iBAAiB;EACjB,oBAAoB;EACpB,qBAAqB;EACrB,eAAe;EACf,kBAAkB;EAClB,iBAAiB;EACjB,kBAAkB;EAClB,UAAU;EACV,eAAe;EACf,YAAY;EACZ,eAAe;EACf,gBAAgB;EAChB,8DAA8D;EAC9D,kBAAkB;CAAE;AACpB;IACE,eAAe;IACf,oBAAoB;CAAE;AACxB;IACE,2BAA2B;IAC3B,eAAe;CAAE;AACnB;IACE,aAAa;IACb,YAAY;CAAE;AAChB;IACE,uBAAuB;CAAE;AAE7B;EACE,mBAAmB;EACnB,iBAAiB;CAAE;AACnB;IACE,YAAY;IACZ,eAAe;IACf,mBAAmB;IACnB,aAAa;IACb,YAAY;IACZ,oBAAoB;IACpB,cAAc;IACd,OAAO;IACP,QAAQ;IACR,mBAAmB;CAAE;AACvB;IACE,4BAAoB;YAApB,oBAAoB;CAAE;AACxB;IACE,8BAAsB;YAAtB,sBAAsB;IACtB,iCAAyB;YAAzB,yBAAyB;CAAE;AAC7B;IACE,WAAW;IACX,4BAAoB;YAApB,oBAAoB;IACpB,gCAAwB;YAAxB,wBAAwB;CAAE;AAC5B;IACE,sBAAsB;IACtB,aAAa;IACb,YAAY;IACZ,mBAAmB;IACnB,iBAAiB;IACjB,mBAAmB;CAAE;AACrB;MACE,gBAAgB;MAChB,qBAAkB;SAAlB,kBAAkB;CAAE;AACtB;MACE,aAAa;MACb,YAAY;MACZ,mBAAmB;MACnB,QAAQ;MACR,OAAO;MACP,qBAAc;MAAd,sBAAc;MAAd,qBAAc;MAAd,cAAc;MACd,0BAAoB;MAApB,4BAAoB;UAApB,uBAAoB;cAApB,oBAAoB;MACpB,yBAAwB;MAAxB,gCAAwB;UAAxB,sBAAwB;cAAxB,wBAAwB;MACxB,WAAW;MACX,qBAAqB;CAAE;AACvB;QACE,WAAW;CAAE;AACb;UACE,YAAY;UACZ,mBAAmB;UACnB,OAAO;UACP,QAAQ;UACR,SAAS;UACT,UAAU;UACV,YAAY;UACZ,aAAa;UACb,aAAa;UACb,uBAAuB;UACvB,mBAAmB;UACnB,aAAa;UACb,WAAW;UACX,2BAAmB;kBAAnB,mBAAmB;CAAE;AAC3B;MACE,wYAAwY;MACxY,6BAA6B;MAC7B,yBAAyB;MACzB,YAAY;MACZ,aAAa;MACb,mBAAmB;MACnB,QAAQ;MACR,OAAO;MACP,SAAS;MACT,UAAU;MACV,aAAa;MACb,WAAW;CAAE","file":"Input.vue","sourcesContent":[".im_editable {\n  padding-left: 20px;\n  margin-top: 10px;\n  margin-bottom: 10px;\n  padding-right: 185px;\n  padding-top: 0;\n  padding-bottom: 0;\n  min-height: 48px;\n  max-height: 100px;\n  border: 0;\n  overflow: auto;\n  width: 100%;\n  color: #000000;\n  font-size: 15px;\n  font-family: -apple-system, BlinkMacSystemFont, Roboto, Arial;\n  line-height: 22px; }\n  .im_editable.lock {\n    color: #B5B9C0;\n    padding-right: 20px; }\n  .im_editable:empty:before {\n    content: attr(placeholder);\n    display: block; }\n  .im_editable img {\n    height: 18px;\n    width: 18px; }\n  .im_editable * {\n    vertical-align: middle; }\n\n.lm-m-dialog-attaches .attachments--item-wrap {\n  margin-bottom: 4px;\n  margin-left: 6px; }\n  .lm-m-dialog-attaches .attachments--item-wrap.loading .attachments--item-media:after {\n    content: '';\n    display: block;\n    position: absolute;\n    height: 100%;\n    width: 100%;\n    background: #000000;\n    opacity: 0.05;\n    top: 0;\n    left: 0;\n    border-radius: 2px; }\n  .lm-m-dialog-attaches .attachments--item-wrap.loading .attachments--item-media img, .lm-m-dialog-attaches .attachments--item-wrap.loading .attachments--item-media .file-type {\n    filter: blur(1.5px); }\n  .lm-m-dialog-attaches .attachments--item-wrap.hide-item {\n    transform: scale(0.3);\n    animation: media-out .5s; }\n  .lm-m-dialog-attaches .attachments--item-wrap.show-item {\n    opacity: 1;\n    transform: scale(1);\n    animation: media-in .5s; }\n  .lm-m-dialog-attaches .attachments--item-wrap .attachments--item-media {\n    display: inline-block;\n    height: 36px;\n    width: 46px;\n    border-radius: 6px;\n    overflow: hidden;\n    position: relative; }\n    .lm-m-dialog-attaches .attachments--item-wrap .attachments--item-media img {\n      margin-right: 0;\n      object-fit: cover; }\n    .lm-m-dialog-attaches .attachments--item-wrap .attachments--item-media .attachments--item--loader {\n      height: 100%;\n      width: 100%;\n      position: absolute;\n      left: 0;\n      top: 0;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      z-index: 4;\n      pointer-events: none; }\n      .lm-m-dialog-attaches .attachments--item-wrap .attachments--item-media .attachments--item--loader svg {\n        z-index: 2; }\n        .lm-m-dialog-attaches .attachments--item-wrap .attachments--item-media .attachments--item--loader svg:before {\n          content: '';\n          position: absolute;\n          top: 0;\n          left: 0;\n          right: 0;\n          bottom: 0;\n          width: 20px;\n          height: 20px;\n          margin: auto;\n          background-color: #000;\n          border-radius: 50%;\n          opacity: 0.4;\n          z-index: 1;\n          filter: blur(10px); }\n    .lm-m-dialog-attaches .attachments--item-wrap .attachments--item-media .attachments--item--alert {\n      background: url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><path fill=\"%23FC2E5F\" fill-rule=\"evenodd\" d=\"M0 8c0-4.4 3.6-8 8-8s8 3.6 8 8-3.6 8-8 8-8-3.6-8-8zm2 0c0 3.3 2.7 6 6 6s6-2.7 6-6-2.7-6-6-6-6 2.7-6 6z\" clip-rule=\"evenodd\"/><path fill=\"%23FC2E5F\" d=\"M7 4h2v5H7V4zM8 12a1 1 0 1 0 0-2 1 1 0 0 0 0 2z\"/></svg>');\n      background-repeat: no-repeat;\n      background-size: contain;\n      width: 16px;\n      height: 16px;\n      position: absolute;\n      left: 0;\n      top: 0;\n      right: 0;\n      bottom: 0;\n      margin: auto;\n      z-index: 6; }\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 2382:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _vm.attachments.items.length
      ? _c(
          "div",
          { staticClass: "lm-m-dialog-attaches" },
          [
            _vm._l(_vm.attachments.items, function(item) {
              return [
                !item.remove
                  ? [
                      _c(
                        "div",
                        {
                          class: [
                            "lm-m-dialog-attach",
                            item.type,
                            "attachments--item-wrap",
                            {
                              loading: item.loading,
                              "show-item": item.show,
                              "hide-item": item.hide,
                              error: item.error
                            }
                          ]
                        },
                        [
                          item.loading || item.error
                            ? [
                                _c(
                                  "a",
                                  {
                                    staticClass: "attachments--item-media",
                                    attrs: { href: "javascript:void(0)" }
                                  },
                                  [
                                    item.type === "photo" ||
                                    item.type === "video"
                                      ? [
                                          _c("img", {
                                            ref: item.uid,
                                            refInFor: true,
                                            attrs: {
                                              src: item.thumbnail,
                                              alt: item.description
                                            }
                                          }),
                                          _vm._v(" "),
                                          item.type === "video"
                                            ? [
                                                _c("i", {
                                                  staticClass: "lm-play-icon"
                                                })
                                              ]
                                            : _vm._e()
                                        ]
                                      : _vm._e(),
                                    _vm._v(" "),
                                    item.type === "document"
                                      ? [
                                          _c(
                                            "div",
                                            { staticClass: "document" },
                                            [
                                              _c(
                                                "div",
                                                {
                                                  staticClass:
                                                    "lm-m-attach-document-name"
                                                },
                                                [
                                                  _vm._v(
                                                    _vm._s(
                                                      item.extension.toUpperCase()
                                                    )
                                                  )
                                                ]
                                              )
                                            ]
                                          )
                                        ]
                                      : _vm._e(),
                                    _vm._v(" "),
                                    item.loading &&
                                    item.uploading &&
                                    !item.error
                                      ? [
                                          _c("lm-progress-loader", {
                                            staticClass:
                                              "attachments--item--loader",
                                            attrs: {
                                              color: "ffffff",
                                              width: 16,
                                              height: 16,
                                              percent: item.progress
                                            }
                                          })
                                        ]
                                      : _vm._e(),
                                    _vm._v(" "),
                                    item.error
                                      ? [
                                          _c("i", {
                                            staticClass:
                                              "attachments--item--alert"
                                          })
                                        ]
                                      : _vm._e()
                                  ],
                                  2
                                )
                              ]
                            : _vm._e(),
                          _vm._v(" "),
                          !item.loading && !item.error
                            ? [
                                item.type === "photo"
                                  ? [
                                      _c(
                                        "media",
                                        {
                                          staticClass:
                                            "attachments--item-media",
                                          attrs: {
                                            media: item,
                                            type: "photo",
                                            src: item.path,
                                            album:
                                              "messageDialogForm-" +
                                              _vm.recipient_id
                                          }
                                        },
                                        [
                                          _c("img", {
                                            ref: item.uid,
                                            refInFor: true,
                                            attrs: {
                                              src: item.thumbnail,
                                              alt: item.description
                                            }
                                          })
                                        ]
                                      )
                                    ]
                                  : _vm._e(),
                                _vm._v(" "),
                                item.type === "video"
                                  ? [
                                      _c(
                                        "media",
                                        {
                                          staticClass:
                                            "attachments--item-media",
                                          attrs: {
                                            media: item,
                                            type: "video",
                                            player: item.player,
                                            album:
                                              "messageDialogForm-" +
                                              _vm.recipient_id
                                          }
                                        },
                                        [
                                          _c("img", {
                                            ref: item.uid,
                                            refInFor: true,
                                            attrs: {
                                              src: item.thumbnail,
                                              alt: item.description
                                            }
                                          }),
                                          _vm._v(" "),
                                          _c("i", {
                                            staticClass: "lm-play-icon"
                                          })
                                        ]
                                      )
                                    ]
                                  : _vm._e(),
                                _vm._v(" "),
                                item.type === "document"
                                  ? [
                                      _c("div", { staticClass: "document" }, [
                                        _c(
                                          "a",
                                          {
                                            staticClass:
                                              "lm-m-attach-document-name",
                                            attrs: {
                                              href: item.path,
                                              download: ""
                                            }
                                          },
                                          [
                                            _vm._v(
                                              _vm._s(
                                                item.extension.toUpperCase()
                                              )
                                            )
                                          ]
                                        )
                                      ])
                                    ]
                                  : _vm._e()
                              ]
                            : _vm._e(),
                          _vm._v(" "),
                          _c("i", {
                            staticClass: "lm-close",
                            on: {
                              click: function($event) {
                                $event.stopPropagation()
                                $event.preventDefault()
                                return _vm._handleClickRemoveAttachmentItem(
                                  item.uid
                                )
                              }
                            }
                          })
                        ],
                        2
                      )
                    ]
                  : _vm._e()
              ]
            })
          ],
          2
        )
      : _vm._e(),
    _vm._v(" "),
    _c("div", { staticClass: "lm-m-dialog-write" }, [
      _c(
        "div",
        { staticClass: "lm-input-wrap" },
        [
          _c("emoji-input-area", {
            attrs: {
              name: "message",
              id: "emoji-area-dialog",
              placeholder: _vm.$t("messages.open-dialogue.start"),
              readonly: false
            },
            on: {
              input: _vm._handleInputMessage,
              "paste:image": _vm._handlePasteImage,
              "key:enter": _vm._handleClickSendButton,
              "key:tab": _vm._handleShowEmojiPicker
            },
            model: {
              value: _vm.fields.text,
              callback: function($$v) {
                _vm.$set(_vm.fields, "text", $$v)
              },
              expression: "fields.text"
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c("div", { staticClass: "lm-m-dialog-show-actions" }, [
        _c("div", { staticClass: "dialog-attach" }, [
          _c("label", {
            class: [
              "lm-attach-icon",
              {
                active: _vm.uploadingAttachmentsCount,
                disabled: _vm.canUploadAttachments === false
              }
            ],
            attrs: { for: "lm-upload-files-messages" }
          }),
          _vm._v(" "),
          _c("input", {
            ref: "attachedInputFile",
            staticClass: "input-upload-files-messages",
            attrs: {
              type: "file",
              id: "lm-upload-files-messages",
              disabled: _vm.canUploadAttachments === false,
              multiple: true,
              accept: _vm.acceptedFiles
            },
            on: { change: _vm._handleChangeAttachments }
          })
        ]),
        _vm._v(" "),
         false
          ? _c("div", { staticClass: "dialog-emoji" }, [
              _c("i", { staticClass: "lm-smile-icon active" })
            ])
          : _vm._e(),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "dialog-send",
            on: { click: _vm._handleClickSendButton }
          },
          [_c("i", { staticClass: "lm-send-icon" })]
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
    require("vue-hot-reload-api")      .rerender("data-v-e689ca02", esExports)
  }
}

/***/ }),

/***/ 2383:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Message_vue__ = __webpack_require__(1777);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_6787697c_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Message_vue__ = __webpack_require__(2386);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(2384)
}
var normalizeComponent = __webpack_require__(2)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-6787697c"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Message_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_6787697c_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Message_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/Message/Messages/Message.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6787697c", Component.options)
  } else {
    hotAPI.reload("data-v-6787697c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 2384:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(2385);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("1e7b1e5a", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js?sourceMap!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6787697c\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Message.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js?sourceMap!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6787697c\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Message.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 2385:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(true);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"Message.vue","sourceRoot":""}]);

// exports


/***/ }),

/***/ 2386:
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
        "lm-m-dialog-body--item",
        {
          from: _vm.isFromMe === true,
          to: _vm.isFromMe === false,
          not_read: _vm.isNotRead,
          error: _vm.error
        }
      ]
    },
    [
      _c("div", { staticClass: "lm-m-dialog-body--item-wrap" }, [
        _vm.error
          ? _c("div", {
              staticClass: "error-icon",
              on: { click: _vm._handleClickError }
            })
          : _vm._e(),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "lm-m-dialog-border" },
          [
            _vm.text
              ? _c("div", {
                  staticClass: "text",
                  domProps: { innerHTML: _vm._s(_vm.text) }
                })
              : _vm._e(),
            _vm._v(" "),
            _vm.thumbs_attachments.length
              ? [
                  _vm._l(_vm._.chunk(_vm.thumbs_attachments, 9), function(
                    chunk
                  ) {
                    return [
                      _c(
                        "div",
                        { class: ["lm-m-dialogs-" + chunk.length] },
                        _vm._l(chunk, function(attach) {
                          return _c(
                            "div",
                            { class: ["lm-m-dialog-attach", attach.type] },
                            [
                              attach.type === "photo"
                                ? [
                                    _c(
                                      "media",
                                      {
                                        attrs: {
                                          media: attach,
                                          type: "photo",
                                          src: attach.path,
                                          album: "dialog_" + _vm.message.uid
                                        }
                                      },
                                      [
                                        _c("img", {
                                          attrs: {
                                            src: attach.path,
                                            alt: attach.description
                                          }
                                        })
                                      ]
                                    )
                                  ]
                                : _vm._e(),
                              _vm._v(" "),
                              attach.type === "video"
                                ? [
                                    _c(
                                      "media",
                                      {
                                        attrs: {
                                          media: attach,
                                          type: "video",
                                          player: attach.player,
                                          album: "dialog_" + _vm.message.uid
                                        }
                                      },
                                      [
                                        _c("img", {
                                          attrs: {
                                            src: attach["cover_image"],
                                            alt: attach.description
                                          }
                                        }),
                                        _vm._v(" "),
                                        _c("i", { staticClass: "lm-play" })
                                      ]
                                    )
                                  ]
                                : _vm._e()
                            ],
                            2
                          )
                        }),
                        0
                      )
                    ]
                  })
                ]
              : _vm._e(),
            _vm._v(" "),
            _vm.other_attachments.length
              ? _vm._l(_vm.other_attachments, function(attach) {
                  return _c(
                    "div",
                    { staticClass: "lm-m-dialog-body--item-document" },
                    [
                      _c(
                        "a",
                        {
                          attrs: {
                            href: attach.path,
                            target: "_blank",
                            download: ""
                          }
                        },
                        [
                          _c("i", { staticClass: "lm-icon-square-download" }),
                          _vm._v(" "),
                          _c(
                            "span",
                            { staticClass: "lm-m-dialog-body--item-name" },
                            [
                              _vm._v(
                                _vm._s(
                                  _vm._f("truncate")(attach.description, 15)
                                )
                              )
                            ]
                          )
                        ]
                      )
                    ]
                  )
                })
              : _vm._e(),
            _vm._v(" "),
            _c("div", { staticClass: "date" }, [
              _vm._v(_vm._s(_vm.message["sent_time"]))
            ])
          ],
          2
        )
      ])
    ]
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-6787697c", esExports)
  }
}

/***/ }),

/***/ 2387:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "lm-m-messages lm-m-page lm-m-messages-show" },
    [
      _c("div", { staticClass: "lm-m-messages-head lm-m-page--head" }, [
        _c("div", { staticClass: "left" }, [
          _c("a", { on: { click: _vm._handleClickPreviousPage } }, [
            _c("i", { staticClass: "lm-back-icon" })
          ])
        ]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "center" },
          [
            _vm.dialog && _vm.interlocutor
              ? [
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
                      _c("span", [
                        _vm._v(
                          _vm._s(_vm._f("truncate")(_vm.interlocutor.name, 25))
                        )
                      ]),
                      _vm._v(" "),
                      _vm.typing === false
                        ? [
                            _c("div", { staticClass: "text-status" }, [
                              _vm._v(
                                _vm._s(
                                  _vm.interlocutor.online
                                    ? "онлайн"
                                    : "был в сети " +
                                        _vm.$options.filters.moment(
                                          _vm.interlocutor.last_activity_at,
                                          "from"
                                        )
                                )
                              )
                            ])
                          ]
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.typing === true
                        ? [
                            _c("div", { staticClass: "text-status typing" }, [
                              _c("p", [_vm._v("Печатает сообщение")]),
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
                ]
              : _vm._e()
          ],
          2
        ),
        _vm._v(" "),
        _vm.dialog
          ? _c("div", { staticClass: "right" }, [
              _c("i", {
                staticClass: "lm-more-icon",
                on: { click: _vm._handleClickActionSheetDialog }
              })
            ])
          : _vm._e()
      ]),
      _vm._v(" "),
      _c(
        "div",
        {
          ref: "wrapper",
          staticClass: "lm-m-dialog-wrap",
          style: { height: _vm.height }
        },
        [
          _vm.dialog && _vm.errorDialog === false
            ? [
                _c(
                  "div",
                  {
                    directives: [
                      { name: "chat-scroll", rawName: "v-chat-scroll" }
                    ],
                    class: ["lm-m-dialog-body", { null: _vm.isEmpty === true }],
                    on: {
                      click: function($event) {
                        return _vm._handleClick()
                      },
                      "scroll-top": function($event) {
                        return _vm._handleScrollTop()
                      }
                    }
                  },
                  [
                    _vm.loading && _vm.loadmore.bottomStatus !== "loading"
                      ? _c("lm-m-loader")
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.isEmpty === false
                      ? [
                          _c(
                            "mt-loadmore",
                            {
                              ref: "loadmore",
                              attrs: {
                                "bottom-method": _vm._handleLoadBottomMessages
                              },
                              on: {
                                "bottom-status-change":
                                  _vm._handleBottomStatusChangeMessages
                              }
                            },
                            [
                              _c(
                                "div",
                                { staticClass: "lm-m-dialog-wrap-scroll" },
                                _vm._l(_vm.dates, function(messages, date) {
                                  return _c(
                                    "div",
                                    { key: "messages_" + date },
                                    [
                                      _c(
                                        "div",
                                        {
                                          staticClass:
                                            "lm-m-dialog-body--item date"
                                        },
                                        [
                                          _c("span", [
                                            _vm._v(
                                              _vm._s(
                                                _vm.isToday(date)
                                                  ? "Сегодня"
                                                  : _vm.isYesterday(date)
                                                  ? "Вчера"
                                                  : _vm.$options.filters.moment(
                                                      [date, "DD-MM-YYYY"],
                                                      "D MMM"
                                                    )
                                              )
                                            )
                                          ])
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _vm._l(messages, function(message) {
                                        return _c("chat-message", {
                                          key: message.id,
                                          attrs: { message: message },
                                          on: {
                                            error: _vm._handleClickErrorMessage
                                          }
                                        })
                                      })
                                    ],
                                    2
                                  )
                                }),
                                0
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  staticClass: "mint-loadmore-bottom",
                                  attrs: { slot: "bottom" },
                                  slot: "bottom"
                                },
                                [
                                  _vm.loadmore.bottomStatus === "loading"
                                    ? [_c("lm-m-loader")]
                                    : _vm._e(),
                                  _vm._v(" "),
                                  _vm.loadmore.bottomStatus !== "loading"
                                    ? _c(
                                        "span",
                                        {
                                          class: [
                                            "arrow",
                                            {
                                              rotate:
                                                _vm.loadmore.bottomStatus ===
                                                "drop"
                                            }
                                          ]
                                        },
                                        [_vm._v("↑")]
                                      )
                                    : _vm._e()
                                ],
                                2
                              )
                            ]
                          )
                        ]
                      : _vm.isEmpty === true && _vm.can_write_messages
                      ? [_vm._m(0)]
                      : _vm._e(),
                    _vm._v(" "),
                    !_vm.can_write_messages ? [_vm._m(1)] : _vm._e()
                  ],
                  2
                ),
                _vm._v(" "),
                _vm.can_write_messages
                  ? _c(
                      "div",
                      { staticClass: "lm-m-dialog-footer" },
                      [
                        _c("chat-input", {
                          attrs: {
                            dialog_id: _vm.dialog_id,
                            recipient_id: _vm.recipient_id
                          },
                          on: {
                            send: _vm._handleSendMessage,
                            presend: _vm._handlePreSendMessage,
                            error: _vm._handleErrorSendMessage
                          }
                        })
                      ],
                      1
                    )
                  : _vm._e()
              ]
            : _vm._e(),
          _vm._v(" "),
          !_vm.dialog || _vm.errorDialog === true ? [_vm._m(2)] : _vm._e()
        ],
        2
      ),
      _vm._v(" "),
      _c("actionsheet", {
        attrs: { actions: _vm.sheets.dialog.actions, "cancel-text": "" },
        model: {
          value: _vm.sheets.dialog.value,
          callback: function($$v) {
            _vm.$set(_vm.sheets.dialog, "value", $$v)
          },
          expression: "sheets.dialog.value"
        }
      }),
      _vm._v(" "),
      _c("actionsheet", {
        attrs: { actions: _vm.sheets.error.actions, "cancel-text": "" },
        model: {
          value: _vm.sheets.error.value,
          callback: function($$v) {
            _vm.$set(_vm.sheets.error, "value", $$v)
          },
          expression: "sheets.error.value"
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
    return _c("div", { staticClass: "lm-m-dialog-body--item null" }, [
      _c("span", [_vm._v("Напишите что-нибудь :)")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "lm-m-dialog-body--item null" }, [
      _c("span", [
        _vm._v(
          "Вы не можете отправить сообщение этому пользователю, поскольку он ограничивает круг лиц, которые могут присылать ему сообщения."
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "lm-m-dialog-body error" }, [
      _c("div", { staticClass: "lm-m-dialog-body--item null" }, [
        _c("span", [_vm._v("Произошла ошибка :(")])
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
    require("vue-hot-reload-api")      .rerender("data-v-8cdc5394", esExports)
  }
}

/***/ })

});
//# sourceMappingURL=92.build.7b4c03c2abb2fb294164.js.map