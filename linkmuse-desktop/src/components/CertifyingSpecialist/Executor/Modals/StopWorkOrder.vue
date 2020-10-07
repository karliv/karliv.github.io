<template>
  <modal class="modal-center ss-modal-success" v-model="modal.value" :footer="false" :header="false">
    <template v-if="order">
      <div class="ss-modal-success-wrap">
        <div class="icon-sertification"></div>
        <div class="desc">Ваша верификация готова и ожидает потверждения</div>
        <router-link :to="{ name: 'certifying.executor.orders.show', params: { order_id: order.id } }" @click.native="closeModal" class="lm-primary-button">
          Перейти к заказу
        </router-link>
      </div>
    </template>
  </modal>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      modal: {
        value: false,
        order: null
      }
    }
  },
  computed: {
    ...mapGetters({
      user: 'auth/getAuthUser',
      isAuthorized: 'auth/isAuthorized'
    }),
    order () {
      return this.modal.order
    },
    service () {
      if (!this.order) return {}
      return this.order.service.data
    },
    works () {
      if (!this.service) return {}
      return this.service.works
    },
    certifying_specialist () {
      if (!this.order) return {}
      return this.order.certifying_specialist.data
    }
  },
  mounted () {
    if (this.isAuthorized && this.user) {
      this.$echo.private(`user.${this.user.id}`).listen('.certifying_specialist.order.stop_work', ({data}) => {
        console.log(data)
        this.modal.order = data
        this.modal.value = true
      })
    }
  },
  methods: {
    closeModal () {
      this.modal.order = null
      this.modal.value = false
    }
  }
}
</script>
