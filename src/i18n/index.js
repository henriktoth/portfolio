import { createI18n } from 'vue-i18n'
import en from './locales/en'
import hu from './locales/hu'

const messages = {
    en,
    hu,
}

const i18n = createI18n({
    locale: 'en',
    fallbackLocale: 'hu',
    messages
})

export default i18n