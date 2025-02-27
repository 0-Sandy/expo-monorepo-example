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
 fallbackLng: {
  'en-GB': ['en-AU', 'en-US', 'en-CA', 'en-IN', 'en-IE', 'en-NZ', 'en-ZA', 'en-SG'],
  'en-US': ['en-AU', 'en-GB', 'en-CA', 'en-IN', 'en-IE', 'en-NZ', 'en-ZA', 'en-SG'],
  'en-CA': ['en-AU', 'en-GB', 'en-US', 'en-IN', 'en-IE', 'en-NZ', 'en-ZA', 'en-SG'],
  'en-IN': ['en-AU', 'en-GB', 'en-US', 'en-CA', 'en-IE', 'en-NZ', 'en-ZA', 'en-SG'],
  'en-IE': ['en-AU', 'en-GB', 'en-US', 'en-CA', 'en-IN', 'en-NZ', 'en-ZA', 'en-SG'],
  'en-AU': ['en-US', 'en-GB', 'en-CA', 'en-IN', 'en-IE', 'en-NZ', 'en-ZA', 'en-SG'],
  'en-NZ': ['en-AU', 'en-US', 'en-GB', 'en-CA', 'en-IN', 'en-IE', 'en-ZA', 'en-SG'],
  'en-ZA': ['en-AU', 'en-US', 'en-GB', 'en-CA', 'en-IN', 'en-IE', 'en-NZ', 'en-SG'],
  'en-SG': ['en-AU', 'en-US', 'en-GB', 'en-CA', 'en-IN', 'en-IE', 'en-NZ', 'en-ZA'],

  'es-ES': ['es-MX', 'es-AR', 'es-CO', 'es-CL', 'es-PE', 'es-VE', 'es-DO', 'es-CU', 'es'],
  'es-MX': ['es-ES', 'es-AR', 'es-CO', 'es-CL', 'es-PE', 'es-VE', 'es-DO', 'es-CU', 'es'],
  'es-AR': ['es-ES', 'es-MX', 'es-CO', 'es-CL', 'es-PE', 'es-VE', 'es-DO', 'es-CU', 'es'],
  'es-CO': ['es-ES', 'es-MX', 'es-AR', 'es-CL', 'es-PE', 'es-VE', 'es-DO', 'es-CU', 'es'],
  'es-CL': ['es-ES', 'es-MX', 'es-AR', 'es-CO', 'es-PE', 'es-VE', 'es-DO', 'es-CU', 'es'],
  'es-PE': ['es-ES', 'es-MX', 'es-AR', 'es-CO', 'es-CL', 'es-VE', 'es-DO', 'es-CU', 'es'],
  'es-VE': ['es-ES', 'es-MX', 'es-AR', 'es-CO', 'es-CL', 'es-PE', 'es-DO', 'es-CU', 'es'],
  'es-DO': ['es-ES', 'es-MX', 'es-AR', 'es-CO', 'es-CL', 'es-PE', 'es-VE', 'es-CU', 'es'],
  'es-CU': ['es-ES', 'es-MX', 'es-AR', 'es-CO', 'es-CL', 'es-PE', 'es-VE', 'es-DO', 'es'],

  default: ['en']
 },
 interpolation: {
  escapeValue: false
 },
 ns: ['common', 'home', 'feature-home'],
 defaultNS: 'common'
})

export { i18n, useTranslation, Trans, withTranslation }
