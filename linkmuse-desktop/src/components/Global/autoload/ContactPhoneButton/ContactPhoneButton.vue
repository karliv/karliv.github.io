<template>
  <button :class="['d-btn', { 'd-btn_primary': (!this.showFull), 'd-btn_primary_show-phone': (this.showFull) }]" @click="_handleClickShowPhone" @mouseenter="_handleMouseEnterMenu" @mouseleave="_handleMouseLeaveMenu">
    <template v-if="(showFull === false && hover === true)">
      Показать номер
    </template>
    <template v-else>
      {{ placeholder }}
    </template>
  </button>
</template>

<script>
  export default {
    props: {
      phone: {
        type: String,
        required: true,
      },
      hovered: {
        type: Boolean,
        default: true
      },
      event: {
        type: String,
        required: false
      },
      opened: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        hover: false,
        showFull: false
      }
    },
    created () {
      if (this.hovered === false) {
        this.hover = true
      }

      if (this.opened === true) {
        this.showFull = true
      }
    },
    computed: {
      placeholder () {
        return (this.showFull) ? this.phone : this.$truncate(this.phone, (this.phone.length - 3))
      }
    },
    methods: {
      _handleClickShowPhone () {
        this.showFull = true
        this.$root.$emit('open-modal-show-contact-phone', this.phone)

        if (this.event) {
          this.$gtm.trackEvent({ event: this.event })
        }
      },
      _handleMouseEnterMenu () {
        if (!this.hovered) return
        this.hover = true
      },
      _handleMouseLeaveMenu () {
        if (!this.hovered) return
        this.hover = false
      }
    }
  }
</script>

<style scoped>

</style>
