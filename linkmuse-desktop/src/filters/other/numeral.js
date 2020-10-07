import * as exposedNumeral from 'numeral'

const abbreviate = value => exposedNumeral(value).format('0.0a')

const bytes = value => exposedNumeral(value).format('0 b')

const numeral = (value, format) => exposedNumeral(value).format(format)

const exponential = value => exposedNumeral(value).format('0.[00]e+0')

const ordinal = value => exposedNumeral(value).format('Oo')

const percentage = value => exposedNumeral(value).format( '0.[00]%')

const separator = value => exposedNumeral(value).format('0,0')

export {
  bytes,
  ordinal,
  numeral,
  separator,
  percentage,
  abbreviate,
  exponential
}
