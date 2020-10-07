import _ from 'lodash'
import { has } from '@utils'

export function getFilter (route) {
  const { filter } = route.params

  if (!filter) return

  return filter.toLowerCase().split('/')
}

export function getDefaultField (source, field) {
  return source ? { [field]: [source.id] } : null
}

export function getDefaultSource (value, key, sourses) {
  // eslint-disable-next-line eqeqeq
  return sourses[key].find(e => e.id == value || (has(e, 'name') && e.name.toLowerCase() == value))
}

export function getFields (route, sources, fields, filters, FILTERS_OPTIONS) {
  const filter = getFilter(route)

  if (!filter) return fields

  let filterFields = {}

  filter.forEach(part => {
    for (let key in filters) {
      const filterKey = filters[key]

      if (!part.includes(`${filterKey}-`) || !has(FILTERS_OPTIONS, filters[key])) continue

      const filter = FILTERS_OPTIONS[filterKey]

      const value = part.replace(`${filterKey}-`, '').toLowerCase()
      const source = typeof filter.source === 'function' ? filter.source(value) : getDefaultSource(value, filter.source, sources)
      const filterField = typeof filter.field === 'function' ? filter.field(source) : getDefaultField(source, filter.field)

      filterFields = { ...filterField, ...filterFields }
    }
  })

  return _.merge(fields, filterFields)
}
