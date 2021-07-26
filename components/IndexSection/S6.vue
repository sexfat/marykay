<template>
  <div class="container-fluid dark margin-top_150 s6">
    <div class="heading-block text_center">
      <h1 class="showcase">
        <b>Follow Us</b>
      </h1>
      <h3>
        <a target="_blank" href="https://www.instagram.com/marykayhongkong/">@marykaytaiwan</a>
      </h3>
    </div>
    <div class="body margin-top_50">
      <div class="silder_ig swiper-container">
        <Swiper ref="s4Swiper" :options="swiperOptions">
          <Swiper-slide v-for="(item, index) in Object.entries(igData)" :key="item[0]">
            <a target="_blank" :href="item[1]">
              <img :src="require(`~/assets/images/ig/${index + 1}.jpeg`)" alt="" srcset=""
            /></a>
          </Swiper-slide>
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
      igData: {
        link_1: 'https://www.instagram.com/p/CRqrAC9jyt0/',
        link_2: 'https://www.instagram.com/p/CRoGFLsDwn_/',
        link_3: 'https://www.instagram.com/p/CRlfU2WDsoM/',
        link_4: 'https://www.instagram.com/p/CRgWshfDkr9/',
        link_5: 'https://www.instagram.com/p/CRbQP3gDLrc/',
        link_6: 'https://www.instagram.com/p/CRTqrHCjcTt/',
        link_7: 'https://www.instagram.com/p/CROS6W6DuWq/',
        link_8: 'https://www.instagram.com/p/CRGpWAZjHOf/',
        link_9: 'https://www.instagram.com/p/CRD-euxDfzc/',
      },
    }
  },
}
</script>
