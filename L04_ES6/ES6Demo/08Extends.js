class Person {
	constructor(name, age, sex) {
		this.name = name;
		this.age = age;
		this.sex = sex;
	}

	getInfo() {
		return `我们叫:${this.name},今年:${this.age},是一个${this.sex}孩`;
	}

}

class XZM extends Person {

	constructor(name, age, sex, money) {
		super(name, age, sex);
		this.money = money;
	}

	getSomething() {
		console.log("过好自己的生活，挺好");
	}

	getMoney() {
		console.log("非常非常多的钱" + this.money);
	}
}


class TX extends XZM {

	constructor(name, age, sex, money) {
		super(name, age, sex, money);
	}

	getown() {
		console.log(`我叫:${this.name},今年:${this.age},是一个${this.sex}孩,我有很多钱：${this.money}`)
	}
}

var t = new TX("甜心", 10, "女", "100w");
t.getown();