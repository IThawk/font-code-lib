var express = require("express");
var app = express();


/**
 * 接受参数的形式
 *     /iwen/20 : restfull
 */

app.get("/hello/:name/:age", function(req, res) {
	var name = req.param("name");
	var age = req.param("age");
	res.json({
		name: name,
		age: age
	})
})


app.listen(3000, function() {
	console.log(3000)
})