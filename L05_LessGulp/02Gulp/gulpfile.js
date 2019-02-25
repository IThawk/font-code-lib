var gulp = require('gulp');
// 引入插件
var jsUglify = require("gulp-uglify");
var cssUglify = require("gulp-minify-css");
var htmlUglifu = require("gulp-minify-html");
var imgUglify = require("gulp-imagemin");
var jsJShint = require("gulp-jshint");
var myconcat = require("gulp-concat");
var myrename = require("gulp-rename");
var reLess = require("gulp-less");

// 创建压缩js的任务
gulp.task("uglifyJS", function() {
	/*gulp.src(["js/hello.js", "js/demo.js"])*/
	gulp.src("js/*.js")
		.pipe(jsUglify())
		.pipe(gulp.dest("dist/js"))
});

// 压缩css
gulp.task("cssUglify", function() {
	gulp.src("css/*.css")
		.pipe(cssUglify())
		.pipe(gulp.dest("dist/css"))
});

// 压缩html文件
gulp.task("htmlUglify", function() {
	gulp.src("index.html")
		.pipe(cssUglify())
		.pipe(gulp.dest("dist"))
});

// 压缩图片
gulp.task("imgUglify", function() {
	gulp.src("img/*.{png,jpg,gif,ico,jpeg}")
		.pipe(imgUglify({
			progressive: true, // 压缩无损图片
			multipass: true // 多次优化svg直到完全优化
		}))
		.pipe(gulp.dest("dist/images"))
})

// 代码检查
gulp.task("jsJSHint", function() {
	gulp.src("js/hello.js")
		.pipe(jsJShint())
		.pipe(jsJShint.reporter())
});

// 压缩，合并，重命名
gulp.task("final", function() {
	gulp.src("js/*.js")
		.pipe(myconcat("app.js"))
		.pipe(jsUglify())
		.pipe(myrename({
			suffix: ".min"
		}))
		.pipe(gulp.dest("dist/js"))
});

// 监听
gulp.task("watch", function() {
	gulp.watch("js/hello.js", function() {
		gulp.run("final")
	})
})

// 编译less文件
gulp.task("myless", function() {
	gulp.src("css/hello.less")
		.pipe(reLess())
		.pipe(gulp.dest("css/"))
})

gulp.task('default', function() {
	gulp.start(["myless"]);
});