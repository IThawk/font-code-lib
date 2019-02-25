// 依赖注入
define(["jquery", "data", "view"], function($, data, view) {
	// 执行
	function setView() {
		view.getView().html(data.name);
	}
	return {
		setView: setView
	}

})