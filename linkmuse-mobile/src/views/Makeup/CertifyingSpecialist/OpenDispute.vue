<template>
  <div>
    <div class="lm-m-cs-open-dispute lm-m-fullh-page">
      <div class="lm-m-cs-open-dispute--wrap">
        <div class="title">Решили начать диспут?</div>
        <div class="desc">Выберите причину, по которой выбранная услуга вам не понравилась, а также способ решения, который удовлетворил бы вас</div>
        <div class="lm-radio-buttons">
          <span>Причина диспута:</span>
          <li>
            <input id="reason-1" type="radio">
            <label for="reason-1">Специалист меня игнорирует</label>
          </li>
          <li>
            <input id="reason-2" type="radio">
            <label for="reason-2">Не устраивает качество работы</label>
          </li>
          <li>
            <input id="reason-3" type="radio">
            <label for="reason-3">Встреча не состоялась</label>
          </li>
        </div>
        <div class="lm-radio-buttons">
          <span>Способ решения:</span>
          <li>
            <input id="decide-1" type="radio">
            <label for="decide-1">Возвращение средств</label>
          </li>
          <li>
            <input id="decide-2" type="radio">
            <label for="decide-2">Замена специалиста</label>
          </li>
          <li>
            <input id="decide-3" type="radio">
            <label for="decide-3">Повторная верификация</label>
          </li>
        </div>
        <div class="separator"></div>
        <div class="lm-input-wrap">
          <label for="dispute-comment">Комментарий:</label>
          <input id="dispute-comment" type="text" class="lm-input" placeholder="Описание ситуации">
        </div>
      </div>
      <div class="lm-action-buttons lm-bottom-actions-buttons">
        <a href="javascript:void(0)" class="lm-link-button">назад</a>
        <button class="lm-primary-button middle">Отправить</button>
      </div>
    </div>
  </div>
</template>
<script>

  export default {
    metaInfo: {
      title: 'Заполните данные о себе'
    },
    computed: {},
    data () {
      return {

      }
    },
    methods: {

    }
  }
</script>
