let fruits = ["Apple","Mango","Banana","Kiwi","Chickoo","Orange"];
console.log(fruits.length); //6

// for(let i=0; i<fruits.length;i++){
//     console.log(fruits[i]);
// }

// to print in UpperCase in new Array-
let newArray = []
for(let i=0; i<fruits.length;i++){
   newArray.push(fruits[i].toUpperCase());
}
console.log(newArray);
