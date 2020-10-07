<template>
    <section class="ss-dispute ss-scroll-order">
        <div class="lm-content-left">
            <div :class="['ss-dispute-sertificate', orderStatusClass]" v-if="order">
                <div class="ss-dispute-sertificate-head">
                    <h3>Верификация</h3>
                    <span class="type">{{ orderStatusTranslate }}</span>
                </div>
                <div class="ss-dispute-sertificate-content">
                    <div class="ss-dispute-sertificate-content-top">
                        <a :href="certified_user.href" class="lm-user-block">
                            <img :src="certified_user.avatar" :alt="certified_user.fullname" class="lm-user-block-avatar">
                            <div class="lm-user-block-info">
                                <div class="lm-user-block-info-name">{{ certified_user.fullname }}</div>
                                <div class="lm-user-block-info-type" v-if="certified_user.category && certified_user.category.length">{{certified_user.category.join('/') | truncate(17) }}</div>
                            </div>
                        </a>
                        <div class="ss-sertificate-price-block">
                            <span class="text">Цена:</span>
                            <span class="price" v-if="order.price">{{ order.price | currency('₽') }}</span>
                        </div>
                    </div>
                    <div v-if="service.name">
                      <b style="font-size: 14px;margin-bottom: 8px;display: block;padding-right: 10px;color: #000;">{{ service.name }}</b>
                    </div>
                    <div :class="[{ beetwen: (is_work || is_paid) }, 'ss-dispute-sertificate-content-info']">
                        <template v-if="is_paid">
                            <div class="left">Верификация:</div>
                            <div class="right">
                                <div style="margin-left: 20px">
                                    <span class="text" v-for="(work, index) in getTransformServiceWorkType(service.works)" :key="index">{{ work }}</span>
                                </div>
                                <a href="javascript:void(0)" v-if="is_paid" class="lm-outline-button" @click="cancelOrder()">отказаться</a>
                            </div>
                        </template>
                        <template v-if="is_meeting">
                            <div class="left">Встреча</div>
                            <div class="right">
                                <div style="margin-left: 37px">
                                    <template v-if="(order.status === AGREED_MEETING && order.meeting_at)">
                                        <span class="date">{{ order.meeting_at | moment('DD MMM, HH:mm') }}</span>
                                        <span class="point">{{ order.address }}</span>
                                    </template>
                                    <span class="text" v-else>Не согласована</span>
                                </div>
                            </div>
                        </template>
                        <template v-if="is_work">
                            <div class="left">Верификация:</div>
                            <div class="right">
                                <ul class="lm-checkbox-buttons">
                                    <li v-for="(work, index) in getTransformServiceWorkType(service.works)" :key="index">
                                        <input type="checkbox" :id="index" :disabled="true" :key="`work_${index}`" :checked="isWorkComplete(index)">
                                        <label :for="index">{{ work }}</label>
                                    </li>
                                </ul>
                            </div>
                        </template>
                        <template v-if="is_archival">
                            <div class="left">Верификация:</div>
                        </template>
                    </div>
                </div>
            </div>
            <div :class="['meeting ss-dispute-status']" v-if="order && (!is_dispute || (is_dispute && dispute_is_working_status))">
              <order-no-paid :order_id="order.id" v-if="order.status === NOT_PAID" :refusedDispute="(is_dispute && dispute_is_working_status)"></order-no-paid>
              <order-calendar :order_id="order.id" v-if="order.status === PAID" :address="address" @selected="_handleSelectedMeeting" :refusedDispute="(is_dispute && dispute_is_working_status)"></order-calendar>
              <order-wait-confirm-meeting :order_id="order.id"  v-if="order.status === WAIT_CONFIRM_MEETING_CLIENT" :refusedDispute="(is_dispute && dispute_is_working_status)"></order-wait-confirm-meeting>
              <order-agreed-meeting :order_id="order.id" v-if="order.status === AGREED_MEETING" @start="_handleStartWorkOrder" :refusedDispute="(is_dispute && dispute_is_working_status)"></order-agreed-meeting>
              <order-canceled :order_id="order.id" v-if="order.status === CANCELED" :refusedDispute="(is_dispute && dispute_is_working_status)"></order-canceled>
              <order-certification :order="order" v-else-if="(is_work || is_archival)" @update="_handleUpdateWorkOrder" @stop="_handleStopWorkOrder" :refusedDispute="(is_dispute && dispute_is_working_status)"></order-certification>
            </div>
            <div :class="['dispute ss-dispute-status']" v-if="order && is_dispute" style="margin-top: 20px;">
              <order-dispute v-if="is_dispute" :user="certified_user" :order_id="order.id" :dispute="order.dispute"></order-dispute>
            </div>
        </div>
        <div class="lm-content-right">
            <template v-if="order">
                <order-dialog :order_id="order.id" :uid="uid" :recipient_id="certified_user.id">
                    <div slot="header">
                        <b>Диалог</b>
                        <span> {{ certified_user.firstname }} {{ (certified_user.online) ? 'онлайн' : 'был(а) в сети ' + ($options.filters.moment(certified_user.last_activity_at, 'from')) }}</span>
                    </div>
                </order-dialog>
            </template>
        </div>
        <div class="clr"></div>
    </section>
