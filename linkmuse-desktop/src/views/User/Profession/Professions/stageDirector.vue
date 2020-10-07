<script>
  const KEYS = {
    rate: 'rate',
    functions: 'functions',
    directions: 'directions',
    workForFree: 'work-for-free',
    workExperience: 'work-experience',
    higherEducation: 'higher-education',
    competitionsAndAwards: 'competitions-and-awards',
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
        hasPortfolio: false,
        hasBodyParameters: false,
        professionTitle: 'Режиссер-постановщик',
        professionName: 'stage-director',
        fields: {
          [KEYS['rate']]: [],
          [KEYS['functions']]: null,
          [KEYS['directions']]: null,
          [KEYS['workForFree']]: false,
          [KEYS['workExperience']]: null,
          [KEYS['higherEducation']]: [],
          [KEYS['competitionsAndAwards']]: null,
          [KEYS['participationInProjects']]: [],
        }
      }
    }
  }
</script>

<style scoped>

</style>
