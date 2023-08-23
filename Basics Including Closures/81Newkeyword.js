function createUser(firstName, age){
    this.firstName = firstName,
    this.age = age
}

createUser.prototype.about = function(){
    console.log(`Hi ${this.firstName}, ${this.age}`)
}

const user1 = new createUser("Mamta","21");

user1.about();
// hi mamta 21

