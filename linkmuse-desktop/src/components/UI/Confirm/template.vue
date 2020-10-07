<template>
  <custom-template-modal v-model="modal" @hide="_handleOnHide" :header="false" :footer="false" class="modal-center modal_declaration">
    <div class="modal__content modal__content_declaration modal__content_declaration_casting max-w_360px">
      <div class="modal__title modal__title_declaration_casting">{{ title }}</div>
      <div class="modal__description modal__description_declaration_casting mb_6">
        {{ message }}
      </div>
      <div class="d-row d-row justify_between">
        <button class="d-btn d-btn_secondary flex_1" @click="_handleClickCancel">{{ cancelTxt }}</button>
        <button class="d-btn d-btn_primary flex_1" @click="_handleClickDone">{{ confirmTxt }}</button>
      </div>
    </div>
  </custom-template-modal>
</template>

<script>
export default {}
</script>
