class NaviViewController extends ViewController {
	constructor() {
		super();

		this.viewControllers = [];
	}

	render(options = {}) {
		return new Promise((resolve, reject) => {
			super.render(options).then(() => {
				this.view.innerHTML = '<p>PLACE HOLDER</p>';
				resolve(this);
			});
		});
	}

	addViewController(viewController, options = {}) {
		return new Promise((resolve, reject) => {
			(
				(after) => {
					if (this.viewControllers.length > 0) {
						const idx = this.viewControllers.indexOf(viewController);
						if (idx != -1) {
							this.viewControllers[this.viewControllers.length - 1].hide().then(
								() => {
									this.viewControllers.splice(idx, 1);
									after();
								}
							);
						} else {
							after();
						}
					} else {
						after();
					}
				}
			)(
				() => {
					this.viewControllers.push(viewController);
					viewController.show(options).then(() => {
						this.show();
						resolve(this);
					});
				}
			);
		});
	}

	removeViewController(viewController) {
		return new Promise((resolve, reject) => {
			viewController.hide().then(() => {
				this.model.viewControllers.pop(viewController);
				if (this.model.viewControllers.length > 0) {
					this.vCs[this.vCs.length - 1].hide()
				}
			});
		});
	}
}

// /** Navigation Controller */
// class NaviC {
// 	constructor(options = {}) {
// 		this.data = {
// 			vCs: [];
// 		}
// 		this.naviVC = new NaviVC({
// 			model: this.vCs
// 		});
// 	}
//
// }
