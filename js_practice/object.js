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

// const users = [
//   { name: "Alice", role: "admin" },
//   { name: "Bob", role: "user" },
//   { name: "Charlie", role: "admin" },
// ];

// function filterArray() {
//   let filteredUser = users.filter((users) => {
//     return users.role === "admin";
//   });

//   let resultArray = filteredUser.map((user) => {
//     return user.name;
//   });
//   console.log(resultArray);
// }
// filterArray();

// * Write a function searchProducts(products, keyword) that returns an array of products whose nameincludes the given keyword (case-insensitive).

// const products = [
//   { id: 1, name: "iPhone 14" },
//   { id: 2, name: "Samsung Galaxy" },
//   { id: 3, name: "Google Pixel" },
// ];
// function search(products, searchKeyword) {
//   let filteredArray = products.filter((elem) => {
//     return elem.name.toLowerCase().includes(searchKeyword.toLowerCase());
//   });
//   console.log(filteredArray);
// }
// search(products, "i");
// ! Problems
// * Easy
// * 1} Create an object person with properties name, age, and city. Print all keys and values.
// let me = {
//   name: "Prajwal",
//   age: 25,
//   city: "Pune",
// };
// console.log(Object.keys(me));
// console.log(Object.values(me));

// * 2} Check if an object is empty or not.
// function isEmpty(obj) {
//   return Object.keys(obj).length === 0;
// }
// console.log(isEmpty({}));
// * 3} Merge two objects:
// const obj1 = { a: 1, b: 2 };
// const obj2 = { c: 3, d: 4 };
// Expected: { a:1, b:2, c:3, d:4 }
// const merged = { ...obj1, ...obj2 };
// console.log(merged);
// *4} Write a function that takes an object and returns an array of its keys.

// let obj = { a: 1, b: 2, c: 3 };

// function key(hey) {
//   let abc = Object.keys(hey);
//   console.log(abc);
// }
// key(obj);

// * 5} Count how many properties an object has.
// let obj = { a: 1, b: 2, c: 3, d: 5 };

// function prop(obj) {
//   let count = Object.keys(obj).length;
//   console.log(count);
// }
// prop(obj);
// ! Medium level
// * 6} Given an object, swap its keys and values.
// { a: 1, b: 2, c: 3 } → { 1: "a", 2: "b", 3: "c" }
// let obj = { a: 1, b: 2, c: 3 };
// function swap() {
//   const swapped = {};
//   for (let key in obj) {
//     // console.log(key);

//     swapped[obj[key]] = key;
//   }
//   console.log(swapped);
//   return swapped;
// }
// swap(obj);

// * practice
// let car = {
//   brand: "laborgini",
//   color: "red",
//   maxSpeed: "200",
//   stop: () => {
//     console.log("stopping the car");
//   },
//   start: function () {
//     console.log("starting the car");
//   },
// };
// console.log(car.start);
// console.log(car["brand"]);
