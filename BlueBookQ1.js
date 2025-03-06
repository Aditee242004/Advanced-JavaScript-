// Parent object
const person = {
    greet: function() {
        console.log(`Hello, my name is ${this.name}`);
    }
};

// Creating a new object that inherits from 'person'
const student = Object.create(person);

// Adding properties to the child object
student.name = "Alice";
student.age = 20;

// Calling inherited method
student.greet(); // Output: Hello, my name is Alice
