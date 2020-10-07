<template>
  <div class="modal modal-center modal-abuse modal-tree-professions d-text fade in" style="display: block">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-body">
          <div class="modal-abuse-content">
            <div class="d-column align_center mt_8">
              <div class="heading heading_h4 mb_6">Аудитория</div>

              <div class="nav_categories d-row justify_center">
                <a href="javascript:void(0)" class="nav__item nav__item_active d-text_bold color_gray-3">Коллеги 4</a>
                <a href="javascript:void(0)" class="nav__item d-text_bold color_gray-3 ml_6">Подписчики 999</a>
                <a href="javascript:void(0)" class="nav__item d-text_bold color_gray-3 ml_6">Подписки 5</a>
              </div>
            </div>

            <div :class="['modal-abuse-content__wrapper', {'modal-abuse-content_fixed': count, 'modal__content_body-empty': !count}]">
              <template v-if="count">
                <div :class="['d-input', 'd-input_row', 'd-input__search', { 'd-input_search_feed_focused': filterFocused }]">
                  <div class="d-row align_center justify_flex-end">
                    <span class="d-input__icon d-input__icon_left">
                      <svg :class="['d-icon', 'd-icon-search', 'd-icon_size_16', 'fill_gray-3']">
                        <use xlink:href="/dist/web/img/icons/svg/sprite.svg#icon_search"></use>
                      </svg>
                    </span>

                    <input type="text" name="filterProfessions" ref="filterProfessions" autocomplete="off"
                           v-validate="'max:25'"
                           v-model="modal.tree.filter"
                           @blur="_handleBlurFieldFilterProfessions"
                           @focus="_handleFocusFieldFilterProfessions"
                           placeholder="Поиск"
                           :class="['d-input__field', { 'error': (verrors.has('filterProfessions')) }]">

                    <template v-if="(modal.tree.filter)">
                      <span class="d-input__icon d-input__icon_right" @click="_handleClickCloseFiltering">
                        <svg :class="['d-icon', 'd-icon-close','d-icon_size_16', 'fill_white']">
                          <use xlink:href="/dist/web/img/icons/svg/sprite.svg#lm-close-small"></use>
                        </svg>
                      </span>
                    </template>
                  </div>
                </div>

                <div class="personal-list d-column">
                  <div class="personal-list__item d-row">
                    <a href="javascript:void(0)" class="d-column w_auto mr_4">
                      <img src="dist/img/no_image_user.png" alt="" class="d-img d-img_size_40 border-radius_8">
                    </a>

                    <div class="flex-beetwen-center w_100">
                      <a href="javascript:void(0)" class="d-column w_100">
                        <div class="d-text_bold color_gray-1" style="margin-bottom: 2px;">
                          Дмитрий Носик
                        </div>

                        <div class="d-text_small color_gray-2">
                          санкт-петербург, 30 лет
                        </div>
                      </a>

                      <a href="javascript:void(0)" :class="['d-row', 'd-text_bold', 'w_auto', {'color_gray-3': true}]">Удалить</a>
                    </div>
                  </div>
                </div>
              </template>

              <template v-else>
                <div class="d-card d-card_feed-plug">
                  <svg class="d-icon d-icon_size_64 fill_main mb_5">
                    <use xlink:href="/dist/web/img/icons/svg/sprite.svg#icon_info"/>
                  </svg>
                  <div class="heading heading_h5">Тут будут ваши коллеги</div>
                  <div class="ta_center mb_4 color_gray-1">Мы покажем их, как только вы<br> кого-нибудь добавите</div>
                </div>
              </template>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        count: 1,
        modal: {
          tree: {
            data: [],
            filter: '',
            filterFocused: false,
            options: {
              multiple: false,
              propertyNames: {
                text: 'text',
                children: 'professions'
              },
              filter: {
                matcher (query, node) {
                  return new RegExp(query.toLowerCase().replace(/ё/g,"е").replace(/-/g," "), 'i')
                    .test(node.text.toLowerCase().replace(/ё/g,"е").replace(/-/g," "))
                },
                emptyText: 'К сожалению, ничего не найдено'
              }
            }
          },
          value: false,
          loading: false
        }
      }
    },
    computed: {
      treeData () {
        return this.modal.tree.data.filter((i) => i.professions && i.professions.length)
      },
      treeOptions () {
        return this.modal.tree.options
      },
      filter () {
        return this.modal.tree.filter
      },
      filterFocused: {
        get () {
          return this.modal.tree.filterFocused
        },
        set (val) {
          this.modal.tree.filterFocused = val
        }
      },
      loading () {
        return this.modal.loading
      },
      isEmpty () {
        return ( this.loading === false && this.treeData.length === 0 )
      }
    },
    methods: {
      _handleBlurFieldFilterProfessions () {
        this.filterFocused = false
      },
      _handleFocusFieldFilterProfessions () {
        this.filterFocused = true
      },
    }
  }
</script>
