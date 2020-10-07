<template>
  <span @click.stop.prevent="_handleClickStoreLike()" :class="{ 'active': mutations.liked }">
    <slot></slot>
  </span>
</template>

<script>
import LikeMixin from './mixins/index.js'

export default {
  mixins: [LikeMixin],
  watch: {
    id() {
      this.mutations = {
        count: this.count,
        liked: this.liked
      };
    }
  },
  methods: {
    _handleClickStoreLike() {
      if (!this.isAuthorized) {
        this.$root.$emit('open-access-auth-modal')
        return false
      }

      if (this.loading) return false

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
    incrementCount() {
      if (this.mutations.liked) {
        this.mutations = {
          count: --this.mutations.count,
          liked: (!this.mutations.liked)
        };
      } else {
        this.mutations = {
          count: ++this.mutations.count,
          liked: (!this.mutations.liked)
        };
      }
    }
  }
}
</script>

<style scoped>

</style>
