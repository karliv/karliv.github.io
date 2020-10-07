<template>
  <div>
    <div class="ss-dispute-warning-head">
      <div class="left">Верификация</div>
      <i class="icon-more" v-if="(refusedDispute === false)">
        <div class="actions-item">
          <ul>
            <li>
              <router-link :to="{ name: 'certifying.executor.orders.show.dispute', params: { order_id: order.id } }">Начать диспут</router-link>
            </li>
          </ul>
        </div>
      </i>
    </div>
    <div class="ss-dispute-warning-content">
      <template v-if="$moment().isBefore($moment(order.meeting_at))">
        <h2>Это свершилось!</h2>
        <div class="ss-dispute-warning-desc">
          Вы договорились со специалистом о встрече! <br>
          Будьте готовы к ней,  не забудьте, а лучше добавьте в календарь.
          <br>
          Перед верификацией прочитайте <a href="javascript:void(0)" @click.stop.prevent="_handleModalRulesShow">ПРАВИЛА</a>
        </div>
      </template>
      <template v-else>
        <h2>Поздравляем!</h2>
        <div class="ss-dispute-warning-desc">
          Время встречи со специалистом подтверждено.
          <br><br>
          Перед встречей ещё раз ознакомьтесь с <a style="font-size: 14px;" href="javascript:void(0)" @click.stop.prevent="_handleModalRulesShow">правилами</a>. Чтобы не забыть о встрече, добавьте её в календарь. Надеемся, ваша встреча пройдёт успешно!
          <br><br>
          Если что-то пошло не так, обратитесь к модератору.
          <br><br>
          Команда Linkmuse 🌸
        </div>
      </template>
    </div>
    <lm-modal-rules></lm-modal-rules>
  </div>
</template>

<script>

import ModalRules from '@components/CertifyingSpecialist/Executor/Modals/Rules.vue'

export default {
  props: {
    refusedDispute: {
      type: Boolean,
      default: false
    },
    order: {
      type: Object,
      required: true
    }
  },
  components: { 'lm-modal-rules': ModalRules },
  methods: {
    _handleModalRulesShow () {
      this.$root.$emit('open-modal-rules-executor-show')
    }
  }
}
</script>
