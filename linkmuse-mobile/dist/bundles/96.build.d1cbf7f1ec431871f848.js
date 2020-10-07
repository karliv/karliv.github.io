webpackJsonp([96],{

/***/ 1293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Index_vue__ = __webpack_require__(1649);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7f3a5fcb_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Index_vue__ = __webpack_require__(2018);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(2016)
}
var normalizeComponent = __webpack_require__(2)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-7f3a5fcb"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7f3a5fcb_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Index_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/views/CertifyingSpecialist/Customer/Index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7f3a5fcb", Component.options)
  } else {
    hotAPI.reload("data-v-7f3a5fcb", Component.options)
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

/***/ 1498:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DEFAULT_VAT; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Enums_Services__ = __webpack_require__(1497);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Enums_OrderStatuses__ = __webpack_require__(1496);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Enums_DisputeStatuses__ = __webpack_require__(1499);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Enums_DisputeCauses__ = __webpack_require__(1500);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Enums_DisputeSolutions__ = __webpack_require__(1501);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_simple_object_transformer__ = __webpack_require__(1502);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_simple_object_transformer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_simple_object_transformer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Enums_VAT__ = __webpack_require__(1503);
var _Object$freeze;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



 // Диспут ( может быть в любом статусе)











var DEFAULT_CLASS_ORDER = 'default';
var DEFAULT_STATUS_ORDER = 'Необработанный';
var DEFAULT_WORK = '-';

var DISPUTE = 'dispute';
var DEFAULT_DISPUTE_STATUS = ' Нет решения';
var DEFAULT_DISPUTE_CAUSE = '';
var DEFAULT_DISPUTE_SOLUTION = '';

var DEFAULT_VAT = 'НДС 0%';

var convert = __webpack_require__(1504);

var RULES = Object.freeze((_Object$freeze = {}, _Object$freeze[__WEBPACK_IMPORTED_MODULE_0__Enums_Services__["b" /* PHOTO */]] = function (context) {
  return context.photo ? '\u0424\u043E\u0442\u043E (' + context.photo.min + ')' : null;
}, _Object$freeze[__WEBPACK_IMPORTED_MODULE_0__Enums_Services__["c" /* VIDEO */]] = function (context) {
  return context.video ? '\u0412\u0438\u0434\u0435\u043E-\u0432\u0438\u0437\u0438\u0442\u043A\u0430 (' + convert(context.video.duration).minutes + ' \u043C\u0438\u043D)' : null;
}, _Object$freeze[__WEBPACK_IMPORTED_MODULE_0__Enums_Services__["a" /* MEASUREMENT */]] = function (context) {
  return context.measurement ? '\u041E\u0431\u043C\u0435\u0440' : null;
}, _Object$freeze));

var CertifyingSpecialist = function () {
  function CertifyingSpecialist() {
    var _works, _classes, _statuses, _statuses2, _causes, _solutions, _VAT;

    _classCallCheck(this, CertifyingSpecialist);

    this.service = {
      works: (_works = {}, _works[__WEBPACK_IMPORTED_MODULE_0__Enums_Services__["b" /* PHOTO */]] = 'Фото', _works[__WEBPACK_IMPORTED_MODULE_0__Enums_Services__["c" /* VIDEO */]] = 'Видео', _works[__WEBPACK_IMPORTED_MODULE_0__Enums_Services__["a" /* MEASUREMENT */]] = 'Обмер', _works)
    };

    this.order = {
      card: {
        classes: (_classes = {}, _classes[__WEBPACK_IMPORTED_MODULE_1__Enums_OrderStatuses__["f" /* NOT_PAID */]] = 'not_paid', _classes[__WEBPACK_IMPORTED_MODULE_1__Enums_OrderStatuses__["g" /* PAID */]] = 'untreated', _classes[__WEBPACK_IMPORTED_MODULE_1__Enums_OrderStatuses__["e" /* MATCH_MEETING */]] = 'agreement', _classes[__WEBPACK_IMPORTED_MODULE_1__Enums_OrderStatuses__["h" /* WAIT_CONFIRM_MEETING_CLIENT */]] = 'agreement', _classes[__WEBPACK_IMPORTED_MODULE_1__Enums_OrderStatuses__["a" /* AGREED_MEETING */]] = 'meeting', _classes[__WEBPACK_IMPORTED_MODULE_1__Enums_OrderStatuses__["j" /* WAIT_WORK */]] = 'job', _classes[__WEBPACK_IMPORTED_MODULE_1__Enums_OrderStatuses__["i" /* WAIT_CONFIRM_WORK_CLIENT */]] = 'job', _classes[__WEBPACK_IMPORTED_MODULE_1__Enums_OrderStatuses__["c" /* FINALIZING */]] = 'job', _classes[__WEBPACK_IMPORTED_MODULE_1__Enums_OrderStatuses__["d" /* FINISHED */]] = 'finished', _classes[__WEBPACK_IMPORTED_MODULE_1__Enums_OrderStatuses__["b" /* CANCELED */]] = 'canceled', _classes[DISPUTE] = 'dispute', _classes),
        statuses: (_statuses = {}, _statuses[__WEBPACK_IMPORTED_MODULE_1__Enums_OrderStatuses__["f" /* NOT_PAID */]] = 'Неоплаченный', _statuses[__WEBPACK_IMPORTED_MODULE_1__Enums_OrderStatuses__["g" /* PAID */]] = 'Необработанный', _statuses[__WEBPACK_IMPORTED_MODULE_1__Enums_OrderStatuses__["e" /* MATCH_MEETING */]] = 'Согласование встречи', _statuses[__WEBPACK_IMPORTED_MODULE_1__Enums_OrderStatuses__["h" /* WAIT_CONFIRM_MEETING_CLIENT */]] = 'Согласование встречи', _statuses[__WEBPACK_IMPORTED_MODULE_1__Enums_OrderStatuses__["a" /* AGREED_MEETING */]] = 'Встреча', _statuses[__WEBPACK_IMPORTED_MODULE_1__Enums_OrderStatuses__["j" /* WAIT_WORK */]] = 'В работе', _statuses[__WEBPACK_IMPORTED_MODULE_1__Enums_OrderStatuses__["i" /* WAIT_CONFIRM_WORK_CLIENT */]] = 'Подтверждение работы', _statuses[__WEBPACK_IMPORTED_MODULE_1__Enums_OrderStatuses__["c" /* FINALIZING */]] = 'На доработке', _statuses[__WEBPACK_IMPORTED_MODULE_1__Enums_OrderStatuses__["d" /* FINISHED */]] = 'Завершенный', _statuses[__WEBPACK_IMPORTED_MODULE_1__Enums_OrderStatuses__["b" /* CANCELED */]] = 'Отмененный', _statuses[DISPUTE] = 'Диспут', _statuses)
      }
    };

    this.dispute = {
      statuses: (_statuses2 = {}, _statuses2[__WEBPACK_IMPORTED_MODULE_2__Enums_DisputeStatuses__["b" /* PAYMENT_CUSTOMER */]] = 'Выплата клиенту', _statuses2[__WEBPACK_IMPORTED_MODULE_2__Enums_DisputeStatuses__["c" /* PAYMENT_SPECIALIST */]] = 'Выплата специалисту', _statuses2[__WEBPACK_IMPORTED_MODULE_2__Enums_DisputeStatuses__["a" /* FINALIZING */]] = 'Доработка заказа', _statuses2[__WEBPACK_IMPORTED_MODULE_2__Enums_DisputeStatuses__["e" /* REFUSE_FINALIZING */]] = 'Отказ в доработке', _statuses2[__WEBPACK_IMPORTED_MODULE_2__Enums_DisputeStatuses__["f" /* SEPARATE_PAYMENT */]] = 'Раздельная выплата(сумма Клиенту, сумма СС)', _statuses2[__WEBPACK_IMPORTED_MODULE_2__Enums_DisputeStatuses__["d" /* REFUSE_DISPUTE */]] = 'Отказ в диспуте', _statuses2),
      causes: (_causes = {}, _causes[__WEBPACK_IMPORTED_MODULE_3__Enums_DisputeCauses__["c" /* IGNORE_SPECIALIST */]] = 'Специалист меня игнорирует', _causes[__WEBPACK_IMPORTED_MODULE_3__Enums_DisputeCauses__["g" /* QUALITY_WORK */]] = 'Качество работы специалиста меня не устраивает', _causes[__WEBPACK_IMPORTED_MODULE_3__Enums_DisputeCauses__["e" /* NOT_MEETING */]] = 'Встреча со специалистом не состоялась', _causes[__WEBPACK_IMPORTED_MODULE_3__Enums_DisputeCauses__["h" /* WAS_LATE */]] = 'Опоздал (неявка)', _causes[__WEBPACK_IMPORTED_MODULE_3__Enums_DisputeCauses__["d" /* INADEQUATE_STATE */]] = 'Неадекватное состояние /поведение', _causes[__WEBPACK_IMPORTED_MODULE_3__Enums_DisputeCauses__["b" /* DISCREPANCY */]] = 'Несоответствие правилам ', _causes[__WEBPACK_IMPORTED_MODULE_3__Enums_DisputeCauses__["a" /* ANOTHER_MAN */]] = 'Пришел другой человек', _causes[__WEBPACK_IMPORTED_MODULE_3__Enums_DisputeCauses__["f" /* OTHER */]] = 'Другое', _causes),
      solutions: (_solutions = {}, _solutions[__WEBPACK_IMPORTED_MODULE_4__Enums_DisputeSolutions__["d" /* RETURN_MONEY */]] = 'Вернуть деньги заказчику', _solutions[__WEBPACK_IMPORTED_MODULE_4__Enums_DisputeSolutions__["c" /* REPLACE_SPECIALIST */]] = 'Заменить специалиста на другого', _solutions[__WEBPACK_IMPORTED_MODULE_4__Enums_DisputeSolutions__["a" /* AGAIN */]] = 'Провести сертификацию еще раз', _solutions[__WEBPACK_IMPORTED_MODULE_4__Enums_DisputeSolutions__["b" /* GET_MONEY */]] = 'Получить обратно всю сумму оплаты или ее часть', _solutions)
    };

    this.VAT = (_VAT = {}, _VAT[__WEBPACK_IMPORTED_MODULE_6__Enums_VAT__["a" /* VAT_0 */]] = 'НДС 0%', _VAT);

    // this.VAT = {
    //   [VAT_NULL]: 'НДС не облагается',
    //   [VAT_20]: 'НДС 20%',
    //   [VAT_10]: 'НДС 10%',
    //   [VAT_0]: 'НДС 0%',
    //   [VAT_110]: 'расчетный НДС 10/110',
    //   [VAT_120]: 'расчетный НДС 20/120'
    // }
  }

  CertifyingSpecialist.prototype.getOrderStatusClass = function getOrderStatusClass(status) {
    var item = this.order.card.classes[status];
    return item || DEFAULT_CLASS_ORDER;
  };

  CertifyingSpecialist.prototype.getOrderStatusTranslate = function getOrderStatusTranslate(status) {
    var item = this.order.card.statuses[status];
    return item || DEFAULT_STATUS_ORDER;
  };

  CertifyingSpecialist.prototype.getServiceWorkTranslate = function getServiceWorkTranslate(type) {
    var item = this.service.works[type];
    return item || DEFAULT_WORK;
  };

  CertifyingSpecialist.prototype.getTransformServiceWorkType = function getTransformServiceWorkType(object) {
    if (!object) return;

    var transformer = Object(__WEBPACK_IMPORTED_MODULE_5_simple_object_transformer__["transformerFactory"])(RULES);
    var result = transformer(Object.freeze(object));

    // Removed empty value in transform object
    Object.keys(result).forEach(function (k) {
      return !result[k] && result[k] !== undefined && delete result[k];
    });
    return result;
  };

  CertifyingSpecialist.prototype.getDisputeStatusTranslate = function getDisputeStatusTranslate(status) {
    var item = this.dispute.statuses[status];
    return item || DEFAULT_DISPUTE_STATUS;
  };

  CertifyingSpecialist.prototype.getDisputeCauseTranslate = function getDisputeCauseTranslate(cause) {
    var item = this.dispute.causes[cause];
    return item || DEFAULT_DISPUTE_CAUSE;
  };

  CertifyingSpecialist.prototype.getDisputeSolutionsTranslate = function getDisputeSolutionsTranslate(solution) {
    var item = this.dispute.solutions[solution];
    return item || DEFAULT_DISPUTE_SOLUTION;
  };

  CertifyingSpecialist.prototype.getRatingClass = function getRatingClass(rating) {
    switch (true) {
      case rating >= 4:
        return 'green';
      case rating >= 3 && rating < 4:
        return 'yellow';
      case rating < 3:
        return 'red';
      default:
        return 'gray';
    }
  };

  CertifyingSpecialist.prototype.getVATTranslate = function getVATTranslate(vat) {
    var item = this.VAT[vat];
    return item || DEFAULT_VAT;
  };

  return CertifyingSpecialist;
}();

/* harmony default export */ __webpack_exports__["b"] = (new CertifyingSpecialist());

/***/ }),

