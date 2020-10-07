import * as CITIES from './Enums/Cities'

const fromWeb = (_this, key) => {
  return _this.$te(key) ? _this.$t(key) : null
}

export default {
  isCityDeclension (city) {
    return Object.values(CITIES).indexOf(city) > -1
  },
  inCity (_this, source) {
    const city = source.name.toLowerCase().replace(/ /g, '-')
    const t = fromWeb(_this, `dictionary.city.${city}.declension.single.dat`)
    return t || `г. ${source.text}`
  },
  fromCity (_this, source) {
    const city = source.name.toLowerCase().replace(/ /g, '-')
    const t = fromWeb(_this, `dictionary.city.${city}.declension.single.rod`)
    return t || `г. ${source.text}`
  },
  forCastingCategory (_this, source) {
    const t = fromWeb(_this, `dictionary.casting-category.${source.name.toLowerCase()}.declension.single.rod`)
    return t || `${source.text}`
  },
  forProffesion (_this, proffesion) {
    /**
     * TODO add translate
     */
    const t = fromWeb(_this, `dictionary.casting-category.${proffesion.toLowerCase()}.declension.single.rod`)
    return t || `${proffesion}`
  }
}
