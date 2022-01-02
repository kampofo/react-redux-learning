// // OLD WAY
// class Human {
// 	constructor() {
// 		this.gender = "male";
// 	}

// 	printGender() {
// 		console.log(this.gender);
// 	}
// }

// class Person extends Human {
// 	constructor() {
// 		super();
// 		this.name = "Kwabena";
// 	}

// 	printMyName() {
// 		console.log(this.name);
// 	}
// }

// NEW WAY!!
class Human {
	gender = "male";

	printGender = () => {
		console.log(this.gender);
	};
}

class Person extends Human {
	name = "Kwabena";

	printMyName = () => {
		console.log(this.name);
	};
}

const myPerson = new Person();
myPerson.printMyName();
myPerson.printGender();
