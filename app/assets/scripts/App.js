import '../styles/styles.css'

import MobileMenu from './modules/MobileMenu'
import RevealOnScroll from './modules/RevealOnScroll'
import StickyHeader from './modules/StickyHeader'
import Modal from './modules/Modal';

let stickyHeader = new StickyHeader();

let mobileMenu = new MobileMenu();

new RevealOnScroll(document.querySelectorAll('.feature-item'), 90);
new RevealOnScroll(document.querySelectorAll('.testimonial'), 60);

//creating a global variable called 'modal'
let modal

//Setting up the logic for ONLY loading the modal code if someone clicks on something with the
//open-modal class! 
document.querySelectorAll('.open-modal').forEach(el => {
    el.addEventListener('click', (e) => {
        e.preventDefault();
        //THE BELOW RETURNS A PROMISE
        if (typeof modal == 'undefined') {
            import(/* webpackChunkName: "modal" */'./modules/Modal').then((modal) => {
                modal = new modal.default()
                setTimeout(() => modal.openTheModal(), 20)
             }).catch(() => {
                 console.log("There was an issue")
             })
        } else {
            modal.openTheModal()
        }
    })
})


//Code for webpack dev server
if (module.hot) {
    module.hot.accept()
}

