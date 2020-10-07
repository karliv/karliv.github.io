<template>
  <div class="page_declaration_creating page-profile page-inner">
    <div class="d-row justify_center pt_12">
      <div class="page__body page__body_declaration_creating_second">
        <div class="section_declaration_creating section_declaration_creating_big flex-beetwen-bottom pt_0">
          <div class="min-w_157px">
            <div class="d-row mb_3">
              <ul class="d-breadcrumbs">
                <li class="d-breadcrumbs__item"><a href="#">Профессионалы</a></li>
                <li class="d-breadcrumbs__item"><a href="#">{{profession.name}}</a></li>
                <li class="d-breadcrumbs__item"><a href="#">{{profession.role}}</a></li>
              </ul>
            </div>

            <div class="d-row mb_3">
              <div class="heading heading_h2 mb_0">{{ profession.name }}</div>
            </div>

            <div class="column color_gray-1">
              <span>{{profession.city}}</span>
              <span>{{profession.age}} лет</span>
            </div>
          </div>

          <div class="avatar-container">
            <img src="https://7k4lcn62eg.execute-api.eu-central-1.amazonaws.com/dev/upload/boards/casting/references/0P/jZ/0PjZ5U0VQW9qtbQxUOMsAqYhFbDOSZ9FjQ3e5qoA-128x128.jpg"
                 alt="" class="d-img">
          </div>
        </div>

        <div class="section_declaration_creating section_declaration_creating_big">
          <div class="d-row">
            <div class="page-inner__label-title">Профессия</div>
            <div class="page-inner_bold">{{profession.role}}</div>
          </div>

          <div class="d-row mt_4">
            <div class="page-inner__label-title">Игровой возраст</div>
            <div class="page-inner_bold">от {{profession.role_age_from}} – до {{profession.role_age_to}} лет</div>
          </div>

          <div class="d-row mt_4">
            <div class="page-inner__label-title">Направления</div>
            <div class="page-inner_bold">{{profession.directions}}</div>
          </div>

          <template v-if="profession.theater_service">
            <div class="d-row mt_4">
              <div class="page-inner__label-title max">Служба в театрах</div>
              <div class="page-inner_bold">{{profession.theater_service}}</div>
            </div>
          </template>

          <template v-if="profession.awards">
            <div class="d-row mt_4">
              <div class="page-inner__label-title">Конкурсы и награды</div>
              <div class="page-inner_bold">{{profession.awards}}</div>
            </div>
          </template>
        </div>

        <template v-if="profession.growth || profession.weight || profession.shoe_size || profession.clothing_size ||
        profession.body_type || profession.type_appearance || profession.eyes_color || profession.hair_color ||
        profession.hair_length || profession.dyed_hair || profession.tattoos || profession.piercings">
          <div class="section_declaration_creating section_declaration_creating_big">
            <template v-if="profession.growth">
              <div class="d-row">
                <div class="page-inner__label-title">Рост (см)</div>
                <div class="page-inner_bold">{{profession.growth}}</div>
              </div>
            </template>

            <template v-if="profession.weight">
              <div class="d-row mt_4">
                <div class="page-inner__label-title">Вес (кг)</div>
                <div class="page-inner_bold">{{profession.weight}}</div>
              </div>
            </template>

            <template v-if="profession.shoe_size">
              <div class="d-row mt_4">
                <div class="page-inner__label-title">Размер обуви</div>
                <div class="page-inner_bold">{{profession.shoe_size}}</div>
              </div>
            </template>

            <template v-if="profession.clothing_size">
              <div class="d-row mt_4">
                <div class="page-inner__label-title max">Размер одежды</div>
                <div class="page-inner_bold">{{profession.clothing_size}}</div>
              </div>
            </template>

            <template v-if="profession.body_type">
              <div class="d-row mt_4">
                <div class="page-inner__label-title">Телосложение</div>
                <div class="page-inner_bold">{{profession.body_type}}</div>
              </div>
            </template>

            <template v-if="profession.type_appearance">
              <div class="d-row mt_4">
                <div class="page-inner__label-title">Тип внешности</div>
                <div class="page-inner_bold">{{profession.type_appearance}}</div>
              </div>
            </template>

            <template v-if="profession.eyes_color">
              <div class="d-row mt_4">
                <div class="page-inner__label-title">Цвет глаз</div>
                <div class="page-inner_bold">{{profession.eyes_color}}</div>
              </div>
            </template>

            <template v-if="profession.hair_color">
              <div class="d-row mt_4">
                <div class="page-inner__label-title">Цвет волос</div>
                <div class="page-inner_bold">{{profession.hair_color}}</div>
              </div>
            </template>

            <template v-if="profession.hair_length">
              <div class="d-row mt_4">
                <div class="page-inner__label-title">Длина волос</div>
                <div class="page-inner_bold">{{profession.hair_length}}</div>
              </div>
            </template>

            <template v-if="profession.dyed_hair || profession.tattoos || profession.piercings">
              <div class="d-row mt_4">
                <div class="page-inner__label-title">Дополнительно</div>
                <div class="page-inner_bold">
                  {{profession.dyed_hair ? 'Окрашенные волосы, ' : ''}}
                  {{profession.tattoos ? 'татуировки, ' : ''}}
                  {{profession.piercings ? 'пирсинг' : ''}}
                </div>
              </div>
            </template>
          </div>
        </template>

        <template v-if="profession.projects">
          <div class="section_declaration_creating section_declaration_creating_big">
            <template v-for="(item, index) in profession.projects">
              <div :class="['d-row', {'mt_6' : index >= 1, '' : index === 0}]" :key="item.id">
                <div class="page-inner__label-title">Проект</div>
                <div>
                  <div class="page-inner_bold">
                    {{item.project_name}}
                  </div>
                  <div class="page-inner_normal mt_1" v-if="item.description">
                    {{item.description}}
                  </div>
                </div>
              </div>
            </template>
          </div>
        </template>

        <template v-if="profession.education">
          <div class="section_declaration_creating section_declaration_creating_big">
            <template v-for="(item, index) in profession.education">
              <div :class="['d-row', {'mt_6' : index >= 1, '' : index === 0}]" :key="item.id">
                <div class="page-inner__label-title">Высшее образование</div>
                <div>
                  <div class="page-inner_bold">{{item.university}} ({{item.years_study}})</div>
                  <div class="page-inner_normal mt_1" v-if="item.supervisor">{{item.supervisor}}</div>
                  <div class="mt_3" v-if="item.specialty || item.description">
                    <div class="page-inner_semi-bold" v-if="item.specialty">{{item.specialty}}</div>
                    <div class="page-inner_normal" :style="{marginTop: item.specialty ? '2px' : '0'}" v-if="item.description">{{item.description}}</div>
                  </div>
                </div>
              </div>
            </template>
          </div>
        </template>

        <template v-if="profession.trainings">
          <div class="section_declaration_creating section_declaration_creating_big">
            <template v-for="(item, index) in profession.trainings">
              <div :class="['d-row', {'mt_6' : index >= 1, '' : index === 0}]" :key="item.id">
                <div class="page-inner__label-title">Повышение квалификации</div>
                <div>
                  <div class="page-inner_bold">{{item.organization}} ({{item.years_study}})</div>
                  <div class="page-inner_normal mt_1" v-if="item.teacher">{{item.teacher}}</div>
                  <div class="mt_3" v-if="item.thing || item.description">
                    <div class="page-inner_semi-bold" v-if="item.thing">{{item.thing}}</div>
                    <div class="page-inner_normal" :style="{marginTop: item.thing ? '2px' : '0'}" v-if="item.description">{{item.description}}</div>
                  </div>
                </div>
              </div>
            </template>
          </div>
        </template>

        <template v-if="portfolio && portfolio.length">
          <div class="section_declaration_creating section_declaration_creating_big">
            <div class="d-row mt_4">
              <div class="min-w_157px mr_3">Портфолио</div>
              <div class="gallery gallery_casting">
                <collapse v-model="profession.collapse['portfolio']">
                  <div class="gallery__content gallery__content_casting">

                    <media type="photo" :src="item['paths']['original']" :media="item" v-for="item in portfolio.slice(0, 4)" :key="`reference-${item.id}`">
                      <img :src="item['paths']['128x128']" :alt="profession.name" class="d-img">
                    </media>

                    <template v-if="(portfolio.length > 2)">
                      <template v-if="profession.collapse['lists']['portfolio']">
                        <media type="photo" :src="item['paths']['original']" :media="item" v-for="item in portfolio.slice(4)" :key="`reference-${item.id}`">
                          <img :src="item['paths']['128x128']" :alt="profession.name" class="d-img">
                        </media>
                      </template>
                    </template>

                    <div class="d-row lm-flex-end mt_3" @click="_handleClickToggleCollapseLists('portfolio')"
                         :style="{ cursor: 'pointer' }">
                      <div class="page-profile__text_1 color_main mr_1">{{!profession.collapse['lists']['portfolio'] ? `Показать все (${portfolio.length})` : 'Скрыть'}}</div>
                      <svg :class="['d-icon', 'd-icon_size_16', 'fill_main', {  rotate_180: (profession.collapse['lists']['portfolio']) }]">
                        <use xlink:href="/dist/web/img/icons/svg/sprite.svg#lm-chevron-bottom"></use>
                      </svg>
                    </div>

                  </div>
                </collapse>
              </div>
            </div>
          </div>
        </template>

        <template v-if="(hasContacts === true)">
          <div class="section_casting section_casting_big">
            <template v-if="(hideContacts === true)">
              <div class="d-row">
                <div class="min-w_157px mr_3">Контакты</div>
                <div class="fw_600 color_gray-1">
                  <div class="section_contacts_action">
                    <span>Для просмотра нажмите «Показать контакты»</span>
                    <button @click="_handleShowContacts" class="d-btn d-btn_primary">Показать контакты</button>
                  </div>
                </div>
              </div>
            </template>
            <template v-else>
              <template v-if="(phone)">
                <div class="d-row">
                  <div class="min-w_157px mr_3">Телефон</div>
                  <div class="fw_600 color_gray-1">
                    <a class="fw_600 color_gray-1" :href="`tel:${phone}`" target="_self">{{ phone }}</a>
                  </div>
                </div>
              </template>
              <template v-if="(email)">
                <div class="d-row mt_4">
                  <div class="min-w_157px mr_3">E-mail</div>
                  <div class="fw_600 color_gray-1" v-html="$anchorme(email)"></div>
                </div>
              </template>
              <template v-if="(otherContact)">
                <div class="d-row mt_4">
                  <div class="min-w_157px mr_3">Другое</div>
                  <div class="fw_600 color_gray-1" v-html="$anchorme(otherContact)"></div>
                </div>
              </template>
            </template>
          </div>
        </template>

        <template v-if="(isCurrentUser === false || (isCurrentUser === true && (isPublished )))">
          <div class="section_casting section_casting_big">
            <div class="d-row">
              <div class="d-row w_100 lm-flex-end">
                <div class="section_casting_small">
                  <template v-if="(isArchived === true || isPublished === true)">
                    <social-share-updated :hover="true" :url="(APP_URL + href)" :clipboard="true" position="top" :title="title" :description="$truncate(this.$striptags(description), 50)" class="d-btn_round mr_4 flex_1">
                      <svg class="d-icon d-icon_size_sm">
                        <use xlink:href="/dist/web/img/icons/svg/sprite.svg#icon_share" />
                      </svg>
                    </social-share-updated>
                  </template>
                  <template v-if="(isCurrentUser === false)">
                    <button class="d-btn d-btn_secondary_filled">Пожаловаться</button>
                  </template>
                  <template v-if="(isCurrentUser === true && (isPublished ))">
                    <button class="d-btn d-btn_secondary_filled">
                      <div>снять с публикации</div>
                    </button>
                  </template>
                </div>
              </div>
            </div>
          </div>
        </template>

      </div>


      <div class="sidebar page__sidebar page__sidebar_declaration_creating">
        <div class="sidebar__content" style="z-index: 10; position: sticky; top: 104px;">
          <div class="section_casting section_casting_big bt_none pt_0">
            <div class="d-list d-list_casting-info">
              <template v-if="(isPublished === true)">
                <div class="d-list__item">
                  <div class="casting__creation-date">{{ isToday(profession.publishedAt) ? `Сегодня, ${$moment(profession.publishedAt).format('HH:mm')}` : $moment(profession.publishedAt).format('DD MMM YYYY, HH:mm') }}</div>
                </div>
              </template>
            </div>

            <div class="d-column">
              <div class="heading heading_h2">
                <template v-if="( fee )">
                  <template v-if=(fee.amount)>
                    {{ fee.amount | currency(fee.currency) }} <template v-if="(fee.type)">/ {{ fee.type | lowercase }}</template>
                  </template>
                  <template v-else>Гонорар обсуждается</template>
                </template>
                <template v-else>Без гонорара</template>
              </div>

              <div class="color_gray-1">Готов принять участие в студенческих, короткометражных или некоммерческих проектах</div>

              <template v-if="isArchived">
                <button class="d-btn d-btn_primary w_100 mt_12" >Опубликовать</button>
              </template>
              <template v-else>
                <button class="d-btn d-btn_outline w_100 mt_12" >Редактировать</button>
              </template>
            </div>
          </div>
        </div>
      </div>
    </div>
    <lm-main-footer class="footer-static grey"></lm-main-footer>
  </div>
