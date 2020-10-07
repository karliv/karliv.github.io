<template>
  <div :class="['ss-orders-list--item', orderStatusClass]">
    <div class="ss-orders-list--item-content">
      <div class="left-content">
        <a class="lm-user-block">
          <img :src="user.avatar" :alt="user.fullname" class="lm-user-block-avatar">
          <div class="lm-user-block-info" style="width: 165px">
            <div class="lm-user-block-info-name">{{ user.fullname }}</div>
            <div class="lm-user-block-info-type" v-if="user.category && user.category.length">{{ user.category.join('/') | truncate(17) }}</div>
          </div>
        </a>
        <div class="ss-orders-list--item-params">
          <div class="left">Верификация:</div>
          <div class="right">
            <ul>
              <li v-for="(work, index) in service.works" :key="index">{{ getServiceWorkTranslate(index) }}</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="right-content">
        <div class="photos" v-if="photos.length" @click.stop.prevent>
          <media :media="photo" type="photo" :src="photo.paths.original" :album="`photos_${specialist.id}`" class="photos-item" v-for="photo in photos" :key="photo.id">
            <img v-media="{ item: photo.paths, key: '128x128', fallback: photo.paths.original }" :src="photo.paths['128x128']" :alt="specialist.name">
          </media>
        </div>
        <div class="no-photos" v-else >Фотографий нет ☹</div>
      </div>
    </div>
  </div>
</template>

<script>
import CertifyingSpecialist from '@modules/CertifyingSpecialist'

export default {
  props: {
    order: {
      type: Object,
      required: true
    }
  },
  computed: {
    specialist () {
      return this.order.certifying_specialist.data
    },
    user () {
      return this.order.certified_user.data
    },
    service () {
      return this.order.service.data
    },
    orderStatusClass () {
      let status = (this.order.dispute) ? 'dispute' : this.order.status
      return CertifyingSpecialist.getOrderStatusClass(status)
    },
    orderStatusTranslate () {
      let status = (this.order.dispute) ? 'dispute' : this.order.status
      return CertifyingSpecialist.getOrderStatusTranslate(status)
    },
    photos () {
      if (!this.order.hasOwnProperty('photos')) return []
      return this.order.photos.data.slice(0, 5)
    }
  },
  methods: {
    getServiceWorkTranslate (type) {
      return CertifyingSpecialist.getServiceWorkTranslate(type)
    }
  }
}
</script>

<style>

</style>
