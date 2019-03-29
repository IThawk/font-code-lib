'use strict';

// read from 'sample.png'

const fs = require('fs');

console.log('>>> BEGIN >>>')

// 同步读取文件
var data = fs.readFileSync('sample.png');
console.log(data);
console.log(data.length + ' bytes');

console.log('>>> END >>>')
