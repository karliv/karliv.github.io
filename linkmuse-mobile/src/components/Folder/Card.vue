<template>
  <div class="card declaration__card declaration__card_nb">
    <div class="section card__section_response">
      <div class="row row_justify_between row_align_center">
        <div :class="['response__status', 'response__status_not-viewed']">
          {{ $pluralize(count, ['человек', 'человека', 'человек']) }}
        </div>
        <button class="btn btn_options" @click="_handleClickActionSheet">
          <svg class="icon icon_size_16">
            <use xlink:href="/dist/img/icons/svg/sprite.svg#icon_options" />
          </svg>
        </button>
      </div>
    </div>
    <router-link :to="{ name: 'folders.show', params: { id } }" class="section card__section_response">
      <div class="heading_h5 declaration__heading">{{ folder.name | truncate(20) }}</div>
    </router-link>
  </div>
</template>

<script>
  export default {
    props: {
      folder: {
        type: Object,
        required: true
      }
    },
    computed: {
      id () {
        return this.folder['folder_id']
      },
      users () {
        return this.folder.users
      },
      count () {
        return Number(this.folder.users.length)
      },
      isArchived () {
        return Boolean(this.folder['archived'])
      }
    },
    methods: {
      _handleClickActionSheet () {
        this.$emit('actionSheet', this.id)
      }
    }
  }
</script>

<style scoped>

</style>
