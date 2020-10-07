<template>
  <div class="modal-authentication page-container post-register">
    <div class="wrapper">
      <div class="flex-aling-center-column">
        <h2 class="heading heading_h2">{{ title }}</h2>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    metaInfo: {
      title: 'Авторизация'
    },
    data () {
      return {
        title: 'Переадресация'
      }
    },
    mounted () {
      const loader = this.$loading.show({ loader: 'dots', color: '#0063da' })

      let { params: { social }, query: { code } } = this.$route

      if (window && window.opener) {
        if (code && social) {
          window.opener.postMessage({ auth: { code, social } }, window.opener.location)
        } else window.opener.postMessage({ error: 'Login failed' }, window.opener.location)
      } else {
        loader.hide()
        this.title = 'Произошла ошибка'
        this.$notify({ type: 'error', title: 'Ошибка', text: 'Произошла ошибка.' })
      }
    }
  }
</script>

<style scoped>

</style>
