class ViewController {
	constructor() {
		const id = this.id = ViewController.getId();
		const view = this.view = document.createElement('div');
		view.setAttribute('id', id);
	}

	render(options = {}) {
		return new Promise((resolve, reject) => {
			if (options.target != null) {
				options.target.appendChild(this.view);
			}
			resolve(this);
		});
	}

	hide() {
		return new Promise((resolve, reject) => {
			this.view.style.display = 'none';
			resolve(this);
		});
	}

	show() {
		return new Promise((resolve, reject) => {
			this.view.style.display = 'block';
			resolve(this);
		});
	}

	remove() {
		return new Promise((resolve, reject) => {
			if (this.view.parentNode != null) {
				this.view.parentNode.removeChild(this.view);
			}
			resolve(this);
		});
	}
}

ViewController.getId = (() => {
	let counter = 0;
	return () => {
		const retVal = `ViewController_${counter}`;
		counter += 1;
		return retVal;
	}
})();
