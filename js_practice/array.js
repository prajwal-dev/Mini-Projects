// let arr = [1, 2, 3, 4, 5, "prajwal", [22, 33, 44]];
// console.log(arr);
// let arr2 = new Array(3).fill(3);
// console.log(arr2);

// let arr = [1, 2, 3, 4];
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i] * 2);
// }

// for (let elem of arr) {
//   console.log(elem * 3);
// }

//! spread operator

// let arr2 = ["prajwal", "bhagat", "qwerty"];
// let arr3 = [...arr, ...arr2];
// console.log(arr3);

// ! join()

// let fruits = ["mango", "litchi", "guava"];
// console.log(fruits.join(" * "));
// console.log(fruits.indexOf("guava"));
// let bool = fruits.includes("litchi");
// console.log(bool);
// fruits.reverse();
// console.log(fruits);

// ! flat()
// let heroes = [
//   "spiderman",
//   "hulk",
//   ["krish", "shaktiman", ["thor"]],
//   "superman",
// ];
// console.log(heroes.flat());

// let arr = [2, 5, 7, 9];
// arr.map((elem, index, arr) => {
//   console.log(elem * 2, index, arr);
// });
// console.log("new arr:", arr);

// let filterArr = arr.filter((elem) => {
//   return elem % 2 !== 0;
// });
// console.log(filterArr);
// console.log(arr);
// let result = arr.reduce((prevVal, currVal) => {
//   return prevVal + currVal;
// }, 10);
// console.log(result);
// ! Question
// * 1} For an array with marks of students find the average marks of the entire class.
// let marks = [89, 99, 45, 66, 74];
// let sum = marks.reduce((acc, currVal) => {
//   return acc + currVal;
// });
// console.log(sum / marks.length);

// * Can you separate the odd marks from the above array of marks
// let oddMarks = marks.filter((elem) => {
//   return elem % 2 !== 0;
// });
// console.log("Odd Marks", oddMarks);

// * 2} Create an array with the given length(n) and fill with 0.

// let newArr = new Array(2).fill(0);
// console.log(newArr);

// * 3} Create an array with the given length (n) and store natural numbers from 1 to n.

// let n = 25;
// let newArr2 = new Array(n).fill(n);
// newArr2.map((item, index) => {
//   newArr2[index] = index + 1;
// });
// console.log(newArr2);

//* 4} Consider an array of mcu heroes ([ironman, captain, black widow, wanda, hulk, black panther]).Now:  a) Add spiderman at the end and thor at the start.

// let heroes = [
//   "ironman",
//   "captain",
//   "black widow",
//   "wanda",
//   "hulk",
//   "black panther",
// ];
// heroes.push("spiderman");
// heroes.unshift("thor");
// console.log(heroes);
// * Remove black widow and add hawkeye in its place.

//  [
//   'thor',
//   'ironman',
//   'captain',
//   'black widow',
//   'wanda',
//   'hulk',
//   'black panther',
//   'spiderman'
// ]
// let heroes2 = heroes.splice(3, 1, "hawkeye");
// console.log(heroes2);
// console.log(heroes);

// * c) Check whether captain is present in the array.
// let check = heroes.includes("captain");

// console.log(check);

// * 5] How to check if given thing is array or not? How to convert other datatypes to array? What if we try to convert an object into an array?

// let test = "owkwofwf";
// console.log(Array.isArray(test)); //*check if the datatype is array or not
// console.log(Array.from(test)); //*converts string into array
// if we convert an object to an array then we will get empty array

// * 6] We have three variables a, b, c, d. a contains any number, b contains any string, c contains any object,and d contains any array. Can we create an array from all these four variables? If yes, How?

// let a = 1;
// let b = "bhji";
// let c = {
//   name: "manas",
// };
// let d = [1, 2, 3, 4];
// console.log(Array.of(a, b, c, d));

//* 7] Check whether given string is palindrome or not.

// let str = "olo";
// let reversed = [...str].reverse().join("");
// if (reversed === str) {
//   console.log("It is Palindrome");
// } else {
//   console.log("No,Its Not Palindrome");
// }
// * 8] Capitalize the first letter of every word in a sentence.

let str2 = "hello how are youuu";
let newStr = str2.split(" ").map((elem) => {
  return elem.charAt(0).toUpperCase() + elem.slice(1);
});
console.log(newStr.join(" "));
