<template>
  <mt-popup class="multiselect multiselect_declaration" v-model="modal" position="center" :modal="true" :lockScroll="true" @input="_handleInputMtPopup" >
    <div class="multiselect__wrapper">
      <div class="multiselect__content multiselect__content_declaration">

        <div class="multiselect__group multiselect__group_declaration" v-for="option in options" :key="option.id">
          <div class="checkbox multiselect__checkbox multiselect__checkbox_declaration">
            <input type="checkbox"
                   :name="name"
                   v-model="value"
                   :value="option.id"
                   :id="`${name}-${option.id}`"
                   class="checkbox__mark">
            <label :for="`${name}-${option.id}`" class="checkbox__label">{{ option.text }}</label>
          </div>
        </div>

        <!--[if IE 11]><div class="multiselect__decoration multiselect__decoration_ie"></div> <![endif]-->
      </div>
      <div class="multiselect__group multiselect__group_buttons multiselect__group_buttons_declaration">
        <button class="button multiselect__button multiselect__button_cancel multiselect__button_cancel_declaration" @click="_handleClickCancel">Отмена</button>
        <div class="multiselect__decoration multiselect__decoration_separator multiselect__decoration_separator_declaration"></div>
        <button class="button multiselect__button multiselect__button_confirm multiselect__button_confirm_declaration" @click="_handleClickDone">Выбрать</button>
      </div>
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
