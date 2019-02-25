var express = require("express");
var config = require("./config.js");
var data = require(("./data.json"));
var url = require("url");
var router = express.Router();

router.get(config.classInfo, function(req, res) {
	res.json(data.classInfo);
})

// 我只想要看到男生
router.get(config.boy, function(req, res) {
	res.json(data.alluser.filter(function(stu) { // stu参数代表每一个大对象
		// {
		// "name": "周一帆",
		// "age": 25,
		// "sex": "man"
		// }
		return stu && stu.sex == "man";
	}))

})

router.get(config.girl, function(req, res) {
	res.json(data.alluser.filter(function(stu) { // stu参数代表每一个大对象
		return stu.sex == "woman";
	}))

})

// age对比计算
router.get(config.age, function(req, res) {
	var path_url = url.parse(req.url, true);
	var query = path_url.query;
	// age=10
	if (query.age) {
		res.json(data.alluser.filter(function(stu) {
			return stu.age > query.age;
		}))
	} else {
		res.json({
			code: 100,
			msg: "error"
		})
	}
})

module.exports = router;