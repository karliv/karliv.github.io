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
            <a :href="certifying_specialist.href" class="lm-user-block">
              <img :src="certifying_specialist.avatar" :alt="certifying_specialist.name" class="lm-user-block-avatar">
              <div class="lm-user-block-info">
                <div class="lm-user-block-info-name">{{ certifying_specialist.name }}</div>
                <div class="lm-user-block-info-type">{{ certifying_specialist.category }}</div>
              </div>
            </a>
            <div class="ss-sertificate-price-block">
              <span class="text">Цена:</span>
              <span class="price" v-if="order.price">{{ order.price | currency('₽') }}</span>
            </div>
          </div>
          <b style="font-size: 14px;margin-bottom: 8px;display: block;padding-right: 10px;color: #000;">{{ service.name }}</b>
          <div :class="[{ beetwen: (is_work || is_paid || is_finished) }, 'ss-dispute-sertificate-content-info']">
            <template v-if="is_paid">
              <div class="left">Верификация:</div>
              <div class="right">
                <b style="font-size: 14px;margin-bottom: 8px;display: block;padding-right: 10px;color: #000;">&nbsp;</b>
                <div>
                  <span class="text" v-for="(work, index) in getTransformServiceWorkType(service.works)" :key="index">{{ work }}</span>
                </div>
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
            <template v-if="is_work || is_archival">
              <div class="left">Верификация:</div>
              <div class="right">
                <ul class="lm-checkbox-buttons">
                  <li v-for="(work, index) in getTransformServiceWorkType(service.works)" :key="index">
                    <input type="checkbox" :id="index" :disabled="true" :key="`work_${index}`" :checked="isWorkComplete(index)">
                    <label :for="index">{{ work }}</label>
                  </li>
                </ul>
                <a href="javascript:void(0)" v-if="is_wait_confirm_work_client && !loading && (!is_dispute || (is_dispute && dispute_is_working_status))"
                   :class="{ 'lm-primary-button': true, 'disabled': !complete }" @click="finishOrder()" :id="service.slug">Принять</a>

                <router-link v-if="is_finished" :to="{ name: 'certifying.executor.orders.show.success', params: { order_id: order.id } }"
                             :class="{ 'lm-primary-button': true, 'disabled': !complete }" @click="finishOrder()">Подробнее
                </router-link>
                <loader v-if="loading"></loader>
              </div>
            </template>
          </div>
        </div>
      </div>
      <div :class="['meeting ss-dispute-status']" v-if="order && (!is_dispute || (is_dispute && dispute_is_working_status))">

        <order-no-paid :order_id="order.id" v-if="order.status === NOT_PAID" :refusedDispute="(is_dispute && dispute_is_working_status)"></order-no-paid>
        <order-paid :order_id="order.id" v-if="order.status === PAID" :refusedDispute="(is_dispute && dispute_is_working_status)"></order-paid>
        <order-selected-meeting :order_id="order.id" v-if="order.status === WAIT_CONFIRM_MEETING_CLIENT" :meeting="order.meeting_to_select"
                                @meeting="_handleOrderMeeting" :refusedDispute="(is_dispute && dispute_is_working_status)"></order-selected-meeting>
        <order-agreed-meeting :order="order" v-if="order.status === AGREED_MEETING" :refusedDispute="(is_dispute && dispute_is_working_status)"></order-agreed-meeting>
        <order-canceled :order_id="order.id" v-if="order.status === CANCELED" :refusedDispute="(is_dispute && dispute_is_working_status)"></order-canceled>
        <order-certification :order="order" v-else-if="(is_work || is_archival)" @finalizing="_handleFinalizingWorkOrder" :refusedDispute="(is_dispute && dispute_is_working_status)"></order-certification>
      </div>
      <div :class="['dispute ss-dispute-status']" v-if="order && is_dispute" style="margin-top: 20px;">
        <order-dispute v-if="is_dispute" :dispute="order.dispute" :order_id="order.id"></order-dispute>
      </div>
    </div>
    <div class="lm-content-right">
      <template v-if="order">
        <order-dialog :order_id="order.id" :uid="uid" :recipient_id="certifying_specialist.id">
          <div slot="header">
            <b>Диалог</b>
            <span> Специалист {{ (certifying_specialist.online) ? 'онлайн' : 'был(а) в сети ' + ($options.filters.moment(certifying_specialist.last_activity_at, 'from')) }}</span>
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

