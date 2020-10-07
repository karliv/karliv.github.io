<template>
  <modal class="modal-center modal-abuse modal-tree-professions" v-model="value" @hide="_handleCloseModal" :header="false" :footer="false">
    <div class="modal-abuse-content">
      <div class="modal-abuse-content__wrapper">
        <div class="title ta_left">{{ $t('unified-profile.choose-profession.choose-profession') }}</div>
        <div class="description mt_3 mb_5">
          {{ $t('unified-profile.choose-profession.find') }}<br>
          {{ $t('unified-profile.choose-profession.use-search') }}
        </div>

        <div :class="['d-input', 'd-input_row', 'd-input__search', { 'd-input_search_feed_focused': filterFocused }]">
          <div class="d-row align_center justify_flex-end">

          <span class="d-input__icon d-input__icon_left">
            <svg :class="['d-icon', 'd-icon-search', 'd-icon_size_16', 'fill_gray-3']">
              <use xlink:href="/dist/web/img/icons/svg/sprite.svg#icon_search"></use>
            </svg>
          </span>

            <input type="text" name="filterProfessions" ref="filterProfessions" autocomplete="off"
                   v-validate="'max:25'"
                   v-model="tree.filter"
                   @blur="_handleBlurFieldFilterProfessions"
                   @focus="_handleFocusFieldFilterProfessions"
                   :placeholder="$t('unified-profile.choose-profession.search')"
                   :class="['d-input__field', { 'error': (verrors.has('filterProfessions')) }]">

            <template v-if="(tree.filter)">
            <span class="d-input__icon d-input__icon_right" @click="_handleClickCloseFiltering">
              <svg :class="['d-icon', 'd-icon-close','d-icon_size_16', 'fill_white']">
                <use xlink:href="/dist/web/img/icons/svg/sprite.svg#lm-close-small"></use>
              </svg>
            </span>
            </template>
          </div>
        </div>
      </div>

      <div class="sidebar-dropdown-menu mb_6">
        <lm-loader v-if="loading"></lm-loader>
        <template v-if="loading === false && treeData.length">
          <tree :data="treeData" :options="treeOptions" :filter="filter" @node:selected="_handleSetProfession">
            <div class="d-row align_center" slot-scope="{ node }">
              <template v-if="(node.hasChildren() === true)">
                <div class="lm-tree-parent">
                  <span>{{ node.text }}</span>
                </div>
              </template>

              <template v-if="(node.hasChildren() === false)">
                <div class="lm-tree-parent flex-start-center">
                  <div class="lm-tree-radio-icon mr_2"></div>
                  <span>{{ node.text }}</span>
                </div>
              </template>
            </div>
          </tree>
        </template>
        <template v-if="isEmpty">
          <span class="description">Вы заполнили все профессии.</span>
        </template>
      </div>
    </div>
  </modal>
</template>

<script>

  import LiquorTree from 'liquor-tree'

  export default {
    name: 'CreateProfessionModal',
    components: { Tree: LiquorTree },
    data () {
      return {
        value: false,
        loading: false,
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
              emptyText: `К сожалению, ничего не найдено. <p class="mt_2"> <a href="https://linkmuse.typeform.com/to/KrghZq" target="_blank" class="d-link">Вашей професии нет в списке? Пройдите опрос и мы ее добавим</a></p>`
            }
          }
        }
      }
    },
    computed: {
      treeData () {
        return this.tree.data.filter((i) => i.professions && i.professions.length)
      },
      treeOptions () {
        return this.tree.options
      },
      filter () {
        return this.tree.filter
      },
      filterFocused: {
        get () {
          return this.tree.filterFocused
        },
        set (val) {
          this.tree.filterFocused = val
        }
      },
      isEmpty () {
        return ( this.loading === false && this.treeData.length === 0 )
      }
    },
    mounted () {
      this._fetchTreeProfessions()
    },
    methods: {
      _handleCloseModal ()  {
        this._handleClearModal().then(() => {
          this.$modalRouter.closeAll()
        }).catch(() => {})
      },
      _handleClearModal () {
        return new Promise((resolve, reject) => {
          try {
            this.value = false
            this.loading = false
            this.tree = {
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
                  emptyText: `К сожалению, ничего не найдено. <p class="mt_2"> <a href="https://linkmuse.typeform.com/to/KrghZq" target="_blank" class="d-link">Вашей професии нет в списке? Пройдите опрос и мы ее добавим</a></p>`
                }
              }
            }
            resolve && resolve()
          } catch (e) {
            reject && reject(e)
          }
        })
      },
      _fetchTreeProfessions () {
        return new Promise((resolve, reject) => {
          this.loading = true

          this.$api.get('api/v2/users/professions/helpers/tree').then((response) => {
            const { data: { data } } = response

            this.tree.data = data
            this.loading = false
            resolve()
          }, (response) => {
            this.loading = false
            reject && reject()
            throw new Error("Error fetch professions tree");
          })
        })
      },
      _handleClickCloseFiltering () {
        this.tree.filter = null
      },
      _handleBlurFieldFilterProfessions () {
        this.tree.filterFocused = false
      },
      _handleFocusFieldFilterProfessions () {
        this.tree.filterFocused = true
      },
      _handleSetProfession ({ data }) {
        const { name: profession } = data
        if (profession) {
          this.value = false

          this.$nextTick(() => {
            this.$router.push({ name: 'users.professions.create.profession', params: { profession } })
          })
        }
      }
    }
  }
</script>
