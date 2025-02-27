import * as Localization from 'expo-localization'
import i18n from 'i18next'
import { initReactI18next, useTranslation, Trans, withTranslation } from 'react-i18next'

// Dynamically load all JSON files from the locales directory
const requireContext = require.context('../locales', true, /\.json$/)
const resources: { [key: string]: { translation: any } } = {}

requireContext.keys().forEach((key: string) => {
 const locale = key.match(/\/([a-z]{2})\.json$/i)?.[1]
 if (locale) {
  resources[locale] = requireContext(key)
 }
})

const locales = Localization.getLocales()
const locale = locales.length > 0 ? locales[0].languageTag : 'en'

i18n.use(initReactI18next).init({
 debug: true,
 compatibilityJSON: 'v4',
 resources,
 lng: locale,
 fallbackLng: 'en',
 interpolation: {
  escapeValue: false
 },
 ns: ['common', 'home', 'feature-home'],
 defaultNS: 'common'
})

export { i18n, useTranslation, Trans, withTranslation }
