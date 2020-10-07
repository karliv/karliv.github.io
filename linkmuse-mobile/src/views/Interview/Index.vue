<template>
  <div>
    <div class="lm-m-nav-menu">
      <div class="lm-m-nav-wrapper">
        <div class="lm-m-nav-menu--left">
          <router-link :to="{ name: 'articles.index' }" active-class="active" class="lm-m-nav-menu--item">
            <span class="text">Статьи</span>
          </router-link>
          <router-link :to="{ name: 'interviews.index' }" class="lm-m-nav-menu--item">
            <span class="text">BIO</span>
          </router-link>
        </div>
        <div class="lm-m-nav-menu--right">
        </div>
      </div>
    </div>
    <div class="lm-m-filter-categories-wrap">
      <div class="lm-m-filter-categories lm-tags">
        <router-link :to="{ name: 'interviews.index' }" class="lm-tag">Все</router-link>
        <template v-if="categories.length">
          <router-link v-for="category in categories" class="lm-tag" :key="category.id"
                       :to="{ name: 'interviews.category', params: { category: category.slug } }">
            {{ category.name | truncate(20) }}
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
      title: 'BIO'
    },
    async asyncData ({ store }) {
      await Promise.all([
        store.dispatch('interview/fetchCategories')
      ])
    },
    computed: {
      ...mapGetters({
        categories: 'interview/getCategories'
      }),
      isEmpty () {
        return ( !this.loading && this.count === 0 )
      }
    },
    methods: {

    }
  }
</script>
