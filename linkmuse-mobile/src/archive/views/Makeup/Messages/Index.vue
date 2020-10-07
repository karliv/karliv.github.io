<template>
  <div>
    <div class="lm-m-messages lm-m-page" v-if="step === 1">
      <div class="lm-m-messages-head lm-m-page--head">
        <div class="left">
        </div>
        <div class="center">
          <span>Сообщения</span>
        </div>
        <div class="right">
          <i class="lm-plus-icon" @click="toogleModal"></i>
        </div>
      </div>
      <div class="lm-m-messages--list null">
        <span class="lm-m-messages--null">У вас пока что нет актуальных диалогов</span>
      </div>
    </div>
    <div class="lm-m-messages lm-m-page" v-if="step === 2">
      <div class="lm-m-messages-head lm-m-page--head">
        <div class="left">
          <i @click="toogleSearch" :class="{'lm-icon-zoom': true, 'active': search}"></i>
        </div>
        <div class="center">
          <span v-if="!search">Сообщения</span>
          <input v-if="search" type="text" class="lm-input input-search" placeholder="Поиск">
        </div>
        <div class="right">
          <i class="lm-plus-icon" v-if="!search"></i>
          <i @click="toogleSearch" class="lm-close" v-if="search"></i>
        </div>
      </div>
      <div class="lm-m-messages--list null" v-if="search">
        <span class="lm-m-messages--null">Начните вводить текст</span>
      </div>
      <div class="lm-m-messages--list" v-if="!search">
        <div class="lm-m-messages--item">
          <div class="lm-user-block">
            <div class="lm-user-block-avatar-wrap">
              <img src="https://linkmuse.com/dist/img/no_image_user.png" class="lm-user-block-avatar">
              <div class="lm-user-block-avatar-status online"></div>
            </div>
            <div class="lm-user-block-info">
              <div class="lm-m-messages--item-name">
                <div class="lm-user-block-info-name"><span>Elnora Weber Elnora Weber Elnora Weber Elnora Weber Elnora Weber</span>
                </div>
                <div class="lm-m-messages--item-date">00:11</div>
              </div>
              <div class="lm-m-messages--item-text">
                <div class="lm-user-block-info-type">Сейчас запускаю социальную Сейчас запускаю социальную Сейчас
                  запускаю социальную...
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="lm-m-messages--item">
          <div class="lm-user-block">
            <div class="lm-user-block-avatar-wrap">
              <img src="https://linkmuse.com/dist/img/no_image_user.png" class="lm-user-block-avatar">
              <div class="lm-user-block-avatar-status offline"></div>
            </div>
            <div class="lm-user-block-info">
              <div class="lm-m-messages--item-name">
                <div class="lm-user-block-info-name"><span>Elnora Weber Elnora Weber Elnora Weber Elnora Weber Elnora Weber</span>
                </div>
                <div class="lm-m-messages--item-date">Вчера</div>
              </div>
              <div class="lm-m-messages--item-text">
                <div class="lm-user-block-info-type">Сейчас запускаю социальную Сейчас запускаю социальную Сейчас
                  запускаю социальную...
                </div>
                <div class="lm-m-messages--item-read">
                  <div class="no-read"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="lm-m-messages--item">
          <div class="lm-user-block">
            <div class="lm-user-block-avatar-wrap">
              <img src="https://linkmuse.com/dist/img/no_image_user.png" class="lm-user-block-avatar">
            </div>
            <div class="lm-user-block-info">
              <div class="lm-m-messages--item-name">
                <div class="lm-user-block-info-name"><span>Elnora Weber Elnora Weber Elnora Weber Elnora Weber Elnora Weber</span>
                </div>
                <div class="lm-m-messages--item-date">26 июня</div>
              </div>
              <div class="lm-m-messages--item-text">
                <div class="lm-user-block-info-type">Сейчас запускаю социальную Сейчас запускаю социальную Сейчас
                  запускаю социальную...
                </div>
                <div class="lm-m-messages--item-read">
                  <div class="no-read"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="lm-m-messages--item">
          <div class="lm-user-block">
            <div class="lm-user-block-avatar-wrap">
              <img src="https://linkmuse.com/dist/img/no_image_user.png" class="lm-user-block-avatar">
            </div>
            <div class="lm-user-block-info">
              <div class="lm-m-messages--item-name">
                <div class="lm-user-block-info-name"><span>Elnora Weber Elnora Weber Elnora Weber Elnora Weber Elnora Weber</span>
                </div>
                <div class="lm-m-messages--item-date">25 июня</div>
              </div>
              <div class="lm-m-messages--item-text">
                <div class="lm-user-block-info-type">Сейчас запускаю социальную Сейчас запускаю социальную Сейчас
                  запускаю социальную...
                </div>
                <div class="lm-m-messages--item-read">
                  <div class="no-read"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="lm-m-messages--item">
          <div class="lm-user-block">
            <div class="lm-user-block-avatar-wrap">
              <img src="https://linkmuse.com/dist/img/no_image_user.png" class="lm-user-block-avatar">
            </div>
            <div class="lm-user-block-info">
              <div class="lm-m-messages--item-name">
                <div class="lm-user-block-info-name"><span>Elnora Weber Elnora Weber Elnora Weber Elnora Weber Elnora Weber</span>
                </div>
                <div class="lm-m-messages--item-date">26 июня 2012</div>
              </div>
              <div class="lm-m-messages--item-text">
                <div class="lm-user-block-info-type">Сейчас запускаю социальную Сейчас запускаю социальную Сейчас
                  запускаю социальную...
                </div>
                <div class="lm-m-messages--item-read">
                  <div class="no-read"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="lm-m-messages--item">
          <div class="lm-user-block">
            <div class="lm-user-block-avatar-wrap">
              <img src="https://linkmuse.com/dist/img/no_image_user.png" class="lm-user-block-avatar">
            </div>
            <div class="lm-user-block-info">
              <div class="lm-m-messages--item-name">
                <div class="lm-user-block-info-name"><span>Elnora Weber Elnora Weber Elnora Weber Elnora Weber Elnora Weber</span>
                </div>
                <div class="lm-m-messages--item-date">23 июня 2012</div>
              </div>
              <div class="lm-m-messages--item-text">
                <div class="lm-user-block-info-type">Сейчас запускаю социальную Сейчас запускаю социальную Сейчас
                  запускаю социальную...
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="lm-m-messages lm-m-page" v-if="step === 3">
      <div class="lm-m-messages-head lm-m-page--head">
        <div class="left">
          <i @click="toogleSearch" :class="{'lm-icon-zoom': true, 'active': search}"></i>
        </div>
        <div class="center">
          <span v-if="!search">Сообщения</span>
          <input v-if="search" type="text" class="lm-input input-search" placeholder="Поиск">
        </div>
        <div class="right">
          <i class="lm-plus-icon" v-if="!search"></i>
          <i @click="toogleSearch" class="lm-close" v-if="search"></i>
        </div>
      </div>
      <div class="lm-m-messages--list" v-if="!search">
        <div class="lm-m-messages--item">
          <div class="lm-user-block">
            <div class="lm-user-block-avatar-wrap">
              <img src="https://linkmuse.com/dist/img/no_image_user.png" class="lm-user-block-avatar">
              <div class="lm-user-block-avatar-status online"></div>
            </div>
            <div class="lm-user-block-info">
              <div class="lm-m-messages--item-name">
                <div class="lm-user-block-info-name"><span>Elnora Weber Elnora Weber Elnora Weber Elnora Weber Elnora Weber</span>
                </div>
                <div class="lm-m-messages--item-date">00:11</div>
              </div>
              <div class="lm-m-messages--item-text">
                <div class="lm-user-block-info-type">Сейчас <font style="color: #fc2e5f ">запускаю</font> социальную Сейчас запускаю социальную Сейчас
                  запускаю социальную...
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="lm-m-messages lm-m-page" v-if="step === 4">
      <div class="lm-m-messages-head lm-m-page--head">
        <div class="left">
          <i @click="toogleSearch" :class="{'lm-icon-zoom': true, 'active': search}"></i>
        </div>
        <div class="center">
          <span v-if="!search">elnora weber</span>
          <input v-if="search" type="text" class="lm-input input-search" placeholder="Поиск">
        </div>
        <div class="right">
          <i class="lm-plus-icon" v-if="!search"></i>
          <i @click="toogleSearch" class="lm-close" v-if="search"></i>
        </div>
      </div>
      <div class="lm-m-messages--list" v-if="!search">
        <div class="lm-m-messages--item" @click="nextStep">
          <div class="lm-user-block">
            <div class="lm-user-block-avatar-wrap">
              <img src="https://linkmuse.com/dist/img/no_image_user.png" class="lm-user-block-avatar">
              <div class="lm-user-block-avatar-status online"></div>
            </div>
            <div class="lm-user-block-info">
              <div class="lm-m-messages--item-name">
                <div class="lm-user-block-info-name"><span>Elnora Weber Elnora Weber Elnora Weber Elnora Weber Elnora Weber</span>
                </div>
                <div class="lm-m-messages--item-date">00:11</div>
              </div>
              <div class="lm-m-messages--item-text">
                <div class="lm-user-block-info-type">Сейчас <font style="color: #fc2e5f ">запускаю</font> социальную Сейчас запускаю социальную Сейчас
                  запускаю социальную...
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="lm-m-messages lm-m-page" v-if="step === 5">
      <div class="lm-m-messages-head lm-m-page--head">
        <div class="left">
          <i class="lm-back-icon"></i>
        </div>
        <div class="center">
          <span v-if="!search">elnora weber</span>
          <input v-if="search" type="text" class="lm-input input-search" placeholder="Поиск">
          <div class="text-status">онлайн</div>
        </div>
        <div class="right">
          <i class="lm-more-icon"></i>
        </div>
      </div>
      <div class="lm-m-dialog-wrap">
        <div class="lm-m-dialog-body">
          <div class="lm-m-dialog-body--item date">
            <span>Вчера, 3 августа</span>
          </div>
          <div class="lm-m-dialog-body--item to">
            <div class="lm-m-dialog-body--item-wrap">
              <div class="text">Привет Привет Привет Привет Привет Привет Привет Привет Привет Привет Привет</div>
              <div class="date">13:39</div>
            </div>
          </div>
          <div class="lm-m-dialog-body--item to">
            <div class="lm-m-dialog-body--item-wrap">
              <div class="text">Сейчас запускаю социальную сеть для моделей ATR.ONE
                <a href="javascript:void(0)">https://atr.one</a> Хочешь сотрудничать?
              </div>
              <div class="date">13:39</div>
            </div>
          </div>
          <div class="lm-m-dialog-body--item from">
            <div class="lm-m-dialog-body--item-wrap">
              <div class="text">Сейчас запускаю социальную сеть для моделей ATR.ONE
                <a href="javascript:void(0)">https://atr.one</a> Хочешь сотрудничать?
              </div>
              <div class="date">13:39</div>
            </div>
          </div>
          <div class="lm-m-dialog-body--item to document">
            <div class="lm-m-dialog-body--item-wrap">
              <div class="text">Посмотри бриф!</div>
              <div class="lm-m-dialog-body--item-document">
                <i class="lm-icon-square-download"></i>
                <span class="lm-m-dialog-body--item-name">
                  Название
                </span>
              </div>
              <div class="date">13:39</div>
            </div>
          </div>
          <div class="lm-m-dialog-body--item to audio">
            <div class="lm-m-dialog-body--item-wrap">
              <div class="text">Посмотри бриф!</div>
              <div class="lm-m-dialog-body--item-audio">
                <i class="lm-play-icon"></i>
                <span class="lm-m-dialog-body--item-name"><b>Lil Xan – </b> Betrayed</span>
              </div>
              <div class="date">13:39</div>
            </div>
          </div>
          <div class="lm-m-dialog-body--item from audio">
            <div class="lm-m-dialog-body--item-wrap">
              <div class="text">Посмотри бриф!</div>
              <div class="lm-m-dialog-body--item-audio">
                <i class="lm-play-icon"></i>
                <span class="lm-m-dialog-body--item-name"><b>Lil Xan – </b> Betrayed</span>
              </div>
              <div class="date">13:39</div>
            </div>
          </div>
          <div class="lm-m-dialog-body--item from document">
            <div class="lm-m-dialog-body--item-wrap">
              <div class="text">Послушай</div>
              <div class="lm-m-dialog-body--item-document">
                <i class="lm-icon-square-download"></i>
                <span class="lm-m-dialog-body--item-name">БРИФ.jpg</span>
              </div>
              <div class="date">13:39</div>
            </div>
          </div>
          <div class="lm-m-dialog-body--item to image">
            <div class="lm-m-dialog-body--item-wrap">
              <img src="https://linkmuse.s3.eu-central-1.amazonaws.com/upload/images/background/dc/aC/dcaCAlpSKRlWi4YzoKoS-211x211.png" alt="">
              <div class="date">13:39</div>
            </div>
          </div>
          <div class="lm-m-dialog-body--item from image">
            <div class="lm-m-dialog-body--item-wrap">
              <div class="text">ok
              </div>
              <img src="https://linkmuse.s3.eu-central-1.amazonaws.com/upload/images/background/dc/aC/dcaCAlpSKRlWi4YzoKoS-211x211.png" alt="">
              <div class="date">13:39</div>
            </div>
          </div>
          <div class="lm-m-dialog-body--item from">
            <div class="lm-m-dialog-body--item-wrap">
              <div class="text">Привет Привет Привет Привет Привет Привет Привет Привет Привет Привет Привет</div>
              <div class="date">13:40</div>
            </div>
          </div>
          <div class="lm-m-dialog-body--item date">
            <span>Сегодня, 3 августа</span>
          </div>
          <div style="display: none;" class="lm-m-dialog-body--item null">
            <span>Напишите что-нибудь :)</span>
          </div>
        </div>
        <div class="lm-m-dialog-footer">
          <div class="lm-m-dialog-attaches">
            <div class="lm-m-dialog-attach photo">
              <img src="https://linkmuse.s3.eu-central-1.amazonaws.com/upload/images/background/dc/aC/dcaCAlpSKRlWi4YzoKoS-211x211.png" alt="">
              <i class="lm-close"></i>
            </div>
            <div class="lm-m-dialog-attach audio">
              <i class="lm-close"></i>
            </div>
            <div class="lm-m-dialog-attach video">
              <i class="lm-play-icon"></i>
              <div class="lm-m-dialog-attach-wrap">
                <img src="https://linkmuse.s3.eu-central-1.amazonaws.com/upload/images/background/dc/aC/dcaCAlpSKRlWi4YzoKoS-211x211.png" alt="">
              </div>
              <i class="lm-close"></i>
            </div>
            <div class="lm-m-dialog-attach document">
              <i class="lm-close"></i>
            </div>
            <div class="lm-m-dialog-attach photo">
              <img src="https://linkmuse.s3.eu-central-1.amazonaws.com/upload/images/background/dc/aC/dcaCAlpSKRlWi4YzoKoS-211x211.png" alt="">
              <i class="lm-close"></i>
            </div>
            <div class="lm-m-dialog-attach video">
              <i class="lm-play-icon"></i>
              <div class="lm-m-dialog-attach-wrap">
                <img src="https://linkmuse.s3.eu-central-1.amazonaws.com/upload/images/background/dc/aC/dcaCAlpSKRlWi4YzoKoS-211x211.png" alt="">
              </div>
              <i class="lm-close"></i>
            </div>
            <div class="lm-m-dialog-attach document">
              <i class="lm-close"></i>
            </div>
            <div class="lm-m-dialog-attach photo">
              <img src="https://linkmuse.s3.eu-central-1.amazonaws.com/upload/images/background/dc/aC/dcaCAlpSKRlWi4YzoKoS-211x211.png" alt="">
              <i class="lm-close"></i>
            </div>
            <div class="lm-m-dialog-attach video">
              <i class="lm-play-icon"></i>
              <div class="lm-m-dialog-attach-wrap">
                <img src="https://linkmuse.s3.eu-central-1.amazonaws.com/upload/images/background/dc/aC/dcaCAlpSKRlWi4YzoKoS-211x211.png" alt="">
              </div>
              <i class="lm-close"></i>
            </div>
            <div class="lm-m-dialog-attach audio">
              <i class="lm-close"></i>
            </div>
            <div class="lm-m-dialog-attach document">
              <i class="lm-close"></i>
            </div>
          </div>

          <div class="lm-m-dialog-write">
            <div class="lm-input-wrap">
              <input type="text" placeholder="Введите сообщение">
            </div>
            <div class="lm-m-dialog-show-actions">
              <div class="dialog-attach">
                <label for="attach">
                  <i class="lm-attach-icon active"></i>
                </label>
                <input id="attach" type="file" class="hidden">
              </div>
              <div class="dialog-emoji">
                <i class="lm-smile-icon active"></i>
              </div>
              <div class="dialog-send">
                <i class="lm-send-icon"></i>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
    <div class="lm-m-modal-wrap" v-if="modal">
      <div class="lm-m-modal-backdoor" @click="toogleModal">
        <div class="close"></div>
      </div>
      <div class="lm-m-modal-list-menu">
        <input type="text" class="lm-input search" placeholder="Введите имя или фамилию">
        <div class="message-scroll">
          <div class="lm-m-modal-list-menu--item user">
            <div class="lm-user-block">
              <img src="https://linkmuse.com/dist/img/no_image_user.png" class="lm-user-block-avatar">
              <div class="lm-user-block-info">
                <div class="lm-user-block-info-name"><span>Elnora Weber</span>
                </div>
                <div class="lm-user-block-info-type">Дизайнер</div>
              </div>
            </div>
          </div>
          <div class="lm-m-modal-list-menu--item user">
            <div class="lm-user-block">
              <img src="https://linkmuse.com/dist/img/no_image_user.png" class="lm-user-block-avatar">
              <div class="lm-user-block-info">
                <div class="lm-user-block-info-name"><span>Elnora Weber</span>
                </div>
                <div class="lm-user-block-info-type">Дизайнер</div>
              </div>
            </div>
          </div>
          <div class="lm-m-modal-list-menu--item user">
            <div class="lm-user-block">
              <img src="https://linkmuse.com/dist/img/no_image_user.png" class="lm-user-block-avatar">
              <div class="lm-user-block-info">
                <div class="lm-user-block-info-name"><span>Elnora Weber</span>
                </div>
                <div class="lm-user-block-info-type">Дизайнер</div>
              </div>
            </div>
          </div>
          <div class="lm-m-modal-list-menu--item user">
            <div class="lm-user-block">
              <img src="https://linkmuse.com/dist/img/no_image_user.png" class="lm-user-block-avatar">
              <div class="lm-user-block-info">
                <div class="lm-user-block-info-name"><span>Elnora Weber</span>
                </div>
                <div class="lm-user-block-info-type">Дизайнер</div>
              </div>
            </div>
          </div>
          <div class="lm-m-modal-list-menu--item user">
            <div class="lm-user-block">
              <img src="https://linkmuse.com/dist/img/no_image_user.png" class="lm-user-block-avatar">
              <div class="lm-user-block-info">
                <div class="lm-user-block-info-name"><span>Elnora Weber</span>
                </div>
                <div class="lm-user-block-info-type">Дизайнер</div>
              </div>
            </div>
          </div>
          <div class="lm-m-modal-list-menu--item user">
            <div class="lm-user-block">
              <img src="https://linkmuse.com/dist/img/no_image_user.png" class="lm-user-block-avatar">
              <div class="lm-user-block-info">
                <div class="lm-user-block-info-name"><span>Elnora Weber</span>
                </div>
                <div class="lm-user-block-info-type">Дизайнер</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    metaInfo: {
      title: 'Сообщения'
    },
    data () {
      return {
        step: 5,
        modal: false,
        search: false
      }
    },
    methods: {
      nextStep () {
        this.step++
      },
      toogleModal () {
        this.modal = !this.modal
      },
      toogleSearch () {
        this.search = !this.search
      }
    }
  }
</script>
