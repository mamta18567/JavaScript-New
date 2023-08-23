function myfunc(a,b,...c){
    console.log(`Value of a is : ${a}`);
    console.log(`Value of b is : ${b}`);
    console.log(`Value of c is : ${c}`);
}
myfunc(3,4,5,6,7,8);

const addAll = (...a) =>{
    let sum = 0;
    for(let char of a){
       sum = sum + char;
    }
    return sum;
}
console.log(addAll(1,2,3,4,5,6,7,8,9));