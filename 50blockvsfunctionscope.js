{
    let firstname = "Mamta";
}
// console.log(firstname); // Error : firstname is not defined because let has block scope so it can't be accessed outside the block.

{
    const firstname = "Mamta";
}
// console.log(firstname); // Error : firstname is not defined because const has block scope so it can't be accessed outside the block.

{
    var firstname = "Mamta Arora";
}
console.log(firstname); // Mamta Arora. It will give output as var has functional scope. poori file mein kahi bhi use kar skte hain

function helloWorld(){
    if(true){
        // console.log(var1); // Cannot access 'var1' before initialization
        let var1 = "hello world";
        console.log(var1); // hello world
    }
    console.log(var1); // Error : var1 is not defined
}
helloWorld();