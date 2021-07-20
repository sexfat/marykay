<template>
  <div class="slider">
    <div class="slider_caption">
      <h2>
        <div class="heading-block">
          <h1 class="showcase">
            <b>
              <p>
                <span>WE ARE A BRAND</span>
              </p>
              <p>
                <span>WITH PURPOSE</span>
              </p>
            </b>
          </h1>
        </div>
      </h2>
    </div>
    <div class="video_wrap">
      <video autoplay="autoplay" poster="" preload="auto" loop playsinline muted>
        <source src="~assets/images/video/index_01.mp4" type="video/mp4" />
      </video>
      <div class="video_overlay" style="background-color: rgba(0, 0, 0, 0.45)"></div>
    </div>
    <div class="action">
      <p class="small_title">OUR BRAND</p>
      <div id="a1" class="arrow">
        <nuxt-link :to="{ hash: '#s1' }"><img src="~assets/images/down-arrow-white.svg" alt="" srcset="" /></nuxt-link>
      </div>
    </div>
  </div>
</template>
