<template>
  <div class="s5">
    <div class="banner">
      <img src="~assets/images/Pink_Clay_Mask.jpg" alt="" srcset="" />
    </div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-7 col-md-12 dark flex">
          <div class="body" data-aos="fade-left" data-aos-duration="1000">
            <p class="small_title">NEW</p>
            <h3 class="h4">Mary Kay® Pink Clay Mask</h3>
            <p class="margin-top_30">
              止不住的臉紅心跳時刻 肌膚今天開始戀愛 5分鐘放閃 飆速靚亮 肌膚從內而外透出粉紅細緻光澤
            </p>
            <a class="btn-outline btn-large margin-top_30" href="#">更多資訊</a>
          </div>
        </div>
        <div class="col-lg-5 col-md-12 nomargin">
          <video class="video" poster="" playsinline loop autoplay muted>
            <source src="~assets/images/video/Pink_Clay_Mask.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
    <!-- 探索更多 -->
    <div class="container-xxl explore white text_center margin-top_60">
      <div class="row">
        <div class="heading-block text_center">
          <span class="subtitle p-10">探索更多</span>
          <h1 class="showcase"><b> Discover</b><i>More</i></h1>
        </div>
      </div>
      <div class="row margin-top_50">
        <div class="wrapper_slider">
          <div class="silder_2 swiper-container">
            <Swiper ref="s5Swiper" :options="swiperOptions">
              <Swiper-slide>
                <img src="~assets/images/b_01.png" alt="" srcset="" />
                <div class="spc">
                  <h4 class="titles">親水專區</h4>
                  <div class="desc">
                    你知道嗎? 保濕要做到補水，保水，鎖水三個步驟才算完整!
                    不管乾肌油肌都需要，最完整的保濕聖品就在親水區，快來幫肌膚補足滿水位吧!
                  </div>
                  <nuxt-link
                    :to="localePath('/products/Hydrophilic')"
                    class="btn-outline btn-large dark marginauto margin-top_30"
                    >了解更多</nuxt-link
                  >
                </div>
              </Swiper-slide>
              <Swiper-slide>
                <img src="~assets/images/b_02.png" alt="" srcset="" />
                <div class="spc">
                  <h4 class="titles">養膚專區</h4>
                  <div class="desc">內外兼顧，用天然精華成分，高效養出健康童顏肌</div>
                  <nuxt-link :to="localePath('/')" class="btn-outline btn-large dark marginauto margin-top_30"
                    >了解更多</nuxt-link
                  >
                </div>
              </Swiper-slide>
              <Swiper-slide>
                <img src="~assets/images/b_05.png" alt="" srcset="" />
                <div class="spc">
                  <h4 class="titles">掃油專區</h4>
                  <div class="desc">
                    8分鐘就能讓粉刺痘痘掰掰的面膜，讓底妝光滑舒爽的飾底凝露等各種應付出油煎蛋肌對策通通在這裡!
                  </div>
                  <nuxt-link
                    :to="localePath('/products/Oil_Control')"
                    class="btn-outline btn-large dark marginauto margin-top_30"
                    >了解更多</nuxt-link
                  >
                </div>
              </Swiper-slide>
              <Swiper-slide>
                <img src="~assets/images/b_06.png" alt="" srcset="" />
                <div class="spc">
                  <h4 class="titles">紓壓專區</h4>
                  <div class="desc">
                    療癒的香氛，棉花糖般的舒緩乳霜，每天給自己來一段儀式感的保養小時光，釋放一天的疲憊，讓肌膚彷彿重獲新生吧!
                  </div>
                  <nuxt-link
                    :to="localePath('/products/Relief')"
                    class="btn-outline btn-large dark marginauto margin-top_30"
                    >了解更多</nuxt-link
                  >
                </div>
              </Swiper-slide>
              <Swiper-slide>
                <img src="~assets/images/b_03.png" alt="" srcset="" />
                <div class="spc">
                  <h4 class="titles">親水專區</h4>
                  <div class="desc">
                    沒時間保養? 只想倒頭就睡? 回家就攤在沙發上?
                    懶人專區的保養品是你最佳小幫手，一步驟達到多種功效，睡覺也能同時保養等各種神奇好物幫助你，誰說偷懶不能也很美!
                  </div>
                  <nuxt-link
                    :to="localePath('/products/Hydrophilic')"
                    class="btn-outline btn-large dark marginauto margin-top_30"
                    >了解更多</nuxt-link
                  >
                </div>
              </Swiper-slide>
              <Swiper-slide>
                <img src="~assets/images/b_04.png" alt="" srcset="" />
                <div class="spc">
                  <h4 class="titles">懶人專區</h4>
                  <div class="desc">
                    你知道嗎? 保濕要做到補水，保水，鎖水三個步驟才算完整! 不管乾肌油肌都需要 最完整的保濕聖品就在親水區
                    快來幫肌膚補足滿水位吧!
                  </div>
                  <nuxt-link
                    :to="localePath('/products/Slug')"
                    class="btn-outline btn-large dark marginauto margin-top_30"
                    >了解更多</nuxt-link
                  >
                </div>
              </Swiper-slide>
              <Swiper-slide>
                <img src="~assets/images/b_01.png" alt="" srcset="" />
                <div class="spc">
                  <h4 class="titles">肌膚檢測</h4>
                  <div class="desc">
                    高科技全方位解密肌膚，定位膚況，深入檢測，讓妳的肌膚問題無所遁形，了解妳肌膚的真正需求
                  </div>
                  <nuxt-link :to="localePath('/')" class="btn-outline btn-large dark marginauto margin-top_30"
                    >了解更多</nuxt-link
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
}
</script>
