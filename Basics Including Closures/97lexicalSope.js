const lname = "Arora";

// If the variable is not present inside the function itself, then it would check globally or in its lexical scope or we can say in its parent function. This is known as lexical scoping. 

const printName = function(){
    const fname = "Mamta";
    function fullName(){
        console.log(fname,lname);
    }
    fullName();
}

printName();