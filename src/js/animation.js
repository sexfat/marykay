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





// navigation





function call_menu() {

    var menu = new MmenuLight(
        document.querySelector('#navigation'),
        'all'
    );
    var navigator = menu.navigation({
        // selectedClass: 'Selected',
        // slidingSubmenus: true,
        // theme: 'dark',
        // title: 'Menu'
    });

    var drawer = menu.offcanvas({
        // position: 'left'
    });


    // //	Open the menu.
    document.querySelector('.ham_bar')
        .addEventListener('click', evnt => {
            evnt.preventDefault();
            drawer.open();
        });
}


//判斷
const mq = window.matchMedia("(min-width: 768px)");



if (mq.matches) {
    console.log('>768 桌機版');
} else {
    console.log('>767手機版');
    call_menu();
}




// const smallDevice = window.matchMedia("(min-width: 768px)");

// smallDevice.addListener(handleDeviceChange);

// function handleDeviceChange(e) {
//     if (e.matches) {
//         console.log('桌機版')
//     } else {
//         call_menu();
//     };
// }

// // Run it initially
// handleDeviceChange(smallDevice);