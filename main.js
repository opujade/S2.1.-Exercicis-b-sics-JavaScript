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

    get name() {
        return this._name;
    }

    greet = () => console.log(this.name);
}

// Exercici 4
const printNumbers = (arrayNumeros) => {
    for (let i = 0; i < arrayNumeros.length; i++) {
        console.log(arrayNumeros[i]);
    }
}