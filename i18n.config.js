export default function (lang) {
  let language = {}
  switch (lang) {
    case 'zh':
      language = {
        seo: true,
        locales: [
          {
            code: 'zh',
            iso: 'zh-Hant-HK',
            name: 'Chinese',
          },
        ],
        defaultLocale: 'zh',
        vueI18n: {
          fallbackLocale: 'zh',
          messages: {
            zh: require('./locales/zh.json'),
          },
          silentTranslationWarn: true
        },
      }
      break
    case 'all':
      language = {
        seo: true,
        locales: [
          {
            code: 'en',
            iso: 'en-US',
            name: 'English',
          },
          {
            code: 'zh',
            iso: 'zh-Hant-HK',
            name: 'Chinese',
          },
        ],
        defaultLocale: 'zh',
        vueI18n: {
          fallbackLocale: 'zh',
          messages: {
            en: require('./locales/en.json'),
            zh: require('./locales/zh.json'),
          },
        },
      }
      break
  }
  return language
}
