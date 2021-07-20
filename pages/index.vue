<template>
  <div>
    <IndexSectionBanner />
    <IndexSectionS1 />
    <IndexSectionS2 />
    <IndexSectionS3 />
    <IndexSectionS4 />
    <IndexSectionS5 />
    <IndexSectionS6 />
  </div>
</template>

<script>
export default {
  name: 'Index',
  mounted() {
    document.querySelectorAll('a[href]').forEach((a) => {
      a.addEventListener('click', (e) => {
        this.scrollToHash(this.getSamePageAnchor(a), e)
      })
    })
    this.scrollToHash(window.location.hash)
  },
  methods: {
    getSamePageAnchor(link) {
      if (
        link.protocol !== window.location.protocol ||
        link.host !== window.location.host ||
        link.pathname !== window.location.pathname ||
        link.search !== window.location.search
      ) {
        return false
      }
      console.log('getSamePageAnchor', link.hash)
      console.log('getSamePageAnchor type', typeof link.hash)
      return link.hash
    },
    scrollToHash(hash, e) {
      const elem = hash ? document.querySelector(hash) : false
      console.log('el', elem)
      if (elem) {
        if (e) e.preventDefault()
        this.$gsap.to(window, { druation: 10, scrollTo: elem, ease: 'power2' })
      }
    },
  },
}
</script>
