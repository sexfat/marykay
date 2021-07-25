<template>
  <div class="about_marykay_ash">
    <div class="container-xxl">
      <div class="row">
        <div class="breadcrumbs margin-top_20">
          <a href="">{{ $t(`pages.about_mary_ash.Breadcrumb.home`) }}</a> /
          {{ $t(`pages.about_mary_ash.Breadcrumb.pageName`) }}
        </div>
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
        <!-- <div class="box">
          <div class="solgan">1978年</div>
          獲得THE HORATIO ALGER Award（白手起家獎）全美國最具成就的領導人大獎
        </div>
        <div class="box">
          <div class="solgan">1984年</div>
          MARY KAY第一本書「玫琳凱談人的管理」上市，出版後受到全美最重要的商業報刊「華爾街日報」的大力推崇
        </div>
        <div class="box">
          <div class="solgan">1985年</div>
          Mary Kay Ash女士被THE WORLD ALMANAC AND BOOK OF FACTS譽為「美國最具影響力的25名女性之一」
        </div>
        <div class="box">
          <div class="solgan">1991年</div>
          MARY KAY在亞洲第一間成立的分公司-台灣
        </div>
        <div class="box">
          <div class="solgan">1993年</div>
          MARY KAY成立了「玫琳凱慈善基金會」用來幫助癌症研究機構及婦女組織 MARY KAY公司首次列名《財富》世界500強公司
          (FORTUNE Global 500)，並第二度名列，「全美最值得工作的一百家公司」
        </div>
        <div class="box">
          <div class="solgan">1995年</div>
          財星雜誌將MARY KAY公司列為「全美最值得推崇的公司」
        </div>
        <div class="box">
          <div class="solgan">1999年</div>
          德克薩斯婦女商會認可為世紀傑出女性
        </div>
        <div class="box">
          <div class="solgan">2000年</div>
          生活電視網提名Mary Kay Ash女士為20世紀最傑出的商業界女性
        </div>
        <div class="box">
          <div class="solgan">2003年</div>
          美國著名私校貝勒大學評為「美國歷史上最偉大的女性創業家」
        </div>
        <div class="box">
          <div class="solgan">2004年</div>
          Mary Kay Ash女士所創立的「玫琳凱基金會」獲得倫敦肯辛頓宮所頒發的人道主義玫瑰獎
        </div>
        <div class="box">
          <div class="solgan">2011年</div>
          美國福布斯雜誌(Forbes)針對消費者進行品牌忠誠度調查，MARY KAY獲選為第10名，是唯一名列前10名的化妝品牌
        </div>
        <div class="box">
          <div class="solgan">2017年</div>
          入選直銷新聞百大企業排行-全球五大直銷品牌
        </div>
        <div class="box">
          <div class="solgan">2019年</div>
          MARY KAY獲得2019全球職場100大企業研究（Global Workplace 100 Study）中全球最值得工作雇主之第42名 9月13日Mary
          Kay Ash女士，在美國達拉斯佔地約14坪店面，創辦MARY KAY化妝品公司
        </div>
        <div class="box">MARY KAY攜手聯合國機構推出女性創業加速器計畫策略合作，積極促進全球女性創業</div> -->
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
