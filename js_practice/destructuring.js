// let person = {
//   name: "Prajwal dilip bhagat",
//   Address: "Pune",
//   age: 25,
// };
// console.log(person.name);
// console.log(person["Address"]);
//! destructuring
// let { name, Address, age } = person;
// console.log(name);
// console.log(age);

//* Destructuring in array

// ? Basic destructuring
// let arr = [1, 2, 3];
// let [a, b, c] = arr;
// console.log(a);

// ? destructuring with rest

// let arr = [1, 2, 3, "prajwal", false];
// let [first, second, third, ...fourth] = arr;
// console.log(fourth);

// ? default values
// let [a, b, c, d = 0] = [10, 20, 30, 40];
// console.log(a, b, c, d);
// ?skip items
// let [, , , , e] = [1, 2, 3, 4, 5];
// console.log(e);
// ? swapping items
// let a = 5;
// b = 10;
// [a, b] = [b, a];
// console.log(a, b);

// ? Nested array
// let [a, , , [x, y]] = [1, 2, 3, [5, 6]];
// console.log(a);
// console.log(x, y);

//*  destructuring with Object

//? Basic destructuring
// let obj = {
//   name: "prajwal",
//   age: 25,
// };
// let { name, age } = obj;
// console.log(name, age);

// ?Destructuring with rest operator
// let obj = {
//   Name: "prajwal",
//   age: 25,
//   city: "pune",
//   btech: "viit",
// };
// let { Name, age, ...other } = obj;
// console.log(Name, age, other);

// ? default values

// let { name, age = 18 } = {
//   name: "prajwal",
// };
// console.log(name, age);

// ?renaming the key -> the key is renamed from name to fullname

// let { name: fullname } = {
//   name: "prajwal",
// };
// console.log(fullname);

// ? nested object
// let obj = {
//   name: "prajwal bhagat",
//   age: 25,
//   address: {
//     city: "pune",
//     pincode: 12345,
//     arr: [1, 2, 3, 4, 5],
//   },
// };
// let {
//   name: fullName,
//   age,
//   address: { pincode },
// } = obj;

// console.log(fullName);
// console.log(age);
// console.log(pincode);

//? Destructuring in function Parameter
// ?array
// function sum([a, b]) {
//   console.log(a + b);
// }
// let arr = [10, 5];
// sum(arr);

// ? object destructuring in function parameters

// function greet({ name, age }) {
//   console.log(`hello ${name},your age is ${age}`);
// }
// let obj = {
//   name: "prajwal bhagat",
//   age: 25,
// };
// greet(obj);

// ! Questions
// ? 1}
const arr = [1, 2, 3];
const obj = { ...arr };

console.log(obj);
