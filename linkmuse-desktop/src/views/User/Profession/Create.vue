<template>
  <div class="page_declaration_creating page_user_settings">
    <router-view :profession="professionView"></router-view>

    <lm-check-list-portfolio-modal></lm-check-list-portfolio-modal>
    <lm-main-footer class="footer-static grey"></lm-main-footer>
  </div>
</template>

<script>
  import _ from 'lodash'
  import ProfessionListComponents from '@views/User/Profession/Professions'

  export default {
    name: 'CreateProfession',
    computed: {
      professionView () {
        let { params: { profession }  } = this.$route
        return Object.keys(ProfessionListComponents).includes(_.camelCase(profession)) ? `profession-${_.kebabCase(profession)}` : 'profession-default'
      }
    },
    async asyncData ({ store, route }) {
      const initializedSources = Boolean(store.getters['user/profession/getInitializedSources'])

      if (initializedSources === false) {
        await store.dispatch('user/profession/getSources')
      }
    },
  }
</script>

<style scoped>

</style>
