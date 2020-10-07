<template>
  <div class="lm-vs-landing-talent wrapper">
    <div class="lm-vs-landing-talent-header">
      <div class="lm-vs-landing-talent-header-wrap">
        <div class="title">Зачем мне портфолио?</div>
        <div class="desc">Портфолио — это ваша визитная карточка
          <br><br>
          Предоставляя кастинг-директорам и режиссёрам профессиональные снимки, видеовизитки и шоуриллы, вы увеличиваете
          шансы получить желаемую работу
        </div>
        <a href="javascript:void(0)" v-scroll-to="'#services'" style="min-width: 172px" class="lm-white-button middle">Заказать</a>
      </div>
    </div>
    <div class="lm-vs-landing-talent-line first">
      <div class="title">Что вы получите?</div>
      <div class="lm-vs-landing-talent-getting-wrap">
        <div class="lm-vs-landing-talent-getting-item">
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 48 48">
            <path fill="#0063DA" d="M1 23l5-4 11 9L43 8l4 4-30 30L1 23z"/>
          </svg>
          <span>Верифицированный статус</span>
        </div>
        <div class="lm-vs-landing-talent-getting-item">
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 48 48">
            <path fill="#0063DA"
                  d="M17 27H9a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V28a1 1 0 0 0-1-1zM43.78 16.375l-12-15c-.378-.475-1.182-.475-1.561 0l-12 15a1.001 1.001 0 0 0 .78 1.625h7v28a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V18h7a.999.999 0 0 0 .782-1.625z"/>
          </svg>
          <span>Повышенный приоритет в поиске</span>
        </div>
        <div class="lm-vs-landing-talent-getting-item">
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 48 48">
            <path fill="#0063DA"
                  d="M24 17.507a7.42 7.42 0 1 0 0-14.84 7.42 7.42 0 0 0 0 14.84zM10.087 45.333a7.42 7.42 0 1 0 0-14.84 7.42 7.42 0 0 0 0 14.84zM37.913 45.333a7.42 7.42 0 1 0 0-14.84 7.42 7.42 0 0 0 0 14.84zM32.27 30.568l-6.415-5.56v-5.832a9.329 9.329 0 0 1-3.71-.001v5.832l-6.416 5.56a9.327 9.327 0 0 1 2.434 2.8L24 28.31l5.836 5.058a9.335 9.335 0 0 1 2.435-2.8z"/>
          </svg>
          <span>Оперативную связь с фотографом</span>
        </div>
      </div>
      <a href="javascript:void(0)" v-scroll-to="'#services'" style="min-width: 172px" class="lm-primary-button middle">Заказать</a>
    </div>

    <div id="services">
      <template v-if="packages.length">
        <div class="lm-vs-landing-talent-line">
          <div class="title">Пакеты:</div>
          <div class="lm-vs-landing-talent-service-wrap">
            <div class="lm-vs-landing-talent-service-item" v-for="service in packages" :key="service.id">
              <img :src="service.cover" :alt="service.name">
              <div class="item-title">{{ service.name | truncate(20) }}</div>
              <div class="desc">{{ service.description | truncate(100) }}</div>
              <div class="item-footer">
                <a @click="_handleClickSelectedService(service.id)" href="javascript:void(0)" :id="service.slug"
                             class="lm-primary-button middle">Заказать</a>
                <span class="price">{{ service.price | currency('₽') }}</span>
              </div>
            </div>
          </div>
        </div>
      </template>

      <template v-if="singles.length">
        <div class="lm-vs-landing-talent-line last">
          <div class="title">Отдельные услуги:</div>
          <div class="lm-vs-landing-talent-service-wrap">
            <div class="lm-vs-landing-talent-service-item" v-for="service in singles" :key="service.id">
              <img :src="service.cover" :alt="service.name">
              <div class="item-title">{{ service.name | truncate(20) }}</div>
              <div class="desc">{{ service.description | truncate(100) }}</div>
              <div class="item-footer">
                <a @click="_handleClickSelectedService(service.id)" href="javascript:void(0)" :id="service.slug"
                             class="lm-primary-button middle">Заказать</a>
                <span class="price">{{ service.price | currency('₽') }}</span>
              </div>
            </div>
          </div>
        </div>
      </template>
    </div>

    <lm-main-footer class="footer-nav"></lm-main-footer>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import CertifyingSpecialist from '@modules/CertifyingSpecialist'

  export default {
    metaInfo: {
      title: 'Стань сертифицированным профессионалом'
    },
    async asyncData ({ store }) {
      await Promise.all([
        store.dispatch('certifying/fetchAllServices')
      ])
    },
    computed: {
      ...mapGetters({
        user: 'auth/getAuthUser',
        isAuthorized: 'auth/isAuthorized',
        services: 'certifying/getAllServicesData'
      }),
      packages () {
        return this.services.filter(service => service.is_package)
      },
      singles () {
        return this.services.filter(service => (service.is_package === false))
      }
    },
    methods: {
      getTransformServiceWorkType (works) {
        return CertifyingSpecialist.getTransformServiceWorkType(works)
      },
      _handleClickSelectedService (service_id) {
        if (this.isAuthorized === false) {
          const { href } = this.$router.resolve({ name: 'certifying.executor.orders.create', params: { service_id } })
          this.$localStorage.set('redirect.register', href)
          this.$router.push({ name: 'register' })
        } else {
          this.$router.push({ name: 'certifying.executor.orders.create', params: { service_id } })
        }
      }
    }
  }
</script>

<style scoped>

</style>
