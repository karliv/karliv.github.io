<script>
  const KEYS = {
    rate: 'rate',
    directions: 'directions',
    workForFree: 'work-for-free',
    competitionsAndAwards: 'competitions-and-awards',
    participationInProjects: 'participation-in-projects',
    hips: 'body-parameters.hips',
    waist: 'body-parameters.waist',
    weight: 'body-parameters.weight',
    height: 'body-parameters.height',
    tattoos: 'body-parameters.tattoos',
    shoeSize: 'body-parameters.shoe-size',
    bodyType: 'body-parameters.body-type',
    dyedHair: 'body-parameters.dyed-hair',
    eyeColor: 'body-parameters.eye-color',
    piercings: 'body-parameters.piercings',
    hairColor: 'body-parameters.hair-color',
    hairLength: 'body-parameters.hair-length',
    clothingSize: 'body-parameters.clothing-size',
    volumeOfBreast: 'body-parameters.volume-of-breast',
    typeOfAppearance: 'body-parameters.type-of-appearance',
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
        hasBodyParameters: true,
        professionTitle: 'Модель',
        professionName: 'model',
        fields: {
          [KEYS['rate']]: [],
          [KEYS['hips']]: null,
          [KEYS['waist']]: null,
          [KEYS['weight']]: null,
          [KEYS['height']]: null,
          [KEYS['tattoos']]: null,
          [KEYS['shoeSize']]: null,
          [KEYS['bodyType']]: null,
          [KEYS['dyedHair']]: null,
          [KEYS['eyeColor']]: null,
          [KEYS['piercings']]: null,
          [KEYS['hairColor']]: null,
          [KEYS['hairLength']]: null,
          [KEYS['directions']]: null,
          [KEYS['clothingSize']]: null,
          [KEYS['workForFree']]: false,
          [KEYS['volumeOfBreast']]: null,
          [KEYS['typeOfAppearance']]: null,
          [KEYS['competitionsAndAwards']]: null,
          [KEYS['participationInProjects']]: [],
        }
      }
    }
  }
</script>

<style scoped>

</style>
