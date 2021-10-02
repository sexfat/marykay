<template>
  <div id="app" class="wrapper">
    <!-- eslint-disable-next-line vue/no-v-html -->
    <div id="gtm" v-html="gtm"></div>
    <Header />
    <Nuxt />
    <ScrollTop />
    <Footer />
  </div>
</template>

<script>
export default {
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
