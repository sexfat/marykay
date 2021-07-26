<template>
  <section id="s4" class="s4">
    <div class="flex-block">
      <div class="heading-block">
        <h3 class="h3">
          <p>WE WANT TO MAKE</p>
          <p>THE WORLD A BETTER PLACE</p>
          <p>And we know the future relies on</p>
          <p>taking action today</p>
        </h3>
      </div>
    </div>
    <!-- banner end-->
    <div class="banner">
      <img ref="pinkpark" class="pinkpark" src="~assets/images/bg_ind_s7@2x.jpg" alt="" srcset="" />
    </div>
    <div class="container-xxl">
      <div class="row">
        <div class="col text_center">
          <h2 class="titles margin-top_50">{{ $t('pages.homepage.s4.h2') }}</h2>
          <div class="diver black"></div>
          <!-- eslint-disable vue/no-v-html -->
          <div class="body margin-top_20" v-html="$t('pages.homepage.s4.body')"></div>
        </div>
      </div>
      <div class="row margin-top_50 silder_pink swiper-container">
        <Swiper ref="s4Swiper" :options="swiperOptions">
          <Swiper-slide class="col-lg-4 col-md-6 col-sm-6 col-12">
            <div class="bg bg1">
              <div class="inner">
                <div class="content_heading flex">
                  <h3>
                    PINK DOING GREEN
                    <p>{{ $t('pages.homepage.s4.slide_1.h3') }}</p>
                  </h3>
                </div>
                <div class="content_footer">
                  <p v-html="$t('pages.homepage.s4.slide_1.content_footer')"></p>
                  <nuxt-link
                    :to="localePath('/environmental_protection')"
                    class="btn-default btn-outline marginauto margin-top_20"
                    >{{ $t('pages.homepage.more_news') }}</nuxt-link
                  >
                </div>
              </div>
              <div class="hoverbox"></div>
            </div>
          </Swiper-slide>
          <Swiper-slide class="col-lg-4 col-md-6 col-sm-6 col-12">
            <div class="bg bg2">
              <div class="inner">
                <div class="content_heading flex">
                  <h3>
                    PINK ACHIEVEMENT

                    <p>{{ $t('pages.homepage.s4.slide_2.h3') }}</p>
                  </h3>
                </div>
                <div class="content_footer">
                  <p v-html="$t('pages.homepage.s4.slide_2.content_footer')"></p>
                  <nuxt-link
                    :to="localePath('/brand_awards')"
                    class="btn-default btn-outline marginauto margin-top_20"
                    >{{ $t('pages.homepage.more_news') }}</nuxt-link
                  >
                </div>
              </div>
              <div class="hoverbox"></div>
            </div>
          </Swiper-slide>
          <Swiper-slide class="col-lg-4 col-md-6 col-sm-6 col-12">
            <div class="bg bg3">
              <div class="inner">
                <div class="content_heading flex">
                  <h3>
                    PINK CHANGING LIVES

                    <p>{{ $t('pages.homepage.s4.slide_3.h3') }}</p>
                  </h3>
                </div>
                <div class="content_footer">
                  <p v-html="$t('pages.homepage.s4.slide_3.content_footer')"></p>
                  <nuxt-link
                    :to="localePath('/social_welfare')"
                    class="btn-default btn-outline marginauto margin-top_20"
                    >{{ $t('pages.homepage.more_news') }}</nuxt-link
                  >
                </div>
              </div>
              <div class="hoverbox"></div>
            </div>
          </Swiper-slide>
        </Swiper>
      </div>
    </div>
    <div class="dark bottom-caption margin-top_150">
      <div class="action small_title">
        OUR PRODUCT
        <div id="" class="arrow">
          <nuxt-link :to="{ hash: '#s5' }"
            ><img src="~assets/images/down-arrow-white.svg" alt="" srcset=""
          /></nuxt-link>
        </div>
      </div>
    </div>
  </section>
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
            spaceBetween: 50,
            slidesPerView: 'auto',
            centeredSlides: true,
          },
          769: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        },
      },
    }
  },
  mounted() {
    const tl = this.$gsap.timeline()
    tl.to(this.$refs.pinkpark, {
      xPercent: -10,
      scrollTrigger: {
        trigger: '.pinkpark',
        scrub: 1.2,
      },
    })
  },
}
</script>