/***/ 1499:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return PAYMENT_CUSTOMER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return PAYMENT_SPECIALIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FINALIZING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return REFUSE_FINALIZING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return SEPARATE_PAYMENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return REFUSE_DISPUTE; });
var PAYMENT_CUSTOMER = 'payment_customer'; // Выплата Клиенту
var PAYMENT_SPECIALIST = 'payment_specialist'; // Выплата Специалисту
var FINALIZING = 'finalizing'; // Доработка заказа
var REFUSE_FINALIZING = 'refuse_finalizing'; // Отказ в доработке
var SEPARATE_PAYMENT = 'separate_payment'; // Раздельная выплата(сумма Клиенту, сумма СС)
var REFUSE_DISPUTE = 'refuse_dispute'; // Отказ в диспуте

/***/ }),

/***/ 1500:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return IGNORE_SPECIALIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return QUALITY_WORK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return NOT_MEETING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return WAS_LATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return INADEQUATE_STATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return DISCREPANCY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ANOTHER_MAN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return OTHER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return getSpecialistCauses; });
/* unused harmony export getCertifiedUserCauses */
var IGNORE_SPECIALIST = 'ignore_specialist';
var QUALITY_WORK = 'quality_work';
var NOT_MEETING = 'not_meeting';

var WAS_LATE = 'was_late';
var INADEQUATE_STATE = 'inadequate_state';
var DISCREPANCY = 'discrepancy';
var ANOTHER_MAN = 'another_man';
var OTHER = 'other';

