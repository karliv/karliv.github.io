<template>
  <div :class="['lm-m-profile-portfolio', 'model']">
      <template v-if="(measurement)">
        <certification-measurement :measurement="measurement"></certification-measurement>
      </template>

      <template v-if="(video)">
        <media type="video" :player="video['player']" :media="video" :album="`certification_${certification.id}`">
          <div class="lm-m-model-portofolio video">
            <img :src="video['cover_image']" :alt="`Верификация #${certification.id}`">
            <i class="lm-play-button big"></i>
          </div>
        </media>
      </template>

      <template v-if="(photos && photos.length)">
        <media type="photo" :src="photo['paths']['original']" :media="photo" :album="`certification_${certification.id}`" v-for="photo in photos" :key="photo.id">
          <div class="lm-m-model-portofolio portret">
            <img :src="photo['paths']['404x480']" :alt="`Верификация #${certification.id}`" :style="{ height: 'auto' }">
          </div>
        </media>
      </template>
    </div>
</template>

<script>
  import { has } from '@utils'

  export default {
    props: {
      certification: {
        required: true,
        default: () => {}
      }
    },
    computed: {
      certifyingSpecialist () {
        return (has(this.certification, 'certifying_specialist.data')) ? this.certification['certifying_specialist']['data'] : false
      },
      measurement () {
        return (has(this.certification, 'measurement.data.body-parameters')) ? this.certification['measurement']['data']['body-parameters'] : false
      },
      photos () {
        return (has(this.certification, 'photos.data')) ? this.certification['photos']['data'] : []
      },
      video () {
        return (has(this.certification, 'video.data')) ? this.certification['video']['data'] : false
      }
    }
  }
</script>

<style scoped>

</style>
