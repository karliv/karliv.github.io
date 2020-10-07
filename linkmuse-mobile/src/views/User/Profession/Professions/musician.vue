<script>
  const KEYS = {
    rate: 'rate',
    genres: 'genres',
    equipment: 'equipment',
    instruments: 'instruments',
    ownMaterial: 'own-material',
    musicServices: 'music-services',
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
        professionTitle: 'Музыкант / группа',
        professionName: 'musician',
        fields: {
          [KEYS['rate']]: [],
          [KEYS['genres']]: [],
          [KEYS['equipment']]: [],
          [KEYS['instruments']]: [],
          [KEYS['ownMaterial']]: false,
          [KEYS['musicServices']]: null,
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
