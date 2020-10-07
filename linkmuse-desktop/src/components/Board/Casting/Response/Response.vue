<template>
  <div class="d-card">
    <div class="section d-card__section">
      <div class="d-row justify_between">
        <div class="d-column w_auto">
          <div :class="['d-card__status_response', classColorReadStateResponse]" :style="{ marginBottom: 0 }">{{ read ? 'Просмотрен' : 'Не просмотрен' }}</div>
        </div>
        <div class="d-column w_auto">
          <div class="d-card__date_response">{{ createdAt | moment('DD MMM YYYY') }}</div>
        </div>
      </div>
    </div>
    <router-link :to="{ name: 'board.castings.show', params: { slug, id } }" class="section d-card__section">
      <div class="d-row">
        <div class="d-column">
          <template v-if="casting.name">
            <div class="heading heading_h4">{{ casting.name | truncate(50) }}</div>
          </template>
          <template v-if="casting.description">
            <div class="d-card__description_casting">{{ description | truncate(200) }}</div>
          </template>
          <div class="d-card__list d-card__list_casting-parameters">
            <template v-if="city">
              <div>{{ city.text }}</div>
            </template>
            <template v-if="( professions && professions.length )">
              <div>{{ professions.slice(0, 2).join(', ') }} <template v-if="(professions.length > 2)">...</template></div>
            </template>
            <template v-if="( genders && genders.length )">
              <div>{{ genders.join(', ') | truncate(18) }}</div>
            </template>
            <template v-if="( ages )">
              <div>{{ ages }}</div>
            </template>
          </div>
        </div>
      </div>
    </router-link>
    <div class="section d-card__section">
      <div class="d-row">
        <div class="d-column">
          <div class="d-card__date_casting">
            <span>Дата кастинга:</span>
            <template v-if="(casting.dateStart || casting.dateEnd)">
              <template v-if="casting.dateStart">
                {{ casting.dateEnd ? '' : 'с' }}
                {{ $moment(casting.dateStart, 'DD-MM-YYYY').format('D.MM.YY') }}
              </template>
              <template v-if="casting.dateEnd">
                {{ casting.dateStart ? '-' : 'до' }}
                {{ $moment(casting.dateEnd, 'DD-MM-YYYY').format('D.MM.YY') }}
              </template>
            </template>
            <template v-else>уточняется</template>
          </div>
          <div class="d-card__date_work">
            <span>Дата работы:</span>
            <template v-if="(casting.dateWorkStart || casting.dateWorkEnd)">
              <template v-if="casting.dateWorkStart">
                {{ casting.dateWorkEnd ? '' : 'с' }}
                {{ $moment(casting.dateWorkStart, 'DD-MM-YYYY').format('D.MM.YY') }}
              </template>
              <template v-if="casting.dateWorkEnd">
                {{ casting.dateWorkStart ? '-' : 'до' }}
                {{ $moment(casting.dateWorkEnd, 'DD-MM-YYYY').format('D.MM.YY') }}
              </template>
            </template>
            <template v-else>уточняется</template>
          </div>
          <div class="d-card__fee_casting">
            <template v-if="fee">
              <template v-if="(fee.amount)">{{ fee.amount | currency(fee.currency) }}</template>
              <template v-else>Гонорар обсуждается</template>
            </template>
            <template v-else>Без гонорара</template>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { has } from '@utils'
  import Casting from '@modules/Board/Casting'
  import Response from '@modules/Board/Casting/Response'
  import { RECEIVED, SELECTED } from '@modules/Board/Casting/Response/Enums/ResponseState'

  export default {
    props: {
      response: {
        type: Object,
        required: true
      }
    },
    computed: {
      casting () {
        return this.response.casting
      },
      description () {
        let { description } = this.casting;

        if (description) {
          description = this.$htmlspecialchars(description) // Escape special characters to HTML
          description = this.$markdown(description) // Transform markdown to html
          description = this.$anchorme(description) // find link and to <a>
          description = this.$striptags(description) // find link and to <a>
        }

        return description;
      },
      id () {
        return this.casting.id
      },
      slug () {
        return this.casting.slug
      },
      city () {
        return has(this.casting, 'city.id') ? this.casting.city : null
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
      classColorReadStateResponse () {
        return Response.getResponseReadStateClass(this.read)
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
