<template>
  <div>
    <div class="articles-list" v-infinite-scroll="_handleInfiniteScroll" infinite-scroll-disabled="scroll_busy">

      <div class="top-articles-list" v-if="top_articles.length">
        <article-item v-for="article in top_articles"
                      :classArticle="''"
                      :top_article="true"
                      :key="article.id"
                      :article="article">
        </article-item>
      </div>

      <div class="bottom-articles-list" v-if="bottom_articles.length">
        <article-item v-for="article in bottom_articles"
                      :classArticle="''"
                      :key="article.id"
                      :article="article">
        </article-item>
      </div>
    </div>

    <div class="pd-26 no-left no-top no-bottom" v-if="isEmpty">
      <span>Здесь пока пусто.</span>
    </div>

    <div class="pd-26 no-left no-top" v-if="count === 0 && loading">
      <loader class="col-xs-12"></loader>
    </div>

    <div class="well--footer" v-if="!infiniteDisabled">
      <a v-if="!loading" href="javascript:void(0)" @click="_handleInfiniteScroll()">Показать еще</a>
      <span v-else-if="loading">Загрузка...</span>
    </div>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  import ArticleItem from '@components/Article/Catalog/Card.vue'

  export default {
    data () {
      return {
        loadmore: {
          topStatus: null
        }
      }
    },
    components: { ArticleItem },
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
      },
      top_articles() {
        return this.articles.slice(0, 2);
      },
      bottom_articles() {
        return this.articles.slice(2);
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

        }).catch(() => console.log('Error loading'))
      }
    }
  }
</script>
<style lang="sass">
</style>
