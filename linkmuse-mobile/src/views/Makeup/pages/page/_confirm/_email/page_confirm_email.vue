<template lang="html">
  <div class="mint-popup mint-popup-center lm-m-modal-wrap lm-m-modal-tree-professions pb_0">
    <div class="modal-confirm">
      <template v-if="confirmStep === 0">
        <div class="modal-confirm__header">
          <svg class="d-icon">
            <use xlink:href="/dist/img/icons/svg/sprite.svg#lm-icon-pass" />
          </svg>
        </div>

        <div class="modal-confirm__body">
          <div class="heading heading_h4 mb_8">Подумайте о безопасности</div>
          <div class="modal__description modal__description_declaration_casting mb_6">
            Добавьте почту, для восстановления доступа к своей странице
          </div>

          <div class="lm-input-wrap">
            <input type="email"
                   tabindex="1"
                   name="email"
                   autocapitalize=off
                   placeholder="pochta@gmaill.com"
                   :class="[{ 'error': (verrors.has('email')), 'ok': isValidEmail }, 'lm-input']"
                   v-validate="'required|email'"
                   v-model="fields.email">
            <span class="lm-input-error mt_2" v-if="verrors.has('email')">{{ verrors.first('email') }}</span>
          </div>

          <button :class="['lm-primary-button', 'middle', { 'disabled': ( verrors.has('email') || fields.email === null ) }, 'mb_24']" @click="_nextStep">добавить</button>

          <a href="javascript:void(0)" class="m-text_bold color_gray-3">Продолжить работу</a>
        </div>
      </template>

      <template v-else>
        <div class="modal-confirm__body" style="height: 100vh">
          <button class="btn btn_close-modal">
            <svg class="icon icon_size_sm">
              <use xlink:href="/dist/img/icons/_declaration/sprite.svg#icon_close"/>
            </svg>
          </button>

          <div class="heading heading_h4 mb_8">Проверьте почту</div>
          <div class="modal__description modal__description_declaration_casting mb_12">
            Мы выслали вам письмо для подтверждения почты
          </div>

          <a href="javascript:void(0)" class="m-text_bold color_main">Продолжить работу</a>
        </div>
      </template>
    </div>
  </div>
</template>


<script>
  export default {
    data() {
      return {
        fields: {
          email: null,
        },
        disabled: {
          email: true,
        },
        confirmStep: 0,
        loading: false,
      }
    },
    computed: {
      isValidEmail () {
        return (this.vfields && this.vfields.hasOwnProperty('email') && this.vfields.email.valid)
      }
    },
    methods: {
      _nextStep () {
        return this.confirmStep++
      }
    }
  }
</script>

<style lang="css" scoped>
</style>
