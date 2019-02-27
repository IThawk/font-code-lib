import fs = require("fs");
import path = require('path');
export namespace fileOperation{
    // 定义文件的入口文件
    export function init() {
        
    }

     /**
     * 这个是用来读取文件的方法
     * @param filePath 文件的路径
     * @param encoding 编码
     * @return 
     */
    export function readFileSync (filePath, encoding) {
        //将文件转换为绝对路径
        if (!path.isAbsolute(filePath)) {
            filePath = path.resolve(__dirname, filePath)
        }
        // 创建读取流
        var readResult = fs.readFileSync(filePath, encoding);
        return readResult;
    }
    
     /**
     * 这个是用来读取文件的方法
     * @param filePath 文件的路径
     * @param context 要写入的文件的内容
     * @return 
     */
    export function writeFileSync (filePath, context) {
        //将文件转换为绝对路径
        if (!path.isAbsolute(filePath)) {
            filePath = path.resolve(__dirname, filePath)
        }
        // 写文件
        var readResult = fs.writeFileSync(filePath, context);
        return readResult;
    }
}
