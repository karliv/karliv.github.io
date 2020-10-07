<template>
    <div>
      <template v-if="order && (!is_dispute || (is_dispute && dispute_is_working_status))">
        <order-canceled :order_id="order.id" :uid="uid" v-if="order.status === CANCELED"></order-canceled>
        <order-no-paid :order_id="order.id" v-if="order.status === NOT_PAID"></order-no-paid>
        <order-paid :order_id="order.id" :uid="uid" v-if="order.status === PAID"></order-paid>
        <order-selected-meeting :order_id="order.id" v-if="order.status === WAIT_CONFIRM_MEETING_CLIENT" :meeting="order.meeting_to_select"
                                @meeting="_handleOrderMeeting"></order-selected-meeting>
        <order-agreed-meeting :order_id="order.id" :meeting_at="order.meeting_at" :uid="uid" v-if="order.status === AGREED_MEETING"></order-agreed-meeting>
        <order-work :order_id="order.id" :uid="uid" v-if="is_work"></order-work>
        <order-certification :order="order" :uid="uid" @finished="_handleFinishedWorkOrder" v-if="is_wait_confirm_work_client"></order-certification>
        <order-finished :order_id="order.id" :uid="uid" v-if="is_finished"></order-finished>
      </template>

      <template v-if="order && is_dispute && !dispute_is_working_status">
        <order-dispute v-if="is_dispute" :dispute="order.dispute" :order_id="order.id"></order-dispute>
      </template>

      <template v-if="!order">
        <div class="lm-m-cs-agree-meeting-page lm-m-fullh-page">
          <div class="lm-m-cs-wait-page--wrap">
            <h3 class="title">Заказ найден</h3>
            <div class="desc">
              <div class="top">К сожалению, данный заказ не найден.</div>
            </div>
          </div>
          <div class="lm-action-buttons lm-bottom-actions-buttons">
            <router-link :to="{ name: 'certifying.executor.orders.index' }" class="lm-link-button">назад</router-link>
          </div>
        </div>
      </template>
    </div>

</template>

<script>
  import { has } from '@utils'
  import { mapGetters } from 'vuex'

  import CertifyingSpecialist from '@modules/CertifyingSpecialist'

  import { PHOTO, VIDEO, MEASUREMENT } from '@modules/CertifyingSpecialist/Enums/Services'

  import {
    NOT_PAID,
    PAID,
    WAIT_CONFIRM_MEETING_CLIENT,
    WAIT_WORK,
    WAIT_CONFIRM_WORK_CLIENT,
    AGREED_MEETING,
    CANCELED,
    FINALIZING,
    FINISHED,
    getPaidCategory,
    getMeetingCategory,
    getInWorkCategorySpecialist,
    getArchivalCategory
  } from '@modules/CertifyingSpecialist/Enums/OrderStatuses'

  import {
    FINALIZING as FINALIZING_DISPUTE,
    REFUSE_DISPUTE
  } from '@modules/CertifyingSpecialist/Enums/DisputeStatuses'

  import OrderWork from '@components/CertifyingSpecialist/Executor/Orders/Show/Work.vue'
  import OrderPaid from '@components/CertifyingSpecialist/Executor/Orders/Show/Paid.vue'
  import OrderNoPaid from '@components/CertifyingSpecialist/Executor/Orders/Show/NoPaid.vue'
  import OrderDispute from '@components/CertifyingSpecialist/Executor/Orders/Show/Dispute.vue'
  import OrderCanceled from '@components/CertifyingSpecialist/Executor/Orders/Show/Canceled.vue'
  import OrderFinished from '@components/CertifyingSpecialist/Executor/Orders/Show/Finished.vue'
  import OrderAgreedMeeting from '@components/CertifyingSpecialist/Executor/Orders/Show/AgreedMeeting.vue'
  import OrderCertification from '@components/CertifyingSpecialist/Executor/Orders/Show/Certification.vue'
  import OrderSelectedMeeting from '@components/CertifyingSpecialist/Executor/Orders/Show/SelectedMeeting.vue'

  export default {
    components: { OrderCanceled, OrderNoPaid, OrderPaid, OrderSelectedMeeting, OrderAgreedMeeting, OrderWork, OrderCertification, OrderFinished, OrderDispute },
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
        NOT_PAID,
        PAID,
        WAIT_CONFIRM_MEETING_CLIENT,
        AGREED_MEETING,
        FINALIZING_DISPUTE,
        REFUSE_DISPUTE,
        CANCELED,
        WAIT_CONFIRM_WORK_CLIENT
      }
    },
    computed: {
      ...mapGetters({
        order: 'certifying/getSingleOrderData',
        orderLoading: 'certifying/geSingleOrderLoading'
      }),
      title () {
        if (!this.order) return
        return `Заказ #${this.order.id}`
      },
      certified_user () {
        if (!this.order) return {}
        return this.order.certified_user.data
      },
      certifying_specialist () {
        if (!this.order) return {}
        return this.order.certifying_specialist.data
      },
      uid () {
        if (!this.order) return ''
        return this._.sortBy([ this.certifying_specialist.id, this.certified_user.id ]).toString()
      },
      service () {
        if (!this.order) return {}
        return this.order.service.data
      },
      works () {
        if (!this.service) return {}
        return this.service.works
      },
      orderStatusClass () {
        if (!this.order) return
        let status = (this.order.dispute) ? 'dispute' : this.order.status
        return CertifyingSpecialist.getOrderStatusClass(status)
      },
      orderStatusTranslate () {
        if (!this.order) return
        let status = (this.order.dispute) ? 'dispute' : this.order.status
        return CertifyingSpecialist.getOrderStatusTranslate(status)
      },
      is_paid () {
        if (!this.order) return
        return getPaidCategory().includes(this.order.status)
      },
      is_meeting () {
        if (!this.order) return
        return getMeetingCategory().includes(this.order.status)
      },
      is_work () {
        if (!this.order) return
        return getInWorkCategorySpecialist().includes(this.order.status)
      },
      is_archival () {
        if (!this.order) return
        return getArchivalCategory().includes(this.order.status)
      },
      is_dispute () {
        if (!this.order) return
        return this.order.hasOwnProperty('dispute')
      },
      dispute_is_working_status () {
        if (!this.is_dispute) return
        return [ FINALIZING_DISPUTE, REFUSE_DISPUTE ].includes(this.order.dispute.data.status)
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
    methods: {
      _handleOrderMeeting ( meeting_at ) {
        this.$store.dispatch('certifying/setFieldSingleOrderData', { key: 'meeting_at', value: meeting_at })
        this.$store.dispatch('certifying/setSingleOrderStatus', AGREED_MEETING)
      },
      _handleFinalizingWorkOrder () {
        this.$store.dispatch('certifying/setSingleOrderStatus', FINALIZING)
      },
      _handleFinishedWorkOrder () {
        this.$store.dispatch('certifying/setSingleOrderStatus', FINISHED)
        this.$router.push({ name: 'certifying.executor.orders.show.success', params: { order_id: this.order.id }})
      },
      getTransformServiceWorkType (type) {
        return CertifyingSpecialist.getTransformServiceWorkType(type)
      },
      isWorkComplete (work) {
        let order = this.order

        if (work === MEASUREMENT && has(order, 'measurement.data')) {
          return true
        } else if (work === PHOTO && has(order, 'photos.data') && order['photos']['data'].length >= this.works.photo.min) {
          return true
        } else if (work === VIDEO && has(order, 'video.data') && order['video']['data']) {
          return true
        }

        return false
      }
    }
  }
</script>

<style scoped>

</style>
