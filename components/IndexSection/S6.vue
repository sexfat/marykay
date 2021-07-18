<template>
  <div class="container-fluid dark margin-top_150 s6">
    <div class="heading-block text_center">
      <h1 class="showcase">
        <b>Follow Us</b>
      </h1>
      <h3>
        <a href="#">@marykaytaiwan</a>
      </h3>
    </div>
    <div class="body margin-top_50">
      <div class="silder_ig swiper-container">
        <Swiper ref="s4Swiper" :options="swiperOptions">
          <Swiper-slide v-for="item in 8" :key="item">
            <img src="~assets/images/img_ig-01@1x.jpg" alt="" srcset="" />
          </Swiper-slide>
          <!-- <div class="swiper-slide">
            <img src="~assets/images/img_ig-01@1x.jpg" alt="" srcset="" />
          </div>
          <div class="swiper-slide">
            <img src="~assets/images/img_ig-01@1x.jpg" alt="" srcset="" />
          </div>
          <div class="swiper-slide">
            <img src="~assets/images/img_ig-01@1x.jpg" alt="" srcset="" />
          </div>
          <div class="swiper-slide">
            <img src="~assets/images/img_ig-01@1x.jpg" alt="" srcset="" />
          </div>
          <div class="swiper-slide">
            <img src="~assets/images/img_ig-01@1x.jpg" alt="" srcset="" />
          </div>
          <div class="swiper-slide">
            <img src="~assets/images/img_ig-01@1x.jpg" alt="" srcset="" />
          </div>
          <div class="swiper-slide">
            <img src="~assets/images/img_ig-01@1x.jpg" alt="" srcset="" />
          </div> -->
        </Swiper>
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
        slidesPerView: 5,
        spaceBetween: 5,
        breakpoints: {
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          769: {
            slidesPerView: 5,
            spaceBetween: 10,
          },
        },
      },
    }
  },
}
</script>
