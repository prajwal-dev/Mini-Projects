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