var getSpecialistCauses = function getSpecialistCauses() {
  return [IGNORE_SPECIALIST, QUALITY_WORK, NOT_MEETING];
};

var getCertifiedUserCauses = function getCertifiedUserCauses() {
  return [WAS_LATE, INADEQUATE_STATE, DISCREPANCY, ANOTHER_MAN, OTHER];
};

/***/ }),

/***/ 1501:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return RETURN_MONEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return REPLACE_SPECIALIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AGAIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return GET_MONEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return getSpecialistSolutions; });
/* unused harmony export getCertifiedUserSolutions */
var RETURN_MONEY = 'return_money';
var REPLACE_SPECIALIST = 'replace_specialist';
var AGAIN = 'again';
var GET_MONEY = 'get_money';

var getSpecialistSolutions = function getSpecialistSolutions() {
  return [RETURN_MONEY, REPLACE_SPECIALIST, AGAIN];
};

var getCertifiedUserSolutions = function getCertifiedUserSolutions() {
  return [RETURN_MONEY, GET_MONEY];
};

/***/ }),

/***/ 1502:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var transformer = exports.transformer = function transformer(rules, source) {
  return Object.keys(rules).reduce(function (target, name) {
    var rule = rules[name];
    switch (typeof rule === 'undefined' ? 'undefined' : _typeof(rule)) {
      case 'string':
        return _extends({}, target, _defineProperty({}, name, source[rule]));
      case 'function':
        return _extends({}, target, _defineProperty({}, name, rule(source, name)));
      default:
        throw new Error('Wrong transformer rule for property: ', name);
    }
  }, {});
};

