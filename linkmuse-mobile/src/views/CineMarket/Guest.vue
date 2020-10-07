<template lang="html">
  <div>
    <div class="cm-m-wrapper-content cm-m-bg-prime cm-m-head">
      <div class="cm-m-wrapper-content cm-wrap-content fh">
        <template v-if="guests">
          <template v-for="(type, key) of types">
            <div class="cm-m-text-h2 mb_4">
              {{ type }}
            </div>

            <div class="сm-m-wrap-card mb_3" v-for="guest of guestsRows[key]">
              <div class="mr_20">
                <template v-if="guest.logo">
                  <media :media="$parent.mediaByUrl(guest.logo)" :type="'photo'" :src="guest.logo">
                    <img class="сm-m-wrap-photo-card cm-m-bg-second" :src="guest.logo" alt="">
                  </media>
                </template>
                <template v-else>
                  <img class="сm-m-wrap-photo-card cm-m-bg-second" :src="guest.logo" alt="">
                </template>
              </div>
              <div class="cm-m-wrap-text-card">
                <div class="cm-m-text-h3 mb_0_5">
                  {{ guest.name }}
                </div>
                <div class="cm-m-text-h4">
                  {{ guest.text }}
                </div>
              </div>
            </div>
          </template>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
  import { has } from '@utils'
  import { mapGetters, mapActions } from 'vuex'

  export default {
    metaInfo: {
      title: 'Гости'
    },
    data () {
      return {
        types: [
          'Жюри',
          'Спикеры',
          'Специальные гости'
        ],
        textOfType: [
          'Один из жюри',
          'Один из спикеров',
          'Один из специальных гостей'
        ]
      }
    },
    async asyncData ({ store, route }) {
      await Promise.all([
        store.dispatch('cinemarket/getGuests')
      ])
    },
    computed: {
      ...mapGetters({
        error: 'cinemarket/getGuestsError',
        guests: 'cinemarket/getGuestsData',
        loading: 'cinemarket/getGuestsLoading',
      }),
      guestsRows () {
        if (!this.guests) return

        let res = []

        this.guests.forEach((guests, k) => {
          const rows = []

          guests.name.forEach((e, i) => {
            rows.push({
              name: e,
              text: has(guests, `text.${i}`) && guests.text[i] ? guests.text[i] : this.textOfType[k],
              logo: has(guests, `logo.${i}`) ? guests.logo[i] : ''
            })
          })

          res.push(rows)
        })

        return res
      }
    }
  }
</script>

<style lang="css" scoped>
</style>
