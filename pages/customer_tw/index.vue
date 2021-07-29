<template>
  <div class="privacy">
    <div class="container-xxl">
      <div class="row">
        <div class="breadcrumbs margin-top_20">
          <nuxt-link :to="localePath('/')">{{ $t('pages.product_page.home') }}</nuxt-link> / 顧客滿意保證及產品更換服務
        </div>
      </div>
    </div>
    <div class="container white">
      <h3 class="h3">產品滿意保證 退貨政策</h3>

      <div class="privacy_inner">
        <div class="text_inner margin-bottom_50">
          我們非常在乎您對於Mary kay產品的滿意程度。<br />
          顧客向玫琳凱之美容顧問購買玫琳凱公司產品，享有三個月內滿意保證，<br />
          若顧客對產品不滿意，美容顧問應提供換貨或退款的服務。本滿意保證不適用下列情況 :
        </div>
        <ul>
          <li>1. 產品銷售逾三個月顧客滿意保證期</li>
          <li>2. 產品的餘量少餘原容量的三分之二</li>
          <li>3. 錯誤使用、蓄意破壞</li>
          <li>4. 存放不當—曝曬、冷凍以上則無法退換</li>
        </ul>
        <span class="text_small">
          *
          顧客滿意保證只限於透過本公司之美容顧問銷售之產品，其他在網路、店面或來路不明之通路購買的產品，本公司無法保證其為原廠正貨，因此無法辦理退換貨，為保障消費者權益，請絕對不要<span
            class="s_font"
            >在玫粉i購物之外</span
          >的網路平台上購買玫琳凱公司產品。
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CustomerTw',
}
</script>
