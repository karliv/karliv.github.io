<template>
  <div>
    <div class="ss-dispute-warning-head">
      <div class="left">Верификация</div>
      <i class="icon-more" v-if="(refusedDispute === false && !order_is_archived)">
        <div class="actions-item">
          <ul>
            <li>
              <router-link :to="{ name: 'certifying.customer.orders.show.dispute', params: { order_id: order.id } }">Начать диспут</router-link>
            </li>
          </ul>
        </div>
      </i>
    </div>
    <tabs @input="_handleInputTab" v-model="active_tab">
      <tab title="Параметры" style="padding: 0" v-if="work_has_measurement">
        <div class="ss-dispute-warning-content">
          <div class="ss-dispute-warning-content-params">
            <div class="title">Данные модели</div>
            <div class="ss-dispute-warning-content-params-wrap">
              <div class="inputs">
                <div :class="{ 'lm-input-wrap': true, error: (verrors.has('measurement.height') || measurement.errors['measurement.body-parameters.height']) }">
                  <label for="height" class="height">Рост, см</label>
                  <input type="text" key="height" name="height" id="height"
                         v-mask-static="'9{2,3}'"
                         v-model="measurement['fields']['body-parameters']['height']"
                         v-validate="'required|decimal:3|min_value:30|max_value:275'"
                         data-vv-scope="measurement"
                         :class="['lm-input', { 'error': (verrors.has('measurement.height') || measurement.errors['measurement.body-parameters.height']) }]"
                         placeholder="0"
                         :disabled="(!order_in_work)">
                </div>
                <div :class="{ 'lm-input-wrap': true, error: (verrors.has('measurement.weight') || measurement.errors['measurement.body-parameters.weight']) }">
                  <label for="weight" class="weight">Вес, кг</label>
                  <input type="text" key="weight" name="weight" id="weight"
                         v-mask-static="'9{2,3}'"
                         v-model="measurement['fields']['body-parameters']['weight']"
                         v-validate="'required|decimal:3|min_value:10|max_value:275'"
                         data-vv-scope="measurement"
                         :class="['lm-input', { 'error': (verrors.has('measurement.weight') || measurement.errors['measurement.body-parameters.weight']) }]"
                         placeholder="0"
                         :disabled="(!order_in_work)">
                </div>
              </div>
            </div>
            <div class="title">Параметры модели</div>
            <div class="ss-dispute-warning-content-params-wrap">
              <div class="inputs">
                <div :class="{ 'lm-input-wrap': true, error: (verrors.has('measurement.volume_of_breast') || measurement.errors['measurement.body-parameters.volume-of-breast']) }">
                  <label for="volume_of_breast" class="chest">Грудь, см</label>
                  <input type="text" key="volume_of_breast" name="volume_of_breast" id="volume_of_breast"
                         v-mask-static="'9{2,3}'"
                         v-model="measurement['fields']['body-parameters']['volume-of-breast']"
                         v-validate="'required|decimal:3|min_value:25|max_value:150'"
                         data-vv-scope="measurement"
                         :class="['lm-input', { 'error': (verrors.has('measurement.volume_of_breast') || measurement.errors['measurement.body-parameters.volume-of-breast']) }]"
                         placeholder="0"
                         :disabled="(!order_in_work)">
                </div>
                <div :class="{ 'lm-input-wrap': true, error: (verrors.has('measurement.waist') || measurement.errors['measurement.body-parameters.waist']) }">
                  <label for="waist" class="waist">Талия, см</label>
                  <input type="text" key="waist" name="waist" id="waist"
                         v-mask-static="'9{2,3}'"
                         v-model="measurement['fields']['body-parameters']['waist']"
                         v-validate="'required|decimal:3|min_value:25|max_value:150'"
                         data-vv-scope="measurement"
                         :class="['lm-input', { 'error': (verrors.has('measurement.waist') || measurement.errors['measurement.body-parameters.waist']) }]"
                         placeholder="0"
                         :disabled="(!order_in_work)">
                </div>
                <div :class="{ 'lm-input-wrap': true, error: (verrors.has('measurement.hips') || measurement.errors['measurement.body-parameters.hips']) }">
                  <label for="hips" class="byrd">Бедра, см</label>
                  <input type="text" key="hips" name="hips" id="hips"
                         v-mask-static="'9{2,3}'"
                         v-model="measurement['fields']['body-parameters']['hips']"
                         v-validate="'required|decimal:3|min_value:25|max_value:150'"
                         data-vv-scope="measurement"
                         :class="['lm-input', { 'error': (verrors.has('measurement.hips') || measurement.errors['measurement.body-parameters.hips']) }]"
                         placeholder="0"
                         :disabled="(!order_in_work)">
                </div>
              </div>
            </div>
            <div class="text-desc">Все цифры указываются без дробей</div>
          </div>
        </div>
        <a href="javascript:void(0)" class="lm-primary-button full" @click="validateMeasurement()" v-if="!measurement.loading && order_in_work">СОХРАНИТЬ
          ПАРАМЕТРЫ</a>
        <loader v-if="measurement.loading" class="loader-button-certification"></loader>
      </tab>
      <tab title="Фото" style="padding: 0" v-if="work_has_photo">
        <div class="ss-dispute-warning-content">
          <template v-if="order_in_work">
            <lm-dropzone :default-items="photos.data"
                         :media-modal="true"
                         :show-numbers="true"
                         :accept="acceptInputPhoto"
                         :multiple="true"
                         :dict-default-message="dictDefaultMessage"
                         @update="updateUploadPhoto"
                         @onUpload="handleUploadPhoto"
                         @onRemove="handleRemovePhoto">
            </lm-dropzone>
          </template>
          <template v-else-if="(!order_in_work)">
            <div class="ss-sertificate-photos">
              <media v-for="(photo, index) in photos.data" :class="['ss-sertificate-photo']"
                     :key="photo.id" :media="photo" type="photo" :src="photo.paths.original">
                <span class="number-ss-sertificate-photo">{{ (index + 1) }}</span>
                <img :src="photo.paths['128x128']" :alt="`Заказ #${order.id}`">
              </media>
            </div>
          </template>
        </div>
        <a href="javascript:void(0)" v-if="!loading && order_in_work"
           :class="[{ disabled: works[PHOTO]['min'] > count_added_photos }, 'lm-primary-button', 'full']" @click="stopWork()">
          отправить
          <template v-if="( works[PHOTO]['min'] > count_added_photos )">
            (осталось {{ (works[PHOTO]['min'] - count_added_photos) | pluralize(['фотография', 'фотографии', 'фотографий']) }})
          </template>
        </a>
        <loader v-if="loading" class="loader-button-certification"></loader>
      </tab>
      <tab title="Видео" style="padding: 0" v-if="work_has_video">
        <div class="ss-dispute-warning-content">
          <div class="ss-sertificate-photos videos edited">
            <template v-if="(video.loading === false && video.error === false)">
              <media :class="[ 'ss-sertificate-photo', 'video' ]" v-if="video.data" :media="video.data" type="video"
                     :player="video.data.player">
                <i class="icon-remove" v-if="order_in_work" @click.stop.prevent="removeVideo()"></i>
                <img :src="video.data.cover_image" :alt="`Заказ #${order.id}`">
              </media>

              <label for="upload_video" :class="[ 'ss-sertificate-photo-upload', 'video', { 'loading': video.loading }]" v-if="!video.data && order_in_work">
                <input v-if="video.uploadReady" id="upload_video" class="input-uploaded-photo" type="file" @change="onFileChangeVideo"
                       :accept="acceptInputVideo">
                <span class="ss-sertificate-photo-upload--label">{{ dictDefaultMessageVideo }}</span>
              </label>
            </template>

            <template v-if="(video.loading === true)">
              <a href="javascript:void(0)" class="ss-sertificate-photo loading">
                <img :src="video.thumbnail" :alt="`Заказ #${order.id}`">
              </a>
            </template>

            <template v-if="(video.loading === false && video.error === true)">
              <tooltip class="ss-sertificate-photo-error" effect="scale" placement="bottom" content="Ошибка загрузки видео">
                <a href="javascript:void(0)" class="ss-sertificate-photo">
                  <i class="icon-remove"></i>
                  <img :src="video.thumbnail" :alt="`Заказ #${order.id}`">
                </a>
              </tooltip>
            </template>
          </div>
        </div>
        <a href="javascript:void(0)" v-if="!loading && order_in_work" :class="[{ disabled: !video.data }, 'lm-primary-button', 'full']"
           @click="stopWork()">
          отправить
        </a>
        <loader v-if="loading" class="loader-button-certification"></loader>
      </tab>
    </tabs>
  </div>
