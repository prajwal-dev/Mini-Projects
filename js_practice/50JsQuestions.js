// ! Easy

// * 1️⃣Create a function that returns the last element of an array.
// * Method 1
// let arr = [2, 4, 5, 6, 7, 19, 77, 15, 66];
// console.log(arr[1]);
// function lastElem(arr) {
//   let last = arr.at(-1);
//   console.log(last);
// }
// lastElem(arr);
// * method 2
// let lastElem2 = () => {
//   console.log(arr[arr.length - 1]);
// };
// lastElem2();

// * 2️⃣ Find the combination of two arrays.
// let arr1 = [1, 2, 3, 4, 5, 6];
// let arr2 = ["a", "b", "c", "d", "e", "f"];
// let combination = [...arr1, ...arr2];
// also u can use concat
// console.log(combination);
// * 3️⃣ Generate a random integer between 0 to 18.
// let num = Math.floor(Math.random() * 19);
// console.log(num);

// * 4️⃣ Create a function that takes an array containing both numbers and strings, and returns a new array containing only the string values.
// let arr = [2, 4, 5, "a", "b", 3, "cde"];
// let resultArr = arr.filter((elem) => {
//   if (typeof elem === "string") {
//     return true;
//   } else {
//     return false;
//   }
// });
// console.log(resultArr);

// * 5️⃣ Find the maximum number in an array.
// let arr = [44, 5, 2, 78, 294, 930];
//? Using Math.max Method
// let maxNum = Math.max(...arr);
// console.log(maxNum);
//? Using Reduce Method
// let max = arr.reduce((max, num) => {
//   if (max > num) {
//     return max;
//   } else {
//     return num;
//   }
// });
// console.log(max);

// * 6️⃣ Write a function that returns the length of a given object (number of keys).
// let obj = {
//   id: 101,
//   model: "iphone",
//   madeIn: "India",
//   name: "iphone 12",
//   price: "$399",
// };
// let numKey = (object) => {
//   let num = Object.keys(object);
//   console.log(num.length);
// };

// numKey(obj);

// * 7️⃣  In an array of objects filter out those objects which have gender's value male.
// let employee = [
//   {
//     name: "mike",
//     gender: "male",
//   },
//   {
//     name: "tina",
//     gender: "female",
//   },
//   {
//     name: "elon",
//     gender: "male",
//   },
// ];
// let filterArr = employee.filter((elem) => {
//   return elem.gender === "male";
// });
// console.log(filterArr);

// * 8️⃣ Given an array of strings, return a new array where all strings are in uppercase.
// let arr = ["abc", "def", "ghi"];

// let newArr = arr.map((arr) => {
//   return arr.toUpperCase();
// });
// console.log(newArr);
// * 9️⃣ Check if an object is empty (has no keys).
// let obj = {};
// if (Object.keys(obj).length === 0) {
//   console.log("Obj is empty");
// } else {
//   console.log("Obj is not empty");
// }
// console.log(obj);

// * 🔟 Create an array of numbers and double each value using .map().

// let num = [2, 3, 4, 5, 6];
// let double = num.map((num) => {
//   return num * 2;
// });
// console.log(double);

// * 11} Convert an array of strings into a single comma-separated string.
// let arr = ["apple", "mango", "banana"];
// let str = arr.join();
// console.log(str);

// * 12} Write a function to flatten a nested array (one level deep).(e.g., [1, [2, 3], 4] → [1, 2, 3, 4])
// let arr = [1, 2, 3, 4, [5, 6, 7]];
// splice method
// arr.splice(4, 1, ...arr[4]);
// console.log(arr);

// flat () method
// let flatArr = arr.flat();
// console.log(flatArr);

//* 13}  Write a function that checks if all elements in an array are numbers.

// * 14} Build a simple isPrime() function to check if a number is prime.
// let num;
// let isPrime=()=>{
// if (num)

// }
// }
