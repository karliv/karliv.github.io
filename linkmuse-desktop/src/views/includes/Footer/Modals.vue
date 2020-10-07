<template>
    <div>
      <no-ssr>
        <ya-player></ya-player>
      </no-ssr>

      <media-modal/>
      <show-contact-phone-modal></show-contact-phone-modal>

      <template v-if="(isAuthorized === false)">
        <lm-access-favorite-modal></lm-access-favorite-modal>
        <lm-access-response-modal></lm-access-response-modal>
        <lm-access-message-modal></lm-access-message-modal>
        <lm-access-global-modal></lm-access-global-modal>
      </template>

      <template v-if="(isAuthorized === true)">
        <lm-attach-phone-modal></lm-attach-phone-modal>
        <lm-detach-phone-modal></lm-detach-phone-modal>
        <lm-folders-list-modal></lm-folders-list-modal>
      </template>
    </div>
</template>

<script>
  import { has } from '@utils'
  import { mapGetters } from 'vuex'
  import ShowContactPhoneModal from '@components/User/Modals/ShowContactPhone.vue'

  export default {
    components: { ShowContactPhoneModal },
    computed: {
      ...mapGetters({
        user: 'auth/getAuthUser',
        profile: 'auth/getProfile',
        isAuthorized: 'auth/isAuthorized',
        isRegistered: 'auth/isRegistered'
      })
    },
    mounted () {

    }
  }
</script>

<style scoped>

</style>
