/* eslint-disable no-unused-vars */

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
  getPaidCategory,
  getMeetingCategory,
  getInWorkCategory,
  getArchivalCategory
} from '@modules/CertifyingSpecialist/Enums/OrderStatuses'

import {
  FINALIZING as FINALIZING_DISPUTE,
  REFUSE_DISPUTE
} from '@modules/CertifyingSpecialist/Enums/DisputeStatuses'

export default {
  metaInfo () {
    return {
      title: this.title
    }
  },
  data () {
    return {
      NOT_PAID,
      PAID,
      WAIT_CONFIRM_MEETING_CLIENT,
      AGREED_MEETING,
      FINALIZING_DISPUTE,
      REFUSE_DISPUTE,
      CANCELED
    }
  },
  computed: {
    ...mapGetters({
      user: 'auth/getAuthUser',
      isAuthorized: 'auth/isAuthorized',
      order: 'certifying/getSingleOrderData',
      order_loading: 'certifying/geSingleOrderLoading'
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
      return getInWorkCategory().includes(this.order.status)
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
      return [ WAIT_CONFIRM_WORK_CLIENT ].includes(this.order.status)
    }
  },
  methods: {
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
