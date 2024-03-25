<template>
  <div class="tech">
    <div class="container-xxl">
      <div class="row">
        <div class="breadcrumbs margin-top_20">
          <nuxt-link :to="localePath('/')">{{ $t('pages.product_page.home') }}</nuxt-link> /
          {{ $t('pages.technological_innovation.title') }}
        </div>
      </div>
    </div>
    <div class="banner container-fluid gx-0">
      <img src="~assets/images/HK_layoutA/s5_banner_new.jpg" alt="科研創新" />
    </div>
    <div class="tech_inner container-xxl white">
      <div class="row">
        <div class="col-xs-6col-md-6 text_head">
          <img style="width: 70px" src="~assets/images/com_colorLine.png" alt="" />
          <h2 class="h2 font1 margin-top_20">{{ $t('pages.technological_innovation.title') }}</h2>

          <div class="text_body">
            <ul>
              <li>{{ $t('pages.technological_innovation.li_1') }}</li>
              <li>{{ $t('pages.technological_innovation.li_2') }}</li>
              <li>{{ $t('pages.technological_innovation.li_3') }}</li>
              <li>{{ $t('pages.technological_innovation.li_4') }}</li>
              <li>{{ $t('pages.technological_innovation.li_5') }}</li>
              <li>{{ $t('pages.technological_innovation.tech_2') }}</li>
              <li>{{ $t('pages.technological_innovation.tech_3') }}</li>
            </ul>
          </div>
        </div>
        <!-- <div class="row text_center px-2 margin-top_80">...</div> -->
      </div>
    </div>
    <div class="tech_content container-xxl white margin-bottom_150">
      <div class="row">
        <div class="best col-xs-12 col-md-4">
          <img src="~assets/images/HK_layoutA/tech_invo-02.png" alt="" />
          <div class="desc m35">{{ $t('pages.technological_innovation.tech_1') }}</div>
        </div>
        <div class="best col-xs-12 col-md-4">
          <img src="~assets/images/HK_layoutA/tech_invo-03.jpg" alt="" srcset="" />
          <div class="desc">{{ $t('pages.technological_innovation.tech_2') }}</div>
        </div>
        <div class="best col-xs-12 col-md-4">
          <img src="~assets/images/HK_layoutA/tech_invo-04.jpg" alt="" />
          <div class="desc">{{ $t('pages.technological_innovation.tech_3') }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TechnologicalInnovation',
}
</script>
