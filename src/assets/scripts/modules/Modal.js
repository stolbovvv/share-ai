/** Module: Modal */

export class Modal {
	constructor(selector = '.js-modal') {
		this.element = document.querySelector(selector);
		this.openButtons = document.querySelectorAll(`.js-modal-button[data-modal-open="${this.element.id}"]`);
		this.closeButtons = document.querySelectorAll(`.js-modal-button[data-modal-close="${this.element.id}"]`);
		this.options = {
			activeClass: 'is-open',
		};

		if (this.element) {
			this.init();
		}
	}

	open = () => {
		document.body.style['overflow'] = 'hidden';
		this.element.classList.add(this.options.activeClass);
		this.element.style.paddingRight = getComputedStyle(document.body).paddingRight;
	};

	close = () => {
		this.element.classList.remove(this.options.activeClass);
		this.element.style.removeProperty('padding-right');
		document.body.style.removeProperty('overflow');
	};

	init() {
		this.openButtons.forEach((button) => button.addEventListener('click', this.open));
		this.closeButtons.forEach((button) => button.addEventListener('click', this.close));

		this.element.addEventListener('click', ({ target }) => {
			if (target && Object.prototype.hasOwnProperty.call(target.dataset, 'modalClose')) this.close();
		});
	}
}
