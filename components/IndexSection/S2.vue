<template>
  <section class="container-fluid dark section_full flex s2">
    <div class="container-xxl container">
      <div class="row">
        <div class="text_center">
          <div class="heading-block flex-block" data-aos="fade-down" data-aos-duration="1000">
            <h1 class="showcase"><b>AS A BRAND</b><i>WE PROMISE</i></h1>
            <h3>{{ $t('pages.homepage.s2.h3') }}</h3>
            <div class="diver"></div>
          </div>
          <!-- eslint-disable vue/no-v-html -->
          <div
            class="body flex"
            data-aos="fade-up"
            data-aos-delay="50"
            data-aos-duration="1000"
            v-html="$t('pages.homepage.s2.body')"
          ></div>
          <!-- <p>SCIENCE<br>
                    BEHIND PRODUCT</p>
                <button type="button" class="btn btn-lg btn-outline-primary">V</button> -->
        </div>
      </div>
    </div>
    <div class="action small_title">
      SCIENCE<br />
      BEHIND PRODUCT
      <div id="a1" class="arrow">
        <nuxt-link :to="{ hash: '#s3' }"><img src="~assets/images/down-arrow-white.svg" alt="" srcset="" /></nuxt-link>
      </div>
    </div>
  </section>
</template>
