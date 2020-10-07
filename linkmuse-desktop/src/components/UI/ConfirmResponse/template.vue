<template>
  <custom-template-modal v-model="modal" @hide="_handleOnHide" :header="false" :footer="false" class="modal-center modal_declaration">
    <div class="modal__content modal__content_declaration modal__content_declaration_casting">
      <svg class="d-icon d-icon_size_64 fill_main mb_5">
        <use xlink:href="/dist/web/img/icons/svg/sprite.svg#icon_invite" />
      </svg>
      <div class="modal__title modal__title_declaration_casting">Отклик на кастинг</div>
      <div class="modal__description modal__description_declaration_casting mb_6">{{ title }}</div>
      <button class="d-btn d-btn_primary d-btn_login w_100" @click="_handleClickDone">{{ confirmTxt }}</button>
      <template v-if="message">
        <div class="modal__notification modal__notification_declaration_casting color_support-1 mt_4">{{ message }}</div>
      </template>
    </div>
  </custom-template-modal>
</template>

<script>
export default {}
</script>
