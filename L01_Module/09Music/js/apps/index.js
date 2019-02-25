define(["http", "config", "view"], function(http, config, view) {

	http.http(config.url, callback);

	function callback(data) {
		view.setView(data);
	}
})