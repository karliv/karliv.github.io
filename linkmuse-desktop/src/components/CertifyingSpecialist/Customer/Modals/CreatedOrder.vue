<template>
  <modal class="modal-center ss-modal-new-order" v-model="modal.value" :footer="false" title="У вас новый заказ!">
    <template v-if="order">
      <div class="ss-modal-new-order-wrap">
        <span class="from">Новый заказ от</span>
        <a href="javascript:void(0)" class="lm-user-vertical">
          <img :src="certified_user.avatar" class="lm-user-vertical-avatar">
          <div class="lm-user-vertical-info">
            <div class="lm-user-vertical-info-name">{{ certified_user.fullname }}</div>
            <div class="lm-user-block-vertical-type">
              <span class="type" v-for="(work, index) in getTransformServiceWorkType(service.works)" :key="index">{{ work }}</span>
            </div>
          </div>
        </a>
        <a :href="`/certifying/customer/orders/${order.id}`" @click.native="closeModal" class="lm-primary-button">
          Перейти к заказу
        </a>
        <template v-if="0">
          <router-link :to="{ name: 'certifying.customer.orders.show', params: { order_id: order.id } }" @click.native="closeModal" class="lm-primary-button">
            Перейти к заказу
          </router-link>
        </template>
      </div>
    </template>
  </modal>
</template>

<script>
import { mapGetters } from 'vuex'
import CertifyingSpecialist from '@modules/CertifyingSpecialist'

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
    certified_user () {
      if (!this.order) return {}
      return this.order.certified_user.data
    }
  },
  mounted () {
    if (this.isAuthorized && this.user) {
      this.$echo.private(`user.${this.user.id}`).listen('.certifying_specialist.order.created', ({ data }) => {
        this.modal.order = data
        this.modal.value = true
      })
    }
  },
  methods: {
    closeModal () {
      this.modal.order = null
      this.modal.value = false
    },
    getTransformServiceWorkType (type) {
      return CertifyingSpecialist.getTransformServiceWorkType(type)
    }
  }
}
</script>
