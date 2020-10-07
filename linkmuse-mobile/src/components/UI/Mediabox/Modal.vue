<template>
  <mt-popup :blur="true" :lockScroll="true" v-model="value" class="lm-m-modal-media">
    <template v-if="item">
      <v-touch tag="div" class="lm-m-modal-media-wrap" tabindex="-1" @keyup="_handleKeyUp" @swipeleft="_handleSwipeLeft"
               @swiperight="_handleSwipeRight" @swipetop="_handleSwipeTop" ref="modal" @tap="_handleTapModalWrap">
        <div id="modal__photo__wrap" style="width: 100%; text-align: center">
          <div class="lm-m-modal-wrap-content">
            <div v-show="loading" class="photo__loading" v-if="type === PHOTO && loading"></div>
            <img @click.stop.prevent :src="src" class="modal__photo--img" v-if="type === PHOTO && !loading" :style="style">
            <div @click.stop.prevent class="response-ratio" v-html="player" v-if="type === VIDEO"></div>
          </div>
        </div>
      </v-touch>

      <template v-if="(hasThumbs && thumbs && Object.keys(thumbs).length > 1)">
        <div class="modal__photo--footer" @click.stop.prevent>
          <div :class="['modal__photo--media', { active: (modal.index === thumb['index'] ) }]" v-for="thumb in thumbs" @click="_handleClickShowMediaByIndex(thumb['index'])">
            <img class="LazyImage__image" :src="thumb['item']['paths']['128x128']">
          </div>
        </div>
      </template>
    </template>
  </mt-popup>
</template>

<script>

  import { has, on, off } from '@utils'
  import modal from './utils/Modal.js'
  import { PHOTO, VIDEO } from './utils/Types.js'

  const WIDTH_VIDEO = 790
  const HEIGHT_VIDEO = 400

  // CONST PADDING_

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

        if (this.type === PHOTO && !src) throw new Error('No source photo')
        return src
      },
      player () {
        if (!this.modal.media) return
        let player = this.modal.media['player']

        if (this.type === VIDEO && !player) throw new Error('No source player')
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
        off(window, 'resize')

        if (!this.item) return

        if (this.type === PHOTO) {
          this.loading = true

          let image = new Image()
          image.src = this.src

          image.onload = _ => {
            this.resizeImage(image)
            this.loading = false
          }

          on(window, 'resize', () => { this.resizeImage(image) })
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
        // this.$refs.modal.focus()
      },
      _handleKeyUp (e) {
        if (e.keyCode === 39 || e.keyCode === 40) { this.nextMedia() }
        if (e.keyCode === 37 || e.keyCode === 38) { this.prevMedia() }
      },
      _handleTapModalWrap () {
        this.closeModal()
      },
      _handleSwipeLeft () {
        this.nextMedia()
      },
      _handleSwipeRight () {
        this.prevMedia()
      },
      _handleSwipeTop () {
        this.closeModal()
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

          const PADDING_WIDTH = 0
          const PADDING_HEIGHT = 200

          let ratio = 0
          let maxWidth = (window.innerWidth - PADDING_WIDTH)
          let maxHeight = (window.innerHeight - PADDING_HEIGHT)
          let widthImg = image.width
          let heightImg = image.height
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
  .response-ratio
    position: relative
    overflow: hidden
    padding-top: 56.25%
    @media screen and (orientation:landscape)
      padding-top: 36.25%
    iframe
      position: absolute
      top: 0
      left: 0
      width: 100%
      height: 100%
      border: 0
</style>
