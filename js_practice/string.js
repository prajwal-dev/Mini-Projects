// let firstName = "Prajwal";
// let middleName = "Dilip";
// let lastName = "Bhagat";

// let fullname = `${firstName} ${middleName} ${lastName}`;

// console.log(fullname);

// console.log(`My name is ${fullname} and age is ${22 + 3}`);
// let str = "hello\nhow are you ?";
// console.log(str, str.length);
// let str = "hello world";
// let str2 = "";
// for (let ch of str) {
//   str2 = str2 + ch + " ";
// }
// console.log(str2.length);

// methods
let naam = "prajwal bhagat";
let newName = naam.toUpperCase();
console.log(newName);
let name2 = "BHAGAT";
console.log(name2.toLowerCase());
let name3 = "      dilip     ";
console.log(name3.trim());
console.log(naam.concat(name2, name3));
console.log(name3.includes("dilip"));
console.log(naam.indexOf("a"));
console.log(naam.charAt("3"));
console.log(naam.replace("prajwal", "dilip"));

let username = "@prajwalbhgt";
console.log(username.slice(8));
let qwe = "alpha beta gamma";
console.log(qwe.split(" "));
