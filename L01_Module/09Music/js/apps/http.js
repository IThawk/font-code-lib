define(["jquery"], function($) {

	function http(url, callback) {
		$.ajax({
			url: url,
			type: "get",
			success: function(data) {
				callback(data);
			}
		})
	}
	return {
		http: http
	}

})