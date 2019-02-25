define(["jquery", "http", "config"], function($, http, config) {

	function setView(data) {
		$(data.result.data).each(function(index, element) {
			$(".container").append('<div><p>' + element.title + '</p><img src="' + element.thumbnail_pic_s + '" ></div>')
		})
	}

	function setDiffData() {
		$(".topbtn").click(function() {
			http.http(config.url + "?type=top&count=10", callback)
		})
		$(".junshibtn").click(function() {
			http.http(config.url + "?type=junshi&count=10", callback)
		})
		$(".yulebtn").click(function() {
			http.http(config.url + "?type=yule&count=10", callback)
		})
		$(".kejibtn").click(function() {
			http.http(config.url + "?type=keji&count=10", callback)
		})
	}

	function callback(data) {
		$(".container").html("");
		setView(data);
	}

	setDiffData();

	return {
		setView: setView
	}

})