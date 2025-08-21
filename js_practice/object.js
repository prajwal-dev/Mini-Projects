// let obj = {
//   name: "prajwal",
//   age: 25,
//   "*": "pune",
// };
// obj.name = "Prajwal bhagat";
// obj.city = "India";
// delete obj["*"];
// console.log(obj);
// console.log(obj["*"]);

// let obj = {
//   name: "alpha",
//   greet: function () {
//     console.log(`hello,I am ${this.name}`);
//   },
// };
// obj.greet();
//! Object Methods

// let obj = {
//   name: "alpha",
//   age: 23,
// };
// console.log(obj.hasOwnProperty("city"));
// let = obj2 = {};
// Object.assign(obj2, obj);
// console.log(obj2);

// let key = Object.keys(obj);
// let value = Object.values(obj);
// let entries = Object.entries(obj);
// console.log(key);
// console.log(value);
// console.log(entries);

// let obj = {
//   name: "prajwal",
//   city: "pune",
//   age: 25,
// };

// let { city, name, age } = obj;
// console.log(name, city, age);
// ! Questions
// * 1] Create a person object with properties: name, age, and city. Then
//* a) Log each property as: value of “name” property is “manas” using loop.
//* b) Add a new property called email to the person object.
//* c) Delete “city” property from person object.

// let person = {
//   name: "prajwal",
//   age: 25,
//   city: "Pune",
// };
// person.email = "prj@gmail.com";
// delete person.city;
// for (let key in person) {
//   console.log(`Value of ${key} is ${person[key]}`);
// }

// * 2] Create a function that takes an object with firstName, middleName, lastName properties and returns the full name.

// let obj = {
//   firstName: "Prajwal",
//   middleName: "Dilip",
//   lastName: "Bhagat",
// };
// function fullName() {
//   let abc = Object.values(obj);
//   console.log(...abc);
// }
// fullName(obj);

// * Write a function that takes object and returns the number of properties in an object.
// let obj = {
//   firstName: "Prajwal",
//   middleName: "Dilip",
//   lastName: "Bhagat",
//   age: 25,
// };
// let prop = () => {
//   let abc = Object.keys(obj).length;
//   console.log(abc);
// };
// prop(obj);

// * Write a function that returns an array of names of users who have the role “admin”.

const users = [
  { name: "Alice", role: "admin" },
  { name: "Bob", role: "user" },
  { name: "Charlie", role: "admin" },
];
let filteredUser = users.filter((users) => {
  return users.role === "admin";
});

let resultArray = filteredUser.map((user) => {
  return user.name;
});
console.log(...resultArray);
