"use strict"

window.addEventListener('load', windowLoad)

document.addEventListener('click', documentActions)

window.addEventListener('scroll', scrollHeader)

let isMobile

function windowLoad() {
   isMobile = { Android: function () { return navigator.userAgent.match(/Android/i); }, BlackBerry: function () { return navigator.userAgent.match(/BlackBerry/i); }, iOS: function () { return navigator.userAgent.match(/iPhone|iPad|iPod/i); }, Opera: function () { return navigator.userAgent.match(/Opera Mini/i); }, Windows: function () { return navigator.userAgent.match(/IEMobile/i); }, any: function () { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); } };
   isMobile.any() ? document.body.setAttribute('data-touch', '') : null

   slidersInit();
   scrollHeader();
   // toggleCardContent();
   // showList();
   // typeSwitcher();
}

// ===========================================================================================
// -----------------------------
// scroll-header
// -----------------------------
const header = document.querySelector(`.header`)

function scrollHeader() {
   if (header && window.scrollY > 50) {
      header.classList.add('scrolled')
      console.log("I see header");
   } else {
      header.classList.remove('scrolled')
   }
}

// let lastScroll = 0;
// const header = document.querySelector(".header");

// function scrollHeader() {
//    const current = window.pageYOffset;
//    if (header && current > lastScroll) {
//       header.classList.add("scrolled");
//    } else {
//       header.classList.remove("scrolled");
//    }
//    lastScroll = current;
// }


// ===========================================================================================
// -----------------------------
// MENU-BURGER
// -----------------------------
function documentActions(e) {
   const targetElement = e.target
   if (targetElement.closest('.icon-menu')) {
      document.body.classList.toggle('menu-open')
      document.body.classList.toggle('scroll-lock')
      document.documentElement.classList.toggle('menu-open')
   }
}

// ===========================================================================================
// -----------------------------
// SLIDER
// -----------------------------
function slidersInit() {
   if (document.querySelector('.slider-reviews')) {
      const swiper = new Swiper('.slider-reviews', {
         loop: true,
         // slidesPerView: 2.5,
         // spaceBetween: 30,

         navigation: {
            nextEl: '.slider-reviews__button-next',
            prevEl: '.slider-reviews__button-prev',
         },

         breakpoints: {
            320: {
               slidesPerView: 1.3,
               spaceBetween: 10,
            },
            630: {
               slidesPerView: 1.5,
               spaceBetween: 15,
               centteredSlides: true,
            },
            930: {
               slidesPerView: 2.2,
               spaceBetween: 25,
               centteredSlides: false,
            },
            1440: {
               slidesPerView: 3,
               spaceBetween: 30,
            },
         },
      });
   }
}


// ===========================================================================================
// -----------------------------
// filter
// -----------------------------
// document.addEventListener('DOMContentLoaded', () => {
//    const menuButtons = document.querySelectorAll('[data-filter]');
//    const galleryItems = document.querySelectorAll('[data-group]');

//    function filterItems(category) {
//       galleryItems.forEach(item => {
//          item.style.display = item.dataset.group === category ? 'grid' : 'none';
//       });
//    }

//    menuButtons.forEach((btn, index) => {
//       btn.addEventListener('click', () => {
//          menuButtons.forEach(b => b.classList.remove('active'));
//          btn.classList.add('active');
//          filterItems(btn.dataset.filter);
//       });

//       if (index === 0) {
//          btn.classList.add('active');
//          filterItems(btn.dataset.filter);
//       }
//    });
// });

// ===========================================================================================
// -----------------------------
// flip-cart
// -----------------------------
// function toggleCardContent() {
//    const cards = document.querySelectorAll('.cart-work__inner');

//    cards.forEach(card => {
//       card.addEventListener('click', () => {
//          // При кліку додаємо або прибираємо клас активного стану
//          if (window.innerWidth <= 768) {
//             card.classList.toggle('animCart');
//          }

//       });
//    });
// }

// ===========================================================================================
// -----------------------------
// active-link
// -----------------------------
// const links = document.querySelectorAll('.menu-header__link')
// const current = window.location.pathname

