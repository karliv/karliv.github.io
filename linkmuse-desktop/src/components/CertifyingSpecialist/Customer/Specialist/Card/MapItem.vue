<template>
  <div class="ss-item-map">
    <div class="ss-item-map-head">
      <div class="lm-user-block">
        <div style="width: 40px;display: inline-block;vertical-align: middle; margin-right: 8px;vertical-align: top">
          <a :href="specialist.href">
            <img :src="specialist.avatar" :alt="specialist.name" class="lm-user-block-avatar">
          </a>
          <div style="text-align: center; margin-top: 8px;">
            <div :class="[ 'lm-rating', rating_class ]" v-if="specialist.rating">{{ specialist.rating | round(1) }}</div>
          </div>
        </div>
        <div class="lm-user-block-info" style="width: 148px;vertical-align: top">
          <a :href="specialist.href" class="lm-user-block-info-name"><span>{{ specialist.name }}</span></a>
          <div class="lm-user-block-info-location lm-locatin-icon" v-if="studio" style="background-position: left 3px">{{ studio.address | truncate(25) }}</div>
          <div class="lm-user-block-info-links-ss">
            <a href="javascript:void(0)" @click="show(specialist)">
              <span class="text">Верификаций</span>
              <span class="count">{{ specialist.counters.orders }}</span>
            </a>
            <a href="javascript:void(0)" @click="show(specialist)">
              <span class="text">Услуг</span>
              <span class="count">{{ specialist.counters.services }}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="ss-item-bottom-map" v-if="specialist.photos && specialist.photos.data.length">
      <div class="ss-item-images-map">
        <media v-for="photo in photos" :key="photo.id"
               :media="photo" type="photo" :src="photo.paths.original">
          <img :src="photo.paths['128x128']" :alt="specialist.name" :album="`map_photos_${specialist.id}`">
        </media>
      </div>
    </div>
    <div class="ss-item-actions-map">
      <a href="javascript:void(0)" @click="show(specialist)">ПОДРОБНЕЕ</a>
    </div>
  </div>
</template>

<script>
import { has } from '@utils'
import CertifyingSpecialist from '@modules/CertifyingSpecialist'

export default {
  props: {
    specialist: {
      type: Object,
      required: true
    }
  },
  methods: {
    show (specialist) {
      this.$root.$emit('open-modal-specialist-show', specialist, this.service)
    }
  },
  computed: {
    photos () {
      return this.specialist.photos.data.slice(0, 3)
    },
    service () {
      if (has(this.specialist, 'services.data') && this.specialist.services.data.length) {
        return this.specialist.services.data[0]
      }

      return false
    },
    rating_class() {
      if (!this.specialist.rating) return
      return CertifyingSpecialist.getRatingClass(this.specialist.rating)
    },
    studio () {
      if (has(this.service, 'studio.data')) {
        return this.service.studio.data
      }

      return null
    }
  }
}
</script>

<style lang="sass" scoped>
  .ss-item-name-map
    color: red
</style>
