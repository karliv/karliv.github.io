<template>
  <section class="ss-dispute">
    <template v-if="order && order.status === FINISHED">
      <h1>Верификация пройдена!</h1>

      <template v-if="!has_review">
        <div style="width: 450px;margin: 0 auto;background-color: #ffffff;padding-top: 24px;">
          <div class="ss-dispute-desc">
            Оцените работу специалиста
          </div>

          <div class="ss-sertificate-raiting" style="margin-bottom: 36px;">
            <rate :length="5" v-model="fields.rating"
                  name="rating"
                  v-validate="'required'"
                  :class="{ 'has-error': (verrors.has('rating')) }"
                  :disabled="fields.disabled">
            </rate>
          </div>

          <div class="lm-input-wrap" style="width: 400px; margin: 0 auto">
            <label style="text-align: left" for="comment">Отзыв о специалисте</label>
            <textarea id="comment" cols="30" rows="10" name="body"
                      :class="{ 'lm-input': true, error: (verrors.has('body')) }"
                      v-model="fields.body"
                      v-validate="'max:256'"
                      placeholder="Напишите все, что вам понравилось и нет">
            </textarea>
          </div>
          <a style="margin-top: 48px;" href="javascript:void(0)" class="lm-primary-button full" @click="reviewOrder()" v-if="!loading">отправить</a>
          <loader v-if="loading" class="col-md-12" style="margin-top: 48px; height: 64px; line-height: 64px;"></loader>
        </div>
      </template>

      <template v-else-if="has_review">
        <div class="ss-dispute-desc">
          Верификационные данные будут сохранены на вашей странице.
          Следующую верификацию рекомендуется провести через полгода.
        </div>
        <div class="ss-dispute-form">
          <div class="ss-dispute-form-wrap top" v-if="work_has_measurement">
            <h2>Параметры</h2>
            <div class="ss-dispute-warning-content-params-wrap">
              <div class="item height">
                <span>Рост</span>
                <b>{{ measurement['body-parameters']['height'] }} <font>см</font></b>
              </div>
              <div class="item weight">
                <span>Вес</span>
                <b>{{ measurement['body-parameters']['weight'] }} <font>кг</font></b>
              </div>
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
          <div class="ss-dispute-form-wrap border-bottom" v-if="work_has_photo && photos && photos.length">
            <h2>Фото</h2>
            <div class="ss-dispute-form--images">
              <media class="lm-user-block-avatar" v-for="photo in photos" :key="photo.id" :media="photo" type="photo" :src="photo.paths.original">
                <img v-media="{ item: photo.paths, key: '128x128', fallback: photo.paths.original }" :src="photo.paths['128x128']" :alt="`Заказ #${order.id}`">
              </media>

            </div>
            <div class="center">
              <template v-if="(work_has_video === false || !video)">
                <template v-if="archive_path">
                  <a :href="archive_path" class="download">Скачать архивом</a>
                </template>
                <template v-else-if="!archive_path">
                  <span>Идет генерация архива...</span>
                </template>
              </template>
            </div>
          </div>
          <div class="ss-dispute-form-wrap" v-if="work_has_video && video">
            <h2>Видео</h2>

            <media class="ss-dispute-form--video" v-if="video" :media="video" type="video" :player="video.player">

              <img :src="video.cover_image" :alt="`Заказ #${order.id}`" class="ss-dispute-form--video-cover">
              <div class="lm-icon-play"></div>
            </media>

            <div class="center">
              <loader v-if="loading" class="col-md-12" style="margin-top: 48px; height: 64px; line-height: 64px;"></loader>
              <template v-if="archive_path">
                <a :href="archive_path" class="download">Скачать архивом</a>
              </template>
              <template v-else-if="!archive_path">
                <span>Идет генерация архива...</span>
              </template>
            </div>
          </div>
        </div>
      </template>

    </template>
    <template v-else>
      <div class="ss-dispute-desc">
        <h1>Произошла ошибка</h1>
        <div class="ss-dispute-desc">
          <a href="javascript:history.go(-1)" class="lm-primary-button" style="color: #fff;">назад</a>
        </div>
      </div>
    </template>
  </section>
</template>

<script>
import { has } from '@utils'
import FileSaver from 'file-saver'
import { mapGetters, mapActions } from 'vuex'

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
      FINISHED,
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
      if (!this.order || !this.work_has_photo || !has(this.order, 'photos.data')) return
      return this.order['photos']['data']
    },
    video () {
      if (!this.order || !this.work_has_video || !has(this.order, 'video.data')) return
      return this.order['video']['data']
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
    reviewOrder () {
      this.preReviewOrder().then((result) => {
        this.loading = true

        let {rating, body} = this.fields

        this.$api.post(`/api/v2/certifying-specialists/orders/${this.order.id}/reviews`, {rating, body}).then(response => {
          let {data} = response

          this.setReviewData({key: 'review', data})

          this.loading = false
        }).catch((err) => {
          this.loading = false
          throw new Error(`Error create review order#${this.order.id}`)
        })
      })
    },
    _handleClickDownloadArchive () {
      this.loading = true
      this.$api.post(`/api/v2/certifying-specialists/orders/${this.order.id}/archive`, {}, {
        responseType: 'blob',
        timeout: 120000,
      }).then(response => {
        this.loading = false

        let { data } = response

        try {
          FileSaver.saveAs(data, `certification-${this.order.id}.zip`)
        } catch (e) {
          this.loading = false
        }
      }).catch((err) => {
        this.loading = false
        throw new Error(`Error download archive order#${this.order.id}`)
      })
    }
  }
}
</script>

<style scoped>

</style>
