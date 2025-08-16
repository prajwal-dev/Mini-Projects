// let arr = [1, 2, 3, 4, 5, "prajwal", [22, 33, 44]];
// console.log(arr);
// let arr2 = new Array(3).fill(3);
// console.log(arr2);

let arr = [1, 2, 3, 4];
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i] * 2);
// }

// for (let elem of arr) {
//   console.log(elem * 3);
// }

//! spread operator

let arr2 = ["prajwal", "bhagat", "qwerty"];
let arr3 = [...arr, ...arr2];
console.log(arr3);

// ! join()

// let fruits = ["mango", "litchi", "guava"];
// console.log(fruits.join(" * "));
// console.log(fruits.indexOf("guava"));
// let bool = fruits.includes("litchi");
// console.log(bool);
// fruits.reverse();
// console.log(fruits);

// ! flat()
let heroes = [
  "spiderman",
  "hulk",
  ["krish", "shaktiman", ["thor"]],
  "superman",
];
console.log(heroes.flat());
