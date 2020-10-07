<template>
  <div class="lm-m-article-wrap static-page">
    <div class="lm-m-article-wrap--item">
      <div class="lm-m-article-overflow-item">
        <h1 class="static-head">{{ title }}</h1>
        <template v-if="text">
          <div class="static-page-text" v-html="text"></div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
  import { has } from '@utils'
  import { mapGetters, mapActions } from 'vuex'

  export default {
    metaInfo () {
      return {
        title: this.title
      }
    },
    async asyncData ({store, route}) {
      let { slug } = route.params

      await Promise.all([
        store.dispatch('page/getPageBySlug', { slug })
      ])
    },
    computed: {
      ...mapGetters({
        page: 'page/getPageData',
        error: 'page/getPageError',
        authUser: 'auth/getAuthUser',
        loading: 'page/getPageLoading',
        isAuthorized: 'auth/isAuthorized'
      }),
      title () {
        return this.page && this.page.title ? this.page.title : 'Страница не найдена'
      },
      text () {
        return this.page && this.page.text ? this.page.text : ''
      }
    },
  }
</script>

<style lang="scss" scoped>
  .lm-m-article-wrap--item {
    padding-top: 24px;
  }
</style>
