<template>
  <div>
    <template v-if="(article && !isCustom)">
      <div class="well well-no-padding article-page-show">
          <div class="head-article">
            <img :src="article.image_big" :alt="article.title">
          </div>

          <div class="article-left">
            <div class="like-block">
          <span>
            <span class="count-like">{{ likes.count }}</span>
            <like-custom-el class="like-article-icon"
                            type="article"
                            :id="article.id" :count="likes.count"
                            :liked="likes.liked" gtm="LIKE_ARTICLE_LIST">
              <i :class="{ 'active': likes.liked }"></i>
            </like-custom-el>
          </span>
            </div>
            <div class="share-block">
              <social-share :url="article.href" :title="`Новости ${article.title}`" :description="article.description"></social-share>
            </div>
          </div>

          <div class="article-right">
            <h1 class="title">{{ article.title }}</h1>
            <div>
              <a v-if="article.tags.data.length" v-for="(tag, index) in article.tags.data" class="category" :href="`/articles/${tag.slug}`">{{ index > 0 ? ', ' : '' }}{{ tag.name }}</a>
              <span class="date">{{ [article.date, 'DD-MM-YYYY'] | moment('DD MMM Y') }}</span>
            </div>

            <div class="text-article" v-html="article.description"></div>

            <div class="sub-text">Автор новости:</div>
            <div class="article-bottom">
              <div class="article-bottom-action">
                <div class="project-user">
                  <a :href="user.href">
                    <img :src="user.avatar['84x84']" :alt="user.name">
                    <div class="project-user--info">
                      <span :title="user.name" class="project-user--name">{{ user.name }}</span>
                      <span title="Агентство" class="project-user--type">Редакция</span>
                    </div>
                  </a>
                </div>

              </div>
              <div class="date" style="margin-top: 15px;">{{ [article.date, 'DD-MM-YYYY'] | moment('DD MMM Y') }}</div>
              <div class="article-bottom-action" style="margin-top: 15px;">

                <div class="right">
                  <div class="like-block">
                    <like-el type="article" :id="article.id" :count="likes.count" :liked="likes.liked" gtm="LIKE_ARTICLE_LIST"/>
                  </div>
                  <div class="share-block">
                    <social-share :url="article.href" :title="`Новости ${article.title}`" :description="article.description"></social-share>
                  </div>
                </div>
                <a v-if="isAdmin" :href="editPageHref" style="display: block; width: 100%; text-align: right;"><span>Редактировать</span></a>
              </div>
            </div>
          </div>
          <div class="clr"></div>
      </div>
    </template>
    <template v-else-if="article && isCustom">
      <iframe class="custom-article-iframe" ref="customIframe" frameborder="0"></iframe>
    </template>
    <template v-if="(!article)">
      <span>Ошибка, статья не найдена.</span>
    </template>
    <access-modal></access-modal>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  import AccessModal from '@components/Auth/Access/Access.vue'
  import { has, addClass, removeClass, isBrowser } from '@utils'

  export default {
    metaInfo () {
      return {
        title: this.title,
        meta: [
          { name: 'description', content: this.$truncate(this.$striptags(this.description), 200) },
        ]
      }
    },
    data() {
      return {
        customIframe: null
      }
    },
    async asyncData ({store, route}) {
      let { slug } = route.params

      await Promise.all([
        store.dispatch('article/getArticleBySlug', { slug })
      ])
    },
    components: { AccessModal },
    created () {
      if (isBrowser) {
        const body = document.body

        if (this.article && this.article['is_custom']) {
          addClass(body, 'custom-article-page')
        }
      }
    },
    beforeDestroy () {
      if (isBrowser) {
        const body = document.body

        if (this.article && this.article['is_custom']) {
          removeClass(body, 'custom-article-page')
        }
      }
    },
    computed: {
      ...mapGetters({
        authUser: 'auth/getAuthUser',
        isAuthorized: 'auth/isAuthorized',
        error: 'article/getSingleArticleError',
        article: 'article/getSingleArticleData',
        loading: 'article/getSingleArticleLoading',
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
        return has(this.article, 'custom') && this.article['is_custom']
      },
      isAdmin () {
        return this.authUser ? this.authUser.isAdmin : false
      },
      editPageHref () {
        return this.isAdmin && this.article ? `/admin/articles/${this.article.id}/edit` : ''
      },
      customHtml() {
        if (!this.isCustom) return ''

        return `
          <head>
            ${this.article.custom.css}
            <style>
              body { margin: 0; padding: 0; }
            </style>
            ${this.article.custom.js}
          </head>
          <body>
            ${this.article.custom.html}
          </body>`
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
    mounted () {
      this._handleCreateCustomIframe()
    },
    methods: {
      _handleCreateCustomIframe () {
        if (!this.isCustom) return

        let iframe = this.$refs.customIframe

        iframe.onload = this._handleIframeLoad
        iframe.contentWindow.document.open()
        iframe.contentWindow.document.write(this.customHtml)
        iframe.contentWindow.document.close()
      },
      _handleClickPreviousPage () {
        if (window.history.length > 2) {
          this.$router.go(-1)
        } else {
          this.$router.push({ name: 'articles.index' })
        }
      },
      _handleIframeLoad () {
        let iframe = this.$refs.customIframe
        let DOMContentLoaded_event = document.createEvent("Event")

        DOMContentLoaded_event.initEvent("DOMContentLoaded", true, true)
        iframe.contentWindow.document.dispatchEvent(DOMContentLoaded_event)
      }
    }
  }
</script>

<style lang="sass" scoped>
  .delimiter
    width: 10px
  .custom-article-iframe
    width: 100%
    min-height: 100vh
</style>
