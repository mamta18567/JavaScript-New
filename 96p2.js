let foo = "foo";
console.log(foo); // foo

function getFullName(firstName, lastName){
    console.log(arguments); // [Arguments] { '0': 'Mamta', '1': 'Arora' }
    let myVar = "Inside Function";
    console.log(myVar); // Inside Function
    const fullName = firstName + " " + lastName;
    return fullName;
}

const personName = getFullName("Mamta","Arora");
console.log(personName); // Mamta Arora