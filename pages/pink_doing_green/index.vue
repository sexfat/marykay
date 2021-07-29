<template>
  <div class="story">
    <div class="container-xxl">
      <div class="row">
        <div class="breadcrumbs margin-top_20">
          <nuxt-link :to="localePath('/')">{{ $t('pages.product_page.home') }}</nuxt-link> /
          {{ $t('pages.pink_doing_green.page_name') }}
        </div>
      </div>
    </div>
    <div class="banner container-fluid gx-0">
      <img src="~assets/images/HK_layoutA/img_about_green_top.jpg" alt="" />
    </div>
    <div class="container-xxl white margin-top_60 margin-bottom_100 bottom">
      <div class="row gx-3">
        <div v-for="(item, index) in Object.entries(rowtData)" :key="item[0]" class="col-xs-12 col-md-6">
          <div class="inner">
            <div class="left"><img :src="require(`~/assets/images/HK_layoutA/icon_eco0${index + 1}.png`)" /></div>
            <div class="right">
              <h3>{{ item[1].h3 }}</h3>
              <div>
                {{ item[1].text }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid gx-0 margin-bottom_100">
      <img class="d" src="~assets/images/HK_layoutA/img_about_green_bottom_d.jpg" alt="green marykaytaiwan" />
      <img class="m" src="~assets/images/HK_layoutA/img_about_green_bottom_m.jpg" alt="green marykaytaiwan" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'PinkDoingGreen',
  computed: {
    rowtData() {
      return this.$i18n.messages[this.$i18n.locale].pages.pink_doing_green.row
    },
  },
}
</script>
