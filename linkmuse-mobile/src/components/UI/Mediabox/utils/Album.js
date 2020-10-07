export class Album {
  constructor (name) {
    this.name = name
    this.items = []
  }

  addMedia (uid) {
    this.items.push(uid)
  }

  getMediaIndex (uid) {
    for (var i = 0; i < this.items.length; i++) {
      if (this.items[i] === uid) {
        return i + 1
      }
    }
    return 0
  }

  getMedia (index) {
    if (this.items.length < index) return
    return this.items[index - 1]
  }

  length () {
    return this.items.length
  }
}
