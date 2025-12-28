"use strict"


export function initAnim() {

}



// ===========================================================================================
// -----------------------------
// Intersection Observer API
// -----------------------------
const options = {
   root: null,
   rootMargin: "0px 0px 0px 0px",
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


/**
 * Функція для ініціалізації спостереження за анімаціями
 * @param {string} selector - CSS селектор елементів
 * @param {object} customOptions - Налаштування IntersectionObserver
 */
const initAnimationObserver = (selector = '[class*="--anim"]', customOptions = {}) => {
   const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.2,
      ...customOptions // дозволяє перезаписати стандартні налаштування
   };

   const callback = (entries, observer) => {
      entries.forEach(entry => {
         const currentElement = entry.target;

         if (entry.isIntersecting) {
            // Додаємо клас основному елементу
            currentElement.classList.add('animate');

            // Логіка для вкладених карток (якщо вони є)
            // Зверни увагу: я прибрав крапку в classList.contains('item-cart')
            if (currentElement.classList.contains('item-cart') || currentElement.querySelector('.item-cart')) {
               const carts = currentElement.querySelectorAll('.item-cart');
               carts.forEach((cart, i) => {
                  setTimeout(() => {
                     cart.classList.add('animate');
                  }, i * 200);
               });
            }

            // Якщо анімація потрібна лише один раз — припиняємо спостереження
            // observer.unobserve(currentElement);
         }
      });
   };

   const observer = new IntersectionObserver(callback, options);
   const animElements = document.querySelectorAll(selector);

   animElements.forEach(animElement => {
      // Перевірка, чи елемент вже у в'юпорті при завантаженні
      const rect = animElement.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
         animElement.classList.add('animate');
      }

      observer.observe(animElement);
   });
};
