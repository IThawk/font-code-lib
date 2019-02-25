var express = require("express");
var userInfo = require("./data.js")
var router = express.Router();

router.get("/hello", function(req, res) {
	res.status(200).json(userInfo.info)
})

router.get("/hello1", function(req, res) {
	res.status(200).json(userInfo.info1)
})

router.get("/hello2", function(req, res) {
	res.status(200).json(userInfo.info2)
})

module.exports = router;