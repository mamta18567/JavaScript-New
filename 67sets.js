// To create a set

const numbers = new Set([1,2,3,4]);
console.log(numbers)

const stringSet = new Set("abc")
console.log(stringSet);

numbers.add(5);
console.log(numbers);

console.log(numbers.has(11));

// Also we can add string and array together in a set.

const newArray = new Set("abc");
newArray.add(numbers);
console.log(newArray)

// Since set is iterable so we can use for-of loop as well

for(let array of newArray){
    console.log(array);
}