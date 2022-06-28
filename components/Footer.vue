<template>
  <footer class="dark">
    <div class="container-xxl">
      <div class="row">
        <div class="col-lg-3 col-md-6">
          <h4>{{ $t('pages.footer.follow') }}</h4>
          <ul class="social">
            <li>
              <a target="_blank" href="https://www.instagram.com/marykayhongkong/"
                ><img src="~assets/images/instagram.png" alt="" srcset=""
              /></a>
            </li>
            <li>
              <a target="_blank" href="https://www.facebook.com/MaryKayHK"
                ><img src="~assets/images/facebook-circular-logo.png" alt="" srcset=""
              /></a>
            </li>
            <li>
              <a target="_blank" href="https://www.youtube.com/channel/UCHt3Kaa3n0_KJoZYcb0p9xg"
                ><img src="~assets/images/youtube.png" alt="" srcset=""
              /></a>
            </li>
            <!-- <li>
              <a target="_blank" href="https://lin.ee/z35H2lP"
                ><img src="~assets/images/line_icon.png" alt="" srcset=""
              /></a>
            </li> -->
          </ul>
        </div>
        <div class="col-lg-3 col-md-6">
          <h4>{{ $t('pages.footer.related_links.name') }}</h4>
          <ul>
            <li>
              <a
                target="_blank"
                href="https://mk.marykayintouch.com.hk/s/agreements-welcome?language=zh_HK
"
                >{{ $t('pages.footer.related_links.links.link_0') }}</a
              >
            </li>
            <li>
              <a
                target="_blank"
                href="https://mk.marykayintouch.com.hk/s/agreements-welcome?language=en_HK
"
                >{{ $t('pages.footer.related_links.links.link_4') }}</a
              >
            </li>
            <li>
              <a target="_blank" href="Https://Mk.marykayintouch.com.hk">{{
                $t('pages.footer.related_links.links.link_1')
              }}</a>
            </li>
            <li>
              <nuxt-link :to="localePath('/global_company')"
                >{{ $t('pages.footer.related_links.links.link_2') }}
              </nuxt-link>
            </li>
            <li>
              <a target="_blank" href="http://www.hkdsa.org.hk/index.html">{{
                $t('pages.footer.related_links.links.link_3')
              }}</a>
            </li>
          </ul>
        </div>
        <div class="col-lg-3 col-md-6">
          <h4>{{ $t('pages.footer.shopping_instructions.name') }}</h4>
          <ul>
            <li v-for="(value, keys) in footerData.shopping_instructions.links" :key="keys">
              <nuxt-link :to="localePath(`${keys}`)"
                >{{ $t(`pages.footer.shopping_instructions.links.${keys}`) }}
              </nuxt-link>
            </li>
          </ul>
        </div>
        <div class="col-lg-3 col-md-6">
          <h4>{{ $t('pages.footer.contact_us') }}</h4>
          <ul>
            <div class="contact">
              <li>{{ $t('pages.footer.customer_service_tel') }}</li>
              <li>{{ $t('pages.footer.tel') }}</li>
            </div>
            <div class="contact">
              <li>{{ $t('pages.footer.contact_style') }}</li>
              <!-- eslint-disable-next-line vue/no-v-html -->
              <li v-html="$t('pages.footer.contact_way')"></li>
            </div>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  computed: {
    footerData() {
      return this.$i18n.messages[this.$i18n.locale].pages.footer
    },
  },
}
</script>
