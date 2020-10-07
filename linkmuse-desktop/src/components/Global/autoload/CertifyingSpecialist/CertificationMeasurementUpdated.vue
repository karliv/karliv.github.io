<template>
  <div :class="['section', 'section_specialist-parameters']">
    <template v-if="measurement">
      <div class="card card_specialist-parameters card_specialist-parameters_small">
        <div class="card__header">
          <svg class="d-icon d-icon_size_8">
            <use xlink:href="/dist/web/img/icons/svg/sprite.svg#lm-height" />
          </svg>
          <span>Рост</span>
        </div>
        <div class="card__body">
          <span>{{ measurement['height'] }}</span>
          см
        </div>
      </div>
      <div class="card card_specialist-parameters card_specialist-parameters_small">
        <div class="card__header">
          <svg class="d-icon d-icon_size_8">
            <use xlink:href="/dist/web/img/icons/svg/sprite.svg#lm-weight" />
          </svg>
          <span>вес</span>
        </div>
        <div class="card__body">
          <span>{{ measurement['weight'] }}</span>
          кг
        </div>
      </div>
      <div class="card card_specialist-parameters card_specialist-parameters_small">
        <div class="card__header">
          <svg class="d-icon d-icon_size_8">
            <use xlink:href="/dist/web/img/icons/svg/sprite.svg#lm-chest" />
          </svg>
          <span>грудь</span>
        </div>
        <div class="card__body">
          <span>{{ measurement['volume-of-breast'] }}</span>
          см
        </div>
      </div>
      <div class="card card_specialist-parameters card_specialist-parameters_small">
        <div class="card__header">
          <svg class="d-icon d-icon_size_8">
            <use xlink:href="/dist/web/img/icons/svg/sprite.svg#lm-waist" />
          </svg>
          <span>талия</span>
        </div>
        <div class="card__body">
          <span>{{ measurement['waist'] }}</span>
          см
        </div>
      </div>
      <div class="card card_specialist-parameters card_specialist-parameters_small">
        <div class="card__header">
          <svg class="d-icon d-icon_size_8">
            <use xlink:href="/dist/web/img/icons/svg/sprite.svg#lm-hips" />
          </svg>
          <span>бедра</span>
        </div>
        <div class="card__body">
          <span>{{ measurement['hips'] }}</span>
          см
        </div>
      </div>
    </template>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    props: {
      measurement: {
        required: true,
        default: () => {}
      }
    },
    computed: {
      ...mapGetters({
        authRole: 'auth/getRole',
        authUser: 'auth/getAuthUser',
        isAuthorized: 'auth/isAuthorized'
      }),
      authUserIsCustomer () {
        return this.authRole === 'customer'
      }
    }
  }
</script>

<style scoped>

</style>
