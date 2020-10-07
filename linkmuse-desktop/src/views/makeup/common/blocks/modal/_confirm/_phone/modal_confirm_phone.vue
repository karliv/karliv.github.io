<template lang="html">
  <div class="modal modal_declaration modal_declaration_casting modal_active">
    <div class="modal__content modal__content_declaration modal-confirm">
      <div class="modal-confirm__header">
        <svg class="d-icon">
          <use xlink:href="/dist/web/img/icons/svg/sprite.svg#lm-icon-pass" />
        </svg>
      </div>

      <div class="modal-confirm__body">
        <div class="modal__title modal__title_declaration_casting">Подумайте о безопасности</div>
        <div class="modal__description modal__description_declaration_casting mb_6">
          Добавьте номер телефона, для восстановления доступа к своей странице, при утрате почты
        </div>

        <div class="column mb_4">
          <input type="tel" autocomplete="off" v-mask-phone
                 id="phone" name="phone"
                 :data-vv-as="'phone'" :placeholder="'+7 900 000 00 00'"
                 v-validate="'phone'"
                 v-model="fields.phone"
                 :class="[{ 'error': (verrors.has('phone')) }, 'd-input__field']">

          <template v-if="verrors.has('phone')">
            <div class="d-input__notification d-input__notification_required">{{ verrors.first('phone') }}</div>
          </template>
        </div>

        <template v-if="confirmStep === 1">
          <div class="column mb_4">
            <input type="number" pattern="[0-9]*" min="0" inputmode="numeric" v-mask-static="'9{4}'" autofocus
                   id="attached__code" name="attached__code" data-vv-name="code" key="attached__code"
                   :data-vv-as="'Код'" :placeholder="'000 000'"
                   v-validate="'digits:4|required'"
                   v-model="fields['code']"
                   :class="[{ 'error': (verrors.has('code')) }, 'd-input__field']">

            <template v-if="verrors.has('code')">
              <div class="d-input__notification d-input__notification_required">{{ verrors.first('code') }}</div>
            </template>
          </div>
        </template>

        <button class="d-btn d-btn_primary w_100 mb_6" :disabled="verrors.has('phone') || fields.phone === null" @click="_nextStep">добавить</button>

        <template v-if="confirmStep === 0">
          <a href="javascript:void(0)" class="d-text_bold color_gray-3">Напомнить позже</a>
        </template>

        <template v-if="confirmStep === 1">
          <template v-if="modal.counting">
            <countdown  class="lm-modal-attach-phone-countdown-wrapper" :time="60000" @countdownend="_handleCountdownEnd">
              <template slot-scope="props">
                <div class="d-text_bold">Отправить код ещё раз</div>
                <div class="color_gray-2">через {{ props.seconds }} секунд</div>
              </template>
            </countdown>
          </template>

          <template v-else-if="modal.counting === false">
            <a href="javascript:void(0)" class="d-text_bold color_main">Отправить код ещё раз</a>
          </template>

        </template>
      </div>
    </div>
  </div>
</template>


<script>
  import VueCountdown from '@xkeshi/vue-countdown'

  export default {
    components: { 'countdown': VueCountdown },
    data() {
      return {
        fields: {
          password: null,
        },
        disabled: {
          password: true,
        },
        confirmStep: 0,
        loading: false,
        passwordFieldType: 'password',
        modal: {
          state: null,
          value: false,
          loading: false,
          counting: false,
          fields: {
            code: null,
            phone: null
          }
        }
      }
    },
    computed: {
      isValidPassword () {
        return (this.vfields && this.vfields.hasOwnProperty('password') && this.vfields.password.valid)
      }
    },
    methods: {
      _nextStep () {
        this.modal.counting = true;
        return this.confirmStep++
      },
      _handleCountdownEnd () {
        this.modal.counting = false
      }
    }
  }
</script>

<style lang="css" scoped>
</style>
