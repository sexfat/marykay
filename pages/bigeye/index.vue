<template>
  <div class="bigeye">
    <div class="container-xxl">
      <div class="row">
        <div class="breadcrumbs margin-top_20">
          <nuxt-link :to="localePath('/')">{{ $t('pages.product_page.home') }}</nuxt-link> / 大眼睛
        </div>
      </div>
    </div>
    <div class="banner container-fluid gx-0">
      <video autoplay="autoplay" poster="images/videos/brand.jpg" preload="auto" loop playsinline muted>
        <source src="~assets/images/video/Beauty_2.0.mp4" type="video/mp4" />
      </video>
    </div>
    <div class="spec">
      <img class="d" src="~assets/images/HK_layoutA/bigeye_milebg.jpg" alt="" />
      <img class="m" src="~assets/images/HK_layoutA/bigeye-mile-phone.jpg" alt="" />
    </div>
    <div class="container-xxl white bottom_content">
      <h4 class="w4">個人專屬肌膚檢測</h4>
      <div class="row gx-3">
        <div class="col-xs-12 col-md-6">
          <div class="inner">
            <div class="left"><img src="~assets/images/HK_layoutA/icon_saleTool01.png" /></div>
            <div class="right">
              <h3>1.超越時空限制</h3>
              <div>手機自拍即能自我檢測肌膚狀況</div>
            </div>
          </div>
        </div>
        <div class="col-xs-12 col-md-6">
          <div class="inner">
            <div class="left"><img src="~assets/images/HK_layoutA/icon_saleTool02.png" /></div>
            <div class="right none">
              <h3>2.高科技AI人工智慧</h3>
              <div>400萬張以上照片大數據分析為肌膚解密</div>
            </div>
          </div>
        </div>
        <div class="col-xs-12 col-md-6">
          <div class="inner">
            <div class="left"><img src="~assets/images/HK_layoutA/icon_saleTool03.png" /></div>
            <div class="right">
              <h3>3.12大面向完整解析</h3>
              <div>客製化專屬肌膚分析報告 拍張照就可以了解自己的肌膚跟最適合的保養品</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Bigeye',
}
</script>
