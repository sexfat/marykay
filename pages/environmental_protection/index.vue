<template>
  <!-- eslint-disable vue/no-v-html -->
  <div class="environmental_protection">
    <div class="container-xxl">
      <div class="row">
        <div class="breadcrumbs margin-top_20">
          <nuxt-link :to="localePath('/')">{{ $t('pages.product_page.home') }}</nuxt-link> /
          {{ $t('pages.environmental_protection.page_name') }}
        </div>
      </div>
    </div>
    <div class="banner container-fluid gx-0">
      <img src="~assets/images/awards/PINK-DOING-GREEN.jpg" alt="" />
    </div>
    <div class="awards_inner container-xxl white">
      <div class="row">
        <div class="col-xs-12 col-md-12 text_head">
          <img style="width: 70px" src="~assets/images/com_colorLine.png" alt="" />
          <h2 class="h2 font1 margin-top_20" v-html="$t('pages.environmental_protection.h2')"></h2>
          <div class="text_body" v-html="$t('pages.environmental_protection.text_body')"></div>
        </div>
      </div>
    </div>
    <div class="spec">
      <div class="w996">
        <div class="row">
          <div class="img">
            <div class="title">
              DEBORAH GIBBINS<br />
              <div class="text_small w4 margin-top_10">
                MARY KAY<br />
                CHIEF OPERATING OFFICER
              </div>
            </div>
            <img src="~assets/images/awards/Deborah-Gibbins.jpg" alt="" />
          </div>

          <div class="box">
            <div class="row" v-html="$t('pages.environmental_protection.box_content')"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="awward_content container-xxl white">
      <div class="row">
        <div class="w996" v-html="$t('pages.environmental_protection.awward_content')"></div>
      </div>
    </div>
    <div class="bottom white">
      <div class="container-xxl">
        <div class="row">
          <div class="silder_ev swiper-container w996">
            <Swiper class="swiper-wrapper" :options="swiperOptions">
              <Swiper-slide v-for="(value, item) in sliderData" :key="item" class="swiper-slide item">
                <div class="text" v-html="value.text"></div>
                <img :src="require(`~/assets/images/awards/${value.img}`)" alt="" srcset="" />
              </Swiper-slide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EnvironmentalProtection',
  data() {
    return {
      swiperOptions: {
        loop: true,
        slidesPerView: 2,
        spaceBetween: 20,
        autoplay: {
          delay: 2500,
        },
        breakpoints: {
          320: {
            slidesPerView: 1,
            spaceBetween: 15,
          },
          769: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
        },
      },
    }
  },
  computed: {
    sliderData() {
      return this.$i18n.messages[this.$i18n.locale].pages.environmental_protection.sliders
    },
  },
}
</script>
