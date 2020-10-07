<script>
  const KEYS = {
    rate: 'rate',
    directions: 'directions',
    talentArchive: 'talent-archive',
    workExperience: 'work-experience',
    participationInProjects: 'participation-in-projects'
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
        professionTitle: 'Кастинг-директор',
        professionName: 'casting-director',
        fields: {
          [KEYS['rate']]: [],
          [KEYS['directions']]: null,
          [KEYS['workExperience']]: null,
          [KEYS['talentArchive']]: false,
          [KEYS['participationInProjects']]: []
        }
      }
    }
  }
</script>

<style scoped>

</style>