</template>

<script>
  const APP_URL = process.env.APP_URL;

  import { has, HEADER_HEIGHT } from '@utils'
  import { Collapse } from 'uiv'

  import formBoard from '@modules/Board/mixins/form.js'
  import formCasting from '@modules/Board/Casting/mixins/form.js'

  export default {
    mixins: [formBoard, formCasting],
    metaInfo: {
      title: 'Евгений Белоусов | Актёр'
    },

    async asyncData ({ store }) {
      await Promise.all([
        store.dispatch('board/casting/getSources'),
        store.dispatch('board/casting/clearCastingFields')
      ])
    },
    components: { Collapse },

    data () {
      return {
        APP_URL,
        edit: false,
        hideContacts: true,
        tabProfession: '',
        current_user: true,
        published: true,
        archived: false,

        href: '/boards/castings/kasting_v_korotkiy_metr-1068?ref=22819',


        profession: {
          name: 'Евгений Белоусов',
          phone: '+79991111111',
          email: 'dfj@dgfjf.jf',
          other: '79991111111',
          role: 'Актёр',
          city: 'Санкт-Петербург',
          age: 25,
          publishedAt: "2019-07-25T15:04:30+03:00",


          role_age_from: '25',
          role_age_to: '28',
          directions: 'Массовка, Реклама, Выставки',
          theater_service: 'Театр Моссовета',
          awards: 'Голос, январь - март 2018, финалист',


          growth: '185',
          weight: '72',
          shoe_size: '42',
          clothing_size: '42 – 44',
          body_type: 'Обычное',
          type_appearance: 'Европейская',
          eyes_color: 'Карий',
          hair_color: 'Шатен',
          hair_length: 'Короткие',
          dyed_hair: false,
          tattoos: true,
          piercings: true,

          projects: [
              {
                  id: 1,
                  project_name: 'Вечерний Ургант',
                  description: 'Художник-постановщик в 16-17 годах',
              },
              {
                  id: 2,
                  project_name: 'Поле чудес',
                  description: 'Художник-постановщик в 17-18 годах',
              }
          ],
          education: [
              {
                  id: 1,
                  university: 'МГИК',
                  years_study: '2015 - 2019',
                  specialty: 'Режиссура и драма',
                  supervisor: 'Котт Александр Константинович',
                  description: 'Отучился на режиссера и актера. Имею красный диплом. Мой учебный фильм удостоился премии',
              },
              {
                  id: 2,
                  university: 'ГИТИС',
                  years_study: '2010 - 2015',
                  specialty: 'Художник кино и телевидения',
                  //supervisor: 'Котт Александр Константинович',
                  description: 'Отучился на художника-постановщика и получил приглашение в Останкино',
              }
          ],
          trainings: [
              {
                  id: 1,
                  organization: 'МосКино',
                  years_study: '2015 - 2019',
                  thing: 'Режиссура игровых сцен',
                  teacher: 'Скопина Яна Алексеевна',
                  description: 'Игровые сцены в малых группах, в больших группах, массовые сцены',
              }
          ],

          portfolio: [
              {"id":171,"paths":{"128x128":"https://7k4lcn62eg.execute-api.eu-central-1.amazonaws.com/dev/upload/boards/casting/references/0P/jZ/0PjZ5U0VQW9qtbQxUOMsAqYhFbDOSZ9FjQ3e5qoA-128x128.jpg","original":"https://7k4lcn62eg.execute-api.eu-central-1.amazonaws.com/dev/upload/boards/casting/references/0P/jZ/0PjZ5U0VQW9qtbQxUOMsAqYhFbDOSZ9FjQ3e5qoA-1280x_.jpg"},"sizes":{"width":800,"height":510}},
              {"id":172,"paths":{"128x128":"https://7k4lcn62eg.execute-api.eu-central-1.amazonaws.com/dev/upload/boards/casting/references/5p/iW/5piW2ylMRmQU4czt5jUQzPInvRPIVgF3dsPbNl0S-128x128.jpg","original":"https://7k4lcn62eg.execute-api.eu-central-1.amazonaws.com/dev/upload/boards/casting/references/5p/iW/5piW2ylMRmQU4czt5jUQzPInvRPIVgF3dsPbNl0S-1280x_.jpg"},"sizes":{"width":660,"height":900}},
              {"id":173,"paths":{"128x128":"https://7k4lcn62eg.execute-api.eu-central-1.amazonaws.com/dev/upload/boards/casting/references/Nb/Zq/NbZqvlJhjWHZvz0xeqezTtnY6w6VxRlRbbhvrMoo-128x128.jpeg","original":"https://7k4lcn62eg.execute-api.eu-central-1.amazonaws.com/dev/upload/boards/casting/references/Nb/Zq/NbZqvlJhjWHZvz0xeqezTtnY6w6VxRlRbbhvrMoo-1280x_.jpeg"},"sizes":{"width":800,"height":600}},
              {"id":174,"paths":{"128x128":"https://7k4lcn62eg.execute-api.eu-central-1.amazonaws.com/dev/upload/boards/casting/references/Nd/d7/Ndd77xnjSVz1D51UTWqQmrPt3gCWqMKQKhxEtGCz-128x128.jpg","original":"https://7k4lcn62eg.execute-api.eu-central-1.amazonaws.com/dev/upload/boards/casting/references/Nd/d7/Ndd77xnjSVz1D51UTWqQmrPt3gCWqMKQKhxEtGCz-1280x_.jpg"},"sizes":{"width":1366,"height":2048}},
              {"id":175,"paths":{"128x128":"https://7k4lcn62eg.execute-api.eu-central-1.amazonaws.com/dev/upload/boards/casting/references/Nd/d7/Ndd77xnjSVz1D51UTWqQmrPt3gCWqMKQKhxEtGCz-128x128.jpg","original":"https://7k4lcn62eg.execute-api.eu-central-1.amazonaws.com/dev/upload/boards/casting/references/Nd/d7/Ndd77xnjSVz1D51UTWqQmrPt3gCWqMKQKhxEtGCz-1280x_.jpg"},"sizes":{"width":1366,"height":2048}}
          ],

          collapse: {
              portfolio: true,
              lists: {
                  roles: false,
                  portfolio: false
              }
          },
        }
      }
    },

    computed: {
      title () {
        return 'Евгений Белоусов'
      },
      isCurrentUser () {
          return this.current_user;
      },
      isPublished () {
          return this.published;
      },
      isArchived () {
          return this.archived;
      },

      contentTooltipFee () {
          return `<div style="max-width: 226px; width: 226px">
          <span style="display: block; margin: 0;">
              Включите фильтр, если вы готовы работать в студенческих, короткометражных или некоммерческих проектах
          </span>
        </div>`;
      },

      contentTooltipParticipation () {
          return `<div style="max-width: 226px;">
          <span style="display: block; margin: 0;">
              Добавьте данные, если вы уже участвовали или участвуете в данный момент в проектах
          </span>
        </div>`;
      },

      contentTooltipEducation () {
          return `<div style="max-width: 226px;">
          <span style="display: block; margin: 0;">
              Добавьте данные, если вы уже получили или получаете в данный момент высшее образование
          </span>
        </div>`;
      },

      contentTooltipTraining () {
          return `<div style="max-width: 226px;">
        <span style="display: block; margin: 0;">
            Добавьте данные, если вы уже прошли или проходите в данный момент дополнительное обазование, курсы
        </span>
      </div>`;
      },

      hasContacts () {
          return ( Boolean(this.phone) || Boolean(this.email) || Boolean(this.otherContact))
      },
      phone () {
          return (has(this.profession, 'phone') && this.profession['phone']) ? this.profession['phone'] : null
      },
      email () {
          return (has(this.profession, 'email') && this.profession['email']) ? this.profession['email'] : null
      },
      otherContact () {
          return (has(this.profession, 'other') && this.profession['other']) ? this.profession['other'] : null
      },
      portfolio () {
        return (this.profession.portfolio && this.profession.portfolio.length) ? this.profession.portfolio : []
      },
    },

    methods: {
      // _tabTrim () {
      //     let lengthWord = this.tabProfession.trim().split(/\s+/);
      //     for (let i = 0; i < lengthWord.length; i++) {
      //         lengthWord[i] = `<span>${lengthWord[i]}</span>`;
      //         console.log(lengthWord.length);
      //     }
      //
      //     document.getElementById('additionTags').innerHTML = lengthWord.join(' ');
      // },

      isToday(date) {
          let context = this.$moment(date);
          return this.$moment().isSame(context, 'd')
      },

      _scrollToErrorFields () {
        let el = document.getElementsByClassName('error');

        if (el && el.length) this.$scrollTo(el[0], 500, {  offset: (-40 - HEADER_HEIGHT) })
      },

      _handleShowContacts () {
          this.hideContacts = false;
      },

      _handleClickToggleCollapseLists (field) {
          this.profession.collapse['lists'][field] = !this.profession.collapse['lists'][field]
      },
    }
  }
</script>

<style lang="sass">

</style>
