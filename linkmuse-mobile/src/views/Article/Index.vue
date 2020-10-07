<template>
  <div>
    <div class="lm-m-nav-menu">
      <div class="lm-m-nav-wrapper">
        <div class="lm-m-nav-menu--left">
          <router-link :to="{ name: 'articles.index' }"  class="lm-m-nav-menu--item">
            <span class="text">Статьи</span>
          </router-link>
        </div>
      </div>
    </div>
    <div class="lm-m-filter-categories-wrap">
      <div class="lm-m-filter-categories lm-tags">
        <router-link :to="{ name: 'articles.index' }" class="lm-tag">Все</router-link>
        <template v-if="tags.length">
          <router-link v-for="tag in tags" class="lm-tag" :key="tag.id"
            :to="{ name: 'articles.tag', params: { tag: tag.slug } }">
            {{ tag.name | truncate(20) }}
          </router-link>
        </template>
      </div>
    </div>
    <div class="wrapper no-padding">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    metaInfo: {
      title: 'Новости, интервью, статьи по теме кино продакшена'
    },
    components: {  },
    async asyncData ({ store }) {
      await Promise.all([
        store.dispatch('article/fetchTags')
      ])
    },
    computed: {
      ...mapGetters({
        tags: 'article/getTags'
      })
    }
  }
</script>
