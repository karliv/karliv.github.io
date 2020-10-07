<template>
  <div>
    <div class="wrapper lm-m-register-page-wrapper page-inner">
      <div class="lm-m-register-wrap-form">
        <h2 class="heading heading_h2 mb_9">{{ title }}</h2>
      </div>
    </div>
  </div>
</template>

<script>
  import { isBrowser, isNative } from '@utils'
  import { Indicator, Toast } from 'mint-ui'

  export default {
    metaInfo: {
      title: 'Авторизация'
    },
    data () {
      return {
        loading: false,
        isNative: false,
        title: 'Переадресация'
      }
    },
    mounted () {
      if (isBrowser) {
        const { params: { social }, query: { code } } = this.$route

        Indicator.open()
        if (window && window.opener) {
          if (code && social) {
            window.opener.postMessage({ auth: { code, social } }, window.opener.location)
          } else window.opener.postMessage({ error: 'Login failed' }, window.opener.location)
          Indicator.close()
        } else {
          setTimeout(() => {
            Indicator.close()
            this.isNative = isNative()
            if (this.isNative === false) {
              if (social && code) {
                this.$router.push({ name: 'login', params: { social } , query: { code } })
              } else this.$router.push({ name: 'login' })
            } else {
              this.title = 'Произошла ошибка'
              this.$router.push({ name: 'login' })
              Toast({ message: 'Ошибка', iconClass: 'mintui mintui-field-error' })
            }
          }, 300)
        }
      }
    }
  }
</script>

<style scoped>

</style>
