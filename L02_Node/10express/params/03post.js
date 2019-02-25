var express = require("express");
var bodyParser = require("body-parser");
var app = express();

// 转化参数格式
app.use(bodyParser.urlencoded({
	extended: true
}));

app.post("/demo", function(req, res) {

	var name = req.body.username;
	var age = req.body.userage

	res.json({
		name: name,
		age: age
	})
})


app.listen(3000, function() {
	console.log(3000)
})