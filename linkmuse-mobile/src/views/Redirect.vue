<template>
  <div class="page page_error page_error_404" style="display: none">
    <a :href="url" target="_blank" ref="redirect"></a>
  </div>
</template>

<script>
import { isBrowser } from "@utils";

export default {
  metaInfo: {
    title: '301'
  },
  mounted () {
    if (this.url && isBrowser) {
      this.$refs.redirect.click()
      setTimeout(() => {
        this.$router.push({ name: 'index' })
      }, 2000)
    } else {
      this.$router.push({ name: 'index' })
    }
  },
  computed: {
    url () {
      const { url } = this.$route.query
      return url
    }
  }
}
</script>
