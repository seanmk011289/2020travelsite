import '../styles/styles.css'

import MobileMenu from './modules/MobileMenu'

//Code for webpack dev server
if (module.hot) {
    module.hot.accept()
}

let mobileMenu = new MobileMenu();