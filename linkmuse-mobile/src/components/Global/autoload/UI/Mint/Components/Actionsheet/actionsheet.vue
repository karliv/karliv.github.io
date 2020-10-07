<template>
  <transition name="actionsheet-float">
    <div v-show="currentValue" class="mint-actionsheet lm-m-modal-wrap">
      <ul class="mint-actionsheet-list lm-m-modal-list-menu" :style="{ 'margin-bottom': cancelText ? '5px' : '0' }">
        <li v-for="( item, index ) in actions" class="mint-actionsheet-listitem lm-m-modal-list-menu--item actionsheet--menu--item" @click.stop="itemClick(item, index)" :style="{ 'color': item.color || 'inherit' }">{{ item.name }}</li>
      </ul>
      <a class="mint-actionsheet-button" @click.stop="currentValue = false" v-if="cancelText">{{ cancelText }}</a>
    </div>
  </transition>
</template>

<script>
  import { Actionsheet } from 'mint-ui'

  export default {
    mixins: [Actionsheet]
  }
</script>
