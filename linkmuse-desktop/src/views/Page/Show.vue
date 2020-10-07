<template>
  <div class="wrapper" :style="{ paddingTop: 0 }">
    <div class="static-page">
      <div class="well well-no-padding">
        <div class="profile__info">
          <div class="profile__projects well">
            <div class="profile__projects--header well--header">
              <span>{{ title }}</span>
            </div>
            <template v-if="text">
              <div class="static-page-text" v-html="text"></div>
            </template>
            <div class="clr"></div>
          </div>
        </div>
        <div class="clr"></div>
      </div>
    </div> <!-- -content -->
    <div class="clr"></div>
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

<style scoped>

</style>
