const array = [1,2,3,4,5];
const sum = array.reduce((accumulator, currentValue)=>{
    return accumulator + currentValue;
})
console.log(sum);

// accumulator  currentValue  return 
// 1            2             3
// 3            3             6
// 6            4             10
// 10           5             15

// So we can say in first call, accumulator mein jaati hai 1st value of array, currentValue mein jaati hai second value of array and then in further calls accumulator mein jaati hai returned value and current value includes the next array element until it reaches end.

const userCart = [
    {productId: 1, productName: "laptop",price: 50000},
    {productId: 1, productName: "tv",price: 35000},
    {productId: 1, productName: "Washing Maching",price: 25000},
    {productId: 1, productName: "mobile",price: 20000}
]

const total = userCart.reduce((totalPrice, currentProduct)=>{
    return totalPrice + currentProduct.price
},0)
console.log(total);