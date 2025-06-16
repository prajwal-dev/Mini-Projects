//! 1.Sum of two numbers

// const add=(a,b)=> {
// console.log(`the sum of ${a} and ${b} is ${a+b}`);

// }
// add(5,6);

//! 2.Check if number is even or odd

// let num=47;
// if(num%2==0){
//     console.log("Your number is even");
// }
// else{
//     console.log("Your number is odd");
// }

//! 3.Find the largest of three numbers
// let a=3;
// let b=5;
// let c=6;
// // traditional way
// if(a>b && a>c){
//     console.log(" a is the largest number")
// }
// else if(b>a && b>c){
//     console.log(" b is the largest number")
// }
// else{
//     console.log("c is largest number")
// }
// Using Math.max()
// let largest= Math.max(a,b,c);
// console.log(`The largest number is:${largest}`)
//! <<<<<<<<<<<<<<< FUNCTIONS >>>>>>>>>>>>>>>>
//! 🟢 Beginner Level
//? 1️⃣ Sum of Two Numbers
//* Write a function add(a, b) that returns the sum of two numbers.
// function add(a,b){
//     return a+b;
// }
// console.log(add(4,5))

// Using the Arrow function
// const sum=(a,b)=>{
//     return a+b;
// }
// console.log(sum(6,7))
//?2️⃣ Check Even or Odd
//* Write a function isEven(n) that returns true if the number is even, otherwise false.

// function isEven(n){
//     if(n%2==0){
//         console.log("Even");
//     }
//     else{
//         console.log("Odd"); 
//     }
// }
// isEven(41) 
// Using Arrow function

// const isEven=(n)=>{
//     if(n%2==0){
//         console.log("Even");
//     }
//     else{
//         console.log("Odd"); 
//     }
// }
// isEven(811)
//? 3️⃣ Find the Maximum of Three Numbers
//*  Write a function maxOfThree(a, b, c) that returns the largest of the three numbers.
// function maxOfThree(a,b,c){
//     if(a>b && a>c){
//         console.log(`${a} is largest`)
//     }
//     else if(b>a && b>c){
//         console.log(`${b} is largest`)
//     }
//     else
//     console.log(`${c} is largest`)
// }
// maxOfThree(1010,20,3)
//Using Arrow Function
// const maxOfThree=(a,b,c)=>{
//     if(a>b && a>c){
//         console.log(`${a} is largest`)
//     }
//     else if(b>a && b>c){
//         console.log(`${b} is largest`)
//     }
//     else
//     console.log(`${c} is largest`)
// }
// maxOfThree(10001,200,30);
//?4️⃣ Convert Celsius to Fahrenheit
//* Write a function that converts Celsius to Fahrenheit using the formula F = C \* 1.8 + 32.

// function thermo(c){
// let f= c*1.8 +32;
// console.log(f)
// }
// thermo(10);
// Using Arrow function
// thermo=(c)=>{
//     let f= c*1.8 +32;
// console.log(f)
// }
// thermo(0);


// Get First Character of String
// Write a function that returns the first character of a given string.

// ! For ...of
//?🔁 Basic Level
//*1️⃣ Using for...of, loop through an array of numbers and print each number.
// let arr=[2,4,5,7,8,9];
// for (let item of arr){
//     console.log(item)
// }
//*2️⃣ Using for...in, loop through an object and print each key and its corresponding value.
// let obj={
//     a:1,
//     b:2,
//     c:3
// };
// for(key in obj){
//     console.log(`${key}: ${obj[key]} `)
// }

// * Also we can do the above question by for..fo loop but we have to use default object methods.

 

//* 3️⃣ Given a string, use for...of to print each character.
// let str=["abc","def"];
// for (let item of str){
//     console.log(item)
// }

//* 4️⃣ Given an array of names, use for...of to create a new array with names in uppercase.
// const names = ["prajwal", "sneha", "rahul", "ananya"];
// const uppercasedNames = [];

// for (const name of names) {
//   uppercasedNames.push(name.toUpperCase());
// }

// console.log(uppercasedNames);


//! For Each()
//? 1️⃣ Print each number in an array:
// const number=[11,22,33,44]
//     number.forEach(function(elem){
//         console.log(elem)
//     })
//? 2️⃣ Print "Hello, [name]" for each name in an array:
// const names = ["Prajwal", "Sneha", "Amit"];
// names.forEach((elem)=>{
//     console.log(` Hello, ${elem}`)
// })
        
//? 3️⃣ Add 10 to each number in an array and log the result.
// const arr=[1,2,3,4,5];
//  arr.forEach((elem)=>{
 
//    console.log(elem +10)
//  })

//? 4️⃣ Count how many strings in the array have more than 5 characters.
// const arr = ["apple", "banana", "grapes", "kiwi", "mango", "pineapple"];
// let count =0;
// arr.forEach((str)=>{
//     if(str.length>5){
//         count++
//     }
   
// });
// console.log(count)

//? 5️⃣ Given an array of student objects, print names of students who scored above 80:

// const students = [
//     { name: "Prajwal", score: 92 },
//     { name: "Neha", score: 75 },
//     { name: "Rahul", score: 88 }
//   ];
// students.forEach((elem) =>{
//     if(elem.score>80){
//         console.log(elem.name)
//     }
// })


//? 6️⃣ Use .forEach() to convert an array of strings into an array of string lengths.
const fruits = ["apple", "banana", "kiwi"];
// fruits.forEach(function(value){
//     console.log(value.length);
// })

//Using for of 
const newArray=[]
for(let item of fruits){
    
    newArray.push(item.length)
}
console.log(newArray)
