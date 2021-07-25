// 社會公益頁面需求 
const swiper_social = new Swiper('.silder_social', {
    loop: true,
    slidesPerView: 2,
    spaceBetween: 15,
    pauseOnMouseEnter : true,
    autoplay: {
        delay: 3000,
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 10,
            // slidesPerView: "auto",
            // centeredSlides: true,
            // centeredSlides: true,
        },
        769: {
            slidesPerView: 2,
            spaceBetween: 15,
        }
    },

    // Navigation arrows
});


//環境保護 slider



const silder_ev = new Swiper('.silder_ev', {
    loop: true,
    slidesPerView: 2,
    spaceBetween: 20,
    autoplay: {
        delay: 2500,
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 15,
            // slidesPerView: "auto",
            // centeredSlides: true,
            // centeredSlides: true,
        },
        769: {
            slidesPerView: 2,
            spaceBetween: 20,
        }
    },

    // Navigation arrows
});
