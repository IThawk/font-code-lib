1.Node的环境搭建
2.命令行工具：
	打开方式分为两种情况
		1.用户打开
		2.管理员打开
	常用命令：
		1.进入盘符：d:
		2.进入目录：cd path
		3.查看当前目录下的所有文件：dir
		4.清空信息：cls
		5.回到根目录：cd /
		6.回到上一级目录：cd ../
		7.推出命令行：exit
		8.创建文件夹：mkdir
		快捷使用方式：
			tab：自动补全
			上下键：历史输入
			shift+右键快速打开
3.理解：
	nodejs是事件驱动

4.npm
5.express:
	1.安装
		1.初始化package.json
			npm init
			package.json文件的作用：
				1.标注版本、开发者、公司、项目等信息
				2.保存安装的第三方依赖的信息
		2.安装express
			npm install express --save


6.安装插件
	1.post man：chrome浏览器的插件
	2.npm替换成cnpm
		https://npm.taobao.org/
			npm install -g cnpm --registry=https://registry.npm.taobao.org
			npm install express --save  ->  cnpm install express --save
	3.代理（翻墙）seed的工具
		http://www.seednet.pro/

7.中间件
	