// optional chaining

const user = {
    firstName: "Mamta",
    // address: { houseNumber: 1072 } commenting it, will throw error that can't read properties of undefined 
}

console.log(user.firstName);
console.log(user?.address?.houseNumber)