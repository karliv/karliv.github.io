import { CASTING, LOCATION } from '@modules/Board/Enums/BoardType'

export default {
  computed: {
    boardTypes () {
      return [
        { id: CASTING, text: 'Кастинги' },
        { id: LOCATION, text: 'Локации' }
      ]
    }
  },
  methods: {
    _handleInputBoardType (type) {
      if (type === CASTING) {
        // this.$loading.show({ loader: 'dots', color: '#0063da' })
        this.$router.push({ name: 'board.castings.create' })
      }

      if (type === LOCATION) {
        // this.$loading.show({ loader: 'dots', color: '#0063da' })
        this.$router.push({ name: 'board.locations.create' })
      }
    }
  }
}