// links.forEach(link => {
//    link.addEventListener('active', () => {
//       if (link.getAttribute('href') === current) {
//          link.classList.toggle('active-page')
//       }
//       console.log("works");
//    })
// })


// ===========================================================================================
// -----------------------------
// icon-show
// -----------------------------
// function showList() {
//    const iconShows = document.querySelectorAll(`.row-menu__icon`)

//    iconShows.forEach(iconShow => {
//       iconShow.addEventListener('click', () => {
//          if (iconShow) {
//             iconShow.classList.toggle('icon-active')
//          }
//       })
//    })
// }


// function showList() {
//    const items = document.querySelectorAll('.row-menu');

//    items.forEach(item => {
//       const icon = item.querySelector('.row-menu__icon');
//       const wrap = item.querySelector('.row-menu__wrap');

//       icon.addEventListener('click', () => {
//          icon.classList.toggle('icon-active');
//          wrap.classList.toggle('open');
//       });
//    });
// }


// ===========================================================================================
// -----------------------------
// typeSwitcher form
// -----------------------------
// function typeSwitcher() {
//    // Знаходимо всі інпути з класом 'type-switcher'
//    const inputs = document.querySelectorAll('.type-switcher');

//    inputs.forEach(input => {
//       const desiredType = input.getAttribute('data-type');
//       // 🔑 Ключова зміна: Зберігаємо початковий текст placeholder
//       const originalPlaceholder = input.getAttribute('data-placeholder');

//       // 1. Обробник події ФОКУС (focus)
//       input.addEventListener('focus', function () {
//          // Змінюємо тип на бажаний ('date' або 'time')
//          this.type = desiredType;
//       });

//       // 2. Обробник події ВТРАТА ФОКУСУ (blur)
//       input.addEventListener('blur', function () {

//          // 1. Перевіряємо, чи поточний тип — це той, який ми хочемо приховати
//          if (this.type === desiredType) {

//             // 2. Ключова перевірка: Якщо поле візуально порожнє
//             if (this.value === "") {

//                // 🔑 КРОК ВИПРАВЛЕННЯ: Примусово скидаємо значення перед зміною типу.
//                // Це обходить проблеми кешування та внутрішніх значень браузера.
//                this.value = "";

//                // Повертаємо тип назад на 'text'
//                this.type = 'text';

//                // Відновлюємо placeholder
//                this.placeholder = originalPlaceholder;
//             }
//          }
//       });

//       // 3. Додатковий крок: Встановлюємо правильний тип, якщо є значення при завантаженні
//       if (input.value) {
//          input.type = desiredType;
//       }

//       // Переконаємось, що інпут починає з 'text' і має коректний placeholder
//       if (!input.value && input.type !== 'text') {
//          input.type = 'text';
//          input.placeholder = originalPlaceholder;
//       }
//    });
// }


// ===========================================================================================
// -----------------------------
// Intersection Observer API
// -----------------------------
const options = {
   root: null,
   rootMargin: "0px 0px -10% 0px",
   // Відсоток від розміру об'єкту.
   // При появі якого спрацьовує подія
   // Де 0 це будь яка поява
   // 1 це повна поява об'кта в в'юпорті
   threshold: 0.2,
}

const callback = (entries, observer) => {
   entries.forEach(entry => {
      const currentElement = entry.target
      if (entry.isIntersecting) {
         currentElement.classList.add('animate')
         console.log('я тебе бачу')
      }
      if (currentElement.classList.contains('.item-cart')) {
         const carts = currentElement.querySelectorAll('.item-cart')
         carts.forEach((cart, i) => {
            setTimeout(() => {
               cart.classList.add('animate')
            }, i * 200)
         })
      }
   })
}
const observer = new IntersectionObserver(callback, options)

const animElements = document.querySelectorAll('[class*="--anim"]')
animElements.forEach(animElement => {
   const rect = animElement.getBoundingClientRect();
   if (rect.top < window.innerHeight && rect.bottom > 0) {
      animElement.classList.add('animate')
   }
   observer.observe(animElement)
})
