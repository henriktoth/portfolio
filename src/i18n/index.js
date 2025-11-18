import { createI18n } from 'vue-i18n'
import en from './locales/en.js'
import hu from './locales/hu.js'

const messages = {
    en,
    hu,
}

const i18n = createI18n({
    legacy: false,
    locale: 'en',
    fallbackLocale: 'hu',
    messages
})

export default i18n