<template>
  <!-- eslint-disable vue/no-v-html -->
  <div class="about_social">
    <div class="container-xxl">
      <div class="row">
        <div class="breadcrumbs margin-top_20">
          <nuxt-link :to="localePath('/')">{{ $t('pages.product_page.home') }}</nuxt-link>
          {{ $t(`pages.social.Breadcrumb.pageName`) }}
        </div>
      </div>
    </div>

    <div class="banner container-fluid gx-0">
      <img src="~assets/images/HK_layoutA/social_top.jpg" alt="" />
    </div>
    <div class="about_social_inner container-xxl white">
      <div class="row">
        <div class="col-xs-6 col-md-6 text_head">
          <img style="width: 70px" src="~assets/images/com_colorLine.png" alt="" />
          <h2 class="h2 font1 margin-top_20" v-html="$t(`pages.social.Banner.h2`)"></h2>
          <div class="text_body">
            {{ $t(`pages.social.Banner.content`) }}
          </div>
        </div>
      </div>
    </div>
    <div class="spec dark text_center">
      <div class="container-xxl">
        <div class="row">
          <div class="col-xs-12 col-md-12">
            <h4 class="h4 w4 margin-bottom_30">{{ $t(`pages.social.spec.h4`) }}</h4>
            <ul>
              <li v-for="(ietm, index) in ulList" :key="index">
                {{ ietm.li }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="bottom_content white">
      <div class="titles text_center">
        <img class="so_icon" src="~assets/images/HK_layoutA/social_icon.png" alt="" />
        <h3 class="h3">
          {{ $t(`pages.social.bottom_content.h3`) }}
          <div class="w3">{{ $t(`pages.social.bottom_content.h3_content`) }}</div>
        </h3>
        <div class="subtitles" v-html="$t(`pages.social.bottom_content.content`)"></div>
        <img class="heart" src="~assets/images/icon_heart.jpg" alt="" />
        <h4 class="w4">{{ $t(`pages.social.bottom_content.h4`) }}</h4>
      </div>
      <div class="container-fluid margin-top_60 margin-bottom_100">
        <div class="row gx-3">
          <div class="col-xs-12 col-md-6">
            <div class="inner">
              <div class="left"><img src="~assets/images/HK_layoutA/icon_eco01.png" /></div>
              <div class="right">
                <h3>{{ $t(`pages.social.container.box1.h3`) }}</h3>
                <div>
                  {{ $t(`pages.social.container.box1.content`) }}
                </div>
              </div>
            </div>
          </div>
          <div class="col-xs-12 col-md-6">
            <div class="inner">
              <div class="left"><img src="~assets/images/HK_layoutA/icon_eco02.png" /></div>
              <div class="right none">
                <h3>{{ $t(`pages.social.container.box2.h3`) }}</h3>
                <div>
                  {{ $t(`pages.social.container.box2.content`) }}
                </div>
              </div>
            </div>
          </div>
          <div class="col-xs-12 col-md-6">
            <div class="inner">
              <div class="left"><img src="~assets/images/HK_layoutA/icon_eco03.png" /></div>
              <div class="right">
                <h3>{{ $t(`pages.social.container.box3.h3`) }}</h3>
                <div>
                  {{ $t(`pages.social.container.box3.content`) }}
                </div>
              </div>
            </div>
          </div>
          <div class="col-xs-12 col-md-6">
            <div class="inner">
              <div class="left"><img src="~assets/images/HK_layoutA/icon_eco04.png" /></div>
              <div class="right none">
                <h3>{{ $t(`pages.social.container.box4.h3`) }}</h3>
                <div>
                  {{ $t(`pages.social.container.box4.content`) }}
                </div>
              </div>
            </div>
          </div>
          <div class="col-xs-12 col-md-6">
            <div class="inner">
              <div class="left"><img src="~assets/images/HK_layoutA/icon_eco05.png" /></div>
              <div class="right">
                <h3>{{ $t(`pages.social.container.box5.h3`) }}</h3>
                <div>{{ $t(`pages.social.container.box5.content`) }}</div>
              </div>
            </div>
          </div>
          <div class="col-xs-12 col-md-6">
            <div class="inner">
              <div class="left"><img src="~assets/images/HK_layoutA/icon_eco06.png" /></div>
              <div class="right none">
                <h3>{{ $t(`pages.social.container.box6.h3`) }}</h3>
                <div>{{ $t(`pages.social.container.box6.content`) }}</div>
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
  name: 'AboutMaryAsh',
  computed: {
    ulList() {
      return this.$i18n.messages[this.$i18n.locale].pages.social.spec.ulList
    },
  },
}
</script>
