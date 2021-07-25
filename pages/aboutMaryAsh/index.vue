<template>
  <div class="about_marykay_ash">
    <div class="container-xxl">
      <div class="row">
        <div class="breadcrumbs margin-top_20"><a href="">首頁</a> / 關於Mary Kay ASh</div>
      </div>
    </div>
    <div class="banner container-fluid gx-0">
      <img src="~assets/images/HK_layoutA/aboutMary-Kay-Ash_HK01.jpg" alt="" />
    </div>
    <div class="about_marykay_inner container-xxl white">
      <div class="row">
        <div class="col-xs-6 col-md-6 text_head">
          <img style="width: 70px" src="~assets/images/com_colorLine.png" alt="" />
          <h2 class="h2 font1 margin-top_20">{{ $t(`pages.about_mary_ash.Banner.h2`) }}</h2>

          <div class="text_body">
            {{ $t(`pages.about_mary_ash.Banner.content`) }}
            <div class="sign">-- Mary Kay Ash</div>
          </div>
        </div>
      </div>
    </div>
    <div class="dark onebox">
      <div class="inner">
        <h4 class="margin-bottom_30">
          {{ $t(`pages.about_mary_ash.dark.h4`) }}
        </h4>
        {{ $t(`pages.about_mary_ash.dark.content`) }}
      </div>
    </div>
    <div class="spec">
      <div class="container-fluid">
        <div class="row">
          <div class="col-xs-12 col-md-6 col-lg-6 nomargin">
            <img src="~assets/images/com_colorLine.png" alt="logo" />
          </div>
          <div class="col-xs-12 col-md-6 col-lg-6 flex">
            <div class="spec_inner">
              <h4 class="t1 margin-bottom_20">{{ $t(`pages.about_mary_ash.spec.t1_h4`) }}</h4>
              <p>
                {{ $t(`pages.about_mary_ash.spec.t1_p`) }}
              </p>
              <h4 class="t2 margin-bottom_20">{{ $t(`pages.about_mary_ash.spec.t2_h4`) }}</h4>
              <p>
                {{ $t(`pages.about_mary_ash.spec.t2_p`) }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="about_marykay_content white">
      <div class="bg">
        <h4 class="w4">{{ $t(`pages.about_mary_ash.content.title`) }}</h4>
        <p class="text-body"></p>
        <div v-for="(item, index) in list" :key="index" class="box">
          <div v-if="item.year != null" class="solgan">{{ item.year }}</div>
          {{ item.story }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutMaryAsh',
  computed: {
    list() {
      return this.$i18n.messages[this.$i18n.locale].pages.about_mary_ash.content.list
    },
  },
}
</script>
