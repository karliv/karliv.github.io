<template>
  <div>
    <div class="lm-m-cs-certification-page lm-m-fullh-page">
      <div class="lm-m-cs-certification-page--wrap">
        <h3 class="title">Верификация пройдена</h3>
        <div class="desc">
          Данные будут сохранены на вашей странице. Следующую верификацию рекомендуется провести через полгода
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
        <div class="lm-m-cs-certification-params">
          <span class="title">Параметры:</span>
          <div class="lm-m-cs-certification-params--wrap">
            <div class="item height">
              <span>Рост</span>
              <b>190 <font>см</font></b>
            </div>
            <div class="item weight">
              <span>Вес</span>
              <b>70 <font>кг</font></b>
            </div>
          </div>
          <div class="lm-m-cs-certification-params--wrap">
            <div class="item chest">
              <span>Грудь</span>
              <b>90 <font>см</font></b>
            </div>
            <div class="item waist">
              <span>Талия</span>
              <b>70 <font>см</font></b>
            </div>
            <div class="item byrd">
              <span>Бедра</span>
              <b>94 <font>см</font></b>
            </div>
          </div>
        </div>
        <div class="separator"></div>
      </div>

      <div v-if="slides.length > 0" :class="['lm-m-cs-certification-attachments', { null: (slides.length === 0) }]">
        <div class="lm-m-cs-certification-page--wrap">
          <span class="title">Файлы:</span>
        </div>
        <div class="lm-m-cs-certification-attachments--wrap">
          <div v-for="(slide, index) in slides" class="lm-m-cs-certification-attachments--item">
            <media :media="slide.data || slide" :type="(has(slide, 'type') ? slide.type : 'photo')"
                   :src="(has(slide, 'data') ? slide.thumbnail || null : slide.path)"
                   :player="(has(slide, 'data') ? slide.data.player || null : null)"
                   :album="`response_${user.data.user_id}`">
              <img :src="(has(slide, 'data') ? slide.thumbnail || slide.data.cover_original : slide.path)" alt="">
              <i v-if="(has(slide, 'type') && slide.type === 'video')" class="lm-play-button"></i>
              <span class="num">{{index+1}}</span>
            </media>
          </div>
        </div>
        <div class="lm-m-cs-certification-page--wrap">
          <a class="lm-m-cs-certification-attachments--archive" target="_blank">
            <i class="lm-icon-square-download"></i>
            <span>скачать архивом</span>
          </a>
        </div>
      </div>
      <div class="lm-action-buttons lm-bottom-actions-buttons">
        <a href="javascript:void(0)" class="lm-link-button">назад</a>
        <button class="lm-primary-button middle">Готово</button>
      </div>
    </div>
  </div>
