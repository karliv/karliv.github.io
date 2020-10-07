<template lang="html">
  <div class="modal_write-all">
    <div class="modal__content">

      <!-- success -->
<!--       <div class="headgin heading_h5">Сообщения отправлены</div>
  <div>Мы успешно отправили ваши сообщения адресатам</div> -->

  <div class="d-row justify_between align_center">
    <div class="heading heading_h4 mb_0">Массовая рассылка</div>
    10 адресатов
  </div>
  <div class="d-row mt_6">
    <div class="d-column">
      <div class="d-textarea">
        <textarea class="d-textarea__field" placeholder="Напишите сообщение">

        </textarea>
      </div>
      <div class="d-upload-zone mt_3">
        <div class="d-upload-zone__field">

        </div>
      </div>
    </div>
  </div>
  <div class="d-row mt_3">
    <div class="d-column">
      <div class="d-row justify_between align_center">
        <div class="d-row align_center">
          <button class="d-btn d-btn_round bg-color_gray-5 mr_4 cursor_auto">
            <svg class="d-icon d-icon_size_16 fill_gray-3">
              <use xlink:href="/dist/web/img/icons/svg/sprite.svg#icon_upload" />
            </svg>
          </button>
          <div class="tt_uppercase color_gray-2 fw_600">Бриф.pdf</div>
        </div>
        <svg class="d-icon d-icon_size_16 d-icon_close fill_white cursor_pointer">
          <use xlink:href="/dist/web/img/icons/svg/sprite.svg#lm-close" />
        </svg>
      </div>
      <div class="d-row justify_between align_center mt_2">
        <div class="d-row align_center">
          <button class="d-btn d-btn_round bg-color_gray-5 mr_4 cursor_auto">
            <svg class="d-icon d-icon_size_16 fill_gray-3">
              <use xlink:href="/dist/web/img/icons/svg/sprite.svg#icon_upload" />
            </svg>
          </button>
          <div class="tt_uppercase color_gray-2 fw_600">Бриф.pdf</div>
        </div>
        <svg class="d-icon d-icon_size_7 d-icon_close fill_white cursor_pointer">
          <use xlink:href="/dist/web/img/icons/svg/sprite.svg#lm-close" />
        </svg>
      </div>
    </div>
  </div>
  <div class="d-row justify_end mt_6">
    <button class="d-btn d-btn_primary">Отправить</button>
  </div>
</div>
</div>
</template>

<script>
  export default {
  }
</script>

<style lang="css" scoped>
</style>
