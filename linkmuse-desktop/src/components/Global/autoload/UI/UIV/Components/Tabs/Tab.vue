<template>
  <div role="tabpanel" ref="panel" :class="['tab-pane lm-tabs-content', { 'active fade': active, 'in': fadein }]">
    <slot></slot>
  </div>
</template>

<script>
    import { Tab } from 'uiv'

export default {
      mixins: [Tab],
      data () {
        return {
          active: true,
          fadein: false,
          transition: 0
        }
      },
      watch: {
        active (active) {
          if (active) {
            setTimeout(() => { this.fadein = true }, 0)
            this.active = true
          } else {
            setTimeout(() => { this.fadein = false }, 0)
            this.active = false
          }
        }
      },
      methods: {
        show () {
          this.$nextTick(() => {
            setTimeout(() => { this.fadein = true }, 0)
            this.active = true
          })
        }
      }
    }
</script>