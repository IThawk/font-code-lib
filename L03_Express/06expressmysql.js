var express = require("express");
var mysql = require("mysql");
var app = express();


var connObj = {
	host: "127.0.0.1",
	user: "root",
	password: "",
	database: "web170918"
}

var Client = mysql.createConnection(connObj);

//查询数据
var sql = "select * from user";

app.get("/mysql", function(req, res) {

	Client.query(sql, function(error, result) {
		if (error) {
			return;
		}
		res.status(200).send(result);
	})
})


app.listen(3000, function() {
	console.log(3000);
})