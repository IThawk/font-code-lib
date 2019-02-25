var express = require("express");
var config = require("./config.js");
var data = require("./data/news.json");
var yule = require("./data/yule.json");
var keji = require("./data/keji.json");
var router = express.Router();
var url = require("url");

// 新闻
router.get(config.news, function(req, res) {
	var path_url = url.parse(req.url, true);
	var query = path_url.query;
	switch (query.type) {
		case "yule":
			res.status(200).json(yule);
			break;
		case "keji":
			res.status(200).json(keji)
			break;
		default:
			res.status(200).json(data);
			break;
	}

});

module.exports = router;