<template>
  <div :class="['lm-m-profile-page', 'specialist-card']">
    <template v-if="error || !service">
      <div class="wrapper no-padding" style="text-align: center">
        <span style="padding-top: 50px; display: inline-block;">Пользователь не найден</span>
      </div>
    </template>
    <template v-else-if="(error === false && service)">
      <div class="wrapper no-padding">
        <div class="lm-m-profile-page-head">
          <div class="lm-user-vertical big">
            <img :src="specialist.avatar" class="lm-user-vertical-avatar" :alt="specialist.name">

            <div class="lm-user-vertical-info">
              <div class="lm-user-vertical-info-name">
                <span>{{ specialist.name }}</span>
              </div>
              <div class="lm-user-block-vertical-type">
                <span class="type" v-if="has(specialist, 'category')">
                  <template v-if="(Array.isArray(specialist.category) && specialist.category.length)">
                    {{ specialist.category.join(', ') }}
                  </template>
                  <template v-else-if="Array.isArray(specialist.category) === false && specialist.category">
                    {{ specialist.category }}
                  </template>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div class="lm-m-nav-menu" v-sticky="{ zIndex: 100, stickyTop: 0, disabled: false }">
          <div class="lm-m-nav-wrapper">
            <div class="lm-m-nav-menu--left" v-scroll-spy-active v-scroll-spy-link="{ selector: 'a.lm-m-nav-menu--item' }">
              <a href="javascript:void(0)" class="lm-m-nav-menu--item active">
                <span class="text">Инфо</span>
              </a>
              <a href="javascript:void(0)" class="lm-m-nav-menu--item">
                <span class="text">Портфолио</span>
              </a>
            </div>
          </div>
        </div>

        <div v-scroll-spy="{ offset: '56' }">
          <div class="lm-m-profile-user-info" id="info">
            <template v-if="specialist.about_me">
              <div class="lm-m-profile-user-info--line">
                <div>
                  <div class="title">
                    <div class="left">
                      <span>Обо мне</span>
                    </div>
                  </div>
                  <div class="about">
                    <span class="about-text">{{ specialist.about_me }}</span>
                  </div>
                </div>
              </div>
            </template>
            <template v-if="service.address || specialist.site">
              <div class="lm-m-profile-user-info--line">
                <div>
                  <div class="title">
                    <div class="left">
                      <span>Контакты</span>
                    </div>
                  </div>
                  <div class="lm-profile-contact">
                    <div class="lm-profile-contact-line" v-if="service.address">
                      <a href="javascript:void(0)" class="lm-profile-contact-mail">
                        <span>{{ service.address }}</span>
                      </a>
                    </div>
                    <div class="lm-profile-contact-line" v-if="specialist.site">
                      <a :href="specialist.site" class="lm-profile-contact-web">
                        <span>{{ specialist.site }}</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </template>
            <template v-if="orders.length">
              <div class="lm-m-profile-cs-info">
                <div class="title">Верификации</div>
                <div class="lm-m-profile-cs-list">
                  <order-item v-for="order in orders" :key="order.id" :order="order"></order-item>
                </div>
              </div>
            </template>
          </div>
          <div class="lm-m-profile-tablet-right" id="portfolio">
            <div class="lm-m-profile-cs-item-media">
              <media v-for="item in media" :key="`${item.type}_${item.id}`" :class="[item.type.includes('photo') ? 'photo' : 'video']"
                     :type="item.type.includes('photo') ? 'photo' : 'video'" :src="(item.type.includes('photo')) ? item.paths.original: null"
                     :media="item" :player="(item.type.includes('video')) ? item.player : null" :album="`media_${specialist.id}`">
                <img v-media="{ item: item.paths, key: '128x128', fallback: (item.type.includes('photo')) ? item.paths['original'] : (item.cover_image) }"
                     :src="(item.type.includes('photo')) ? item.paths['128x128'] : (item.cover_image)" :alt="specialist.name">
              </media>
            </div>
          </div>
        </div>

        <div class="lm-m-profile-action-edit cs">
          <router-link :to="{ name: 'certifying.executor.orders.create', params: { service_id } }" class="lm-link-button">назад</router-link>
          <button href="javascript:void(0)" class="lm-primary-button middle" @click="_handleClickCreateOrder" :id="service.slug">продолжить</button>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
  import { has } from '@utils'
  import { mapGetters } from 'vuex'
  import { Toast, Indicator } from 'mint-ui'
  import OrderItem from '@components/CertifyingSpecialist/Customer/Specialist/Order.vue'

  import CertifyingSpecialist from '@modules/CertifyingSpecialist'

  export default {
    components: { 'order-item': OrderItem },
    async asyncData ({ store, route }) {
      let { specialist_id, service_id } = route.params
      await store.dispatch('certifying/getSpecialistById', {
        user_id: Number(specialist_id),
        include: `services:id(${service_id}),videos,photos,orders,orders.certified_user,orders.service,orders.review`
      })
    },
    metaInfo () {
      return {
        title: (this.specialist) ? this.specialist.name : 'Ошибка'
      }
    },
    data () {
      return {
        has
      }
    },
    computed: {
      ...mapGetters({
        error: 'certifying/geSingleSpecialistError',
        loading: 'certifying/geSingleSpecialistLoading',
        specialist: 'certifying/getSingleSpecialistData',
      }),
      service_id () {
        return Number(this.$route.params.service_id)
      },
      specialist_id () {
        return Number(this.$route.params.specialist_id)
      },
      service () {
        if (has(this.specialist, 'services.data') && this.specialist.services.data.length) {
          return this.specialist.services.data[0]
        }

        return false
      },
      orders () {
        return this.specialist.orders.data
      },
      media () {
        return [...this.specialist.photos.data, ...this.specialist.videos.data].slice(0, 25)
      }
    },
    methods: {
      _handleClickCreateOrder () {
        if (!this.service_id || !this.specialist_id) return false

        Indicator.open()

        let data = { certifying_user_id: this.specialist_id, service_id: this.service_id }

        this.$api.post('api/v2/certifying-specialists/orders', data).then(response => {
          let { data: { data } } = response

          Indicator.close()
          Toast({ message: 'Успешно', iconClass: 'mintui mintui-success' });

          this.$router.push({ name: 'certifying.executor.orders.pay', params: { order_id: data.id } })
        }).catch((err) => {
          Indicator.close()

          Toast({ message: 'Ошибка', iconClass: 'mintui mintui-field-error' })
          throw new Error('Error create order')
        })
      },
    }
  }
</script>

<style lang="sass" scoped>
  .specialist-card
    .lm-user-vertical-avatar
      border-radius: 16px
    .lm-m-profile-tablet-right
      margin: auto
    .lm-m-profile-cs-item-media
      padding-bottom: 62px
    @media (max-width: 767px)
      .lm-m-nav-menu
        border-top: 2px solid #f3f4f6
        margin-bottom: 1px
      .lm-m-profile-user-info
        border-top: 8px solid #f3f4f6
      .lm-m-profile-cs-item-media
        padding-bottom: 15px

</style>
