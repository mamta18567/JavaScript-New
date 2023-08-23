const person = {
    firstname : "Mamta",
    age : 21,
    1 : "one"
}

console.log(person[1]);

// In js, even the number valued key will be converted to string. As i have written 1 ,js will convert the 1 into the string as well. We can check it by using the typeof operator.

console.log(typeof person[1]); // string

// to create a map -
const Newperson = new Map();
Newperson.set('firstName', "Aksh Arora");
Newperson.set('age', 8);
Newperson.set(1,'one');
Newperson.set(['name', 'fame'], 'high');

// to print a map - 
console.log(Newperson);
// Also we can add any kind of key to it say array , object, string etc.

// to get a value of a particular key in a map - 
console.log(Newperson.get(1));
console.log(Newperson.get("age"));
console.log(Newperson.get("firstName"));
console.log(Newperson.get(['name', 'fame'])); // 


// to iterate through map -
for(let key of Newperson.keys()){
    console.log(typeof key, key)
}

for(let key of Newperson){
    console.log(typeof key);
}

// This will return object but if we check this for Array then what it will return?

for(let key of Newperson){
    console.log(Array.isArray(key));
} // this will return true

// Array Destructuring in order to get the key value pair from the Map

for(let [key, value] of Newperson){
    console.log(key, value);
}
// firstName Aksh Arora
// age 8
// 1 'one'
// (2) ['name', 'fame'] 'high'

// How can we add the new key value properties into an existing object using Map and not writing it manually.

const people = {
    id: 1,
    firstname: "Mamta"
}

const user = new Map();
user.set(people, {age : 8, gender: "female"})

console.log(user); // {{…} => {…}} Mapped Objects
console.log(people); // 1
console.log(user.get(people).gender);
