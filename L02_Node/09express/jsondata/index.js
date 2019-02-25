var express = require("express");
var app = express();

app.get("/", function(req, res) {
	res.status(200).json({
		name: "iwen",
		age: 20
	})
})


app.listen(3000, function() {
	console.log(3000);
})