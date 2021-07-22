<template>
  <div>
    <div id="s3" class="s3">
      <div class="video_wrap hide">
        <video poster="" playsinline loop autoplay muted>
          <source src="~assets/images/video/index_02.mp4" type="video/mp4" />
        </video>
        <div class="slider_caption silder_1 swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide flex-block">
              <div class="boxas">
                <h2 class="heading-block h2" data-aos="fade-left" data-aos-duration="1000">
                  NOT ONLY PROMISES<br />
                  TRUST COMES FROM<br />
                  SKIN CARE THAT DELIVERS RESULTS
                </h2>
                <div data-aos="fade-right" data-aos-duration="1000">
                  <!-- eslint-disable-next-line vue/no-v-html -->
                  <div class="body margin-top_30" v-html="$t('pages.homepage.s3.body')"></div>
                  <p class="small_title init margin-top_30">{{ $t('pages.homepage.s3.small_title') }}</p>
                  <a href="#" class="btn-outline btn-large margin-top_2 marginauto_m">
                    {{ $t('pages.homepage.more') }}</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="video_overlay" style="background-color: rgba(0, 0, 0, 0.45)"></div>
      </div>
    </div>
    <div class="dark bottom-caption">
      <div class="action small_title">
        PINK DOING MORE
        <div id="" class="arrow">
          <nuxt-link :to="{ hash: '#s4' }"
            ><img src="~assets/images/down-arrow-white.svg" alt="" srcset=""
          /></nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>
