window.onload = function() {
	console.log('WINDOW ON LOAD');

	const naviViewController = new NaviViewController();
	naviViewController.render({
		target: document.body
	}).then(() => {
		console.log('VIEW RENDER');
	});
	console.log(naviViewController);
}
