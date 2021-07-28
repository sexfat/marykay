<template>
  <div class="pink">
    <div class="container-xxl">
      <div class="row">
        <div class="breadcrumbs margin-top_20">
          <nuxt-link :to="localePath('/')">{{ $t('pages.product_page.home') }}</nuxt-link> / 粉紅色公益
        </div>
      </div>
    </div>

    <div class="banner container-fluid gx-0">
      <img src="~assets/images/TW_layoutA/img_about_pink.jpg" alt="" />
    </div>
    <div class="about_marykay_inner container-xxl white">
      <div class="row">
        <div class="col-xs-6 col-md-6 text_head">
          <img style="width: 70px" src="~assets/images/com_colorLine.png" alt="" />
          <h2 class="h2 font1 margin-top_20">做美妝也要做公益！</h2>

          <div class="text_body">
            力量帶來希望，挺身而進的玫琳凱企業社會責任，把腳放在油門上，用粉紅力量帶你前進，活出自信、平等的態度。
          </div>
        </div>
      </div>
    </div>
    <div class="spec">
      <div class="container-xxl">
        <div class="row">
          <div class="col-xs-12 col-md-4">
            <img class="logo" src="~assets/images/TW_layoutA/img_about_logo.png" alt="logo" />
          </div>
          <div class="col-xs-12 col-md-8">
            <div class="pinkbox">
              <h4 class="margin-bottom_30">Pink love 粉紅讓世界更美好</h4>
              <p class="text_left">
                一支唇膏，改善全球女性與孩童的生活，玫琳凱證明了唇膏的功能，不僅能幫助女性美麗，還可以改變世界。玫琳凱透過Pink
                Changing
                Lives計畫，已捐出超過數百萬美元作為公益使用。每年玫琳凱皆會推出愛心義賣的專屬商品，扣除營運成本全數捐出予慈善機構。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="spec_2">
      <div class="container-fluid">
        <div class="row">
          <div class="col-xs-12 col-md-6 col-lg-6 nomargin">
            <img src="~assets/images/TW_layoutA/img_about_pinkbn2.jpg" alt="brand" />
          </div>
          <div class="col-xs-12 col-md-6 col-lg-6 flex">
            <div class="spec_inner">
              <h4 class="t1 margin-bottom_20">玫瑰綻放 美好成長</h4>
              <p>
                在台灣，我們長期與家扶基金會合作超過15年，共同發起『玫瑰綻放愛心助偏貧女童計劃』年年舉辦關懷公益活動，透過販賣愛心義賣商品，幫助數千名弱勢家庭女童，捐獻超過1800萬元。<br />
              </p>
              <p>
                透過改善女童的讀書環境與資源及提供獎助學金，打好學習成長的穩固基礎道路，「教育翻轉人生，托起美好未來」走出貧困，擁有更美好的未來，讓她們相信能翻轉自己與家庭未來的關鍵．綻放如玫瑰般的亮麗丰采，他們的人生將因玫琳凱而更積極邁向夢想！
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row text_center margin-top_80 white bottom">
      <h3>玫瑰綻放愛心助偏貧女童計畫-重要紀事</h3>
      <div class="margin-top_20 flex">
        <div class="list">
          <div>
            <h3>3486m+</h3>
            愛心募款活動
          </div>
        </div>
        <div class="list">
          <div>
            <h3>15年+</h3>
            助偏貧女童計畫
          </div>
        </div>
        <div class="list">
          <div>
            <h3>10+</h3>
            各地家扶基金會
          </div>
        </div>
        <div class="list">
          <div>
            <h3>4000+</h3>
            愛心禮盒
          </div>
        </div>
      </div>
    </div>

    <div class="container-fluid gx-0 white margin-bottom_100">
      <div class="swiper-container swiper_pink">
        <!-- Additional required wrapper -->
        <Swiper :options="swiperOptions">
          <!-- Slides -->
          <div class="swiper-slide">
            <div class="txt">
              <h4>2021年1月</h4>
              玫琳凱與雲林家扶合作發起「玫瑰綻放愛心助偏貧女童計畫」持續15年，今年剛好是玫琳凱30週年紀念，希望讓家扶小朋友過年前有場難忘的園遊會又能幫助受扶家庭因而舉辦這場公益市集，由受扶家庭擺攤，用自己手工技藝創造收入。
              30週年紀念特別企劃「玫琳凱粉紅泡泡園遊會」
              號召旗下130名美容顧問共襄盛舉，前往雲林北港武德宮，陪伴雲林家扶親子感受大大的愛與關懷，在過年前度過難忘又溫馨的園遊會
              公益與美食、表演結合，不只有愛而且非常美味，讓受扶家庭在年前深深感受溫暖的時光、溫暖的味道、溫暖的陪伴。
            </div>
            <img src="~assets/images/TW_layoutA/img_about_pink2021.jpg" alt="" />
          </div>
          <!-- s -->
          <div class="swiper-slide">
            <div class="txt">
              <h4>2019年12月</h4>
              2005年起，與雲林家扶中心合作辦理「偏遠地區貧困兒童教育紮根安學計劃」，有750位以上國小家扶童受惠。
              玫琳凱不只是解決偏鄉兒童學習困乏的困境，今年我們用行動；給予小朋友最實質的關心與陪伴，因而促成這次「粉車有愛、魅力出遊」行動。
              展現女力報到的精神，用行動給予家扶學童最實質的關心和陪伴，玫琳凱出動專屬的形象粉車，搭載雲林家扶學童出遊，用愛陪伴野餐及進行團康活動，讓家扶學童歡度周末。
              我們相信世界上最棒的語言是微笑，最珍貴的寶物是孩子的笑容。
            </div>
            <img src="~assets/images/TW_layoutA/img_about_pink2019.jpg" alt="" />
          </div>
          <!-- s -->
          <div class="swiper-slide">
            <div class="txt">
              <h4>2018年1月</h4>
              玫琳凱邀請家扶兒童到美麗華摩天廣場一起同歡，搭乘特製「粉紅摩天輪」。當時捐款已超過1700萬，幫助了3500名學童改善讀書環境及提供助學獎金。
            </div>
            <img src="~assets/images/TW_layoutA/img_about_pink2018.jpg" alt="" />
          </div>
          <!-- s -->
          <div class="swiper-slide">
            <div class="txt">
              <h4>2011年3月</h4>
              玫琳凱在台成立20週年，捐助家扶金額總計648萬元，超過1700名偏貧地區女童受惠。歡慶在台20週年，首次推出限量「熊熊愛心-柔嫩護手霜愛心禮盒」，受到銷售團隊與顧客高度支持，短短一個月4000個禮盒隨即售鑿。禮盒銷售利潤所得全數捐助玫瑰綻放愛心計畫。來自雲林三位女童在事業發展會議帶來親手繪製的圖畫，送給幸運的捐款美容顧問，以豐富的色彩，感謝玫琳凱豐富他們的人生。
            </div>
            <img src="~assets/images/TW_layoutA/img_about_pink2011.jpg" alt="" />
          </div>
          <!-- s -->
          <div class="swiper-slide">
            <div class="txt">
              <h4>2010年8月</h4>
              「玫瑰綻放愛心計畫」捐款總額累計超過538萬元，幫助超過1400名偏貧地區女童。來自台中家扶的雙胞胎女童參與今年研討會並帶來動感十足的熱情舞蹈「牛仔粉忙」，用他們對生命的熱誠回應玫琳凱的樂施。
            </div>
            <img src="~assets/images/TW_layoutA/img_about_pink2010.jpg" alt="" />
          </div>
          <!-- s -->
          <div class="swiper-slide">
            <div class="txt">
              <h4>2009年8月</h4>
              「玫瑰綻放愛心計畫」邁入第5年，捐款總額累計超過400萬元，幫助超過1000名偏貧地區女童改善讀書環境與資源，送愛心到女童家的足跡遍佈了台灣每個角落。13位來自彰化的家扶女童參與今年研討會並帶來「歡天喜地慶佳節」精彩演出，只是為了告訴我們-玫琳凱謝謝妳！
            </div>
            <img src="~assets/images/TW_layoutA/img_about_pink2009.jpg" alt="" />
          </div>
          <!-- s -->
          <div class="swiper-slide">
            <div class="txt">
              <h4>2008年8月</h4>
              首次推出【美麗加分】（Beauty that
              Count）玫琳凱全球愛心送暖計畫，台灣地區將愛心義賣唇膏銷售利潤所得，捐給家扶；在銷售團隊與員工熱烈支持下
              再次順利達成募款目標100萬元，以提供50位在校表現優異女童獎助學金，及幫助250位偏遠地區女學童安學及硬體設備書桌椅與書籍。研討會上，南投地區家扶女童透過「感謝有你，玫琳凱」話劇表達由衷的感謝。
            </div>
            <img src="~assets/images/TW_layoutA/img_about_pink2008.jpg" alt="" />
          </div>
          <!-- s -->
          <div class="swiper-slide">
            <div class="txt">
              <h4>2006年5-8月</h4>
              第二屆愛心募款活動提前於玫琳凱．艾施女士生日5月開鈸，表達對他最深的思念與敬意。8月研討會，2位家扶受助女童特別親臨現場，像姐妹顧問線上線上親筆環境、購買書桌椅及照明設備目標。2007年3月第二屆玫瑰綻放愛心天使親送書桌椅至桃園、彰化、台南受助女童家活動有更多督導與姐妹顧問熱情參與。玫琳凱人以實際行動展現「付出是人生中最大喜樂之一，能無私自願付出，實在是一件很幸福的事」。
            </div>
            <img src="~assets/images/TW_layoutA/img_about_pink200605.jpg" alt="" />
          </div>
          <!-- s -->
          <div class="swiper-slide">
            <div class="txt">
              <h4>2006年2-3月</h4>
              由銷售團隊及公司主管組成的愛心天使親送課外讀物及書桌椅至受助女童家活動，受到媒體熱烈報導。當看見這些艱困環境中成長小女孩坐在新桌椅前，認真讀著嶄新課外書籍，臉上滿足歡喜表情，玫琳凱人的樂施精神、玫琳凱粉紅力量，已向更寬更遠地方延伸。
            </div>
            <img src="~assets/images/TW_layoutA/img_about_pink200602.jpg" alt="" />
          </div>
          <!-- s -->
          <div class="swiper-slide">
            <div class="txt">
              <h4>2005年8月</h4>
              首次與家扶基金會合作發起「玫瑰綻放愛心募款活動」，愛心募款順利達成新台幣100萬目標，為澎湖、台東、花蓮、屏東、雲林超過500名女童改善讀書環境、購買書桌椅及照明設備。玫瑰綻放愛心募款所得於2006年1月銷售團隊領導人的「領袖會議」正式捐給家扶基金會。
            </div>
            <img src="~assets/images/TW_layoutA/img_about_pink2005.jpg" alt="" />
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
  name: 'Pink',
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
