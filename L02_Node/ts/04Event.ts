// 引入事件对象
import events = require("events");

// new实例化一个事件 
var myEvent = new events.EventEmitter();

// 监听事件
myEvent.on("hi siri", function() {
	console.log("hi ni mei");
})

// 触发事件
setTimeout(function() {
	myEvent.emit("hi siri");
}, 3000);