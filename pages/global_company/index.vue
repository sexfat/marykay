<template>
  <div class="global">
    <div class="container-xxl">
      <div class="row">
        <div class="breadcrumbs margin-top_20">
          <nuxt-link :to="localePath('/')">{{ $t('pages.product_page.home') }}</nuxt-link> / Mary Kay
          {{ $t('pages.global_company.global_branches') }}
        </div>
      </div>
    </div>

    <div class="banner container-fluid gx-0">
      <img src="~assets/images/HK_layoutD/global_top.jpg" alt="" />
    </div>
    <div class="global_inner container-xxl white">
      <div class="row">
        <div>
          <h4 class="h4 w4 margin-bottom_30">{{ $t('pages.global_company.global_branches') }}</h4>
          <span class="s_font">Mary Kay® Global </span> {{ $t('pages.global_company.global_operating_stations') }}<br />
          {{ $t('pages.global_company.description') }}
        </div>
      </div>
      <div class="row w900">
        <div v-for="(value, key) in links" :key="key" class="t_2c m_5c item">
          <img src="~assets/images/HK_layoutA/icon_heart.png" alt="" />
          <div class="text">{{ $t(`pages.global_company.branches.${key}.location`) }}</div>
          <div class="link">
            <img src="~assets/images/link.svg" alt="" />
          </div>
          <a target="_blank" :href="value.links"></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GlobalCompany',
  computed: {
    links() {
      return this.$i18n.messages[this.$i18n.locale].pages.global_company.branches
    },
  },
}
</script>
