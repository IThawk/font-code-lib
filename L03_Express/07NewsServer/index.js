var express = require("express");
var app = express();
var router = require("./router/index.js");


app.use("/", router);


app.listen(3000, function() {
	console.log(3000);
})