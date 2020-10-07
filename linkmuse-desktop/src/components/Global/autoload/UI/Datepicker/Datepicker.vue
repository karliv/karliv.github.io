<script>
  import { isBrowser } from '@utils'
  import { ru } from 'vuejs-datepicker/dist/locale'

  let Datepicker = {}
  if (isBrowser) {
    Datepicker = require('vuejs-datepicker').default
  }

  export default {
    mixins: [Datepicker],
    props: {
      language: {
        type: Object,
        default: () => ru
      },
      mondayFirst: {
        type: Boolean,
        default: true
      }
    }
  }
</script>

<style scoped>

</style>
