<script>
  const KEYS = {
    rate: 'rate',
    training: 'training',
    functions: 'functions',
    directions: 'directions',
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
        professionTitle: 'Художник по гриму / гримёр',
        professionName: 'makeup-artist',
        fields: {
          [KEYS['rate']]: [],
          [KEYS['training']]: [],
          [KEYS['functions']]: null,
          [KEYS['directions']]: null,
          [KEYS['workForFree']]: false,
          [KEYS['participationInProjects']]: [],
        }
      }
    }
  }
</script>

<style scoped>

</style>
