<template>
  <div class="product">
    <!-- 上方banner -->
    <div class="product_banner container-fluid gx-0">
      <img src="~assets/images/flat-lay-natural-cream-marble-background.jpg" alt="" />
      <h1 class="title showcase"><b>臻時粹顏系列</b></h1>
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
            :to="{ name: `products-series-id___${$i18n.locale}`, params: { id: item, series: 'product_series' } }"
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
      series: params.series,
    }
  },
  head: {
    title: '產品系列',
  },
  computed: {
    productData() {
      // return Object.entries(this.$i18n.messages[this.$i18n.locale].header_links)[this.series][1].series[this.id]
      return this.$i18n.messages[this.$i18n.locale].header_links[this.series].series[this.id]
    },
    products() {
      return this.$i18n.messages[this.$i18n.locale].products
    },
    seriesTitle() {
      return Object.entries(this.$i18n.messages[this.$i18n.locale].header_links)[this.series][0]
    },
  },
  mounted() {
    // console.log(this.products[this.id]);
    console.log(this.$i18n.messages)
  },
}
</script>
