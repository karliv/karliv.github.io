<template>
  <div :class="['corner-ribbon', position, color, { shadow, sticky }]"><slot></slot></div>
</template>

<script>
  export default {
   props: {
     position: {
       type: String,
       default: 'top-left',
       validator: value => [ 'top-left', 'top-right', 'bottom-left', 'bottom-right' ].indexOf(value) !== -1
     },
     color: {
       type: String,
       default: 'red',
       validator: value => [ 'red', 'blue', 'orange', 'green' ].indexOf(value) !== -1
     },
     shadow: {
       type: Boolean,
       default: false
     },
     sticky: {
       type: Boolean,
       default: false
     }
   }
  }
</script>

<style lang="sass">
  .corner-ribbon
    z-index: 1
    width: 200px
    min-height: 50px
    background: #e43
    position: absolute
    top: 25px
    left: -50px
    text-align: center
    line-height: 50px
    letter-spacing: 1px
    color: #f0f0f0
    transform: rotate(-45deg)
    -webkit-transform: rotate(-45deg)
    &.sticky
      position: fixed
    &.shadow
      box-shadow: 0 0 3px rgba(0,0,0,.3)
    &.top-left
      top: 25px
      left: -50px
      transform: rotate(-45deg)
      -webkit-transform: rotate(-45deg)
    &.top-right
      top: 25px
      right: -50px
      left: auto
      transform: rotate(45deg)
      -webkit-transform: rotate(45deg)
    &.bottom-left
      top: auto
      bottom: 25px
      left: -50px
      transform: rotate(45deg)
      -webkit-transform: rotate(45deg)
    &.bottom-right
      top: auto
      right: -50px
      bottom: 25px
      left: auto
      transform: rotate(-45deg)
      -webkit-transform: rotate(-45deg)
    &.red
      background: #e43
    &.blue
      background: #39d
    &.orange
      background: #e82
    &.green
      background: #2c7
</style>
