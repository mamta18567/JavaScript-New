const about = (hobby, qual)=>{
    console.log(this.firstName, this.age, hobby, qual)
}

const user1 = {
    firstName: "Mamta",
    age: 21
}

about.call(user1,"listening Music","btech");
// undefined undefined listening Music btech