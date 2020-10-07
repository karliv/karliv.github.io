<template>
  <div :class="['lm-m-order--item', 'customer-order--item', orderStatusClass]">
    <div class="lm-m-order--item--top">
      <div class="lm-m-order--item--top--left">
        <div class="lm-m-order--item-status">{{ orderStatusTranslate }}</div>
      </div>
      <div class="lm-m-order--item--top--right">
        <template v-if="(is_archived === false)">
          <div class="lm-m-order--item-price">{{ order.price | currency('₽') }}</div>
        </template>
      </div>
    </div>
    <div class="lm-m-order--item--bottom">
      <div class="lm-m-order--item-name">{{ service.name | truncate(25) }}</div>
      <div class="lm-m-order--item-info">
        <span>Встреча:</span>
        <template v-if="(order.meeting_at)">
          <template v-if="$moment().isAfter($moment(order.meeting_at))"><span>состоялась</span></template>
          <span>{{ order.meeting_at | moment('DD MMM, HH:mm') }}</span>
        </template>
        <template v-else><span>Не согласована</span></template>
      </div>
    </div>
  </div>
</template>

<script>
  import CertifyingSpecialist from '@modules/CertifyingSpecialist'

  import {
    NOT_PAID,
    PAID,
    FINISHED,
    CANCELED
  } from '@modules/CertifyingSpecialist/Enums/OrderStatuses'

  export default {
    props: {
      order: {
        type: Object,
        required: true
      }
    },
    data () {
      return {
        NOT_PAID, PAID, FINISHED
      }
    },
    computed: {
      specialist () {
        return this.order.certifying_specialist.data
      },
      service () {
        return this.order.service.data
      },
      status () {
        return this.order.status
      },
      orderStatusClass () {
        let status = (this.order.dispute) ? 'dispute' : this.status
        return CertifyingSpecialist.getOrderStatusClass(status)
      },
      is_dispute () {
        return (this.order.hasOwnProperty('dispute'))
      },
      dispute_status () {
        if (!this.is_dispute) return
        return (this.order.dispute.data.status)
      },
      orderStatusTranslate () {
        let status = (this.is_dispute) ? 'dispute' : this.status
        return CertifyingSpecialist.getOrderStatusTranslate(status)
      },
      is_archived () {
        return (this.status === FINISHED || this.status === CANCELED)
      }
    },
    methods: {
      destroyOrder () {
        this.$emit('destroy', this.order.id)
      }
    }
  }
</script>

<style scoped>

</style>
