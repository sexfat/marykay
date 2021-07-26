<template>
  <!-- eslint-disable vue/no-v-html -->
  <div class="privacy">
    <div class="container-xxl">
      <div class="row">
        <div class="breadcrumbs margin-top_20">
          <nuxt-link :to="localePath('/')">{{ $t('pages.product_page.home') }}</nuxt-link> /
          {{ $t('pages.customer.page_name') }}
        </div>
      </div>
    </div>
    <div class="container white">
      <h3 class="h3">{{ $t('pages.customer.page_name') }}</h3>
      <div class="privacy_inner">
        <div class="text_inner margin-bottom_50" v-html="$t('pages.customer.text_inner')"></div>
        <h5>{{ $t('pages.customer.h5') }}</h5>
        <div v-for="(value, key) in contentData" :key="key">
          <a :href="`#${key}`" class="accordion-toggle"
            >{{ $t(`pages.customer.contents.${key}.name`) }}
            <span class="arrow_down"><img src="~assets/images/down-arrow.svg" alt="" /></span
          ></a>
          <div :id="`${key}`" class="accordion-content" v-html="$t(`pages.customer.contents.${key}.text`)"></div>
        </div>
        <span class="text_small">
          {{ $t('pages.customer.text_small') }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Customer',
  computed: {
    contentData() {
      return this.$i18n.messages[this.$i18n.locale].pages.customer.contents
    },
  },
}
</script>
