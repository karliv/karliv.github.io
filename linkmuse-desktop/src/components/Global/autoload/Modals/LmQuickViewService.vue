<template>
  <modal class="modal-center modal-locations modal_verification modal_verification-quick-view" v-model="modal.value" @hide="_handleCloseModal()" :header="false" :footer="false">
    <a @click="_handleCloseModal" href="javascript:void(0)" class="close-modal"></a>
    <template>
      <!-- modal card -->
      <div class="card modal__card modal__card_verification">

        <!-- modal gallery -->
        <div class="modal__gallery">

          <template v-if="show_photos || video">
            <template v-if="(show_photos && !video)">
              <template v-if="count_more_photos">
                <div class="column">
                  <div class="column" v-for="photo in photos.slice(0, 1)" :key="`photo_${photo.id}`">
                    <media :media="photo" :album="'vc-demo'" type="photo" :src="photo.path" class="modal__link modal__link_verification">
                      <img class="modal__img modal__img_verification modal__img_verification_big" v-media="{ item: photo, key: 'path_273_resize', fallback: photo.path }" :src="photo.path_273_resize">
                    </media>
                  </div>
                </div>
                <div class="column">
                  <div class="row">
                    <media v-for="(photo, key) in photos.slice(1, 3)" :album="'vc-demo'" :key="`photo_${photo.id}`" :media="photo" type="photo" :src="photo.path" class="modal__link modal__link_verification">
                      <img class="modal__img modal__img_verification modal__img_verification_small" v-media="{ item: photo, key: 'path_273_resize', fallback: photo.path }" :src="photo.path_273_resize">
                    </media>
                  </div>
                  <div class="row">
                    <media v-for="(photo, key) in photos.slice(3, 5)" :album="'vc-demo'" :key="`photo_${photo.id}`" :media="photo" type="photo" :src="photo.path" class="modal__link modal__link_verification">
                      <template v-if="key === 1 && photos.length > 5">
                        <span class="count-more-photos">+{{ photos.length - 5 }}</span>
                      </template>
                      <img class="modal__img modal__img_verification modal__img_verification_small" v-media="{ item: photo, key: 'path_273_resize', fallback: photo.path }" :src="photo.path_273_resize">
                    </media>
                  </div>
                </div>
                <div v-show="false" v-if="photos.length > 5">
                  <div class="column" v-for="photo in photos.slice(5)" :key="`photo_${photo.id}`">
                    <media :media="photo" :album="'vc-demo'" type="photo" :src="photo.path" class="modal__link modal__link_verification">
                      <img class="modal__img modal__img_verification modal__img_verification_big" v-media="{ item: photo, key: 'path_273_resize', fallback: photo.path }" :src="photo.path_273_resize">
                    </media>
                  </div>
                </div>
              </template>
              <template v-else>
                <div class="column" v-for="photo in show_photos" :key="`photo_${photo.id}`">
                  <media :media="photo" type="photo" :src="photo.path" :album="'vc-demo'" class="modal__link modal__link_verification">
                    <img class="modal__img modal__img_verification modal__img_verification_big" v-media="{ item: photo, key: 'path_273_resize', fallback: photo.path }" :src="photo.path_273_resize">
                  </media>
                </div>
              </template>
            </template>

            <template v-if="(!show_photos && video)">
              <div class="column">
                <media :media="video" :album="'vc-demo'" class="video modal__link modal__link_verification modal__link_verification_video" type="video" :player="video.player">
                  <img :src="video['cover_image_orig']" class="modal__img modal__img_verification modal__img_verification_big">
                  <i></i>
                </media>
              </div>
            </template>

            <template v-if="show_photos && video">
              <div class="column">
                <div class="column" v-for="photo in show_photos.slice(0, 1)" :key="`photo_${photo.id}`">
                  <media :media="photo" :album="'vc-demo'" type="photo" :src="photo.path" class="modal__link modal__link_verification">
                    <img class="modal__img modal__img_verification modal__img_verification_big" v-media="{ item: photo, key: 'path_273_resize', fallback: photo.path }" :src="photo.path_273_resize">
                  </media>
                </div>
              </div>
              <div class="column">
                <div class="row">
                  <media :media="video" :album="'vc-demo'" class="video modal__link modal__link_verification modal__link_verification_video" type="video" :player="video.player">
                    <img :src="video['cover_image_orig']" class="modal__img modal__img_verification modal__img_verification_video">
                    <i></i>
                  </media>
                </div>
                <div class="row">
                  <media v-for="(photo, key) in show_photos.slice(1, 3)" :album="'vc-demo'" :key="`photo_${photo.id}`" :media="photo" type="photo" :src="photo.path" class="modal__link modal__link_verification">
                    <template v-if="key === 1 && count_more_photos">
                      <span class="count-more-photos">+{{ count_more_photos }}</span>
                    </template>
                    <img class="modal__img modal__img_verification modal__img_verification_small" v-media="{ item: photo, key: 'path_273_resize', fallback: photo.path }" :src="photo.path_273_resize">
                  </media>
                </div>
              </div>
              <div v-show="false" v-if="count_more_photos">
                <div class="column" v-for="photo in photos.slice(3)" :key="`photo_${photo.id}`">
                  <media :media="photo" :album="'vc-demo'" type="photo" :src="photo.path" class="modal__link modal__link_verification">
                    <img class="modal__img modal__img_verification modal__img_verification_big" v-media="{ item: photo, key: 'path_273_resize', fallback: photo.path }" :src="photo.path_273_resize">
                  </media>
                </div>
              </div>
            </template>
          </template>
        </div>

        <!-- modal parameters -->
        <div v-if="hasMeasurement" class="characteristics modal__characteristic modal__characteristic_verification">
          <div class="characteristics__item characteristics__item_verification">
            <div class="characteristics__block characteristics__block_parameter">
              <svg class="characteristics__icon characteristics__icon_parameter_growth">
                <use xlink:href="/dist/img/icons/modal_verification/sprite.svg#characteristics__icon_parameter_height" />
              </svg>
              <span class="characteristics__parameter characteristics__parameter_growth">Рост</span>
            </div>
            <div class="characteristics__block characteristics__block__value">
              <span class="characteristics__value characteristics__value_growth">195</span>
              <span class="characteristics__unit characteristics__unit_cm">см</span>
            </div>
          </div>

          <div class="characteristics__item characteristics__item_verification">
            <div class="characteristics__block characteristics__block_parameter">
              <svg class="characteristics__icon characteristics__icon_parameter_weight">
                <use xlink:href="/dist/img/icons/modal_verification/sprite.svg#characteristics__icon_parameter_weight" />
              </svg>
              <span class="characteristics__parameter characteristics__parameter_weight">Вес</span>
            </div>
            <div class="characteristics__block characteristics__block__value">
              <span class="characteristics__value characteristics__value_weight">70</span>
              <span class="characteristics__unit characteristics__unit_kg">кг</span>
            </div>
          </div>

          <div class="characteristics__item characteristics__item_verification">
            <div class="characteristics__block characteristics__block_parameter">
              <svg class="characteristics__icon characteristics__icon_parameter_chest">
                <use xlink:href="/dist/img/icons/modal_verification/sprite.svg#characteristics__icon_parameter_chest" />
              </svg>
              <span class="characteristics__parameter characteristics__parameter_chest">Грудь</span>
            </div>
            <div class="characteristics__block characteristics__block__value">
              <span class="characteristics__value characteristics__value_chest">80</span>
              <span class="characteristics__unit characteristics__unit_cm">см</span>
            </div>
          </div>

          <div class="characteristics__item characteristics__item_verification">
            <div class="characteristics__block characteristics__block_parameter">
              <svg class="characteristics__icon characteristics__icon_parameter_waist">
                <use xlink:href="/dist/img/icons/modal_verification/sprite.svg#characteristics__icon_parameter_waist" />
              </svg>
              <span class="characteristics__parameter characteristics__parameter_waist">Талия</span>
            </div>
            <div class="characteristics__block characteristics__block__value">
              <span class="characteristics__value characteristics__value_waist">58</span>
              <span class="characteristics__unit characteristics__unit_cm">см</span>
            </div>
          </div>

          <div class="characteristics__item characteristics__item_verification">
            <div class="characteristics__block characteristics__block_parameter">
              <svg class="characteristics__icon characteristics__icon_parameter_hips">
                <use xlink:href="/dist/img/icons/modal_verification/sprite.svg#characteristics__icon_parameter_hips" />
              </svg>
              <span class="characteristics__parameter characteristics__parameter_hips">Бедра</span>
            </div>
            <div class="characteristics__block characteristics__block__value">
              <span class="characteristics__value characteristics__value_hips">69</span>
              <span class="characteristics__unit characteristics__unit_cm">см</span>
            </div>
          </div>
        </div>

      </div>
    </template>
  </modal>
