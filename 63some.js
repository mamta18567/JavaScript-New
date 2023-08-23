const Weusers = [
    {userId: 1, firstName: "Mamta", gender:"female"},
    {userId: 2, firstName: "Ishita", gender:"female"},
    {userId: 3, firstName: "Nandini", gender:"female"},
    {userId: 4, firstName: "Gupta", gender:"female"},
    {userId: 4, firstName: "Gurkirat", gender:"male"}
];

const checkGender = Weusers.some((user)=>{
    return user.gender == "female";
})
console.log(checkGender);