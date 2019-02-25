define(["http", "config", "view"], function(http, config, view) {
	http.http(config.url + "?type=top&count=10", callback);

	function callback(data) {
		view.setView(data);
	}
})