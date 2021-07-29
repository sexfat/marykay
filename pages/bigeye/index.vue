<template>
  <div class="bigeye">
    <div class="container-xxl">
      <div class="row">
        <div class="breadcrumbs margin-top_20">
          <nuxt-link :to="localePath('/')">{{ $t('pages.product_page.home') }}</nuxt-link> /
          {{ $t('pages.bigeye.page_name') }}
        </div>
      </div>
    </div>
    <div class="banner container-fluid gx-0">
      <video autoplay="autoplay" poster="" preload="auto" loop playsinline muted>
        <source src="~assets/images/video/Beauty_2.0.mp4" type="video/mp4" />
      </video>
    </div>
    <div class="spec">
      <img class="d" src="~assets/images/HK_layoutA/bigeye_milebg.jpg" alt="" />
      <img class="m" src="~assets/images/HK_layoutA/bigeye-mile-phone.jpg" alt="" />
    </div>
    <div class="container-xxl white bottom_content">
      <h4 class="w4">{{ $t('pages.bigeye.h4') }}</h4>
      <div class="row gx-3">
        <div v-for="(arr, index) in Object.entries(rowData)" :key="arr[0]" class="col-xs-12 col-md-6">
          <div class="inner">
            <div class="left"><img :src="require(`~/assets/images/HK_layoutA/icon_saleTool0${index + 1}.png`)" /></div>
            <div class="right">
              <h3>{{ arr[1].h3 }}</h3>
              <div>{{ arr[1].txt }}</div>
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
  computed: {
    rowData() {
      return this.$i18n.messages[this.$i18n.locale].pages.bigeye.row
    },
  },
}
</script>
