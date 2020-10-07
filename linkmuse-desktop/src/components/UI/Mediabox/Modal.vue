<template>
  <custom-modal v-model="value" @input="closeModal()" class="modal__photo">
    <div tabindex="-1" @keyup="_handleKeyUp" ref="modal" v-if="item">
      <div class="modal__photo--wrap" id="modal__photo__wrap" style="position: relative" @click="closeModal()">
        <div class="modal__photo--outer" :class="[{'modal__content_with-footer' : hasThumbs && thumbs}]" style="margin: 0 68px;">
          <div class="photo__modal--close" @click="closeModal()" style="top: 0; right: 0;"><span class="lm-close-white"></span></div>

          <div class="modal__photo--content">
            <div v-show="loading" class="photo__loading" v-if="type === PHOTO && loading"></div>
            <img :src="src" class="modal__photo--img" v-if="type === PHOTO && !loading">
            <div v-html="player" v-if="type === VIDEO"></div>

            <template v-if="(type === PHOTO)">
              <template v-if="(modal.index !== modal.album.length())">
              <div class="modal__photo--control modal__photo--control-next"  @click.stop.prevent="nextMedia()"></div>
              </template>
              <template v-if="(modal.index !== 1)">
                <div class="modal__photo--control modal__photo--control-prev" @click.stop.prevent="prevMedia()"></div>
              </template>
            </template>
          </div>

          <template v-if="(hasThumbs && thumbs && Object.keys(thumbs).length > 1)">
            <div class="modal__photo--footer">
              <div :class="['modal__photo--media', { active: (modal.index === thumb['index'] ) }]" v-for="thumb in thumbs" @click="_handleClickShowMediaByIndex(thumb['index'])">
                <img class="LazyImage__image" :src="thumb['item']['paths']['128x128']">
              </div>
            </div>
          </template>

          <div class="modal__photo--nav">
            <template v-if="(modal.index !== modal.album.length())">
              <div :class="['modal__photo--btn', { 'modal__photo__btn--next' : (type === PHOTO), 'modal__video__btn--next': (type === VIDEO) }]" @click.stop.prevent="nextMedia()" style="right: 0">
                <span class="lm-icon-arrow-2"></span>
              </div>
            </template>

            <template v-if="(modal.index !== 1)">
              <div :class="['modal__photo--btn', { 'modal__photo__btn--prev' : (type === PHOTO), 'modal__video__btn--prev': (type === VIDEO) } ]" @click.stop.prevent="prevMedia()" style="left: 0">
                <span class="lm-icon-arrow-2"></span>
              </div>
            </template>
          </div>
        </div>
      </div>
    </div>
  </custom-modal>
</template>

<script>
import { PHOTO, VIDEO } from './utils/Types.js'
import modal from './utils/Modal.js'
import { on, off } from '@utils'

const WIDTH_VIDEO = 790
const HEIGHT_VIDEO = 400

export default {
  data () {
    return {
      modal,
      PHOTO,
      VIDEO,
      style: null,
      loading: false
    }
  },
  computed: {
    value: {
      get () {
        return this.modal.value
      },
      set (val) {
        this.modal.value = val
      }
    },
    item () {
      if (!this.modal.media) return
      return this.modal.media['item']
    },
    type () {
      if (!this.modal.media) return
      return this.modal.media['type']
    },
    src () {
      if (!this.modal.media) return
      let src = this.modal.media['src']

      if (this.type === PHOTO && !src) throw new Error('no source PHOTO')
      return src
    },
    player () {
      if (!this.modal.media) return
      let player = this.modal.media['player']

      if (this.type === VIDEO && !player) throw new Error('no source player')
      return player
    },
    hasThumbs () {
      if (!this.modal.media) return
      return this.modal.media['thumbs']
    },
    thumbs () {
      if (!this.modal.media) return

      const items = this.modal['items']
      const { items: allowed, name: albumName } = this.modal.album

      return Object.keys(items)
        .filter(key => allowed.includes(key))
        .reduce((obj, key) => {
          items[key]['index'] = this.modal.getMediaIndex(albumName, key)

          obj[key] = items[key]
          return obj
        }, {})
    }
  },
  watch: {
    item () {
      //off(window, 'resize')

      if (!this.item) return

      if (this.type === PHOTO) {
        this.loading = true

        let image = new Image()
        image.src = this.src

        image.onload = _ => {
          //this.resizeImage(image)
          this.loading = false
        }

        //on(window, 'resize', () => { this.resizeImage(image) })
      } if (this.type === VIDEO) {
        this.style = { width: `${WIDTH_VIDEO}px`, height: `${HEIGHT_VIDEO}px` }
      } else this.style = null

      this.$nextTick(() => {
        this.setFocusModal()
      })
    }
  },
  methods: {
    setFocusModal () {
      this.$refs.modal.focus()
    },
    _handleKeyUp (e) {
      if (e.keyCode === 39 || e.keyCode === 40) { this.nextMedia() }
      if (e.keyCode === 37 || e.keyCode === 38) { this.prevMedia() }
    },
    closeModal () {
      this.modal.value = false
      this.modal.close()
    },
    nextMedia () {
      this.modal.changeMedia(this.modal.index + 1)
    },
    prevMedia () {
      this.modal.changeMedia(this.modal.index - 1)
    },
    _handleClickShowMediaByIndex (index) {
      this.modal.changeMedia(index)
    },
    resizeImage (image) {
      this.getSizeImage(image).then(({ width, height }) => {
        this.style = { width: `${width}px`, height: `${height}px` }
      })
    },
    getSizeImage (image) {
      return new Promise((resolve, reject) => {
        if (!image) reject()

        let maxWidth = window.innerWidth - 80
        let maxHeight = window.innerHeight - 108
        let widthImg = image.width
        let heightImg = image.height
        let ratio = 0
        let width = image.width
        let height = image.height

        if (widthImg > maxWidth) {
          ratio = maxWidth / widthImg
          width = maxWidth
          height = heightImg * ratio
          heightImg = heightImg * ratio
          widthImg = widthImg * ratio
        }

        if (heightImg > maxHeight) {
          ratio = maxHeight / heightImg
          height = maxHeight
          width = widthImg * ratio
          widthImg = widthImg * ratio
          heightImg = heightImg * ratio
        }

        resolve({ width, height })
      })
    }
  }
}
</script>

<style lang="sass">
    .modal__photo.fade.in
        display: -webkit-box !important
        display: -webkit-flex !important
        display: -moz-box !important
        display: -ms-flexbox !important
        display: flex !important
        -webkit-box-orient: horizontal
        -webkit-box-direction: normal
        -webkit-flex-direction: row
        -moz-box-orient: horizontal
        -moz-box-direction: normal
        -ms-flex-direction: row
        flex-direction: row
        -webkit-flex-wrap: nowrap
        -ms-flex-wrap: nowrap
        flex-wrap: nowrap
        -webkit-box-pack: center
        -webkit-justify-content: center
        -moz-box-pack: center
        -ms-flex-pack: center
        justify-content: center
        -webkit-align-content: stretch
        -ms-flex-line-pack: stretch
        align-content: stretch
        -webkit-box-align: center
        -webkit-align-items: center
        -moz-box-align: center
        -ms-flex-align: center
        align-items: center
</style>
