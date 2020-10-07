<template lang="html">

  <!-- modal write to all. mobile -->
  <div class="modal modal_write-all">
    <div class="modal__content">
      <div class="row">
        <div class="column ta_center">
          <div class="heading heading_h5">Массовая рассылка</div>
          <div>10 адресатов</div>
        </div>
      </div>
      <div class="row mt_4">
        <div class="column">
          <div class="textarea">
            <textarea class="textarea__field" placeholder="Напишите сообщение">

            </textarea>
          </div>
          <div class="upload-zone mt_3">
            <div class="upload-zone__field">

            </div>
          </div>
        </div>
      </div>
      <div class="row mt_3">
        <div class="column">
          <div class="row justify_between align_center">
            <div class="row align_center">
              <button class="btn btn_round bg-color_gray-5 mr_4">
                <svg class="icon icon_size_16 fill_gray-3">
                  <use xlink:href="/dist/img/icons/svg/sprite.svg#icon_upload" />
                </svg>
              </button>
              <div class="tt_uppercase fw_600">Бриф.pdf</div>
            </div>
            <button class="btn btn_close"></button>
          </div>
          <div class="row justify_between mt_2 align_center">
            <div class="row align_center">
              <button class="btn btn_round bg-color_gray-5 mr_4">
                <svg class="icon icon_size_16 fill_gray-3">
                  <use xlink:href="/dist/img/icons/svg/sprite.svg#icon_upload" />
                </svg>
              </button>
              <div class="tt_uppercase fw_600">Бриф.pdf</div>
            </div>
            <button class="btn btn_close"></button>
          </div>
        </div>
      </div>
      <div class="row justify_end mt_3">
        <button class="btn btn_primary w_100">Отправить</button>
      </div>
<!--       <div class="headgin heading_h5">Сообщения отправлены</div>
  <div>Мы успешно отправили ваши сообщения адресатам</div> -->
</div>
</div>

<!-- modal "write to all: success". mobile -->
<!--   <div class="modal modal_write-all">
    <div class="modal__content">
      <div class="headgin heading_h5">Сообщения отправлены</div>
      <div>Мы успешно отправили ваши сообщения адресатам</div>
    </div>
  </div> -->
</template>

<script>
  export default {
  }
</script>

<style lang="css" scoped>
</style>
