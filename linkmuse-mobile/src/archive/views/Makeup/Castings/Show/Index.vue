<template>
  <div>
    <div class="lm-m-casting--page" v-if="!modal">
      <div class="lm-m-black-head-nav">
        <div class="lm-m-black-head-nav-wrap">
          <div class="left">
            <router-link :to="{ name: 'castings.index' }">
              <i class="lm-back-icon"></i>
              <span>К списку</span>
            </router-link>
          </div>
          <div class="right"><i class="lm-more-icon"></i></div>
        </div>
      </div>
      <div class="lm-m-casting--page-content">
        <div class="lm-m-casting--page-content-wrap">
          <div class="lm-m-casting--list--item-top--type">
            <div class="lm-casting--status film"></div>
            <span>Короткометражный фильм</span>
          </div>
          <h1 class="lm-m-casting-page-title">Кастинг девушек блондинок для съёмок рекламы</h1>
          <div class="lm-m-casting-page-sex">
            <div class="lm-m-casting--list--item-top--sex lm-sex female"></div>
            <div class="lm-tags">
              <div class="lm-tag small">34-56 лет</div>
            </div>
          </div>
          <div class="lm-m-casting-page-date">
            <div class="left">
              <span>Дата кастинга</span>
            </div>
            <div class="right">
              <span>с 12 мая - 12 дек</span>
            </div>
          </div>
          <div class="lm-m-casting-page-date">
            <div class="left">
              <span>Дата работы</span>
            </div>
            <div class="right">
              <span>16 июля 2018 - 12 янв 2019</span>
            </div>
          </div>

          <div class="lm-m-casting-page-casting-info">
            <div class="left">
              <span class="type">Актер</span>
            </div>
            <div class="right">
              <div class="price">
                <b>3 400 ₽</b>
                <span class="desc">за проекта</span>
              </div>
            </div>
          </div>
          <div class="lm-m-casting--page-desc">
            <h2>Описание</h2>
            <div class="text">
              <p>Только по видео! Не присылайте фото! Тех, кто понравится - пригласим на коллбек Рекламный ролик Дата
                съемки: 19 мая (может измениться) Коллбек: 16 мая Примерка: 18 мая (время с 18:00) Права: интернет, 1
                месяц Гонорар: 10 000 -20%</p>
              <br><br>
              <p>Повар. Позитивный толстяк. Лет 25-35. Задача: рассказать какую- нибудь историю небольшую и позитивную.
                Нам нужно увидеть как он владеет мимикой, на сколько не принужденно и обаятельно. Отыграть как будто
                герой вытаскивает из аквариума что то большое и круглое и кидает это в сторону, типа мяча или колючей
                рыбы. Сделать несколько смешных вариантов. Не пережимать!</p>
            </div>
          </div>
          <div class="lm-m-casting--page-desc">
            <h2>Параметры</h2>
            <div class="lm-m-casting--page-params">
              <ul>
                <li>
                  <div class="left">
                    <span>Рост</span>
                  </div>
                  <div class="right">
                    <span>189</span>
                  </div>
                </li>
                <li>
                  <div class="left">
                    <span>Цвет глаз</span>
                  </div>
                  <div class="right">
                    <span>серый</span>
                  </div>
                </li>
                <li>
                  <div class="left">
                    <span>Вес</span>
                  </div>
                  <div class="right">
                    <span>54</span>
                  </div>
                </li>
                <li>
                  <div class="left">
                    <span>Цвет волос</span>
                  </div>
                  <div class="right">
                    <span>серый</span>
                  </div>
                </li>
                <li>
                  <div class="left">
                    <span>Размер обуви</span>
                  </div>
                  <div class="right">
                    <span>39</span>
                  </div>
                </li>
                <li>
                  <div class="left">
                    <span>Длина волос</span>
                  </div>
                  <div class="right">
                    <span>длинный</span>
                  </div>
                </li>
                <li>
                  <div class="left">
                    <span>Размер одежды</span>
                  </div>
                  <div class="right">
                    <span>34</span>
                  </div>
                </li>
                <li>
                  <div class="left">
                    <span>Татуировки</span>
                  </div>
                  <div class="right">
                    <span>есть</span>
                  </div>
                </li>
                <li>
                  <div class="left">
                    <span>Телосложение</span>
                  </div>
                  <div class="right">
                    <span>худой</span>
                  </div>
                </li>

              </ul>
            </div>
          </div>
          <div class="lm-m-casting--page-desc">
            <h2>Файлы</h2>
            <div class="lm-m-attach-files-wrap">
              <a href="javascript:void(0)" class="lm-m-attach-file-item photo" @click="openPhotoModal">
                <img src="https://linkmuse.s3.eu-central-1.amazonaws.com/upload/casting/briefs/7g/lE/7glE0e550Htj4vOYtz3L.jpg" alt="">
              </a>
              <a href="javascript:void(0)" class="lm-m-attach-file-item video">
                <img src="https://linkmuse.s3.eu-central-1.amazonaws.com/upload/casting/briefs/7g/lE/7glE0e550Htj4vOYtz3L.jpg" alt="">
                <i class="lm-play"></i>
              </a>
              <a href="javascript:void(0)" class="lm-m-attach-file-item">
                <img src="https://linkmuse.s3.eu-central-1.amazonaws.com/upload/casting/briefs/7g/lE/7glE0e550Htj4vOYtz3L.jpg" alt="">
                <i class="lm-play"></i>
              </a>
              <a href="javascript:void(0)" class="lm-m-attach-file-item">
                <img src="https://linkmuse.s3.eu-central-1.amazonaws.com/upload/casting/briefs/7g/lE/7glE0e550Htj4vOYtz3L.jpg" alt="">
                <i class="lm-play"></i>
              </a>
              <a href="javascript:void(0)" class="lm-m-attach-file-item video">
                <img src="https://linkmuse.s3.eu-central-1.amazonaws.com/upload/casting/briefs/7g/lE/7glE0e550Htj4vOYtz3L.jpg" alt="">
                <i class="lm-play"></i>
              </a>
            </div>
            <div class="lm-m-casting--page-files">
              <div class="lm-m-casting--page-files-item">
                <i class="lm-icon-square-download"></i>
                <span class="lm-m-dialog-body--item-name">БРИФ.jpg</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="lm-m-casting--page-content user">
        <div class="lm-m-casting--page-content-wrap">
          <div class="lm-user-block lm-m-casting-page-user">
            <img src="https://linkmuse.com/dist/img/no_image_user.png" class="lm-user-block-avatar">
            <div class="lm-user-block-info">
              <div class="lm-user-block-info-name"><span>Fashion production</span></div>
              <div class="lm-user-block-info-type">Дизайнер</div>
            </div>
          </div>
        </div>
      </div>
      <div class="lm-m-casting--page-content response-button">
        <div class="lm-m-casting--page-content-wrap">
          <a @click="modalResponse" href="javascript:void(0)" class="lm-primary-button">откликнуться</a>
        </div>
      </div>
    </div>
    <div class="lm-m-casting--page" v-if="modal">
      <div class="lm-m-black-head-nav">
        <div class="lm-m-black-head-nav-wrap">
          <div class="left">
            <router-link :to="{ name: 'castings.index' }">
              <i class="lm-back-icon"></i>
              <span>К списку</span>
            </router-link>
          </div>
        </div>
      </div>
      <div class="lm-m-casting--page-content response">
        <div class="lm-m-casting--page-content-wrap">
          <h1 class="lm-m-casting-page-title">Отклик на кастинг</h1>
          <div class="lm-m-casting-page-response-sub-title">
            Кастинг девушек блондинок для съёмок рекламы
          </div>
          <div class="lm-input-wrap">
            <label for="">Комментарии к отклику</label>
            <textarea placeholder="" class="lm-input"></textarea>
          </div>
          <div class="lm-m-attach-file-wrap">
            <input type="file" id="attach-file">
            <label for="attach-file">
              <i class="lm-attach-icon"></i>
              <span>ЗАГРУЗИТЬ ФАЙЛ</span>
            </label>
            <div class="lm-m-attach-file-item">
              <div class="left">
                <i class="lm-icon-square-download"></i>
                <span>бриф.pdf</span>
              </div>
              <div class="right">
                <i class="lm-close"></i>
              </div>
            </div>
            <div class="lm-m-attach-file-item">
              <div class="left">
                <i class="lm-close uploading">
                  <div class="lds-css ng-scope">
                    <div style="width:100%;height:100%" class="lds-rolling">
                      <div></div>
                    </div>
                  </div>
                </i>
                <span>файл загружается.pdf</span>
              </div>
              <div class="right">
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="lm-m-casting--page-content response-button">
        <div class="lm-m-casting--page-content-wrap">
          <a @click="modalResponse" href="javascript:void(0)" class="lm-primary-button">отправить отклик</a>
        </div>
      </div>
    </div>
    <div class="lm-m-modal" v-if="photo_modal">
      <div class="lm-m-modal-wrap">
        <div class="lm-m-modal-wrap-content">
          <img src="https://linkmuse.s3.eu-central-1.amazonaws.com/upload/casting/briefs/7g/lE/7glE0e550Htj4vOYtz3L.jpg" alt="">
        </div>
      </div>
    </div>
    <div class="lm-m-modal" v-if="video_modal">
      <div class="lm-m-modal-wrap">
        <div class="lm-m-modal-wrap-content video">
          <i class="lm-play-button big"></i>
          <img src="https://linkmuse.s3.eu-central-1.amazonaws.com/upload/casting/briefs/7g/lE/7glE0e550Htj4vOYtz3L.jpg" alt="">
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    metaInfo: {
      title: 'Кастинг'
    },
    data () {
      return {
        modal: false,
        photo_modal: false,
        video_modal: false
      }
    },
    computed: {},
    methods: {
      modalResponse () {
        this.modal = !this.modal
      },
      openPhotoModal () {
        this.photo_modal = !this.photo_modal
      },
      openVideoModal () {
        this.video_modal = !this.video_modal
      },
    }
  }
</script>
