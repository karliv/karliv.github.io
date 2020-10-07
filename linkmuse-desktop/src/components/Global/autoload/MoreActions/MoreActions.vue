<template>
  <button :class="['d-btn', 'd-btn_round', {'d-btn_hover': hover}  ]" @click="_handleClickToggleMore" v-click-outside="_handleClickOutsideMore">
    <svg class="d-icon d-icon_size_16">
      <use xlink:href="/dist/web/img/icons/svg/sprite.svg#icon_options" />
    </svg>

    <div :class="['d-btn__popup', 'd-btn__popup_share', { 'd-btn__popup_top': (position === 'top') ,'d-btn__popup_active': active }]">
      <div class="popup__content">
        <div class="list popup__list popup__list_archive">
          <slot></slot>
        </div>
      </div>
      <div class="d-btn__popup-stub"></div>
    </div>
  </button>
</template>

<script>
export default {
  props: {
    position: {
      type: String,
      default: 'bottom'
    },
    hover: {
        type: Boolean,
        default: false
    },
  },
  data () {
    return {
      active: false
    }
  },
  methods: {
    _handleClickToggleMore () {
      if (this.hover) return

      this.active = !this.active
    },
    _handleClickOutsideMore () {
      this.active = false
    }
  }
}
</script>

<style lang="scss">
  .d-btn__popup_share-wrap {
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
  }
</style>
