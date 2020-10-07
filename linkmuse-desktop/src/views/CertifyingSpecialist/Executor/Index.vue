<template>
  <div class="lm-vs-landing-talent">
    <div class="lm-vs-landing-talent-header">
      <div class="lm-vs-landing-talent-header-wrap">
        <div class="title">Зачем мне портфолио?</div>
        <div class="desc">Портфолио — это ваша визитная карточка
          <br><br>
          Предоставляя кастинг-директорам и режиссёрам профессиональные снимки, видеовизитки и шоурилы, вы увеличиваете
          шансы получить желаемую работу
        </div>
        <a href="javascript:void(0)" v-scroll-to="'#services'" style="min-width: 148px" class="lm-white-button middle lm-white-registered-button">Заказать</a>

        <template v-if="hasGeo">
          <tooltip class="menu-tooltip" effect="scale" placement="bottom" :content="'Настройки местоположения изменятся по всему ресурсу'">
            <a href="javascript:void(0)" class="lm-vs-landing-talent-header-geo" @click="_handleClickOpenModalChangeGeo">
              <span>{{ profile.country.data.name }},</span><span>{{ profile.city.data.name }}</span>
            </a>
          </tooltip>
        </template>
      </div>
    </div>

    <div class="lm-vs-landing-talent-line">
      <div class="title">У нас вы получите:</div>
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
      <a href="javascript:void(0)" v-scroll-to="'#services'" style="display: inline-flex; min-width: 148px; width: max-content" class="d-btn d-btn_primary">Заказать</a>
    </div>

    <div id="services">
      <template v-if="services.length">
        <template v-if="packages.length">
          <div class="lm-vs-landing-talent-line">
            <div class="title">Пакеты:</div>
            <div class="lm-vs-landing-talent-service-wrap">
              <div class="lm-vs-landing-talent-service-item" v-for="service in packages" :key="service.id">
                  <div v-if="service.attachments.data.length" class="lm-vs-landing-talent-service-item-quick-view-wrap" @click="_handleClickOpenModalQuickViewService(service)">
                    <span class="lm-vs-landing-talent-service-item-quick-view-wrap---tile">посмотреть пример</span>
                    <img :src="service.cover" :alt="service.name">
                  </div>
                  <img v-else :src="service.cover" :alt="service.name">
                  <div class="item-title">{{ service.name | truncate(20) }}</div>
                  <div class="desc">{{ service.description | truncate(100) }}</div>
                <div class="item-footer">
                  <a @click="_handleClickSelectedService(service.id)" href="javascript:void(0)" :id="service.slug"
                     class="d-btn d-btn_primary">Заказать</a>
                  <span class="price">{{ service.price | currency('₽') }}</span>
                </div>
              </div>
            </div>
          </div>
        </template>

        <template v-if="singles.length">
          <div class="lm-vs-landing-talent-line">
            <div class="title">Отдельные услуги:</div>
              <div class="lm-vs-landing-talent-service-wrap">
                <div class="lm-vs-landing-talent-service-item" v-for="service in singles" :key="service.id">
                  <div v-if="service.attachments.data.length" class="lm-vs-landing-talent-service-item-quick-view-wrap" @click="_handleClickOpenModalQuickViewService(service)">
                    <span class="lm-vs-landing-talent-service-item-quick-view-wrap---tile">посмотреть пример</span>
                    <img :src="service.cover" :alt="service.name">
                  </div>
                  <img v-else :src="service.cover" :alt="service.name">
                  <div class="item-title">{{ service.name | truncate(20) }}</div>
                  <div class="desc">{{ service.description | truncate(100) }}</div>

                  <div class="item-footer">
                    <a @click="_handleClickSelectedService(service.id)" href="javascript:void(0)" :id="service.slug"
                       class="d-btn d-btn_primary">Заказать</a>
                    <span class="price">{{ service.price | currency('₽') }}</span>
                  </div>
                </div>
              </div>
            </div>
        </template>
      </template>
      <template v-else-if="(services.length === 0)">
        <div class="lm-vs-landing-talent-line">
          <div class="title">К сожалению, услуги не доступны в Вашем регионе.</div>
        </div>
      </template>
    </div>

    <lm-quick-view-service></lm-quick-view-service>
    <lm-main-footer class="footer-static grey"></lm-main-footer>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { has, redirect } from '@utils'
