<template>
  <transition name="lm-specialist-modal">
    <custom-modal class="lm-ss-popup-modal" v-show="modal.value" v-model="modal.value" @hide="closeModal()">
      <div class="ss-popup" >
        <div class="ss-popup-wrap">
          <div class="ss-popup-left">
            <div class="ss-popup-content">
              <tabs class="black" v-model="media.active_tab" @input="_handleInputMediaTab">
                <tab :title="`Фото ${counters.photos ? '(' + counters.photos + ')' : '' }`">
                  <div class="ss-popup-content-photos" v-infinite-scroll="_handleInfiniteScrollPhotos" infinite-scroll-disabled="photosScrollBusy">
                    <media class="ss-popup-content-photos--item" v-for="photo in photos.data" :key="photo.id"
                           :media="photo" type="photo" :src="photo.paths.original" :album="`modal_photos_${specialist.id}`">
                      <img v-media="{ item: photo.paths, key: '128x128', fallback: photo.paths.original }" :src="photo.paths['128x128']" :alt="specialist.name">
                    </media>

                    <loader v-if="photos.loading" class="col-md-12"></loader>

                    <div class="pd-26 no-left" v-if="(photos.count === 0 && !photos.loading) || (photos.data.length === 0 && !photos.loading)">
                      <span style="color: #ffffff">К сожалению, фотографий у специалиста не найдено.</span>
                    </div>
                  </div>
                </tab>
                <tab :title="`Видео ${counters.videos ? '(' + counters.videos + ')' : '' }`">
                  <div class="ss-popup-content-videos" v-infinite-scroll="fetchSpecialistVideos" infinite-scroll-disabled="videos.scroll_busy">

                    <loader v-if="videos.loading" class="col-md-12"></loader>

                    <div class="pd-26 no-left" v-if="(videos.count === 0 && !videos.loading) || (videos.data.length === 0 && !videos.loading)">
                      <span style="color: #ffffff">К сожалению, видеозаписей у специалиста не найдено.</span>
                    </div>

                    <media class="ss-popup-content-videos--item" v-for="video in videos.data" :key="video.id"
                           :media="video" type="video" :player="video.player" :album="`modal_videos_${specialist.id}`">
                      <i class="lm-play-button"></i>
                      <img :src="video.cover_image" :alt="specialist.name">
                    </media>
                  </div>
                </tab>
              </tabs>
            </div>
          </div>
          <div class="ss-popup-right">
            <i class="icon-close2" @click="closeModal()"></i>
            <div :class="[{ 'loading': modal.specialist.loading }, 'ss-popup-right-top']">
              <template v-if="specialist">
                <a :href="specialist.href" class="lm-user-vertical" style="width: 350px; margin-left: auto; margin-right: auto;">

                  <template v-if="specialist.certifying_name">
                    <tooltip class="d-tooltip d-tooltip_vs-profile"  effect="scale" placement="right" :content="`Данный специалист работает под ${specialist.type === INDIVIDUAL_ENTREPRENEUR ? 'ИП' : ''} “${specialist.certifying_name}”`">
                      <svg class="d-tooltip__icon">
                        <use xlink:href="/dist/img/icons/verification/sprite.svg#icon_info" />
                      </svg>
                    </tooltip>
                  </template>

                  <img :src="specialist.avatar" :alt="specialist.name" class="lm-user-vertical-avatar">
                  <div class="lm-user-vertical-info">
                    <div class="lm-user-vertical-info-name">
                      {{ specialist.name }}
                    </div>
                    <div class="lm-user-block-vertical-type">
                      <span class="type">{{ specialist.category }}</span>
                      <span :class="[ 'lm-rating', rating_class ]" v-if="specialist.rating"> {{ specialist.rating | round(1) }}</span>
                    </div>
                  </div>
                </a>
                <div class="ss-popup-info-user">
                  <tabs v-model="modal.specialist.active_tab" @input="_handleInputInfoTab">
                    <tab title="Инфо">
                      <div class="ss-popup-info-user-content">
                        <div class="info-items">
                          <div class="info-item" v-if="studio && studio.address">
                            <div class="left">Адрес:</div>
                            <div class="right">{{ studio.address }}</div>
                          </div>
                          <div class="info-item" v-if="specialist.site">
                            <div class="left">Сайт:</div>
                            <div class="right"><a :href="specialist.site">{{ specialist.site }}</a></div>
                          </div>
                          <div class="info-item" v-if="specialist.about_me">
                            <div class="left">О себе:</div>
                            <div class="right">{{ specialist.about_me }}</div>
                          </div>
                        </div>
                      </div>
                    </tab>
                    <template v-if="(!service)">
                      <tab style="padding-top: 0;" title=" Услуги">
                        <div class="ss-popup-info-user-content">
                          <div class="service-items">
                            <div class="service-item-head" v-if="services.data.length">
                              <span>Услуга</span>
                              <span>Цена</span>
                            </div>

                            <service v-for="service in services.data" :key="service.id" :service="service" @selected="_handleSelectedService" :selected="(isExecutor)"></service>

                            <loader v-if="services.loading" class="col-md-12 pd-26"></loader>
                            <div class="pd-26 no-left no-right" v-if="(services.data.length === 0 && !services.loading)">
                              <span style="font-size: 14px;color: #000">К сожалению, других услуг у специалиста не найдено.</span>
                            </div>
                          </div>
                        </div>
                      </tab>
                    </template>
                    <tab style="padding-top: 0;" title="Студии">
                      <div class="tab__content tab__content_studios">
                        <div class="section section_studio section_studio_verification-specialist" v-for="studio in studios">
                          <div class="section__header section__header_studio section__header_studio_verification-specialist">
                            <div class="section__column section__column_studio-info section__column_studio-info_verification-specialist">
                              <div class="section__title section__title_studio-name section__title_studio-name_verification-specialist">
                               {{ studio.name | truncate(25) }}
                              </div>
                              <div class="section__address section__address_studio section__address_studio_verification-specialist">
                                {{ studio.address }}<template v-if="studio.metro">, м. {{ studio.metro }}</template>
                              </div>
                            </div>
                          </div>

                          <template v-if="studio.images.data.length">
                            <div class="section__body section__body_gallery section__body_gallery_studio section__body_gallery_studio_verification-specialist">
                              <media :media="image" type="photo" :src="image.paths.original" v-for="image in studio.images.data" :key="`studio-${studio.id}-image-${image.id}`">
                                <img class="img section__img section__img_studio section__img_studio_verification-specialist" :src="image.paths['128x128']" :alt="studio.name">
                              </media>
                            </div>
                          </template>
                        </div>

                        <div class="pd-26 no-left no-right" v-if="(studios.length === 0)">
                          <span style="font-size: 14px;color: #000">К сожалению, у специалиста пока нету студий.</span>
                        </div>
                      </div>
                    </tab>
                    <tab style="padding-top: 0;" title="Верификации">
                      <div class="ss-popup-info-user-content" v-infinite-scroll="fetchSpecialistOrders" infinite-scroll-disabled="orders.scroll_busy">
                        <div class="sertificate-items">
                          <div class="sertificate-item-head" v-if="orders.data.length">
                            <span class="left">Профессионал</span>
                            <span style="text-align: right" class="right">Оценка</span>
                          </div>

                          <order v-for="order in orders.data" :key="order.id" :order="order"></order>

                          <loader v-if="orders.loading" class="col-md-12 pd-26"></loader>
                          <div class="pd-26 no-left no-right" v-if="(orders.count === 0 && !orders.loading) || (orders.data.length === 0 && !orders.loading)">
                            <span style="font-size: 14px;color: #000">К сожалению, других верификаций у специалиста не найдено.</span>
                          </div>
                        </div>
                      </div>
                    </tab>
                  </tabs>
                </div>
              </template>
            </div>
            <div class="ss-popup-right-bottom">
              <div class="service" v-if="service">
                <div class="service-top">
                  <div class="left">
                    <tooltip class="menu-tooltip" effect="scale" placement="top" :content="service.name">
                      <span class="number">{{ service.name }}</span>
                    </tooltip>

                    <router-link :to="{ name: 'certifying.executor.index'}" @click.native="closeModal()" class="edit-service"></router-link>
                  </div>
                  <div class="right">
                    <span class="price-text">Цена</span>
                  </div>
                </div>
                <div class="service-bottom">
                  <div class="left">
                      <span v-for="(work, index) in getTransformServiceWorkType(service.works)" :key="index">
                          {{ work }}
                      </span>
                  </div>
                  <div class="right">
                    <div class="price" v-if="service.price">{{ service.price | currency('₽') }}</div>
                  </div>
                </div>
              </div>
              <div class="actions">
                <template v-if="(service && service.hasOwnProperty('id'))">
                  <a href="javascript:void(0)" class="lm-link-button cancel" @click="closeModal()">ОТМЕНА</a>
                  <a href="javascript:void(0)" class="lm-primary-button middle select" @click="selectedSpecialist()" :id="service.slug" v-if="!modal.loading">Выбрать</a>
                  <loader class="select" v-if="modal.loading" style="margin: auto"></loader>
                </template>
              </div>
            </div>
          </div>
        </div>
      </div>
    </custom-modal>
  </transition>
