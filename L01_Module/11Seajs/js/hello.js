define(function(require, exports, module) {

	var $ = require("jquery");
	$ = jQuery;
	// var root = document.getElementById("root");

	exports.getHello = function() {
		// root.innerHTML = "我是Hello";
		$("#root").html("我是hello");
	}

	// module.exports = {
	// 	getHello: getHello
	// }
})