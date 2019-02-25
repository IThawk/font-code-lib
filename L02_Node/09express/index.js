var express = require("express");
var classInfo = require("./data.js");
var app = express();

// 添加具体路径，解决跨域问题
app.all("/boy", function(req, res, next) {
	// 跨域处理
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "X-Requested-With");
	res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
	res.header("X-Powered-By", ' 3.2.1');
	res.header("Content-Type", "application/json;charset=utf-8");
	next();
})


// 路由的分配
app.get("/classinfo", function(req, res) {
	res.send(classInfo.info)
})

app.get("/boy", function(req, res) {
	res.send(classInfo.man)
})

app.get("/girl", function(req, res) {
	res.send(classInfo.woman)
});

app.post("/girl", function(req, res) {
	res.send(classInfo.info);
})

// app.get('/ab?cd', function(req, res) {
// 	res.send('ab?cd');
// });

// app.get('/ab+cd', function(req, res) {
// 	res.send('ab+cd');
// });

app.get(/a/, function(req, res) {
	res.send('ab+123123123');
});


app.listen(3000, function() {
	console.log("服务器运行在3000端口上")
})