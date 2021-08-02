<template>
  <!-- eslint-disable vue/no-v-html -->
  <div class="story">
    <div class="container-xxl">
      <div class="row">
        <div class="breadcrumbs margin-top_20">
          <nuxt-link :to="localePath('/')">{{ $t('pages.product_page.home') }}</nuxt-link> /
          {{ $t('pages.about_mary_ash.page_name') }}
        </div>
      </div>
    </div>
    <div class="banner container-fluid gx-0">
      <img src="~assets/images/TW_layoutA/img_about_story.jpg" alt="" />
    </div>
    <div class="about_marykay_inner container-xxl">
      <div class="row">
        <div class="col-xs-6 col-md-6 text_head">
          <img style="width: 70px" src="~assets/images/com_colorLine.png" alt="" />
          <h2 class="h2 font1 margin-top_20">{{ $t('pages.about_mary_ash.h2') }}</h2>
          <div class="text_body">
            {{ $t('pages.about_mary_ash.text_body') }}
            <div class="sign">-- Mary Kay Ash</div>
          </div>
        </div>
      </div>
    </div>
    <div class="spec">
      <div class="container-xxl">
        <div class="row">
          <div class="col-xs-12 col-md-12">
            <h4 class="margin-bottom_30">{{ $t('pages.about_mary_ash.spec_title') }}</h4>
            <p class="text_left" v-html="$t('pages.about_mary_ash.spec_txt')"></p>
          </div>
        </div>
      </div>
    </div>
    <div class="container-xxl white margin-top_60 margin-bottom_100 bottom">
      <div class="row gx-3">
        <h4 class="text_center margin-bottom_30">{{ $t('pages.about_mary_ash.row_title') }}</h4>
        <div v-for="(item, index) in Object.entries(rowData)" :key="item[0]" class="col-xs-12 col-md-6">
          <div class="inner">
            <div class="left"><img :src="require(`~/assets/images/TW_layoutA/icon_story${index + 1}.png`)" /></div>
            <div class="right">
              <div v-html="item[1]"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid gx-0 white margin-bottom_100">
      <div class="swiper-container swiper_story">
        <!-- Additional required wrapper -->
        <Swiper :options="swiperOptions">
          <!-- Slides -->
          <Swiper-slide
            v-for="(value, keys) in slideData"
            :key="keys"
            class="swiper-slide"
            :class="{ lastimg: value.lastimg, img_1978: value.img_1978 }"
          >
            <div class="txt" v-html="value.txt"></div>
            <img :src="require(`~/assets/images/TW_layoutA/${value.img}.jpg`)" alt="" />
          </Swiper-slide>
        </Swiper>

        <!-- If we need navigation buttons -->
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutMaryAsh',
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
    rowData() {
      return this.$i18n.messages[this.$i18n.locale].pages.about_mary_ash.row
    },
    slideData() {
      return this.$i18n.messages[this.$i18n.locale].pages.about_mary_ash.slides
    },
  },
}
</script>
