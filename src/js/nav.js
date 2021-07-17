// navigation

function navmenu() {
    var menu = new MmenuLight(
        document.querySelector('#navigation'),
        'all'
    );
    var navigator = menu.navigation({
        // selectedClass: 'Selected',
        slidingSubmenus: true,
        // theme: 'dark',
        title: 'Mary Kay'
    });

    var drawer = menu.offcanvas({
        position: 'left'
    });


    //Open the menu.
    document.querySelector('.ham_bar')
        .addEventListener('click', event => {
            event.preventDefault();
            drawer.open();
        });

}



//判斷






function rwd(mq) {
    if (mq.matches) {
        console.log('>768 桌機版');
        moblieclose();
    } else {
        console.log('<767手機版');
        navmenu();
    }
}

const mq = window.matchMedia("(min-width: 768px)");
rwd(mq);
mq.addListener(rwd, false);



function moblieclose() {
    var resizeId;
    window.addEventListener('resize', function () {
        clearTimeout(resizeId);
        resizeId = setTimeout(doneResizing, 500);
    });

    function doneResizing() {
        //whatever we want to do
        window.location.reload();
    }
}



