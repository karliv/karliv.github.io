<template>
  <div class="page_declaration_creating page_user_settings">
    <router-view :company="companyView"></router-view>

    <lm-main-footer class="footer-static grey"></lm-main-footer>
  </div>
</template>

<script>
  import _ from 'lodash'
  import { mapGetters } from 'vuex'
  import CompanyListComponents from '@views/User/Company/Companies'

  export default {
    name: 'EditCompany',
    async asyncData ({ store, route }) {
      const { id } = route.params

      const initializedSources = Boolean(store.getters['user/company/getInitializedSources'])

      if (initializedSources === false) {
        await store.dispatch('user/company/getSources')
      }

      await store.dispatch('user/company/getCompanyById', { id: Number(id), params: { edit: 1 } })
    },
    computed: {
      ...mapGetters({
        user: 'auth/getAuthUser',
        profile: 'auth/getProfile',
        error: 'user/company/getCompanyError',
        company: 'user/company/getCompanyData',
        loading: 'user/company/getCompanyLoading',
      }),
      companyView () {
        let { company: { name: company }  } = this.company
        return Object.keys(CompanyListComponents).includes(_.camelCase(company)) ? `company-${_.kebabCase(company)}` : 'company-default'
      }
    }
  }
</script>

<style scoped>

</style>
