<template>
  <div class="mint-popup mint-popup-center lm-m-modal-wrap lm-m-modal-tree-professions pb_0">
    <div class="modal__content_tree-professions form_tree-professions">
      <div class="modal__content_header modal__content_header_absolute row justify_center">
        <div class="row align_center justify_center">
          <div class="m-text_bold color_gray-3" style="position:absolute; left:0">Отмена</div>
          <div class="heading_h5 mb_0">Отклик</div>
          <div class="m-text_bold color_main" style="position:absolute; right:0" v-if="countProfession">Отправить</div>
        </div>
      </div>


      <div class="modal__content-response_body">
        <div class="response-block">
          <div class="heading_h5">Кастинг</div>
          <div class="m-text_normal-2 color_gray-2">Название кастинга с переносом на новую строку, если требуется</div>
        </div>

        <div class="response-block">
          <template v-if="countProfession">
            <div class="heading_h5 mb_12">Профессия для отклика</div>

            <div class="lm-radio-buttons">
              <li>
                <input name="abuse" type="radio" id="actor" value="bad_behavior" aria-required="true" aria-invalid="true">
                <label for="actor">Актер</label>
              </li>

              <li>
                <input name="abuse" type="radio" id="sfx" value="fraud" aria-required="true" aria-invalid="true">
                <label for="sfx">Супервайзер SFX (Special effects)</label>
              </li>
            </div>

            <div class="section_contacts_action section_contacts-alert_action mt_12">
              <div class="m-text_bold-2">Кастинг проходит в городе «Санкт-Петербург»</div>
            </div>
          </template>

          <template v-else>
            <div class="section_contacts_action mt_16">
              <div class="heading_h5">У вас нет ни одной профессии</div>
              <div class="m-text_normal-2 color_gray-2">Чтобы откликаться на объявления, добавьте профессию по своей специальности</div>
            </div>

            <div class="btn btn_primary w_100 mt_16">Добавить профессию</div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        countProfession: 1
      }
    }
  }
</script>

<style lang="css" scoped>
</style>
