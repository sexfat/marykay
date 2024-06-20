<template>
  <!-- eslint-disable vue/no-v-html -->
  <div class="awards">
    <div class="container-xxl">
      <div class="row">
        <div class="breadcrumbs margin-top_20">
          <nuxt-link :to="localePath('/')">{{ $t('pages.product_page.home') }}</nuxt-link> /
          {{ $t('pages.brand_awards.page_name') }}
        </div>
      </div>
    </div>
    <div class="banner container-fluid gx-0">
      <img src="~assets/images/awards/Claims-Hero1.jpg" alt="" />
    </div>
    <div class="awards_inner container-xxl white">
      <div class="row">
        <div class="col-xs-12 col-md-12 text_head">
          <img style="width: 70px" src="~assets/images/com_colorLine.png" alt="" />
          <h2 class="h2 font1 margin-top_20" v-html="$t('pages.brand_awards.h2')"></h2>

          <div class="text_body" v-html="$t('pages.brand_awards.text_body')"></div>
        </div>
      </div>
    </div>
    <div class="spec">
      <div class="container-xxl">
        <div class="row">
          <img src="~assets/images/awards/pink_archmenet.jpg" alt="" />
        </div>
      </div>
    </div>
    <div class="awward_content container-xxl white">
      <div class="row">
        <div class="w996" v-html="$t('pages.brand_awards.awward_content')"></div>
        <div class='un'><img src='~assets/images/awards/un.jpg'/></div>
        <div class="w996" v-html="$t('pages.brand_awards.awward_content_part2')"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BrandAwards',
}
</script>
