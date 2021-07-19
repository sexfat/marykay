<template>
  <div class="product">
    <!-- 上方banner -->
    <div class="product_banner container-fluid gx-0">
      <img :src="require(`~/assets/images/series/${bannerImgSrc}`)" alt="" />
      <h1 class="title showcase">
        <b> {{ $t(`pages.series_page.series.${id}.name`) }} </b>
      </h1>
    </div>
    <!-- 底下產品 -->
    <div class="product_content container-xl">
      <ul class="row">
        <li
          v-for="(item, index) in productData.products"
          :key="index"
          class="col-lg-4 col-md-6 col-xs-6 white text_center"
        >
          <nuxt-link
            :to="{ name: `products-series-id___${$i18n.locale}`, params: { id: item, series: title } }"
          ></nuxt-link>
          <img src="~assets/images/夏艷曬後修護凝露.png" alt="" />
          <dl>
            <dd>
              {{ $t(`products.${item}.name`) }}
            </dd>
            <dt>
              {{ $t(`products.${item}.price`) }}
            </dt>
          </dl>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Product',
  asyncData({ params }) {
    return {
      id: params.id,
    }
  },
  head: {
    title: '產品系列',
  },
  computed: {
    series() {
      return this.$i18n.messages[this.$i18n.locale].pages.series_page.series[this.id].header_links
    },
    productData() {
      return this.$i18n.messages[this.$i18n.locale].header_links[this.series].series[this.id]
    },
    products() {
      return this.$i18n.messages[this.$i18n.locale].products
    },
    title() {
      return this.$i18n.messages.en.pages.series_page.series[this.id].name
    },
    bannerImgSrc() {
      return this.$i18n.messages.en.pages.series_page.series[this.id].header_img
    },
  },
  mounted() {
    // console.log(this.$i18n.messages)
  },
}
</script>
