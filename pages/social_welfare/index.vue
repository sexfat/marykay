<template>
  <!-- eslint-disable vue/no-v-html -->
  <div class="social_awards">
    <div class="container-xxl">
      <div class="row">
        <div class="breadcrumbs margin-top_20">
          <nuxt-link :to="localePath('/')">{{ $t('pages.product_page.home') }}</nuxt-link> /
          {{ $t('pages.social_welfare.page_name') }}
        </div>
      </div>
    </div>
    <div class="banner container-fluid gx-0">
      <img src="~assets/images/awards/767309.gif" alt="" />
    </div>
    <div class="social_awards_inner container-xxl white">
      <div class="row">
        <div class="col-xs-12 col-md-12 text_head">
          <img style="width: 70px" src="~assets/images/com_colorLine.png" alt="" />
          <h2 class="h2 font1 margin-top_20" v-html="$t('pages.social_welfare.h2')"></h2>
          <div class="text_body" v-html="$t('pages.social_welfare.text_body')"></div>
        </div>
      </div>
    </div>
    <div class="spec white">
      <div class="container-xxl">
        <div class="row">
          <Swiper :options="swiperOptions" class="silder_social swiper-container w996">
            <Swiper-slide v-for="item in 8" :key="item">
              <img :src="require(`~/assets/images/awards/PINK-CHANGING-0${item}.jpg`)" alt="" srcset="" />
            </Swiper-slide>
          </Swiper>
        </div>
      </div>
    </div>
    <div class="awards_content container-xxl white">
      <div class="row">
        <div class="w996">
          <p v-for="(item, index) in contentsData" :key="index">{{ item }}</p>
        </div>
      </div>
    </div>
    <div class="bottom_video">
      <div class="w996">
        <video autoplay="autoplay" poster="" preload="auto" loop playsinline muted>
          <source src="~assets/images/video/4247072.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SocialWelfare',
  data() {
    return {
      swiperOptions: {
        loop: true,
        slidesPerView: 2,
        spaceBetween: 15,
        pauseOnMouseEnter: true,
        autoplay: {
          delay: 3000,
        },
        breakpoints: {
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          769: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
        },
      },
    }
  },
  computed: {
    contentsData() {
      return this.$i18n.messages[this.$i18n.locale].pages.social_welfare.contents
    },
  },
}
</script>
