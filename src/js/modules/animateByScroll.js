export default class AnimateByScroll {
    constructor(selector) {
        this.item = document.querySelector(selector);
    }

    offset(el) {
        const rect = el.getBoundingClientRect(),
              scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return {
            top: rect.top + scrollTop
        };
    }

    animOnScroll() {
        const animItemHeight = this.item.offsetHeight,
                  animItemOffset = this.offset(this.item).top,
                  animStart = 6;
    
        let animItemPoint = window.innerHeight - animItemHeight / animStart;

        if (animItemHeight > window.innerHeight) {
            animItemPoint = window.innerHeight - window.innerHeight / animStart;
        }
    
        if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
            this.item.style.offset = 1;
            this.item.classList.add('animate__animated', 'animate__fadeInUp');
        }

    }

    init() {
        this.animOnScroll();
        window.addEventListener('scroll', () => {
            this.animOnScroll();
        });
    }
}