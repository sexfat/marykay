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
        .addEventListener('click', event => {
            event.preventDefault();
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

let pic = document.querySelector('.origin');

// This handler will be executed only once when the cursor
// moves over the unordered list
pic.addEventListener("mouseenter", function( event ) {
  // highlight the mouseenter target
  event.target.style.color = "purple";

  // reset the color after a short delay
  setTimeout(function() {
    event.target.style.color = "";
  }, 500);
}, false);