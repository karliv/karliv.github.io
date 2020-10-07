import { PHOTO, VIDEO, MEASUREMENT } from './Enums/Services'

import { INDIVIDUAL_ENTREPRENEUR, ENTITY } from './Enums/Types'

import {
  NOT_PAID,
  PAID,
  MATCH_MEETING,
  WAIT_CONFIRM_MEETING_CLIENT,
  AGREED_MEETING,
  WAIT_WORK,
  WAIT_CONFIRM_WORK_CLIENT,
  FINALIZING,
  FINISHED,
  CANCELED } from './Enums/OrderStatuses' // Диспут ( может быть в любом статусе)

import {
  PAYMENT_CUSTOMER,
  PAYMENT_SPECIALIST,
  FINALIZING as FINALIZING_DISPUTE,
  REFUSE_FINALIZING,
  SEPARATE_PAYMENT,
  REFUSE_DISPUTE } from './Enums/DisputeStatuses'

import {
  IGNORE_SPECIALIST,
  QUALITY_WORK,
  NOT_MEETING,
  WAS_LATE,
  INADEQUATE_STATE,
  DISCREPANCY,
  ANOTHER_MAN, OTHER } from './Enums/DisputeCauses'

import { RETURN_MONEY, REPLACE_SPECIALIST, AGAIN, GET_MONEY } from './Enums/DisputeSolutions'

import { VAT_NULL, VAT_20, VAT_10, VAT_0, VAT_110, VAT_120 } from './Enums/VAT'

import { transformerFactory } from 'simple-object-transformer'

const DEFAULT_SPECIALIST_TYPE = 'ИП'
const DEFAULT_CLASS_ORDER = 'default'
const DEFAULT_STATUS_ORDER = 'Необработанные'
const DEFAULT_WORK = '-'

const DISPUTE = 'dispute'
const DEFAULT_DISPUTE_STATUS = ' Нет решения'
const DEFAULT_DISPUTE_CAUSE = ''
const DEFAULT_DISPUTE_SOLUTION = ''

export const DEFAULT_VAT = 'НДС не облагается'

const convert = require('convert-seconds')

const RULES = Object.freeze({
  [PHOTO]: (context) => (context.photo) ? `Фото (${context.photo.min})` : null,
  [VIDEO]: (context) => (context.video) ? `Видео-визитка (${convert(context.video.duration).minutes} мин)` : null,
  [MEASUREMENT]: (context) => (context.measurement) ? `Обмер` : null
})

