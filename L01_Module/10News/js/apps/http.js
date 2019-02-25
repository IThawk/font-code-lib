define(["jquery"], function($) {
	function http(url, callback) {
		$.ajax({
			// url上面存在参数
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