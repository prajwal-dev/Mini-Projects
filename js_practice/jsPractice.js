let fruits = ["apple", "orange", "mango", "grapes", "banana"];
* for of loop
for (let item of fruits){
    console.log(item)
}
* for in loop
for (let item2 in fruits){
    console.log(item2)
}

* ForEach

const myvar=fruits.forEach((curElem,index,arr)=>{
    // console.log(arr)
    console.log(`${curElem} ${index} ${arr}`)
})
console.log(arr)
* .map()
const myvar1=fruits.map((curElem,index,arr)=>{
    // console.log(arr)
  return ` my fav fruit is ${curElem}`;

})
console.log(myvar1)
console.log(fruits)

! write a program to Multiply each element with 2
const numbers=[1,2,3,4,5];
const multiply=numbers.map((curElem,index,arr)=>{
    console.log(curElem*2); 
})
console.log(multiply)


const multiply2=numbers.map((curElem,index,arr)=>{
    return curElem*2; 
})
console.log(multiply2)

const multiply=numbers.forEach((curElem,index,arr)=>{
    console.log(curElem*2); 
})
console.log(multiply)

let fruits = ["apple", "orange", "banana", "mango"];
fruits.splice(1, 1, "grapes","kiwi");
fruits.splice(4, 0, "grapes");
console.log(fruits);

const numbers = [1, 2, 3, 4, 6, 5, 6, 7,6, 8, 9];

console.log(numbers.includes(6));
todo Challenge time
? 1: Add Dec at the end of an array?
? 2: What is the return value of splice method?
? 3: Update march to March (update)?
? 4: Delete June from an array?

const months = ["Jan", "march", "April", "June", "July"];

const arr= months.splice()

function expression
const add= function sum(a,b){
    
    console.log(a+b)
    
}
add(2,5)

const add= (a,b)=>{
    
    console.log(a+b)
    
}
add(2,9)

function a(){
    let b=10;
    c();
    function c(){
        console.log(b)
    }
    
}

a()

let a=100;


console.log(a)

* callback function
setTimeout(function (){
    console.log('timer')
},5000)
function x(y){
    console.log("x")
    y();
}
x(function y(){
    console.log("y")
})



*map()

const arr=[5,1,3,2,6];

const output=arr.map(function double (x){
    return x*2
})
console.log(output);
// arrow
const output2=arr.map((x)=>{
    return x.toString(2);
})
console.log(output2)


// * filter method

const output3 =arr.filter(function isOdd(x){
    return x%2;
})
console.log(output3)

//* reduce
const output4=arr.reduce(function(acc,curr){
    acc=acc + curr;
    return acc;
},0)
console.log(output4)

const output5=arr.reduce(function(max,curr2){
    if(curr2>max){
        max=curr2;
    }
    return max;
},0)

console.log(output5)

! JSON

object

let obj={
    name:'prajwal',
    age:25,
    isemployed:true
}
console.log(obj)

let stringJson=`{
    "name":"prajwal",
    "age":25,
    "isemployed":true
}`
console.log(stringJson);
let json=JSON.parse(stringJson);
console.log(json)



json allows number,string,null,boolean,object,array

