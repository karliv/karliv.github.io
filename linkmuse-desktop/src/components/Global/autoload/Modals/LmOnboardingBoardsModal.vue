<template>
    <modal ref="modal" :class="['modal-center', { 'modal_onboarding': (modal.state && modal.state.is.start), 'modal_onboarding_slide in': (modal.state && !modal.state.is.start) }]" v-model="modal.value" :header="false" :footer="false" @hide="_handleCloseModal">
      <template v-if="modal.state">
        <div class="modal__content">
          <template v-if="modal.state.is.start">
            <img class="d-img d-img_size_64" src="/dist/web/img/onboarding/star.png" alt="" />
            <div class="heading heading_h2 mt_5">Что нового?</div>
            <div>Вы наверняка заметили изменения в Линкмьюс.<br/>Узнайте, что появилось нового в последнем обновлении</div>
            <div class="d-row justify_center mt_6">
              <button class="d-btn d-btn_secondary min-w_144px" @click="_handleCloseModal">Пропустить</button>
              <button class="d-btn d-btn_primary ml_2 min-w_144px" @click="_handleClickNextState">Узнать</button>
            </div>
          </template>

          <template v-if="modal.state.is.one">
            <img src="/dist/web/img/onboarding/slide_1.png" alt="Доска объявлений" class="d-img">
            <div class="modal__section">
              <div class="heading heading_h2">Доска объявлений</div>
              <div>Новый раздел, совмещающий в себе разные типы объявлений.<br/>Один из них - кастинги, которые доступны уже сейчас</div>
              <div class="d-row justify_center mt_6">
                <button class="d-btn d-btn_primary ml_2 min-w_144px" @click="_handleClickNextState">Далее</button>
              </div>
            </div>
          </template>

          <template v-if="modal.state.is.two">
            <img src="/dist/web/img/onboarding/slide_2.png" alt="Доска объявлений" class="d-img">
            <div class="modal__section">
              <div class="heading heading_h2">Приложения</div>
              <div>Обновлённая лента, упрощённая навигация и новые услуги доступны также сейчас в <a class="d-link" href="https://apps.apple.com/ru/app/linkmuse/id1309529188">App Store</a> и <a class="d-link" href="https://play.google.com/store/apps/details?id=com.linkmuse&hl=ru">Google Play</a></div>
              <div class="d-row justify_center mt_6">
                <button class="d-btn d-btn_secondary min-w_144px" @click="_handleClickBackState">Назад</button>
                <button class="d-btn d-btn_primary ml_2 min-w_144px" @click="_handleCloseModal">Закончить</button>
              </div>
            </div>
          </template>
        </div>
      </template>
    </modal>
</template>

<script>
  import { addClass, removeClass } from '@utils'
  import { StateMachine, StateHelper } from 'state-machine'

  export default {
    data () {
      return {
        modal: {
          state: null,
          value: true,
          loading: false
        }
      }
    },
    created () {
      this.fsm = StateMachine.create({
        transitions: [
          'next :  start > one > two',
          'back :  one < two',
        ]
      })

      this.modal.state = StateHelper.object(this.fsm).data
    },
    mounted () {
      // this.modal.value = this.$localStorage.get('onboarding.boards', true, Boolean)
    },
    methods: {
      _handleClickNextState () {
        this.fsm.do('next')
      },
      _handleClickBackState () {
        this.fsm.do('back')
      },
      _handleCloseModal () {
        this.modal.value = false

        this._handleClearModal()
        this.$localStorage.set('onboarding.boards', false)
      },
      _handleClearModal () {
        this.modal = {
          state: null,
          value: false,
          loading: false
        }
        this.fsm = null
      }
    }
  }
</script>

<style scoped>

</style>
