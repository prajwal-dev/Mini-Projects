// chedkani with array
// let arr = [1,2,3,4,5];
// let newArr = [...arr, 10, 99, 'manas'];

// shallow copy
// shallow copy v/s deep copy
// let arr = [1, 2, 3];
// let copyArr = [...arr];
// copyArr.push(5);
// console.log(copyArr);
// console.log(arr);

// merge two arrays
// let arr1 = ['captain','dost'];
// let arr2 = ['iron man', 'spider man'];

// let mergedArr = [...arr1, ...arr2];
// console.log(mergedArr);


// spread string
// let str = 'Manas Kumar Lal';
// let arr = [...str];
// console.log(arr);


// spread in function call
// let users = ['manas', 'muskan', 'mehek'];

// function consoleThreeUsers(user1, user2, user3) {
//     console.log(user1)
//     console.log(user2)
//     console.log(user3)
// }

// consoleThreeUsers(...users);


// spread object
// let obj = {
//     name: 'Manas',
//     age: 21,
//     passion: 'bkaiti',
//     city: 'bhagalpur',
// }

// let objCopy = {
//     ...obj,
//     age: 22,
//     passion: 'teaching',
//     lifePartner: 'muskan',
// }

// console.log(objCopy)


// merge two objects

// let obj1 = {
//     name:'manas',
//     age:21,
// }

// let obj2 = {
//     name2:'muskan',
//     age2:19,
// }

// let mergeObject = {
//     ...obj1,
//     ...obj2,
// }

// console.log(mergeObject)


// rest in function parameter
// function sum(...arr) {
//     // console.log(arguments);
//     console.log(arr);
//     let sumResult = arr.reduce((acc, curr) => {
//         return acc + curr
//     })
//     return sumResult;
// }

// let output = sum(1, 2, 3, 4, 5, 6, 7, 8, 99, 100);
// console.log(output);


// destructuring in rest operator

// let arr = ["manas","muskan","mehek", 'harshit','rishav','sourav'];

// let [first, second, third, ...otherUsers] = arr;
// console.log(first)
// console.log(second)
// console.log(third)
// console.log(otherUsers)


// let obj = {
//     name:'manas',
//     age:21,
//     city:'bhagalpur',
//     passion:'bkaiti'
// }

// let {age, name, ...other} = obj
// console.log(name);
// console.log(age);
// console.log(other);