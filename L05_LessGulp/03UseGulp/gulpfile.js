var gulp = require("gulp");
var jsUglify = require("gulp-uglify");
var cssUglify = require("gulp-minify-css");
var imgUglify = require("gulp-imagemin");
var rename = require("gulp-rename");
var concat = require("gulp-concat");
var livereload = require("gulp-livereload");


// 压缩合并重命名js
gulp.task("jsFinal", function() {
	gulp.src("dist/js/names.js")
		.pipe(concat("app.js"))
		.pipe(jsUglify())
		.pipe(rename({
			suffix: ".min"
		}))
		.pipe(gulp.dest("static/js/"))
});

// 压缩合并重命名css
gulp.task("cssFinal", function() {
	gulp.src(["dist/css/index.css", "dist/css/init.css"])
		.pipe(concat("app.css"))
		.pipe(cssUglify())
		.pipe(rename({
			suffix: ".min"
		}))
		.pipe(gulp.dest("static/css/"))
});


// 压缩图片
gulp.task("imgUglify", function() {
	gulp.src("img/*.{png,jpg,gif,ico,jpeg}")
		.pipe(imgUglify({
			progressive: true, // 压缩无损图片
			multipass: true // 多次优化svg直到完全优化
		}))
		.pipe(gulp.dest("images/"))
})

// 热更新
gulp.task("hot", function() {
	livereload.listen(); // 监听
	gulp.watch("index.html", function(event) {
		livereload.changed(event.path);
	})
})

gulp.task("default", function() {
	gulp.start(["jsFinal", "cssFinal", "imgUglify"])
})