import CertifyingSpecialist from '@modules/CertifyingSpecialist'

export default {
  metaInfo: {
    title: 'Стань верифицированным профессионалом'
  },
  async asyncData ({ store }) {
    await Promise.all([
      store.dispatch('certifying/fetchAllServices')
    ])
  },
  computed: {
    ...mapGetters({
      profile: 'auth/getProfile',
      isAuthorized: 'auth/isAuthorized',
      services: 'certifying/getAllServicesData'
    }),
    min_price () {
      return this._.min(this.services.map(service => Number.parseFloat(service['price'])))
    },
    packages () {
      return this.services.filter(service => service.is_package)
    },
    singles () {
      return this.services.filter(service => (service.is_package === false))
    },
    hasGeo () {
      return (this.profile && (has(this.profile, 'country.data.id') || has(this.profile, 'city.data.id')))
    }
  },
  beforeDestroy () {
    this.$root.$off('user-change-location')
  },
  mounted () {
    this.$root.$on('user-change-location', () => {
      this.$store.dispatch('certifying/fetchAllServices')
      setTimeout(() => {
        this.$scrollTo('#services', 500)
      }, 1000)
    })
  },
  methods: {
    getTransformServiceWorkType ( works ) {
      return CertifyingSpecialist.getTransformServiceWorkType(works)
    },
    getTypeCertifyingSpecialist ( type ) {
      return CertifyingSpecialist.getTypeCertifyingSpecialist(type)
    },
    _handleClickOpenModalChangeGeo () {
      this.$root.$emit('open-modal-draw-geo')
    },
    _handleClickOpenModalQuickViewService (service) {
      let { works, attachments: { data: attachments }} = service

      this.$root.$emit('open-modal-quick-view-service', { attachments, works })
    },
    _handleClickSelectedService (service_id) {
      if (this.isAuthorized === false) {
        const { href } = this.$router.resolve({ name: 'certifying.executor.orders.create.specialists', params: { service_id } })
        this.$localStorage.set('redirect.register', href)
        redirect('/register')
      } else {
        this.$router.push({ name: 'certifying.executor.orders.create.specialists', params: { service_id } })
      }
    }
  }
}
</script>

<style lang="sass" scoped>
  .lm-primary-registered-button
    &:hover
      background-color: #084BC5
  .lm-white-registered-button
    &:hover
      color: #282A36
      background-color: #fff
  .lm-vs-landing-talent-header-geo
    display: block
    color: #ffffff
    font-size: 10px
    margin-top: 20px
    font-weight: 600
    line-height: 1.29
    text-transform: uppercase
    text-decoration: underline
  .lm-vs-landing-talent-service-item
    width: 296px
    padding: 24px
    text-align: left
    border-radius: 16px
    display: block
    margin-right: 16px
    &:hover
      box-shadow: 0 4px 16px 0 rgba(40, 42, 54, 0.16)
    .lm-vs-landing-talent-service-item-quick-view-wrap
      position: relative
      margin-bottom: 16px
      cursor: pointer
      &:hover
        .lm-vs-landing-talent-service-item-quick-view-wrap---tile
          display: block
          text-transform: uppercase
        &:after
          \content: ''
          position: absolute
          top: 0
          left: 0
          display: block
          width: 100%
          height: 150px
          background-color: rgba(40, 42, 54, 0.64)
          border-radius: 12px
      .lm-vs-landing-talent-service-item-quick-view-wrap---tile
        font-size: 12px
        font-weight: 600
        font-style: normal
        font-stretch: normal
        line-height: 1.33
        letter-spacing: 1px
        color: #ffffff
        position: absolute
        top: 50%
        width: 100%
        text-align: center
        display: none
        z-index: 1
    img
      width: 248px
      height: 150px
      border-radius: 12px
      margin-bottom: 0 !important
</style>
