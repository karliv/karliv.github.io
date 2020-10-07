import { MALE, FEMALE } from '@modules/User/Enums/Sex'
import { CREATED, REJECTED, MODERATION, PUBLISHED, DRAFT, ARCHIVED } from './Enums/CastingState'

class Casting {
  constructor () {
    this.sex = {
      [FEMALE]: 'female',
      [MALE]: 'male'
    }

    this.state = {
      classes: {
        [CREATED]: null,
        [DRAFT]: 'd-card__status_casting_draft',
        [MODERATION]: 'd-card__status_casting_moderation',
        [REJECTED]: 'd-card__status_casting_refused',
        [PUBLISHED]: 'd-card__status_casting_published',
        [ARCHIVED]: 'd-card__status_casting_archive'
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
