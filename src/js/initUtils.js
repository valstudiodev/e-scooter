"use strict"

export function initUtils() {
   slidersInit();
   setupAccordions()
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
            nextEl: '.buttons-testimonials__btn-next',
            prevEl: '.buttons-testimonials__btn-prev',
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
// accordions
// -----------------------------
const accordions = document.querySelectorAll('[data-accordion]');
const mq = window.matchMedia('(max-width: 471px)');

function setupAccordions() {
   accordions.forEach(item => {
      const btn = item.querySelector('[data-accordion-btn]');
      const body = item.querySelector('[data-accordion-body]');
      if (!btn || !body) return;

      if (!mq.matches) {
         item.classList.remove('active');
         body.style.height = '';
         return;
      }

      body.style.height = item.classList.contains('active')
         ? body.scrollHeight + 'px'
         : '0px';

      btn.onclick = () => {
         const isOpen = item.classList.contains('active');

         if (isOpen) {
            body.style.height = body.scrollHeight + 'px';
            requestAnimationFrame(() => body.style.height = '0px');
            item.classList.remove('active');
         } else {
            item.classList.add('active');
            body.style.height = body.scrollHeight + 'px';

            body.addEventListener('transitionend', () => {
               body.style.height = 'auto';
            }, { once: true });
         }
      };
   });
   mq.addEventListener('change', setupAccordions);
}
