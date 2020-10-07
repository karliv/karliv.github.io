<template lang="html">
  <div>
    <div class="cm-m-wrapper-content cm-m-bg-prime cm-m-head cm-wrap-content">
      <div class="cm-m-row">
        <nav class="cm-m-nav-date">
          <div class="cm-m-nav-list-date">
            <template v-for="cat of pitchesCategories">
              <a @click="category = cat"
                 :class="['cm-m-nav-item-date', { 'active': activeCategory === cat, 'cm-m-color-prime': activeCategory === cat }]">
                {{ cat }}
              </a>
            </template>
          </div>
        </nav>
      </div>
    </div>

    <div class="cm-m-wrapper-content fh cm-wrap-content">
      <lm-m-loader v-if="loading"></lm-m-loader>
      <template v-if="pitchesCategories && pitchesFromCategories">
        <template v-for="cat of pitchesCategories">
          <transition name="list-fade" mode="out-in">
            <div v-if="activeCategory === cat">
              <div class="cm-m-web-series mb_3" v-for="(pitch, i) of pitchesFromCategories[cat]" :class="{ 'voted': pitch.voted }">
                <router-link tag="div" :to="{ name: 'cinemarket.pitch', params: { slug: pitch.slug } }"
                             :class="['cm-m-wrap-series', { 'voted': pitch.voted || has(voteInCategories, cat) }]">
                  <div class="cm-m-photo">
                    <img :src="pitch.photo" class="cm-m-series">
                  </div>
                  <div class="cm-m-wrap-text-series">
                    <div class="cm-m-h2-text-series">{{ pitch.name }}</div>
                    <div class="cm-m-h3-text-series">{{ pitch.member }}</div>
                  </div>
                  <div class="cm-m-wrap-icon-series">
                    <div :class="['cm-m-icon-star-series', { 'active': !i }]">
                      <span class="cm-m-numbers-star">{{ i+1 }}</span>
                    </div>
                  </div>
                  <div class="cm-m-wrap-choice cm-m-bg-second" v-if="pitch.voted">
                    <span class="cm-m-choice">Ваш выбор</span>
                  </div>
                </router-link>
                <div class="cm-m-wrap-content cm-m-bg-second" @click="_handleVote(pitch.name)"
                     v-if="!pitch.voted && (pitch.ready && String(pitch.ready).toLowerCase() === 'да') && !has(voteInCategories, cat) && isAuthorized">
                  <lm-m-loader :color="'#ffffff'" v-if="pitch.loading"></lm-m-loader>
                  <template v-if="!pitch.loading">
                    <button class="cm-m-btn">Проголосовать</button>
                  </template>
                </div>
              </div>
            </div>
          </transition>
        </template>
      </template>
    </div>
  </div>
</template>

<script>
  import { has } from '@utils'
  import { Indicator, Toast } from 'mint-ui'
  import { mapGetters, mapActions } from 'vuex'
  import { createHelpers } from 'vuex-map-fields'

  let interval = null

  const { mapFields } = createHelpers({
    getterType: 'cinemarket/getField',
    mutationType: 'cinemarket/updateField',
  })

  export default {
    metaInfo: {
      title: 'Питчинги'
    },
    data () {
      return {
        has,
        title: 'Питчинги',
      }
    },
    async asyncData ({ store, route }) {
      await Promise.all([
        store.dispatch('cinemarket/getPitchesCategories'),
        store.dispatch('cinemarket/getPitches'),
      ])
    },
    mounted () {
      interval = setInterval(() => {
        this.$store.dispatch('cinemarket/getPitches')
      }, 1000 * 60)
    },
    beforeDestroy () {
      clearInterval(interval)
    },
    computed: {
      ...mapGetters({
        isAuthorized: 'auth/isAuthorized',
        error: 'cinemarket/getPitchesError',
        pitches: 'cinemarket/getPitchesData',
        loading: 'cinemarket/getPitchesLoading',
        errorCategories: 'cinemarket/getPitchesCategoriesError',
        pitchesCategories: 'cinemarket/getPitchesCategoriesData',
        loadingCategories: 'cinemarket/getPitchesCategoriesLoading',
      }),
      ...mapFields({
        category: 'pitches.categories.active',
      }),
      activeCategory () {
        return this.category ? this.category : this.pitchesCategories.length ? this.pitchesCategories[0] : null
      },
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
