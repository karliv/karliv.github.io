import _ from 'lodash'
import { has } from '@utils'
import { mapGetters } from 'vuex'
import * as filters from '../Enums/Casting'
import { IN, FOR, WITH } from '../Enums/FilterOptionTypes'
import { getDefaultField, getDefaultSource, getFields, getFilter } from '../helpers'

const TITLE = `Кастинги:filter в ${new Date().getFullYear()}`
const DEFAULT_TITLE = 'Кастинги: работа для актёров, моделей, ведущих, танцоров'
const DESCRIPTION = `Ежедневно десятки новых кастингов:filter. Все кастинги проходят проверку модератором`
const DEFAULT_DESCRIPTION = 'Ежедневно десятки новых кастингов для мужчин, девушек и детей. Все кастинги проходят проверку модератором'
const FILTERS_OPTIONS = {
  [filters.SEX]: {
    type: FOR,
    source: 'genders',
    field: 'genderIds',
    phrase ({ value }) {
      return value === 'male' ? 'Мужчин' : 'Женщин'
    }
  },
  [filters.ROLE]: {
    type: FOR,
    source: 'roles',
    field: 'roleIds',
    phrase ({ source }, _this) {
      return source ? _this.$t(`dictionary.casting-role.${source.name}.declension.single.rod`, 'web_ru') : ''
    }
  },
  // [filters.CITY]: {
  //   type: IN,
  //   source: 'cities',
  //   field (source) {
  //     return source ? { cityId: source.id, countryId: 1 } : null
  //   },
  //   phrase ({ source }, _this) {
  //     const city = source.name.toLowerCase().replace(/ /g, '-')
  //     return source ? _this.$te(`dictionary.city.${city}.declension.single.dat`, 'web_ru') ? _this.$te(`dictionary.city.${city}.declension.single.dat`, 'web_ru') : `г. ${source.text}` : ''
  //   },
  //   inQuery (_this, query) {
  //     let param = false
  //
  //     if (!(has(query, 'cityId') && Number(query.countryId) === 1)) return { param, query }
  //
  //     const city = _this.filterSources['cities'].find(e => Number(e.id) === Number(query.cityId))
  //     param = city ? city.name : false
  //
  //     if (param) {
  //       delete query['cityId']
  //       delete query['countryId']
  //     }
  //
  //     return { param, query }
  //   }
  // },
  [filters.CATEGORY]: {
    type: FOR,
    source: 'categories',
    field: 'categoryIds',
    phrase ({ source }, _this) {
      return source ? _this.$t(`dictionary.casting-category.${source.name}.declension.single.rod`, 'web_ru') : ''
    }
  }
}

export function getFieldsFromRoute (route, sources, fields) {
  return getFields(route, sources, fields, filters, FILTERS_OPTIONS)
}

export default {
  data () {
    return {
      seo: {
        filtersData: {},
        filterFields: {},
        filters: {
          [IN]: [],
          [FOR]: [],
          [WITH]: [],
          empty: []
        }
      }
    }
  },
  created () {
    if (this.seoFilter) {
      this.seoGenerate()
      this.updateQueryFilters()
    }
  },
  computed: {
    ...mapGetters({
      filterSources: 'board/casting/getSources'
    }),
    seoFilter () {
      return getFilter(this.$route)
    },
    seoTitle () {
      if (!this.seoFilter) return DEFAULT_TITLE

      const filter = this.getFilterString()

      return filter ? TITLE.replace(':filter', filter) : DEFAULT_TITLE
    },
    seoDescription () {
      if (!this.seoFilter) return DEFAULT_DESCRIPTION

      const filter = this.getFilterString(true)

      return filter ? DESCRIPTION.replace(':filter', filter) : DEFAULT_DESCRIPTION
    }
  },
  methods: {
    getFilterString (description) {
      const filtersFinal = this.getFiltersFinal(description)
      const gender = !!description || this.seo.filtersData[filters.SEX] ? '' : ' для мужчин, девушек и детей'

      let str = ' '

      for (let type in filtersFinal) {
        str += type === IN ? String(gender) : filtersFinal[type].length ? ` ${type !== 'empty' ? `${type} ` : ''}${filtersFinal[type].join(',')}` : ''
      }

      return str
    },
    getFiltersFinal (description) {
      let filtersFinal = {}

      for (let type in this.seo.filters) {
        filtersFinal[type] = this.seo.filters[type].filter(e => !!e).map(e => e[+!!description])
      }

      return filtersFinal
    },
    getDefaultPhrase ({ source }) {
      return source ? source.text : ''
    },
    getDefaultField (source, field) {
      return getDefaultField(source, field)
    },
    getDefaultSource (value, key) {
      return getDefaultSource(value, key, this.filterSources)
    },
    seoFilterInQuery ({ field, source }, query) {
      let param = false

      if (!(has(query, field) && query[field].length === 1)) return { param, query }

      const val = Number(query[field][0])

      source = Number.isNaN(val) ? { name: query[field][0] } : this.filterSources[source].find(e => Number(e.id) === val)
      param = source ? source.name : false

      if (param) delete query[field]

      return { param, query }
    },
    seoGenerate () {
      if (!this.seoFilter) return

      this.seo = {
        filtersData: {},
        filterFields: {},
        filters: {
          [IN]: [],
          [FOR]: [],
          [WITH]: [],
          empty: []
        }
      }

      this.seoFilter.forEach(part => {
        for (let key in filters) {
          const filterKey = filters[key]

          if (!part.includes(`${filterKey}-`) || !has(FILTERS_OPTIONS, filters[key])) continue

          const filter = FILTERS_OPTIONS[filterKey]
          const type = has(filter, 'type') ? filter.type : 'empty'
          const value = part.replace(`${filterKey}-`, '').toLowerCase()
          const source = typeof filter.source === 'function' ? filter.source(value) : this.getDefaultSource(value, filter.source)
          const filterField = typeof filter.field === 'function' ? filter.field(source) : this.getDefaultField(source, filter.field)
          const phrase = has(filter, 'phrase') ? [filter.phrase({
            source,
            value
          }, this)] : [this.getDefaultPhrase({ source })]

          phrase.push(has(filter, 'phraseDescription') ? filter.phraseDescription({ source, value }, this) : phrase[0])

          this.seo.filters[type].push(phrase)
          this.seo.filtersData[filterKey] = true
          this.seo.filterFields = { ...filterField, ...this.seo.filterFields }
        }
      })
    },
    updateQueryFilters () {
      if (Object.keys(this.seo.filterFields).length) {
        this._.merge(this.fields, this.seo.filterFields)
      }
    },
    getSeoRouterParams (q) {
      let filter = []
      let params = {}
      let query = this._.cloneDeep(q)

      for (let key in filters) {
        if (!has(FILTERS_OPTIONS, filters[key])) continue

        const options = FILTERS_OPTIONS[filters[key]]

        let { param, query: newQuery } = has(options, 'inQuery') ? options.inQuery(this, query) : this.seoFilterInQuery(options, query)

        query = newQuery

        if (param) {
          filter.push(`${filters[key]}-${param}`)
          /**
           * TODO multi filters
           */
          break
        }
      }

      if (!Object.keys(query).length && filter.length) {
        params.filter = filter.join('/')

        return { query, params }
      }

      return { query: q, params }
    }
  }
}
