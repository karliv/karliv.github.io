<template lang="html">
  <div class="lm-m-div-container">
  <div class="page lm-m-page-profile flex-d_row">
    <div class="lm-m-wrap-list-profile mb_16">
      <div class="lm-m-wrap-content-list-profile">
        <div class="lm-m-h1-list-companies">
          Выберите сферу деятельности
        </div>
        <div class="lm-m-h2-list-companies">
          Найдите сферу деятелньости вашей компании в списках ниже или воспользуйтесь поиском
        </div>

        <div class="input input_search input_search_feed">
          <svg class="icon icon_size_sm icon_search icon_fill_lm-gray-3">
            <use xlink:href="/dist/img/icons/svg/sprite.svg#icon_search"></use>
            <use xlink:href="/dist/img/icons/svg/sprite.svg#icon_search"></use>
          </svg>
          <input type="text" name="name" autocomplete="false" data-lm-key="name" placeholder="Введите название компании" class="input__field input__field_search" aria-required="false" aria-invalid="false">
        </div>

        <div class="lm-m-wrap-text-list-profile lm-flex-row p_0">
          <div class="lm-m-icon-arrow-profile">
            <img src="/dist/img/icons/svg/navigation_lm-chevron-right-profile.svg" alt="">
          </div>
          <span class="lm-m-text-list-profile">Организации</span>
        </div>

        <div class="lm-m-wrap-text-list-profile lm-flex-row">
          <div class="lm-m-icon-arrow-profile">
            <img src="/dist/img/icons/svg/navigation_lm-chevron-right-profile.svg" alt="">
          </div>
          <span class="lm-m-text-list-profile">Обеспечение</span>
        </div>

        <div class="page__footer page__footer_declaration page__footer_declaration_casting">
          <div class="form__row form__row_buttons form__row_buttons_declaration">
            <button class="button form__button_cancel form__button_cancel_declaration">
              Назад
            </button>
          </div>
        </div>

      </div>
    </div>
  </div>
  </div>

</template>

<script>
    export default {}
</script>

<style lang="css" scoped>
</style>
