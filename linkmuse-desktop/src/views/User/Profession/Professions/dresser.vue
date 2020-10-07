<script>
  const KEYS = {
    rate: 'rate',
    training: 'training',
    workForFree: 'work-for-free',
    participationInProjects: 'participation-in-projects',
  }

  import UserFormMixin from '@modules/User/Profession/mixins/form'
  import UserFormTemplate from '@modules/User/Profession/extends/Form.vue'

  export default {
    mixins: [UserFormMixin],
    extends: UserFormTemplate,
    props: {
      edit: {
        type: Boolean
      }
    },
    provide() {
      return {
        $validator: this.$validator
      }
    },
    data () {
      return {
        KEYS,
        hasPortfolio: true,
        hasBodyParameters: false,
        professionTitle: 'Костюмер',
        professionName: 'dresser',
        fields: {
          [KEYS['rate']]: [],
          [KEYS['training']]: [],
          [KEYS['workForFree']]: false,
          [KEYS['participationInProjects']]: [],
        }
      }
    }
  }
</script>

<style scoped>

</style>
