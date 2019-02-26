var fs = require("fs");
var path = require('path')

let fileOperation = {
    // 定义文件的入口文件
    access: function (filePath) {
        var data = this.readFile(filePath, 'utf-8');
        console.log(data)
    },

    /**
     * 这个是用来读取文件的方法
     * @param filePath 文件的路径
     * @param encoding 编码
     * @return 
     */
    readFile: function (filePath, encoding) {
        //将文件转换为绝对路径
        if (!path.isAbsolute(filePath)) {
            filePath = path.resolve(__dirname, filePath)
        }
        // 创建读取流
        var read = fs.createReadStream(filePath, encoding);

        // 打开文件
        read.on("open", function () {
            console.log("文件打开");
        })

        // 读取
        var data = "";
        read.on("data", function (chunk) { //  chunk是一行一行的去读
            // console.log(chunk);
            data += chunk;
        });

        // 读取完毕
        read.on("end", function () {
            console.log("文件读取完成");
        });

        // 关闭文件
        read.on("close", function () {
            console.log("文件已经关闭");
        })
        return data;
    }

}
fileOperation.access("hello.txt")
module.exports = fileOperation;