</template>

<script>

  import { has } from '@utils'
  import { mapGetters } from 'vuex'
  import CertifyingSpecialist from '@modules/CertifyingSpecialist'
  import { INDIVIDUAL_ENTREPRENEUR } from '@modules/CertifyingSpecialist/Enums/Types'

  import Service from './helpers/service.vue'
  import Order from './helpers/order.vue'

  const PHOTO_TAB = 0
  const VIDEO_TAB = 1
  const SERVICES_TAB = 1
  const ORDERS_TAB = 3

  export default {
    components: {Service, Order},
    data () {
      return {
        INDIVIDUAL_ENTREPRENEUR,
        modal: {
          value: false,
          loading: false,
          specialist: {
            data: null,
            loading: false,
            active_tab: 0,
            orders: {
              data: [],
              count: 0,
              offset: 0,
              limit: 24,
              init: false,
              loading: false,
              scroll_busy: false
            },
            services: {
              data: [],
              init: false,
              loading: false
            },
            media: {
              active_tab: 0,
              photos: {
                data: [],
                count: 0,
                offset: 0,
                limit: 24,
                init: false,
                loading: false,
                scroll_busy: false
              },
              videos: {
                data: [],
                count: 0,
                offset: 0,
                limit: 24,
                init: false,
                loading: false,
                scroll_busy: false
              }
            }
          },
          service: null,
          service_id: null
        }
      }
    },
    computed: {
      ...mapGetters({
        role: 'auth/getRole',
        user: 'auth/getAuthUser',
      }),
      isExecutor () {
        return (this.role === 'executor')
      },
      service () {
        return this.modal.service
      },
      specialist () {
        return this.modal.specialist.data
      },
      counters () {
        if (!this.specialist) return {}
        return this.specialist.counters
      },
      orders () {
        return this.modal.specialist.orders
      },
      services () {
        return this.modal.specialist.services
      },
      studios () {
        return has(this.modal.specialist.data, 'studios.data') ? this.modal.specialist.data.studios.data: []
      },
      media () {
        return this.modal.specialist.media
      },
      photos () {
        return this.media.photos
      },
      videos () {
        return this.media.videos
      },
      rating_class() {
        if (!this.specialist.rating) return
        return CertifyingSpecialist.getRatingClass(this.specialist.rating)
      },
      studio () {
        if (has(this.service, 'studio.data')) {
          return this.service.studio.data
        }

        return null
      },
      service_id () {
        return this.modal.service_id
      },
      photosScrollBusy () {
        return this.photos.scroll_busy
      }
    },
    mounted () {
      this.$root.$on('open-modal-specialist-show', (specialist, service, service_id) => {
        this.modal.service = service
        this.modal.service_id = service_id
        this.modal.specialist.data = specialist

        this.getSpecialistById(specialist.id)
        this.fetchSpecialistPhotos(specialist.id)

        this.$nextTick(() => {
          this.modal.value = true
        })

        // if (window && window.Intercom) window.Intercom('update', { alignment: 'left' })
        // this.$chatbull.hide()
      })
    },
    methods: {
      _handleInputMediaTab (value) {
        let specialist_id = this.specialist.id
        this.modal.specialist.media.active_tab = value

        if (value === VIDEO_TAB && !this.media.videos.init) {
          this.fetchSpecialistVideos(specialist_id)
        }
      },
      _handleInputInfoTab (value) {
        let specialist_id = this.specialist.id
        this.modal.specialist.active_tab = value

        const ordersTab = this.service ? (ORDERS_TAB - 1) : ORDERS_TAB

        if (!this.service && value === SERVICES_TAB && !this.services.init) {
          this.fetchSpecialistServices(specialist_id)
        } else if ( value === ordersTab && !this.orders.init) {
          this.fetchSpecialistOrders(specialist_id)
        }
      },
      getSpecialistById (user_id) {
        if (!user_id) return

        this.modal.specialist.loading = true

        let include = `studios${this.service_id ? `:service_id(${Number(this.service_id)})` : ''},studios.images,services.studio`

        this.$api.get(`/api/v2/certifying-specialists/${user_id}`, { include }).then(response => {
          let {data: {data}} = response
          this.modal.specialist.data = data
          this.modal.specialist.loading = false
        }).catch((err) => {
          this.modal.specialist.loading = false
          throw new Error(`Error get specialist user#${user_id}`)
        })
      },
      _handleInfiniteScrollPhotos () {
        if (!this.modal.specialist.data) return false
        const { id } = this.modal.specialist.data
        this.fetchSpecialistPhotos(id)
      },
      fetchSpecialistPhotos (user_id) {
        if (!user_id) return

        this.modal.specialist.media.photos.init = true
        this.modal.specialist.media.photos.loading = true
        this.modal.specialist.media.photos.scroll_busy = true

        let params = {
          limit: this.modal.specialist.media.photos.limit,
          offset: this.modal.specialist.media.photos.offset
        }

        this.$api.get(`/api/v2/certifying-specialists/${user_id}/photos`, params).then(response => {
          let {data: {data, meta: {count, new_offset}}} = response

          data.forEach(item => this.modal.specialist.media.photos.data.push(item))

          this.modal.specialist.media.photos.scroll_busy = (new_offset >= count)
          this.modal.specialist.media.photos.count = count
          this.modal.specialist.media.photos.offset = new_offset

          this.modal.specialist.media.photos.loading = false
        }).catch((err) => {
          this.modal.specialist.media.photos.init = false
          this.modal.specialist.media.photos.loading = false
          throw new Error(`Error fetch photos user#${user_id}`)
        })
      },
      fetchSpecialistVideos (user_id) {
        if (!user_id) return

        this.modal.specialist.media.videos.init = true
        this.modal.specialist.media.videos.loading = true
        this.modal.specialist.media.videos.scroll_busy = true

        let params = {
          limit: this.modal.specialist.media.videos.limit,
          offset: this.modal.specialist.media.videos.offset
        }

        this.$api.get(`/api/v2/certifying-specialists/${user_id}/videos`, params).then(response => {
          let {data: {data, meta: {count, new_offset}}} = response

          data.forEach(item => this.modal.specialist.media.videos.data.push(item))

          this.modal.specialist.media.videos.scroll_busy = (new_offset >= count)
          this.modal.specialist.media.videos.count = count
          this.modal.specialist.media.videos.offset = new_offset

          this.modal.specialist.media.videos.loading = false
        }).catch((err) => {
          this.modal.specialist.media.videos.init = false
          this.modal.specialist.media.videos.loading = false
          throw new Error(`Error fetch videos user#${user_id}`)
        })
      },
      fetchSpecialistServices (user_id) {
        if (!user_id) return

        this.modal.specialist.services.init = true
        this.modal.specialist.services.loading = true

        this.$api.get(`/api/v2/certifying-specialists/${user_id}/services`).then(response => {
          let {data: {data}} = response

          data.forEach(item => this.modal.specialist.services.data.push(item))

          this.modal.specialist.services.loading = false
        }).catch((err) => {
          this.modal.specialist.services.init = false
          this.modal.specialist.services.loading = false
          throw new Error(`Error fetch services user#${user_id}`)
        })
      },
      fetchSpecialistOrders (user_id) {
        if (!user_id) return

        this.modal.specialist.orders.init = true
        this.modal.specialist.orders.loading = true
        this.modal.specialist.orders.scroll_busy = true

        let params = {
          limit: this.modal.specialist.orders.limit,
          offset: this.modal.specialist.orders.offset,
          include: 'certified_user,service,review'
        }

        this.$api.get(`/api/v2/certifying-specialists/${user_id}/orders`, params).then(response => {
          let {data: {data, meta: {count, new_offset}}} = response

          data.forEach(item => this.modal.specialist.orders.data.push(item))

          this.modal.specialist.orders.scroll_busy = (new_offset >= count)
          this.modal.specialist.orders.count = count
          this.modal.specialist.orders.offset = new_offset

          this.modal.specialist.orders.loading = false
        }).catch((err) => {
          this.modal.specialist.orders.init = false
          this.modal.specialist.orders.loading = false
          throw new Error(`Error fetch orders user#${user_id}`)
        })
      },
      clearModal () {
        return new Promise((resolve, reject) => {
          this.modal.specialist = {
            data: null,
            loading: false,
            active_tab: 0,
            orders: {
              data: [],
              count: 0,
              offset: 0,
              limit: 24,
              init: false,
              loading: false,
              scroll_busy: false
            },
            services: {
              data: [],
              init: false,
              loading: false
            },
            media: {
              active_tab: 0,
              photos: {
                data: [],
                count: 0,
                offset: 0,
                limit: 24,
                init: false,
                loading: false,
                scroll_busy: false
              },
              videos: {
                data: [],
                count: 0,
                offset: 0,
                limit: 24,
                init: false,
                loading: false,
                scroll_busy: false
              }
            }
          }
          // if (window && window.Intercom) window.Intercom('update', { alignment: 'right' })
          // this.$chatbull.show()
          this.modal.service = null
          resolve(true)
        })
      },
      closeModal () {
        this.clearModal()
        this.modal.value = false
      },
      selectedSpecialist () {
        if (!this.service.hasOwnProperty('id') || !this.modal.specialist.data) return false

        this.modal.loading = true

        let data = {certifying_user_id: this.modal.specialist.data.id, service_id: this.service.id}

        this.$api.post('api/v2/certifying-specialists/orders', data).then(response => {
          let {data: {data}} = response

          this.closeModal()
          this.$router.push({name: 'certifying.executor.orders.pay', params: {order_id: data.id}})

          this.modal.loading = false
        }).catch((err) => {
          this.modal.loading = false
          throw new Error('Error create order')
        })
      },
      getTransformServiceWorkType (works) {
        return CertifyingSpecialist.getTransformServiceWorkType(works)
      },
      _handleSelectedService (service_id) {
        if (!service_id) return false

        this.modal.loading = true

        let data = { certifying_user_id: this.modal.specialist.data.id, service_id: service_id }

        this.$api.post('api/v2/certifying-specialists/orders', data).then(response => {
          let { data: { data} } = response

          this.closeModal()
          this.$router.push({name: 'certifying.executor.orders.pay', params: { order_id: data.id } })

          this.modal.loading = false
        }).catch((err) => {
          this.modal.loading = false

          this.closeModal()
          this.$router.push({name: 'certifying.executor.orders.create.specialists', params: {service_id: service_id}})
          this.$root.$emit('selected-new-service-modal-specialist-show')

          throw new Error('Error create order')
        })
      }
    }
  }
</script>
<style lang="sass">
  .ss-popup-right-top
    &.loading
  .ss-popup-content
    .lm-tabs
      height: 100%
      .tab-content
        height: 100%
        .tab-pane.active
          height: 100%
          .ss-popup-content-photos
            height: auto
            max-height: 100%
            overflow-y: scroll
          .ss-popup-content-videos
            height: auto
            max-height: 100%
            overflow-y: scroll

</style>
