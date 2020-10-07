<template>
  <div class="page page_declaration">
    <div class="page-inner__container">
      <div class="page__body page-inner__body_declaration pb_24">
        <div class="block block_declaration bt_none">
          <div class="heading heading_h4 mb_2">Новая компания</div>
          <div class="m-text_semi-bold color_gray-2">Компания не найдена</div>

          <div class="form__group form__group_declaration mt_5">
            <div class="lm-dropdown-wrap">
              <div class="lm-dropdown">
                <select id="profession__category" :disabled="edit" @click="_handleClickChangeCompany">
                  <option selected="selected" disabled="disabled" hidden="hidden">Выберите компанию из списка</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="page__footer page__footer_declaration">
        <div class="form__row form__row_buttons form__row_buttons_declaration">
          <button class="btn btn_secondary" @click="_handleClickPreviousPage">
            Назад
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  import UserFormMixin from '@modules/User/Company/mixins/form'

  export default {
    name: 'Default',
    mixins: [UserFormMixin],
    props: {
      edit: {
        type: Boolean
      }
    }
  }
</script>

<style scoped>

</style>
