<template>
  <div style="height: 100%;">
    <template v-if="isPublished">
      <template v-if="isModelPortfolio">
        <div class="portfolio-model">
          <div class="portfolio-model-wrap">
            <div class="portfolio-model-left">
              <media v-for="item in cells.slice(0, 1)" :key="`photo-${item['data']['id']}-portfolio-${portfolio.id}`" :album="`portfolio-${portfolio.id}`"
                     type="photo" :media="item['data']" :src="item['data']['path']">
                <img :src="item['thumbnail']" :alt="`Портфолио #${portfolio.id}`">
              </media>
            </div>
            <div class="portfolio-model-right">
              <div class="portfolio-model-right-top videoo">
                <media v-for="item in cells.slice(1, 2)" :key="`photo-${item['data']['id']}-portfolio-${portfolio.id}`" :album="`portfolio-${portfolio.id}`"
                       type="video" :media="item['data']" :player="item['data']['player']" class="video">
                  <img :src="item['data']['cover_image']" :alt="`Портфолио #${portfolio.id}`">
                </media>
              </div>
              <div class="portfolio-model-right-bottom">
                <div v-for="item in cells.slice(2, 4)" :key="`photo-${item['data']['id']}-portfolio-${portfolio.id}`">
                  <media :album="`portfolio-${portfolio.id}`"
                         type="photo" :media="item['data']" :src="item['data']['path']">
                    <img :src="item['thumbnail']" :alt="`Портфолио #${portfolio.id}`">
                  </media>
                </div>
              </div>
            </div>
          </div>
        </div>
      </template>
      <template v-if="isMusicPortfolio">
        <div class="music">
          <div class="portfolio-music">
            <div class="portfolio-music-wrap">
              <div class="portfolio-music-top">
                <div class="music-item" v-for="(item, key) in audios.slice(0, 5)" :key="`audio-${item['data']['id']}-${key}-portfolio-${portfolio.id}`">
                  <audio-item class="audio" :audio="item['data']"  @play="_handlePlayAudio" :audioId="item['data']['audio_id']">
                    <div class="audio-image">
                      <img :src="item['data']['album_cover_260']" :alt="`Портфолио #${portfolio.id}`">
                    </div>
                    <div class="name-music">{{ item['data']['name'] }}</div>
                    <div class="name-artist">{{ item['data']['author'] }}</div>
                  </audio-item>
                </div>
              </div>
              <div class="portfolio-music-bottom">
                <div class="select-video video">
                  <media v-for="item in cells.slice(5, 6)" :key="`photo-${item['data']['id']}-portfolio-${portfolio.id}`" :album="`portfolio-${portfolio.id}`"
                         type="video" :media="item['data']" :player="item['data']['player']" class="video">
                    <img :src="item['data']['cover_image']" :alt="`Портфолио #${portfolio.id}`">
                  </media>
                </div>
                <div class="select-photo image" v-for="item in cells.slice(6, 8)" :key="`photo-${item['data']['id']}-portfolio-${portfolio.id}`">
                  <media :album="`portfolio-${portfolio.id}`"
                         type="photo" :media="item['data']" :src="item['data']['path']">
                    <img :src="item['thumbnail']" :alt="`Портфолио #${portfolio.id}`">
                  </media>
                </div>
              </div>
            </div>
          </div>
        </div>
      </template>
    </template>
  </div>
</template>

<script>
  import { has } from '@utils'

  export default {
    props: {
      portfolio: {
        required: true,
        default: () => {}
      },
      userUrl: {
        required: true
      }
    },
    computed: {
      isPublished () {
        return !!this.portfolio['publish']
      },
      isModelPortfolio () {
        return (this.portfolio.template === 0)
      },
      isMusicPortfolio () {
        return (this.portfolio.template === 1)
      },
      cells () {
        return (has(this.portfolio, 'cells.data')) ? this.portfolio['cells']['data'] : []
      },
      audios () {
        return this.cells.filter(c => c.type === 'audio' && has(c, 'data.id'))
      },
      playlist () {
        return this.audios.map(i => i['data'])
      }
    },
    methods: {
      _handlePlayAudio (audioId) {
        this.$store.dispatch('audio/setPlaylist', this.playlist)

        this.$nextTick(() => {
          this.$root.$emit('start-play-audio', audioId);
        })
      }
    }
  }
</script>

<style scoped>

</style>
