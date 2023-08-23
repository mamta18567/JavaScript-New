// A single function to create multiple objects

function createUser(firstName, lastName, age, email, address){
    const user = {};
    user.firstName = firstName;
    user.lastName = lastName;
    user.age = age;
    user.email = email;
    user.address = address;
    user.about = function(){
        return `${this.firstName} is ${this.age} years old.`
    }
    user.is18 = function(){
        return user.age>=18
    }
    return user;
}

const user1 = createUser('Mamta','Arora',21,'mamta@gmail.com','New Nagar')
console.log(user1);
const is18 = user1.is18();
console.log(is18);
const about = user1.about()
console.log(about);

const user2 = createUser('Vanshika','Bhatanagar', 23 ,'vanshika@gmail.com','Ahemdabad')
console.log(user2);
const check = user2.is18();
console.log(check);
const aboutVanshika = user2.about()
console.log(aboutVanshika);