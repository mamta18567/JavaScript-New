const obj1 = {
    key1:"Value1",
    key2:"Value2"
}

// const obj2 = {}



// To create a new object 

const obj2 = Object.create(obj1);

obj2.key3 = "Value3";

console.log(obj2)
// seems it will have the properties of obj1, but as a result there will be an empty object.

// Object.create mein jo bhi object hum pass karte hain, that will be a kind of reference or yeh __proto__ ke andar save hojata hai , agar koi property missing hoti hai new object mein toh it will start finding in the proto object. It can be written as -__proto__ or [[prototype]]. [[prototype]] is acc to ecmascript documentation.
console.log(obj2.__proto__)

// So we can use Object.create in previous example as - 


// A single function to create multiple objects

// Improvement of previous code
const userMethods = {
    about : function(){
        return `${this.firstName} is ${this.age} years old.`
    },
    is18 : function(){
        return user.age>=18
    }}

function createUser(firstName, lastName, age, email, address){
    // const user = {};
    const user = Object.create(userMethods);
    // This will return an empty object as well as it will take usermethods as reference and let the object use these functions.
    user.firstName = firstName;
    user.lastName = lastName;
    user.age = age;
    user.email = email;
    user.address = address;
    user.about = userMethods.about;
    user.is18 = userMethods.is18;
    return user;
}

const user1 = createUser('Mamta','Arora',21,'mamta@gmail.com','New Nagar')
console.log(user1.about());


const user2 = createUser('Vanshika','Bhatanagar', 23 ,'vanshika@gmail.com','Ahemdabad')
console.log(user2.about())