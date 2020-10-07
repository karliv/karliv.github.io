<template>
  <div class="lm-m-cs-agree-meeting-page lm-m-fullh-page">
    <div class="lm-m-cs-wait-page--wrap">
      <h3 class="title">Диспут<template v-if="dispute_is_working_status">: {{ getDisputeStatusTranslate(dispute_status) | lowercase }}</template></h3>
      <div class="desc">
        <template v-if="dispute_status">
          <div class="top">{{ getDisputeStatusTranslate(dispute_status) }}</div>
          <div class="middle"></div>
          <template v-if="comment">
            <div class="bottom"><span>Комментарий модератора:</span> <b>{{ comment }}</b></div>
          </template>
        </template>
        <template v-else>
          <template v-if="initiator">
            <div class="top">Вы открыли диспут</div>
            <div class="middle"></div>
            <div class="bottom">Ожидайте решение модератора, обычно ответ приходит в течение 2-3 рабочих дней.</div>
          </template>
          <template v-else-if="!initiator">
            <div class="top">Специалист начал диспут</div>
            <div class="middle"></div>
            <div class="bottom">Что-то пошло не так, и <b>специалист</b> остался вами недоволен. Ожидайте решение модератора по этой проблеме.</div>
          </template>
        </template>
      </div>
    </div>
    <div class="lm-action-buttons lm-bottom-actions-buttons">
      <router-link :to="{ name: 'certifying.executor.orders.index' }" class="lm-link-button">назад</router-link>
      <template v-if="initiator">
        <router-link :to="{ name: 'certifying.executor.orders.show.dispute', params: { order_id: order_id } }" class="lm-primary-button middle">Подррбнее</router-link>
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
      order_id: {
        type: Number,
        required: true
      },
      dispute: {
        type: Object,
        required: true
      }
    },
    computed: {
      dispute_status () {
        return (this.dispute.data.status)
      },
      comment () {
        return this.dispute.data.comment
      },
      initiator () {
        return this.dispute.data.initiator
      },
      dispute_is_working_status () {
        return [ FINALIZING_DISPUTE, REFUSE_DISPUTE ].includes(this.dispute_status)
      }
    },
    methods: {
      getDisputeStatusTranslate (status) {
        return CertifyingSpecialist.getDisputeStatusTranslate(status)
      }
    }
  }
</script>

<style scoped>

</style>
