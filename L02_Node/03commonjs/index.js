var http = require("http");
var data = require("./data.js");

var server = http.createServer(function(req, res) {
	res.statusCode = 200;
	res.end(data)
});

server.listen(3000, function() {
	console.log("3000")
})