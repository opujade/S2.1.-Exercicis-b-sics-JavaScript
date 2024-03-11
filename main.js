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

// Exercici 5
const message = () => {
    setTimeout(() => {
        console.log('Missatge')
    }, 3000);
}

// Exercici 1.2. Operador ternari
// Exercici 1
const potConduir = (edat) => edat >= 18 ? 'Pots conduir' : 'No pots conduir';