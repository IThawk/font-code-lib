1.ES6转ES5
	http://es6.ruanyifeng.com/：参考地址
	ES6不能运行在浏览器中，所以要转化成为ES5运行
	
2.Babel
	1.配置.babelrc
	2.安装
		npm install --save-dev babel-preset-es2015
	3.补充.babelrc文件
		{
			"presets":["es2015"]
		}
	4.转码
		1.安装babel
			npm install -g babel-cli
		2.转化为文件
			babel es6文件  -o es5文件
		3.转化文件夹
			babel index -d indexCompiled
	5.依赖
		1.安装依赖
			npm instal --save-dev babel-cli
		2.修改package.json文件
			"scripts": {
				"build": "babel index -d indexCompiled"
			}
		3.执行
			npm run build
3.ES6
	1.Let、Const
		1.let：ES6 新增了let命令，用来声明变量。它的用法类似于var，但是所声明的变量，只在let命令所在的代码块内有效。
			1.作用域：
				javaScript函数级作用域
				ES6中的let是块级作用域 解决了闭包保存当前状态的问题
			2.变量提升
				let不存在变量提升
			3.声明
				不允许重复声明
		2.const(constant):
			常量：url地址、不会产生变化的变量
			const声明一个只读的常量。一旦声明，常量的值就不能改变。
	2.字符串
		1.遍历接口
		  for...of
		2.includes(), startsWith(), endsWith()
		3.repeat();
		4.padStart()，padEnd() 
		5.字符串模板
	3.解构赋值
		1.赋值
		2.默认值
		3.对象的解构赋值
		4.函数的解构赋值
	4.数组
		1.扩展运算符：(...)
		2.Array.from()
		3.Array.of()
		4.find() 和 findIndex() 
	5.对象
		1.写法
		2.Object.is()
		3.Object.assign()
	6.函数
		1.参数默认值
		2.length属性
		3.可变参数
		4.严格模式：http://www.wwtliu.com/blog/?p=131
		5.箭头函数
	7.类与继承
		1.类的声明
		2.构造函数
		3.类的实例化
		4.不存在变量提升
		5.私有方法和私有属性
		6.类的静态方法
		7.继承
	8.模块
		1.commonjs规范
		2.requirejs的AMD规范
		3.seajs的CMD规范
		4.ES6的模块
	9.Promise对象
		优点：
			有了Promise对象，就可以将异步操作以同步操作的流程表达出来，避免了层层嵌套的回调函数。此外，Promise对象提供统一的接口，使得控制异步操作更加容易。
		缺点：
			Promise也有一些缺点。首先，无法取消Promise，一旦新建它就会立即执行，无法中途取消。其次，如果不设置回调函数，Promise内部抛出的错误，不会反应到外部。第三，当处于pending状态时，无法得知目前进展到哪一个阶段（刚刚开始还是即将完成）
		参考：https://segmentfault.com/a/1190000003810652