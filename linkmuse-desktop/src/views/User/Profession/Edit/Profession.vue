<template>
  <keep-alive>
    <component :is="profession" :edit="true"></component>
  </keep-alive>
</template>

<script>
  import _ from 'lodash'
  import ProfessionListComponents from '@views/User/Profession/Professions'

  export default {
    components: Object.keys(ProfessionListComponents).reduce((obj, name) => {
      return Object.assign(obj, { [`profession-${_.kebabCase(name)}`]: () => import(`@views/User/Profession/Professions/${name}.vue`) })
    }, {}),
    props: {
      profession: {
        required: true
      }
    },
    metaInfo: {
      title: 'Редактирование профессии'
    }
  }
</script>

<style scoped>

</style>
