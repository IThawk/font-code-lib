gulp：构建工具
	自动化。对于需要反复重复的任务，例如压缩（minification）、编译、单元测试、linting等，自动化工具可以减轻你的劳动，简化你的工作。

	构建工具:gulp、grunt、webpack、fis3

	1.全局安装 gulp
		npm install --global gulp
	2.项目依赖
		npm install --save-dev gulp
	3.在项目根目录下创建一个名为 gulpfile.js 的文件：
		var gulp = require('gulp');
		gulp.task('default', function() {
			console.log("我是gulp")
		});
	4.执行gulp
		gulp
	5.使用gulp：gulp本身只是一个容器，所有执行的所有功能，都依赖于插件
	6.方法：
		gulp.task(str,fn)
			创建一个gulp任务
		gulp.src(path)
			文件来源
		gulp.dest(path)
			操作之后的文件到哪里去
		.pipe(package)
			执行一个gulp功能
		gulp.watch() 
			监听
		gulp.start()
			执行gulp任务
	7.插件：
		1.压缩js文件
			npm install --save-dev gulp-uglify
		2.压缩CSS文件
			npm install --save-dev gulp-minify-css
		3.压缩HTML文件
			npm install --save-dev gulp-minify-html
		4.压缩图片
			npm install --save-dev gulp-imagemin
		5.代码检查
			npm install --save-dev gulp-jshint jshint
		6.合并、重命名
			npm install --save-dev gulp-concat gulp-rename
		7.监听：
			gulp.task("watch",function(){
			    gulp.watch('libs/js/*.js', function(){
			        gulp.run('uglify-js');
			    });
			})
		8.Less编译为CSS文件
			npm install --save-dev gulp-less

		9.热更新：
			命令：npm install gulp-livereload --save-dev
			全局服务器：npm install -g http-server
			浏览器插件：LiveReload （直接点击启动）
			1.编写热更新的代码
			2.启动热更新
			3.在项目根目录下启动http-server
			4.打开浏览器启动项目
			5.启动浏览器（livereload）插件，将空心圆点成实心圆