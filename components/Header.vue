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
                  <span>{{ $t('header_links.about.name') }}</span>
                  <ul>
                    <li v-for="(item, index) in Object.entries(linkData.about.series)" :key="index">
                      <nuxt-link to="/">
                        {{ $t(`header_links.about.series.${item[0]}.name`) }}
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
                  <span>{{ $t('header_links.tonic.name') }}</span>
                  <ul>
                    <li v-for="(item, index) in Object.entries(linkData.tonic.series)" :key="index">
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
                  <span>{{ $t('header_links.skincare.name') }}</span>
                  <ul>
                    <li v-for="(item, index) in Object.entries(linkData.skincare.series)" :key="index">
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
