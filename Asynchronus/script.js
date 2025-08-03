// console.log("A")
// console.log("B")

// for(let i=1;i<=200;i++){
//     console.log('task',i)
// }

// console.log("C")
// console.log("D")
// console.log("E")

// console.log("first task")
// setTimeout(()=>{
//     console.log("async task")
// },4000)
// setTimeout(()=>{
//     console.log("async task 2")
// },2000)
// setTimeout(()=>{
//     console.log("async task 3")
// },1000)
// console.log("second task")
// console.log("third task")

async function fetchData() {
  let response = await fetch("https://jsonplaceholder.typicode.com/users");
  console.log(await response.json());
}
fetchData();

console.log("hey");
console.log("there");
