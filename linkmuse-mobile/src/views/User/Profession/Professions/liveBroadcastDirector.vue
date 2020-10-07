<script>
  const KEYS = {
    rate: 'rate',
    other: 'other',
    functions: 'functions',
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
        hasSnaps: false,
        hasPortfolio: true,
        hasBodyParameters: false,
        professionTitle: 'Режиссёр онлайн-трансляций',
        professionName: 'live-broadcast-director',
        fields: {
          [KEYS['rate']]: [],
          [KEYS['other']]: null,
          [KEYS['functions']]: [],
          [KEYS['higherEducation']]: [],
          [KEYS['participationInProjects']]: [],
        }
      }
    }
  }
</script>

<style scoped>

</style>
