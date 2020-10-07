<template>
  <div>
    <div class="ss-dispute-warning-head">
      <div class="left">Верификация</div>
      <i class="icon-more" v-if="(refusedDispute === false && !order_is_archived)">
        <div class="actions-item">
          <ul>
            <li>
              <router-link :to="{ name: 'certifying.executor.orders.show.dispute', params: { order_id: order.id } }">Начать диспут</router-link>
            </li>
          </ul>
        </div>
      </i>
    </div>
    <tabs>
      <tab title="Параметры" style="padding: 0" v-if="work_has_measurement">
        <div class="ss-dispute-warning-content">
          <div class="ss-dispute-warning-content-params">
            <div class="title">Ваши данные</div>
            <div class="ss-dispute-warning-content-params-wrap">
              <div class="item height">
                <span>Рост</span>
                <b>{{ measurement['body-parameters']['height'] || '-' }} <font>см</font></b>
              </div>
              <div class="item weight">
                <span>Вес</span>
                <b>{{ measurement['body-parameters']['weight'] || '-' }} <font>кг</font></b>
              </div>
            </div>
          </div>
          <div class="ss-dispute-warning-content-params">
            <div class="title">Ваши параметры</div>
            <div class="ss-dispute-warning-content-params-wrap">
              <div class="item chest">
                <span>Грудь</span>
                <b>{{ measurement['body-parameters']['volume-of-breast'] || '-' }} <font>см</font></b>
              </div>
              <div class="item waist">
                <span>Талия</span>
                <b>{{ measurement['body-parameters']['waist'] || '-' }} <font>см</font></b>
              </div>
              <div class="item byrd">
                <span>Бедра</span>
                <b>{{ measurement['body-parameters']['hips'] || '-' }} <font>см</font></b>
              </div>
            </div>
          </div>
        </div>
      </tab>
      <tab title="Фото" style="padding: 0" v-if="work_has_photo">
        <div class="ss-dispute-warning-content">
          <div class="ss-sertificate-photos">
            <template v-if="photos.length">
              <media class="ss-sertificate-photo" v-for="(photo, index) in photos" :key="photo.id" :media="photo" type="photo" :src="photo.paths.original">
                <span class="number-ss-sertificate-photo">{{ (index + 1) }}</span>
                <img :src="photo.paths['128x128']" :alt="`Заказ #${order.id}`">
              </media>
            </template>
            <template v-if="(photos.length === 0)">
              <span style="font-weight: 600; color: #282a36; font-size: 14px; text-align: left;">Специалист, еще не загрузил Ваши фото. Если что-то пошло не так, обратитесь к модератору.</span>
            </template>
          </div>
          <template v-if="photos.length">
            <div class="ss-sertificate-photos-text" style="margin-top: 70px">
              Для обсуждения работ со специалистом используйте номера файлов <span class="number-ss-sertificate-photo">1</span>
            </div>
          </template>
        </div>
      </tab>
      <tab title="Видео" style="padding: 0" v-if="work_has_video">
        <div class="ss-dispute-warning-content">
          <div class="ss-sertificate-photos edited videos">
            <template v-if="video">
              <media :class="{ 'ss-sertificate-photo': true, 'video': true }" :media="video" type="video" :player="video.player">
                <i class="icon-share"></i>
                <img :src="video.cover_image" :alt="`Заказ #${order.id}`">
              </media>
            </template>
            <template v-else>
              <span style="font-weight: 600; color: #282a36; font-size: 14px; text-align: left;">Специалист, еще не загрузил Ваше видео. Если что-то пошло не так, обратитесь к модератору.</span>
            </template>
          </div>
        </div>
      </tab>
    </tabs>
  </div>
</template>

<script>
import { PHOTO, VIDEO, MEASUREMENT } from '@modules/CertifyingSpecialist/Enums/Services'
import { has } from '@utils'

import {
  WAIT_WORK,
  getArchivalCategory,
  FINALIZING
} from '@modules/CertifyingSpecialist/Enums/OrderStatuses'

export default {
  props: {
    refusedDispute: {
      type: Boolean,
      default: false
    },
    order: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
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
    order_is_archived () {
      if (!this.order) return false
      return getArchivalCategory().includes(this.order.status)
    },
    photos () {
      if (!this.order || !this.work_has_photo || !has(this.order, 'photos.data')) return []
      return this.order['photos']['data']
    },
    video () {
      if (!this.order || !this.work_has_video || !has(this.order, 'video.data')) return null
      return this.order['video']['data']
    }
  },
  created () {
    if (this.work_has_measurement && this.order['measurement']) {
      let { data } = this.order['measurement']
      // for (let index in data['body-parameters']) {
      //   if (typeof (this.measurement['body-parameters'][index]) === 'undefined') return
      //   this.measurement['body-parameters'][index] = data['body-parameters'][index]
      // }
      Object.keys(data['body-parameters']).forEach(prop => {
        if (typeof (this.measurement['body-parameters'][prop]) === 'undefined') return null
        this.measurement['body-parameters'][prop] = data['body-parameters'][prop]
      })
    }
  }
}
</script>
