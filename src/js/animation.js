gsap.to(".box", {
    scrollTrigger: ".triggerA", // start the animation when ".box" enters the viewport (once)
    x: 500
  });



  // slider

  const swiper = new Swiper('.silder_1', {
    loop: true,
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });


  const swipers = new Swiper('.silder_2', {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 50,

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });

  const swiper_ig = new Swiper('.silder_3', {
    loop: true,
    slidesPerView: 6,

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });





 
  