const person = {
    name : "Mamta",
    age : 21,
    "person hobbies" : ["cooking","sleeping","listening music"] 
}

console.log(person["person hobbies"]);

//If we have a key separated by a space, then we can't use dot notation in order to access the object property.That's why we need to use bracket notation like objectName["propertyName"].

//Also in case when we have to insert a property in an object by its value then bracket notation is very useful like 
const key = "email"
person[key]="mamtaroraksh@gmail.com";
console.log(person);