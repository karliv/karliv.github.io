<template>
  <mt-popup class="lm-m-modal-wrap modal__content modal__content_declaration modal__content_declaration_casting" v-model="modal" position="center" :modal="true" @input="_handleInput" :lockScroll="true">
    <svg class="icon icon_invite modal__icon_declaration">
      <use xlink:href="/dist/img/icons/_declaration/sprite.svg#icon_invite" />
    </svg>
    <div class="modal__title modal__title_declaration_casting">Отклик на кастинг</div>
    <div class="modal__description modal__description_declaration_casting">{{ title }}</div>
    <button class="btn btn_primary" @click="_handleClickDone" style="width: 100%">{{ confirmTxt }}</button>
    <template v-if="message">
      <div class="modal__description modal__description_declaration_casting_confirm" v-if="message">{{ message }}</div>
    </template>
  </mt-popup>
</template>

<script>
  import { Popup } from 'mint-ui'

  export default {
    components: { 'mt-popup': Popup },
  }
</script>

<style scoped>

</style>
