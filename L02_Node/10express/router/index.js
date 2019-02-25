var express = require("express");
var app = express();
var router = require("./router.js");

// 一级目录
app.use("/", router);


app.listen(3000, function() {
	console.log("3000")
})