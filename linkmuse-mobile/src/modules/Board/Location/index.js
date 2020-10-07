import { ARCHIVED, CREATED, DRAFT, MODERATION, PUBLISHED, REJECTED } from './Enums/LocationState'

class Location {
  constructor () {
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

  getLocationStateClass (status) {
    let item = this.state.classes[status]
    return item || ''
  }
}

export default new Location
