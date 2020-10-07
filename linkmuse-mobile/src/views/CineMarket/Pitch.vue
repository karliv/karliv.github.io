<template lang="html">
  <div>
    <div class="cm-m-wrapper-content cm-wrap-content fh">
      <lm-m-loader v-if="loading"></lm-m-loader>
      <div class="cm-m-web-series mb_6" v-if="pitch">
        <div :class="['cm-m-wrap-series', { 'voted': pitch.voted }]">
          <template v-if="pitch.photo">
            <media class="cm-m-photo" :media="$parent.mediaByUrl(pitch.photo)" :type="'photo'" :src="pitch.photo">
              <img :src="pitch.photo" class="cm-m-series">
            </media>
          </template>
          <template v-else>
            <div class="cm-m-photo">
              <img :src="pitch.photo" class="cm-m-series">
            </div>
          </template>
          <div class="cm-m-wrap-text-series">
            <div class="cm-m-h2-text-series">{{ pitch.name }}</div>
            <div class="cm-m-h3-text-series">{{ pitch.member }}</div>
          </div>
          <div class="cm-m-wrap-icon-series">
            <div :class="['cm-m-icon-star-series', { 'active': !pitch.i }]">
              <span class="cm-m-numbers-star">{{ pitch.i+1 }}</span>
            </div>
          </div>
          <div class="cm-m-wrap-choice cm-m-bg-second" v-if="pitch.voted">
            <span class="cm-m-choice">Ваш выбор</span>
          </div>
        </div>
      </div>
      <div class="cm-m-pitch-wrap">
        <div class="cm-m-section mb_4" v-if="pitch.format">
          <div class="cm-m-text-h4 mb_0_5">
            Формат
          </div>
          <div class="cm-m-text-h3">
            {{ pitch.format }}
          </div>
        </div>
        <div class="cm-m-section mb_4" v-if="pitch.genre">
          <div class="cm-m-text-h4 mb_0_5">
            Жанр
          </div>
          <div class="cm-m-text-h3">
            {{ pitch.genre }}
          </div>
        </div>
        <div class="cm-m-section mb_4" v-if="pitch.angle">
          <div class="cm-m-text-h4 mb_0_5">
            Теглайн
          </div>
          <div class="cm-m-text-h3">
            {{ pitch.angle }}
          </div>
        </div>
        <div class="cm-m-section mb_4" v-if="pitch.description">
          <div class="cm-m-text-h4 mb_0_5">
            Описание
          </div>
          <div class="cm-m-text-h3" v-html="$options.filters.nl2br(pitch.description)"></div>
        </div>

        <div class="cm-m-pitch-team-wrap" v-if="teamPitch">
          <div class="cm-m-text-h2 mb_4 cm-m-color-prime">
            Комманда
          </div>
          <div class="сm-m-wrap-card mb_3" v-for="item of teamPitch">
            <div class="mr_20">
              <template v-if="item.photo">
                <media :media="$parent.mediaByUrl(item.photo)" :type="'photo'" :src="item.photo">
                  <img class="сm-m-wrap-photo-card cm-m-bg-second" :src="item.photo" alt="">
                </media>
              </template>
              <template v-else>
                <img class="сm-m-wrap-photo-card cm-m-bg-second" :src="item.photo" alt="">
              </template>
            </div>
            <div class="cm-m-wrap-text-card">
              <div class="cm-m-text-h3 mb_1">
                {{ item.name }}
              </div>
              <div class="cm-m-text-h4 mb_4">
                {{ item.profession }}
              </div>
              <template v-if="item.birth">
                <div class="cm-m-text-h4 mb_1">
                  Родился
                </div>
                <div class="cm-m-text-h3 mb_4">
                  {{ [item.birth, 'DD.MM.YYYY'] | moment('DD MMMM Y') }} г.
                </div>
              </template>
              <template v-if="item.films">
                <div class="cm-m-text-h4 mb_1">
                  Фильмография
                </div>
                <div class="cm-m-text-h3 mb_4" v-html="$options.filters.nl2br(item.films)"></div>
              </template>
            </div>
          </div>
          <!--            <div class="cm-m-text-h3" v-html="$options.filters.nl2br(pitch.team)"></div>-->
        </div>
        <div class="cm-m-wrap-content cm-m-vote-btn cm-m-bg-second" @click="_handleVote(pitch.name)"
             v-if="!pitch.voted && (pitch.ready && String(pitch.ready).toLowerCase() === 'да') && !has(voteInCategories, pitch.category) && isAuthorized">
          <lm-m-loader :color="'#fff'" v-if="pitch.loading"></lm-m-loader>
          <template v-if="!pitch.loading">
            <button class="cm-m-btn">Проголосовать</button>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { has } from '@utils'
  import { Indicator, Toast } from 'mint-ui'
  import { mapGetters, mapActions } from 'vuex'

  let interval = null

  export default {
    metaInfo () {
      return {
        title: this.title
      }
    },
    data () {
      return {
        has,
        category: null,
      }
    },
    mounted () {
      interval = setInterval(() => {
        this.$store.dispatch('cinemarket/getPitches')
      }, 1000 * 60)
    },
    beforeDestroy () {
      clearInterval(interval)
    },
    async asyncData ({ store, route }) {
      await Promise.all([
        store.dispatch('cinemarket/getPitchesCategories'),
        store.dispatch('cinemarket/getPitches'),
        store.dispatch('cinemarket/getTeam'),
      ])
    },
    computed: {
      ...mapGetters({
        team: 'cinemarket/getTeamData',
        isAuthorized: 'auth/isAuthorized',
        error: 'cinemarket/getPitchesError',
        pitches: 'cinemarket/getPitchesData',
        loading: 'cinemarket/getPitchesLoading',
        errorCategories: 'cinemarket/getPitchesCategoriesError',
        pitchesCategories: 'cinemarket/getPitchesCategoriesData',
        loadingCategories: 'cinemarket/getPitchesCategoriesLoading',
      }),
      pitchesFromCategories () {
        if (!this.pitches.length) return

        const result = {}

        this.pitchesCategories.forEach(category => {
          result[category] = []
        })

        this.pitches.forEach(item => result[item.category].push(item))

        return result
      },
      voteInCategories () {
        if (!this.pitches.length) return

        const result = {}

        for (let cat in this.pitchesFromCategories) {
          if (this.pitchesFromCategories[cat].find(e => e.voted)) result[cat] = true
        }

        return result
      },
      pitch () {
        if (!this.pitches.length) return

        let pitch = {}
        const slug = this.$route.params.slug
        for (let cat in this.pitchesFromCategories) {
          this.pitchesFromCategories[cat].forEach((e, i) => {
            if (e.slug === slug) {
              pitch = { ...e, i }

              return pitch
            }
          })
        }

        return pitch
      },
      title () {
        if (!this.pitch) return

        const category = this.pitch ? this.pitch.category : ''

        this.$parent._handleUpdateTitle(category)

        return category
      },
      teamPitch () {
        if (!this.team.length || !this.pitch) return

        return this.team.filter(e => e.pitch === this.pitch.name)
      }
    },
    methods: {
      _handleVote (name) {
        this.$store.dispatch('cinemarket/votePitch', name).then(() => {
          console.log(this);
          Toast({ message: 'Успешно', iconClass: 'mintui mintui-success' })
        }).catch(err => {
          console.log(this);
          Toast({ message: 'Ошибка', iconClass: 'mintui mintui-field-error' })
        })
      }
    }
  }
</script>

<style lang="css" scoped>
</style>
