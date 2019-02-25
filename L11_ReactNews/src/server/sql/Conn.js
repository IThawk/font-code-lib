var MySqlConfig = require("./MysqlConfig.js");
var mysql = require("mysql");

var Client = mysql.createConnection(MySqlConfig);

module.exports = Client;