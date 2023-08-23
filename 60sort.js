const numbers = [5,9,25,14,12];
numbers.sort(); 
console.log(numbers);
// [ 12, 14, 25, 5, 9 ] , this is because of ASCII value of first number.

const users = ["Mamta", "naNDINI", "Ishita", "Gupta", "Nisha", "Bhagesh"];
users.sort();
console.log(users);
// [ 'Bhagesh', 'Gupta', 'Ishita', 'Mamta', 'Nandini' ]

// Sort() checks for the first character only and will sort the array on the basis of it. In case of numbers, it will check for the ASCII value of the number's first digit only. Numbers will be sorted on the basis of ASCII value while strings will be sorted on the basis of first character and first preference would be given to the capital letters only. 

const numbersArray = [5,9,25,14,12];
numbersArray.sort((a,b)=>{
    return a-b;
})
console.log(numbersArray);

const userCart = [
    {productId: 1, productName: "laptop",price: 50000},
    {productId: 2, productName: "tv",price: 35000},
    {productId: 3, productName: "Washing Maching",price: 25000},
    {productId: 4, productName: "mobile",price: 20000}
]

const newVar = userCart.sort((a,b)=>{
    // console.log(a,b);
    return a.price - b.price;
}).map((user)=>{
    console.log(user)
    return user.price
})

console.log(newVar);
