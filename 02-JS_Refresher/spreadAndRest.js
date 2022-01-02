// spread pull elements out of array or object
const numbers = [1, 2, 3, 4, 5];
const newNumbers = [...numbers, 6, 7, 8, 9];

console.log(newNumbers);

const person = {
	name: "Kobby",
};

const newPerson = {
	...person,
	age: 23,
};

console.log(newPerson);

// merge list of function arguments into an array
const filter = (...args) => {
	return args.filter((el) => el === 1);
};

console.log(filter(1, 2, 3, 4, 5));
