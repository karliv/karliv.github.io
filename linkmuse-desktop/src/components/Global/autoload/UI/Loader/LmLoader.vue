<template>
  <pulse-loader class="lm-loader" :type="type" :color="color"></pulse-loader>
</template>

<script>
  import PulseLoader from 'vue-spinner/src/PulseLoader.vue'

  export default {
    components: { 'pulse-loader': PulseLoader },
    props: {
      type: {
        type: String,
        default: 'triple-bounce'
      },
      color: {
        type: String,
        default: '#0063da'
      }
    }
  }
</script>

<style scoped>
</style>
