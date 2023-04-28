export default class ParallaxTiltEffect {
    constructor({ element, tiltEffect }) {
        try {
            this.element = document.querySelector(element);
            this.item = this.element.querySelector(".grid__item");
        } catch (error) {}
        this.size = [300, 360];
        [this.w, this.h] = this.size;
    
        this.tiltEffect = tiltEffect;
    
        this.mouseOnComponent = false;
    
        this.handleMouseMove = this.handleMouseMove.bind(this);
        this.handleMouseEnter = this.handleMouseEnter.bind(this);
        this.handleMouseLeave = this.handleMouseLeave.bind(this);
        this.defaultStates = this.defaultStates.bind(this);
        this.setProperty = this.setProperty.bind(this);
        this.init = this.init.bind(this);
    
        this.init();
    }
  
    handleMouseMove(event) {
        const { offsetX, offsetY } = event;
    
        let X;
        let Y;
    
        if (this.tiltEffect === "reverse") {
            X = (offsetX - this.w / 2) / 3 / 3;
            Y = -(offsetY - this.h / 2) / 3 / 3;
        } else if (this.tiltEffect === "normal") {
            X = -(offsetX - this.w / 2) / 3 / 3;
            Y = (offsetY - this.h / 2) / 3 / 3;
        }
    
        this.setProperty("--rY", X.toFixed(2));
        this.setProperty("--rX", Y.toFixed(2));
    
        this.setProperty("--bY", 80 - (X / 4).toFixed(2) + "%");
        this.setProperty("--bX", 50 - (Y / 4).toFixed(2) + "%");
    }
  
    handleMouseEnter() {
        this.mouseOnComponent = true;
        this.item.classList.add("gridActive");
    }
  
    handleMouseLeave() {
        this.mouseOnComponent = false;
        this.defaultStates();
    }
  
    defaultStates() {
        this.item.classList.remove("gridActive");
        this.setProperty("--rY", 0);
        this.setProperty("--rX", 0);
        this.setProperty("--bY", "80%");
        this.setProperty("--bX", "50%");
    }
  
    setProperty(p, v) {
       return this.item.style.setProperty(p, v);
    }
  
    init() {
        try {
            if (screen.width > 577) {
                this.element.addEventListener("mousemove", this.handleMouseMove);
                this.element.addEventListener("mouseenter", this.handleMouseEnter);
                this.element.addEventListener("mouseleave", this.handleMouseLeave);
            }
          

        } catch (error) {}
    }
  }
  
  

  