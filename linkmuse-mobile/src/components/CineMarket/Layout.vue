<template lang="html">
  <div :class="['cm-m-container', 'cm-m-bg-prime']">
    <div class="cm-m-page">
      <div class="cm-m-page-content cm-m-bg-prime">
        <div :class="['cm-m-wrapper-all-content', { 'back': backMenu }]">
          <div :class="['cm-m-wrap-menu', { 'back': backMenu } ]">
            <div class="cm-m-wrap-icon">
              <div class="cm-m-logo-menu" v-if="backMenu">
                <div class="cm-m-back-icon" @click="_handleGoBack"></div>
                <div v-if="title" class="cm-m-head-title">{{ title }}</div>
                <div v-else-if="!detail" class="cm-m-logo-menu-img"></div>
              </div>
              <router-link tag="div" class="cm-m-logo-menu" v-if="!backMenu" :to="{ name: 'cinemarket.index' }">
                <div class="cm-m-logo-menu-img"></div>
              </router-link>
            </div>
          </div>
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import moment from 'moment'
  import { has, isBrowser } from '@utils'
  import { createHelpers } from 'vuex-map-fields'

  const { mapFields } = createHelpers({
    getterType: 'cinemarket/getField',
    mutationType: 'cinemarket/updateField',
  })

  // const EVENT_DATES = [
  //   '25.10.2019',
  //   '26.10.2019',
  //   '27.10.2019'
  // ]
  // const dateString = moment().format('DD.MM.YYYY')
  // const dateString = '27.10.2019'
  // const appClass = `event-day-${EVENT_DATES.findIndex(e => e === dateString) + 1}`

  export default {
    name: 'cinemarket-layout',
    data () {
      return {
        program: null,
        title: ''
      }
    },
    beforeDestroy () {
      if (isBrowser) {
        // this.$chatBull.show()
        this.$nsWebViewInterface.emit("cinemarket", false)
        document.documentElement.classList.remove('cinemarket-page')
      }
    },
    mounted () {
      if (isBrowser) {
        // this.$chatBull.hide()
        // this.$root.$el.parentElement.classList.add(appClass)
        document.documentElement.classList.add('cinemarket-page')
        this.$nextTick(() => {
          this.title = this.$meta().inject().titleChunk
        })
        this.$nsWebViewInterface.emit("cinemarket", true)
      }
    },
    updated () {
      this.$nextTick(() => {
        this.title = this.$meta().inject().titleChunk
      })
    },
    computed: {
      backMenu () {
        return this.$route.name !== 'cinemarket.index'
      },
      detail () {
        return has(this.$route.meta, 'detail') && this.$route.meta.detail
      },
      index () {
        return this.$route.name === 'cinemarket.index'
      },
    },
    methods: {
      _handleGoBack () {
        this.$nextTick(() => {
          this.$route.name === 'cinemarket.pitch' ? this.$router.push({ name: 'cinemarket.pitches' }) : this.$router.push({ name: 'cinemarket.index' })
        })
      },
      _handleUpdateTitle (val) {
        this.title = val
      },
      mediaByUrl (url) {
        return {
          id: parseInt(Math.random() * 100000),
          paths: {
            '128x128': url,
            original: url
          },
          sizes: {
            height: 1280,
            width: 720
          },
          player: null,
          src: url,
          thumbs: false,
          type: "photo"
        }
      }
    }
  }
</script>

<style lang="css" scoped>
</style>
