<template lang="html">
  <div>
    <div class="cm-m-wrapper-content cm-m-bg-prime cm-m-head">
      <div class="cm-wrap-content">
        <div class="cm-m-row">
          <nav class="cm-m-nav-date center">
            <div class="cm-m-nav-list-date">
              <template v-for="(day, key) of days">
                <a @click="activeDay = key"
                   :class="['cm-m-nav-item-date', { 'active': activeDay === key, 'cm-m-color-prime': activeDay === key }]">
                  {{ day.text }}
                </a>
              </template>
            </div>
          </nav>
        </div>
      </div>
    </div>

    <div class="cm-m-wrapper-content fh">
      <lm-m-loader v-if="loading"></lm-m-loader>
      <div class="cm-wrap-content">
        <template v-if="program">
          <template v-for="day of program">
            <transition name="fade" mode="out-in">
              <div v-if="day.date === activeDay">
                <div v-for="row of programRows[day.date]" class="cm-m-wrap-program mb_3"
                     @click="_handleNavPitches(row.pitches)">
                  <div class="cm-m-container-time-program">
                    <div class="cm-m-text-h3 mb_0_5">{{ row.timeFrom }}</div>
                    <div class="cm-m-text-h3 cm-m-color-gray">{{ row.timeTo }}</div>
                  </div>
                  <div class="cm-m-container-text-program cm-m-bg-second">
                    <div class="cm-m-text-h3 lh-18 mb_0_5 ">
                      {{ row.text }}
                    </div>
                    <div class="cm-m-text-h4 cm-m-color-gray">
                      {{ row.place }}
                    </div>
                  </div>
                </div>
              </div>
            </transition>
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
      title: 'Программа'
    },
    data () {
      return {
        activeDay: '25.10',
        days: {
          '25.10': {
            text: '25 Окт'
          },
          '26.10': {
            text: '26 Окт'
          },
          '27.10': {
            text: '27 Окт'
          }
        }
      }
    },
    async asyncData ({ store, route }) {
      await Promise.all([
        store.dispatch('cinemarket/getProgram')
      ])
    },
    computed: {
      ...mapGetters({
        error: 'cinemarket/getProgramError',
        program: 'cinemarket/getProgramData',
        loading: 'cinemarket/getProgramLoading',
      }),
      programRows () {
        if (!this.program) return

        let res = {}

        this.program.forEach(program => {
          const rows = []

          program.timeFrom.forEach((e, i) => {
            const item = {
              timeFrom: e,
              text: has(program, `text.${i}`) ? program.text[i] : '',
              place: has(program, `place.${i}`) ? program.place[i] : '',
              timeTo: has(program, `timeTo.${i}`) ? program.timeTo[i] : '',
            }
            rows.push({ ...item, pitches: item.text.toLowerCase().includes('питчинг') })
          })

          res[program.date] = rows
        })

        return res
      }
    },
    methods: {
      _handleNavPitches (val) {
        if (val) this.$router.push({ name: 'cinemarket.pitches' })
      }
    }
  }
</script>

<style lang="css" scoped>
</style>
