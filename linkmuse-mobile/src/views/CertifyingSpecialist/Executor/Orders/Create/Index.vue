<template>
  <div class="lm-m-certifyingspecialist-select">
    <div class="title">Выбор специалиста <template v-if="specialists.count">({{ specialists.count }})</template></div>

    <mt-loadmore :top-method="_handleLoadTopSpecialists" @top-status-change="_handleTopStatusChangeSpecialists" ref="loadmore">
      <div class="lm-m-certifyingspecialist-wrap" style="padding-bottom: 70px" v-infinite-scroll="_handleInfiniteScroll"
           infinite-scroll-disabled="scroll_busy"
           infinite-scroll-distance="200">

        <specialist-item v-for="specialist in specialists.data" :key="specialist.id"
          :specialist="specialist"
          @selected="_handleSelectedSpecialist">
        </specialist-item>

        <lm-m-loader v-if="specialists.loading && loadmore.topStatus !== 'loading'"></lm-m-loader>

        <div class="lm-m-empty-desc--null" v-if="(isEmpty === true)">
          <span>К сожалению ничего не найдено.</span>
        </div>
      </div>

      <div slot="top" class="mint-loadmore-top">
        <template v-if="loadmore.topStatus === 'loading'"><lm-m-loader></lm-m-loader></template>
        <span v-if="loadmore.topStatus !== 'loading'" :class="['arrow', { 'rotate': loadmore.topStatus === 'drop' }]">↓</span>
      </div>
    </mt-loadmore>

    <div class="lm-m-certifyingspecialist-select-action">
      <router-link :to="{ name: 'certifying.executor.index' }" class="lm-link-button">назад</router-link>
    </div>
  </div>
</template>

<script>
  import { Loadmore } from 'mint-ui'
  import { HEIGHT_FOOTER } from '@utils'
  import SpecialistItem from '@components/CertifyingSpecialist/Customer/Specialist/Card/Card.vue'

  const LIMIT = 24

  export default {
    components: { 'mt-loadmore': Loadmore, SpecialistItem },
    metaInfo: {
      title: 'Выбор специалиста'
    },
    data () {
      return {
        loadmore: { topStatus: null },
        specialists: {
          data: [],
          count: 0,
          offset: 0,
          limit: LIMIT,
          loading: false,
          sort: null,
          scroll_busy: true
        }
      }
    },
    computed: {
      service_id () {
        return Number(this.$route.params.service_id)
      },
      isEmpty () {
        return ( !this.specialists.loading && this.specialists.count === 0 )
      },
      scroll_busy: {
        get () {
          return this.specialists.scroll_busy
        },
        set (value) {
          this.specialists.scroll_busy = value
        }
      }
    },
    created () {
      this.fetchSpecialists()
    },
    methods: {
      _handleTopStatusChangeSpecialists (status) {
        this.loadmore.topStatus = status
      },
      _handleInfiniteScroll() {
        this.fetchSpecialists()
      },
      _handleLoadTopSpecialists () {
        this.fetchSpecialists().then(() => {
          this.$refs.loadmore.onTopLoaded();
        }).catch(() => console.log('Error loading'))
      },
      fetchSpecialists () {
        return new Promise((resolve, reject) => {
          this.specialists.loading = true
          this.scroll_busy = true

          let params = {
            sort: this.specialists.sort,
            service_id: this.service_id,
            offset: this.specialists.offset,
            include: `services:id(${this.service_id}),photos,videos`
          }

          this.$api.get('api/v2/certifying-specialists', params).then((response) => {
            let { data: { data, meta: { count, new_offset } } } = response

            data.forEach(item => this.specialists.data.push(item))

            this.scroll_busy = (new_offset >= count)
            this.specialists.count = count
            this.specialists.offset = new_offset

            this.specialists.loading = false
            resolve && resolve()
          }, (response) => {
            this.specialists.loading = false
            reject && reject()
            throw new Error('Error loading specialists.')
          })
        })

      },
      clearSpecialists () {
        return new Promise((resolve, reject) => {
          this.specialists = {
            data: [],
            count: 0,
            offset: 0,
            limit: 24,
            loading: false,
            sort: null,
            scroll_busy: true
          }

          resolve()
        })
      },
      _handleSelectedSpecialist (specialist_id, service_id) {
        if (specialist_id && service_id) {
          this.$router.push({ name: 'certifying.executor.orders.create.specialist', params: { service_id, specialist_id } })
        } else throw new Error('Error loading specialist.')
      }
    }
  }
</script>

<style scoped>

</style>
