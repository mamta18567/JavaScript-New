function createUser(firstName, lastName, age, email, address){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.email = email;
    this.address = address;
    return;
}

createUser.prototype.about = function(){
    return `${this.firstName} is ${this.age} years old.`;
}

createUser.prototype.is18 = function(){
    return user.age>=18;
}

const user1 = new createUser('Mamta','Arora',21,'mamta@gmail.com','New Nagar')
console.log(user1);
console.log(user1.about())

// If we want to check the keys of our object , then we simply use for in loop but the thing to be noticed here is that the result will also contain the __proto__ keys - 
for(let keys in user1){
    console.log(keys);
} // firstName lastName age email address about is18

// But if we want to see only the properties of object itself then we can use hasOwnProperty
for(let keys in user1){
    if(user1.hasOwnProperty(keys)){
        console.log(keys)
    }
}