'use strict'

// function getPoint(x, y) {
// 	console.log(x + y);
// }
// // length必须参数
// console.log(getPoint.length);


// function nums(...values) { // 可变参数
// 	for (var i = 0; i < values.length; i++) {
// 		console.log(values[i]);
// 	}
// }

// nums(10, 20, 30, 40);
// 
// var obj = {
// 	name: "iwen",
// 	name: "iem"
// }

// console.log(obj);
// 
// setTimeout(function() {
// 	console.log("哈哈")
// }, 1000)


// setTimeout(() => {
// 	console.log("哈哈哈")
// }, 2000);
// 
// 函数名  参数    返回值
// var demo = (hello, world) => hello + world;

// console.log(demo("hello", "world"));

// var demo1 = function(hello, world) {
// 	return hello + world;
// }

// var arr = [10, 20, 30];
// arr.map((item) => {
// 	console.log(item)
// })
// 
var time = "今天2018年1月7号";
var obj = {
	time: "今天2018年1月8号",
	getTime: function() {
		setTimeout(function() {
			console.log(this.time);
		}.bind(this), 1000)
	}
}

// call apply bind

obj.getTime();


var timess = "今天2018年1月7号";
var objss = {
	timess: "今天2018年1月8号",
	getTime: function() {
		var that = this;
		setTimeout(function() {
			console.log(that.timess);
		}, 1000)
	}
}

objss.getTime();


var times = "今天2018年1月7号";
var objs = {
	times: "今天2018年1月8号",
	getTime: function() {
		setTimeout(() => {
			console.log(this.times);
		}, 1000)
	}
}

objs.getTime();