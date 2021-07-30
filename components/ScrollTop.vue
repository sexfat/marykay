<template>
  <transition>
    <div v-if="isScrollTop" id="scrollTop" class="icon-angle-up" @click="moveTo"></div>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      scrollTop: null,
      isScrollTop: false,
      whenToShow: 1500,
    }
  },
  mounted() {
    window.addEventListener('scroll', this.scrollTopShow, true)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.scrollTopShow)
  },
  methods: {
    moveTo() {
      window.scroll({
        top: 0,
      })
    },
    scrollTopShow() {
      this.scrollTop =
        document.documentElement.scrollTop ||
        window.pageYOffset ||
        document.body.scrollTop ||
        document.querySelector(this.el).scrollTop
      if (this.scrollTop > this.whenToShow) {
        this.isScrollTop = true
      } else {
        this.isScrollTop = false
      }
    },
  },
}
</script>
