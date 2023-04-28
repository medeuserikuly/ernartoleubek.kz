export default class Menu {
    constructor(menuLink) {
        this.menuLink = document.querySelectorAll(menuLink);
    }

    activeMenu() {
        this.menuLink.forEach(item => {
            if (item.href === location.href) {
                item.classList.add('active');
            }
        });
    }

    menuHover() {
        this.menuLink.forEach(elem => {
            
            elem.onmouseenter = elem.onmouseleave = (e) => {
                const tolerance = 10;
                const left = 0;
                const right = elem.clientWidth;
                let x = e.pageX - elem.offsetLeft;
        
                if (x - tolerance < left) { x = left; }
                if (x + tolerance > right) {x = right;}
        
                elem.style.setProperty('--x', `${ x }px`);       
            };
        });
    }

    init() {
        this.menuHover();
        this.activeMenu();
    }
}