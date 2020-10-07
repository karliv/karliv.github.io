<template>
  <section class="lm-ss-list">
    <no-ssr>
      <div class="ss-list-info" v-if="isExecutor && banners.executor">
        <div class="ss-list-info--wrap">
          <i class="ss-list-info--close" @click="closeExecutorBannerInfo()"></i>
          <h1>Верифицирующие специалисты</h1>
          <p>Эти люди помогут вам сделать красивые фото и видео для портфолио. <br> Чтобы начать верификацию, выберите специалиста.</p>
          <router-link :to="{ name: 'certifying.executor.index' }" class="lm-primary-button lm-icon-button">Начать верификацию</router-link>
        </div>
      </div>
    </no-ssr>
    <div class="ss-list--wrap">
      <div class="ss-list-left">
        <div class="ss-list-left--filter">
          <div class="filter--left">
            <div class="lm-dropdown-wrap lm-dropdown-wrap--n">
              <v-select :options="sources.cities" :placeholder="'Город'" :filter="true" v-model="specialists.city_id" @input="_handleInputCities"></v-select>
            </div>
          </div>
          <div class="filter--right">
            <div class="lm-dropdown-wrap no-border">
              <v-select :options="SORTING" v-model="specialists.sort" @input="_handleInputSorting"></v-select>
            </div>
          </div>
        </div>
        <div class="ss-list-left--users" v-infinite-scroll="fetchSpecialists" infinite-scroll-disabled="scroll_busy">

          <specialist-item :specialist="specialist" v-for="specialist in specialists.data" :key="specialist.id"></specialist-item>

          <div class="pd-26 no-left"
               v-if="(specialists.count === 0 && !specialists.loading) || (specialists.data.length === 0 && !specialists.loading)">
            <span>К сожалению, подходящих специалистов не найдено.</span>
          </div>

          <loader v-if="specialists.loading" class="col-md-12"></loader>
        </div>
      </div>
      <div class="ss-list-right">
        <div :class="{ 'service-filter': true, loading: specialists.loading }">
          <ul v-if="services.length">
            <li :class="{ active: (service_id === null) }"><a href="javascript:void(0)" @click="setFilterService(null)"><span class="name"> Все</span></a></li>
            <li :class="{ active: (Number(service_id) === service.id) }" v-for="service in services" :key="service.id">
              <a href="javascript:void(0)" @click="setFilterService(service.id)">
                <span class="name">{{ service.name | truncate(23) }}</span>
                <span class="count" v-if="false">0</span>
              </a>
            </li>
          </ul>
          <template v-if="(services.length === 0)">
            <ul><li>Нет доступных услуг.</li></ul>
          </template>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import SpecialistItem from '@components/CertifyingSpecialist/Global/Specialist/Card.vue'
import { mapGetters } from 'vuex'

const LIMIT = 24
const SORTING = [
  {
    id: null,
    text: 'По умолчанию'
  },
  {
    id: 'count',
    text: 'Кол-во заказов'
  }
]
export default {
  components: { SpecialistItem },
  metaInfo: {
    title: 'Каталог верифицирующих специалистов'
  },
  asyncData ({store}) {
    return store.dispatch('certifying/fetchAllServices')
  },
  data () {
    return {
      SORTING,
      sources: {
        cities: [],
      },
      specialists: {
        data: [],
        count: 0,
        offset: 0,
        limit: LIMIT,
        loading: false,
        sort: null,
        scroll_busy: true,
        city_id: null,
        service_id: null
      },
      banners: {
        executor: true
      }
    }
  },
  computed: {
    ...mapGetters({
      role: 'auth/getRole',
      user: 'auth/getAuthUser',
      services: 'certifying/getAllServicesData'
    }),
    service_id () {
      return this.specialists.service_id
    },
    scroll_busy: {
      get () {
        return this.specialists.scroll_busy
      },
      set (value) {
        this.specialists.scroll_busy = value
      }
    },
    isCustomer () {
      return (this.role === 'customer')
    },
    isExecutor () {
      return (this.role === 'executor')
    }
  },
  created () {
    this.banners.executor = !(this.$cookies.get('catalog.banner.executor') === 'false')
    this.specialists.service_id = this.$route.query.service_id || null
    this.fetchSpecialists()
    this.getCities()
  },
  methods: {
    fetchSpecialists () {
      this.specialists.loading = true
      this.scroll_busy = true

      let params = {
        sort: this.specialists.sort,
        service_id: this.service_id,
        offset: this.specialists.offset,
        include: `photos,city,videos`
      }

      if (this.specialists.city_id)
        params.city_id = this.specialists.city_id

      this.$api.get('api/v2/certifying-specialists', params).then((response) => {
        let {data: {data, meta: {count, new_offset}}} = response

        data.forEach(item => this.specialists.data.push(item))

        this.scroll_busy = (new_offset >= count)
        this.specialists.count = count
        this.specialists.offset = new_offset

        this.specialists.loading = false
      }, (response) => {
        this.specialists.loading = false
        throw new Error('Error loading specialists.')
      })
    },
    getCities() {
      this.$api.get('api/v1/geo/cities', { country_id: 1 }).then((response) => {
        this.specialists.city_id = null

        const { data } = response
        this.sources.cities = data
      }, (error) => {
        const { response: { data }, response: { status }} = error
        throw new Error('Error loading castings cities')
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
          city_id: null,
          sort: null,
          service_id: null,
          scroll_busy: true
        }

        resolve()
      })
    },
    _handleInputSorting (value) {
      this.clearSpecialists().then(() => {
        this.specialists['sort'] = value
        this.fetchSpecialists()
      })
    },
    _handleInputCities (value) {
      this.clearSpecialists().then(() => {
        this.specialists['city_id'] = value
        this.fetchSpecialists()
      })
    },
    setFilterService (service_id) {
      if (service_id === this.service_id) return

      this.clearSpecialists().then(() => {
        this.$router.push({ query: { service_id } })
        this.$set(this.specialists,'service_id', service_id)
        this.fetchSpecialists()
      })
    },
    closeExecutorBannerInfo () {
      this.banners.executor = false
      this.$cookies.set('catalog.banner.executor', false)
    }
  }
}
</script>

<style lang="sass">
  .filter--left
    display: flex
    align-items: center
    .lm-dropdown
      margin-bottom: 0
</style>
