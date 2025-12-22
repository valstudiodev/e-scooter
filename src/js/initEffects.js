"use strict"

document.addEventListener('click', documentActions)
window.addEventListener('scroll', scrollHeader)


export function initEffects() {
   scrollHeader()
}


// ===========================================================================================
// -----------------------------
// scroll-header
// -----------------------------
function scrollHeader() {
   const header = document.querySelector(`.header`)
   if (header && window.scrollY > 50) {
      header.classList.add('scrolled')
   } else {
      header.classList.remove('scrolled')
   }
}

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
