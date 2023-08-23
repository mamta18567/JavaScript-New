function hello(){
    console.log("Hello World !")
}
// console.log(hello.name)

// JS Function - function + Object

// name property tells the function name 
// Also we can add our own new properties to it

hello.myOwnProperty = "A Unique value";

console.log(hello);
// [Function: hello] { myOwnProperty: 'A Unique value' }

console.log(hello.myOwnProperty)

// When we create a new function, it gives us some free space known as prototype which is an object.

console.log(hello.prototype) // {} or {constructor: ƒ}

// Note : Prototype is only present in function and not in object and variable

// Adding more properties through prototype
hello.prototype.props = "New Property Added"
console.log(hello.prototype) // {props: 'New Property Added', constructor: ƒ}
