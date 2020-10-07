<template>
  <div class="wrapper no-padding">
    <mt-loadmore :top-method="_handleLoadTopInterviews" @top-status-change="_handleTopStatusChangeInterviews" ref="loadmore">
      <div class="lm-m-interviews--list row"
           v-infinite-scroll="_handleInfiniteScroll"
           infinite-scroll-disabled="infiniteDisabled"
           infinite-scroll-distance="1400">
        <div class="lm-m-empty-desc" v-if="isEmpty">На данный момент, био отсутствуют 🌚</div>
        <interview-card :interview="interview" v-for="interview in interviews" :key="interview.id"></interview-card>
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
  import InterviewCard from '@components/Interview/Catalog/Card.vue'
  import { Loadmore } from 'mint-ui'

  export default {
    data () {
      return {
        loadmore: {
          topStatus: null
        }
      }
    },
    components: { InterviewCard, 'mt-loadmore': Loadmore },
    metaInfo: {
      title: 'BIO'
    },

    async asyncData ({ store, route }) {
      let { category } = route.params
      await Promise.all([
        store.dispatch('interview/fetchInterviewsByCategory', { rewrite: true, category })
      ])
    },
    computed: {
      ...mapGetters({
        interviews: 'interview/getInterviews',
        error: 'interview/getInterviewsError',
        loading: 'interview/getInterviewsLoading',
        count: 'interview/getInterviewsCount',
        infiniteDisabled: 'interview/getInterviewsInfiniteDisabled'
      }),
      isEmpty () {
        return ( !this.loading && this.count === 0 )
      }
    },
    methods: {
      ...mapActions({
        fetchInterviewsByCategory: 'interview/fetchInterviewsByCategory'
      }),
      _handleInfiniteScroll() {
        let { category } = this.$route.params
        this.fetchInterviewsByCategory({ rewrite: false, category })
      },
      _handleLoadTopInterviews () {
        let { category } = this.$route.params
        this.fetchInterviewsByCategory({ rewrite: true, category }).then(() => {
          this.$refs.loadmore.onTopLoaded();
        }).catch(() => console.log('Error loading'))
      },
      _handleTopStatusChangeInterviews (status) {
        this.loadmore.topStatus = status
      }
    }
  }
</script>

<style scoped>

</style>
