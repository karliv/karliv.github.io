<template>
  <mt-spinner class="lm-m-loader" :type="type" :color="color"></mt-spinner>
</template>

<script>
import { Spinner } from 'mint-ui'

export default {
  components: { 'mt-spinner': Spinner },
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
