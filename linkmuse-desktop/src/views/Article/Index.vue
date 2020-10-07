<template>
  <div>
    <div class="news-page">
      <div class="well well-no-padding">
        <div class="content-article">
          <div class="pd-26">
            <h1>Новости</h1>
            <section>
              <ul role="tablist" class="nav nav-tabs flex-start-center">
                <router-link exact-active-class="active" tag="li" :to="{ name: 'articles.index' }"><a role="tab" href="javascript:void(0)">Все</a></router-link>
                <router-link exact-active-class="active" tag="li" v-for="tag in tags" class="lm-tag" :key="tag.id"
                             :to="{ name: 'articles.tag', params: { tag: tag.slug } }">
                  <a role="tab" href="javascript:void(0)">{{ tag.name | truncate(20) }}</a>
                </router-link>
              </ul>
              <div class="tab-content">
                <router-view></router-view>
              </div>
            </section>
          </div>
        </div>
        <div class="clr"></div>
      </div>
    </div>
    <div class="clr"></div>
    <access-modal></access-modal>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import AccessModal from '@components/Auth/Access/Access.vue'

  export default {
    metaInfo: {
      title: 'Новости, интервью, статьи по теме кино продакшена'
    },
    data() {
      return {
        active_tab: 0
      }
    },
    components: { AccessModal },
    async asyncData ({ store }) {
      await Promise.all([
        store.dispatch('article/fetchTags')
      ])
    },
    mounted () {
      this.$root.reachGoalGtm({
        'event': 'READ_ARTICLES'
      });
    },
    computed: {
      ...mapGetters({
        tags: 'article/getTags'
      }),
    }
  }
</script>
