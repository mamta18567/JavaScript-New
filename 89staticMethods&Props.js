class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    static number = 123456789;

    static name(){
        return `this function will print name.`
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`
    }

    set fullName(fullName){
        const [firstName, lastName]= fullName.split(" ");
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

const person1 = new Person('Mamta', 'Arora', 21);
person1.fullName = "Ishita Sharma"
console.log(person1.fullName);

// Using static properties and static methods (can be directly accessed by class name)

console.log(Person.name())
console.log(Person.number)

