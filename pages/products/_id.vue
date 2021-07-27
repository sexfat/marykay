<template>
  <div class="product">
    <!-- 上方banner -->
    <div class="product_banner container-fluid gx-0">
      <img :src="require(`~/assets/images/HK_prodBanner/${bannerImgSrc}`)" alt="" />
      <h1 class="title container-xxl" :class="{ '-black': $i18n.messages['zh'].pages.series_page.series[id].black }">
        <div class="st">{{ $i18n.messages['en'].pages.series_page.series[id].banner_title }}</div>
        {{ $i18n.messages['zh'].pages.series_page.series[id].name }}
      </h1>
    </div>
    <!-- 底下產品 -->
    <div class="product_content container-xl">
      <ul class="row">
        <div class="breadcrumbs">
          <nuxt-link :to="localePath('/')">{{ $t('pages.product_page.home') }}</nuxt-link> /
          <nuxt-link to="">{{ $t(`pages.series_page.series.${id}.name`) }}</nuxt-link>
        </div>
        <li
          v-for="(item, index) in productData.products"
          :key="index"
          class="col-6 col-md-6 col-lg-4 white text_center"
        >
          <nuxt-link
            :to="{ name: `products-series-id___${$i18n.locale}`, params: { id: item, series: id } }"
          ></nuxt-link>
          <img :src="require(`~/assets/images/HK/${products[item].small_images.img_01}`)" alt="" />
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
  head() {
    return {
      title: `Mary Kay | ${this.id}`,
    }
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
      return this.$i18n.messages[this.$i18n.locale].pages.series_page.series[this.id].name
    },
    bannerImgSrc() {
      return this.$i18n.messages[this.$i18n.locale].pages.series_page.series[this.id].header_img
    },
  },
}
</script>

<style lang="scss">
.-black {
  color: black !important;
}
</style>
