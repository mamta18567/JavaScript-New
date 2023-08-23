const array = [1,2,3,4,5,6,7,8,9];
let newarray = array.filter((even)=>{
    return even % 2 == 0
})
console.log(newarray);

const users = [
    {userId: 1, firstName: "Mamta", gender:"female"},
    {userId: 2, firstName: "Ishita", gender:"female"},
    {userId: 3, firstName: "Nandini", gender:"female"},
    {userId: 4, firstName: "Gupta", gender:"female"},
    {userId: 4, firstName: "Gurkirat", gender:"male"}
];

// let newUsers = users.filter((user)=>{
//     user.gender == "male"
// }).map((user)=>{
//     user.firstName
// })

let newUsers = users
  .filter((user) => user.gender === "female")
  .map((user) => user.firstName);

console.log(newUsers)

