export default class VideoPlayer {
    constructor(triggers, overlay) {
        try {
            this.triggers = document.querySelectorAll(triggers);
            this.overlay = document.querySelector(overlay);
            this.close = this.overlay.querySelector('.close');
        } catch (error) {}
    }

    bindTriggers() {
        this.triggers.forEach(trigger => {
            trigger.addEventListener('click', () => {
                document.body.style.overflow = 'hidden';

                if (document.querySelector('iframe#frame')) {
                    this.overlay.style.display = 'flex';
                    if (this.path !== trigger.getAttribute('data-url')) {
                        this.path = trigger.getAttribute('data-url');
                        this.player.loadVideoById({videoId: this.path});
                    }
                } else {
                    this.path = trigger.getAttribute('data-url');
                    this.createPlayer(this.path);
                }
            });
        });
    }

    bindClose() {
        this.close.addEventListener('click', () => {
            document.body.style.overflow = '';

            this.overlay.style.display = 'none';
            this.player.stopVideo();
        });

        this.overlay.addEventListener('click', () => {
            document.body.style.overflow = '';

            this.overlay.style.display = 'none';
            this.player.stopVideo();
        });
    }

    createPlayer(url) {
        this.player = new YT.Player('frame', {
            height: '100%',
            width: '100%',
            videoId: `${url}`,
        });
        this.overlay.style.display = 'flex';
    }

    init() {
        if (this.triggers.length > 0) {
            try {
                const tag = document.createElement('script');
                tag.src = "https://www.youtube.com/iframe_api";
                const firstScriptTag = document.getElementsByTagName('script')[0];
                firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
        
                this.bindTriggers();
                this.bindClose();
            } catch (error) {}
        }
    }
}