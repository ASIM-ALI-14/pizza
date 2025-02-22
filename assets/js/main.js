/*=============== SHOW MENU ===============*/
const navMenu = document.querySelector("#nav-menu"),
  navToggle = document.querySelector("#toggle-btn"),
  navClose = document.querySelector("#close-btn");


  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });



  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });

/*=============== REMOVE MENU MOBILE ===============*/


const navlink = document.querySelectorAll(".nav-link");
console.log(navlink)
function link() {
  const navMenu = document.querySelector('#nav-menu'); // Use querySelector for a single element
  navMenu.classList.remove('show-menu');
  
}

navlink.forEach(n => n.addEventListener('click', link));
/*=============== ADD SHADOW HEADER ===============*/

const header = document.querySelector(".header")
window.addEventListener("scroll",() =>{
window.scrollY >=50 ?header.classList.add('header-add'):
header.classList.remove('header-add')
})

/*=============== SWIPER POPULAR ===============*/
const swiper = new Swiper('.popular-swiper', {
  loop:true,
  grabCursor:true,
  slidesPerView:'auto',
  centeredSlides:'auto'
 


})
/*=============== SHOW SCROLL UP ===============*/


// Show or hide the button based on the scroll position
const scrollToTopBtn = document.getElementById('scrollup');

// Show or hide the button based on scroll position
window.addEventListener('scroll', () => {
    scrollToTopBtn.style.display = window.scrollY > 100 ? 'block' : 'none';
});

// Scroll to the top when the button is clicked
scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

/*=============== SCROLL REVEAL ANIMATION ===============*/
