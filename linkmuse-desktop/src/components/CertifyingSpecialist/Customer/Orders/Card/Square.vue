<template>
  <div :class="['ss-orders-list--item', orderStatusClass]">
    <div class="ss-orders-list--item-head">
      <div class="left">
        <div class="type"></div>
        <span>{{ orderStatusTranslate }}</span>
      </div>
    </div>
    <div class="ss-orders-list--item-content">
      <div class="lm-user-block">
        <a @click.stop :href="user.href">
        <img :src="user.avatar" :alt="user.fullname" class="lm-user-block-avatar">
        </a>
        <div class="lm-user-block-info" style="width: 240px">
          <div class="lm-user-block-info-name"
               style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;padding-right: 10px;">{{ user.fullname }}
          </div>
          <div class="lm-user-block-info-type" v-if="user.category && user.category.length">{{ user.category.join('/') | truncate(17) }}</div>
        </div>
      </div>
      <div class="ss-orders-list--item-params">
        <div class="left">Верификация:</div>
        <div class="right">
          <b style="font-size: 14px;margin-bottom: 8px;display: block;padding-right: 10px;color: #000;" v-if="service.name">{{ service.name }}</b>
          <ul v-if="is_work" class="lm-checkbox-buttons" style="padding-right: 16px;">
            <li v-for="(work, index) in getTransformServiceWorkType(service.works)" :key="index">
              <input type="checkbox" :id="index" :disabled="true" :checked="isWorkComplete(index)">
              <label style="font-weight: 400" :for="index">{{ work }}</label>
            </li>
          </ul>
          <ul v-else>
            <li v-for="(work, index) in service.works" :key="index">{{ getServiceWorkTranslate(index) }}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { has } from '@utils'
import CertifyingSpecialist from '@modules/CertifyingSpecialist'
import {
  getInWorkCategory
} from '@modules/CertifyingSpecialist/Enums/OrderStatuses'

import {PHOTO, VIDEO, MEASUREMENT} from '@modules/CertifyingSpecialist/Enums/Services'

export default {
  props: {
    order: {
      type: Object,
      required: true
    }
  },
  computed: {
    user() {
      return this.order.certified_user.data
    },
    service() {
      return this.order.service.data
    },
    orderStatusClass() {
      let status = (this.order.dispute) ? 'dispute' : this.order.status
      return CertifyingSpecialist.getOrderStatusClass(status)
    },
    orderStatusTranslate() {
      let status = (this.order.dispute) ? 'dispute' : this.order.status
      return CertifyingSpecialist.getOrderStatusTranslate(status)
    },
    works () {
      if (!this.service) return {}
      return this.service.works
    },
    is_work() {
      if (!this.order) return
      return getInWorkCategory().includes(this.order.status)
    }
  },
  methods: {
    getServiceWorkTranslate(type) {
      return CertifyingSpecialist.getServiceWorkTranslate(type)
    },
    getTransformServiceWorkType(type) {
      return CertifyingSpecialist.getTransformServiceWorkType(type)
    },
    isWorkComplete(work) {
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

<style>

</style>
