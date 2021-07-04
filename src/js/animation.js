gsap.to(".box", {
    scrollTrigger: ".triggerA", // start the animation when ".box" enters the viewport (once)
    x: 500
  });



  // slider

  const swiper = new Swiper('.swiper-container', {
    
    loop: true,

  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }




  });
  