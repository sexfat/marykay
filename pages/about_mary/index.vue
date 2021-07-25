<template>
  <div class="about_marykay">
    <div class="container-xxl">
      <div class="row">
        <div class="breadcrumbs margin-top_20">
          <a href="">{{ $t(`pages.about_mary.Breadcrumb.home`) }}</a> {{ $t(`pages.about_mary.Breadcrumb.pageName`) }}
        </div>
      </div>
    </div>

    <div class="banner container-fluid gx-0">
      <img src="~assets/images/HK_layoutA/layoutA_topBG_aboutmarykay.jpg" alt="" />
    </div>
    <div class="about_marykay_inner container-xxl white">
      <div class="row">
        <div class="col-xs-6 col-md-6 text_head">
          <img style="width: 70px" src="~assets/images/com_colorLine.png" alt="" />
          <h2 class="h2 font1 margin-top_20">{{ $t(`pages.about_mary.Banner.h2`) }}</h2>

          <div class="text_body">
            {{ $t(`pages.about_mary.Banner.content`) }}
          </div>
        </div>
      </div>
    </div>
    <div class="spec">
      <div class="container-xxl">
        <div class="row">
          <div class="col-xs-12 col-md-4">
            <img class="logo" src="~assets/images/logo_marykay-white.svg" alt="logo" />
          </div>
          <div class="col-xs-12 col-md-8">
            <h4 class="margin-bottom_30">{{ $t(`pages.about_mary.spec.h4`) }}</h4>
            <p class="text_left">
              {{ $t(`pages.about_mary.spec.p`) }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="about_marykay_content white">
      <div class="bg">
        <h4 class="w4">{{ $t(`pages.about_mary.about_marykay_content.h4`) }}</h4>
        <p class="text-body">{{ $t(`pages.about_mary.about_marykay_content.p`) }}</p>

        <img src="~assets/images/HK_layoutA/aboutMaryKay-HK10.png" alt="" />
      </div>
    </div>
    <div class="bottom_content text_center white">
      <div class="titles">
        <h1 class="showcase">
          <b>{{ $t(`pages.about_mary.bottom_content.h1`) }}</b>
        </h1>

        <div class="subtitles">
          {{ $t(`pages.about_mary.bottom_content.content`) }}
        </div>
      </div>
      <div class="container-fluid margin-top_60 margin-bottom_100">
        <div class="row gx-3">
          <div class="col-xs-12 col-md-3">
            <div class="inner dark">
              <img src="~assets/images/HK_layoutA/aboutMaryKay-HK11.jpeg" alt="" />
              <h3 class="titles">{{ $t(`pages.about_mary.card.box1.title`) }}</h3>
              <div>
                {{ $t(`pages.about_mary.card.box1.content`) }}
              </div>
            </div>
          </div>
          <div class="col-xs-12 col-md-3">
            <div class="inner dark">
              <img src="~assets/images/HK_layoutA/aboutMaryKay-HK06.png" alt="" />
              <h3 class="titles">{{ $t(`pages.about_mary.card.box2.title`) }}</h3>
              <div>
                {{ $t(`pages.about_mary.card.box2.content`) }}
              </div>
            </div>
          </div>
          <div class="col-xs-12 col-md-3">
            <div class="inner dark">
              <img class="specs" src="~assets/images/HK_layoutA/aboutMaryKay-HK08.png" alt="" />
              <h3 class="titles">{{ $t(`pages.about_mary.card.box3.title`) }}</h3>
              <div>
                {{ $t(`pages.about_mary.card.box3.content`) }}
              </div>
            </div>
          </div>
          <div class="col-xs-12 col-md-3">
            <div class="inner dark">
              <img src="~assets/images/HK_layoutA/aboutMaryKay-HK11.png" alt="" />
              <h3 class="titles">{{ $t(`pages.about_mary.card.box4.title`) }}</h3>
              <div>
                {{ $t(`pages.about_mary.card.box4.content`) }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutMary',
}
</script>
