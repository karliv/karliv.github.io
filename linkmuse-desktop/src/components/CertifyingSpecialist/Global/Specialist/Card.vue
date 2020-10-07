<template>
  <div class="ss-item" @click="_handleClickOpenModalShowSpecialist">
    <div class="ss-item-left">
      <div class="center">
        <a href="javascript:void(0)">
          <img :src="specialist.avatar" :alt="specialist.name">
          <div :class="[ 'lm-rating', rating_class ]" v-if="specialist.rating">{{ specialist.rating | round(1) }}</div>
        </a>
      </div>

      <template v-if="specialist.certifying_name">
        <tooltip class="d-tooltip d-tooltip_vs-list"  effect="scale" placement="right" :content="`Данный специалист работает под ${specialist.type === INDIVIDUAL_ENTREPRENEUR ? 'ИП' : ''} “${specialist.certifying_name}”`">
          <svg class="d-tooltip__icon">
            <use xlink:href="/dist/img/icons/verification/sprite.svg#icon_info" />
          </svg>
        </tooltip>
      </template>

      <div class="user-info">
        <a :href="specialist.href" class="ss-item-name">{{ specialist.name }}</a>
        <div class="ss-item-point" v-if="city"><b>{{ city }}</b></div>
        <div class="links-ss">
          <a href="javascript:void(0)">
            Верификаций {{ specialist.counters.orders }}
          </a>
          <a href="javascript:void(0)">
            Услуг {{ specialist.counters.services }}
          </a>
        </div>
        <a href="javascript:void(0)" class="read-more">Подробнее</a>
      </div>
    </div>
    <div :class="{ 'ss-item-right': true, empty: (!specialist.photos.data.length && !specialist.videos.data.length) }" @click.stop.prevent>
      <div class="ss-item-images" v-if="(specialist.photos.data.length || specialist.videos.data.length)">

        <div v-for="(media, index) in multimedia.slice(0, 4)" :key="`specialist_${specialist.id}_photo_${media.id}`">
          <template v-if="(media.type === 'photo' || media.type === 'order_photo' || media.type === 'certifying_specialist_photo')">
            <media :media="media" type="photo" :src="media.paths.original" :album="`media_${specialist.id}`" :class="{ 'read-more': ((index + 1 ) === 4 && multimedia.length > 4) }">
              <img v-media="{ item: media.paths, key: '128x128', fallback: media.paths.original }" :src="media.paths['128x128']" :alt="specialist.name">
              <template v-if="((index + 1 ) === 4 && multimedia.length > 4)">
                <span @click.stop.prevent="_handleClickOpenModalShowSpecialist">Подробнее</span>
              </template>
            </media>
          </template>
          <template v-if="(media.type === 'video' || media.type === 'order_video' || media.type === 'certifying_specialist_video')">
            <media :media="media" class="video" type="video" :player="media.player" :album="`media_${specialist.id}`" :class="{ 'read-more': ((index + 1 ) === 4 && multimedia.length > 4) }">
              <img :src="media['cover_image']" :alt="specialist.name">
              <template v-if="((index + 1 ) === 4 && multimedia.length > 4)">
                <span @click.stop.prevent="_handleClickOpenModalShowSpecialist">Подробнее</span>
              </template>
            </media>
          </template>
        </div>

        <template v-if="(true === false)">
          <div>
            <a class="read-more" href="javascript:void(0)">
              <img src="https://7k4lcn62eg.execute-api.eu-central-1.amazonaws.com/dev/upload/certifying_specialist/photos/Cc/pY/CcpYaMbJhJuMFFIaNeBg-128x128.jpg" alt="выфвфы">
              <span>Подробнее</span>
            </a>
          </div>
          <div class="video-wait" >Видео в обработке</div>
          <div v-if="(true === false)" v-for="video in videos" :key="`video_${video.id}`">
            <media :media="video" class="video" type="video" :player="video.player" :album="`media_${specialist.id}`">
              <img :src="video['cover_image']" :alt="specialist.name">
            </media>
          </div>
        </template>

      </div>
      <template v-else>Фотографий нет ☹</template>
    </div>
  </div>
</template>

<script>
import { has } from '@utils'
import { Carousel, Slide } from 'vue-carousel';
import CertifyingSpecialist from '@modules/CertifyingSpecialist'
import { INDIVIDUAL_ENTREPRENEUR } from '@modules/CertifyingSpecialist/Enums/Types'

export default {
  components: { Carousel, Slide },
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
    _handleClickOpenModalShowSpecialist () {
      if (!this.specialist) return
      this.$root.$emit('open-modal-specialist-show', this.specialist, this.service, this.service_id)
    }
  },
  computed: {
    multimedia () {
      return [...this.specialist.photos.data, ...this.specialist.videos.data]
    },
    photos () {
      return this.specialist.photos.data.slice(0, 4)
    },
    videos () {
      return this.specialist.videos.data
    },
    city () {
      if (!has(this.specialist, 'city.data.name')) return;
      return this.specialist.city.data.name;
    },
    service_id () {
      return this.$route.query.service_id || null
    },
    service () {
      if (has(this.specialist, 'services.data') && this.specialist.services.data.length) {
        let service = this.service_id ? this.specialist.services.data.find(item => this.service_id === item.id) : null

        return this.service_id && service ? service : this.specialist.services.data[0]
      }

      return false
    },
    rating_class () {
      if (!this.specialist.rating) return
      return CertifyingSpecialist.getRatingClass(this.specialist.rating)
    }
  }
}
</script>
