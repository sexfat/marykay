// 創辦人故事 
const swiper_story = new Swiper(['.swiper_story', '.swiper_pink'], {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 0,
  // autoplay: {
  //     delay: 3000,
  // },
  // breakpoints: {
  //     320: {
  //         slidesPerView: 1,
  //         spaceBetween: 0,
  //         // slidesPerView: "auto",
  //         // centeredSlides: true,
  //         // centeredSlides: true,
  //     },
  //     769: {
  //         slidesPerView: 2,
  //         spaceBetween: 15,
  //     }
  // },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

// 粉紅色公益
// const swiper_pink = new Swiper('.swiper_pink', {
//     loop: true,
//     slidesPerView: 1,
//     spaceBetween: 0,
//     // autoplay: {
//     //     delay: 3000,
//     // },
//     navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },
// });



// //事業機會 slider



new Swiper('.silder_business', {

  slidesPerView: 3,
  spaceBetween: 20,
  breakpoints: {
    375: {
      loop: true,
      slidesPerView: 1,
      spaceBetween: 15,
    },
    796: {
      slidesPerView: 3,
      spaceBetween: 20,
    }
  },

  // Navigation arrows

});


//事業機會



new Swiper('.silder_makemoney', {
  slidesPerView: 3,
  spaceBetween: 20,
   autoplay: {
      delay: 3000,
  },
  breakpoints: {
    375: {
      loop: true,
      slidesPerView: 1,
      spaceBetween: 15,
    },
    796: {
      slidesPerView: 3,
      spaceBetween: 20,
    }
  },

  // Navigation arrows

});
