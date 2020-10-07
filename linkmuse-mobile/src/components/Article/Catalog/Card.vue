<template>
  <div class="lm-m-articles--item">
    <div class="lm-m-articles--item--head">
      <router-link v-if="!article.is_custom" :to="{ name: 'articles.show', params: { slug: article.slug } }">
        <img :src="article.image" :alt="article.title">
      </router-link>
      <a v-else :href="`/article/${article.slug}`">
        <img :src="article.image" :alt="article.title">
      </a>
    </div>
    <div class="lm-m-articles--item--bottom">
      <div class="lm-m-articles--item--top">
        <router-link v-if="tag" :to="{ name: 'articles.tag', params: { tag: tag.slug } }" class="type">{{ tag.name }}</router-link>
        <span class="date">{{ $moment(article.date, 'DD-MM-YYYY').format('DD MMM Y') }}</span>
      </div>
      <router-link v-if="!article.is_custom" :to="{ name: 'articles.show', params: { slug: article.slug } }">
        <div class="lm-m-articles--item--name">{{ article.title | truncate(50) }}</div>
      </router-link>
      <a v-else :href="`/article/${article.slug}`">
        <div class="lm-m-articles--item--name">{{ article.title | truncate(50) }}</div>
      </a>
      <router-link :to="{ name: 'user.show', params: { username: user.username } }" class="lm-user-block small">
        <img :src="user.avatar['84x84']" class="lm-user-block-avatar">
        <div class="lm-user-block-info">
          <div class="lm-user-block-info-name"><span>{{ user.name }}</span></div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
  import { has } from '@utils'

  export default {
    props: {
      article: {
        type: Object,
        required: true
      }
    },
    computed: {
      tag () {
        return this.article && has(this.article, 'tags.data') && this.article.tags.data.length ? this.article.tags.data[0]: null
      },
      user () {
        return this.article.user.data
      }
    }
  }
</script>

<style scoped>

</style>
