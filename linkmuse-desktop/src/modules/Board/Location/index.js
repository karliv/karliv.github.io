import { ARCHIVED, CREATED, DRAFT, MODERATION, PUBLISHED, REJECTED } from './Enums/LocationState'

class Location {
  constructor () {
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

  getLocationStateClass (status) {
    let item = this.state.classes[status]
    return item || ''
  }
}

export default new Location
