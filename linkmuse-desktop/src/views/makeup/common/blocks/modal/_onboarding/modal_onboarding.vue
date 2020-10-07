<template lang="html">
  <modal ref="modal" class="modal-center modal_onboarding" v-model="value" :header="false" :footer="false">
    <div class="modal__content">
      <img class="d-img d-img_size_64" src="/dist/web/img/onboarding/star.png" alt="" />
      <div class="heading heading_h2 mt_5">Что нового?</div>
      <div>Вы наверняка заметили изменения в Линкмьюсе.<br/>Узнайте, что появилось нового в последнем обновлении</div>
      <div class="d-row justify_center mt_6">
        <button class="d-btn d-btn_secondary min-w_144px">Пропустить</button>
        <button class="d-btn d-btn_primary ml_2 min-w_144px">Узнать</button>
      </div>
    </div>
  </modal>

<!--   <modal ref="modal" class="modal-center modal_onboarding_slide" v-model="value" :header="false" :footer="false">
    <div class="modal__content">
      <img src="/dist/web/img/onboarding/slide_1.png" alt="Доска объявлений" class="d-img">
      <div class="modal__section">
        <div class="heading heading_h2 mt_8">Доска объявлений</div>
        <div>Новый раздел, совмещающий в себе разные типы объявлений.<br/>Один из них - кастинги, которые доступны уже сейчас</div>
        <div class="d-row justify_center mt_6">
          <button class="d-btn d-btn_primary ml_2 min-w_144px">Далее</button>
        </div>
      </div>
    </div>
  </modal> -->

<!--   <modal ref="modal" class="modal-center modal_onboarding_slide" v-model="value" :header="false" :footer="false">
    <div class="modal__content">
      <img src="/dist/web/img/onboarding/slide_2.png" alt="Доска объявлений" class="d-img">
      <div class="modal__section">
        <div class="heading heading_h2 mt_8">Приложения</div>
        <div>Обновлённая лента, упрощённая навигация и новые услуги доступны также сейчас в <a class="d-link" href="https://apps.apple.com/ru/app/linkmuse/id1309529188">App Store</a> и <a class="d-link" href="https://play.google.com/store/apps/details?id=com.linkmuse&hl=ru">Google Play</a></div>
        <div class="d-row justify_center mt_6">
          <button class="d-btn d-btn_secondary min-w_144px">Назад</button>
          <button class="d-btn d-btn_primary ml_2 min-w_144px">Закончить</button>
        </div>
      </div>
    </div>
  </modal> -->
</template>

<script>
  export default {
    data() {
      return {
        value: true
      }
    }
  }
</script>

<style lang="css" scoped>
</style>
