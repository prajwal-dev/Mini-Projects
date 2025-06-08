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
let a=3;
let b=5;
let c=6;
// traditional way
if(a>b && a>c){
    console.log(" a is the largest number")
}
else if(b>a && b>c){
    console.log(" b is the largest number")
}
else{
    console.log("c is largest number")
}
// Using Math.max()
let largest= Math.max(a,b,c);
console.log(`The largest number is:${largest}`)
