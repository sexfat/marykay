<template>
  <div id="app" class="wrapper">
    <Header />
    <Nuxt />
    <ScrollTop />
    <Footer />
  </div>
</template>

<script>
export default {
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