</template>

<script>
import OrderMixin from '@modules/CertifyingSpecialist/mixins/order.js'

import OrderDialog from '@components/CertifyingSpecialist/Global/Orders/Show/Dialog/Index.vue'

import OrderDispute from '@components/CertifyingSpecialist/Customer/Orders/Show/Dispute.vue'
import OrderNoPaid from '@components/CertifyingSpecialist/Customer/Orders/Show/NoPaid.vue'
import OrderCalendar from '@components/CertifyingSpecialist/Customer/Orders/Show/Calendar.vue'
import OrderCanceled from '@components/CertifyingSpecialist/Customer/Orders/Show/Canceled.vue'
import OrderWaitConfirmMeeting from '@components/CertifyingSpecialist/Customer/Orders/Show/WaitConfirmMeetingClient.vue'
import OrderAgreedMeeting from '@components/CertifyingSpecialist/Customer/Orders/Show/AgreedMeeting.vue'
import OrderCertification from '@components/CertifyingSpecialist/Customer/Orders/Show/Certification.vue'

import { has } from '@utils'

import {
  WAIT_CONFIRM_MEETING_CLIENT,
  WAIT_WORK,
  WAIT_CONFIRM_WORK_CLIENT,
  CANCELED
} from '@modules/CertifyingSpecialist/Enums/OrderStatuses'

export default {
  mixins: [OrderMixin],
  components: { OrderDialog, OrderDispute, OrderNoPaid, OrderCalendar, OrderWaitConfirmMeeting, OrderAgreedMeeting, OrderCertification, OrderCanceled },
  metaInfo () {
    return {
      title: this.title
    }
  },
  async asyncData ({ store, route }) {
    await store.dispatch('certifying/getOrderById', {
      id: Number(route.params.order_id),
      include: 'certified_user,certifying_specialist,service,photos,video,measurement,dispute,service.studio'
    })
  },
  computed: {
    dialog_header () {
      return `${this.certified_user.firstname} ${(this.certified_user.online) ? 'онлайн' : 'был(а) в сети ' + this.$moment(this.certified_user.last_activity_at).fromNow()}`
    },
    studio () {
      if (has(this.service, 'studio.data')) {
        return this.service.studio.data
      }

      return null
    },
    address () {
      if (has(this.studio, 'address')){
        return this.studio.address
      }

      return ''
    }
  },
  mounted () {
    if (this.isAuthorized && this.user) {
      this.$echo.private(`user.${this.user.id}`).listen('.certifying_specialist.order.status', (payload) => {
        let { order_id, new_status } = payload
        if (Number(this.$route.params.order_id) === order_id) {
          this.$store.dispatch('certifying/getOrderById', {
            id: order_id,
            include: 'certified_user,certifying_specialist,service,photos,video,measurement,dispute,service.studio'
          })
        }
      })
    }
  },
  methods: {
    _handleSelectedMeeting (date) {
      this.$store.dispatch('certifying/setSingleOrderStatus', WAIT_CONFIRM_MEETING_CLIENT)
    },
    _handleUpdateWorkOrder (type, data) {
      this.$store.dispatch('certifying/setSingleOrderWorkByType', { type, data })
    },
    _handleStartWorkOrder () {
      this.$store.dispatch('certifying/setSingleOrderStatus', WAIT_WORK)
    },
    _handleStopWorkOrder () {
      this.$store.dispatch('certifying/setSingleOrderStatus', WAIT_CONFIRM_WORK_CLIENT)
    },
    cancelOrder () {
      this.$confirm({
        title: 'Отказ от заказа',
        message: 'Вы действительно хотите отказаться от заказа?'
      }).then((args) => {
        this.$api.post(`/api/v2/certifying-specialists/orders/${this.order.id}/status/cancel`).then((response) => {
          this.$store.dispatch('certifying/setSingleOrderStatus', CANCELED)
        }, (response) => {
          throw new Error(`Error cancel order#${this.order.id}`)
        })
      }).catch(() => {})
    }
  }
}
</script>
