/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

const navLink = document.querySelectorAll('.nav__link')

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== SWIPER SHOE ===============*/

let swiperShoes = new Swiper('.home__swiper', {
    loop: true,
    spaceBetween: 32,
    grabCursor: true,
    effect: 'creative',
    creativeEffect: {
            prev:{
                translate: [-100, 0, -500],
                opacity: 0,
            },
    },
    next:{
        translate: [100, 0, -500],
        opacity: 0,
    },

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
       },
    })

/*=============== SHADOW HEADER ===============*/

const shadowHeader = () =>{
    const header = document.getElementById('header')
    this.scrollY >= 50 ? header.classList.add('shadow-header')
                       : header.classList.remove('shadow-header')
}
window.addEventListener('scroll', shadowHeader)

/*=============== CONTACT MENU ===============*/
let nav__button = document.querySelector('.nav__button');
let form__contact = document.querySelector('.form__contact')
let svg__close = document.querySelector('.svg__close')

nav__button.addEventListener('click', function(){
	form__contact.classList.toggle('active');
});

svg__close.addEventListener('click', function(){
	form__contact.classList.toggle('active');

	// off menu
	header_nav_burger.classList.toggle('noactive');
})