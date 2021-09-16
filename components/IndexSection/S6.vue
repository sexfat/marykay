<template>
  <div class="container-fluid dark margin-top_150 s6">
    <div class="heading-block text_center">
      <h1 class="showcase">
        <b>Follow Us</b>
      </h1>
      <h3>
        <a target="_blank" href="https://www.instagram.com/marykayhongkong/">@marykayhongkong</a>
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
        link_1: 'https://www.instagram.com/p/CTzDOKeJzOR/',
        link_2: 'https://www.instagram.com/p/CTw1cQ4J-zm/',
        link_3: 'https://www.instagram.com/p/CTvwTxaJzOZ/',
        link_4: 'https://www.instagram.com/p/CToj_SaJh_e/',
        link_5: 'https://www.instagram.com/p/CTmEP3ip_oi/',
        link_6: 'https://www.instagram.com/p/CTjr0S8p2LG/',
        link_7: 'https://www.instagram.com/p/CTekBdtpipg/',
        link_8: 'https://www.instagram.com/p/CTWsL9tJw7d/',
        link_9: 'https://www.instagram.com/p/CTUEqq0JfZ3/',
        link_10: 'https://www.instagram.com/p/CTRo0XAp8aI/',
        link_11: 'https://www.instagram.com/p/CTEyhlFJDTx/',
      },
    }
  },
}
</script>
