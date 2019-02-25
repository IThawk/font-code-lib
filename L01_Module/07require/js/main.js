requirejs.config({
	baseUrl: "js/",
	paths: {
		"jquery": "libs/jquery-3.2.1",
		"data": "apps/data",
		"index": "apps/index",
		"view": "apps/view"
	}
});


requirejs(["jquery", "index", "data", "view"], function($, index, data, view) {
	// 在最外层调用
	index.setView();
})