// 1.Just copy and paste same array values into another array variable
let array1 = ["name1","name2"];
// let array2 = ["name1","name2"];
array1.push("name3");
// console.log(array1===array2);

// 2. to clone the array, we can also use slice
// let array2 = array1.slice(0)
// console.log(array2);

// 3.[].concat is used to make a new array by concating with older one
// let array2 = [].concat(array1);
// ek direct copy paste , ek slice and ek concat

// 4. New Way - spread operator
// let array2 = [...array1]
// performance wise best - slice 

let array2 = array1.slice(0).concat(["name4","name5"]);
console.log(array2);