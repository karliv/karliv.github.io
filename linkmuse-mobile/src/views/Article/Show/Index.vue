<template>
  <div class="lm-m-article-wrap">
    <div v-if="!(article && isCustom)" class="lm-m-article-wrap--item">
      <div class="lm-m-black-head-nav">
        <div class="lm-m-black-head-nav-wrap">
          <div class="left">
            <a @click="_handleClickPreviousPage">
              <i class="lm-back-icon"></i>
              <span>К списку</span>
            </a>
          </div>
        </div>
      </div>
      <template v-if="(article)">
        <template v-if="!isCustom">
          <div class="lm-m-article-wrap--item-head artile-fix">
            <img class="image-article" :src="article.image_big" :alt="article.title">
          </div>
          <div class="lm-m-article-overflow-item">
            <div class="lm-m-article-overflow-item-title">
              <template v-for="(item, index) in article.tags.data">
                <span v-if="index" class="delimiter">, </span>
                <router-link :to="{ name: 'articles.tag', params: { tag: item.slug } }" class="category news">{{ item.name }}</router-link>
              </template>
              <span class="date">{{ [article.date, 'DD-MM-YYYY'] | moment('DD MMM Y') }}</span>
            </div>
            <h1 class="blog-title">{{ article.title | truncate(50) }}</h1>
            <div class="lm-m-article-item-user">
              <router-link :to="{ name: 'user.show', params: { username: user.username } }" class="lm-user-block small">
                <img :src="user.avatar['84x84']" class="lm-user-block-avatar">
                <div class="lm-user-block-info">
                  <div class="lm-user-block-info-name"><span>{{ user.name }}</span></div>
                </div>
              </router-link>
              <div class="lm-m-article-item-share">
                <social-share :url="article.href" :title="`Bio ${article.title}`" :description="article.description"></social-share>
              </div>
            </div>
            <div class="text" v-html="article.description"></div>
          </div>
        </template>
      </template>
      <template v-if="(!article)">
        <span>Ошибка, статья не найдено.</span>
      </template>
    </div>
    <template v-else="article && isCustom">
      <div v-html="article.custom.css"></div>
      <div v-html="article.custom.js"></div>
      <div v-html="article.custom.html" style="padding-bottom: 68px;"></div>
    </template>
  </div>
</template>

<script>
  import { has } from '@utils'
  import { mapGetters, mapActions } from 'vuex'

  export default {
    metaInfo () {
      return {
        title: this.title,
        meta: [
          { name: 'description', content: this.$truncate(this.$striptags(this.description), 200) },
        ]
      }
    },
    async asyncData ({store, route}) {
      let { slug } = route.params

      await Promise.all([
        store.dispatch('article/getArticleBySlug', { slug })
      ])
    },
    computed: {
      ...mapGetters({
        authUser: 'auth/getAuthUser',
        isAuthorized: 'auth/isAuthorized',
        article: 'article/getSingleArticleData',
        loading: 'article/getSingleArticleLoading',
        error: 'article/getSingleArticleError'
      }),
      tag () {
        return this.article && has(this.article, 'tags.data') && this.article.tags.data.length ? this.article.tags.data[0]: null
      },
      likes () {
        return this.article.likes
      },
      user () {
        return (this.article) ? this.article.user.data : null
      },
      isCustom () {
        return this.article.is_custom
      },
      title () {
        return (this.article) ? this.article.title : 'Статья'
      },
      description () {
        let { description } = this.article;

        if (description) {
          description = this.$htmlspecialchars(description)
          description = this.$markdown(description)
          description = this.$anchorme(description)
        }

        return description;
      }
    },
    methods: {
      _handleClickPreviousPage () {
        if (window.history.length > 2) {
          this.$router.go(-1)
        } else {
          this.$router.push({ name: 'articles.index' })
        }
      }
    }
  }
</script>

<style lang="sass" scoped>
  .delimiter
    width: 10px
</style>
