export default class sliderVideoPlayer {
    constructor(triggers) {
        this.triggers = document.querySelectorAll(triggers);
    }

    bindTriggers() {
        this.triggers.forEach(trigger => {
            trigger.addEventListener('click', () => {
                this.path = trigger.getAttribute('data-url');
                this.id = trigger.getAttribute('id');
                trigger.firstElementChild.remove();
                this.createPlayer(this.path, this.id);

            });
        });
    }
    
    createPlayer(url, id) {
    //     const options = {
    //         url: `${url}`,
    //         autoplay: true,
    //         width: 576
    //     };

    //    new Vimeo.Player(id, options);


        // player.on('loaded', function() {
        //     player.resize();
        // });

        this.player = new YT.Player(id, {
            height: '100%',
            width: '100%',
            videoId: `${url}`,
            playerVars: { 'autoplay': 1 }
        });
    }

    init() {
        const tag = document.createElement('script');
        tag.src = "https://www.youtube.com/iframe_api";
        // tag.src = "https://player.vimeo.com/api/player.js";
        const firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);


        
        this.bindTriggers();
    }
}
