<template>
  <mt-popup class="lm-m-modal-wrap modal__content modal__content_declaration modal__content_declaration_casting" v-model="modal.value" position="center" :modal="true" @input="_handleInputPopup">
    <svg class="icon icon_heart modal__icon_declaration mt_2">
      <use xlink:href="/dist/img/icons/_declaration/sprite.svg#icon_like" />
    </svg>
    <div class="modal__title modal__title_declaration_casting">Добавление в избранное</div>
    <div class="modal__description modal__description_declaration_casting">
      Создайте аккаунт для сохранения данных
    </div>
    <button class="btn btn_login btn_primary w_100" @click="_handleClickLoading">Создать</button>
  </mt-popup>
</template>

<script>
  import { Popup } from 'mint-ui'
  import PopupMix from '@components/Mixins/Popup'

  export default {
    components: { 'mt-popup': Popup },
    mixins: [PopupMix],
    data () {
      return {
        modal: {
          url: null,
          value: false,
          loading: false
        }
      }
    },
    mounted () {
      this.$root.$on('open-modal-access-favorite', (url) => {
        this.modal.url = url
        this.modal.value = true
      })
    },
    methods: {
      _handleInputPopup (value) {
        if (value === false) {
          this._handleClearModal()
        }
      },
      _handleClearModal () {
        this.modal = {
          url: null,
          value: false,
          loading: false
        }
      },
      _handleClickLoading () {
        if (this.url) this.$localStorage.set('redirect.register', this.url)
        this.$nextTick(() => {
          this._handleClearModal()
          this.$router.push({ name: 'register' })
        })
      }
    }
  }
</script>
