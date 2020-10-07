<template>
  <mt-popup :class="['lm-m-modal-wrap', 'lm-m-modal-tree-professions']" v-model="value" position="center" :modal="true" @input="_handleInputPopup">
    <div class="modal__content_tree-professions">
      <div class="form_tree-professions">
        <div class="modal__content-professions_header">
          <div class="heading_h4">Выберите профессию</div>
          <div class="description_tree-professions">
            Найдите вашу профессию в списках ниже или воспользуйтесь поиском
          </div>

          <div class="input input_search input_search_feed">
            <svg :class="['icon', 'icon_size_16', 'icon_search', (filterFocused) ? 'icon_fill_blue' : 'icon_fill_lm-gray-3']">
              <use xlink:href="/dist/img/icons/svg/sprite.svg#icon_search"></use>
            </svg>
            <input type="text" name="filterProfessions" ref="filterProfessions" autocomplete="off"
                   v-validate="'max:25'"
                   v-model="tree.filter"
                   @blur="_handleBlurFieldFilterProfessions"
                   @focus="_handleFocusFieldFilterProfessions"
                   placeholder="Поиск"
                   :class="[{ 'error': (verrors.has('filterProfessions')) }, 'input__field', 'input__field_search']">
            <template v-if="(tree.filter)">
              <button class="btn btn_close" @click="_handleClickCloseFiltering"></button>
            </template>
          </div>
        </div>

        <lm-m-loader v-if="loading"></lm-m-loader>
        <template v-if="loading === false && treeData.length">
          <tree :data="treeData" :options="treeOptions" :filter="filter" @node:selected="_handleSetProfession">
            <div class="d-row align_center" slot-scope="{ node }">
              <template v-if="(node.hasChildren() === true)">
                <div class="lm-tree-parent lol">
                  <span>{{ node.text }}</span>
                </div>
              </template>

              <template v-if="(node.hasChildren() === false)">
                <div class="lm-tree-children">
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

        <div class="form__controls__tree-professions">
          <div class="row">
            <button class="btn btn_secondary" @click="_handleCloseModal">
              Назад
            </button>
          </div>
        </div>
      </div>
    </div>
  </mt-popup>
</template>

<script>
  import LiquorTree from 'liquor-tree'

  export default {
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
      _handleInputPopup (value) {
        if (value === false) {
          this._handleCloseModal()
        }
      },
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
        this.filterFocused = false
      },
      _handleFocusFieldFilterProfessions () {
        this.filterFocused = true
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
