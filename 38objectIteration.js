const person = {
    name : "Mamta",
    age : 21,
    hobbies : ["cooking","sleeping","listening music"] 
}

for(let key in person){
    console.log(key);
} // name age hobbies

// If we want to access the values of an object what shall we do is that we can use bracket notation in order to access the value of particular key. We can't use dot notation because it would be like person.key which will search for key named property in object person. 

for(let key in person){
    // console.log(person[key]);
} // Mamta 21 (3) ['cooking', 'sleeping', 'listening music']


// for key and value pair
for(let key in person){
    // console.log(`${key}: ${person[key]}`);
}

//Object.keys 
console.log(Object.keys(person));
// for(let key of Object.keys(person)){
//     console.log(person[key]);
// }