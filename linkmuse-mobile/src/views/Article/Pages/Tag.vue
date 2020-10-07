<template>
  <div class="wrapper no-padding">
    <mt-loadmore :top-method="_handleLoadTopArticles" @top-status-change="_handleTopStatusChangeArticles" ref="loadmore">
      <div class="lm-m-articles--list row"
           v-infinite-scroll="_handleInfiniteScroll"
           infinite-scroll-disabled="infiniteDisabled"
           infinite-scroll-distance="1100">
        <div class="lm-m-empty-desc" v-if="isEmpty">На данный момент, статьи отсутствуют 🌚</div>
        <article-card :article="article" v-for="article in articles" :key="article.id"></article-card>
        <lm-m-loader v-if="loading && loadmore.topStatus !== 'loading'"></lm-m-loader>
      </div>
      <div slot="top" class="mint-loadmore-top">
        <template v-if="loadmore.topStatus === 'loading'"><lm-m-loader></lm-m-loader></template>
        <span v-if="loadmore.topStatus !== 'loading'" :class="['arrow', { 'rotate': loadmore.topStatus === 'drop' }]">↓</span>
      </div>
    </mt-loadmore>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  import ArticleCard from '@components/Article/Catalog/Card.vue'
  import { Loadmore } from 'mint-ui'

  export default {
    data () {
      return {
        loadmore: {
          topStatus: null
        }
      }
    },
    components: { ArticleCard, 'mt-loadmore': Loadmore },
    async asyncData ({ store, route }) {
      let { tag } = route.params
      await Promise.all([
        store.dispatch('article/fetchArticlesByTag', { rewrite: true, tag })
      ])
    },
    computed: {
      ...mapGetters({
        articles: 'article/getArticles',
        error: 'article/getArticlesError',
        loading: 'article/getArticlesLoading',
        count: 'article/getArticlesCount',
        infiniteDisabled: 'article/getArticlesInfiniteDisabled'
      }),
      isEmpty () {
        return ( !this.loading && this.count === 0 )
      }
    },
    methods: {
      ...mapActions({
        fetchArticlesByTag: 'article/fetchArticlesByTag'
      }),
      _handleInfiniteScroll() {
        let { tag } = this.$route.params
        this.fetchArticlesByTag({ rewrite: false, tag })
      },
      _handleLoadTopArticles () {
        let { tag } = this.$route.params
        this.fetchArticlesByTag({ rewrite: true, tag }).then(() => {
          this.$refs.loadmore.onTopLoaded();
        }).catch(() => console.log('Error loading'))
      },
      _handleTopStatusChangeArticles (status) {
        this.loadmore.topStatus = status
      }
    }
  }
</script>
<style lang="sass">
</style>