</template>
<script>

  import { has } from '@utils'

  export default {
    metaInfo: {
      title: 'Верификация'
    },
    computed: {},
    data () {
      return {
        has,
        //makeup data
        user: {
          data: {
            user_id: 1
          }
        },
        fields: {
          rating: null,
          body: null,
          disabled: false
        },
        portfolio: {
          'type': 'portfolio',
          'id': '5c495a462a848c07f27b9da4',
          'template': 0,
          'publish': true,
          'publication_at': '2019-01-24T09:47:26+03:00',
          'counters': { 'likes': 0, 'comments': 0 },
          'liked': false,
          'cells': {
            'data': [{
              'position': 0,
              'type': 'photo',
              'points': {
                'left': 31.401,
                'top': 121.363,
                'width': 275.191,
                'height': 366.921,
                'naturalWidth': 960,
                'naturalHeight': 1280
              },
              'size': { 'width': 370, 'height': 496 },
              'thumbnail': 'https://linkmuse.s3.eu-central-1.amazonaws.com/upload/images/portfolio/9m/UO/9mUOuRbq3laNjgvnV7N7.jpg',
              'data': {
                'type': 'photo',
                'id': 182890,
                'user_id': 25652,
                'album_id': 0,
                'path': 'https://i.linkmuse.com/upload/images/album/zl/YK/zlYKGuORs0rNkzeL8So7-1280x_.jpg',
                'path_106': 'https://i.linkmuse.com/upload/images/album/zl/YK/zlYKGuORs0rNkzeL8So7-106x133.jpg',
                'path_106_133': 'https://i.linkmuse.com/upload/images/album/zl/YK/zlYKGuORs0rNkzeL8So7-106x133.jpg',
                'path_170': 'https://i.linkmuse.com/upload/images/album/zl/YK/zlYKGuORs0rNkzeL8So7-170x132.jpg',
                'path_260': 'https://i.linkmuse.com/upload/images/album/zl/YK/zlYKGuORs0rNkzeL8So7-260x181.jpg',
                'path_273_resize': 'https://i.linkmuse.com/upload/images/album/zl/YK/zlYKGuORs0rNkzeL8So7-273x_.jpg',
                'path_blur': 'https://i.linkmuse.com/upload/images/album/zl/YK/zlYKGuORs0rNkzeL8So7-20x20.jpg',
                'created_at': '2019-01-24T09:29:14+03:00',
                'href': 'https://api.linkmuse.com/id25652/photo-albums/0/photos/182890',
                'size': { 'width': 960, 'height': 1280 },
                'counters': { 'likes': 0, 'comments': 0 },
                'liked': false
              }
            }, {
              'position': 1,
              'type': 'video',
              'data': {
                'type': 'video',
                'id': 8546,
                'user_id': 25652,
                'album_id': 0,
                'title': 'Без названия',
                'url': 'https://vimeo.com/313109112',
                'duration': '00:00:15',
                'player': '<iframe  width="790" height="400"  src="https://player.vimeo.com/video/313109112" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>',
                'cover_260': 'https://i.linkmuse.com/upload/images/video/31/31/313109112-260x180.jpg',
                'cover_393': 'https://i.linkmuse.com/upload/images/video/31/31/313109112-393x203.jpg',
                'cover_blur': 'https://i.linkmuse.com/upload/images/video/31/31/313109112-20x20.jpg',
                'cover_original': 'https://linkmuse.s3.eu-central-1.amazonaws.com/upload/images/video/31/31/313109112.jpg',
                'created_at': '2019-01-24T09:47:22+03:00',
                'href': 'https://api.linkmuse.com/id25652/video-albums/0/videos/8546',
                'counters': { 'likes': 0, 'comments': 0 },
                'liked': false
              }
            }, {
              'position': 2,
              'type': 'photo',
              'points': {
                'left': 0,
                'top': 63.5,
                'width': 375,
                'height': 500,
                'naturalWidth': 3024,
                'naturalHeight': 4032
              },
              'size': { 'width': 205, 'height': 252 },
              'thumbnail': 'https://linkmuse.s3.eu-central-1.amazonaws.com/upload/images/portfolio/AS/nS/ASnSCZuSQYxufK6EB8De.jpg',
              'data': {
                'type': 'photo',
                'id': 182898,
                'user_id': 25652,
                'album_id': 0,
                'path': 'https://i.linkmuse.com/upload/images/album/GG/kV/GGkVMsAaiAsEuPKJpvFT-2560x_.jpg',
                'path_106': 'https://i.linkmuse.com/upload/images/album/GG/kV/GGkVMsAaiAsEuPKJpvFT-106x133.jpg',
                'path_106_133': 'https://i.linkmuse.com/upload/images/album/GG/kV/GGkVMsAaiAsEuPKJpvFT-106x133.jpg',
                'path_170': 'https://i.linkmuse.com/upload/images/album/GG/kV/GGkVMsAaiAsEuPKJpvFT-170x132.jpg',
                'path_260': 'https://i.linkmuse.com/upload/images/album/GG/kV/GGkVMsAaiAsEuPKJpvFT-260x181.jpg',
                'path_273_resize': 'https://i.linkmuse.com/upload/images/album/GG/kV/GGkVMsAaiAsEuPKJpvFT-273x_.jpg',
                'path_blur': 'https://i.linkmuse.com/upload/images/album/GG/kV/GGkVMsAaiAsEuPKJpvFT-20x20.jpg',
                'created_at': '2019-01-24T09:34:02+03:00',
                'href': 'https://api.linkmuse.com/id25652/photo-albums/0/photos/182898',
                'size': { 'width': 4032, 'height': 3024 },
                'counters': { 'likes': 0, 'comments': 0 },
                'liked': false
              }
            }, {
              'position': 0,
              'type': 'photo',
              'points': {
                'left': 31.401,
                'top': 121.363,
                'width': 275.191,
                'height': 366.921,
                'naturalWidth': 960,
                'naturalHeight': 1280
              },
              'size': { 'width': 370, 'height': 496 },
              'thumbnail': 'https://linkmuse.s3.eu-central-1.amazonaws.com/upload/images/portfolio/9m/UO/9mUOuRbq3laNjgvnV7N7.jpg',
              'data': {
                'type': 'photo',
                'id': 182890,
                'user_id': 25652,
                'album_id': 0,
                'path': 'https://i.linkmuse.com/upload/images/album/zl/YK/zlYKGuORs0rNkzeL8So7-1280x_.jpg',
                'path_106': 'https://i.linkmuse.com/upload/images/album/zl/YK/zlYKGuORs0rNkzeL8So7-106x133.jpg',
                'path_106_133': 'https://i.linkmuse.com/upload/images/album/zl/YK/zlYKGuORs0rNkzeL8So7-106x133.jpg',
                'path_170': 'https://i.linkmuse.com/upload/images/album/zl/YK/zlYKGuORs0rNkzeL8So7-170x132.jpg',
                'path_260': 'https://i.linkmuse.com/upload/images/album/zl/YK/zlYKGuORs0rNkzeL8So7-260x181.jpg',
                'path_273_resize': 'https://i.linkmuse.com/upload/images/album/zl/YK/zlYKGuORs0rNkzeL8So7-273x_.jpg',
                'path_blur': 'https://i.linkmuse.com/upload/images/album/zl/YK/zlYKGuORs0rNkzeL8So7-20x20.jpg',
                'created_at': '2019-01-24T09:29:14+03:00',
                'href': 'https://api.linkmuse.com/id25652/photo-albums/0/photos/182890',
                'size': { 'width': 960, 'height': 1280 },
                'counters': { 'likes': 0, 'comments': 0 },
                'liked': false
              }
            }, {
              'position': 1,
              'type': 'video',
              'data': {
                'type': 'video',
                'id': 8546,
                'user_id': 25652,
                'album_id': 0,
                'title': 'Без названия',
                'url': 'https://vimeo.com/313109112',
                'duration': '00:00:15',
                'player': '<iframe  width="790" height="400"  src="https://player.vimeo.com/video/313109112" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>',
                'cover_260': 'https://i.linkmuse.com/upload/images/video/31/31/313109112-260x180.jpg',
                'cover_393': 'https://i.linkmuse.com/upload/images/video/31/31/313109112-393x203.jpg',
                'cover_blur': 'https://i.linkmuse.com/upload/images/video/31/31/313109112-20x20.jpg',
                'cover_original': 'https://linkmuse.s3.eu-central-1.amazonaws.com/upload/images/video/31/31/313109112.jpg',
                'created_at': '2019-01-24T09:47:22+03:00',
                'href': 'https://api.linkmuse.com/id25652/video-albums/0/videos/8546',
                'counters': { 'likes': 0, 'comments': 0 },
                'liked': false
              }
            }, {
              'position': 2,
              'type': 'photo',
              'points': {
                'left': 0,
                'top': 63.5,
                'width': 375,
                'height': 500,
                'naturalWidth': 3024,
                'naturalHeight': 4032
              },
              'size': { 'width': 205, 'height': 252 },
              'thumbnail': 'https://linkmuse.s3.eu-central-1.amazonaws.com/upload/images/portfolio/AS/nS/ASnSCZuSQYxufK6EB8De.jpg',
              'data': {
                'type': 'photo',
                'id': 182898,
                'user_id': 25652,
                'album_id': 0,
                'path': 'https://i.linkmuse.com/upload/images/album/GG/kV/GGkVMsAaiAsEuPKJpvFT-2560x_.jpg',
                'path_106': 'https://i.linkmuse.com/upload/images/album/GG/kV/GGkVMsAaiAsEuPKJpvFT-106x133.jpg',
                'path_106_133': 'https://i.linkmuse.com/upload/images/album/GG/kV/GGkVMsAaiAsEuPKJpvFT-106x133.jpg',
                'path_170': 'https://i.linkmuse.com/upload/images/album/GG/kV/GGkVMsAaiAsEuPKJpvFT-170x132.jpg',
                'path_260': 'https://i.linkmuse.com/upload/images/album/GG/kV/GGkVMsAaiAsEuPKJpvFT-260x181.jpg',
                'path_273_resize': 'https://i.linkmuse.com/upload/images/album/GG/kV/GGkVMsAaiAsEuPKJpvFT-273x_.jpg',
                'path_blur': 'https://i.linkmuse.com/upload/images/album/GG/kV/GGkVMsAaiAsEuPKJpvFT-20x20.jpg',
                'created_at': '2019-01-24T09:34:02+03:00',
                'href': 'https://api.linkmuse.com/id25652/photo-albums/0/photos/182898',
                'size': { 'width': 4032, 'height': 3024 },
                'counters': { 'likes': 0, 'comments': 0 },
                'liked': false
              }
            }, {
              'position': 3,
              'type': 'photo',
              'points': {
                'left': 87.034,
                'top': 128.217,
                'width': 227.929,
                'height': 303.905,
                'naturalWidth': 3024,
                'naturalHeight': 4032
              },
              'size': { 'width': 205, 'height': 252 },
              'thumbnail': 'https://linkmuse.s3.eu-central-1.amazonaws.com/upload/images/portfolio/pv/bw/pvbwZcTT2dyFcZAcRhGd.jpg',
              'data': {
                'type': 'photo',
                'id': 182900,
                'user_id': 25652,
                'album_id': 0,
                'path': 'https://i.linkmuse.com/upload/images/album/Si/nD/SinD99ToyGRRY9u3tLwY-2560x_.jpg',
                'path_106': 'https://i.linkmuse.com/upload/images/album/Si/nD/SinD99ToyGRRY9u3tLwY-106x133.jpg',
                'path_106_133': 'https://i.linkmuse.com/upload/images/album/Si/nD/SinD99ToyGRRY9u3tLwY-106x133.jpg',
                'path_170': 'https://i.linkmuse.com/upload/images/album/Si/nD/SinD99ToyGRRY9u3tLwY-170x132.jpg',
                'path_260': 'https://i.linkmuse.com/upload/images/album/Si/nD/SinD99ToyGRRY9u3tLwY-260x181.jpg',
                'path_273_resize': 'https://i.linkmuse.com/upload/images/album/Si/nD/SinD99ToyGRRY9u3tLwY-273x_.jpg',
                'path_blur': 'https://i.linkmuse.com/upload/images/album/Si/nD/SinD99ToyGRRY9u3tLwY-20x20.jpg',
                'created_at': '2019-01-24T09:34:50+03:00',
                'href': 'https://api.linkmuse.com/id25652/photo-albums/0/photos/182900',
                'size': { 'width': 3024, 'height': 4032 },
                'counters': { 'likes': 0, 'comments': 0 },
                'liked': false
              }
            }]
          }
        }
      }
    },
    computed: {
      slides () {
        return this.portfolio ? this.portfolio.cells.data.filter((item) => ['photo', 'video'].includes(item.type)) : []
      },
    },
    methods: {}
  }
</script>