</template>

<script>
import { has } from '@utils'
import Dropzone from '@components/UI/Dropzone/Custom/Index.vue'
import CertifyingSpecialist from '@modules/CertifyingSpecialist'
import { PHOTO, VIDEO, MEASUREMENT } from '@modules/CertifyingSpecialist/Enums/Services'
import { WAIT_WORK, getArchivalCategory, FINALIZING } from '@modules/CertifyingSpecialist/Enums/OrderStatuses'

const BASE_URL = process.env.BASE_URL
const VIDEO_THUMBNAIL = '/dist/img/default_video.jpg'
const BASE_URL_UPLOAD = process.env.BASE_URL_UPLOAD

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
  components: { 'lm-dropzone': Dropzone },
  data () {
    return {
      WAIT_WORK,
      PHOTO,
      VIDEO,
      MEASUREMENT,
      active_tab: 0,
      loading: false,
      success: false,
      error: false,
      measurement: {
        fields: {
          'body-parameters': {
            'height': null,
            'volume-of-breast': null,
            'weight': null,
            'waist': null,
            'hips': null
          }
        },
        loading: false,
        errors: {}
      },
      photos: {
        data: [],
        loading: false,
        errors: [],
        uploadReady: true
      },
      video: {
        data: null,
        loading: false,
        error: false,
        thumbnail: VIDEO_THUMBNAIL,
        errors: [],
        uploadReady: true
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
    count_added_photos () {
      return this.photos.data.length
    },
    acceptInputPhoto () {
      if (!this.work_has_photo)
        return null

      return this.works[PHOTO]['extensions'].split(',').map(e => `.${e}`)
    },
    acceptInputVideo () {
      if (this.work_has_video) {
        return `.${this.works[VIDEO]['extensions'].split(',').join(', .')}`
      }
    },
    order_in_work () {
      if (!this.order) return false
      return [WAIT_WORK, FINALIZING].includes(this.order.status)
    },
    order_is_archived () {
      if (!this.order) return false
      return getArchivalCategory().includes(this.order.status)
    },
    dictDefaultMessage() {
      let pluralizeMinPhotos = this.$pluralize(this.works[PHOTO]['min'], ['фотография', 'фотографии', 'фотографий']);

      return `
                <span><i class="icon-upload"></i> Загрузить ${ pluralizeMinPhotos }</span>
                <span class="lm-dropzone--sub-label">${ this.works[PHOTO]['extensions'].toUpperCase() } разрешением не менее ${ this.works[PHOTO]['min_dpi'] }dpi</span>
            `;
    },
    dictDefaultMessageVideo () {
      return `${ this.works[VIDEO]['extensions'].toUpperCase() } продолжительность не менее ${ this.works[VIDEO]['duration'] }сек.`;
    },
  },
  created () {
    if (this.work_has_measurement && this.order['measurement']) {
      let {data} = this.order['measurement']
      for (let index in data['body-parameters']) {
        if (typeof (this.measurement.fields['body-parameters'][index]) === 'undefined') return
        this.measurement.fields['body-parameters'][index] = data['body-parameters'][index]
      }
    }

    if (this.work_has_photo && this.order['photos']) {
      let {data} = this.order['photos']
      this.photos['data'] = data
    }

    if (this.work_has_video && this.order['video']) {
      let {data} = this.order['video']
      this.video['data'] = data
    }
  },
  methods: {
    _handleInputTab (val) {
      this.active_tab = val
    },
    validateMeasurement () {
      this.$validator.validateAll('measurement').then(result => {
        if (result) {
          this.saveMeasurement()
        }
      })
    },
    updateUploadPhoto (items) {
      this.photos.data = items
      this.$emit('update', 'photos', items)
    },
    saveMeasurement () {
      this.measurement.loading = true

      let { fields } = this.measurement

      this.$api.post(`/api/v2/certifying-specialists/orders/${this.order.id}/measurements`, {measurement: fields}).then((response) => {
        this.measurement.loading = false

        this.active_tab = (this.work_has_photo) ? 1 : (this.work_has_video) ? 2 : 0
        let data = JSON.parse(JSON.stringify(this.measurement.fields))
        this.$emit('update', 'measurement', data)

      }, (error) => {
        this.measurement.loading = false

        const {response: {data}, response: {status}} = error
        if (status === 422 && data.errors) {
          this.measurement.errors = data.errors
        } else throw new Error(`Error attach measurements ${this.order.id}`)
      })
    },
    handleUploadPhoto (item, file, progress, success, error, remove) {
      let data = new FormData()
      data.append('file', file)

      this.$api.post(`/api/v2/certifying-specialists/orders/${this.order.id}/photos`, data, {
        baseURL: BASE_URL_UPLOAD,
        cancelToken: item.source.token,
        timeout: 120000,
        onUploadProgress (event) {
          progress(item.uid, event)
        }
      }).then((response) => {
        const {data: {data: {id, paths: {original}}}} = response

        success(item.uid, {id, path: original})
      }, (response) => {
        error(item.uid, response, 'file')
        console.error(`Error upload photo in order#${this.order.id}`)
      })
    },
    handleRemovePhoto (item, remove) {
      this.$confirm({
        title: 'Удаление фото',
        message: 'Вы действительно хотите удалить данное фото?'
      }).then((args) => {
        this.$api.delete(`/api/v2/certifying-specialists/orders/${this.order.id}/photos/${item.id}`).then((response) => {
          remove(item.uid)
        }, (response) => {
          remove(item.uid, false)
          console.error(`Error remove photos #${item.id} in order#${this.order.id}`)
        })
      }).catch((args) => {
        remove(item.uid, false)
      })
    },
    onFileChangeVideo (el) {
      let files = el.target.files || el.dataTransfer.files
      if (!files.length) { return }

      this.createImageOnVideo(files[0])
      this.uploadVideo(files[0])

      this.video.uploadReady = false
    },
    createImageOnVideo (file) {
      let reader = new FileReader()

      reader.onload = () => {
        let blob = new Blob([reader.result], {type: file.type})
        let url = URL.createObjectURL(blob)
        let video = document.createElement('video')

        let timeupdate = () => {
          if (snapImage()) {
            video.removeEventListener('timeupdate', timeupdate)
            video.pause()
          }
        }

        video.addEventListener('loadeddata', () => {
          if (snapImage()) {
            video.removeEventListener('timeupdate', timeupdate)
          }
        })

        let snapImage = () => {
          let canvas = document.createElement('canvas')

          canvas.width = video.videoWidth
          canvas.height = video.videoHeight
          canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height)

          let image = canvas.toDataURL()
          let success = image.length > 100000

          if (success) {
            this.video.thumbnail = image
            URL.revokeObjectURL(url)
          }
          return success
        }

        video.addEventListener('timeupdate', timeupdate);
        video.preload = 'metadata'
        video.src = url
        // Load video in Safari / IE11
        video.muted = true
        video.playsInline = true
        video.play();
      }
      reader.readAsArrayBuffer(file)
    },
    uploadVideo (file) {
      if (!file) return

      this.video.loading = true

      let data = new FormData()
      data.append('file', file)

      this.$api.post(`/api/v2/certifying-specialists/orders/${this.order.id}/videos`, data, { baseURL: BASE_URL_UPLOAD, timeout: 120000 }).then((response) => {
        let {data: {data}} = response

        this.$set(this.video, 'data', data)
        this.$emit('update', 'video', data)

        this.video.uploadReady = true
        this.video.loading = false
        this.video.error = false
        this.video.thumbnail = VIDEO_THUMBNAIL
      }, (response) => {
        this.video.error = true
        this.video.loading = false

        setTimeout(() => {
          this.video.data = null
          this.video.error = false
          this.video.loading = false
          this.video.uploadReady = true
          this.video.thumbnail = VIDEO_THUMBNAIL
        }, 3500)

        throw new Error(`Error upload photo in order#${this.order.id}`)
      })
    },
    removeVideo () {
      this.$confirm({
        title: 'Удаление видео',
        message: 'Вы действительно хотите удалить данное видео?'
      }).then((args) => {
        let video = JSON.parse(JSON.stringify(this.video.data))

        this.video.data = null
        this.$emit('update', 'video', null)

        this.$api.delete(`/api/v2/certifying-specialists/orders/${this.order.id}/videos`).then((response) => {
          console.log('Sucsess removed video')
        }, (response) => {
          this.video.data = video
          this.$emit('update', 'video', video)

          throw new Error(`Error remove video #${id} in order#${this.order.id}`)
        })
      }).catch(() => {})
    },
    preStopWork () {
      let order = this.order
      return new Promise((resolve, reject) => {
        this.worksKeys.forEach(work => {
          if (work === MEASUREMENT && !has(order, 'measurement.data')) {
            let error = { type: MEASUREMENT, tab: 0 }
            reject(error)
          } else if (work === PHOTO && !(has(order, 'photos.data') && order['photos']['data'].length >= this.works.photo.min)) {
            let error = { type: PHOTO, tab: (this.work_has_measurement) ?  1 : 0 }
            reject(error)
          } else if (work === VIDEO && !(has(order, 'video.data') && order['video']['data'])) {
            let error = { type: VIDEO, tab: (this.work_has_measurement && this.work_has_photo) ? 2 : (this.work_has_measurement && !this.work_has_photo) ? 1 : 0 }
            reject(error)
          }
        })

        resolve(true)
      })
    },
    stopWork () {
      this.preStopWork().then((result) => {
        this.loading = true

        this.$api.post(`/api/v2/certifying-specialists/orders/${this.order.id}/status/stop_work`).then((response) => {
          this.loading = false
          this.success = true
          this.error = false
          this.$emit('stop')
        }, (response) => {
          this.loading = false
          this.success = false
          this.error = true

          throw new Error(`Error stop work order#${this.order.id}`)
        })
      }).catch(({type, tab}) => {
        if (this.worksKeys.includes(type)) {
          this.active_tab = tab
        } else throw new Error(`Error validate works order#${this.order.id}`)
      })
    }
  }
}
</script>