import OrderDispute from '@components/CertifyingSpecialist/Executor/Orders/Show/Dispute.vue'
import OrderNoPaid from '@components/CertifyingSpecialist/Executor/Orders/Show/NoPaid.vue'
import OrderPaid from '@components/CertifyingSpecialist/Executor/Orders/Show/Paid.vue'
import OrderCanceled from '@components/CertifyingSpecialist/Executor/Orders/Show/Canceled.vue'
import OrderSelectedMeeting from '@components/CertifyingSpecialist/Executor/Orders/Show/SelectedMeeting.vue'
import OrderAgreedMeeting from '@components/CertifyingSpecialist/Executor/Orders/Show/AgreedMeeting.vue'
import OrderCertification from '@components/CertifyingSpecialist/Executor/Orders/Show/Certification.vue'

import { has } from '@utils'
import { PHOTO, VIDEO, MEASUREMENT } from '@modules/CertifyingSpecialist/Enums/Services'

import {
  WAIT_CONFIRM_WORK_CLIENT,
  AGREED_MEETING,
  FINALIZING,
  FINISHED
} from '@modules/CertifyingSpecialist/Enums/OrderStatuses'

export default {
  mixins: [OrderMixin],
  components: { OrderDialog, OrderDispute, OrderNoPaid, OrderPaid, OrderSelectedMeeting, OrderAgreedMeeting, OrderCertification, OrderCanceled },
  metaInfo () {
    return {
      title: this.title
    }
  },
  async asyncData ({store, route}) {
    await store.dispatch('certifying/getOrderById', {
      id: Number(route.params.order_id),
      include: 'certifying_specialist,certified_user,service,photos,video,measurement,dispute'
    })
  },
  data () {
    return {
      loading: false,
      success: false,
      error: false
    }
  },
  computed: {
    service () {
      if (!this.order) return {}
      return this.order.service.data
    },
    works () {
      if (!this.service) return {}
      return this.service.works
    },
    worksKeys () {
      if (!this.works) return []
      return Object.keys(this.works)
    },
    is_wait_confirm_work_client () {
      if (!this.order) return
      return [WAIT_CONFIRM_WORK_CLIENT].includes(this.order.status)
    },
    is_finished () {
      if (!this.order) return
      return (this.order.status === FINISHED)
    }
  },
  mounted () {
    if (this.isAuthorized && this.user) {
      this.$echo.private(`user.${this.user.id}`).listen('.certifying_specialist.order.status', (payload) => {
        let { order_id, new_status } = payload
        if (Number(this.$route.params.order_id) === order_id) {
          this.$store.dispatch('certifying/getOrderById', {
            id: order_id,
            include: 'certifying_specialist,certified_user,service,photos,video,measurement,dispute'
          })
        }
      })
    }
  },
  asyncComputed: {
    complete: {
      get () {
        return this.preStopWork().then(result => result).catch((result) => false)
      },
      default: false
    }
  },
  methods: {
    _handleOrderMeeting () {
      this.$store.dispatch('certifying/setSingleOrderStatus', AGREED_MEETING)
    },
    _handleFinalizingWorkOrder () {
      this.$store.dispatch('certifying/setSingleOrderStatus', FINALIZING)
    },
    _handleFinishedWorkOrder () {
      this.$store.dispatch('certifying/setSingleOrderStatus', FINISHED)
    },
    preStopWork () {
      let order = this.order
      return new Promise((resolve, reject) => {
        this.worksKeys.forEach(work => {
          if (work === MEASUREMENT && !has(order, 'measurement.data')) {
            let error = {type: MEASUREMENT, tab: 0}
            reject(error)
          } else if (work === PHOTO && !(has(order, 'photos.data') && order['photos']['data'].length >= this.works.photo.min)) {
            let error = {type: PHOTO, tab: 1}
            reject(error)
          } else if (work === VIDEO && !(has(order, 'video.data') && order['video']['data'])) {
            let error = {type: VIDEO, tab: 2}
            reject(error)
          }
        })

        resolve(true)
      })
    },
    finishOrder () {
      this.preStopWork().then((result) => {
        this.loading = true

        this.$api.post(`/api/v2/certifying-specialists/orders/${this.order.id}/status/finish`, {}, {
          timeout: 120000
        }).then((response) => {
          this.loading = false
          this.success = true
          this.error = false

          this._handleFinishedWorkOrder()
          this.$router.push({ name: 'certifying.executor.orders.show.success', params: { order_id: this.order.id }})
        }, (response) => {
          this.loading = false
          this.success = false
          this.error = true

          throw new Error(`Error stop work order#${this.order.id}`)
        })
      }).catch(({type, tab}) => {
        if (this.worksKeys.includes(type)) {
          console.log(`Error ${type}`)
        } else throw new Error(`Error validate works order#${this.order.id}`)
      })
    }
  }
}
</script>

<style>

</style>
