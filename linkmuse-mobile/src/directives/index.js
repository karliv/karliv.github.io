import { each } from '@utils'
import kebabCase from 'lodash/kebabCase'
import * as otherDirectives from './other/index'

const directives = {
  install (Vue) {
    each(otherDirectives, function (value, key) {
      Vue.directive(kebabCase(key), value)
    })
  }
}

export default directives
