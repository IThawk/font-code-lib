var express = require("express");
var app = express();
var router = require("./router/index.js");
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({
	extended: true
}));

app.use("/", router);

app.listen(3000, function() {
	console.log(3000);
})
