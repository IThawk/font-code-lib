requirejs.config({
	baseUrl: "js/",
	paths: {
		"jquery": "libs/jquery-3.2.1",
		"index": "apps/index",
		"swiper": "libs/swiper.min",
		"getName": "apps/getName"
	},
	shim: {
		"swiper": {
			// 添加依赖
			deps: ["jquery"],
			exports: "swiper"
		},
		"getName": {
			deps: ["jquery"],
			exports: "getName"
		}
	}
});


requirejs(["jquery", "index", "swiper", "getName"], function($, index, swiper, getName) {
	var mySwiper1 = new Swiper('.swiper-container', {
		loop: true,
		pagination: '.swiper-pagination',
		nextButton: '.swiper-button-next',
		prevButton: '.swiper-button-prev'
	})
})