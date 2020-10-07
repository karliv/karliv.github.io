import * as otherFilters from './other/index'
import * as stringFilters from './string/index'
import { each } from '@utils'

const filters = {
  install (Vue) {
    each(stringFilters, function (value, key) {
      Vue.filter(key, value)
    })

    each(otherFilters, (value, key) => {
      Vue.filter(key, value)
    })

    Vue.mixin({
      methods: {
        $nl2br: otherFilters.nl2br,
        $emoji: otherFilters.emoji,
        $numeral: otherFilters.numeral,
        $anchorme: otherFilters.anchorme,
        $currency: otherFilters.currency,
        $markdown: stringFilters.markdown,
        $truncate: stringFilters.truncate,
        $pluralize: otherFilters.pluralize,
        $striptags: otherFilters.striptags,
        $htmlspecialchars: otherFilters.htmlspecialchars
      }
    })
  }
}

export default filters
