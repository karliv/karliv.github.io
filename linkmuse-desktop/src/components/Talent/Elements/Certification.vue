<template>
  <div class="vs-portfolio">
    <template v-if="(measurement)">
      <certification-measurement :measurement="measurement"></certification-measurement>
    </template>

    <template v-if="(hasPhotos === true || video)">
      <template v-if="(hasPhotos === true && !video)">
        <div class="vs-portfolio-content tree">
          <media v-for="item in photos.slice(0, 3)" :key="`photo-${item.id}-certification-${item.order_id}`" :album="`certification-${item.order_id}`"
                       type="photo" :media="item" :src="item.paths.original">
            <img :src="item.paths['404x480']" :alt="`Верификация #${item.order_id}`">
          </media>
        </div>
      </template>

      <template v-if="(hasPhotos === false && video)">
        <media :media="video" type="video" :player="video.player" :album="`certification-${video.order_id}`">
          <img :src="video['cover_image']" :alt="`Верификация #${video.order_id}`">
        </media>
      </template>

      <template v-if="(hasPhotos === true && video)">
        <div class="portfolio-model">
          <div class="portfolio-model-wrap">
            <div class="portfolio-model-left">
              <media v-for="item in photos.slice(0, 1)" :key="`photo-${item.id}-certification-${item.order_id}`" :album="`certification-${item.order_id}`"
                     type="photo" :media="item" :src="item.paths.original">
                <img :src="item.paths['404x480']" :alt="`Верификация #${item.order_id}`">
              </media>
            </div>
            <div class="portfolio-model-right">
              <div class="portfolio-model-right-top videoo">
                <media :media="video" type="video" :player="video.player" class="video" :album="`certification-${video.order_id}`">
                  <img :src="video['cover_image']" :alt="`Верификация #${video.order_id}`">
                </media>
              </div>
              <div class="portfolio-model-right-bottom">
                <div v-for="item in photos.slice(1, 3)" :key="`photo-${item.id}-certification-${item.order_id}`">
                  <media :album="`certification-${item.order_id}`"
                          type="photo" :media="item" :src="item.paths.original">
                    <img :src="item.paths['198x236']" :alt="`Верификация #${item.order_id}`">
                  </media>
                </div>
              </div>
            </div>
          </div>
        </div>
      </template>
    </template>

    <div class="сс-info-bottom">
      <template v-if="certifyingSpecialist">
        <a target="_blank" :href="certifyingSpecialist.href" class="lm-user-block" v-if="certifyingSpecialist">
<!--           <img :src="certifyingSpecialist.avatar" :alt="certifyingSpecialist.name" class="lm-user-block-avatar"> -->
          <div class="lm-user-block-info">
            <div class="lm-user-block-info-name"><span>{{ certifyingSpecialist.name }}</span></div>
            <div class="lm-user-block-info-type">Верифицирующий специалист</div>
          </div>
        </a>
      </template>

      <div class="сс-info-bottom-right">
        <div class="cc-info__date">{{ certification.certified_at | moment('DD MMM YYYY') }}</div>
        <div class="cc-info__label">Дата верификации</div>
      </div>
    </div>
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
      hasPhotos () {
        return (this.photos.length > 0)
      },
      video () {
        return (has(this.certification, 'video.data')) ? this.certification['video']['data'] : false
      }
    }
  }
</script>

<style scoped>

</style>
