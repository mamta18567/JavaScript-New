class createUser{
    constructor(firstName,lastName,age,email,address){ // created object
        console.log("Constructor called !")
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.email = email;
        this.address = address;
    } 

    about(){
        return `${this.firstName} is ${this.age} years old.`
    }
    is18(){
        return this.age>=18;
    }
}

const user1 = new createUser('Mamta','Arora',21,'mamta@gmail.com','New Nagar');
console.log(user1);
console.log(user1.is18())