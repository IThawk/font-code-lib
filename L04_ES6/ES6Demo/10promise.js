// promise本身并非是一个网络请求，只是一个容器，
// 如果要实现网络请求，还是要自己在promise中实现的
function getJSON(url) {
	const promise = new Promise(function(resolve, reject) {

		const handler = function() {
			if (this.readyState == 4) {
				if (this.status == 200) {
					// 接受成功的结果
					resolve(this.response);
				} else {
					// 接受失败的结果
					reject(new Error(this.statusText));
				}
			}
		}

		const xhr = new XMLHttpRequest();
		xhr.open("GET", url);
		xhr.onreadystatechange = handler;
		xhr.responseType = "json";
		xhr.setRequestHeader("Accept", "application/json");
		xhr.send();
	})
	return promise;
}


getJSON("http://www.wwtliu.com/sxtstu/blueberrypai/getIndexBanner.php")
	.then(data => {
		return data;
	})
	.then(data => {
		return data;
	})
	.then(res => {
		console.log(res);
	})
	.catch(error => {
		console.log(error);
	})