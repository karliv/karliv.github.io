<template lang="html">
  <div class="modal modal_declaration modal_declaration_casting modal_active">
    <div class="modal__content modal__content_declaration modal-confirm">
      <template v-if="confirmStep === 0">
        <div class="modal-confirm__header">
          <svg class="d-icon">
            <use xlink:href="/dist/web/img/icons/svg/sprite.svg#lm-icon-pass" />
          </svg>
        </div>
        <div class="modal-confirm__body">
          <div class="modal__title modal__title_declaration_casting">Подумайте о безопасности</div>
          <div class="modal__description modal__description_declaration_casting mb_6">
            Добавьте почту, для восстановления доступа к своей странице
          </div>

          <div class="column mb_4">
            <div class="d-row align_center justify_flex-end">
              <input type="email" autocomplete="off" autocapitalize=off
                     id="email" name="email"
                     :data-vv-as="'E-mail'" :placeholder="'pochta@gmaill.com'"
                     v-model="fields.email"
                     v-validate="'email|max:255'"
                     :class="[{ 'error': (verrors.has('email')) }, 'd-input__field']">
            </div>
            <template v-if="verrors.has('email')">
              <div class="d-input__notification d-input__notification_required">{{ verrors.first('email') }}</div>
            </template>
          </div>

          <button class="d-btn d-btn_primary w_100 mb_6" :disabled="verrors.has('email') || fields.email === null" @click="_nextStep">добавить</button>

          <a href="javascript:void(0)" class="d-text_bold color_gray-3">Продолжить работу</a>
        </div>
      </template>

      <template v-else>
        <div class="modal-confirm__body">
          <div class="modal__title modal__title_declaration_casting">Проверьте почту</div>
          <div class="modal__description modal__description_declaration_casting mb_3">
            Мы выслали вам письмо для подтверждения почты
          </div>

          <a href="javascript:void(0)" class="d-text_bold color_main">Продолжить работу</a>
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
