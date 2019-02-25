var fs = require("fs");

var writerStream = fs.createWriteStream("hello.txt");

var data = "hello txt";
writerStream.write(data, "utf-8");
writerStream.end();

writerStream.on("finish", function() {
	console.log("写入完毕");
})