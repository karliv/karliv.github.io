<template>
  <transition :name="currentTransition">
    <div v-show="currentValue" class="mint-popup" :class="[position ? 'mint-popup-' + position : '']">
      <slot></slot>
    </div>
  </transition>
</template>

<style lang="sass">
  body.lm-modal-open
    main, footer
      //filter: blur(4px)
      //-webkit-filter: blur(4px)
    .v-modal
      background: rgba(40, 42, 54, 0.64)
      opacity: 1
</style>

<script>
  import { Popup } from 'mint-ui'

  export default {
    mixins: [Popup],

    props: {
      blur: {
        default: false
      },
      bodyClass: {
        default: 'lm-modal-open'
      }
    },
    watch: {
      opened (val) {
        val ? window.nsWebViewInterface.emit('swipe2Back', true) : window.nsWebViewInterface.emit('swipe2Back', false)

        if (this.blur) {
          if (val)
            document.body.classList.add(this.bodyClass)
          else
            document.body.classList.remove(this.bodyClass)
        }
      }
    },
  }
</script>
