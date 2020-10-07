<script>
  const KEYS = {
    rate: 'rate',
    company: 'company',
    functions: 'functions',
    directions: 'directions',
    actorsStarredIn: 'actors-starred-in',
    introducingActorsModels: 'introducing-actors-models',
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
        professionTitle: 'Агент',
        professionName: 'agent',
        fields: {
          [KEYS['rate']]: [],
          [KEYS['company']]: null,
          [KEYS['functions']]: [],
          [KEYS['directions']]: [],
          [KEYS['actorsStarredIn']]: null,
          [KEYS['participationInProjects']]: [],
          [KEYS['introducingActorsModels']]: null
        }
      }
    },
    computed: {

    }
  }
</script>

<style scoped>

</style>
