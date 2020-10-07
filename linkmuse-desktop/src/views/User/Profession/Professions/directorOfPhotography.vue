<script>
  const KEYS = {
    rate: 'rate',
    equipment: 'equipment',
    workForFree: 'work-for-free',
    higherEducation: 'higher-education',
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
        professionTitle: 'Оператор-постановщик',
        professionName: 'director-of-photography',
        fields: {
          [KEYS['rate']]: [],
          [KEYS['equipment']]: null,
          [KEYS['workForFree']]: false,
          [KEYS['higherEducation']]: [],
          [KEYS['participationInProjects']]: [],
        }
      }
    }
  }
</script>

<style scoped>

</style>
