var express = require("express");
var bodyParser = require("body-parser");
var app = express();

// 转化参数格式
app.use(bodyParser.urlencoded({
	extended: true
}));

/**
 *
 * form-data:表单提交的格式
 * x-www-form-urlencoded:ajax提交数据格式
 * 
 */

app.post("/demo", function(req, res) {
	console.log(req);
	var name = req.param("username");
	var age = req.param("userage");

	res.json({
		name: name,
		age: age
	})
})


app.listen(3000, function() {
	console.log(3000)
})