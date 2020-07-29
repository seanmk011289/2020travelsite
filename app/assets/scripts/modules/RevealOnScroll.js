import throttle from 'lodash/throttle'
import debounce from 'lodash/debounce'

export default class RevealOnScroll {
    constructor(els, thresholdPercent) {
        //DOM Elements
        
        this.itemsToReveal = els;

        this.thresholdPercent = thresholdPercent;

        this.browserHeight = window.innerHeight;

        this.hideInitially();
        this.scrollThrottle = throttle(this.calcCaller, 200).bind(this);

        this.events()
    }

    events() {

        window.addEventListener("scroll", this.scrollThrottle)
        window.addEventListener("resize", debounce(() => {
            console.log("Resize just ran");
            this.browserHeight = window.innerHeight;
        }, 333))

    }

    calcCaller() {
        console.log("Scroll function ran")
        this.itemsToReveal.forEach(x => {
        if(!x.isRevealed) {
            this.calculateIfScrolledTo(x);
        }
    })
    }

    calculateIfScrolledTo(x) {
        if((window.scrollY + this.browserHeight) > x.offsetTop) {
            console.log("element was scrolled to")
            let percentage = (x.getBoundingClientRect().y / this.browserHeight) * 100;
            if(percentage <= this.thresholdPercent) {
                x.classList.add('reveal-item--is-visible');
                x.isRevealed = true;
                if(x.isLastItem) {
                    window.removeEventListener("scroll", this.scrollThrottle)
                }
        }
        }
    }


    hideInitially() {
        this.itemsToReveal.forEach(item => {
            item.classList.add('reveal-item')
            item.isRevealed = false;
        })
        this.itemsToReveal[this.itemsToReveal.length - 1].isLastItem = true;
    }

}