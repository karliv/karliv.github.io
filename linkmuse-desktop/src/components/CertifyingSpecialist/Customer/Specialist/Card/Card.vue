<template>
  <div class="ss-item">
    <div class="ss-item-left">
      <div class="center">
        <a :href="specialist.href">
          <img :src="specialist.avatar" :alt="specialist.name">
        </a>
        <div :class="[ 'lm-rating', rating_class ]" v-if="specialist.rating">{{ specialist.rating | round(1) }}</div>
      </div>

      <template v-if="specialist.certifying_name">
        <tooltip class="d-tooltip d-tooltip_vs-list"  effect="scale" placement="right" :content="`Данный специалист работает под ${specialist.type === INDIVIDUAL_ENTREPRENEUR ? 'ИП' : ''} “${specialist.certifying_name}”`">
          <svg class="d-tooltip__icon">
            <use xlink:href="/dist/img/icons/verification/sprite.svg#icon_info" />
          </svg>
        </tooltip>
      </template>

      <div class="user-info">
        <a :href="specialist.href" class="ss-item-name">{{ specialist.name | truncate(20) }}</a>
        <div class="ss-item-point lm-locatin-icon" v-if="studio">{{ studio.address | truncate(20) }}</div>
        <div class="links-ss">
          <a href="javascript:void(0)" @click="show(specialist)">
            <span class="text">Верификаций</span>
            <span class="count">{{ specialist.counters.orders }}</span>
          </a>
          <a href="javascript:void(0)" @click="show(specialist)">
            <span class="text">Услуг</span>
            <span class="count">{{ specialist.counters.services }}</span>
          </a>
        </div>
        <a href="javascript:void(0)" class="lm-outline-button small" @click="show(specialist)" :id="service.slug">Подробнее</a>
      </div>
    </div>
    <div class="ss-item-right">
      <div class="ss-item-images" v-if="this.specialist.photos.data.length">
        <div class="ss-item-images-left" v-if="photos.left.length">
          <media v-for="photo in photos.left" :key="photo.id"
                 :media="photo" type="photo" :src="photo.paths.original" :album="`photos_${specialist.id}`">
            <img v-media="{ item: photo.paths, key: '128x128', fallback: photo.paths.original }" :src="photo.paths['128x128']" :alt="specialist.name">
          </media>
        </div>
        <div class="ss-item-images-center">
          <media v-for="photo in photos.center" :key="photo.id"
                 :media="photo" type="photo" :src="photo.paths.original" :album="`photos_${specialist.id}`">
            <img v-media="{ item: photo.paths, key: '128x128', fallback: photo.paths.original }" :src="photo.paths['128x128']" :alt="specialist.name">
          </media>
        </div>
        <div class="ss-item-images-right">

          <media v-for="photo in photos.right" :key="photo.id"
                 :media="photo" type="photo" :src="photo.paths.original">
            <img v-media="{ item: photo.paths, key: '128x128', fallback: photo.paths.original }" :src="photo.paths['128x128']" :alt="specialist.name" :album="`photos_${specialist.id}`">
          </media>

          <!--
          <a href="" class="read-more-photos">
              <span class="count">+54</span>
          </a>
          -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { has } from '@utils'
import CertifyingSpecialist from '@modules/CertifyingSpecialist'
import { INDIVIDUAL_ENTREPRENEUR } from '@modules/CertifyingSpecialist/Enums/Types'

export default {
  props: {
    specialist: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      INDIVIDUAL_ENTREPRENEUR
    }
  },
  methods: {
    show (user_id) {
      this.$root.$emit('open-modal-specialist-show', user_id, this.service, this.service_id)
    }
  },
  computed: {
    photos () {
      return {
        left: [...this.specialist.photos.data.slice(0, 1)],
        center: [...this.specialist.photos.data.slice(1, 3)],
        right: [...this.specialist.photos.data.slice(3, 5)]
      }
    },
    rating_class() {
      if (!this.specialist.rating) return
      return CertifyingSpecialist.getRatingClass(this.specialist.rating)
    },
    service () {
      if (has(this.specialist, 'services.data') && this.specialist.services.data.length) {
        return this.specialist.services.data[0]
      }

      return false
    },
    studio () {
      if (has(this.service, 'studio.data')) {
        return this.service.studio.data
      }

      return null
    },
    service_id () {
      return this.service ? this.service.id : null
    }
  }
}
</script>
