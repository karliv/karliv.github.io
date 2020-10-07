import { mapGetters } from 'vuex'

export default {
  props: {
    type: {
      type: String,
      required: true
    },
    id: {
      required: true
    },
    count: {
      type: Number,
      default: 0
    },
    liked: {
      type: Boolean,
      default: false
    },
    gtm: {
      type: String,
      default: null
    },
    hash: {
      type: String,
      required: false
    }
  },
  data () {
    return {
      loading: false,
      mutations: {
        count: this.count,
        liked: this.liked
      }
    }
  },
  computed: {
    ...mapGetters({
      user: 'auth/getAuthUser',
      isAuthorized: 'auth/isAuthorized'
    }),
    params () {
      return { type: this.type, id: this.id }
    }
  },
  beforeDestroy () {
    this.$parent.$off('change-likes')
    this.$root.$off('like')
  },
  created () {
    this.$parent.$on('change-likes', (count, liked) => {
      this.mutations = {
        count: count,
        liked: liked
      }
    })
    this.$root.$on('like', (type, id, count, liked) => {
      if (this.type === type && id === this.id) {
        this.mutations = {
          count: count,
          liked: liked
        }
      }
    })
  }
}
