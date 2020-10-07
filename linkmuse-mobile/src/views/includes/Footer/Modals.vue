<template>
  <div>
    <modal-router-view></modal-router-view>

    <media-modal/>
    <more-navigation-modal/>
    <lm-user-balance-modal/>
    <lm-abuse-modal/>
    <lm-enter-location-modal/>

    <template v-if="(isAuthorized === false)">
      <lm-access-favorite-modal></lm-access-favorite-modal>
      <lm-access-response-modal></lm-access-response-modal>
      <lm-access-message-modal></lm-access-message-modal>
      <lm-access-global-modal></lm-access-global-modal>
    </template>

    <template v-if="(isAuthorized === true)">
      <lm-folders-list-modal></lm-folders-list-modal>
    </template>
  </div>
</template>

<script>
import { has } from '@utils'
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      openSecondPage: false
    }
  },
  computed: {
    ...mapGetters({
      user: 'auth/getAuthUser',
      hasEmail: 'auth/hasEmail',
      hasPhone: 'auth/hasPhone',
      isAuthorized: 'auth/isAuthorized',
      isRegistered: 'auth/isRegistered'
    })
  },
  mounted () {
    if (this.isAuthorized && (!(has(this.$route, 'meta.modalAttachPhone') && this.$route.meta.modalAttachPhone === false))) {
      this.openSecondPage = this.$localStorage.get('openSecondPage', false, Boolean)

      if (this.openSecondPage === false) {
        this.$localStorage.set('openSecondPage', true)
      }
    }

    let modalAttachPhoneOpen = false

    if (this.openSecondPage === true) {
      if (this.isAuthorized && (!(has(this.$route, 'meta.modalAttachPhone') && this.$route.meta.modalAttachPhone === false))) {
        if (this.user && this.hasPhone === false) {
          modalAttachPhoneOpen = true
          this.$modalRouter.push({ name: 'users.phone.attach' })
        }
      }

      /*
      if (this.isAuthorized && (!(has(this.$route, 'meta.modalAttachEmail') && this.$route.meta.modalAttachEmail === false)) && modalAttachPhoneOpen === false) {
        if (this.user && this.hasEmail === false) {
          this.$modalRouter.push({ name: 'users.email.attach' })
        }
      }
      */
    }
  }
}
</script>

<style scoped>

</style>
