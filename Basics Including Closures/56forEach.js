const numbers = [4,5,6,7,8];

const multiply = (number, index) =>{
    console.log(`Index is ${index}`);
    console.log(`${number}*2 = ${number*2}`)
}

// multiply(numbers[1],0)

// Now we have to do the same for each element of array, so we will use for loop.

// for(let i=0; i<numbers.length;i++){
//     multiply(numbers[i], i)
// }

numbers.forEach(multiply);

const array = [1,2,3,4,5];
array.forEach((number)=>{
    console.log(`${number}*2 = ${number*2} `)
});

const users = [
    {userId: 1, firstName: "Mamta", gender:"female"},
    {userId: 2, firstName: "Ishita", gender:"female"},
    {userId: 3, firstName: "Nandini", gender:"female"},
    {userId: 4, firstName: "Gupta", gender:"female"}
];

users.forEach((user)=>{
    console.log(user.firstName);
})