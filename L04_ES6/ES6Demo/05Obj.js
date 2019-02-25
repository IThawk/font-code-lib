// var obj = {
// 	name: "iwen",
// 	age: 20,
// }

// var obj1 = {
// 	name: "iwen",
// 	"age": 20
// }

// var f1 = "f1";
// var f2 = "f1";
// // console.log(Object.is({}, {}));


// var hello = {
// 	key1: "hello"
// }

// var world = {
// 	key2: "world"
// }
// var hellowrold = Object.assign(hello, world);
// console.log(hellowrold)

// 浅拷贝、深度拷贝(如何实现一个深度拷贝)

const obj1 = {
	a: {
		b: 1
	}
};
const obj2 = Object.assign({}, obj1);

obj1.a.b = 2;
console.log(obj2.a.b);

// hello.key2 = "world";

// Object.assign(hello, {
// 	key2: "world"
// });
// console.log(hello);