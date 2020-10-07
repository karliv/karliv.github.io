<template lang="html">
  <div>
    <div class="cm-m-wrapper-content fh cm-wrap-content mb_6">
      <template v-if="partners">
        <div class="сm-m-wrap-card mb_3" v-for="partner of partnersRows">
          <div class="mr_20">
            <template v-if="partner.photo">
              <media :media="$parent.mediaByUrl(partner.photo)" :type="'photo'" :src="partner.photo">
                <img class="сm-m-wrap-photo-card patner-card cm-m-bg-second" :src="partner.photo" alt="">
              </media>
            </template>
            <template v-else>
              <img class="сm-m-wrap-photo-card patner-card cm-m-bg-second" src="/dist/img/icons/potential_logo_partner.png" alt="">
            </template>
          </div>
          <div class="cm-m-wrap-text-card">
            <div class="cm-m-text-h3 mb_1">
              {{ partner.name }}
            </div>
            <div class="cm-m-text-h4">
              {{ partner.text }}
              <br>
              <a class="partner_link" :href="partner.link" v-if="partner.link">{{ partner.link }}</a>
            </div>
          </div>
        </div>
      </template>
    </div>
  </div>

</template>

<script>
  import { has } from '@utils'
  import { mapGetters, mapActions } from 'vuex'

  export default {
    metaInfo: {
      title: 'Партнеры'
    },
    data () {
      return {}
    },
    async asyncData ({ store, route }) {
      await Promise.all([
        store.dispatch('cinemarket/getPartners')
      ])
    },
    computed: {
      ...mapGetters({
        error: 'cinemarket/getPartnersError',
        partners: 'cinemarket/getPartnersData',
        loading: 'cinemarket/getPartnersLoading',
      }),
      partnersRows () {
        if (!this.partners) return

        let rows = []

        this.partners.name.forEach((e, i) => {
          rows.push({
            name: e,
            text: has(this.partners, `text.${i}`) && this.partners.text[i] ? this.partners.text[i] : '',
            photo: has(this.partners, `photo.${i}`) ? this.partners.photo[i] : '',
            link: has(this.partners, `photo.${i}`) ? this.partners.link[i] : '',
          })
        })

        return rows
      }
    },
  }
</script>

<style lang="sass" scoped>
  .partner_link
    color: white
</style>
