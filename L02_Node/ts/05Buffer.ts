import http = require("http");

var strBuffer = new Buffer('["iwen", "ime"]');
console.log(strBuffer);

var server = http.createServer(function(req, res) {
	res.statusCode = 200;
	res.end(strBuffer); //  string buffer
})

server.listen(3000, function() {
	console.log(3000)
})