<template>
  <custom-template-modal class="modal-center modal_declaration" v-model="modal.value" @hide="_handleCloseModal()" :header="false" :footer="false">
    <div class="modal__content modal__content_declaration modal__content_declaration_casting">
      <svg class="d-icon d-icon_size_64 fill_support-1 mb_5">
        <use xlink:href="/dist/web/img/icons/svg/sprite.svg#icon_like" />
      </svg>
      <div class="modal__title modal__title_declaration_casting">Добавлено в избранное</div>
      <div class="modal__description modal__description_declaration_casting mb_6">
        Создайте аккаунт для сохранения данных
      </div>
      <button class="d-btn d-btn_primary w_100" @click="_handleClickLoading">Создать</button>
    </div>
  </custom-template-modal>
</template>

<script>

  import { redirect } from '@utils'

  export default {
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
      _handleCloseModal ()  {
        this._handleClearModal()
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
          redirect('register')
          // this.$router.push({ name: 'login' })
        })
      }
    }
  }
</script>
