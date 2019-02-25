var Client = require("./Conn.js");

// curd 增删改查
var curd = {
	sqlFn: function(sql, arr, callback) {
		// query可以接受三个参数
		// 参数1：数据库语句
		// 参数2：数据库语句参数 [Array]
		// 参数3：回调函数
		Client.query(sql, arr, function(error, result) {
			if (error) {
				return;
			}
			callback(result);
		})
	}
}

module.exports = curd;