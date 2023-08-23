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


// Inheritance
class Dog extends Animal{ 
    // Dog is subclass 
    constructor(name, age, speed){
        super(name, age)
        this.speed = speed;
    }

    run(){
        return `${this.name} is running at ${this.speed} kmph.`
    }

    // Also we can define the same function in sub class as in super class if we want some extra changes in the sub class function as done below - 

    eat(){
        return `I am function in sub class and ${this.name} is eating.`
    }
}

const tommy = new Dog("tommy","8", 10);
console.log(tommy);
console.log(tommy.eat());
console.log(tommy.isSuperCute());
console.log(tommy.run())

// Also we can define the same function in sub class as in super class if we want some extra changes in the sub class function 