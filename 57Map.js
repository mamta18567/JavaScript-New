const numbers = [1,2,3,4,5,6];

const square = function(number){
    return number*2;
}
numbers.map(square)
// const ans = numbers.map(square);
// console.log(ans);

// console.log( numbers.map(square));
const users = [
    {userId: 1, firstName: "Mamta", gender:"female"},
    {userId: 2, firstName: "Ishita", gender:"female"},
    {userId: 3, firstName: "Nandini", gender:"female"},
    {userId: 4, firstName: "Gupta", gender:"female"},
    
];
const arr=users.map((user)=>{
    return user.firstName;
});

console.log(arr)

const users1 = [
    {userId: 1, firstName: "Mamta", gender:"female"},
    {userId: 2, firstName: "Ishita", gender:"female"},
    {userId: 3, firstName: "Nandini", gender:"female"},
    {userId: 4, firstName: "Gupta", gender:"female"},
    
];

const newArray = users1.forEach((user)=>{
    return user.firstName
})

console.log(newArray);
