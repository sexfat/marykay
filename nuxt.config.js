/*  
  domain下如果有子資料夾，請在Path裡增加
  ex: https://host.com/yourPath   Path = '/yourPath/'
*/
const Path = ''

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: '美商玫琳凱台灣分公司MaryKay Taiwan',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          '玫琳凱是您美麗的好朋友。我們相信，一支口紅的力量也能為世界帶來改變。我們提供優秀的產品和獨一無二的事業機會賦予女性擁有自主事業的權利，並鼓勵女性追求自我價值。MARY KAY 承諾將每一位顧客做為出發點，在產品質量和安全方面從不妥協，擁有超過300位科學家的研發團隊與1,500項產品專利，提供全方位美妝、護膚產品及營養補充品，創造專屬您的個人化完美肌膚體驗。',
      },
      { name: 'format-detection', content: 'telephone=no' },
      {
        name: 'keywords',
        content:
          '玫琳凱香港,MaryKayHK,化妝品,護膚, 彩妝,保養,抗老,補水,美白,舒緩,防曬,粉刺,面膜,身體保養,香氛,美體,控油,淨化,懶人保養,SPA,保濕,卸妝,痘痘粉刺調理,控油,身體美白,去角質,黑眼圈,卸妝,膠原蛋白肽,膳食纖維,醫美保養,幫助消化,促進代謝,護理保健,綜合維他命Ｂ,益生菌,骨膠原,補鈣,抗氧化,肌膚檢測,臻時粹顏,時光精靈Repair,時光精靈3D,天然淨活,植物肌密,補充性保養,亮采,舒顏,淨顏,男士,美體',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    script: [
      {
        hid: 'gtm',
        innerHTML: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-WF4FTJW');`,
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/sass/style.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/mmenu-light.js', mode: 'client' },
    { src: '~/plugins/accordion.js', mode: 'client' },
    { src: '~/plugins/aos.js', mode: 'client' },
    { src: '~/plugins/swiper.js' },
    { src: '~/plugins/gsap.js', mode: 'client' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['nuxt-i18n', '@nuxtjs/google-gtag'],
  'google-gtag': {
    id: 'G-0Z42TRGZ5V', // required
    config: {
      // this are the config options for `gtag
      // check out official docs: https://developers.google.com/analytics/devguides/collection/gtagjs/
      anonymize_ip: true,
      send_page_view: false,
    },
    debug: true, // enable to track in dev mode
    disableAutoPageTrack: false,
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ['gsap'],
    extractCSS: true,
    loaders: {
      vue: {
        transformAssetUrls: {
          video: ['src', 'poster'],
        },
      },
    },
    html: {
      minify: {
        collapseBooleanAttributes: true,
        decodeEntities: true,
        minifyCSS: true,
        minifyJS: true,
        processConditionalComments: true,
        removeEmptyAttributes: true,
        removeRedundantAttributes: true,
        trimCustomFragments: true,
        useShortDoctype: true,
        preserveLineBreaks: false,
        collapseWhitespace: true,
      },
    },
  },
  router: {
    base: Path,
  },
  server: {
    port: 6601, // default: 3000
  },
  generate: {
    fallback: true,
  },
  i18n: {
    seo: true,
    locales: [
      {
        code: 'zh',
        iso: 'zh-TW',
        name: 'Chinese',
      },
    ],
    defaultLocale: 'zh',
    vueI18n: {
      fallbackLocale: 'zh',
      messages: {
        zh: require('./locales/tw.json'),
      },
    },
  },
}
