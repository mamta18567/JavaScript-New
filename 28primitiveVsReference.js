// primitive VS reference data types
let num1 = 6;
let num2 = num1;

console.log("Value of num1 is: ",num1);
console.log("Vale of num2 is: ",num2);
num1++;

console.log("After Incrementing the value of num1-");
console.log("Value of num1 is: ",num1);
console.log("Vale of num2 is: ",num2);

// Reference type data types
let array1 = ["name1", "name2"];
let array2 = array1;
console.log("Value of array1 is: ",array1);
console.log("Value of array2 is: ",array2);
array1.push("name3");
console.log("Value of array1 is: ",array1);
console.log("Value of array2 is: ",array2);
