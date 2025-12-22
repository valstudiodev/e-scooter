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
