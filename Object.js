const personPrototype = {
    greeting: function() {
        console.log(Hello, my name is ${this.name}.);
    }
};
    const john = Object.create(personPrototype);
    john.name = "Aditee";
    john.greeting();