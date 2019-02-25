// 操作数据
var data = (function(currentData) {

	function getData() {
		if (currentData.view.values) {
			return currentData.view.values;
		}
		return "请配置数据";
	}

	function getClasses() {
		if (currentData.view.classes) {
			return currentData.view.classes;
		}
	}

	return {
		getData: getData,
		getClasses: getClasses
	}

})(currentData);


// 操作View
var view = (function($, data) {

	// 私有的
	function getView(classes) {
		return $(classes);
	}

	function setView(classes) {
		return getView(data.getClasses()).html(data.getData());
	}

	setView();

})(jQuery, data);