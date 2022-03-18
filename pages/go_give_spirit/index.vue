<template>
  <div class="tech story spirit">
    <div class="container-xxl">
      <div class="row">
        <div class="breadcrumbs margin-top_20">
          <nuxt-link :to="localePath('/')">{{ $t('pages.product_page.home') }}</nuxt-link> / 玫琳凱樂施精神
        </div>
      </div>
    </div>
    <div class="banner container-fluid gx-0">
      <img class="img-fluid d_device" src="~/assets/images/spirit/banner.gif" alt="spirit banner" />
      <img class="img-fluid m_device" src="~/assets/images/spirit/banner_m.gif" alt="spirit banner" />
    </div>
    <main class="container-xxl white gx-0">
      <section class="spirit__space">
        <img class="colorLine" style="width: 70px" src="~assets/images/com_colorLine.png" alt="com_colorLine" />
        <h5>玫琳凱創辦人Mary Kay Ash</h5>
        <h4 class="h2 font1">幫助他人成功同時自己成功，你所付出的，終將加倍回報你的生命中！</h4>
        <div class="text_body">
          「樂施是一個人生活中最大的幸福，是生活的一部份，生命中最重要的不是你得到什麼，而是你付出了什麼讓你的生命更完整。
          “施比受更有福”
          你會發現給予別人幫助時所得到的快樂，遠遠大於接受別人的幫助，玫琳凱是建立在樂施精神上的，我堅信你對他人付出的關心與愛，將幫助你自己事業開花結果，今天就把這愛的種子分享給你的業務督導、你的姐妹顧問、你分享事業的對象以及你的顧客──你將會因此得到祝福，就像我因你而得到祝福。」
        </div>
      </section>

      <section class="pink spirit__space">
        <div class="text_center s_font font1">
          玫琳凱獨特的文化其中有一條就是樂施精神。<br />幫助他人成功同時自己成功，你所付出的，終將加倍回報你的生命中！<br /><span
            >∼玫琳凱・艾施</span
          >
        </div>
      </section>

      <section class="miss-give">
        <img class="img-fluid" src="~/assets/images/spirit/miss_go_give.jpg" alt="miss_go_give" />
      </section>

      <section class="spirit__slider">
        <Swiper ref="swiper" :options="swiperOptions">
          <Swiper-slide v-for="item in 5" :key="item">
            <img :src="require(`~/assets/images/spirit/slide_${item}.jpg`)" :alt="`spirit slide_${item}`" />
          </Swiper-slide>
        </Swiper>
        <img
          role="button"
          class="arrow arrow-left"
          src="~/assets/images/spirit/arrow_left.png"
          alt="arrow_left"
          @click="prev"
        />
        <img
          role="button"
          class="arrow arrow-right"
          src="~/assets/images/spirit/arrow_right.png"
          alt="arrow_right"
          @click="next"
        />
      </section>
    </main>
  </div>
</template>

<script>
export default {
  name: 'GoGiveSpirit',

  data() {
    return {
      swiperOptions: {
        loop: true,
        slidesPerView: 1,
        pauseOnMouseEnter: true,
        autoplay: {
          delay: 3000,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },
    }
  },

  head() {
    return {
      title: `美商玫琳凱台灣分公司MaryKay Taiwan | 玫琳凱樂施精神`,
      link: [{ rel: 'preload', href: require(`~/assets/images/spirit/banner.gif`), as: 'image' }],
    }
  },

  computed: {
    swiper() {
      return this.$refs.swiper.$swiper
    },
  },

  methods: {
    next() {
      this.swiper.slideNext()
    },

    prev() {
      this.swiper.slidePrev()
    },
  },
}
</script>
