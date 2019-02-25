var express = require("express");
var app = express();
// 路由 -> 为了访问路径负责
app.get("/hello", function(req, res) {
	res.send("hello");
});

app.get("/world", function(req, res) {
	res.send("world")
});

app.post("/mypost", function(req, res) {
	res.send("mypost")
});

app.listen(3000, function() {
	console.log(3000)
})