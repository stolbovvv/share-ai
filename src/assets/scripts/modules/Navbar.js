/** Module: Navbar */

export class Navbar {
	constructor() {
		this.element = document.querySelector('.js-navbar');
		this.buttons = document.querySelectorAll('.js-navbar-button');
		this.options = {
			activeClass: 'is-open',
		};

		if (this.element) {
			this.init();
		}
	}

	open = () => {
		document.body.style['overflow'] = 'hidden';
		this.buttons.forEach((button) => button.classList.add(this.options.activeClass));
		this.element.classList.add(this.options.activeClass);
	};

	close = () => {
		this.buttons.forEach((button) => button.classList.remove(this.options.activeClass));
		this.element.classList.remove(this.options.activeClass);
		document.body.style.removeProperty('overflow');
	};

	init() {
		this.buttons.forEach((button) => {
			if (button.dataset?.navbarAction === 'open') button.addEventListener('click', this.open);
			if (button.dataset?.navbarAction === 'close') button.addEventListener('click', this.close);
		});

		this.element.addEventListener('click', ({ target }) => {
			if (target && target.closest('a[href]')) this.close();
		});
	}
}
