<template>
  <div :class="[defaultClass, classObject]">
    <a :href="article.href">
      <div class="article--info">
        <img v-if="top_article" class="cover" v-show="article.image_big" :src="article.image_big">
        <img v-else class="cover" v-show="article.image" :src="article.image">
        <div class="article-cat-date">
          <router-link v-if="article.tags.data.length" v-for="(tag, index) in article.tags.data" :key="tag.id" class="article-category" :to="{ name: 'articles.tag', params: { tag: tag.slug } }">{{ index > 0 ? ', ' : '' }}{{ tag.name }}</router-link>
          <span class="date">{{ $moment(article.date, 'DD-MM-YYYY').format('DD MMM Y') }}</span>
        </div>
        <div class="title">{{ article.title }}</div>
        <div class="desc">{{ article.description | truncate(140) }}</div>
        <div class="row user-info">
          <div class="project-user col-xs-8">
            <a :href="user.href"
               target="_blank">
              <img :src="user.avatar['84x84']"
                   :alt="user.name">
              <div class="project-user--info">
                <span class="project-user--name">{{ user.name }}</span>
                <span class="project-user--type">Редакция</span>
              </div>
            </a>
          </div>
          <div class="article-action col-xs-4">
            <div>
              <social-share :url="article.href" :title="`Новости ${article.title}`" :description="article.description"></social-share>
            </div>
          </div>
        </div>
      </div>
    </a>
  </div>
</template>

<script>
  import { has } from '@utils'

  export default {
    props: {
      article: {
        type: Object,
        required: true,
      },
      classArticle: {
        type: String,
        required: true
      },
      top_article: {
        type: Boolean,
        default: false,
      }
    },
    data() {
      return {
        classObject: this.classArticle,
        defaultClass: 'article'
      }
    },
    computed: {
      tag () {
        return this.article && has(this.article, 'tags.data') && this.article.tags.data.length ? this.article.tags.data[0]: null
      },
      likes () {
        return this.article.likes
      },
      user () {
        return this.article.user.data
      }
    }
  }
</script>

<style scoped>

</style>
