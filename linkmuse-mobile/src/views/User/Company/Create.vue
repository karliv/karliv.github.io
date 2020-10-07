<template>
  <router-view :company="companyView"></router-view>
</template>

<script>
  import _ from 'lodash'
  import CompanyListComponents from '@views/User/Company/Companies'

  export default {
    name: 'CreateCompany',
    computed: {
      companyView () {
        let { params: { company }  } = this.$route
        return Object.keys(CompanyListComponents).includes(_.camelCase(company)) ? `company-${_.kebabCase(company)}` : 'company-default'
      }
    },
    async asyncData ({ store, route }) {
      const initializedSources = Boolean(store.getters['user/company/getInitializedSources'])

      if (initializedSources === false) {
        await store.dispatch('user/company/getSources')
      }
    },
  }
</script>

<style scoped>

</style>
