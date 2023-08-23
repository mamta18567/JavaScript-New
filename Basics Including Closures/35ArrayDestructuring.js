let fruits = ["Apple","Mango","Banana","Kiwi","Chickoo","Orange"];
// let fruit1 = fruits[0];
// let fruit2 = fruits[1];
// console.log("Value of fruit 1 : ",fruit1);
// console.log("Value of fruit 2 : ",fruit2);

// Array destructuring
let[fruit1, fruit2, ...otherFruits] = fruits;
console.log("Value of fruit 1 : ",fruit1);
console.log("Value of fruit 2 : ",fruit2);
console.log("leftout fruits",otherFruits)

