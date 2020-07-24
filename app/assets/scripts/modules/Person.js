class Person {
    constructor(firstName, lastName, color){
        this.firstName = firstName;
        this.lastName = lastName;
        this.color = color;
    }
    greet() {
        console.log(`Hello! My name is ${this.firstName}`);
    }
}

export default Person;