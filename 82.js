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