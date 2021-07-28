<template>
  <div class="business">
    <div class="container-xxl">
      <div class="row">
        <div class="breadcrumbs margin-top_20">
          <nuxt-link :to="localePath('/')">{{ $t('pages.product_page.home') }}</nuxt-link> / 事業機會
        </div>
      </div>
    </div>

    <div class="banner container-fluid gx-0">
      <img class="d" src="~assets/images/TW_layoutA/img_about_business_top_d.jpg" alt="" />
      <img class="m" src="~assets/images/TW_layoutA/img_about_business_top_m.jpg" alt="" />
    </div>

    <div class="spec">
      <div class="container-xxl">
        <div class="row">
          <div class="col-xs-12 col-md-12">
            <h4 class="margin-bottom_30">幸福事業微笑發光</h4>
            <p class="text_left">
              創業一定要選資源最豐富、實力最堅強的後盾 女人都該擁有的事業保障，玫琳凱都為你準備好了， 讓你永遠走在最前端
              只要你有熱情、樂於分享就可以開始這份事業
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="container-xxl margin-top_60 margin-bottom_100">
      <h4 class="text_center white margin-bottom_30">全方位免費專業培訓</h4>
      <div class="swiper-container silder_business">
        <!-- Additional required wrapper -->
        <Swiper :options="businessOptions">
          <!-- Slides -->
          <div class="swiper-slide">
            <div class="txt">
              <h4>高品質課程</h4>
              <p>隨時隨地，隨選隨學，精彩豐富的影音內容和成功企業家案例分享，人人都可以自學創業成功！</p>
            </div>
            <img src="~assets/images/TW_layoutA/img_about_business1.jpg" alt="" />
          </div>
          <!-- s -->
          <div class="swiper-slide">
            <div class="txt">
              <h4>不限時空 e化學習平台</h4>
              <p>隨時隨地，隨選隨學，精彩豐富的影音內容和成功企業家案例分享，人人都可以自學創業成功！</p>
            </div>
            <img src="~assets/images/TW_layoutA/img_about_business2.jpg" alt="" />
          </div>
          <!-- s -->
          <div class="swiper-slide">
            <div class="txt">
              <h4>數位影音學習APP-MK e學院</h4>
              <p>隨時隨地，隨選隨學，精彩豐富的影音內容和成功企業家案例分享，人人都可以自學創業成功！</p>
            </div>
            <img src="~assets/images/TW_layoutA/img_about_business3.jpg" alt="" />
          </div>
        </Swiper>
      </div>
    </div>
    <div class="top_banner margin-top_60">
      <div class="container-xxl">
        <div class="sd">
          <h4 class="margin-bottom_30">我的事業我作主</h4>
          <p>
            玫琳凱24小時線上事業平台 歡迎你來開店當老闆
            不用自己架設網站、不收妳店租、沒有庫存壓力更不用自己盤點補貨，甚至還將你把產品配送到顧客手上。
          </p>
        </div>
      </div>
      <img src="~assets/images/TW_layoutA/img_about_businessbn2.jpg" alt="" srcset="" />
    </div>

    <div class="business-spec text_center white">
      <h4>
        Make Money Easier<br />
        制度簡單 賺錢、分享更容易
      </h4>
      <p class="small_text">
        小投資、零風險<br />
        最高40％零售利潤 零元開始累計
      </p>
    </div>
    <div class="bottom_banner margin-top_60">
      <div class="container-xxl swiper-container silder_makemoney">
        <!-- Additional required wrapper -->
        <Swiper :options="swiperOptions">
          <!-- Slides -->
          <div class="swiper-slide">
            <div class="txt">
              <h4>高品質課程</h4>
              <p>隨時隨地，隨選隨學，精彩豐富的影音內容和成功企業家案例分享，人人都可以自學創業成功！</p>
            </div>
          </div>
          <!-- s -->
          <div class="swiper-slide">
            <div class="txt">
              <h4>不限時空 e化學習平台</h4>
              <p>隨時隨地，隨選隨學，精彩豐富的影音內容和成功企業家案例分享，人人都可以自學創業成功！</p>
            </div>
          </div>
          <!-- s -->
          <div class="swiper-slide">
            <div class="txt">
              <h4>數位影音學習APP-MK e學院</h4>
              <p>隨時隨地，隨選隨學，精彩豐富的影音內容和成功企業家案例分享，人人都可以自學創業成功！</p>
            </div>
          </div>
        </Swiper>
      </div>
      <img src="~assets/images/TW_layoutA/img_about_businessbn3.jpg" alt="" srcset="" />
    </div>
    <div class="wb">
      <a class="btn_change white btn_border_dark hover" href="http://#" target="_blank"
        >了解更多幸福企業 微笑發光內容
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Business',
  data() {
    return {
      swiperOptions: {
        slidesPerView: 3,
        spaceBetween: 20,
        autoplay: {
          delay: 3000,
        },
        breakpoints: {
          375: {
            loop: true,
            slidesPerView: 1,
            spaceBetween: 15,
          },
          796: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        },
      },
      businessOptions: {
        slidesPerView: 3,
        spaceBetween: 20,
        breakpoints: {
          375: {
            loop: true,
            slidesPerView: 1,
            spaceBetween: 15,
          },
          796: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        },
      },
    }
  },
}
</script>
