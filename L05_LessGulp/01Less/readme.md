1.Less
	Less 是一门 CSS 预处理语言，它扩充了 CSS 语言，增加了诸如变量、混合（mixin）、函数等功能，让 CSS 更易维护、方便制作主题、扩充。

	1.安装：
		npm install -g less
	2.编译：
		1.命令行编译
			Lessc *.less *.css
		2.考拉软件编译
			http://koala-app.com/index-zh.html
		3.webstorm
			他们可以配置使用
		4.js脚本编译
			用在服务器端，千万别用在前端
		5.使用构建工具处理
			例如：gulp
	3.语法
		1.变量
			@card_bgColor:#fff;
		2.混合
			.boxsize(@width:100px,@height: 50px,@background: #fff){
				width: @width;
				height:@height;
				background: @background;
			}
			.box{
				.boxsize();
				margin:10px;
			}
		3.嵌套
			.header{
				@headerHeight:50px;
				width: @g_Width;
				margin:0 auto;
				height: @headerHeight;
				line-height: @headerHeight;
				ul{
					clear:both;
					overflow: hidden;
					li{
						list-style: none;
						float: left;
						margin:0 20px;
						a{
							text-decoration: none;
							color: #222;
							&:hover{
								color: #f0f;
							}
						}
					}
				}
			}
		4.计算
			.textrem{
				width: 375 / 50rem;
				height: 456 / 50rem;
				background: #ff0000;
			}
		5.函数
			.fn{
				width: 100px;
				height: ceil(99.8px);
				font-size: 20px;
				background: green;
			}
		6.引导：判断
			.mixin(@value) when (@value > 100){
				width: 500px;
			}
			.mixin(@value) when (@value <= 100){
				width: 50px;
			}

			.boxs{
				height: 100px;
				.mixin(60);
				background: blue;
			}
		7.继承
			.box1{
				width: 100px;
				height: 100px;
				background: red;
				border-radius: 10px;
			}

			.box2{
				&:extend(.box1);
				font-size: 20px;
			}