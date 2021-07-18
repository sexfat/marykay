<template>
  <div class="product_item">
    <div class="product_inner white">
      <ul class="row">
        <div class="breadcrumbs margin-top_20"><a href="">首頁</a> /<a href="">臻時粹顏系列</a>/臻時粹顏™精華乳</div>
        <!-- 左邊欄  -->
        <li class="col-lg-7 col-md-12">
          <!-- 大圖 -->
          <div class="product_img">
            <img src="~assets/images/夏艷曬後修護凝露.png" alt="" srcset="" />
          </div>
          <!-- 小圖 -->
          <div class="thumbnail">
            <ul>
              <li><img src="~assets/images/夏艷曬後修護凝露.png" alt="" srcset="" /></li>
              <li><img src="~assets/images/夏艷曬後修護凝露.png" alt="" srcset="" /></li>
              <li><img src="~assets/images/夏艷曬後修護凝露.png" alt="" srcset="" /></li>
              <li><img src="~assets/images/夏艷曬後修護凝露.png" alt="" srcset="" /></li>
            </ul>
          </div>
        </li>
        <!-- 右邊欄 -->
        <li class="col-lg-5 col-md-12">
          <!-- 側邊說明 -->
          <div class="product_desc">
            <h2>{{ $t(`${path}.name`) }}</h2>
            <div class="total">
              <span class="weight"> {{ $t(`${path}.capacity`) }}</span> /
              <span class="prices">{{ $t(`${path}.price`) }}</span>
            </div>
            <div class="desc">
              {{ $t(`${path}.description`) }}
            </div>
            <!-- <div class="btn_buy">如何購買</div> -->
            <div class="detail">
              <section v-if="productData ? productData.skin_suitable : false">
                <a href="#content-1" class="accordion-toggle">適用膚質</a>
                <!--eslint-disable-next-line vue/no-v-html-->
                <div id="content-1" class="accordion-content" v-html="$t(`${path}.skin_suitable`)"></div>
              </section>
              <section v-if="productData ? productData.usage : false">
                <a href="#content-2" class="accordion-toggle">使用方法</a>
                <!--eslint-disable-next-line vue/no-v-html-->
                <div id="content-2" class="accordion-content" v-html="$t(`${path}.usage`)"></div>
              </section>
            </div>
          </div>
        </li>
      </ul>
      <!-- 底下說明  有影片 功能  主要成分-->
      <div class="row product_all-desc">
        <h3>影片</h3>
        <div class="video">
          <video autoplay="autoplay" poster="~assets/images/videos/brand.jpg" preload="auto" loop playsinline muted>
            <source src="~assets/images/video_ind03.mp4" type="video/mp4" />
          </video>
        </div>

        <h3>功能</h3>
        <div>
          •撫平細紋及皺紋。 •顯著提升肌膚緊實度及彈性。<br />
          •極致改善肌膚整體質素及狀態。<br />
          •配方特點：<br />
          通過亞洲膚質測試，適合亞洲人肌膚<br />
          對抗倦容<br />
          擁有淡淡優雅花香<br />
          不易引致暗瘡粉刺<br />

          初次使用*：<br />
          • 膚質變得細緻柔滑<br />
          • 肌膚重拾新生活力<br />
          • 肌膚感覺衰老壓力源逐漸緩解<br />
          • 肌膚更顯光采明亮，更感緊實飽滿<br />

          持續使用三星期*：<br />
          • 膚質顯著提升，變得如絲般光滑<br />
          • 重拾年輕活力及生機<br />
          • 顯著提升肌膚整體質素及狀態<br />
          • 極致提升肌膚緊實度及彈性<br />
          • 日復日使用，顯著改善細紋及皺紋<br />
          • 肌膚煥發青春光芒<br />
          *女性持續早晚使用產品的獨立消費者研究結果<br />
        </div>
        <h3>主要成分</h3>
        <div>
          獨特 Youthfinity Infinite Complex™ 臻時粹顏™玫瑰複合物，糅合三種頂級抗老成分，啟動 3R
          臻時煥膚系統，帶來抵禦、煥活及延緩三重改善老化的功能： RESIST 抵禦外界環境侵害 - 阿爾卑斯永恆玫瑰 (Alpen
          Rose)：喚醒肌膚的天然防護屏障，抵抗外界各種環境壓力侵害 。 REJUNVENATE 煥活肌膚充盈彈性 - 月見草 (Evening
          Primrose)：萃取自月見草籽的精華促進肌膚基質蛋白再生，煥活肌膚的充盈、緊實及彈性。 REDUCE 延緩肌膚內部衰老 -
          三肽技術 (Infinite Tripeptide)：結合 Vitality-Preserving Technology
          活力保存科技，阻止老化蛋白質的產生，提升細胞功能，延緩肌膚內部衰老 • 特別添加活性成分 -
          睡菜葉萃取，幫助皮膚的重要蛋白增生，由內重拾生機，展現年輕活力。
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductItem',
  asyncData({ params }) {
    return {
      id: params.id,
      series: params.series,
    }
  },
  data() {
    return {}
  },
  head: {
    title: '產品頁',
  },
  computed: {
    path() {
      return `products.${this.id}`
    },
    productData() {
      return this.$i18n.messages[this.$i18n.locale].products[this.id]
    },
  },
  mounted() {
    console.log(this.series)
  },
}
</script>
