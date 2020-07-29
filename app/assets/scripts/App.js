import '../styles/styles.css'

import MobileMenu from './modules/MobileMenu'
import RevealOnScroll from './modules/RevealOnScroll'

//Code for webpack dev server
if (module.hot) {
    module.hot.accept()
}

let mobileMenu = new MobileMenu();

new RevealOnScroll(document.querySelectorAll('.feature-item'), 90);
new RevealOnScroll(document.querySelectorAll('.testimonial'), 60);