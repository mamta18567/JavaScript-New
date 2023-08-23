// const greetings = () =>{
//     console.log("Good Afternoon !")
// }

// greetings.call();

function about (hobby, qual){
    console.log(this.firstName, this.age, hobby, qual)
}

const user1 = {
    firstName: "Mamta",
    age: 21
}


const user2 = {
    firstName: "Ishita",
    age: 22,
}

// call
// about.call(user1,"listening Music","btech");

// apply
// about.apply(user1,["listening Music","IT"])

// bind
const result = about.bind(user1,"listening Music","btech")
result()


