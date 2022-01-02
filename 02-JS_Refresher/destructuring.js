// array destruct
const numbers = [1, 2, 3];

[num1, num2, num3] = numbers;
console.log(num1, num2, num3);

// object destruct
const person = {
	name: "Kobby",
	age: 23,
};

let { name, age } = person;

console.log(name, age);
