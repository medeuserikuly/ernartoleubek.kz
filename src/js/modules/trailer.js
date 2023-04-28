export default class Trailer {
    constructor(trailer) {
       try {
        this.trailer = document.getElementById(trailer);
       } catch (error) {}
    }

	animateTrailer (e, interacting) {
		try {
			const x = e.clientX - this.trailer.offsetWidth / 2,
			y = e.clientY - this.trailer.offsetHeight / 2;

			const keyframes = {
			transform: `translate(${x}px, ${y}px) scale(${interacting ? 4 : 1})`
			};

			this.trailer.animate(keyframes, {
			duration: 800,
			fill: "forwards"
			});
		} catch (error) {}
	}

    init() {
		if (screen.width > 1200) {
			window.onmousemove = (e) => {
				const interactable = e.target.closest(".interactable"),
				interacting = interactable !== null;
				this.animateTrailer(e, interacting);
			};
		}


    }
}