</template>

<script>
  import { has } from '@utils'

  export default {
    data () {
      return {
        modal: {
          value: false,
          attachments: [],
          works: {}
        }
      }
    },
    mounted () {
      this.$root.$on('open-modal-quick-view-service', ({ attachments, works }) => {
        let value = true
        this.modal = { attachments, works, value }
      })
    },
    computed: {
      hasMeasurement () {
        return has(this.modal.works, 'measurement')
      },
      show_photos () {
        return this.photos && this.photos.length ? this.photos.slice(0, 3) : null
      },
      photos () {
        if (!this.modal.attachments.length) return

        let items = []

        this.modal.attachments.forEach(item => {
          if (!item.is_image) return

          item = {
            ...item,
            album_id: -2,
            album_name: "Верификация",
            album_url: "",
            likes: 0,
            liked: false,
            comments: 0,
            path: item.paths['path'],
            path_170: item.paths['path_170'],
            path_106: item.paths['path_106'],
            path_106_133: item.paths['path_106_133'],
            path_260: item.paths['path_260'],
            path_blur: item.paths['path_blur'],
            path_273_resize: item.paths['path_273_resize'],
            description: null,
            created_at: this.$moment.utc(item.created_at).format('YYYY-MM-DD HH:mm:ss'),
            href: '',
            hash: null,
            type: "photo",
            size: { "width": item.width, "height": item.height },
            control: false
          };

          items.push(item)
        })

        return items;
      },
      video () {
        if (!this.modal.attachments.length) return

        let video = this.modal.attachments.find(item => item.is_video)

        if (!video) return

        video = {
          ...video,
          video_id: video.id,
          album_id: -2,
          album_name: "Верификацмия",
          album_url: "",
          likes: {"count": 0, "liked": false},
          comments: 0,
          url: null,
          description: null,
          created_at: this.$moment.utc(video.created_at).format('YYYY-MM-DD HH:mm:ss'),
          title: "Верификация",
          href: null,
          hash: null,
          type: "video",
          control: false
        };

        return video;
      },
      count_more_photos () {
        return this.photos && this.photos.length > 3 ? this.photos.length - 3 : null
      }
    },
    methods: {
      _handleCloseModal () {
        this.modal = {
          value: false,
          attachments: [],
          works: {}
        }
      }
    }
  }
