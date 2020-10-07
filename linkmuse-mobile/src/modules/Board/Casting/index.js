import { MALE, FEMALE } from '@modules/User/Enums/Sex'
import { CREATED, REJECTED, MODERATION, PUBLISHED, DRAFT, ARCHIVED } from './Enums/CastingState'

class Casting {
  constructor () {
    this.sex = {
      [MALE]: 'male',
      [FEMALE]: 'female'
    }

    this.state = {
      classes: {
        [CREATED]: null,
        [DRAFT]: 'color_gray-3',
        [MODERATION]: 'color_support-3',
        [REJECTED]: 'color_support-1',
        [PUBLISHED]: null,
        [ARCHIVED]: 'color_gray-3'
      }
    }
  }

  getAmountSemanticCatalog ({ amount, available, currency, type }) {
    if (available === false) return false
    if (available === true && (typeof amount === 'undefined' || Number(amount) === 0)) return true
    return { amount, currency: currency['symbol'], type: type['text'] }
  }

  getCastingStateClass (status) {
    let item = this.state.classes[status]
    return item || ''
  }
}

export default new Casting
