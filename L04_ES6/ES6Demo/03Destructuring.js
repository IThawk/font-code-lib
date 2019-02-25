// var a = 1;
// var b = 2;
// var c = 3;


// var [a = 10, b, c] = [1, 2, 3];
// var [str1, str2, obj] = ["hello", ["world"], {
// 	name: "iwen"
// }];


// var {
// 	f1,
// 	f2
// } = {
// 	f1: "f1",
// 	f2: 'f2'
// };

// console.log(f1);

// var obj = {
// 	name: "iwen",
// 	age: 20
// }

// var {
// 	name,
// 	age
// } = obj;
// console.log(name);

// var state = {
// 	num: 100,
// 	obj: {
// 		name: 'iwen',
// 		age: 20
// 	}
// }

// var {
// 	num,
// 	obj
// } = state;

function Demo({
	a,
	b
} = {
	a: 1,
	b: 2
}) {
	console.log(a + b);
}

Demo({
	a: 10,
	b: 20
});

function Demo2(hello) {
	var hello = hello || "demo"
	console.log(hello);
}
Demo2();