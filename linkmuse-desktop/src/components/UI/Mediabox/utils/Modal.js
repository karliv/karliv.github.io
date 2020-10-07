import { Media } from './Media.js'
import { Album } from './Album.js'

class Modal {
  constructor () {
    this.value = false
    this.inited = false

    this.items = {}
    this.albums = {}
    this.media = null

    this.index = null // Current media index
    this.album = null // Current album
  }

  init () {
    this.value = true

    if (this.inited) {
      this.media = null
      return
    }

    this.inited = true
  }

  start (album, uid) {
    this.init()
    this.showMedia(album, uid)
  }

  addToAlbum (name, type, item, src = null, player = null, thumbs = false) {
    let media = new Media(type, item, src, player, thumbs)

    this.items[media.uid] = media

    if (!name) {
      return media.uid
    }

    if (!this.albums[name]) {
      this.albums[name] = new Album(name)
    }

    this.albums[name].addMedia(media.uid)
    return media.uid
  }

  getAlbum (name) {
    return this.albums[name]
  }

  getMedia (uid) {
    return this.items[uid]
  }

  changeMedia (index) {
    if (!this.album) return

    let uid = this.album.getMedia(index)

    if (!uid) return

    this.showMedia(this.album.name, uid)
  }

  updateNav (albumName, uid) {
    let album = this.getAlbum(albumName)
    if (!album) return

    this.album = album

    let index = album.getMediaIndex(uid)
    if (!index) return

    this.index = index
  }

  getMediaIndex (albumName, uid) {
    let album = this.getAlbum(albumName)
    if (!album) return

    return album.getMediaIndex(uid)
  }

  showMedia (album, uid) {
    let media = this.getMedia(uid)

    if (!media) return

    this.media = media

    this.updateNav(album, uid)
  }

  close () {
    this.media = null
  }

  destroyMedia (album, uid) {
    let index = this.albums[album].items.indexOf(uid)

    if (index > -1) {
      this.albums[album].items.splice(index, 1)
      delete this.items[uid]
    }
  }
}

export default new Modal()
