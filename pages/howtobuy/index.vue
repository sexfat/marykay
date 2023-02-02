<template>
  <div class="howtobuy">
    <div class="container-xxl">
      <div class="row">
        <div class="breadcrumbs margin-top_20"><nuxt-link :to="localePath('/')">{{ $t('pages.product_page.home') }}</nuxt-link> / 如何購買</div>
      </div>
    </div>
    <div class="banner container-fluid gx-0">
      <img src="~assets/images/TW_layoutA/img_howtobuy_top.jpg" alt="" />
    </div>
    <div class="about_marykay_inner container-xxl">
      <div class="row">
        <div class="col-xs-6 col-md-6 text_head">
          <img class="logo" src="~assets/images/TW_layoutA/img_howtobuy_logo_white.png" alt="" />
          <h2 class="h2 font1 margin-top_20">玫粉商城</h2>

          <div class="text_body">快速即時的訂購服務、線上限定商品優惠活動</div>
        </div>
      </div>
    </div>
    <!-- <div class="container-fluid gx-0 white margin-bottom_100 h">
      <div class="swiper-container swiper_story">
     
        <Swiper :options="swiperOptions">
     
          <div class="swiper-slide">
            <img class="m" src="~assets/images/TW_layoutA/img_howtobuy-step1_m.jpg" alt="" />
            <img class="d" src="~assets/images/TW_layoutA/img_howtobuy-step1.jpg" alt="" />
          </div>

          <div class="swiper-slide">
            <img src="~assets/images/TW_layoutA/img_howtobuy-step2.jpg" alt="" />
          </div>
      
          <div class="swiper-slide">
            <img src="~assets/images/TW_layoutA/img_howtobuy-step3.jpg" alt="" />
          </div>
    
          <div class="swiper-slide">
            <img src="~assets/images/TW_layoutA/img_howtobuy-step4.jpg" alt="" />
          </div>
   
          <div class="swiper-slide">
            <img src="~assets/images/TW_layoutA/img_howtobuy-step5.jpg" alt="" />
          </div>
   
          <div class="swiper-slide">
            <img src="~assets/images/TW_layoutA/img_howtobuy-step6.jpg" alt="" />
          </div>
        </Swiper>
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
      </div>
    </div> -->
    <div class="spec_b white margin-top_70">
      <div class="container-xxl">
        <div class="row">
          <h4 class="margin-bottom_20 text_center">如何取得玫粉i購物註冊連結呢？</h4>
          <div class="col-xs-12 col-md-6">
            <h4>1.已有玫琳凱美容顧問為我服務</h4>
            <p class="text_left">請向自己專屬的美容顧問索取她個人的玫粉i購物連結後，即可開始你的購物樂趣。</p>
          </div>
          <div class="col-xs-12 col-md-6">
            <h4>2.我尚未有玫琳凱美容顧問為我服務過</h4>
            <p class="text_left">
              我想要訂購玫琳凱產品，但是，還沒有玫琳凱專屬的美容顧問，怎麼辦？
              您可以點選下方的「尋找美容顧問」按鈕，系統將會為您媒合靠您最近的美容顧問與您聯繫。
            </p>
          </div>
          <div class="w"><a class="btn" href="http://apps.marykayintouch.com.tw/Events/BCLocator/Index.aspx" target="_blank" rel="noopener noreferrer">尋找美容顧問</a></div>
          <div class="col-xs-12 col-md-12">
            <!--  eslint-disable prettier/prettier -->
            <p class="text_left">
                <h4 class="margin-bottom_20 text_center">
                【 貼心小提醒 】
                </h4> 
                <ul>
                    <li>・國內配送時間約3-5個工作天，若偶遇休假日將可能會延遲寄送天數1-2個工作天，若您遲遲未收到商品，請盡速與美容顧問連絡。</li>
                    <li>・週六日、國定假日停止配送包裹服務。</li>
                    <li>・選擇超商門市取貨付款，包裹送達後會以簡訊通知領取。</li>
                    <li>・選擇超商門市取貨，請務必攜帶訂購人身分證件，避免領取包裹產生爭議。</li>
                    <li>・若遇包裹異常狀況，請與美容顧問聯繫。</li>
                </ul>  
            </p>
            <!--  eslint-enable prettier/prettier -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Howtobuy',
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
}
</script>
