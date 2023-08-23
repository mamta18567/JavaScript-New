const person = {
    firstname : "mamta",
    age : 21
}

// const printDetails = (obj) =>{
//     console.log(obj.firstname);
//     console.log(obj.age)
// }
// printDetails(person);

const printDetails = ({firstname, age}) =>{ //parameters Destructuring
    console.log(firstname);
    console.log(age)
}
printDetails(person);
