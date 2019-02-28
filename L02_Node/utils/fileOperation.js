var fs = require("fs");
var path = require('path');

let fileOperation = {
    // 定义文件的入口文件
    access: function (filePath) {
        let data = this.readFileSync(filePath, 'utf-8');
        console.log(data);
        this.writeFileSync(filePath, data.toString());

        data = this.fileIsExistSync("./build/txt.yaml");
        console.log(data);

        var datar = this.isDirectory("./build");
        datar.then((datar) => {
            console.log(datar)
        });
    },

    /**
     * 这个是用来读取文件的方法
     * @param filePath 文件的路径
     * @param encoding 编码
     * @return 
     */
    readFileSync: function (filePath, encoding) {
        //将文件转换为绝对路径
        if (!path.isAbsolute(filePath)) {
            filePath = path.resolve(__dirname, filePath)
        }
        // 创建读取流
        var readResult = fs.readFileSync(filePath, encoding);
        return readResult;
    },

    /**
     * 这个是用来读取文件的方法
     * @param filePath 文件的路径
     * @param context 要写入的文件的内容
     * @return 
     */
    writeFileSync: function (filePath, context) {
        //将文件转换为绝对路径
        if (!path.isAbsolute(filePath)) {
            filePath = path.resolve(__dirname, filePath)
        }
        // 创建读取流
        fs.writeFileSync(filePath, context);
    },

    /**
    * 这个是判断文件或者文件夹是否存在的方法
    * @param filePath 文件或者文件夹的路径
    * @return 
    */
    fileIsExistSync: function (filePath) {
        //将文件转换为绝对路径
        if (!path.isAbsolute(filePath)) {
            filePath = path.resolve(__dirname, filePath);
        }
        // 判断文件是否存在
        return fs.existsSync(filePath);
    },

    /**
     * 这个是判断文件或者文件夹是否存在的方法
     * @param filePath 文件或者文件夹的路径
     * @return 
     */
    isDirectory: function (filePath) {
        //将文件转换为绝对路径
        if (!path.isAbsolute(filePath)) {
            filePath = path.resolve(__dirname, filePath);
        }
        return new Promise((resolve, reject) => {
            fs.stat(filePath, function (err, stats) {
                resolve(stats);
            });

            //console.log(stats.isDirectory());
        });
    }

}
// 用于测试
fileOperation.access("hello.txt")
module.exports = fileOperation;