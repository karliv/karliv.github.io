<script>
  const KEYS = {
    rate: 'rate',
    functions: 'functions',
    directions: 'directions',
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
        hasPortfolio: true,
        hasBodyParameters: false,
        professionTitle: 'Ведущий',
        professionName: 'leading',
        fields: {
          [KEYS['rate']]: [],
          [KEYS['functions']]: null,
          [KEYS['directions']]: null,
          [KEYS['competitionsAndAwards']]: null,
          [KEYS['participationInProjects']]: [],
        }
      }
    }
  }
</script>

<style scoped>

</style>