<style lang="sass">
  .loader-button-certification
    height: 64px
    display: flex
    align-items: center
    justify-content: center
    background: #fff
    .input-uploaded-photo
      position: absolute
      opacity: 0
      top: 0
      left: 0
      right: 0
      bottom: 0
      width: 100%
      height: 100%
      cursor: pointer
    .loader-video-spinner
      height: 103px
      display: flex
      align-items: center
      justify-content: center
      text-align: center
      width: 100%
  .ss-dispute-warning-content
    .lm-dropzone
      &:before
        border-radius: 2px
      &--item--wrap
        width: 135px
        height: 90px
        border-radius: 2px
        a
          z-index: 3
          position: relative
      .number-ss-sertificate-photo
        min-width: 16px
        min-height: 16px
        border-radius: 16px
        background-color: #f3f4f6
        font-size: 8px
        font-weight: 600
        font-style: normal
        font-stretch: normal
        line-height: 16px
        letter-spacing: 1px
        color: #282a36
        text-align: center
        display: inline-block
        bottom: 8px
        right: 8px
        width: auto
        position: absolute
        z-index: 3
  .ss-sertificate-photo-error
    width: 100% !important
    height: 250px !important
  .ss-sertificate-photos.videos
    .ss-sertificate-photo-upload.video
      background-size: 27px
      width: 100%
      height: 250px
    .ss-sertificate-photo
      &.loading
        &:before
          width: 100% !important
          height: 100% !important
          background-size: 80px
      width: 100%
      height: 250px
      i.icon-remove
        width: 36px
        background-size: contain
        height: 36px
      &:after
        width: 28.125px !important
        height: 25.875px !important
        background-size: contain !important
        background-repeat: no-repeat
        background-color: transparent !important
      &:before
        width: 72px !important
        height: 72px !important
  .tooltip
    &.ss-sertificate-photo-error
      width: 200px !important
      .tooltip-inner
        display: flex
        align-items: center
        width: 200px !important
        justify-content: center
        align-content: center
        *
          color: #fff
          display: block
          text-align: center
          width: 200px !important
</style>
