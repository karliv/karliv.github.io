<template>
  <div class="lm-m-cs-confirm-page">
    <div class="lm-m-cs-confirm-page-wrap">
      <div class="title">Подтверждение данных</div>
      <div class="desc">Пожалуйста, подтвердите выбор специалиста и способ верификации для перехода к оплате</div>
      <div class="lm-m-cs-confirm-page-line">
        <div class="title">Специалист:</div>
        <div class="lm-user-block">
          <a href="javascript:void(0)">
            <div>
              <img src="https://i.linkmuse.com/upload/images/background/FF/Xt/FFXtl4bfb30I97luQt2v-211x211.png"
                   class="lm-user-block-avatar" alt="Михаил Шафутинский">
              <div class="lm-user-block-info">
                <div class="lm-user-block-info-name"><b>Михаил Шафутинский</b></div>
              </div>
            </div>
          </a>
        </div>
      </div>
      <div class="lm-m-cs-confirm-page-line">
        <div class="title">Адрес:</div>
        <b>Москва, Большая садовая, 10</b>
      </div>
      <div class="lm-m-cs-confirm-page-line">
        <div class="title">Способ:</div>
        <b>Фото (3)</b>
      </div>
      <div class="lm-m-cs-confirm-page-separator"></div>
      <a @click="openActionSheet" href="javascript:void(0)" class="lm-m-cs-confirm-promo-link">ввести промокод</a>
      <div class="lm-m-cs-confirm-page-line">
        <div class="title">Итого к оплате:</div>
        <b class="price">1500 ₽</b>
      </div>
      <div class="lm-m-cs-confirm-page-line">
        <div class="title">Итого к оплате:</div>
        <b class="price">1200 ₽ <span class="sale">1500 ₽</span></b>
      </div>
      <div class="lm-m-cs-confirm-page-line">
        <div class="title">Промокод:</div>
        <b class="promo">
          <span class="code">Линкмусе (-30%)</span>
          <i class="remove"></i>
        </b>
      </div>
    </div>
    <div class="lm-m-certifyingspecialist-select-action">
      <a href="javascript:void(0)" class="lm-link-button">назад</a>
      <button href="javascript:void(0)" class="lm-primary-button middle">продолжить</button>
    </div>
    <mt-popup class="lm-m-modal-wrap promo" v-model="promo.enabled" position="bottom" :modal="true">
      <div class="lm-m-modal-enter-promo">
        <input type="text" name="keyword"
               v-validate="'max:25'"
               v-model="promo.keyword"
               data-lm-key="keyword"
               placeholder="Введите промокод"
               @input="_handleInputPromo"
               :class="['lm-input', 'search', { 'error': (verrors.has('promo')) } ]">
        <span class="error">Неверный промокод</span>
        <a href="javascript:void(0)" class="lm-link-button ok">применить</a>
      </div>
    </mt-popup>
  </div>
</template>
<script>
  import { mapGetters } from 'vuex'

  export default {
    metaInfo: {
      title: 'Подтверждение данных'
    },
    data () {
      return {
        promo: {
          enabled: false,
          keyword: null
        }
      }
    },
    computed: {},
    methods: {
      _handleInputPromo () {

      },
      openActionSheet () {
        this.promo.enabled = true;
      }
    }
  }
</script>
