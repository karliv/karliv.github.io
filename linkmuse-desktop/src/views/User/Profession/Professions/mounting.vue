<script>
  const KEYS = {
    rate: 'rate',
    workForFree: 'work-for-free',
    programsSoftware: 'programs-software',
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
        professionTitle: 'Монтажер',
        professionName: 'mounting',
        fields: {
          [KEYS['rate']]: [],
          [KEYS['workForFree']]: false,
          [KEYS['programsSoftware']]: null,
          [KEYS['participationInProjects']]: [],
        }
      }
    }
  }
</script>

<style scoped>

</style>
