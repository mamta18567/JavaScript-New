const users = ["Mamta","Ishita","Gupta","Nandini","Ritika","Guddie","Sakshi"];
const newUser = users.find((user)=>{
    return user.length==6
})
console.log(newUser);

const Weusers = [
    {userId: 1, firstName: "Mamta", gender:"female"},
    {userId: 2, firstName: "Ishita", gender:"female"},
    {userId: 3, firstName: "Nandini", gender:"female"},
    {userId: 4, firstName: "Gupta", gender:"female"},
    {userId: 5, firstName: "Gurkirat", gender:"male"}
];

const newArray = Weusers.find((user)=>{
    user.userId == 4
})
console.log(newArray);