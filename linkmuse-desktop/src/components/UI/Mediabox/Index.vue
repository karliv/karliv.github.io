
<script>
import modal from './utils/Modal.js'

import { PHOTO, VIDEO } from './utils/Types.js'

export default {
  render (h) {
    return h('a', {
      attrs: {
        href: 'javascript:void(0)'
      },
      on: {
        click: (e) => {
          this._handleClick()
        }
      }
    }, this.$slots.default)
  },
  props: {
    album: {
      type: String,
      default: 'default'
    },
    media: {
      type: Object,
      required: true,
      default: {}
    },
    type: {
      type: String,
      required: true,
      validator: value => [ PHOTO, VIDEO ].indexOf(value) !== -1
    },
    src: {
      type: String
    },
    player: {
      type: String
    },
    controls: {
      type: Boolean,
      default: true
    },
    thumbs: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      modal,
      uid: null
    }
  },
  mounted () {
    this.uid = modal.addToAlbum(this.album, this.type, this.media, this.src, this.player, this.thumbs)
  },
  methods: {
    _handleClick () {
      if (this.uid) {
        modal.start(this.album, this.uid)
      }
    },
    updateSrc (src) {
      if (this.uid) {
        let media = modal.getMedia(this.uid)
        media.src = src
      }
    }
  },
  destroyed () {
    modal.destroyMedia(this.album, this.uid)
  }
}
</script>
