<template>
  <div class="container-fluid dark margin-top_150 s6">
    <div class="heading-block text_center">
      <h1 class="showcase">
        <b>Follow Us</b>
      </h1>
      <h3>
        <a target="_blank" href="https://instagram.com/marykaytaiwan?utm_medium=copy_link">@marykaytaiwan</a>
      </h3>
    </div>
    <div class="body margin-top_50">
      <div class="silder_ig swiper-container">
        <Swiper :options="swiperOptions">
          <Swiper-slide v-for="(item, index) in Object.entries(igData)" :key="item[0]">
            <a target="_blank" :href="item[1]">
              <img :src="require(`~/assets/images/ig_tw/${index + 1}.jpeg`)" alt="" srcset=""
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
        link_1: 'https://www.instagram.com/p/CRypnVEh5GV/',
        link_2: 'https://www.instagram.com/p/CRoWaKWhTsv/',
        link_3: 'https://www.instagram.com/p/CRggyvrBS47/',
        link_4: 'https://www.instagram.com/p/CRWO8jOhF0y/',
        link_5: 'https://www.instagram.com/p/CROh-Adhgza/',
        link_6: 'https://www.instagram.com/p/CRGxVL0hs3w/',
        link_7: 'https://www.instagram.com/p/CQ-LCmahG2i/',
        link_8: 'https://www.instagram.com/p/CQx9CJnBk0v/',
        link_9: 'https://www.instagram.com/p/CQvlBxQhCZZ/',
        link_10: 'https://www.instagram.com/p/CQqqtsRng0o/',
      },
    }
  },
}
</script>
