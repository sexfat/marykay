<template>
  <div class="story">
    <div class="container-xxl">
      <div class="row">
        <div class="breadcrumbs margin-top_20">
          <nuxt-link :to="localePath('/')">{{ $t('pages.product_page.home') }}</nuxt-link> / 粉紅綠色態度
        </div>
      </div>
    </div>

    <div class="banner container-fluid gx-0">
      <img src="~assets/images/TW_layoutA/img_about_green_top.jpg" alt="" />
    </div>

    <div class="container-xxl white margin-top_60 margin-bottom_100 bottom">
      <div class="row gx-3">
        <div class="col-xs-12 col-md-6">
          <div class="inner">
            <div class="left"><img src="~assets/images/HK_layoutA/icon_eco01.png" /></div>
            <div class="right">
              <h3>全球再循環計畫</h3>
              <div>
                玫琳凱是全球最早制定循環計畫的公司，MARYKAY全球生產中心，每天透過再循環計畫，針對產品的包裝、紙、塑料等進行循環使用。
              </div>
            </div>
          </div>
        </div>
        <div class="col-xs-12 col-md-6">
          <div class="inner">
            <div class="left"><img src="~assets/images/HK_layoutA/icon_eco02.png" /></div>
            <div class="right none">
              <h3>100％生物降解包裝物料</h3>
              <div>
                生物降解包裝物料是可以在自然界降解的材質， MARY
                KAY運送產品時使用的包裝填充物，是由可再生栗米和馬鈴薯澱粉組成的可生物降解包裝物料製造
              </div>
            </div>
          </div>
        </div>
        <div class="col-xs-12 col-md-6">
          <div class="inner">
            <div class="left"><img src="~assets/images/HK_layoutA/icon_eco03.png" /></div>
            <div class="right">
              <h3>零堆填生產中心</h3>
              <div>
                MARY
                KAY在美國的生產中心，已實現零垃圾埋填，亞太區生產中心則建立可處理150頓的廢水處理站，實行『廢水排放』、『固體廢棄物零填埋』的環保目標。
              </div>
            </div>
          </div>
        </div>
        <div class="col-xs-12 col-md-6">
          <div class="inner">
            <div class="left"><img src="~assets/images/HK_layoutA/icon_eco04.png" /></div>
            <div class="right none">
              <div>
                <h3>環保設計包裝</h3>
                MARY KAY提供創新、環保的產品及包裝， 採用可重複使用的產品設計， 例如MARY
                KAY的彩妝盒可重複使用的磁石設計，任何彩妝品可隨意組合加進彩妝盒，減少更換浪費
              </div>
            </div>
          </div>
        </div>
        <div class="col-xs-12 col-md-6">
          <div class="inner">
            <div class="left"><img src="~assets/images/HK_layoutA/icon_eco05.png" /></div>
            <div class="right">
              <div>
                <h3>100％再生能源使用</h3>
                MARY KAY全球總部和全球生產中心是由100%的可再生能源提供動力！
              </div>
            </div>
          </div>
        </div>
        <div class="col-xs-12 col-md-6">
          <div class="inner">
            <div class="left"><img src="~assets/images/HK_layoutA/icon_eco06.png" /></div>
            <div class="right none">
              <div>
                <h3>全球植樹達到100萬棵</h3>
                於全球分公司活動中種植超過100萬棵樹木
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid gx-0 margin-bottom_100">
      <img class="d" src="~assets/images/TW_layoutA/img_about_green_bottom_d.jpg" alt="green marykaytaiwan" />
      <img class="m" src="~assets/images/TW_layoutA/img_about_green_bottom_m.jpg" alt="green marykaytaiwan" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Green',
}
</script>
