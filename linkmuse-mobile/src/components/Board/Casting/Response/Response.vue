<template>
  <div class="card card_response_my">
    <div class="section card__section_response">
      <div class="row row_justify_between row_align_center">
        <div :class="['response__status', { 'color_main' : read, 'response__status_not-viewed': (read === false) }]">
          {{ read ? $t('applications-page.viewed.viewed') : $t('applications-page.my-applications-page.not-viewed') }}
        </div>
      </div>
    </div>
    <router-link :to="{ name: 'board.castings.show', params: { slug, id } }" class="section card__section_response">
      <div class="heading_h5 declaration__heading">{{ casting.name | truncate(50) }}</div>
      <div class="response__list response__list_parameters">
        <template v-if="( professions && professions.length )">
          <div>{{ professions.slice(0, 2).join(', ') }} <template v-if="(professions.length > 2)">...</template></div>
        </template>

        <template v-if="( genders && genders.length )">
          <div>{{ genders.join(', ') | truncate(15) }}</div>
        </template>

        <template v-if="( ages )">
          <div>{{ ages }}</div>
        </template>
      </div>
      <div class="response__date color_gray-3">{{ createdAt | moment('DD MMM YYYY') }}</div>
    </router-link>
  </div>
</template>

<script>
  import { has } from '@utils'
  import Casting from '@modules/Board/Casting'
  import { RECEIVED, SELECTED } from '@modules/Board/Casting/Response/Enums/ResponseState'

  export default {
    props: {
      response: {
        type: Object,
        required: true
      }
    },
    data () {
      return {
        has
      }
    },
    computed: {
      casting () {
        return this.response.casting
      },
      id () {
        return this.casting.id
      },
      slug () {
        return this.casting.slug
      },
      professions () {
        return (this.casting.professions && this.casting.professions.length) ? this.casting.professions.map((p => p.text)) : []
      },
      genders () {
        return (this.casting.genders && this.casting.genders.length) ? this.casting.genders.map((gender => gender.text)) : []
      },
      category () {
        return (this.casting.category && has(this.casting.category, 'text')) ? this.casting.category.text : null
      },
      fee () {
        if (!this.casting.fee || (this.casting.fee && this.casting.fee.available === false)) return false
        return Casting.getAmountSemanticCatalog(this.casting.fee)
      },
      ages () {
        let attribute = ''
        if (this.casting.ageFrom || this.casting.ageTo) {
          if (this.casting.ageFrom ) {
            attribute += this.casting.ageTo
              ? this.casting.ageFrom + ' - '
              : 'от ' + this.casting.ageFrom
          }

          if (this.casting.ageTo && this.casting.ageFrom) {
            attribute += this.casting.ageTo
          } else if (this.casting.ageTo && !this.casting.ageFrom) {
            attribute += 'до ' + this.casting.ageTo
          }
        }

        if ((this.casting.ageFrom && this.casting.ageTo) && this.casting.ageFrom === this.casting.ageTo) {
          attribute = this.casting.ageFrom
        }

        return attribute
      },
      createdAt () {
        return this.response.createdAt
      },
      read () {
        return this.response.read
      },
      isReceived () {
        return this.response.state === RECEIVED
      },
      isSelected () {
        return this.response.state === SELECTED
      }
    }
  }
</script>

<style scoped>

</style>
