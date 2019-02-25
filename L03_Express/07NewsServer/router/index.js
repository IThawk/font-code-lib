var express = require("express");
var router = express.Router();
var Api = require("../config/api.js");
var CURD = require("../sql/CURD.js");
var url = require("url");

router.all(Api.news, function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "X-Requested-With");
	res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
	res.header("X-Powered-By", ' 3.2.1');
	res.header("Content-Type", "application/json;charset=utf-8");
	next();
})

router.get(Api.news, function(req, res) {
	var sql = "select * from news";
	CURD.sqlFn(sql, null, function(data) {
		res.status(200).json(data);
	})
})

router.get(Api.newsadd, function(req, res) {

	// 接受参数
	var path_url = url.parse(req.url, true);
	var query = path_url.query;
	var title = query.title;
	var news_url = query.url;
	var sql = "insert into news values(null,?,?)";
	var arr = [title, news_url];
	CURD.sqlFn(sql, arr, function(data) {
		if (data.affectedRows) {
			res.status(200).json({
				code: 200,
				msg: "success"
			});
		}
		res.status(500).json({
			code: 100,
			msg: "error"
		})
	})
})

module.exports = router;