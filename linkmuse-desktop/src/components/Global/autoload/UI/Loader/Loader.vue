<template>
  <clip-loader :color="color"></clip-loader>
</template>

<script>
import ClipLoader from 'vue-spinner/src/ClipLoader.vue'

export default {
  name: 'loader',
  props: {
    /**
      * Show loader.
      */
    show: {
      type: Boolean
    },
    /**
        * The color for the loader.
        */
    color: {
      type: String,
      default: '#0E70E5'
    }
  },
  data () {
    return {
      loading: ''
    }
  },
  created () {
    this.loading = this.show
  },
  components: {
    'clip-loader': ClipLoader
  }
}
</script>
