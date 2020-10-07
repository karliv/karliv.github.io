<template>
  <mt-popup class="lm-m-modal-wrap modal__content modal__content_declaration modal__content_declaration_casting modal__content_unpublish" v-model="modal" position="center" :modal="true" @input="_handleInput" :lockScroll="true">
    <div class="modal__title modal__title_declaration_casting">{{ title }}</div>
    <div class="modal__description modal__description_declaration_casting">{{ message}}</div>
    <div class="row row_justify_between row_align-self_stretch">
      <button class="btn btn_secondary" @click="_handleClickCancel">{{ cancelTxt }}</button>
      <button class="btn btn_primary" @click="_handleClickDone">{{ confirmTxt }}</button>
    </div>
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
