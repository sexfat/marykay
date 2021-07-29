<template>
  <!-- eslint-disable vue/no-v-html -->
  <div class="pink">
    <div class="container-xxl">
      <div class="row">
        <div class="breadcrumbs margin-top_20">
          <nuxt-link :to="localePath('/')">{{ $t('pages.product_page.home') }}</nuxt-link> /
          {{ $t('pages.pink_changing_lives.page_name') }}
        </div>
      </div>
    </div>
    <div class="banner container-fluid gx-0">
      <img src="~assets/images/TW_layoutA/img_about_pink.jpg" alt="" />
    </div>
    <div class="about_marykay_inner container-xxl white">
      <div class="row">
        <div class="col-xs-6 col-md-6 text_head">
          <img style="width: 70px" src="~assets/images/com_colorLine.png" alt="" />
          <h2 class="h2 font1 margin-top_20">Pink Changing Lives</h2>
          <div class="text_body">{{ $t('pages.pink_changing_lives.text_body') }}</div>
        </div>
      </div>
    </div>
    <div class="spec">
      <div class="container-xxl">
        <div class="row">
          <div class="col-xs-12 col-md-4">
            <img class="logo" src="~assets/images/TW_layoutA/img_about_logo.png" alt="logo" />
          </div>
          <div class="col-xs-12 col-md-8">
            <div class="pinkbox">
              <h4 class="margin-bottom_30">{{ $t('pages.pink_changing_lives.spec_1.h4') }}</h4>
              <p class="text_left">
                {{ $t('pages.pink_changing_lives.spec_1.text_left') }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="spec_2">
      <div class="container-fluid">
        <div class="row">
          <div class="col-xs-12 col-md-6 col-lg-6 nomargin">
            <img src="~assets/images/TW_layoutA/img_about_pinkbn2.jpg" alt="brand" />
          </div>
          <div class="col-xs-12 col-md-6 col-lg-6 flex">
            <div class="spec_inner">
              <h4 class="t1 margin-bottom_20">{{ $t('pages.pink_changing_lives.spec_2.h4') }}</h4>
              <ol
                style="list-style: inherit; margin-left: 30px"
                v-html="$t('pages.pink_changing_lives.spec_2.ol')"
              ></ol>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row text_center white bottom">
      <div class="row justify-content-center margin-top_100">
        <div class="col-xs-10 col-md-6 col-lg-6 offset-md-3 offset-lg-3 offset-xs-1 margin-bottom_50">
          <img src="~assets/images/HK_layoutA/pinkchanginglive01.png" width="50%" alt="" />
        </div>
        <div class="col-xs-10 col-md-8 col-lg-8 offset-md-2 offset-lg-2 offset-xs-1">
          {{ $t('pages.pink_changing_lives.change_content') }}
        </div>
      </div>
    </div>
    <div class="container-fluid gx-0 white margin-bottom_100">
      <div class="swiper-container swiper_pink">
        <Swiper :options="swiperOptions">
          <Swiper-slide v-for="(value, keys) in slideData" :key="keys">
            <div class="txt" v-html="value.txt"></div>
            <img :src="require(`~/assets/images/HK_layoutA/pinkchanginglive_${value.img}.jpg`)" alt="" />
          </Swiper-slide>
        </Swiper>
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PinkChangingLives',
  data() {
    return {
      swiperOptions: {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 0,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },
    }
  },
  computed: {
    slideData() {
      return this.$i18n.messages[this.$i18n.locale].pages.pink_changing_lives.slides
    },
  },
}
</script>