var transformerFactory = exports.transformerFactory = function transformerFactory(rules) {
  return function (source) {
    return transformer(rules, source);
  };
};

exports.default = transformerFactory;


/***/ }),

/***/ 1503:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export VAT_NULL */
/* unused harmony export VAT_20 */
/* unused harmony export VAT_10 */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VAT_0; });
/* unused harmony export VAT_110 */
/* unused harmony export VAT_120 */
var VAT_NULL = null; // НДС не облагается
var VAT_20 = 20; // НДС 20%
var VAT_10 = 10; // НДС 10%
var VAT_0 = 0; // НДС 0%
var VAT_110 = 110; // расчетный НДС 10/110
var VAT_120 = 120; // расчетный НДС 20/120

/***/ }),

/***/ 1504:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (seconds) {
    seconds = parseInt(seconds, 10);

    if (isNaN(seconds)) {
        throw new TypeError('Invalid value sent to convert-seconds');
    }
    var results = {};
    results.hours = Math.floor(seconds / 60 / 60);
    results.minutes = Math.floor((seconds / 60) % 60);
    results.seconds = Math.floor(seconds % 60);

    return results;
};


/***/ }),

/***/ 1649:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modules_CertifyingSpecialist__ = __webpack_require__(1498);
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  metaInfo: {
    title: 'Стань сертифицированным профессионалом'
  },
  asyncData: function asyncData(_ref) {
    var store = _ref.store;

    return store.dispatch('certifying/fetchAllServices');
  },

  computed: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["c" /* mapGetters */])({
    user: 'auth/getAuthUser',
    isAuthorized: 'auth/isAuthorized',
    services: 'certifying/getAllServicesData'
  }), {
    packages: function packages() {
      return this.services.filter(function (service) {
        return service.is_package;
      });
    },
    singles: function singles() {
      return this.services.filter(function (service) {
        return service.is_package === false;
      });
    }
  }),
  methods: {
    getTransformServiceWorkType: function getTransformServiceWorkType(works) {
      return __WEBPACK_IMPORTED_MODULE_1__modules_CertifyingSpecialist__["b" /* default */].getTransformServiceWorkType(works);
    },
    _handleClickCreateResponse: function _handleClickCreateResponse() {
      if (this.isAuthorized === false) {
        var _$router$resolve = this.$router.resolve({ name: 'certifying.customer.register' }),
            href = _$router$resolve.href;

        this.$localStorage.set('redirect.register', href);
        this.$router.push({ name: 'register' });
      } else {
        this.$router.push({ name: 'certifying.customer.register' });
      }
    }
  }
});

/***/ }),

