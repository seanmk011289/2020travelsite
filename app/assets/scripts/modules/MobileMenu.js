class MobileMenu {
    constructor() {

        //DOM Selectors
        this.icon = document.querySelector('.site-header__menu-icon');
        this.menuContent = document.querySelector('.site-header__menu-content');
        this.siteHeader = document.querySelector('.site-header');
        //Then we need to make sure to call 'events' within the constructor function
        this.events();
    }

        //Event Listeners
        events() {
            this.icon.addEventListener("click", (e) => {
                this.toggleTheMenu();
            });
        }

        //Functions
        toggleTheMenu() {
            this.menuContent.classList.toggle('site-header__menu-content--is-visible');
            this.siteHeader.classList.toggle('site-header--is-expanded');
            this.icon.classList.toggle('site-header__menu-icon--close-x');
        }
}

export default MobileMenu;