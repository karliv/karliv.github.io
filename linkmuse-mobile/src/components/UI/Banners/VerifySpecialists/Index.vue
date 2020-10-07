<template>
  <router-link @click.native="_handleHide" :to="{ name: isCustomer ? 'certifying.customer.index' : 'certifying.executor.index' }" v-if="0 && isAuthorized && !isHide && !isCertifyingSpecialist && (isCustomer || isModel || isArtist)"
     href="javascript:void(0)" class="lm-banner-header">
    <div class="lm-banner-header-wrapper">
      <div class="left">
        <div class="desc">
          <template v-if="isCustomer">
            <h2>Начни зарабатывать больше</h2>
            <span>C LINKMUSE</span>
          </template>
          <template v-else-if="isModel">
            <h2>Впечатляй своим портфолио</h2>
            <span>Получай приглашения каждый день</span>
          </template>
          <template v-else-if="isArtist">
            <h2>Профессиональное портфолио</h2>
            <span>Твой шанс стать известным</span>
          </template>
        </div>
      </div>
      <div class="right">
        <div class="link">
          <i class="lm-back-icon"></i>
          <router-link @click.native="_handleHide" :to="{ name: isCustomer ? 'certifying.customer.index' : 'certifying.executor.index' }"
                       class="lm-banner-header-button middle">Подробнее
          </router-link>
        </div>
      </div>
    </div>
  </router-link>
</template>

<script>
  import { has } from '@utils'
  import { mapGetters } from 'vuex'

  export default {
    name: 'lm-vs-banner',
    computed: {
      ...mapGetters({
        role: 'auth/getRole',
        user: 'auth/getAuthUser',
        profile: 'auth/getProfile',
        isAuthorized: 'auth/isAuthorized'
      }),
      isCertifyingSpecialist () {
        return (this.isCustomer && this.user && this.user['certifying_specialist_status'] === 'activated')
      },
      isCustomer () {
        return this.role === 'customer'
      },
      isHide () {
        return process.browser ? this.$localStorage.get('banner.vs', false) : null
      },
      isModel () {
        return this.role === 'executor' && has(this.profile, 'raw_anketa.profession.actor')
      },
      isArtist () {
        return this.role === 'executor' && has(this.profile, 'raw_anketa.profession.model')
      },
      isPhotographer () {
        return this.role === 'executor' && has(this.profile, 'raw_anketa.profession.photographer')
      }
    },
    methods: {
      _handleHide () {
        this.$localStorage.set('banner.vs', true)

        if (this.isCustomer === false) {
          if (this.isModel) {
            this.$gtm.trackEvent({ event: 'banner_vs_model' })
          } else if (this.isArtist) {
            this.$gtm.trackEvent({ event: 'banner_vs_akter' })
          }
        } else this.$gtm.trackEvent({ event: 'banner_vs_zakaz' })
      }
    }
  }
</script>

<style scoped>

</style>
