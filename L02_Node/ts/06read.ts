import fs = require("fs");
import http = require("http");

//创建读取流
var read = fs.createReadStream("01node.js", "utf-8");

// 打开文件
read.on("open", function() {
	console.log("文件打开");
})

// 读取
var data = "";
read.on("data", function(chunk) { //  chunk是一行一行的去读
	data += chunk;
});

// 读取完毕
read.on("end", function() {
	console.log(data);
});

// 关闭文件
read.on("close", function() {
	console.log("文件已经关闭");
})

var server = http.createServer(function(req, res) {
	res.statusCode = 200;
	res.end(data);
})

server.listen(3000, function() {
	console.log("3000")
})