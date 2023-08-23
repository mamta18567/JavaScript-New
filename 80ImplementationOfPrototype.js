// const userMethods = {
    // about : function(){
    //     return `${this.firstName} is ${this.age} years old.`
    // },
    // is18 : function(){
    //     return user.age>=18
//     }}

function createUser(firstName, lastName, age, email, address){
    const user = Object.create(createUser.prototype);
    user.firstName = firstName;
    user.lastName = lastName;
    user.age = age;
    user.email = email;
    user.address = address;
    return user;
}

createUser.prototype.about = function(){
    return `${this.firstName} is ${this.age} years old.`
}
createUser.prototype.is18 = function(){
    return user.age>=18
}

const user1 = createUser('Mamta','Arora',21,'mamta@gmail.com','New Nagar')
console.log(user1.about());

console.log(user1)


const user2 = createUser('Vanshika','Bhatanagar', 23 ,'vanshika@gmail.com','Ahemdabad')
console.log(user2.about())