<template>
  <router-view :profession="professionView"></router-view>
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
