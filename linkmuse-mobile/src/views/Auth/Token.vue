<template>
    <div class="lm-m-register-page lm-post-register-page">
      <div class="wrapper lm-m-post-register-page-wrapper lm-m-post-register-select-role">
        <h1 style="margin-bottom: 12px;">Авторизация</h1>
        <div class="sub-title">
          <template>
            Идет процесс авторизации
          </template>
        </div>
      </div>
    </div>
</template>

<script>
  import { Toast, Indicator } from 'mint-ui'

  export default {
    metaInfo: {
      title: 'Вход',
    },
    mounted () {
      let { token, url } = this.$route.query

      if (token && url) {
        Indicator.open()
        this.$auth.storeSession({ token })
        this.$store.dispatch('auth/setToken', { accessToken: token, refreshToken: token }).then(result => {
          this.$store.dispatch('auth/getUserByAPI').then( user => {
            let { role } = user
            this.$auth.storeSession({ token, role })
            this.$router.replace(url)
            Indicator.close()
          }).catch(() => this.$router.replace({ name: 'login' }))
        }).catch(() => this.$router.replace({ name: 'login' }))
      } else this.$router.replace({ name: 'login' })
    }
  }
</script>

<style scoped>

</style>
