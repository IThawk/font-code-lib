var express = require("express");
var app = express();
var url = require("url");


/**
 * 接受参数的形式
 *     ?name=iwen&age=20 
 */

app.get("/hello", function(req, res) {
	var path_url = url.parse(req.url, true);
	var query = path_url.query;
	res.json({
		name: query.name,
		age: query.age
	})
})


app.listen(3000, function() {
	console.log(3000)
})