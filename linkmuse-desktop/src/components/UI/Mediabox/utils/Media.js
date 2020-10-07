import { generateUUID } from '@utils'

export class Media {
  constructor (type, item, src, player, thumbs) {
    this.type = type
    this.item = item
    this.src = src
    this.player = player
    this.thumbs = thumbs
    this.uid = this.getUid()
  }

  getUid () {
    return generateUUID()
  }
}
