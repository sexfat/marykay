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
              <nuxt-link :to="localePath('/')"
                ><img src="~assets/images/logo_marykay-white.svg" alt="" srcset=""
              /></nuxt-link>
            </div>
          </div>

          <div class="header-right">
            <nav id="navigation" ref="navigation" class="mainnav">
              <ul ref="mainmenu" class="mainmenu">
                <li>
                  <span>{{ $t('header_links.about.name') }}</span>
                  <ul>
                    <li v-for="(item, index) in Object.entries(linkData.about.series)" :key="index">
                      <nuxt-link :to="localePath(`${item[0]}`)">
                        {{ $t(`header_links.about.series.${item[0]}.name`) }}
                      </nuxt-link>
                    </li>
                  </ul>
                </li>
                <li>
                  <span>{{ $t('header_links.skincare.name') }}</span>
                  <ul>
                    <li v-for="(item, index) in Object.entries(linkData.skincare.series)" :key="index">
                      <nuxt-link
                        v-if="item[1].products"
                        :to="{
                          name: `products-id___${$i18n.locale}`,
                          params: { id: item[0] },
                        }"
                      >
                        {{ $t(`pages.series_page.series.${item[0]}.name`) }}
                      </nuxt-link>
                    </li>
                    <li>
                      <nuxt-link :to="localePath('/bigeye')">
                        {{ $t('header_links.skincare.series.Skin_Test.name') }}
                      </nuxt-link>
                    </li>
                  </ul>
                </li>
                <li>
                  <span>{{ $t('header_links.maintenance.name') }}</span>
                  <ul>
                    <li>
                      <span>{{ $t('header_links.product_series.name') }}</span>
                      <ul class="last_menu">
                        <li v-for="(item, index) in Object.entries(linkData.product_series.series)" :key="index">
                          <nuxt-link
                            :to="{
                              name: `products-id___${$i18n.locale}`,
                              params: { id: item[0] },
                            }"
                          >
                            {{ $t(`pages.series_page.series.${item[0]}.name`) }}
                          </nuxt-link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <span>{{ $t('header_links.product_features.name') }}</span>
                      <ul class="last_menu">
                        <li v-for="(item, index) in Object.entries(linkData.product_features.series)" :key="index">
                          <nuxt-link
                            :to="{
                              name: `products-id___${$i18n.locale}`,
                              params: { id: item[0] },
                            }"
                          >
                            {{ $t(`pages.series_page.series.${item[0]}.name`) }}
                          </nuxt-link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <span>{{ $t('header_links.makeup.name') }}</span>
                  <ul>
                    <li v-for="(item, index) in Object.entries(linkData.makeup.series)" :key="index">
                      <nuxt-link
                        :to="{
                          name: `products-id___${$i18n.locale}`,
                          params: { id: item[0] },
                        }"
                      >
                        {{ $t(`pages.series_page.series.${item[0]}.name`) }}
                      </nuxt-link>
                    </li>
                  </ul>
                </li>
                <li>
                  <span>{{ $t('header_links.Nutrition.name') }}</span>
                  <ul>
                    <li v-for="(item, index) in Object.entries(linkData.Nutrition.series)" :key="index">
                      <nuxt-link
                        :to="{
                          name: `products-id___${$i18n.locale}`,
                          params: { id: item[0] },
                        }"
                      >
                        {{ $t(`pages.series_page.series.${item[0]}.name`) }}
                      </nuxt-link>
                    </li>
                  </ul>
                </li>
                <li>
                  <a
                    target="_blank"
                    href="https://ecatalog.marykay.com/?docid=ecee7d87-a611-46db-952d-068a7481392b&d=https://www.marykay.com.hk&t=TheLook&cid=eCat_InTouch"
                    >{{ $t('header_links.dm.name') }}</a
                  >
                </li>
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
      nav: null,
      switchLang: {
        zh: 'English version',
        en: '中文版',
      },
      MmenuLightClose: false,
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
  watch: {
    $route() {
      if (this.drawer) {
        this.drawer.close()
        this.nav.openPanel(this.$refs.mainmenu)
      }
    },
  },
  mounted() {
    this.resizeChangMenu()
    window.addEventListener('resize', this.resizeChangMenu)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.resizeChangMenu)
  },
  methods: {
    mobileMeauInit() {
      // eslint-disable-next-line no-undef
      this.menu = new MmenuLight(this.$refs.navigation)
      this.drawer = this.menu.offcanvas({
        position: 'left',
      })
      this.nav = this.menu.navigation({
        slidingSubmenus: true,
        title: 'Mary Kay',
      })
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
    resizeChangMenu() {
      if (window.innerWidth >= '996' && this.MmenuLightClose) {
        window.location.reload()
      } else if (window.innerWidth < '996') {
        this.MmenuLightClose = true
        this.mobileMeauInit()
      }
    },
  },
}
</script>
