/**
 * 链接数据库
 * 	 1.安装链接数据库的依赖
 * 	 	npm install --save mysql
 * 
 */

var http = require("http");
var mysql = require("mysql");

// 链接数据库
var client = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "",
	database: "web170918"
})

// 数据库操作语句
var sql = "select * from user";
var results = client.query(sql, function(error, result) {
	if (result) {
		console.log(result);
		return result;
	}
})

var server = http.createServer(function(req, res) {
	res.end(results);
})

server.listen(3000, function() {
	console.log("3000")
})