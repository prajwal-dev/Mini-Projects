//! Write a regular function that takes a string and returns it with the first letter capitalized.

// let fullname = prompt("Enter your name");

// function capLetter(str) {
//   console.log(str.charAt().toUpperCase() + str.slice(1));
// }
// capLetter("prajwal");
// ! Show an alert message that says “Please login” after 5 seconds on your website.
// setTimeout(() => {
//   alert("Please login");
// }, 5000);

// ! Make an arrow function that takes a price and a discount, and returns the price after discount.
// let price = prompt("Enter Price");
// let discount = prompt("Enter Discount");
// let newPrice = () => {
//   let discountedPrice = price - (discount / 100) * price;
//   console.log(`new Price : ${discountedPrice}`);
// };
// newPrice();
// ! Create a function that builds a username from a full name.

let fullName = "Prajwal Dilip Bhagat";
function username() {
  console.log(`${"@"}${fullName.toLowerCase().split(" ").join("")}`);
}
username();

// !Write a function that takes a traffic light color and gives the correct instruction (e.g. "go" for green, "stop" for red, "caution" for yellow, and "invalid color" for anything else).
let color = "green";

function trafficSignal() {
  if (color === "green") {
    console.log("go");
  } else if (color === "red") {
    console.log("stop");
  } else if (color === "yellow") {
    console.log("caution");
  } else {
    console.log("invalid color");
  }
}

trafficSignal();
