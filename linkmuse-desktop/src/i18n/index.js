import Vue from 'vue'
import ru from '@/lang/ru'
import VueI18n from 'vue-i18n'
import { isBrowser } from '@utils'
import languages from '@/i18n/languages.json'

Vue.use(VueI18n)

export function createI18n (context, router) {
  const loadedLanguages = []
  const globalLanguages = {}
  const fallbackLocale = 'ru'

  let locale = fallbackLocale
  if (context && context.lang) {
    locale = context.lang
  } else if (typeof document !== 'undefined') {
    locale = document.documentElement.lang
  }

  const i18n = new VueI18n({
    locale,
    messages: { ru },
    fallbackLocale
  })

  function setI18nLanguage (lang) {
    i18n.locale = lang
    if (!context) {
      document.querySelector('html').setAttribute('lang', lang)
    }
    return lang
  }

  function loadLanguageAsync (lang) {
    if (!loadedLanguages.includes(lang)) {
      const { locale } = languages.find(l => lang === l.alternate || lang === l.locale) || {}
      if (!locale) return Promise.reject(new Error('Language not found'))
      return import(/* webpackChunkName: "lang-[request]" */ `@/lang/${locale}`).then(msgs => {
        loadedLanguages.push(lang)
        globalLanguages[lang] = msgs
        i18n.setLocaleMessage(lang, globalLanguages[lang])
        return Promise.resolve(setI18nLanguage(lang))
      }).catch(err => { throw err })
    }
    return Promise.resolve(setI18nLanguage(lang))
  }

  router.beforeEach((to, from, next) => {
    loadLanguageAsync(locale)
    .then(() => next())
    .catch(() => next())
  })

  return i18n
}
