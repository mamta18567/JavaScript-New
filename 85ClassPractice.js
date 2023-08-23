class Animal {
    constructor(name, age) {
        this.name = name,
            this.age = age
    }

    eat() {
        return `${this.name} is eating.`
    }

    isSuperCute() {
        return this.age <= 1;
    }
}

const animal1 = new Animal('Dog','1')
console.log(animal1);
console.log(animal1.eat());
console.log(animal1.isSuperCute())


const animal2 = new Animal('Panda','10')
console.log(animal2);
console.log(animal2.eat());
console.log(animal2.isSuperCute())

class Dog extends Animal{
    // Dog is subclass 
}

const tommy = new Dog("tommy","3");
console.log(tommy);
console.log(tommy.eat());
console.log(tommy.isSuperCute())
