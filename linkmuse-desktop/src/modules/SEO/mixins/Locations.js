import _ from 'lodash'
import { has } from '@utils'
import { mapGetters } from 'vuex'
import * as filters from '../Enums/Locations'
import { IN, FOR, WITH } from '../Enums/FilterOptionTypes'
import * as equip from '@modules/Board/Location/Enums/LocationEquip'
import { getDefaultField, getDefaultSource, getFields, getFilter } from '../helpers'

const TITLE = `Каталог локаций::filter для съёмок кино, сериалов, рекламы, клипов, документальных фильмов`
const DEFAULT_TITLE = 'Каталог локаций для съёмок кино, сериалов, рекламы, клипов, роликов, документальных фильмов'
const DESCRIPTION = `Множество локаций::filter. Все объявления проходят проверку модератором`
const DEFAULT_DESCRIPTION = 'Множество локаций для съёмок. Все объявления проходят проверку модератором'
const FILTERS_OPTIONS = {
  [filters.TYPE]: {
    source: 'roomTypes',
    field: 'roomTypes'
  },
  [filters.SERVICE]: {
    type: WITH,
    source (value) {
      return Object.values(equip).indexOf(value) > -1 ? value : null
    },
    inQuery (_this, query) {
      const field = 'equipmentAndFacilities'
      let param = false

      if (!(has(query, field) && query[field].length === 1)) return { param, query }

      param = Object.values(equip).indexOf(query[field][0]) > -1 ? query[field][0] : false

      if (param) {
        delete query[field]
      }

      return { param, query }
    },
    field (source) {
      return { equipmentAndFacilities: [source] }
    },
    phrase ({ source }, _this) {
      return source ? _this.$t(`dictionary.equipment-services.${source}.declension.single.tvor`) : ''
    }
  },
  [filters.CATEGORY]: {
    type: FOR,
    source: 'categories',
    field: 'categoryIds',
    phraseDescription ({ source }, _this) {
      return source ? _this.$t(`dictionary.location-type.${source.id}.declension.plural.rod`) : ''
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
      filterSources: 'board/location/getSources'
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
      let str = ''

      for (let type in filtersFinal) {
        str += filtersFinal[type].length ? ` ${type !== 'empty' ? `${type} ` : ''}${filtersFinal[type].join(',')}` : ''
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
      let params = {}
      let filter = []
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

      return { query: q, params: {} }
    }
  }
}
