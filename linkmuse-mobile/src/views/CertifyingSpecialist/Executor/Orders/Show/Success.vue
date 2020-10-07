<template>
  <div>
    <template v-if="order && order.status === FINISHED">
      <template v-if="has_review === false">
        <div class="lm-m-cs-certification-page lm-m-fullh-page">
          <div class="lm-m-cs-certification-page--wrap">
            <h3 class="title">Верификация пройдена</h3>
            <template v-if="!has_review">
              <div class="desc">
                Оцените работу специалиста
              </div>
              <div class="lm-m-cs-certification-page--rating">

                <span class="title">Оцените работу:</span>
                <lm-rate :length="5" v-model="fields.rating"
                         name="rating"
                         v-validate="'required'"
                         :class="{ 'has-error': (verrors.has('rating')) }"
                         :disabled="fields.disabled">
                </lm-rate>
              </div>

              <div class="separator"></div>

              <div class="lm-input-wrap">
                <label for="body">Отзыв о специалисте:</label>
                <input id="body" name="body" type="text"
                       v-model="fields.body"
                       v-validate="'max:256'"
                       placeholder="Напишите все, что вам понравилось и нет"
                       :class="{ 'lm-input': true, error: (verrors.has('body')) }">
              </div>
            </template>
          </div>
          <div class="lm-action-buttons lm-bottom-actions-buttons">
            <router-link :to="{ name: 'certifying.executor.orders.show', params: { order_id: order.id } }" class="lm-link-button">назад</router-link>
            <button class="lm-primary-button middle" @click="_handleClickReviewOrder()">Готово</button>
          </div>
        </div>
      </template>
      <template v-if="has_review">
        <div class="lm-m-cs-certification-page lm-m-fullh-page">
          <div class="lm-m-cs-certification-page--wrap">
            <h3 class="title">Верификация пройдена</h3>
            <div class="desc">
              Данные будут сохранены на вашей странице. Следующую верификацию рекомендуется провести через полгода
            </div>
            <div class="separator"></div>
            <template v-if="work_has_measurement">
              <div class="lm-m-cs-certification-params">
                <span class="title">Параметры:</span>
                <div class="lm-m-cs-certification-params--wrap">
                  <div class="item height">
                    <span>Рост</span>
                    <b>{{ measurement['body-parameters']['height'] }} <font>см</font></b>
                  </div>
                  <div class="item weight">
                    <span>Вес</span>
                    <b>{{ measurement['body-parameters']['weight'] }} <font>кг</font></b>
                  </div>
                </div>
                <div class="lm-m-cs-certification-params--wrap">
                  <div class="item chest">
                    <span>Грудь</span>
                    <b>{{ measurement['body-parameters']['volume-of-breast'] }} <font>см</font></b>
                  </div>
                  <div class="item waist">
                    <span>Талия</span>
                    <b>{{ measurement['body-parameters']['waist'] }} <font>см</font></b>
                  </div>
                  <div class="item byrd">
                    <span>Бедра</span>
                    <b>{{ measurement['body-parameters']['hips'] }} <font>см</font></b>
                  </div>
                </div>
              </div>
            </template>
          </div>

          <template v-if="(work_has_photo || work_has_video)">
            <div class="separator"></div>
            <div v-if="slides.length > 0" :class="['lm-m-cs-certification-attachments', { null: (slides.length === 0) }]">
              <template v-if="slides.length > 0">
                <div class="lm-m-cs-certification-page--wrap">
                  <span class="title">Файлы:</span>
                </div>
                <div class="lm-m-cs-certification-attachments--wrap">
                  <div v-for="(slide) in slides" class="lm-m-cs-certification-attachments--item">
                    <media :media="slide" :type="slide.type.includes('photo') ? 'photo' : 'video'" :class="[slide.type.includes('photo') ? 'photo' : 'video']"
                           :src="(slide.type.includes('photo')) ? slide.paths.original : null"
                           :player="(slide.type.includes('video')) ? slide.player : null"
                           :album="`order_${order.id}`">
                      <img :src="(slide.type.includes('photo')) ? slide.paths['128x128'] : (slide.cover_image)" :alt="`Заказ #${order.id}`">
                      <i v-if="(has(slide, 'type') && slide.type.includes('video'))" class="lm-play-button"></i>
                    </media>
                  </div>
                </div>
              </template>

              <template v-if="archive_path">
                <div class="lm-m-cs-certification-page--wrap">
                  <a class="lm-m-cs-certification-attachments--archive" :href="archive_path">
                    <i class="lm-icon-square-download"></i>
                    <span>скачать архивом</span>
                  </a>
                </div>
              </template>
              <template v-if="!archive_path">
                <div class="lm-m-cs-certification-page--wrap">
                  <a class="lm-m-cs-certification-attachments--archive">
                    <span>Идет генерация архива...</span>
                  </a>
                </div>
              </template>
            </div>
          </template>

          <div class="lm-action-buttons lm-bottom-actions-buttons">
            <router-link :to="{ name: 'certifying.executor.orders.show', params: { order_id: order.id } }" class="lm-link-button">назад</router-link>
            <router-link :to="{ name: 'certifying.executor.orders.index' }" class="lm-primary-button middle">Готово</router-link>
          </div>
        </div>
      </template>
    </template>
    <template v-else>
      <div class="lm-m-cs-agree-meeting-page lm-m-fullh-page">
        <div class="lm-m-cs-wait-page--wrap">
          <h3 class="title">Заказ найден</h3>
          <div class="desc">
            <div class="top">К сожалению, данный заказ не найден.</div>
          </div>
        </div>
        <div class="lm-action-buttons lm-bottom-actions-buttons">
          <router-link :to="{ name: 'certifying.executor.orders.index' }" class="lm-link-button">назад</router-link>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
  import { has } from '@utils'
  import FileSaver from 'file-saver'
  import { Toast, Indicator } from 'mint-ui'
  import { mapGetters, mapActions } from 'vuex'

  const BASE_URL_UPLOAD = process.env.BASE_URL_UPLOAD

  import {
    FINISHED
  } from '@modules/CertifyingSpecialist/Enums/OrderStatuses'
  import { PHOTO, VIDEO, MEASUREMENT } from '@modules/CertifyingSpecialist/Enums/Services'

  export default {
    metaInfo: {
      title: 'Верификация пройдена'
    },
    data () {
      return {
        FINISHED, has,
        fields: {
          rating: null,
          body: null,
          disabled: false
        },
        loading: false,
        measurement: {
          'body-parameters': {
            'height': null,
            'volume-of-breast': null,
            'weight': null,
            'waist': null,
            'hips': null
          }
        }
      }
    },
    async asyncData ({store, route}) {
      await store.dispatch('certifying/getOrderById', {
        id: Number(route.params.order_id),
        include: 'service,photos,video,measurement,review,certifying_specialist,certified_user'
      })
    },
    computed: {
      ...mapGetters({
        order: 'certifying/getSingleOrderData',
        order_loading: 'certifying/geSingleOrderLoading'
      }),
      service () {
        if (!this.order) return {}
        return this.order.service.data
      },
      works () {
        if (!this.service) return {}
        return this.service.works
      },
      worksKeys () {
        if (!this.works) return []
        return Object.keys(this.works)
      },
      work_has_measurement () {
        if (!this.works) return
        return this.worksKeys.includes(MEASUREMENT)
      },
      work_has_photo () {
        if (!this.works) return
        return this.worksKeys.includes(PHOTO)
      },
      work_has_video () {
        if (!this.works) return
        return this.worksKeys.includes(VIDEO)
      },
      photos () {
        if (!this.order || !this.work_has_photo || !has(this.order, 'photos.data')) return []
        return this.order['photos']['data']
      },
      video () {
        if (!this.order || !this.work_has_video || !has(this.order, 'video.data')) return []
        return [this.order['video']['data']]
      },
      slides () {
        return [...this.photos, ...this.video]
      },
      has_review () {
        return has(this.order, 'review.data')
      },
      archive_path () {
        return has(this.order, 'archive_path') && this.order['archive_path'] ? this.order['archive_path'] : null
      }
    },
    created () {
      if (this.work_has_measurement && this.order['measurement']) {
        let {data} = this.order['measurement']
        for (let index in data['body-parameters']) {
          if (typeof (this.measurement['body-parameters'][index]) === 'undefined') return
          this.measurement['body-parameters'][index] = data['body-parameters'][index]
        }
      }

      if (has(this.order, 'review.data.rating')) {
        this.fields.rating = this.order.review.data.rating
        this.fields.body = this.order.review.data.body
        this.fields.disabled = true
      }
    },
    methods: {
      ...mapActions({
        setReviewData: 'certifying/setSingleOrderFieldByKey'
      }),
      preReviewOrder () {
        return new Promise((resolve, reject) => {
          this.$validator.validateAll().then(result => {
            if (result) {
              resolve(true)
            }
          })
        })
      },
      _handleClickReviewOrder () {
        this.preReviewOrder().then((result) => {
          this.loading = true
          Indicator.open()

          let {rating, body} = this.fields

          this.$api.post(`/api/v2/certifying-specialists/orders/${this.order.id}/reviews`, {rating, body}).then(response => {
            let {data} = response

            this.setReviewData({key: 'review', data})

            this.loading = false

            Indicator.close()
            Toast({ message: 'Успешно', iconClass: 'mintui mintui-success' })

          }).catch((err) => {
            this.loading = false

            Indicator.close()
            Toast({ message: 'Ошибка', iconClass: 'mintui mintui-field-error' })

            const {response: {data}, response: {status}} = error
            if (status === 422 && data.errors) {
              this.$setLaravelValidationErrorsFromResponse(data)
            } else throw new Error(`Error create review order#${this.order.id}`)
          })
        })
      },
      _handleClickDownloadArchive () {
        Indicator.open()
        this.loading = true
        this.$api.post(`/api/v2/certifying-specialists/orders/${this.order.id}/archive`, {}, {
          timeout: 120000,
          responseType: 'blob',
          baseURL: BASE_URL_UPLOAD
        }).then(response => {
          this.loading = false
          Indicator.close()

          let { data } = response
          FileSaver.saveAs(data, `certification-${this.order.id}.zip`)
        }).catch((err) => {
          this.loading = false
          Indicator.close()
          Toast({ message: 'Ошибка', iconClass: 'mintui mintui-field-error' })
          throw new Error(`Error download archive order#${this.order.id}`)
        })
      }
    }
  }
</script>

<style scoped>

</style>
