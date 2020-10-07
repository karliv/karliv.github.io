<template lang="html">
  <div class="multiselect multiselect_declaration">
    <!--
    Last item of .multiselect__content_declaration not visible in emulated with browserstack IE11.
    Please, add the rule to display tag with .multiselect__decoration_ie class only in IE11.
  -->
  <div class="multiselect__wrapper">
    <div class="multiselect__content multiselect__content_declaration">
      <div class="multiselect__group multiselect__group_declaration">
        <div class="checkbox multiselect__checkbox multiselect__checkbox_declaration">
          <input id="multiselect__checkbox_declaration_actor" type="checkbox" class="checkbox__mark">
          <label for="multiselect__checkbox_declaration_actor" class="checkbox__label">Актёр</label>
        </div>
      </div>
      <div class="multiselect__group multiselect__group_declaration">
        <div class="checkbox multiselect__checkbox multiselect__checkbox_declaration">
          <input id="multiselect__checkbox_declaration_model" type="checkbox" class="checkbox__mark">
          <label for="multiselect__checkbox_declaration_model" class="checkbox__label">Модель</label>
        </div>
      </div>
      <div class="multiselect__group multiselect__group_declaration">
        <div class="checkbox multiselect__checkbox multiselect__checkbox_declaration">
          <input id="multiselect__checkbox_declaration_host" type="checkbox" class="checkbox__mark">
          <label for="multiselect__checkbox_declaration_host" class="checkbox__label">Ведущий</label>
        </div>
      </div>
      <div class="multiselect__group multiselect__group_declaration">
        <div class="checkbox multiselect__checkbox multiselect__checkbox_declaration">
          <input id="multiselect__checkbox_declaration_artist" type="checkbox" class="checkbox__mark">
          <label for="multiselect__checkbox_declaration_artist" class="checkbox__label">Артист</label>
        </div>
      </div>
      <div class="multiselect__group multiselect__group_declaration">
        <div class="checkbox multiselect__checkbox multiselect__checkbox_declaration">
          <input id="multiselect__checkbox_declaration_musician" type="checkbox" class="checkbox__mark">
          <label for="multiselect__checkbox_declaration_musician" class="checkbox__label">Музыкант</label>
        </div>
      </div>
      <div class="multiselect__group multiselect__group_declaration">
        <div class="checkbox multiselect__checkbox multiselect__checkbox_declaration">
          <input id="multiselect__checkbox_declaration_dancer" type="checkbox" class="checkbox__mark">
          <label for="multiselect__checkbox_declaration_dancer" class="checkbox__label">Танцор</label>
        </div>
      </div>
      <div class="multiselect__group multiselect__group_declaration">
        <div class="checkbox multiselect__checkbox multiselect__checkbox_declaration">
          <input id="multiselect__checkbox_declaration_photographer" type="checkbox" class="checkbox__mark">
          <label for="multiselect__checkbox_declaration_photographer" class="checkbox__label">Фотограф</label>
        </div>
      </div>
      <div class="multiselect__group multiselect__group_declaration">
        <div class="checkbox multiselect__checkbox multiselect__checkbox_declaration">
          <input id="multiselect__checkbox_declaration_videographer" type="checkbox" class="checkbox__mark">
          <label for="multiselect__checkbox_declaration_videographer" class="checkbox__label">Видеограф</label>
        </div>
      </div>
      <div class="multiselect__group multiselect__group_declaration">
        <div class="checkbox multiselect__checkbox multiselect__checkbox_declaration">
          <input id="multiselect__checkbox_declaration_painter" type="checkbox" class="checkbox__mark">
          <label for="multiselect__checkbox_declaration_painter" class="checkbox__label">Художник</label>
        </div>
      </div>
      <div class="multiselect__group multiselect__group_declaration">
        <div class="checkbox multiselect__checkbox multiselect__checkbox_declaration">
          <input id="multiselect__checkbox_declaration_designer" type="checkbox" class="checkbox__mark">
          <label for="multiselect__checkbox_declaration_designer" class="checkbox__label">Дизайнер</label>
        </div>
      </div>
      <!--[if IE 11]><div class="multiselect__decoration multiselect__decoration_ie"></div> <![endif]-->
    </div>
    <div class="multiselect__group multiselect__group_buttons multiselect__group_buttons_declaration">
      <button class="button multiselect__button multiselect__button_cancel multiselect__button_cancel_declaration">Отмена</button>
      <div class="multiselect__decoration multiselect__decoration_separator multiselect__decoration_separator_declaration"></div>
      <button class="button multiselect__button multiselect__button_confirm multiselect__button_confirm_declaration">Выбрать</button>
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
