<template>
  <div class="lm-m-certifyingspecialist-item" @click="_handleClickSelectedSpecialist" :id="service.slug">
    <div class="lm-user-block">
      <a href="javascript:void(0)">
        <div>
          <img :src="specialist.avatar" :alt="specialist.name" class="lm-user-block-avatar">
          <div class="lm-user-block-info">
            <div class="lm-user-block-info-name"><span>{{ specialist.name | truncate(35) }}</span></div>
            <div class="lm-user-block-info-type" v-if="service">{{ service.address | truncate(35) }}</div>
          </div>
        </div>
        <template v-if="specialist.rating">
          <div :class="[ 'lm-user-block-rating', rating_class ]">{{ specialist.rating | round(1) }}</div>
        </template>
      </a>
    </div>
    <template v-if="specialist.photos.data.length || specialist.videos.data.length">
      <div class="lm-m-certifyingspecialist-media" @click.stop.prevent>
          <media v-for="(item) in media.mobile.slice(0, 1)" :key="item.id" :class="[ item.type.includes('photo') ? 'photo' : 'video' ]" :media="item"
                 :type="item.type.includes('photo') ? 'photo' : 'video'" :src="(item.type.includes('photo')) ? item.paths.original : null"
                 :player="(item.type.includes('video')) ? item.player : null" :album="`media_${specialist.id}`">
            <img v-media="{ item: item.paths, key: '128x128', fallback: (item.type.includes('photo')) ? item.paths['original'] : (item.cover_image) }"
                 :src="(item.type.includes('photo')) ? item.paths['128x128'] : (item.cover_image)" :alt="specialist.name">
            <i v-if="(has(item, 'type') && item.type.includes('video'))" class="lm-play-button"></i>
          </media>

        <media v-for="(item) in media.tablet" :key="item.id" :class="[item.type.includes('photo') ? 'photo' : 'video', 'tablet-view']" :media="item"
               :type="item.type.includes('photo') ? 'photo' : 'video'" :src="(item.type.includes('photo')) ? item.paths.original : null"
               :player="(item.type.includes('video')) ? item.player : null" :album="`media_${specialist.id}`">
          <img v-media="{ item: item.paths, key: '128x128', fallback: (item.type.includes('photo')) ? item.paths['original'] : (item.cover_image) }"
               :src="(item.type.includes('photo')) ? item.paths['128x128'] : (item.cover_image)" :alt="specialist.name">
          <i v-if="(has(item, 'type') && item.type.includes('video'))" class="lm-play-button"></i>
        </media>

        <media v-for="(item) in media.mobile.slice(1, 2)" :key="item.id" :class="[item.type.includes('photo') ? 'photo' : 'video', 'more']" :media="item"
               :type="item.type.includes('photo') ? 'photo' : 'video'" :src="(item.type.includes('photo')) ? item.paths.original : null"
               :player="(item.type.includes('video')) ? item.player : null" :album="`media_${specialist.id}`">
          <span @click.stop="_handleClickSelectedSpecialist">Подробнее</span>
          <img v-media="{ item: item.paths, key: '128x128', fallback: (item.type.includes('photo')) ? item.paths['original'] : (item.cover_image) }"
               :src="(item.type.includes('photo')) ? item.paths['128x128'] : (item.cover_image)" :alt="specialist.name">
          <i v-if="(has(item, 'type') && item.type.includes('video'))" class="lm-play-button"></i>
        </media>
      </div>
    </template>
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
    data () {
      return {
        has
      }
    },
    methods: {
      _handleClickSelectedSpecialist () {
        this.$emit('selected', this.specialist.id, (this.service ? this.service.id : null))
      }
    },
    computed: {
      photos () {
        return this.specialist.photos.data
        // return {
        //   mobile: [...this.specialist.photos.data.slice(0, 2)],
        //   tablet: [...this.specialist.photos.data.slice(2, 5)]
        // }
      },
      videos () {
        return this.specialist.videos.data
      },
      media () {
        return {
          mobile: [...this.photos, ...this.videos].slice(0, 2),
          tablet: [...this.photos, ...this.videos].slice(2, 5)
        }
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
      }
    }
  }
</script>

<style scoped>

</style>
