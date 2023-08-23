function userDetail() {
    console.log(`User's name is ${this.firstName} and user's age is ${this.age}`)
}

const user1 = {
    firstName: "Mamta",
    age: 21,
    about: userDetail
}

const user2 = {
    firstName: "Ishita",
    age: 22,
    about: userDetail
}

const user3 = {
    firstName: "Gupta",
    age: 22,
    about: userDetail
}


user3.about();