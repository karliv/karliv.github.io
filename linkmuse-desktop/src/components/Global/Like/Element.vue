<template>
  <span @click.stop.prevent="_handleClickStoreLike()" @mouseenter="_handleMouseEnter" @mouseleave="_handleMouseLeave" style="position: relative;">
    <i :class="{ 'icon-Shape': true, 'active': mutations.liked }"></i>
    <slot name="title"></slot>
    <font :data-value="mutations.count">{{ mutations.count }}</font>
  </span>
</template>

<script>
import LikeMixin from './mixins/index.js'

export default {
  mixins: [LikeMixin],
  data () {
    return {
      users: {
        data: [],
        offset: 0,
        count: 0,
        loading: false,
        show: false
      },
      timeoutEnter: null,
      timeoutLeave: null
    }
  },
  watch: {
    show (val) {
      if (val) this.fetchUsers()
    }
  },
  computed: {
    likes () {
      return this.users.data.slice(0, 5)
    },
    styleLikes () {
      return {
        'opacity': this.show ? 1 : 0,
        'visibility': this.show ? 'visible' : 'hidden',
        'left': 0,
        'top': '-105px'
      }
    },
    show () {
      return this.users.show
    },
    appreciated () {
      let titles = ['Оценил', 'Оценили', 'Оценили']
      return this.$pluralize(this.mutations.count, titles, false)
    },
    people () {
      let titles = ['пользователь', 'пользователя', 'пользователей']
      return this.$pluralize(this.mutations.count, titles, false)
    }
  },
  methods: {
    _handleMouseEnter () {
      clearTimeout(this.timeoutLeave)
      this.timeoutLeave = null
      this.timeoutEnter = setTimeout(() => {
        this.users.show = true
      }, 500)
    },
    _handleMouseLeave () {
      clearTimeout(this.timeoutEnter)
      this.timeoutEnter = null
      this.timeoutLeave = setTimeout(() => {
        this.users.show = false
      }, 500)
    },
    _handleClickStoreLike () {
      if (!this.isAuthorized) {
        this.$root.$emit('open-access-auth-modal')
        return false;
      }

      if (this.loading || this.users.loading) return false

      this.loading = true

      this.incrementCount()

      this.$api.post('api/v1/like', this.params).then((response) => {
        let count = response.data.count,
          liked = response.data.liked;

        this.mutations = {
          count: count,
          liked: liked
        };

        this.$emit('like', count, liked)
        this.$root.$emit('like', this.type, this.id, count, liked)

        this.loading = false

        if (this.gtm) {
          this.$root.reachGoalGtm({
            'event': this.gtm
          });
        }

      }, (response) => {
        this.incrementCount()
        this.loading = false
        throw new Error("Error liked post")
      });
    },
    _handleClickOpenModalShowLikes () {
      this.$root.$emit('open-modal-users-likes', this.params, this.users)
    },
    incrementCount () {
      if (this.mutations.liked) {

        this.users.count--
        this.users.offset--

        this.mutations = {
          count: --this.mutations.count,
          liked: (!this.mutations.liked)
        };

        let index = this.users.data.map((item) => item.id).indexOf(this.user.id)

        if (index > -1) this.users.data.splice(index, 1)
      } else {
        this.users.count++
        this.users.offset++

        this.mutations = {
          count: ++this.mutations.count,
          liked: (!this.mutations.liked)
        };

        this.users.data = [this.user, ...this.users.data]
      }
    },
    fetchUsers () {
      if (this.users.loading && this.users.show) return false

      this.users.loading = true
      this.clearUsers()

      this.$api.get('api/v1/likes', this.params).then((response) => {

        let { data: { data, meta: { count, new_offset, liked } } } = response

        data.forEach(item => this.users.data.push(item) )

        this.users['count'] = count;
        this.users['offset'] = new_offset

        this.mutations['count'] = count
        this.mutations['liked'] = liked

        this.users.loading = false

      }, (response) => {
        this.users.loading = false
        throw new Error("Error get uers likes post")
      });
    },
    clearUsers () {
      this.users['data'] = []
      this.users['count'] = 0
    }
  }
}
</script>
