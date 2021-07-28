<template>
  <div id="app" class="wrapper">
    <Header />
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
export default {
  scrollToTop: true,
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
