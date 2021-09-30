<template>
  <!--eslint-disable vue/no-v-html-->
  <div id="app" class="wrapper">
    <div id="gtm" v-html="gtm"></div>
    <Header />
    <Nuxt />
    <ScrollTop />
    <Footer />
  </div>
</template>

<script>
export default {
  scrollToTop: true,
  data() {
    return {
      gtm: `
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WF4FTJW"
        height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
      `,
    }
  },
  head() {
    return {
      bodyAttrs: {
        id: this.lang,
      },
    }
  },
  computed: {
    lang() {
      return this.$i18n.locale
    },
  },
}
</script>
