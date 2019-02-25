// function Person(name, age) {
// 	this.name = name;
// 	this.age = age;
// }

// Person.prototype.getName = function(name) {
// 	console.log(this.name);
// }


// var p = new Person("iwen", 20)

// p.getName();
// class关键字！！！
class Person {
	// 构造函数：随着类的产生而自动执行的一个函数就是构造函数
	// 声明属性用的
	constructor(name, age, sex) {
		this.name = name;
		this.age = age;
		this.sex = sex;
	}

	getName() {
		console.log(this.name)
	}
}

// 类的描述
//   类由属性和方法组成

var p = new Person("iwen", 20, "男");
p.getName();


// 唯一的名字
const hello = Symbol('hello');
class People {
	// 一定存在，如果不显示添加，则在编译的时候，也会自动生成
	constructor() {

	}

	// 公有方法
	getPeople() {
		this[hello]();
	}

	// 私有方法
	[hello]() {
		console.log("我是Hello私有函数")
	}
}
var p1 = new People("haha");
p1.getPeople();


class Web001 {
	constructor() {

	}

	// 什么是静态方法	
	// 通过类本身调用
	// 他不依赖类的实例化
	static hello() {
		console.log(111)
	}
}


Web001.hello();

// var w = new Web001();
// w.hello(); // 报错
// 
// es5中类的继承是典型的面试题，下去要看看看看看看啊