let json=[
  {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
    }
  },
  {
    "id": 2,
    "name": "Ervin Howell",
    "username": "Antonette",
    "email": "Shanna@melissa.tv",
    "address": {
      "street": "Victor Plains",
      "suite": "Suite 879",
      "city": "Wisokyburgh",
      "zipcode": "90566-7771",
      "geo": {
        "lat": "-43.9509",
        "lng": "-34.4618"
      }
    },
    "phone": "010-692-6593 x09125",
    "website": "anastasia.net",
    "company": {
      "name": "Deckow-Crist",
      "catchPhrase": "Proactive didactic contingency",
      "bs": "synergize scalable supply-chains"
    }
  },
  {
    "id": 3,
    "name": "Clementine Bauch",
    "username": "Samantha",
    "email": "Nathan@yesenia.net",
    "address": {
      "street": "Douglas Extension",
      "suite": "Suite 847",
      "city": "McKenziehaven",
      "zipcode": "59590-4157",
      "geo": {
        "lat": "-68.6102",
        "lng": "-47.0653"
      }
    },
    "phone": "1-463-123-4447",
    "website": "ramiro.info",
    "company": {
      "name": "Romaguera-Jacobson",
      "catchPhrase": "Face to face bifurcated interface",
      "bs": "e-enable strategic applications"
    }
  },
  {
    "id": 4,
    "name": "Patricia Lebsack",
    "username": "Karianne",
    "email": "Julianne.OConner@kory.org",
    "address": {
      "street": "Hoeger Mall",
      "suite": "Apt. 692",
      "city": "South Elvis",
      "zipcode": "53919-4257",
      "geo": {
        "lat": "29.4572",
        "lng": "-164.2990"
      }
    },
    "phone": "493-170-9623 x156",
    "website": "kale.biz",
    "company": {
      "name": "Robel-Corkery",
      "catchPhrase": "Multi-tiered zero tolerance productivity",
      "bs": "transition cutting-edge web services"
    }
  },
  {
    "id": 5,
    "name": "Chelsey Dietrich",
    "username": "Kamren",
    "email": "Lucio_Hettinger@annie.ca",
    "address": {
      "street": "Skiles Walks",
      "suite": "Suite 351",
      "city": "Roscoeview",
      "zipcode": "33263",
      "geo": {
        "lat": "-31.8129",
        "lng": "62.5342"
      }
    },
    "phone": "(254)954-1289",
    "website": "demarco.info",
    "company": {
      "name": "Keebler LLC",
      "catchPhrase": "User-centric fault-tolerant solution",
      "bs": "revolutionize end-to-end systems"
    }
  },
  {
    "id": 6,
    "name": "Mrs. Dennis Schulist",
    "username": "Leopoldo_Corkery",
    "email": "Karley_Dach@jasper.info",
    "address": {
      "street": "Norberto Crossing",
      "suite": "Apt. 950",
      "city": "South Christy",
      "zipcode": "23505-1337",
      "geo": {
        "lat": "-71.4197",
        "lng": "71.7478"
      }
    },
    "phone": "1-477-935-8478 x6430",
    "website": "ola.org",
    "company": {
      "name": "Considine-Lockman",
      "catchPhrase": "Synchronised bottom-line interface",
      "bs": "e-enable innovative applications"
    }
  },
  {
    "id": 7,
    "name": "Kurtis Weissnat",
    "username": "Elwyn.Skiles",
    "email": "Telly.Hoeger@billy.biz",
    "address": {
      "street": "Rex Trail",
      "suite": "Suite 280",
      "city": "Howemouth",
      "zipcode": "58804-1099",
      "geo": {
        "lat": "24.8918",
        "lng": "21.8984"
      }
    },
    "phone": "210.067.6132",
    "website": "elvis.io",
    "company": {
      "name": "Johns Group",
      "catchPhrase": "Configurable multimedia task-force",
      "bs": "generate enterprise e-tailers"
    }
  },
  {
    "id": 8,
    "name": "Nicholas Runolfsdottir V",
    "username": "Maxime_Nienow",
    "email": "Sherwood@rosamond.me",
    "address": {
      "street": "Ellsworth Summit",
      "suite": "Suite 729",
      "city": "Aliyaview",
      "zipcode": "45169",
      "geo": {
        "lat": "-14.3990",
        "lng": "-120.7677"
      }
    },
    "phone": "586.493.6943 x140",
    "website": "jacynthe.com",
    "company": {
      "name": "Abernathy Group",
      "catchPhrase": "Implemented secondary concept",
      "bs": "e-enable extensible e-tailers"
    }
  },
  {
    "id": 9,
    "name": "Glenna Reichert",
    "username": "Delphine",
    "email": "Chaim_McDermott@dana.io",
    "address": {
      "street": "Dayna Park",
      "suite": "Suite 449",
      "city": "Bartholomebury",
      "zipcode": "76495-3109",
      "geo": {
        "lat": "24.6463",
        "lng": "-168.8889"
      }
    },
    "phone": "(775)976-6794 x41206",
    "website": "conrad.com",
    "company": {
      "name": "Yost and Sons",
      "catchPhrase": "Switchable contextually-based project",
      "bs": "aggregate real-time technologies"
    }
  },
  {
    "id": 10,
    "name": "Clementina DuBuque",
    "username": "Moriah.Stanton",
    "email": "Rey.Padberg@karina.biz",
    "address": {
      "street": "Kattie Turnpike",
      "suite": "Suite 198",
      "city": "Lebsackbury",
      "zipcode": "31428-2261",
      "geo": {
        "lat": "-38.2386",
        "lng": "57.2232"
      }
    },
    "phone": "024-648-3804",
    "website": "ambrose.net",
    "company": {
      "name": "Hoeger LLC",
      "catchPhrase": "Centralized empowering task-force",
      "bs": "target end-to-end models"
    }
  }
]


console.log(json[1].company.name)

async function fetchData(){
    let response=await fetch('https://jsonplaceholder.typicode.com/users/2');
    console.log( await response.json());
}

fetchData();