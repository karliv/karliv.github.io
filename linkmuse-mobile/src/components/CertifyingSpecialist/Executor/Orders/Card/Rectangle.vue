<template>
  <div :class="['lm-m-order--item', orderStatusClass]">
    <div class="lm-m-order--item--top">
      <div class="lm-m-order--item--top--left">
        <div class="lm-m-order--item-status">{{ orderStatusTranslate }}</div>
      </div>
      <div class="lm-m-order--item--top--right">
        <div class="lm-m-order--item-price">{{ order.price | currency('₽') }}</div>
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

    <div class="lm-m-order--item-action">
      <template v-if="status === NOT_PAID">
        <div class="left"><a href="javascript:void(0)" class="lm-link-button middle canceled" @click="destroyOrder()">отменить</a></div>

        <div class="right">
          <router-link :to="{ name: 'certifying.executor.orders.pay', params: { order_id: order.id } }" class="lm-primary-button middle" style="width: 140px">
            оплатить
          </router-link>
        </div>
      </template>
      <template v-else-if="status !== NOT_PAID">
        <div class="left" >
          <router-link v-if="!is_dispute && !FINISHED" :to="{ name: 'certifying.executor.orders.show.dispute', params: { order_id: order.id } }" class="lm-outline-button middle">
            начать диспут
          </router-link>
        </div>
        <div class="right">
          <router-link :to="{ name: 'certifying.executor.orders.show', params: { order_id: order.id } }" class="lm-primary-button middle">
            подробнее о заказе
          </router-link>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
  import CertifyingSpecialist from '@modules/CertifyingSpecialist'

  import {
    NOT_PAID,
    PAID,
    FINISHED
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