class CertifyingSpecialist {
  constructor () {
    this.types = {
      [INDIVIDUAL_ENTREPRENEUR]: 'ИП',
      [ENTITY]: 'Юр. лицо'
    }

    this.service = {
      works: {
        [PHOTO]: 'Фото',
        [VIDEO]: 'Видео',
        [MEASUREMENT]: 'Обмер'
      }
    }

    this.order = {
      card: {
        classes: {
          [NOT_PAID]: 'not_paid',
          [PAID]: 'untreated',
          [MATCH_MEETING]: 'agreement',
          [WAIT_CONFIRM_MEETING_CLIENT]: 'agreement',
          [AGREED_MEETING]: 'meeting',
          [WAIT_WORK]: 'job',
          [WAIT_CONFIRM_WORK_CLIENT]: 'job',
          [FINALIZING]: 'job',
          [FINISHED]: 'finished',
          [CANCELED]: 'canceled',
          [DISPUTE]: 'dispute'
        },
        statuses: {
          [NOT_PAID]: 'Неоплаченный',
          [PAID]: 'Необработанный',
          [MATCH_MEETING]: 'Согласование встречи',
          [WAIT_CONFIRM_MEETING_CLIENT]: 'Согласование встречи',
          [AGREED_MEETING]: 'Встреча',
          [WAIT_WORK]: 'В работе',
          [WAIT_CONFIRM_WORK_CLIENT]: 'Подтверждение работы',
          [FINALIZING]: 'На доработке',
          [FINISHED]: 'Завершенный',
          [CANCELED]: 'Отмененный',
          [DISPUTE]: 'Диспут'
        }
      }
    }

    this.dispute = {
      statuses: {
        [PAYMENT_CUSTOMER]: 'Выплата клиенту',
        [PAYMENT_SPECIALIST]: 'Выплата специалисту',
        [FINALIZING_DISPUTE]: 'Доработка заказа',
        [REFUSE_FINALIZING]: 'Отказ в доработке',
        [SEPARATE_PAYMENT]: 'Раздельная выплата(сумма Клиенту, сумма СС)',
        [REFUSE_DISPUTE]: 'Отказ в диспуте'
      },
      causes: {
        [IGNORE_SPECIALIST]: 'Специалист меня игнорирует',
        [QUALITY_WORK]: 'Качество работы специалиста меня не устраивает',
        [NOT_MEETING]: 'Встреча со специалистом не состоялась',
        [WAS_LATE]: 'Опоздал/неявка',
        [INADEQUATE_STATE]: 'Неадекватное поведение, невменяемое психическое состояние',
        [DISCREPANCY]: 'Нарушение правил верификации',
        [ANOTHER_MAN]: 'Пришел другой человек',
        [OTHER]: 'Другое'
      },
      solutions: {
        [RETURN_MONEY]: 'Вернуть деньги заказчику',
        [REPLACE_SPECIALIST]: 'Заменить специалиста на другого',
        [AGAIN]: 'Провести верификацию еще раз',
        [GET_MONEY]: 'Получить обратно всю сумму оплаты или ее часть'
      }
    }

    this.VAT = {
      [VAT_0]: 'НДС 0%'
    }

    // this.VAT = {
    //   [VAT_NULL]: 'НДС не облагается',
    //   [VAT_20]: 'НДС 20%',
    //   [VAT_10]: 'НДС 10%',
    //   [VAT_0]: 'НДС 0%',
    //   [VAT_110]: 'расчетный НДС 10/110',
    //   [VAT_120]: 'расчетный НДС 20/120'
    // }
  }

  getTypeCertifyingSpecialist (type) {
    let item = this.types[type]
    return item || DEFAULT_SPECIALIST_TYPE
  }

  getOrderStatusClass (status) {
    let item = this.order.card.classes[status]
    return item || DEFAULT_CLASS_ORDER
  }

  getOrderStatusTranslate (status) {
    let item = this.order.card.statuses[status]
    return item || DEFAULT_STATUS_ORDER
  }

  getServiceWorkTranslate (type) {
    let item = this.service.works[type]
    return item || DEFAULT_WORK
  }

  getTransformServiceWorkType (object) {
    if (!object) return

    const transformer = transformerFactory(RULES)
    const result = transformer(Object.freeze(object))

    // Removed empty value in transform object
    Object.keys(result).forEach(k => (!result[k] && result[k] !== undefined) && delete result[k])
    return result
  }

  getDisputeStatusTranslate (status) {
    let item = this.dispute.statuses[status]
    return item || DEFAULT_DISPUTE_STATUS
  }

  getDisputeCauseTranslate (cause) {
    let item = this.dispute.causes[cause]
    return item || DEFAULT_DISPUTE_CAUSE
  }

  getDisputeSolutionsTranslate (solution) {
    let item = this.dispute.solutions[solution]
    return item || DEFAULT_DISPUTE_SOLUTION
  }

  getRatingClass (rating) {
    switch (true) {
      case (rating >= 4):
        return 'green'
      case (rating >= 3 && rating < 4):
        return 'yellow'
      case (rating < 3):
        return 'red'
      default:
        return 'gray'
    }
  }

  getVATTranslate (vat) {
    let item = this.VAT[vat]
    return item || DEFAULT_VAT
  }
}

export default new CertifyingSpecialist()
