import Media from './Index.vue'
import MediaModal from './Modal.vue'

const install = (Vue, options) => {
  Vue.component('media', Media)
  Vue.component('media-modal', MediaModal)
}

export default install
