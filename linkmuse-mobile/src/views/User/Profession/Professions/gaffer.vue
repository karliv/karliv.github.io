<script>
  const KEYS = {
    rate: 'rate',
    equipment: 'equipment',
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
        hasSnaps: false,
        hasPortfolio: true,
        hasBodyParameters: false,
        professionTitle: 'Бригадир осветителей / гаффер',
        professionName: 'gaffer',
        fields: {
          [KEYS['rate']]: [],
          [KEYS['equipment']]: [],
          [KEYS['workForFree']]: false,
          [KEYS['participationInProjects']]: [],
        }
      }
    }
  }
</script>

<style scoped>

</style>
