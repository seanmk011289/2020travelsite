export default class Modal {
    constructor() {
        ///THIS GOES FIRST SO THE HTML WE ARE INTERACTING WITH IS ACTUALLY ON THE PAGE
        this.injectHTML();

        //Our main javscript file is now handling click events for opening the modal, so commenting this out!
        //this.openModalButtons = document.querySelectorAll('.open-modal');
        this.modal = document.querySelector('.modal');
        this.closeModalButton = document.querySelector('.modal__close');
        this.modalCheck = false;

        this.events()
        
    }

    events() {
        //Listen for open click
        //Our main javscript file is now handling click events for opening the modal, so commenting this out!
        // this.openModalButtons.forEach(el => el.addEventListener("click", (e) => this.openTheModal(e)))

        //Listen for closing click
        this.closeModalButton.addEventListener("click", () => this.closeTheModal())

        //Pushes any key
        document.addEventListener('keyup', (e => this.keyPressHandler(e)))
    }

    openTheModal() {
        this.modal.classList.add('modal--is-visible');
        this.modalCheck = true;
    }

    closeTheModal() {
        this.modal.classList.remove('modal--is-visible');
        this.modalCheck = false;
    }

    keyPressHandler(e) {
        if (e.keyCode == 27 && this.modalCheck == true) {
            this.closeTheModal();
            console.log("escape button closed the modal");
        }
    }

    injectHTML() {
        document.body.insertAdjacentHTML('beforeend', `
        <div class="modal">
    <div class="modal__inner">
      <h2 class="section-title section-title--blue section-title--less-margin"><img src="assets/images/icons/mail.svg" class="section-title__icon"> Get in <strong>Touch</strong></h2>
      <div class="wrapper wrapper--narrow">
        <p class="modal__description">We will have an online order system in place soon. Until then, connect with us on any of the platforms below!</p>
      </div>

      <div class="social-icons">
        <a href="#" class="social-icons__icon"><img src="assets/images/icons/facebook.svg" alt="Facebook"></a>
        <a href="#" class="social-icons__icon"><img src="assets/images/icons/twitter.svg" alt="Twitter"></a>
        <a href="#" class="social-icons__icon"><img src="assets/images/icons/instagram.svg" alt="Instagram"></a>
        <a href="#" class="social-icons__icon"><img src="assets/images/icons/youtube.svg" alt="YouTube"></a>
      </div>
    </div>
    <div class="modal__close">X</div>
  </div>`)
    }
}