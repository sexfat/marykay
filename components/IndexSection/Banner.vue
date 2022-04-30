<template>
  <div class="slider index_banner">
    <div class="announce">
      <div class="carousel">
        <div class="logo">
          <img src="~assets/images/logo_marykay-black.svg" alt="" />
          <h3 class="titles">美商玫琳凱公司聲明</h3>
        </div>
        <!-- slider start -->
        <Swiper ref="bannerSwiper" :options="swiperOptions">
          <Swiper-slide class="inner_content">
            美商玫琳凱公司在臺灣發展近31年，我們見證了臺灣直銷產業的進步，作為一間全球性的公司，我們遵守所有業務所在國家的法律規範。近來有特定解除合作關係之夥伴，以及網路謠言針對本公司採取諸多偏激之行為與不實之指控，並於網路煽動不知情之群眾檢舉本公司，已嚴重傷害本公司形象，為避免大眾繼續遭不實謠言誤導，本公司特此聲明如下:
            <div>
              <div class="spec">
                <h5>一、關於粉車</h5>
                <ul>
                  <li>從未聲明粉車之粉紅色為玫琳凱公司專利色。</li>
                  <li>
                    粉車計畫為本公司激勵團隊之<b>獎勵計畫</b>，根據各期挑戰訂定費用補貼，也清楚告知各督導獎勵係依據「月度團隊管理績效」(即團隊
                    月業績)所達不同標準，提供不同數額之「轎車補貼」，未曾宣稱該計畫內容為<b>「贈送粉車」</b>。<a
                      href="https://drive.google.com/file/d/1VxuvA-f7T-CFCwim9DqTePFza6lVWBv9/view"
                      target="_blank"
                      >(見詳情)</a
                    >
                  </li>
                </ul>
              </div>
            </div>
          </Swiper-slide>
          <Swiper-slide class="inner_content">
            <div>
              <h5>二、動物實驗</h5>
              <ul>
                <li>
                  本公司一直以來均秉持<b class="underline">不支持動物實驗</b>之立場，詳情如美國總公司官網
                  <a href="https://www.marykay.com/en-us/about-mary-kay/our-product-promise" target="_blank"
                    >(Our Product Promise (marykay.com))</a
                  >
                  頁面顯示「Mary Kay Does Not Support Animals testing」。
                  <a href="https://drive.google.com/file/d/1wpWq4UW4ApkI1AgBRIZKBfojbBGcZt2-/view" target="_blank"
                    >(見詳情)</a
                  >
                </li>
                <li><b>玫琳凱台灣所銷售的產品均來自美國及韓國等國家，沒有對產品及成分進行任何形式的動物實驗。</b></li>
                <li>
                  目前只有玫琳凱中國基於當地政府機關要求某些產品必須進行動物實驗。一直以來玫琳凱公司都是合法合規的企業，作爲一家在全世界不同市場發展業務的跨國企業，玫琳凱遵守業務所在國家的基本法律法規要求。玫琳凱始終致力於消除動物實驗，並積極和所在國家合作推廣和促進未來可替代動物實驗的其他方法。
                </li>
              </ul>

              <h5>三、產品價格</h5>
              <ul>
                <li>
                  本公司進口各項產品時，均依法向政府繳納規定稅捐，在定價上亦因各項產品課徵進口稅率及公司運輸成本、營運成本、人事成本等等費用並比較過競爭品牌價位後才會做出合理定價。並無網路所指零關稅卻抬高定價之情。<a
                    href="https://drive.google.com/file/d/1z6UupCq-3uDwNPUhi9Pr3uUudhCjvHr6/view"
                    target="_blank"
                    >(見詳情)</a
                  >
                </li>
                <li>
                  其他美國或者跨國企業品牌的產品，也都是用同樣的經營方式訂定各個市場的售價，美國價格不完全等於其他市場的價格。
                </li>
              </ul>
            </div>
          </Swiper-slide>
          <Swiper-slide class="inner_content">
            <div>
              <h5>四、2017直銷企業百大排行</h5>
              <ul>
                <li>
                  本公司於直銷產業媒體<b class="underline">Direct Selling News 2017年世界百大直銷公司排行名列第五</b>
                  <a href="https://www.directsellingnews.com/global-100-lists/" target="_blank">(見詳情)</a
                  >，此為確定之事實。相關資訊可參以下連結:
                  <a href="https://www.directsellingnews.com/global-100-lists/" target="_blank"
                    >https://www.directsellingnews.com/global-100-lists/</a
                  >
                  。
                </li>
              </ul>

              <h5>五、玫琳凱公司於全球確實擁有超過1500項專利</h5>
              <ul>
                <li>
                  本公司於<b>世界各地確實擁有超過1500項專利</b>，此以玫琳凱公司英文名「MARY KAY
                  INC.」作為申請人於全球專利檢索系統查詢即可知悉，非如有心人士散布之僅有「377項」專利云云。相關查詢資料可參考以下連結:
                  <a href="https://gpss4.tipo.gov.tw/gpsskmc/gpssbkm?@@0.35220775498849477" target="_blank"
                    >https://gpss4.tipo.gov.tw/gpsskmc/gpssbkm?@@0.35220775498849477</a
                  >
                  。
                </li>
              </ul>
              <h5>六、膠原蛋白肽產品相關問題</h5>
              <ul>
                <li>
                  本公司膠原蛋白肽固體飲料係委由大江生醫股份有限公司生產，就消費者反應之苦味、沉澱等問題，<b
                    class="underline"
                    >經大江生醫股份有限公司就該品項調查相關情況後，出具報告清楚說明商品並無瑕疵</b
                  ><a href="https://drive.google.com/file/d/1eRshXMOlYSXFbRi1MdXql9cg4uHdPisf/view" target="_blank"
                    >(見詳情)</a
                  >，推論係因儲存環境因素引起，本公司亦就此呼籲各美容顧問於儲存時需多加注意。
                </li>
                <li>且依據玫琳凱公司與各美容顧問簽立之合約，本即約明雙方換貨之權利義務，此部分並無爭議。</li>
              </ul>
            </div>
          </Swiper-slide>
          <Swiper-slide class="inner_content">
            <div>
              <h5>七、招募未成年人</h5>
              <ul>
                <li>
                  民國98年間所受公平交易委員會處分事宜，係因本公司疏失未注意未成年人未檢附法定代理人同意書所導致，<b
                    class="underline"
                    >此後已加強對合作督導及美容顧問宣導法規，並積極於系統上設置自動檢查是否為未成年之機制</b
                  >。<a href="https://drive.google.com/file/d/1fkjSSRcswjVge6Uea1c7iUN_aDRWjGLz/view" target="_blank"
                    >(見詳情)</a
                  >
                </li>
                <li>
                  玫琳凱公司絕對嚴格遵守所在地國家之法律規定，並依照多層次傳銷管理法第16條第2項規定，在未成年人欲參加成為獨立美容顧問前，要求取得其法定代理人的書面允許<a
                    href=" https://drive.google.com/file/d/16-iMnwhoCgYpmK-Ju_W7C4DCwOpMKSg6/view"
                    target="_blank"
                    >(見詳情)</a
                  >，並有專人對所有加入者進行審核，確保手續齊全後才會通過申請。
                </li>
              </ul>

              <h5>八、本票事件</h5>
              <ul>
                <li>
                  針對網路謠傳本公司督導使美容顧問以簽本票之方式購買公司產品一事，除<b class="underline"
                    >未收到類似事件之當事人投訴外，經本公司法務部門進行了解，目前為止公司並無收到任何相關明確證據證明有此事</b
                  >。
                </li>
                <li>
                  依據玫琳凱公司與美容顧問間之協議，美容顧問必須基於正直、誠實及高度責任感的態度處理相互間關係，所有訂單提交公司時，<b>公司只接受信用卡或是網路ATM轉帳方式支付，並嚴格禁止美容顧問以預先支借金錢事後要求簽發本票擔保的方式購入商品</b>，經玫琳凱公司初步查證後，亦未發現有顧問要求簽發本票購買商品之行為。網路有心人士之謠言已嚴重侵害本公司以及該督導之名譽，該督導已向警局報案提告，特此嚴正聲明。
                </li>
              </ul>
            </div>
          </Swiper-slide>
          <Swiper-slide class="inner_content">
            <div>
              <h5>九、本公司係一正派經營之優質傳銷公司，</h5>
              長期致力於提供消費者更優質的產品及服務，對於社會大眾之批評與指教皆虛心接受，<b>然近期遭逢有心人士侵害公司商譽之諸多不實指控，本公司均已提出民、刑事法律訴訟進行訴追</b>，<b
                class="underline"
                >對於意圖藉此強索金錢之惡意行為，本公司再次強調絕不妥協</b
              >，並誠摯感謝廣大消費者對玫琳凱公司之肯定與支持，玫琳凱公司必定堅守承諾，提供最優質安全之產品來回饋消費者的支持。
              <p class="text_right">玫琳凱台灣分公司</p>
            </div>
          </Swiper-slide>
          <div slot="button-prev" class="swiper-button-prev"></div>
          <div slot="button-next" class="swiper-button-next"></div>
        </Swiper>
        <!-- slider end -->
      </div>
    </div>

    <!-- <div class="action">
      <p class="small_title">OUR BRAND</p>
      <div id="a1" class="arrow">
        <nuxt-link :to="{ hash: '#s1' }"><img src="~assets/images/down-arrow-white.svg" alt="" srcset="" /></nuxt-link>
      </div>
    </div> -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      swiperOptions: {
        slidesPerView: 1,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },
    }
  },
}
</script>
