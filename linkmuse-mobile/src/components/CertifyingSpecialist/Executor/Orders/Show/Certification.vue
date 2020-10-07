<template>
  <div>
    <div class="lm-m-cs-certification-page lm-m-fullh-page">
      <div class="lm-m-cs-certification-page--wrap">
        <h3 class="title">Верификация</h3>
        <div class="desc">
          Для окончания верификации необходимо принять работу специалиста
        </div>
      </div>

      <template v-if="(work_has_photo || work_has_video)">
        <div :class="['lm-m-cs-certification-attachments', { null: (slides.length === 0) }]">
          <template v-if="slides.length > 0">
            <div class="lm-m-cs-certification-page--wrap">
              <span class="title">Файлы:</span>
            </div>
            <div class="lm-m-cs-certification-attachments--wrap">
              <div v-for="(slide, index) in slides" class="lm-m-cs-certification-attachments--item">
                <media :media="slide" :type="slide.type.includes('photo') ? 'photo' : 'video'" :class="[slide.type.includes('photo') ? 'photo' : 'video']"
                       :src="(slide.type.includes('photo')) ? slide.paths.original : null"
                       :player="(slide.type.includes('video')) ? slide.player : null"
                       :album="`order_${order.id}`">
                  <img :src="(slide.type.includes('photo')) ? slide.paths['128x128'] : (slide.cover_image)" :alt="`Заказ #${order.id}`">
                  <i v-if="(has(slide, 'type') && slide.type.includes('video'))" class="lm-play-button"></i>
                  <span class="num">{{index+1}}</span>
                </media>
              </div>
            </div>
            <div class="lm-m-cs-certification-page--wrap">
              <div class="desc">Используйте номера файлов для обсуждения работ со специалистом</div>
            </div>
          </template>
        </div>
      </template>

      <div class="lm-m-cs-certification-page--wrap">
        <template v-if="work_has_measurement">
          <div class="separator"></div>
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
        <div class="separator"></div>
        <div class="lm-m-cs-certification-dispute">
          <router-link :to="{ name: 'messages.show', params: { uid } }" class="lm-primary-button lm-outline-button middle">В диалог</router-link>
        </div>

        <div class="separator"></div>

        <div class="lm-m-cs-certification-dispute">
          <router-link :to="{ name: 'certifying.executor.orders.show.dispute', params: { order_id: order.id } }" class="lm-primary-button lm-outline-button red middle">Открыть диспут</router-link>
        </div>
      </div>


      <div class="lm-action-buttons lm-bottom-actions-buttons">
        <router-link :to="{ name: 'certifying.executor.orders.index' }" class="lm-link-button">назад</router-link>
        <a href="javascript:void(0)" class="lm-primary-button middle" @click="_handleClickAgreeOrder" :id="service.slug">Принять</a>
      </div>
    </div>
  </div>
</template>

<script>
  import { has } from '@utils'
  import { Toast, Indicator } from 'mint-ui'
  import { PHOTO, VIDEO, MEASUREMENT } from '@modules/CertifyingSpecialist/Enums/Services'

  import {
    WAIT_WORK,
    FINALIZING
  } from '@modules/CertifyingSpecialist/Enums/OrderStatuses'

  export default {
    props: {
      order: {
        type: Object,
        required: true
      },
      uid: {
        type: String,
        required: true
      }
    },
    data () {
      return {
        has,
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
    computed: {
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
        if (!this.works) return false
        return this.worksKeys.includes(MEASUREMENT)
      },
      work_has_photo () {
        if (!this.works) return false
        return this.worksKeys.includes(PHOTO)
      },
      work_has_video () {
        if (!this.works) return false
        return this.worksKeys.includes(VIDEO)
      },
      order_in_work () {
        if (!this.order) return false
        return [WAIT_WORK, FINALIZING].includes(this.order.status)
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
      }
    },
    created () {
      if (this.work_has_measurement && this.order['measurement']) {
        let { data } = this.order['measurement']
        Object.keys(data['body-parameters']).forEach(prop => {
          if (typeof (this.measurement['body-parameters'][prop]) === 'undefined') return null
          this.measurement['body-parameters'][prop] = data['body-parameters'][prop]
        })
      }
    },
    methods: {
      _handleClickAgreeOrder () {
        Indicator.open()

        this.$api.post(`/api/v2/certifying-specialists/orders/${this.order.id}/status/finish`).then((response) => {
          this.$emit('finished')
          Indicator.close()
          Toast({ message: 'Успешно', iconClass: 'mintui mintui-success' });
        }, (response) => {

          Indicator.close()
          Toast({ message: 'Ошибка', iconClass: 'mintui mintui-field-error' })

          throw new Error(`Error stop work order#${this.order.id}`)
        })
      }
    }
  }
</script>

<style scoped>

</style>
