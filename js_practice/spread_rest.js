// spreading array
// let arr = [1, 2, 3, 4, 5];
// let newArr = [...arr, 10, 20, 333, "prajwal"];
// console.log(newArr);

// let arr2 = [1, 2, 3];
// let copyArr2 = [...arr2];
// console.log(copyArr2);
//* merge 2 array

// let fruits = ["mango", "banana", "apple"];
// let colors = ["red", "blue", "green"];
// let mergedArr = [...fruits, ...colors];
// console.log(mergedArr);

//spread string
// let fullName = "Prajwal Bhagat";
// console.log(...fullName);

// spread in function
// let users = ["prajwal", "dilip", "bhagat"];
// function threeUsers(a, b, c) {
//   console.log(a);
//   console.log(b);
//   console.log(c);
// }
// threeUsers(...users);

// let obj = {
//   name: "prajwal",
//   age: 25,
//   city: "pune",
// };
// let objCopy = { ...obj, gender: "male", age: 26 };
// console.log(obj);
// console.log(objCopy);
// let mergeObj = { ...obj, ...objCopy };
// console.log(mergeObj);

// ! Rest
// function sum(...rest) {
//   return rest.reduce((acc, prev) => acc + prev, 0);
// }
// console.log(sum(1, 2, 3, 4, 5));

// destructuring in rest operator
// let arr = ["apple", "orange", "banana"];
// let [user1, ...other] = arr;

// console.log(user1, other);

// Destructuring objects with rest
let obj = {
  name: "Prajwal",
  age: 25,
  city: "pune",
};
let { name, ...others } = obj;
console.log(name);
console.log(others);
