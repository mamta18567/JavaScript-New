const users = [
    {userId: 1, firstName: "Mamta", gender:"female"},
    {userId: 2, firstName: "Ishita", gender:"female"},
    {userId: 3, firstName: "Nandini", gender:"female"},
    {userId: 4, firstName: "Gupta", gender:"female"}
];

const [user1,user2,user3,user4]=users;
// console.log(user1.firstName);
// console.log(user2.gender);
// console.log(user3);
// console.log(user4);


// nested destructuring
const [{firstName}, ,{userId}] = users;
console.log(firstName);
console.log(userId);

