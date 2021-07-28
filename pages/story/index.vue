<template>
  <div class="story">
    <div class="container-xxl">
      <div class="row">
        <div class="breadcrumbs margin-top_20">
          <nuxt-link :to="localePath('/')">{{ $t('pages.product_page.home') }}</nuxt-link
          >/ 創辦人故事
        </div>
      </div>
    </div>

    <div class="banner container-fluid gx-0">
      <img src="~assets/images/TW_layoutA/img_about_story.jpg" alt="" />
    </div>
    <div class="about_marykay_inner container-xxl">
      <div class="row">
        <div class="col-xs-6 col-md-6 text_head">
          <img style="width: 70px" src="~assets/images/com_colorLine.png" alt="" />
          <h2 class="h2 font1 margin-top_20">時代下的傳奇女王！玫琳凱艾施的漂亮人生 單親媽媽的逆襲之路</h2>

          <div class="text_body">
            力從扶養三個年幼子女、經濟拮据的單親媽媽，到成為國際性的化妝品王國女王，成就無數榮耀，點亮世界，影響數以百萬計的女性發光發熱，勇敢追尋自己的生活並成就夢想！
          </div>
        </div>
      </div>
    </div>
    <div class="spec">
      <div class="container-xxl">
        <div class="row">
          <div class="col-xs-12 col-md-12">
            <h4 class="margin-bottom_30">「你能做到 」一句話的力量，勝過千言萬語</h4>
            <p class="text_left">
              從7歲開始，小小的玫琳凱就擔負起照顧父親、整理家務的責任。當玫琳凱有點畏縮時，媽媽就會溫柔地告訴她：「別擔心，你能做到的。」這句話從此影響玫琳凱的一生，此後遇到任何猶豫不決的情況時，「妳能做到」這句話總會浮現在她腦海。
              不只是你能做到，懂得自己的極限、柔軟、有彈性、懂得變通，「人一定要懂得如何面對失敗，那是遲早會遇上的。我很喜歡一句話『每失敗一次，就離成功更近了些。」玫琳凱說。
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="container-xxl white margin-top_60 margin-bottom_100 bottom">
      <div class="row gx-3">
        <h4 class="text_center margin-bottom_30">玫琳凱起源</h4>
        <div class="col-xs-12 col-md-6">
          <div class="inner">
            <div class="left"><img src="~assets/images/TW_layoutA/icon_story1.png" /></div>
            <div class="right">
              <div>
                在直銷業努力了25年之後，玫琳凱毅然地決定退休，
                她想要建立一個「美夢公司」，成為支持婦女的力量．提供機會，讓女性對自己、對生活都能有更深切的想像和盼望，增加快樂與正面的指數。
              </div>
            </div>
          </div>
        </div>
        <div class="col-xs-12 col-md-6">
          <div class="inner">
            <div class="left"><img src="~assets/images/TW_layoutA/icon_story2.png" /></div>
            <div class="right none">
              <div>
                在1963年決定以5000美元存款創立MARYKAY，製造保養樣品，並招募9位美容顧問，開始銷售產品、推廣業務。在玫琳凱公司成立的第一年，玫琳凱美容顧問人數就由9名暴風成長至300名，年業績將近20萬美元！
              </div>
            </div>
          </div>
        </div>
        <div class="col-xs-12 col-md-6">
          <div class="inner">
            <div class="left"><img src="~assets/images/TW_layoutA/icon_story3.png" /></div>
            <div class="right">
              <div>
                到了1980年代，玫琳凱兼職的美容顧問年收入就有約四千美元，有四千位業務督導的平均年薪達六萬美元，玫琳凱非常自豪地說，在她的公司裡，女性年收入五萬美元的人數高居全美第一！
              </div>
            </div>
          </div>
        </div>
        <div class="col-xs-12 col-md-6">
          <div class="inner">
            <div class="left"><img src="~assets/images/TW_layoutA/icon_story4.png" /></div>
            <div class="right none">
              <div>
                1969年建立粉紅轎車獎勵計劃，成為象徵美容顧問奔馳的獎盃，這就是玫琳凱的粉紅色力量，柔和但又堅強。透過顏色不只能美化我們的外在，更能帶來能量，改變生活，增加快樂與正面的成功指數。
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid gx-0 white margin-bottom_100">
      <div class="swiper-container swiper_story">
        <!-- Additional required wrapper -->
        <Swiper :options="swiperOptions">
          <!-- Slides -->
          <div class="swiper-slide">
            <div class="txt">
              <h4>1963年</h4>
              9月13日玫琳凱艾施女士，在美國達拉斯佔地約14坪店面，<br />創辦玫琳凱化妝品公司
            </div>
            <img src="~assets/images/TW_layoutA/img_about_story1963.jpg" alt="" />
          </div>
          <!-- s -->
          <div class="swiper-slide">
            <div class="txt">
              <h4>1978年</h4>
              獲得THE HORATIO ALGER AWARD（白手起家獎）全美國最具成就的領導人大獎
            </div>
            <img src="~assets/images/TW_layoutA/img_about_story1978.jpg" alt="" />
          </div>
          <!-- s -->
          <div class="swiper-slide">
            <div class="txt">
              <h4>1984年</h4>
              玫琳凱第一本書「玫琳凱談人的管理」上市，出版後受到全美最重要的商業報刊「華爾街日報」的大力推崇
              1985年：玫琳凱艾施女士被THE WORLD ALMANAC AND BOOK OF FACTS譽為「美國最具影響力的25名女性之一」
            </div>
            <img src="~assets/images/TW_layoutA/img_about_story1984.jpg" alt="" />
          </div>
          <!-- s -->
          <div class="swiper-slide">
            <div class="txt">
              <h4>1991年</h4>
              玫琳凱在亞洲第一間成立的分公司-台灣
            </div>
            <img src="~assets/images/TW_layoutA/img_about_story1991.jpg" alt="" />
          </div>
          <!-- s -->
          <div class="swiper-slide">
            <div class="txt">
              <h4>1993年</h4>
              玫琳凱成立了「玫琳凱慈善基金會」用來幫助癌症研究機構及婦女組織
              玫琳凱公司首次列名財星500大公司，並第二度名列，「全美最值得工作的一百家公司」
            </div>
            <img src="~assets/images/TW_layoutA/img_about_story_1993.jpg" alt="" />
          </div>
          <!-- s -->
          <div class="swiper-slide">
            <div class="txt">
              <h4>1995年</h4>
              財星雜誌將玫琳凱公司列為「全美最值得推崇的公司」
            </div>
            <img src="~assets/images/TW_layoutA/img_about_story1995.jpg" alt="" />
          </div>
          <!-- s -->
          <div class="swiper-slide">
            <div class="txt">
              <h4>1999年</h4>
              德克薩斯婦女商會認可為世紀傑出女性
            </div>
            <img src="~assets/images/TW_layoutA/img_about_story_1999.jpg" alt="" />
          </div>
          <!-- s -->
          <div class="swiper-slide">
            <div class="txt">
              <h4>2000年</h4>
              生活電視網提名玫琳凱女士為20世紀最傑出的商業界女性
            </div>
            <img src="~assets/images/TW_layoutA/img_about_story_2000.jpg" alt="" />
          </div>
          <!-- s -->
          <div class="swiper-slide">
            <div class="txt">
              <h4>2003年</h4>
              美國著名私校貝勒大學評為「美國歷史賶最偉大的女性創業家」
            </div>
            <img src="~assets/images/TW_layoutA/img_about_story_2003.jpg" alt="" />
          </div>
          <!-- s -->
          <div class="swiper-slide">
            <div class="txt">
              <h4>2004年</h4>
              玫琳凱女士所創立的「玫琳凱基金會」獲得倫敦肯辛頓宮所頒發的人道主義玫瑰獎
            </div>
            <img src="~assets/images/TW_layoutA/img_about_story_2004.jpg" alt="" />
          </div>
          <!-- s -->
          <div class="swiper-slide">
            <div class="txt">
              <h4>2011年</h4>
              美國富比士雜誌針對消費者進行品牌忠實度調查，玫琳凱獲選為第10名，是唯一進前10名的化妝品牌
            </div>
            <img src="~assets/images/TW_layoutA/img_about_story_2011.jpg" alt="" />
          </div>

          <!-- s -->
          <div class="swiper-slide">
            <div class="txt">
              <h4>2017年</h4>
              入選直銷新聞百大企業排行-全球五大直銷品牌
            </div>
            <img src="~assets/images/TW_layoutA/img_about_story_2017.jpg" alt="" />
          </div>
          <!-- s -->
          <div class="swiper-slide">
            <div class="txt">
              <h4>2019年</h4>
              玫琳凱獲得2019全球職場100大企業研究（Global Workplace 100 Study）中全球最值得工作雇主之第42名
            </div>
            <img src="~assets/images/TW_layoutA/img_about_story_2019.jpg" alt="" />
          </div>
          <!-- s -->
          <div class="swiper-slide">
            <div class="txt">
              <h4>2019年</h4>
              玫琳凱攜手聯合國機構推出女性創業加速器計畫策略合作，積極促進全球女性創業
            </div>
            <img src="~assets/images/TW_layoutA/img_about_story_20191.jpg" alt="" />
          </div>
          <!-- s -->
          <div class="swiper-slide">
            <div class="txt">
              <h4>NOW</h4>
              玫琳凱．艾施女士最驕傲的遺產就是如今全球有近40個國家傳承賦予女性創業力量的方式，幫助成千上萬的女性自信、美麗
            </div>
            <img src="~assets/images/TW_layoutA/img_about_story_now.jpg" alt="" />
          </div>
        </Swiper>
        <!-- If we need navigation buttons -->
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Story',
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
