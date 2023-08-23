//Iterables - String and array
const owner = "Mamta Arora"
for(let char of owner){
    console.log(char.toUpperCase());
}

const array = ["Mamta", "Ishita", "Aksh", "Gupta", "Nandini"];
for(let arr of array){
    console.log(arr);
}

// Can we do the same on Object as well ?
// No object is not iterable.

// Array like objects are those which have index and has length property.
// String is also array like object as it has index and length property

const fname = "Rahul";
console.log("Total Characters are : ",fname.length);
console.log("first character is : ",fname[0])
