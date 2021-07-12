// gsap.to(".box", {
//     scrollTrigger: ".triggerA", // start the animation when ".box" enters the viewport (once)
//     x: 500
// });

// // document.querySelectorAll(".arrow").forEach((btn) => {
// //   btn.addEventListener("click", () => {
// //     gsap.to(window, { duration: 1.4,  scrollTo: ".s1"   , ease: "none"});
// //   });
// // });


// // slider

// const swiper = new Swiper('.silder_1', {
//   loop: true,
//   // Navigation arrows
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   }
// });


// const swipers = new Swiper('.silder_2', {
//     loop: true,
//     slidesPerView: 3,
//     spaceBetween: 50,

//     // Navigation arrows
//     navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//     }
// });


//aos 

AOS.init({
    easing: 'ease'
});

const swipers = new Swiper('.silder_pink', {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 50,
   
    breakpoints: {
        320 : {
            slidesPerView: 1,
            spaceBetween: 50,
            slidesPerView: "auto",
            centeredSlides: true,
            // centeredSlides: true,
        },
        769: {
            slidesPerView: 3,
            spaceBetween: 50,
        }
    },
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
})
// 探索更多
const swiper_2 = new Swiper('.silder_2', {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 50,
    breakpoints: {
        320 : {
            slidesPerView: 1,
            spaceBetween: 20,
            // slidesPerView: "auto",
            // centeredSlides: true,
            // centeredSlides: true,
        },
        769: {
            slidesPerView: 3,
            spaceBetween: 50,
        }
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
});



// ig

const swiper_ig = new Swiper('.silder_ig', {
    loop: true,
    slidesPerView: 5,
    spaceBetween: 5,
    breakpoints: {
        320 : {
            slidesPerView: 1,
            spaceBetween: 20,
            // slidesPerView: "auto",
            // centeredSlides: true,
            // centeredSlides: true,
        },
        769: {
            slidesPerView: 5,
            spaceBetween: 10,
        }
    },

    // Navigation arrows
});





