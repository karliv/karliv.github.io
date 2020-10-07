<template>
  <div v-if="isAuthorized">
    <user-balance-modal/>
    <show-certifying-specialist-modal/>
    <welcome-certifying-specialist-modal/>
    <created-order-certifying-specialist-modal/>
    <stop-work-order-certifying-specialist-modal/>
    <lm-enter-location-modal/>
    <lm-abuse-modal/>
  </div>
</template>

<script>
import { has } from '@utils'
import { mapGetters } from 'vuex'

import UserBalanceModal from '@components/CertifyingSpecialist/Global/Modals/Balance.vue'
import ShowCertifyingSpecialistModal from '@components/CertifyingSpecialist/Customer/Modals/Specialist.vue'
import WelcomeCertifyingSpecialistModal from '@components/CertifyingSpecialist/Customer/Modals/Welcome.vue'
import CreatedOrderCertifyingSpecialistModal from '@components/CertifyingSpecialist/Customer/Modals/CreatedOrder.vue'
import StopWorkOrderCertifyingSpecialistModal from '@components/CertifyingSpecialist/Executor/Modals/StopWorkOrder.vue'

export default {
  computed: {
    ...mapGetters({
      isAuthorized: 'auth/isAuthorized',
      profile: 'auth/getProfile'
    })
  },
  components: {
    UserBalanceModal,
    ShowCertifyingSpecialistModal,
    WelcomeCertifyingSpecialistModal,
    CreatedOrderCertifyingSpecialistModal,
    StopWorkOrderCertifyingSpecialistModal
  },
  mounted () {
    if (this.isAuthorized && (!(has(this.$route, 'meta.modalGeo') && this.$route.meta.modalGeo === false))) {
      if (this.profile && (has(this.profile, 'country.data.id') === false || has(this.profile, 'city.data.id') === false)) {
        this.$root.$emit('open-modal-draw-geo')
      }
    }
  }
}
</script>
