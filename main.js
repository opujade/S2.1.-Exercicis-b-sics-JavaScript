// Exercici 1.1. Arrow Functions

// Exercici 1
const add = (a, b) => a + b;

// Exercici 2
const randomNumber = () => parseInt(Math.random() * 101);

// Exercici 3
class Person {
    constructor(name) {
        this._name = name;
    }
}

const personaje = new Person('Antoni');

const greet = () => console.log(`Hola `)