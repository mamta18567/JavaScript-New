console.log(this); // window
console.log(window); // window
console.log(myfunction); // function(){....}
console.log(fullName); // undefined

function myfunction(){
    console.log("Inside Function !")
}

var firstName = "Mamta";
var lastName = "Arora";
var fullName = `${firstName} ${lastName}`;
console.log(fullName); // Mamta Arora