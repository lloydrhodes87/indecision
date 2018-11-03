class Person {
    constructor(name = "anonymous", age = 0) {
        this.name = name;
        this.age = age;

    }
    getGreeting() {
        return `Hello my name is ${this.name} How are you?`;
    }
    getDescription() {
        return `${this.name} is ${this.age} year(s) old`; 
    }
}


class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }
    hasMajor() {
        return !!this.major;
    }
    getDescription() {
        let description = super.getDescription();
        if (this.hasMajor()) {
            description += ` Their major is ${this.major}`; 
        }
        return description;
    }
}

class Traveller extends Person {
    constructor(name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    }
    hasLocation() {
        return !!this.homeLocation;
    }
    getGreeting() {
        let greeting = super.getGreeting();
        if (this.hasLocation()) {
            greeting += ` I am visiting from ${this.homeLocation}`;
        }
        return greeting;
    }
}

const me = new Student("Lloyd Rhodes", 31, 'Music');
const other = new Student();
const jack = new Traveller("Jack Frost", 33, 'Cuba');

console.log(jack.getGreeting());

console.log(me.getDescription());
console.log(other.getDescription())
