<template>
  <modal class="modal-center ss-modal-welcome lm-popup-modal" v-model="modal.value" :footer="false" :header="false">
    <div class="lm-popups">
      <div class="lm-popups-head">
        <div class="lm-popups-head--title">Добро пожаловать в команду!</div>
        <a href="javascript:void(0)" class="lm-popups--close lm-close" @click="closeModal()"></a>
      </div>
      <div class="lm-popups-content" style="text-align: center">
        <br>
        <font style="font-size: 40px">👍</font>
        <br>
        <p>Теперь вы верифицирующий <br>
          специалист Linkmuse!</p>
        <br>
        <p>Осталось заполнить <br>
          данные о себе.</p>
        <div class="lm-popups--actions">
          <router-link :to="{ name: 'certifying.customer.settings' }" @click.native="closeModal()" class="lm-primary-button">начать работу</router-link>
        </div>
        <br>
      </div>
    </div>
  </modal>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      modal: {
        value: false
      }
    }
  },
  computed: {
    ...mapGetters({
      user: 'auth/getAuthUser',
      isAuthorized: 'auth/isAuthorized'
    })
  },
  mounted () {
    if (this.isAuthorized && this.user) {
      this.$echo.private(`user.${this.user.id}`).listen('.certifying_specialist.approved', (payload) => {
        this.modal.value = true
      })
    }
  },
  methods: {
    closeModal () {
      this.modal.value = false
    }
  }
}
</script>