/***/ 2016:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(2017);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("0de44eeb", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js?sourceMap!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-7f3a5fcb\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Index.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js?sourceMap!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-7f3a5fcb\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Index.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 2017:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(true);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"Index.vue","sourceRoot":""}]);

// exports


/***/ }),

/***/ 2018:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "lm-vs-landing-talent" },
    [
      _c("div", { staticClass: "lm-vs-landing-talent-header vs" }, [
        _c("div", { staticClass: "lm-vs-landing-talent-header-wrap" }, [
          _c("div", { staticClass: "title" }, [
            _vm._v("Зарабатывай больше с Linkmuse")
          ]),
          _vm._v(" "),
          _vm._m(0),
          _vm._v(" "),
          _c(
            "a",
            {
              staticClass: "lm-white-button middle",
              staticStyle: { "min-width": "196px" },
              attrs: { href: "javascript:void(0)" },
              on: { click: _vm._handleClickCreateResponse }
            },
            [_vm._v("\n        Подать заявку\n      ")]
          )
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "lm-vs-landing-talent-line first" }, [
        _vm._m(1),
        _vm._v(" "),
        _c("div", { staticClass: "lm-vs-landing-talent-getting-wrap" }, [
          _c("div", { staticClass: "lm-vs-landing-talent-getting-item" }, [
            _c(
              "svg",
              {
                attrs: {
                  xmlns: "http://www.w3.org/2000/svg",
                  width: "48",
                  height: "48",
                  fill: "none",
                  viewBox: "0 0 48 48"
                }
              },
              [
                _c("path", {
                  attrs: {
                    fill: "#0063DA",
                    d:
                      "M44 2H4a2 2 0 0 0-2 2v40a2 2 0 0 0 2 2h40a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zM5 6a1 1 0 0 1 1-1h6a1 1 0 0 1 0 2H7v5a1 1 0 0 1-2 0V6zm7 37H6a1 1 0 0 1-1-1v-6a1 1 0 1 1 2 0v5h5a1 1 0 1 1 0 2zm13-8a1 1 0 1 1-2 0v-4.08A7.005 7.005 0 0 1 17.08 25H13a1 1 0 0 1 0-2h4.08A7.004 7.004 0 0 1 23 17.08V13a1 1 0 0 1 2 0v4.08A7.004 7.004 0 0 1 30.92 23H35a1 1 0 0 1 0 2h-4.08A7.005 7.005 0 0 1 25 30.92V35zm18 7a1 1 0 0 1-1 1h-6a1 1 0 1 1 0-2h5v-5a1 1 0 1 1 2 0v6zm0-30a1 1 0 0 1-2 0V7h-5a1 1 0 0 1 0-2h6a1 1 0 0 1 1 1v6z"
                  }
                })
              ]
            ),
            _vm._v(" "),
            _c("span", [_vm._v("Съёмка фото")])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "lm-vs-landing-talent-getting-item" }, [
            _c(
              "svg",
              {
                attrs: {
                  xmlns: "http://www.w3.org/2000/svg",
                  width: "48",
                  height: "48",
                  fill: "none",
                  viewBox: "0 0 48 48"
                }
              },
              [
                _c("path", {
                  attrs: {
                    fill: "#0063DA",
                    d:
                      "M42.487 1.817a.997.997 0 0 0-.424-.646c-.223-.15-.498-.205-.759-.15l-5.239 1.07-4.193 8.857L42.77 8.724a1 1 0 0 0 .783-1.162l-1.065-5.745zM12.275 14.947l7.348-1.5 4.193-8.857-7.348 1.5-4.193 8.857zM33.614 2.59l-7.348 1.5-4.193 8.857 7.348-1.5 4.193-8.857zM14.018 6.59L2.697 8.901a1 1 0 0 0-.78 1.18l1.168 5.722a1 1 0 0 0 1.18.779l5.56-1.135 4.193-8.857zM44 19H4a1 1 0 0 0-1 1v26a1 1 0 0 0 1 1h40a1 1 0 0 0 1-1V20a1 1 0 0 0-1-1zM30.537 33.844l-11 7a1.007 1.007 0 0 1-1.018.033A1.001 1.001 0 0 1 18 40V26a1.001 1.001 0 0 1 1.538-.844l11 7a1.003 1.003 0 0 1-.001 1.688z"
                  }
                })
              ]
            ),
            _vm._v(" "),
            _c("span", [_vm._v("Съемка и монтаж видеовизитки")])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "lm-vs-landing-talent-getting-item" }, [
            _c(
              "svg",
              {
                attrs: {
                  xmlns: "http://www.w3.org/2000/svg",
                  width: "48",
                  height: "48",
                  fill: "none",
                  viewBox: "0 0 48 48"
                }
              },
              [
                _c("path", {
                  attrs: {
                    fill: "#0063DA",
                    d:
                      "M46 1a1 1 0 0 0-1 1v5h-6V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1 1v5H3V2a1 1 0 1 0-2 0v44a1 1 0 1 0 2 0v-5h6v5a1 1 0 0 0 1 1h28a1 1 0 0 0 1-1v-5h6v5a1 1 0 1 0 2 0V2a1 1 0 0 0-1-1zM9 39H3v-6h6v6zm0-8H3v-6h6v6zm0-8H3v-6h6v6zm0-8H3V9h6v6zm28 10H11v-2h26v2zm8 14h-6v-6h6v6zm0-8h-6v-6h6v6zm0-8h-6v-6h6v6zm0-8h-6V9h6v6z"
                  }
                })
              ]
            ),
            _vm._v(" "),
            _c("span", [_vm._v("Монтаж шоурила")])
          ])
        ]),
        _vm._v(" "),
        _c(
          "a",
          {
            staticClass: "lm-primary-button middle",
            staticStyle: { "min-width": "196px" },
            attrs: { href: "javascript:void(0)" },
            on: { click: _vm._handleClickCreateResponse }
          },
          [_vm._v("\n      Подать заявку\n    ")]
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "lm-vs-landing-talent-line cooperation" }, [
        _vm._m(2),
        _vm._v(" "),
        _vm._m(3),
        _vm._v(" "),
        _c(
          "a",
          {
            staticClass: "lm-primary-button middle",
            staticStyle: { "min-width": "196px" },
            attrs: { href: "javascript:void(0)" },
            on: { click: _vm._handleClickCreateResponse }
          },
          [_vm._v("\n      Подать заявку\n    ")]
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "lm-vs-landing-talent-line first no-mt" }, [
        _vm._m(4),
        _vm._v(" "),
        _c("div", { staticClass: "lm-vs-landing-talent-getting-wrap" }, [
          _c("div", { staticClass: "lm-vs-landing-talent-getting-item" }, [
            _c(
              "svg",
              {
                attrs: {
                  xmlns: "http://www.w3.org/2000/svg",
                  width: "48",
                  height: "48",
                  fill: "none",
                  viewBox: "0 0 48 48"
                }
              },
              [
                _c("path", {
                  attrs: {
                    fill: "#0063DA",
                    d:
                      "M39.969 16.969a.5.5 0 0 0-.5.5v4.625a.5.5 0 0 1-.5.5h-1.813a.5.5 0 0 1-.5-.5V.5a.5.5 0 0 0-.5-.5h-1.812a.5.5 0 0 0-.5.5v1.813a.5.5 0 0 1-.5.5H14.656a.5.5 0 0 1-.5-.5V.5a.5.5 0 0 0-.5-.5h-1.812a.5.5 0 0 0-.5.5v21.594a.5.5 0 0 1-.5.5H9.03a.5.5 0 0 1-.5-.5v-4.625a.5.5 0 0 0-.5-.5H6.22a.5.5 0 0 0-.5.5V30.53a.5.5 0 0 0 .5.5h5.897a.5.5 0 0 1 .3.1l8.72 6.541a.5.5 0 0 1 .01.793l-8.856 6.984a.5.5 0 0 0-.09.692l1.086 1.45a.5.5 0 0 0 .71.093l9.695-7.621a.5.5 0 0 1 .618 0l9.696 7.62a.5.5 0 0 0 .709-.092l1.086-1.45a.5.5 0 0 0-.09-.692l-8.857-6.984a.5.5 0 0 1 .01-.793l8.721-6.54a.5.5 0 0 1 .3-.1h5.897c.276 0 .5-.232.5-.508V17.476a.507.507 0 0 0-.5-.507H39.97zM33.344 5.625a.5.5 0 0 1 .5.5v7.531a.5.5 0 0 1-.5.5H14.656a.5.5 0 0 1-.5-.5V6.125a.5.5 0 0 1 .5-.5h18.688zM14.156 17.469a.5.5 0 0 1 .5-.5h18.688a.5.5 0 0 1 .5.5v4.625a.5.5 0 0 1-.5.5H14.656a.5.5 0 0 1-.5-.5v-4.625zM24.3 36.08a.5.5 0 0 1-.6 0l-5.532-4.149a.5.5 0 0 1 .3-.9h11.064a.5.5 0 0 1 .3.9l-5.532 4.15z"
                  }
                })
              ]
            ),
            _vm._v(" "),
            _c("span", [_vm._v("Своя либо снятая в аренду студия")])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "lm-vs-landing-talent-getting-item" }, [
            _c(
              "svg",
              {
                attrs: {
                  xmlns: "http://www.w3.org/2000/svg",
                  width: "48",
                  height: "48",
                  fill: "none",
                  viewBox: "0 0 48 48"
                }
              },
              [
                _c("path", {
                  attrs: {
                    fill: "#0063DA",
                    d:
                      "M20.655 24.74c5.77 0 10.448-4.791 10.448-10.703 0-5.911-4.678-10.704-10.448-10.704-5.771 0-10.45 4.793-10.45 10.704 0 5.911 4.679 10.704 10.45 10.704zm3.719-6.48c.668 0 1.123.652.679 1.15-.893 1.003-2.482 1.67-4.293 1.67-1.81 0-3.4-.667-4.292-1.67-.445-.498.01-1.15.678-1.15h7.228zm20.368 18.08l-9.56 8.161a.723.723 0 0 1-.971-.045l-4.76-4.877a.753.753 0 0 1 0-1.044l1.02-1.043a.71.71 0 0 1 1.018 0l2.711 2.776a1 1 0 0 0 1.365.062l7.332-6.258a.71.71 0 0 1 1.014.094l.923 1.134a.753.753 0 0 1-.093 1.04zM28.33 40.727l.44.45c.57.585.235 1.564-.578 1.65-2.11.224-4.603.367-7.537.367-10.075 0-15.005-1.686-16.813-2.51-.466-.213-.842-.82-.842-1.343v-3.529c0-5.287 3.93-9.673 8.944-10.26a.82.82 0 0 1 .502.14c2.312 1.715 5.143 2.739 8.209 2.739s5.896-1.024 8.208-2.738a.82.82 0 0 1 .503-.141c5.014.587 8.943 4.973 8.943 10.26a.13.13 0 0 1-.045.099l-2.602 2.221a1 1 0 0 1-1.365-.062l-1.687-1.728a2.264 2.264 0 0 0-3.26 0l-1.02 1.044c-.9.922-.9 2.42 0 3.34z"
                  }
                }),
                _vm._v(" "),
                _c("path", {
                  attrs: {
                    fill: "#0063DA",
                    d:
                      "M15.833 19.024a1 1 0 0 1 1-1h8.5a1 1 0 0 1 1 1v1.586a1 1 0 0 1-1 1h-8.5a1 1 0 0 1-1-1v-1.586z"
                  }
                })
              ]
            ),
            _vm._v(" "),
            _c("span", [_vm._v("Статус Самозанятости, ИП или ЮР лица")])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "lm-vs-landing-talent-getting-item" }, [
            _c(
              "svg",
              {
                attrs: {
                  xmlns: "http://www.w3.org/2000/svg",
                  width: "48",
                  height: "48",
                  fill: "none",
                  viewBox: "0 0 48 48"
                }
              },
              [
                _c("path", {
                  attrs: {
                    fill: "#0063DA",
                    d:
                      "M25.406 0C24.63 0 24 .629 24 1.406V5.72a1.405 1.405 0 1 0 2.813 0V1.406C26.813.63 26.183 0 25.405 0zM37.65 3.318c-.549-.55-1.439-.55-1.988 0l-2.813 2.813a1.406 1.406 0 1 0 1.989 1.988l2.813-2.812c.549-.55.549-1.44 0-1.989zM45.094 19.781H42.28a1.405 1.405 0 1 0 0 2.813h2.813a1.405 1.405 0 1 0 0-2.813zM5.719 19.781H2.906a1.405 1.405 0 1 0 0 2.813H5.72a1.405 1.405 0 1 0 0-2.813zM17.963 6.13L15.15 3.319a1.406 1.406 0 1 0-1.988 1.989l2.813 2.812a1.406 1.406 0 1 0 1.988-1.988zM9.16 10.086L6.348 8.68a1.407 1.407 0 0 0-1.258 2.515l2.812 1.407a1.406 1.406 0 1 0 1.258-2.516zM43.54 9.309a1.408 1.408 0 0 0-1.888-.63l-2.812 1.407a1.406 1.406 0 1 0 1.258 2.516l2.812-1.407a1.406 1.406 0 0 0 .63-1.886zM38.063 29.625V16.969a2.813 2.813 0 1 0-5.626 0v-2.813a2.812 2.812 0 0 0-5.624 0v-2.812a2.812 2.812 0 1 0-5.625 0v2.812a2.812 2.812 0 0 0-5.625 0v2.955c.463-.067.924-.142 1.406-.142H24a5.63 5.63 0 0 1 5.625 5.625c0 2.518-1.674 4.63-3.96 5.344.709 1.354 1.148 2.868 1.148 4.5a1.406 1.406 0 1 1-2.813 0 7.04 7.04 0 0 0-7.031-7.032H24a2.813 2.813 0 0 0 0-5.625h-7.031a7.04 7.04 0 0 0-7.032 7.032v2.812a9.863 9.863 0 0 0 5.626 8.896v3.854a2.813 2.813 0 0 0-2.813 2.813v1.406c0 .776.63 1.406 1.406 1.406h19.688c.776 0 1.406-.63 1.406-1.406v-1.407a2.813 2.813 0 0 0-2.813-2.812v-3.854a9.863 9.863 0 0 0 5.626-8.896z"
                  }
                })
              ]
            ),
            _vm._v(" "),
            _c("span", [_vm._v("Профессионализм и мотивация")])
          ])
        ]),
        _vm._v(" "),
        _c(
          "a",
          {
            staticClass: "lm-primary-button middle",
            staticStyle: { "min-width": "236px" },
            attrs: { href: "javascript:void(0)" },
            on: { click: _vm._handleClickCreateResponse }
          },
          [_vm._v("\n      начать зарабатывать\n    ")]
        )
      ]),
      _vm._v(" "),
      _vm.packages.length
        ? [
            _c("div", { staticClass: "lm-vs-landing-talent-line" }, [
              _c("div", { staticClass: "title" }, [_vm._v("Пакеты:")]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "lm-vs-landing-talent-service-wrap" },
                _vm._l(_vm.packages, function(service) {
                  return _c(
                    "div",
                    {
                      key: service.id,
                      staticClass: "lm-vs-landing-talent-service-item"
                    },
                    [
                      _c("img", {
                        attrs: { src: service.cover, alt: service.name }
                      }),
                      _vm._v(" "),
                      _c("div", { staticClass: "item-title" }, [
                        _vm._v(_vm._s(_vm._f("truncate")(service.name, 20)))
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "desc" }, [
                        _vm._v(
                          _vm._s(_vm._f("truncate")(service.description, 100))
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "item-footer" }, [
                        _c("span", { staticClass: "price" }, [
                          _vm._v(_vm._s(_vm._f("currency")(service.price, "₽")))
                        ])
                      ])
                    ]
                  )
                }),
                0
              )
            ])
          ]
        : _vm._e(),
      _vm._v(" "),
      _vm.singles.length
        ? [
            _c("div", { staticClass: "lm-vs-landing-talent-line last" }, [
              _c("div", { staticClass: "title" }, [
                _vm._v("Отдельные услуги:")
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "lm-vs-landing-talent-service-wrap" },
                _vm._l(_vm.singles, function(service) {
                  return _c(
                    "div",
                    {
                      key: service.id,
                      staticClass: "lm-vs-landing-talent-service-item"
                    },
                    [
                      _c("img", {
                        attrs: { src: service.cover, alt: service.name }
                      }),
                      _vm._v(" "),
                      _c("div", { staticClass: "item-title" }, [
                        _vm._v(_vm._s(_vm._f("truncate")(service.name, 20)))
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "desc" }, [
                        _vm._v(
                          _vm._s(_vm._f("truncate")(service.description, 100))
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "item-footer" }, [
                        _c("span", { staticClass: "price" }, [
                          _vm._v(_vm._s(_vm._f("currency")(service.price, "₽")))
                        ])
                      ])
                    ]
                  )
                }),
                0
              )
            ])
          ]
        : _vm._e(),
      _vm._v(" "),
      _c("lm-main-footer", { staticClass: "footer-nav" })
    ],
    2
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "desc" }, [
      _vm._v(
        "Вы получаете регулярные заказы и возможность выбирать удобный для себя график. Работая по фиксированной стоимости за съемки до 30 минут, вы сможете совмещать несколько заказов сразу и зарабатывать больше.\n        "
      ),
      _c("br"),
      _c("br"),
      _vm._v(
        "\n        Условия очень простые и не требуют сложного оборудования и мастерских знаний фотошопа. От вас потребуется лишь хорошая камера и свет, плюс легкая постобработка кадров и цветокоррекция.\n      "
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "title" }, [
      _vm._v("Выберите подходящие "),
      _c("br"),
      _vm._v(" направления:")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "title" }, [
      _vm._v("При сотрудничестве "),
      _c("br"),
      _vm._v(" вы получите:")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "lm-vs-landing-cooperation-wrap" }, [
      _c("div", { staticClass: "lm-vs-landing-cooperation-item" }, [
        _c("span", [_vm._v("Дополнительный источник дохода")])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "lm-vs-landing-cooperation-item" }, [
        _c("span", [_vm._v("Гарантированные онлайн-выплаты")])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "lm-vs-landing-cooperation-item" }, [
        _c("span", [_vm._v("Индивидуальный график")])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "lm-vs-landing-cooperation-item" }, [
        _c("span", [_vm._v("Техническую поддержку")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "title" }, [
      _vm._v("Вы нам подходите, "),
      _c("br"),
      _vm._v(" если у вас есть:")
    ])
  }
]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-7f3a5fcb", esExports)
  }
}

/***/ })

});
//# sourceMappingURL=96.build.d1cbf7f1ec431871f848.js.map