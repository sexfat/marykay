<template>
  <!-- eslint-disable vue/no-v-html -->
  <div class="privacy">
    <div class="container-xxl">
      <div class="row">
        <div class="breadcrumbs margin-top_20">
          <nuxt-link :to="localePath('/')">{{ $t('pages.product_page.home') }}</nuxt-link> /
          {{ $t('pages.privacy.page_name') }}
        </div>
      </div>
    </div>
    <div class="container white">
      <h3 class="h3">{{ $t('pages.privacy.page_name') }}</h3>
      <div class="privacy_inner">
        <div v-for="(value, key) in contentData" :key="key">
          <a :href="`#${key}`" class="accordion-toggle"
            >{{ $t(`pages.privacy.contents.${key}.name`) }}
            <span class="arrow_down"><img src="~assets/images/down-arrow.svg" alt="" /></span
          ></a>
          <div :id="`${key}`" class="accordion-content" v-html="$t(`pages.privacy.contents.${key}.text`)"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Privacy',
  computed: {
    contentData() {
      return this.$i18n.messages[this.$i18n.locale].pages.privacy.contents
    },
  },
}
</script>

<style>
.privacy ul {
  list-style: unset;
  padding-left: 2rem !important;
}
</style>
