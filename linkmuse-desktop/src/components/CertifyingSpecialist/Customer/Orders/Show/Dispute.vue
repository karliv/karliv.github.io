<template>
  <div>
    <div class="ss-dispute-warning-head" @click="_handleToggleShowContent">
      <div class="left">Диспут<template v-if="dispute_is_working_status">: {{ getDisputeStatusTranslate(dispute_status) | lowercase }}</template></div>
      <i class="icon-more" v-if="initiator">
        <div class="actions-item">
          <ul>
            <li>
              <router-link :to="{ name: 'certifying.customer.orders.show.dispute', params: { order_id: order_id } }">Подробнее</router-link>
            </li>
          </ul>
        </div>
      </i>
    </div>
    <div class="ss-dispute-warning-content" v-if="show">
      <template v-if="dispute_status">
        <h2>Решение диспута</h2>
        <div class="ss-dispute-warning-desc">
            {{ getDisputeStatusTranslate(dispute_status) }}
        </div>
        <div class="ss-dispute-warning-desc" v-if="comment_moderator">
          <span>Комментарий модератора:</span> <b>{{ comment_moderator }}</b>
        </div>
      </template>
      <template v-else>
        <template v-if="initiator">
          <h2>Вы открыли диспут</h2>
          <div class="ss-dispute-warning-desc">
              Ожидайте решение модератора, обычно ответ приходит
              в течение 2-3 рабочих дней.
          </div>
          <div class="ss-dispute-warning-desc">
              Спасибо за ваш отзыв!
              Команда Linkmuse 🙌
          </div>
        </template>

        <template v-else-if="!initiator">
          <h2>Заказчик начал диспут 😱</h2>
          <div class="ss-dispute-warning-desc">
              Что-то пошло не так, и <b>{{ user.firstname }}</b> остался вами <br> недоволен.
              Ожидайте решение модератора по этой <br> проблеме.
          </div>
          <div class="ss-dispute-warning-desc">
              Не расстраивайтесь, всякое бывает! <br>
              Команда Linkmuse 🙌
          </div>
        </template>
      </template>
    </div>
  </div>
</template>

<script>
import CertifyingSpecialist from '@modules/CertifyingSpecialist'

import {
  FINALIZING as FINALIZING_DISPUTE,
  REFUSE_DISPUTE
} from '@modules/CertifyingSpecialist/Enums/DisputeStatuses'

export default {
  props: {
    user: {
      type: Object,
      required: true
    },
    order_id: {
      type: Number,
      required: true
    },
    dispute: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      show: true
    }
  },
  computed: {
    dispute_status () {
      return (this.dispute.data.status)
    },
    comment () {
      return this.dispute.data.comment
    },
    comment_moderator () {
      return this.dispute.data.comment_moderator
    },
    initiator () {
      return this.dispute.data.initiator
    },
    dispute_is_working_status () {
      return [ FINALIZING_DISPUTE, REFUSE_DISPUTE ].includes(this.dispute_status)
    }
  },
  created () {
    if (this.dispute_is_working_status) {
      this._handleToggleShowContent()
    }
  },
  methods: {
    getDisputeStatusTranslate (status) {
      return CertifyingSpecialist.getDisputeStatusTranslate(status)
    },
    _handleToggleShowContent () {
      this.show = !this.show
    }
  }
}
</script>
<style lang="sass">
  .ss-dispute-warning-head
    cursor: pointer
</style>
