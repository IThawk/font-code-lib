var express = require("express");
var router = express.Router();
var Api = require("../config/api.js");
var CURD = require("../sql/CURD.js");
var url = require("url");


router.all(Api.login, function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "X-Requested-With");
	res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
	res.header("X-Powered-By", ' 3.2.1');
	res.header("Content-Type", "application/json;charset=utf-8");
	next();
})

router.all(Api.register, function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "X-Requested-With");
	res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
	res.header("X-Powered-By", ' 3.2.1');
	res.header("Content-Type", "application/json;charset=utf-8");
	next();
})

// 登录
router.post(Api.login, function(req, res) {
	var username = req.body.username;
	var password = req.body.password;
	var sql = "SELECT * FROM newsuser WHERE `username`=? AND `password`=?";
	var arr = [username,password];
	CURD.sqlFn(sql, arr, function(data) {
		res.status(200).json(data);
	})
})

// 注册
router.post(Api.register, function(req, res) {
	var username = req.body.username;
	var password = req.body.password;
	var sql = "insert into newsuser values(null,?,?)";
	var arr = [username,password];
	CURD.sqlFn(sql, arr, function(data) {
		if (data.affectedRows) {
			return res.status(200).json({
				code: 200,
				msg: "success"
			});
		}else{
			return res.status(500).json({
				code: 100,
				msg: "error"
			})
		}
	})
})

module.exports = router;
