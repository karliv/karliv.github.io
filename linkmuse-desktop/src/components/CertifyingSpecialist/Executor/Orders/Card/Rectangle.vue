<template>
  <div :class="['ss-orders--item', orderStatusClass]">
    <div class="ss-orders--item--left">
      <div class="ss-orders--item-status">{{ orderStatusTranslate }}</div>
      <div>
        <router-link :to="{ name: 'certifying.executor.orders.show', params: { order_id: order.id } }" class="ss-orders--item--name">
          {{ service.name | truncate(15) }}
        </router-link>
      </div>
      <a :href="specialist.href" class="lm-user-block small">
        <img :src="specialist.avatar" :alt="specialist.name" class="lm-user-block-avatar">
        <div class="lm-user-block-info">
          <div class="lm-user-block-info-name"><span>{{ specialist.name | truncate(14) }}</span></div>
        </div>
      </a>
    </div>
    <div class="ss-orders--item--right">
      <div class="ss-orders--item--info-top">
        <div>
          <div class="title">ЗАКАЗ №:</div>
          <div class="desc">{{ order.id }}</div>
        </div>
        <div>
          <div class="title">ВСТРЕЧА:</div>
          <div class="desc">
            <template v-if="(order.meeting_at)">
              <template v-if="$moment().isAfter($moment(order.meeting_at))">состоялась</template>
              {{ order.meeting_at | moment('DD MMM, HH:mm') }}
            </template>
            <template v-else>Не согласована</template>
          </div>
        </div>
        <div>
          <div class="price">{{ order.price | currency('₽') }}</div>
        </div>
      </div>
      <div class="ss-orders--item--info-bottom">
        <div class="ss-orders--item--info-bottom--left">
          <div class="moderate-wait" v-if="is_dispute && !dispute_status">Ожидайте решение модератора</div>
        </div>
        <div class="ss-orders--item--info-bottom--right">
          <template v-if="status === NOT_PAID">
            <a href="javascript:void(0)" class="lm-outline-button middle" @click="destroyOrder()">удалить</a>

            <router-link :to="{ name: 'certifying.executor.orders.pay', params: { order_id: order.id } }"
                         class="lm-primary-button lm-icon-button pay middle">
              оплатить
            </router-link>
          </template>
          <template v-else-if="status !== NOT_PAID">
            <router-link :to="{ name: 'certifying.executor.orders.show.dispute', params: { order_id: order.id } }" class="lm-outline-button middle"
                         v-if="!is_dispute && !FINISHED">
              начать диспут
            </router-link>

            <router-link :to="{ name: 'certifying.executor.orders.show', params: { order_id: order.id } }" class="lm-outline-button middle">
              подробнее о заказе
            </router-link>
          </template>
        </div>
      </div>
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
