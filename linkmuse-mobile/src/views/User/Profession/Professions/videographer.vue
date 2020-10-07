<script>
  const KEYS = {
    rate: 'rate',
    training: 'training',
    equipment: 'equipment',
    directions: 'directions',
    workForFree: 'work-for-free',
    programsSoftware: 'programs-software',
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
        hasSnaps: false,
        hasPortfolio: true,
        hasBodyParameters: false,
        professionTitle: 'Видеограф',
        professionName: 'videographer',
        fields: {
          [KEYS['rate']]: [],
          [KEYS['training']]: [],
          [KEYS['equipment']]: [],
          [KEYS['directions']]: [],
          [KEYS['workForFree']]: false,
          [KEYS['programsSoftware']]: [],
          [KEYS['competitionsAndAwards']]: null,
          [KEYS['participationInProjects']]: [],
        }
      }
    }
  }
</script>

<style scoped>

</style>
