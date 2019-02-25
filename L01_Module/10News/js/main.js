requirejs.config({
	baseUrl: "js/",
	paths: {
		"jquery": "libs/jquery-3.2.1",
		"index": "apps/index",
		"config": "apps/config",
		"view": "apps/view",
		"http": 'apps/http'
	}
});


requirejs(["jquery", "index", "config", "view", "http"], function($, index, config, view, http) {

})