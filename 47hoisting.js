//read readme before starting
hello();

function hello(){
    console.log("Hii !!");
}

// if we try accessing helloVar here , it would not work.

// helloVar(); // Uncaught ReferenceError: Cannot access 'helloVar' before initialization

const helloVar = function(){
    console.log("Function expression")
}
helloVar();

// If talking about variables, then hoisting doesn't work 

console.log(hello1); // undefined
var hello1 = "Myname";
console.log(hello1);

// In case of var, it gives undefined while in case of let and const it gives error.
// console.log(fname, lname); // Cannot access 'fname' before initialization
let fname = "Mamta";
const lname = "Arora";
console.log(fname, lname); 