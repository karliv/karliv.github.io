<template>
  <div class="lm-m-article-wrap">
    <div class="lm-m-article-wrap--item">
      <div class="lm-m-article-overflow-item" :style="{ paddingTop: '24px' }">
        <h1 class="blog-title">{{ $t('boardbox.boardbox-screen.ads') }}</h1>
        <template>
          <div class="text">
            <ul>
              <li><router-link :to="{ name: 'board.create' }" class="d-link">Создать</router-link></li>
              <li><router-link :to="{ name: 'board.castings.index' }" class="d-link">Кастинги</router-link></li>
              <li><router-link :to="{ name: 'board.locations.index' }" class="d-link">Локации</router-link></li>
            </ul>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import languages from '@/i18n/languages'
  import { redirect, expires } from '@utils'
  import { Indicator, Toast } from 'mint-ui'

  export default {
    computed: {
      ...mapGetters({
        user: 'auth/getAuthUser',
        isAuthorized: 'auth/isAuthorized'
      })
    },
    methods: {
      _handleClickTestGtmNative () {
        this.$root.reachGoalGtm({ event: 'test_gtm' })
      },
      _handleClickTestGtmWrapper () {
        this.$gtm.trackEvent({ event: 'test_gtm' })
      },
      _handleClickSetLang (locale) {
        if (this.isAuthorized) {
          this._savedUserLocale(locale).then(() => {
            this._setLangToStorage(locale).then(() => { redirect() }).catch(() => {})
          }).catch(() => {})
        } else this._setLangToStorage(locale).then(() => { redirect() }).catch(() => {})
      },
      _setLangToStorage (lang) {
        return new Promise((resolve, reject) => {
          const { locale } = languages.find(l => lang === l.alternate || lang === l.locale) || {}
          if (!locale) {
            resolve && reject('Language not found')
            throw('Language not found')
          } else {
            this.$store.dispatch('auth/setLocale', lang)
            resolve && resolve(lang)
          }
        })
      },
      _savedUserLocale (locale) {
        return new Promise((resolve, reject) => {
          Indicator.open()

          this.$api.post('api/v2/users/locale', { locale }).then((response) => {
            const { data } = response

            Indicator.close()
            resolve && resolve(locale)
          }, (error) => {
            Indicator.close()
            Toast({ message: 'Ошибка', iconClass: 'mintui mintui-field-error' })

            reject && reject()

            throw new Error('Error saved locale')
          })
        })
      },
    }
  }
</script>

<style scoped>

</style>
