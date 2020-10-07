<template>
  <section class="ss-map">
    <div class="ss-map-left">
      <div class="ss-map-left-top">
        <span class="text">Способ верификации:</span>
        <span class="who" v-if="service"><b>{{ service.name }}</b></span>
        <router-link :to="{ name: 'certifying.executor.index' }">Изменить</router-link>
      </div>

      <div class="ss-map-left-wrap">
        <h3>Выберите подходящего специалиста</h3>
        <div class="ss-list-header" v-if="!specialists.loading">
          <div class="ss-list-header-left">
            <span>Специалистов найдено</span>
            <span class="count">{{ specialists.count }}</span>
          </div>
          <div class="ss-list-header-right">
            <div class="lm-dropdown-wrap no-border">
              <v-select :options="SORTING" v-model="specialists.sort" @input="_handleInputSorting"></v-select>
            </div>
          </div>
        </div>
        <div class="ss-list" v-infinite-scroll="fetchSpecialists" infinite-scroll-disabled="scroll_busy">
          <specialist-item :specialist="specialist" :service="service" v-for="specialist in specialists.data" :key="specialist.id"></specialist-item>

          <div class="pd-26 no-left" v-if="(specialists.count === 0 && !specialists.loading) || (specialists.data.length === 0 && !specialists.loading)">
            <span>К сожалению, подходящих специалистов не найдено.</span>
          </div>

          <loader v-if="specialists.loading" class="col-md-12"></loader>
        </div>
      </div>
    </div>
    <div class="ss-map-right">
      <no-ssr>
        <specialists-map v-show="!specialists.loading" :specialists="specialists.data">
        </specialists-map>
      </no-ssr>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'

import SpecialistItem from '@components/CertifyingSpecialist/Customer/Specialist/Card/Card.vue'
import SpecialistsMap from '@components/CertifyingSpecialist/Executor/Orders/Create/Map.vue'

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
  metaInfo: {
    title: 'Выбор специалиста'
  },
  components: {SpecialistItem, SpecialistsMap},
  asyncData ({store}) {
    // if (store.state.certifying.services.data.length) return;
    return store.dispatch('certifying/fetchAllServices')
  },
  data () {
    return {
      SORTING,
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
    ...mapGetters({
      services: 'certifying/getAllServicesData'
    }),
    service_id () {
      return Number(this.$route.params.service_id)
    },
    service () {
      return this.services.find(el => el.id === this.service_id)
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

    this.$root.$on('selected-new-service-modal-specialist-show', () => {
      this.clearSpecialists().then(() => {
        this.fetchSpecialists()
      })
    })
  },
  methods: {
    fetchSpecialists () {
      this.specialists.loading = true
      this.scroll_busy = true

      let params = {
        sort: this.specialists.sort,
        service_id: this.service_id,
        offset: this.specialists.offset,
        include: `services:id(${this.service_id}),photos,services.studio`
      }

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
    _handleInputSorting (value) {
      this.clearSpecialists().then(() => {
        this.specialists['sort'] = value
        this.fetchSpecialists()
      })
    }
  }
}
</script>

<style lang="sass" scoped>
  .ss-map-right
    position: fixed !important
    right: 0
    top: 62px
    width: 43%
    @media (min-width: 1280px)
      width: 33%
    @media (min-width: 1440px)
      width: 44%

</style>
