<!-- eslint-disable -->
<template>
  <div id="s1" class="section_full s1 parallax dark">
    <div class="container clearfix nopadding">
      <div class="slider-caption slider-caption-center margin-top_200">
        <h2>
          <div class="heading-block" data-aos="fade-down" data-aos-duration="1000">
            <h1 class="showcase"><b>POWERED BY</b><i>PURPOSE</i></h1>
            <h3>{{ $t('pages.homepage.s1.h3') }}</h3>
            <div class="diver"></div>
          </div>
        </h2>
        <p class="d-none d-sm-block">
        <div data-aos="fade-down" data-aos-delay="250" data-aos-duration="1000">
            <div class="body" v-html="$t('pages.homepage.s1.body')">
            </div>
            </p>
            <a href="#" class="btn-outline btn-large marginauto margin-top_50">{{ $t('pages.homepage.more') }}</a>
        </div>
      </div>
    </div>
  </div>
</template>
