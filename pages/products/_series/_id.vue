<template>
  <!--eslint-disable vue/no-v-html-->
  <div class="product_item">
    <div class="product_inner white">
      <ul class="row">
        <div class="breadcrumbs margin-top_20">
          <nuxt-link :to="localePath('/')">{{ $t('pages.product_page.home') }}</nuxt-link
          >/
          <nuxt-link :to="localePath(`/products/${series}`)">
            {{ $t(`pages.series_page.series.${series}.name`) }}</nuxt-link
          >/ <nuxt-link to="">{{ $t(`products.${id}.name`) }}</nuxt-link>
        </div>
        <!-- 左邊欄  -->
        <li class="col-lg-7 col-md-12">
          <!-- 大圖 -->
          <div class="product_img">
            <img :src="mainImg" alt="" srcset="" />
          </div>
          <!-- 小圖 -->
          <div class="thumbnail">
            <ul>
              <li v-for="(item, index) in productData.small_images" :key="index">
                <img
                  :ref="index"
                  :src="require(`~/assets/images/TW/${item}`)"
                  alt=""
                  srcset=""
                  @click="mainImgChanging(index)"
                />
              </li>
            </ul>
          </div>
        </li>
        <!-- 右邊欄 -->
        <li class="col-lg-5 col-md-12">
          <!-- 側邊說明 -->
          <div class="product_desc">
            <h2>{{ $t(`${path}.name`) }}</h2>
            <div class="total">
              <span class="weight" v-html="$t(`${path}.capacity`)"></span> /
              <span class="prices">${{ $t(`${path}.price`) }}</span>
            </div>
            <div
              v-if="productData ? productData.description : false"
              class="desc"
              v-html="$t(`${path}.description`)"
            ></div>
            <div class="btn_buy" @click="howToBuy">如何購買</div>
            <div class="detail">
              <section v-if="productData ? productData.skin_suitable : false">
                <a href="#content-1" class="accordion-toggle">{{ suitableTitle }}</a>
                <div id="content-1" class="accordion-content" v-html="$t(`${path}.skin_suitable`)"></div>
              </section>
              <section v-if="productData ? productData.usage : false">
                <a href="#content-2" class="accordion-toggle">{{ $t('pages.product_page.usage') }}</a>
                <div id="content-2" class="accordion-content" v-html="$t(`${path}.usage`)"></div>
              </section>
              <section v-if="productData ? productData.function : false">
                <a href="#content-3" class="accordion-toggle">{{ $t('pages.product_page.function') }}</a>
                <div id="content-3" class="accordion-content" v-html="$t(`${path}.function`)"></div>
              </section>
            </div>
          </div>
        </li>
      </ul>
      <!-- 底下說明  有影片 功能  主要成分-->
      <div class="row product_all-desc">
        <section v-if="productData ? productData.video_source : false">
          <h3>{{ $t('pages.product_page.video') }}</h3>
          <div class="video">
            <video autoplay="autoplay" poster="" preload="auto" loop playsinline muted>
              <source :src="require(`~/assets/images/TW_video/${productData.video_source}`)" type="video/mp4" />
            </video>
          </div>
        </section>
        <section v-if="productData ? productData.principal_components : false">
          <h3>{{ $t('pages.product_page.principal_components') }}</h3>
          <div v-html="$t(`${path}.principal_components`)"></div>
        </section>
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
    return {
      mainImg: '',
    }
  },
  head() {
    return {
      title: `Mary Kay | ${this.productData.name}`,
    }
  },
  computed: {
    path() {
      return `products.${this.id}`
    },
    productData() {
      return this.$i18n.messages[this.$i18n.locale].products[this.id]
    },
    suitableTitle() {
      let text = ''
      if (this.series === 'Nutrition') {
        switch (this.$i18n.locale) {
          case 'en':
            text = 'Applicable'
            break
          case 'zh':
            text = '適用者'
            break
        }
        return text
      } else {
        return this.$i18n.messages[this.$i18n.locale].pages.product_page.skin_suitable
      }
    },
  },
  mounted() {
    if (Object.keys(this.$refs).length) this.mainImg = this.$refs.img_01[0].src
  },
  methods: {
    mainImgChanging(index) {
      this.mainImg = this.$refs[index][0].src
    },
    howToBuy() {
      this.$router.push('/howtobuy')
    },
  },
}
</script>
