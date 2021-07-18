<template>
  <header class="header-area">
    <div class="header-wrapper">
      <div class="container-xxl">
        <div class="m-nav_bar ham_bar" @click="openMeau">
          <div class="nav-toggle">
            <span></span>
            <span></span>
          </div>
        </div>
        <div class="nav">
          <div class="header-left">
            <div class="logo">
              <nuxt-link to="/"><img src="~assets/images/logo_marykay-white.svg" alt="" srcset="" /></nuxt-link>
            </div>
          </div>

          <div class="header-right">
            <nav id="navigation" ref="navigation" class="mainnav">
              <ul class="mainmenu">
                <li>
                  <span>關於玫琳凱</span>
                  <ul>
                    <li><a href="#">品牌理念</a></li>
                    <li><a href="#">創辦人故事</a></li>
                    <li><a href="#">粉紅公益</a></li>
                    <li><a href="#">科研創新</a></li>
                  </ul>
                </li>
                <li>
                  <span>保養</span>
                  <ul>
                    <li>
                      <span>產品系列</span>
                      <ul class="last_menu">
                        <li v-for="(item, index) in Object.entries(linkData.product_series.series)" :key="index">
                          <nuxt-link
                            :to="{
                              name: `products-id___${$i18n.locale}`,
                              params: { id: item[0], series: 'product_series' },
                            }"
                            >{{ $t(`header_links.product_series.series.${item[0]}.name`) }}</nuxt-link
                          >
                        </li>
                      </ul>
                    </li>
                    <li>
                      <span>產品功能</span>
                      <ul class="last_menu">
                        <li>
                          <a href="＃">卸妝</a>
                        </li>
                        <li>
                          <a href="＃">潔顏</a>
                        </li>
                        <li>
                          <a href="＃">化妝水</a>
                        </li>
                        <li>
                          <a href="＃">乳液/乳霜</a>
                        </li>
                        <li>
                          <a href="＃">面膜</a>
                        </li>
                        <li>
                          <a href="＃">精華液/油</a>
                        </li>
                        <li>
                          <a href="＃">身體防曬/保養</a>
                        </li>
                        <li>
                          <a href="＃">眼唇保養</a>
                        </li>
                        <li>
                          <a href="＃">特殊護理</a>
                        </li>
                        <li>
                          <a href="＃">美容儀器</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <span>彩妝</span>
                  <ul>
                    <li><a href="">唇部系列</a></li>
                    <li><a href="">臉部系列</a></li>
                    <li><a href="">眼部系列</a></li>
                    <li><a href="">彩妝工具</a></li>
                    <li><a href="">香氛系列</a></li>
                    <li><a href="">彩妝工具</a></li>
                  </ul>
                </li>
                <li>
                  <span>營養品</span>
                  <ul>
                    <li><a href="">食物補充品</a></li>
                  </ul>
                </li>

                <li>
                  <span>護膚專區</span>
                  <ul>
                    <li><a href="">親水專區</a></li>
                    <li><a href="">養膚專區</a></li>
                    <li><a href="">掃油專區</a></li>
                    <li><a href="">舒壓專區</a></li>
                    <li><a href="">懶人專區</a></li>
                    <li><a href="">肌膚檢測</a></li>
                  </ul>
                </li>
                <li><a href=""> 線上DM</a></li>
                <li>
                  <a href="" @click="changeLang"> {{ lang }}</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      menu: null,
      drawer: null,
      switchLang: {
        zh: '英文',
        en: 'chinese',
      },
    }
  },
  computed: {
    linkData() {
      return this.$i18n.messages[this.$i18n.locale].header_links
    },
    lang() {
      return this.switchLang[this.$i18n.locale]
    },
  },
  mounted() {
    const mq = window.matchMedia('(min-width: 768px)')
    if (mq.matches) {
      console.log('>768 桌機版')
    } else {
      console.log('>767手機版')
      this.mobileMeauInit()
    }
    console.log(this.$i18n)
  },
  methods: {
    mobileMeauInit() {
      // eslint-disable-next-line no-undef
      this.menu = new MmenuLight(this.$refs.navigation, 'all')
      this.drawer = this.menu.offcanvas()
      this.menu.navigation()
    },
    openMeau(e) {
      e.preventDefault()
      this.drawer.open()
    },
    changeLang(e) {
      e.preventDefault()
      const Lang = this.$i18n.locale
      switch (Lang) {
        case 'en':
          this.$i18n.setLocale('zh')
          break
        case 'zh':
          this.$i18n.setLocale('en')
          break
      }
    },
  },
}
</script>
