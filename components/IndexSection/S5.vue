<template>
  <div id="s5" class="s5">
    <div class="banner">
      <div class="titles">
        <h1 class="showcase" data-aos="fade-up" data-aos-duration="800">
          <b>小美VS健康 食物VS美麗 <br />吃出VS彩虹食力</b>
        </h1>
      </div>
      <img src="~assets/images/s5_banner.jpg" alt="" srcset="" />
    </div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-7 col-md-12 dark flex">
          <div class="body" data-aos="fade-downs" data-aos-duration="1000">
            <p class="small_title">NEW</p>
            <h3 class="h4">科研Lab 玻尿酸安瓶精華</h3>
            <p class="margin-top_30"><b class="s5underline">超能活膚，水科技</b></p>
            <nuxt-link to="/products/Clinical_Solutions/pd104" class="btn-outline btn-large margin-top_30">{{
              $t('pages.homepage.more')
            }}</nuxt-link>
          </div>
        </div>
        <div class="col-lg-5 col-md-12 nomargin">
          <video class="video" poster="" playsinline loop autoplay muted>
            <source src="~assets/images/TW_video/pj1.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
    <!-- 探索更多 -->
    <div class="container-xxl explore white text_center margin-top_60">
      <div class="row">
        <div class="heading-block text_center">
          <!-- <span class="subtitle p-10">{{ $t('pages.homepage.s5.search_more') }}</span> -->
          <h1 class="showcase"><b> Discover</b><i>More</i></h1>
        </div>
      </div>
      <div class="row margin-top_50">
        <div class="wrapper_slider">
          <div class="silder_2 swiper-container">
            <Swiper :options="swiperOptions">
              <Swiper-slide v-for="(value, item) in sliderData" ref="s5Swiper" :key="item">
                <img :src="require(`~/assets/images/${value.img}`)" alt="" srcset="" />
                <div class="spc">
                  <h4 class="titles">{{ value.title }}</h4>
                  <div class="desc">
                    {{ value.description }}
                  </div>
                  <nuxt-link
                    :to="localePath(`${value.path}`)"
                    class="btn-outline btn-large dark marginauto margin-top_30"
                    >{{ $t('pages.homepage.s5.learn_more') }}</nuxt-link
                  >
                </div>
              </Swiper-slide>
              <div slot="button-prev" class="swiper-button-prev"></div>
              <div slot="button-next" class="swiper-button-next"></div>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      swiperOptions: {
        loop: true,
        slidesPerView: 3,
        spaceBetween: 50,
        breakpoints: {
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          769: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },
    }
  },
  computed: {
    sliderData() {
      return this.$i18n.messages[this.$i18n.locale].pages.homepage.s5.slides
    },
  },
}
</script>
