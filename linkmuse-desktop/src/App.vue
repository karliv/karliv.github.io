<template>
  <div id="app" data-server-rendered="true" :class="classNamesPage">
    <noscript>
      Please, enable JavaScript in your browser
    </noscript>

    <v-header v-sticky="{ stickyTop: 0, disabled: isMain }" :class="[ classNamesHeader ]" v-if="(hasHeader === true)"></v-header>

    <main :class="[{ 'custom-article' : customArticle }, classNamesMain]">
      <template>
        <router-view :class="[
          {
            'wrapper': ((isArticle && !customArticle) || isMain === false),
            'lm-content vs-wrapper' : ((customArticle || isArticle || isMain) === false)
          }
        ]">
        </router-view>
      </template>
    </main>

    <lm-modals></lm-modals>
    <modal-router-view></modal-router-view>
    <notifications position="bottom right" />
    <v-footer v-if="!customArticle"></v-footer>
  </div>
</template>

<script>
  import { has } from '@utils'
  import { mapGetters } from 'vuex'
  import VHeader from './views/includes/Header/Header.vue';
  import VFooter from './views/includes/Footer/Footer.vue';
  import LMModals from '@views/includes/Footer/Modals.vue';

  export default {
    metaInfo: {
      title: 'All',
      titleTemplate: '%s | Linkmuse',
      meta: [
        { name: 'og:type', content: 'website' },
        { name: 'og:image', content: 'https://s3.eu-central-1.amazonaws.com/linkmuse/upload/logo/logo_without_bottom_text_682.png' },
        { name: 'keywords', content: 'casting, linkmuse, актеры, кастинг, линкмьюз, линкмьюс, модели, работа актером, работа моделью' }
      ]
    },
    components: {
      'v-header': VHeader, 'v-footer': VFooter, 'lm-modals': LMModals
    },
    computed: {
      ...mapGetters({
        user: 'auth/getAuthUser',
        isAuthorized: 'auth/isAuthorized',
        article: 'article/getSingleArticleData'
      }),
      hasHeader () {
        return (!( has(this.$route, 'meta.header') && this.$route.meta.header === false ))
      },
      isArticle () {
        return has(this.$route, 'meta.article') && this.$route.meta.article === true
      },
      isMain () {
        return has(this.$route, 'meta.main') && this.$route.meta.main === true
      },
      customArticle () {
        return this.article && this.article['is_custom']
      },
      classNamesPage () {
        return has(this.$route, 'meta.classPage') ? this.$route.meta.classPage : []
      },
      classNamesMain () {
        return has(this.$route, 'meta.classMain') ? this.$route.meta.classMain : []
      },
      classNamesHeader () {
        return has(this.$route, 'meta.classHeader') ? this.$route.meta.classHeader : [ 'header_sticky', 'header_white' ]
      }
    },
    mounted () {
      console.log ('%c Hello, my dear friend.', 'background: #0063da; color: #fff; font-size: 20px');

      if (this.isAuthorized && this.user) {
        this.$echo.private(`user.${this.user.id}`).listen('.casting.response.new', ({ casting }) => {
          let { id, slug } = casting
          const { href } = this.$router.resolve({ name: 'board.castings.show', params: { id, slug }, query: { responses: true } })

          this.$notify({
            type: 'response',
            title: 'Новый отклик',
            text: `Получен новый отклик на объявление. <a href="${href}">Нажмите, чтобы посмотреть</a>`
          })
        })
      }
    }
  }
</script>

<style lang="sass">
  .fix-relative
    position: relative
</style>
