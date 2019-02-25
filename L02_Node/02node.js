var http = require("http");

var server = http.createServer(function(req, res) {
	// 响应状态码：200
	res.statusCode = 200;
	res.setHeader('Content-Type', 'text/plain');
	res.end('{"name":"iwen"}');

})

server.listen(8888, function() {
	console.log("服务器运行在：localhost:3000")
})