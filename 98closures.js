// function outerFunc() {
//     function innerFunc(){
//         console.log("Hello World");
//     }
//     return innerFunc;
// }

// const result = outerFunc();
// result();

function printFullName(fname,lname){
    function printName(){
        console.log(fname,lname)
    }
    return printName;
}

const result = printFullName("Aksh", "Arora");
result();