</script>

<style lang="scss">
  // mixins
  @mixin characteristics__unit() {
    font-size: 12px;
    letter-spacing: 0.5px;
    font-weight: 600;
    font-style: normal;
    font-stretch: normal;
    line-height: 2.1;
    color: #282a36;
    margin-left: 8px;
  }

  // common styles of modal block
  .modal_verification {
    font-family: 'SF_Display' sans-serif !important;

    .modal-dialog {
      width: 100%;
      max-width: 832px;

      .modal-content {
        padding: 8px;
        border-radius: 20px;
      }
    }
  }

  .modal__card_verification {
    border-radius: 16px;
    overflow: hidden;
  }

  // gallery block
  .modal__gallery {
    width: 100%;
    height: 480px;
    min-height: 480px;
    border-radius: 16px 16px 0 0;
    overflow: hidden;
    box-sizing: border-box;

    display: flex;

    .column {
      flex: 1;
      width: 100%;
      align-items: center;
      margin-right: 8px;

      &:last-child {
        margin-right: 0;
      }

      &:only-child {
        margin-right: 0;
      }
    }

    .row {
      flex: 1;
      width: 100%;
      overflow: hidden;
      margin-bottom: 8px;

      &:last-child {
        margin-bottom: 0;
      }

      &:only-child {
        margin-bottom: 0;
      }

      .modal__link_verification {
        margin-right: 8px;

        &:last-child {
          margin-right: 0;
        }

        &:only-child {
          margin-right: 0;
        }
      }
    }
  }


  .modal_verification-quick-view {
    .row {
      display: flex;
    }

    .column {
      display: flex;
      flex-direction: column;
    }
  }

  .modal__link_verification {
    display: block;
    position: relative;
    width: 100%;
    height: 100%;
  }

  .modal__link_verification_video {
    position: relative;

    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    i {
      &::after {
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        margin: auto;
        -webkit-background-size: 52px 52px;
        background-size: 52px;
        background-repeat: no-repeat;
        background-position: 50%;
        z-index: 1;
        display: block;
        width: 44px;
        height: 44px;
        -webkit-border-radius: 16px;
        border-radius: 16px;
        background-color: rgba(40,42,54,.32);
        background-image: none;
      }
      &::before {
        position: absolute;
        z-index: 1;
        display: block;
        content: "";
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        margin: auto;
        width: 14px;
        height: 16px;
        background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16"><path fill="%23FFFFFF" fill-rule="evenodd" d="M15.106 6.419c1.192.706 1.192 2.456 0 3.162L4.711 15.748C3.509 16.46 2 15.58 2 14.165V1.834C2 .42 3.51-.46 4.71.253l10.396 6.166z" clip-rule="evenodd"/></svg>');
        -webkit-background-size: contain;
        background-size: contain;
        background-repeat: no-repeat;
        background-position: 50%;
        background-color: transparent;
        opacity: 1;
      }
    }
  }

  .link__decorartion_circle {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 16px;
    overflow: hidden;

    width: 44px;
    height: 44px;
    border-radius: 16px;
    position: relative;

    &::before {
      content: '';
      display: block;
      width: 200%;
      height: 200%;

      position: absolute;
      z-index: 2;
      top: -1em;
      left: -1em;
      background-color: rgba(75, 75, 75, .80);
      filter: blur(12px);
    }
  }

  .link__decorartion_triangle {
    position: relative;
    z-index: 3;
    top: -2.5px;
    left: -3px;
    background-color: #ffffff;
    text-align: left;

    width:  9px;
    height: 9px;
    border-top-right-radius: 36%;

    transform: rotate(-90deg) skewX(-30deg) scale(1,.866);

    &::before, &::after {
      content: '';
      position: absolute;
      background-color: inherit;

      width:  9px;
      height: 9px;
      border-top-right-radius: 36%;
    }

    &::before {
      transform: rotate(-135deg) skewX(-45deg) scale(1.414,.707) translate(0,-50%);
    }

    &::after {
      transform: rotate(135deg) skewY(-45deg) scale(.707,1.414) translate(50%);
    }
  }

  .modal__img {
    display: block;
    width: 100%;
  }

  .modal__img_verification {
    border-radius: 2px;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }


  // characteristic block
  .modal__characteristic {
    display: flex;
    width: 100%;
    justify-content: stretch;
  }

  .modal__characteristic_verification {
    margin-top: 8px;
    border-radius: 0 0 15px 15px;
    overflow: hidden;
  }

  .characteristics__item_verification {
    flex: 1;
    margin: 0 4px;
    padding: 18px 16px;

    display: flex;
    flex-direction: column;
    align-items: flex-start;

    border: 1px solid #cbd0d8;
    border-radius: 2px;
    font-size: 12px;
    font-weight: 600;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    text-transform: uppercase;

    &:first-child {
      border-bottom-left-radius: 15px;
      margin-left: 0;
    }

    &:last-child {
      border-bottom-right-radius: 15px;
      margin-right: 0;
    }
  }

  .characteristics__block {
    display: flex;
    font-family: 'SF_Display', 'Roboto', sans-serif;
  }

  .characteristics__block_parameter {
    align-items: center;
  }

  .characteristics__icon {
    display: inline-block;
    width: 12px;
    height: 12px;
    fill: #808792;
  }

  .characteristics__parameter {
    font-size: 12px;
    font-weight: 600;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: 1px;
    color: #808792;
    margin-left: 8px;
  }


  .characteristics__block__value {
    display: flex;
    align-items: flex-end;
  }

  .characteristics__value {
    font-size: 28px;
    font-weight: bold;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    color: #282a36;
    letter-spacing: 0.5px;
    margin-top: 4px;
  }

  .characteristics__unit {
    @include characteristics__unit();
  }
</style>
