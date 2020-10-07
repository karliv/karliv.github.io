<template>
  <div class="page_declaration_creating page_user_settings">
    <router-view :profession="professionView"></router-view>

    <lm-check-list-portfolio-modal></lm-check-list-portfolio-modal>
    <lm-main-footer class="footer-static grey"></lm-main-footer>
  </div>
</template>

<script>
  import _ from 'lodash'
  import { mapGetters } from 'vuex'
  import ProfessionListComponents from '@views/User/Profession/Professions'

  export default {
    name: 'EditProfession',
    async asyncData ({ store, route }) {
      const { id } = route.params

      await store.dispatch('user/profession/getSources', Number(id))

      await store.dispatch('user/profession/getProfessionById', {
        id: Number(id),
        params: { edit: 1 }
      }).catch((error) => {
        const { response: { status = 500, url = null } } = error
        throw ({ code: status, message: 'Error edit profession', url })
      })
    },
    computed: {
      ...mapGetters({
        user: 'auth/getAuthUser',
        profile: 'auth/getProfile',
        error: 'user/profession/getProfessionError',
        loading: 'user/profession/getProfessionLoading',
        profession: 'user/profession/getProfessionData',
      }),
      professionView () {
        let { profession: { name: profession }  } = this.profession
        return Object.keys(ProfessionListComponents).includes(_.camelCase(profession)) ? `profession-${_.kebabCase(profession)}` : 'profession-default'
      }
    }
  }
</script>

<style scoped>

</style>
