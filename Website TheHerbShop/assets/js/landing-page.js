/*=============== NAVBAR DISSAPPEAR IN HOME ===============*/
window.onload = function() {
    hideNavbarOnLoad();
};

function hideNavbarOnLoad() {
    var header = document.getElementById("header");
    header.classList.add("hidden");
}

window.onscroll = function() {scrollFunction()};


        function scrollFunction() {
            var header = document.getElementById("header");
            var shopCart = document.getElementById("tHeader__shopCart");
            var homeSection = document.getElementById("home");
            
            var shopCartPosition = shopCart.getBoundingClientRect();
            var homeSectionPosition = homeSection.getBoundingClientRect();
            
            if (shopCartPosition.top <= homeSectionPosition.bottom && shopCartPosition.bottom >= homeSectionPosition.top ||
                shopCartPosition.top < homeSectionPosition.top) {
                header.classList.add("hidden");
            } else {
                header.classList.remove("hidden");
            }
        }


        
/*=============== NAVBAR COLOR CHANGE ===============*/ 
document.addEventListener('DOMContentLoaded', function() {
    const shopCartIcon = document.getElementById('tHeader__shopCart');
    const newCollectionSection = document.getElementById('new-collection');
    const testimonyCarouselSection = document.getElementById('testimony-carousel');
    const otherIcons = document.querySelectorAll('.ri-shopping-cart-line, .ri-user-line, .ri-menu-line');
    
    function changeColorToWhite() {
        shopCartIcon.style.color = 'white';
        otherIcons.forEach(item => {
            item.style.color = 'white';
        });
        document.querySelectorAll('.tHeader__the, .tHeader__herb, .tHeader__shop').forEach(item => {
            item.style.color = 'white';
        });
    }
    
    function changeColorToBlack() {
        shopCartIcon.style.color = 'black';
        otherIcons.forEach(item => {
            item.style.color = 'black';
        });
        document.querySelectorAll('.tHeader__the, .tHeader__herb, .tHeader__shop').forEach(item => {
            item.style.color = 'black';
        });
    }

    // Add an event listener to check if the elements are in the viewport
    window.addEventListener('scroll', function() {
        const shopCartIconBounds = shopCartIcon.getBoundingClientRect();
        const newCollectionBounds = newCollectionSection.getBoundingClientRect();
        const testimonyCarouselBounds = testimonyCarouselSection.getBoundingClientRect();

        if (
            shopCartIconBounds.top >= newCollectionBounds.top && shopCartIconBounds.bottom <= newCollectionBounds.bottom ||
            shopCartIconBounds.top >= testimonyCarouselBounds.top && shopCartIconBounds.bottom <= testimonyCarouselBounds.bottom
        ) {
            changeColorToWhite();
        } else {
            changeColorToBlack();
        }
    });
});


/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						: scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)


/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true // Animation repeat
})

sr.reveal(`.home__title, .featured__container, .collection__container,
           .advantages__container, .ourStory__right-container`)
sr.reveal(`.home__subtitle, .button__container, .collection__button-container, 
           .featured__button-container, .newcollect__title, .newcollect__para, 
           .newcollect__button-container, .ourStory__frame-container,
           .ourStory__btn`, {origin: 'left'})
