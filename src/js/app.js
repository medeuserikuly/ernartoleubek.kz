import AnimateByScroll from "./modules/animateByScroll.js";
import burger from "./modules/burger.js";
import * as func from "./modules/functions.js";
import Menu from "./modules/menu.js";
import mobileVideoPlayer from "./modules/mobileVideoPlayer.js";
import ParallaxTiltEffect from "./modules/parallaxEffect.js";
import Trailer from "./modules/trailer.js";
import VideoPlayer from "./modules/videoPlayer.js";



window.addEventListener('DOMContentLoaded', () => {
    'use strict';
    func.isWebp();

    new Menu('.menu__link').init();
    new Trailer('trailer').init();

    new VideoPlayer('.videos__wrapper-item', '.overlay').init();
    new VideoPlayer('.grid__item', '.overlay').init();

    new AnimateByScroll('.contacts').init();

    const whatsapp = document.querySelector('.pulse-button');
    whatsapp.addEventListener('click', () => {
        open("https://wa.me/77475060993");
    });
    
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