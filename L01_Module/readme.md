1.模块化
	1.模块
	2.模块化：
		1.nodejs中
			commonjs规范
		2.在前端有一些库，可以帮我们管理文件与文件的关系
			1.requirejs
				requirejs是AMD规范
				AMD:AMD是requirejs在推广过程中对模块化定义的规范化产出
				解决的问题：
					1.实现js文件的异步加载，避免加载失去响应
					2.管理模块之间的依赖关系，便于编写和维护
				使用步骤：
					1.引入文件
						<script data-main="js/main.js" src="js/libs/require.js"></script>
					2.实现main.js文件
						1.配置
							requirejs.config({
								// 配置基础url路径
								baseUrl: "js/",
								// 对应关系
								paths: {
									// .js的后缀可以省略
									"index": "apps/index",
									"hello": "apps/hello",
									"jquery": "libs/jquery-3.2.1"
								}
							})
						2.加载
							requirejs(["index", "hello", "jquery"], function(index, hello, $) {
							})
					3.定义模块
						define(["jquery"], function($) {
							$(".hello").html("哈哈哈")
						})
					4.引入第三方组件
						注意：如果要使用模块化(require),所有的文件必须都支持define定义模块的方案

						shim可以解决依赖关系
							如果不支持define定义模块，可以通过shim解决问题

			2.seajs // 已经死亡
				CMD:seajs在推广过程中对模块化定义的规范化产出
				使用：
					seajs.config({
						base:"./js/",
						alias:{
							"hello":"hello",
							"jquery":"jquery-3.2.1"
						}
					});
					seajs.use("index");

			3.seajs和requirejs的区别
				require：提前加载
				seajs：延迟加载



2.作业：
	http://www.wwtliu.com/sxtstu/news/juhenews.php?type=junshi&count=30
	type：新闻类型  top  junshi  yule  keji  tiyu  guonei guoji
	count:新闻数量  最多30条
