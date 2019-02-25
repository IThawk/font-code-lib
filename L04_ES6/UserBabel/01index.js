var liList = document.getElementsByTagName("li");
for (let i = 0; i < liList.length; i++) {
	liList[i].onclick = function() {
		console.log(liList[i].innerHTML);
	}
}