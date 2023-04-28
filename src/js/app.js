import AnimateByScroll from "./modules/animateByScroll.js";
import burger from "./modules/burger.js";
import * as func from "./modules/functions.js";
import Menu from "./modules/menu.js";
import ParallaxTiltEffect from "./modules/parallaxEffect.js";
import Trailer from "./modules/trailer.js";
import VidePlayer from "./modules/videoPlayer.js";

window.addEventListener('DOMContentLoaded', () => {
    'use strict';
    func.isWebp();

    new Menu('.menu__link').init();
    new Trailer('trailer').init();

    new VidePlayer('.videos__wrapper-item', '.overlay').init();
    new VidePlayer('.grid__item', '.overlay').init();


    new AnimateByScroll('.contacts').init();
    
    new ParallaxTiltEffect({
      element: ".grid__wrapper-1",
      tiltEffect: "reverse"
    });
    
    new ParallaxTiltEffect({
      element: ".grid__wrapper-2",
      tiltEffect: "normal"
    });
    
    new ParallaxTiltEffect({
        element: ".grid__wrapper-3",
        tiltEffect: "reverse"
    }); 

    new ParallaxTiltEffect({
        element: ".grid__wrapper-4",
        tiltEffect: "normal"
    });

    new ParallaxTiltEffect({
        element: ".grid__wrapper-5",
        tiltEffect: "reverse"
    });

    new ParallaxTiltEffect({
        element: ".grid__wrapper-6",
        tiltEffect: "normal"
    });

    new ParallaxTiltEffect({
        element: ".grid__wrapper-7",
        tiltEffect: "reverse"
    });

    new ParallaxTiltEffect({
        element: ".grid__wrapper-8",
        tiltEffect: "normal"
    });

    new ParallaxTiltEffect({
        element: ".grid__wrapper-9",
        tiltEffect: "reverse"
    });

});