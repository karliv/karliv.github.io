<template>
  <keep-alive>
    <component :is="company" :edit="true"></component>
  </keep-alive>
</template>

<script>
  import _ from 'lodash'
  import CompanyListComponents from '@views/User/Company/Companies'

  export default {
    components: Object.keys(CompanyListComponents).reduce((obj, name) => {
      return Object.assign(obj, { [`company-${_.kebabCase(name)}`]: () => import(`@views/User/Company/Companies/${name}.vue`) })
    }, {}),
    props: {
      company: {
        required: true
      }
    },
    metaInfo: {
      title: 'Редактирование компании'
    }
  }
</script>

<style scoped>

</style>
