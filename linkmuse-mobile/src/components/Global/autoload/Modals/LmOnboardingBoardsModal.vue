<template>
  <mt-popup :class="['lm-m-modal-wrap', 'page', 'page_onboarding', { 'page_onboarding_slide': !(modal.state && modal.state.is.start) }]" v-model="modal.value" position="center" :modal="true" @input="_handleInputPopup">
    <template v-if="modal.state">
      <div class="page__content">
        <template v-if="modal.state.is.start">
          <div>
            <img class="img img_size_64" src="/dist/img/onboarding/star.png" alt="" />
          </div>
          <div class="heading mt_1_5">Что нового?</div>
          <div>Вы наверняка заметили изменения в Линкмьюс.<br/>Узнайте, что появилось нового в последнем обновлении</div>
          <div class="page__buttons">
            <button class="btn btn_primary min-w_144px" @click="_handleClickNextState">Узнать</button>
            <button class="btn btn_secondary min-w_144px" @click="_handleCloseModal">Пропустить</button>
          </div>
        </template>

        <template v-if="modal.state.is.one">
          <div>
            <img src="/dist/img/onboarding/slide_1.png" alt="Доска объявлений" class="img">
          </div>
          <div class="page__section">
            <div class="heading mt_2">Доска объявлений</div>
            <div>Новый раздел, совмещающий в себе разные типы объявлений.<br/>Один из них - кастинги, которые доступны уже сейчас</div>
            <div class="page__buttons">
              <button class="btn btn_primary min-w_144px" @click="_handleClickNextState">Далее</button>
            </div>
          </div>
        </template>

        <template v-if="modal.state.is.two">
          <div>
            <img src="/dist/img/onboarding/slide_2.png" alt="Доска объявлений" class="img">
          </div>
          <div class="page__section">
            <div class="heading mt_2">Приложения</div>
            <div>Обновлённая лента, упрощённая навигация и новые услуги доступны также сейчас в <a class="link" href="https://apps.apple.com/ru/app/linkmuse/id1309529188">App Store</a> и <a class="link" href="https://play.google.com/store/apps/details?id=com.linkmuse&hl=ru">Google Play</a></div>
            <div class="page__buttons">
              <button class="btn btn_secondary min-w_144px" @click="_handleClickBackState">Назад</button>
              <button class="btn btn_primary min-w_144px" @click="_handleCloseModal">Закончить</button>
            </div>
          </div>
        </template>
      </div>
    </template>
  </mt-popup>
</template>

<script>
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
      _handleInputPopup (value) {
        if (value === false) {
          this._handleCloseModal()
        }
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

<style lang="scss"scoped>
  .page_onboarding {
    width: calc(100% + 1px);
  }
</style>
