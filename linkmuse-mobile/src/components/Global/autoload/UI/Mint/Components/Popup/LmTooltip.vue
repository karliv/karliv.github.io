<template>
  <div :class="['lm-tooltip', position === 'left' || position === 'right' ? 'm-flex' : '']">
    <slot></slot>
    <transition :name="currentTransition">
      <div v-show="currentValue" class="mint-popup" :class="[position ? 'mint-popup--' + position : '']">
        <div v-html="content"></div>
      </div>
    </transition>
  </div>
</template>

<style lang="sass" scoped>
  .v-modal
    background: transparent
    opacity: 1
  .lm-tooltip
    position: relative
    z-index: 3 !important
    &.lm-flex
      display: flex
    .mint-popup
      box-sizing: border-box
      padding: 12px
      position: absolute
      width: 130px
      border-radius: 12px
      height: auto
      margin: auto
      -webkit-backdrop-filter: blur(12px)
      backdrop-filter: blur(12px)
      background-color: rgba(40, 42, 54, 0.64)
      transform: none
      z-index: 2 !important
      color: #fff
      font-size: 12px
      font-weight: normal
      font-style: normal
      font-stretch: normal
      line-height: 1.33
      letter-spacing: normal
      &--top
        bottom: calc(100% + 8px)
        top: unset
        left: 0
        right: 0
        &:before
          top: unset
          bottom: -16px
          left: calc(50% - 8px)
          border: 8px solid transparent
          border-top: 8px solid rgba(40, 42, 54, 0.64)
      &--bottom
        top: calc(100% + 8px)
        bottom: unset
        left: 0
        right: 0
        &:before
          top: -16px
          left: calc(50% - 8px)
          border: 8px solid transparent
          border-bottom: 8px solid rgba(40, 42, 54, 0.64)
      &--right
        top: unset
        bottom: unset
        left: calc(100% + 8px)
        right: unset
        min-height: 100%
        &:before
          left: -16px
          bottom: unset
          top: calc(50% - 8px)
          border: 8px solid transparent
          border-right: 8px solid rgba(40, 42, 54, 0.64)
      &--left
        top: unset
        bottom: unset
        right: calc(100% + 8px)
        left: unset
        &:before
          right: -16px
          left: unset
          bottom: unset
          top: calc(50% - 8px)
          border: 8px solid transparent
          border-left: 8px solid rgba(40, 42, 54, 0.64)
      &:before
        content: ''
        position: absolute
</style>

<script>
  import { Popup } from 'mint-ui'

  export default {
    mixins: [Popup],

    props: {
      content: {
        default: '',
        type: String
      },
      position: {
        default: 'top',
        type: String
      }
    },
  }
</script>
