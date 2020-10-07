<template lang="html">
  <div>
    <div class="cm-m-wrapper-content fh mb_6">
      <div class="cm-wrap-content">
        <div class="cm-m-banner mb_4">
          <img class="cm-m-banner-img" src="/dist/img/icons/svg/potential_logo.svg" alt="">
        </div>

        <div class="сm-m-wrap-card mb_6">
          <div class="cm-m-wrap-text-card">
            <div class="cm-m-text-h3" v-html="description"></div>
          </div>
        </div>

        <div class="cm-m-text-h2 mb_4">
          Команда
        </div>

        <div class="mb_6">
          <template v-if="team">
            <div class="сm-m-wrap-card mb_3" v-for="item of team">
              <div class="mr_20">
                <template v-if="item.photo">
                  <media :media="$parent.mediaByUrl(item.photo)" :type="'photo'" :src="item.photo">
                    <img class="сm-m-wrap-photo-card cm-m-bg-second" :src="item.photo" alt="">
                  </media>
                </template>
                <template v-else>
                  <img class="сm-m-wrap-photo-card cm-m-bg-second" :src="item.photo" alt="">
                </template>
              </div>
              <div class="cm-m-wrap-text-card">
                <div class="cm-m-text-h3 mb_1">
                  {{ item.name }}
                </div>
                <div class="cm-m-text-h4">
                  {{ item.text }}
                </div>
              </div>
            </div>
          </template>
        </div>

        <div class="cm-m-text-h2 mb_4">
          Направления
        </div>

        <a target="_blank" href="https://potential-platform.com/communication" class="cm-m-wrap-section">
          <div class="cm-list-item cm-m-bg-second">
            <div class="cm-m-text-h3">
              Образовательные мероприятия
            </div>
          </div>
        </a>

        <a target="_blank" href="https://potential-platform.com/contest-all" class="cm-m-wrap-section">
          <div class="cm-list-item cm-m-bg-second">
            <div class="cm-m-text-h3">
              Ежегодные конкурсы
            </div>
          </div>
        </a>

        <a target="_blank" href="https://potential-platform.com/authors" class="cm-m-wrap-section">
          <div class="cm-list-item cm-m-bg-second">
            <div class="cm-m-text-h3">
              Поиск и продажа сценариев
            </div>
          </div>
        </a>

        <a target="_blank" href="https://potential-platform.com/production-center" class="cm-m-wrap-section bb_none">
          <div class="cm-list-item cm-m-bg-second">
            <div class="cm-m-text-h3">
              Съемки кино
            </div>
          </div>
        </a>
      </div>

    </div>
  </div>

</template>

<script>
  import { has } from '@utils'
  import { mapGetters, mapActions } from 'vuex'

  export default {
    metaInfo: {
      title: 'Организатор'
    },
    data () {
      return {}
    },
    async asyncData ({ store, route }) {
      await Promise.all([
        store.dispatch('cinemarket/getOrganization')
      ])
    },
    computed: {
      ...mapGetters({
        error: 'cinemarket/getOrganizationError',
        organization: 'cinemarket/getOrganizationData',
        loading: 'cinemarket/getOrganizationLoading',
      }),
      description () {
        if (!this.organization) return 'Кино.Платформа Potential с 2014 года поддерживает начинающих кинематографистов<br><br>За 5 лет работы мы реализовали 11 кинопроектов, провели более 10 конкурсов, вычитали почти 3000\n' +
          '              сценариев и организовали около 70 профессиональных и зрительских мероприятий'

        return this.organization.description.replace(/\r?\n/g, '<br>')
      },
      team () {
        if (!this.organization) return

        const team = this.organization.team
        let rows = []

        team.name.forEach((e, i) => {
          rows.push({
            name: e,
            text: has(team, `text.${i}`) && team.text[i] ? team.text[i] : '',
            photo: has(team, `photo.${i}`) ? team.photo[i] : ''
          })
        })

        return rows
      }
    },
  }
</script>

<style lang="css" scoped>
</style>
